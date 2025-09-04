import React from "react";
import "./button.css";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "danger";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  block?: boolean;
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  /** Etiqueta accesible para el spinner */
  loadingLabel?: string;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      block = false,
      loading = false,
      leftIcon,
      rightIcon,
      loadingLabel = "Loading…",
      className,
      children,
      disabled,
      ...rest
    },
    ref
  ) => {
    const classes = [
      "rl-Button",
      `rl-Button--variant-${variant}`,
      `rl-Button--size-${size}`,
      block && "rl-Button--block",
      (disabled || loading) && "rl-Button--disabled",
      loading && "rl-Button--loading",
      className
    ]
      .filter(Boolean)
      .join(" ");

    return (
      <button
        ref={ref}
        className={classes}
        disabled={disabled || loading}
        {...rest}
      >
        {leftIcon && <span className="rl-Button__icon">{leftIcon}</span>}
        <span className="rl-Button__content">{children}</span>
        {rightIcon && <span className="rl-Button__icon">{rightIcon}</span>}
        {loading && (
          <span
            className="rl-Button__spinner"
            role="status"
            aria-live="polite"
            aria-label={loadingLabel}
          />
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
