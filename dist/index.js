'use strict';

var React = require('react');
var jsxRuntime = require('react/jsx-runtime');

function _interopDefault (e) { return e && e.__esModule ? e : { default: e }; }

var React__default = /*#__PURE__*/_interopDefault(React);

// src/components/Button/Button.tsx
var Button = React__default.default.forwardRef(
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
    return /* @__PURE__ */ jsxRuntime.jsxs(
      "button",
      {
        ref,
        className: classes,
        disabled: disabled || loading,
        ...rest,
        children: [
          leftIcon && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "rl-Button__icon", children: leftIcon }),
          /* @__PURE__ */ jsxRuntime.jsx("span", { className: "rl-Button__content", children }),
          rightIcon && /* @__PURE__ */ jsxRuntime.jsx("span", { className: "rl-Button__icon", children: rightIcon }),
          loading && /* @__PURE__ */ jsxRuntime.jsx(
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

exports.Button = Button;
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map