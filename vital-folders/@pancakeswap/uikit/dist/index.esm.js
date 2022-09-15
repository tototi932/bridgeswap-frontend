import React, { isValidElement, cloneElement, Children, useRef, useEffect, useState, useMemo, useReducer, useCallback, createContext, useContext } from 'react';
import styled, { keyframes, css, useTheme, ThemeProvider, createGlobalStyle } from 'styled-components';
import { space, typography, layout, variant as variant$1, background, border, position, flexbox, grid, color } from 'styled-system';
import get from 'lodash/get';
import uniqueId from 'lodash/uniqueId';
import noop from 'lodash/noop';
import debounce from 'lodash/debounce';
import { createPortal } from 'react-dom';
import { usePopper } from 'react-popper';
import throttle from 'lodash/throttle';
import { Link as Link$1, NavLink, useLocation } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __spreadArray(to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
}

var getThemeValue = function (path, fallback) {
    return function (theme) {
        return get(theme, path, fallback);
    };
};

var rotate$1 = keyframes(templateObject_1$Y || (templateObject_1$Y = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var spinStyle = css(templateObject_2$n || (templateObject_2$n = __makeTemplateObject(["\n  animation: ", " 2s linear infinite;\n"], ["\n  animation: ", " 2s linear infinite;\n"])), rotate$1);
var Svg = styled.svg(templateObject_3$b || (templateObject_3$b = __makeTemplateObject(["\n  align-self: center; // Safari fix\n  fill: ", ";\n  flex-shrink: 0;\n  ", "\n  ", "\n"], ["\n  align-self: center; // Safari fix\n  fill: ", ";\n  flex-shrink: 0;\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme, color = _a.color;
    return getThemeValue("colors." + color, color)(theme);
}, function (_a) {
    var spin = _a.spin;
    return spin && spinStyle;
}, space);
Svg.defaultProps = {
    color: "text",
    width: "20px",
    xmlns: "http://www.w3.org/2000/svg",
    spin: false,
};
var templateObject_1$Y, templateObject_2$n, templateObject_3$b;

var Icon$1M = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM15.88 8.29L10 14.17L8.12 12.29C7.73 11.9 7.1 11.9 6.71 12.29C6.32 12.68 6.32 13.31 6.71 13.7L9.3 16.29C9.69 16.68 10.32 16.68 10.71 16.29L17.3 9.7C17.69 9.31 17.69 8.68 17.3 8.29C16.91 7.9 16.27 7.9 15.88 8.29Z" })));
};

var Icon$1L = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 7C12.55 7 13 7.45 13 8V12C13 12.55 12.55 13 12 13C11.45 13 11 12.55 11 12V8C11 7.45 11.45 7 12 7ZM11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20ZM13 17H11V15H13V17Z" })));
};

var Icon$1K = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22ZM12 4C16.42 4 20 7.58 20 12C20 13.85 19.37 15.55 18.31 16.9L7.1 5.69C8.45 4.63 10.15 4 12 4ZM5.69 7.1L16.9 18.31C15.55 19.37 13.85 20 12 20C7.58 20 4 16.42 4 12C4 10.15 4.63 8.45 5.69 7.1Z" })));
};

var Icon$1J = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M11 7H13V9H11V7ZM12 17C12.55 17 13 16.55 13 16V12C13 11.45 12.55 11 12 11C11.45 11 11 11.45 11 12V16C11 16.55 11.45 17 12 17ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" })));
};

var getColor = function (_a) {
    var color = _a.color, theme = _a.theme;
    return getThemeValue("colors." + color, color)(theme);
};
var getFontSize = function (_a) {
    var fontSize = _a.fontSize, small = _a.small;
    return small ? "14px" : fontSize || "16px";
};
var Text = styled.div(templateObject_1$X || (templateObject_1$X = __makeTemplateObject(["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: 1.5;\n  ", "\n  ", "\n\n  ", "\n  ", "\n  ", "\n"], ["\n  color: ", ";\n  font-size: ", ";\n  font-weight: ", ";\n  line-height: 1.5;\n  ", "\n  ",
    "\n\n  ", "\n  ", "\n  ", "\n"])), getColor, getFontSize, function (_a) {
    var bold = _a.bold;
    return (bold ? 600 : 400);
}, function (_a) {
    var textTransform = _a.textTransform;
    return textTransform && "text-transform: " + textTransform + ";";
}, function (_a) {
    var ellipsis = _a.ellipsis;
    return ellipsis &&
        "white-space: nowrap;\n    overflow: hidden;\n    text-overflow: ellipsis;";
}, space, typography, layout);
Text.defaultProps = {
    color: "primary",
    small: false,
    ellipsis: false,
};
var templateObject_1$X;

var TooltipText = styled(Text)(templateObject_1$W || (templateObject_1$W = __makeTemplateObject(["\n  text-decoration: ", ";\n  text-underline-offset: 0.1em;\n"], ["\n  text-decoration: ", ";\n  text-underline-offset: 0.1em;\n"])), function (_a) {
    var theme = _a.theme;
    return "underline dotted " + theme.colors.textSubtle;
});
var templateObject_1$W;

var getExternalLinkProps = function () { return ({
    target: "_blank",
    rel: "noreferrer noopener",
}); };

var scales$8 = {
    MD: "md",
    SM: "sm",
    XS: "xs",
};
var variants$4 = {
    PRIMARY: "primary",
    SECONDARY: "secondary",
    TERTIARY: "tertiary",
    TEXT: "text",
    DANGER: "danger",
    SUBTLE: "subtle",
    SUCCESS: "success",
};

var _a$4, _b$2;
var scaleVariants$1 = (_a$4 = {},
    _a$4[scales$8.MD] = {
        height: "48px",
        padding: "0 24px",
    },
    _a$4[scales$8.SM] = {
        height: "32px",
        padding: "0 16px",
    },
    _a$4[scales$8.XS] = {
        height: "20px",
        fontSize: "12px",
        padding: "0 8px",
    },
    _a$4);
var styleVariants$2 = (_b$2 = {},
    _b$2[variants$4.PRIMARY] = {
        backgroundColor: "primary",
        color: "white",
    },
    _b$2[variants$4.SECONDARY] = {
        backgroundColor: "transparent",
        border: "2px solid",
        borderColor: "primary",
        boxShadow: "none",
        color: "primary",
        ":disabled": {
            backgroundColor: "transparent",
        },
    },
    _b$2[variants$4.TERTIARY] = {
        backgroundColor: "tertiary",
        boxShadow: "none",
        color: "primary",
    },
    _b$2[variants$4.SUBTLE] = {
        backgroundColor: "textSubtle",
        color: "backgroundAlt",
    },
    _b$2[variants$4.DANGER] = {
        backgroundColor: "failure",
        color: "white",
    },
    _b$2[variants$4.SUCCESS] = {
        backgroundColor: "success",
        color: "white",
    },
    _b$2[variants$4.TEXT] = {
        backgroundColor: "transparent",
        color: "primary",
        boxShadow: "none",
    },
    _b$2);

var getDisabledStyles = function (_a) {
    var $isLoading = _a.$isLoading, theme = _a.theme;
    if ($isLoading === true) {
        return "\n      &:disabled,\n      &.pancake-button--disabled {\n        cursor: not-allowed;\n      }\n    ";
    }
    return "\n    &:disabled,\n    &.pancake-button--disabled {\n      background-color: " + theme.colors.backgroundDisabled + ";\n      border-color: " + theme.colors.backgroundDisabled + ";\n      box-shadow: none;\n      color: " + theme.colors.textDisabled + ";\n      cursor: not-allowed;\n    }\n  ";
};
/**
 * This is to get around an issue where if you use a Link component
 * React will throw a invalid DOM attribute error
 * @see https://github.com/styled-components/styled-components/issues/135
 */
var getOpacity = function (_a) {
    var _b = _a.$isLoading, $isLoading = _b === void 0 ? false : _b;
    return $isLoading ? ".5" : "1";
};
var StyledButton = styled.button(templateObject_1$V || (templateObject_1$V = __makeTemplateObject(["\n  align-items: center;\n  border: 0;\n  border-radius: 16px;\n  box-shadow: 0px -1px 0px 0px rgba(14, 14, 44, 0.4) inset;\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 600;\n  justify-content: center;\n  letter-spacing: 0.03em;\n  line-height: 1;\n  opacity: ", ";\n  outline: 0;\n  transition: background-color 0.2s, opacity 0.2s;\n\n  &:hover:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled):not(:active) {\n    opacity: 0.65;\n  }\n\n  &:active:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled) {\n    opacity: 0.85;\n    transform: translateY(1px);\n    box-shadow: none;\n  }\n\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  align-items: center;\n  border: 0;\n  border-radius: 16px;\n  box-shadow: 0px -1px 0px 0px rgba(14, 14, 44, 0.4) inset;\n  cursor: pointer;\n  display: inline-flex;\n  font-family: inherit;\n  font-size: 16px;\n  font-weight: 600;\n  justify-content: center;\n  letter-spacing: 0.03em;\n  line-height: 1;\n  opacity: ", ";\n  outline: 0;\n  transition: background-color 0.2s, opacity 0.2s;\n\n  &:hover:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled):not(:active) {\n    opacity: 0.65;\n  }\n\n  &:active:not(:disabled):not(.pancake-button--disabled):not(.pancake-button--disabled) {\n    opacity: 0.85;\n    transform: translateY(1px);\n    box-shadow: none;\n  }\n\n  ", "\n  ",
    "\n  ",
    "\n  ", "\n  ", "\n"])), getOpacity, getDisabledStyles, variant$1({
    prop: "scale",
    variants: scaleVariants$1,
}), variant$1({
    variants: styleVariants$2,
}), layout, space);
var templateObject_1$V;

var Button = function (props) {
    var startIcon = props.startIcon, endIcon = props.endIcon, external = props.external, className = props.className, isLoading = props.isLoading, disabled = props.disabled, children = props.children, rest = __rest(props, ["startIcon", "endIcon", "external", "className", "isLoading", "disabled", "children"]);
    var internalProps = external ? getExternalLinkProps() : {};
    var isDisabled = isLoading || disabled;
    var classNames = className ? [className] : [];
    if (isLoading) {
        classNames.push("pancake-button--loading");
    }
    if (isDisabled && !isLoading) {
        classNames.push("pancake-button--disabled");
    }
    return (React.createElement(StyledButton, __assign({ "$isLoading": isLoading, className: classNames.join(" "), disabled: isDisabled }, internalProps, rest),
        React.createElement(React.Fragment, null,
            isValidElement(startIcon) &&
                cloneElement(startIcon, {
                    mr: "0.5rem",
                }),
            children,
            isValidElement(endIcon) &&
                cloneElement(endIcon, {
                    ml: "0.5rem",
                }))));
};
Button.defaultProps = {
    isLoading: false,
    external: false,
    variant: variants$4.PRIMARY,
    scale: scales$8.MD,
    disabled: false,
};

var IconButton = styled(Button)(templateObject_1$U || (templateObject_1$U = __makeTemplateObject(["\n  padding: 0;\n  width: ", ";\n"], ["\n  padding: 0;\n  width: ", ";\n"])), function (_a) {
    var scale = _a.scale;
    return (scale === "sm" ? "32px" : "48px");
});
var templateObject_1$U;

var Icon$1I = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M18 13H13V18C13 18.55 12.55 19 12 19C11.45 19 11 18.55 11 18V13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H11V6C11 5.45 11.45 5 12 5C12.55 5 13 5.45 13 6V11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z" })));
};

var Icon$1H = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M19 11H7.82998L12.71 6.12C13.1 5.73 13.1 5.09 12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7L4.70998 11.29C4.31998 11.68 4.31998 12.31 4.70998 12.7L11.3 19.29C11.69 19.68 12.32 19.68 12.71 19.29C13.1 18.9 13.1 18.27 12.71 17.88L7.82998 13H19C19.55 13 20 12.55 20 12C20 11.45 19.55 11 19 11Z" })));
};

var Icon$1G = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M11 5V16.17L6.11997 11.29C5.72997 10.9 5.08997 10.9 4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7L11.29 19.29C11.68 19.68 12.31 19.68 12.7 19.29L19.29 12.7C19.68 12.31 19.68 11.68 19.29 11.29C18.9 10.9 18.27 10.9 17.88 11.29L13 16.17V5C13 4.45 12.55 4 12 4C11.45 4 11 4.45 11 5Z" })));
};

var Icon$1F = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M8.71005 11.71L11.3001 14.3C11.6901 14.69 12.3201 14.69 12.7101 14.3L15.3001 11.71C15.9301 11.08 15.4801 10 14.5901 10H9.41005C8.52005 10 8.08005 11.08 8.71005 11.71Z" })));
};

var Icon$1E = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M8.71005 12.29L11.3001 9.69997C11.6901 9.30997 12.3201 9.30997 12.7101 9.69997L15.3001 12.29C15.9301 12.92 15.4801 14 14.5901 14H9.41005C8.52005 14 8.08005 12.92 8.71005 12.29Z" })));
};

var Icon$1D = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M5 13H16.17L11.29 17.88C10.9 18.27 10.9 18.91 11.29 19.3C11.68 19.69 12.31 19.69 12.7 19.3L19.29 12.71C19.68 12.32 19.68 11.69 19.29 11.3L12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7C10.91 5.09 10.91 5.72 11.3 6.11L16.17 11H5C4.45 11 4 11.45 4 12C4 12.55 4.45 13 5 13Z" })));
};

var Icon$1C = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M13 19V7.83001L17.88 12.71C18.27 13.1 18.91 13.1 19.3 12.71C19.69 12.32 19.69 11.69 19.3 11.3L12.71 4.71001C12.32 4.32001 11.69 4.32001 11.3 4.71001L4.69997 11.29C4.30997 11.68 4.30997 12.31 4.69997 12.7C5.08997 13.09 5.71997 13.09 6.10997 12.7L11 7.83001V19C11 19.55 11.45 20 12 20C12.55 20 13 19.55 13 19Z" })));
};

var Icon$1B = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 6V7.79C12 8.24 12.54 8.46 12.85 8.14L15.64 5.35C15.84 5.15 15.84 4.84 15.64 4.64L12.85 1.85C12.54 1.54 12 1.76 12 2.21V4C7.58 4 4 7.58 4 12C4 13.04 4.2 14.04 4.57 14.95C4.84 15.62 5.7 15.8 6.21 15.29C6.48 15.02 6.59 14.61 6.44 14.25C6.15 13.56 6 12.79 6 12C6 8.69 8.69 6 12 6ZM17.79 8.71C17.52 8.98 17.41 9.4 17.56 9.75C17.84 10.45 18 11.21 18 12C18 15.31 15.31 18 12 18V16.21C12 15.76 11.46 15.54 11.15 15.86L8.36 18.65C8.16 18.85 8.16 19.16 8.36 19.36L11.15 22.15C11.46 22.46 12 22.24 12 21.8V20C16.42 20 20 16.42 20 12C20 10.96 19.8 9.96 19.43 9.05C19.16 8.38 18.3 8.2 17.79 8.71Z" })));
};

var Icon$1A = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 16 16" }, props),
        React.createElement("circle", { cx: "8", cy: "8", r: "8", fill: "#F0B90B" }),
        React.createElement("path", { d: "M5.01656 8.00006L3.79256 9.23256L2.56006 8.00006L3.79256 6.76756L5.01656 8.00006ZM8.00006 5.01656L10.1081 7.12456L11.3406 5.89206L9.23256 3.79256L8.00006 2.56006L6.76756 3.79256L4.66806 5.89206L5.90056 7.12456L8.00006 5.01656ZM12.2076 6.76756L10.9836 8.00006L12.2161 9.23256L13.4401 8.00006L12.2076 6.76756ZM8.00006 10.9836L5.89206 8.87556L4.66806 10.1081L6.77606 12.2161L8.00006 13.4401L9.23256 12.2076L11.3406 10.0996L10.1081 8.87556L8.00006 10.9836ZM8.00006 9.23256L9.23256 8.00006L8.00006 6.76756L6.76756 8.00006L8.00006 9.23256Z", fill: "#FFFDFA" })));
};

var Icon$1z = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 64 64" }, props),
        React.createElement("path", { d: "M58.6666 34.1665C58.6666 48.8523 46.7275 59.6665 31.9999 59.6665C17.2723 59.6665 5.33325 48.8523 5.33325 34.1665C5.33325 19.4808 17.2723 8.6665 31.9999 8.6665C46.7275 8.6665 58.6666 19.4808 58.6666 34.1665Z", fill: "#EB8C00" }),
        React.createElement("path", { d: "M58.6666 29.8335C58.6666 44.5192 46.7275 55.3335 31.9999 55.3335C17.2723 55.3335 5.33325 44.5192 5.33325 29.8335C5.33325 15.1477 17.2723 4.3335 31.9999 4.3335C46.7275 4.3335 58.6666 15.1477 58.6666 29.8335Z", fill: "#FFD800" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M50.4313 11.0848C48.0923 9.01961 45.3538 7.36511 42.3351 6.21094L7.60376 40.5648C8.9535 43.3887 10.8247 45.9001 13.0998 48.0105L50.4313 11.0848ZM24.6139 54.2485C22.7419 53.762 20.9537 53.0928 19.2734 52.259L55.1875 16.7354C56.1366 18.2849 56.918 19.9495 57.5084 21.7116L24.6139 54.2485Z", fill: "#FFE971" }),
        React.createElement("path", { d: "M53.6667 29.5002C53.6667 41.2698 44.0409 49.6668 32.1667 49.6668C20.2926 49.6668 10.6667 41.2698 10.6667 29.5002C10.6667 17.7305 20.2926 9.3335 32.1667 9.3335C44.0409 9.3335 53.6667 17.7305 53.6667 29.5002Z", fill: "#FFC700" }),
        React.createElement("path", { d: "M51.6667 20.6615C45.1982 12.2514 33.2898 9.7153 23.8129 15.1469C14.5027 20.483 10.7276 31.6814 14.4875 41.3335C12.0783 38.0902 10.6667 34.0691 10.6667 29.5527C10.6667 17.7524 20.303 9.3335 32.19 9.3335C40.7965 9.33349 48.2231 13.7468 51.6667 20.6615Z", fill: "#FFAF00" }),
        React.createElement("path", { d: "M23.4077 30.5L19.8827 34.0117L16.3333 30.5L19.8827 26.9883L23.4077 30.5ZM31.9999 21.9992L38.0708 28.0055L41.6202 24.4938L35.5494 18.5117L31.9999 15L28.4504 18.5117L22.4041 24.4938L25.9536 28.0055L31.9999 21.9992ZM44.1171 26.9883L40.5921 30.5L44.1416 34.0117L47.6666 30.5L44.1171 26.9883ZM31.9999 39.0008L25.9291 32.9945L22.4041 36.5063L28.4749 42.5125L31.9999 46L35.5494 42.4883L41.6202 36.482L38.0708 32.9945L31.9999 39.0008ZM31.9999 34.0117L35.5494 30.5L31.9999 26.9883L28.4504 30.5L31.9999 34.0117Z", fill: "#191326" })));
};

var Icon$1y = function (props) {
    var id = uniqueId("svg");
    return (React.createElement(Svg, __assign({ viewBox: "0 0 64 64" }, props),
        React.createElement("g", { clipPath: "url(#" + id + ")" },
            React.createElement("rect", { width: "32", height: "40", rx: "5.33333", transform: "matrix(-0.866025 -0.5 -0.5 0.866025 65.6667 24.29)", fill: "#751c0b" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M47.988 26.8647C48.913 25.2625 50.9618 24.7135 52.5641 25.6386C54.3798 26.6868 54.7973 29.1264 53.4335 30.7188L49.9995 34.7284C51.4808 37.0281 52.089 39.7267 50.7938 41.97C49.6296 43.9866 47.3505 44.856 44.9724 44.9153C42.5675 44.9753 39.8188 44.2341 37.2483 42.7501C34.6778 41.266 32.6615 39.2561 31.5111 37.1434C30.3734 35.0542 29.9868 32.6458 31.1511 30.6292C32.4387 28.3989 35.0576 27.5731 37.7711 27.694L39.534 22.694C40.2312 20.7167 42.5527 19.8585 44.3684 20.9068C45.9706 21.8318 46.5196 23.8807 45.5945 25.4829L43.4518 29.1943C43.8691 29.3931 44.2848 29.6114 44.6966 29.8492C45.0944 30.0788 45.4782 30.3206 45.847 30.573L47.988 26.8647ZM39.6099 34.0874C39.0216 35.1064 37.9767 35.6046 37.2761 35.2001C36.5755 34.7956 36.4845 33.6416 37.0728 32.6226C37.6612 31.6035 38.7061 31.1053 39.4067 31.5098C40.1073 31.9143 40.1982 33.0683 39.6099 34.0874ZM43.9649 39.0619C44.6655 39.4663 45.7104 38.9681 46.2987 37.9491C46.8871 36.93 46.7961 35.776 46.0955 35.3715C45.3949 34.9671 44.35 35.4653 43.7616 36.4843C43.1733 37.5034 43.2643 38.6574 43.9649 39.0619Z", fill: "#523193" }),
            React.createElement("path", { opacity: "0.7", d: "M49.6666 15.0524L42.5726 10.9566C40.0217 9.48387 36.7599 10.3579 35.2871 12.9088L20.6205 38.3122C19.1477 40.8631 20.0217 44.1249 22.5726 45.5976L26.7339 48.0002L44.3333 48.0002C47.2788 48.0002 49.6666 45.6124 49.6666 42.6668L49.6666 15.0524Z", fill: "#452A7A" }),
            React.createElement("path", { d: "M33.7371 52.0434L43.094 46.6412C45.6449 45.1684 46.5189 41.9066 45.0461 39.3557L32.532 17.6807L20.6205 38.3121C19.1477 40.863 20.0217 44.1249 22.5726 45.5976L33.7371 52.0434Z", fill: "#452A7A" }),
            React.createElement("rect", { x: "16", y: "6.3335", width: "32", height: "40", rx: "5.33333", fill: "#9A6AFF" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M33.3938 16.122C33.3938 14.113 35.0224 12.4844 37.0314 12.4844C39.3079 12.4844 41.0251 14.5519 40.6071 16.7897L39.5548 22.4247C42.1963 23.783 44.2335 25.9905 44.2335 28.8033C44.2335 31.3318 42.5623 33.3867 40.3582 34.7336C38.1293 36.0958 35.142 36.8911 31.919 36.8911C28.696 36.8911 25.7087 36.0958 23.4798 34.7336C21.2757 33.3867 19.6045 31.3318 19.6045 28.8033C19.6045 26.0068 21.6189 23.8083 24.2362 22.4489L23.1794 16.7898C22.7615 14.5519 24.4786 12.4844 26.7552 12.4844C28.7642 12.4844 30.3928 14.113 30.3928 16.122L30.3928 20.7755C30.8932 20.7359 31.4026 20.7155 31.919 20.7155C32.4177 20.7155 32.9099 20.7345 33.3938 20.7715V16.122ZM29.4367 27.4631C29.4367 28.7408 28.7246 29.7766 27.8461 29.7766C26.9677 29.7766 26.2556 28.7408 26.2556 27.4631C26.2556 26.1854 26.9677 25.1496 27.8461 25.1496C28.7246 25.1496 29.4367 26.1854 29.4367 27.4631ZM36.233 29.7763C37.1115 29.7763 37.8236 28.7405 37.8236 27.4627C37.8236 26.185 37.1115 25.1492 36.233 25.1492C35.3546 25.1492 34.6425 26.185 34.6425 27.4627C34.6425 28.7405 35.3546 29.7763 36.233 29.7763Z", fill: "#751c0b" }),
            React.createElement("path", { opacity: "0.7", d: "M21.3333 46.3334C18.3878 46.3334 16 43.9456 16 41.0001L16 15.2882L23.4272 11.0001C25.9781 9.52733 29.24 10.4013 30.7127 12.9522L45.3794 38.3556C46.8521 40.9065 45.9781 44.1684 43.4273 45.6411L42.2282 46.3334H21.3333Z", fill: "#751c0b" }),
            React.createElement("rect", { x: "-1.66675", y: "24.29", width: "32", height: "40", rx: "5.33333", transform: "rotate(-30 -1.66675 24.29)", fill: "#CAB3F8" }),
            React.createElement("path", { opacity: "0.7", fillRule: "evenodd", clipRule: "evenodd", d: "M19.5708 25.8631C18.6224 24.2205 19.1853 22.12 20.828 21.1715C22.6894 20.0968 25.0695 20.9767 25.7842 23.0038L27.584 28.1082C30.3851 27.9718 33.0929 28.8151 34.4208 31.1151C35.6144 33.1825 35.218 35.6517 34.0517 37.7935C32.8722 39.9595 30.805 42.0202 28.1697 43.5417C25.5344 45.0632 22.7162 45.8231 20.2507 45.7615C17.8126 45.7007 15.476 44.8094 14.2824 42.7419C12.9623 40.4553 13.5715 37.7068 15.0698 35.3595L11.5341 31.2312C10.136 29.5986 10.564 27.0975 12.4255 26.0228C14.0681 25.0743 16.1686 25.6372 17.1171 27.2799L19.3139 31.0849C19.7043 30.8162 20.1112 30.5591 20.5335 30.3153C20.9413 30.0799 21.3527 29.8631 21.7658 29.6649L19.5708 25.8631ZM21.6892 37.0043C22.2924 38.049 22.1991 39.2322 21.4809 39.6469C20.7626 40.0615 19.6913 39.5508 19.0881 38.506C18.485 37.4613 18.5782 36.2781 19.2965 35.8634C20.0148 35.4487 21.086 35.9595 21.6892 37.0043ZM28.3382 35.6877C29.0564 35.273 29.1497 34.0898 28.5465 33.0451C27.9433 32.0003 26.8721 31.4896 26.1538 31.9043C25.4355 32.3189 25.3422 33.5021 25.9454 34.5468C26.5486 35.5916 27.6199 36.1024 28.3382 35.6877Z", fill: "#9A6AFF" }),
            React.createElement("g", { opacity: "0.1" },
                React.createElement("path", { d: "M13.0716 49.8608L8.23887 41.4903L26.0423 10.6538C27.1289 11.0794 28.0839 11.8629 28.7127 12.952L31.5468 17.8608L13.0716 49.8608Z", fill: "white" }),
                React.createElement("path", { d: "M30.936 51.698L26.3172 54.3647L39.4698 31.5838L41.0094 34.2505L30.936 51.698Z", fill: "white" }),
                React.createElement("path", { d: "M24.0449 10.2847L7.1336 39.5759L5.59399 36.9092L20.1155 11.7572L21.4272 10.9999C22.2535 10.5229 23.1544 10.292 24.0449 10.2847Z", fill: "white" }))),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: id },
                React.createElement("rect", { width: "64", height: "64", fill: "white" })))));
};

var Icon$1x = function (props) {
    var theme = useTheme();
    var primaryColor = theme.isDark ? "#3C3742" : "#e9eaeb";
    var secondaryColor = theme.isDark ? "#666171" : "#bdc2c4";
    return (React.createElement(Svg, __assign({ viewBox: "0 0 72 72" }, props),
        React.createElement("path", { d: "M72 36C72 55.8823 55.8823 72 36 72C16.1177 72 0 55.8823 0 36C0 16.1177 16.1177 0 36 0C55.8823 0 72 16.1177 72 36Z", fill: primaryColor }),
        React.createElement("mask", { id: "mask0", "mask-type": "alpha", maskUnits: "userSpaceOnUse", x: "3", y: "3", width: "66", height: "66" },
            React.createElement("path", { d: "M68.25 36C68.25 53.8112 53.8112 68.25 36 68.25C18.1888 68.25 3.75 53.8112 3.75 36C3.75 18.1888 18.1888 3.75 36 3.75C53.8112 3.75 68.25 18.1888 68.25 36Z", fill: "#C4C4C4" })),
        React.createElement("g", { mask: "url(#mask0)" },
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.9927 23.2654C26.1289 23.1362 30.0824 27.7278 29.2039 32.7879L27.6838 41.5445C30.2298 41.0514 32.9304 40.7875 35.7229 40.7875C37.7063 40.7875 39.6424 40.9206 41.5089 41.1741L49.2862 29.5726C51.7713 25.8657 56.7909 24.8751 60.4978 27.3602C64.7827 30.2326 65.3155 36.33 61.5938 39.9021L55.2585 45.9828C59.9045 49.0009 63.1305 53.2977 63.1306 58.4066V62.322C63.1306 67.644 59.6097 72.0998 54.6877 75.1077C49.7272 78.1391 43.0165 79.9412 35.7229 79.9412C28.4292 79.9412 21.7186 78.1391 16.7581 75.1077C11.836 72.0998 8.31519 67.644 8.31519 62.322V58.4067C8.31522 54.4286 10.2963 50.9169 13.3384 48.1585L13.0101 31.6154C12.9208 27.115 16.4929 23.3785 20.9927 23.2654ZM15.617 49.1514C15.6003 49.0112 15.5903 48.8688 15.5874 48.7246L15.2471 31.571C15.1822 28.3014 17.7798 25.5842 21.049 25.502C24.7712 25.4084 27.637 28.733 26.9996 32.4052L24.8971 44.5163C25.6681 44.2915 26.4607 44.0899 27.2726 43.9131C29.9138 43.338 32.7585 43.0248 35.7229 43.0248C38.1625 43.0248 40.5211 43.237 42.7519 43.6326C42.8725 43.2609 43.0459 42.8995 43.2742 42.5589L51.1446 30.8185C52.9416 28.1379 56.5714 27.4216 59.252 29.2186C62.3505 31.2957 62.7358 35.7049 60.0446 38.2879L51.5469 46.4441C52.264 46.7988 52.9486 47.1771 53.5975 47.577C58.1074 50.3568 60.8932 54.1829 60.8932 58.4066V62.322C60.8932 70.8172 49.6241 77.7039 35.7229 77.7039C21.8217 77.7039 10.5525 70.8172 10.5525 62.322V58.4067C10.5526 54.9322 12.4377 51.7266 15.617 49.1514Z", fill: secondaryColor }),
            React.createElement("path", { d: "M60.8932 62.3221C60.8932 70.8173 49.624 77.704 35.7228 77.704C21.8216 77.704 10.5525 70.8173 10.5525 62.3221V58.4067H60.8932V62.3221Z", fill: primaryColor }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M26.9995 32.4051C27.637 28.733 24.7711 25.4083 21.0489 25.5019C17.7797 25.5842 15.1821 28.3013 15.247 31.5709L15.5874 48.7245C15.5903 48.8687 15.6002 49.0111 15.617 49.1513C12.4376 51.7266 10.5525 54.9321 10.5525 58.4066C10.5525 66.9018 21.8216 73.7885 35.7228 73.7885C49.624 73.7885 60.8932 66.9018 60.8932 58.4066C60.8932 53.5752 57.2481 49.264 51.5468 46.444L60.0445 38.2879C62.7358 35.7048 62.3504 31.2956 59.252 29.2185C56.5714 27.4215 52.9416 28.1378 51.1446 30.8184L43.2742 42.5588C43.0458 42.8994 42.8724 43.2609 42.7519 43.6326C40.521 43.2369 38.1625 43.0248 35.7228 43.0248C31.8473 43.0248 28.1763 43.56 24.897 44.5162L26.9995 32.4051Z", fill: primaryColor }),
            React.createElement("path", { d: "M32.0873 57.2881C32.0873 59.6049 30.8352 61.4831 29.2906 61.4831C27.746 61.4831 26.4939 59.6049 26.4939 57.2881C26.4939 54.9712 27.746 53.093 29.2906 53.093C30.8352 53.093 32.0873 54.9712 32.0873 57.2881Z", fill: secondaryColor }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M28.891 54.0353C29.461 54.8903 29.8499 56.1359 29.8499 57.5677C29.8499 58.1855 30.3508 58.6864 30.9686 58.6864C31.5864 58.6864 32.0873 58.1855 32.0873 57.5677C32.0873 55.7558 31.5997 54.0649 30.7526 52.7943C29.9107 51.5314 28.6248 50.5759 27.0532 50.5759C25.4816 50.5759 24.1957 51.5314 23.3538 52.7943C22.5067 54.0649 22.0191 55.7558 22.0191 57.5677C22.0191 58.55 22.1622 59.4908 22.4244 60.3463C22.6055 60.937 23.2311 61.2691 23.8218 61.088C24.4125 60.9069 24.7446 60.2813 24.5635 59.6906C24.3685 59.0543 24.2565 58.3349 24.2565 57.5677C24.2565 56.1359 24.6454 54.8903 25.2154 54.0353C25.7906 53.1725 26.4624 52.8133 27.0532 52.8133C27.644 52.8133 28.3158 53.1725 28.891 54.0353Z", fill: secondaryColor }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M48.1883 54.0353C48.7582 54.8903 49.1472 56.1359 49.1472 57.5677C49.1472 58.1855 49.648 58.6864 50.2658 58.6864C50.8837 58.6864 51.3845 58.1855 51.3845 57.5677C51.3845 55.7558 50.8969 54.0649 50.0498 52.7943C49.208 51.5314 47.9221 50.5759 46.3505 50.5759C44.7788 50.5759 43.4929 51.5314 42.6511 52.7943C41.804 54.0649 41.3164 55.7558 41.3164 57.5677C41.3164 58.55 41.4594 59.4908 41.7216 60.3463C41.9027 60.937 42.5284 61.2691 43.1191 61.088C43.7098 60.9069 44.0418 60.2813 43.8608 59.6906C43.6657 59.0543 43.5538 58.3349 43.5538 57.5677C43.5538 56.1359 43.9427 54.8903 44.5127 54.0353C45.0879 53.1725 45.7597 52.8133 46.3505 52.8133C46.9412 52.8133 47.613 53.1725 48.1883 54.0353Z", fill: secondaryColor }),
            React.createElement("path", { d: "M51.3844 57.2881C51.3844 59.6049 50.1323 61.4831 48.5877 61.4831C47.0431 61.4831 45.791 59.6049 45.791 57.2881C45.791 54.9712 47.0431 53.093 48.5877 53.093C50.1323 53.093 51.3844 54.9712 51.3844 57.2881Z", fill: secondaryColor }),
            React.createElement("path", { d: "M34.0221 25.9463V25.2697C34.0221 24.32 34.2121 23.5247 34.5919 22.8836C34.9956 22.2426 35.5297 21.6134 36.1945 20.9961C36.8118 20.4026 37.4172 19.8921 38.0108 19.4648C38.6043 19.0374 39.091 18.5863 39.4709 18.1115C39.8508 17.6367 40.0407 17.0787 40.0407 16.4377C40.0407 15.5118 39.7083 14.8589 39.0436 14.479C38.4025 14.0754 37.3223 13.8736 35.8028 13.8736C34.8056 13.8736 33.8203 14.0041 32.8469 14.2653C31.8735 14.5027 31.0425 14.8114 30.354 15.1912V10.3835C31.2325 9.95615 32.2652 9.61189 33.4523 9.35073C34.6632 9.08957 35.9808 8.95898 37.4054 8.95898C40.1594 8.95898 42.2606 9.5644 43.7088 10.7752C45.1571 11.9623 45.8812 13.6005 45.8812 15.6898C45.8812 17.0194 45.6082 18.0996 45.0621 18.9306C44.5161 19.7378 43.7207 20.5688 42.6761 21.4235C41.7976 22.1595 41.0616 22.8005 40.4681 23.3466C39.8745 23.8689 39.5777 24.5812 39.5777 25.4834V25.9463H34.0221ZM33.7728 32.2498V28.1187H39.7914V32.2498H33.7728Z", fill: secondaryColor })),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M71.9838 37.09L69.7348 37.0231C69.7449 36.6834 69.75 36.3423 69.75 36C69.75 35.6577 69.7449 35.3166 69.7348 34.9769L71.9838 34.91C71.9946 35.272 72 35.6354 72 36C72 36.3646 71.9946 36.728 71.9838 37.09ZM71.8544 32.7398L69.6134 32.941C69.5523 32.2603 69.471 31.5857 69.3702 30.9176L71.5949 30.5818C71.7025 31.2945 71.7892 32.014 71.8544 32.7398ZM71.2052 28.4414L69.0048 28.9115C68.8622 28.2441 68.6999 27.5841 68.5185 26.932L70.6861 26.3289C70.8798 27.0248 71.053 27.7292 71.2052 28.4414ZM70.0397 24.2525L67.9128 24.9864C67.6906 24.3424 67.4494 23.7072 67.1899 23.0815L69.2683 22.2196C69.5452 22.8874 69.8026 23.5652 70.0397 24.2525ZM68.3746 20.237L66.3524 21.2235C66.0538 20.6114 65.7373 20.0097 65.4034 19.419L67.3622 18.3119C67.7183 18.942 68.0561 19.584 68.3746 20.237ZM66.2353 16.4517L64.347 17.6751C63.977 17.104 63.5901 16.5448 63.1872 15.998L64.9984 14.6631C65.4281 15.2462 65.8407 15.8426 66.2353 16.4517ZM63.656 12.952L61.9283 14.3934C61.4925 13.8711 61.0413 13.3621 60.5752 12.8671L62.2132 11.3246C62.7102 11.8523 63.1914 12.3951 63.656 12.952ZM60.6754 9.78678L59.1329 11.4248C58.6379 10.9587 58.1289 10.5074 57.6066 10.0717L59.048 8.34397C59.6049 8.80865 60.1477 9.28984 60.6754 9.78678ZM57.3369 7.00159L56.002 8.8128C55.4552 8.40985 54.896 8.02303 54.3249 7.65302L55.5482 5.76468C56.1574 6.15933 56.7538 6.57187 57.3369 7.00159ZM53.6881 4.63782L52.581 6.5966C51.9903 6.26271 51.3886 5.94615 50.7765 5.64759L51.7629 3.62536C52.416 3.94392 53.058 4.28165 53.6881 4.63782ZM49.7804 2.7317L48.9185 4.81008C48.2928 4.55061 47.6576 4.30943 47.0136 4.08723L47.7475 1.96028C48.4348 2.19743 49.1126 2.4548 49.7804 2.7317ZM45.6711 1.31385L45.068 3.48152C44.4159 3.3001 43.7559 3.13777 43.0885 2.99517L43.5586 0.794831C44.2708 0.947003 44.9752 1.12024 45.6711 1.31385ZM41.4182 0.405049L41.0824 2.62985C40.4143 2.529 39.7397 2.44772 39.059 2.38662L39.2602 0.14563C39.986 0.210778 40.7055 0.297466 41.4182 0.405049ZM37.09 0.0161859C36.728 0.0054207 36.3646 0 36 0C35.6354 0 35.272 0.00542073 34.91 0.016186L34.9769 2.26519C35.3166 2.25509 35.6577 2.25 36 2.25C36.3423 2.25 36.6834 2.25509 37.0231 2.26519L37.09 0.0161859ZM32.7398 0.145631L32.941 2.38662C32.2603 2.44772 31.5857 2.529 30.9176 2.62985L30.5818 0.405049C31.2945 0.297467 32.014 0.210779 32.7398 0.145631ZM28.4414 0.794832L28.9115 2.99517C28.2441 3.13777 27.5841 3.3001 26.932 3.48152L26.3289 1.31386C27.0248 1.12024 27.7292 0.947004 28.4414 0.794832ZM24.2525 1.96028L24.9864 4.08723C24.3424 4.30944 23.7072 4.55061 23.0815 4.81008L22.2196 2.7317C22.8874 2.45481 23.5652 2.19743 24.2525 1.96028ZM20.237 3.62536L21.2235 5.64759C20.6114 5.94616 20.0097 6.26272 19.419 6.5966L18.3119 4.63783C18.942 4.28165 19.584 3.94392 20.237 3.62536ZM16.4517 5.76469L17.6751 7.65302C17.104 8.02303 16.5448 8.40985 15.998 8.81281L14.6631 7.00159C15.2462 6.57188 15.8426 6.15933 16.4517 5.76469ZM12.952 8.34398L14.3934 10.0717C13.8711 10.5075 13.3621 10.9587 12.8671 11.4248L11.3246 9.78679C11.8523 9.28984 12.3951 8.80865 12.952 8.34398ZM9.78678 11.3246L11.4248 12.8671C10.9587 13.3621 10.5074 13.8711 10.0717 14.3934L8.34397 12.952C8.80865 12.3951 9.28984 11.8523 9.78678 11.3246ZM7.00159 14.6631L8.8128 15.998C8.40985 16.5448 8.02303 17.104 7.65302 17.6751L5.76468 16.4518C6.15933 15.8426 6.57187 15.2462 7.00159 14.6631ZM4.63782 18.3119L6.5966 19.419C6.26271 20.0097 5.94615 20.6114 5.64759 21.2235L3.62536 20.2371C3.94392 19.584 4.28165 18.942 4.63782 18.3119ZM2.7317 22.2196L4.81008 23.0815C4.55061 23.7072 4.30943 24.3424 4.08723 24.9864L1.96028 24.2525C2.19743 23.5652 2.4548 22.8874 2.7317 22.2196ZM1.31385 26.3289L3.48152 26.932C3.3001 27.5841 3.13777 28.2441 2.99517 28.9115L0.794831 28.4414C0.947003 27.7292 1.12024 27.0248 1.31385 26.3289ZM0.405049 30.5818L2.62985 30.9176C2.529 31.5857 2.44772 32.2603 2.38662 32.941L0.14563 32.7398C0.210778 32.014 0.297466 31.2945 0.405049 30.5818ZM0.0161859 34.91C0.0054207 35.272 0 35.6354 0 36C0 36.3646 0.00542073 36.728 0.016186 37.09L2.26519 37.0231C2.25509 36.6834 2.25 36.3423 2.25 36C2.25 35.6577 2.25509 35.3166 2.26519 34.9769L0.0161859 34.91ZM0.145631 39.2602L2.38662 39.059C2.44772 39.7397 2.529 40.4143 2.62985 41.0824L0.40505 41.4182C0.297467 40.7055 0.210779 39.986 0.145631 39.2602ZM0.794833 43.5586L2.99517 43.0885C3.13777 43.7559 3.3001 44.4159 3.48152 45.068L1.31386 45.6711C1.12024 44.9752 0.947004 44.2708 0.794833 43.5586ZM1.96028 47.7475L4.08723 47.0136C4.30944 47.6576 4.55061 48.2928 4.81008 48.9185L2.7317 49.7804C2.45481 49.1126 2.19743 48.4348 1.96028 47.7475ZM3.62536 51.763L5.64759 50.7765C5.94616 51.3886 6.26272 51.9903 6.5966 52.581L4.63783 53.6881C4.28165 53.058 3.94392 52.416 3.62536 51.763ZM5.76469 55.5482L7.65302 54.3249C8.02303 54.896 8.40985 55.4552 8.81281 56.002L7.00159 57.3369C6.57188 56.7538 6.15933 56.1574 5.76469 55.5482ZM8.34398 59.048L10.0717 57.6066C10.5075 58.1289 10.9587 58.6379 11.4248 59.1329L9.78679 60.6754C9.28984 60.1477 8.80865 59.6049 8.34398 59.048ZM11.3246 62.2132L12.8671 60.5752C13.3621 61.0413 13.8711 61.4925 14.3934 61.9283L12.952 63.656C12.3951 63.1914 11.8523 62.7102 11.3246 62.2132ZM14.6631 64.9984L15.998 63.1872C16.5448 63.5901 17.104 63.977 17.6751 64.347L16.4518 66.2353C15.8426 65.8407 15.2462 65.4281 14.6631 64.9984ZM18.3119 67.3622L19.419 65.4034C20.0097 65.7373 20.6114 66.0538 21.2235 66.3524L20.2371 68.3746C19.584 68.0561 18.942 67.7184 18.3119 67.3622ZM22.2196 69.2683L23.0815 67.1899C23.7072 67.4494 24.3424 67.6906 24.9864 67.9128L24.2525 70.0397C23.5652 69.8026 22.8874 69.5452 22.2196 69.2683ZM26.3289 70.6861L26.932 68.5185C27.5841 68.6999 28.2441 68.8622 28.9115 69.0048L28.4414 71.2052C27.7292 71.053 27.0248 70.8798 26.3289 70.6861ZM30.5818 71.595L30.9176 69.3702C31.5857 69.471 32.2603 69.5523 32.941 69.6134L32.7398 71.8544C32.014 71.7892 31.2945 71.7025 30.5818 71.595ZM34.91 71.9838L34.9769 69.7348C35.3166 69.7449 35.6577 69.75 36 69.75C36.3423 69.75 36.6834 69.7449 37.0231 69.7348L37.09 71.9838C36.728 71.9946 36.3646 72 36 72C35.6354 72 35.272 71.9946 34.91 71.9838ZM39.2602 71.8544L39.059 69.6134C39.7397 69.5523 40.4143 69.471 41.0824 69.3702L41.4182 71.5949C40.7055 71.7025 39.986 71.7892 39.2602 71.8544ZM43.5586 71.2052L43.0885 69.0048C43.7559 68.8622 44.4159 68.6999 45.068 68.5185L45.6711 70.6861C44.9752 70.8798 44.2708 71.053 43.5586 71.2052ZM47.7475 70.0397L47.0136 67.9128C47.6576 67.6906 48.2928 67.4494 48.9185 67.1899L49.7804 69.2683C49.1126 69.5452 48.4348 69.8026 47.7475 70.0397ZM51.7629 68.3746L50.7765 66.3524C51.3886 66.0538 51.9903 65.7373 52.581 65.4034L53.6881 67.3622C53.058 67.7183 52.416 68.0561 51.7629 68.3746ZM55.5482 66.2353L54.3249 64.347C54.896 63.977 55.4552 63.5901 56.002 63.1872L57.3369 64.9984C56.7538 65.4281 56.1574 65.8407 55.5482 66.2353ZM59.048 63.656L57.6066 61.9283C58.1289 61.4925 58.6379 61.0413 59.1329 60.5752L60.6754 62.2132C60.1477 62.7102 59.6049 63.1914 59.048 63.656ZM62.2132 60.6754L60.5752 59.1329C61.0413 58.6379 61.4925 58.1289 61.9283 57.6066L63.656 59.048C63.1914 59.6049 62.7102 60.1477 62.2132 60.6754ZM64.9984 57.3369L63.1872 56.002C63.5901 55.4552 63.977 54.896 64.347 54.3249L66.2353 55.5482C65.8407 56.1574 65.4281 56.7538 64.9984 57.3369ZM67.3622 53.6881L65.4034 52.581C65.7373 51.9903 66.0538 51.3886 66.3524 50.7765L68.3746 51.7629C68.0561 52.416 67.7184 53.058 67.3622 53.6881ZM69.2683 49.7804L67.1899 48.9185C67.4494 48.2928 67.6906 47.6576 67.9128 47.0136L70.0397 47.7475C69.8026 48.4348 69.5452 49.1126 69.2683 49.7804ZM70.6861 45.6711L68.5185 45.068C68.6999 44.4159 68.8622 43.7559 69.0048 43.0885L71.2052 43.5586C71.053 44.2708 70.8798 44.9752 70.6861 45.6711ZM71.595 41.4182L69.3702 41.0824C69.471 40.4143 69.5523 39.7397 69.6134 39.059L71.8544 39.2602C71.7892 39.986 71.7025 40.7055 71.595 41.4182Z", fill: secondaryColor })));
};

var Icon$1w = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.0967 17.8521L7.87565 20.2891C6.91907 20.8414 5.69589 20.5136 5.1436 19.557L0.999729 12.3796C0.447444 11.4231 0.775193 10.1999 1.73178 9.64759L6.31754 7C6.53486 6.87453 6.76593 6.79448 6.99977 6.75691V6C6.99977 4.89543 7.8952 4 8.99977 4H14.9998C16.1043 4 16.9998 4.89543 16.9998 6V6.73545C17.299 6.75379 17.5986 6.83993 17.8759 7L22.4616 9.64759C23.4182 10.1999 23.746 11.4231 23.1937 12.3796L19.0498 19.557C18.4975 20.5136 17.2743 20.8414 16.3178 20.2891L12.0967 17.8521ZM8.99977 6L14.9998 6L14.9998 7.98154L11.2363 14.5H8.99977L8.99977 6ZM6.99977 14.5L6.99977 8.91551L2.73178 11.3796L6.87565 18.557L10.4386 16.5H8.99977C7.8952 16.5 6.99977 15.6046 6.99977 14.5ZM16.8759 8.73205L21.4616 11.3796L17.3178 18.557L12.732 15.9094L16.8759 8.73205Z" })));
};

var Icon$1v = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M4.5 12H7.5C8.05 12 8.5 11.55 8.5 11V7C8.5 6.45 8.05 6 7.5 6H4.5C3.95 6 3.5 6.45 3.5 7V11C3.5 11.55 3.95 12 4.5 12ZM4.5 19H7.5C8.05 19 8.5 18.55 8.5 18V14C8.5 13.45 8.05 13 7.5 13H4.5C3.95 13 3.5 13.45 3.5 14V18C3.5 18.55 3.95 19 4.5 19ZM10.5 19H13.5C14.05 19 14.5 18.55 14.5 18V14C14.5 13.45 14.05 13 13.5 13H10.5C9.95 13 9.5 13.45 9.5 14V18C9.5 18.55 9.95 19 10.5 19ZM16.5 19H19.5C20.05 19 20.5 18.55 20.5 18V14C20.5 13.45 20.05 13 19.5 13H16.5C15.95 13 15.5 13.45 15.5 14V18C15.5 18.55 15.95 19 16.5 19ZM10.5 12H13.5C14.05 12 14.5 11.55 14.5 11V7C14.5 6.45 14.05 6 13.5 6H10.5C9.95 6 9.5 6.45 9.5 7V11C9.5 11.55 9.95 12 10.5 12ZM15.5 7V11C15.5 11.55 15.95 12 16.5 12H19.5C20.05 12 20.5 11.55 20.5 11V7C20.5 6.45 20.05 6 19.5 6H16.5C15.95 6 15.5 6.45 15.5 7Z" })));
};

var Icon$1u = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3ZM19 19H5V5H19V19Z" }),
        React.createElement("path", { d: "M11.25 7.72H6.25V9.22H11.25V7.72Z" }),
        React.createElement("path", { d: "M18 15.75H13V17.25H18V15.75Z" }),
        React.createElement("path", { d: "M18 13.25H13V14.75H18V13.25Z" }),
        React.createElement("path", { d: "M8 18H9.5V16H11.5V14.5H9.5V12.5H8V14.5H6V16H8V18Z" }),
        React.createElement("path", { d: "M14.09 10.95L15.5 9.54L16.91 10.95L17.97 9.89L16.56 8.47L17.97 7.06L16.91 6L15.5 7.41L14.09 6L13.03 7.06L14.44 8.47L13.03 9.89L14.09 10.95Z" })));
};

var Icon$1t = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" })));
};

var Icon$1s = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M5 7C5 6.44772 4.55228 6 4 6C3.44772 6 3 6.44772 3 7V18C3 19.1046 3.89543 20 5 20H20C20.5523 20 21 19.5523 21 19C21 18.4477 20.5523 18 20 18H5V7Z" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19 17H7C6.44772 17 6 16.5523 6 16V12C6 11.4477 6.44772 11 7 11H10V10C10 9.44772 10.4477 9 11 9H14V7C14 6.44772 14.4477 6 15 6H19C19.5523 6 20 6.44772 20 7V16C20 16.5523 19.5523 17 19 17ZM16 8H18V15H16V8ZM12 15H14V11H12V15ZM10 13H8V15H10V13Z" })));
};

var Icon$1r = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M9.00012 16.2L5.50012 12.7C5.11012 12.31 4.49012 12.31 4.10012 12.7C3.71012 13.09 3.71012 13.71 4.10012 14.1L8.29012 18.29C8.68012 18.68 9.31012 18.68 9.70012 18.29L20.3001 7.70001C20.6901 7.31001 20.6901 6.69001 20.3001 6.30001C19.9101 5.91001 19.2901 5.91001 18.9001 6.30001L9.00012 16.2Z" })));
};

var Icon$1q = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z" })));
};

var Icon$1p = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M14.71 15.88L10.83 12L14.71 8.12001C15.1 7.73001 15.1 7.10001 14.71 6.71001C14.32 6.32001 13.69 6.32001 13.3 6.71001L8.70998 11.3C8.31998 11.69 8.31998 12.32 8.70998 12.71L13.3 17.3C13.69 17.69 14.32 17.69 14.71 17.3C15.09 16.91 15.1 16.27 14.71 15.88Z" })));
};

var Icon$1o = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M9.29006 15.88L13.1701 12L9.29006 8.12001C8.90006 7.73001 8.90006 7.10001 9.29006 6.71001C9.68006 6.32001 10.3101 6.32001 10.7001 6.71001L15.2901 11.3C15.6801 11.69 15.6801 12.32 15.2901 12.71L10.7001 17.3C10.3101 17.69 9.68006 17.69 9.29006 17.3C8.91006 16.91 8.90006 16.27 9.29006 15.88Z" })));
};

var Icon$1n = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M8.11997 14.7101L12 10.8301L15.88 14.7101C16.27 15.1001 16.9 15.1001 17.29 14.7101C17.68 14.3201 17.68 13.6901 17.29 13.3001L12.7 8.7101C12.31 8.3201 11.68 8.3201 11.29 8.7101L6.69997 13.3001C6.30997 13.6901 6.30997 14.3201 6.69997 14.7101C7.08997 15.0901 7.72997 15.1001 8.11997 14.7101Z" })));
};

var Icon$1m = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M18.3 5.70997C17.91 5.31997 17.28 5.31997 16.89 5.70997L12 10.59L7.10997 5.69997C6.71997 5.30997 6.08997 5.30997 5.69997 5.69997C5.30997 6.08997 5.30997 6.71997 5.69997 7.10997L10.59 12L5.69997 16.89C5.30997 17.28 5.30997 17.91 5.69997 18.3C6.08997 18.69 6.71997 18.69 7.10997 18.3L12 13.41L16.89 18.3C17.28 18.69 17.91 18.69 18.3 18.3C18.69 17.91 18.69 17.28 18.3 16.89L13.41 12L18.3 7.10997C18.68 6.72997 18.68 6.08997 18.3 5.70997Z" })));
};

var Icon$1l = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M19.43 12.98C19.47 12.66 19.5 12.34 19.5 12C19.5 11.66 19.47 11.34 19.43 11.02L21.54 9.37C21.73 9.22 21.78 8.95 21.66 8.73L19.66 5.27C19.54 5.05 19.27 4.97 19.05 5.05L16.56 6.05C16.04 5.65 15.48 5.32 14.87 5.07L14.49 2.42C14.46 2.18 14.25 2 14 2H9.99996C9.74996 2 9.53996 2.18 9.50996 2.42L9.12996 5.07C8.51996 5.32 7.95996 5.66 7.43996 6.05L4.94996 5.05C4.71996 4.96 4.45996 5.05 4.33996 5.27L2.33996 8.73C2.20996 8.95 2.26996 9.22 2.45996 9.37L4.56996 11.02C4.52996 11.34 4.49996 11.67 4.49996 12C4.49996 12.33 4.52996 12.66 4.56996 12.98L2.45996 14.63C2.26996 14.78 2.21996 15.05 2.33996 15.27L4.33996 18.73C4.45996 18.95 4.72996 19.03 4.94996 18.95L7.43996 17.95C7.95996 18.35 8.51996 18.68 9.12996 18.93L9.50996 21.58C9.53996 21.82 9.74996 22 9.99996 22H14C14.25 22 14.46 21.82 14.49 21.58L14.87 18.93C15.48 18.68 16.04 18.34 16.56 17.95L19.05 18.95C19.28 19.04 19.54 18.95 19.66 18.73L21.66 15.27C21.78 15.05 21.73 14.78 21.54 14.63L19.43 12.98ZM12 15.5C10.07 15.5 8.49996 13.93 8.49996 12C8.49996 10.07 10.07 8.5 12 8.5C13.93 8.5 15.5 10.07 15.5 12C15.5 13.93 13.93 15.5 12 15.5Z" })));
};

var Icon$1k = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 12.75C13.63 12.75 15.07 13.14 16.24 13.65C17.32 14.13 18 15.21 18 16.38V17C18 17.55 17.55 18 17 18H7C6.45 18 6 17.55 6 17V16.39C6 15.21 6.68 14.13 7.76 13.66C8.93 13.14 10.37 12.75 12 12.75ZM4 13C5.1 13 6 12.1 6 11C6 9.9 5.1 9 4 9C2.9 9 2 9.9 2 11C2 12.1 2.9 13 4 13ZM5.13 14.1C4.76 14.04 4.39 14 4 14C3.01 14 2.07 14.21 1.22 14.58C0.48 14.9 0 15.62 0 16.43V17C0 17.55 0.45 18 1 18H4.5V16.39C4.5 15.56 4.73 14.78 5.13 14.1ZM20 13C21.1 13 22 12.1 22 11C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11C18 12.1 18.9 13 20 13ZM24 16.43C24 15.62 23.52 14.9 22.78 14.58C21.93 14.21 20.99 14 20 14C19.61 14 19.24 14.04 18.87 14.1C19.27 14.78 19.5 15.56 19.5 16.39V18H23C23.55 18 24 17.55 24 17V16.43ZM12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6Z" })));
};

var Icon$1j = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M15 1H4C2.9 1 2 1.9 2 3V16C2 16.55 2.45 17 3 17C3.55 17 4 16.55 4 16V4C4 3.45 4.45 3 5 3H15C15.55 3 16 2.55 16 2C16 1.45 15.55 1 15 1ZM19 5H8C6.9 5 6 5.9 6 7V21C6 22.1 6.9 23 8 23H19C20.1 23 21 22.1 21 21V7C21 5.9 20.1 5 19 5ZM18 21H9C8.45 21 8 20.55 8 20V8C8 7.45 8.45 7 9 7H18C18.55 7 19 7.45 19 8V20C19 20.55 18.55 21 18 21Z" })));
};

var Icon$1i = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 25 25" }, props),
        React.createElement("path", { d: "M15.6772 2.8668C15.9878 1.97095 15.2658 1.05469 14.2495 1.05469C13.4213 1.05469 12.75 1.67612 12.75 2.4427L12.75 5.07933C12.75 5.61801 13.2217 6.05469 13.8037 6.05469C14.2615 6.05469 14.667 5.78094 14.8069 5.37734L15.6772 2.8668Z", fill: "#FFC700" }),
        React.createElement("path", { d: "M9.32279 2.8668C9.01225 1.97095 9.73416 1.05469 10.7505 1.05469C11.5787 1.05469 12.25 1.67612 12.25 2.4427L12.25 5.07934C12.25 5.61801 11.7783 6.05469 11.1963 6.05469C10.7385 6.05469 10.333 5.78094 10.1931 5.37734L9.32279 2.8668Z", fill: "#FFC700" }),
        React.createElement("path", { d: "M10.825 1.26941C11.1413 1.50339 10.6373 1.71436 10.293 2.17982C9.94869 2.64527 9.89449 3.18896 9.57817 2.95498C9.26185 2.72101 9.32403 2.18322 9.66832 1.71776C10.0126 1.2523 10.5086 1.03544 10.825 1.26941Z", fill: "#FFD800" }),
        React.createElement("path", { d: "M14.6507 1.39423C14.8957 1.70211 14.3543 1.77544 13.9012 2.13593C13.4482 2.49642 13.2551 3.00755 13.0102 2.69968C12.7652 2.3918 12.9644 1.88843 13.4174 1.52794C13.8705 1.16746 14.4057 1.08636 14.6507 1.39423Z", fill: "#FFD800" }),
        React.createElement("path", { d: "M10.3026 1.54788C10.4525 1.65871 10.1853 1.79706 9.98717 2.06492C9.78903 2.33278 9.73495 2.62873 9.58511 2.51789C9.43528 2.40706 9.49314 2.11391 9.69127 1.84605C9.88941 1.57819 10.1528 1.43705 10.3026 1.54788Z", fill: "#FEED8D" }),
        React.createElement("path", { d: "M14.0738 1.5278C14.1899 1.67363 13.896 1.73812 13.6353 1.94557C13.3746 2.15302 13.2458 2.42489 13.1297 2.27905C13.0137 2.13322 13.1454 1.86503 13.4061 1.65758C13.6668 1.45012 13.9578 1.38196 14.0738 1.5278Z", fill: "#FEED8D" }),
        React.createElement("path", { d: "M13.406 5.80534C13.1769 5.64322 13.6402 5.49916 14.0299 5.10944C14.4196 4.71971 14.4298 4.07338 14.6827 4.32626C14.9356 4.57915 14.7916 5.0668 14.4019 5.45652C14.0122 5.84624 13.6351 5.96747 13.406 5.80534Z", fill: "#FFAF00" }),
        React.createElement("path", { d: "M10.6248 5.80534C10.3957 5.64322 10.8589 5.49916 11.2486 5.10944C11.6383 4.71971 11.6486 4.07338 11.9015 4.32626C12.1543 4.57915 12.0103 5.0668 11.6206 5.45652C11.2309 5.84624 10.8538 5.96747 10.6248 5.80534Z", fill: "#FFAF00" }),
        React.createElement("path", { d: "M13.9914 10.3006C12.9839 8.40915 12.4375 6.30469 12.4375 6.30469C12.4375 6.30469 11.9087 8.34165 10.9321 10.2086C10.6414 11.6927 9.56271 12.9024 8.10162 13.3682C6.2379 13.9624 4.40451 13.1384 3.73966 11.239C3.00517 10.5247 2.41808 9.75079 2.125 9.15553V10.3668C2.125 14.1503 3.02673 17.8564 4.72554 21.0547H20.1495C21.8483 17.8564 22.75 14.1503 22.75 10.3668V9.15553C22.4628 9.73876 21.8934 10.4935 21.1797 11.1956C20.5277 13.1259 18.6807 13.967 16.8028 13.3682C15.372 12.912 14.3079 11.7426 13.9914 10.3006Z", fill: "#FFC700" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.7881 7.51367C13.0461 8.29103 13.4582 9.39262 14.0101 10.4296C14.2401 11.4788 14.8691 12.3823 15.7478 12.9675L14.8711 21.0453L12.4716 21.026L6.31499 21.0756C5.03757 17.5852 4.57523 15.3977 4.04834 11.8082C4.82141 13.3685 6.48748 14.0096 8.17878 13.4698C9.62537 13.0081 10.6933 11.8093 10.9812 10.3385C11.509 9.3285 11.9046 8.26831 12.1552 7.51367H12.7881Z", fill: "#FFD800" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.335 21.0354L10.6112 11.4121C10.1532 12.3105 9.37201 13.0219 8.40008 13.3927C8.66771 15.748 9.05381 17.902 9.86757 21.0472L11.335 21.0354ZM8.91436 21.0549C8.26697 18.1715 7.86567 16.0604 7.58788 13.6114C6.85387 13.7286 6.14425 13.6244 5.53223 13.3211C5.85194 15.8033 6.40755 18.9391 7.32573 21.0677L8.91436 21.0549Z", fill: "#FFE971" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.1731 9.68799C11.1115 9.81472 11.0477 9.94136 10.982 10.0672C10.6941 11.538 9.62616 12.7368 8.17957 13.1985C6.33435 13.7874 4.51917 12.9708 3.86091 11.0883C3.82538 11.0537 3.79019 11.019 3.75537 10.9842C3.76298 11.1884 3.78916 11.3929 3.8348 11.5958C4.24757 13.4306 6.09537 14.4351 8.21827 13.7576C10.1825 13.1307 11.3382 11.3971 11.1731 9.68799Z", fill: "#FFE971" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.8289 9.68799C13.8905 9.81475 13.9542 9.94142 14.02 10.0673C14.3079 11.5381 15.3758 12.7369 16.8224 13.1986C18.6677 13.7875 20.4828 12.9709 21.1411 11.0884C21.1766 11.0538 21.2118 11.0191 21.2466 10.9843C21.239 11.1885 21.2128 11.393 21.1672 11.5959C20.7544 13.4308 18.9066 14.4353 16.7837 13.7578C14.8194 13.1309 13.6636 11.3971 13.8289 9.68799Z", fill: "#FFD800" }),
        React.createElement("path", { d: "M16.25 7.99219C16.25 9.80885 14.5431 11.0547 12.4375 11.0547C10.3319 11.0547 8.625 9.80885 8.625 7.99219C8.625 6.17553 10.3319 4.92969 12.4375 4.92969C14.5431 4.92969 16.25 6.17553 16.25 7.99219Z", fill: "#FFC700" }),
        React.createElement("path", { d: "M14.5349 6.09354C14.807 7.1091 13.4021 6.71163 11.9077 7.11205C10.4134 7.51246 9.39541 8.55914 9.12329 7.54357C8.85117 6.52801 9.87598 5.50694 11.3704 5.10652C12.8647 4.70611 14.2628 5.07797 14.5349 6.09354Z", fill: "#FFD800" }),
        React.createElement("path", { d: "M11.0893 10.2853C10.7875 9.70556 11.9478 9.89409 13.237 9.49295C14.5262 9.09181 15.3014 7.75528 15.5484 8.54928C15.7955 9.34329 14.9187 10.2079 13.6295 10.609C12.3403 11.0102 11.3911 10.865 11.0893 10.2853Z", fill: "#FFAF00" }),
        React.createElement("path", { d: "M12.979 5.80657C13.1079 6.28763 12.3191 6.1324 11.4591 6.36283C10.5992 6.59326 9.99366 7.1221 9.86476 6.64104C9.73586 6.15998 10.3446 5.64328 11.2046 5.41284C12.0646 5.18241 12.8501 5.32552 12.979 5.80657Z", fill: "#FEED8D" }),
        React.createElement("path", { d: "M11.7222 8.09327C11.7222 8.76484 11.4227 9.01955 11.0533 9.01955C10.6838 9.01955 10.3843 8.76484 10.3843 8.09327C10.3843 7.4217 10.6838 7.16699 11.0533 7.16699C11.4227 7.16699 11.7222 7.4217 11.7222 8.09327Z", fill: "#FEED8D" }),
        React.createElement("path", { d: "M11.7222 7.94581C11.7222 8.61738 11.4227 8.87209 11.0533 8.87209C10.6838 8.87209 10.3843 8.61738 10.3843 7.94581C10.3843 7.27424 10.6838 7.01953 11.0533 7.01953C11.4227 7.01953 11.7222 7.27424 11.7222 7.94581Z", fill: "#CC240E" }),
        React.createElement("path", { d: "M11.4119 7.41061C11.4587 7.67736 11.217 7.57296 10.9599 7.67813C10.7028 7.78331 10.5276 8.05822 10.4808 7.79148C10.434 7.52473 10.6103 7.25654 10.8674 7.15136C11.1245 7.04619 11.3651 7.14386 11.4119 7.41061Z", fill: "#FA7048" }),
        React.createElement("path", { d: "M10.796 8.61486C10.7456 8.421 10.9921 8.50242 11.2088 8.3668C11.4256 8.23119 11.5783 7.83458 11.6194 8.10027C11.6605 8.36596 11.4909 8.60461 11.2742 8.74023C11.0575 8.87584 10.8465 8.80873 10.796 8.61486Z", fill: "#9F0400" }),
        React.createElement("path", { d: "M14.1924 8.09327C14.1924 8.76484 13.8929 9.01955 13.5235 9.01955C13.154 9.01955 12.8545 8.76484 12.8545 8.09327C12.8545 7.4217 13.154 7.16699 13.5235 7.16699C13.8929 7.16699 14.1924 7.4217 14.1924 8.09327Z", fill: "#FEED8D" }),
        React.createElement("path", { d: "M14.1924 7.94581C14.1924 8.61738 13.8929 8.87209 13.5235 8.87209C13.154 8.87209 12.8545 8.61738 12.8545 7.94581C12.8545 7.27424 13.154 7.01953 13.5235 7.01953C13.8929 7.01953 14.1924 7.27424 14.1924 7.94581Z", fill: "#CC240E" }),
        React.createElement("path", { d: "M13.8821 7.41061C13.9289 7.67736 13.6872 7.57296 13.4301 7.67813C13.173 7.78331 12.9978 8.05822 12.951 7.79148C12.9042 7.52473 13.0805 7.25654 13.3376 7.15136C13.5947 7.04619 13.8353 7.14386 13.8821 7.41061Z", fill: "#FA7048" }),
        React.createElement("path", { d: "M13.2663 8.61486C13.2158 8.421 13.4623 8.50242 13.6791 8.3668C13.8958 8.23119 14.0485 7.83458 14.0896 8.10027C14.1307 8.36596 13.9612 8.60461 13.7444 8.74023C13.5277 8.87584 13.3167 8.80873 13.2663 8.61486Z", fill: "#9F0400" }),
        React.createElement("path", { d: "M24.3751 9.78352C24.3751 10.8765 23.4126 11.6261 22.2254 11.6261C21.0381 11.6261 20.0757 10.8765 20.0757 9.78352C20.0757 8.6905 21.0381 7.94092 22.2254 7.94092C23.4126 7.94092 24.3751 8.6905 24.3751 9.78352Z", fill: "#FFC700" }),
        React.createElement("path", { d: "M23.4327 8.66844C23.5873 9.24565 22.7888 9.01974 21.9395 9.24732C21.0902 9.47491 20.5116 10.0698 20.3569 9.49259C20.2023 8.91538 20.7847 8.33504 21.6341 8.10746C22.4834 7.87987 23.278 8.09123 23.4327 8.66844Z", fill: "#FFD800" }),
        React.createElement("path", { d: "M21.468 11.1604C21.2965 10.8309 21.956 10.938 22.6887 10.7101C23.4214 10.4821 23.862 9.72242 24.0024 10.1737C24.1429 10.625 23.6445 11.1164 22.9118 11.3444C22.179 11.5724 21.6396 11.4899 21.468 11.1604Z", fill: "#FFAF00" }),
        React.createElement("path", { d: "M22.5483 8.5052C22.6216 8.77861 22.1733 8.69038 21.6845 8.82135C21.1957 8.95232 20.8516 9.2529 20.7783 8.97948C20.705 8.70606 21.051 8.41238 21.5398 8.28141C22.0286 8.15044 22.4751 8.23178 22.5483 8.5052Z", fill: "#FEED8D" }),
        React.createElement("path", { d: "M4.92439 9.78352C4.92439 10.8765 3.96194 11.6261 2.7747 11.6261C1.58745 11.6261 0.625 10.8765 0.625 9.78352C0.625 8.6905 1.58745 7.94092 2.7747 7.94092C3.96194 7.94092 4.92439 8.6905 4.92439 9.78352Z", fill: "#FFC700" }),
        React.createElement("path", { d: "M3.982 8.66844C4.13667 9.24565 3.33817 9.01974 2.48882 9.24732C1.63947 9.47491 1.0609 10.0698 0.906238 9.49259C0.751574 8.91538 1.33404 8.33504 2.18339 8.10746C3.03274 7.87987 3.82734 8.09123 3.982 8.66844Z", fill: "#FFD800" }),
        React.createElement("path", { d: "M2.01735 11.1604C1.8458 10.8309 2.5053 10.938 3.23802 10.7101C3.97074 10.4821 4.41134 9.72242 4.55176 10.1737C4.69218 10.625 4.19381 11.1164 3.46109 11.3444C2.72837 11.5724 2.1889 11.4899 2.01735 11.1604Z", fill: "#FFAF00" }),
        React.createElement("path", { d: "M3.09716 8.5052C3.17042 8.77861 2.72209 8.69038 2.23331 8.82135C1.74453 8.95232 1.40038 9.2529 1.32712 8.97948C1.25386 8.70606 1.59985 8.41238 2.08863 8.28141C2.57742 8.15044 3.0239 8.23178 3.09716 8.5052Z", fill: "#FEED8D" }),
        React.createElement("path", { d: "M21 21.4833C21 22.5878 20.7489 23.0547 12.4375 23.0547C4.12611 23.0547 3.875 22.5878 3.875 21.4833C3.875 20.3787 4.12611 20.3047 12.4375 20.3047C20.7489 20.3047 21 20.3787 21 21.4833Z", fill: "#D8D8D8" }),
        React.createElement("path", { d: "M14.6123 21.583C14.5965 22.6393 13.9077 22.7662 9.15269 22.6767C5.64021 22.6106 4.71703 22.5202 4.72814 21.7777C4.73925 21.0352 5.09021 20.7512 9.18036 20.8281C13.9354 20.9176 14.6234 20.8405 14.6123 21.583Z", fill: "#EFF3F5" }),
        React.createElement("path", { d: "M5.36878 22.06C5.19105 21.8607 5.32313 21.5819 5.55794 21.3186C5.79275 21.0553 6.04136 20.9072 6.21909 21.1065C6.39682 21.3058 6.26473 21.5845 6.02992 21.8478C5.79512 22.1111 5.54651 22.2593 5.36878 22.06Z", fill: "#7D7D7D" }),
        React.createElement("path", { d: "M5.33188 22.0183C5.18225 21.8505 5.32355 21.5821 5.55836 21.3188C5.79317 21.0555 6.03256 20.897 6.18219 21.0648C6.33181 21.2326 6.19051 21.501 5.9557 21.7644C5.7209 22.0277 5.4815 22.1861 5.33188 22.0183Z", fill: "#373333" }),
        React.createElement("path", { d: "M19.1715 22.06C18.9938 21.8607 19.1259 21.5819 19.3607 21.3186C19.5955 21.0553 19.8441 20.9072 20.0218 21.1065C20.1995 21.3058 20.0675 21.5845 19.8327 21.8478C19.5978 22.1111 19.3492 22.2593 19.1715 22.06Z", fill: "#7D7D7D" }),
        React.createElement("path", { d: "M19.1374 22.0217C18.9855 21.8514 19.1261 21.5821 19.3609 21.3188C19.5957 21.0555 19.8358 20.8979 19.9877 21.0682C20.1397 21.2386 19.9991 21.5079 19.7643 21.7712C19.5295 22.0345 19.2893 22.1921 19.1374 22.0217Z", fill: "#373333" }),
        React.createElement("path", { d: "M8.71657 22.2374C8.50579 22.001 8.66243 21.6704 8.94091 21.3581C9.21938 21.0459 9.51422 20.8702 9.725 21.1066C9.93579 21.3429 9.77914 21.6736 9.50066 21.9858C9.22219 22.2981 8.92735 22.4738 8.71657 22.2374Z", fill: "#7D7D7D" }),
        React.createElement("path", { d: "M8.65967 22.1742C8.49136 21.9854 8.66193 21.6704 8.9404 21.3581C9.21887 21.0459 9.4998 20.8546 9.66811 21.0433C9.83643 21.2321 9.66585 21.5471 9.38738 21.8594C9.10891 22.1716 8.82799 22.3629 8.65967 22.1742Z", fill: "#373333" }),
        React.createElement("path", { d: "M15.8196 22.2374C15.6088 22.001 15.7655 21.6704 16.0439 21.3581C16.3224 21.0459 16.6172 20.8702 16.828 21.1066C17.0388 21.3429 16.8822 21.6736 16.6037 21.9858C16.3252 22.2981 16.0304 22.4738 15.8196 22.2374Z", fill: "#7D7D7D" }),
        React.createElement("path", { d: "M15.7716 22.1835C15.597 21.9878 15.7656 21.6705 16.0441 21.3582C16.3225 21.0459 16.6055 20.857 16.78 21.0527C16.9545 21.2483 16.786 21.5656 16.5075 21.8779C16.229 22.1902 15.9461 22.3792 15.7716 22.1835Z", fill: "#373333" }),
        React.createElement("path", { d: "M12.1406 22.3976C11.8957 22.1229 12.0777 21.7387 12.4013 21.3759C12.7249 21.013 13.0675 20.8089 13.3125 21.0835C13.5574 21.3582 13.3754 21.7424 13.0518 22.1053C12.7282 22.4681 12.3856 22.6723 12.1406 22.3976Z", fill: "#7D7D7D" }),
        React.createElement("path", { d: "M12.0921 22.3438C11.8835 22.1098 12.0775 21.7389 12.401 21.3761C12.7246 21.0132 13.0554 20.7957 13.264 21.0297C13.4726 21.2636 13.2787 21.6345 12.9551 21.9974C12.6315 22.3602 12.3008 22.5777 12.0921 22.3438Z", fill: "#373333" }),
        React.createElement("path", { d: "M12.0489 13.7369C12.2981 13.494 12.7019 13.494 12.9511 13.7369L14.8132 15.5524C15.0623 15.7953 15.0623 16.1891 14.8132 16.432L12.9511 18.2475C12.7019 18.4904 12.2981 18.4904 12.0489 18.2475L10.1868 16.432C9.93772 16.1891 9.93772 15.7953 10.1868 15.5524L12.0489 13.7369Z", fill: "#FFE971" }),
        React.createElement("path", { d: "M12.4726 13.2256V15.5732H10.125C10.125 15.4162 10.1849 15.2593 10.3046 15.1396L12.039 13.4052C12.1587 13.2855 12.3157 13.2256 12.4726 13.2256Z", fill: "#FA7048" }),
        React.createElement("path", { d: "M12.4726 17.9209V15.5733H10.125C10.125 15.7302 10.1849 15.8872 10.3046 16.0069L12.039 17.7413C12.1587 17.861 12.3157 17.9209 12.4726 17.9209Z", fill: "#CC240E" }),
        React.createElement("path", { d: "M12.4727 13.2256V15.5732H14.8203C14.8203 15.4162 14.7604 15.2593 14.6407 15.1396L12.9063 13.4052C12.7866 13.2855 12.6296 13.2256 12.4727 13.2256Z", fill: "#CC240E" }),
        React.createElement("path", { d: "M12.4727 17.9209V15.5733H14.8203C14.8203 15.7302 14.7604 15.8872 14.6407 16.0069L12.9063 17.7413C12.7866 17.861 12.6296 17.9209 12.4727 17.9209Z", fill: "#9F0400" }),
        React.createElement("path", { d: "M18.6595 15.807C18.7972 15.6548 19.0203 15.6548 19.158 15.807L20.1869 16.9442C20.3246 17.0964 20.3246 17.343 20.1869 17.4952L19.158 18.6324C19.0203 18.7846 18.7972 18.7846 18.6595 18.6324L17.6306 17.4952C17.4929 17.343 17.4929 17.0964 17.6306 16.9442L18.6595 15.807Z", fill: "#FFE971" }),
        React.createElement("path", { d: "M18.9132 15.5596V16.9244H17.5483C17.5483 16.8332 17.5831 16.742 17.6528 16.6724L18.6611 15.664C18.7307 15.5944 18.822 15.5596 18.9132 15.5596Z", fill: "#FA7048" }),
        React.createElement("path", { d: "M18.9132 18.2896V16.9247H17.5483C17.5483 17.0159 17.5831 17.1072 17.6528 17.1768L18.6611 18.1851C18.7307 18.2547 18.822 18.2896 18.9132 18.2896Z", fill: "#CC240E" }),
        React.createElement("path", { d: "M18.9134 15.5596V16.9245H20.2783C20.2783 16.8332 20.2435 16.742 20.1739 16.6724L19.1655 15.664C19.0959 15.5944 19.0047 15.5596 18.9134 15.5596Z", fill: "#CC240E" }),
        React.createElement("path", { d: "M18.9134 18.2896V16.9247H20.2783C20.2783 17.0159 20.2435 17.1072 20.1739 17.1768L19.1655 18.1851C19.0959 18.2547 19.0047 18.2896 18.9134 18.2896Z", fill: "#9F0400" }),
        React.createElement("path", { d: "M5.64194 15.807C5.77959 15.6548 6.00277 15.6548 6.14042 15.807L7.16936 16.9442C7.30701 17.0964 7.30701 17.343 7.16936 17.4952L6.14042 18.6324C6.00277 18.7846 5.77959 18.7846 5.64194 18.6324L4.613 17.4952C4.47535 17.343 4.47535 17.0964 4.613 16.9442L5.64194 15.807Z", fill: "#FFE971" }),
        React.createElement("path", { d: "M5.90931 15.5596V16.9245H4.54443C4.54443 16.8332 4.57924 16.742 4.64885 16.6724L5.65722 15.664C5.72683 15.5944 5.81807 15.5596 5.90931 15.5596Z", fill: "#FA7048" }),
        React.createElement("path", { d: "M5.90931 18.2896V16.9247H4.54443C4.54443 17.0159 4.57924 17.1072 4.64885 17.1768L5.65722 18.1851C5.72683 18.2547 5.81807 18.2896 5.90931 18.2896Z", fill: "#CC240E" }),
        React.createElement("path", { d: "M5.90905 15.5596V16.9245H7.27393C7.27393 16.8332 7.23912 16.742 7.16951 16.6724L6.16114 15.664C6.09153 15.5944 6.00029 15.5596 5.90905 15.5596Z", fill: "#CC240E" }),
        React.createElement("path", { d: "M5.90905 18.2896V16.9247H7.27393C7.27393 17.0159 7.23912 17.1072 7.16951 17.1768L6.16114 18.1851C6.09153 18.2547 6.00029 18.2896 5.90905 18.2896Z", fill: "#9F0400" })));
};

var Icon$1h = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM11 16H13V18H11V16ZM12.61 6.04C10.55 5.74 8.73 7.01 8.18 8.83C8 9.41 8.44 10 9.05 10H9.25C9.66 10 9.99 9.71 10.13 9.33C10.45 8.44 11.4 7.83 12.43 8.05C13.38 8.25 14.08 9.18 14 10.15C13.9 11.49 12.38 11.78 11.55 13.03C11.55 13.04 11.54 13.04 11.54 13.05C11.53 13.07 11.52 13.08 11.51 13.1C11.42 13.25 11.33 13.42 11.26 13.6C11.25 13.63 11.23 13.65 11.22 13.68C11.21 13.7 11.21 13.72 11.2 13.75C11.08 14.09 11 14.5 11 15H13C13 14.58 13.11 14.23 13.28 13.93C13.3 13.9 13.31 13.87 13.33 13.84C13.41 13.7 13.51 13.57 13.61 13.45C13.62 13.44 13.63 13.42 13.64 13.41C13.74 13.29 13.85 13.18 13.97 13.07C14.93 12.16 16.23 11.42 15.96 9.51C15.72 7.77 14.35 6.3 12.61 6.04Z" })));
};

var Icon$1g = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M13 3C8.03 3 4 7.03 4 12H2.20711C1.76165 12 1.53857 12.5386 1.85355 12.8536L4.54604 15.546C4.73751 15.7375 5.04662 15.7418 5.24329 15.5556L8.08805 12.8631C8.4164 12.5524 8.19646 12 7.74435 12H6C6 8.13 9.13 5 13 5C16.87 5 20 8.13 20 12C20 15.87 16.87 19 13 19C11.4314 19 9.98175 18.4782 8.81739 17.601C8.37411 17.267 7.74104 17.259 7.3486 17.6514C6.95725 18.0428 6.95413 18.6823 7.38598 19.0284C8.92448 20.2615 10.8708 21 13 21C17.97 21 22 16.97 22 12C22 7.03 17.97 3 13 3ZM12 8V13L16.28 15.54L17 14.33L13.5 12.25V8H12Z" })));
};

var Icon$1f = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React.createElement("path", { d: "M4.68179 7.04592C5.06573 7.78505 5.47899 8.47752 5.91436 9.12605C4.76866 8.20293 3.15483 7.94918 1.72791 8.60664L0.865295 9.00408L0.949991 9.1879C1.87444 11.1943 4.25037 12.0714 6.25678 11.147L7.1194 10.7495C7.7588 11.5306 8.42708 12.2337 9.10661 12.8671C7.54917 12.0868 5.60297 12.3946 4.36752 13.7424L4.07604 14.0604L5.17158 15.0646C6.8001 16.5573 9.33037 16.4472 10.8231 14.8187L11.0984 14.5183C11.8534 15.0744 12.6001 15.5528 13.3138 15.9628C13.5418 16.0939 13.7667 16.218 13.9874 16.3354C12.2933 15.9571 10.485 16.7202 9.6092 18.3189L9.47337 18.5669L10.514 19.137C12.4515 20.1983 14.8825 19.4881 15.9439 17.5507L16.0715 17.3177C16.4836 17.4877 16.862 17.6297 17.1977 17.747C17.6961 17.9213 18.1016 18.0417 18.3855 18.1191L18.8453 18.2339C19.2507 18.3192 19.6484 18.0598 19.7338 17.6545C19.819 17.2494 19.56 16.8519 19.1551 16.7662L19.1524 16.7657C19.1551 16.7662 19.0729 16.7518 18.7802 16.6719C18.527 16.6029 18.1551 16.4928 17.6927 16.3311C17.1224 16.1317 16.416 15.8546 15.6253 15.4802L15.9997 14.8317C17.1043 12.9186 16.4488 10.4722 14.5356 9.36762L13.8989 9.00001L13.4324 9.80801C12.4895 11.4411 12.8291 13.4627 14.1387 14.7066C14.1128 14.6919 14.0869 14.6771 14.0609 14.6622C12.797 13.9361 11.4285 12.9847 10.1078 11.7498L10.5391 11.324C12.1111 9.77192 12.1274 7.23931 10.5753 5.66723L9.93826 5.02195L9.41242 5.5411C8.11055 6.82638 7.87565 8.78411 8.71479 10.3119C7.73795 9.1976 6.82187 7.90232 6.03634 6.39938C7.08943 4.4961 6.42732 2.09216 4.53566 1.00001L3.4039 0.346588L2.82248 1.35364C1.71791 3.26682 2.37341 5.71318 4.28658 6.81775L4.68179 7.04592Z" })));
};

var Icon$1e = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React.createElement("path", { d: "M15.3182 7.04592C14.9343 7.78505 14.521 8.47752 14.0856 9.12605C15.2313 8.20293 16.8452 7.94918 18.2721 8.60664L19.1347 9.00408L19.05 9.1879C18.1256 11.1943 15.7496 12.0714 13.7432 11.147L12.8806 10.7495C12.2412 11.5306 11.5729 12.2337 10.8934 12.8671C12.4508 12.0868 14.397 12.3946 15.6325 13.7424L15.924 14.0604L14.8284 15.0646C13.1999 16.5573 10.6696 16.4472 9.17692 14.8187L8.90162 14.5183C8.1466 15.0744 7.39992 15.5528 6.68625 15.9628C6.45816 16.0939 6.23335 16.218 6.01259 16.3354C7.70668 15.9571 9.51501 16.7202 10.3908 18.3189L10.5266 18.5669L9.486 19.137C7.54854 20.1983 5.11749 19.4881 4.05611 17.5507L3.92849 17.3177C3.51637 17.4877 3.13804 17.6297 2.80235 17.747C2.30389 17.9213 1.89839 18.0417 1.61448 18.1191L1.15466 18.2339C0.749332 18.3192 0.351572 18.0598 0.26624 17.6545C0.180958 17.2494 0.440012 16.8519 0.844932 16.7662L0.847556 16.7657C0.844932 16.7662 0.927067 16.7518 1.21981 16.6719C1.47301 16.6029 1.84485 16.4928 2.30733 16.3311C2.87756 16.1317 3.58397 15.8546 4.3747 15.4802L4.0003 14.8317C2.89573 12.9186 3.55123 10.4722 5.4644 9.36762L6.10112 9.00001L6.56763 9.80801C7.51049 11.4411 7.1709 13.4627 5.86133 14.7066C5.88719 14.6919 5.9131 14.6771 5.93906 14.6622C7.20296 13.9361 8.57146 12.9847 9.89223 11.7498L9.46094 11.324C7.88886 9.77192 7.87263 7.23931 9.42468 5.66723L10.0617 5.02195L10.5876 5.5411C11.8895 6.82638 12.1243 8.78411 11.2852 10.3119C12.2621 9.1976 13.1781 7.90232 13.9637 6.39938C12.9106 4.4961 13.5727 2.09216 15.4643 1.00001L16.5961 0.346588L17.1775 1.35364C18.2821 3.26682 17.6266 5.71318 15.7134 6.81775L15.3182 7.04592Z" })));
};

var Icon$1d = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M4.5 14H6.5C7.05 14 7.5 13.55 7.5 13V11C7.5 10.45 7.05 10 6.5 10H4.5C3.95 10 3.5 10.45 3.5 11V13C3.5 13.55 3.95 14 4.5 14ZM4.5 19H6.5C7.05 19 7.5 18.55 7.5 18V16C7.5 15.45 7.05 15 6.5 15H4.5C3.95 15 3.5 15.45 3.5 16V18C3.5 18.55 3.95 19 4.5 19ZM4.5 9H6.5C7.05 9 7.5 8.55 7.5 8V6C7.5 5.45 7.05 5 6.5 5H4.5C3.95 5 3.5 5.45 3.5 6V8C3.5 8.55 3.95 9 4.5 9ZM9.5 14H19.5C20.05 14 20.5 13.55 20.5 13V11C20.5 10.45 20.05 10 19.5 10H9.5C8.95 10 8.5 10.45 8.5 11V13C8.5 13.55 8.95 14 9.5 14ZM9.5 19H19.5C20.05 19 20.5 18.55 20.5 18V16C20.5 15.45 20.05 15 19.5 15H9.5C8.95 15 8.5 15.45 8.5 16V18C8.5 18.55 8.95 19 9.5 19ZM8.5 6V8C8.5 8.55 8.95 9 9.5 9H19.5C20.05 9 20.5 8.55 20.5 8V6C20.5 5.45 20.05 5 19.5 5H9.5C8.95 5 8.5 5.45 8.5 6Z" })));
};

var Icon$1c = function (props) {
    return (React.createElement(Svg, __assign({ height: "31", fill: "none", xmlnsXlink: "http://www.w3.org/1999/xlink" }, props),
        React.createElement("rect", { width: "30.7597", height: "31", fill: "url(#pattern0)" }),
        React.createElement("rect", { width: "30.7597", height: "31", fill: "black", fillOpacity: "0.2" }),
        React.createElement("rect", { width: "30.7597", height: "31", fill: "black", fillOpacity: "0.2" }),
        React.createElement("defs", null,
            React.createElement("pattern", { id: "pattern0", patternContentUnits: "objectBoundingBox", width: "1", height: "1" },
                React.createElement("use", { xlinkHref: "#image0_361_1877", transform: "scale(0.0078125)" })),
            React.createElement("image", { id: "image0_361_1877", width: "128", height: "129", xlinkHref: "data:image/png;base64,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" }))));
};

var WhiteBGLogo = function (props) {
    return (React.createElement(Svg, __assign({ version: "1.1", id: "Layer_1", xmlnsXlink: "http://www.w3.org/1999/xlink", x: "0px", y: "0px", viewBox: "0 0 44 44", "enable-background": "new 0 0 44 44", xmlSpace: "preserve" }, props),
        React.createElement("image", { id: "image0", width: "44", height: "44", x: "0", y: "0", href: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIkAAACJCAYAAAAYJBvJAAABN2lDQ1BBZG9iZSBSR0IgKDE5OTgpAAAokZWPv0rDUBSHvxtFxaFWCOLgcCdRUGzVwYxJW4ogWKtDkq1JQ5ViEm6uf/oQjm4dXNx9AidHwUHxCXwDxamDQ4QMBYvf9J3fORzOAaNi152GUYbzWKt205Gu58vZF2aYAoBOmKV2q3UAECdxxBjf7wiA10277jTG+38yH6ZKAyNguxtlIYgK0L/SqQYxBMygn2oQD4CpTto1EE9AqZf7G1AKcv8ASsr1fBBfgNlzPR+MOcAMcl8BTB1da4Bakg7UWe9Uy6plWdLuJkEkjweZjs4zuR+HiUoT1dFRF8jvA2AxH2w3HblWtay99X/+PRHX82Vun0cIQCw9F1lBeKEuf1UYO5PrYsdwGQ7vYXpUZLs3cLcBC7dFtlqF8hY8Dn8AwMZP/fNTP8gAAAAJcEhZcwAAITgAACE4AUWWMWAAAAV5aVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA2LjAtYzAwMiA3OS4xNjQ0ODgsIDIwMjAvMDcvMTAtMjI6MDY6NTMgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCAyMi4wIChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjItMDktMTNUMjI6Mjc6NTMtMDM6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIyLTA5LTEzVDIyOjI4OjIzLTAzOjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIyLTA5LTEzVDIyOjI4OjIzLTAzOjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDplODI1MmM2Mi0zNzVmLTMzNDUtYjdmMi01MjRiNzdjZDBhMDMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ZTgyNTJjNjItMzc1Zi0zMzQ1LWI3ZjItNTI0Yjc3Y2QwYTAzIiB4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ9InhtcC5kaWQ6ZTgyNTJjNjItMzc1Zi0zMzQ1LWI3ZjItNTI0Yjc3Y2QwYTAzIj4gPHBob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4gPHJkZjpCYWc+IDxyZGY6bGk+eG1wLmRpZDpCN0E2NjMwODJFMjkxMUVEQTUyNTgzRUZDNjY5RjY5RjwvcmRmOmxpPiA8L3JkZjpCYWc+IDwvcGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPiA8eG1wTU06SGlzdG9yeT4gPHJkZjpTZXE+IDxyZGY6bGkgc3RFdnQ6YWN0aW9uPSJjcmVhdGVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOmU4MjUyYzYyLTM3NWYtMzM0NS1iN2YyLTUyNGI3N2NkMGEwMyIgc3RFdnQ6d2hlbj0iMjAyMi0wOS0xM1QyMjoyNzo1My0wMzowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIDIyLjAgKFdpbmRvd3MpIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Puzy0EsAAGYuSURBVHic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" })));
};

var Icon$1b = function (props) {
    return (React.createElement(Svg, __assign({ height: "31", fill: "none", xmlnsXlink: "http://www.w3.org/1999/xlink" }, props),
        React.createElement("rect", { width: "30.7597", height: "31", fill: "url(#pattern0)" }),
        React.createElement("rect", { width: "30.7597", height: "31", fill: "black", fillOpacity: "0.2" }),
        React.createElement("rect", { width: "30.7597", height: "31", fill: "black", fillOpacity: "0.2" }),
        React.createElement("defs", null,
            React.createElement("pattern", { id: "pattern0", patternContentUnits: "objectBoundingBox", width: "1", height: "1" },
                React.createElement("use", { xlinkHref: "#image0_361_1877", transform: "scale(0.0078125)" })),
            React.createElement("image", { id: "image0_361_1877", width: "128", height: "129", xlinkHref: "data:image/png;base64,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" }))));
};

var Icon$1a = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 25 25" }, props),
        React.createElement("path", { d: "M16.7095 3.10222C17.1006 1.8767 16.1861 0.625 14.8997 0.625C13.8505 0.625 13 1.47554 13 2.52473L13 6.16735C13 6.90335 13.5966 7.5 14.3326 7.5C14.9126 7.5 15.4259 7.12495 15.6022 6.57247L16.7095 3.10222Z", fill: "#F6AF5B" }),
        React.createElement("path", { d: "M8.29046 3.10222C7.89941 1.8767 8.81388 0.625 10.1003 0.625C11.1495 0.625 12 1.47554 12 2.52472L12 6.16736C12 6.90335 11.4034 7.5 10.6674 7.5C10.0874 7.5 9.57408 7.12495 9.39778 6.57247L8.29046 3.10222Z", fill: "#F6AF5B" }),
        React.createElement("path", { d: "M19.8989 24.1416L11.8536 16.0962C11.6583 15.901 11.6583 15.5844 11.8536 15.3891L15.3891 11.8536C15.5843 11.6583 15.9009 11.6583 16.0962 11.8536L24.1416 19.899C24.4325 20.1899 24.2671 20.6882 23.8599 20.7473L21.5113 21.0884C21.2923 21.1202 21.1202 21.2923 21.0884 21.5114L20.7473 23.8599C20.6882 24.2671 20.1899 24.4326 19.8989 24.1416Z", fill: "#AE5714" }),
        React.createElement("path", { d: "M5.19774 24.1416L13.2431 16.0962C13.4384 15.901 13.4384 15.5844 13.2431 15.3891L9.70759 11.8536C9.51233 11.6583 9.19575 11.6583 9.00049 11.8536L0.955098 19.899C0.664132 20.1899 0.829575 20.6882 1.23679 20.7473L3.58535 21.0884C3.80441 21.1202 3.97648 21.2923 4.0083 21.5114L4.34938 23.8599C4.40852 24.2671 4.90677 24.4326 5.19774 24.1416Z", fill: "#AE5714" }),
        React.createElement("ellipse", { cx: "12.5259", cy: "14.0971", rx: "8.89606", ry: "8.22211", fill: "#E17A2F" }),
        React.createElement("ellipse", { rx: "8.69974", ry: "8.36325", transform: "matrix(0.882297 -0.470694 0.529889 0.848067 12.478 12.6876)", fill: "#F6AF5B" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.8727 5.68848L21.0558 14.7566C20.9018 15.3031 20.6883 15.8274 20.422 16.3232L6.43117 6.69946C6.87202 6.31918 7.35491 5.97999 7.8727 5.68848ZM4.87291 8.47883L19.0217 18.2112C18.2987 18.9421 17.4342 19.5515 16.4682 20.0023L3.75 11.2539C3.94091 10.2547 4.32789 9.31792 4.87291 8.47883Z", fill: "#F7D29B" }),
        React.createElement("ellipse", { rx: "6.64749", ry: "6.39038", transform: "matrix(0.882297 -0.470693 0.52989 0.848067 12.4778 12.6875)", fill: "#E7974D" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.6821 10.1773C18.5825 9.96784 18.4695 9.7613 18.3429 9.55858C16.4727 6.56549 12.3308 5.53998 9.09162 7.26804C5.85244 8.9961 4.74261 12.8234 6.61276 15.8164C6.73956 16.0194 6.87681 16.2133 7.02351 16.3979C5.65271 13.5147 6.82182 10.0792 9.84162 8.46822C12.8612 6.85733 16.6652 7.63925 18.6821 10.1773Z", fill: "#E17A2F" }),
        React.createElement("path", { d: "M9.95047 14.0798C9.03077 14.1218 8.6939 13.361 8.65027 12.4055C8.60664 11.4501 8.87277 10.6617 9.79247 10.6197C10.7122 10.5777 11.049 11.3385 11.0927 12.294C11.1363 13.2495 10.8702 14.0378 9.95047 14.0798Z", fill: "#AE5714" }),
        React.createElement("path", { d: "M15.1194 14.0803C14.1997 14.1223 13.8628 13.3615 13.8192 12.406C13.7756 11.4505 14.0417 10.6622 14.9614 10.6202C15.8811 10.5782 16.218 11.339 16.2616 12.2945C16.3052 13.25 16.0391 14.0383 15.1194 14.0803Z", fill: "#AE5714" })));
};

var Icon$19 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 25 25" }, props),
        React.createElement("path", { d: "M16.7095 3.10222C17.1006 1.8767 16.1861 0.625 14.8997 0.625C13.8505 0.625 13 1.47554 13 2.52473L13 6.16735C13 6.90335 13.5966 7.5 14.3326 7.5C14.9126 7.5 15.4259 7.12495 15.6022 6.57247L16.7095 3.10222Z", fill: "#FFD800" }),
        React.createElement("path", { d: "M8.29046 3.10222C7.89941 1.8767 8.81388 0.625 10.1003 0.625C11.1495 0.625 12 1.47554 12 2.52472L12 6.16736C12 6.90335 11.4034 7.5 10.6674 7.5C10.0874 7.5 9.57408 7.12495 9.39778 6.57247L8.29046 3.10222Z", fill: "#FFD800" }),
        React.createElement("path", { d: "M19.8989 24.1416L11.8536 16.0962C11.6583 15.901 11.6583 15.5844 11.8536 15.3891L15.3891 11.8536C15.5843 11.6583 15.9009 11.6583 16.0962 11.8536L24.1416 19.899C24.4325 20.1899 24.2671 20.6882 23.8599 20.7473L21.5113 21.0884C21.2923 21.1202 21.1202 21.2923 21.0884 21.5114L20.7473 23.8599C20.6882 24.2671 20.1899 24.4326 19.8989 24.1416Z", fill: "#FFAF00" }),
        React.createElement("path", { d: "M5.19774 24.1416L13.2431 16.0962C13.4384 15.901 13.4384 15.5844 13.2431 15.3891L9.70759 11.8536C9.51233 11.6583 9.19575 11.6583 9.00049 11.8536L0.955098 19.899C0.664132 20.1899 0.829575 20.6882 1.23679 20.7473L3.58535 21.0884C3.80441 21.1202 3.97648 21.2923 4.0083 21.5114L4.34938 23.8599C4.40852 24.2671 4.90677 24.4326 5.19774 24.1416Z", fill: "#FFAF00" }),
        React.createElement("ellipse", { cx: "12.5259", cy: "14.0971", rx: "8.89606", ry: "8.22211", fill: "#EB8C00" }),
        React.createElement("ellipse", { rx: "8.69974", ry: "8.36325", transform: "matrix(0.882297 -0.470694 0.529889 0.848067 12.478 12.6876)", fill: "#FFD800" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.8727 5.68848L21.0558 14.7566C20.9018 15.3031 20.6883 15.8274 20.422 16.3232L6.43117 6.69946C6.87202 6.31918 7.35491 5.97999 7.8727 5.68848ZM4.87291 8.47883L19.0217 18.2112C18.2987 18.9421 17.4342 19.5515 16.4682 20.0023L3.75 11.2539C3.94091 10.2547 4.32789 9.31792 4.87291 8.47883Z", fill: "#FEED8D" }),
        React.createElement("ellipse", { rx: "6.64749", ry: "6.39038", transform: "matrix(0.882297 -0.470693 0.52989 0.848067 12.4778 12.6875)", fill: "#FFC700" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.6821 10.1773C18.5825 9.96784 18.4695 9.7613 18.3429 9.55858C16.4727 6.56549 12.3308 5.53998 9.09162 7.26804C5.85244 8.9961 4.74261 12.8234 6.61276 15.8164C6.73956 16.0194 6.87681 16.2133 7.02351 16.3979C5.65271 13.5147 6.82182 10.0792 9.84162 8.46822C12.8612 6.85733 16.6652 7.63925 18.6821 10.1773Z", fill: "#FFAF00" }),
        React.createElement("path", { d: "M9.95047 14.0798C9.03077 14.1218 8.6939 13.361 8.65027 12.4055C8.60664 11.4501 8.87277 10.6617 9.79247 10.6197C10.7122 10.5777 11.049 11.3385 11.0927 12.294C11.1363 13.2495 10.8702 14.0378 9.95047 14.0798Z", fill: "#EB8C00" }),
        React.createElement("path", { d: "M15.1194 14.0803C14.1997 14.1223 13.8628 13.3615 13.8192 12.406C13.7756 11.4505 14.0417 10.6622 14.9614 10.6202C15.8811 10.5782 16.218 11.339 16.2616 12.2945C16.3052 13.25 16.0391 14.0383 15.1194 14.0803Z", fill: "#EB8C00" })));
};

var Icon$18 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 25 25" }, props),
        React.createElement("path", { d: "M16.7095 3.10222C17.1006 1.8767 16.1861 0.625 14.8997 0.625C13.8505 0.625 13 1.47554 13 2.52473L13 6.16735C13 6.90335 13.5966 7.5 14.3326 7.5C14.9126 7.5 15.4259 7.12495 15.6022 6.57247L16.7095 3.10222Z", fill: "#9A6AFF" }),
        React.createElement("path", { d: "M8.29046 3.10222C7.89941 1.8767 8.81388 0.625 10.1003 0.625C11.1495 0.625 12 1.47554 12 2.52472L12 6.16736C12 6.90335 11.4034 7.5 10.6674 7.5C10.0874 7.5 9.57408 7.12495 9.39778 6.57247L8.29046 3.10222Z", fill: "#9A6AFF" }),
        React.createElement("path", { d: "M19.8989 24.1416L11.8536 16.0962C11.6583 15.901 11.6583 15.5844 11.8536 15.3891L15.3891 11.8536C15.5843 11.6583 15.9009 11.6583 16.0962 11.8536L24.1416 19.899C24.4325 20.1899 24.2671 20.6882 23.8599 20.7473L21.5113 21.0884C21.2923 21.1202 21.1202 21.2923 21.0884 21.5114L20.7473 23.8599C20.6882 24.2671 20.1899 24.4326 19.8989 24.1416Z", fill: "#A880FD" }),
        React.createElement("path", { d: "M5.19774 24.1416L13.2431 16.0962C13.4384 15.901 13.4384 15.5844 13.2431 15.3891L9.70759 11.8536C9.51233 11.6583 9.19575 11.6583 9.00049 11.8536L0.955098 19.899C0.664132 20.1899 0.829575 20.6882 1.23679 20.7473L3.58535 21.0884C3.80441 21.1202 3.97648 21.2923 4.0083 21.5114L4.34938 23.8599C4.40852 24.2671 4.90677 24.4326 5.19774 24.1416Z", fill: "#A880FD" }),
        React.createElement("ellipse", { cx: "12.5259", cy: "14.0971", rx: "8.89606", ry: "8.22211", fill: "#751c0b" }),
        React.createElement("ellipse", { rx: "8.69974", ry: "8.36325", transform: "matrix(0.882297 -0.470694 0.529889 0.848067 12.478 12.6876)", fill: "#9A6AFF" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.8727 5.68848L21.0558 14.7566C20.9018 15.3031 20.6883 15.8274 20.422 16.3232L6.43117 6.69946C6.87202 6.31918 7.35491 5.97999 7.8727 5.68848ZM4.87291 8.47883L19.0217 18.2112C18.2987 18.9421 17.4342 19.5515 16.4682 20.0023L3.75 11.2539C3.94091 10.2547 4.32789 9.31792 4.87291 8.47883Z", fill: "#CAB3F8" }),
        React.createElement("ellipse", { rx: "6.64749", ry: "6.39038", transform: "matrix(0.882297 -0.470693 0.52989 0.848067 12.4778 12.6875)", fill: "#8F5BFD" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.6821 10.1773C18.5825 9.96784 18.4695 9.7613 18.3429 9.55858C16.4727 6.56549 12.3308 5.53998 9.09162 7.26804C5.85244 8.9961 4.74261 12.8234 6.61276 15.8164C6.73956 16.0194 6.87681 16.2133 7.02351 16.3979C5.65271 13.5147 6.82182 10.0792 9.84162 8.46822C12.8612 6.85733 16.6652 7.63925 18.6821 10.1773Z", fill: "#751c0b" }),
        React.createElement("path", { d: "M9.95047 14.0798C9.03077 14.1218 8.6939 13.361 8.65027 12.4055C8.60664 11.4501 8.87277 10.6617 9.79247 10.6197C10.7122 10.5777 11.049 11.3385 11.0927 12.294C11.1363 13.2495 10.8702 14.0378 9.95047 14.0798Z", fill: "#452A7A" }),
        React.createElement("path", { d: "M15.1194 14.0803C14.1997 14.1223 13.8628 13.3615 13.8192 12.406C13.7756 11.4505 14.0417 10.6622 14.9614 10.6202C15.8811 10.5782 16.218 11.339 16.2616 12.2945C16.3052 13.25 16.0391 14.0383 15.1194 14.0803Z", fill: "#452A7A" })));
};

var Icon$17 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 25 25" }, props),
        React.createElement("path", { d: "M16.7095 3.10222C17.1006 1.8767 16.1861 0.625 14.8997 0.625C13.8505 0.625 13 1.47554 13 2.52473L13 6.16735C13 6.90335 13.5966 7.5 14.3326 7.5C14.9126 7.5 15.4259 7.12495 15.6022 6.57247L16.7095 3.10222Z", fill: "#C0C4C6" }),
        React.createElement("path", { d: "M8.29046 3.10222C7.89941 1.8767 8.81388 0.625 10.1003 0.625C11.1495 0.625 12 1.47554 12 2.52472L12 6.16736C12 6.90335 11.4034 7.5 10.6674 7.5C10.0874 7.5 9.57408 7.12495 9.39778 6.57247L8.29046 3.10222Z", fill: "#C0C4C6" }),
        React.createElement("path", { d: "M19.8989 24.1416L11.8536 16.0962C11.6583 15.901 11.6583 15.5844 11.8536 15.3891L15.3891 11.8536C15.5843 11.6583 15.9009 11.6583 16.0962 11.8536L24.1416 19.899C24.4325 20.1899 24.2671 20.6882 23.8599 20.7473L21.5113 21.0884C21.2923 21.1202 21.1202 21.2923 21.0884 21.5114L20.7473 23.8599C20.6882 24.2671 20.1899 24.4326 19.8989 24.1416Z", fill: "#7D7D7D" }),
        React.createElement("path", { d: "M5.19774 24.1416L13.2431 16.0962C13.4384 15.901 13.4384 15.5844 13.2431 15.3891L9.70759 11.8536C9.51233 11.6583 9.19575 11.6583 9.00049 11.8536L0.955098 19.899C0.664132 20.1899 0.829575 20.6882 1.23679 20.7473L3.58535 21.0884C3.80441 21.1202 3.97648 21.2923 4.0083 21.5114L4.34938 23.8599C4.40852 24.2671 4.90677 24.4326 5.19774 24.1416Z", fill: "#7D7D7D" }),
        React.createElement("ellipse", { cx: "12.5259", cy: "14.0971", rx: "8.89606", ry: "8.22211", fill: "#969696" }),
        React.createElement("ellipse", { rx: "8.69974", ry: "8.36325", transform: "matrix(0.882297 -0.470694 0.529889 0.848067 12.478 12.6876)", fill: "#C0C4C6" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.8727 5.68848L21.0558 14.7566C20.9018 15.3031 20.6883 15.8274 20.422 16.3232L6.43117 6.69946C6.87202 6.31918 7.35491 5.97999 7.8727 5.68848ZM4.87291 8.47883L19.0217 18.2112C18.2987 18.9421 17.4342 19.5515 16.4682 20.0023L3.75 11.2539C3.94091 10.2547 4.32789 9.31792 4.87291 8.47883Z", fill: "#D8D8D8" }),
        React.createElement("ellipse", { rx: "6.64749", ry: "6.39038", transform: "matrix(0.882297 -0.470693 0.52989 0.848067 12.4778 12.6875)", fill: "#B2B2B2" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.6821 10.1773C18.5825 9.96784 18.4695 9.7613 18.3429 9.55858C16.4727 6.56549 12.3308 5.53998 9.09162 7.26804C5.85244 8.9961 4.74261 12.8234 6.61276 15.8164C6.73956 16.0194 6.87681 16.2133 7.02351 16.3979C5.65271 13.5147 6.82182 10.0792 9.84162 8.46822C12.8612 6.85733 16.6652 7.63925 18.6821 10.1773Z", fill: "#969696" }),
        React.createElement("path", { d: "M9.95047 14.0798C9.03077 14.1218 8.6939 13.361 8.65027 12.4055C8.60664 11.4501 8.87277 10.6617 9.79247 10.6197C10.7122 10.5777 11.049 11.3385 11.0927 12.294C11.1363 13.2495 10.8702 14.0378 9.95047 14.0798Z", fill: "#7D7D7D" }),
        React.createElement("path", { d: "M15.1194 14.0803C14.1997 14.1223 13.8628 13.3615 13.8192 12.406C13.7756 11.4505 14.0417 10.6622 14.9614 10.6202C15.8811 10.5782 16.218 11.339 16.2616 12.2945C16.3052 13.25 16.0391 14.0383 15.1194 14.0803Z", fill: "#7D7D7D" })));
};

var Icon$16 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 25 25" }, props),
        React.createElement("path", { d: "M16.7095 3.10222C17.1006 1.8767 16.1861 0.625 14.8997 0.625C13.8505 0.625 13 1.47554 13 2.52473L13 6.16735C13 6.90335 13.5966 7.5 14.3326 7.5C14.9126 7.5 15.4259 7.12495 15.6022 6.57247L16.7095 3.10222Z", fill: "#53DEE9" }),
        React.createElement("path", { d: "M8.29046 3.10222C7.89941 1.8767 8.81388 0.625 10.1003 0.625C11.1495 0.625 12 1.47554 12 2.52472L12 6.16736C12 6.90335 11.4034 7.5 10.6674 7.5C10.0874 7.5 9.57408 7.12495 9.39778 6.57247L8.29046 3.10222Z", fill: "#53DEE9" }),
        React.createElement("path", { d: "M19.8989 24.1416L11.8536 16.0962C11.6583 15.901 11.6583 15.5844 11.8536 15.3891L15.3891 11.8536C15.5843 11.6583 15.9009 11.6583 16.0962 11.8536L24.1416 19.899C24.4325 20.1899 24.2671 20.6882 23.8599 20.7473L21.5113 21.0884C21.2923 21.1202 21.1202 21.2923 21.0884 21.5114L20.7473 23.8599C20.6882 24.2671 20.1899 24.4326 19.8989 24.1416Z", fill: "#1FC7D4" }),
        React.createElement("path", { d: "M5.19774 24.1416L13.2431 16.0962C13.4384 15.901 13.4384 15.5844 13.2431 15.3891L9.70759 11.8536C9.51233 11.6583 9.19575 11.6583 9.00049 11.8536L0.955098 19.899C0.664132 20.1899 0.829575 20.6882 1.23679 20.7473L3.58535 21.0884C3.80441 21.1202 3.97648 21.2923 4.0083 21.5114L4.34938 23.8599C4.40852 24.2671 4.90677 24.4326 5.19774 24.1416Z", fill: "#1FC7D4" }),
        React.createElement("ellipse", { cx: "12.5259", cy: "14.0971", rx: "8.89606", ry: "8.22211", fill: "#0098A1" }),
        React.createElement("ellipse", { rx: "8.69974", ry: "8.36325", transform: "matrix(0.882297 -0.470694 0.529889 0.848067 12.478 12.6876)", fill: "#53DEE9" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.8727 5.68848L21.0558 14.7566C20.9018 15.3031 20.6883 15.8274 20.422 16.3232L6.43117 6.69946C6.87202 6.31918 7.35491 5.97999 7.8727 5.68848ZM4.87291 8.47883L19.0217 18.2112C18.2987 18.9421 17.4342 19.5515 16.4682 20.0022L3.75 11.2539C3.94091 10.2547 4.32789 9.31792 4.87291 8.47883Z", fill: "#84F0F9" }),
        React.createElement("ellipse", { rx: "6.64749", ry: "6.39038", transform: "matrix(0.882297 -0.470693 0.52989 0.848067 12.4778 12.6875)", fill: "#1FC7D4" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.6821 10.1773C18.5825 9.96784 18.4695 9.7613 18.3429 9.55858C16.4727 6.56549 12.3308 5.53998 9.09162 7.26804C5.85244 8.9961 4.74261 12.8234 6.61276 15.8164C6.73956 16.0194 6.87681 16.2133 7.02351 16.3979C5.65271 13.5147 6.82182 10.0792 9.84162 8.46822C12.8612 6.85733 16.6652 7.63925 18.6821 10.1773Z", fill: "#0098A1" }),
        React.createElement("path", { d: "M9.95096 14.0798C9.03126 14.1218 8.69439 13.361 8.65076 12.4055C8.60713 11.4501 8.87326 10.6617 9.79296 10.6197C10.7127 10.5777 11.0495 11.3385 11.0932 12.294C11.1368 13.2495 10.8707 14.0378 9.95096 14.0798Z", fill: "#017178" }),
        React.createElement("path", { d: "M15.1199 14.0803C14.2002 14.1223 13.8633 13.3615 13.8197 12.406C13.7761 11.4505 14.0422 10.6622 14.9619 10.6202C15.8816 10.5782 16.2185 11.339 16.2621 12.2945C16.3057 13.25 16.0396 14.0383 15.1199 14.0803Z", fill: "#017178" })));
};

var Icon$15 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 35 33" }, props),
        React.createElement("path", { d: "m32.9582 1-13.1341 9.7183 2.4424-5.72731z", fill: "#e17726", stroke: "#e17726" }),
        React.createElement("g", { fill: "#e27625", stroke: "#e27625" },
            React.createElement("path", { d: "m2.66296 1 13.01714 9.809-2.3254-5.81802z" }),
            React.createElement("path", { d: "m28.2295 23.5335-3.4947 5.3386 7.4829 2.0603 2.1436-7.2823z" }),
            React.createElement("path", { d: "m1.27281 23.6501 2.13055 7.2823 7.46994-2.0603-3.48166-5.3386z" }),
            React.createElement("path", { d: "m10.4706 14.5149-2.0786 3.1358 7.405.3369-.2469-7.969z" }),
            React.createElement("path", { d: "m25.1505 14.5149-5.1575-4.58704-.1688 8.05974 7.4049-.3369z" }),
            React.createElement("path", { d: "m10.8733 28.8721 4.4819-2.1639-3.8583-3.0062z" }),
            React.createElement("path", { d: "m20.2659 26.7082 4.4689 2.1639-.6105-5.1701z" })),
        React.createElement("path", { d: "m24.7348 28.8721-4.469-2.1639.3638 2.9025-.039 1.231z", fill: "#d5bfb2", stroke: "#d5bfb2" }),
        React.createElement("path", { d: "m10.8732 28.8721 4.1572 1.9696-.026-1.231.3508-2.9025z", fill: "#d5bfb2", stroke: "#d5bfb2" }),
        React.createElement("path", { d: "m15.1084 21.7842-3.7155-1.0884 2.6243-1.2051z", fill: "#233447", stroke: "#233447" }),
        React.createElement("path", { d: "m20.5126 21.7842 1.0913-2.2935 2.6372 1.2051z", fill: "#233447", stroke: "#233447" }),
        React.createElement("path", { d: "m10.8733 28.8721.6495-5.3386-4.13117.1167z", fill: "#cc6228", stroke: "#cc6228" }),
        React.createElement("path", { d: "m24.0982 23.5335.6366 5.3386 3.4946-5.2219z", fill: "#cc6228", stroke: "#cc6228" }),
        React.createElement("path", { d: "m27.2291 17.6507-7.405.3369.6885 3.7966 1.0913-2.2935 2.6372 1.2051z", fill: "#cc6228", stroke: "#cc6228" }),
        React.createElement("path", { d: "m11.3929 20.6958 2.6242-1.2051 1.0913 2.2935.6885-3.7966-7.40495-.3369z", fill: "#cc6228", stroke: "#cc6228" }),
        React.createElement("path", { d: "m8.392 17.6507 3.1049 6.0513-.1039-3.0062z", fill: "#e27525", stroke: "#e27525" }),
        React.createElement("path", { d: "m24.2412 20.6958-.1169 3.0062 3.1049-6.0513z", fill: "#e27525", stroke: "#e27525" }),
        React.createElement("path", { d: "m15.797 17.9876-.6886 3.7967.8704 4.4833.1949-5.9087z", fill: "#e27525", stroke: "#e27525" }),
        React.createElement("path", { d: "m19.8242 17.9876-.3638 2.3584.1819 5.9216.8704-4.4833z", fill: "#e27525", stroke: "#e27525" }),
        React.createElement("path", { d: "m20.5127 21.7842-.8704 4.4834.6236.4406 3.8584-3.0062.1169-3.0062z", fill: "#f5841f", stroke: "#f5841f" }),
        React.createElement("path", { d: "m11.3929 20.6958.104 3.0062 3.8583 3.0062.6236-.4406-.8704-4.4834z", fill: "#f5841f", stroke: "#f5841f" }),
        React.createElement("path", { d: "m20.5906 30.8417.039-1.231-.3378-.2851h-4.9626l-.3248.2851.026 1.231-4.1572-1.9696 1.4551 1.1921 2.9489 2.0344h5.0536l2.962-2.0344 1.442-1.1921z", fill: "#c0ac9d", stroke: "#c0ac9d" }),
        React.createElement("path", { d: "m20.2659 26.7082-.6236-.4406h-3.6635l-.6236.4406-.3508 2.9025.3248-.2851h4.9626l.3378.2851z", fill: "#161616", stroke: "#161616" }),
        React.createElement("path", { d: "m33.5168 11.3532 1.1043-5.36447-1.6629-4.98873-12.6923 9.3944 4.8846 4.1205 6.8983 2.0085 1.52-1.7752-.6626-.4795 1.0523-.9588-.8054-.622 1.0523-.8034z", fill: "#763e1a", stroke: "#763e1a" }),
        React.createElement("path", { d: "m1 5.98873 1.11724 5.36447-.71451.5313 1.06527.8034-.80545.622 1.05228.9588-.66255.4795 1.51997 1.7752 6.89835-2.0085 4.8846-4.1205-12.69233-9.3944z", fill: "#763e1a", stroke: "#763e1a" }),
        React.createElement("path", { d: "m32.0489 16.5234-6.8983-2.0085 2.0786 3.1358-3.1049 6.0513 4.1052-.0519h6.1318z", fill: "#f5841f", stroke: "#f5841f" }),
        React.createElement("path", { d: "m10.4705 14.5149-6.89828 2.0085-2.29944 7.1267h6.11883l4.10519.0519-3.10487-6.0513z", fill: "#f5841f", stroke: "#f5841f" }),
        React.createElement("path", { d: "m19.8241 17.9876.4417-7.5932 2.0007-5.4034h-8.9119l2.0006 5.4034.4417 7.5932.1689 2.3842.013 5.8958h3.6635l.013-5.8958z", fill: "#f5841f", stroke: "#f5841f" })));
};

var Icon$14 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M18 13H6C5.45 13 5 12.55 5 12C5 11.45 5.45 11 6 11H18C18.55 11 19 11.45 19 12C19 12.55 18.55 13 18 13Z" })));
};

var Icon$13 = function (props) {
    var theme = useTheme();
    var primaryColor = theme.isDark ? "#3C3742" : "#e9eaeb";
    var secondaryColor = theme.isDark ? "#666171" : "#bdc2c4";
    return (React.createElement(Svg, __assign({ viewBox: "0 0 32 32" }, props),
        React.createElement("path", { d: "M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z", fill: primaryColor }),
        React.createElement("mask", { id: "A", "mask-type": "alpha", maskUnits: "userSpaceOnUse", x: "0", y: "0", width: "32", height: "32" },
            React.createElement("path", { d: "M32 16c0 8.837-7.163 16-16 16S0 24.837 0 16 7.163 0 16 0s16 7.163 16 16z", fill: "#c4c4c4" })),
        React.createElement("g", { mask: "url(#A)" },
            React.createElement("path", { d: "M25.128 16.436c0 3.115-4.133 5.641-9.231 5.641s-9.231-2.526-9.231-5.641V15h18.461v1.436zm2.205 13.806c0-3.815-5.074-6.908-11.333-6.908S4.667 26.426 4.667 30.242V32h22.667v-1.759z", fill: secondaryColor }),
            React.createElement("path", { fillRule: "evenodd", d: "M10.234 5.601C9.942 4.264 10.96 3 12.328 3c1.184 0 2.143.959 2.143 2.143v3.873l1.427-.067c.589 0 1.166.034 1.724.098V5.143c0-1.184.959-2.143 2.143-2.143 1.368 0 2.386 1.264 2.093 2.601l-.931 4.258c2.529 1.006 4.201 2.749 4.201 4.731 0 3.115-4.133 5.641-9.231 5.641s-9.231-2.526-9.231-5.641c0-2.053 1.794-3.849 4.476-4.836l-.908-4.153z", fill: secondaryColor }),
            React.createElement("ellipse", { cx: "12.308", cy: "14.846", rx: "1.026", ry: "1.538", fill: primaryColor }),
            React.createElement("ellipse", { cx: "19.385", cy: "14.846", rx: "1.026", ry: "1.538", fill: primaryColor }))));
};

var Icon$12 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z" })));
};

var Icon$11 = function (props) {
    return (React.createElement(Svg, __assign({ height: "31", fill: "none", xmlnsXlink: "http://www.w3.org/1999/xlink" }, props),
        React.createElement("rect", { width: "30.7597", height: "31", fill: "url(#pattern0)" }),
        React.createElement("rect", { width: "30.7597", height: "31", fill: "black", fillOpacity: "0.2" }),
        React.createElement("rect", { width: "30.7597", height: "31", fill: "black", fillOpacity: "0.2" }),
        React.createElement("defs", null,
            React.createElement("pattern", { id: "pattern0", patternContentUnits: "objectBoundingBox", width: "1", height: "1" },
                React.createElement("use", { xlinkHref: "#image0_361_1877", transform: "scale(0.0078125)" })),
            React.createElement("image", { id: "image0_361_1877", width: "128", height: "129", xlinkHref: "data:image/png;base64,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" }))));
};

var Icon$10 = function (props) {
    return (React.createElement(Svg, __assign({ height: "31", fill: "none", xmlnsXlink: "http://www.w3.org/1999/xlink" }, props),
        React.createElement("rect", { width: "30.7597", height: "31", fill: "url(#pattern0)" }),
        React.createElement("rect", { width: "30.7597", height: "31", fill: "black", fillOpacity: "0.2" }),
        React.createElement("rect", { width: "30.7597", height: "31", fill: "black", fillOpacity: "0.2" }),
        React.createElement("defs", null,
            React.createElement("pattern", { id: "pattern0", patternContentUnits: "objectBoundingBox", width: "1", height: "1" },
                React.createElement("use", { xlinkHref: "#image0_361_1877", transform: "scale(0.0078125)" })),
            React.createElement("image", { id: "image0_361_1877", width: "128", height: "129", xlinkHref: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACBCAYAAAAIYrJuAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAEehJREFUeNrsndtyFMcZgLvXOFqcKiPHl1mtdJcLX8ADxGW9AaSMwRwMK4w4uip6gyhvIFcZc5K0EpizqYK73EWu5AHERa4jrbiOkeOEVSWm0z3duzuHPvw98/fMpjxTBTuCRWjn+/r//+7p6aaMMVIfP99jX30Jqj/2nrRmCSWz/FT8muTnBwt+y13+a2ni45eLrjfSOgJUBP1xa5K/LHDYHf46LWnEyaD8N3NcgrU6Aowb/EetRQ54gZ8eICwG23Se/5ipU8A4gX84dYhDFS3yIAh8cQle1SlgnOATshG1ejqgawn7xdPBCx7+D7ne1KjRlAD/AYfPFPwhezpq5YTAz4HwVUFJagGqhn8/Bj8DNYgEEXze+l/VAlQN/14s7DMTVFQJvOAPa4C9p62Oqhhf8X+8VKNDhq/L55k/K1wTeMOPvlX/218L4L8v+o3qIwb/GwWfqpxvAognQW5mIgV0Un8mRqE2eFSYrFHmgH9XE/ZNoRwnHRRqsI1hZVpLUBz+HQWfxa5pWAkKR2tbEVhLUAS+TyvOJwFKqnb1AmoJIPDXdf38oBK84OezE0eL12mQbmAtgeXor7XtOR9fAtnyP8Ep0qHjALUEOvhdCZ8xesAPbG4JUOH7DgTVEmjgD3I+l4AElkCG/WO43XMxDuA70gwqPvpfTQtRDgW6/q+aX2xvVgZ/tW3s51PKiF/fH/TeF2LCyMTxHfSxmTwCgIoQJcCGihxhDkq+478/46/Pmle2t0qBv9IWt3RHBZ8GHLIEssF9uhNkYC6fAPF8VJUENPMqZFhsXt7eCArfNryLL4G8xid2go3K+gnAMl87i5IgElDbK1sXs22aF3uoF62/3IYN7+JJIK/tyZ2gQ/KNAvBHheFjc2HIc7X4ALPqA4WGL17P8pPN/q02Wv3Rv9223NI1nxcoDEuBDxeAWb5mSoJHJUjghj/4elrk6QhcUfi32oBbuqgSgOCryFqCACb4LHGuJJgKJwEc/uD8QCTBcn4J+jfb5rH9MBLI4vqUE/4aVg+rkRt+5j1UTHTc2HsYQAJ/+EkJVvwlyMAv2LcHSCBb/mkH/GsR/LPhU4Af/GRN8KAsCazwkxKswiXo35iGj+3jSFAJfLMA6R8eBj+ZDrAkoIXgJyXouiXoX59WOZ/Cx/aLSSDhf+aA/zWHTxV8iivAthU+8YI/kkCkg/sFJcCBn5RgzSwBv8ipnE9JYAlkzj/jgH891vJ1XciCAmwhwx8cUoJ7OSWAwgfVCSMJeN98I7p964IP/5x5JZAt/ywQPmKrTwuwEQB+sib4xlMCI1imBwuDPxiYiSKBmsAxyK2OnI8uAQz+jVjYD9D6RwKEgZ+sCaASGMGiwE+kAzF/j3ep7IM8+BJE8Jsd+0gl74Xwls/OgkYRiwgw8fFL8eF3A8FPpoO7DgloTAIIfJILflyC78hb5C/OQR48CaKc35xzwL/VjoV9x0xhpF7AUkD4o3TAotBrluBqTAJoXs8Hf/Bv36XvvnmLS+ABNLcEsuWf84FPzNPFUQVgZMkeBSjWJAeZDtYtElxREtCBBCwM/NFH208PvHk9fE46jAQw+LfblpzPwqQA8Zu6m7cUGH6iJuDdMbMEl1VNQNkLAMB88JMChZRAhv3PHfCX29muXmYgjAVLAUKCxWHoLQrfMXjEu0BuCS4NJLCkAwz48UgwiS6BhH/eAX+lne3q+Tw9hDgS2OHff7cwfNggSFQT9LsWCeQ9fb0EReCbxhsIl+C9n7gEDEMCGfbngfAJILqlJcAWYOLYy03ZHaO7geEnaoL+qkWCCxoJisI3RQLKZCR4701RCWDwV9v64d0SJcjcC5g4ziVgUSW+Gxh+siZYsUgwn5IACz7JwB+lg1/llkDCv+CA323bh3d9ZhBhChBJ8OmOjAQMOD5Q/FaoW4LzMQmw4NMY/Gxa2E/f5xK87SWBzPkXgfCNxR5QglACaCUIBz9ZEyxbJBCVNE2OGKLB16cHHwlky7/kgL/Wdg/vulo6LUGASIITSgKRDsLCTwwW8f6wWYK5kQRB4ftJoOBvW+HvrU/pu3rjlgISEpzcyVUT5JoQGS8Mb1kk6PRecfiJSBAEfryLaJZAwr8Mg2+cKTxuKSAhwSm/mkALnxGfYVMpwU2zBNGdNEpySuDZVTRLIHP+FQf8O1OJsK+VYBxTgFUCX/j+0cAtwZk8EuSAr5dAwr/qgH93StvVyyVBFSkgccFPa2oCFgR+sjC8YZ4CHU2lAktQAD5JdBH/FoX9Lxzwv5lKDvJgS1C2AOqCj2qC2M8fAP7gyVgZCa5bJDgNkQAB/mB4t0F+C4bvAEspg9cByT/brEQAFXoThWFA+Ml08LVFglM2CRDhA56M3rs35dXVy/Rm3K1/2zXKGFQAVYRF6YDD3w0MHy7ByQKFIRb8+4auHkGVYKOyFKCTIFMT4MNP1gTXLBKcSEvAyoef92lgeFdwDUsAlNXC06tlBIIvz3kFTt/jRRjPwzYg8jE1tjHcfSM0/AcKfvhh8+3m572ZsYgAsdE5/WBRCPjiJk2DfEAcy9VEq2m40gEW/IeOET6P1g14pHwRsxeAul9A9PhV7keqgPB5N8wH0N6TllyfIB0JQsAv2PqdvSpCvuONbbbSbqA1EpzrwWoCHXzmDV/WBK5IIKa7pSMBFvxHLX217zuQQ0FjBCK6dgjygb5cPM9P2nECJ3zd++zw4RIcHUrwHPARnoPgP26pls+wCzyTBEd469/C5hVsyxi1OINMB3ngExB8/1b7tCVEEBs2HdaAX1LPSRAYfBJy8mw8Hcw1O721EJyC7hlkX1oFFb6XBEUOXlNYqv0gEszx7vZaqM8TdMeQ5nzPcAMpCHxQOigE/9uWo9pnmGsDivOg8IMLEElwIV4Y0pDwg0owhO+EaYio/hLMTZwJC78UASIJLorCkLoLw+Lw4xI8Q4P/tLXgV+2zfOBHRynwg9cAmZpguPqGpjDcx+G/jwI/fvyO1wPPCsIXkWQrU8eA8jmFvzee80+XA7+0CDCMBJe39TOL9qmWT1DhE6R+8xGiWxYWo9+vy/klwi9dAK0EAv6kgs9IckCo+HEYSQBzuLYOLjEfCeYmTpULvxIBIgmuKAn2kR8j+FTBN3WHqj0mrQWdMyKAJKgEftT+qrqq9JfsN6TJuICUw1cXabBZcvp1HA8ak9R5Lj4f1b6H/Yu+JnvVfchKIsDeavs4mWCr/CK8kxkXGL9IsGWVAHyejQTsxwi+qHu6/a+mOz8LASL4TQWfxHN+EAmeI/zIG85IkEOCGPzBUYkEpQqwtxJr+WnATHWbcCUovA0u70auERIbyUSQIILfp/s136fbv1auBI1S4f8iFvaNoNEkeA65sYPWnQRKwP7ZMMEfSfB1eRKUIsDeMof/NodPBjmfkMASvCCI987VYNJcUQm08Kl23KDbv16OBMEF6N9W8FkKfjgJgtwRVKkgtwQR/Nca+Obzbv9GeAka4eGTVcboO1bgeBIEvR0MliAFmf3gDT8mQTuoBOEmhCy3P+R6/Yl/kHe0z/J7rf0H+HdlTgh52hJQutY3Dfr5u7nhx3sNc82L/0cTQqJdOmhsg6XYB9M+019cAvfkUHlTZ424h4eFCB2ASE4J2CsU+CMJLuBLgC5AtLgDjZ5bmzbBzS+B5sJQ9/Z1Cr5o2dCdy6DRxChB1PL/jQZ/cD7XnMeVIEQNIBacnLbl9+GUZ1cdwHR/R5PLsjB0+IQMlrX91j6pxFQTBIIva4Jl3JoA97mAm22xiNOfoa0ZHAm0f8fkdqrH0OFn9/H5BB4JAsJP3DxqnseJBNgRYMGn0gdHguzfcTA0NPxRJHgMiARvyFUwfFONA4MvB4tWcCIBWgToX5+e4T/Y30nOSp9S8H4AsuVb9tJFgp/dzu34S8h2bp6rfhL9FDLgvMHmuWKRADMCHBmO51tzuP7PmKnPn16QiZUOXz2aTq1b4omj+cW2aJXrJcGXNUG3WCTAE4CpmTNpCQiaBBL+SWT4zAl/UHg6d0MbSkCVBGHhjwrDAhJgCvBREprmeb/8Ejh31MwNn7hqDprdIfW+Q4KrKhKEhz+qCdbySYAiAM99M3qgKBI4N1WMFox4Q/6KCp9k4CcluOcpQWIcAxX+oIbq7q1PdaqKADNmoB4SsIwEsuVbNlVUS8ZssO8bH/D3vkaDb78P4dwIK5LgSromYLgrhGbXFOju3fGTALcbaARqkMAeEV5wCaxbq6mVw+Sz//+hhP2jsd8pARS+8z1KgrsOCS4PagJE+JTYFpTo8p+pU40AkFwKGyOQizBatlZTawcmF35wSYAHPynBHYcEl3wKQwIeD7CsMwiWIMztYIgEzDbIY99aTa4ealj/xyQBPvykBOsOCS72AIUhPBoAFpns8hTVqUYAeFWdPnfurqUWkVbwDYNHaQmgcw8go5EWCWx7IGklCAd/VBPcs0sQdkaQnwTO3bXUMvLulb/iErxJSUB0RarnkDTR9lykBF2HBBd62cGiMPBH6eC+WYLwcwKN4T5x4SV8y+qXaiMJDXwGl4AQ251Fj1Sh6bbGI8GqQ4L53qgmCAvfKUF508KNOZ8699hRW8lYWr5lK7X/xtJBWPhJCVYcEpzv6QvDovCppSZ4kN01vdwHQ0w537LHjmpNgLBvuQn1U1qCYPCTEiw7JPgcVhNYp9L5RANRrD5MSlD+o2HpnG/ZZkXlU1jOh0jwPZeA0NfAW8554ScluO0hgQs+KQSfqCl6a/GbWpU8GzjM+ZadNlRFDYev6+8ZJSCvi0QAAPykBLccEpzTFIb48AevB3lDWahSABn2LTttqD61R8sn8O3mf4oma5olwIOflOCmQ4K5ZE0QCP7gB/vD3uPWTBUCSPiWzRbUqNoGvwBw+CVJkAN+UoIbDgk6MhKgwafEtgP5QtkCuOHfTbZ87W4argMqwZto/h5XgfwAvkOZD35MAmrd+SQuAeays4ZNpztlCgCHr7ulS4u8GiXY5RJ8GM1jcKxtjACfxCeV2Da9EMfE2R1tTYAIPyoI9560jjTGAr64rUoVfPRtYbUS7Ip5hbwO2Yw2wmKAjbCKw0+mg2sOCc7sJAeLcOEPjkONyuHfM8MPJIGEL9cpkhdbsxGWAB8AflKCrxwSfLbjHizKD1+czzYqhX/fDR9ZAgn/8vampsUNJWDFbgzBRhuhEpzeyVkTgArJmUZl8B/A4SNJIOFf2t605N5Nll7RNJcElACXvPGTABe+OKYblcB/6A+/oAQS/sWec689XoXD9juA3Fa2w/eT4NQOcFIJGH503igd/qNWbvg5JZDwL/TAGy0m9kBiQeH7SXBSSYAEH7sb6Ib/eACfHSyWy8ESSPjzPe9dNqPtb7wkyA3fT4ITppqAwQaEUu/BEmDTCf9Jet4+K9zPd0gg4Z/v5d5iNbP9jW5SKw78fBJA4RNDFCAlrRYePWbNFHyceXiugZpdIqeWoeyvq7a/EQtFTWunvaeLxXzwvaKpTKdixzJ2FjRIpPu6jJHA4RM7rskczmFdcCSQLR8JfhQJ5qNIILa/+dIJnxGMBS5hkeB4Kh14wg8eAYbwWWx41zeH+kUC2fI7ePAz0eBmtA/SIr90h0G3lAPXVaq2gm1fV6YAmWf1fKZl50sFYgAnKPyECNejx+GOqIdiPwq4tjFMgieOLW3KFMD4oKZTApobfvQImdzMupKjf21aPB43E+jbb7oEULWWlAAIP4gAzqd08SWQ8M9UB3+cjkiCeDpwHI1S4bu6KtDt3kevUc6v4ccKw6MvR13EMgXwej6fuip+Bof/WQ0/I8HHcAlQUgDasizwdLCrFoyo4du5iLGLw0EjQG74ttEqeySQLb+GDzk6qhcRRoBC8F2DPXoJJPyTNXxgKhA9h1mbBI1K4UMkGMV9Cf9EDR9Tgkbl8F0SDId3mVgeroaPK8GX3kVgEPjEOjYgW/6xlzV8nHpN1AVi9PIZF2PJS4Dg8LM9Agn/kxp+qKMxVvCT+T+6q1fDHwMBSoNPUtX+0Rr+uESA8uCTGv5YCcBb/0KJ8Ac7ddTwSzogm0dPlvSz/JGDX6yRjJ8AW4HD/RqRu3Vt1TjKP0DdQJ4GRMsUqeBAwf9vWwklaopNtSNnfVR4/E+AAQDKFJaknf7pJQAAAABJRU5ErkJggg==" }))));
};

var Icon$$ = function (props) {
    var id = uniqueId("svg");
    return (React.createElement(Svg, __assign({ viewBox: "0 0 48 48" }, props),
        React.createElement("g", { clipPath: "url(#" + id + ")" },
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M44.4825 9.78846C44.9985 10.9575 44.934 12.0841 44.3506 13.0946C43.7672 14.105 42.8238 14.7242 41.5534 14.8619C40.2449 15.0037 38.5223 14.6345 36.5148 13.4755C34.5072 12.3164 33.3262 11.0092 32.7948 9.80511C32.2788 8.63603 32.3433 7.50943 32.9267 6.49898C33.5101 5.48854 34.4535 4.86941 35.7239 4.73171C37.0324 4.5899 38.755 4.95904 40.7625 6.1181C42.7701 7.27716 43.9511 8.58438 44.4825 9.78846ZM46.7339 8.79481C45.9315 6.97669 44.3045 5.3214 41.993 3.98688C39.6815 2.65235 37.4345 2.07098 35.4588 2.28512C33.445 2.50338 31.7896 3.54667 30.7955 5.26852C29.8014 6.99038 29.7255 8.94565 30.5434 10.7988C31.3458 12.6169 32.9728 14.2722 35.2843 15.6067C37.5958 16.9412 39.8428 17.5226 41.8185 17.3085C43.8323 17.0902 45.4877 16.0469 46.4818 14.325C47.4759 12.6032 47.5518 10.6479 46.7339 8.79481Z", fill: "#FFAF00" }),
            React.createElement("path", { d: "M39.2061 12.466C39.4779 11.9952 39.3166 11.3932 38.8458 11.1213L37.3879 10.2796C36.9171 10.0078 36.315 10.1691 36.0432 10.6399L33.7667 14.5829C33.4949 15.0537 33.6562 15.6558 34.127 15.9276L35.5849 16.7693C36.0557 17.0411 36.6577 16.8798 36.9296 16.409L39.2061 12.466Z", fill: "#EB8C00" }),
            React.createElement("path", { d: "M42.8521 10.8222C43.1239 10.3514 42.9626 9.74937 42.4917 9.47754L36.9885 6.30023C36.5177 6.02841 35.9156 6.18972 35.6438 6.66054L34.4249 8.77169C34.1531 9.2425 34.3144 9.84453 34.7852 10.1164L40.2885 13.2937C40.7593 13.5655 41.3614 13.4042 41.6332 12.9334L42.8521 10.8222Z", fill: "#FFAF00" }),
            React.createElement("path", { d: "M42.8521 10.8222C43.1239 10.3514 42.9626 9.74937 42.4917 9.47754L38.2605 7.03465C37.7897 6.76282 37.1877 6.92413 36.9159 7.39495L35.9418 9.08208C35.67 9.5529 35.8313 10.1549 36.3021 10.4268L40.5333 12.8697C41.0041 13.1415 41.6062 12.9802 41.878 12.5093L42.8521 10.8222Z", fill: "#FFD800" }),
            React.createElement("path", { d: "M42.2502 9.90623C42.3862 9.67082 42.3055 9.3698 42.0701 9.23389L41.2265 8.74685C40.9911 8.61094 40.6901 8.6916 40.5542 8.92701L39.0879 11.4666C38.952 11.702 39.0327 12.0031 39.2681 12.139L40.1117 12.626C40.3471 12.7619 40.6481 12.6813 40.784 12.4458L42.2502 9.90623Z", fill: "#FFE971" }),
            React.createElement("path", { d: "M14.4276 37.9808C19.0474 45.9826 29.0239 48.079 37.1341 43.3966C45.2442 38.7142 48.4169 29.0261 43.7971 21.0244C39.1773 13.0227 29.2008 10.9262 21.0907 15.6086C12.9805 20.291 9.80785 29.9791 14.4276 37.9808Z", fill: "#EB8C00" }),
            React.createElement("path", { d: "M12.9928 35.4957C17.6126 43.4975 27.5891 45.5939 35.6993 40.9115C43.8094 36.2291 46.9821 26.541 42.3623 18.5393C37.7425 10.5375 27.766 8.4411 19.6558 13.1235C11.5457 17.8059 8.37303 27.494 12.9928 35.4957Z", fill: "#FFD800" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M11.7043 22.6394C12.3316 20.7707 13.3072 19.0005 14.5942 17.4155L44.4474 25.2401C44.6009 27.2114 44.3704 29.1765 43.7923 31.0497L11.7043 22.6394ZM39.463 38.0997C40.3335 37.2422 41.1005 36.3113 41.7564 35.3244L10.887 27.2335C10.8573 28.381 10.9556 29.5386 11.1892 30.6891L39.463 38.0997Z", fill: "#FFE971" }),
            React.createElement("path", { d: "M15.0259 34.3218C19.0448 41.2826 27.6684 43.1382 34.6556 39.1041C41.6428 35.07 44.3477 26.674 40.3288 19.7131C36.31 12.7523 27.6863 10.8967 20.6991 14.9308C13.7119 18.9649 11.0071 27.3609 15.0259 34.3218Z", fill: "#FFC700" }),
            React.createElement("path", { d: "M16.5423 33.2959C20.044 39.3611 27.4985 40.8267 33.6123 37.2969C39.7261 33.7671 42.1841 26.5785 38.6824 20.5134C35.1806 14.4482 27.7262 12.9826 21.6123 16.5124C15.4985 20.0422 13.0406 27.2308 16.5423 33.2959Z", fill: "white" }),
            React.createElement("path", { d: "M19.6485 19.4094C18.7716 20.2171 20.1105 20.7851 21.1076 20.1316C22.9645 18.9145 25.1882 18.2126 27.5811 18.2248C31.0292 18.2423 34.1409 19.7388 36.319 22.1137C37.0584 22.9199 38.4114 22.545 37.8645 21.5976C34.5623 15.878 27.6235 14.4433 21.9702 17.7072C21.1156 18.2006 20.3393 18.7732 19.6485 19.4094Z", fill: "#E7E8E8" }),
            React.createElement("path", { d: "M34.6395 35.043C35.5545 34.2788 34.2368 33.6843 33.2067 34.2845C31.5603 35.2437 29.6432 35.7884 27.5946 35.7783C24.3428 35.7623 21.4084 34.3516 19.3546 32.1127C18.6572 31.3525 17.381 31.706 17.8968 32.5993C21.0104 37.9921 27.5541 39.344 32.8862 36.2656C33.5169 35.9014 34.1025 35.4916 34.6395 35.043Z", fill: "#E7E8E8" }),
            React.createElement("path", { d: "M32.5972 20.6118C32.801 20.2587 32.6801 19.8071 32.3269 19.6033L32.0205 19.4263C31.6673 19.2225 31.2158 19.3434 31.0119 19.6966L28.0893 24.7587C27.8854 25.1118 28.0064 25.5633 28.3595 25.7672L28.666 25.9442C29.0191 26.148 29.4707 26.027 29.6745 25.6739L32.5972 20.6118Z", fill: "#452A7A" }),
            React.createElement("path", { d: "M21.2036 27.5233C20.8098 27.6288 20.576 28.0336 20.6816 28.4275L20.7784 28.789C20.884 29.1828 21.2888 29.4166 21.6826 29.311L26.2569 28.0854C26.6507 27.9798 26.8844 27.575 26.7789 27.1812L26.682 26.8197C26.5765 26.4258 26.1717 26.1921 25.7778 26.2976L21.2036 27.5233Z", fill: "#452A7A" }),
            React.createElement("path", { d: "M25.4809 25.6151C26.244 24.2934 27.8023 23.9359 29.053 24.658C30.3037 25.3801 30.7732 26.9084 30.0101 28.23C29.247 29.5517 27.6887 29.9093 26.438 29.1872C25.1873 28.4651 24.7178 26.9368 25.4809 25.6151Z", fill: "#452A7A" }),
            React.createElement("path", { d: "M17.0126 14.6084C16.4241 14.2686 15.5801 14.6286 15.1275 15.4126L10.989 22.5807C10.5364 23.3647 10.6466 24.2756 11.2351 24.6154L11.8085 24.9464C12.397 25.2862 13.241 24.9262 13.6936 24.1422L17.8321 16.9741C18.2847 16.1901 18.1745 15.2792 17.586 14.9394L17.0126 14.6084Z", fill: "#EB8C00" }),
            React.createElement("path", { d: "M1.87053 28.4667C-1.14632 26.725 -0.193534 19.9443 3.7222 13.162C7.63794 6.37974 13.0338 2.16425 16.0507 3.90603C19.0675 5.64781 18.1147 12.4285 14.199 19.2108C10.2833 25.993 4.88739 30.2085 1.87053 28.4667Z", fill: "#FFC700" }),
            React.createElement("path", { d: "M3.24974 28.6111C0.902471 27.273 2.13775 21.219 5.79373 14.9665C9.44971 8.71396 14.1419 4.63067 16.4892 5.96878C18.8365 7.30688 17.6012 13.3609 13.9452 19.6134C10.2892 25.8659 5.59701 29.9492 3.24974 28.6111Z", fill: "#FFD800" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M2.32523 23.3938C2.57644 22.2148 2.99217 20.9038 3.55715 19.5196L17.6473 7.92463C17.7625 8.75342 17.6984 9.77478 17.4703 10.9308L2.32523 23.3938ZM15.6081 16.3772C15.9949 15.5396 16.3319 14.7209 16.6159 13.9331L2.04567 25.923C2.0571 26.4661 2.12846 26.9487 2.26274 27.3591L15.6081 16.3772Z", fill: "#FFE971" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: id },
                React.createElement("rect", { width: "48", height: "48", fill: "white", transform: "matrix(-1 0 0 1 48 0)" })))));
};

var Icon$_ = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M9 14.7902C9 15.555 9.82366 16.0367 10.4903 15.6617L15.4505 12.8716C16.1302 12.4893 16.1302 11.5107 15.4505 11.1284L10.4903 8.33827C9.82366 7.96331 9 8.44502 9 9.20985V14.7902ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z" })));
};

var Icon$Z = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 48 48" }, props),
        React.createElement("path", { d: "M38 10H34C34 7.79086 32.2091 6 30 6H18C15.7909 6 14 7.79086 14 10H10C7.8 10 6 11.8 6 14V16C6 21.1 9.84 25.26 14.78 25.88C16.04 28.88 18.74 31.14 22 31.8V38H16C14.8954 38 14 38.8954 14 40C14 41.1046 14.8954 42 16 42H32C33.1046 42 34 41.1046 34 40C34 38.8954 33.1046 38 32 38H26V31.8C29.26 31.14 31.96 28.88 33.22 25.88C38.16 25.26 42 21.1 42 16V14C42 11.8 40.2 10 38 10ZM10 16V14H14V21.64C11.68 20.8 10 18.6 10 16ZM24 28C20.7 28 18 25.3 18 22V10H30V22C30 25.3 27.3 28 24 28ZM38 16C38 18.6 36.32 20.8 34 21.64V14H38V16Z" })));
};

var Icon$Y = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M8.99984 5.89661V6.27661C8.16984 5.94661 7.27984 5.77661 6.38984 5.77661C4.96985 5.77661 3.54985 6.20661 2.33985 7.06661C1.82985 7.42661 1.76985 8.15661 2.20985 8.59661L4.77985 11.1666H5.88984V12.2766C6.74984 13.1366 7.86984 13.5866 8.99984 13.6366V15.8966H6.99985C6.44984 15.8966 5.99985 16.3466 5.99985 16.8966V18.8966C5.99985 19.9966 6.89985 20.8966 7.99984 20.8966H17.9998C19.6598 20.8966 20.9998 19.5566 20.9998 17.8966V5.89661C20.9998 5.34661 20.5498 4.89661 19.9998 4.89661H9.99984C9.44984 4.89661 8.99984 5.34661 8.99984 5.89661ZM7.88984 11.3066V9.15661H5.60984L4.56985 8.11661C5.13985 7.89661 5.75985 7.77661 6.38984 7.77661C7.72984 7.77661 8.97985 8.29661 9.92984 9.23661L11.3398 10.6466L11.1398 10.8466C10.6298 11.3566 9.94984 11.6466 9.21984 11.6466C8.74985 11.6466 8.28984 11.5266 7.88984 11.3066ZM18.9998 17.8966C18.9998 18.4466 18.5498 18.8966 17.9998 18.8966C17.4498 18.8966 16.9998 18.4466 16.9998 17.8966V16.8966C16.9998 16.3466 16.5498 15.8966 15.9998 15.8966H10.9998V13.3066C11.5698 13.0766 12.0998 12.7366 12.5598 12.2766L12.7598 12.0766L15.5898 14.8966H16.9998V13.4866L10.9998 7.51661V6.89661H18.9998V17.8966Z" })));
};

var Icon$X = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 20 20" }, props),
        React.createElement("path", { d: "M5 10C5 10.55 5.45 11 6 11H14C14.55 11 15 10.55 15 10C15 9.45 14.55 9 14 9H6C5.45 9 5 9.45 5 10ZM10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM10 18C5.59 18 2 14.41 2 10C2 5.59 5.59 2 10 2C14.41 2 18 5.59 18 10C18 14.41 14.41 18 10 18Z" })));
};

var Icon$W = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M23 12L20.56 9.21L20.9 5.52L17.29 4.7L15.4 1.5L12 2.96L8.6 1.5L6.71 4.69L3.1 5.5L3.44 9.2L1 12L3.44 14.79L3.1 18.49L6.71 19.31L8.6 22.5L12 21.03L15.4 22.49L17.29 19.3L20.9 18.48L20.56 14.79L23 12ZM9.38 16.01L7 13.61C6.61 13.22 6.61 12.59 7 12.2L7.07 12.13C7.46 11.74 8.1 11.74 8.49 12.13L10.1 13.75L15.25 8.59C15.64 8.2 16.28 8.2 16.67 8.59L16.74 8.66C17.13 9.05 17.13 9.68 16.74 10.07L10.82 16.01C10.41 16.4 9.78 16.4 9.38 16.01Z" })));
};

var Icon$V = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 34 38" }, props),
        React.createElement("rect", { x: "8.83594", width: "5.30132", height: "17.3191", rx: "2.65066", fill: "#D1884F" }),
        React.createElement("rect", { x: "19.4385", width: "5.30132", height: "17.3191", rx: "2.65066", fill: "#D1884F" }),
        React.createElement("path", { d: "M8.5 13.0084C13.1944 8.40751 20.8056 8.40751 25.5 13.0084C30.1944 17.6093 30.1944 25.0689 25.5 29.6698L17.6538 37.3597C17.2927 37.7136 16.7073 37.7136 16.3462 37.3597L8.5 29.6698C3.80558 25.0689 3.80558 17.6093 8.5 13.0084Z", fill: "#D1884F" }),
        React.createElement("ellipse", { cx: "12.3696", cy: "19.9172", rx: "1.76711", ry: "2.59786", fill: "white" }),
        React.createElement("ellipse", { cx: "21.2056", cy: "19.9172", rx: "1.76711", ry: "2.59786", fill: "white" })));
};

var Icon$U = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM12.5 7.75C12.5 7.33579 12.1642 7 11.75 7C11.3358 7 11 7.33579 11 7.75V13L15.5537 15.8022C15.9106 16.0219 16.3781 15.9106 16.5978 15.5537C16.8192 15.1938 16.7041 14.7225 16.3419 14.5051L12.5 12.2V7.75Z" })));
};

var Icon$T = function (props) {
    var id = uniqueId("svg");
    return (React.createElement(Svg, __assign({ viewBox: "0 0 64 64" }, props),
        React.createElement("g", { clipPath: "url(#" + id + ")" },
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M43.1934 10.6907C44.0412 9.92381 45.4 10.3246 45.6959 11.4288C45.9144 12.2444 45.4304 13.0827 44.6148 13.3012L38.4955 14.9409L43.1934 10.6907ZM49.112 10.5134C48.1317 6.85481 43.6295 5.52698 40.8207 8.06806L31.0187 16.9358C29.5584 18.2569 30.8604 20.6481 32.7625 20.1385L45.5302 16.7174C48.2324 15.9933 49.8361 13.2157 49.112 10.5134Z", fill: "#751c0b" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M30.1886 8.0841C29.8078 6.90274 28.3125 6.54189 27.4349 7.41956C26.7866 8.06782 26.7866 9.11885 27.4349 9.7671L32.2987 14.6309L30.1886 8.0841ZM24.7196 4.70427C27.6276 1.79628 32.5818 2.99187 33.8434 6.90609L38.2461 20.5658C38.902 22.6007 36.3796 24.1424 34.8677 22.6306L24.7196 12.4824C22.5717 10.3345 22.5717 6.85214 24.7196 4.70427Z", fill: "#751c0b" }),
            React.createElement("path", { opacity: "0.6", d: "M7.27624 34.0431C7.01094 35.0539 5.57594 35.054 5.31064 34.0431L4.51492 31.0112C4.42182 30.6565 4.14478 30.3794 3.79005 30.2863L0.758148 29.4906C-0.252715 29.2253 -0.252717 27.7903 0.758146 27.525L3.79005 26.7293C4.14478 26.6362 4.42182 26.3591 4.51492 26.0044L5.31064 22.9725C5.57594 21.9616 7.01094 21.9616 7.27624 22.9725L8.07196 26.0044C8.16506 26.3591 8.44209 26.6362 8.79682 26.7293L11.8287 27.525C12.8396 27.7903 12.8396 29.2253 11.8287 29.4906L8.79683 30.2863C8.44209 30.3794 8.16506 30.6565 8.07196 31.0112L7.27624 34.0431Z", fill: "#53DEE9" }),
            React.createElement("path", { d: "M9.62029 11.6637C9.62344 12.2763 8.81089 12.494 8.5073 11.9619L7.59673 10.3659C7.4902 10.1791 7.2913 10.0643 7.07631 10.0654L5.23882 10.0748C4.62619 10.078 4.40847 9.26545 4.9406 8.96185L6.53663 8.05128C6.72337 7.94475 6.8382 7.74585 6.8371 7.53087L6.82766 5.69337C6.82451 5.08074 7.63705 4.86302 7.94064 5.39515L8.85121 6.99119C8.95775 7.17792 9.15664 7.29275 9.37163 7.29165L11.2091 7.28221C11.8218 7.27906 12.0395 8.0916 11.5073 8.39519L9.91131 9.30576C9.72458 9.4123 9.60974 9.6112 9.61085 9.82618L9.62029 11.6637Z", fill: "#53DEE9" }),
            React.createElement("path", { opacity: "0.8", d: "M53.8712 15.7857C53.2964 15.6348 53.2964 14.8189 53.8712 14.6681L56.9643 13.8563C57.166 13.8033 57.3235 13.6458 57.3764 13.4441L58.1882 10.351C58.3391 9.77623 59.155 9.77623 59.3058 10.351L60.1176 13.4441C60.1706 13.6458 60.3281 13.8033 60.5298 13.8563L63.6229 14.6681C64.1977 14.8189 64.1977 15.6348 63.6229 15.7857L60.5298 16.5975C60.3281 16.6504 60.1706 16.8079 60.1176 17.0096L59.3058 20.1027C59.155 20.6775 58.3391 20.6775 58.1882 20.1027L57.3764 17.0096C57.3235 16.8079 57.166 16.6504 56.9643 16.5975L53.8712 15.7857Z", fill: "#53DEE9" }),
            React.createElement("path", { d: "M51.0823 29.9055C50.3505 27.1742 47.543 25.5533 44.8116 26.2851L17.6112 33.5735C14.8798 34.3053 13.2589 37.1128 13.9908 39.8441L18.546 56.8444C19.2778 59.5758 22.0853 61.1967 24.8167 60.4648L52.0171 53.1765C54.7485 52.4446 56.3694 49.6371 55.6375 46.9058L51.0823 29.9055Z", fill: "url(#paint0_linear_won)" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.2737 36.0462L45.4742 28.7579C46.8399 28.392 48.2436 29.2024 48.6095 30.5681L53.1648 47.5684C53.5307 48.934 52.7202 50.3378 51.3546 50.7037L24.1541 57.9921C22.7884 58.358 21.3847 57.5475 21.0187 56.1819L16.4635 39.1816C16.0976 37.8159 16.9081 36.4122 18.2737 36.0462ZM44.8116 26.2851C47.543 25.5533 50.3505 27.1742 51.0823 29.9055L55.6375 46.9058C56.3694 49.6371 54.7485 52.4446 52.0171 53.1765L24.8167 60.4648C22.0853 61.1967 19.2778 59.5758 18.546 56.8444L13.9908 39.8441C13.2589 37.1128 14.8798 34.3053 17.6112 33.5735L44.8116 26.2851Z", fill: "#751c0b" }),
            React.createElement("path", { d: "M35.2297 28.8525L27.1932 31.0059L34.3987 57.8973L42.4352 55.7439L35.2297 28.8525Z", fill: "#751c0b" }),
            React.createElement("path", { d: "M54.5173 42.4023L52.3639 34.3658L15.1113 44.3476L17.2647 52.3841L54.5173 42.4023Z", fill: "#751c0b" }),
            React.createElement("g", { style: { mixBlendMode: "multiply" } },
                React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M39.9264 46.3239L31.8613 48.485L32.1926 49.7213L40.2577 47.5603L39.9264 46.3239ZM29.7019 40.4262L37.767 38.2651L37.4358 37.0287L29.3707 39.1898L29.7019 40.4262Z", fill: "#751c0b" })),
            React.createElement("path", { d: "M54.8306 24.9448C55.3795 22.8962 54.1638 20.7906 52.1153 20.2417L17.4965 10.9657C15.448 10.4168 13.3424 11.6324 12.7935 13.681L11.8824 17.081C11.3335 19.1295 12.5492 21.2351 14.5977 21.784L49.2165 31.0601C51.265 31.609 53.3706 30.3933 53.9195 28.3448L54.8306 24.9448Z", fill: "url(#paint1_linear_won)" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M16.8339 13.4384L51.4527 22.7145C52.1355 22.8975 52.5408 23.5993 52.3578 24.2822L51.4468 27.6822C51.2638 28.3651 50.5619 28.7703 49.8791 28.5873L15.2603 19.3113C14.5775 19.1283 14.1722 18.4264 14.3552 17.7436L15.2662 14.3435C15.4492 13.6607 16.1511 13.2555 16.8339 13.4384ZM52.1153 20.2417C54.1638 20.7906 55.3795 22.8962 54.8306 24.9448L53.9195 28.3448C53.3706 30.3933 51.265 31.609 49.2165 31.0601L14.5977 21.784C12.5492 21.2351 11.3335 19.1295 11.8824 17.081L12.7935 13.681C13.3424 11.6324 15.448 10.4168 17.4965 10.9657L52.1153 20.2417Z", fill: "#751c0b" }),
            React.createElement("path", { d: "M38.8242 16.6804L30.7877 14.527L27.8889 25.3454L35.9254 27.4988L38.8242 16.6804Z", fill: "#751c0b" }),
            React.createElement("g", { style: { mixBlendMode: "multiply" } },
                React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M38.4257 18.0799L30.4256 15.8399L30.7455 14.3999L38.8813 16.6573L38.4257 18.0799Z", fill: "#751c0b" }))),
        React.createElement("defs", null,
            React.createElement("linearGradient", { id: "paint0_linear_won", x1: "31.2114", y1: "29.9293", x2: "38.4169", y2: "56.8207", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#53DEE9" }),
                React.createElement("stop", { offset: "1", stopColor: "#1FC7D4" })),
            React.createElement("linearGradient", { id: "paint1_linear_won", x1: "34.8059", y1: "15.6037", x2: "31.9071", y2: "26.4221", gradientUnits: "userSpaceOnUse" },
                React.createElement("stop", { stopColor: "#53DEE9" }),
                React.createElement("stop", { offset: "1", stopColor: "#1FC7D4" })),
            React.createElement("clipPath", { id: id },
                React.createElement("rect", { width: "64", height: "64", fill: "white" })))));
};

var Icon$S = function (props) {
    var id = uniqueId("svg");
    return (React.createElement(Svg, __assign({ viewBox: "0 0 25 25" }, props),
        React.createElement("g", { clipPath: "url(#" + id + ")" },
            React.createElement("path", { d: "M15.9617 4.03476C16.5597 2.82143 15.6818 1.40061 14.2254 1.22477C13.0389 1.08149 11.9708 1.84428 11.8399 2.9285L11.3896 6.65764C11.2976 7.41951 11.899 8.11875 12.7328 8.21943C13.3889 8.29864 14.0166 7.98162 14.286 7.435L15.9617 4.03476Z", fill: "#1FC7D4" }),
            React.createElement("path", { d: "M6.27612 5.16903C5.36287 4.17118 5.80868 2.56162 7.15782 1.98574C8.25706 1.51653 9.49573 1.95041 9.92446 2.95482L11.3991 6.40949C11.7004 7.11529 11.3184 7.95473 10.546 8.28444C9.93817 8.54388 9.24684 8.41494 8.83541 7.9654L6.27612 5.16903Z", fill: "#1FC7D4" }),
            React.createElement("path", { d: "M17.0349 9.11691C17.3916 11.6186 15.2219 13.6784 12.2437 14.1031C9.26546 14.5278 6.60649 13.1564 6.24978 10.6548C5.89307 8.15311 8.06278 6.09324 11.041 5.66857C14.0192 5.24391 16.6782 6.61525 17.0349 9.11691Z", fill: "#1FC7D4" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M7.53552 12.9725C8.66378 13.937 10.392 14.3672 12.2437 14.1032C14.913 13.7225 16.9328 12.0284 17.0663 9.87986C16.4991 11.4567 14.8084 12.7917 12.6007 13.3832C10.6865 13.8961 8.82955 13.7307 7.53552 12.9725Z", fill: "#0098A1" }),
            React.createElement("path", { d: "M11.1696 9.94964C11.3325 10.6295 11.0911 10.9601 10.717 11.0497C10.343 11.1393 9.97795 10.9541 9.81504 10.2742C9.65212 9.5943 9.89356 9.26377 10.2676 9.17414C10.6417 9.08451 11.0067 9.26973 11.1696 9.94964Z", fill: "#017178" }),
            React.createElement("path", { d: "M14.4407 9.58045C14.4649 10.2792 14.1625 10.555 13.7781 10.5684C13.3937 10.5817 13.0729 10.3275 13.0486 9.62879C13.0243 8.93005 13.3268 8.65422 13.7112 8.64087C14.0956 8.62753 14.4164 8.88172 14.4407 9.58045Z", fill: "#017178" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.3337 10.8946C12.1996 10.9121 12.1051 11.0349 12.1226 11.169C12.1855 11.6513 12.654 11.9486 13.1254 11.8872C13.3584 11.8568 13.563 11.7451 13.7062 11.5832C13.7958 11.4819 13.7863 11.3272 13.685 11.2376C13.5838 11.148 13.429 11.1575 13.3395 11.2588C13.2753 11.3313 13.1788 11.3864 13.0621 11.4016C12.8142 11.4339 12.6305 11.2773 12.6082 11.1057C12.5907 10.9716 12.4678 10.8771 12.3337 10.8946Z", fill: "#017178" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.3339 10.8945C12.1998 10.9119 12.1053 11.0348 12.1228 11.1689C12.1452 11.3405 12.0078 11.539 11.76 11.5713C11.6411 11.5868 11.5319 11.557 11.4508 11.5014C11.3393 11.425 11.1869 11.4535 11.1104 11.565C11.034 11.6765 11.0625 11.8289 11.174 11.9054C11.3555 12.0297 11.586 12.0878 11.8233 12.0569C12.2947 11.9954 12.6712 11.5878 12.6083 11.1056C12.5908 10.9715 12.468 10.877 12.3339 10.8945Z", fill: "#017178" }),
            React.createElement("path", { d: "M9.50991 12.781C9.67816 11.447 8.51926 10.3246 7.21792 10.5612C6.15761 10.7539 5.45717 11.7854 5.65344 12.8651L6.32848 16.5785C6.4664 17.3372 7.1822 17.8424 7.92727 17.7069C8.51353 17.6004 8.9626 17.1204 9.0384 16.5195L9.50991 12.781Z", fill: "#9A6AFF" }),
            React.createElement("path", { d: "M4.93123 13.9946C4.62613 12.6768 3.04713 12.1326 1.80838 12.9183C0.799086 13.5584 0.455077 14.825 1.04002 15.7472L3.05191 18.9192C3.46294 19.5673 4.37109 19.7279 5.08032 19.2781C5.63839 18.9241 5.92368 18.2814 5.78623 17.6877L4.93123 13.9946Z", fill: "#9A6AFF" }),
            React.createElement("path", { d: "M12.3621 17.3922C13.4422 19.6768 11.9781 22.2858 9.25833 23.5716C6.53859 24.8574 3.59314 24.333 2.5131 22.0485C1.43306 19.764 2.89716 17.1549 5.6169 15.8691C8.33664 14.5833 11.2821 15.1077 12.3621 17.3922Z", fill: "#9A6AFF" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.5245 20.1686C11.9455 21.2367 10.9163 22.1811 9.58715 22.8094C6.86742 24.0952 3.92196 23.5709 2.84192 21.2863C2.41234 20.3777 2.38525 19.4177 2.67957 18.51C2.0738 19.6275 1.96092 20.8804 2.51314 22.0485C3.59318 24.333 6.53864 24.8574 9.25837 23.5716C10.8963 22.7972 12.0789 21.5429 12.5245 20.1686Z", fill: "#751c0b" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8.75939 18.7345C8.86973 18.6564 9.02253 18.6825 9.10068 18.7928C9.45793 19.2972 9.2815 19.9886 8.77528 20.3471C8.66494 20.4253 8.51213 20.3992 8.43398 20.2889C8.35583 20.1785 8.38193 20.0257 8.49227 19.9476C8.8145 19.7193 8.87726 19.3246 8.7011 19.0758C8.62294 18.9655 8.64904 18.8127 8.75939 18.7345Z", fill: "#452A7A" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8.75936 18.7345C8.86971 18.6563 9.02251 18.6824 9.10066 18.7928C9.27683 19.0415 9.67007 19.1133 9.9923 18.8851C10.1026 18.807 10.2554 18.8331 10.3336 18.9434C10.4117 19.0537 10.3856 19.2065 10.2753 19.2847C9.76908 19.6432 9.05832 19.5802 8.70107 19.0758C8.62292 18.9654 8.64902 18.8126 8.75936 18.7345Z", fill: "#452A7A" }),
            React.createElement("path", { d: "M7.26609 18.6401C7.75355 19.1413 7.7149 19.5488 7.43915 19.8169C7.16341 20.0851 6.755 20.1124 6.26755 19.6112C5.7801 19.11 5.81875 18.7025 6.09449 18.4343C6.37023 18.1662 6.77864 18.1389 7.26609 18.6401Z", fill: "#452A7A" }),
            React.createElement("path", { d: "M10.0286 16.8059C10.429 17.3791 10.3252 17.775 10.0099 17.9953C9.69452 18.2156 9.28705 18.1767 8.88668 17.6036C8.48632 17.0304 8.5901 16.6344 8.90543 16.4142C9.22077 16.1939 9.62825 16.2327 10.0286 16.8059Z", fill: "#452A7A" }),
            React.createElement("path", { d: "M15.821 11.1076C15.5183 9.7976 16.5573 8.56337 17.876 8.66668C18.9503 8.75086 19.7518 9.70595 19.6661 10.7999L19.3713 14.5627C19.3111 15.3315 18.6502 15.9067 17.8953 15.8475C17.3012 15.801 16.8058 15.3691 16.6694 14.7789L15.821 11.1076Z", fill: "#FFC700" }),
            React.createElement("path", { d: "M20.4641 11.4595C20.469 10.121 21.7611 9.16422 23.0195 9.56738C24.0448 9.89586 24.6059 11.0053 24.2727 12.0453L23.1267 15.6224C22.8925 16.3532 22.1187 16.7586 21.3982 16.5277C20.8313 16.3461 20.4482 15.8139 20.4504 15.2108L20.4641 11.4595Z", fill: "#FFC700" }),
            React.createElement("path", { d: "M13.6364 16.264C13.1079 18.7351 15.1302 20.9398 18.072 21.569C21.0138 22.1983 23.7611 21.0137 24.2897 18.5427C24.8182 16.0716 22.7959 13.8669 19.854 13.2376C16.9122 12.6084 14.1649 13.793 13.6364 16.264Z", fill: "#FFC700" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.7678 17.3277C18.638 17.2898 18.5021 17.3644 18.4643 17.4942C18.2913 18.0876 18.6839 18.6835 19.2794 18.8571C19.4092 18.8949 19.5451 18.8203 19.583 18.6905C19.6208 18.5607 19.5462 18.4248 19.4164 18.387C19.0373 18.2765 18.8491 17.9238 18.9344 17.6312C18.9722 17.5014 18.8976 17.3655 18.7678 17.3277Z", fill: "#AE5714" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.7679 17.3275C18.6381 17.2897 18.5022 17.3642 18.4643 17.494C18.379 17.7867 18.0308 17.983 17.6517 17.8725C17.5219 17.8347 17.386 17.9092 17.3482 18.039C17.3103 18.1689 17.3849 18.3048 17.5147 18.3426C18.1103 18.5162 18.7615 18.2245 18.9344 17.631C18.9723 17.5012 18.8977 17.3653 18.7679 17.3275Z", fill: "#AE5714" }),
            React.createElement("path", { d: "M17.78 16.2187C17.6338 16.9024 17.2734 17.0965 16.8973 17.016C16.5212 16.9356 16.2717 16.6111 16.4179 15.9274C16.5642 15.2437 16.9245 15.0496 17.3007 15.13C17.6768 15.2105 17.9263 15.535 17.78 16.2187Z", fill: "#AE5714" }),
            React.createElement("path", { d: "M21.344 17.3356C21.0937 17.9884 20.7077 18.1244 20.3485 17.9867C19.9894 17.849 19.7931 17.4897 20.0434 16.8369C20.2937 16.1841 20.6798 16.0482 21.039 16.1859C21.3981 16.3236 21.5943 16.6828 21.344 17.3356Z", fill: "#AE5714" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.9627 18.7486C14.73 19.7089 15.9227 20.4634 17.3569 20.8477C20.2916 21.6341 23.1259 20.5724 23.7898 18.0947C24.0539 17.1092 23.9086 16.1461 23.4531 15.2939C24.2558 16.2986 24.5929 17.5285 24.2534 18.7954C23.5895 21.2731 20.7552 22.3347 17.8205 21.5484C16.0531 21.0748 14.6523 20.0389 13.9627 18.7486Z", fill: "#EB8C00" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: id },
                React.createElement("rect", { width: "24", height: "24", fill: "white", transform: "translate(0.5 0.5)" })))));
};

var Icon$R = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 18 16" }, props),
        React.createElement("path", { d: "M10.0002 7.33L15.0002 14H3.00018L8.00018 7.33V2H10.0002V7.33ZM12.9602 0H5.04018C4.62018 0 4.39018 0.48 4.65018 0.81L6.00018 2.5V6.67L0.200175 14.4C-0.289825 15.06 0.180175 16 1.00018 16H17.0002C17.8202 16 18.2902 15.06 17.8002 14.4L12.0002 6.67V2.5L13.3502 0.81C13.6102 0.48 13.3802 0 12.9602 0Z" })));
};

var Icon$Q = function (props) {
    return (React.createElement(Svg, __assign({ height: "24", viewBox: "0 0 24 24", fill: "none" }, props),
        React.createElement("path", { d: "M15.5598 4.17396C14.0817 4.53812 12.8192 5.45009 12 6.68221C11.1808 5.45009 9.91829 4.53812 8.44019 4.17396C9.10369 2.88308 10.4487 2 12 2C13.5513 2 14.8963 2.88308 15.5598 4.17396Z", fill: "white" }),
        React.createElement("path", { d: "M4.05673 14.0424C4.49248 10.3896 7.38955 7.49248 11.0424 7.05673C10.1331 5.81007 8.66115 5 7 5C4.23858 5 2 7.23858 2 10C2 11.6611 2.81007 13.1331 4.05673 14.0424Z", fill: "white" }),
        React.createElement("path", { d: "M19.9433 14.0424C21.1899 13.1331 22 11.6611 22 10C22 7.23858 19.7614 5 17 5C15.3389 5 13.8669 5.81007 12.9576 7.05673C16.6104 7.49248 19.5075 10.3896 19.9433 14.0424Z", fill: "white" }),
        React.createElement("path", { d: "M12 22C15.866 22 19 18.866 19 15C19 11.134 15.866 8 12 8C8.13401 8 5 11.134 5 15C5 18.866 8.13401 22 12 22ZM9.5 13.25C9.5 12.8358 9.83579 12.5 10.25 12.5H14.5C14.8125 12.5 15.0922 12.6937 15.2021 12.9862C15.3118 13.2782 15.2293 13.6076 14.995 13.8134L14.9942 13.8142L14.982 13.8252C14.9708 13.8353 14.9527 13.852 14.9285 13.8749C14.8801 13.9208 14.8073 13.9918 14.7162 14.0864C14.5338 14.276 14.28 14.5586 14.0034 14.9226C13.4473 15.6542 12.8157 16.693 12.4736 17.9473C12.3646 18.347 11.9523 18.5826 11.5527 18.4736C11.153 18.3646 10.9174 17.9523 11.0264 17.5527C11.4343 16.057 12.1777 14.8458 12.8091 14.0149L12.8205 14H10.25C9.83579 14 9.5 13.6642 9.5 13.25Z", fill: "white" })));
};

var Icon$P = function (props) {
    return (React.createElement(Svg, __assign({ height: "24", viewBox: "0 0 24 24", fill: "none" }, props),
        React.createElement("path", { d: "M15.5598 4.17396C14.0817 4.53812 12.8192 5.45009 12 6.68221C11.1808 5.45009 9.91829 4.53812 8.44019 4.17396C9.10369 2.88308 10.4487 2 12 2C13.5513 2 14.8963 2.88308 15.5598 4.17396Z", fill: "white" }),
        React.createElement("path", { d: "M4.05673 14.0424C4.49248 10.3896 7.38955 7.49248 11.0424 7.05673C10.1331 5.81007 8.66115 5 7 5C4.23858 5 2 7.23858 2 10C2 11.6611 2.81007 13.1331 4.05673 14.0424Z", fill: "white" }),
        React.createElement("path", { d: "M19.9433 14.0424C21.1899 13.1331 22 11.6611 22 10C22 7.23858 19.7614 5 17 5C15.3389 5 13.8669 5.81007 12.9576 7.05673C16.6104 7.49248 19.5075 10.3896 19.9433 14.0424Z", fill: "white" }),
        React.createElement("path", { d: "M12 22C15.866 22 19 18.866 19 15C19 11.134 15.866 8 12 8C8.13401 8 5 11.134 5 15C5 18.866 8.13401 22 12 22ZM9.5 13.25C9.5 12.8358 9.83579 12.5 10.25 12.5H14.5C14.8125 12.5 15.0922 12.6937 15.2021 12.9862C15.3118 13.2782 15.2293 13.6076 14.995 13.8134L14.9942 13.8142L14.982 13.8252C14.9708 13.8353 14.9527 13.852 14.9285 13.8749C14.8801 13.9208 14.8073 13.9918 14.7162 14.0864C14.5338 14.276 14.28 14.5586 14.0034 14.9226C13.4473 15.6542 12.8157 16.693 12.4736 17.9473C12.3646 18.347 11.9523 18.5826 11.5527 18.4736C11.153 18.3646 10.9174 17.9523 11.0264 17.5527C11.4343 16.057 12.1777 14.8458 12.8091 14.0149L12.8205 14H10.25C9.83579 14 9.5 13.6642 9.5 13.25Z", fill: "white" })));
};

var Icon$O = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M15.0701 1.01H9.07007V3.01H15.0701V1.01ZM11.0701 14.01H13.0701V8.01H11.0701V14.01ZM19.1001 7.39L20.5201 5.97C20.0901 5.46 19.6201 4.98 19.1101 4.56L17.6901 5.98C16.1401 4.74 14.1901 4 12.0701 4C7.10007 4 3.07007 8.03 3.07007 13C3.07007 17.97 7.09007 22 12.0701 22C17.0501 22 21.0701 17.97 21.0701 13C21.0701 10.89 20.3301 8.94 19.1001 7.39ZM12.0701 20.01C8.20007 20.01 5.07007 16.88 5.07007 13.01C5.07007 9.14 8.20007 6.01 12.0701 6.01C15.9401 6.01 19.0701 9.14 19.0701 13.01C19.0701 16.88 15.9401 20.01 12.0701 20.01Z" })));
};

var Icon$N = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 25 25" }, props),
        React.createElement("path", { d: "M16.8196 4.04526C17.2184 2.78478 16.2774 1.5 14.9553 1.5C13.8754 1.5 13 2.37543 13 3.45534L13 7.25679C13 8.01243 13.6126 8.625 14.3682 8.625C14.9648 8.625 15.4927 8.2384 15.6727 7.66958L16.8196 4.04526Z", fill: "#FFD800" }),
        React.createElement("path", { d: "M8.05539 4.04526C7.65652 2.78478 8.59753 1.5 9.91962 1.5C10.9995 1.5 11.875 2.37543 11.875 3.45534L11.875 7.25679C11.875 8.01243 11.2624 8.625 10.5067 8.625C9.91013 8.625 9.3823 8.2384 9.2023 7.66958L8.05539 4.04526Z", fill: "#FFD800" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M5.24713 8.9375L13.4374 8.9375V17.0625H7.96396C7.92764 17.0625 7.89183 17.0625 7.85651 17.0625C7.06169 17.0627 6.51444 17.0629 6.00729 16.9494C4.88983 16.6995 3.90253 16.0491 3.23171 15.1211C2.92726 14.6999 2.71136 14.1971 2.39779 13.4667C2.38385 13.4342 2.36972 13.4013 2.35539 13.368L2.34484 13.3434C2.19078 12.9849 2.05946 12.6793 1.96737 12.4255C1.87345 12.1667 1.79043 11.8847 1.78065 11.583C1.7455 10.4988 2.39693 9.50984 3.40701 9.11409C3.68809 9.00396 3.97989 8.96895 4.25478 8.95306C4.5243 8.93749 4.85692 8.93749 5.24713 8.9375ZM4.36295 10.8249C4.15337 10.837 4.09575 10.858 4.09101 10.8599C3.82001 10.9661 3.64524 11.2314 3.65467 11.5223C3.65483 11.5274 3.65831 11.5886 3.72992 11.7859C3.80127 11.9825 3.91061 12.238 4.0781 12.6278C4.4505 13.4945 4.5838 13.791 4.75127 14.0227C5.15376 14.5795 5.74615 14.9697 6.41662 15.1197C6.6956 15.1821 7.02062 15.1875 7.96396 15.1875H11.5624V10.8125H5.27387C4.84961 10.8125 4.57176 10.8129 4.36295 10.8249Z", fill: "#FFD800" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M20.637 10.8249C20.4282 10.8129 20.1503 10.8125 19.7261 10.8125H13.4375V15.1875H17.036C17.9793 15.1875 18.3043 15.1821 18.5833 15.1197C19.2538 14.9697 19.8462 14.5795 20.2487 14.0227C20.4161 13.791 20.5494 13.4945 20.9218 12.6278C21.0893 12.238 21.1987 11.9825 21.27 11.7859C21.3416 11.5886 21.3451 11.5274 21.3453 11.5223C21.3547 11.2314 21.1799 10.9661 20.9089 10.8599C20.9042 10.858 20.8466 10.837 20.637 10.8249ZM20.7452 8.95306C21.0201 8.96895 21.3118 9.00396 21.5929 9.11409C22.603 9.50984 23.2544 10.4988 23.2193 11.583C23.2095 11.8847 23.1265 12.1667 23.0326 12.4255C22.9405 12.6793 22.8092 12.9849 22.6551 13.3434L22.6446 13.368C22.6302 13.4013 22.6161 13.4342 22.6022 13.4667C22.2886 14.197 22.0727 14.6999 21.7682 15.1211C21.0974 16.0491 20.1101 16.6995 18.9927 16.9494C18.4855 17.0629 17.9383 17.0627 17.1434 17.0625C17.1081 17.0625 17.0723 17.0625 17.036 17.0625H11.5625V8.9375L19.7528 8.9375C20.143 8.93749 20.4756 8.93749 20.7452 8.95306Z", fill: "#FFD800" }),
        React.createElement("path", { d: "M8.07961 10.8125H4.6577C4.61915 10.8125 4.58174 10.8125 4.5454 10.8125C4.39673 10.5329 4.3125 10.2138 4.3125 9.875C4.3125 9.53623 4.39673 9.21713 4.54539 8.9375C4.57317 8.9375 4.60124 8.9375 4.62961 8.9375L8.07961 8.9375C8.22827 9.21713 8.3125 9.53623 8.3125 9.875C8.3125 10.2138 8.22827 10.5329 8.07961 10.8125Z", fill: "#FFAF00" }),
        React.createElement("path", { d: "M8.4231 15.1875L9.18751 17.0104L9.06332 17.0625L7.23815 17.0625C7.0893 17.0626 6.94898 17.0626 6.81591 17.0619L6.01688 15.1564C6.27346 15.1844 6.63759 15.1875 7.3468 15.1875H8.4231Z", fill: "#FFAF00" }),
        React.createElement("path", { d: "M16.9204 10.8125H20.3423C20.3809 10.8125 20.4183 10.8125 20.4546 10.8125C20.6033 10.5329 20.6875 10.2138 20.6875 9.875C20.6875 9.53623 20.6033 9.21713 20.4546 8.9375C20.4268 8.9375 20.3988 8.9375 20.3704 8.9375L16.9204 8.9375C16.7717 9.21713 16.6875 9.53623 16.6875 9.875C16.6875 10.2138 16.7717 10.5329 16.9204 10.8125Z", fill: "#EB8C00" }),
        React.createElement("path", { d: "M16.5769 15.1875L15.8125 17.0104L15.9367 17.0625L17.7619 17.0625C17.9107 17.0626 18.051 17.0626 18.1841 17.0619L18.9831 15.1564C18.7266 15.1844 18.3624 15.1875 17.6532 15.1875H16.5769Z", fill: "#EB8C00" }),
        React.createElement("path", { d: "M10.9347 16.6152C10.8361 15.6854 11.5651 14.875 12.5002 14.875C13.4353 14.875 14.1642 15.6853 14.0656 16.6152L13.7087 19.9805C13.6547 20.4891 13.2257 20.875 12.7142 20.875H12.2861C11.7746 20.875 11.3456 20.4891 11.2917 19.9805L10.9347 16.6152Z", fill: "#EB8C00" }),
        React.createElement("path", { d: "M8.875 21.5312C8.875 20.5475 9.67249 19.75 10.6562 19.75H14.3438C15.3275 19.75 16.125 20.5475 16.125 21.5312C16.125 21.8592 15.8592 22.125 15.5312 22.125H9.46875C9.14083 22.125 8.875 21.8592 8.875 21.5312Z", fill: "#FFD800" }),
        React.createElement("path", { d: "M6.88325 14.6524C5.89136 12.0714 5.39541 10.7809 5.56796 9.74082C5.75596 8.6076 6.43705 7.61619 7.42741 7.03418C8.33639 6.5 9.72434 6.5 12.5002 6.5C15.2761 6.5 16.664 6.5 17.573 7.03418C18.5634 7.61619 19.2445 8.6076 19.4325 9.74082C19.605 10.7809 19.1091 12.0714 18.1172 14.6524C17.6137 15.9625 17.362 16.6176 16.9476 17.1125C16.494 17.6543 15.9009 18.0617 15.2324 18.2908C14.6218 18.5 13.9146 18.5 12.5002 18.5C11.0858 18.5 10.3786 18.5 9.768 18.2908C9.09952 18.0617 8.5064 17.6543 8.0528 17.1125C7.63848 16.6176 7.38674 15.9625 6.88325 14.6524Z", fill: "#FFD800" }),
        React.createElement("path", { d: "M17.903 7.86713C18.1516 8.78956 17.8918 9.94993 17.3722 12.2707L17.1257 13.372C16.8386 14.6541 16.6951 15.2952 16.4026 15.8048C15.9154 16.6532 15.1253 17.286 14.1908 17.5761C13.6297 17.7503 12.9728 17.7503 11.6589 17.7503C10.5622 17.7503 10.0139 17.7503 9.52467 17.6202C8.79145 17.4253 8.13341 17.02 7.63037 16.4569C7.76277 16.7161 7.89603 16.9258 8.05248 17.1127C8.50608 17.6545 9.0992 18.062 9.76768 18.291C10.3783 18.5002 11.0855 18.5002 12.4999 18.5002C13.9143 18.5002 14.6215 18.5002 15.2321 18.291C15.9006 18.062 16.4937 17.6545 16.9473 17.1127C17.3616 16.6178 17.6134 15.9627 18.1169 14.6526C19.1088 12.0716 19.6047 10.7811 19.4321 9.74103C19.2442 8.60781 18.5631 7.6164 17.5727 7.0344C17.572 7.034 17.5713 7.0336 17.5707 7.0332C17.7122 7.29512 17.8242 7.57465 17.903 7.86713Z", fill: "#FFAF00" }),
        React.createElement("path", { d: "M20.1942 7.55201C20.1249 7.816 19.7501 7.816 19.6808 7.55201L19.308 6.13133C19.2837 6.03869 19.2113 5.96634 19.1187 5.94202L17.698 5.56917C17.434 5.49988 17.434 5.12512 17.698 5.05584L19.1187 4.68298C19.2113 4.65867 19.2837 4.58632 19.308 4.49368L19.6808 3.073C19.7501 2.809 20.1249 2.809 20.1942 3.073L20.567 4.49368C20.5913 4.58632 20.6637 4.65867 20.7563 4.68298L22.177 5.05584C22.441 5.12512 22.441 5.49988 22.177 5.56917L20.7563 5.94202C20.6637 5.96634 20.5913 6.03869 20.567 6.13133L20.1942 7.55201Z", fill: "#FEED8D" }),
        React.createElement("path", { d: "M4.46705 4.12184C4.50969 3.95939 4.74031 3.95939 4.78295 4.12184L5.0124 4.99611C5.02736 5.05312 5.07188 5.09764 5.12889 5.1126L6.00316 5.34205C6.16561 5.38469 6.16561 5.61531 6.00316 5.65795L5.12889 5.8874C5.07188 5.90236 5.02736 5.94688 5.0124 6.00389L4.78295 6.87816C4.74031 7.04061 4.50969 7.04061 4.46705 6.87816L4.2376 6.00389C4.22264 5.94688 4.17812 5.90236 4.12111 5.8874L3.24684 5.65795C3.08439 5.61531 3.08439 5.38469 3.24684 5.34205L4.12111 5.1126C4.17812 5.09764 4.22264 5.05312 4.2376 4.99611L4.46705 4.12184Z", fill: "#FEED8D" }),
        React.createElement("path", { d: "M5.3257 21.0184C5.2884 21.1605 5.0866 21.1605 5.0493 21.0184L4.84853 20.2534C4.83543 20.2035 4.79648 20.1646 4.74659 20.1515L3.98161 19.9507C3.83946 19.9134 3.83946 19.7116 3.98161 19.6743L4.74659 19.4735C4.79648 19.4604 4.83543 19.4215 4.84853 19.3716L5.0493 18.6066C5.0866 18.4645 5.2884 18.4645 5.3257 18.6066L5.52647 19.3716C5.53957 19.4215 5.57852 19.4604 5.62841 19.4735L6.39339 19.6743C6.53554 19.7116 6.53554 19.9134 6.39339 19.9507L5.62841 20.1515C5.57852 20.1646 5.53957 20.2035 5.52647 20.2534L5.3257 21.0184Z", fill: "#FEED8D" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M8.13603 7.98393C8.40807 8.2437 8.418 8.67482 8.15822 8.94685L8.04567 9.06471C7.79436 9.32787 7.65414 9.67776 7.65414 10.0416L7.65414 10.2898C7.65414 10.6659 7.34921 10.9708 6.97306 10.9708C6.59692 10.9708 6.29199 10.6659 6.29199 10.2898L6.29199 10.0416C6.29199 9.32735 6.56725 8.64055 7.06056 8.12398L7.17311 8.00611C7.43289 7.73408 7.864 7.72415 8.13603 7.98393Z", fill: "#FEED8D" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.93527 2.21472C10.1387 2.409 10.1461 2.73142 9.95187 2.93487L9.86769 3.02302C9.67974 3.21983 9.57487 3.4815 9.57487 3.75363V3.93921C9.57487 4.22052 9.34682 4.44857 9.06551 4.44857C8.7842 4.44857 8.55615 4.22052 8.55615 3.93921V3.75363C8.55615 3.21944 8.76201 2.70579 9.13094 2.31946L9.21512 2.23131C9.4094 2.02786 9.73183 2.02044 9.93527 2.21472Z", fill: "#FEED8D" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M14.8469 2.21472C15.0503 2.409 15.0578 2.73142 14.8635 2.93487L14.7793 3.02302C14.5914 3.21983 14.4865 3.4815 14.4865 3.75363V3.93921C14.4865 4.22052 14.2584 4.44857 13.9771 4.44857C13.6958 4.44857 13.4678 4.22052 13.4678 3.93921V3.75363C13.4678 3.21944 13.6736 2.70579 14.0426 2.31946L14.1267 2.23131C14.321 2.02786 14.6434 2.02044 14.8469 2.21472Z", fill: "#FEED8D" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.789 9.61642C12.789 9.0473 13.2462 8.58594 13.8102 8.58594C14.4493 8.58594 14.9313 9.17163 14.814 9.80558L14.5186 11.4019C15.2601 11.7867 15.832 12.412 15.832 13.2088C15.832 13.9251 15.3629 14.5072 14.7441 14.8888C14.1184 15.2747 13.2798 15.5 12.375 15.5C11.4702 15.5 10.6316 15.2747 10.0059 14.8888C9.38712 14.5072 8.91797 13.9251 8.91797 13.2088C8.91797 12.4166 9.48346 11.7938 10.2182 11.4087L9.92155 9.80559C9.80423 9.17163 10.2863 8.58594 10.9254 8.58594C11.4894 8.58594 11.9466 9.04731 11.9466 9.61642L11.9466 10.9347C12.087 10.9235 12.23 10.9177 12.375 10.9177C12.515 10.9177 12.6532 10.9231 12.789 10.9336V9.61642Z", fill: "#FFAF00" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12.789 9.15548C12.789 8.58636 13.2462 8.125 13.8102 8.125C14.4493 8.125 14.9313 8.71069 14.814 9.34464L14.5186 10.9409C15.2601 11.3257 15.832 11.9511 15.832 12.7479C15.832 13.4642 15.3629 14.0463 14.7441 14.4279C14.1184 14.8137 13.2798 15.0391 12.375 15.0391C11.4702 15.0391 10.6316 14.8137 10.0059 14.4279C9.38712 14.0463 8.91797 13.4642 8.91797 12.7479C8.91797 11.9557 9.48346 11.3329 10.2182 10.9478L9.92155 9.34465C9.80423 8.7107 10.2863 8.12501 10.9254 8.12501C11.4894 8.12501 11.9466 8.58637 11.9466 9.15548L11.9466 10.4738C12.087 10.4625 12.23 10.4567 12.375 10.4567C12.515 10.4567 12.6532 10.4621 12.789 10.4726V9.15548ZM11.6782 12.3681C11.6782 12.73 11.4783 13.0234 11.2317 13.0234C10.9851 13.0234 10.7852 12.73 10.7852 12.3681C10.7852 12.0061 10.9851 11.7127 11.2317 11.7127C11.4783 11.7127 11.6782 12.0061 11.6782 12.3681ZM13.5861 13.0234C13.8327 13.0234 14.0326 12.73 14.0326 12.368C14.0326 12.0061 13.8327 11.7127 13.5861 11.7127C13.3395 11.7127 13.1396 12.0061 13.1396 12.368C13.1396 12.73 13.3395 13.0234 13.5861 13.0234Z", fill: "#ED8103" })));
};

var Icon$M = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M0 0h24v24H0z", fill: "none" }),
        React.createElement("path", { d: "M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z" })));
};

var Icon$L = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M15.5 13.9996H14.71L14.43 13.7296C15.63 12.3296 16.25 10.4196 15.91 8.38965C15.44 5.60965 13.12 3.38965 10.32 3.04965C6.09001 2.52965 2.53002 6.08965 3.05002 10.3196C3.39002 13.1196 5.61002 15.4396 8.39002 15.9096C10.42 16.2496 12.33 15.6296 13.73 14.4296L14 14.7096V15.4996L18.25 19.7496C18.66 20.1596 19.33 20.1596 19.74 19.7496C20.15 19.3396 20.15 18.6696 19.74 18.2596L15.5 13.9996ZM9.50002 13.9996C7.01002 13.9996 5.00002 11.9896 5.00002 9.49965C5.00002 7.00965 7.01002 4.99965 9.50002 4.99965C11.99 4.99965 14 7.00965 14 9.49965C14 11.9896 11.99 13.9996 9.50002 13.9996Z" })));
};

var Icon$K = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M13.8382 2.20573L16.12 6.82916L21.2222 7.57057C22.9037 7.81489 23.5751 9.88123 22.3584 11.0672L18.6663 14.6661L19.5379 19.7477C19.8251 21.4224 18.0674 22.6995 16.5635 21.9088L11.9998 19.5096L7.43624 21.9088C5.93232 22.6995 4.17457 21.4224 4.4618 19.7477L5.33337 14.6661L1.64134 11.0672C0.424631 9.88125 1.09601 7.8149 2.77747 7.57057L7.87974 6.82916L10.1615 2.20573C10.9135 0.682081 13.0862 0.682068 13.8382 2.20573Z" })));
};

var Icon$J = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M9.17726 8.2193C9.10443 8.36687 8.96365 8.46916 8.80079 8.49282L3.49187 9.26425C3.08176 9.32385 2.918 9.82783 3.21476 10.1171L7.05633 13.8617C7.17418 13.9766 7.22795 14.1421 7.20013 14.3043L6.29326 19.5917C6.22321 20.0002 6.65192 20.3117 7.01873 20.1188L11.7672 17.6224C11.9128 17.5458 12.0869 17.5458 12.2325 17.6224L16.981 20.1188C17.3478 20.3117 17.7765 20.0002 17.7064 19.5917L16.7996 14.3043C16.7718 14.1421 16.8255 13.9766 16.9434 13.8617L20.7849 10.1171C21.0817 9.82783 20.9179 9.32385 20.5078 9.26425L15.1989 8.49282C15.0361 8.46916 14.8953 8.36687 14.8224 8.2193L12.4482 3.4086C12.2648 3.03698 11.7349 3.03698 11.5515 3.4086L9.17726 8.2193ZM16.2669 6.62701L14.2417 2.52347C13.3247 0.665354 10.675 0.665354 9.75801 2.52347L7.73279 6.62701L3.20427 7.28504C1.15372 7.583 0.334945 10.1029 1.81874 11.5493L5.09561 14.7434L4.32204 19.2537C3.97177 21.2959 6.11535 22.8533 7.94942 21.8891L11.9999 19.7597L16.0503 21.8891C17.8844 22.8533 20.0279 21.2959 19.6777 19.2537L18.9041 14.7434L22.181 11.5493C23.6648 10.1029 22.846 7.583 20.7954 7.28504L16.2669 6.62701Z" })));
};

var Icon$I = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React.createElement("path", { d: "M16 17.01V11C16 10.45 15.55 10 15 10C14.45 10 14 10.45 14 11V17.01H12.21C11.76 17.01 11.54 17.55 11.86 17.86L14.65 20.64C14.85 20.83 15.16 20.83 15.36 20.64L18.15 17.86C18.47 17.55 18.24 17.01 17.8 17.01H16ZM8.65003 3.35002L5.86003 6.14002C5.54003 6.45002 5.76003 6.99002 6.21003 6.99002H8.00003V13C8.00003 13.55 8.45003 14 9.00003 14C9.55003 14 10 13.55 10 13V6.99002H11.79C12.24 6.99002 12.46 6.45002 12.14 6.14002L9.35003 3.35002C9.16003 3.16002 8.84003 3.16002 8.65003 3.35002Z" })));
};

var Icon$H = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 25" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M18.86 4.86003L21.65 7.65003C21.84 7.84003 21.84 8.16003 21.64 8.35003L18.85 11.14C18.54 11.46 18 11.24 18 10.79V9.00003H4C3.45 9.00003 3 8.55003 3 8.00003C3 7.45003 3.45 7.00003 4 7.00003H18V5.21003C18 4.76003 18.54 4.54003 18.86 4.86003ZM5.14001 19.14L2.35001 16.35C2.16001 16.16 2.16001 15.84 2.36001 15.65L5.15001 12.86C5.46001 12.54 6.00001 12.76 6.00001 13.21V15H20C20.55 15 21 15.45 21 16C21 16.55 20.55 17 20 17H6.00001V18.79C6.00001 19.24 5.46001 19.46 5.14001 19.14Z" })));
};

var Icon$G = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 6.49999C14.76 6.49999 17 8.73999 17 11.5C17 12.01 16.9 12.5 16.76 12.96L19.82 16.02C21.21 14.79 22.31 13.25 23 11.49C21.27 7.10999 17 3.99999 12 3.99999C10.73 3.99999 9.51 4.19999 8.36 4.56999L10.53 6.73999C11 6.59999 11.49 6.49999 12 6.49999ZM2.71 3.15999C2.32 3.54999 2.32 4.17999 2.71 4.56999L4.68 6.53999C3.06 7.82999 1.77 9.52999 1 11.5C2.73 15.89 7 19 12 19C13.52 19 14.97 18.7 16.31 18.18L19.03 20.9C19.42 21.29 20.05 21.29 20.44 20.9C20.83 20.51 20.83 19.88 20.44 19.49L4.13 3.15999C3.74 2.76999 3.1 2.76999 2.71 3.15999ZM12 16.5C9.24 16.5 7 14.26 7 11.5C7 10.73 7.18 9.99999 7.49 9.35999L9.06 10.93C9.03 11.11 9 11.3 9 11.5C9 13.16 10.34 14.5 12 14.5C12.2 14.5 12.38 14.47 12.57 14.43L14.14 16C13.49 16.32 12.77 16.5 12 16.5ZM14.97 11.17C14.82 9.76999 13.72 8.67999 12.33 8.52999L14.97 11.17Z" })));
};

var Icon$F = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 4C7 4 2.73 7.11 1 11.5C2.73 15.89 7 19 12 19C17 19 21.27 15.89 23 11.5C21.27 7.11 17 4 12 4ZM12 16.5C9.24 16.5 7 14.26 7 11.5C7 8.74 9.24 6.5 12 6.5C14.76 6.5 17 8.74 17 11.5C17 14.26 14.76 16.5 12 16.5ZM12 8.5C10.34 8.5 9 9.84 9 11.5C9 13.16 10.34 14.5 12 14.5C13.66 14.5 15 13.16 15 11.5C15 9.84 13.66 8.5 12 8.5Z" })));
};

var Icon$E = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M3.63 3.63C3.24 4.02 3.24 4.65 3.63 5.04L7.29 8.7L7 9H4C3.45 9 3 9.45 3 10V14C3 14.55 3.45 15 4 15H7L10.29 18.29C10.92 18.92 12 18.47 12 17.58V13.41L16.18 17.59C15.69 17.96 15.16 18.27 14.58 18.5C14.22 18.65 14 19.03 14 19.42C14 20.14 14.73 20.6 15.39 20.33C16.19 20 16.94 19.56 17.61 19.02L18.95 20.36C19.34 20.75 19.97 20.75 20.36 20.36C20.75 19.97 20.75 19.34 20.36 18.95L5.05 3.63C4.66 3.24 4.03 3.24 3.63 3.63ZM19 12C19 12.82 18.85 13.61 18.59 14.34L20.12 15.87C20.68 14.7 21 13.39 21 12C21 8.17 18.6 4.89 15.22 3.6C14.63 3.37 14 3.83 14 4.46V4.65C14 5.03 14.25 5.36 14.61 5.5C17.18 6.54 19 9.06 19 12ZM10.29 5.71L10.12 5.88L12 7.76V6.41C12 5.52 10.92 5.08 10.29 5.71ZM16.5 12C16.5 10.23 15.48 8.71 14 7.97V9.76L16.48 12.24C16.49 12.16 16.5 12.08 16.5 12Z" })));
};

var Icon$D = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M3 10V14C3 14.55 3.45 15 4 15H7L10.29 18.29C10.92 18.92 12 18.47 12 17.58V6.41C12 5.52 10.92 5.07 10.29 5.7L7 9H4C3.45 9 3 9.45 3 10ZM16.5 12C16.5 10.23 15.48 8.71 14 7.97V16.02C15.48 15.29 16.5 13.77 16.5 12ZM14 4.45V4.65C14 5.03 14.25 5.36 14.6 5.5C17.18 6.53 19 9.06 19 12C19 14.94 17.18 17.47 14.6 18.5C14.24 18.64 14 18.97 14 19.35V19.55C14 20.18 14.63 20.62 15.21 20.4C18.6 19.11 21 15.84 21 12C21 8.16 18.6 4.89 15.21 3.6C14.63 3.37 14 3.82 14 4.45Z" })));
};

var Icon$C = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M2 21.8966H12C12.55 21.8966 13 22.3466 13 22.8966C13 23.4466 12.55 23.8966 12 23.8966H2C1.45 23.8966 1 23.4466 1 22.8966C1 22.3466 1.45 21.8966 2 21.8966ZM5.24 8.96661L8.07 6.13661L20.8 18.8666C21.58 19.6466 21.58 20.9166 20.8 21.6966C20.02 22.4766 18.75 22.4766 17.97 21.6966L5.24 8.96661ZM13.73 3.30661L16.56 6.13661C17.34 6.91661 17.34 8.18661 16.56 8.96661L15.14 10.3866L9.49 4.72661L10.9 3.31661C11.68 2.52661 12.95 2.52661 13.73 3.30661ZM3.83 10.3766L9.49 16.0366L8.08 17.4466C7.3 18.2266 6.03 18.2266 5.25 17.4466L2.42 14.6166C1.64 13.8366 1.64 12.5666 2.42 11.7866L3.83 10.3766Z" })));
};

var Icon$B = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M4.47 20.9999H19.53C21.07 20.9999 22.03 19.3299 21.26 17.9999L13.73 4.98993C12.96 3.65993 11.04 3.65993 10.27 4.98993L2.74 17.9999C1.97 19.3299 2.93 20.9999 4.47 20.9999ZM12 13.9999C11.45 13.9999 11 13.5499 11 12.9999V10.9999C11 10.4499 11.45 9.99993 12 9.99993C12.55 9.99993 13 10.4499 13 10.9999V12.9999C13 13.5499 12.55 13.9999 12 13.9999ZM13 17.9999H11V15.9999H13V17.9999Z" })));
};

var Icon$A = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M17.65 6.35C16.02 4.72 13.71 3.78 11.17 4.04C7.50002 4.41 4.48002 7.39 4.07002 11.06C3.52002 15.91 7.27002 20 12 20C15.19 20 17.93 18.13 19.21 15.44C19.53 14.77 19.05 14 18.31 14C17.94 14 17.59 14.2 17.43 14.53C16.3 16.96 13.59 18.5 10.63 17.84C8.41002 17.35 6.62002 15.54 6.15002 13.32C5.31002 9.44 8.26002 6 12 6C13.66 6 15.14 6.69 16.22 7.78L14.71 9.29C14.08 9.92 14.52 11 15.41 11H19C19.55 11 20 10.55 20 10V6.41C20 5.52 18.92 5.07 18.29 5.7L17.65 6.35Z" })));
};

var ExpandableButton = function (_a) {
    var onClick = _a.onClick, expanded = _a.expanded, children = _a.children;
    return (React.createElement(IconButton, { "aria-label": "Hide or show expandable content", onClick: onClick },
        children,
        expanded ? React.createElement(Icon$1n, { color: "invertedContrast" }) : React.createElement(Icon$1q, { color: "invertedContrast" })));
};
ExpandableButton.defaultProps = {
    expanded: false,
};
var ExpandableLabel = function (_a) {
    var onClick = _a.onClick, expanded = _a.expanded, children = _a.children;
    return (React.createElement(Button, { variant: "text", "aria-label": "Hide or show expandable content", onClick: onClick, endIcon: expanded ? React.createElement(Icon$1n, { color: "primary" }) : React.createElement(Icon$1q, { color: "primary" }) }, children));
};
ExpandableLabel.defaultProps = {
    expanded: false,
};

var Box = styled.div(templateObject_1$T || (templateObject_1$T = __makeTemplateObject(["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"], ["\n  ", "\n  ", "\n  ", "\n  ", "\n  ", "\n"])), background, border, layout, position, space);
var templateObject_1$T;

var Flex = styled(Box)(templateObject_1$S || (templateObject_1$S = __makeTemplateObject(["\n  display: flex;\n  ", "\n"], ["\n  display: flex;\n  ", "\n"])), flexbox);
var templateObject_1$S;

var variants$3 = {
    INFO: "info",
    DANGER: "danger",
    SUCCESS: "success",
    WARNING: "warning",
};

var getThemeColor = function (_a) {
    var theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? variants$3.INFO : _b;
    switch (variant) {
        case variants$3.DANGER:
            return theme.colors.failure;
        case variants$3.WARNING:
            return theme.colors.warning;
        case variants$3.SUCCESS:
            return theme.colors.success;
        case variants$3.INFO:
        default:
            return theme.colors.secondary;
    }
};
var getIcon = function (variant) {
    if (variant === void 0) { variant = variants$3.INFO; }
    switch (variant) {
        case variants$3.DANGER:
            return Icon$1K;
        case variants$3.WARNING:
            return Icon$1L;
        case variants$3.SUCCESS:
            return Icon$1M;
        case variants$3.INFO:
        default:
            return Icon$1J;
    }
};
var IconLabel = styled.div(templateObject_1$R || (templateObject_1$R = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 16px 0 0 16px;\n  color: ", ";\n  padding: 12px;\n"], ["\n  background-color: ", ";\n  border-radius: 16px 0 0 16px;\n  color: ", ";\n  padding: 12px;\n"])), getThemeColor, function (_a) {
    var theme = _a.theme;
    return theme.alert.background;
});
var withHandlerSpacing = 32 + 12 + 8; // button size + inner spacing + handler position
var Details = styled.div(templateObject_2$m || (templateObject_2$m = __makeTemplateObject(["\n  flex: 1;\n  padding-bottom: 12px;\n  padding-left: 12px;\n  padding-right: ", ";\n  padding-top: 12px;\n"], ["\n  flex: 1;\n  padding-bottom: 12px;\n  padding-left: 12px;\n  padding-right: ", ";\n  padding-top: 12px;\n"])), function (_a) {
    var hasHandler = _a.hasHandler;
    return (hasHandler ? withHandlerSpacing + "px" : "12px");
});
var CloseHandler = styled.div(templateObject_3$a || (templateObject_3$a = __makeTemplateObject(["\n  border-radius: 0 16px 16px 0;\n  right: 8px;\n  position: absolute;\n  top: 8px;\n"], ["\n  border-radius: 0 16px 16px 0;\n  right: 8px;\n  position: absolute;\n  top: 8px;\n"])));
var StyledAlert = styled(Flex)(templateObject_4$7 || (templateObject_4$7 = __makeTemplateObject(["\n  position: relative;\n  background-color: ", ";\n  border-radius: 16px;\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n"], ["\n  position: relative;\n  background-color: ", ";\n  border-radius: 16px;\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n"])), function (_a) {
    var theme = _a.theme;
    return theme.alert.background;
});
var Alert = function (_a) {
    var title = _a.title, children = _a.children, variant = _a.variant, onClick = _a.onClick;
    var Icon = getIcon(variant);
    return (React.createElement(StyledAlert, null,
        React.createElement(IconLabel, { variant: variant, hasDescription: !!children },
            React.createElement(Icon, { color: "currentColor", width: "24px" })),
        React.createElement(Details, { hasHandler: !!onClick },
            React.createElement(Text, { bold: true }, title),
            typeof children === "string" ? React.createElement(Text, { as: "p" }, children) : children),
        onClick && (React.createElement(CloseHandler, null,
            React.createElement(IconButton, { scale: "sm", variant: "text", onClick: onClick },
                React.createElement(Icon$1m, { width: "24px", color: "currentColor" }))))));
};
var templateObject_1$R, templateObject_2$m, templateObject_3$a, templateObject_4$7;

var scales$7 = {
    SM: "sm",
    MD: "md",
    LG: "lg",
};

/**
 * Priority: Warning --> Success
 */
var getBoxShadow$1 = function (_a) {
    var _b = _a.isSuccess, isSuccess = _b === void 0 ? false : _b, _c = _a.isWarning, isWarning = _c === void 0 ? false : _c, theme = _a.theme;
    if (isWarning) {
        return theme.shadows.warning;
    }
    if (isSuccess) {
        return theme.shadows.success;
    }
    return theme.shadows.inset;
};
var getHeight = function (_a) {
    var _b = _a.scale, scale = _b === void 0 ? scales$7.MD : _b;
    switch (scale) {
        case scales$7.SM:
            return "32px";
        case scales$7.LG:
            return "48px";
        case scales$7.MD:
        default:
            return "40px";
    }
};
var Input$1 = styled.input(templateObject_1$Q || (templateObject_1$Q = __makeTemplateObject(["\n  background-color: ", ";\n  border: 0;\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: ", ";\n  display: block;\n  font-size: 16px;\n  height: ", ";\n  outline: 0;\n  padding: 0 16px;\n  width: 100%;\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    box-shadow: none;\n    color: ", ";\n    cursor: not-allowed;\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: ", ";\n  }\n"], ["\n  background-color: ", ";\n  border: 0;\n  border-radius: 16px;\n  box-shadow: ", ";\n  color: ", ";\n  display: block;\n  font-size: 16px;\n  height: ", ";\n  outline: 0;\n  padding: 0 16px;\n  width: 100%;\n\n  &::placeholder {\n    color: ", ";\n  }\n\n  &:disabled {\n    background-color: ", ";\n    box-shadow: none;\n    color: ", ";\n    cursor: not-allowed;\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, getBoxShadow$1, function (_a) {
    var theme = _a.theme;
    return theme.colors.background;
}, getHeight, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.backgroundDisabled;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textDisabled;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
});
Input$1.defaultProps = {
    scale: scales$7.MD,
    isSuccess: false,
    isWarning: false,
};
var templateObject_1$Q;

var StyledBalanceInput = styled(Box)(templateObject_1$P || (templateObject_1$P = __makeTemplateObject(["\n  background-color: ", ";\n  border: 1px solid ", ";\n  border-radius: 16px;\n  box-shadow: ", ";\n  padding: 8px 16px;\n"], ["\n  background-color: ", ";\n  border: 1px solid ", ";\n  border-radius: 16px;\n  box-shadow: ", ";\n  padding: 8px 16px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.inputSecondary;
}, function (_a) {
    var theme = _a.theme, isWarning = _a.isWarning;
    return theme.shadows[isWarning ? "warning" : "inset"];
});
var StyledInput$1 = styled(Input$1)(templateObject_2$l || (templateObject_2$l = __makeTemplateObject(["\n  background: transparent;\n  border-radius: 0;\n  box-shadow: none;\n  padding-left: 0;\n  padding-right: 0;\n  text-align: right;\n\n  ::placeholder {\n    color: ", ";\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: none;\n  }\n"], ["\n  background: transparent;\n  border-radius: 0;\n  box-shadow: none;\n  padding-left: 0;\n  padding-right: 0;\n  text-align: right;\n\n  ::placeholder {\n    color: ", ";\n  }\n\n  &:focus:not(:disabled) {\n    box-shadow: none;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
});
var templateObject_1$P, templateObject_2$l;

var BalanceInput = function (_a) {
    var value = _a.value, _b = _a.placeholder, placeholder = _b === void 0 ? "0.0" : _b, onUserInput = _a.onUserInput, currencyValue = _a.currencyValue, inputProps = _a.inputProps, _c = _a.isWarning, isWarning = _c === void 0 ? false : _c, _d = _a.decimals, decimals = _d === void 0 ? 18 : _d, props = __rest(_a, ["value", "placeholder", "onUserInput", "currencyValue", "inputProps", "isWarning", "decimals"]);
    var handleOnChange = function (e) {
        if (e.currentTarget.validity.valid) {
            onUserInput(e.currentTarget.value.replace(/,/g, "."));
        }
    };
    return (React.createElement(StyledBalanceInput, __assign({ isWarning: isWarning }, props),
        React.createElement(StyledInput$1, __assign({ pattern: "^[0-9]*[.,]?[0-9]{0," + decimals + "}$", inputMode: "decimal", min: "0", value: value, onChange: handleOnChange, placeholder: placeholder }, inputProps)),
        currencyValue && (React.createElement(Text, { fontSize: "12px", textAlign: "right", color: "textSubtle" }, currencyValue))));
};

var Grid = styled(Box)(templateObject_1$O || (templateObject_1$O = __makeTemplateObject(["\n  display: grid;\n  ", "\n  ", "\n"], ["\n  display: grid;\n  ", "\n  ", "\n"])), flexbox, grid);
var templateObject_1$O;

var Separator = styled.div(templateObject_1$N || (templateObject_1$N = __makeTemplateObject(["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  justify-content: center;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  ", " {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n\n  ", " {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"], ["\n  align-items: center;\n  color: ", ";\n  display: flex;\n  justify-content: center;\n  padding-left: 4px;\n  padding-right: 4px;\n\n  ", " {\n    padding-left: 8px;\n    padding-right: 8px;\n  }\n\n  ", " {\n    padding-left: 16px;\n    padding-right: 16px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textDisabled;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var StyledBreadcrumbs = styled.ul(templateObject_2$k || (templateObject_2$k = __makeTemplateObject(["\n  align-items: center;\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n\n  ", "\n"], ["\n  align-items: center;\n  display: flex;\n  flex-wrap: wrap;\n  list-style-type: none;\n\n  ", "\n"])), space);
var insertSeparators = function (items, separator) {
    return items.reduce(function (accum, item, index) {
        if (index === 0) {
            return __spreadArray(__spreadArray([], accum), [item]);
        }
        return __spreadArray(__spreadArray([], accum), [
            React.createElement(Separator, { "aria-hidden": true, key: "seperator-" + index }, separator),
            item,
        ]);
    }, []);
};
var DefaultSeparator = React.createElement(Icon$1o, { color: "currentColor", width: "24px" });
var Breadcrumbs = function (_a) {
    var _b = _a.separator, separator = _b === void 0 ? DefaultSeparator : _b, children = _a.children;
    var validItems = Children.toArray(children).filter(function (child) { return isValidElement(child); });
    var items = insertSeparators(validItems, separator);
    return (React.createElement(StyledBreadcrumbs, null, items.map(function (item, index) { return (React.createElement("li", { key: "child-" + index }, item)); })));
};
var templateObject_1$N, templateObject_2$k;

var getBackgroundColor = function (_a) {
    var theme = _a.theme, variant = _a.variant;
    return theme.colors[variant === variants$4.SUBTLE ? "input" : "tertiary"];
};
var getBorderColor = function (_a) {
    var theme = _a.theme, variant = _a.variant;
    return theme.colors[variant === variants$4.SUBTLE ? "inputSecondary" : "disabled"];
};
var StyledButtonMenu = styled.div(templateObject_1$M || (templateObject_1$M = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 16px;\n  display: inline-flex;\n  border: 1px solid ", ";\n\n  & > button + button,\n  & > a + a {\n    margin-left: 2px; // To avoid focus shadow overlap\n  }\n  ", "\n"], ["\n  background-color: ", ";\n  border-radius: 16px;\n  display: inline-flex;\n  border: 1px solid ", ";\n\n  & > button + button,\n  & > a + a {\n    margin-left: 2px; // To avoid focus shadow overlap\n  }\n  ", "\n"])), getBackgroundColor, getBorderColor, space);
var ButtonMenu$1 = function (_a) {
    var _b = _a.activeIndex, activeIndex = _b === void 0 ? 0 : _b, _c = _a.scale, scale = _c === void 0 ? scales$8.MD : _c, _d = _a.variant, variant = _d === void 0 ? variants$4.PRIMARY : _d, onItemClick = _a.onItemClick, children = _a.children, props = __rest(_a, ["activeIndex", "scale", "variant", "onItemClick", "children"]);
    return (React.createElement(StyledButtonMenu, __assign({ variant: variant }, props), Children.map(children, function (child, index) {
        return cloneElement(child, {
            isActive: activeIndex === index,
            onClick: onItemClick ? function () { return onItemClick(index); } : undefined,
            scale: scale,
            variant: variant,
        });
    })));
};
var templateObject_1$M;

var InactiveButton = styled(Button)(templateObject_1$L || (templateObject_1$L = __makeTemplateObject(["\n  background-color: transparent;\n  color: ", ";\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n"], ["\n  background-color: transparent;\n  color: ", ";\n  &:hover:not(:disabled):not(:active) {\n    background-color: transparent;\n  }\n"])), function (_a) {
    var theme = _a.theme, variant = _a.variant;
    return (variant === variants$4.PRIMARY ? theme.colors.primary : theme.colors.background);
});
var ButtonMenuItem = function (_a) {
    var _b = _a.isActive, isActive = _b === void 0 ? false : _b, _c = _a.variant, variant = _c === void 0 ? variants$4.PRIMARY : _c, as = _a.as, props = __rest(_a, ["isActive", "variant", "as"]);
    if (!isActive) {
        return React.createElement(InactiveButton, __assign({ forwardedAs: as, variant: "tertiary" }, props));
    }
    return React.createElement(Button, __assign({ as: as, variant: variant }, props));
};
var templateObject_1$L;

/**
 * Priority: Warning --> Success --> Active
 */
var getBoxShadow = function (_a) {
    var isActive = _a.isActive, isSuccess = _a.isSuccess, isWarning = _a.isWarning, theme = _a.theme;
    if (isWarning) {
        return theme.card.boxShadowWarning;
    }
    if (isSuccess) {
        return theme.card.boxShadowSuccess;
    }
    if (isActive) {
        return theme.card.boxShadowActive;
    }
    return theme.card.boxShadow;
};
var StyledCard = styled.div(templateObject_1$K || (templateObject_1$K = __makeTemplateObject(["\n  background-color: ", ";\n  border: ", ";\n  border-radius: ", ";\n  box-shadow: ", ";\n  color: ", ";\n  overflow: hidden;\n  position: relative;\n\n  ", "\n"], ["\n  background-color: ", ";\n  border: ", ";\n  border-radius: ", ";\n  box-shadow: ", ";\n  color: ", ";\n  overflow: hidden;\n  position: relative;\n\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.card.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.card.boxShadow;
}, function (_a) {
    var theme = _a.theme;
    return theme.radii.card;
}, getBoxShadow, function (_a) {
    var theme = _a.theme, isDisabled = _a.isDisabled;
    return theme.colors[isDisabled ? "textDisabled" : "text"];
}, space);
StyledCard.defaultProps = {
    isActive: false,
    isSuccess: false,
    isWarning: false,
    isDisabled: false,
};
var templateObject_1$K;

var Card = function (_a) {
    var ribbon = _a.ribbon, children = _a.children, props = __rest(_a, ["ribbon", "children"]);
    return (React.createElement(StyledCard, __assign({}, props),
        ribbon,
        children));
};

var CardBody = styled.div(templateObject_1$J || (templateObject_1$J = __makeTemplateObject(["\n  ", "\n"], ["\n  ", "\n"])), space);
CardBody.defaultProps = {
    p: "24px",
};
var templateObject_1$J;

var CardHeader = styled.div(templateObject_1$I || (templateObject_1$I = __makeTemplateObject(["\n  background: ", ";\n  ", "\n"], ["\n  background: ", ";\n  ", "\n"])), function (_a) {
    var theme = _a.theme, _b = _a.variant, variant = _b === void 0 ? "default" : _b;
    return theme.card.cardHeaderBackground[variant];
}, space);
CardHeader.defaultProps = {
    p: "24px",
};
var templateObject_1$I;

var CardFooter = styled.div(templateObject_1$H || (templateObject_1$H = __makeTemplateObject(["\n  border-top: 1px solid ", ";\n  ", "\n"], ["\n  border-top: 1px solid ", ";\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.cardBorder;
}, space);
CardFooter.defaultProps = {
    p: "24px",
};
var templateObject_1$H;

var StyledCardRibbon = styled.div(templateObject_1$G || (templateObject_1$G = __makeTemplateObject(["\n  z-index: 1;\n  background-color: ", ";\n  color: white;\n  margin: 0;\n  padding: 0;\n  padding: 8px 0;\n  position: absolute;\n  right: ", ";\n  top: 0;\n  text-align: center;\n  transform: translateX(30%) translateY(0%) rotate(45deg);\n  transform: ", ";\n  transform-origin: top left;\n  width: 96px;\n\n  &:before,\n  &:after {\n    background-color: ", ";\n    content: \"\";\n    height: 100%;\n    margin: 0 -1px; /* Removes tiny gap */\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n\n  &:before {\n    right: 100%;\n  }\n\n  &:after {\n    left: 100%;\n  }\n\n  & > div {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 96px;\n  }\n"], ["\n  z-index: 1;\n  background-color: ", ";\n  color: white;\n  margin: 0;\n  padding: 0;\n  padding: 8px 0;\n  position: absolute;\n  right: ", ";\n  top: 0;\n  text-align: center;\n  transform: translateX(30%) translateY(0%) rotate(45deg);\n  transform: ",
    ";\n  transform-origin: top left;\n  width: 96px;\n\n  &:before,\n  &:after {\n    background-color: ", ";\n    content: \"\";\n    height: 100%;\n    margin: 0 -1px; /* Removes tiny gap */\n    position: absolute;\n    top: 0;\n    width: 100%;\n  }\n\n  &:before {\n    right: 100%;\n  }\n\n  &:after {\n    left: 100%;\n  }\n\n  & > div {\n    overflow: hidden;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    width: 96px;\n  }\n"])), function (_a) {
    var _b = _a.variantColor, variantColor = _b === void 0 ? "secondary" : _b, theme = _a.theme;
    return theme.colors[variantColor];
}, function (_a) {
    var ribbonPosition = _a.ribbonPosition;
    return (ribbonPosition === "right" ? 0 : "auto");
}, function (_a) {
    var ribbonPosition = _a.ribbonPosition;
    return ribbonPosition === "right"
        ? "translateX(30%) translateY(0%) rotate(45deg)"
        : "translateX(0%) translateY(200%) rotate(-45deg)";
}, function (_a) {
    var _b = _a.variantColor, variantColor = _b === void 0 ? "secondary" : _b, theme = _a.theme;
    return theme.colors[variantColor];
});
var CardRibbon = function (_a) {
    var variantColor = _a.variantColor, text = _a.text, ribbonPosition = _a.ribbonPosition, props = __rest(_a, ["variantColor", "text", "ribbonPosition"]);
    return (React.createElement(StyledCardRibbon, __assign({ variantColor: variantColor, ribbonPosition: ribbonPosition }, props),
        React.createElement("div", { title: text }, text)));
};
CardRibbon.defaultProps = {
    ribbonPosition: "right",
};
var templateObject_1$G;

var scales$6 = {
    SM: "sm",
    MD: "md",
};

var getScale$3 = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales$6.SM:
            return "24px";
        case scales$6.MD:
        default:
            return "32px";
    }
};
var Checkbox = styled.input.attrs({ type: "checkbox" })(templateObject_1$F || (templateObject_1$F = __makeTemplateObject(["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 8px;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    border-color: transparent;\n    top: 30%;\n    left: 0;\n    right: 0;\n    width: 50%;\n    height: 25%;\n    margin: auto;\n    transform: rotate(-50deg);\n    transition: border-color 0.2s ease-in-out;\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      border-color: white;\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n"], ["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 8px;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    content: \"\";\n    position: absolute;\n    border-bottom: 2px solid;\n    border-left: 2px solid;\n    border-color: transparent;\n    top: 30%;\n    left: 0;\n    right: 0;\n    width: 50%;\n    height: 25%;\n    margin: auto;\n    transform: rotate(-50deg);\n    transition: border-color 0.2s ease-in-out;\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      border-color: white;\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n"])), getScale$3, getScale$3, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.success;
});
Checkbox.defaultProps = {
    scale: scales$6.MD,
};
var templateObject_1$F;

var getLeft = function (_a) {
    var position = _a.position;
    if (position === "top-right") {
        return "100%";
    }
    return "50%";
};
var getBottom = function (_a) {
    var position = _a.position;
    if (position === "top" || position === "top-right") {
        return "100%";
    }
    return "auto";
};
var DropdownContent = styled.div(templateObject_1$E || (templateObject_1$E = __makeTemplateObject(["\n  width: max-content;\n  display: none;\n  flex-direction: column;\n  position: absolute;\n  transform: translate(-50%, 0);\n  left: ", ";\n  bottom: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n  padding: 16px;\n  max-height: 500px;\n  overflow-y: auto;\n  z-index: ", ";\n  border-radius: ", ";\n"], ["\n  width: max-content;\n  display: none;\n  flex-direction: column;\n  position: absolute;\n  transform: translate(-50%, 0);\n  left: ", ";\n  bottom: ", ";\n  background-color: ", ";\n  box-shadow: ", ";\n  padding: 16px;\n  max-height: 500px;\n  overflow-y: auto;\n  z-index: ", ";\n  border-radius: ", ";\n"])), getLeft, getBottom, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.level1;
}, function (_a) {
    var theme = _a.theme;
    return theme.zIndices.dropdown;
}, function (_a) {
    var theme = _a.theme;
    return theme.radii.small;
});
var Container$4 = styled.div(templateObject_2$j || (templateObject_2$j = __makeTemplateObject(["\n  position: relative;\n  &:hover ", ", &:focus-within ", " {\n    display: flex;\n  }\n"], ["\n  position: relative;\n  &:hover ", ", &:focus-within ", " {\n    display: flex;\n  }\n"])), DropdownContent, DropdownContent);
var Dropdown = function (_a) {
    var target = _a.target, _b = _a.position, position = _b === void 0 ? "bottom" : _b, children = _a.children;
    return (React.createElement(Container$4, null,
        target,
        React.createElement(DropdownContent, { position: position }, children)));
};
Dropdown.defaultProps = {
    position: "bottom",
};
var templateObject_1$E, templateObject_2$j;

var bunnyFall = keyframes(templateObject_1$D || (templateObject_1$D = __makeTemplateObject(["\n  0% {\n    opacity: 1;\n    transform: translate(0, -100%) rotateZ(0deg);\n  }\n\n  75% {\n    opacity: 1;\n    transform: translate(100px, 75vh) rotateZ(270deg);\n  }\n\n  100% {\n    opacity: 0;\n    transform: translate(150px, 100vh) rotateZ(360deg);\n  }\n"], ["\n  0% {\n    opacity: 1;\n    transform: translate(0, -100%) rotateZ(0deg);\n  }\n\n  75% {\n    opacity: 1;\n    transform: translate(100px, 75vh) rotateZ(270deg);\n  }\n\n  100% {\n    opacity: 0;\n    transform: translate(150px, 100vh) rotateZ(360deg);\n  }\n"])));
var Bunny = styled.div(templateObject_2$i || (templateObject_2$i = __makeTemplateObject(["\n  display: inline-flex;\n  position: fixed;\n  top: 0;\n  left: ", ";\n  transform: translate3d(0, -100%, 0);\n  user-select: none;\n  pointer-events: none;\n  z-index: 99999;\n\n  animation-name: ", ";\n  animation-duration: ", ";\n  animation-timing-function: linear;\n  animation-iteration-count: ", ";\n  animation-play-state: running;\n\n  &:nth-child(5n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 2) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(2n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 10) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(7n + 2) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(4n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 7) {\n    animation-delay: ", ";\n  }\n"], ["\n  display: inline-flex;\n  position: fixed;\n  top: 0;\n  left: ", ";\n  transform: translate3d(0, -100%, 0);\n  user-select: none;\n  pointer-events: none;\n  z-index: 99999;\n\n  animation-name: ", ";\n  animation-duration: ", ";\n  animation-timing-function: linear;\n  animation-iteration-count: ", ";\n  animation-play-state: running;\n\n  &:nth-child(5n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 2) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(2n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 10) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(7n + 2) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(4n + 5) {\n    animation-delay: ", ";\n  }\n\n  &:nth-child(3n + 7) {\n    animation-delay: ", ";\n  }\n"])), function (_a) {
    var position = _a.position;
    return position + "vw";
}, bunnyFall, function (_a) {
    var duration = _a.duration;
    return duration + "s";
}, function (_a) {
    var iterations = _a.iterations;
    return (Number.isFinite(iterations) ? String(iterations) : "infinite");
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 1.3 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 1.5 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 1.7 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 2.7 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 3.5 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 5.5 + "s";
}, function (_a) {
    var duration = _a.duration;
    return (duration / 10) * 8 + "s";
});
var FallingBunnies = function (_a) {
    var _b = _a.count, count = _b === void 0 ? 30 : _b, _c = _a.size, size = _c === void 0 ? 32 : _c, _d = _a.iterations, iterations = _d === void 0 ? Infinity : _d, _e = _a.duration, duration = _e === void 0 ? 10 : _e;
    var bunnies = __spreadArray([], Array(count)).map(function (_, index) { return (React.createElement(Bunny, { key: String(index), position: Math.random() * 100, iterations: iterations, duration: duration },
        React.createElement(Icon$1c, { width: size, height: size }))); });
    return React.createElement("div", null, bunnies);
};
var templateObject_1$D, templateObject_2$i;

var tags = {
    H1: "h1",
    H2: "h2",
    H3: "h3",
    H4: "h4",
    H5: "h5",
    H6: "h6",
};
var scales$5 = {
    MD: "md",
    LG: "lg",
    XL: "xl",
    XXL: "xxl",
};

var _a$3;
var style = (_a$3 = {},
    _a$3[scales$5.MD] = {
        fontSize: "20px",
        fontSizeLg: "20px",
    },
    _a$3[scales$5.LG] = {
        fontSize: "24px",
        fontSizeLg: "24px",
    },
    _a$3[scales$5.XL] = {
        fontSize: "32px",
        fontSizeLg: "40px",
    },
    _a$3[scales$5.XXL] = {
        fontSize: "48px",
        fontSizeLg: "64px",
    },
    _a$3);
var Heading = styled(Text).attrs({ bold: true })(templateObject_1$C || (templateObject_1$C = __makeTemplateObject(["\n  font-size: ", ";\n  font-weight: 600;\n  line-height: 1.1;\n\n  ", " {\n    font-size: ", ";\n  }\n"], ["\n  font-size: ", ";\n  font-weight: 600;\n  line-height: 1.1;\n\n  ", " {\n    font-size: ", ";\n  }\n"])), function (_a) {
    var scale = _a.scale;
    return style[scale || scales$5.MD].fontSize;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
}, function (_a) {
    var scale = _a.scale;
    return style[scale || scales$5.MD].fontSizeLg;
});
Heading.defaultProps = {
    as: tags.H2,
};
var templateObject_1$C;

var observerOptions = {
    root: null,
    rootMargin: "200px",
    threshold: 0,
};

var Wrapper$3 = styled.div(templateObject_1$B || (templateObject_1$B = __makeTemplateObject(["\n  position: relative;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: ", "px;\n  max-width: ", "px;\n  max-height: ", "px;\n  width: 100%;\n  padding-top: ", "%;\n  ", "\n"], ["\n  position: relative;\n  background-position: center center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  height: ", "px;\n  max-width: ", "px;\n  max-height: ", "px;\n  width: 100%;\n  padding-top: ", "%;\n  ", "\n"])), function (_a) {
    var height = _a.height, responsive = _a.responsive;
    return (responsive ? 0 : height);
}, function (_a) {
    var width = _a.width;
    return width;
}, function (_a) {
    var height = _a.height;
    return height;
}, function (_a) {
    var width = _a.width, height = _a.height, responsive = _a.responsive;
    return (responsive ? (height / width) * 100 : 0);
}, space);
var templateObject_1$B;

var BackgroundImage = function (_a) {
    var src = _a.src, otherProps = __rest(_a, ["src"]);
    var imgRef = useRef(null);
    useEffect(function () {
        var img = imgRef.current;
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                var isIntersecting = entry.isIntersecting;
                if (isIntersecting) {
                    img.style.backgroundImage = "url(\"" + src + "\")";
                    observer.disconnect();
                }
            });
        }, observerOptions);
        observer.observe(img);
        return function () {
            observer.disconnect();
        };
    }, [src]);
    return React.createElement(Wrapper$3, __assign({ ref: imgRef }, otherProps));
};

var StyledImage = styled.img(templateObject_1$A || (templateObject_1$A = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  max-width: 100%;\n"])));
var Placeholder = styled.div(templateObject_2$h || (templateObject_2$h = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n"])));
var Image = function (_a) {
    var src = _a.src, alt = _a.alt, otherProps = __rest(_a, ["src", "alt"]);
    var imgRef = useRef(null);
    var _b = useState(false), isLoaded = _b[0], setIsLoaded = _b[1];
    useEffect(function () {
        var img = imgRef.current;
        var observer = new IntersectionObserver(function (entries) {
            entries.forEach(function (entry) {
                var isIntersecting = entry.isIntersecting;
                if (isIntersecting) {
                    setIsLoaded(true);
                    observer.disconnect();
                }
            });
        }, observerOptions);
        observer.observe(img);
        return function () {
            observer.disconnect();
        };
    }, [src]);
    return (React.createElement(Wrapper$3, __assign({ ref: imgRef }, otherProps), isLoaded ? React.createElement(StyledImage, { src: src, alt: alt }) : React.createElement(Placeholder, null)));
};
var templateObject_1$A, templateObject_2$h;

var GridLayout$1 = styled(Grid)(templateObject_1$z || (templateObject_1$z = __makeTemplateObject(["\n  grid-template-columns: repeat(6, 1fr);\n  grid-gap: 16px;\n  ", " {\n    grid-template-columns: repeat(8, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 32px;\n  }\n"], ["\n  grid-template-columns: repeat(6, 1fr);\n  grid-gap: 16px;\n  ", " {\n    grid-template-columns: repeat(8, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 24px;\n  }\n  ", " {\n    grid-template-columns: repeat(12, 1fr);\n    grid-gap: 32px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.lg;
});
var templateObject_1$z;

var GridLayout = styled(GridLayout$1)(templateObject_1$y || (templateObject_1$y = __makeTemplateObject(["\n  & > div {\n    grid-column: span 6;\n    ", " {\n      grid-column: span 4;\n    }\n  }\n"], ["\n  & > div {\n    grid-column: span 6;\n    ", " {\n      grid-column: span 4;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var templateObject_1$y;

var StyledLink$1 = styled(Text)(templateObject_1$x || (templateObject_1$x = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  &:hover {\n    text-decoration: underline;\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  width: fit-content;\n  &:hover {\n    text-decoration: underline;\n  }\n"])));
var Link = function (_a) {
    var external = _a.external, props = __rest(_a, ["external"]);
    var internalProps = external ? getExternalLinkProps() : {};
    return React.createElement(StyledLink$1, __assign({ as: "a", bold: true }, internalProps, props));
};
Link.defaultProps = {
    color: "primary",
};
var templateObject_1$x;

var LinkExternal = function (_a) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (React.createElement(Link, __assign({ external: true }, props),
        children,
        React.createElement(Icon$12, { color: "primary", ml: "4px" })));
};

var variants$2 = {
    warning: {
        background: "#FFB23719",
        borderColor: "warning",
    },
    danger: {
        background: "#ED4B9E19",
        borderColor: "failure",
    },
};

var Icons$2 = {
    warning: Icon$B,
    danger: Icon$1L,
};
var MessageContainer = styled.div(templateObject_1$w || (templateObject_1$w = __makeTemplateObject(["\n  display: flex;\n  background-color: gray;\n  padding: 16px;\n  border-radius: 16px;\n  border: solid 1px;\n\n  svg {\n    align-self: flex-start;\n  }\n\n  ", "\n  ", "\n"], ["\n  display: flex;\n  background-color: gray;\n  padding: 16px;\n  border-radius: 16px;\n  border: solid 1px;\n\n  svg {\n    align-self: flex-start;\n  }\n\n  ", "\n  ",
    "\n"])), space, variant$1({
    variants: variants$2,
}));
var Message = function (_a) {
    var children = _a.children, variant = _a.variant, props = __rest(_a, ["children", "variant"]);
    var Icon = Icons$2[variant];
    return (React.createElement(MessageContainer, __assign({ variant: variant }, props),
        React.createElement(Icon, { color: variants$2[variant].borderColor, width: "24px", mr: "12px" }),
        children));
};
var templateObject_1$w;

var NotificationDotRoot = styled.span(templateObject_1$v || (templateObject_1$v = __makeTemplateObject(["\n  display: inline-flex;\n  position: relative;\n"], ["\n  display: inline-flex;\n  position: relative;\n"])));
var Dot = styled.span(templateObject_2$g || (templateObject_2$g = __makeTemplateObject(["\n  display: ", ";\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 10px;\n  height: 10px;\n  pointer-events: none;\n  border: 2px solid ", ";\n  border-radius: 50%;\n  background-color: ", ";\n"], ["\n  display: ", ";\n  position: absolute;\n  top: 0;\n  right: 0;\n  width: 10px;\n  height: 10px;\n  pointer-events: none;\n  border: 2px solid ", ";\n  border-radius: 50%;\n  background-color: ", ";\n"])), function (_a) {
    var show = _a.show;
    return (show ? "inline-flex" : "none");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.invertedContrast;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.failure;
});
var NotificationDot = function (_a) {
    var _b = _a.show, show = _b === void 0 ? false : _b, children = _a.children, props = __rest(_a, ["show", "children"]);
    return (React.createElement(NotificationDotRoot, null,
        Children.map(children, function (child) { return cloneElement(child, props); }),
        React.createElement(Dot, { show: show })));
};
var templateObject_1$v, templateObject_2$g;

var scales$4 = {
    SM: "sm",
    MD: "md",
};

var scaleKeyValues$1 = {
    sm: {
        pancakeSize: "16px",
        travelDistance: "16px",
        toggleHeight: "20px",
        toggleWidth: "36px",
        pancakeThickness: "1px",
        pancakeTwoOffset: "0px",
        pancakeThreeOffset: "-3px",
        butterTop: "3px",
        butterLeft: "10px",
        butterWidth: "6px",
        butterHeight: "5px",
        butterThickness: "0.5px",
        butterRadius: "2px",
        butterSmearOneTop: "10px",
        butterSmearOneLeft: "2.5px",
        butterSmearTwoTop: "11px",
        butterSmearTwoRight: "2.5px", // these values adjust the position of it
    },
    md: {
        pancakeSize: "32px",
        travelDistance: "34px",
        toggleHeight: "40px",
        toggleWidth: "72px",
        pancakeThickness: "2px",
        pancakeTwoOffset: "-3px",
        pancakeThreeOffset: "-8px",
        butterTop: "3px",
        butterLeft: "16px",
        butterWidth: "12px",
        butterHeight: "11px",
        butterThickness: "1px",
        butterRadius: "4px",
        butterSmearOneTop: "20px",
        butterSmearOneLeft: "5px",
        butterSmearTwoTop: "22px",
        butterSmearTwoRight: "5px",
    },
};
var getScale$2 = function (property) {
    return function (_a) {
        var _b = _a.scale, scale = _b === void 0 ? scales$4.MD : _b;
        return scaleKeyValues$1[scale][property];
    };
};
var PancakeStack = styled.div(templateObject_1$u || (templateObject_1$u = __makeTemplateObject(["\n  position: relative;\n  display: inline-block;\n\n  &:label:before {\n    content: none;\n  }\n\n  .pancakes {\n    transition: 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  }\n\n  .pancake {\n    background: #e27c31;\n    border-radius: 50%;\n    width: ", ";\n    height: ", ";\n    position: absolute;\n    transition: 0.4s ease;\n    top: 2px;\n    left: 4px;\n    box-shadow: 0 ", " 0 ", " #fbbe7c;\n  }\n\n  .pancake:nth-child(1) {\n    background: ", ";\n    box-shadow: 0 ", " 0 ", "\n      ", ";\n  }\n\n  .pancake:nth-child(2) {\n    left: 0;\n    top: ", ";\n    transform: scale(0);\n    transition: 0.2s ease 0.2s;\n  }\n\n  .pancake:nth-child(3) {\n    top: ", ";\n    transform: scale(0);\n    transition: 0.2s ease 0.2s;\n  }\n\n  .pancake:nth-child(3):before,\n  .pancake:nth-child(3):after {\n    content: \"\";\n    position: absolute;\n    background: #ef8927;\n    border-radius: 20px;\n    width: 50%;\n    height: 20%;\n  }\n\n  .pancake:nth-child(3):before {\n    top: ", ";\n    left: ", ";\n  }\n\n  .pancake:nth-child(3):after {\n    top: ", ";\n    right: ", ";\n  }\n\n  .butter {\n    width: ", ";\n    height: ", ";\n    background: #fbdb60;\n    top: ", ";\n    left: ", ";\n    position: absolute;\n    border-radius: ", ";\n    box-shadow: 0 ", " 0 ", " #d67823;\n    transform: scale(0);\n    transition: 0.2s ease;\n  }\n"], ["\n  position: relative;\n  display: inline-block;\n\n  &:label:before {\n    content: none;\n  }\n\n  .pancakes {\n    transition: 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275);\n  }\n\n  .pancake {\n    background: #e27c31;\n    border-radius: 50%;\n    width: ", ";\n    height: ", ";\n    position: absolute;\n    transition: 0.4s ease;\n    top: 2px;\n    left: 4px;\n    box-shadow: 0 ", " 0 ", " #fbbe7c;\n  }\n\n  .pancake:nth-child(1) {\n    background: ", ";\n    box-shadow: 0 ", " 0 ", "\n      ", ";\n  }\n\n  .pancake:nth-child(2) {\n    left: 0;\n    top: ", ";\n    transform: scale(0);\n    transition: 0.2s ease 0.2s;\n  }\n\n  .pancake:nth-child(3) {\n    top: ", ";\n    transform: scale(0);\n    transition: 0.2s ease 0.2s;\n  }\n\n  .pancake:nth-child(3):before,\n  .pancake:nth-child(3):after {\n    content: \"\";\n    position: absolute;\n    background: #ef8927;\n    border-radius: 20px;\n    width: 50%;\n    height: 20%;\n  }\n\n  .pancake:nth-child(3):before {\n    top: ", ";\n    left: ", ";\n  }\n\n  .pancake:nth-child(3):after {\n    top: ", ";\n    right: ", ";\n  }\n\n  .butter {\n    width: ", ";\n    height: ", ";\n    background: #fbdb60;\n    top: ", ";\n    left: ", ";\n    position: absolute;\n    border-radius: ", ";\n    box-shadow: 0 ", " 0 ", " #d67823;\n    transform: scale(0);\n    transition: 0.2s ease;\n  }\n"])), getScale$2("pancakeSize"), getScale$2("pancakeSize"), getScale$2("pancakeThickness"), getScale$2("pancakeThickness"), function (_a) {
    var theme = _a.theme;
    return theme.pancakeToggle.handleBackground;
}, getScale$2("pancakeThickness"), getScale$2("pancakeThickness"), function (_a) {
    var theme = _a.theme;
    return theme.pancakeToggle.handleShadow;
}, getScale$2("pancakeTwoOffset"), getScale$2("pancakeThreeOffset"), getScale$2("butterSmearOneTop"), getScale$2("butterSmearOneLeft"), getScale$2("butterSmearTwoTop"), getScale$2("butterSmearTwoRight"), getScale$2("butterWidth"), getScale$2("butterHeight"), getScale$2("butterTop"), getScale$2("butterLeft"), getScale$2("butterRadius"), getScale$2("butterThickness"), getScale$2("butterThickness"));
var PancakeInput = styled.input(templateObject_2$f || (templateObject_2$f = __makeTemplateObject(["\n  height: 40px;\n  left: 0;\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  width: 40px;\n\n  &:focus + label {\n    box-shadow: ", ";\n  }\n\n  &:checked + label .pancakes {\n    transform: translateX(", ");\n  }\n\n  &:checked + label .pancake:nth-child(1) {\n    background: #e27c31;\n    box-shadow: 0 ", " 0 ", " #fbbe7c;\n    transition-delay: 0.2s;\n  }\n\n  &:checked + label .pancake:nth-child(2) {\n    transform: scale(1);\n    transition-delay: 0.2s;\n  }\n\n  &:checked + label .pancake:nth-child(3) {\n    transform: scale(1);\n    transition-delay: 0.4s;\n  }\n\n  &:checked + label .butter {\n    transform: scale(1);\n    transition-delay: 0.6s;\n  }\n"], ["\n  height: 40px;\n  left: 0;\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  width: 40px;\n\n  &:focus + label {\n    box-shadow: ", ";\n  }\n\n  &:checked + label .pancakes {\n    transform: translateX(", ");\n  }\n\n  &:checked + label .pancake:nth-child(1) {\n    background: #e27c31;\n    box-shadow: 0 ", " 0 ", " #fbbe7c;\n    transition-delay: 0.2s;\n  }\n\n  &:checked + label .pancake:nth-child(2) {\n    transform: scale(1);\n    transition-delay: 0.2s;\n  }\n\n  &:checked + label .pancake:nth-child(3) {\n    transform: scale(1);\n    transition-delay: 0.4s;\n  }\n\n  &:checked + label .butter {\n    transform: scale(1);\n    transition-delay: 0.6s;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, getScale$2("travelDistance"), getScale$2("pancakeThickness"), getScale$2("pancakeThickness"));
var PancakeLabel = styled.label(templateObject_3$9 || (templateObject_3$9 = __makeTemplateObject(["\n  width: ", ";\n  height: ", ";\n  background: ", ";\n  box-shadow: ", ";\n  display: inline-block;\n  border-radius: 50px;\n  position: relative;\n  transition: all 0.3s ease;\n  transform-origin: 20% center;\n  cursor: pointer;\n"], ["\n  width: ", ";\n  height: ", ";\n  background: ", ";\n  box-shadow: ", ";\n  display: inline-block;\n  border-radius: 50px;\n  position: relative;\n  transition: all 0.3s ease;\n  transform-origin: 20% center;\n  cursor: pointer;\n"])), getScale$2("toggleWidth"), getScale$2("toggleHeight"), function (_a) {
    var theme = _a.theme, checked = _a.checked;
    return theme.colors[checked ? "primary" : "input"];
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
});
var templateObject_1$u, templateObject_2$f, templateObject_3$9;

var PancakeToggle = function (_a) {
    var checked = _a.checked, _b = _a.scale, scale = _b === void 0 ? scales$4.MD : _b, props = __rest(_a, ["checked", "scale"]);
    return (React.createElement(PancakeStack, { scale: scale },
        React.createElement(PancakeInput, __assign({ id: props.id || "pancake-toggle", scale: scale, type: "checkbox", checked: checked }, props)),
        React.createElement(PancakeLabel, { scale: scale, checked: checked, htmlFor: props.id || "pancake-toggle" },
            React.createElement("div", { className: "pancakes" },
                React.createElement("div", { className: "pancake" })))));
};
PancakeToggle.defaultProps = {
    scale: scales$4.MD,
};

var variants$1 = {
    ROUND: "round",
    FLAT: "flat",
};
var scales$3 = {
    MD: "md",
    SM: "sm",
};

var _a$2, _b$1;
var styleVariants$1 = (_a$2 = {},
    _a$2[variants$1.ROUND] = {
        borderRadius: "32px",
    },
    _a$2[variants$1.FLAT] = {
        borderRadius: 0,
    },
    _a$2);
var styleScales = (_b$1 = {},
    _b$1[scales$3.MD] = {
        height: "16px",
    },
    _b$1[scales$3.SM] = {
        height: "8px",
    },
    _b$1);

var Bar = styled.div(templateObject_1$t || (templateObject_1$t = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: ", ";\n  height: 100%;\n  transition: width 200ms ease;\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  background-color: ", ";\n  height: 100%;\n  transition: width 200ms ease;\n"])), function (props) { return (props.primary ? props.theme.colors.secondary : props.theme.colors.secondary + "80"); });
Bar.defaultProps = {
    primary: false,
};
var StyledProgress = styled.div(templateObject_2$e || (templateObject_2$e = __makeTemplateObject(["\n  position: relative;\n  background-color: ", ";\n  box-shadow: ", ";\n  overflow: hidden;\n\n  ", " {\n    border-top-left-radius: ", ";\n    border-bottom-left-radius: ", ";\n  }\n\n  ", "\n  ", "\n  ", "\n"], ["\n  position: relative;\n  background-color: ", ";\n  box-shadow: ", ";\n  overflow: hidden;\n\n  ", " {\n    border-top-left-radius: ", ";\n    border-bottom-left-radius: ", ";\n  }\n\n  ",
    "\n  ",
    "\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, Bar, function (_a) {
    var variant = _a.variant;
    return (variant === variants$1.FLAT ? "0" : "32px");
}, function (_a) {
    var variant = _a.variant;
    return (variant === variants$1.FLAT ? "0" : "32px");
}, variant$1({
    variants: styleVariants$1,
}), variant$1({
    prop: "scale",
    variants: styleScales,
}), space);
var templateObject_1$t, templateObject_2$e;

var ProgressBunnyWrapper = styled.div(templateObject_1$s || (templateObject_1$s = __makeTemplateObject(["\n  display: flex;\n  z-index: 2;\n  top: -65%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  transition: left 200ms ease-out;\n"], ["\n  display: flex;\n  z-index: 2;\n  top: -65%;\n  position: absolute;\n  transform: translate(-50%, -50%);\n  transition: left 200ms ease-out;\n"])));
var templateObject_1$s;

var stepGuard = function (step) {
    if (step < 0) {
        return 0;
    }
    if (step > 100) {
        return 100;
    }
    return step;
};
var Progress = function (_a) {
    var _b = _a.variant, variant = _b === void 0 ? variants$1.ROUND : _b, _c = _a.scale, scale = _c === void 0 ? scales$3.MD : _c, _d = _a.primaryStep, primaryStep = _d === void 0 ? 0 : _d, _e = _a.secondaryStep, secondaryStep = _e === void 0 ? null : _e, _f = _a.showProgressBunny, showProgressBunny = _f === void 0 ? false : _f;
    return (React.createElement(StyledProgress, { variant: variant, scale: scale },
        showProgressBunny && (React.createElement(ProgressBunnyWrapper, { style: { left: stepGuard(primaryStep) + "%" } },
            React.createElement(Icon$V, null))),
        React.createElement(Bar, { primary: true, style: { width: stepGuard(primaryStep) + "%" } }),
        secondaryStep ? React.createElement(Bar, { style: { width: stepGuard(secondaryStep) + "%" } }) : null));
};

var scales$2 = {
    SM: "sm",
    MD: "md",
};

var getScale$1 = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales$2.SM:
            return "24px";
        case scales$2.MD:
        default:
            return "32px";
    }
};
var getCheckedScale = function (_a) {
    var scale = _a.scale;
    switch (scale) {
        case scales$2.SM:
            return "12px";
        case scales$2.MD:
        default:
            return "20px";
    }
};
var Radio = styled.input.attrs({ type: "radio" })(templateObject_1$r || (templateObject_1$r = __makeTemplateObject(["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 50%;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    border-radius: 50%;\n    content: \"\";\n    height: ", ";\n    left: 6px;\n    position: absolute;\n    top: 6px;\n    width: ", ";\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      background-color: ", ";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n  ", "\n"], ["\n  appearance: none;\n  overflow: hidden;\n  cursor: pointer;\n  position: relative;\n  display: inline-block;\n  height: ", ";\n  width: ", ";\n  vertical-align: middle;\n  transition: background-color 0.2s ease-in-out;\n  border: 0;\n  border-radius: 50%;\n  background-color: ", ";\n  box-shadow: ", ";\n\n  &:after {\n    border-radius: 50%;\n    content: \"\";\n    height: ", ";\n    left: 6px;\n    position: absolute;\n    top: 6px;\n    width: ", ";\n  }\n\n  &:hover:not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n\n  &:focus {\n    outline: none;\n    box-shadow: ", ";\n  }\n\n  &:checked {\n    background-color: ", ";\n    &:after {\n      background-color: ", ";\n    }\n  }\n\n  &:disabled {\n    cursor: default;\n    opacity: 0.6;\n  }\n  ", "\n"])), getScale$1, getScale$1, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, getCheckedScale, getCheckedScale, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.success;
}, function (_a) {
    var theme = _a.theme;
    return theme.radio.handleBackground;
}, space);
Radio.defaultProps = {
    scale: scales$2.MD,
    m: 0,
};
var templateObject_1$r;

var bunnyHeadMain = "data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2232%22%20viewBox%3D%220%200%2028%2032%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20x%3D%221%22%20y%3D%2219%22%20width%3D%2217%22%20height%3D%2211%22%20fill%3D%22%231FC7D4%22%2F%3E%3Cpath%20d%3D%22M9.507%2024.706C8.14635%2026.0666%209.73795%2028.2313%2011.7555%2030.2489C13.7731%2032.2665%2015.9378%2033.8581%2017.2984%2032.4974C18.6591%2031.1368%2017.9685%2028.0711%2015.9509%2026.0535C13.9333%2024.0359%2010.8676%2023.3453%209.507%2024.706Z%22%20fill%3D%22%231FC7D4%22%2F%3E%3Cpath%20d%3D%22M15.507%2022.706C14.1463%2024.0666%2015.7379%2026.2313%2017.7555%2028.2489C19.7731%2030.2665%2021.9378%2031.8581%2023.2984%2030.4974C24.6591%2029.1368%2023.9685%2026.0711%2021.9509%2024.0535C19.9333%2022.0359%2016.8676%2021.3453%2015.507%2022.706Z%22%20fill%3D%22%231FC7D4%22%2F%3E%3Cg%20filter%3D%22url%28%23filter0_d%29%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M14.146%206.75159C14.2105%207.10896%2014.2703%207.48131%2014.3281%207.86164C14.2189%207.85865%2014.1095%207.85714%2014%207.85714C13.3803%207.85714%2012.7648%207.90539%2012.159%207.99779C11.879%207.41458%2011.5547%206.82246%2011.1872%206.23145C8.69897%202.22947%206.53826%201.98679%204.67882%202.98366C2.81938%203.98052%202.85628%206.67644%205.26696%209.40538C5.58076%209.76061%205.90097%2010.1398%206.2247%2010.5286C3.69013%2012.4659%202%2015.2644%202%2018.2695C2%2023.8292%207.78518%2025%2014%2025C20.2148%2025%2026%2023.8292%2026%2018.2695C26%2014.8658%2023.8318%2011.7272%2020.7243%209.80476C20.9022%208.86044%2021%207.83019%2021%206.75159C21%202.19612%2019.2549%201%2017.1022%201C14.9495%201%2013.5261%203.31847%2014.146%206.75159Z%22%20fill%3D%22url%28%23paint0_linear_bunnyhead_main%29%22%2F%3E%3C%2Fg%3E%3Cg%20transform%3D%22translate%282%29%22%3E%3Cpath%20d%3D%22M12.7284%2016.4446C12.796%2017.3149%2012.4446%2019.0556%2010.498%2019.0556%22%20stroke%3D%22%23452A7A%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M12.7457%2016.4446C12.6781%2017.3149%2013.0296%2019.0556%2014.9761%2019.0556%22%20stroke%3D%22%23452A7A%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M9%2014.5C9%2015.6046%208.55228%2016%208%2016C7.44772%2016%207%2015.6046%207%2014.5C7%2013.3954%207.44772%2013%208%2013C8.55228%2013%209%2013.3954%209%2014.5Z%22%20fill%3D%22%23452A7A%22%2F%3E%3Cpath%20d%3D%22M18%2014.5C18%2015.6046%2017.5523%2016%2017%2016C16.4477%2016%2016%2015.6046%2016%2014.5C16%2013.3954%2016.4477%2013%2017%2013C17.5523%2013%2018%2013.3954%2018%2014.5Z%22%20fill%3D%22%23452A7A%22%2F%3E%3C%2Fg%3E%3Cdefs%3E%3Cfilter%20id%3D%22filter0_d%22%3E%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%2F%3E%3CfeOffset%20dy%3D%221%22%2F%3E%3CfeGaussianBlur%20stdDeviation%3D%221%22%2F%3E%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.5%200%22%2F%3E%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22effect1_dropShadow%22%2F%3E%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22effect1_dropShadow%22%20result%3D%22shape%22%2F%3E%3C%2Ffilter%3E%3ClinearGradient%20id%3D%22paint0_linear_bunnyhead_main%22%20x1%3D%2214%22%20y1%3D%221%22%20x2%3D%2214%22%20y2%3D%2225%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%2353DEE9%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%231FC7D4%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3C%2Fsvg%3E";

var bunnyHeadMax = "data:image/svg+xml,%3Csvg%20width%3D%2224%22%20height%3D%2232%22%20viewBox%3D%220%200%2028%2032%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Crect%20x%3D%221%22%20y%3D%2219%22%20width%3D%2217%22%20height%3D%2211%22%20fill%3D%22%231FC7D4%22%2F%3E%3Cpath%20d%3D%22M9.507%2024.706C8.14635%2026.0666%209.73795%2028.2313%2011.7555%2030.2489C13.7731%2032.2665%2015.9378%2033.8581%2017.2984%2032.4974C18.6591%2031.1368%2017.9685%2028.0711%2015.9509%2026.0535C13.9333%2024.0359%2010.8676%2023.3453%209.507%2024.706Z%22%20fill%3D%22%231FC7D4%22%2F%3E%3Cpath%20d%3D%22M15.507%2022.706C14.1463%2024.0666%2015.7379%2026.2313%2017.7555%2028.2489C19.7731%2030.2665%2021.9378%2031.8581%2023.2984%2030.4974C24.6591%2029.1368%2023.9685%2026.0711%2021.9509%2024.0535C19.9333%2022.0359%2016.8676%2021.3453%2015.507%2022.706Z%22%20fill%3D%22%231FC7D4%22%2F%3E%3Cg%20filter%3D%22url%28%23filter0_d%29%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20clip-rule%3D%22evenodd%22%20d%3D%22M14.146%206.75159C14.2105%207.10896%2014.2703%207.48131%2014.3281%207.86164C14.2189%207.85865%2014.1095%207.85714%2014%207.85714C13.3803%207.85714%2012.7648%207.90539%2012.159%207.99779C11.879%207.41458%2011.5547%206.82246%2011.1872%206.23145C8.69897%202.22947%206.53826%201.98679%204.67882%202.98366C2.81938%203.98052%202.85628%206.67644%205.26696%209.40538C5.58076%209.76061%205.90097%2010.1398%206.2247%2010.5286C3.69013%2012.4659%202%2015.2644%202%2018.2695C2%2023.8292%207.78518%2025%2014%2025C20.2148%2025%2026%2023.8292%2026%2018.2695C26%2014.8658%2023.8318%2011.7272%2020.7243%209.80476C20.9022%208.86044%2021%207.83019%2021%206.75159C21%202.19612%2019.2549%201%2017.1022%201C14.9495%201%2013.5261%203.31847%2014.146%206.75159Z%22%20fill%3D%22url%28%23paint0_linear_bunnyhead_max%29%22%2F%3E%3C%2Fg%3E%3Cpath%20d%3D%22M11.5047%2016.0634C10.9435%2014.4456%208.79685%2014.4456%208.08131%2016.0635%22%20stroke%3D%22%23452A7A%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M20.8894%2016.0634C20.3283%2014.4456%2018.1816%2014.4456%2017.4661%2016.0635%22%20stroke%3D%22%23452A7A%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M14.7284%2017.4446C14.796%2018.3149%2014.4446%2020.0556%2012.498%2020.0556%22%20stroke%3D%22%23452A7A%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M14.7457%2017.4446C14.6781%2018.3149%2015.0296%2020.0556%2016.9761%2020.0556%22%20stroke%3D%22%23452A7A%22%20stroke-linecap%3D%22round%22%2F%3E%3Cpath%20d%3D%22M13.4505%2020.0787C13.4505%2021.5097%2015.955%2021.5097%2015.955%2020.0787%22%20stroke%3D%22%23452A7A%22%20stroke-linecap%3D%22round%22%2F%3E%3Cdefs%3E%3Cfilter%20id%3D%22filter0_d%22%20x%3D%220%22%20y%3D%220%22%20width%3D%2228%22%20height%3D%2228%22%20filterUnits%3D%22userSpaceOnUse%22%20color-interpolation-filters%3D%22sRGB%22%3E%3CfeFlood%20flood-opacity%3D%220%22%20result%3D%22BackgroundImageFix%22%2F%3E%3CfeColorMatrix%20in%3D%22SourceAlpha%22%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%20127%200%22%2F%3E%3CfeOffset%20dy%3D%221%22%2F%3E%3CfeGaussianBlur%20stdDeviation%3D%221%22%2F%3E%3CfeColorMatrix%20type%3D%22matrix%22%20values%3D%220%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200%200.5%200%22%2F%3E%3CfeBlend%20mode%3D%22normal%22%20in2%3D%22BackgroundImageFix%22%20result%3D%22effect1_dropShadow%22%2F%3E%3CfeBlend%20mode%3D%22normal%22%20in%3D%22SourceGraphic%22%20in2%3D%22effect1_dropShadow%22%20result%3D%22shape%22%2F%3E%3C%2Ffilter%3E%3ClinearGradient%20id%3D%22paint0_linear_bunnyhead_max%22%20x1%3D%2214%22%20y1%3D%221%22%20x2%3D%2214%22%20y2%3D%2225%22%20gradientUnits%3D%22userSpaceOnUse%22%3E%3Cstop%20stop-color%3D%22%2353DEE9%22%2F%3E%3Cstop%20offset%3D%221%22%20stop-color%3D%22%231FC7D4%22%2F%3E%3C%2FlinearGradient%3E%3C%2Fdefs%3E%3C%2Fsvg%3E";

var bunnyButt = "data:image/svg+xml,%3Csvg%20width%3D%2215%22%20height%3D%2232%22%20viewBox%3D%220%200%2015%2032%22%20fill%3D%22none%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M9.58803%2020.8649C7.72935%2021.3629%208.02539%2024.0334%208.76388%2026.7895C9.50238%2029.5456%2010.5812%2032.0062%2012.4399%2031.5082C14.2986%2031.0102%2015.2334%2028.0099%2014.4949%2025.2538C13.7564%2022.4978%2011.4467%2020.3669%209.58803%2020.8649Z%22%20fill%3D%22%230098A1%22%2F%3E%3Cpath%20d%3D%22M1%2024.4516C1%2020.8885%203.88849%2018%207.45161%2018H15V28H4.54839C2.58867%2028%201%2026.4113%201%2024.4516Z%22%20fill%3D%22%231FC7D4%22%2F%3E%3Cpath%20d%3D%22M6.11115%2017.2246C6.79693%2018.4124%205.77784%2019.3343%204.52793%2020.0559C3.27802%2020.7776%201.97011%2021.1992%201.28433%2020.0114C0.598546%2018.8236%201.1635%2017.1151%202.41341%2016.3935C3.66332%2015.6718%205.42537%2016.0368%206.11115%2017.2246Z%22%20fill%3D%22%2353DEE9%22%2F%3E%3Cpath%20d%3D%22M1.64665%2023.6601C0.285995%2025.0207%201.87759%2027.1854%203.89519%2029.203C5.91279%2031.2206%208.07743%2032.8122%209.43808%2031.4515C10.7987%2030.0909%2010.1082%2027.0252%208.09058%2025.0076C6.07298%2022.99%203.0073%2022.2994%201.64665%2023.6601Z%22%20fill%3D%22%231FC7D4%22%2F%3E%3C%2Fsvg%3E";

var getCursorStyle = function (_a) {
    var _b = _a.disabled, disabled = _b === void 0 ? false : _b;
    return disabled ? "not-allowed" : "cursor";
};
var getBaseThumbStyles = function (_a) {
    var isMax = _a.isMax, disabled = _a.disabled;
    return "\n  -webkit-appearance: none;\n  background-image: url(" + (isMax ? bunnyHeadMax : bunnyHeadMain) + ");\n  background-color: transparent;\n  border: 0;\n  cursor: " + getCursorStyle + ";\n  width: 24px;\n  height: 32px;\n  filter: " + (disabled ? "grayscale(100%)" : "none") + ";\n  transform: translate(-2px, -2px);\n  transition: 200ms transform;\n\n  &:hover {\n    transform: " + (disabled ? "scale(1) translate(-2px, -2px)" : "scale(1.1) translate(-3px, -3px)") + ";\n  }\n";
};
var SliderLabelContainer = styled.div(templateObject_1$q || (templateObject_1$q = __makeTemplateObject(["\n  bottom: 0;\n  position: absolute;\n  left: 14px;\n  width: calc(100% - 30px);\n"], ["\n  bottom: 0;\n  position: absolute;\n  left: 14px;\n  width: calc(100% - 30px);\n"])));
var SliderLabel = styled(Text)(templateObject_2$d || (templateObject_2$d = __makeTemplateObject(["\n  bottom: 0;\n  font-size: 12px;\n  left: ", ";\n  position: absolute;\n  text-align: center;\n  min-width: 24px; // Slider thumb size\n"], ["\n  bottom: 0;\n  font-size: 12px;\n  left: ", ";\n  position: absolute;\n  text-align: center;\n  min-width: 24px; // Slider thumb size\n"])), function (_a) {
    var progress = _a.progress;
    return progress;
});
var BunnyButt = styled.div(templateObject_3$8 || (templateObject_3$8 = __makeTemplateObject(["\n  background: url(", ") no-repeat;\n  height: 32px;\n  filter: ", ";\n  position: absolute;\n  width: 15px;\n"], ["\n  background: url(", ") no-repeat;\n  height: 32px;\n  filter: ", ";\n  position: absolute;\n  width: 15px;\n"])), bunnyButt, function (_a) {
    var disabled = _a.disabled;
    return (disabled ? "grayscale(100%)" : "none");
});
var BunnySlider = styled.div(templateObject_4$6 || (templateObject_4$6 = __makeTemplateObject(["\n  position: absolute;\n  left: 14px;\n  width: calc(100% - 14px);\n"], ["\n  position: absolute;\n  left: 14px;\n  width: calc(100% - 14px);\n"])));
var StyledInput = styled.input(templateObject_5$4 || (templateObject_5$4 = __makeTemplateObject(["\n  cursor: ", ";\n  height: 32px;\n  position: relative;\n\n  ::-webkit-slider-thumb {\n    ", "\n  }\n\n  ::-moz-range-thumb {\n    ", "\n  }\n\n  ::-ms-thumb {\n    ", "\n  }\n"], ["\n  cursor: ", ";\n  height: 32px;\n  position: relative;\n\n  ::-webkit-slider-thumb {\n    ", "\n  }\n\n  ::-moz-range-thumb {\n    ", "\n  }\n\n  ::-ms-thumb {\n    ", "\n  }\n"])), getCursorStyle, getBaseThumbStyles, getBaseThumbStyles, getBaseThumbStyles);
var BarBackground = styled.div(templateObject_6$3 || (templateObject_6$3 = __makeTemplateObject(["\n  background-color: ", ";\n  height: 2px;\n  position: absolute;\n  top: 18px;\n  width: 100%;\n"], ["\n  background-color: ", ";\n  height: 2px;\n  position: absolute;\n  top: 18px;\n  width: 100%;\n"])), function (_a) {
    var theme = _a.theme, disabled = _a.disabled;
    return theme.colors[disabled ? "textDisabled" : "inputSecondary"];
});
var BarProgress = styled.div(templateObject_7$2 || (templateObject_7$2 = __makeTemplateObject(["\n  background-color: ", ";\n  filter: ", ";\n  height: 10px;\n  position: absolute;\n  top: 18px;\n"], ["\n  background-color: ", ";\n  filter: ", ";\n  height: 10px;\n  position: absolute;\n  top: 18px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
}, function (_a) {
    var disabled = _a.disabled;
    return (disabled ? "grayscale(100%)" : "none");
});
var templateObject_1$q, templateObject_2$d, templateObject_3$8, templateObject_4$6, templateObject_5$4, templateObject_6$3, templateObject_7$2;

var Slider = function (_a) {
    var name = _a.name, min = _a.min, max = _a.max, value = _a.value, onValueChanged = _a.onValueChanged, valueLabel = _a.valueLabel, _b = _a.step, step = _b === void 0 ? "any" : _b, _c = _a.disabled, disabled = _c === void 0 ? false : _c, props = __rest(_a, ["name", "min", "max", "value", "onValueChanged", "valueLabel", "step", "disabled"]);
    var handleChange = function (_a) {
        var target = _a.target;
        onValueChanged(parseFloat(target.value));
    };
    var progressPercentage = (value / max) * 100;
    var isMax = value === max;
    var progressWidth;
    if (progressPercentage <= 10) {
        progressWidth = progressPercentage + 0.5 + "%";
    }
    else if (progressPercentage >= 90) {
        progressWidth = progressPercentage - 4 + "%";
    }
    else if (progressPercentage >= 60) {
        progressWidth = progressPercentage - 2.5 + "%";
    }
    else {
        progressWidth = progressPercentage + "%";
    }
    var labelProgress = isMax ? "calc(100% - 12px)" : progressPercentage + "%";
    var displayValueLabel = isMax ? "MAX" : valueLabel;
    return (React.createElement(Box, __assign({ position: "relative", height: "48px" }, props),
        React.createElement(BunnyButt, { disabled: disabled }),
        React.createElement(BunnySlider, null,
            React.createElement(BarBackground, { disabled: disabled }),
            React.createElement(BarProgress, { style: { width: progressWidth }, disabled: disabled }),
            React.createElement(StyledInput, { name: name, type: "range", min: min, max: max, value: value, step: step, onChange: handleChange, isMax: isMax, disabled: disabled })),
        valueLabel && (React.createElement(SliderLabelContainer, null,
            React.createElement(SliderLabel, { progress: labelProgress }, displayValueLabel)))));
};

var animation = {
    WAVES: "waves",
    PULSE: "pulse",
};
var variant = {
    RECT: "rect",
    CIRCLE: "circle",
};

var waves = keyframes(templateObject_1$p || (templateObject_1$p = __makeTemplateObject(["\n   from {\n        left: -150px;\n    }\n    to   {\n        left: 100%;\n    }\n"], ["\n   from {\n        left: -150px;\n    }\n    to   {\n        left: 100%;\n    }\n"])));
var pulse = keyframes(templateObject_2$c || (templateObject_2$c = __makeTemplateObject(["\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n"], ["\n  0% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.4;\n  }\n  100% {\n    opacity: 1;\n  }\n"])));
var Root = styled.div(templateObject_3$7 || (templateObject_3$7 = __makeTemplateObject(["\n  min-height: 20px;\n  display: block;\n  background-color: ", ";\n  border-radius: ", ";\n\n  ", "\n  ", "\n"], ["\n  min-height: 20px;\n  display: block;\n  background-color: ", ";\n  border-radius: ", ";\n\n  ", "\n  ", "\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.backgroundDisabled;
}, function (_a) {
    var variant$1 = _a.variant, theme = _a.theme;
    return (variant$1 === variant.CIRCLE ? theme.radii.circle : theme.radii.small);
}, layout, space);
var Pulse = styled(Root)(templateObject_4$5 || (templateObject_4$5 = __makeTemplateObject(["\n  animation: ", " 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n"], ["\n  animation: ", " 2s infinite ease-out;\n  transform: translate3d(0, 0, 0);\n"])), pulse);
var Waves = styled(Root)(templateObject_5$3 || (templateObject_5$3 = __makeTemplateObject(["\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  &:before {\n    content: \"\";\n    position: absolute;\n    background-image: linear-gradient(90deg, transparent, rgba(243, 243, 243, 0.5), transparent);\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ", " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n"], ["\n  position: relative;\n  overflow: hidden;\n  transform: translate3d(0, 0, 0);\n  &:before {\n    content: \"\";\n    position: absolute;\n    background-image: linear-gradient(90deg, transparent, rgba(243, 243, 243, 0.5), transparent);\n    top: 0;\n    left: -150px;\n    height: 100%;\n    width: 150px;\n    animation: ", " 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;\n  }\n"])), waves);
var Skeleton = function (_a) {
    var _b = _a.variant, variant$1 = _b === void 0 ? variant.RECT : _b, _c = _a.animation, animation$1 = _c === void 0 ? animation.PULSE : _c, props = __rest(_a, ["variant", "animation"]);
    if (animation$1 === animation.WAVES) {
        return React.createElement(Waves, __assign({ variant: variant$1 }, props));
    }
    return React.createElement(Pulse, __assign({ variant: variant$1 }, props));
};
var templateObject_1$p, templateObject_2$c, templateObject_3$7, templateObject_4$5, templateObject_5$3;

var Icon$z = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 256 256" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M166.898 204.279C172.402 190.795 170.197 176.127 166.942 163.633C164.747 155.208 156.522 149.043 143.339 146.339C130.289 143.662 113.23 144.62 95.212 149.658C77.1941 154.696 61.9863 162.761 52.0088 171.877C41.9295 181.085 37.8164 190.7 40.0117 199.126C43.2669 211.619 48.4857 225.444 59.7919 234.228C70.9463 242.894 88.7701 247.193 118.461 238.891C148.152 230.589 161.467 217.582 166.898 204.279ZM119.268 241.986C179.746 225.075 176.514 188.072 169.929 162.798C164.622 142.43 131.106 136.301 94.4056 146.563C57.7053 156.825 31.7183 179.593 37.0251 199.961C43.6102 225.235 58.7891 258.897 119.268 241.986Z", fill: "#464649" }),
        React.createElement("path", { d: "M155.801 175.68C158.653 186.628 180.351 181.576 214.977 171.894C249.604 162.212 257.158 150.578 254.305 139.63C251.453 128.682 244.685 121.053 216.678 128.884C182.051 138.566 152.948 164.732 155.801 175.68Z", fill: "#606063" }),
        React.createElement("path", { d: "M159.97 178.737L175.437 178.709C178.284 178.704 178.523 174.429 177.474 164.815C176.82 158.816 173.457 154.101 171.27 155.477L159.942 163.875L159.97 178.737Z", fill: "#464649" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M162.261 177.996C160.059 177.319 159.158 176.266 158.788 174.845C158.644 174.296 158.636 173.375 159.104 171.965C159.566 170.568 160.432 168.889 161.754 166.98C164.397 163.161 168.612 158.775 174.091 154.332C185.037 145.456 200.6 136.7 217.484 131.979C231.34 128.104 239.201 128.297 243.777 130.191C248.018 131.946 250.005 135.425 251.319 140.465C251.901 142.7 251.928 144.848 251.283 146.962C250.634 149.091 249.235 151.411 246.622 153.858C241.312 158.83 231.342 163.998 214.171 168.799C196.798 173.657 182.967 177.263 173.149 178.336C168.216 178.875 164.644 178.728 162.261 177.996ZM214.977 171.894C180.351 181.576 158.653 186.628 155.801 175.68C152.948 164.732 182.051 138.566 216.678 128.884C244.685 121.053 251.453 128.682 254.305 139.63C257.158 150.578 249.604 162.212 214.977 171.894Z", fill: "#464649" }),
        React.createElement("path", { d: "M169.925 161.024C176.511 186.298 179.743 223.301 119.264 240.212C58.7859 257.123 43.607 223.461 37.022 198.187C31.7151 177.819 57.7022 155.052 94.4024 144.789C131.103 134.527 164.619 140.656 169.925 161.024Z", fill: "#606063" }),
        React.createElement("path", { d: "M62.2322 217.512C45.5076 212.12 42.4613 203.795 40.3848 196.052L41.9594 211.275L50.2352 225.685L64.4374 238.481L80.947 244.327C82.4065 243.612 89.4986 243.299 83.1029 242.028C76.7073 240.758 72.7474 234.756 69.9914 231.378C68.2638 226.484 67.7365 219.287 62.2322 217.512Z", fill: "#464649" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M166.895 202.505C172.399 189.021 170.194 174.353 166.939 161.86C164.744 153.434 156.519 147.269 143.336 144.565C130.286 141.888 113.227 142.846 95.2088 147.884C77.1909 152.922 61.9831 160.987 52.0056 170.103C41.9263 179.311 37.8132 188.926 40.0086 197.352C43.2637 209.845 48.4825 223.67 59.7887 232.454C70.9431 241.12 88.7669 245.419 118.458 237.117C148.149 228.815 161.464 215.809 166.895 202.505ZM119.264 240.212C179.743 223.301 176.511 186.298 169.925 161.024C164.619 140.656 131.103 134.527 94.4024 144.789C57.7022 155.052 31.7151 177.819 37.022 198.187C43.607 223.461 58.7859 257.123 119.264 240.212Z", fill: "#464649" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M164.233 181.686C165.018 182.322 165.157 183.497 164.543 184.311C162.98 186.382 161.187 188.422 159.188 190.412C158.469 191.128 157.327 191.104 156.636 190.36C155.945 189.615 155.968 188.431 156.687 187.716C158.576 185.834 160.252 183.925 161.7 182.007C162.314 181.193 163.448 181.05 164.233 181.686ZM57.4215 216.239C57.6566 215.235 58.6323 214.619 59.6008 214.863C73.2899 218.308 91.7045 217.793 111.035 212.388C120.262 209.808 128.779 206.37 136.271 202.374C137.157 201.901 138.245 202.263 138.701 203.181C139.157 204.099 138.809 205.226 137.923 205.699C130.195 209.821 121.438 213.352 111.976 215.998C92.2044 221.527 73.1589 222.124 58.7494 218.497C57.7809 218.253 57.1863 217.242 57.4215 216.239Z", fill: "#979797" }),
        React.createElement("path", { d: "M159.836 163.292C164.405 180.829 141.059 195.381 109.857 204.106C78.655 212.831 51.4793 212.682 46.8428 194.887C42.2064 177.092 65.6193 162.798 96.8214 154.074C128.024 145.349 155.266 145.755 159.836 163.292Z", fill: "#464649" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M145.831 183.549C154.508 176.998 157.462 170.578 155.854 164.406C154.245 158.233 148.575 154.225 137.894 153.086C127.333 151.96 113.281 153.898 97.8965 158.2C82.4985 162.506 69.3986 168.094 60.8132 174.54C52.1526 181.043 49.1801 187.461 50.825 193.774C52.4698 200.087 58.1557 204.083 68.7987 205.189C79.3491 206.285 93.384 204.285 108.782 199.98C124.166 195.678 137.251 190.028 145.831 183.549ZM110.264 205.113C141.466 196.388 164.405 180.829 159.836 163.292C155.266 145.755 128.024 145.349 96.8214 154.074C65.6193 162.798 42.2064 177.092 46.8428 194.887C51.4793 212.682 79.0614 213.838 110.264 205.113Z", fill: "#737373" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M103.877 181.153C89.0555 185.297 76.4977 192.072 68.1169 199.619C67.3647 200.297 66.2249 200.214 65.5711 199.434C64.9173 198.655 64.997 197.474 65.7492 196.796C74.622 188.806 87.7006 181.803 102.936 177.543C106.034 176.676 109.107 175.955 112.134 175.375C113.114 175.187 114.056 175.858 114.237 176.873C114.419 177.889 113.771 178.864 112.792 179.052C109.86 179.614 106.881 180.313 103.877 181.153ZM123.847 175.658C123.792 174.627 124.554 173.745 125.549 173.688C132.378 173.297 138.774 173.682 144.424 174.797C145.403 174.991 146.046 175.97 145.86 176.984C145.673 177.999 144.728 178.664 143.749 178.471C138.431 177.421 132.333 177.045 125.749 177.422C124.753 177.479 123.902 176.69 123.847 175.658Z", fill: "#606063" })));
};

var Icon$y = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 128 128" }, props),
        React.createElement("svg", { width: "128", height: "128", viewBox: "0 0 128 128", fill: "none", xmlns: "http://www.w3.org/2000/svg" },
            React.createElement("path", { d: "M56.7204 37.5858C56.7204 45.3822 58.0271 54.1169 60.2906 60.8591C61.4246 64.2369 62.7705 67.0285 64.249 68.946C65.742 70.8826 67.1906 71.7103 68.5307 71.7103C71.1919 71.7103 74.4165 70.5307 77.8384 68.3524C81.235 66.1902 84.7001 63.1234 87.8127 59.5481C94.0844 52.3439 98.6784 43.3694 98.6784 35.942C98.6784 28.1653 97.1567 21.2636 93.9931 16.3543C90.8793 11.5222 86.1363 8.54284 79.3564 8.54284C72.6009 8.54284 66.9825 11.9157 63.0072 17.2564C59.0174 22.6164 56.7204 29.9263 56.7204 37.5858Z", fill: "#FEDC90", stroke: "#D1884F", strokeWidth: "2.89134" }),
            React.createElement("path", { d: "M32.7442 66.7859C39.4364 62.9222 47.2575 60.5211 53.8454 59.9252C57.1411 59.6272 60.0564 59.7876 62.336 60.3933C64.6294 61.0028 66.1079 62.0118 66.8368 63.2742C69.6116 68.0804 69.9429 76.4856 67.7501 84.8501C65.5656 93.1829 61.0085 100.957 54.6069 104.653C47.9434 108.5 40.9505 110.185 34.8292 109.454C28.7533 108.729 23.476 105.626 20.0729 99.7316C16.6658 93.8305 16.5364 87.5528 18.8757 81.7754C21.228 75.9659 26.1018 70.6209 32.7442 66.7859Z", fill: "#D1884F", stroke: "#633001", strokeWidth: "2.89134" }),
            React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M73.6122 7.76013C69.4145 8.86483 64.8207 11.0867 61.24 16.1556C53.2804 27.4231 51.7006 41.9592 58.5495 60.7386C65.3984 79.518 63.3431 89.9236 56.0487 98.3189C48.7543 106.714 29.475 108.685 23.3482 101.929C21.8481 100.274 17.4954 97.4588 20.3675 102.54C23.2397 107.622 30.7527 111.748 39.59 111.748C48.4273 111.748 55.5943 108.146 61.958 101.338C68.3217 94.5306 74.292 78.3883 68.3268 61.7709C60.6331 40.3385 62.8311 27.508 68.2893 19.7815C71.0879 15.8198 75.5453 12.3629 78.6077 10.5868C81.8233 8.72183 84.8797 8.42294 86.8682 8.42294C83.3332 6.65548 77.8099 6.65542 73.6122 7.76013Z", fill: "#633001" }))));
};

var Icon$x = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 128 128" }, props),
        React.createElement("svg", { version: "1.1", id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", x: "0px", y: "0px", width: "122.315px", height: "122.88px", viewBox: "0 0 122.315 122.88", enableBackground: "new 0 0 122.315 122.88", xmlSpace: "preserve" },
            React.createElement("g", null,
                React.createElement("path", { fill: "#f7ad19", fillRule: "evenodd", clipRule: "evenodd", d: "M94.754,14.534c8.844,0,16.014,7.17,16.014,16.012 c0,8.844-7.17,16.015-16.014,16.015c-8.843,0-16.013-7.17-16.013-16.015C78.741,21.704,85.911,14.534,94.754,14.534L94.754,14.534z M109.265,52.121c-7.205,0-13.049,5.844-13.049,13.048c0,7.207,5.844,13.049,13.049,13.051c7.207,0,13.051-5.844,13.051-13.051 C122.315,57.965,116.472,52.121,109.265,52.121L109.265,52.121z M94.135,89.903c-5.032,0-9.114,4.082-9.114,9.113 c0,5.032,4.082,9.114,9.114,9.114c5.031,0,9.113-4.082,9.113-9.114C103.248,93.985,99.166,89.903,94.135,89.903L94.135,89.903z M59.275,104.65c-5.032,0-9.114,4.081-9.114,9.113c0,5.034,4.082,9.116,9.114,9.116s9.113-4.082,9.113-9.116 C68.389,108.731,64.308,104.65,59.275,104.65L59.275,104.65z M23.652,90.86c-4.717,0-8.54,3.823-8.54,8.54 c0,4.715,3.823,8.54,8.54,8.54c4.714,0,8.538-3.825,8.538-8.54C32.19,94.684,28.366,90.86,23.652,90.86L23.652,90.86z M9.096,54.872C4.072,54.872,0,58.944,0,63.968c0,5.021,4.072,9.093,9.096,9.093c5.021,0,9.093-4.072,9.093-9.093 C18.189,58.944,14.116,54.872,9.096,54.872L9.096,54.872z M23.652,17.026c-6.354,0-11.508,5.155-11.508,11.509 s5.154,11.506,11.508,11.506s11.506-5.152,11.506-11.506S30.006,17.026,23.652,17.026L23.652,17.026z M59.341,0 c-7.651,0-13.858,6.205-13.858,13.855c0,7.651,6.207,13.856,13.858,13.856s13.856-6.205,13.856-13.856 C73.197,6.205,66.992,0,59.341,0L59.341,0z" })))));
};

var rotate = keyframes(templateObject_1$o || (templateObject_1$o = __makeTemplateObject(["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"], ["\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n"])));
var float = keyframes(templateObject_2$b || (templateObject_2$b = __makeTemplateObject(["\n\t0% {\n\t\ttransform: translatey(0px);\n\t}\n\t50% {\n\t\ttransform: translatey(10px);\n\t}\n\t100% {\n\t\ttransform: translatey(0px);\n\t}\n"], ["\n\t0% {\n\t\ttransform: translatey(0px);\n\t}\n\t50% {\n\t\ttransform: translatey(10px);\n\t}\n\t100% {\n\t\ttransform: translatey(0px);\n\t}\n"])));
var Container$3 = styled.div(templateObject_3$6 || (templateObject_3$6 = __makeTemplateObject(["\n  position: relative;\n"], ["\n  position: relative;\n"])));
styled(Icon$y)(templateObject_4$4 || (templateObject_4$4 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  animation: ", " 2s linear infinite;\n  transform: translate3d(0, 0, 0);\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  animation: ", " 2s linear infinite;\n  transform: translate3d(0, 0, 0);\n"])), rotate);
var SpinningDots = styled(Icon$x)(templateObject_5$2 || (templateObject_5$2 = __makeTemplateObject(["\n  position: absolute;\n  top: 0;\n  left: 0;\n  animation: ", " 2s linear infinite;\n  transform: translate3d(0, 0, 0);\n"], ["\n  position: absolute;\n  top: 0;\n  left: 0;\n  animation: ", " 2s linear infinite;\n  transform: translate3d(0, 0, 0);\n"])), rotate);
styled(Icon$z)(templateObject_6$2 || (templateObject_6$2 = __makeTemplateObject(["\n  animation: ", " 6s ease-in-out infinite;\n  transform: translate3d(0, 0, 0);\n"], ["\n  animation: ", " 6s ease-in-out infinite;\n  transform: translate3d(0, 0, 0);\n"])), float);
var Spinner = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 128 : _b;
    return (React.createElement(Container$3, null,
        React.createElement(SpinningDots, { width: size * 0.5 + "px" })));
};
var templateObject_1$o, templateObject_2$b, templateObject_3$6, templateObject_4$4, templateObject_5$2, templateObject_6$2;

var StepperWrapper = styled.div(templateObject_1$n || (templateObject_1$n = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  width: fit-content;\n"], ["\n  display: flex;\n  flex-direction: column;\n  width: fit-content;\n"])));
var Stepper = function (_a) {
    var children = _a.children;
    var numberOfSteps = React.Children.count(children);
    return (React.createElement(StepperWrapper, null, React.Children.map(children, function (child) {
        if (React.isValidElement(child)) {
            return React.cloneElement(child, { numberOfSteps: numberOfSteps });
        }
        return child;
    })));
};
var templateObject_1$n;

var getStepNumberFontColor = function (_a) {
    var theme = _a.theme, status = _a.status;
    if (status === "past") {
        return theme.colors.success;
    }
    if (status === "current") {
        return theme.colors.invertedContrast;
    }
    return theme.colors.textDisabled;
};
var StyledStep = styled(Flex)(templateObject_1$m || (templateObject_1$m = __makeTemplateObject(["\n  ", " {\n    justify-content: center;\n  }\n"], ["\n  ", " {\n    justify-content: center;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var Connector = styled.div(templateObject_2$a || (templateObject_2$a = __makeTemplateObject(["\n  position: absolute;\n  width: 4px;\n  height: 100%;\n  top: 50%;\n  left: calc(50% - 2px);\n  background-color: ", ";\n"], ["\n  position: absolute;\n  width: 4px;\n  height: 100%;\n  top: 50%;\n  left: calc(50% - 2px);\n  background-color: ", ";\n"])), function (_a) {
    var theme = _a.theme, status = _a.status;
    return theme.colors[status === "past" ? "success" : "textDisabled"];
});
var ChildrenWrapper = styled(Box)(templateObject_3$5 || (templateObject_3$5 = __makeTemplateObject(["\n  ", " {\n    visibility: ", ";\n  }\n"], ["\n  ", " {\n    visibility: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
}, function (_a) {
    var isVisible = _a.isVisible;
    return (isVisible ? "visible" : "hidden");
});
var ChildrenLeftWrapper = styled(ChildrenWrapper)(templateObject_4$3 || (templateObject_4$3 = __makeTemplateObject(["\n  display: none;\n  ", " {\n    display: block;\n    margin-right: 16px;\n  }\n"], ["\n  display: none;\n  ", " {\n    display: block;\n    margin-right: 16px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var ChildrenRightWrapper = styled(ChildrenWrapper)(templateObject_5$1 || (templateObject_5$1 = __makeTemplateObject(["\n  margin-left: 8px;\n  ", " {\n    margin-left: 16px;\n  }\n"], ["\n  margin-left: 8px;\n  ", " {\n    margin-left: 16px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var Wrapper$2 = styled.div(templateObject_6$1 || (templateObject_6$1 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  align-items: center;\n"], ["\n  position: relative;\n  display: flex;\n  align-items: center;\n"])));
var StepNumber = styled.div(templateObject_7$1 || (templateObject_7$1 = __makeTemplateObject(["\n  box-shadow: 0px 1px 4px rgba(25, 19, 38, 0.15);\n  background-color: ", ";\n  border: 2px solid ", ";\n  border-radius: ", ";\n  color: ", ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 600;\n  font-size: 32px;\n  width: 48px;\n  height: 48px;\n  z-index: 1;\n  ", " {\n    font-size: 40px;\n    width: 80px;\n    height: 80px;\n  }\n"], ["\n  box-shadow: 0px 1px 4px rgba(25, 19, 38, 0.15);\n  background-color: ", ";\n  border: 2px solid ", ";\n  border-radius: ", ";\n  color: ", ";\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-weight: 600;\n  font-size: 32px;\n  width: 48px;\n  height: 48px;\n  z-index: 1;\n  ", " {\n    font-size: 40px;\n    width: 80px;\n    height: 80px;\n  }\n"])), function (_a) {
    var theme = _a.theme, status = _a.status;
    return theme.colors[status === "current" ? "secondary" : "invertedContrast"];
}, function (_a) {
    var theme = _a.theme, status = _a.status;
    return (status === "past" ? theme.colors.success : "transparent");
}, function (_a) {
    var theme = _a.theme;
    return theme.radii.circle;
}, getStepNumberFontColor, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
/**
 * ChildrenLeftWrapper and ChildrenRightWrapper are used on the non mobile version, to force the alternate layout.
 * One of the child is hidden based on the step number.
 */
var Step = function (_a) {
    var index = _a.index, status = _a.status, _b = _a.numberOfSteps, numberOfSteps = _b === void 0 ? 0 : _b, children = _a.children;
    var isIndexPair = index % 2 === 0;
    return (React.createElement(StyledStep, { mb: index < numberOfSteps - 1 ? "16px" : 0 },
        React.createElement(ChildrenLeftWrapper, { isVisible: !isIndexPair }, children),
        React.createElement(Wrapper$2, null,
            React.createElement(StepNumber, { status: status }, index + 1),
            index < numberOfSteps - 1 && React.createElement(Connector, { status: status })),
        React.createElement(ChildrenRightWrapper, { isVisible: isIndexPair }, children)));
};
var templateObject_1$m, templateObject_2$a, templateObject_3$5, templateObject_4$3, templateObject_5$1, templateObject_6$1, templateObject_7$1;

var byTextAscending = function (getTextProperty) {
    return function (objectA, objectB) {
        var upperA = getTextProperty(objectA).toUpperCase();
        var upperB = getTextProperty(objectB).toUpperCase();
        if (upperA < upperB) {
            return -1;
        }
        if (upperA > upperB) {
            return 1;
        }
        return 0;
    };
};
var byTextDescending = function (getTextProperty) {
    return function (objectA, objectB) {
        var upperA = getTextProperty(objectA).toUpperCase();
        var upperB = getTextProperty(objectB).toUpperCase();
        if (upperA > upperB) {
            return -1;
        }
        if (upperA < upperB) {
            return 1;
        }
        return 0;
    };
};

var sortByColumn = function (data, sortColumn, columns) {
    var isAscending = null;
    var sortedRows = __spreadArray([], data);
    columns.forEach(function (column) {
        // if the row was found
        if (sortColumn === column.name) {
            isAscending = column.sorted.asc;
            if (column.sort) {
                sortedRows = isAscending ? data.sort(column.sort) : data.sort(column.sort).reverse();
                // default to sort by string
            }
            else {
                sortedRows = isAscending
                    ? data.sort(byTextAscending(function (object) { return object.original[sortColumn]; }))
                    : data.sort(byTextDescending(function (object) { return object.original[sortColumn]; }));
            }
        }
    });
    return sortedRows;
};
var getPaginatedData = function (rows, perPage, page) {
    var start = (page - 1) * perPage;
    var end = start + perPage;
    return rows.slice(start, end);
};
var getColumnsByName = function (columns) {
    var columnsByName = {};
    columns.forEach(function (column) {
        var col = {
            name: column.name,
            label: column.label,
        };
        if (column.render) {
            col.render = column.render;
        }
        col.hidden = column.hidden;
        columnsByName[column.name] = col;
    });
    return columnsByName;
};
var createReducer = function () {
    return function (state, action) {
        var rows = [];
        var nextPage = 0;
        var prevPage = 0;
        var isAscending = null;
        var sortedRows = [];
        var columnCopy = [];
        var filteredRows = [];
        var selectedRowsById = {};
        var stateCopy = __assign({}, state);
        var rowIds = {};
        switch (action.type) {
            case "SET_ROWS":
                rows = __spreadArray([], action.data);
                // preserve sorting if a sort is already enabled when data changes
                if (state.sortColumn) {
                    rows = sortByColumn(action.data, state.sortColumn, state.columns);
                }
                if (state.paginationEnabled === true) {
                    rows = getPaginatedData(rows, state.pagination.perPage, state.pagination.page);
                }
                if (state.paginationEnabled === true) {
                    rows = getPaginatedData(rows, state.pagination.perPage, state.pagination.page);
                }
                columnCopy = state.columns.map(function (column) {
                    if (state.sortColumn === column.name) {
                        return __assign(__assign({}, column), { sorted: {
                                on: true,
                                asc: column.sorted.asc,
                            } });
                    }
                    return column;
                });
                return __assign(__assign({}, state), { rows: rows, originalRows: action.data, columns: columnCopy });
            case "NEXT_PAGE":
                nextPage = state.pagination.page + 1;
                return __assign(__assign({}, state), { rows: getPaginatedData(state.originalRows, state.pagination.perPage, nextPage), pagination: __assign(__assign({}, state.pagination), { page: nextPage, canNext: nextPage * state.pagination.perPage < state.originalRows.length, canPrev: nextPage !== 1 }) });
            case "PREV_PAGE":
                prevPage = state.pagination.page === 1 ? 1 : state.pagination.page - 1;
                return __assign(__assign({}, state), { rows: getPaginatedData(state.originalRows, state.pagination.perPage, prevPage), pagination: __assign(__assign({}, state.pagination), { page: prevPage, canNext: prevPage * state.pagination.perPage < state.originalRows.length, canPrev: prevPage !== 1 }) });
            case "TOGGLE_SORT":
                if (!(action.columnName in state.columnsByName)) {
                    throw new Error("Invalid column, " + action.columnName + " not found");
                }
                // loop through all columns and set the sort parameter to off unless
                // it's the specified column (only one column at a time for )
                columnCopy = state.columns.map(function (column) {
                    // if the row was found
                    if (action.columnName === column.name) {
                        if (action.isAscOverride !== undefined) {
                            // force the sort order
                            isAscending = action.isAscOverride;
                        }
                        else {
                            // if it's undefined, start by setting to ascending, otherwise toggle
                            isAscending = column.sorted.asc === undefined ? true : !column.sorted.asc;
                        }
                        if (column.sort) {
                            sortedRows = isAscending ? state.rows.sort(column.sort) : state.rows.sort(column.sort).reverse();
                            // default to sort by string
                        }
                        else {
                            sortedRows = isAscending
                                ? state.rows.sort(byTextAscending(function (object) { return object.original[action.columnName]; }))
                                : state.rows.sort(byTextDescending(function (object) { return object.original[action.columnName]; }));
                        }
                        return __assign(__assign({}, column), { sorted: {
                                on: true,
                                asc: isAscending,
                            } });
                    }
                    // set sorting to false for all other columns
                    return __assign(__assign({}, column), { sorted: {
                            on: false,
                            asc: false,
                        } });
                });
                return __assign(__assign({}, state), { columns: columnCopy, rows: sortedRows, sortColumn: action.columnName, columnsByName: getColumnsByName(columnCopy) });
            case "GLOBAL_FILTER":
                filteredRows = action.filter(state.originalRows);
                selectedRowsById = {};
                state.selectedRows.forEach(function (row) {
                    var _a;
                    selectedRowsById[row.id] = (_a = row.selected) !== null && _a !== void 0 ? _a : false;
                });
                return __assign(__assign({}, state), { rows: filteredRows.map(function (row) {
                        return selectedRowsById[row.id] ? __assign(__assign({}, row), { selected: selectedRowsById[row.id] }) : __assign({}, row);
                    }), filterOn: true });
            case "SELECT_ROW":
                stateCopy = __assign({}, state);
                stateCopy.rows = stateCopy.rows.map(function (row) {
                    var newRow = __assign({}, row);
                    if (newRow.id === action.rowId) {
                        newRow.selected = !newRow.selected;
                    }
                    return newRow;
                });
                stateCopy.originalRows = stateCopy.originalRows.map(function (row) {
                    var newRow = __assign({}, row);
                    if (newRow.id === action.rowId) {
                        newRow.selected = !newRow.selected;
                    }
                    return newRow;
                });
                stateCopy.selectedRows = stateCopy.originalRows.filter(function (row) { return row.selected === true; });
                stateCopy.toggleAllState =
                    stateCopy.selectedRows.length === stateCopy.rows.length
                        ? (stateCopy.toggleAllState = true)
                        : (stateCopy.toggleAllState = false);
                return stateCopy;
            case "SEARCH_STRING":
                stateCopy = __assign({}, state);
                stateCopy.rows = stateCopy.originalRows.filter(function (row) {
                    return (row.cells.filter(function (cell) {
                        if (cell.value.includes(action.searchString)) {
                            return true;
                        }
                        return false;
                    }).length > 0);
                });
                return stateCopy;
            case "TOGGLE_ALL":
                if (state.selectedRows.length < state.rows.length) {
                    stateCopy.rows = stateCopy.rows.map(function (row) {
                        rowIds[row.id] = true;
                        return __assign(__assign({}, row), { selected: true });
                    });
                    stateCopy.toggleAllState = true;
                }
                else {
                    stateCopy.rows = stateCopy.rows.map(function (row) {
                        rowIds[row.id] = false;
                        return __assign(__assign({}, row), { selected: false });
                    });
                    stateCopy.toggleAllState = false;
                }
                stateCopy.originalRows = stateCopy.originalRows.map(function (row) {
                    return row.id in rowIds ? __assign(__assign({}, row), { selected: rowIds[row.id] }) : __assign({}, row);
                });
                stateCopy.selectedRows = stateCopy.originalRows.filter(function (row) { return row.selected; });
                return stateCopy;
            default:
                throw new Error("Invalid reducer action");
        }
    };
};
var sortDataInOrder = function (data, columns) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    return data.map(function (row) {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        var newRow = {};
        columns.forEach(function (column) {
            if (!(column.name in row)) {
                throw new Error("Invalid row data, " + column.name + " not found");
            }
            newRow[column.name] = row[column.name];
        });
        return newRow;
    });
};
var makeRender = function (
// eslint-disable-next-line
value, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
render, row) {
    return render ? function () { return render({ row: row, value: value }); } : function () { return value; };
};
var makeHeaderRender = function (label, render) {
    return render ? function () { return render({ label: label }); } : function () { return label; };
};
var useTable = function (columns, data, options) {
    var columnsWithSorting = useMemo(function () {
        return columns.map(function (column) {
            return __assign(__assign({}, column), { label: column.label ? column.label : column.name, hidden: column.hidden ? column.hidden : false, sort: column.sort, sorted: {
                    on: false,
                    asc: false,
                } });
        });
    }, [columns]);
    var columnsByName = useMemo(function () { return getColumnsByName(columnsWithSorting); }, [columnsWithSorting]);
    var tableData = useMemo(function () {
        var sortedData = sortDataInOrder(data, columnsWithSorting);
        var newData = sortedData.map(function (row, idx) {
            return {
                id: idx,
                selected: false,
                hidden: false,
                original: row,
                cells: Object.entries(row)
                    .map(function (_a) {
                    var column = _a[0], value = _a[1];
                    return {
                        hidden: columnsByName[column].hidden,
                        field: column,
                        value: value,
                        render: makeRender(value, columnsByName[column].render, row),
                    };
                })
                    .filter(function (cell) { return !cell.hidden; }),
            };
        });
        return newData;
    }, [data, columnsWithSorting, columnsByName]);
    var reducer = createReducer();
    var _a = useReducer(reducer, {
        columns: columnsWithSorting,
        columnsByName: columnsByName,
        originalRows: tableData,
        rows: tableData,
        selectedRows: [],
        toggleAllState: false,
        filterOn: !!(options === null || options === void 0 ? void 0 : options.filter),
        sortColumn: options === null || options === void 0 ? void 0 : options.sortColumn,
        paginationEnabled: !!(options === null || options === void 0 ? void 0 : options.pagination),
        pagination: {
            page: 1,
            perPage: 10,
            canNext: true,
            canPrev: false,
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            nextPage: noop,
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            prevPage: noop,
        },
    }), state = _a[0], dispatch = _a[1];
    state.pagination.nextPage = useCallback(function () {
        dispatch({ type: "NEXT_PAGE" });
    }, [dispatch]);
    state.pagination.prevPage = useCallback(function () { return dispatch({ type: "PREV_PAGE" }); }, [dispatch]);
    useEffect(function () {
        dispatch({ type: "SET_ROWS", data: tableData });
    }, [tableData]);
    var headers = useMemo(function () {
        return __spreadArray([], state.columns.map(function (column) {
            var label = column.label ? column.label : column.name;
            return __assign(__assign({}, column), { render: makeHeaderRender(label, column.headerRender) });
        }));
    }, [state.columns]);
    useEffect(function () {
        if (options && options.filter) {
            dispatch({ type: "GLOBAL_FILTER", filter: options.filter });
        }
    });
    return {
        headers: headers.filter(function (column) { return !column.hidden; }),
        rows: state.rows,
        originalRows: state.originalRows,
        selectedRows: state.selectedRows,
        dispatch: dispatch,
        selectRow: function (rowId) { return dispatch({ type: "SELECT_ROW", rowId: rowId }); },
        toggleAll: function () { return dispatch({ type: "TOGGLE_ALL" }); },
        toggleSort: function (columnName, isAscOverride) {
            return dispatch({ type: "TOGGLE_SORT", columnName: columnName, isAscOverride: isAscOverride });
        },
        setSearchString: function (searchString) { return dispatch({ type: "SEARCH_STRING", searchString: searchString }); },
        pagination: state.pagination,
        toggleAllState: state.toggleAllState,
    };
};

var Wrapper$1 = styled(Flex)(templateObject_1$l || (templateObject_1$l = __makeTemplateObject(["\n  border-bottom: 2px solid ", ";\n  overflow-x: scroll;\n\n  ::-webkit-scrollbar {\n    display: none;\n  }\n  -ms-overflow-style: none; /* IE and Edge */\n  scrollbar-width: none; /* Firefox */\n"], ["\n  border-bottom: 2px solid ", ";\n  overflow-x: scroll;\n\n  ::-webkit-scrollbar {\n    display: none;\n  }\n  -ms-overflow-style: none; /* IE and Edge */\n  scrollbar-width: none; /* Firefox */\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
});
var Inner$1 = styled(Flex)(templateObject_2$9 || (templateObject_2$9 = __makeTemplateObject(["\n  justify-content: space-between;\n  flex-grow: 1;\n\n  & > button + button {\n    margin-left: 4px;\n  }\n\n  ", " {\n    flex-grow: 0;\n  }\n"], ["\n  justify-content: space-between;\n  flex-grow: 1;\n\n  & > button + button {\n    margin-left: 4px;\n  }\n\n  ", " {\n    flex-grow: 0;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var ButtonMenu = function (_a) {
    var _b = _a.activeIndex, activeIndex = _b === void 0 ? 0 : _b, onItemClick = _a.onItemClick, children = _a.children;
    return (React.createElement(Wrapper$1, { p: ["0 4px", "0 16px"] },
        React.createElement(Inner$1, null, Children.map(children, function (child, index) {
            var isActive = activeIndex === index;
            return cloneElement(child, {
                isActive: isActive,
                onClick: onItemClick ? function () { return onItemClick(index); } : undefined,
                color: isActive ? "backgroundAlt" : "textSubtle",
                backgroundColor: isActive ? "textSubtle" : "input",
            });
        }))));
};
var templateObject_1$l, templateObject_2$9;

var getBorderRadius = function (_a) {
    var scale = _a.scale;
    return (scale === "md" ? "16px 16px 0 0" : "24px 24px 0 0");
};
var getPadding = function (_a) {
    var scale = _a.scale;
    return (scale === "md" ? "8px" : "16px");
};
var Tab = styled.button(templateObject_1$k || (templateObject_1$k = __makeTemplateObject(["\n  display: inline-flex;\n  justify-content: center;\n  cursor: pointer;\n  border: 0;\n  outline: 0;\n  flex-grow: 1;\n  padding: ", ";\n  border-radius: ", ";\n  font-size: 16px;\n  font-weight: 600;\n\n  ", " {\n    flex-grow: 0;\n  }\n\n  ", "\n"], ["\n  display: inline-flex;\n  justify-content: center;\n  cursor: pointer;\n  border: 0;\n  outline: 0;\n  flex-grow: 1;\n  padding: ", ";\n  border-radius: ", ";\n  font-size: 16px;\n  font-weight: 600;\n\n  ", " {\n    flex-grow: 0;\n  }\n\n  ", "\n"])), getPadding, getBorderRadius, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
}, color);
Tab.defaultProps = {
    scale: "md",
};
var templateObject_1$k;

var variants = {
    PRIMARY: "primary",
    SECONDARY: "secondary",
    SUCCESS: "success",
    TEXTDISABLED: "textDisabled",
    TEXTSUBTLE: "textSubtle",
    BINANCE: "binance",
    FAILURE: "failure",
    WARNING: "warning",
};
var scales$1 = {
    MD: "md",
    SM: "sm",
};

var _a$1, _b;
var scaleVariants = (_a$1 = {},
    _a$1[scales$1.MD] = {
        height: "28px",
        padding: "0 8px",
        fontSize: "14px",
    },
    _a$1[scales$1.SM] = {
        height: "24px",
        padding: "0 4px",
        fontSize: "12px",
    },
    _a$1);
var styleVariants = (_b = {},
    _b[variants.PRIMARY] = {
        backgroundColor: "primary",
    },
    _b[variants.SECONDARY] = {
        backgroundColor: "secondary",
    },
    _b[variants.SUCCESS] = {
        backgroundColor: "success",
    },
    _b[variants.TEXTDISABLED] = {
        backgroundColor: "textDisabled",
    },
    _b[variants.TEXTSUBTLE] = {
        backgroundColor: "textSubtle",
    },
    _b[variants.BINANCE] = {
        backgroundColor: "binance",
    },
    _b[variants.FAILURE] = {
        backgroundColor: "failure",
    },
    _b[variants.WARNING] = {
        backgroundColor: "warning",
    },
    _b);

var getOutlineStyles = function (_a) {
    var outline = _a.outline, theme = _a.theme, _b = _a.variant, variantKey = _b === void 0 ? variants.PRIMARY : _b;
    if (outline) {
        var themeColorKey = styleVariants[variantKey].backgroundColor;
        var color = theme.colors[themeColorKey];
        return "\n      color: " + color + ";\n      background: transparent;\n      border: 2px solid " + color + ";\n    ";
    }
    return "";
};
var StyledTag = styled.div(templateObject_1$j || (templateObject_1$j = __makeTemplateObject(["\n  align-items: center;\n  border-radius: 16px;\n  color: #ffffff;\n  display: inline-flex;\n  font-weight: 400;\n  white-space: nowrap;\n\n  & > svg {\n    fill: currentColor;\n  }\n\n  ", "\n  ", "\n  ", "\n\n  ", "\n"], ["\n  align-items: center;\n  border-radius: 16px;\n  color: #ffffff;\n  display: inline-flex;\n  font-weight: 400;\n  white-space: nowrap;\n\n  & > svg {\n    fill: currentColor;\n  }\n\n  ",
    "\n  ",
    "\n  ", "\n\n  ", "\n"])), variant$1({
    prop: "scale",
    variants: scaleVariants,
}), variant$1({
    variants: styleVariants,
}), space, getOutlineStyles);
var templateObject_1$j;

var Tag = function (_a) {
    var startIcon = _a.startIcon, endIcon = _a.endIcon, children = _a.children, props = __rest(_a, ["startIcon", "endIcon", "children"]);
    return (React.createElement(StyledTag, __assign({}, props),
        React.isValidElement(startIcon) &&
            React.cloneElement(startIcon, {
                mr: "0.5em",
            }),
        children,
        React.isValidElement(endIcon) &&
            React.cloneElement(endIcon, {
                ml: "0.5em",
            })));
};
Tag.defaultProps = {
    variant: "primary",
    scale: scales$1.MD,
    outline: false,
};

var scaleKeyValues = {
    sm: {
        handleHeight: "16px",
        handleWidth: "16px",
        handleLeft: "2px",
        handleTop: "2px",
        checkedLeft: "calc(100% - 18px)",
        toggleHeight: "20px",
        toggleWidth: "36px",
    },
    md: {
        handleHeight: "32px",
        handleWidth: "32px",
        handleLeft: "4px",
        handleTop: "4px",
        checkedLeft: "calc(100% - 36px)",
        toggleHeight: "40px",
        toggleWidth: "72px",
    },
};
var getScale = function (property) {
    return function (_a) {
        var _b = _a.scale, scale = _b === void 0 ? scales$6.MD : _b;
        return scaleKeyValues[scale][property];
    };
};
var Handle = styled.div(templateObject_1$i || (templateObject_1$i = __makeTemplateObject(["\n  background-color: ", ";\n  border-radius: 50%;\n  cursor: pointer;\n  height: ", ";\n  left: ", ";\n  position: absolute;\n  top: ", ";\n  transition: left 200ms ease-in;\n  width: ", ";\n  z-index: 1;\n"], ["\n  background-color: ", ";\n  border-radius: 50%;\n  cursor: pointer;\n  height: ", ";\n  left: ", ";\n  position: absolute;\n  top: ", ";\n  transition: left 200ms ease-in;\n  width: ", ";\n  z-index: 1;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.toggle.handleBackground;
}, getScale("handleHeight"), getScale("handleLeft"), getScale("handleTop"), getScale("handleWidth"));
var Input = styled.input(templateObject_2$8 || (templateObject_2$8 = __makeTemplateObject(["\n  cursor: pointer;\n  opacity: 0;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: 3;\n\n  &:checked + ", " {\n    left: ", ";\n  }\n\n  &:focus + ", " {\n    box-shadow: ", ";\n  }\n\n  &:hover + ", ":not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n"], ["\n  cursor: pointer;\n  opacity: 0;\n  height: 100%;\n  position: absolute;\n  width: 100%;\n  z-index: 3;\n\n  &:checked + ", " {\n    left: ", ";\n  }\n\n  &:focus + ", " {\n    box-shadow: ", ";\n  }\n\n  &:hover + ", ":not(:disabled):not(:checked) {\n    box-shadow: ", ";\n  }\n"])), Handle, getScale("checkedLeft"), Handle, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
}, Handle, function (_a) {
    var theme = _a.theme;
    return theme.shadows.focus;
});
var StyledToggle = styled.div(templateObject_3$4 || (templateObject_3$4 = __makeTemplateObject(["\n  align-items: center;\n  background-color: ", ";\n  border-radius: 24px;\n  box-shadow: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  height: ", ";\n  position: relative;\n  transition: background-color 200ms;\n  width: ", ";\n"], ["\n  align-items: center;\n  background-color: ", ";\n  border-radius: 24px;\n  box-shadow: ", ";\n  cursor: pointer;\n  display: inline-flex;\n  height: ", ";\n  position: relative;\n  transition: background-color 200ms;\n  width: ", ";\n"])), function (_a) {
    var theme = _a.theme, checked = _a.checked;
    return theme.colors[checked ? "success" : "input"];
}, function (_a) {
    var theme = _a.theme;
    return theme.shadows.inset;
}, getScale("toggleHeight"), getScale("toggleWidth"));
var templateObject_1$i, templateObject_2$8, templateObject_3$4;

var scales = {
    SM: "sm",
    MD: "md",
};

var Toggle = function (_a) {
    var checked = _a.checked, _b = _a.scale, scale = _b === void 0 ? scales.MD : _b, props = __rest(_a, ["checked", "scale"]);
    var isChecked = !!checked;
    return (React.createElement(StyledToggle, { checked: isChecked, scale: scale },
        React.createElement(Input, __assign({ checked: checked, scale: scale }, props, { type: "checkbox" })),
        React.createElement(Handle, { scale: scale })));
};
Toggle.defaultProps = {
    scale: scales.MD,
};

var breakpointMap = {
    xs: 370,
    sm: 576,
    md: 852,
    lg: 968,
    xl: 1080,
};
var breakpoints = Object.values(breakpointMap).map(function (breakpoint) { return breakpoint + "px"; });
var mediaQueries$1 = {
    xs: "@media screen and (min-width: " + breakpointMap.xs + "px)",
    sm: "@media screen and (min-width: " + breakpointMap.sm + "px)",
    md: "@media screen and (min-width: " + breakpointMap.md + "px)",
    lg: "@media screen and (min-width: " + breakpointMap.lg + "px)",
    xl: "@media screen and (min-width: " + breakpointMap.xl + "px)",
    nav: "@media screen and (min-width: " + breakpointMap.lg + "px)",
};
var shadows = {
    level1: "0px 2px 12px -8px rgba(25, 19, 38, 0.1), 0px 1px 1px rgba(25, 19, 38, 0.05)",
    active: "0px 0px 0px 1px #0098A1, 0px 0px 4px 8px rgba(31, 199, 212, 0.4)",
    success: "0px 0px 0px 1px #EF694E, 0px 0px 0px 4px rgba(49, 208, 170, 0.2)",
    warning: "0px 0px 0px 1px #ED4B9E, 0px 0px 0px 4px rgba(237, 75, 158, 0.2)",
    focus: "0px 0px 0px 1px #751c0b, 0px 0px 0px 4px rgba(118, 69, 217, 0.6)",
    inset: "inset 0px 2px 2px -1px rgba(74, 74, 104, 0.1)",
};
var spacing = [0, 4, 8, 16, 24, 32, 48, 64];
var radii = {
    small: "4px",
    default: "16px",
    card: "24px",
    circle: "50%",
};
var zIndices = {
    dropdown: 10,
    modal: 100,
};
var base = {
    siteWidth: 1200,
    breakpoints: breakpoints,
    mediaQueries: mediaQueries$1,
    spacing: spacing,
    shadows: shadows,
    radii: radii,
    zIndices: zIndices,
};

/**
 * Can't use the media queries from "base.mediaQueries" because of how matchMedia works
 * In order for the listener to trigger we need have have the media query with a range, e.g.
 * (min-width: 370px) and (max-width: 576px)
 * @see https://developer.mozilla.org/en-US/docs/Web/API/MediaQueryList
 */
var mediaQueries = (function () {
    var prevMinWidth = 0;
    return Object.keys(breakpointMap).reduce(function (accum, size, index) {
        var _a, _b;
        // Largest size is just a min-width of second highest max-width
        if (index === Object.keys(breakpointMap).length - 1) {
            return __assign(__assign({}, accum), (_a = {}, _a[size] = "(min-width: " + prevMinWidth + "px)", _a));
        }
        var minWidth = prevMinWidth;
        var breakpoint = breakpointMap[size];
        // Min width for next iteration
        prevMinWidth = breakpoint + 1;
        return __assign(__assign({}, accum), (_b = {}, _b[size] = "(min-width: " + minWidth + "px) and (max-width: " + breakpoint + "px)", _b));
    }, {});
})();
var getKey = function (size) { return "is" + size.charAt(0).toUpperCase() + size.slice(1); };
var useMatchBreakpoints = function () {
    var _a = useState(function () {
        return Object.keys(mediaQueries).reduce(function (accum, size) {
            var _a;
            var key = getKey(size);
            var mql = window.matchMedia(mediaQueries[size]);
            return __assign(__assign({}, accum), (_a = {}, _a[key] = mql.matches, _a));
        }, {});
    }), state = _a[0], setState = _a[1];
    useEffect(function () {
        // Create listeners for each media query returning a function to unsubscribe
        var handlers = Object.keys(mediaQueries).map(function (size) {
            var mql = window.matchMedia(mediaQueries[size]);
            var handler = function (matchMediaQuery) {
                var key = getKey(size);
                setState(function (prevState) {
                    var _a;
                    return (__assign(__assign({}, prevState), (_a = {}, _a[key] = matchMediaQuery.matches, _a)));
                });
            };
            // Safari < 14 fix
            if (mql.addEventListener) {
                mql.addEventListener("change", handler);
            }
            return function () {
                // Safari < 14 fix
                if (mql.removeEventListener) {
                    mql.removeEventListener("change", handler);
                }
            };
        });
        return function () {
            handlers.forEach(function (unsubscribe) {
                unsubscribe();
            });
        };
    }, [setState]);
    return state;
};

var defaultParticleOptions = {
    size: 30,
    distance: 500,
};
var createParticle = function (x, y, imgSrc, options) {
    if (options === void 0) { options = {}; }
    var _a = __assign(__assign({}, defaultParticleOptions), options), size = _a.size, distance = _a.distance;
    var particle = document.createElement("particle");
    document.body.appendChild(particle);
    var width = Math.floor(Math.random() * size + 8);
    var height = width;
    var destinationX = (Math.random() - 0.5) * distance;
    var destinationY = (Math.random() - 0.5) * distance;
    var rotation = Math.random() * 520;
    var delay = Math.random() * 200;
    particle.style.backgroundRepeat = "no-repeat";
    particle.style.backgroundSize = "contain";
    particle.style.backgroundImage = "url(" + imgSrc + ")";
    particle.style.left = "0";
    particle.style.top = "0";
    particle.style.opacity = "0";
    particle.style.pointerEvents = "none";
    particle.style.position = "fixed";
    particle.style.width = width + "px";
    particle.style.height = height + "px";
    var animation = particle.animate([
        {
            transform: "translate(-50%, -50%) translate(" + x + "px, " + y + "px) rotate(0deg)",
            opacity: 1,
        },
        {
            transform: "translate(-50%, -50%) translate(" + (x + destinationX) + "px, " + (y + destinationY) + "px) rotate(" + rotation + "deg)",
            opacity: 0,
        },
    ], {
        duration: Math.random() * 1000 + 5000,
        easing: "cubic-bezier(0, .9, .57, 1)",
        delay: delay,
    });
    animation.onfinish = function () {
        particle.remove();
    };
};
var defaultOptions = {
    numberOfParticles: 30,
    debounceDuration: 200,
    particleOptions: {},
};
/**
 * @see https://css-tricks.com/playing-with-particles-using-the-web-animations-api/
 */
var useParticleBurst = function (options) {
    var _a = __assign(__assign({}, defaultOptions), options), selector = _a.selector, numberOfParticles = _a.numberOfParticles, debounceDuration = _a.debounceDuration, imgSrc = _a.imgSrc, disableWhen = _a.disableWhen, particleOptions = _a.particleOptions;
    var makeListener = useCallback(function () {
        return debounce(function (event) {
            var isDisabled = disableWhen && disableWhen();
            if (!isDisabled) {
                var node = event.currentTarget;
                if (event.clientX === 0 && event.clientY === 0) {
                    var _a = node.getBoundingClientRect(), left = _a.left, width = _a.width, top_1 = _a.top, height = _a.height;
                    var x = left + width / 2;
                    var y = top_1 + height / 2;
                    for (var i = 0; i < numberOfParticles; i += 1) {
                        createParticle(x, y, imgSrc, particleOptions);
                    }
                }
                else {
                    for (var i = 0; i < numberOfParticles; i += 1) {
                        createParticle(event.clientX, event.clientY + window.scrollY, imgSrc, particleOptions);
                    }
                }
            }
        }, debounceDuration, { leading: true });
    }, [debounceDuration, numberOfParticles, imgSrc, disableWhen, particleOptions]);
    var listener = makeListener();
    var initialize = useCallback(function () {
        if (selector) {
            document.querySelectorAll(selector).forEach(function (element) {
                element.addEventListener("click", listener);
            });
        }
        else {
            document.addEventListener("click", listener);
        }
    }, [selector, listener]);
    var teardown = useCallback(function () {
        if (selector) {
            document.querySelectorAll(selector).forEach(function (element) {
                element.removeEventListener("click", listener);
            });
        }
        else {
            document.removeEventListener("click", listener);
        }
    }, [selector, listener]);
    useEffect(function () {
        initialize();
        return function () { return teardown(); };
    }, [initialize, teardown]);
    return { initialize: initialize, teardown: teardown };
};

var useKonamiCheatCode = function (matchedCodeHandler) {
    useEffect(function () {
        var pattern = [
            "ArrowUp",
            "ArrowUp",
            "ArrowDown",
            "ArrowDown",
            "ArrowLeft",
            "ArrowRight",
            "ArrowLeft",
            "ArrowRight",
        ];
        var currentIndex = 0;
        var onKeyUpHandler = function (event) {
            var key = event.key;
            // is key in correct order otherwise reset
            if (key !== pattern[currentIndex]) {
                currentIndex = 0;
                return;
            }
            currentIndex += 1;
            if (pattern.length === currentIndex) {
                currentIndex = 0;
                matchedCodeHandler();
            }
        };
        document.addEventListener("keyup", onKeyUpHandler);
        return function () { return document.removeEventListener("keyup", onKeyUpHandler); };
    }, [matchedCodeHandler]);
};

var baseColors = {
    failure: "#b8870b",
    primary: "#b8870b",
    primaryBright: "#b8870b",
    primaryDark: "#b8870b",
    secondary: "#b8870b",
    success: "#b8870b",
    warning: "#b8870b",
};
var additionalColors = {
    binance: "#b8870b",
    overlay: "#b8870b",
};
var lightColors = __assign(__assign(__assign({}, baseColors), additionalColors), { background: "#000000", backgroundDisabled: "#9595e9", backgroundAlt: "#0a0a0a", cardBorder: "#facdc3", contrast: "#311b17", dropdown: "#F6F6F6", dropdownDeep: "#EEEEEE", invertedContrast: "#FFFFFF", bright: "#ffffff", blue: "#b8870b", input: "#ffffff", inputSecondary: "#d7caec", tertiary: "#EFF4F5", text: "#ffffff", textDisabled: "#b8870b", textSubtle: "#8c8c8c", disabled: "#E9EAEB", menuHover: "#DAA520", gradients: {
        bluePurple: "linear-gradient(90.82deg, #FA00FF -73.84%, #17D2FB 141.1%)",
        bubblegum: "linear-gradient(245.94deg, rgba(10, 10, 10, 0.2) -63.8%, rgba(10, 10, 10, 0.2) 73.44%)",
        inverseBubblegum: "linear-gradient(245.94deg, rgba(10, 10, 10, 0.2) -63.8%, rgba(10, 10, 10, 0.2) 73.44%)",
        cardHeader: "linear-gradient(111.68deg, #ffffff 0%, #979797 100%)",
        blue: "linear-gradient(245.94deg, rgba(10, 10, 10, 0.2) -63.8%, rgba(10, 10, 10, 0.2) 73.44%)",
        violet: "linear-gradient(180deg, #f89b88 0%, #fd8a73 100%)",
        violetAlt: "linear-gradient(180deg, #d39487 0%, #ce7766 100%)",
        gold: "linear-gradient(180deg, #0773C9 0%, #b8870b 100%)",
    } });
var darkColors = __assign(__assign(__assign({}, baseColors), additionalColors), { background: "#000000", backgroundDisabled: "#9595e9", backgroundAlt: "#0a0a0a", cardBorder: "#facdc3", contrast: "#311b17", dropdown: "#F6F6F6", dropdownDeep: "#EEEEEE", invertedContrast: "#FFFFFF", bright: "#ffffff", blue: "#b8870b", input: "#ffffff", inputSecondary: "#d7caec", tertiary: "#EFF4F5", text: "#ffffff", textDisabled: "#b8870b", textSubtle: "#8c8c8c", disabled: "#E9EAEB", menuHover: "#DAA520", gradients: {
        bluePurple: "linear-gradient(90.82deg, #FA00FF -73.84%, #17D2FB 141.1%)",
        bubblegum: "linear-gradient(245.94deg, rgba(10, 10, 10, 0.2) -63.8%, rgba(10, 10, 10, 0.2) 73.44%)",
        inverseBubblegum: "linear-gradient(245.94deg, rgba(10, 10, 10, 0.2) -63.8%, rgba(10, 10, 10, 0.2) 73.44%)",
        cardHeader: "linear-gradient(111.68deg, #ffffff 0%, #979797 100%)",
        blue: "linear-gradient(245.94deg, rgba(10, 10, 10, 0.2) -63.8%, rgba(10, 10, 10, 0.2) 73.44%)",
        violet: "linear-gradient(180deg, #f89b88 0%, #fd8a73 100%)",
        violetAlt: "linear-gradient(180deg, #d39487 0%, #ce7766 100%)",
        gold: "linear-gradient(180deg, #0773C9 0%, #b8870b 100%)",
    } });

var light$7 = {
    background: lightColors.backgroundAlt,
};
var dark$7 = {
    background: darkColors.backgroundAlt,
};

var light$6 = {
    background: lightColors.backgroundAlt,
    boxShadow: shadows.level1,
    boxShadowActive: shadows.active,
    boxShadowSuccess: shadows.success,
    boxShadowWarning: shadows.warning,
    cardHeaderBackground: {
        default: lightColors.gradients.cardHeader,
        blue: lightColors.gradients.blue,
        bubblegum: lightColors.gradients.bubblegum,
        violet: lightColors.gradients.violet,
    },
    dropShadow: "drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))",
};
var dark$6 = {
    background: darkColors.backgroundAlt,
    boxShadow: shadows.level1,
    boxShadowActive: shadows.active,
    boxShadowSuccess: shadows.success,
    boxShadowWarning: shadows.warning,
    cardHeaderBackground: {
        default: darkColors.gradients.cardHeader,
        blue: darkColors.gradients.blue,
        bubblegum: lightColors.gradients.bubblegum,
        violet: darkColors.gradients.violet,
    },
    dropShadow: "drop-shadow(0px 1px 4px rgba(25, 19, 38, 0.15))",
};

var light$5 = {
    handleBackground: lightColors.backgroundAlt,
    handleShadow: lightColors.textDisabled,
};
var dark$5 = {
    handleBackground: darkColors.backgroundAlt,
    handleShadow: darkColors.textDisabled,
};

var light$4 = {
    handleBackground: lightColors.backgroundAlt,
};
var dark$4 = {
    handleBackground: darkColors.backgroundAlt,
};

var light$3 = {
    handleBackground: lightColors.backgroundAlt,
};
var dark$3 = {
    handleBackground: darkColors.backgroundAlt,
};

var light$2 = {
    background: lightColors.backgroundAlt,
};
var dark$2 = {
    background: darkColors.backgroundAlt,
};

var light$1 = {
    background: lightColors.backgroundAlt,
};
var dark$1 = {
    background: darkColors.backgroundAlt,
};

var light = {
    background: darkColors.backgroundAlt,
    text: darkColors.text,
    boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.2), 0px 4px 12px -8px rgba(14, 14, 44, 0.1)",
};
var dark = {
    background: lightColors.backgroundAlt,
    text: lightColors.text,
    boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.2), 0px 4px 12px -8px rgba(14, 14, 44, 0.1)",
};

var darkTheme = __assign(__assign({}, base), { isDark: true, alert: dark$7, colors: darkColors, card: dark$6, toggle: dark$3, nav: dark$2, modal: dark$1, pancakeToggle: dark$5, radio: dark$4, tooltip: dark });

var lightTheme = __assign(__assign({}, base), { isDark: false, alert: light$7, colors: lightColors, card: light$6, toggle: light$3, nav: light$2, modal: light$1, pancakeToggle: light$5, radio: light$4, tooltip: light });

var Arrow = styled.div(templateObject_1$h || (templateObject_1$h = __makeTemplateObject(["\n  &,\n  &::before {\n    position: absolute;\n    width: 10px;\n    height: 10px;\n    border-radius: 2px;\n    z-index: -1;\n  }\n\n  &::before {\n    content: \"\";\n    transform: rotate(45deg);\n    background: ", ";\n  }\n"], ["\n  &,\n  &::before {\n    position: absolute;\n    width: 10px;\n    height: 10px;\n    border-radius: 2px;\n    z-index: -1;\n  }\n\n  &::before {\n    content: \"\";\n    transform: rotate(45deg);\n    background: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.tooltip.background;
});
var StyledTooltip = styled.div(templateObject_2$7 || (templateObject_2$7 = __makeTemplateObject(["\n  padding: 16px;\n  font-size: 16px;\n  line-height: 130%;\n  border-radius: 16px;\n  max-width: 320px;\n  z-index: 101;\n  background: ", ";\n  color: ", ";\n  box-shadow: ", ";\n\n  &[data-popper-placement^=\"top\"] > ", " {\n    bottom: -4px;\n  }\n\n  &[data-popper-placement^=\"bottom\"] > ", " {\n    top: -4px;\n  }\n\n  &[data-popper-placement^=\"left\"] > ", " {\n    right: -4px;\n  }\n\n  &[data-popper-placement^=\"right\"] > ", " {\n    left: -4px;\n  }\n"], ["\n  padding: 16px;\n  font-size: 16px;\n  line-height: 130%;\n  border-radius: 16px;\n  max-width: 320px;\n  z-index: 101;\n  background: ", ";\n  color: ", ";\n  box-shadow: ", ";\n\n  &[data-popper-placement^=\"top\"] > ", " {\n    bottom: -4px;\n  }\n\n  &[data-popper-placement^=\"bottom\"] > ", " {\n    top: -4px;\n  }\n\n  &[data-popper-placement^=\"left\"] > ", " {\n    right: -4px;\n  }\n\n  &[data-popper-placement^=\"right\"] > ", " {\n    left: -4px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.tooltip.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.tooltip.text;
}, function (_a) {
    var theme = _a.theme;
    return theme.tooltip.boxShadow;
}, Arrow, Arrow, Arrow, Arrow);
var templateObject_1$h, templateObject_2$7;

function isTouchDevice() {
    return "ontouchstart" in window || navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0;
}
var invertTheme = function (currentTheme) {
    if (currentTheme.isDark) {
        return lightTheme;
    }
    return darkTheme;
};
var portalRoot = document.getElementById("portal-root");
var useTooltip = function (content, options) {
    var _a = options.placement, placement = _a === void 0 ? "auto" : _a, _b = options.trigger, trigger = _b === void 0 ? "hover" : _b, _c = options.arrowPadding, arrowPadding = _c === void 0 ? 16 : _c, _d = options.tooltipPadding, tooltipPadding = _d === void 0 ? { left: 16, right: 16 } : _d, _e = options.tooltipOffset, tooltipOffset = _e === void 0 ? [0, 10] : _e;
    var _f = useState(null), targetElement = _f[0], setTargetElement = _f[1];
    var _g = useState(null), tooltipElement = _g[0], setTooltipElement = _g[1];
    var _h = useState(null), arrowElement = _h[0], setArrowElement = _h[1];
    var _j = useState(false), visible = _j[0], setVisible = _j[1];
    var isHoveringOverTooltip = useRef(false);
    var hideTimeout = useRef();
    var hideTooltip = useCallback(function (e) {
        var hide = function () {
            e.stopPropagation();
            e.preventDefault();
            setVisible(false);
        };
        if (trigger === "hover") {
            if (hideTimeout.current) {
                window.clearTimeout(hideTimeout.current);
            }
            if (e.target === tooltipElement) {
                isHoveringOverTooltip.current = false;
            }
            if (!isHoveringOverTooltip.current) {
                hideTimeout.current = window.setTimeout(function () {
                    if (!isHoveringOverTooltip.current) {
                        hide();
                    }
                }, 100);
            }
        }
        else {
            hide();
        }
    }, [tooltipElement, trigger]);
    var showTooltip = useCallback(function (e) {
        e.stopPropagation();
        e.preventDefault();
        setVisible(true);
        if (trigger === "hover") {
            if (e.target === targetElement) {
                // If we were about to close the tooltip and got back to it
                // then prevent closing it.
                clearTimeout(hideTimeout.current);
            }
            if (e.target === tooltipElement) {
                isHoveringOverTooltip.current = true;
            }
        }
    }, [tooltipElement, targetElement, trigger]);
    var toggleTooltip = useCallback(function (e) {
        e.stopPropagation();
        setVisible(!visible);
    }, [visible]);
    // Trigger = hover
    useEffect(function () {
        if (targetElement === null || trigger !== "hover")
            return undefined;
        if (isTouchDevice()) {
            targetElement.addEventListener("touchstart", showTooltip);
            targetElement.addEventListener("touchend", hideTooltip);
        }
        else {
            targetElement.addEventListener("mouseenter", showTooltip);
            targetElement.addEventListener("mouseleave", hideTooltip);
        }
        return function () {
            targetElement.removeEventListener("touchstart", showTooltip);
            targetElement.removeEventListener("touchend", hideTooltip);
            targetElement.removeEventListener("mouseenter", showTooltip);
            targetElement.removeEventListener("mouseleave", showTooltip);
        };
    }, [trigger, targetElement, hideTooltip, showTooltip]);
    // Keep tooltip open when cursor moves from the targetElement to the tooltip
    useEffect(function () {
        if (tooltipElement === null || trigger !== "hover")
            return undefined;
        tooltipElement.addEventListener("mouseenter", showTooltip);
        tooltipElement.addEventListener("mouseleave", hideTooltip);
        return function () {
            tooltipElement.removeEventListener("mouseenter", showTooltip);
            tooltipElement.removeEventListener("mouseleave", hideTooltip);
        };
    }, [trigger, tooltipElement, hideTooltip, showTooltip]);
    // Trigger = click
    useEffect(function () {
        if (targetElement === null || trigger !== "click")
            return undefined;
        targetElement.addEventListener("click", toggleTooltip);
        return function () { return targetElement.removeEventListener("click", toggleTooltip); };
    }, [trigger, targetElement, visible, toggleTooltip]);
    // Handle click outside
    useEffect(function () {
        if (trigger !== "click")
            return undefined;
        var handleClickOutside = function (_a) {
            var target = _a.target;
            if (target instanceof Node) {
                if (tooltipElement != null &&
                    targetElement != null &&
                    !tooltipElement.contains(target) &&
                    !targetElement.contains(target)) {
                    setVisible(false);
                }
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return function () { return document.removeEventListener("mousedown", handleClickOutside); };
    }, [trigger, targetElement, tooltipElement]);
    // Trigger = focus
    useEffect(function () {
        if (targetElement === null || trigger !== "focus")
            return undefined;
        targetElement.addEventListener("focus", showTooltip);
        targetElement.addEventListener("blur", hideTooltip);
        return function () {
            targetElement.removeEventListener("focus", showTooltip);
            targetElement.removeEventListener("blur", hideTooltip);
        };
    }, [trigger, targetElement, showTooltip, hideTooltip]);
    // On small screens Popper.js tries to squeeze the tooltip to available space without overflowing beyound the edge
    // of the screen. While it works fine when the element is in the middle of the screen it does not handle well the
    // cases when the target element is very close to the edge of the screen - no margin is applied between the tooltip
    // and the screen edge.
    // preventOverflow mitigates this behaviour, default 16px paddings on left and right solve the problem for all screen sizes
    // that we support.
    // Note that in the farm page where there are tooltips very close to the edge of the screen this padding works perfectly
    // even on the iPhone 5 screen (320px wide), BUT in the storybook with the contrived example ScreenEdges example
    // iPhone 5 behaves differently overflowing beyound the edge. All paddings are identical so I have no idea why it is,
    // and fixing that seems like a very bad use of time.
    var _k = usePopper(targetElement, tooltipElement, {
        placement: placement,
        modifiers: [
            {
                name: "arrow",
                options: { element: arrowElement, padding: arrowPadding },
            },
            { name: "offset", options: { offset: tooltipOffset } },
            { name: "preventOverflow", options: { padding: tooltipPadding } },
        ],
    }), styles = _k.styles, attributes = _k.attributes;
    var tooltip = (React.createElement(StyledTooltip, __assign({ ref: setTooltipElement, style: styles.popper }, attributes.popper),
        React.createElement(ThemeProvider, { theme: invertTheme }, content),
        React.createElement(Arrow, { ref: setArrowElement, style: styles.arrow })));
    var tooltipInPortal = portalRoot ? createPortal(tooltip, portalRoot) : null;
    return {
        targetRef: setTargetElement,
        tooltip: tooltipInPortal !== null && tooltipInPortal !== void 0 ? tooltipInPortal : tooltip,
        tooltipVisible: visible,
    };
};

var ModalHeader = styled.div(templateObject_1$g || (templateObject_1$g = __makeTemplateObject(["\n  align-items: center;\n  background: ", ";\n  border-bottom: 1px solid ", ";\n  display: flex;\n  padding: 12px 24px;\n"], ["\n  align-items: center;\n  background: ", ";\n  border-bottom: 1px solid ", ";\n  display: flex;\n  padding: 12px 24px;\n"])), function (_a) {
    var background = _a.background;
    return background || "transparent";
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.cardBorder;
});
var ModalTitle = styled(Flex)(templateObject_2$6 || (templateObject_2$6 = __makeTemplateObject(["\n  align-items: center;\n  flex: 1;\n"], ["\n  align-items: center;\n  flex: 1;\n"])));
var ModalBody = styled(Flex)(templateObject_3$3 || (templateObject_3$3 = __makeTemplateObject(["\n  flex-direction: column;\n"], ["\n  flex-direction: column;\n"])));
var ModalCloseButton = function (_a) {
    var onDismiss = _a.onDismiss;
    return (React.createElement(IconButton, { variant: "text", onClick: onDismiss, "aria-label": "Close the dialog" },
        React.createElement(Icon$1m, { color: "primary" })));
};
var ModalBackButton = function (_a) {
    var onBack = _a.onBack;
    return (React.createElement(IconButton, { variant: "text", onClick: onBack, "area-label": "go back", mr: "8px" },
        React.createElement(Icon$1H, { color: "primary" })));
};
var ModalContainer = styled(Box)(templateObject_4$2 || (templateObject_4$2 = __makeTemplateObject(["\n  overflow: hidden;\n  background: ", ";\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n  border: 1px solid ", ";\n  border-radius: 32px;\n  width: 100%;\n  z-index: ", ";\n\n  ", " {\n    width: auto;\n    min-width: ", ";\n    max-width: 100%;\n  }\n"], ["\n  overflow: hidden;\n  background: ", ";\n  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);\n  border: 1px solid ", ";\n  border-radius: 32px;\n  width: 100%;\n  z-index: ", ";\n\n  ", " {\n    width: auto;\n    min-width: ", ";\n    max-width: 100%;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.modal.background;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.cardBorder;
}, function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.xs;
}, function (_a) {
    var minWidth = _a.minWidth;
    return minWidth;
});
var templateObject_1$g, templateObject_2$6, templateObject_3$3, templateObject_4$2;

var Modal = function (_a) {
    var title = _a.title, onDismiss = _a.onDismiss, onBack = _a.onBack, children = _a.children, _b = _a.hideCloseButton, hideCloseButton = _b === void 0 ? false : _b, _c = _a.bodyPadding, bodyPadding = _c === void 0 ? "24px" : _c, _d = _a.headerBackground, headerBackground = _d === void 0 ? "transparent" : _d, _e = _a.minWidth, minWidth = _e === void 0 ? "320px" : _e, props = __rest(_a, ["title", "onDismiss", "onBack", "children", "hideCloseButton", "bodyPadding", "headerBackground", "minWidth"]);
    return (React.createElement(ModalContainer, __assign({ minWidth: minWidth }, props),
        React.createElement(ModalHeader, { background: headerBackground },
            React.createElement(ModalTitle, null,
                onBack && React.createElement(ModalBackButton, { onBack: onBack }),
                React.createElement(Heading, null, title)),
            !hideCloseButton && React.createElement(ModalCloseButton, { onDismiss: onDismiss })),
        React.createElement(ModalBody, { p: bodyPadding }, children)));
};

var Overlay = styled.div.attrs({ role: "presentation" })(templateObject_1$f || (templateObject_1$f = __makeTemplateObject(["\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: ", ";\n  transition: opacity 0.4s;\n  opacity: ", ";\n  z-index: ", ";\n  pointer-events: ", ";\n"], ["\n  position: fixed;\n  top: 0px;\n  left: 0px;\n  width: 100%;\n  height: 100%;\n  background-color: ", ";\n  transition: opacity 0.4s;\n  opacity: ", ";\n  z-index: ", ";\n  pointer-events: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.overlay;
}, function (_a) {
    var show = _a.show;
    return (show ? 0.6 : 0);
}, function (_a) {
    var zIndex = _a.zIndex;
    return zIndex;
}, function (_a) {
    var show = _a.show;
    return (show ? "initial" : "none");
});
Overlay.defaultProps = {
    show: false,
    zIndex: 10,
};
var templateObject_1$f;

var ModalWrapper = styled.div(templateObject_1$e || (templateObject_1$e = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n"], ["\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.zIndices.modal - 1;
});
var Context = createContext({
    onPresent: function () { return null; },
    onDismiss: function () { return null; },
    setCloseOnOverlayClick: function () { return true; },
});
var ModalProvider = function (_a) {
    var children = _a.children;
    var _b = useState(false), isOpen = _b[0], setIsOpen = _b[1];
    var _c = useState(), modalNode = _c[0], setModalNode = _c[1];
    var _d = useState(true), closeOnOverlayClick = _d[0], setCloseOnOverlayClick = _d[1];
    var handlePresent = function (node) {
        setModalNode(node);
        setIsOpen(true);
    };
    var handleDismiss = function () {
        setModalNode(undefined);
        setIsOpen(false);
    };
    var handleOverlayDismiss = function () {
        if (closeOnOverlayClick) {
            handleDismiss();
        }
    };
    return (React.createElement(Context.Provider, { value: {
            onPresent: handlePresent,
            onDismiss: handleDismiss,
            setCloseOnOverlayClick: setCloseOnOverlayClick,
        } },
        isOpen && (React.createElement(ModalWrapper, null,
            React.createElement(Overlay, { show: true, onClick: handleOverlayDismiss }),
            React.isValidElement(modalNode) &&
                React.cloneElement(modalNode, {
                    onDismiss: handleDismiss,
                }))),
        children));
};
var templateObject_1$e;

var useModal = function (modal, closeOnOverlayClick) {
    if (closeOnOverlayClick === void 0) { closeOnOverlayClick = true; }
    var _a = useContext(Context), onPresent = _a.onPresent, onDismiss = _a.onDismiss, setCloseOnOverlayClick = _a.setCloseOnOverlayClick;
    var onPresentCallback = useCallback(function () {
        onPresent(modal);
    }, [modal, onPresent]);
    useEffect(function () {
        setCloseOnOverlayClick(closeOnOverlayClick);
    }, [closeOnOverlayClick, setCloseOnOverlayClick]);
    return [onPresentCallback, onDismiss];
};

var Icon$w = function (props) {
    return (React.createElement(Svg, __assign({ height: "20", viewBox: "0 0 20 20", fill: "none" }, props),
        React.createElement("path", { d: "M4.38605 5.0001H11.0714V3.95085L10.756 1.42871H5.27893L4.38605 5.0001Z", fill: "white" }),
        React.createElement("path", { d: "M4.28567 0.714292H10.7142V0.357146C10.7142 0.159894 10.5543 0 10.3571 0H4.28567C4.08842 0 3.92853 0.159894 3.92853 0.357146C3.92853 0.554397 4.08846 0.714292 4.28567 0.714292Z", fill: "white" }),
        React.createElement("path", { d: "M8.57141 11.0713H12.9253C13.162 9.77955 14.0297 8.69206 15.2367 8.17449C16.4436 7.65692 17.8296 7.77801 18.9285 8.49704V6.78563C18.9269 5.40556 17.8086 4.28722 16.4285 4.28564H11.7857V7.85704C11.7857 8.44876 11.306 8.92847 10.7142 8.92847H9.4953C9.11722 8.93048 8.76672 8.73079 8.57566 8.40455C7.28887 6.16021 4.5811 5.15736 2.14282 6.02207V6.78563C3.57575 6.18743 5.21287 6.34551 6.50487 7.20683C7.79689 8.06814 8.57247 9.51855 8.57141 11.0713Z", fill: "white" }),
        React.createElement("path", { d: "M9.1953 8.04934C9.25873 8.15391 9.37304 8.21677 9.49531 8.21434H10.7142C10.9115 8.21434 11.0714 8.05444 11.0714 7.85719V5.71436H6.77496C7.78564 6.24907 8.62468 7.05851 9.1953 8.04934Z", fill: "white" }),
        React.createElement("path", { d: "M13.5714 11.7856C13.5714 13.0856 14.3545 14.2576 15.5556 14.7552C16.7567 15.2527 18.1392 14.9777 19.0584 14.0584C19.9777 13.1391 20.2527 11.7566 19.7552 10.5555C19.2577 9.35444 18.0857 8.57129 16.7856 8.57129C15.0113 8.57346 13.5735 10.0113 13.5714 11.7856ZM18.9285 11.7856C18.9285 12.969 17.9691 13.9284 16.7856 13.9284C15.6022 13.9284 14.6428 12.969 14.6428 11.7856C14.6428 10.6021 15.6022 9.64273 16.7856 9.64273C17.9686 9.64391 18.9273 10.6026 18.9285 11.7856Z", fill: "white" }),
        React.createElement("path", { d: "M15.3571 11.7855C15.3571 12.5744 15.9966 13.214 16.7856 13.214C17.5746 13.214 18.2141 12.5744 18.2141 11.7855C18.2141 10.9965 17.5746 10.3569 16.7856 10.3569C15.9966 10.3569 15.3571 10.9965 15.3571 11.7855ZM17.1427 11.7855C17.1427 11.9827 16.9828 12.1426 16.7856 12.1426C16.5883 12.1426 16.4285 11.9827 16.4285 11.7855C16.4285 11.5882 16.5883 11.4283 16.7856 11.4283C16.9828 11.4283 17.1427 11.5882 17.1427 11.7855Z", fill: "white" }),
        React.createElement("path", { d: "M9.99663 17.0543C11.4704 16.5013 12.9816 16.0536 14.5188 15.7144H5.47949C7.01475 16.0545 8.52417 16.5023 9.99663 17.0543Z", fill: "white" }),
        React.createElement("path", { d: "M13.5714 1.42871H14.2856V3.57156H13.5714V1.42871Z", fill: "white" }),
        React.createElement("path", { d: "M0 19.6428C0 19.8401 0.159894 20 0.357146 20H4.18033C4.27713 19.936 4.37425 19.8739 4.47105 19.8118C3.00357 19.395 1.50988 19.0766 0 18.8589V19.6428Z", fill: "white" }),
        React.createElement("path", { d: "M0 17.252V18.1362C1.7909 18.3876 3.55958 18.7778 5.28998 19.3034C5.72022 19.0477 6.15103 18.807 6.58246 18.5813C4.43814 17.9197 2.23299 17.4744 0 17.252H0Z", fill: "white" }),
        React.createElement("path", { d: "M19.6427 19.9998C19.84 19.9998 19.9999 19.8399 19.9999 19.6427V18.8569C18.2671 19.1074 16.556 19.4894 14.8813 19.9998H19.6427Z", fill: "white" }),
        React.createElement("path", { d: "M12.6692 20.0001C15.036 19.1081 17.4947 18.4823 19.9999 18.1344V17.2529C16.4329 17.6056 12.9463 18.5333 9.67572 20.0001H12.6692Z", fill: "white" }),
        React.createElement("path", { d: "M19.6451 15.7144C14.6653 16.0131 9.82603 17.4814 5.51978 20H8.04083C11.7754 18.1074 15.832 16.9323 20.0001 16.5358V16.0715C20 15.8751 19.8414 15.7155 19.6451 15.7144Z", fill: "white" }),
        React.createElement("path", { d: "M8.99352 17.4504C6.20771 16.4766 3.30071 15.8924 0.354974 15.7144C0.158578 15.7155 0 15.8751 0 16.0715V16.5358C2.54979 16.7845 5.06376 17.3177 7.49496 18.1254C7.99831 17.8823 8.49781 17.6573 8.99352 17.4504Z", fill: "white" }),
        React.createElement("path", { d: "M3.92855 13.2144C5.11203 13.2144 6.0714 12.255 6.0714 11.0715C6.0714 9.88811 5.11199 8.92871 3.92855 8.92871C2.74511 8.92871 1.78571 9.88811 1.78571 11.0715C1.78689 12.2545 2.7456 13.2132 3.92855 13.2144ZM3.92855 10.7144C4.1258 10.7144 4.2857 10.8743 4.2857 11.0715C4.2857 11.2688 4.1258 11.4287 3.92855 11.4287C3.7313 11.4287 3.5714 11.2688 3.5714 11.0715C3.57144 10.8743 3.73133 10.7144 3.92855 10.7144Z", fill: "white" }),
        React.createElement("path", { d: "M3.92854 15.0002C6.09821 15.0002 7.85708 13.2413 7.85708 11.0716C7.85708 8.90197 6.09824 7.14307 3.92854 7.14307C1.75884 7.14307 0 8.90194 0 11.0716C0.00256726 13.2402 1.75992 14.9976 3.92854 15.0002ZM3.92854 8.21447C5.50648 8.21447 6.78567 9.49366 6.78567 11.0716C6.78567 12.6496 5.50648 13.9287 3.92854 13.9287C2.35059 13.9287 1.0714 12.6496 1.0714 11.0716C1.07318 9.49439 2.35135 8.21625 3.92854 8.21447Z", fill: "white" })));
};

var Icon$v = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 12.75C13.63 12.75 15.07 13.14 16.24 13.65C17.32 14.13 18 15.21 18 16.38V17C18 17.55 17.55 18 17 18H7C6.45 18 6 17.55 6 17V16.39C6 15.21 6.68 14.13 7.76 13.66C8.93 13.14 10.37 12.75 12 12.75ZM4 13C5.1 13 6 12.1 6 11C6 9.9 5.1 9 4 9C2.9 9 2 9.9 2 11C2 12.1 2.9 13 4 13ZM5.13 14.1C4.76 14.04 4.39 14 4 14C3.01 14 2.07 14.21 1.22 14.58C0.48 14.9 0 15.62 0 16.43V17C0 17.55 0.45 18 1 18H4.5V16.39C4.5 15.56 4.73 14.78 5.13 14.1ZM20 13C21.1 13 22 12.1 22 11C22 9.9 21.1 9 20 9C18.9 9 18 9.9 18 11C18 12.1 18.9 13 20 13ZM24 16.43C24 15.62 23.52 14.9 22.78 14.58C21.93 14.21 20.99 14 20 14C19.61 14 19.24 14.04 18.87 14.1C19.27 14.78 19.5 15.56 19.5 16.39V18H23C23.55 18 24 17.55 24 17V16.43ZM12 6C13.66 6 15 7.34 15 9C15 10.66 13.66 12 12 12C10.34 12 9 10.66 9 9C9 7.34 10.34 6 12 6Z" })));
};

var Icon$u = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M4 18H20C20.55 18 21 17.55 21 17C21 16.45 20.55 16 20 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H20C20.55 8 21 7.55 21 7C21 6.45 20.55 6 20 6H4C3.45 6 3 6.45 3 7Z" })));
};

var Icon$t = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M4 18H15C15.55 18 16 17.55 16 17C16 16.45 15.55 16 15 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H12C12.55 13 13 12.55 13 12C13 11.45 12.55 11 12 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H15C15.55 8 16 7.55 16 7C16 6.45 15.55 6 15 6H4C3.45 6 3 6.45 3 7ZM20.3 14.88L17.42 12L20.3 9.12C20.69 8.73 20.69 8.1 20.3 7.71C19.91 7.32 19.28 7.32 18.89 7.71L15.3 11.3C14.91 11.69 14.91 12.32 15.3 12.71L18.89 16.3C19.28 16.69 19.91 16.69 20.3 16.3C20.68 15.91 20.69 15.27 20.3 14.88Z" })));
};

var Icon$s = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M9.99998 19V14H14V19C14 19.55 14.45 20 15 20H18C18.55 20 19 19.55 19 19V12H20.7C21.16 12 21.38 11.43 21.03 11.13L12.67 3.59997C12.29 3.25997 11.71 3.25997 11.33 3.59997L2.96998 11.13C2.62998 11.43 2.83998 12 3.29998 12H4.99998V19C4.99998 19.55 5.44998 20 5.99998 20H8.99998C9.54998 20 9.99998 19.55 9.99998 19Z" })));
};

var Icon$r = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M21.9 8.89L20.85 4.52C20.63 3.62 19.85 3 18.94 3H16.73H14.72H13H11H9.28001H7.26001H5.05001C4.15001 3 3.36001 3.63 3.15001 4.52L2.10001 8.89C1.86001 9.91 2.08001 10.95 2.72001 11.77C2.80001 11.88 2.91001 11.96 3.00001 12.06V19C3.00001 20.1 3.90001 21 5.00001 21H19C20.1 21 21 20.1 21 19V12.06C21.09 11.97 21.2 11.88 21.28 11.78C21.92 10.96 22.15 9.91 21.9 8.89ZM7.02001 5L6.44001 9.86C6.36001 10.51 5.84001 11 5.23001 11C4.74001 11 4.43001 10.71 4.30001 10.53C4.04001 10.2 3.95001 9.77 4.05001 9.36L5.05001 5H7.02001ZM18.91 4.99L19.96 9.36C20.06 9.78 19.97 10.2 19.71 10.53C19.57 10.71 19.27 11 18.77 11C18.16 11 17.63 10.51 17.56 9.86L16.98 5L18.91 4.99ZM15.51 9.52C15.56 9.91 15.44 10.3 15.18 10.59C14.95 10.85 14.63 11 14.22 11C13.55 11 13 10.41 13 9.69V5H14.96L15.51 9.52ZM11 9.69C11 10.41 10.45 11 9.71001 11C9.37001 11 9.06001 10.85 8.82001 10.59C8.57001 10.3 8.45001 9.91 8.49001 9.52L9.04001 5H11V9.69ZM18 19H6.00001C5.45001 19 5.00001 18.55 5.00001 18V12.97C5.08001 12.98 5.15001 13 5.23001 13C6.10001 13 6.89001 12.64 7.47001 12.05C8.07001 12.65 8.87001 13 9.78001 13C10.65 13 11.43 12.64 12.01 12.07C12.6 12.64 13.4 13 14.3 13C15.14 13 15.94 12.65 16.54 12.05C17.12 12.64 17.91 13 18.78 13C18.86 13 18.93 12.98 19.01 12.97V18C19 18.55 18.55 19 18 19Z" })));
};

var Icon$q = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M5 7C5 6.44772 4.55228 6 4 6C3.44772 6 3 6.44772 3 7V18C3 19.1046 3.89543 20 5 20H20C20.5523 20 21 19.5523 21 19C21 18.4477 20.5523 18 20 18H5V7Z" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M19 17H7C6.44772 17 6 16.5523 6 16V12C6 11.4477 6.44772 11 7 11H10V10C10 9.44772 10.4477 9 11 9H14V7C14 6.44772 14.4477 6 15 6H19C19.5523 6 20 6.44772 20 7V16C20 16.5523 19.5523 17 19 17ZM16 8H18V15H16V8ZM12 15H14V11H12V15ZM10 13H8V15H10V13Z" })));
};

var Icon$p = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM18.92 8H15.97C15.65 6.75 15.19 5.55 14.59 4.44C16.43 5.07 17.96 6.35 18.92 8ZM12 4.04C12.83 5.24 13.48 6.57 13.91 8H10.09C10.52 6.57 11.17 5.24 12 4.04ZM4.26 14C4.1 13.36 4 12.69 4 12C4 11.31 4.1 10.64 4.26 10H7.64C7.56 10.66 7.5 11.32 7.5 12C7.5 12.68 7.56 13.34 7.64 14H4.26ZM5.08 16H8.03C8.35 17.25 8.81 18.45 9.41 19.56C7.57 18.93 6.04 17.66 5.08 16ZM8.03 8H5.08C6.04 6.34 7.57 5.07 9.41 4.44C8.81 5.55 8.35 6.75 8.03 8ZM12 19.96C11.17 18.76 10.52 17.43 10.09 16H13.91C13.48 17.43 12.83 18.76 12 19.96ZM14.34 14H9.66C9.57 13.34 9.5 12.68 9.5 12C9.5 11.32 9.57 10.65 9.66 10H14.34C14.43 10.65 14.5 11.32 14.5 12C14.5 12.68 14.43 13.34 14.34 14ZM14.59 19.56C15.19 18.45 15.65 17.25 15.97 16H18.92C17.96 17.65 16.43 18.93 14.59 19.56ZM16.36 14C16.44 13.34 16.5 12.68 16.5 12C16.5 11.32 16.44 10.66 16.36 10H19.74C19.9 10.64 20 11.31 20 12C20 12.69 19.9 13.36 19.74 14H16.36Z" })));
};

var Logo$2 = function (_a) {
    _a.isDark; var props = __rest(_a, ["isDark"]);
    return  (React.createElement(Svg, __assign({ viewBox: "0 0 20 20", fill: "none" }, props),
        React.createElement("path", { 
            d: "M265.323 54.768 C 265.698 54.825,266.312 54.825,266.687 54.768 C 267.063 54.711,266.756 54.665,266.005 54.665 C 265.254 54.665,264.947 54.711,265.323 54.768 M150.886 64.687 C 150.872 65.108,150.688 65.251,150.062 65.329 L 149.256 65.429 150.171 65.469 C 151.207 65.514,151.389 65.352,151.103 64.640 C 150.911 64.163,150.903 64.165,150.886 64.687 M273.449 78.855 C 273.449 78.963,273.675 79.068,273.951 79.089 C 274.227 79.109,274.388 79.021,274.308 78.893 C 274.134 78.611,273.449 78.581,273.449 78.855 M275.950 79.094 C 275.811 79.333,275.694 79.396,275.690 79.234 C 275.686 79.072,275.468 78.955,275.205 78.975 C 274.827 79.003,274.777 79.103,274.964 79.453 C 275.094 79.697,275.337 79.869,275.504 79.836 C 275.735 79.791,275.822 81.338,275.870 86.352 C 275.905 89.969,275.980 93.040,276.036 93.176 C 276.093 93.313,276.148 90.546,276.159 87.028 L 276.179 80.632 276.957 79.776 C 277.385 79.306,277.832 78.981,277.950 79.053 C 278.067 79.126,278.164 79.067,278.164 78.923 C 278.164 78.461,276.232 78.611,275.950 79.094 M280.530 78.894 C 280.441 79.038,280.123 79.160,279.824 79.164 C 279.358 79.171,279.334 79.215,279.653 79.474 C 279.857 79.641,280.044 80.223,280.067 80.769 C 280.091 81.315,280.226 82.488,280.368 83.375 C 280.510 84.262,280.745 85.993,280.889 87.221 C 281.034 88.449,281.253 90.236,281.377 91.191 C 281.501 92.146,281.727 93.933,281.880 95.161 C 282.033 96.390,282.206 97.674,282.263 98.015 C 282.320 98.356,282.436 99.529,282.520 100.620 C 282.603 101.712,282.839 103.108,283.043 103.722 C 283.248 104.336,283.468 106.067,283.533 107.568 C 283.684 111.062,283.724 111.230,284.667 112.303 C 285.514 113.268,285.684 113.956,286.078 117.990 C 286.380 121.092,287.743 125.806,288.338 125.806 C 288.428 125.806,288.649 126.082,288.829 126.418 C 289.009 126.755,289.243 126.977,289.350 126.911 C 289.456 126.845,289.612 127.010,289.696 127.276 C 290.261 129.055,294.186 129.855,295.409 128.439 C 295.682 128.123,296.267 127.679,296.708 127.452 C 297.684 126.949,298.263 125.902,298.263 124.640 C 298.263 124.122,298.487 123.110,298.759 122.392 C 299.032 121.674,299.256 120.648,299.256 120.111 C 299.256 119.575,299.367 119.067,299.504 118.983 C 299.640 118.898,299.752 118.557,299.752 118.224 C 299.752 117.586,300.119 117.400,300.332 117.928 C 300.401 118.099,300.473 117.847,300.492 117.370 C 300.523 116.621,300.557 116.575,300.743 117.034 C 300.998 117.666,301.489 118.027,301.489 117.583 C 301.489 117.068,301.932 117.678,302.054 118.362 C 302.136 118.817,302.183 118.718,302.232 117.990 L 302.299 116.998 302.481 117.866 C 302.582 118.344,302.679 115.078,302.697 110.608 L 302.730 102.481 304.653 102.453 C 305.710 102.437,306.408 102.378,306.203 102.322 C 305.934 102.248,305.824 101.843,305.807 100.853 C 305.793 100.101,305.642 98.901,305.470 98.186 C 305.157 96.881,305.196 95.859,305.699 92.184 C 305.849 91.092,306.032 89.612,306.105 88.896 C 306.179 88.179,306.394 87.438,306.584 87.248 C 306.837 86.995,306.937 86.075,306.963 83.775 C 306.987 81.705,307.090 80.645,307.269 80.645 C 307.417 80.645,307.322 80.481,307.057 80.281 C 306.622 79.951,306.617 79.916,307.010 79.909 C 307.497 79.900,307.547 79.703,307.201 79.156 C 306.906 78.689,280.815 78.433,280.530 78.894 M276.909 79.543 C 276.581 79.893,276.272 80.056,276.222 79.907 C 276.052 79.396,276.411 78.908,276.959 78.908 L 277.506 78.908 276.909 79.543 M116.191 86.772 C 116.430 86.834,116.821 86.834,117.060 86.772 C 117.298 86.709,117.103 86.658,116.625 86.658 C 116.148 86.658,115.952 86.709,116.191 86.772 M133.561 86.772 C 133.800 86.834,134.190 86.834,134.429 86.772 C 134.668 86.709,134.473 86.658,133.995 86.658 C 133.517 86.658,133.322 86.709,133.561 86.772 M268.156 121.505 C 268.065 121.596,267.992 121.792,267.994 121.940 C 267.996 122.122,268.057 122.117,268.180 121.927 C 268.280 121.772,268.586 121.590,268.859 121.522 C 269.339 121.402,269.338 121.397,268.838 121.369 C 268.554 121.353,268.246 121.414,268.156 121.505 M121.340 172.743 C 121.340 173.262,121.355 173.265,121.836 172.829 C 122.109 172.582,122.333 172.341,122.333 172.294 C 122.333 172.247,122.109 172.208,121.836 172.208 C 121.493 172.208,121.340 172.374,121.340 172.743 M276.198 186.414 C 276.184 186.908,276.299 187.096,276.613 187.093 C 276.946 187.090,276.970 187.040,276.716 186.879 C 276.534 186.764,276.402 186.595,276.424 186.505 C 276.446 186.414,276.409 186.203,276.341 186.036 C 276.273 185.869,276.209 186.039,276.198 186.414 M301.156 187.016 C 301.066 187.106,300.993 187.328,300.993 187.510 C 300.993 188.019,301.828 187.902,302.176 187.345 C 302.359 187.051,302.384 186.849,302.235 186.849 C 302.098 186.849,301.985 186.974,301.985 187.127 C 301.985 187.332,301.897 187.333,301.652 187.129 C 301.469 186.977,301.246 186.926,301.156 187.016 M184.367 193.788 C 184.367 194.489,185.824 194.541,205.335 194.541 C 224.846 194.541,226.303 194.489,226.303 193.788 C 226.303 193.636,218.638 193.548,205.335 193.548 C 192.032 193.548,184.367 193.636,184.367 193.788 M248.387 193.788 C 248.387 194.755,273.202 195.003,274.069 194.045 C 274.518 193.549,274.503 193.548,261.453 193.548 C 253.225 193.548,248.387 193.637,248.387 193.788", fill: "white" }),
       
        React.createElement("path", {
            d: "M170.409 54.771 C 169.590 54.857,169.479 54.948,169.476 55.536 C 169.466 57.365,169.565 57.320,165.529 57.320 C 161.423 57.320,161.290 57.372,161.290 58.974 L 161.290 60.032 158.747 60.103 L 156.203 60.174 156.128 61.476 L 156.053 62.779 154.702 62.779 C 153.958 62.779,153.350 62.891,153.350 63.027 C 153.350 63.164,153.107 63.275,152.811 63.275 C 152.097 63.275,151.359 63.965,151.548 64.456 C 151.646 64.713,151.599 64.785,151.407 64.666 C 151.021 64.428,151.035 64.830,151.427 65.229 C 151.597 65.402,151.625 65.523,151.489 65.497 C 151.352 65.471,150.543 65.463,149.690 65.479 L 148.139 65.509 148.139 66.749 L 148.139 67.990 147.084 67.994 C 146.068 67.998,145.344 68.246,145.388 68.576 C 145.400 68.663,145.409 69.175,145.409 69.714 L 145.409 70.694 144.107 70.769 L 142.804 70.844 142.729 72.146 L 142.654 73.449 141.705 73.449 C 140.799 73.449,140.020 73.932,140.366 74.278 C 140.456 74.368,140.414 74.442,140.274 74.442 C 139.996 74.442,140.039 75.471,140.338 75.955 C 140.456 76.147,140.419 76.191,140.234 76.076 C 140.036 75.954,139.959 76.118,139.993 76.596 C 140.121 78.441,140.018 78.660,139.020 78.664 C 137.714 78.669,137.511 78.874,137.423 80.278 C 137.345 81.505,137.339 81.513,136.554 81.435 C 134.948 81.274,134.739 81.611,134.739 84.363 L 134.739 86.823 133.437 86.898 L 132.134 86.973 132.010 89.568 L 131.886 92.163 130.955 92.143 C 130.444 92.133,130.025 92.228,130.025 92.355 C 130.025 92.481,129.913 92.516,129.777 92.432 C 129.640 92.347,129.508 92.536,129.483 92.851 C 129.412 93.748,129.328 96.228,129.303 98.201 L 129.280 100.000 127.916 100.000 L 126.551 100.000 126.551 97.673 C 126.551 95.421,126.320 94.689,125.646 94.810 C 124.491 95.017,124.069 94.775,124.069 93.904 C 124.069 92.459,123.718 92.060,122.448 92.060 C 121.343 92.060,121.340 92.057,121.340 91.175 C 121.340 89.730,120.989 89.330,119.718 89.330 L 118.610 89.330 118.610 88.089 L 118.610 86.849 117.246 86.849 L 115.881 86.849 115.881 85.484 L 115.881 84.119 113.288 84.119 L 110.696 84.119 110.621 82.816 L 110.546 81.514 107.940 81.488 L 105.335 81.463 105.265 80.620 C 105.121 78.874,104.853 78.669,102.880 78.792 C 101.910 78.852,98.354 78.971,94.978 79.056 C 91.508 79.144,88.898 79.308,88.975 79.432 C 89.050 79.553,89.545 79.653,90.074 79.653 C 90.604 79.653,91.107 79.764,91.191 79.901 C 91.275 80.037,91.107 80.149,90.816 80.149 C 89.555 80.149,89.481 80.892,90.739 80.923 C 91.736 80.947,91.811 80.978,91.191 81.111 C 90.468 81.265,90.442 81.320,90.288 83.046 C 90.200 84.023,90.052 84.947,89.958 85.099 C 89.077 86.525,89.611 88.337,90.912 88.338 C 91.839 88.338,92.742 89.082,93.428 90.409 C 93.699 90.935,94.088 91.493,94.293 91.650 C 94.849 92.077,95.705 94.828,95.504 95.546 C 95.179 96.711,95.256 102.976,95.596 102.993 C 95.766 103.002,95.629 103.119,95.291 103.254 C 94.933 103.397,94.786 103.572,94.937 103.673 C 95.183 103.837,95.443 104.356,95.493 104.786 C 95.506 104.893,95.688 105.153,95.899 105.364 C 96.110 105.575,96.217 105.853,96.138 105.981 C 96.058 106.110,96.141 106.185,96.322 106.148 C 96.523 106.106,96.624 106.271,96.582 106.576 C 96.518 107.039,96.532 107.042,96.788 106.625 C 96.990 106.294,96.984 106.084,96.763 105.818 C 96.519 105.524,96.560 105.459,96.986 105.459 C 97.421 105.459,97.473 105.550,97.300 106.017 C 97.155 106.411,97.229 106.795,97.553 107.320 C 97.857 107.813,98.013 107.923,98.014 107.645 C 98.014 107.414,98.116 107.163,98.240 107.086 C 98.364 107.010,98.406 107.171,98.335 107.444 C 98.223 107.873,98.327 107.940,99.103 107.940 C 100.083 107.940,100.083 107.941,100.045 110.914 C 100.039 111.389,100.166 111.941,100.327 112.140 C 100.556 112.423,100.552 112.461,100.310 112.316 C 100.140 112.213,100.000 112.234,100.000 112.362 C 100.000 112.788,100.685 113.170,101.596 113.251 C 102.754 113.355,102.710 113.285,102.767 115.152 C 102.794 116.030,102.907 116.936,103.019 117.164 C 103.148 117.428,103.111 117.615,102.916 117.680 C 102.695 117.753,102.725 117.897,103.024 118.196 C 103.598 118.770,104.143 118.754,103.690 118.176 C 103.376 117.775,103.386 117.770,103.824 118.114 C 104.085 118.319,104.532 118.486,104.817 118.486 C 105.412 118.486,105.656 125.622,105.513 138.883 L 105.443 145.384 104.148 145.459 C 103.340 145.505,102.842 145.650,102.823 145.844 C 102.806 146.014,102.778 147.215,102.761 148.511 L 102.730 150.868 101.503 150.868 C 100.070 150.868,100.046 150.894,99.973 152.501 C 99.919 153.670,99.881 153.732,99.203 153.760 C 98.311 153.796,97.526 154.481,97.648 155.115 C 97.699 155.380,97.635 155.531,97.506 155.451 C 97.376 155.371,97.270 155.486,97.270 155.707 C 97.270 155.947,97.385 156.038,97.557 155.932 C 97.724 155.829,97.776 155.863,97.683 156.014 C 97.595 156.157,97.131 156.221,96.652 156.156 C 95.936 156.060,95.778 156.119,95.762 156.493 C 95.751 156.754,95.689 156.816,95.617 156.638 C 95.412 156.128,95.102 156.284,94.926 156.986 C 94.818 157.415,94.874 157.717,95.085 157.851 C 95.333 158.008,95.336 158.058,95.099 158.061 C 94.929 158.063,94.789 158.232,94.789 158.437 C 94.789 158.791,94.520 158.848,92.618 158.892 C 92.311 158.900,92.060 159.002,92.060 159.120 C 92.060 159.238,91.931 159.255,91.773 159.157 C 91.577 159.037,91.555 159.091,91.702 159.329 C 92.270 160.248,91.603 161.710,90.808 161.285 C 90.547 161.145,90.277 161.174,90.062 161.364 C 89.781 161.614,89.779 161.592,90.055 161.228 C 90.285 160.925,90.297 160.794,90.097 160.794 C 89.940 160.794,89.746 160.962,89.668 161.166 C 89.550 161.474,88.884 161.538,85.815 161.538 C 83.405 161.538,82.158 161.625,82.258 161.787 C 82.342 161.923,82.712 162.048,83.079 162.064 C 83.499 162.082,83.586 162.134,83.313 162.206 C 82.901 162.313,82.750 162.839,82.840 163.856 C 82.966 165.285,85.586 169.231,86.409 169.231 C 86.755 169.231,86.118 169.973,85.764 169.983 C 85.610 169.988,85.000 170.474,84.408 171.063 L 83.333 172.135 84.167 172.627 C 84.627 172.898,85.316 173.198,85.698 173.294 C 86.081 173.391,86.670 173.767,87.007 174.130 L 87.620 174.791 87.048 175.231 C 86.734 175.473,86.119 175.674,85.682 175.677 C 85.245 175.680,84.630 175.780,84.317 175.899 C 84.003 176.018,83.300 176.252,82.754 176.419 C 82.208 176.587,81.351 176.898,80.848 177.112 L 79.934 177.500 80.833 177.982 C 81.328 178.247,82.772 178.793,84.042 179.197 C 86.914 180.107,86.914 180.106,83.745 181.650 C 82.251 182.378,81.205 183.029,81.296 183.175 C 81.382 183.315,81.299 183.529,81.111 183.651 C 80.824 183.835,80.829 183.911,81.141 184.119 C 81.472 184.340,81.472 184.397,81.141 184.634 C 80.861 184.835,80.846 184.932,81.079 185.027 C 81.589 185.234,81.431 185.607,80.831 185.615 C 80.295 185.623,80.292 185.634,80.758 185.905 C 81.240 186.184,81.240 186.187,80.758 186.376 C 80.491 186.480,82.143 186.573,84.429 186.583 C 87.456 186.596,88.569 186.679,88.524 186.890 C 88.422 187.363,90.035 187.597,90.460 187.172 C 90.660 186.972,90.761 186.707,90.684 186.583 C 90.608 186.459,90.723 186.426,90.940 186.510 C 91.158 186.593,91.303 186.564,91.263 186.445 C 91.224 186.326,91.303 186.192,91.439 186.149 C 91.576 186.105,91.862 185.911,92.075 185.718 C 92.384 185.438,92.531 185.429,92.794 185.673 C 93.057 185.917,93.089 185.917,92.950 185.670 C 92.812 185.425,94.090 185.360,98.993 185.360 L 105.211 185.360 105.211 184.119 L 105.211 182.878 108.127 182.855 C 112.395 182.821,112.726 182.790,112.853 182.410 C 112.929 182.180,112.861 182.131,112.649 182.262 C 112.444 182.388,112.391 182.360,112.501 182.183 C 112.594 182.032,112.827 181.968,113.018 182.041 C 113.285 182.143,113.347 181.967,113.284 181.291 C 113.213 180.526,113.298 180.360,113.925 180.047 C 114.323 179.849,114.584 179.791,114.506 179.918 C 114.427 180.045,114.599 180.149,114.888 180.149 C 115.177 180.149,115.346 180.038,115.262 179.904 C 115.176 179.763,115.274 179.721,115.492 179.805 C 115.791 179.919,115.867 179.772,115.845 179.119 C 115.789 177.445,115.785 177.451,117.184 177.370 L 118.486 177.295 118.561 175.993 C 118.643 174.582,118.615 174.602,120.409 174.685 C 121.255 174.724,121.340 174.669,121.340 174.088 C 121.340 173.737,121.200 173.447,121.030 173.445 C 120.796 173.442,120.801 173.390,121.049 173.233 C 121.230 173.118,121.342 172.825,121.297 172.582 C 121.228 172.205,121.415 172.136,122.579 172.112 C 123.601 172.091,123.949 171.991,123.968 171.712 C 123.982 171.507,124.011 170.921,124.032 170.409 C 124.068 169.523,124.110 169.479,124.918 169.479 C 126.362 169.479,126.551 169.304,126.551 167.964 C 126.551 166.765,126.561 166.749,127.357 166.723 C 129.310 166.659,129.149 166.887,129.227 164.082 C 129.288 161.887,129.356 161.534,129.723 161.506 C 129.957 161.488,130.428 161.457,130.769 161.436 C 131.110 161.415,131.529 161.311,131.700 161.205 C 132.053 160.986,132.075 161.060,132.048 162.354 C 132.034 163.027,132.114 163.242,132.329 163.113 C 132.538 162.988,132.531 163.054,132.308 163.330 C 131.904 163.829,132.104 163.941,133.478 163.985 C 134.880 164.029,134.812 163.909,134.784 166.310 C 134.771 167.441,134.866 168.533,134.994 168.737 C 135.123 168.940,135.232 168.995,135.236 168.859 C 135.240 168.722,135.343 168.768,135.465 168.960 C 135.665 169.277,136.096 169.398,137.239 169.458 C 137.549 169.475,137.615 169.734,137.558 170.729 C 137.515 171.485,137.581 171.920,137.726 171.831 C 137.858 171.749,137.965 171.777,137.965 171.892 C 137.965 172.008,138.189 172.102,138.462 172.102 C 138.734 172.102,138.958 172.001,138.958 171.877 C 138.958 171.753,139.125 171.790,139.330 171.960 C 139.535 172.130,139.702 172.186,139.702 172.084 C 139.702 171.983,139.898 172.049,140.136 172.232 C 140.375 172.415,140.483 172.462,140.376 172.336 C 139.905 171.785,144.336 171.163,145.513 171.615 C 146.193 171.876,145.733 173.786,144.975 173.846 C 144.050 173.920,143.926 173.972,143.983 174.256 C 144.017 174.426,143.893 174.534,143.708 174.495 C 143.171 174.382,142.580 174.970,142.978 175.222 C 143.230 175.382,143.219 175.428,142.928 175.434 C 142.597 175.441,142.597 175.469,142.928 175.682 C 143.242 175.885,143.244 175.924,142.943 175.927 C 142.685 175.929,142.719 176.035,143.067 176.306 C 143.389 176.558,143.427 176.660,143.182 176.616 C 142.645 176.520,142.568 177.584,143.059 178.333 C 143.288 178.683,143.342 178.886,143.178 178.785 C 142.978 178.662,142.912 178.754,142.975 179.065 C 143.034 179.353,143.240 179.499,143.520 179.450 C 143.789 179.403,143.905 179.478,143.807 179.636 C 143.708 179.796,143.886 179.901,144.260 179.901 C 144.600 179.901,145.040 180.063,145.238 180.261 C 145.436 180.459,145.648 180.572,145.709 180.511 C 145.770 180.450,145.768 180.751,145.705 181.179 C 145.626 181.717,145.677 181.903,145.872 181.782 C 146.027 181.687,146.154 181.725,146.154 181.866 C 146.154 182.081,146.502 182.234,147.643 182.518 C 147.711 182.535,147.945 182.629,148.164 182.726 C 148.382 182.823,148.662 182.884,148.784 182.861 C 149.637 182.702,150.540 182.940,150.827 183.401 C 151.006 183.688,151.033 183.849,150.887 183.758 C 150.723 183.657,150.620 183.839,150.620 184.229 C 150.620 184.578,150.739 184.864,150.883 184.864 C 151.028 184.864,151.077 184.975,150.993 185.112 C 150.908 185.248,151.076 185.360,151.365 185.360 C 151.713 185.360,151.831 185.255,151.715 185.050 C 151.575 184.801,151.607 184.801,151.874 185.050 C 152.058 185.220,152.459 185.360,152.766 185.360 C 153.264 185.360,153.332 185.500,153.399 186.663 L 153.474 187.965 155.991 188.036 C 158.743 188.113,158.797 188.147,158.806 189.862 C 158.810 190.760,159.080 190.819,163.172 190.819 L 166.749 190.819 166.749 191.911 C 166.749 193.595,165.194 193.512,196.447 193.493 C 213.900 193.481,222.744 193.403,219.596 193.287 C 215.945 193.152,214.258 192.992,213.641 192.723 C 212.852 192.380,212.832 192.346,213.400 192.324 C 213.908 192.304,213.953 192.252,213.648 192.037 C 213.412 191.871,213.375 191.732,213.545 191.661 C 213.728 191.585,213.670 191.130,213.367 190.253 C 212.714 188.362,212.732 185.448,213.398 185.236 C 213.670 185.150,214.041 184.931,214.222 184.750 C 214.403 184.569,215.130 184.128,215.836 183.769 C 217.285 183.035,217.435 182.642,216.433 182.198 C 216.054 182.031,215.324 181.497,214.810 181.012 L 213.875 180.130 214.382 179.419 C 214.660 179.028,214.888 178.585,214.888 178.436 C 214.888 178.286,215.044 178.164,215.234 178.164 C 215.771 178.164,215.938 177.425,215.442 177.241 C 215.206 177.153,214.488 176.571,213.846 175.948 L 212.680 174.814 213.037 173.821 C 213.297 173.099,213.386 171.748,213.365 168.859 C 213.316 162.176,213.321 162.226,212.771 162.023 C 212.377 161.878,212.450 161.821,213.151 161.729 C 213.629 161.666,206.538 161.599,197.395 161.580 C 188.251 161.561,180.574 161.544,180.335 161.542 C 180.020 161.539,179.901 161.337,179.901 160.806 C 179.901 159.800,179.416 158.821,178.935 158.857 C 177.359 158.976,177.215 158.871,177.325 157.691 C 177.401 156.876,177.344 156.590,177.114 156.636 C 176.941 156.671,176.818 156.586,176.842 156.446 C 176.866 156.306,176.454 156.192,175.927 156.192 C 174.773 156.192,174.607 156.053,174.607 155.087 C 174.607 154.601,174.482 154.342,174.246 154.342 C 173.973 154.342,173.952 154.262,174.159 154.012 C 174.363 153.767,174.354 153.670,174.128 153.639 C 171.934 153.340,171.991 153.379,171.911 152.146 L 171.836 150.993 170.533 150.918 L 169.231 150.843 169.201 148.684 C 169.185 147.497,169.186 146.439,169.204 146.333 C 169.221 146.227,169.067 146.076,168.862 145.997 C 168.657 145.918,168.542 145.768,168.607 145.663 C 168.672 145.559,168.308 145.486,167.799 145.503 L 166.873 145.533 166.811 143.424 C 166.716 140.206,166.713 140.199,165.256 140.199 L 164.020 140.199 164.020 124.069 L 164.020 107.940 165.246 107.940 C 165.920 107.940,166.541 107.829,166.625 107.692 C 166.710 107.556,166.638 107.444,166.466 107.444 C 166.223 107.444,166.220 107.378,166.452 107.146 C 166.654 106.944,166.749 105.757,166.749 103.424 L 166.749 100.000 167.990 100.000 L 169.231 100.000 169.231 98.648 L 169.231 97.296 170.533 97.221 L 171.836 97.146 171.967 95.850 C 172.038 95.137,172.240 94.411,172.416 94.237 C 172.674 93.980,172.703 94.002,172.569 94.355 C 172.473 94.606,172.519 94.789,172.678 94.789 C 172.829 94.789,172.955 94.594,172.957 94.355 C 172.960 94.022,173.010 93.998,173.170 94.252 C 173.328 94.501,173.416 94.447,173.524 94.033 C 173.630 93.629,173.785 93.529,174.109 93.653 C 174.352 93.747,174.471 93.743,174.374 93.646 C 174.277 93.549,174.322 93.320,174.474 93.137 C 174.627 92.953,174.645 92.804,174.513 92.804 C 174.184 92.804,174.214 92.149,174.545 92.114 C 174.693 92.098,175.276 92.038,175.841 91.980 C 177.117 91.849,177.419 91.669,177.419 91.038 C 177.419 90.740,177.310 90.609,177.146 90.710 C 176.953 90.830,176.946 90.744,177.122 90.415 C 177.259 90.159,177.378 89.839,177.387 89.702 C 177.396 89.566,177.905 89.394,178.517 89.320 C 179.903 89.153,180.014 89.041,180.025 87.798 L 180.034 86.794 181.146 86.702 C 181.758 86.652,183.179 86.614,184.305 86.618 C 186.575 86.627,187.237 86.133,185.050 86.063 C 183.999 86.029,183.925 86.002,184.665 85.924 C 185.292 85.858,185.631 85.679,185.732 85.361 C 185.813 85.105,186.126 84.847,186.426 84.789 C 186.752 84.726,186.598 84.669,186.046 84.649 L 185.119 84.615 185.572 83.870 C 186.139 82.938,188.040 80.893,188.340 80.893 C 188.870 80.893,189.791 79.604,189.955 78.634 C 190.052 78.059,190.273 77.253,190.446 76.842 C 191.068 75.363,190.260 73.945,188.796 73.945 C 187.712 73.945,187.393 73.542,187.831 72.724 C 188.011 72.388,188.352 72.208,188.812 72.208 C 189.470 72.208,189.538 72.112,189.845 70.727 L 190.173 69.246 191.778 68.742 C 192.661 68.465,193.408 68.266,193.439 68.300 C 193.830 68.738,194.339 71.353,194.460 73.542 C 194.593 75.964,194.700 76.464,195.334 77.615 L 196.056 78.928 195.243 79.973 C 194.796 80.547,194.323 81.092,194.192 81.184 C 194.047 81.286,194.134 81.943,194.417 82.878 C 194.814 84.189,194.829 84.438,194.524 84.631 C 194.277 84.788,194.263 84.857,194.479 84.860 C 194.650 84.862,194.789 85.079,194.789 85.343 C 194.789 85.676,194.998 85.855,195.471 85.926 L 196.154 86.030 195.471 86.067 C 195.096 86.087,194.789 86.216,194.789 86.352 C 194.789 86.514,198.387 86.600,205.087 86.600 C 214.323 86.600,216.631 86.466,214.950 86.027 C 214.537 85.919,214.537 85.912,214.950 85.885 C 215.292 85.862,215.385 85.629,215.385 84.798 C 215.385 83.535,216.027 81.683,216.996 80.150 C 217.849 78.800,217.848 78.864,217.066 77.171 C 216.018 74.902,215.790 73.572,216.311 72.764 C 217.182 71.413,217.703 70.968,218.413 70.968 C 218.938 70.968,219.180 70.808,219.355 70.347 C 219.670 69.519,220.377 69.593,220.541 70.471 C 220.579 70.676,220.714 71.067,220.841 71.340 C 221.211 72.135,222.084 74.985,222.084 75.397 C 222.084 75.604,222.297 76.395,222.556 77.155 C 223.355 79.495,223.412 81.143,222.760 83.063 C 222.135 84.905,222.141 85.767,222.782 85.936 C 223.162 86.036,223.161 86.049,222.767 86.075 C 222.528 86.091,222.333 86.216,222.333 86.352 C 222.333 86.513,225.352 86.600,230.893 86.600 C 238.508 86.600,241.223 86.405,238.772 86.034 L 238.089 85.930 238.772 85.893 C 239.422 85.858,239.454 85.797,239.454 84.592 C 239.454 83.743,239.611 83.107,239.930 82.659 C 240.559 81.776,240.971 79.579,241.342 75.124 L 241.482 73.449 242.906 73.449 C 244.441 73.449,244.997 73.818,245.598 75.233 C 245.852 75.832,245.825 75.910,245.335 76.005 C 244.804 76.108,244.803 76.112,245.313 76.145 C 245.718 76.171,245.931 76.476,246.248 77.482 C 246.473 78.199,246.811 79.081,246.999 79.443 C 247.275 79.976,247.347 81.241,247.138 81.886 C 247.079 82.067,246.996 82.886,246.944 83.809 C 246.911 84.385,246.774 84.621,246.464 84.635 C 246.205 84.647,246.155 84.705,246.340 84.780 C 246.511 84.849,246.650 85.111,246.650 85.363 C 246.650 85.641,246.870 85.864,247.208 85.929 L 247.767 86.037 247.208 86.070 C 246.901 86.089,246.650 86.216,246.650 86.352 C 246.650 86.514,249.977 86.599,256.141 86.597 C 262.361 86.594,265.504 86.510,265.261 86.352 C 264.952 86.153,264.973 86.111,265.385 86.104 C 265.779 86.098,265.808 86.050,265.525 85.871 C 265.229 85.684,265.224 85.579,265.493 85.255 C 265.674 85.036,265.706 84.864,265.565 84.864 C 265.408 84.864,265.298 83.646,265.276 81.661 C 265.256 79.900,265.132 78.086,265.002 77.630 C 264.871 77.175,264.764 75.741,264.764 74.443 C 264.764 73.146,264.550 70.912,264.289 69.479 C 264.015 67.974,263.739 64.934,263.637 62.283 C 263.540 59.758,263.437 57.246,263.410 56.700 C 263.382 56.154,263.481 55.623,263.628 55.521 C 263.791 55.408,263.653 55.263,263.275 55.150 C 262.733 54.989,262.796 54.947,263.772 54.816 C 264.975 54.653,171.957 54.609,170.409 54.771 M193.797 55.583 C 193.797 55.900,192.550 55.900,192.060 55.583 C 191.787 55.407,191.970 55.342,192.742 55.339 C 193.322 55.337,193.797 55.447,193.797 55.583 M246.458 65.199 C 247.729 66.647,247.170 68.967,245.431 69.460 C 244.621 69.690,244.427 69.830,244.686 69.997 C 245.092 70.258,244.605 70.712,243.921 70.712 C 243.226 70.712,242.754 70.275,243.245 70.086 C 243.778 69.882,243.805 69.479,243.286 69.479 C 243.073 69.479,242.968 69.367,243.052 69.231 C 243.136 69.094,243.056 68.983,242.873 68.983 C 241.456 68.983,243.278 65.684,245.037 65.065 C 246.048 64.710,246.027 64.708,246.458 65.199 M334.988 78.907 C 337.376 79.011,339.644 79.109,340.027 79.126 C 341.269 79.180,340.465 79.653,339.129 79.654 L 337.841 79.656 338.586 80.034 C 338.995 80.241,339.553 80.675,339.826 80.998 C 340.444 81.728,341.915 82.628,342.494 82.629 C 342.733 82.630,342.928 82.724,342.928 82.839 C 342.928 82.953,343.210 83.176,343.555 83.333 C 344.991 83.987,343.946 85.471,341.501 86.252 C 340.785 86.481,340.199 86.750,340.199 86.850 C 340.199 87.174,341.965 89.058,342.396 89.195 C 342.913 89.359,343.426 91.418,343.420 93.308 C 343.416 94.659,343.423 94.671,344.971 96.081 L 346.526 97.498 345.205 98.733 C 344.124 99.745,343.899 100.095,343.965 100.666 C 344.018 101.130,343.878 101.508,343.548 101.791 C 343.059 102.210,343.062 102.217,343.734 102.225 C 344.110 102.230,344.417 102.345,344.417 102.481 C 344.417 102.778,357.536 102.788,359.429 102.493 C 360.112 102.387,360.522 102.285,360.342 102.266 C 360.098 102.242,360.120 102.128,360.427 101.820 C 360.714 101.533,360.795 101.181,360.691 100.663 C 360.411 99.262,360.959 99.007,364.244 99.013 C 366.718 99.018,367.209 99.087,367.742 99.504 C 368.083 99.771,368.558 99.991,368.797 99.994 C 369.187 99.999,369.180 100.050,368.725 100.505 C 368.144 101.087,368.276 101.481,369.059 101.506 C 369.583 101.523,369.585 101.531,369.107 101.737 C 368.772 101.881,368.732 101.957,368.983 101.971 C 369.282 101.989,369.290 102.034,369.024 102.203 C 368.771 102.363,368.811 102.444,369.195 102.544 C 369.472 102.616,369.764 102.610,369.844 102.530 C 369.924 102.450,370.139 102.362,370.323 102.335 C 370.837 102.260,371.970 101.456,371.845 101.255 C 371.784 101.156,371.897 101.075,372.095 101.075 C 372.581 101.075,372.563 101.120,371.774 101.866 L 371.092 102.511 371.774 102.208 C 372.150 102.042,372.457 101.812,372.457 101.697 C 372.457 101.583,372.565 101.489,372.697 101.489 C 372.829 101.489,372.879 101.642,372.807 101.829 C 372.735 102.016,372.850 102.236,373.063 102.318 C 373.275 102.399,373.449 102.358,373.449 102.225 C 373.449 102.093,373.589 102.013,373.759 102.047 C 373.930 102.081,374.042 101.970,374.007 101.799 C 373.973 101.628,374.134 101.489,374.365 101.489 C 374.731 101.489,374.724 101.444,374.306 101.139 C 374.042 100.946,373.742 100.841,373.638 100.905 C 373.534 100.969,373.449 100.867,373.449 100.677 C 373.449 100.485,373.683 100.341,373.980 100.353 C 374.712 100.380,374.813 99.539,374.112 99.256 C 373.604 99.051,373.601 99.038,374.069 99.019 C 374.438 99.005,374.481 98.946,374.235 98.790 C 373.966 98.620,373.976 98.553,374.283 98.435 C 374.600 98.313,374.654 97.761,374.614 95.090 C 374.567 92.005,374.584 91.894,375.062 92.006 L 375.558 92.122 375.062 91.726 C 374.757 91.483,374.691 91.328,374.891 91.323 C 375.069 91.319,375.146 91.203,375.062 91.067 C 374.803 90.648,375.352 90.792,375.714 91.239 C 376.007 91.600,376.003 91.632,375.682 91.468 C 375.478 91.364,375.527 91.454,375.792 91.669 C 376.324 92.101,377.041 92.202,376.799 91.811 C 376.715 91.675,376.727 91.431,376.827 91.270 C 376.952 91.068,377.067 91.126,377.196 91.456 C 377.299 91.720,377.322 90.763,377.246 89.330 C 377.090 86.392,376.923 85.737,376.923 88.063 C 376.923 89.071,376.833 89.552,376.665 89.448 C 376.513 89.354,376.431 88.515,376.466 87.426 C 376.513 85.951,376.584 85.645,376.811 85.954 C 376.968 86.169,377.157 86.284,377.231 86.210 C 377.455 85.986,377.132 85.107,376.882 85.261 C 376.749 85.343,376.668 84.945,376.693 84.328 C 376.717 83.735,376.647 83.037,376.539 82.776 C 376.420 82.488,376.436 82.359,376.580 82.447 C 376.710 82.528,376.817 82.379,376.817 82.116 C 376.817 81.853,376.729 81.638,376.622 81.638 C 376.515 81.638,376.427 81.414,376.427 81.141 C 376.427 80.868,376.538 80.645,376.675 80.645 C 377.119 80.645,376.936 80.149,376.489 80.141 C 376.075 80.133,376.075 80.117,376.489 79.803 C 377.698 78.885,377.251 78.843,367.184 78.914 C 361.827 78.952,351.414 78.923,344.045 78.850 C 336.493 78.775,332.540 78.800,334.988 78.907 M364.141 79.887 C 363.866 79.998,362.694 80.007,361.535 79.907 L 359.429 79.724 362.035 79.704 C 363.604 79.692,364.442 79.765,364.141 79.887 M362.159 81.141 C 362.523 81.298,362.326 81.355,361.414 81.355 C 360.503 81.355,360.305 81.298,360.670 81.141 C 360.943 81.024,361.278 80.928,361.414 80.928 C 361.551 80.928,361.886 81.024,362.159 81.141 M364.356 84.926 C 364.971 85.560,365.738 86.785,365.603 86.919 C 365.527 86.996,365.357 87.539,365.225 88.126 C 365.093 88.713,364.864 89.268,364.717 89.360 C 364.569 89.451,364.394 90.095,364.327 90.792 L 364.205 92.060 362.810 92.053 L 361.414 92.047 360.936 90.999 C 360.493 90.029,359.425 88.835,359.000 88.834 C 358.845 88.834,357.816 87.043,357.816 86.772 C 357.816 85.417,363.324 83.861,364.356 84.926 M375.858 87.903 C 375.798 88.210,375.750 87.959,375.750 87.345 C 375.750 86.731,375.798 86.480,375.858 86.787 C 375.917 87.094,375.917 87.596,375.858 87.903 M180.365 87.159 C 180.628 87.494,180.639 87.673,180.415 87.943 C 180.191 88.213,180.199 88.336,180.447 88.479 C 180.624 88.581,180.684 88.572,180.581 88.458 C 180.477 88.344,180.645 87.973,180.953 87.633 C 181.261 87.294,181.369 87.100,181.193 87.202 C 181.016 87.304,180.681 87.238,180.448 87.056 C 180.067 86.757,180.059 86.768,180.365 87.159 M377.103 90.323 C 377.082 90.596,376.978 90.819,376.870 90.819 C 376.763 90.819,376.675 90.596,376.675 90.323 C 376.675 90.050,376.780 89.826,376.908 89.826 C 377.036 89.826,377.124 90.050,377.103 90.323 M364.968 92.990 C 366.138 94.338,366.170 95.143,365.098 96.215 C 364.492 96.821,360.511 97.072,360.174 96.526 C 360.089 96.390,359.824 96.278,359.585 96.278 C 358.678 96.278,357.709 94.904,358.155 94.250 C 359.420 92.393,363.755 91.592,364.968 92.990 M371.295 101.261 C 371.099 101.457,370.971 101.447,370.833 101.224 C 370.711 101.025,370.745 100.979,370.929 101.093 C 371.281 101.310,371.306 100.953,370.969 100.545 C 370.833 100.381,370.912 100.413,371.144 100.618 C 371.450 100.887,371.492 101.064,371.295 101.261 M93.337 104.454 C 93.392 104.618,93.518 104.743,93.617 104.733 C 93.913 104.703,93.856 104.362,93.536 104.256 C 93.372 104.201,93.283 104.290,93.337 104.454 M346.650 119.086 C 347.046 119.199,347.244 119.415,347.198 119.682 C 347.152 119.943,347.291 120.102,347.570 120.107 C 347.982 120.114,347.979 120.142,347.533 120.479 C 347.247 120.696,347.182 120.844,347.374 120.844 C 347.551 120.844,347.635 121.003,347.560 121.198 C 347.485 121.392,347.646 122.146,347.918 122.873 C 348.209 123.650,348.449 125.010,348.501 126.179 C 348.658 129.703,348.912 131.596,349.497 133.623 C 349.812 134.715,350.199 136.176,350.358 136.870 C 350.656 138.179,350.687 143.424,350.396 143.424 C 350.305 143.424,350.230 143.648,350.230 143.921 C 350.230 144.194,350.346 144.419,350.487 144.421 C 350.629 144.423,350.601 144.516,350.425 144.627 C 350.211 144.763,350.454 144.934,351.170 145.151 C 352.463 145.542,364.525 145.441,364.823 145.037 C 364.934 144.885,365.006 144.912,365.009 145.108 C 365.011 145.350,365.132 145.363,365.509 145.161 C 365.872 144.967,366.005 144.973,366.005 145.183 C 366.005 145.385,366.121 145.374,366.396 145.146 C 366.637 144.945,366.851 144.913,366.954 145.061 C 367.046 145.194,367.419 145.298,367.783 145.294 C 368.147 145.289,368.399 145.240,368.343 145.184 C 368.287 145.128,368.464 144.926,368.736 144.735 C 369.271 144.361,369.431 143.778,368.921 144.066 C 368.672 144.207,368.672 144.175,368.921 143.907 C 369.156 143.653,369.224 141.698,369.201 135.744 C 369.185 131.439,369.087 128.251,368.983 128.660 C 368.796 129.394,368.793 129.395,368.764 128.749 C 368.735 128.112,367.994 127.503,367.986 128.110 C 367.984 128.301,367.894 128.275,367.742 128.040 C 367.528 127.709,367.499 127.709,367.480 128.040 C 367.466 128.290,367.389 128.250,367.246 127.916 L 367.032 127.419 366.990 127.916 C 366.954 128.337,366.918 128.319,366.749 127.792 L 366.551 127.171 366.526 127.773 L 366.501 128.374 365.866 127.778 C 365.395 127.335,365.241 126.955,365.270 126.308 C 365.291 125.827,365.281 124.988,365.247 124.442 L 365.186 123.449 365.012 124.566 C 364.848 125.622,364.836 125.589,364.784 123.945 C 364.745 122.720,364.667 122.355,364.516 122.705 C 364.339 123.118,364.300 123.063,364.285 122.378 C 364.276 121.926,364.391 121.326,364.541 121.046 C 364.740 120.673,364.740 120.582,364.539 120.705 C 364.388 120.799,364.197 120.701,364.116 120.487 C 364.013 120.219,363.611 120.090,362.815 120.070 C 361.776 120.043,361.736 120.022,362.407 119.851 C 363.114 119.671,363.100 119.660,362.123 119.632 C 361.459 119.613,361.045 119.471,360.952 119.231 C 360.830 118.911,359.775 118.862,353.420 118.883 C 349.355 118.897,346.309 118.988,346.650 119.086 M365.012 119.216 C 365.012 119.413,365.123 119.642,365.258 119.725 C 365.403 119.815,365.437 119.704,365.340 119.452 C 365.209 119.111,365.283 119.055,365.715 119.168 C 366.011 119.245,366.315 119.207,366.392 119.083 C 366.468 118.960,366.189 118.859,365.771 118.859 C 365.276 118.859,365.012 118.983,365.012 119.216 M269.113 121.577 C 269.033 121.708,268.817 121.757,268.634 121.687 C 268.206 121.523,267.890 122.332,268.245 122.684 C 268.440 122.878,268.472 122.839,268.360 122.544 C 268.274 122.319,268.324 122.061,268.469 121.971 C 268.615 121.881,268.734 121.947,268.734 122.117 C 268.734 122.292,268.880 122.228,269.069 121.970 C 269.253 121.718,269.532 121.592,269.689 121.689 C 269.847 121.786,269.975 121.747,269.975 121.603 C 269.975 121.275,269.312 121.256,269.113 121.577 M257.556 124.457 C 257.405 124.639,257.302 125.045,257.328 125.359 C 257.450 126.849,257.546 126.799,254.576 126.799 C 251.953 126.799,250.736 127.256,253.178 127.324 C 253.750 127.340,254.003 127.408,253.740 127.475 C 252.719 127.735,252.605 128.108,252.824 130.480 C 252.970 132.061,253.157 132.845,253.459 133.147 C 254.623 134.311,254.520 134.876,252.861 136.430 L 251.719 137.500 252.569 139.283 C 253.922 142.122,253.943 142.249,254.101 148.635 C 254.205 152.801,254.360 155.027,254.594 155.707 C 254.841 156.421,254.959 158.476,255.017 163.027 C 255.093 168.968,255.131 169.423,255.647 170.471 C 256.152 171.498,256.207 172.052,256.324 177.315 C 256.457 183.271,256.803 184.855,257.976 184.862 C 258.469 184.865,258.571 185.613,258.181 186.366 C 257.410 187.857,257.343 188.244,257.725 188.981 C 257.928 189.371,258.115 190.000,258.141 190.378 C 258.167 190.756,258.286 191.066,258.405 191.067 C 258.524 191.067,258.499 191.215,258.349 191.395 C 258.150 191.635,258.155 191.803,258.370 192.018 C 259.136 192.784,258.049 193.061,253.457 193.271 C 249.830 193.436,251.408 193.480,261.989 193.511 C 270.534 193.536,275.135 193.461,275.451 193.292 C 275.898 193.052,275.931 192.730,275.931 188.562 C 275.931 185.865,276.022 184.146,276.162 184.233 C 276.289 184.311,276.463 184.262,276.548 184.123 C 276.787 183.737,277.089 183.823,277.089 184.277 C 277.089 184.501,276.881 184.738,276.628 184.804 C 276.269 184.898,276.230 184.999,276.452 185.266 C 276.665 185.523,276.664 185.608,276.448 185.608 C 276.245 185.608,276.233 185.743,276.409 186.072 C 276.546 186.327,276.587 186.606,276.501 186.692 C 276.415 186.778,276.474 186.849,276.634 186.849 C 276.793 186.849,276.925 186.709,276.927 186.538 C 276.930 186.306,276.983 186.311,277.140 186.559 C 277.309 186.826,277.380 186.814,277.501 186.497 C 277.689 186.008,278.066 185.989,278.247 186.458 C 278.321 186.653,278.194 186.960,277.963 187.141 C 277.591 187.432,277.580 187.422,277.866 187.057 C 278.055 186.814,278.091 186.585,277.954 186.500 C 277.825 186.420,277.653 186.529,277.571 186.742 C 277.490 186.954,277.318 187.063,277.190 186.984 C 277.062 186.905,276.892 186.946,276.812 187.076 C 276.632 187.366,276.885 187.532,277.752 187.689 C 278.120 187.755,278.362 187.713,278.289 187.595 C 278.216 187.476,278.269 187.309,278.408 187.223 C 278.547 187.138,278.660 187.242,278.660 187.454 C 278.660 187.799,279.843 187.841,289.454 187.841 C 295.901 187.841,300.248 187.749,300.248 187.612 C 300.248 187.478,296.405 187.326,291.005 187.248 C 281.050 187.103,278.759 186.968,278.585 186.517 C 278.505 186.309,279.035 186.247,280.490 186.295 C 281.879 186.340,282.384 186.286,282.113 186.119 C 281.896 185.986,280.814 185.858,279.708 185.834 C 278.170 185.801,277.662 185.703,277.552 185.416 C 277.433 185.106,277.473 185.096,277.786 185.355 C 278.065 185.587,278.164 185.592,278.164 185.376 C 278.164 185.214,278.264 185.144,278.386 185.220 C 278.508 185.295,278.672 185.190,278.750 184.986 C 278.829 184.782,279.119 184.615,279.397 184.615 C 279.952 184.615,280.080 184.233,279.591 184.035 C 279.372 183.946,279.360 183.848,279.550 183.704 C 280.159 183.241,279.942 180.833,279.175 179.541 L 278.446 178.313 278.287 179.045 C 277.931 180.684,277.748 180.834,277.543 179.653 C 277.388 178.756,277.312 178.634,277.154 179.032 C 277.004 179.412,276.950 179.296,276.923 178.536 C 276.895 177.746,276.845 177.645,276.675 178.040 C 276.525 178.388,276.441 177.981,276.391 176.675 C 276.351 175.602,276.261 176.601,276.179 179.032 C 276.091 181.641,276.005 177.807,275.954 168.983 C 275.909 161.135,275.787 154.380,275.682 153.970 L 275.493 153.226 275.464 154.032 C 275.428 155.009,274.945 155.119,274.921 154.156 C 274.906 153.589,274.872 153.554,274.717 153.949 C 274.497 154.510,273.697 154.704,273.697 154.196 C 273.697 154.004,273.607 153.846,273.497 153.846 C 273.306 153.846,272.457 152.143,272.457 151.760 C 272.457 151.660,272.304 151.425,272.118 151.239 C 271.398 150.519,271.423 146.444,272.154 145.308 C 272.772 144.349,273.157 142.309,272.752 142.142 C 272.023 141.843,269.914 137.336,270.355 137.021 C 270.488 136.926,270.911 136.385,271.295 135.819 L 271.994 134.789 271.357 133.532 C 270.649 132.136,270.508 130.094,270.986 128.195 C 271.262 127.097,270.511 125.103,269.951 125.449 C 269.828 125.525,269.724 125.441,269.721 125.263 C 269.698 124.138,258.439 123.392,257.556 124.457 M364.846 129.111 C 365.065 129.267,365.060 129.349,364.826 129.444 C 364.656 129.513,364.514 129.700,364.512 129.859 C 364.501 130.711,364.051 130.885,363.413 130.285 C 362.552 129.477,362.593 128.674,363.524 128.124 C 363.933 127.882,364.286 127.569,364.308 127.428 C 364.330 127.287,364.394 127.561,364.452 128.038 C 364.509 128.514,364.687 128.997,364.846 129.111 M90.812 159.492 C 90.603 159.534,90.302 159.777,90.143 160.032 C 89.782 160.609,90.629 160.950,91.078 160.408 C 91.450 159.961,91.285 159.396,90.812 159.492 M198.393 161.968 C 197.714 162.141,197.218 162.840,197.602 163.084 C 197.775 163.194,197.642 163.281,197.270 163.301 C 196.694 163.332,196.702 163.347,197.395 163.524 C 197.804 163.628,197.944 163.726,197.705 163.742 C 197.319 163.768,197.270 164.082,197.270 166.576 C 197.270 170.102,197.401 169.975,193.775 169.975 C 191.686 169.975,190.677 170.079,190.165 170.346 C 189.263 170.816,188.243 170.818,186.702 170.350 C 186.032 170.147,184.737 169.979,183.824 169.978 C 182.299 169.975,181.584 169.700,182.005 169.276 C 182.098 169.183,183.086 169.032,184.201 168.942 C 185.316 168.851,187.023 168.697,187.994 168.601 C 189.077 168.493,189.935 168.523,190.213 168.678 C 190.806 169.010,191.664 168.461,192.184 167.418 C 192.639 166.507,192.246 164.020,191.648 164.020 C 191.465 164.020,191.315 163.908,191.315 163.772 C 191.315 163.635,191.538 163.524,191.811 163.524 C 192.084 163.524,192.308 163.412,192.308 163.275 C 192.308 163.139,191.945 163.026,191.501 163.023 C 190.889 163.021,190.785 162.962,191.067 162.779 C 191.272 162.647,191.709 162.537,192.039 162.535 C 193.117 162.528,192.302 162.165,190.862 162.011 C 190.087 161.928,191.576 161.856,194.169 161.852 C 196.762 161.848,198.663 161.900,198.393 161.968 M139.950 173.532 C 139.950 173.896,140.069 174.194,140.213 174.194 C 140.358 174.194,140.407 174.305,140.323 174.442 C 140.238 174.578,140.299 174.690,140.459 174.690 C 140.635 174.690,140.680 174.521,140.573 174.256 C 140.477 174.017,140.375 173.685,140.347 173.518 C 140.240 172.888,139.950 172.898,139.950 173.532 M302.262 185.422 C 302.244 185.692,302.023 185.863,301.675 185.874 C 301.144 185.890,301.141 185.901,301.613 186.093 C 302.223 186.342,302.568 186.063,302.409 185.448 C 302.304 185.038,302.288 185.036,302.262 185.422 M92.062 185.977 C 91.893 186.181,91.653 186.284,91.529 186.207 C 91.405 186.130,91.319 186.159,91.338 186.272 C 91.420 186.742,91.301 187.117,91.108 186.998 C 90.995 186.928,90.902 187.031,90.902 187.228 C 90.902 187.473,90.993 187.510,91.193 187.343 C 91.354 187.210,91.564 187.180,91.661 187.277 C 91.758 187.374,91.755 187.234,91.654 186.965 C 91.485 186.514,91.508 186.505,91.951 186.849 C 92.396 187.193,92.406 187.188,92.091 186.787 C 91.790 186.402,91.861 186.259,92.328 186.309 C 92.408 186.318,92.473 186.163,92.473 185.966 C 92.473 185.520,92.441 185.520,92.062 185.977 M301.252 186.711 C 301.078 186.920,300.861 187.045,300.769 186.988 C 300.678 186.931,300.603 187.108,300.603 187.380 C 300.603 187.844,300.622 187.847,300.922 187.438 C 301.097 187.198,301.241 187.135,301.241 187.297 C 301.241 187.728,301.727 187.659,301.902 187.204 C 302.124 186.624,301.633 186.252,301.252 186.711 M194.618 187.241 C 195.326 187.456,196.184 187.746,196.524 187.883 L 197.142 188.133 196.285 188.494 C 195.166 188.964,192.077 189.004,191.361 188.557 C 189.827 187.599,192.392 186.563,194.618 187.241", fill: "white" })));
        
        React.createElement("path", { 
                d: "M25.476 78.825 C 25.385 78.916,25.310 80.687,25.310 82.761 L 25.310 86.531 24.007 86.752 L 22.705 86.973 22.636 90.881 L 22.568 94.789 21.334 94.789 L 20.099 94.789 20.099 98.759 L 20.099 102.730 47.995 102.730 L 75.890 102.730 75.880 101.551 C 75.863 99.570,75.814 99.639,77.432 99.332 C 78.258 99.175,79.291 98.778,79.728 98.450 C 80.164 98.123,80.744 97.767,81.017 97.661 C 81.716 97.389,79.837 96.812,77.577 96.605 C 75.558 96.420,74.980 95.671,75.340 93.703 C 75.443 93.140,75.553 91.787,75.584 90.695 C 75.616 89.603,75.718 88.240,75.811 87.665 C 75.981 86.618,75.559 85.112,75.095 85.112 C 74.974 85.112,74.956 84.475,75.054 83.685 C 75.152 82.900,75.253 81.644,75.280 80.893 C 75.306 80.143,75.406 79.403,75.501 79.249 C 75.610 79.072,75.388 78.911,74.903 78.814 C 73.859 78.606,25.685 78.616,25.476 78.825 M377.314 84.098 C 377.150 84.382,377.479 85.856,377.707 85.856 C 378.080 85.856,379.156 84.672,379.156 84.262 C 379.156 83.893,377.517 83.747,377.314 84.098 M173.733 93.968 C 173.285 94.447,173.448 94.523,174.146 94.159 C 174.533 93.957,174.613 93.820,174.393 93.736 C 174.213 93.667,173.917 93.771,173.733 93.968 M89.950 102.978 L 89.454 103.191 89.950 103.233 C 90.372 103.269,90.353 103.305,89.826 103.474 C 89.485 103.583,89.318 103.692,89.454 103.716 C 89.591 103.740,89.875 103.794,90.087 103.836 C 90.348 103.887,90.471 103.722,90.471 103.321 C 90.471 102.996,90.466 102.737,90.459 102.747 C 90.452 102.757,90.223 102.860,89.950 102.978 M90.942 103.706 C 90.986 104.230,90.910 104.391,90.663 104.296 C 90.463 104.219,90.323 104.327,90.323 104.556 C 90.323 104.781,90.464 104.893,90.655 104.820 C 90.838 104.749,91.131 104.865,91.306 105.076 C 91.481 105.286,91.838 105.459,92.099 105.459 C 92.714 105.459,92.303 104.577,91.580 104.348 C 91.271 104.250,91.133 104.024,91.192 103.716 C 91.243 103.452,91.194 103.180,91.082 103.111 C 90.971 103.043,90.908 103.310,90.942 103.706 M95.037 105.601 C 95.037 105.679,95.206 105.911,95.412 106.117 C 95.618 106.323,95.731 106.582,95.663 106.692 C 95.595 106.802,95.727 107.044,95.956 107.230 C 96.243 107.463,96.315 107.471,96.187 107.258 C 96.084 107.087,96.119 106.948,96.263 106.948 C 96.408 106.948,96.526 107.066,96.526 107.211 C 96.526 107.355,96.657 107.393,96.816 107.294 C 97.009 107.175,97.056 107.248,96.955 107.511 C 96.846 107.795,96.938 107.897,97.280 107.872 C 97.812 107.831,97.384 106.857,96.806 106.793 C 96.652 106.776,96.401 106.748,96.249 106.731 C 96.097 106.714,96.028 106.485,96.097 106.222 C 96.184 105.887,96.119 105.784,95.878 105.876 C 95.688 105.949,95.533 105.885,95.533 105.734 C 95.533 105.583,95.422 105.459,95.285 105.459 C 95.149 105.459,95.037 105.523,95.037 105.601 M44.222 108.395 C 44.244 108.486,44.175 109.035,44.069 109.615 L 43.877 110.670 39.122 110.709 C 36.507 110.731,34.172 110.732,33.933 110.712 C 33.694 110.692,33.488 110.758,33.476 110.859 C 33.463 110.960,33.417 111.525,33.374 112.116 C 33.273 113.507,33.798 113.378,28.112 113.409 L 23.122 113.437 22.823 114.158 C 22.659 114.554,22.595 115.160,22.681 115.504 C 22.835 116.115,22.809 116.129,21.467 116.129 L 20.096 116.129 20.101 151.626 C 20.104 171.813,20.199 187.064,20.323 186.988 C 20.442 186.914,20.524 187.044,20.505 187.277 C 20.446 188.013,21.205 188.030,55.769 188.060 C 87.815 188.088,89.578 188.067,89.574 187.655 C 89.572 187.410,89.491 187.329,89.388 187.469 C 89.273 187.626,87.658 187.672,84.988 187.594 L 80.769 187.471 84.739 187.336 C 88.528 187.208,88.403 187.197,82.010 187.103 C 77.369 187.035,75.958 186.956,77.419 186.849 L 79.529 186.693 77.792 186.617 C 74.633 186.480,74.340 186.169,77.295 186.090 L 80.025 186.017 77.792 185.875 C 74.952 185.693,74.406 185.375,74.568 184.000 C 74.749 182.467,75.211 180.659,75.461 180.505 C 75.584 180.428,75.405 179.889,75.063 179.305 C 74.195 177.823,74.629 175.198,75.744 175.188 C 76.087 175.185,75.936 174.722,75.173 173.426 C 74.690 172.607,74.481 171.995,74.597 171.740 C 75.203 170.407,75.301 169.268,75.019 166.873 C 74.532 162.750,74.505 162.273,74.753 162.120 C 75.507 161.654,73.094 161.546,61.849 161.542 L 49.380 161.538 49.380 135.250 C 49.380 117.711,49.296 108.910,49.127 108.806 C 48.989 108.721,48.934 108.556,49.006 108.439 C 49.078 108.323,48.022 108.228,46.659 108.228 C 45.297 108.228,44.200 108.303,44.222 108.395 M238.784 130.376 C 238.770 130.797,238.812 130.946,238.876 130.707 C 238.941 130.468,239.079 130.273,239.183 130.273 C 239.287 130.273,239.371 130.124,239.371 129.942 C 239.371 129.237,238.808 129.654,238.784 130.376 M239.702 129.928 C 239.702 130.273,240.332 130.238,240.697 129.873 C 240.859 129.711,240.732 129.628,240.323 129.628 C 239.981 129.628,239.702 129.763,239.702 129.928 M238.896 131.926 C 239.263 132.074,239.319 133.499,238.958 133.499 C 238.812 133.499,238.726 134.237,238.749 135.298 C 238.771 136.287,238.835 136.706,238.891 136.228 C 239.027 135.076,239.454 134.645,239.454 135.660 C 239.454 136.466,239.671 136.545,240.571 136.062 C 240.844 135.916,241.262 135.828,241.501 135.866 C 241.740 135.905,241.937 135.807,241.939 135.648 C 241.941 135.485,242.048 135.522,242.184 135.732 C 242.377 136.031,242.425 135.992,242.428 135.531 C 242.430 135.213,242.542 135.027,242.680 135.112 C 243.139 135.395,242.933 134.497,242.423 133.986 C 242.145 133.708,241.810 133.547,241.678 133.628 C 241.547 133.710,241.439 133.646,241.439 133.487 C 241.439 133.328,241.285 133.257,241.097 133.329 C 240.909 133.401,240.616 133.329,240.446 133.169 C 240.209 132.946,240.110 132.951,240.023 133.189 C 239.798 133.803,239.400 133.499,239.566 132.840 C 239.727 132.197,239.416 131.748,238.834 131.785 C 238.697 131.794,238.725 131.857,238.896 131.926 M238.798 140.571 C 238.797 141.799,238.839 142.333,238.891 141.757 C 238.943 141.181,238.944 140.176,238.892 139.524 C 238.841 138.871,238.799 139.342,238.798 140.571 M239.454 140.447 C 239.454 141.175,239.510 141.714,239.578 141.646 C 239.770 141.454,239.804 139.474,239.619 139.288 C 239.528 139.197,239.454 139.719,239.454 140.447 M97.628 153.870 C 97.413 154.218,97.954 154.342,98.231 154.009 C 98.437 153.761,98.410 153.681,98.124 153.681 C 97.916 153.681,97.692 153.766,97.628 153.870 M180.177 159.396 C 179.431 160.294,179.955 161.414,181.120 161.414 C 181.876 161.414,182.250 161.299,182.329 161.042 C 182.422 160.742,182.381 160.730,182.115 160.980 C 181.529 161.533,181.321 161.309,181.769 160.608 C 182.009 160.233,182.116 160.008,182.006 160.110 C 181.897 160.211,181.636 160.155,181.427 159.985 C 181.112 159.731,181.079 159.742,181.236 160.050 C 181.341 160.254,181.254 160.210,181.044 159.951 C 180.833 159.692,180.720 159.385,180.792 159.269 C 181.007 158.921,180.481 159.030,180.177 159.396 M240.090 171.802 L 239.361 172.385 239.904 174.220 C 240.204 175.229,240.450 176.390,240.453 176.799 C 240.456 177.208,240.679 177.823,240.948 178.164 L 241.439 178.784 241.930 178.164 C 242.200 177.823,242.423 177.208,242.425 176.799 C 242.428 176.390,242.675 175.229,242.974 174.220 L 243.518 172.385 242.789 171.802 C 242.388 171.481,241.780 171.218,241.439 171.218 C 241.098 171.218,240.491 171.481,240.090 171.802 M91.667 186.126 C 91.062 186.757,91.046 187.593,91.639 187.593 C 91.821 187.593,91.812 187.494,91.613 187.295 C 91.131 186.813,91.273 186.485,91.769 186.934 C 92.349 187.459,92.551 187.453,92.575 186.911 C 92.588 186.627,92.640 186.589,92.725 186.802 C 92.826 187.055,92.960 187.032,93.326 186.701 C 93.601 186.452,93.797 186.394,93.797 186.562 C 93.797 186.720,93.931 186.849,94.094 186.849 C 94.326 186.849,94.326 186.782,94.094 186.551 C 93.745 186.202,93.690 185.513,94.028 185.721 C 94.155 185.800,94.329 185.749,94.416 185.609 C 94.790 185.005,92.292 185.474,91.667 186.126 M93.056 185.959 C 93.058 186.107,93.168 186.061,93.300 185.856 C 93.445 185.632,93.542 185.602,93.545 185.779 C 93.547 185.942,93.409 186.164,93.238 186.272 C 92.930 186.468,92.795 186.510,92.293 186.569 C 92.149 186.587,92.114 186.740,92.217 186.911 C 92.340 187.116,92.258 187.104,91.977 186.875 C 91.593 186.564,91.589 186.487,91.930 186.110 C 92.355 185.640,93.050 185.547,93.056 185.959 M90.571 187.484 C 90.571 187.833,90.672 188.056,90.796 187.980 C 90.919 187.903,90.962 187.617,90.891 187.345 C 90.712 186.662,90.571 186.723,90.571 187.484", fill: "white" }),

                React.createElement("path", { 
                    d: "M263.269 55.109 C 263.630 55.257,263.776 55.432,263.622 55.534 C 263.478 55.629,263.382 56.154,263.410 56.700 C 263.437 57.246,263.540 59.758,263.637 62.283 C 263.739 64.934,264.015 67.974,264.289 69.479 C 264.550 70.912,264.764 73.146,264.764 74.443 C 264.764 75.741,264.871 77.175,265.002 77.630 C 265.132 78.086,265.256 79.900,265.276 81.661 C 265.298 83.646,265.408 84.864,265.565 84.864 C 265.706 84.864,265.674 85.036,265.493 85.255 C 265.224 85.579,265.229 85.684,265.525 85.871 C 265.808 86.050,265.779 86.098,265.385 86.104 C 264.973 86.111,264.952 86.153,265.261 86.352 C 265.469 86.487,267.840 86.595,270.653 86.597 L 275.673 86.600 275.830 85.976 C 275.984 85.360,275.853 81.101,275.658 80.418 C 275.485 79.808,274.836 79.265,274.214 79.209 C 273.412 79.137,273.476 79.439,273.435 75.560 C 273.389 71.270,273.316 71.053,271.849 70.833 L 270.720 70.663 270.697 69.141 C 270.604 62.906,270.540 62.456,269.829 63.046 C 269.561 63.268,269.479 63.267,269.479 63.040 C 269.479 62.863,269.204 62.776,268.797 62.823 L 268.114 62.903 268.054 59.429 C 267.968 54.484,268.229 54.900,265.201 54.878 C 263.259 54.863,262.801 54.918,263.269 55.109 M278.164 78.923 C 278.164 79.067,278.067 79.126,277.950 79.053 C 277.832 78.981,277.382 79.310,276.950 79.785 L 276.164 80.648 276.006 101.377 C 275.920 112.778,275.773 121.983,275.680 121.832 C 275.457 121.471,269.975 121.169,269.975 121.517 C 269.975 121.655,269.701 121.738,269.366 121.701 C 268.679 121.626,268.101 122.158,268.379 122.608 C 268.488 122.784,268.458 122.841,268.306 122.746 C 268.146 122.648,268.062 122.892,268.084 123.391 C 268.112 124.036,268.275 124.266,268.918 124.566 C 269.357 124.770,269.719 125.084,269.722 125.263 C 269.725 125.441,269.828 125.525,269.951 125.449 C 270.511 125.103,271.262 127.097,270.986 128.195 C 270.508 130.094,270.649 132.136,271.357 133.532 L 271.994 134.789 271.295 135.819 C 270.911 136.385,270.488 136.926,270.355 137.021 C 269.914 137.336,272.023 141.843,272.752 142.142 C 273.157 142.309,272.772 144.349,272.154 145.308 C 271.423 146.444,271.398 150.519,272.118 151.239 C 272.304 151.425,272.457 151.660,272.457 151.760 C 272.457 152.143,273.306 153.846,273.497 153.846 C 273.607 153.846,273.697 154.004,273.697 154.196 C 273.697 154.704,274.497 154.510,274.717 153.949 C 274.872 153.554,274.906 153.589,274.921 154.156 C 274.945 155.119,275.428 155.009,275.464 154.032 L 275.493 153.226 275.682 153.970 C 275.787 154.380,275.909 161.135,275.954 168.983 C 276.005 177.807,276.091 181.641,276.179 179.032 C 276.261 176.601,276.351 175.602,276.391 176.675 C 276.441 177.981,276.525 178.388,276.675 178.040 C 276.845 177.645,276.895 177.746,276.923 178.536 C 276.950 179.296,277.004 179.412,277.154 179.032 C 277.312 178.634,277.388 178.756,277.543 179.653 C 277.748 180.834,277.931 180.684,278.287 179.045 L 278.446 178.313 279.175 179.541 C 279.942 180.833,280.159 183.241,279.550 183.704 C 279.360 183.848,279.372 183.946,279.591 184.035 C 280.080 184.233,279.952 184.615,279.397 184.615 C 279.119 184.615,278.829 184.782,278.750 184.986 C 278.672 185.190,278.508 185.295,278.386 185.220 C 278.264 185.144,278.164 185.214,278.164 185.376 C 278.164 185.592,278.065 185.587,277.786 185.355 C 277.473 185.096,277.433 185.106,277.552 185.416 C 277.662 185.703,278.170 185.801,279.708 185.834 C 280.814 185.858,281.896 185.986,282.113 186.119 C 282.384 186.286,281.879 186.340,280.490 186.295 C 277.985 186.212,277.882 186.709,280.351 186.964 C 284.313 187.373,300.757 187.487,300.610 187.104 C 300.533 186.904,300.551 186.820,300.649 186.919 C 300.748 187.017,301.052 186.902,301.325 186.663 C 301.618 186.407,301.738 186.372,301.617 186.577 C 301.479 186.812,301.505 186.868,301.699 186.748 C 302.128 186.483,302.044 186.107,301.551 186.085 C 301.208 186.069,301.195 186.037,301.489 185.931 C 302.768 185.469,302.718 186.305,302.724 165.074 L 302.730 145.409 327.233 145.391 C 348.063 145.375,351.607 145.322,350.868 145.037 C 350.391 144.853,350.167 144.693,350.372 144.680 C 350.593 144.667,350.643 144.583,350.496 144.475 C 350.199 144.257,350.099 143.424,350.370 143.424 C 350.680 143.424,350.671 138.242,350.358 136.870 C 350.199 136.176,349.812 134.715,349.497 133.623 C 348.912 131.596,348.658 129.703,348.501 126.179 C 348.449 125.010,348.209 123.650,347.918 122.873 C 347.646 122.146,347.485 121.392,347.560 121.198 C 347.635 121.003,347.551 120.844,347.374 120.844 C 347.182 120.844,347.247 120.696,347.533 120.479 C 347.993 120.132,347.994 120.115,347.554 120.107 C 347.252 120.102,347.142 119.973,347.233 119.735 C 347.508 119.020,346.511 118.981,324.690 118.859 L 302.605 118.734 302.452 117.866 L 302.299 116.998 302.232 117.990 C 302.183 118.718,302.136 118.817,302.054 118.362 C 301.932 117.678,301.489 117.068,301.489 117.583 C 301.489 118.027,300.998 117.666,300.743 117.034 C 300.557 116.575,300.523 116.621,300.492 117.370 C 300.473 117.847,300.401 118.099,300.332 117.928 C 300.119 117.400,299.752 117.586,299.752 118.224 C 299.752 118.557,299.640 118.898,299.504 118.983 C 299.367 119.067,299.256 119.575,299.256 120.111 C 299.256 120.648,299.032 121.674,298.759 122.392 C 298.487 123.110,298.263 124.122,298.263 124.640 C 298.263 125.902,297.684 126.949,296.708 127.452 C 296.267 127.679,295.682 128.123,295.409 128.439 C 294.186 129.855,290.261 129.055,289.696 127.276 C 289.612 127.010,289.456 126.845,289.350 126.911 C 289.243 126.977,289.009 126.755,288.829 126.418 C 288.649 126.082,288.428 125.806,288.338 125.806 C 287.743 125.806,286.380 121.092,286.078 117.990 C 285.684 113.956,285.514 113.268,284.667 112.303 C 283.724 111.230,283.684 111.062,283.533 107.568 C 283.468 106.067,283.248 104.336,283.043 103.722 C 282.839 103.108,282.603 101.712,282.520 100.620 C 282.436 99.529,282.320 98.356,282.263 98.015 C 282.206 97.674,282.033 96.390,281.880 95.161 C 281.727 93.933,281.501 92.146,281.377 91.191 C 281.253 90.236,281.034 88.449,280.889 87.221 C 280.745 85.993,280.510 84.262,280.368 83.375 C 280.226 82.488,280.091 81.315,280.067 80.769 C 280.044 80.223,279.857 79.641,279.653 79.474 C 279.334 79.215,279.358 79.171,279.824 79.164 C 280.123 79.160,280.437 79.045,280.521 78.908 C 280.616 78.755,280.193 78.660,279.419 78.660 C 278.701 78.660,278.164 78.773,278.164 78.923 M306.201 78.826 C 307.314 78.983,307.992 79.891,307.010 79.909 C 306.617 79.916,306.622 79.951,307.057 80.281 C 307.322 80.481,307.417 80.645,307.269 80.645 C 307.090 80.645,306.987 81.705,306.963 83.775 C 306.937 86.075,306.837 86.995,306.584 87.248 C 306.394 87.438,306.179 88.179,306.105 88.896 C 306.032 89.612,305.849 91.092,305.699 92.184 C 305.196 95.859,305.157 96.881,305.470 98.186 C 305.642 98.901,305.793 100.104,305.807 100.859 C 305.825 101.882,305.926 102.244,306.203 102.279 C 306.408 102.304,305.682 102.395,304.591 102.481 C 303.499 102.568,312.013 102.659,323.511 102.684 C 337.313 102.714,344.417 102.645,344.417 102.481 C 344.417 102.345,344.110 102.230,343.734 102.225 C 343.062 102.217,343.059 102.210,343.548 101.791 C 343.878 101.508,344.018 101.130,343.965 100.666 C 343.899 100.095,344.124 99.745,345.205 98.733 L 346.526 97.498 344.971 96.081 C 343.423 94.671,343.416 94.659,343.420 93.308 C 343.426 91.418,342.913 89.359,342.396 89.195 C 341.965 89.058,340.199 87.174,340.199 86.850 C 340.199 86.750,340.785 86.481,341.501 86.252 C 343.946 85.471,344.991 83.987,343.555 83.333 C 343.210 83.176,342.928 82.953,342.928 82.839 C 342.928 82.724,342.733 82.630,342.494 82.629 C 341.915 82.628,340.444 81.728,339.826 80.998 C 339.553 80.675,338.995 80.241,338.586 80.034 L 337.841 79.656 339.129 79.654 C 340.968 79.652,340.976 79.243,339.140 79.065 C 337.282 78.885,304.960 78.650,306.201 78.826 M276.272 79.272 C 275.987 80.013,276.331 80.159,276.909 79.543 L 277.506 78.908 276.959 78.908 C 276.658 78.908,276.348 79.072,276.272 79.272 M141.464 171.734 C 141.136 171.865,140.618 171.993,140.313 172.018 C 139.773 172.063,139.736 172.418,140.203 173.077 C 140.300 173.213,140.357 173.571,140.331 173.872 C 140.305 174.173,140.376 174.361,140.489 174.291 C 140.602 174.222,140.695 174.283,140.695 174.427 C 140.695 174.572,140.869 174.690,141.082 174.690 C 141.325 174.690,141.399 174.575,141.282 174.380 C 141.166 174.186,141.260 174.203,141.535 174.426 C 141.884 174.709,142.013 174.718,142.168 174.467 C 142.316 174.228,142.402 174.254,142.524 174.573 C 142.650 174.900,142.762 174.930,143.029 174.709 C 143.218 174.552,143.523 174.456,143.708 174.495 C 143.893 174.534,144.017 174.426,143.983 174.256 C 143.926 173.972,144.050 173.920,144.975 173.846 C 145.733 173.786,146.193 171.876,145.513 171.615 C 144.912 171.384,142.134 171.466,141.464 171.734 M276.476 184.169 C 276.053 184.593,276.108 184.914,276.589 184.820 C 276.815 184.776,277.029 184.544,277.064 184.305 C 277.138 183.800,276.900 183.745,276.476 184.169 M277.501 186.497 C 277.380 186.814,277.309 186.826,277.140 186.559 C 276.997 186.334,276.929 186.322,276.927 186.524 C 276.921 186.999,277.409 187.164,277.571 186.742 C 277.653 186.529,277.825 186.420,277.954 186.500 C 278.091 186.585,278.055 186.814,277.866 187.057 C 277.580 187.422,277.591 187.432,277.963 187.141 C 278.194 186.960,278.321 186.653,278.247 186.458 C 278.066 185.989,277.689 186.008,277.501 186.497", fill: "white" }),
                    React.createElement("path", { 
                        d: "M192.060 55.583 C 192.550 55.900,193.797 55.900,193.797 55.583 C 193.797 55.447,193.322 55.337,192.742 55.339 C 191.970 55.342,191.787 55.407,192.060 55.583 M152.481 63.027 C 152.566 63.164,152.802 63.275,153.007 63.275 C 153.212 63.275,153.310 63.164,153.226 63.027 C 153.141 62.891,152.905 62.779,152.700 62.779 C 152.496 62.779,152.397 62.891,152.481 63.027 M151.217 63.314 C 151.101 63.502,151.150 63.532,151.359 63.403 C 151.572 63.271,151.636 63.320,151.552 63.551 C 151.483 63.741,151.301 63.868,151.148 63.834 C 150.848 63.767,150.769 64.086,151.023 64.340 C 151.221 64.538,152.102 63.465,151.948 63.215 C 151.777 62.938,151.419 62.987,151.217 63.314 M245.037 65.065 C 243.278 65.684,241.456 68.983,242.873 68.983 C 243.056 68.983,243.136 69.094,243.052 69.231 C 242.968 69.367,243.073 69.479,243.286 69.479 C 243.805 69.479,243.778 69.882,243.245 70.086 C 242.754 70.275,243.226 70.712,243.921 70.712 C 244.605 70.712,245.092 70.258,244.686 69.997 C 244.427 69.830,244.621 69.690,245.431 69.460 C 247.170 68.967,247.729 66.647,246.458 65.199 C 246.027 64.708,246.048 64.710,245.037 65.065 M191.675 68.758 L 190.174 69.243 189.845 70.726 C 189.538 72.112,189.470 72.208,188.812 72.208 C 188.352 72.208,188.011 72.388,187.831 72.724 C 187.393 73.542,187.712 73.945,188.796 73.945 C 190.260 73.945,191.068 75.363,190.446 76.842 C 190.273 77.253,190.052 78.059,189.955 78.634 C 189.791 79.604,188.870 80.893,188.340 80.893 C 188.040 80.893,186.139 82.938,185.572 83.870 L 185.119 84.615 186.046 84.649 C 186.598 84.669,186.752 84.726,186.426 84.789 C 186.126 84.847,185.813 85.105,185.732 85.361 C 185.631 85.679,185.292 85.858,184.665 85.924 C 183.925 86.002,183.999 86.029,185.050 86.063 C 185.766 86.085,186.352 86.216,186.352 86.352 C 186.352 86.508,187.924 86.600,190.571 86.600 C 193.017 86.600,194.789 86.503,194.789 86.369 C 194.789 86.241,195.096 86.091,195.471 86.034 L 196.154 85.930 195.471 85.893 C 194.967 85.866,194.789 85.727,194.789 85.360 C 194.789 85.087,194.650 84.862,194.479 84.860 C 194.263 84.857,194.277 84.788,194.524 84.631 C 194.829 84.438,194.814 84.189,194.417 82.878 C 194.134 81.943,194.047 81.286,194.192 81.184 C 194.323 81.092,194.796 80.547,195.243 79.973 L 196.056 78.928 195.334 77.615 C 194.701 76.466,194.593 75.962,194.461 73.568 C 194.326 71.103,193.707 68.211,193.325 68.255 C 193.243 68.265,192.501 68.491,191.675 68.758 M219.355 70.347 C 219.180 70.808,218.938 70.968,218.413 70.968 C 217.703 70.968,217.182 71.413,216.311 72.764 C 215.790 73.572,216.018 74.902,217.066 77.171 C 217.848 78.864,217.849 78.800,216.996 80.150 C 216.031 81.676,215.385 83.534,215.385 84.780 C 215.385 85.562,215.277 85.848,214.950 85.933 C 214.537 86.041,214.537 86.048,214.950 86.075 C 215.189 86.091,215.385 86.216,215.385 86.352 C 215.385 86.506,216.708 86.600,218.859 86.600 C 220.826 86.600,222.333 86.501,222.333 86.371 C 222.333 86.244,222.528 86.090,222.767 86.027 C 223.154 85.926,223.156 85.911,222.784 85.885 C 222.143 85.841,222.135 84.904,222.760 83.063 C 223.412 81.143,223.355 79.495,222.556 77.155 C 222.297 76.395,222.084 75.604,222.084 75.397 C 222.084 74.985,221.211 72.135,220.841 71.340 C 220.714 71.067,220.579 70.676,220.541 70.471 C 220.377 69.593,219.670 69.519,219.355 70.347 M241.342 75.124 C 240.971 79.579,240.559 81.776,239.930 82.659 C 239.613 83.105,239.454 83.743,239.454 84.575 C 239.454 85.746,239.412 85.829,238.772 85.926 L 238.089 86.030 238.772 86.067 C 239.147 86.087,239.454 86.216,239.454 86.352 C 239.454 86.506,240.819 86.600,243.052 86.600 C 245.106 86.600,246.650 86.501,246.650 86.370 C 246.650 86.243,246.901 86.090,247.208 86.031 L 247.767 85.924 247.208 85.890 C 246.835 85.867,246.650 85.698,246.650 85.380 C 246.650 85.119,246.511 84.849,246.340 84.780 C 246.155 84.705,246.205 84.647,246.464 84.635 C 246.774 84.621,246.911 84.385,246.944 83.809 C 246.996 82.886,247.079 82.067,247.138 81.886 C 247.347 81.241,247.275 79.976,246.999 79.443 C 246.811 79.081,246.475 78.205,246.252 77.495 C 245.955 76.552,245.704 76.178,245.318 76.102 C 244.801 76.000,244.802 75.997,245.342 75.964 C 245.848 75.933,245.870 75.873,245.605 75.248 C 244.996 73.817,244.445 73.449,242.906 73.449 L 241.482 73.449 241.342 75.124 M75.128 78.836 C 75.482 78.904,75.623 79.052,75.509 79.236 C 75.410 79.397,75.306 80.143,75.280 80.893 C 75.253 81.644,75.152 82.900,75.054 83.685 C 74.956 84.475,74.974 85.112,75.095 85.112 C 75.559 85.112,75.981 86.618,75.811 87.665 C 75.718 88.240,75.616 89.603,75.584 90.695 C 75.553 91.787,75.443 93.140,75.340 93.703 C 74.980 95.671,75.558 96.420,77.577 96.605 C 79.837 96.812,81.716 97.389,81.017 97.661 C 80.744 97.767,80.164 98.123,79.728 98.450 C 79.291 98.778,78.258 99.175,77.432 99.332 C 76.405 99.527,75.922 99.736,75.902 99.995 C 75.872 100.403,75.878 102.240,75.910 102.543 C 75.921 102.646,78.945 102.730,82.630 102.730 C 88.844 102.730,89.330 102.761,89.334 103.164 C 89.336 103.425,89.410 103.492,89.520 103.332 C 89.859 102.837,90.529 102.727,90.441 103.181 C 90.397 103.410,90.343 103.598,90.323 103.598 C 90.302 103.598,90.251 103.769,90.209 103.979 C 90.165 104.205,90.310 104.360,90.566 104.360 C 90.886 104.360,90.982 104.183,90.939 103.673 C 90.907 103.295,90.971 103.043,91.082 103.111 C 91.194 103.180,91.242 103.457,91.190 103.726 C 91.123 104.077,91.265 104.258,91.688 104.365 C 92.014 104.447,92.316 104.698,92.359 104.924 C 92.403 105.149,92.604 105.345,92.807 105.359 C 93.010 105.372,93.531 105.400,93.965 105.421 C 94.571 105.450,94.780 105.589,94.862 106.017 L 94.970 106.576 95.003 106.017 C 95.039 105.425,95.655 105.247,95.865 105.769 C 95.940 105.955,95.998 105.905,96.010 105.645 C 96.021 105.406,95.918 105.211,95.782 105.211 C 95.645 105.211,95.551 105.127,95.573 105.025 C 95.634 104.734,95.226 103.865,94.937 103.673 C 94.786 103.572,94.933 103.397,95.291 103.254 C 95.629 103.119,95.766 103.002,95.596 102.993 C 95.256 102.976,95.179 96.711,95.504 95.546 C 95.705 94.828,94.849 92.077,94.293 91.650 C 94.088 91.493,93.699 90.935,93.428 90.409 C 92.742 89.082,91.839 88.338,90.912 88.338 C 89.611 88.337,89.077 86.525,89.958 85.099 C 90.052 84.947,90.200 84.023,90.288 83.046 C 90.442 81.320,90.468 81.265,91.191 81.111 C 91.811 80.978,91.736 80.947,90.739 80.923 C 89.481 80.892,89.555 80.149,90.816 80.149 C 91.107 80.149,91.275 80.037,91.191 79.901 C 91.107 79.764,90.604 79.653,90.074 79.653 C 89.545 79.653,89.042 79.541,88.958 79.404 C 88.860 79.246,89.687 79.145,91.238 79.124 C 92.577 79.106,95.794 79.015,98.387 78.921 C 101.624 78.804,98.628 78.747,88.834 78.739 C 80.986 78.733,74.819 78.776,75.128 78.836 M355.707 78.929 C 357.208 79.034,362.596 79.054,367.680 78.975 C 377.267 78.825,377.722 78.867,376.489 79.803 C 376.075 80.117,376.075 80.133,376.489 80.141 C 376.936 80.149,377.119 80.645,376.675 80.645 C 376.538 80.645,376.427 80.868,376.427 81.141 C 376.427 81.414,376.515 81.638,376.622 81.638 C 376.729 81.638,376.817 81.853,376.817 82.116 C 376.817 82.379,376.710 82.528,376.580 82.447 C 376.436 82.359,376.420 82.488,376.539 82.776 C 376.647 83.037,376.717 83.735,376.693 84.328 C 376.667 84.974,376.746 85.345,376.892 85.255 C 377.025 85.173,377.191 85.302,377.261 85.543 C 377.331 85.783,377.367 85.533,377.342 84.988 L 377.295 83.995 378.288 83.995 C 379.721 83.995,380.345 83.107,379.579 82.160 C 379.345 81.870,379.346 81.830,379.587 81.975 C 379.821 82.115,379.880 81.744,379.835 80.410 C 379.770 78.475,379.773 78.480,379.071 79.094 C 378.798 79.333,378.649 79.402,378.739 79.247 C 379.046 78.717,377.801 78.667,365.385 78.703 C 357.112 78.727,353.887 78.803,355.707 78.929 M104.887 79.159 C 105.045 79.366,105.210 79.969,105.254 80.499 C 105.333 81.446,107.197 82.154,107.196 81.237 C 107.196 80.842,106.219 79.653,105.895 79.653 C 105.745 79.653,105.392 79.457,105.111 79.218 C 104.785 78.942,104.704 78.920,104.887 79.159 M361.535 79.907 C 362.694 80.007,363.866 79.998,364.141 79.887 C 364.442 79.765,363.604 79.692,362.035 79.704 L 359.429 79.724 361.535 79.907 M360.670 81.141 C 360.305 81.298,360.503 81.355,361.414 81.355 C 362.326 81.355,362.523 81.298,362.159 81.141 C 361.886 81.024,361.551 80.928,361.414 80.928 C 361.278 80.928,360.943 81.024,360.670 81.141 M359.825 85.135 C 358.903 85.545,357.816 86.430,357.816 86.772 C 357.816 87.043,358.845 88.834,359.000 88.834 C 359.425 88.835,360.493 90.029,360.936 90.999 L 361.414 92.047 362.810 92.053 L 364.205 92.060 364.327 90.792 C 364.394 90.095,364.569 89.451,364.717 89.360 C 364.864 89.268,365.093 88.713,365.225 88.126 C 365.357 87.539,365.527 86.996,365.603 86.919 C 365.738 86.785,364.971 85.560,364.356 84.926 C 363.885 84.440,361.102 84.569,359.825 85.135 M376.467 87.332 C 376.388 89.625,376.754 90.209,376.942 88.089 L 377.086 86.476 377.128 88.151 C 377.153 89.131,377.068 89.826,376.923 89.826 C 376.787 89.826,376.675 90.059,376.675 90.343 C 376.675 90.646,376.803 90.818,376.985 90.757 C 377.196 90.687,377.323 89.902,377.380 88.317 C 377.427 87.032,377.382 86.062,377.281 86.162 C 377.179 86.263,376.968 86.170,376.812 85.956 C 376.587 85.648,376.515 85.935,376.467 87.332 M375.750 87.345 C 375.750 87.959,375.798 88.210,375.858 87.903 C 375.917 87.596,375.917 87.094,375.858 86.787 C 375.798 86.480,375.750 86.731,375.750 87.345 M180.130 86.686 C 179.967 87.018,180.000 87.625,180.187 87.741 C 180.610 88.002,180.730 87.623,180.370 87.165 C 180.060 86.770,180.067 86.758,180.437 87.047 C 180.676 87.234,180.909 87.272,180.992 87.137 C 181.071 87.009,180.914 86.847,180.642 86.776 C 180.371 86.705,180.140 86.664,180.130 86.686 M181.461 87.035 C 181.372 87.274,181.120 87.636,180.899 87.841 C 180.679 88.046,180.540 88.409,180.590 88.648 C 180.640 88.886,180.555 89.082,180.401 89.082 C 180.246 89.082,180.175 88.993,180.242 88.884 C 180.309 88.775,180.249 88.524,180.109 88.326 C 179.895 88.024,179.875 88.031,179.982 88.369 C 180.052 88.591,179.979 88.913,179.819 89.083 C 179.443 89.485,181.568 89.201,182.072 88.782 C 182.505 88.423,182.377 87.196,181.917 87.293 C 181.701 87.339,181.630 87.226,181.724 86.983 C 181.804 86.773,181.814 86.600,181.746 86.600 C 181.678 86.600,181.550 86.796,181.461 87.035 M181.540 88.206 C 181.511 88.407,181.391 88.658,181.274 88.765 C 181.157 88.871,181.142 88.818,181.240 88.648 C 181.339 88.477,181.294 88.337,181.141 88.337 C 180.989 88.337,180.933 88.226,181.017 88.089 C 181.249 87.714,181.601 87.792,181.540 88.206 M375.062 91.067 C 375.146 91.203,375.069 91.319,374.891 91.323 C 374.435 91.334,375.431 92.060,375.901 92.060 C 376.186 92.060,376.160 91.968,375.792 91.669 C 375.527 91.454,375.478 91.364,375.682 91.468 C 376.003 91.632,376.007 91.600,375.714 91.239 C 375.352 90.792,374.803 90.648,375.062 91.067 M359.733 93.013 C 357.896 94.036,357.588 94.648,358.455 95.553 C 358.837 95.952,359.346 96.278,359.585 96.278 C 359.824 96.278,360.089 96.390,360.174 96.526 C 360.511 97.072,364.492 96.821,365.098 96.215 C 367.728 93.585,363.374 90.985,359.733 93.013 M173.583 93.780 C 173.493 93.926,173.552 94.045,173.713 94.045 C 173.931 94.045,173.927 94.140,173.697 94.417 C 173.484 94.674,173.474 94.789,173.667 94.789 C 173.820 94.789,173.945 94.671,173.945 94.526 C 173.945 94.382,174.085 94.347,174.256 94.450 C 174.450 94.566,174.429 94.456,174.202 94.154 C 174.002 93.889,173.817 93.637,173.792 93.594 C 173.767 93.551,173.673 93.634,173.583 93.780 M374.194 98.511 C 373.863 98.725,373.863 98.754,374.194 98.773 C 374.444 98.787,374.404 98.864,374.069 99.007 C 373.626 99.198,373.621 99.223,374.022 99.238 C 374.269 99.248,374.407 99.360,374.328 99.487 C 374.250 99.614,374.277 99.774,374.388 99.843 C 374.499 99.912,374.616 99.584,374.648 99.115 C 374.712 98.169,374.715 98.174,374.194 98.511 M360.955 99.463 C 360.671 99.777,360.589 100.152,360.691 100.663 C 360.795 101.181,360.714 101.533,360.427 101.820 C 360.119 102.128,360.097 102.243,360.342 102.271 C 360.522 102.291,360.167 102.388,359.553 102.486 C 358.939 102.584,361.535 102.668,365.322 102.673 C 369.359 102.678,372.151 102.589,372.069 102.457 C 371.993 102.334,372.043 102.233,372.179 102.233 C 372.316 102.233,372.496 102.345,372.581 102.481 C 372.665 102.618,372.923 102.726,373.154 102.722 C 373.530 102.715,373.526 102.678,373.114 102.366 C 372.862 102.175,372.729 101.899,372.819 101.753 C 372.909 101.608,372.864 101.489,372.719 101.489 C 372.575 101.489,372.457 101.583,372.457 101.697 C 372.457 101.812,372.150 102.042,371.774 102.208 L 371.092 102.511 371.774 101.866 C 372.563 101.120,372.581 101.075,372.095 101.075 C 371.897 101.075,371.788 101.163,371.854 101.270 C 372.081 101.637,371.070 101.985,370.708 101.663 C 370.429 101.416,370.424 101.434,370.676 101.770 C 370.924 102.100,370.907 102.203,370.589 102.325 C 370.334 102.423,370.259 102.377,370.373 102.192 C 370.492 101.999,370.437 101.978,370.200 102.127 C 369.676 102.454,368.501 102.566,368.983 102.243 C 369.313 102.021,369.313 101.990,368.983 101.971 C 368.732 101.957,368.772 101.881,369.107 101.737 C 369.585 101.531,369.583 101.523,369.059 101.506 C 368.276 101.481,368.144 101.087,368.725 100.505 C 369.180 100.050,369.187 99.999,368.797 99.994 C 368.558 99.991,368.083 99.771,367.742 99.504 C 366.839 98.798,361.585 98.766,360.955 99.463 M370.969 100.545 C 371.306 100.953,371.281 101.310,370.929 101.093 C 370.745 100.979,370.711 101.025,370.833 101.224 C 370.971 101.447,371.099 101.457,371.295 101.261 C 371.492 101.064,371.450 100.887,371.144 100.618 C 370.912 100.413,370.833 100.381,370.969 100.545 M373.449 100.669 C 373.449 100.863,373.553 100.958,373.680 100.879 C 373.807 100.801,373.982 100.852,374.069 100.993 C 374.157 101.133,374.332 101.185,374.459 101.106 C 374.873 100.850,374.703 100.557,374.069 100.436 C 373.643 100.354,373.449 100.427,373.449 100.669 M374.004 101.737 C 374.040 101.942,373.930 102.081,373.759 102.047 C 373.294 101.954,373.386 102.182,373.930 102.473 C 374.556 102.808,374.776 102.436,374.306 101.836 C 374.046 101.502,373.957 101.473,374.004 101.737 M93.815 104.535 C 93.784 104.831,93.444 104.774,93.337 104.454 C 93.283 104.290,93.372 104.201,93.536 104.256 C 93.700 104.310,93.825 104.436,93.815 104.535 M89.795 104.798 C 90.165 105.247,91.454 105.388,91.183 104.950 C 91.094 104.806,90.892 104.735,90.734 104.792 C 90.576 104.849,90.223 104.781,89.950 104.640 C 89.507 104.412,89.490 104.429,89.795 104.798 M96.725 105.757 C 97.143 106.175,97.098 106.575,96.672 106.222 C 96.452 106.039,96.266 106.021,96.172 106.174 C 96.089 106.308,96.135 106.487,96.274 106.573 C 96.413 106.659,96.526 106.649,96.526 106.552 C 96.526 106.454,96.777 106.584,97.084 106.841 C 97.391 107.097,97.511 107.156,97.351 106.972 C 97.155 106.748,97.133 106.442,97.282 106.048 C 97.476 105.540,97.432 105.459,96.967 105.459 C 96.547 105.459,96.493 105.525,96.725 105.757 M95.158 106.705 C 94.962 107.023,95.674 107.883,95.925 107.632 C 96.011 107.546,95.913 107.238,95.709 106.946 C 95.453 106.580,95.281 106.506,95.158 106.705 M360.952 119.231 C 361.045 119.471,361.459 119.613,362.123 119.632 C 363.100 119.660,363.114 119.671,362.407 119.851 C 361.736 120.022,361.776 120.043,362.815 120.070 C 363.611 120.090,364.013 120.219,364.116 120.487 C 364.197 120.701,364.388 120.799,364.539 120.705 C 364.740 120.582,364.740 120.673,364.541 121.046 C 364.391 121.326,364.276 121.926,364.285 122.378 C 364.300 123.063,364.339 123.118,364.516 122.705 C 364.667 122.355,364.745 122.720,364.784 123.945 C 364.836 125.589,364.848 125.622,365.012 124.566 L 365.186 123.449 365.247 124.442 C 365.281 124.988,365.291 125.827,365.270 126.308 C 365.241 126.955,365.395 127.335,365.866 127.778 L 366.501 128.374 366.526 127.773 L 366.551 127.171 366.749 127.792 C 366.918 128.319,366.954 128.337,366.990 127.916 L 367.032 127.419 367.246 127.916 C 367.389 128.250,367.466 128.290,367.480 128.040 C 367.499 127.709,367.528 127.709,367.742 128.040 C 367.894 128.275,367.984 128.301,367.986 128.110 C 367.994 127.501,368.735 128.113,368.760 128.749 C 368.782 129.322,368.812 129.296,369.002 128.536 C 369.391 126.974,369.250 119.657,368.822 119.230 C 368.419 118.827,366.617 118.718,366.392 119.083 C 366.315 119.207,366.011 119.245,365.715 119.168 C 365.283 119.055,365.209 119.111,365.340 119.452 C 365.437 119.704,365.403 119.815,365.258 119.725 C 365.123 119.642,365.012 119.413,365.012 119.216 C 365.012 119.019,364.894 118.859,364.750 118.859 C 364.605 118.859,364.544 118.952,364.615 119.065 C 364.685 119.179,364.585 119.272,364.392 119.272 C 364.199 119.272,364.099 119.179,364.169 119.065 C 364.240 118.952,363.513 118.859,362.553 118.859 C 361.105 118.859,360.834 118.922,360.952 119.231 M250.018 127.076 C 250.092 127.197,249.981 127.295,249.771 127.295 C 249.474 127.295,249.404 127.544,249.454 128.412 L 249.520 129.529 246.534 129.554 C 244.892 129.568,243.185 129.559,242.742 129.535 C 242.217 129.506,241.934 129.605,241.932 129.820 C 241.929 130.067,241.881 130.074,241.738 129.850 C 241.521 129.508,240.458 129.515,240.526 129.857 C 240.551 129.981,240.375 130.116,240.136 130.156 C 239.898 130.196,239.702 130.081,239.702 129.901 C 239.702 129.558,239.112 129.540,238.779 129.873 C 238.673 129.979,238.697 130.044,238.834 130.016 C 239.316 129.919,239.576 130.034,239.288 130.217 C 238.683 130.602,238.626 131.702,239.200 131.884 C 239.639 132.023,239.704 132.180,239.573 132.776 C 239.418 133.483,239.789 133.825,240.023 133.189 C 240.110 132.951,240.209 132.946,240.446 133.169 C 240.616 133.329,240.909 133.401,241.097 133.329 C 241.285 133.257,241.439 133.328,241.439 133.487 C 241.439 133.646,241.547 133.710,241.678 133.628 C 241.989 133.437,242.928 134.376,242.928 134.878 C 242.928 135.091,242.816 135.196,242.680 135.112 C 242.542 135.027,242.430 135.213,242.428 135.531 C 242.425 135.992,242.377 136.031,242.184 135.732 C 242.048 135.522,241.941 135.485,241.939 135.648 C 241.937 135.807,241.740 135.905,241.501 135.866 C 241.262 135.828,240.844 135.916,240.571 136.062 C 239.671 136.545,239.454 136.466,239.454 135.660 C 239.454 135.066,239.386 134.956,239.161 135.182 C 238.943 135.400,238.863 138.843,238.851 148.569 L 238.834 161.663 227.171 161.587 C 215.905 161.514,211.710 161.642,212.771 162.026 C 213.321 162.225,213.316 162.175,213.365 168.859 C 213.386 171.748,213.297 173.099,213.037 173.821 L 212.680 174.814 213.846 175.948 C 214.488 176.571,215.206 177.153,215.442 177.241 C 215.938 177.425,215.771 178.164,215.234 178.164 C 215.044 178.164,214.888 178.286,214.888 178.436 C 214.888 178.585,214.660 179.028,214.382 179.419 L 213.875 180.130 214.810 181.012 C 215.324 181.497,216.054 182.031,216.433 182.198 C 217.435 182.642,217.285 183.035,215.836 183.769 C 215.130 184.128,214.403 184.569,214.222 184.750 C 214.041 184.931,213.670 185.150,213.398 185.236 C 212.732 185.448,212.714 188.362,213.367 190.253 C 213.670 191.130,213.728 191.585,213.545 191.661 C 213.375 191.732,213.412 191.871,213.648 192.037 C 213.953 192.252,213.908 192.304,213.400 192.324 C 212.822 192.347,212.837 192.373,213.609 192.710 C 214.203 192.970,216.092 193.132,220.258 193.281 C 226.230 193.495,226.775 193.582,225.945 194.189 C 225.527 194.495,227.027 194.541,237.345 194.541 C 247.663 194.541,249.163 194.495,248.745 194.189 C 247.906 193.575,248.552 193.441,253.292 193.246 C 258.112 193.047,259.044 192.816,258.359 191.992 C 258.147 191.736,258.149 191.578,258.368 191.359 C 258.529 191.198,258.554 191.067,258.424 191.067 C 258.295 191.066,258.167 190.756,258.141 190.378 C 258.115 190.000,257.928 189.371,257.725 188.981 C 257.343 188.244,257.410 187.857,258.181 186.366 C 258.571 185.613,258.469 184.865,257.976 184.862 C 256.803 184.855,256.457 183.271,256.324 177.315 C 256.207 172.052,256.152 171.498,255.647 170.471 C 255.131 169.423,255.093 168.968,255.017 163.027 C 254.959 158.476,254.841 156.421,254.594 155.707 C 254.360 155.027,254.205 152.801,254.101 148.635 C 253.943 142.249,253.922 142.122,252.569 139.283 L 251.719 137.500 252.861 136.430 C 254.520 134.876,254.623 134.311,253.459 133.147 C 253.157 132.845,252.970 132.061,252.824 130.480 C 252.605 128.108,252.719 127.735,253.740 127.475 C 254.003 127.408,253.750 127.340,253.178 127.324 C 252.606 127.308,252.074 127.191,251.995 127.063 C 251.916 126.935,251.408 126.836,250.867 126.844 C 250.326 126.851,249.944 126.956,250.018 127.076 M364.308 127.428 C 364.286 127.569,363.933 127.882,363.524 128.124 C 362.593 128.674,362.552 129.477,363.413 130.285 C 364.051 130.885,364.501 130.711,364.512 129.859 C 364.514 129.700,364.656 129.513,364.826 129.444 C 365.060 129.349,365.065 129.267,364.846 129.111 C 364.687 128.997,364.509 128.514,364.452 128.038 C 364.394 127.561,364.330 127.287,364.308 127.428 M238.710 132.754 C 238.710 133.164,238.821 133.499,238.958 133.499 C 239.094 133.499,239.206 133.164,239.206 132.754 C 239.206 132.345,239.094 132.010,238.958 132.010 C 238.821 132.010,238.710 132.345,238.710 132.754 M239.743 140.487 C 239.683 142.016,239.454 141.984,239.454 140.447 C 239.454 139.719,239.528 139.197,239.619 139.288 C 239.709 139.379,239.765 139.918,239.743 140.487 M368.623 144.685 C 368.686 144.787,368.430 144.980,368.054 145.113 C 367.396 145.347,367.406 145.355,368.299 145.321 C 369.204 145.286,369.750 144.500,368.869 144.500 C 368.671 144.500,368.560 144.583,368.623 144.685 M361.476 145.343 C 362.056 145.395,363.006 145.395,363.586 145.343 C 364.166 145.291,363.691 145.248,362.531 145.248 C 361.371 145.248,360.896 145.291,361.476 145.343 M97.684 153.888 C 97.434 154.160,97.297 154.451,97.380 154.534 C 97.462 154.617,97.703 154.438,97.914 154.137 C 98.124 153.836,98.401 153.654,98.528 153.733 C 98.655 153.811,98.759 153.757,98.759 153.613 C 98.759 153.197,98.182 153.345,97.684 153.888 M174.142 153.518 C 174.388 153.616,174.395 153.727,174.174 153.994 C 173.998 154.206,173.984 154.342,174.137 154.342 C 174.439 154.342,174.717 153.708,174.507 153.498 C 174.426 153.417,174.238 153.359,174.090 153.369 C 173.942 153.380,173.966 153.447,174.142 153.518 M91.191 159.200 C 91.464 159.406,91.651 159.654,91.608 159.750 C 91.389 160.230,90.693 160.799,90.442 160.702 C 90.285 160.642,90.157 160.750,90.157 160.942 C 90.157 161.133,90.209 161.238,90.272 161.175 C 90.336 161.112,90.575 161.160,90.803 161.282 C 91.388 161.595,91.752 161.289,91.822 160.422 C 91.901 159.451,91.612 158.807,91.102 158.817 C 90.762 158.823,90.776 158.886,91.191 159.200 M90.074 159.489 C 90.074 159.743,89.935 160.101,89.764 160.285 C 89.519 160.549,89.519 160.582,89.763 160.444 C 90.253 160.168,90.612 159.360,90.323 159.182 C 90.186 159.097,90.074 159.235,90.074 159.489 M179.555 159.409 C 179.642 159.635,179.951 159.728,180.424 159.668 C 180.827 159.617,181.096 159.674,181.021 159.795 C 180.946 159.916,181.016 160.096,181.176 160.195 C 181.357 160.307,181.400 160.267,181.289 160.088 C 181.192 159.930,181.230 159.801,181.375 159.801 C 181.650 159.801,181.722 160.087,181.655 160.918 C 181.622 161.331,181.659 161.352,181.871 161.042 C 182.386 160.292,181.488 159.162,180.601 159.443 C 180.257 159.552,180.143 159.516,180.257 159.332 C 180.359 159.165,180.228 159.057,179.923 159.057 C 179.591 159.057,179.466 159.177,179.555 159.409 M179.920 160.971 C 179.910 161.137,180.124 161.392,180.397 161.538 C 180.733 161.719,180.893 161.721,180.893 161.547 C 180.893 161.406,180.735 161.290,180.542 161.290 C 180.348 161.290,180.134 161.151,180.065 160.980 C 179.971 160.746,179.935 160.744,179.920 160.971 M74.654 161.759 C 74.848 161.882,74.890 162.035,74.753 162.120 C 74.505 162.273,74.532 162.750,75.019 166.873 C 75.301 169.268,75.203 170.407,74.597 171.740 C 74.481 171.995,74.690 172.607,75.173 173.426 C 75.936 174.722,76.087 175.185,75.744 175.188 C 74.629 175.198,74.195 177.823,75.063 179.305 C 75.405 179.889,75.584 180.428,75.461 180.505 C 75.211 180.659,74.749 182.467,74.568 184.000 C 74.406 185.375,74.952 185.693,77.792 185.875 L 80.025 186.017 77.295 186.090 C 74.340 186.169,74.633 186.480,77.792 186.617 L 79.529 186.693 77.419 186.849 C 76.051 186.950,77.594 187.021,81.809 187.051 C 85.925 187.080,88.364 187.006,88.462 186.849 C 88.561 186.687,87.157 186.594,84.444 186.583 C 82.150 186.573,80.491 186.480,80.758 186.376 C 81.240 186.187,81.240 186.184,80.758 185.905 C 80.292 185.634,80.295 185.623,80.831 185.615 C 81.431 185.607,81.589 185.234,81.079 185.027 C 80.846 184.932,80.861 184.835,81.141 184.634 C 81.472 184.397,81.472 184.340,81.141 184.119 C 80.829 183.911,80.824 183.835,81.111 183.651 C 81.299 183.529,81.382 183.315,81.296 183.175 C 81.205 183.029,82.251 182.378,83.745 181.650 C 86.914 180.106,86.914 180.107,84.042 179.197 C 82.772 178.793,81.328 178.247,80.833 177.982 L 79.934 177.500 80.848 177.112 C 81.351 176.898,82.208 176.587,82.754 176.419 C 83.300 176.252,84.003 176.018,84.317 175.899 C 84.630 175.780,85.245 175.680,85.682 175.677 C 86.119 175.674,86.734 175.473,87.048 175.231 L 87.620 174.791 87.007 174.130 C 86.670 173.767,86.081 173.391,85.698 173.294 C 85.316 173.198,84.627 172.898,84.167 172.627 L 83.333 172.135 84.408 171.063 C 85.000 170.474,85.610 169.988,85.764 169.983 C 86.118 169.973,86.755 169.231,86.409 169.231 C 85.586 169.231,82.966 165.285,82.840 163.856 C 82.750 162.839,82.901 162.313,83.313 162.206 C 83.586 162.134,83.499 162.082,83.079 162.064 C 82.712 162.048,82.342 161.923,82.258 161.787 C 82.166 161.638,80.543 161.540,78.211 161.542 C 75.942 161.544,74.458 161.635,74.654 161.759 M190.862 162.011 C 192.302 162.165,193.117 162.528,192.039 162.535 C 191.709 162.537,191.272 162.647,191.067 162.779 C 190.785 162.962,190.889 163.021,191.501 163.023 C 191.945 163.026,192.308 163.139,192.308 163.275 C 192.308 163.412,192.084 163.524,191.811 163.524 C 191.538 163.524,191.315 163.635,191.315 163.772 C 191.315 163.908,191.465 164.020,191.648 164.020 C 192.246 164.020,192.639 166.507,192.184 167.418 C 191.664 168.461,190.806 169.010,190.213 168.678 C 189.935 168.523,189.077 168.493,187.994 168.601 C 187.023 168.697,185.316 168.851,184.201 168.942 C 183.086 169.032,182.098 169.183,182.005 169.276 C 181.584 169.700,182.299 169.975,183.824 169.978 C 184.737 169.979,186.032 170.147,186.702 170.350 C 188.243 170.818,189.263 170.816,190.165 170.346 C 190.677 170.079,191.686 169.975,193.775 169.975 C 197.401 169.975,197.270 170.102,197.270 166.576 C 197.270 164.082,197.319 163.768,197.705 163.742 C 197.944 163.726,197.804 163.628,197.395 163.524 C 196.702 163.347,196.694 163.332,197.270 163.301 C 197.642 163.281,197.775 163.194,197.602 163.084 C 197.218 162.840,197.714 162.141,198.393 161.968 C 198.663 161.900,196.762 161.848,194.169 161.852 C 191.576 161.856,190.087 161.928,190.862 162.011 M134.759 168.623 C 134.737 168.919,135.238 169.479,135.526 169.479 C 135.631 169.479,135.652 169.312,135.574 169.108 C 135.496 168.904,135.341 168.793,135.231 168.862 C 135.120 168.930,134.973 168.845,134.904 168.674 C 134.835 168.503,134.770 168.480,134.759 168.623 M242.789 171.802 L 243.518 172.385 242.974 174.220 C 242.675 175.229,242.428 176.390,242.425 176.799 C 242.423 177.208,242.200 177.823,241.930 178.164 L 241.439 178.784 240.948 178.164 C 240.679 177.823,240.456 177.208,240.453 176.799 C 240.450 176.390,240.204 175.229,239.904 174.220 L 239.361 172.385 240.090 171.802 C 240.491 171.481,241.098 171.218,241.439 171.218 C 241.780 171.218,242.388 171.481,242.789 171.802 M145.716 181.959 C 145.952 182.150,146.073 182.380,145.985 182.469 C 145.896 182.558,145.953 182.630,146.112 182.630 C 146.600 182.630,146.434 182.167,145.844 181.881 C 145.343 181.638,145.330 181.646,145.716 181.959 M92.381 186.215 C 92.143 186.486,92.167 186.589,92.497 186.715 C 92.726 186.803,92.834 186.795,92.737 186.698 C 92.640 186.601,92.685 186.372,92.837 186.189 C 93.201 185.750,92.768 185.775,92.381 186.215 M93.479 186.603 C 93.244 186.878,93.054 187.241,93.056 187.410 C 93.059 187.636,93.115 187.629,93.270 187.386 C 93.385 187.204,93.578 187.036,93.699 187.014 C 93.819 186.991,93.883 186.822,93.840 186.638 C 93.798 186.452,93.882 186.376,94.028 186.466 C 94.174 186.556,94.293 186.512,94.293 186.367 C 94.293 185.956,93.947 186.057,93.479 186.603 M91.760 187.157 C 92.022 187.474,92.022 187.567,91.760 187.668 C 91.583 187.735,91.690 187.778,91.998 187.763 C 92.305 187.748,92.556 187.675,92.556 187.600 C 92.556 187.525,92.305 187.308,91.998 187.117 C 91.497 186.805,91.473 186.809,91.760 187.157 M191.749 187.362 C 191.238 187.632,190.819 187.935,190.819 188.036 C 190.819 188.877,194.616 189.196,196.285 188.494 L 197.142 188.133 196.524 187.883 C 193.875 186.811,192.978 186.713,191.749 187.362 M82.940 187.530 C 84.135 187.575,86.089 187.575,87.283 187.530 C 88.477 187.484,87.500 187.447,85.112 187.447 C 82.723 187.447,81.746 187.484,82.940 187.530 M89.578 187.770 C 89.578 187.946,89.801 188.089,90.074 188.089 C 90.347 188.089,90.571 187.929,90.571 187.733 C 90.571 187.529,90.358 187.392,90.074 187.413 C 89.801 187.434,89.578 187.594,89.578 187.770 M284.074 188.027 C 287.120 188.067,292.033 188.067,294.992 188.027 C 297.951 187.987,295.459 187.955,289.454 187.955 C 283.449 187.955,281.028 187.988,284.074 188.027 M164.764 190.959 C 164.764 191.388,165.369 192.103,166.012 192.436 L 166.749 192.817 166.749 191.818 L 166.749 190.819 165.757 190.819 C 165.211 190.819,164.764 190.882,164.764 190.959 M180.930 193.460 C 181.291 193.524,181.783 193.793,182.023 194.059 C 182.351 194.422,182.787 194.541,183.785 194.541 L 185.112 194.541 184.555 193.984 C 184.087 193.516,183.702 193.421,182.136 193.386 C 181.111 193.363,180.568 193.397,180.930 193.460", fill: "white" }),
        };
                                
var LogoWithText = React.memo(Logo$2, function (prev, next) { return prev.isDark === next.isDark; });

var Icon$o = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M4.1534 13.6089L4.15362 13.61C4.77322 16.8113 7.42207 19.3677 10.647 19.8853L10.6502 19.8858C13.0412 20.2736 15.2625 19.6103 16.9422 18.2833C11.3549 16.2878 7.9748 10.3524 9.26266 4.48816C5.69846 5.77194 3.35817 9.51245 4.1534 13.6089ZM10.0083 2.21054C4.76622 3.2533 1.09895 8.36947 2.19006 13.9901C2.97006 18.0201 6.28006 21.2101 10.3301 21.8601C13.8512 22.4311 17.0955 21.1608 19.2662 18.8587C19.2765 18.8478 19.2866 18.837 19.2968 18.8261C19.4385 18.6745 19.5757 18.5184 19.7079 18.3581C19.7105 18.355 19.713 18.3519 19.7156 18.3487C19.8853 18.1426 20.0469 17.9295 20.2001 17.7101C20.4101 17.4001 20.2401 16.9601 19.8701 16.9201C19.5114 16.8796 19.1602 16.8209 18.817 16.7452C18.7964 16.7406 18.7758 16.736 18.7552 16.7313C18.6676 16.7114 18.5804 16.6903 18.4938 16.6681C18.4919 16.6676 18.4901 16.6672 18.4882 16.6667C13.0234 15.2647 9.72516 9.48006 11.4542 4.03417C11.4549 4.03214 11.4555 4.03012 11.4562 4.0281C11.4875 3.92954 11.5205 3.83109 11.5552 3.73278C11.5565 3.72911 11.5578 3.72543 11.5591 3.72175C11.6768 3.38921 11.8136 3.05829 11.9701 2.73005C12.1301 2.39005 11.8501 2.01005 11.4701 2.03005C11.1954 2.04379 10.924 2.06848 10.6561 2.10368C10.6517 2.10427 10.6472 2.10486 10.6428 2.10545C10.4413 2.13221 10.2418 2.16492 10.0446 2.2034C10.0325 2.20576 10.0204 2.20814 10.0083 2.21054Z" })));
};

var Icon$n = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z" })));
};

var Icon$m = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12.8533 3.39627C12.4634 2.75821 11.5366 2.75821 11.1467 3.39627L7.42977 9.47855C7.02256 10.1449 7.50213 11 8.28306 11H15.7169C16.4979 11 16.9774 10.1449 16.5702 9.47855L12.8533 3.39627ZM12 5.84L13.93 9H10.06L12 5.84ZM17.5 13C15.01 13 13 15.01 13 17.5C13 19.99 15.01 22 17.5 22C19.99 22 22 19.99 22 17.5C22 15.01 19.99 13 17.5 13ZM17.5 20C16.12 20 15 18.88 15 17.5C15 16.12 16.12 15 17.5 15C18.88 15 20 16.12 20 17.5C20 18.88 18.88 20 17.5 20ZM3 19.5C3 20.6046 3.89543 21.5 5 21.5H9C10.1046 21.5 11 20.6046 11 19.5V15.5C11 14.3954 10.1046 13.5 9 13.5H5C3.89543 13.5 3 14.3954 3 15.5V19.5ZM5 15.5H9V19.5H5V15.5Z" })));
};

var Icon$l = function (props) {
    return (React.createElement(Svg, __assign({ height: "20", viewBox: "0 0 20 20", fill: "none" }, props),
        React.createElement("path", { d: "M0.194067 9.1644C0.0924779 8.55487 0.562521 8 1.18046 8H18.8195C19.4375 8 19.9075 8.55487 19.8059 9.1644L18.1393 19.1644C18.0589 19.6466 17.6417 20 17.1529 20H2.84713C2.35829 20 1.9411 19.6466 1.86073 19.1644L0.194067 9.1644Z", fill: "white" }),
        React.createElement("circle", { cx: "4.5", cy: "3.5", r: "1.5", fill: "white" }),
        React.createElement("circle", { cx: "7.5", cy: "1.5", r: "1.5", fill: "white" }),
        React.createElement("circle", { cx: "11.5", cy: "5.5", r: "1.5", fill: "white" }),
        React.createElement("circle", { cx: "14.5", cy: "3.5", r: "1.5", fill: "white" }),
        React.createElement("circle", { cx: "11.5", cy: "1.5", r: "1.5", fill: "white" }),
        React.createElement("circle", { cx: "7.5", cy: "5.5", r: "1.5", fill: "white" })));
};

var Icon$k = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M3.18731 5.68438C2.44993 5.52604 2.44993 4.47393 3.18731 4.31559L5.3203 3.85755C5.58957 3.79973 5.79991 3.58939 5.85774 3.32012L6.31577 1.18713C6.47411 0.449748 7.52622 0.449751 7.68457 1.18713L8.1426 3.32012C8.20042 3.58939 8.41076 3.79973 8.68003 3.85755L10.813 4.31559C11.5504 4.47393 11.5504 5.52604 10.813 5.68438L8.68003 6.14241C8.41076 6.20024 8.20042 6.41058 8.1426 6.67985L7.68457 8.81284C7.52622 9.55022 6.47411 9.55022 6.31577 8.81284L5.85774 6.67985C5.79991 6.41058 5.58957 6.20024 5.3203 6.14241L3.18731 5.68438Z" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M12 2.99998C15.866 2.99998 19 6.13399 19 9.99998C19 13.866 15.866 17 12 17C8.13401 17 5 13.866 5 9.99998C5 9.4477 4.55228 8.99998 4 8.99998C3.44772 8.99998 3 9.4477 3 9.99998C3 12.8894 4.36163 15.4608 6.47822 17.1075L5.58579 18C5.21071 18.3751 5 18.8838 5 19.4142V21.5C5 22.3284 5.67157 23 6.5 23H17.5C18.3284 23 19 22.3284 19 21.5V19.4142C19 18.8838 18.7893 18.3751 18.4142 18L17.5218 17.1075C19.6384 15.4608 21 12.8894 21 9.99998C21 5.02942 16.9706 0.999985 12 0.999985C11.4477 0.999985 11 1.4477 11 1.99998C11 2.55227 11.4477 2.99998 12 2.99998ZM12 19C10.6564 19 9.38156 18.7056 8.23649 18.1777L7 19.4142L7 21H17V19.4142L15.7635 18.1777C14.6184 18.7056 13.3436 19 12 19Z" })));
};

var Icon$j = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M5.66 4.2L6.05 4.59C6.44 4.97 6.44 5.61 6.05 5.99L6.04 6C5.65 6.39 5.03 6.39 4.64 6L4.25 5.61C3.86 5.23 3.86 4.6 4.25 4.21L4.26 4.2C4.64 3.82 5.27 3.81 5.66 4.2Z" }),
        React.createElement("path", { d: "M1.99 10.95H3.01C3.56 10.95 4 11.39 4 11.95V11.96C4 12.51 3.56 12.95 3 12.94H1.99C1.44 12.94 1 12.5 1 11.95V11.94C1 11.39 1.44 10.95 1.99 10.95Z" }),
        React.createElement("path", { d: "M12 1H12.01C12.56 1 13 1.44 13 1.99V2.96C13 3.51 12.56 3.95 12 3.94H11.99C11.44 3.94 11 3.5 11 2.95V1.99C11 1.44 11.44 1 12 1Z" }),
        React.createElement("path", { d: "M18.34 4.2C18.73 3.82 19.36 3.82 19.75 4.21C20.14 4.6 20.14 5.22 19.75 5.61L19.36 6C18.98 6.39 18.35 6.39 17.96 6L17.95 5.99C17.56 5.61 17.56 4.98 17.95 4.59L18.34 4.2Z" }),
        React.createElement("path", { d: "M18.33 19.7L17.94 19.31C17.55 18.92 17.55 18.3 17.95 17.9C18.33 17.52 18.96 17.51 19.35 17.9L19.74 18.29C20.13 18.68 20.13 19.31 19.74 19.7C19.35 20.09 18.72 20.09 18.33 19.7Z" }),
        React.createElement("path", { d: "M20 11.95V11.94C20 11.39 20.44 10.95 20.99 10.95H22C22.55 10.95 22.99 11.39 22.99 11.94V11.95C22.99 12.5 22.55 12.94 22 12.94H20.99C20.44 12.94 20 12.5 20 11.95Z" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M6 11.95C6 8.64 8.69 5.95 12 5.95C15.31 5.95 18 8.64 18 11.95C18 15.26 15.31 17.95 12 17.95C8.69 17.95 6 15.26 6 11.95ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" }),
        React.createElement("path", { d: "M12 22.9H11.99C11.44 22.9 11 22.46 11 21.91V20.95C11 20.4 11.44 19.96 11.99 19.96H12C12.55 19.96 12.99 20.4 12.99 20.95V21.91C12.99 22.46 12.55 22.9 12 22.9Z" }),
        React.createElement("path", { d: "M5.66 19.69C5.27 20.08 4.64 20.08 4.25 19.69C3.86 19.3 3.86 18.68 4.24 18.28L4.63 17.89C5.02 17.5 5.65 17.5 6.04 17.89L6.05 17.9C6.43 18.28 6.44 18.91 6.05 19.3L5.66 19.69Z" })));
};

var Icon$i = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M19 5H17C17 3.89543 16.1046 3 15 3H9C7.89543 3 7 3.89543 7 5H5C3.9 5 3 5.9 3 7V8C3 10.55 4.92 12.63 7.39 12.94C8.02 14.44 9.37 15.57 11 15.9V19H8C7.44772 19 7 19.4477 7 20C7 20.5523 7.44772 21 8 21H16C16.5523 21 17 20.5523 17 20C17 19.4477 16.5523 19 16 19H13V15.9C14.63 15.57 15.98 14.44 16.61 12.94C19.08 12.63 21 10.55 21 8V7C21 5.9 20.1 5 19 5ZM5 8V7H7V10.82C5.84 10.4 5 9.3 5 8ZM12 14C10.35 14 9 12.65 9 11V5H15V11C15 12.65 13.65 14 12 14ZM19 8C19 9.3 18.16 10.4 17 10.82V7H19V8Z" })));
};

var Icon$h = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M12 3C7.02985 3 3 7.02985 3 11.9904C3 16.9606 7.02985 21 12 21C16.9701 21 21 16.9606 21 11.9904C21 7.02985 16.9701 3 12 3ZM16.4328 8.65139C16.3753 9.48614 14.8305 15.7228 14.8305 15.7228C14.8305 15.7228 14.7345 16.0874 14.3987 16.097C14.2836 16.097 14.1301 16.0874 13.9574 15.9243C13.6023 15.6269 12.7964 15.0512 12.0384 14.5235C12.0096 14.5522 11.9808 14.581 11.9424 14.6098C11.7697 14.7633 11.5107 14.984 11.2324 15.2527C11.1269 15.3486 11.0117 15.4542 10.8966 15.5693L10.887 15.5789C10.8198 15.6461 10.7623 15.694 10.7143 15.7324C10.3401 16.0394 10.3017 15.7804 10.3017 15.6461L10.5032 13.4488V13.4296L10.5128 13.4104C10.5224 13.3817 10.5416 13.3721 10.5416 13.3721C10.5416 13.3721 14.4659 9.87953 14.5714 9.50533C14.581 9.48614 14.5522 9.46695 14.5043 9.48614C14.2452 9.57249 9.72601 12.4318 9.22708 12.7484C9.19829 12.7676 9.11194 12.758 9.11194 12.758L6.91471 12.0384C6.91471 12.0384 6.65565 11.9328 6.742 11.693C6.76119 11.645 6.78998 11.597 6.89552 11.5299C7.38486 11.1844 15.8955 8.12367 15.8955 8.12367C15.8955 8.12367 16.1354 8.04691 16.2793 8.09488C16.3465 8.12367 16.3849 8.15245 16.4232 8.2484C16.4328 8.28678 16.4424 8.36354 16.4424 8.44989C16.4424 8.49787 16.4328 8.55544 16.4328 8.65139Z", fill: "#ffd348" })));
};

var Icon$g = function (props) {
    return (React.createElement(Svg, __assign({ height: "24", viewBox: "0 0 24 24", fill: "none" }, props),
        React.createElement("path", { d: "M15.5598 4.17396C14.0817 4.53812 12.8192 5.45009 12 6.68221C11.1808 5.45009 9.91829 4.53812 8.44019 4.17396C9.10369 2.88308 10.4487 2 12 2C13.5513 2 14.8963 2.88308 15.5598 4.17396Z", fill: "white" }),
        React.createElement("path", { d: "M4.05673 14.0424C4.49248 10.3896 7.38955 7.49248 11.0424 7.05673C10.1331 5.81007 8.66115 5 7 5C4.23858 5 2 7.23858 2 10C2 11.6611 2.81007 13.1331 4.05673 14.0424Z", fill: "white" }),
        React.createElement("path", { d: "M19.9433 14.0424C21.1899 13.1331 22 11.6611 22 10C22 7.23858 19.7614 5 17 5C15.3389 5 13.8669 5.81007 12.9576 7.05673C16.6104 7.49248 19.5075 10.3896 19.9433 14.0424Z", fill: "white" }),
        React.createElement("path", { d: "M12 22C15.866 22 19 18.866 19 15C19 11.134 15.866 8 12 8C8.13401 8 5 11.134 5 15C5 18.866 8.13401 22 12 22ZM9.5 13.25C9.5 12.8358 9.83579 12.5 10.25 12.5H14.5C14.8125 12.5 15.0922 12.6937 15.2021 12.9862C15.3118 13.2782 15.2293 13.6076 14.995 13.8134L14.9942 13.8142L14.982 13.8252C14.9708 13.8353 14.9527 13.852 14.9285 13.8749C14.8801 13.9208 14.8073 13.9918 14.7162 14.0864C14.5338 14.276 14.28 14.5586 14.0034 14.9226C13.4473 15.6542 12.8157 16.693 12.4736 17.9473C12.3646 18.347 11.9523 18.5826 11.5527 18.4736C11.153 18.3646 10.9174 17.9523 11.0264 17.5527C11.4343 16.057 12.1777 14.8458 12.8091 14.0149L12.8205 14H10.25C9.83579 14 9.5 13.6642 9.5 13.25Z", fill: "white" })));
};

var Icon$f = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 20 20", fill: "none" }, props),
        React.createElement("path", { d: "M11.7011 13.75C11.7011 14.0214 11.8226 14.2855 12.0472 14.5022C12.2717 14.719 12.5872 14.8767 12.946 14.9516C13.3047 15.0264 13.6872 15.0143 14.0356 14.917C14.384 14.8198 14.6794 14.6427 14.8772 14.4125L19.4969 11.0538C19.6565 10.9376 19.7831 10.7998 19.8694 10.648C19.9557 10.4963 20.0001 10.3337 20 10.1696C19.9999 10.0054 19.9554 9.84281 19.8689 9.69114C19.7824 9.53948 19.6558 9.40168 19.4961 9.28563C19.3364 9.16957 19.1469 9.07752 18.9383 9.01475C18.7297 8.95197 18.5061 8.91969 18.2804 8.91975C18.0546 8.9198 17.8311 8.9522 17.6226 9.01509C17.4141 9.07797 17.2246 9.17011 17.065 9.28625L15.1401 10.6862V1.25C15.1401 0.918479 14.9591 0.600537 14.6368 0.366117C14.3145 0.131696 13.8773 0 13.4215 0C12.9657 0 12.5285 0.131696 12.2062 0.366117C11.8839 0.600537 11.7028 0.918479 11.7028 1.25V13.6875V13.75H11.7011Z", fill: "white" }),
        React.createElement("path", { d: "M8.3188 6.25C8.3188 5.97858 8.19733 5.71453 7.97275 5.49776C7.74816 5.28098 7.43267 5.12327 7.07395 5.04844C6.71522 4.97361 6.33275 4.98574 5.98434 5.08299C5.63593 5.18025 5.34051 5.35734 5.14272 5.58751L0.524685 8.94625C0.360536 9.06156 0.229605 9.1995 0.139532 9.352C0.0494585 9.50451 0.00204791 9.66853 6.48914e-05 9.8345C-0.00191812 10.0005 0.0415665 10.1651 0.127982 10.3187C0.214398 10.4723 0.342013 10.6119 0.503383 10.7292C0.664752 10.8466 0.856644 10.9394 1.06786 11.0023C1.27908 11.0651 1.50539 11.0968 1.73359 11.0953C1.96179 11.0939 2.18732 11.0594 2.397 10.9939C2.60668 10.9284 2.79633 10.8331 2.95487 10.7138L4.88148 9.31376V18.75C4.88148 19.0815 5.06255 19.3995 5.38487 19.6339C5.70718 19.8683 6.14432 20 6.60014 20C7.05596 20 7.4931 19.8683 7.81541 19.6339C8.13772 19.3995 8.3188 19.0815 8.3188 18.75V6.31251V6.25Z", fill: "white" })));
};

var Icon$e = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24" }, props),
        React.createElement("path", { d: "M8.65854 19C15.4488 19 19.1659 13.2338 19.1659 8.23717C19.1659 8.07728 19.1659 7.91739 19.1561 7.7475C19.878 7.21785 20.5024 6.5483 21 5.78881C20.3366 6.08861 19.6244 6.28847 18.8732 6.38841C19.6341 5.91872 20.2195 5.17921 20.5024 4.28981C19.7902 4.72951 19 5.03931 18.1512 5.20919C17.478 4.45969 16.522 4 15.4585 4C13.4195 4 11.761 5.69887 11.761 7.78747C11.761 8.08728 11.8 8.36709 11.8585 8.6469C8.79512 8.497 6.07317 6.97801 4.24878 4.68954C3.92683 5.25916 3.75122 5.90873 3.75122 6.59827C3.75122 7.90739 4.40488 9.06662 5.39024 9.74617C4.78537 9.72618 4.21951 9.5563 3.72195 9.27648C3.72195 9.28648 3.72195 9.30646 3.72195 9.32645C3.72195 11.1552 5 12.6942 6.67805 13.034C6.36585 13.1239 6.0439 13.1639 5.70244 13.1639C5.46829 13.1639 5.23415 13.1439 5.00976 13.0939C5.47805 14.6029 6.8439 15.6922 8.46341 15.7222C7.19512 16.7415 5.60488 17.3411 3.87805 17.3411C3.58537 17.3411 3.28293 17.3311 3 17.2911C4.62927 18.3704 6.57073 19 8.65854 19Z", fill: "#ffd348" })));
};

var Icon$d = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "none" }, props),
        React.createElement("path", { d: "M12 2C6.475 2 2 6.475 2 12C2 17.525 6.475 22 12 22C17.525 22 22 17.525 22 12C22 6.475 17.525 2 12 2ZM6.5 9L10 5.5L13.5 9H11V13H9V9H6.5ZM17.5 15L14 18.5L10.5 15H13V11H15V15H17.5Z", fill: "white" })));
};

var Icon$c = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 24 24", fill: "none" }, props),
        React.createElement("path", { d: "M7.99166 9.28662H5.9054V19.741H7.99166V9.28662Z", fill: "white" }),
        React.createElement("path", { d: "M18.1169 2.47314V4.23897H19.8911L18.1169 2.47314Z", fill: "white" }),
        React.createElement("path", { d: "M7.99166 7.19189H5.9054V8.84733H7.99166V7.19189Z", fill: "white" }),
        React.createElement("path", { d: "M18.0949 7.19189H8.43091V8.84733H18.0949V7.19189Z", fill: "white" }),
        React.createElement("path", { d: "M8.43091 19.741H18.0949V9.28662H8.43091V19.741ZM16.2108 10.7442H17.0515V11.581H16.2108V10.7442ZM16.2108 12.4189H17.0515V13.2556H16.2108V12.4189ZM16.2108 14.0937H17.0515V14.9305H16.2108V14.0937ZM16.2108 15.7684H17.0515V16.6051H16.2108V15.7684ZM16.2108 17.4432H17.0515V18.2799H16.2108V17.4432ZM14.5271 10.7442H15.3677V11.581H14.5271V10.7442ZM14.5271 12.4189H15.3677V13.2556H14.5271V12.4189ZM14.5271 14.0937H15.3677V14.9305H14.5271V14.0937ZM14.5271 15.7684H15.3677V16.6051H14.5271V15.7684ZM14.5271 17.4432H15.3677V18.2799H14.5271V17.4432ZM12.8433 10.7442H13.684V11.581H12.8433V10.7442ZM12.8433 12.4189H13.684V13.2556H12.8433V12.4189ZM12.8433 14.0937H13.684V14.9305H12.8433V14.0937ZM12.8433 15.7684H13.684V16.6051H12.8433V15.7684ZM12.8433 17.4432H13.684V18.2799H12.8433V17.4432ZM11.1595 10.7442H12.0002V11.581H11.1595V10.7442ZM11.1595 12.4189H12.0002V13.2556H11.1595V12.4189ZM11.1595 14.0937H12.0002V14.9305H11.1595V14.0937ZM11.1595 15.7684H12.0002V16.6051H11.1595V15.7684ZM11.1595 17.4432H12.0002V18.2799H11.1595V17.4432ZM9.47538 10.7442H10.3164V11.581H9.47538V10.7442ZM9.47538 12.4189H10.3164V13.2556H9.47538V12.4189ZM9.47538 14.0937H10.3164V14.9305H9.47538V14.0937ZM9.47538 15.7684H10.3164V16.6051H9.47538V15.7684ZM9.47538 17.4432H10.3164V18.2799H9.47538V17.4432Z", fill: "white" }),
        React.createElement("path", { d: "M17.8973 4.67802C17.776 4.67802 17.6776 4.57967 17.6776 4.45836V2.16406H3.79895L3.79918 3.81969H13.2629C13.3842 3.81969 13.4825 3.91803 13.4825 4.03934C13.4825 4.16066 13.3842 4.259 13.2629 4.259H3.79928L3.80195 21.8358H20.2011V4.67802H17.8973ZM13.2629 5.25233H15.3676C15.489 5.25233 15.5873 5.35067 15.5873 5.47198C15.5873 5.5933 15.489 5.69164 15.3676 5.69164H13.2629C13.1416 5.69164 13.0432 5.5933 13.0432 5.47198C13.0432 5.35067 13.1416 5.25233 13.2629 5.25233ZM5.68576 5.25233H11.5792C11.7005 5.25233 11.7988 5.35067 11.7988 5.47198C11.7988 5.5933 11.7005 5.69164 11.5792 5.69164H5.68576C5.5645 5.69164 5.46611 5.5933 5.46611 5.47198C5.46611 5.35067 5.56445 5.25233 5.68576 5.25233ZM18.5342 9.06701V19.9606C18.5342 20.0819 18.4359 20.1802 18.3145 20.1802H8.21129H5.68576C5.5645 20.1802 5.46611 20.0819 5.46611 19.9606V9.06701V6.97231C5.46611 6.851 5.56445 6.75266 5.68576 6.75266H8.21129H18.3146C18.4359 6.75266 18.5342 6.851 18.5342 6.97231V9.06701H18.5342Z", fill: "white" })));
};

var Icon$b = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 30 30", fill: "none" }, props),
        React.createElement("circle", { cx: "15", cy: "15", r: "15", fill: "#ffd348" }),
        React.createElement("path", { d: "M8.13778 9.90912H11.5511L15.1562 18.7046H15.3097L18.9148 9.90912H22.3281V23H19.6435V14.4794H19.5348L16.147 22.9361H14.3189L10.9311 14.4475H10.8224V23H8.13778V9.90912Z", fill: "#000000" })));
};

var Icon$a = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 30 30", fill: "none" }, props),
        React.createElement("g", { clipPath: "url(#clip0_490_1410)" },
            React.createElement("path", { d: "M15.0001 0C6.71687 0 0 6.71563 0 15.0001C0 21.6276 4.29799 27.2503 10.258 29.2337C11.0077 29.3725 11.2829 28.9083 11.2829 28.5121C11.2829 28.1544 11.269 26.9728 11.2625 25.7194C7.08946 26.6268 6.2089 23.9496 6.2089 23.9496C5.52656 22.2158 4.54341 21.7547 4.54341 21.7547C3.18245 20.8238 4.64599 20.8429 4.64599 20.8429C6.15227 20.9487 6.94539 22.3887 6.94539 22.3887C8.28325 24.6818 10.4545 24.0189 11.3105 23.6356C11.4451 22.6661 11.8338 22.0044 12.2628 21.6298C8.93107 21.2505 5.42869 19.9643 5.42869 14.2167C5.42869 12.579 6.01466 11.2409 6.97421 10.1904C6.81846 9.81263 6.30503 8.28698 7.11952 6.22082C7.11952 6.22082 8.37913 5.81768 11.2456 7.75839C12.4421 7.42604 13.7254 7.25937 15.0001 7.25365C16.2749 7.25937 17.5591 7.42604 18.7579 7.75839C21.6209 5.81768 22.8787 6.22082 22.8787 6.22082C23.6952 8.28698 23.1815 9.81263 23.0258 10.1904C23.9876 11.2409 24.5696 12.579 24.5696 14.2167C24.5696 19.978 21.0605 21.2465 17.7203 21.6179C18.2583 22.0834 18.7377 22.9962 18.7377 24.3957C18.7377 26.4027 18.7203 28.018 18.7203 28.5121C18.7203 28.9113 18.9904 29.379 19.7507 29.2317C25.7075 27.246 30 21.6253 30 15.0001C30 6.71563 23.2841 0 15.0001 0ZM5.61803 21.368C5.585 21.4425 5.46775 21.4649 5.36094 21.4137C5.25215 21.3648 5.19104 21.2632 5.22631 21.1884C5.25861 21.1116 5.3761 21.0903 5.48465 21.1417C5.59369 21.1906 5.65579 21.2932 5.61803 21.368ZM6.35587 22.0264C6.28434 22.0927 6.14449 22.0619 6.0496 21.9571C5.95149 21.8525 5.9331 21.7126 6.00564 21.6453C6.07941 21.579 6.21503 21.61 6.3134 21.7146C6.41151 21.8204 6.43064 21.9593 6.35587 22.0264ZM6.86206 22.8687C6.77015 22.9325 6.61987 22.8727 6.52697 22.7393C6.43507 22.6059 6.43507 22.4459 6.52896 22.3819C6.62211 22.3178 6.77015 22.3754 6.8643 22.5078C6.95595 22.6434 6.95595 22.8034 6.86206 22.8687ZM7.71813 23.8443C7.63591 23.9349 7.46079 23.9106 7.33262 23.7869C7.20146 23.6659 7.16495 23.4943 7.24742 23.4036C7.33063 23.3127 7.50674 23.3383 7.63591 23.461C7.76607 23.5817 7.80581 23.7546 7.71813 23.8443ZM8.82451 24.1736C8.78825 24.2911 8.61959 24.3445 8.44968 24.2946C8.28003 24.2432 8.169 24.1056 8.20328 23.9868C8.23855 23.8686 8.40795 23.8129 8.5791 23.8664C8.7485 23.9175 8.85979 24.0541 8.82451 24.1736ZM10.0836 24.3133C10.0878 24.437 9.94378 24.5396 9.76543 24.5418C9.58609 24.5458 9.44103 24.4457 9.43904 24.324C9.43904 24.1991 9.57988 24.0975 9.75922 24.0945C9.93757 24.091 10.0836 24.1904 10.0836 24.3133ZM11.3206 24.2659C11.3419 24.3866 11.218 24.5106 11.0409 24.5436C10.8667 24.5754 10.7055 24.5009 10.6834 24.3812C10.6618 24.2575 10.788 24.1335 10.9619 24.1015C11.1392 24.0707 11.298 24.1432 11.3206 24.2659Z", fill: "#ffd348" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: "clip0_490_1410" },
                React.createElement("rect", { width: "30", height: "29.2969", fill: "white" })))));
};

var Icon$9 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 30 30", fill: "none" }, props),
        React.createElement("circle", { cx: "15", cy: "15", r: "15", fill: "#ffd348" }),
        React.createElement("path", { d: "M13.4524 20.6384C13.7804 20.6384 14.0757 20.9008 14.0757 21.2617C14.0757 21.5897 13.8132 21.885 13.4524 21.885C13.1243 21.885 12.8291 21.6225 12.8291 21.2617C12.8291 20.9008 13.1243 20.6384 13.4524 20.6384ZM23.0973 16.8329C22.7692 16.8329 22.474 16.5705 22.474 16.2096C22.474 15.8815 22.7364 15.5863 23.0973 15.5863C23.4253 15.5863 23.7206 15.8487 23.7206 16.2096C23.7206 16.5376 23.4253 16.8329 23.0973 16.8329ZM23.0973 14.3069C22.0475 14.3069 21.1945 15.1598 21.1945 16.2096C21.1945 16.4064 21.2273 16.6033 21.2929 16.8001L15.0271 20.1463C14.6662 19.6214 14.0757 19.3261 13.4524 19.3261C12.7306 19.3261 12.0745 19.7526 11.7465 20.3759L6.10389 17.4234C5.51338 17.0953 5.0541 16.144 5.11971 15.2254C5.15252 14.7661 5.31655 14.4053 5.54619 14.2741C5.71022 14.1756 5.87425 14.2084 6.10389 14.3069L6.13669 14.3397C7.64576 15.127 12.5338 17.6859 12.7306 17.7843C13.0587 17.9155 13.2227 17.9811 13.7804 17.7187L23.8846 12.4697C24.0486 12.4041 24.2127 12.2729 24.2127 12.0433C24.2127 11.748 23.9174 11.6168 23.9174 11.6168C23.3269 11.3543 22.4412 10.9279 21.5882 10.5342C19.7511 9.68124 17.6515 8.69707 16.7329 8.20499C15.9456 7.77851 15.2895 8.13937 15.1911 8.20499L14.9614 8.3034C10.7951 10.403 5.28374 13.1258 4.95568 13.3227C4.39799 13.6507 4.03712 14.3397 4.00432 15.1926C3.93871 16.5376 4.62763 17.9483 5.6118 18.4404L11.5824 21.5241C11.7137 22.4427 12.5338 23.1644 13.4524 23.1644C14.5022 23.1644 15.3223 22.3443 15.3551 21.2945L21.9163 17.7515C22.2443 18.0139 22.6708 18.1451 23.0973 18.1451C24.1471 18.1451 25 17.2922 25 16.2424C25 15.1598 24.1471 14.3069 23.0973 14.3069Z", fill: "#000000" })));
};

var Icon$8 = function (props) {
    return (React.createElement(Svg, __assign({ width: "24", height: "20", viewBox: "0 0 24 20", fill: "none", xmlns: "http://www.w3.org/2000/svg" }, props),
        React.createElement("path", { d: "M8.4 9.9999C11.0513 9.9999 13.2 7.85078 13.2 5.1999C13.2 2.54903 11.0513 0.399902 8.4 0.399902C5.74875 0.399902 3.6 2.54903 3.6 5.1999C3.6 7.85078 5.74875 9.9999 8.4 9.9999ZM10.3013 11.7999H6.49875C2.90887 11.7999 0 14.7099 0 18.2987C0 19.0187 0.582 19.5999 1.29975 19.5999H15.4987C16.2188 19.5999 16.8 19.0187 16.8 18.2987C16.8 14.7099 13.89 11.7999 10.3013 11.7999ZM17.9663 12.3999H15.1969C16.92 13.8137 18 15.9287 18 18.2987C18 18.7787 17.8575 19.2212 17.625 19.5999H22.8C23.4638 19.5999 24 19.0599 24 18.3662C24 15.0849 21.315 12.3999 17.9663 12.3999ZM16.2 9.9999C18.5213 9.9999 20.4 8.12115 20.4 5.7999C20.4 3.47865 18.5213 1.5999 16.2 1.5999C15.2584 1.5999 14.3985 1.92071 13.698 2.44403C14.13 3.27353 14.4 4.2024 14.4 5.1999C14.4 6.5319 13.9526 7.75515 13.2154 8.75153C13.9763 9.5199 15.03 9.9999 16.2 9.9999Z", fill: "white" })));
};

var IconModule = /*#__PURE__*/Object.freeze({
    __proto__: null,
    FarmIcon: Icon$w,
    GroupsIcon: Icon$v,
    HamburgerIcon: Icon$u,
    HamburgerCloseIcon: Icon$t,
    HomeIcon: Icon$s,
    IfoIcon: Icon$r,
    InfoIcon: Icon$q,
    LanguageIcon: Icon$p,
    LogoIcon: LogoWithText,
    MoonIcon: Icon$o,
    MoreIcon: Icon$n,
    NftIcon: Icon$m,
    PoolIcon: Icon$l,
    PredictionsIcon: Icon$k,
    SunIcon: Icon$j,
    TeamBattleIcon: Icon$i,
    TelegramIcon: Icon$h,
    TicketIcon: Icon$g,
    TradeIcon: Icon$f,
    TwitterIcon: Icon$e,
    DefiIcon: Icon$d,
    AuditIcon: Icon$c,
    MediumIcon: Icon$b,
    GithubIcon: Icon$a,
    GitbookIcon: Icon$9,
    ReferralIcon: Icon$8
});

var MenuButton = styled(Button)(templateObject_1$d || (templateObject_1$d = __makeTemplateObject(["\n  color: ", ";\n  padding: 0 8px;\n  border-radius: 8px;\n"], ["\n  color: ", ";\n  padding: 0 8px;\n  border-radius: 8px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
});
MenuButton.defaultProps = {
    variant: "text",
    size: "sm",
};
var templateObject_1$d;

var blink = keyframes(templateObject_1$c || (templateObject_1$c = __makeTemplateObject(["\n  0%,  100% { transform: scaleY(1); } \n  50% { transform:  scaleY(0.1); } \n"], ["\n  0%,  100% { transform: scaleY(1); } \n  50% { transform:  scaleY(0.1); } \n"])));
var StyledLink = styled(Link$1)(templateObject_2$5 || (templateObject_2$5 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  .mobile-icon {\n    width: 32px;\n    ", " {\n      display: none;\n    }\n  }\n  .desktop-icon {\n    width: 160px;\n    display: none;\n    ", " {\n      display: block;\n    }\n  }\n  .right-eye {\n    animation-delay: 20ms;\n  }\n  &:hover {\n    .left-eye,\n    .right-eye {\n      transform-origin: center 60%;\n      animation-name: ", ";\n      animation-duration: 350ms;\n      animation-iteration-count: 1;\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  .mobile-icon {\n    width: 32px;\n    ", " {\n      display: none;\n    }\n  }\n  .desktop-icon {\n    width: 160px;\n    display: none;\n    ", " {\n      display: block;\n    }\n  }\n  .right-eye {\n    animation-delay: 20ms;\n  }\n  &:hover {\n    .left-eye,\n    .right-eye {\n      transform-origin: center 60%;\n      animation-name: ", ";\n      animation-duration: 350ms;\n      animation-iteration-count: 1;\n    }\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, blink);
var Logo = function (_a) {
    var isPushed = _a.isPushed, togglePush = _a.togglePush, isDark = _a.isDark, href = _a.href;
    var isAbsoluteUrl = href.startsWith("http");
    var innerLogo = (React.createElement(React.Fragment, null,
        React.createElement(Icon$1c, { className: "mobile-icon" }),
        React.createElement(LogoWithText, { className: "desktop-icon", isDark: isDark })));
    return (React.createElement(Flex, null,
        React.createElement(MenuButton, { "aria-label": "Toggle menu", onClick: togglePush, mr: "24px" }, isPushed ? (React.createElement(Icon$t, { width: "24px", color: "bright" })) : (React.createElement(Icon$u, { width: "24px", color: "bright" }))),
        isAbsoluteUrl ? (React.createElement(StyledLink, { as: "a", href: href, "aria-label": "Pancake home page" }, innerLogo)) : (React.createElement(StyledLink, { to: href, "aria-label": "Pancake home page" }, innerLogo))));
};
var Logo$1 = React.memo(Logo, function (prev, next) { return prev.isPushed === next.isPushed && prev.isDark === next.isDark; });
var templateObject_1$c, templateObject_2$5;

var status = {
    LIVE: {
        text: "LIVE",
        color: "failure",
    },
    SOON: {
        text: "SOON",
        color: "warning",
    },
    NEW: {
        text: "NEW",
        color: "success",
    },
};
var links = [
    {
        label: "Home",
        icon: "HomeIcon",
        href: "/",
    },
    {
        label: "Trade",
        icon: "TradeIcon",
        items: [
            {
                label: "Exchange",
                href: "https://dex.bridgeswap.app",
            },
            {
                label: "Liquidity",
                href: "https://dex.bridgeswap/#/pool",
            },
        ],
    },
    {
        label: "Farms",
        icon: "FarmIcon",
        href: "/farms",
        status: status.LIVE,
    },
    {
        label: "Pools",
        icon: "PoolIcon",
        href: "/syrup",
    },
    {
        label: "Defi 2.0 Zap",
        icon: "DefiIcon",
        href: "/defi",
    },
    {
        label: "Lottery",
        icon: "TicketIcon",
        href: "/lottery",
    },
    {
        label: "Referral Program",
        icon: "ReferralIcon",
        href: "/referral",
    },
    {
        label: "Audit",
        icon: "AuditIcon",
        href: "/audit",
    },
    {
        label: "NFT",
        icon: "NftIcon",
        href: "/nft",
    },
    {
        label: "Team Battle",
        icon: "TeamBattleIcon",
        href: "/competition",
        status: status.SOON,
    },
    {
        label: "Profile & Teams",
        icon: "GroupsIcon",
        status: status.LIVE,
        items: [
            {
                label: "Leaderboard",
                href: "/teams",
                status: status.NEW,
            },
            {
                label: "YourProfile",
                href: "/",
            },
        ],
        calloutClass: "rainbow",
    },
    {
        label: "Info",
        icon: "InfoIcon",
        items: [
            {
                label: "Overview",
                href: "https://bridgeswap.info",
            },
            {
                label: "Tokens",
                href: "https://bridgeswap.info/tokens",
            },
            {
                label: "Pairs",
                href: "https://bridgeswap.info/pairs",
            },
            {
                label: "Accounts",
                href: "https://bridgeswap.info/accounts",
            },
        ],
    },
    {
        label: "IFO",
        icon: "IfoIcon",
        items: [
            {
                label: "Next",
                href: "/ifo",
            },
            {
                label: "History",
                href: "/ifo/history",
            },
        ],
    },
    {
        label: "More",
        icon: "MoreIcon",
        items: [
            {
                label: "Voting",
                href: "https://voting.bridgeswap.app",
            },
            {
                label: "Github",
                href: "https://github.com/Doge-Gold-Floki",
            },
            {
                label: "Docs",
                href: "https://doge-gold-floki-finance.gitbook.io/dgf/",
            },
            {
                label: "Blog",
                href: "https://medium.com/@Doge-Gold-Floki",
            },
        ],
    },
];
var socials = [
    {
        label: "Github",
        icon: "GithubIcon",
        href: "https://github.com/Doge-Gold-Floki",
    },
    {
        label: "Twitter",
        icon: "TwitterIcon",
        href: "https://twitter.com/Doge_Gold_Floki",
    },
    {
        label: "Medium",
        icon: "MediumIcon",
        href: "https://medium.com/@Doge-Gold-Floki",
    },
    {
        label: "Gitbook",
        icon: "GitbookIcon",
        href: "https://doge-gold-floki-finance.gitbook.io/dgf/",
    },
    {
        label: "Telegram",
        icon: "TelegramIcon",
        items: [
            {
                label: "English",
                href: "https://t.me/Doge_Gold_Floki",
            },
            // {
            //   label: "Bahasa Indonesia",
            //   href: "https://t.me/PancakeSwapIndonesia",
            // },
            // {
            //   label: "中文",
            //   href: "https://t.me/PancakeSwap_CN",
            // },
            // {
            //   label: "Tiếng Việt",
            //   href: "https://t.me/PancakeSwapVN",
            // },
            // {
            //   label: "Italiano",
            //   href: "https://t.me/pancakeswap_ita",
            // },
            // {
            //   label: "русский",
            //   href: "https://t.me/pancakeswap_ru",
            // },
            // {
            //   label: "Türkiye",
            //   href: "https://t.me/pancakeswapturkiye",
            // },
            // {
            //   label: "Português",
            //   href: "https://t.me/PancakeSwapPortuguese",
            // },
            // {
            //   label: "Español",
            //   href: "https://t.me/PancakeswapEs",
            // },
            // {
            //   label: "日本語",
            //   href: "https://t.me/pancakeswapjp",
            // },
            // {
            //   label: "Français",
            //   href: "https://t.me/pancakeswapfr",
            // },
            // {
            //   label: "Announcements",
            //   href: "https://t.me/PancakeSwapAnn",
            // },
            // {
            //   label: "Whale Alert",
            //   href: "https://t.me/PancakeSwapWhales",
            // },
        ],
    },
];
var MENU_HEIGHT = 64;
var MENU_ENTRY_HEIGHT = 48;
var SIDEBAR_WIDTH_FULL = 240;
var SIDEBAR_WIDTH_REDUCED = 56;

var rainbowAnimation = keyframes(templateObject_1$b || (templateObject_1$b = __makeTemplateObject(["\n  0%,\n  100% {\n    background-position: 0 0;\n  }\n  50% {\n    background-position: 100% 0;\n  }\n"], ["\n  0%,\n  100% {\n    background-position: 0 0;\n  }\n  50% {\n    background-position: 100% 0;\n  }\n"])));
var LinkLabel = styled.div(templateObject_2$4 || (templateObject_2$4 = __makeTemplateObject(["\n  color: ", ";\n  transition: color 0.4s;\n  flex-grow: 1;\n"], ["\n  color: ", ";\n  transition: color 0.4s;\n  flex-grow: 1;\n"])), function (_a) {
    var isPushed = _a.isPushed, theme = _a.theme;
    return (isPushed ? theme.colors.bright : "transparent");
});
var MenuEntry = styled.div(templateObject_3$2 || (templateObject_3$2 = __makeTemplateObject(["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  height: ", "px;\n  padding: ", ";\n  font-size: ", ";\n  background-color: ", ";\n  color: ", ";\n  box-shadow: ", ";\n\n  a {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n  }\n\n  svg {\n    fill: ", ";\n  }\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  // Safari fix\n  flex-shrink: 0;\n\n  &.rainbow {\n    background-clip: text;\n    animation: ", " 3s ease-in-out infinite;\n    background: ", ";\n    background-size: 400% 100%;\n  }\n"], ["\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  height: ", "px;\n  padding: ", ";\n  font-size: ", ";\n  background-color: ", ";\n  color: ", ";\n  box-shadow: ", ";\n\n  a {\n    display: flex;\n    align-items: center;\n    width: 100%;\n    height: 100%;\n  }\n\n  svg {\n    fill: ", ";\n  }\n\n  &:hover {\n    background-color: ", ";\n  }\n\n  // Safari fix\n  flex-shrink: 0;\n\n  &.rainbow {\n    background-clip: text;\n    animation: ", " 3s ease-in-out infinite;\n    background: ", ";\n    background-size: 400% 100%;\n  }\n"])), MENU_ENTRY_HEIGHT, function (_a) {
    var secondary = _a.secondary;
    return (secondary ? "0 32px" : "0 16px");
}, function (_a) {
    var secondary = _a.secondary;
    return (secondary ? "14px" : "16px");
}, function (_a) {
    var secondary = _a.secondary, theme = _a.theme;
    return (secondary ? theme.colors.background : "transparent");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var isActive = _a.isActive, theme = _a.theme;
    return (isActive ? "inset 4px 0px 0px " + theme.colors.primary : "none");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.bright;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.menuHover;
}, rainbowAnimation, function (_a) {
    var theme = _a.theme;
    return theme.colors.gradients.bubblegum;
});
MenuEntry.defaultProps = {
    secondary: false,
    isActive: false,
};
var LinkStatus = styled(Text)(templateObject_4$1 || (templateObject_4$1 = __makeTemplateObject(["\n  border-radius: ", ";\n  padding: 0 8px;\n  border: 2px solid;\n  border-color: ", ";\n  box-shadow: none;\n  color: ", ";\n  margin-left: 8px;\n"], ["\n  border-radius: ", ";\n  padding: 0 8px;\n  border: 2px solid;\n  border-color: ", ";\n  box-shadow: none;\n  color: ", ";\n  margin-left: 8px;\n"])), function (_a) {
    var theme = _a.theme;
    return theme.radii.default;
}, function (_a) {
    var theme = _a.theme, color = _a.color;
    return theme.colors[color];
}, function (_a) {
    var theme = _a.theme, color = _a.color;
    return theme.colors[color];
});
var LinkLabelMemo = React.memo(LinkLabel, function (prev, next) { return prev.isPushed === next.isPushed; });
var templateObject_1$b, templateObject_2$4, templateObject_3$2, templateObject_4$1;

var Container$2 = styled.div(templateObject_1$a || (templateObject_1$a = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  // Safari fix\n  flex-shrink: 0;\n"], ["\n  display: flex;\n  flex-direction: column;\n  // Safari fix\n  flex-shrink: 0;\n"])));
var AccordionContent = styled.div(templateObject_2$3 || (templateObject_2$3 = __makeTemplateObject(["\n  max-height: ", ";\n  transition: max-height 0.3s ease-out;\n  overflow: hidden;\n  border-color: ", ";\n  border-style: solid;\n  border-width: 1px 0;\n"], ["\n  max-height: ", ";\n  transition: max-height 0.3s ease-out;\n  overflow: hidden;\n  border-color: ", ";\n  border-style: solid;\n  border-width: 1px 0;\n"])), function (_a) {
    var isOpen = _a.isOpen, maxHeight = _a.maxHeight;
    return (isOpen ? maxHeight + "px" : 0);
}, function (_a) {
    var isOpen = _a.isOpen, isPushed = _a.isPushed;
    return (isOpen && isPushed ? "rgba(133, 133, 133, 0.1)" : "transparent");
});
var Accordion = function (_a) {
    var label = _a.label, status = _a.status, icon = _a.icon, isPushed = _a.isPushed, pushNav = _a.pushNav, _b = _a.initialOpenState, initialOpenState = _b === void 0 ? false : _b, children = _a.children, className = _a.className, isActive = _a.isActive;
    var _c = useState(initialOpenState), isOpen = _c[0], setIsOpen = _c[1];
    var handleClick = function () {
        if (isPushed) {
            setIsOpen(function (prevState) { return !prevState; });
        }
        else {
            pushNav(true);
            setIsOpen(true);
        }
    };
    return (React.createElement(Container$2, null,
        React.createElement(MenuEntry, { onClick: handleClick, className: className, isActive: isActive, role: "button" },
            icon,
            React.createElement(LinkLabelMemo, { isPushed: isPushed }, label),
            status && (React.createElement(LinkStatus, { color: status.color, fontSize: "14px" }, status.text)),
            isOpen ? React.createElement(Icon$1E, null) : React.createElement(Icon$1F, null)),
        React.createElement(AccordionContent, { isOpen: isOpen, isPushed: isPushed, maxHeight: React.Children.count(children) * MENU_ENTRY_HEIGHT }, children)));
};
var templateObject_1$a, templateObject_2$3;

var MenuLink = function (_a) {
    var href = _a.href, otherProps = __rest(_a, ["href"]);
    var isHttpLink = href === null || href === void 0 ? void 0 : href.startsWith("http");
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var Tag = isHttpLink ? "a" : NavLink;
    var props = isHttpLink ? { href: href } : { to: href };
    return React.createElement(Tag, __assign({ role: "button" }, props, otherProps));
};

var Icons$1 = IconModule;
var Container$1 = styled.div(templateObject_1$9 || (templateObject_1$9 = __makeTemplateObject(["\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: 100%;\n"], ["\n  display: flex;\n  flex-direction: column;\n  overflow-y: auto;\n  overflow-x: hidden;\n  height: 100%;\n"])));
var PanelBody = function (_a) {
    var isPushed = _a.isPushed, pushNav = _a.pushNav, isMobile = _a.isMobile, links = _a.links;
    var location = useLocation();
    // Close the menu when a user clicks a link on mobile
    var handleClick = isMobile ? function () { return pushNav(false); } : undefined;
    return (React.createElement(Container$1, null, links.map(function (entry) {
        var Icon = Icons$1[entry.icon];
        var iconElement = React.createElement(Icon, { width: "24px", mr: "8px" });
        var calloutClass = entry.calloutClass ? entry.calloutClass : undefined;
        if (entry.items) {
            var itemsMatchIndex = entry.items.findIndex(function (item) { return item.href === location.pathname; });
            var initialOpenState = entry.initialOpenState === true ? entry.initialOpenState : itemsMatchIndex >= 0;
            return (React.createElement(Accordion, { key: entry.label, isPushed: isPushed, pushNav: pushNav, icon: iconElement, label: entry.label, status: entry.status, initialOpenState: initialOpenState, className: calloutClass, isActive: entry.items.some(function (item) { return item.href === location.pathname; }) }, isPushed &&
                entry.items.map(function (item) { return (React.createElement(MenuEntry, { key: item.href, secondary: true, isActive: item.href === location.pathname, onClick: handleClick },
                    React.createElement(MenuLink, { href: item.href },
                        React.createElement(LinkLabelMemo, { isPushed: isPushed }, item.label),
                        item.status && (React.createElement(LinkStatus, { color: item.status.color, fontSize: "14px" }, item.status.text))))); })));
        }
        return (React.createElement(MenuEntry, { key: entry.label, isActive: entry.href === location.pathname, className: calloutClass },
            React.createElement(MenuLink, { href: entry.href, onClick: handleClick },
                iconElement,
                React.createElement(LinkLabelMemo, { isPushed: isPushed }, entry.label),
                entry.status && (React.createElement(LinkStatus, { color: entry.status.color, fontSize: "14px" }, entry.status.text)))));
    })));
};
var templateObject_1$9;

var PriceLink = styled.a(templateObject_1$8 || (templateObject_1$8 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  svg {\n    transition: transform 0.3s;\n  }\n  :hover {\n    svg {\n      transform: scale(1.2);\n    }\n  }\n"], ["\n  display: flex;\n  align-items: center;\n  svg {\n    transition: transform 0.3s;\n  }\n  :hover {\n    svg {\n      transform: scale(1.2);\n    }\n  }\n"])));
var CakePrice = function (_a) {
    var cakePriceUsd = _a.cakePriceUsd;
    return cakePriceUsd ? (React.createElement(PriceLink, { style: { pointerEvents: "none", cursor: "default" }, href: "#", target: "_blank" },
        React.createElement(WhiteBGLogo, { width: "24px", mr: "8px" }),
        React.createElement(Text, { color: "bright", bold: true }, "$" + cakePriceUsd.toFixed(3)))) : (React.createElement(Skeleton, { width: 80, height: 24 }));
};
var CakePrice$1 = React.memo(CakePrice);
var templateObject_1$8;

var Icons = IconModule;
var SocialLinks = function () { return (React.createElement(Flex, null, socials.map(function (social, index) {
    var Icon = Icons[social.icon];
    var iconProps = { width: "24px", color: "bright", style: { cursor: "pointer" } };
    var mr = index < socials.length - 1 ? "24px" : 0;
    if (social.items) {
        return (React.createElement(Dropdown, { key: social.label, position: "top", target: React.createElement(Icon, __assign({}, iconProps, { mr: mr })) }, social.items.map(function (item) { return (React.createElement(Link, { external: true, key: item.label, href: item.href, "aria-label": item.label, color: "textSubtle" }, item.label)); })));
    }
    return (React.createElement(Link, { external: true, key: social.label, href: social.href, "aria-label": social.label, mr: mr },
        React.createElement(Icon, __assign({}, iconProps))));
}))); };
var SocialLinks$1 = React.memo(SocialLinks, function () { return true; });

var Container = styled.div(templateObject_1$7 || (templateObject_1$7 = __makeTemplateObject(["\n  flex: none;\n  padding: 8px 4px;\n  background-color: ", ";\n  border-top: solid 2px rgba(133, 133, 133, 0.1);\n"], ["\n  flex: none;\n  padding: 8px 4px;\n  background-color: ", ";\n  border-top: solid 2px rgba(133, 133, 133, 0.1);\n"])), function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
});
var SettingsEntry = styled.div(templateObject_2$2 || (templateObject_2$2 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 8px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 8px;\n"])), MENU_ENTRY_HEIGHT);
var SocialEntry = styled.div(templateObject_3$1 || (templateObject_3$1 = __makeTemplateObject(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 16px;\n"], ["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: ", "px;\n  padding: 0 16px;\n"])), MENU_ENTRY_HEIGHT);
var PanelFooter = function (_a) {
    var isPushed = _a.isPushed, pushNav = _a.pushNav; _a.toggleTheme; _a.isDark; var cakePriceUsd = _a.cakePriceUsd; _a.currentLang; _a.langs; _a.setLang;
    if (!isPushed) {
        return (React.createElement(Container, null,
            React.createElement(IconButton, { variant: "text", onClick: function () { return pushNav(true); } },
                React.createElement(Icon$1l, null))));
    }
    return (React.createElement(Container, null,
        React.createElement(SocialEntry, null,
            React.createElement(CakePrice$1, { cakePriceUsd: cakePriceUsd })),
        React.createElement(SettingsEntry, null,
            React.createElement(SocialLinks$1, null))));
};
var templateObject_1$7, templateObject_2$2, templateObject_3$1;

var StyledPanel = styled.div(templateObject_1$6 || (templateObject_1$6 = __makeTemplateObject(["\n  position: fixed;\n  padding-top: ", ";\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-shrink: 0;\n  background-color: ", ";\n  width: ", ";\n  height: 100vh;\n  transition: padding-top 0.2s, width 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  border-right: ", ";\n  z-index: 11;\n  overflow: ", ";\n  transform: translate3d(0, 0, 0);\n  ", ";\n\n  ", " {\n    border-right: 2px solid rgba(133, 133, 133, 0.1);\n    width: ", ";\n  }\n"], ["\n  position: fixed;\n  padding-top: ", ";\n  top: 0;\n  left: 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  flex-shrink: 0;\n  background-color: ", ";\n  width: ", ";\n  height: 100vh;\n  transition: padding-top 0.2s, width 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  border-right: ", ";\n  z-index: 11;\n  overflow: ", ";\n  transform: translate3d(0, 0, 0);\n  ", ";\n\n  ", " {\n    border-right: 2px solid rgba(133, 133, 133, 0.1);\n    width: ", ";\n  }\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? "80px" : 0);
}, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL + "px" : 0);
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? "2px solid rgba(133, 133, 133, 0.1)" : 0);
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? "initial" : "hidden");
}, function (_a) {
    var isPushed = _a.isPushed;
    return !isPushed && "white-space: nowrap;";
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED) + "px";
});
var Panel = function (props) {
    var isPushed = props.isPushed, showMenu = props.showMenu;
    return (React.createElement(StyledPanel, { isPushed: isPushed, showMenu: showMenu },
        React.createElement(PanelBody, __assign({}, props)),
        React.createElement(PanelFooter, __assign({}, props))));
};
var templateObject_1$6;

var Icon$BitKeep = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96"}, props),
        React.createElement("path", {fillRule:"evenodd", clipRule:"evenodd", d: "M810.977 0.824219C1258.37 0.824219 1620.98 363.406 1620.98 810.78C1620.98 1258.15 1258.37 1620.74 810.977 1620.74C363.578 1620.74 0.976562 1258.15 0.976562 810.78C0.976563 363.564 363.578 0.824219 810.977 0.824219Z", transform:"matrix(.059259 0 0 0.059259-.057761-.046137)", fill: "#7524F9" }),
        React.createElement("path", {fillRule:"evenodd", clipRule:"evenodd", d: "M1314.7 561.306V618.573C1314.7 629.805 1308.68 640.245 1299.03 645.782L1114.57 752.247L1279.26 847.005C1301.25 859.661 1314.7 883.073 1314.7 908.384V1060.88C1314.7 1086.2 1301.09 1109.61 1279.1 1122.26L845.939 1370.79C824.107 1383.28 797.213 1383.28 775.223 1370.63L633.473 1288.68C623.031 1282.67 623.031 1267.49 633.473 1261.47L1101.44 992.07C1106.66 989.064 1106.66 981.471 1101.44 978.465L927.572 878.012C917.922 872.317 905.898 872.317 896.09 878.012L420.531 1152C413.254 1156.12 404.236 1156.28 396.959 1152L343.17 1121.16C321.18 1108.5 307.574 1085.09 307.574 1059.62V997.132C307.574 988.747 312.162 980.838 319.439 976.725L1001.14 585.035C1006.36 582.029 1006.36 574.436 1001.14 571.431L827.113 470.661C817.463 464.966 805.439 464.966 795.631 470.661L331.146 737.851C320.705 743.863 307.574 736.269 307.574 724.246V560.515C307.574 535.204 321.18 511.791 343.17 499.136L776.33 250.612C798.162 238.115 825.057 238.115 846.889 250.612L1279.1 499.927C1301.09 512.741 1314.7 535.995 1314.7 561.306Z", transform:"matrix(.059259 0 0 0.059259 0.091555-.134272)", fill: "white" })));
};

var Icon$HyperWallet = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96"}, props),
        React.createElement("g", {transform: "matrix(1.161946 0 0 1.161946-23.622346-14.930994)"},
            React.createElement("circle", { r: "41.31", transform: "translate(61.64 54.16)", fill: "#2386e3" }),
            React.createElement("path", {d: "M42.06,37.18L37.2,42.11l6.38,4.81l14.13.01-4.31,5.56l2.11,4.81l11.32.04c0,0,.03-1.1.7-5.48c1.07-6.98,13.06-7.39,12.95.44-.09,5.76-4.52,6.45-7.39,6.54s-37.63-.02-37.63-.02l-5.33,4.75l4.58,4.81h17.53l-5.07,6.84l3.82,4.81h11.07L65.1,68.11c0,0,6.78-.14,9.57-.14c4.95,0,18.08-3.23,18.08-16.96c0-12.43-13.56-13.73-18.6-13.73-5.06-.02-32.09-.1-32.09-.1Z", fill: "#2665a3"}),
            React.createElement("path", {d: "M39.95,32.37l-2.74,9.74l18.39.01-2.2,10.37l11.32.04c0,0,.03-1.1.7-5.48c1.07-6.98,13.06-7.39,12.95.44-.09,5.76-4.52,6.45-7.39,6.54s-37.63-.02-37.63-.02l-3.22,9.56h19.99L47.17,75.22h12.78L62.99,63.3c0,0,6.78-.14,9.57-.14c4.95,0,18.08-3.23,18.08-16.96c0-12.43-13.56-13.73-18.6-13.73-5.07-.02-32.09-.1-32.09-.1Z", fill: "#fff"}))));
};

var Icon$7 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React.createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
        React.createElement("path", { d: "M77.7602 16.9155L51.9419 36.0497L56.7382 24.7733L77.7602 16.9155Z", fill: "#E17726" }),
        React.createElement("path", { d: "M18.2656 16.9155L43.8288 36.2283L39.2622 24.7733L18.2656 16.9155Z", fill: "#E27625" }),
        React.createElement("path", { d: "M68.4736 61.2808L61.6108 71.7918L76.3059 75.8482L80.4899 61.5104L68.4736 61.2808Z", fill: "#E27625" }),
        React.createElement("path", { d: "M15.5356 61.5104L19.6941 75.8482L34.3892 71.7918L27.5519 61.2808L15.5356 61.5104Z", fill: "#E27625" }),
        React.createElement("path", { d: "M33.5984 43.5251L29.491 49.699L44.0584 50.3624L43.5482 34.6724L33.5984 43.5251Z", fill: "#E27625" }),
        React.createElement("path", { d: "M62.4274 43.525L52.2991 34.4937L51.9419 50.3622L66.5094 49.6989L62.4274 43.525Z", fill: "#E27625" }),
        React.createElement("path", { d: "M34.3892 71.7922L43.1654 67.5316L35.6137 61.6128L34.3892 71.7922Z", fill: "#E27625" }),
        React.createElement("path", { d: "M52.8345 67.5316L61.6107 71.7922L60.3861 61.6128L52.8345 67.5316Z", fill: "#E27625" }),
        React.createElement("path", { d: "M61.6107 71.7923L52.8345 67.5317L53.5233 73.2465L53.4468 75.6446L61.6107 71.7923Z", fill: "#D5BFB2" }),
        React.createElement("path", { d: "M34.3892 71.7923L42.5531 75.6446L42.502 73.2465L43.1654 67.5317L34.3892 71.7923Z", fill: "#D5BFB2" }),
        React.createElement("path", { d: "M42.7062 57.8369L35.4097 55.6939L40.5631 53.3213L42.7062 57.8369Z", fill: "#233447" }),
        React.createElement("path", { d: "M53.2937 57.8369L55.4367 53.3213L60.6412 55.6939L53.2937 57.8369Z", fill: "#233447" }),
        React.createElement("path", { d: "M34.3893 71.7918L35.6649 61.2808L27.552 61.5104L34.3893 71.7918Z", fill: "#CC6228" }),
        React.createElement("path", { d: "M60.3352 61.2808L61.6108 71.7918L68.4736 61.5104L60.3352 61.2808Z", fill: "#CC6228" }),
        React.createElement("path", { d: "M66.5094 49.6987L51.9419 50.362L53.294 57.8371L55.4371 53.3215L60.6416 55.6941L66.5094 49.6987Z", fill: "#CC6228" }),
        React.createElement("path", { d: "M35.4098 55.6941L40.5633 53.3215L42.7063 57.8371L44.0584 50.362L29.491 49.6987L35.4098 55.6941Z", fill: "#CC6228" }),
        React.createElement("path", { d: "M29.491 49.6987L35.6139 61.6129L35.4098 55.6941L29.491 49.6987Z", fill: "#E27525" }),
        React.createElement("path", { d: "M60.6414 55.6941L60.3862 61.6129L66.5092 49.6987L60.6414 55.6941Z", fill: "#E27525" }),
        React.createElement("path", { d: "M44.0584 50.3618L42.7063 57.8369L44.4156 66.6641L44.7728 55.0305L44.0584 50.3618Z", fill: "#E27525" }),
        React.createElement("path", { d: "M51.9415 50.3618L51.2527 55.005L51.5843 66.6641L53.2937 57.8369L51.9415 50.3618Z", fill: "#E27525" }),
        React.createElement("path", { d: "M53.2938 57.8374L51.5845 66.6646L52.8346 67.532L60.3862 61.6132L60.6413 55.6943L53.2938 57.8374Z", fill: "#F5841F" }),
        React.createElement("path", { d: "M35.4097 55.6943L35.6138 61.6132L43.1654 67.532L44.4155 66.6646L42.7062 57.8374L35.4097 55.6943Z", fill: "#F5841F" }),
        React.createElement("path", { d: "M53.4468 75.6443L53.5233 73.2462L52.8855 72.6849H43.1143L42.502 73.2462L42.5531 75.6443L34.3892 71.792L37.2465 74.1391L43.0378 78.1445H52.962L58.7533 74.1391L61.6107 71.792L53.4468 75.6443Z", fill: "#C0AC9D" }),
        React.createElement("path", { d: "M52.8346 67.5315L51.5845 66.6641H44.4156L43.1655 67.5315L42.5022 73.2462L43.1145 72.6849H52.8857L53.5235 73.2462L52.8346 67.5315Z", fill: "#161616" }),
        React.createElement("path", { d: "M78.8314 37.2998L80.9999 26.7377L77.7599 16.9155L52.8345 35.4119L62.4271 43.5247L75.9485 47.4791L78.9335 43.984L77.6323 43.04L79.7243 41.1521L78.1426 39.902L80.2091 38.3458L78.8314 37.2998Z", fill: "#763E1A" }),
        React.createElement("path", { d: "M15 26.7377L17.194 37.2998L15.7909 38.3458L17.8574 39.902L16.2756 41.1521L18.3676 43.04L17.0665 43.984L20.0514 47.4791L33.5984 43.5247L43.1655 35.4119L18.2656 16.9155L15 26.7377Z", fill: "#763E1A" }),
        React.createElement("path", { d: "M75.9487 47.4793L62.4272 43.5249L66.5092 49.6989L60.3862 61.613L68.4736 61.511H80.4898L75.9487 47.4793Z", fill: "#F5841F" }),
        React.createElement("path", { d: "M33.5983 43.5249L20.0513 47.4793L15.5356 61.511H27.5519L35.6137 61.613L29.4908 49.6989L33.5983 43.5249Z", fill: "#F5841F" }),
        React.createElement("path", { d: "M51.9415 50.3617L52.8344 35.4115L56.7378 24.7729H39.262L43.1653 35.4115L44.0583 50.3617L44.3899 55.0559L44.4154 66.664H51.5843L51.6099 55.0559L51.9415 50.3617Z", fill: "#F5841F" })));
};

var Icon$6 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React.createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
        React.createElement("path", { fillRule: "evenodd", clipRule: "evenodd", d: "M66.4573 43.7107C64.8919 42.1452 64.8919 39.6071 66.4573 38.0416C68.0228 36.4762 70.5609 36.4762 72.1264 38.0416C73.6918 39.6071 73.6918 42.1452 72.1264 43.7107C70.5609 45.2762 68.0228 45.2762 66.4573 43.7107ZM52.9933 57.1747C51.8192 56.0006 51.8192 54.097 52.9933 52.9229C54.1674 51.7488 56.071 51.7488 57.2451 52.9229C58.4192 54.097 58.4192 56.0006 57.2451 57.1747C56.071 58.3488 54.1674 58.3488 52.9933 57.1747ZM74.2523 50.0884C73.0782 48.9143 73.0782 47.0107 74.2523 45.8366C75.4263 44.6625 77.3299 44.6625 78.504 45.8366C79.6781 47.0107 79.6781 48.9143 78.504 50.0884C77.3299 51.2625 75.4263 51.2625 74.2523 50.0884ZM67.166 57.1747C65.9919 56.0006 65.9919 54.097 67.166 52.9229C68.34 51.7488 70.2436 51.7488 71.4177 52.9229C72.5918 54.097 72.5918 56.0006 71.4177 57.1747C70.2436 58.3488 68.34 58.3488 67.166 57.1747ZM82.0472 56.466C81.2645 55.6833 81.2645 54.4142 82.0472 53.6315C82.8299 52.8488 84.099 52.8488 84.8817 53.6315C85.6644 54.4142 85.6644 55.6833 84.8817 56.466C84.099 57.2488 82.8299 57.2488 82.0472 56.466ZM74.9609 63.5523C74.1782 62.7696 74.1782 61.5005 74.9609 60.7178C75.7436 59.9351 77.0127 59.9351 77.7954 60.7178C78.5781 61.5005 78.5781 62.7696 77.7954 63.5523C77.0127 64.3351 75.7436 64.3351 74.9609 63.5523ZM59.371 50.797C57.8056 49.2315 57.8056 46.6934 59.371 45.1279C60.9365 43.5625 63.4746 43.5625 65.0401 45.1279C66.6055 46.6934 66.6055 49.2315 65.0401 50.797C63.4746 52.3625 60.9365 52.3625 59.371 50.797ZM59.371 36.6244C57.8056 35.0589 57.8056 32.5208 59.371 30.9553C60.9365 29.3899 63.4746 29.3899 65.0401 30.9553C66.6055 32.5208 66.6055 35.0589 65.0401 36.6244C63.4746 38.1898 60.9365 38.1898 59.371 36.6244ZM52.2847 43.7107C50.7193 42.1452 50.7193 39.6071 52.2847 38.0416C53.8502 36.4762 56.3883 36.4762 57.9538 38.0416C59.5192 39.6071 59.5192 42.1452 57.9538 43.7107C56.3883 45.2762 53.8502 45.2762 52.2847 43.7107ZM38.0462 43.7107C36.4808 42.1452 36.4808 39.6071 38.0462 38.0416C39.6117 36.4762 42.1498 36.4762 43.7153 38.0416C45.2807 39.6071 45.2807 42.1452 43.7153 43.7107C42.1498 45.2762 39.6117 45.2762 38.0462 43.7107ZM24.5823 57.1747C23.4082 56.0006 23.4082 54.097 24.5823 52.9229C25.7564 51.7488 27.66 51.7488 28.8341 52.9229C30.0081 54.097 30.0081 56.0006 28.8341 57.1747C27.66 58.3488 25.7564 58.3488 24.5823 57.1747ZM45.8412 50.0884C44.6671 48.9143 44.6671 47.0107 45.8412 45.8366C47.0153 44.6625 48.9189 44.6625 50.093 45.8366C51.2671 47.0107 51.2671 48.9143 50.093 50.0884C48.9189 51.2625 47.0153 51.2625 45.8412 50.0884ZM38.7549 57.1747C37.5808 56.0006 37.5808 54.097 38.7549 52.9229C39.929 51.7488 41.8326 51.7488 43.0067 52.9229C44.1807 54.097 44.1807 56.0006 43.0067 57.1747C41.8326 58.3488 39.929 58.3488 38.7549 57.1747ZM11.1183 56.466C10.3356 55.6833 10.3356 54.4142 11.1183 53.6315C11.901 52.8488 13.1701 52.8488 13.9528 53.6315C14.7356 54.4142 14.7356 55.6833 13.9528 56.466C13.1701 57.2488 11.901 57.2488 11.1183 56.466ZM18.2046 63.5523C17.4219 62.7696 17.4219 61.5005 18.2046 60.7178C18.9873 59.9351 20.2564 59.9351 21.0391 60.7178C21.8219 61.5005 21.8219 62.7696 21.0391 63.5523C20.2564 64.3351 18.9873 64.3351 18.2046 63.5523ZM46.5498 63.5523C45.7671 62.7696 45.7671 61.5005 46.5498 60.7178C47.3325 59.9351 48.6016 59.9351 49.3843 60.7178C50.1671 61.5005 50.1671 62.7696 49.3843 63.5523C48.6016 64.3351 47.3325 64.3351 46.5498 63.5523ZM17.496 50.0884C16.3219 48.9143 16.3219 47.0107 17.496 45.8366C18.6701 44.6625 20.5737 44.6625 21.7478 45.8366C22.9218 47.0107 22.9218 48.9143 21.7478 50.0884C20.5737 51.2625 18.6701 51.2625 17.496 50.0884ZM30.9599 50.797C29.3945 49.2315 29.3945 46.6934 30.9599 45.1279C32.5254 43.5625 35.0635 43.5625 36.629 45.1279C38.1944 46.6934 38.1944 49.2315 36.629 50.797C35.0635 52.3625 32.5254 52.3625 30.9599 50.797ZM30.9599 36.6244C29.3945 35.0589 29.3945 32.5208 30.9599 30.9553C32.5254 29.3899 35.0635 29.3899 36.629 30.9553C38.1944 32.5208 38.1944 35.0589 36.629 36.6244C35.0635 38.1898 32.5254 38.1898 30.9599 36.6244ZM23.8736 43.7107C22.3082 42.1452 22.3082 39.6071 23.8736 38.0416C25.4391 36.4762 27.9772 36.4762 29.5427 38.0416C31.1081 39.6071 31.1081 42.1452 29.5427 43.7107C27.9772 45.2762 25.4391 45.2762 23.8736 43.7107Z", fill: "#1D222A" })));
};

var Icon$5 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React.createElement("circle", { cx: "48", cy: "48", r: "48", fill: "white" }),
        React.createElement("path", { d: "M44.3288 35.3546V21.7134H19.0926C18.581 21.7134 18.24 22.0544 18.24 22.566V41.8342C18.24 42.3457 18.581 42.6867 19.0926 42.6867H28.8119V77.8129C28.8119 78.3244 29.153 78.6654 29.6645 78.6654H45.5224C46.0339 78.6654 46.375 78.3244 46.375 77.8129V35.3546H44.3288Z", fill: "#29AEFF" }),
        React.createElement("path", { d: "M61.8919 17.2798H55.7534H39.2134C38.7019 17.2798 38.3608 17.6208 38.3608 18.1324V73.3792C38.3608 73.8908 38.7019 74.2318 39.2134 74.2318H55.0713C55.5829 74.2318 55.9239 73.8908 55.9239 73.3792V59.397H62.0624C73.6575 59.397 83.0358 50.0187 83.0358 38.4237C83.0358 26.6581 73.487 17.2798 61.8919 17.2798Z", fill: "#2761E7" })));
};

var Icon$4 = function (props) {
    var id = uniqueId("svg");
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React.createElement("g", { clipPath: "url(#" + id + ")" },
            React.createElement("path", { d: "M48.0048 96.0097C74.5172 96.0097 96.0097 74.5172 96.0097 48.0048C96.0097 21.4925 74.5172 0 48.0048 0C21.4925 0 0 21.4925 0 48.0048C0 74.5172 21.4925 96.0097 48.0048 96.0097Z", fill: "#3375BB" }),
            React.createElement("path", { d: "M48.0048 22.8922L49.3179 21.1833C48.9399 20.8928 48.4766 20.7354 48 20.7354C47.5233 20.7354 47.06 20.8928 46.682 21.1833L48.0048 22.8922ZM70.5783 29.5252H72.7313C72.7352 29.2396 72.6824 28.9561 72.576 28.6909C72.4696 28.4258 72.3118 28.1844 72.1116 27.9806C71.9114 27.7769 71.6729 27.6148 71.4097 27.5037C71.1465 27.3926 70.8639 27.3348 70.5783 27.3335V29.5252ZM48.0048 75.6377L46.8076 77.4335C47.1604 77.6697 47.5754 77.7958 48 77.7958C48.4245 77.7958 48.8395 77.6697 49.1924 77.4335L48.0048 75.6377ZM25.4506 29.5252V27.3625C25.165 27.3638 24.8824 27.4216 24.6192 27.5327C24.356 27.6437 24.1175 27.8058 23.9173 28.0096C23.7171 28.2134 23.5593 28.4548 23.4529 28.7199C23.3465 28.985 23.2937 29.2686 23.2976 29.5542L25.4506 29.5252ZM46.6917 24.5915C56.4626 32.1611 67.6528 31.6783 70.5879 31.6783V27.3625C67.5466 27.3625 57.8047 27.7487 49.3468 21.1833L46.6917 24.5915ZM68.4348 29.4866C68.2707 39.4892 67.8459 46.5471 67.0349 51.7704C66.2238 56.9938 65.1039 60.0448 63.6266 62.2268C62.1494 64.4089 60.257 65.8282 57.486 67.4792C54.715 69.1302 51.1716 70.9646 46.8076 73.8515L49.2406 77.4335C53.373 74.6818 56.8102 72.9246 59.7357 71.1771C62.6835 69.5717 65.2416 67.3367 67.228 64.6309C69.159 61.7344 70.4817 57.8724 71.3314 52.427C72.181 46.9815 72.6155 39.6534 72.7796 29.5542L68.4348 29.4866ZM49.2406 73.8515C44.9055 70.955 41.3718 69.1592 38.6201 67.4888C35.8684 65.8185 33.976 64.4861 32.4892 62.2268C31.0023 59.9676 29.7954 56.9648 28.9651 51.7704C28.1347 46.576 27.7678 39.4892 27.6037 29.4866L23.2976 29.5542C23.4617 39.6534 23.9058 47.0009 24.7458 52.427C25.5858 57.8531 26.8699 61.7151 28.8395 64.6309C30.8164 67.3382 33.3686 69.5739 36.3125 71.1771C39.2091 72.9246 42.6752 74.6818 46.8076 77.4335L49.2406 73.8515ZM25.4506 31.6783C28.3471 31.6783 39.547 32.1611 49.3179 24.5915L46.682 21.1833C38.2049 27.7487 28.463 27.3625 25.441 27.3625L25.4506 31.6783Z", fill: "white" })),
        React.createElement("defs", null,
            React.createElement("clipPath", { id: id },
                React.createElement("rect", { width: "96", height: "96", fill: "white" })))));
};

var Icon$3 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React.createElement("path", { d: "M96 48C96 21.4903 74.5097 0 48 0C21.4903 0 0 21.4903 0 48C0 74.5097 21.4903 96 48 96C74.5097 96 96 74.5097 96 48Z", fill: "#3389FB" }),
        React.createElement("path", { d: "M29.6927 35.4245C39.8036 25.5252 56.1965 25.5252 66.3074 35.4245L67.5242 36.6159C68.0298 37.1109 68.0298 37.9134 67.5242 38.4084L63.3616 42.4839C63.1088 42.7314 62.699 42.7314 62.4462 42.4839L60.7717 40.8444C53.7181 33.9384 42.282 33.9384 35.2284 40.8444L33.4351 42.6002C33.1823 42.8477 32.7725 42.8477 32.5197 42.6002L28.3571 38.5247C27.8515 38.0297 27.8515 37.2272 28.3571 36.7322L29.6927 35.4245ZM74.9161 43.8532L78.6208 47.4805C79.1264 47.9755 79.1264 48.778 78.6208 49.2729L61.9159 65.6288C61.4103 66.1237 60.5907 66.1237 60.0851 65.6288C60.0851 65.6288 60.0851 65.6288 60.0851 65.6288L48.229 54.0206C48.1026 53.8968 47.8977 53.8968 47.7713 54.0206C47.7713 54.0206 47.7713 54.0206 47.7713 54.0206L35.9153 65.6288C35.4098 66.1237 34.5902 66.1237 34.0846 65.6288C34.0846 65.6288 34.0846 65.6288 34.0846 65.6288L17.3792 49.2727C16.8736 48.7778 16.8736 47.9753 17.3792 47.4803L21.0839 43.853C21.5895 43.3581 22.4091 43.3581 22.9146 43.853L34.771 55.4614C34.8974 55.5851 35.1023 55.5851 35.2287 55.4614C35.2287 55.4614 35.2287 55.4614 35.2287 55.4614L47.0844 43.853C47.59 43.358 48.4096 43.358 48.9152 43.853C48.9152 43.853 48.9152 43.853 48.9152 43.853L60.7715 55.4614C60.8979 55.5851 61.1028 55.5851 61.2292 55.4614L73.0854 43.8532C73.5909 43.3583 74.4105 43.3583 74.9161 43.8532Z", fill: "white" })));
};

var Icon$2 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 32 32" }, props),
        React.createElement("path", { d: "M24 0H8C3.58172 0 0 3.58172 0 8V24C0 28.4183 3.58172 32 8 32H24C28.4183 32 32 28.4183 32 24V8C32 3.58172 28.4183 0 24 0Z", fill: "#1E2026" }),
        React.createElement("path", { d: "M16.2857 4L9.97035 7.6761L12.2922 9.03415L16.2857 6.7161L20.2792 9.03415L22.6011 7.6761L16.2857 4Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M20.2792 10.9541L22.6011 12.3122V15.0283L18.6075 17.3463V21.9824L16.2857 23.3405L13.9639 21.9824V17.3463L9.97035 15.0283V12.3122L12.2922 10.9541L16.2857 13.2722L20.2792 10.9541Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M22.6011 16.9483V19.6644L20.2792 21.0224V18.3063L22.6011 16.9483Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M20.2561 22.9424L24.2496 20.6244V15.9883L26.5714 14.6302V21.9824L20.2561 25.6585V22.9424Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M24.2496 11.3522L21.9278 9.99414L24.2496 8.63609L26.5714 9.99414V12.7102L24.2496 14.0683V11.3522Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M13.9639 26.642V23.9259L16.2857 25.2839L18.6075 23.9259V26.642L16.2857 28L13.9639 26.642Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M12.2922 21.0224L9.97035 19.6644V16.9483L12.2922 18.3063V21.0224Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M16.2857 11.3522L13.9639 9.99414L16.2857 8.63609L18.6075 9.99414L16.2857 11.3522Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M10.6437 9.99414L8.32183 11.3522V14.0683L6 12.7102V9.99414L8.32183 8.63609L10.6437 9.99414Z", fill: "#F0B90B" }),
        React.createElement("path", { d: "M6 14.6302L8.32183 15.9883V20.6244L12.3154 22.9424V25.6585L6 21.9824V14.6302Z", fill: "#F0B90B" })));
};

var Icon$1 = function (props) {
    return (React.createElement(Svg, __assign({ viewBox: "0 0 96 96" }, props),
        React.createElement("circle", { cx: "48", cy: "48", r: "48", fill: "#F5F5F5" }),
        React.createElement("path", { d: "M56.5504425,41.9387033 L56.5504425,50.4659601 L47.3948342,50.4659601 L47.3948342,85.5971142 L45.0078131,84.7075452 C43.8992633,84.2955753 42.1136272,83.5937969 39.9052997,82.5918134 L38.8675775,82.1177881 L38.8675775,14.6817622 L47.9569067,11.8769231 L56.5504425,14.5267861 L56.5504425,23.7259307 L47.9569067,21.0669705 L47.3948342,21.2411155 L47.3948342,41.9387033 L56.5504425,41.9387033 Z M16,50.4659926 L16,21.7739797 L36.1702794,15.548296 L36.1702794,24.7052039 L24.526282,28.3200122 L24.526282,41.9387358 L36.1702794,41.9387358 L36.1702794,81.3806284 L33.591244,80.0543973 C25.5662786,75.923652 16,68.9585019 16,59.2339983 L16,54.6496962 L24.526282,54.6496962 L24.526282,59.2339983 C24.526282,61.2460878 25.5734263,63.3605199 27.6426978,65.5373324 L27.6426978,50.4659926 L16,50.4659926 Z M59.1389325,15.3302574 L79.8040306,21.7261873 L79.8040306,50.4659601 L67.6710627,50.4659601 L67.6710627,62.9111544 C67.6710627,62.9111544 64.9581695,66.4674811 59.1464051,69.4451657 C59.1464051,67.0682164 59.1389325,15.3302574 59.1389325,15.3302574 Z M71.2780734,41.9387033 L71.2780734,28.2783928 L67.6710627,27.1649695 L67.6710627,41.9387033 L71.2780734,41.9387033 Z M71.2780734,59.8661186 L71.2780734,54.6495662 L79.8040306,54.6495662 L79.8040306,59.8661186 C79.8040306,74.3588162 58.7760221,82.7005566 52.330058,84.9127828 L49.9859233,85.7230769 L49.9859233,76.7068496 L51.1311866,76.2744112 C61.1591444,72.5004032 71.2780734,65.962818 71.2780734,59.8661186 Z", fill: "#000000" })));
};

var Icon = function (props) {
    return (React.createElement(Svg, __assign({ width: "276.000000pt", height: "330.000000pt", viewBox: "0 0 276.000000 330.000000", preserveAspectRatio: "xMidYMid meet" }, props),
        React.createElement("g", { transform: "translate(0.000000,330.000000) scale(0.100000,-0.100000)", fill: "#000000", stroke: "none" },
            React.createElement("path", { d: "M3 2380 c3 -890 4 -907 25 -1002 61 -268 174 -484 351 -670 216 -228\r\n    486 -369 796 -418 103 -16 315 -14 430 5 183 29 420 125 557 225 l53 39 267\r\n    -267 268 -267 1 815 c1 986 2 924 -17 1040 -46 279 -180 537 -384 740 -187\r\n    187 -388 302 -639 365 -375 94 -777 25 -1095 -189 -38 -25 -71 -46 -75 -46 -3\r\n    0 -126 120 -274 268 l-268 267 4 -905z m1484 279 c415 -46 746 -325 870 -734\r\n    l27 -90 4 -470 3 -470 -796 795 c-795 795 -795 795 -772 812 44 34 185 98 273\r\n    123 147 42 246 50 391 34z m460 -1844 c-6 -17 -129 -83 -213 -114 -121 -44\r\n    -223 -62 -354 -62 -517 0 -937 369 -1009 885 -6 45 -11 249 -11 483 l0 406\r\n    795 -794 c437 -436 794 -798 792 -804z" }))));
};

var ConnectorNames;
(function (ConnectorNames) {
    ConnectorNames["Injected"] = "injected";
    ConnectorNames["WalletConnect"] = "walletconnect";
    ConnectorNames["BSC"] = "bsc";
    ConnectorNames["BitKeep"] = "BitKeep";
})(ConnectorNames || (ConnectorNames = {}));

var connectors = [
    {
        title: "BitKeep Wallet",
        icon: Icon$BitKeep,
        connectorId: "BitKeep",
    },
    {
        title: "ONTOWallet",
        icon: Icon,
        connectorId: ConnectorNames.Injected,
    },
    {
        title: "Metamask",
        icon: Icon$7,
        connectorId: ConnectorNames.Injected,
    },
    {
        title: "TrustWallet",
        icon: Icon$4,
        connectorId: ConnectorNames.Injected,
    },
    {
        title: "MathWallet",
        icon: Icon$6,
        connectorId: ConnectorNames.Injected,
    }, 
    {
        title: "TokenPocket",
        icon: Icon$5,
        connectorId: ConnectorNames.Injected,
    },
    {
        title: "WalletConnect",
        icon: Icon$3,
        connectorId: ConnectorNames.WalletConnect,
    },
    {
        title: "Binance Chain Wallet",
        icon: Icon$2,
        connectorId: ConnectorNames.BSC,
    },
    {
        title: "SafePal Wallet",
        icon: Icon$1,
        connectorId: ConnectorNames.Injected,
    },
    {
        title: "HyperPay Wallet",
        icon: Icon$HyperWallet,
        connectorId: ConnectorNames.Injected,
    },
];
var connectorLocalStorageKey = "connectorId";

var WalletCard = function (_a) {
    var login = _a.login, walletConfig = _a.walletConfig, onDismiss = _a.onDismiss, mb = _a.mb;
    var title = walletConfig.title, Icon = walletConfig.icon;
    return (React.createElement(Button, { width: "100%", variant: "tertiary", onClick: function () {
            login(walletConfig.connectorId);
            window.localStorage.setItem(connectorLocalStorageKey, walletConfig.connectorId);
            onDismiss();
        }, style: { justifyContent: "space-between" }, mb: mb, id: "wallet-connect-" + title.toLocaleLowerCase() },
        React.createElement(Text, { bold: true, color: "primary", mr: "16px" }, title),
        React.createElement(Icon, { width: "32px" })));
};

var HelpLink = styled(Link)(templateObject_1$5 || (templateObject_1$5 = __makeTemplateObject(["\n  display: flex;\n  align-self: center;\n  align-items: center;\n  margin-top: 24px;\n"], ["\n  display: flex;\n  align-self: center;\n  align-items: center;\n  margin-top: 24px;\n"])));
var ConnectModal = function (_a) {
    var login = _a.login, _b = _a.onDismiss, onDismiss = _b === void 0 ? function () { return null; } : _b;
    return (React.createElement(Modal, { title: "Connect to a wallet", onDismiss: onDismiss },
        connectors.map(function (entry, index) { return (React.createElement(WalletCard, { key: entry.title, login: login, walletConfig: entry, onDismiss: onDismiss, mb: index < connectors.length - 1 ? "8px" : "0" })); }),
        React.createElement(HelpLink, { href: "https://bridgeswap-exchange-1.gitbook.io/bridgeswap/get-started/connecting-your-wallet-to-bridgeswap", external: true },
            React.createElement(Icon$1h, { color: "primary", mr: "6px" }),
            "Learn how to connect")));
};
var templateObject_1$5;

var StyleButton = styled(Text).attrs({ role: "button" })(templateObject_1$4 || (templateObject_1$4 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: ", ";\n"], ["\n  position: relative;\n  display: flex;\n  align-items: center;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.primary;
});
var Tooltip = styled.div(templateObject_2$1 || (templateObject_2$1 = __makeTemplateObject(["\n  display: ", ";\n  position: absolute;\n  bottom: -22px;\n  right: 0;\n  left: 0;\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 16px;\n  opacity: 0.7;\n"], ["\n  display: ", ";\n  position: absolute;\n  bottom: -22px;\n  right: 0;\n  left: 0;\n  text-align: center;\n  background-color: ", ";\n  color: ", ";\n  border-radius: 16px;\n  opacity: 0.7;\n"])), function (_a) {
    var isTooltipDisplayed = _a.isTooltipDisplayed;
    return (isTooltipDisplayed ? "block" : "none");
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.contrast;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.invertedContrast;
});
var CopyToClipboard = function (_a) {
    var toCopy = _a.toCopy, children = _a.children, props = __rest(_a, ["toCopy", "children"]);
    var _b = useState(false), isTooltipDisplayed = _b[0], setIsTooltipDisplayed = _b[1];
    var copyToClipboardWithCommand = function (content) {
        var el = document.createElement("textarea");
        el.value = content;
        document.body.appendChild(el);
        el.select();
        document.execCommand("copy");
        document.body.removeChild(el);
    };
    function displayTooltip() {
        setIsTooltipDisplayed(true);
        setTimeout(function () {
            setIsTooltipDisplayed(false);
        }, 1000);
    }
    return (React.createElement(StyleButton, __assign({ small: true, bold: true, onClick: function () {
            if (navigator.clipboard && navigator.permissions) {
                navigator.clipboard.writeText(toCopy).then(function () { return displayTooltip(); });
            }
            else if (document.queryCommandSupported("copy")) {
                copyToClipboardWithCommand(toCopy);
                displayTooltip();
            }
        } }, props),
        children,
        React.createElement(Icon$1j, { width: "20px", color: "primary", ml: "4px" }),
        React.createElement(Tooltip, { isTooltipDisplayed: isTooltipDisplayed }, "Copied")));
};
var templateObject_1$4, templateObject_2$1;

var AccountModal = function (_a) {
    var account = _a.account, logout = _a.logout, _b = _a.onDismiss, onDismiss = _b === void 0 ? function () { return null; } : _b;
    return (React.createElement(Modal, { title: "Your wallet", onDismiss: onDismiss },
        React.createElement(Text, { fontSize: "20px", bold: true, style: { whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginBottom: "8px" } }, account),
        React.createElement(Flex, { mb: "32px" },
            React.createElement(LinkExternal, { small: true, href: "https://bscscan.com/address/" + account, mr: "16px" }, "View on BscScan"),
            React.createElement(CopyToClipboard, { toCopy: account }, "Copy Address")),
        React.createElement(Flex, { justifyContent: "center" },
            React.createElement(Button, { scale: "sm", variant: "secondary", onClick: function () {
                    logout();
                    window.localStorage.removeItem(connectorLocalStorageKey);
                    onDismiss();
                } }, "Logout"))));
};

var useWalletModal = function (login, logout, account) {
    var onPresentConnectModal = useModal(React.createElement(ConnectModal, { login: login }))[0];
    var onPresentAccountModal = useModal(React.createElement(AccountModal, { account: account || "", logout: logout }))[0];
    return { onPresentConnectModal: onPresentConnectModal, onPresentAccountModal: onPresentAccountModal };
};

var UserBlock = function (_a) {
    var account = _a.account, login = _a.login, logout = _a.logout;
    var _b = useWalletModal(login, logout, account), onPresentConnectModal = _b.onPresentConnectModal, onPresentAccountModal = _b.onPresentAccountModal;
    var accountEllipsis = account ? account.substring(0, 4) + "..." + account.substring(account.length - 4) : null;
    return (React.createElement("div", null, account ? (React.createElement(Button, { scale: "sm", variant: "tertiary", onClick: function () {
            onPresentAccountModal();
        } }, accountEllipsis)) : (React.createElement(Button, { scale: "sm", onClick: function () {
            onPresentConnectModal();
        } }, "Connect"))));
};
var UserBlock$1 = React.memo(UserBlock, function (prevProps, nextProps) { return prevProps.account === nextProps.account; });

var Wrapper = styled.div(templateObject_1$3 || (templateObject_1$3 = __makeTemplateObject(["\n  position: relative;\n  width: 100%;\n"], ["\n  position: relative;\n  width: 100%;\n"])));
var StyledNav = styled.nav(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  position: fixed;\n  top: ", ";\n  left: 0;\n  transition: top 0.2s;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 8px;\n  padding-right: 16px;\n  width: 100%;\n  height: ", "px;\n  background-color: ", ";\n  border-bottom: solid 2px rgba(133, 133, 133, 0.1);\n  z-index: 20;\n  transform: translate3d(0, 0, 0);\n"], ["\n  position: fixed;\n  top: ", ";\n  left: 0;\n  transition: top 0.2s;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding-left: 8px;\n  padding-right: 16px;\n  width: 100%;\n  height: ", "px;\n  background-color: ", ";\n  border-bottom: solid 2px rgba(133, 133, 133, 0.1);\n  z-index: 20;\n  transform: translate3d(0, 0, 0);\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? 0 : "-" + MENU_HEIGHT + "px");
}, MENU_HEIGHT, function (_a) {
    var theme = _a.theme;
    return theme.nav.background;
});
var BodyWrapper = styled.div(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n  position: relative;\n  display: flex;\n"], ["\n  position: relative;\n  display: flex;\n"])));
var Inner = styled.div(templateObject_4 || (templateObject_4 = __makeTemplateObject(["\n  flex-grow: 1;\n  margin-top: ", ";\n  transition: margin-top 0.2s, margin-left 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  transform: translate3d(0, 0, 0);\n  max-width: 100%;\n\n  ", " {\n    margin-left: ", ";\n    max-width: ", ";\n  }\n"], ["\n  flex-grow: 1;\n  margin-top: ", ";\n  transition: margin-top 0.2s, margin-left 0.2s cubic-bezier(0.4, 0, 0.2, 1);\n  transform: translate3d(0, 0, 0);\n  max-width: 100%;\n\n  ", " {\n    margin-left: ", ";\n    max-width: ", ";\n  }\n"])), function (_a) {
    var showMenu = _a.showMenu;
    return (showMenu ? MENU_HEIGHT + "px" : 0);
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
}, function (_a) {
    var isPushed = _a.isPushed;
    return (isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED) + "px";
}, function (_a) {
    var isPushed = _a.isPushed;
    return "calc(100% - " + (isPushed ? SIDEBAR_WIDTH_FULL : SIDEBAR_WIDTH_REDUCED) + "px)";
});
var Platform = styled.h3(templateObject_5 || (templateObject_5 = __makeTemplateObject(["\n  color: ", ";\n  display: none;\n  ", " {\n    display: block;\n  }\n"], ["\n  color: ", ";\n  display: none;\n  ", " {\n    display: block;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
}, function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.md;
});
var BridgePrice = styled.div(templateObject_6 || (templateObject_6 = __makeTemplateObject(["\n  display: none;\n  ", " {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n"], ["\n  display: none;\n  ", " {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var PriceHolder = styled.div(templateObject_7 || (templateObject_7 = __makeTemplateObject(["\n  margin-left: 10px;\n  color: ", ";\n"], ["\n  margin-left: 10px;\n  color: ", ";\n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
});
var ConnectedNet = styled.div(templateObject_8 || (templateObject_8 = __makeTemplateObject(["\n  display: none;\n  ", " {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border: 1.5px solid ", ";\n    border-radius: 40px;\n    padding: 7px 12px;\n    color: ", ";\n  }\n"], ["\n  display: none;\n  ", " {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    border: 1.5px solid ", ";\n    border-radius: 40px;\n    padding: 7px 12px;\n    color: ", ";\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.text;
});
var OnlyNetLogo = styled.div(templateObject_9 || (templateObject_9 = __makeTemplateObject(["\n  display: block;\n  ", " {\n    display: none;\n  }\n"], ["\n  display: block;\n  ", " {\n    display: none;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var MobileOnlyOverlay = styled(Overlay)(templateObject_10 || (templateObject_10 = __makeTemplateObject(["\n  position: fixed;\n  height: 100%;\n\n  ", " {\n    display: none;\n  }\n"], ["\n  position: fixed;\n  height: 100%;\n\n  ", " {\n    display: none;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.nav;
});
var Menu = function (_a) {
    var _b;
    var netLogo = _a.netLogo, netName = _a.netName, platform = _a.platform, account = _a.account, login = _a.login, logout = _a.logout, isDark = _a.isDark, toggleTheme = _a.toggleTheme, langs = _a.langs, setLang = _a.setLang, currentLang = _a.currentLang, cakePriceUsd = _a.cakePriceUsd, links = _a.links; _a.profile; var children = _a.children;
    var isXl = useMatchBreakpoints().isXl;
    var isMobile = isXl === false;
    var _c = useState(!isMobile), isPushed = _c[0], setIsPushed = _c[1];
    var _d = useState(true), showMenu = _d[0], setShowMenu = _d[1];
    var refPrevOffset = useRef(window.pageYOffset);
    useEffect(function () {
        var handleScroll = function () {
            var currentOffset = window.pageYOffset;
            var isBottomOfPage = window.document.body.clientHeight === currentOffset + window.innerHeight;
            var isTopOfPage = currentOffset === 0;
            // Always show the menu when user reach the top
            if (isTopOfPage) {
                setShowMenu(true);
            }
            // Avoid triggering anything at the bottom because of layout shift
            else if (!isBottomOfPage) {
                if (currentOffset < refPrevOffset.current) {
                    // Has scroll up
                    setShowMenu(true);
                }
                else {
                    // Has scroll down
                    setShowMenu(false);
                }
            }
            refPrevOffset.current = currentOffset;
        };
        var throttledHandleScroll = throttle(handleScroll, 200);
        window.addEventListener("scroll", throttledHandleScroll);
        return function () {
            window.removeEventListener("scroll", throttledHandleScroll);
        };
    }, []);
    // Find the home link if provided
    var homeLink = links.find(function (link) { return link.label === "Home"; });
    return (React.createElement(Wrapper, null,
        React.createElement(StyledNav, { showMenu: showMenu },
            React.createElement(Logo$1, { isPushed: isPushed, togglePush: function () { return setIsPushed(function (prevState) { return !prevState; }); }, isDark: isDark, href: (_b = homeLink === null || homeLink === void 0 ? void 0 : homeLink.href) !== null && _b !== void 0 ? _b : "/" }),
            React.createElement(Flex, null,
                React.createElement(Platform, null, platform)),
            React.createElement(Flex, null,
                React.createElement(BridgePrice, null,
                    React.createElement(WhiteBGLogo, null),
                    React.createElement(PriceHolder, null, "$" + Number(cakePriceUsd).toFixed(3)))),
            account !== null &&
                (netName !== undefined &&
                    React.createElement(Flex, null,
                        React.createElement(ConnectedNet, null,
                            netLogo,
                            netName.toLocaleUpperCase()),
                        React.createElement(OnlyNetLogo, null, netLogo))),
            React.createElement(Flex, null,
                React.createElement(UserBlock$1, { account: account, login: login, logout: logout }))),
        React.createElement(BodyWrapper, null,
            React.createElement(Panel, { isPushed: isPushed, isMobile: isMobile, showMenu: showMenu, isDark: isDark, toggleTheme: toggleTheme, langs: langs, setLang: setLang, currentLang: currentLang, cakePriceUsd: cakePriceUsd, pushNav: setIsPushed, links: links }),
            React.createElement(Inner, { isPushed: isPushed, showMenu: showMenu }, children),
            React.createElement(MobileOnlyOverlay, { show: isPushed, onClick: function () { return setIsPushed(false); }, role: "presentation" }))));
};
var templateObject_1$3, templateObject_2, templateObject_3, templateObject_4, templateObject_5, templateObject_6, templateObject_7, templateObject_8, templateObject_9, templateObject_10;

var types = {
    SUCCESS: "success",
    DANGER: "danger",
    WARNING: "warning",
    INFO: "info",
};

var _a;
var alertTypeMap = (_a = {},
    _a[types.INFO] = variants$3.INFO,
    _a[types.SUCCESS] = variants$3.SUCCESS,
    _a[types.DANGER] = variants$3.DANGER,
    _a[types.WARNING] = variants$3.WARNING,
    _a);
var StyledToast = styled.div(templateObject_1$2 || (templateObject_1$2 = __makeTemplateObject(["\n  right: 16px;\n  position: fixed;\n  max-width: calc(100% - 32px);\n  transition: all 250ms ease-in;\n  width: 100%;\n\n  ", " {\n    max-width: 400px;\n  }\n"], ["\n  right: 16px;\n  position: fixed;\n  max-width: calc(100% - 32px);\n  transition: all 250ms ease-in;\n  width: 100%;\n\n  ", " {\n    max-width: 400px;\n  }\n"])), function (_a) {
    var theme = _a.theme;
    return theme.mediaQueries.sm;
});
var Toast = function (_a) {
    var toast = _a.toast, onRemove = _a.onRemove, style = _a.style, ttl = _a.ttl, props = __rest(_a, ["toast", "onRemove", "style", "ttl"]);
    var timer = useRef();
    var ref = useRef(null);
    var removeHandler = useRef(onRemove);
    var id = toast.id, title = toast.title, description = toast.description, type = toast.type;
    var handleRemove = useCallback(function () { return removeHandler.current(id); }, [id, removeHandler]);
    var handleMouseEnter = function () {
        clearTimeout(timer.current);
    };
    var handleMouseLeave = function () {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = window.setTimeout(function () {
            handleRemove();
        }, ttl);
    };
    useEffect(function () {
        if (timer.current) {
            clearTimeout(timer.current);
        }
        timer.current = window.setTimeout(function () {
            handleRemove();
        }, ttl);
        return function () {
            clearTimeout(timer.current);
        };
    }, [timer, ttl, handleRemove]);
    return (React.createElement(CSSTransition, __assign({ nodeRef: ref, timeout: 250, style: style }, props),
        React.createElement(StyledToast, { ref: ref, onMouseEnter: handleMouseEnter, onMouseLeave: handleMouseLeave },
            React.createElement(Alert, { title: title, variant: alertTypeMap[type], onClick: handleRemove }, description))));
};
var templateObject_1$2;

var ZINDEX = 1000;
var TOP_POSITION = 80; // Initial position from the top
var StyledToastContainer = styled.div(templateObject_1$1 || (templateObject_1$1 = __makeTemplateObject(["\n  .enter,\n  .appear {\n    opacity: 0.01;\n  }\n\n  .enter.enter-active,\n  .appear.appear-active {\n    opacity: 1;\n    transition: opacity 250ms ease-in;\n  }\n\n  .exit {\n    opacity: 1;\n  }\n\n  .exit.exit-active {\n    opacity: 0.01;\n    transition: opacity 250ms ease-out;\n  }\n"], ["\n  .enter,\n  .appear {\n    opacity: 0.01;\n  }\n\n  .enter.enter-active,\n  .appear.appear-active {\n    opacity: 1;\n    transition: opacity 250ms ease-in;\n  }\n\n  .exit {\n    opacity: 1;\n  }\n\n  .exit.exit-active {\n    opacity: 0.01;\n    transition: opacity 250ms ease-out;\n  }\n"])));
var ToastContainer = function (_a) {
    var toasts = _a.toasts, onRemove = _a.onRemove, _b = _a.ttl, ttl = _b === void 0 ? 6000 : _b, _c = _a.stackSpacing, stackSpacing = _c === void 0 ? 24 : _c;
    return (React.createElement(StyledToastContainer, null,
        React.createElement(TransitionGroup, null, toasts.map(function (toast, index) {
            var zIndex = (ZINDEX - index).toString();
            var top = TOP_POSITION + index * stackSpacing;
            return (React.createElement(Toast, { key: toast.id, toast: toast, onRemove: onRemove, ttl: ttl, style: { top: top + "px", zIndex: zIndex } }));
        }))));
};
var templateObject_1$1;

var ResetCSS = createGlobalStyle(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  /* prettier-ignore */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  /* prettier-ignore */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n    font-size: 16px;\n  }\n  ol,\n  ul {\n    list-style: disc;\n    list-style-position: inside;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: \"\";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  [role=\"button\"] {\n    cursor: pointer;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  * {\n    font-family: 'Kanit', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  /* Number */\n  input::-webkit-outer-spin-button,\n  input::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n  input[type=number] {\n    -moz-appearance: textfield;\n  }\n\n  /* Scrollbar */\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: ", "; \n    border-radius: 8px;\n  }\n  ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px ", "; \n    border-radius: 10px;\n  }\n\n  /* Slider */ \n  input[type=range] {\n    -webkit-appearance: none; /* Hides the slider so that custom slider can be made */\n    width: 100%; /* Specific width is required for Firefox. */\n    background: transparent; /* Otherwise white in Chrome */\n  }\n  input[type=range]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n  }\n  input[type=range]:focus {\n    outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */\n  }\n  input[type=range]::-ms-track {\n    width: 100%;\n    cursor: pointer;\n    /* Hides the slider so custom styles can be added */\n    background: transparent; \n    border-color: transparent;\n    color: transparent;\n  }  \n"], ["\n  /* prettier-ignore */\n  html, body, div, span, applet, object, iframe,\n  h1, h2, h3, h4, h5, h6, p, blockquote, pre,\n  a, abbr, acronym, address, big, cite, code,\n  del, dfn, em, img, ins, kbd, q, s, samp,\n  small, strike, strong, sub, sup, tt, var,\n  b, u, i, center,\n  dl, dt, dd, ol, ul, li,\n  fieldset, form, label, legend,\n  table, caption, tbody, tfoot, thead, tr, th, td,\n  article, aside, canvas, details, embed, \n  figure, figcaption, footer, header, hgroup, \n  menu, nav, output, ruby, section, summary,\n  time, mark, audio, video {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    vertical-align: baseline;\n  }\n  /* HTML5 display-role reset for older browsers */\n  /* prettier-ignore */\n  article, aside, details, figcaption, figure, \n  footer, header, hgroup, menu, nav, section {\n    display: block;\n  }\n  body {\n    line-height: 1;\n    font-size: 16px;\n  }\n  ol,\n  ul {\n    list-style: disc;\n    list-style-position: inside;\n  }\n  blockquote,\n  q {\n    quotes: none;\n  }\n  blockquote:before,\n  blockquote:after,\n  q:before,\n  q:after {\n    content: \"\";\n    content: none;\n  }\n  table {\n    border-collapse: collapse;\n    border-spacing: 0;\n  }\n  a {\n    color: inherit;\n    text-decoration: none;\n  }\n  [role=\"button\"] {\n    cursor: pointer;\n  }\n  *,\n  *::before,\n  *::after {\n    box-sizing: border-box;\n  }\n  * {\n    font-family: 'Kanit', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n  }\n\n  /* Number */\n  input::-webkit-outer-spin-button,\n  input::-webkit-inner-spin-button {\n    -webkit-appearance: none;\n    margin: 0;\n  }\n  input[type=number] {\n    -moz-appearance: textfield;\n  }\n\n  /* Scrollbar */\n  ::-webkit-scrollbar {\n    width: 8px;\n  }\n  ::-webkit-scrollbar-thumb {\n    background: ", "; \n    border-radius: 8px;\n  }\n  ::-webkit-scrollbar-track {\n    box-shadow: inset 0 0 5px ", "; \n    border-radius: 10px;\n  }\n\n  /* Slider */ \n  input[type=range] {\n    -webkit-appearance: none; /* Hides the slider so that custom slider can be made */\n    width: 100%; /* Specific width is required for Firefox. */\n    background: transparent; /* Otherwise white in Chrome */\n  }\n  input[type=range]::-webkit-slider-thumb {\n    -webkit-appearance: none;\n  }\n  input[type=range]:focus {\n    outline: none; /* Removes the blue border. You should probably do some kind of focus styling for accessibility reasons though. */\n  }\n  input[type=range]::-ms-track {\n    width: 100%;\n    cursor: pointer;\n    /* Hides the slider so custom styles can be added */\n    background: transparent; \n    border-color: transparent;\n    color: transparent;\n  }  \n"])), function (_a) {
    var theme = _a.theme;
    return theme.colors.textSubtle;
}, function (_a) {
    var theme = _a.theme;
    return theme.colors.input;
});
var templateObject_1;

export { Icon$1I as AddIcon, Alert, Icon$1H as ArrowBackIcon, Icon$1G as ArrowDownIcon, Icon$1F as ArrowDropDownIcon, Icon$1E as ArrowDropUpIcon, Icon$1D as ArrowForwardIcon, Icon$1C as ArrowUpIcon, Icon$1B as AutoRenewIcon, BackgroundImage, BalanceInput, GridLayout$1 as BaseLayout, Icon$1A as BinanceIcon, Icon$1K as BlockIcon, Icon$1z as BnbUsdtPairTokenIcon, Box, Breadcrumbs, Icon$1y as BunnyCardsIcon, Icon$1x as BunnyPlaceholderIcon, Button, ButtonMenu$1 as ButtonMenu, ButtonMenuItem, Icon$1u as CalculateIcon, Card, CardBody, CardFooter, CardHeader, CardRibbon, Icon$1v as CardViewIcon, Icon$1w as Cards, GridLayout as CardsLayout, Icon$1s as ChartIcon, Checkbox, Icon$1M as CheckmarkCircleIcon, Icon$1r as CheckmarkIcon, Icon$1q as ChevronDownIcon, Icon$1p as ChevronLeftIcon, Icon$1o as ChevronRightIcon, Icon$1n as ChevronUpIcon, Icon$1t as CircleOutlineIcon, Icon$1m as CloseIcon, Icon$1l as CogIcon, Icon$1k as CommunityIcon, ConnectorNames, Icon$1j as CopyIcon, Icon$1i as CrownIcon, Dropdown, Icon$1L as ErrorIcon, ExpandableButton, ExpandableLabel, FallingBunnies, Flex, Grid, Heading, Icon$1h as HelpIcon, Icon$1g as HistoryIcon, IconButton, Image, Icon$1J as InfoIcon, Input$1 as Input, Icon$1f as LaurelLeftIcon, Icon$1e as LaurelRightIcon, Link, LinkExternal, Icon$1d as ListViewIcon, Icon$1c as LogoIcon, Icon$1b as LogoRoundIcon, Icon$1a as MedalBronzeIcon, Icon$19 as MedalGoldIcon, Icon$18 as MedalPurpleIcon, Icon$17 as MedalSilverIcon, Icon$16 as MedalTealIcon, Menu, Message as Mesage, Icon$15 as MetamaskIcon, Icon$14 as MinusIcon, Modal, ModalBackButton, ModalBody, ModalCloseButton, ModalContainer, ModalHeader, ModalProvider, ModalTitle, Icon$13 as NoProfileAvatarIcon, NotificationDot, Icon$12 as OpenNewIcon, Icon$10 as PancakeRoundIcon, PancakeToggle, Icon$11 as PancakesIcon, Icon$_ as PlayCircleOutlineIcon, Icon$$ as PocketWatchIcon, Icon$Z as PrizeIcon, Progress, Icon$V as ProgressBunny, Icon$Y as ProposalIcon, Radio, Icon$A as RefreshIcon, Icon$X as RemoveIcon, ResetCSS, Icon$L as SearchIcon, Skeleton, Slider, Spinner, Icon$K as StarFillIcon, Icon$J as StarLineIcon, Step, Stepper, Svg, Icon$I as SwapVertIcon, Icon$H as SyncAltIcon, Tab, ButtonMenu as TabMenu, Tag, Icon$S as TeamPlayerIcon, Icon$R as TestnetIcon, Text, Icon$Q as Ticket, Icon$P as TicketRound, Icon$O as TimerIcon, ToastContainer, Toggle, TooltipText, Icon$N as TrophyGoldIcon, Icon$M as TuneIcon, Icon$W as VerifiedIcon, Icon$G as VisibilityOff, Icon$F as VisibilityOn, Icon$E as VolumeOffIcon, Icon$D as VolumeUpIcon, Icon$C as VoteIcon, WhiteBGLogo as WBGLogoIcon, Icon$U as WaitIcon, Icon$B as WarningIcon, Icon$T as Won, variants$3 as alertVariants, byTextAscending, byTextDescending, connectorLocalStorageKey, darkTheme as dark, darkColors, lightTheme as light, lightColors, makeRender, links as menuConfig, status as menuStatus, types as toastTypes, useKonamiCheatCode, useMatchBreakpoints, useModal, useParticleBurst, useTable, useTooltip, useWalletModal };
