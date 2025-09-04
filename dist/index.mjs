import React from 'react';
import { jsxs, jsx } from 'react/jsx-runtime';

// src/components/Button/Button.tsx
var Button = React.forwardRef(
  ({
    variant = "primary",
    size = "md",
    block = false,
    loading = false,
    leftIcon,
    rightIcon,
    loadingLabel = "Loading\u2026",
    className,
    children,
    disabled,
    ...rest
  }, ref) => {
    const classes = [
      "rl-Button",
      `rl-Button--variant-${variant}`,
      `rl-Button--size-${size}`,
      block && "rl-Button--block",
      (disabled || loading) && "rl-Button--disabled",
      loading && "rl-Button--loading",
      className
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ jsxs(
      "button",
      {
        ref,
        className: classes,
        disabled: disabled || loading,
        ...rest,
        children: [
          leftIcon && /* @__PURE__ */ jsx("span", { className: "rl-Button__icon", children: leftIcon }),
          /* @__PURE__ */ jsx("span", { className: "rl-Button__content", children }),
          rightIcon && /* @__PURE__ */ jsx("span", { className: "rl-Button__icon", children: rightIcon }),
          loading && /* @__PURE__ */ jsx(
            "span",
            {
              className: "rl-Button__spinner",
              role: "status",
              "aria-live": "polite",
              "aria-label": loadingLabel
            }
          )
        ]
      }
    );
  }
);
Button.displayName = "Button";

export { Button };
//# sourceMappingURL=index.mjs.map
//# sourceMappingURL=index.mjs.map