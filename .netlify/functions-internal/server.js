var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toESM(require("react"));
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return node.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return node.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// server.js
var server_exports = {};
__export(server_exports, {
  handler: () => handler
});
init_react();
var import_netlify = require("@remix-run/netlify");

// server-entry-module:@remix-run/dev/server-build
var server_build_exports = {};
__export(server_build_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = __toESM(require("react-dom/server"));
var import_remix = __toESM(require_remix());
var import_styled_components = require("styled-components");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const sheet = new import_styled_components.ServerStyleSheet();
  let markup = import_server.default.renderToString(sheet.collectStyles(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  })));
  const styles = sheet.getStyleTags();
  markup = markup.replace("__STYLES__", styles);
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:C:\Users\Augustine Ogiza\Documents\Development\react\wikki\app\root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
init_react();
var import_remix4 = __toESM(require_remix());
var import_nprogress = __toESM(require("nprogress"));

// app/styles/nprogress.css
var nprogress_default = "/build/_assets/nprogress-65OK324V.css";

// node_modules/react-toastify/dist/ReactToastify.css
var ReactToastify_default = "/build/_assets/ReactToastify-XWSWQFLW.css";

// app/index.css
var app_default = "/build/_assets/index-CTPXVPWM.css";

// route:C:\Users\Augustine Ogiza\Documents\Development\react\wikki\app\root.tsx
var import_react_toastify = require("react-toastify");

// app/components/Footer.tsx
init_react();
var import_react = __toESM(require("react"));
var Footer = () => {
  return /* @__PURE__ */ import_react.default.createElement("div", null);
};
var Footer_default = Footer;

// route:C:\Users\Augustine Ogiza\Documents\Development\react\wikki\app\root.tsx
var import_react5 = require("react");

// app/components/navbar/NavCover.tsx
init_react();
var import_react3 = __toESM(require("react"));
var import_styled_components5 = __toESM(require("styled-components"));

// app/components/navbar/Navbar.tsx
init_react();
var import_react2 = __toESM(require("react"));
var import_styled_components4 = __toESM(require("styled-components"));
var import_remix3 = __toESM(require_remix());

// app/images/logo.svg
var logo_default = "/build/_assets/logo-SPAM6P6X.svg";

// app/styles/TextStyles.tsx
init_react();
var import_styled_components2 = __toESM(require("styled-components"));
var LargeHeader = import_styled_components2.default.h1`
  font-family: "Clash Display Medium";
  font-size: 96px;
  font-weight: 500;
  line-height: 1.1;

  @media only screen and (max-width: 650px) {
    font-size: 48px;
  }
`;
var Header1 = import_styled_components2.default.h1`
  font-family: "Clash Display Medium";
  font-size: 72px;
  font-weight: 400;
  line-height: 1.1;

  @media only screen and (max-width: 750px) {
    font-size: 40px;
  }
  @media only screen and (max-width: 550px) {
    font-size: 28px;
  }
`;
var Header2 = import_styled_components2.default.h2`
  font-family: "Clash Display Medium";
  font-size: 48px;
  font-weight: 600;
  line-height: 1.1;

  @media only screen and (max-width: 650px) {
    font-size: 28px;
  }
`;
var Header3 = import_styled_components2.default.h3`
  font-family: "Clash Display Medium";
  font-size: 36px;
  font-weight: 500;
  line-height: 1.1;

  @media only screen and (max-width: 650px) {
    font-size: 21px;
  }
`;
var Header5 = import_styled_components2.default.h4`
  font-family: "Clash Display Medium";
  font-size: 24px;
  font-weight: 500;
  line-height: 1.1;

  @media only screen and (max-width: 650px) {
    font-size: 18px;
  }
`;
var SubTitle = import_styled_components2.default.h4`
  font-family: "Clash Display Medium";
  font-size: 16px;
  font-weight: 500;
  line-height: 1.1;

  @media only screen and (max-width: 650px) {
    font-size: 14px;
  }
`;
var SubTitleSmall = import_styled_components2.default.h5`
  font-family: "Clash Display Medium";
  font-size: 14px;
  font-weight: 500;
  line-height: 1.1;

  @media only screen and (max-width: 650px) {
    font-size: 13px;
  }
`;
var Caption = import_styled_components2.default.h6`
  font-family: "Clash Display Regular";
  font-size: 13px;
  font-weight: 400;
  line-height: 1.6;

  @media only screen and (max-width: 650px) {
    font-size: 11px;
  }
`;
var Body1 = import_styled_components2.default.p`
  font-family: "Inter", sans-serif;
  font-size: 21px;
  font-weight: 400;
  line-height: 1.6;

  @media only screen and (max-width: 650px) {
    font-size: 18px;
  }
`;
var Body2 = import_styled_components2.default.p`
  font-family: "Inter", sans-serif;
  font-size: 18px;
  font-weight: 400;
  line-height: 1.6;

  @media only screen and (max-width: 650px) {
    font-size: 16px;
  }
`;
var Body3 = import_styled_components2.default.p`
  font-family: "Inter", sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.6;

  @media only screen and (max-width: 650px) {
    font-size: 14px;
  }
`;
var Body4 = import_styled_components2.default.p`
  font-family: "Inter", sans-serif;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.6;

  @media only screen and (max-width: 650px) {
    font-size: 12px;
  }
`;

// app/styles/ColorStyles.tsx
init_react();
var WikkiTheme = {
  primary: "#330066",
  secondary: "#FF9E17",
  white: "#ffffff",
  black: "#000000",
  dark: "#0a0b1a",
  snowWhite: "#FAFAFF",
  red: "#ff0000",
  gray: "#818181",
  yellow: "#FFCE32",
  blue: "#1D63FF",
  lightYelllow: "#FEFAF0",
  darkRed: "#F34646"
};

// app/styles/ButtonStyles.tsx
init_react();
var import_styled_components3 = __toESM(require("styled-components"));
var import_remix2 = __toESM(require_remix());
var MainButton = import_styled_components3.default.button`
  height: 56px;
  max-width: 180px;
  width: 100%;
  background: ${WikkiTheme.primary};
  color: ${WikkiTheme.white};
  border-radius: 32px;
  border: none;
  outline: none;
  font-family: "Cabinet Grotesk Medium";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0em;
  cursor: pointer;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;
var PrimaryButton = import_styled_components3.default.button`
  height: 56px;
  max-width: 180px;
  width: 100%;
  background: ${WikkiTheme.primary};
  color: ${WikkiTheme.white};
  border-radius: 32px;
  border: none;
  outline: none;
  font-family: "Cabinet Grotesk Medium";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;
  display: flex;
  align-items: center;
  cursor: pointer;
  justify-content: center;
`;
var SecondaryButton = import_styled_components3.default.button`
  height: 56px;
  max-width: 180px;
  width: 100%;
  background: ${WikkiTheme.secondary};
  color: ${WikkiTheme.primary};
  border-radius: 32px;
  border: none;
  outline: none;
  cursor: pointer;
  font-family: "Cabinet Grotesk Medium";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;
var TertiaryButton = import_styled_components3.default.button`
  height: 56px;
  max-width: 200px;
  width: 100%;
  background: ${WikkiTheme.primary};
  cursor: pointer;
  color: ${WikkiTheme.white};
  border-radius: 32px;
  border: none;
  outline: none;
  font-family: "Cabinet Grotesk Medium";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;
var FormButton = import_styled_components3.default.button`
  height: 56px;
  max-width: 450px;
  width: 100%;
  background: ${WikkiTheme.dark};
  cursor: pointer;
  color: ${WikkiTheme.white};
  border-radius: 32px;
  border: none;
  outline: none;
  font-family: "Cabinet Grotesk Medium";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;
var CaseButton = (0, import_styled_components3.default)(import_remix2.Link)`
  height: 64px;
  max-width: 180px;
  width: 100%;
  background: ${WikkiTheme.white};
  color: ${WikkiTheme.black};
  border-radius: 16px;
  border: none;
  outline: none;
  font-family: "Cabinet Grotesk Medium";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.1;
  cursor: pointer;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 550px) {
    font-size: 14px;
    height: 48px;
  }
`;
var NavbarButton = import_styled_components3.default.button`
  height: 56px;
  max-width: 200px;
  width: 100%;
  background: ${WikkiTheme.white};
  cursor: pointer;
  color: ${WikkiTheme.primary};
  border-radius: 32px;
  border: 2px solid ${WikkiTheme.primary};

  outline: none;
  font-family: "Cabinet Grotesk Medium";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 16px;
  letter-spacing: 0em;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.4s ease-in-out;
  :after {
    position: absolute;
    content: "";
    z-index: -1;
    outline: none;
    transition: all 0.4s ease-in-out;
    transform: rotate(10deg);
    height: 56px;
    max-width: 200px;
    width: 100%;
    background: ${WikkiTheme.white};
    cursor: pointer;
    color: ${WikkiTheme.primary};
    border: 2px solid ${WikkiTheme.primary};

    border-radius: 32px;
  }

  :hover {
    ::after {
      transform: rotate(0deg);
    }
  }
`;

// app/components/navbar/Navbar.tsx
var import_react_device_detect = require("react-device-detect");
var Navbar = (props) => {
  const [open, setOpen] = (0, import_react2.useState)(false);
  const [currentRoute, setCurrentRoute] = (0, import_react2.useState)(false);
  const { onClick } = props;
  const router = (0, import_remix3.useLocation)();
  const toggle = () => {
    setOpen(!open);
  };
  (0, import_react2.useEffect)(() => {
    if (import_react_device_detect.isMobile && router.pathname === "/" || router.pathname === "/about") {
      setCurrentRoute(false);
    } else {
      setCurrentRoute(true);
    }
    setOpen(false);
  }, [router]);
  return /* @__PURE__ */ import_react2.default.createElement(Body, {
    routerOpened: currentRoute
  }, /* @__PURE__ */ import_react2.default.createElement(MobileLogo, null, /* @__PURE__ */ import_react2.default.createElement(import_remix3.Link, {
    to: "/"
  }, /* @__PURE__ */ import_react2.default.createElement(Logo, {
    src: logo_default,
    alt: "Wikki logo"
  }))), /* @__PURE__ */ import_react2.default.createElement(MobileToggle, {
    onClick: toggle
  }, /* @__PURE__ */ import_react2.default.createElement(ToggleTop, {
    open,
    routerOpened: currentRoute
  }), /* @__PURE__ */ import_react2.default.createElement(ToggleMiddle, {
    open,
    routerOpened: currentRoute
  }), /* @__PURE__ */ import_react2.default.createElement(ToggleBottom, {
    open,
    routerOpened: currentRoute
  })), /* @__PURE__ */ import_react2.default.createElement(Cover, {
    open,
    routerOpened: currentRoute
  }, /* @__PURE__ */ import_react2.default.createElement(WikkiLogo, null, /* @__PURE__ */ import_react2.default.createElement(import_remix3.Link, {
    to: "/"
  }, /* @__PURE__ */ import_react2.default.createElement(Logo, {
    src: logo_default,
    alt: "Wikki logo"
  }))), /* @__PURE__ */ import_react2.default.createElement(WikkiLinksCover, null, /* @__PURE__ */ import_react2.default.createElement(WikkiLinks, null, /* @__PURE__ */ import_react2.default.createElement(import_remix3.Link, {
    to: "/about"
  }, /* @__PURE__ */ import_react2.default.createElement(WikkiHref, null, /* @__PURE__ */ import_react2.default.createElement(LinkText, {
    linkTrue: router.pathname === "/" || router.pathname === "/about" ? true : false
  }, "About Us", " "))), /* @__PURE__ */ import_react2.default.createElement(import_remix3.Link, {
    to: "/driver-requirements"
  }, /* @__PURE__ */ import_react2.default.createElement(WikkiHref, null, /* @__PURE__ */ import_react2.default.createElement(LinkText, {
    linkTrue: router.pathname === "/" || router.pathname === "/about" ? true : false
  }, "Become A Driver"))), /* @__PURE__ */ import_react2.default.createElement(import_remix3.Link, {
    to: "/how-it-works"
  }, /* @__PURE__ */ import_react2.default.createElement(WikkiHref, null, /* @__PURE__ */ import_react2.default.createElement(LinkText, {
    linkTrue: router.pathname === "/" || router.pathname === "/about" ? true : false
  }, "How It Works"))), " ", /* @__PURE__ */ import_react2.default.createElement(import_remix3.Link, {
    to: "/contact"
  }, /* @__PURE__ */ import_react2.default.createElement(WikkiHref, null, /* @__PURE__ */ import_react2.default.createElement(LinkText, {
    linkTrue: router.pathname === "/" || router.pathname === "/about" ? true : false
  }, "Contact"))))), /* @__PURE__ */ import_react2.default.createElement(NavBut, {
    onClick
  }, /* @__PURE__ */ import_react2.default.createElement(NavButton, null, "Get App"))));
};
var Body = import_styled_components4.default.section`
  position: relative;
  @media only screen and (max-width: 800px) {
    background: ${(props) => props.routerOpened ? `${WikkiTheme.white}` : `${WikkiTheme.primary}`};
    height: 100px;
  }
`;
var Cover = import_styled_components4.default.div`
  margin: 24px auto;
  padding: 16px;
  height: 92px;
  max-width: 1232px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 800px) {
    flex-direction: column;
    margin: 0 auto;
    justify-content: flex-start;
    height: 100vh;
    transform: ${(props) => props.open ? "translateY(0%)" : "translateY(-2000px)"};
    background: ${(props) => props.routerOpened ? `${WikkiTheme.white}` : `${WikkiTheme.primary}`};
  }
`;
var WikkiLogo = import_styled_components4.default.div`
  @media only screen and (max-width: 800px) {
    display: none;
  }
`;
var Logo = import_styled_components4.default.img`
  height: 56px;
  width: 141px;
`;
var WikkiLinksCover = import_styled_components4.default.div`
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: 800px) {
    flex-direction: column;
  }
`;
var WikkiLinks = import_styled_components4.default.ul`
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: 800px) {
    flex-direction: column;

    justify-content: center;
    align-items: center;
  }
`;
var WikkiHref = import_styled_components4.default.li`
  margin: 12px;
`;
var LinkText = (0, import_styled_components4.default)(SubTitle)`
  transition: all 0.4s ease-in-out;
  color: ${(props) => props.linkTrue ? `${WikkiTheme.white}` : `${WikkiTheme.black}`};
  :hover {
    color: ${WikkiTheme.secondary};
  }
`;
var NavBut = import_styled_components4.default.div`
  max-width: 200px;
  width: 100%;
  @media only screen and (max-width: 800px) {
    margin: 32px 0;
  }
`;
var NavButton = (0, import_styled_components4.default)(NavbarButton)``;
var MobileLogo = import_styled_components4.default.div`
  display: none;
  @media only screen and (max-width: 800px) {
    display: flex;
    margin: 0;
    padding: 24px 16px;
    height: 92px;
    max-width: 1232px;
  }
`;
var MobileToggle = import_styled_components4.default.div`
  display: none;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  max-width: 48px;
  position: absolute;
  top: 32px;
  width: 100%;
  right: 24px;
  z-index: 10;
  cursor: pointer;
  @media only screen and (max-width: 800px) {
    display: flex;
  }
`;
var ToggleTop = import_styled_components4.default.span`
  height: 2px;
  width: 100%;
  transition: 0.3s ease-in;
  transform: ${(props) => props.open ? "rotate(-45deg) translate(-3px,2px)" : "rotate(0)"};
  background: ${(props) => props.routerOpened ? `${WikkiTheme.black}` : `${WikkiTheme.white}`};
`;
var ToggleMiddle = import_styled_components4.default.span`
  height: 2px;
  margin: 4px 0;
  width: 100%;
  transition: 0.3s ease-in;
  display: ${(props) => props.open ? "none" : "flex"};
  background: ${(props) => props.routerOpened ? `${WikkiTheme.black}` : `${WikkiTheme.white}`};
`;
var ToggleBottom = import_styled_components4.default.span`
  transform: ${(props) => props.open ? "rotate(45deg) translate(-4px,-3px)" : "rotate(0)"};
  height: 2px;
  background: ${(props) => props.routerOpened ? `${WikkiTheme.black}` : `${WikkiTheme.white}`};
  width: 100%;
  transition: 0.3s ease-in;
`;
var Navbar_default = Navbar;

// app/components/navbar/NavCover.tsx
var NavCover = () => {
  return /* @__PURE__ */ import_react3.default.createElement(Body5, null, /* @__PURE__ */ import_react3.default.createElement(Navbar_default, null));
};
var Body5 = import_styled_components5.default.nav`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  width: 100%;
  background: transparent;
`;
var NavCover_default = NavCover;

// app/components/BackToTop.tsx
init_react();
var import_react4 = __toESM(require("react"));
var import_styled_components6 = __toESM(require("styled-components"));
var import_hi = require("react-icons/hi");
var BackToTop = () => {
  const [scrolled, setScrolled] = (0, import_react4.useState)(false);
  const backTo = () => {
    window.scrollTo(0, 0);
  };
  const handleScroll = () => {
    if (window.pageYOffset > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };
  (0, import_react4.useEffect)(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);
  return /* @__PURE__ */ import_react4.default.createElement(Body6, {
    scrolled,
    onClick: backTo
  }, /* @__PURE__ */ import_react4.default.createElement(Cover2, null, /* @__PURE__ */ import_react4.default.createElement(ScrollText, null)));
};
var Body6 = import_styled_components6.default.div`
  width: 64px;
  height: 64px;
  background: ${WikkiTheme.white};
  border-radius: 50%;
  display: ${(props) => props.scrolled ? "flex" : "none"};
  position: fixed;
  bottom: 30px;
  cursor: pointer;
  right: 30px;
  z-index: 80;
  border: 2px solid ${WikkiTheme.black};
  transition: all 0.2s cubic-bezier(0.075, 0.82, 0.165, 1);
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media only screen and (max-width: 650px) {
    width: 56px;
    height: 56px;
  }
  :focus {
    outline: 2px solid ${WikkiTheme.primary};
    outline-offset: 3px;
  }
  :hover {
    outline: 2px solid ${WikkiTheme.primary};
    outline-offset: 3px;
  }
`;
var Cover2 = import_styled_components6.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
var ScrollText = (0, import_styled_components6.default)(import_hi.HiOutlineArrowUp)`
  stroke: ${WikkiTheme.black};

  width: 32px;
  height: 32px;
`;
var BackToTop_default = BackToTop;

// route:C:\Users\Augustine Ogiza\Documents\Development\react\wikki\app\root.tsx
var meta = () => {
  return {
    title: "Wikki",
    description: "Realtime delivery"
  };
};
var links = () => {
  return [
    { rel: "stylesheet", href: app_default },
    { rel: "stylesheet", href: ReactToastify_default },
    { rel: "stylesheet", href: nprogress_default },
    {
      rel: "icon",
      href: "/favicon.png",
      type: "image/png"
    }
  ];
};
function App() {
  const transition = (0, import_remix4.useTransition)();
  (0, import_react5.useEffect)(() => {
    if (transition.state === "idle")
      import_nprogress.default.done();
    else
      import_nprogress.default.start();
  }, [transition.state]);
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(import_remix4.Meta, null), /* @__PURE__ */ React.createElement(import_remix4.Links, null), typeof document === "undefined" ? "__STYLES__" : null), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_react_toastify.ToastContainer, {
    position: "top-right",
    autoClose: 5e3,
    hideProgressBar: true,
    newestOnTop: false,
    closeOnClick: true,
    rtl: false,
    pauseOnFocusLoss: true,
    draggable: true,
    pauseOnHover: true
  }), /* @__PURE__ */ React.createElement(NavCover_default, null), /* @__PURE__ */ React.createElement(BackToTop_default, null), /* @__PURE__ */ React.createElement(import_remix4.Outlet, null), /* @__PURE__ */ React.createElement(Footer_default, null), /* @__PURE__ */ React.createElement(import_remix4.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix4.Scripts, null), false));
}

// route:C:\Users\Augustine Ogiza\Documents\Development\react\wikki\app\routes\driver-requirements.tsx
var driver_requirements_exports = {};
__export(driver_requirements_exports, {
  default: () => driver_requirements_default,
  meta: () => meta2
});
init_react();
var import_react11 = __toESM(require("react"));
var import_styled_components12 = __toESM(require("styled-components"));

// app/components/driver/DriverAdvantage.tsx
init_react();
var import_react6 = __toESM(require("react"));
var import_styled_components7 = __toESM(require("styled-components"));

// app/components/driver/PurposeData.tsx
init_react();
var driverData = [
  {
    icon: /* @__PURE__ */ React.createElement("svg", {
      width: "40",
      height: "41",
      viewBox: "0 0 40 41",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, /* @__PURE__ */ React.createElement("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M12 4.5C11.4696 4.5 10.9609 4.71071 10.5858 5.08579C10.2107 5.46086 10 5.96957 10 6.5V8.5H8C6.93913 8.5 5.92172 8.92143 5.17157 9.67157C4.42143 10.4217 4 11.4391 4 12.5V32.5C4 33.5609 4.42143 34.5783 5.17157 35.3284C5.92172 36.0786 6.93913 36.5 8 36.5H32C33.0609 36.5 34.0783 36.0786 34.8284 35.3284C35.5786 34.5783 36 33.5609 36 32.5V12.5C36 11.4391 35.5786 10.4217 34.8284 9.67157C34.0783 8.92143 33.0609 8.5 32 8.5H30V6.5C30 5.96957 29.7893 5.46086 29.4142 5.08579C29.0391 4.71071 28.5304 4.5 28 4.5C27.4696 4.5 26.9609 4.71071 26.5858 5.08579C26.2107 5.46086 26 5.96957 26 6.5V8.5H14V6.5C14 5.96957 13.7893 5.46086 13.4142 5.08579C13.0391 4.71071 12.5304 4.5 12 4.5ZM12 14.5C11.4696 14.5 10.9609 14.7107 10.5858 15.0858C10.2107 15.4609 10 15.9696 10 16.5C10 17.0304 10.2107 17.5391 10.5858 17.9142C10.9609 18.2893 11.4696 18.5 12 18.5H28C28.5304 18.5 29.0391 18.2893 29.4142 17.9142C29.7893 17.5391 30 17.0304 30 16.5C30 15.9696 29.7893 15.4609 29.4142 15.0858C29.0391 14.7107 28.5304 14.5 28 14.5H12Z",
      fill: "black"
    })),
    title: "Set your own schedule",
    text: "You\u2019re the boss. You can drive with the wikkki app day or night. Fit driving around your life, not the other way around."
  },
  {
    icon: /* @__PURE__ */ React.createElement("svg", {
      width: "40",
      height: "41",
      viewBox: "0 0 40 41",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, /* @__PURE__ */ React.createElement("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M12 4.5C11.4696 4.5 10.9609 4.71071 10.5858 5.08579C10.2107 5.46086 10 5.96957 10 6.5V8.5H8C6.93913 8.5 5.92172 8.92143 5.17157 9.67157C4.42143 10.4217 4 11.4391 4 12.5V32.5C4 33.5609 4.42143 34.5783 5.17157 35.3284C5.92172 36.0786 6.93913 36.5 8 36.5H32C33.0609 36.5 34.0783 36.0786 34.8284 35.3284C35.5786 34.5783 36 33.5609 36 32.5V12.5C36 11.4391 35.5786 10.4217 34.8284 9.67157C34.0783 8.92143 33.0609 8.5 32 8.5H30V6.5C30 5.96957 29.7893 5.46086 29.4142 5.08579C29.0391 4.71071 28.5304 4.5 28 4.5C27.4696 4.5 26.9609 4.71071 26.5858 5.08579C26.2107 5.46086 26 5.96957 26 6.5V8.5H14V6.5C14 5.96957 13.7893 5.46086 13.4142 5.08579C13.0391 4.71071 12.5304 4.5 12 4.5ZM12 14.5C11.4696 14.5 10.9609 14.7107 10.5858 15.0858C10.2107 15.4609 10 15.9696 10 16.5C10 17.0304 10.2107 17.5391 10.5858 17.9142C10.9609 18.2893 11.4696 18.5 12 18.5H28C28.5304 18.5 29.0391 18.2893 29.4142 17.9142C29.7893 17.5391 30 17.0304 30 16.5C30 15.9696 29.7893 15.4609 29.4142 15.0858C29.0391 14.7107 28.5304 14.5 28 14.5H12Z",
      fill: "black"
    })),
    title: "Cheap fees",
    text: "New world financial literacy for the future of work. Giving the youth the confidence to follow their calling."
  },
  {
    icon: /* @__PURE__ */ React.createElement("svg", {
      width: "40",
      height: "41",
      viewBox: "0 0 40 41",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, /* @__PURE__ */ React.createElement("path", {
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      d: "M12 4.5C11.4696 4.5 10.9609 4.71071 10.5858 5.08579C10.2107 5.46086 10 5.96957 10 6.5V8.5H8C6.93913 8.5 5.92172 8.92143 5.17157 9.67157C4.42143 10.4217 4 11.4391 4 12.5V32.5C4 33.5609 4.42143 34.5783 5.17157 35.3284C5.92172 36.0786 6.93913 36.5 8 36.5H32C33.0609 36.5 34.0783 36.0786 34.8284 35.3284C35.5786 34.5783 36 33.5609 36 32.5V12.5C36 11.4391 35.5786 10.4217 34.8284 9.67157C34.0783 8.92143 33.0609 8.5 32 8.5H30V6.5C30 5.96957 29.7893 5.46086 29.4142 5.08579C29.0391 4.71071 28.5304 4.5 28 4.5C27.4696 4.5 26.9609 4.71071 26.5858 5.08579C26.2107 5.46086 26 5.96957 26 6.5V8.5H14V6.5C14 5.96957 13.7893 5.46086 13.4142 5.08579C13.0391 4.71071 12.5304 4.5 12 4.5ZM12 14.5C11.4696 14.5 10.9609 14.7107 10.5858 15.0858C10.2107 15.4609 10 15.9696 10 16.5C10 17.0304 10.2107 17.5391 10.5858 17.9142C10.9609 18.2893 11.4696 18.5 12 18.5H28C28.5304 18.5 29.0391 18.2893 29.4142 17.9142C29.7893 17.5391 30 17.0304 30 16.5C30 15.9696 29.7893 15.4609 29.4142 15.0858C29.0391 14.7107 28.5304 14.5 28 14.5H12Z",
      fill: "black"
    })),
    title: "Better logistics",
    text: "New world financial literacy for the future of work. Giving the youth the confidence to follow their calling."
  }
];

// app/images/main.png
var main_default = "/build/_assets/main-WO4APGIB.png";

// app/components/driver/DriverAdvantage.tsx
var DriverAdvantage = () => {
  return /* @__PURE__ */ import_react6.default.createElement(Body7, null, /* @__PURE__ */ import_react6.default.createElement(Cover3, null, /* @__PURE__ */ import_react6.default.createElement(DriverGrid, null, /* @__PURE__ */ import_react6.default.createElement(DriverLeft, null, /* @__PURE__ */ import_react6.default.createElement(DiverCover, null, /* @__PURE__ */ import_react6.default.createElement(DriverTitle, null, "Help solve logistics problem"), /* @__PURE__ */ import_react6.default.createElement(DriverText, null, "Integrate Banky on your web-site to offer fast, secure and seamless online bank transfer payment method. You could receive payments straight into your company bank account or open a Banky merchant account and collect funds there."), /* @__PURE__ */ import_react6.default.createElement(DriverButton, null, "Get started"))), /* @__PURE__ */ import_react6.default.createElement(DriverRight, null, /* @__PURE__ */ import_react6.default.createElement(RightSection, null, /* @__PURE__ */ import_react6.default.createElement(DriverImage, {
    src: main_default,
    alt: "wikki driver requirement"
  })), driverData.map((data, index3) => /* @__PURE__ */ import_react6.default.createElement(RightSection, {
    key: index3
  }, /* @__PURE__ */ import_react6.default.createElement(SectionCover, null, /* @__PURE__ */ import_react6.default.createElement(SectionIcon, null, data.icon), /* @__PURE__ */ import_react6.default.createElement(SectionTitle, null, data.title), /* @__PURE__ */ import_react6.default.createElement(SectionText, null, data.text))))))));
};
var Body7 = import_styled_components7.default.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 700px;

  width: 100%;

  background: ${WikkiTheme.secondary};
`;
var Cover3 = import_styled_components7.default.div`
  max-width: 1800px;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
var DriverGrid = import_styled_components7.default.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  @media only screen and (max-width: 850px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
var DriverLeft = import_styled_components7.default.div`
  max-width: 1232px;
  width: 100%;
  margin: 0 auto;
  padding: 16px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
var DiverCover = import_styled_components7.default.div`
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  @media only screen and (max-width: 850px) {
    margin: 40px 0;
  }
`;
var DriverTitle = (0, import_styled_components7.default)(Header2)`
  margin: 0;
  text-align: left;
`;
var DriverText = (0, import_styled_components7.default)(Body3)`
  text-align: left;
  margin: 16px 0 40px 0;
`;
var DriverButton = (0, import_styled_components7.default)(MainButton)``;
var DriverRight = import_styled_components7.default.div`
  min-height: 700px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  background: ${WikkiTheme.white};
  @media only screen and (max-width: 550px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
var DriverImage = import_styled_components7.default.img`
  min-height: 350px;
  max-width: 360px;
  width: 100%;
  object-fit: cover;
  @media only screen and (max-width: 550px) {
    max-width: 550px;
  }
`;
var RightSection = import_styled_components7.default.div`
  min-height: 350px;
  max-width: 360px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 550px) {
    max-width: 550px;
    min-height: 150px;
  }
`;
var SectionIcon = import_styled_components7.default.div``;
var SectionTitle = (0, import_styled_components7.default)(Header5)`
  text-align: left;
  margin: 32px 0 8px 0;
`;
var SectionText = (0, import_styled_components7.default)(Body3)`
  text-align: left;
  margin: 0;
`;
var SectionCover = import_styled_components7.default.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  padding: 16px;
  @media only screen and (max-width: 550px) {
    height: 250px;
  }
`;
var DriverAdvantage_default = DriverAdvantage;

// app/components/driver/DriverHero.tsx
init_react();
var import_react7 = __toESM(require("react"));
var import_styled_components8 = __toESM(require("styled-components"));
var DriverHero = () => {
  return /* @__PURE__ */ import_react7.default.createElement(Body8, null, /* @__PURE__ */ import_react7.default.createElement(Cover4, null, /* @__PURE__ */ import_react7.default.createElement(DriverTitle2, null, "Get in the driver\u2019s seat and get paid"), /* @__PURE__ */ import_react7.default.createElement(DriverText2, null, "Make the most of your time on the road on the platform with the largest network of active riders.")));
};
var Body8 = import_styled_components8.default.section`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  margin: 0;

  justify-content: center;
  align-items: center;
  min-height: 450px;
  color: ${WikkiTheme.black};
  width: 100%;
  padding: 32px 16px 16px 16px;
  background: ${WikkiTheme.white};
  @media only screen and (max-width: 650px) {
    min-height: 350px;
  }
`;
var Cover4 = import_styled_components8.default.div`
  color: ${WikkiTheme.black};
  max-width: 500px;
  width: 100%;
  height: 100%;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
var DriverTitle2 = (0, import_styled_components8.default)(Header2)`
  text-align: center;
`;
var DriverText2 = (0, import_styled_components8.default)(Body3)`
  text-align: center;
  margin: 8px 0;
`;
var DriverHero_default = DriverHero;

// app/components/driver/DriverMessage.tsx
init_react();
var import_react8 = __toESM(require("react"));
var import_styled_components9 = __toESM(require("styled-components"));
var DriverMessage = () => {
  return /* @__PURE__ */ import_react8.default.createElement(Body9, null, /* @__PURE__ */ import_react8.default.createElement(Cover5, null, /* @__PURE__ */ import_react8.default.createElement(RideText, null, "Ride with us")), /* @__PURE__ */ import_react8.default.createElement(Cover5, null, /* @__PURE__ */ import_react8.default.createElement(RideText, null, "Ride with us")), /* @__PURE__ */ import_react8.default.createElement(Cover5, null, /* @__PURE__ */ import_react8.default.createElement(RideText, null, "Ride with us")), /* @__PURE__ */ import_react8.default.createElement(Cover5, null, /* @__PURE__ */ import_react8.default.createElement(RideText, null, "Ride with us")), /* @__PURE__ */ import_react8.default.createElement(Cover5, null, /* @__PURE__ */ import_react8.default.createElement(RideText, null, "Ride with us")), /* @__PURE__ */ import_react8.default.createElement(Cover5, null, /* @__PURE__ */ import_react8.default.createElement(RideText, null, "Ride with us")), /* @__PURE__ */ import_react8.default.createElement(Cover5, null, /* @__PURE__ */ import_react8.default.createElement(RideText, null, "Ride with us")), /* @__PURE__ */ import_react8.default.createElement(Cover5, null, /* @__PURE__ */ import_react8.default.createElement(RideText, null, "Ride with us")), /* @__PURE__ */ import_react8.default.createElement(Cover5, null, /* @__PURE__ */ import_react8.default.createElement(RideText, null, "Ride with us")));
};
var Body9 = import_styled_components9.default.div`
  height: 276px;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 650px) {
    height: 200px;
  }
`;
var animation = import_styled_components9.keyframes`

 0% {
    transform: translateZ(0);
  }
  to {
    transform: translate3d(-100%, 0, 0);
  }

`;
var Cover5 = import_styled_components9.default.div`
  animation: ${animation} 15s linear infinite;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
var RideText = (0, import_styled_components9.default)(LargeHeader)`
  white-space: nowrap;
  margin: 40px;
`;
var DriverMessage_default = DriverMessage;

// app/components/driver/DriverRequirements.tsx
init_react();
var import_react10 = __toESM(require("react"));
var import_styled_components11 = __toESM(require("styled-components"));

// app/components/driver/DriverAccordion.tsx
init_react();
var import_react9 = __toESM(require("react"));
var import_fi = require("react-icons/fi");
var import_styled_components10 = __toESM(require("styled-components"));
var import_framer_motion = require("framer-motion");
var DriverAccordion = (props) => {
  const { number, active, text, content, click } = props;
  return /* @__PURE__ */ import_react9.default.createElement(import_framer_motion.AnimatePresence, null, /* @__PURE__ */ import_react9.default.createElement(Body10, {
    layout: "position",
    onClick: () => click(number)
  }, /* @__PURE__ */ import_react9.default.createElement(Cover6, {
    layout: "position"
  }, /* @__PURE__ */ import_react9.default.createElement(DriverNumber, {
    layout: "position"
  }, /* @__PURE__ */ import_react9.default.createElement(NumberText, {
    layout: "position"
  }, number)), /* @__PURE__ */ import_react9.default.createElement(DriverBody, {
    layout: "position"
  }, /* @__PURE__ */ import_react9.default.createElement(DriverContent, {
    layout: "position"
  }, text), /* @__PURE__ */ import_react9.default.createElement(DriverPara, {
    active
  }, content)), /* @__PURE__ */ import_react9.default.createElement(DriverIcon, {
    layout: "position"
  }, active ? /* @__PURE__ */ import_react9.default.createElement(DriverDown, null) : /* @__PURE__ */ import_react9.default.createElement(DriverUp, null)))));
};
var Body10 = (0, import_styled_components10.default)(import_framer_motion.motion.div)`
  min-height: 50px;
  max-width: 520px;
  width: 100%;

  margin: 24px 0;
  cursor: pointer;
  border-radius: 24px;
  background: ${WikkiTheme.white};
  padding: 16px;
  outline: none;
  transition: 0.4s all ease-in-out;
  @media only screen and (max-width: 650px) {
    margin: 16px 0;
  }
`;
var Cover6 = (0, import_styled_components10.default)(import_framer_motion.motion.div)`
  display: grid;
  grid-template-columns: 48px auto 32px;
  grid-gap: 16px;
  gap: 16px;
  transition: 0.4s ease-in-out;
`;
var DriverNumber = (0, import_styled_components10.default)(import_framer_motion.motion.div)`
  height: 40px;
  width: 40px;
  transition: 0.4s ease-in-out;

  border: 1px solid ${WikkiTheme.black};
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 650px) {
    height: 32px;
    width: 32px;
  }
`;
var NumberText = (0, import_styled_components10.default)((0, import_framer_motion.motion)(Header5))``;
var DriverBody = (0, import_styled_components10.default)(import_framer_motion.motion.div)`
  display: flex;
  flex-direction: column;
  transition: 0.4s ease-in-out;
`;
var DriverContent = (0, import_styled_components10.default)((0, import_framer_motion.motion)(Header5))`
  transition: 0.4s ease-in-out;
`;
var DriverPara = (0, import_styled_components10.default)((0, import_framer_motion.motion)(Body4))`
  margin: 8px 0;
  transition: 0.4s ease-in-out;
  height: ${(props) => props.active ? "100%" : "0px"};
  display: ${(props) => props.active ? "flex" : "none"};
`;
var DriverIcon = (0, import_styled_components10.default)(import_framer_motion.motion.div)`
  transition: 0.4s ease-in-out;
`;
var DriverUp = (0, import_styled_components10.default)((0, import_framer_motion.motion)(import_fi.FiChevronUp))`
  height: 24px;
  width: 24px;
  transition: 0.4s ease-in-out;
`;
var DriverDown = (0, import_styled_components10.default)((0, import_framer_motion.motion)(import_fi.FiChevronDown))`
  height: 24px;
  width: 24px;
  transition: 0.4s ease-in-out;
`;
var DriverAccordion_default = DriverAccordion;

// app/components/driver/RequirementData.tsx
init_react();
var requirementData = [
  {
    id: 1,
    title: "Download app and sign up",
    text: "Got an email address and a smartphone? Great, now tell us a bit more about yourself and we'll get you started."
  },
  {
    id: 2,
    title: "Upload your documents",
    text: "Got an email address and a smartphone? Great, now tell us a bit more about yourself and we'll get you started."
  },
  {
    id: 3,
    title: "Upload vehicle details",
    text: "Got an email address and a smartphone? Great, now tell us a bit more about yourself and we'll get you started."
  },
  {
    id: 4,
    title: "Activate your account",
    text: "Got an email address and a smartphone? Great, now tell us a bit more about yourself and we'll get you started."
  }
];

// app/images/driver2.png
var driver2_default = "/build/_assets/driver2-4CVY7SOR.png";

// app/components/driver/DriverRequirements.tsx
var DriverRequirements = () => {
  const [selected, setSelected] = (0, import_react10.useState)(1);
  const selectRequirement = (number) => {
    if (selected === number) {
      return setSelected(null);
    }
    setSelected(number);
  };
  return /* @__PURE__ */ import_react10.default.createElement(Body11, null, /* @__PURE__ */ import_react10.default.createElement(Cover7, null, /* @__PURE__ */ import_react10.default.createElement(DriverCover, null, " ", /* @__PURE__ */ import_react10.default.createElement(DriverTitle3, null, "Driver\u2019s requirement"), /* @__PURE__ */ import_react10.default.createElement(DriverText3, null, "Wikki is a great way to be your own boss and make money.")), /* @__PURE__ */ import_react10.default.createElement(DriverGrid2, null, /* @__PURE__ */ import_react10.default.createElement(DriverNeeds, null, requirementData.map((data) => /* @__PURE__ */ import_react10.default.createElement(DriverAccordion_default, {
    key: data.id,
    number: data.id,
    text: data.title,
    content: data.text,
    click: () => selectRequirement(data.id),
    active: data.id === selected ? true : false
  }))), /* @__PURE__ */ import_react10.default.createElement(DriverImage2, null, /* @__PURE__ */ import_react10.default.createElement(DriverPhoto, {
    src: driver2_default,
    alt: "wikki"
  })))));
};
var Body11 = import_styled_components11.default.section`
  position: relative;
  z-index: 1;
  padding: 16px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin: 0;
  min-height: 600px;
  color: ${WikkiTheme.black};
  width: 100%;
  background: ${WikkiTheme.snowWhite};
  @media only screen and (max-width: 650px) {
    min-height: 350px;
  }
`;
var Cover7 = import_styled_components11.default.div`
  color: ${WikkiTheme.black};
  max-width: 1232px;
  width: 100%;
  height: 100%;
  margin: 24px auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;
var DriverCover = import_styled_components11.default.div`
  display: flex;
  flex-direction: column;
  max-width: 380px;
  width: 100%;
  margin: 80px 0;
`;
var DriverTitle3 = (0, import_styled_components11.default)(Header2)`
  text-align: left;
`;
var DriverText3 = (0, import_styled_components11.default)(Body3)`
  text-align: left;
  margin: 8px 0;
`;
var DriverGrid2 = import_styled_components11.default.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 40px;
  gap: 40px;
  width: 100%;
  @media only screen and (max-width: 950px) {
    grid-gap: 24px;
    place-items: center;
    grid-template-columns: repeat(1, 1fr);
    gap: 24px;
  }
`;
var DriverNeeds = import_styled_components11.default.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
`;
var DriverImage2 = import_styled_components11.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  justify-content: center;
`;
var DriverPhoto = import_styled_components11.default.img`
  min-height: 690px;
  max-height: 700px;
  height: 100%;
  max-width: 627px;
  width: 100%;
  border-radius: 40px;
  position: relative;
  ::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    border-radius: inherit;
    background: rgba(0, 0, 0, 0.5);
    width: 100%;
  }
`;
var DriverRequirements_default = DriverRequirements;

// route:C:\Users\Augustine Ogiza\Documents\Development\react\wikki\app\routes\driver-requirements.tsx
var meta2 = () => {
  return {
    title: "Become a driver - Use Wikki",
    description: "Realtime delivery"
  };
};
var driver = () => {
  return /* @__PURE__ */ import_react11.default.createElement(Body12, null, /* @__PURE__ */ import_react11.default.createElement(DriverHero_default, null), /* @__PURE__ */ import_react11.default.createElement(DriverAdvantage_default, null), /* @__PURE__ */ import_react11.default.createElement(DriverMessage_default, null), /* @__PURE__ */ import_react11.default.createElement(DriverRequirements_default, null));
};
var Body12 = import_styled_components12.default.div``;
var driver_requirements_default = driver;

// route:C:\Users\Augustine Ogiza\Documents\Development\react\wikki\app\routes\how-it-works\driver.tsx
var driver_exports = {};
__export(driver_exports, {
  default: () => driver_default,
  meta: () => meta3
});
init_react();
var import_react12 = __toESM(require("react"));
var import_styled_components13 = __toESM(require("styled-components"));

// app/images/route.png
var route_default = "/build/_assets/route-VXW45UB7.png";

// app/images/pay.png
var pay_default = "/build/_assets/pay-3AVD2MY5.png";

// app/images/app.png
var app_default2 = "/build/_assets/app-FN4PRKHT.png";

// app/images/bave.svg
var bave_default = "/build/_assets/bave-HY4I543D.svg";

// app/images/icon.png
var icon_default = "/build/_assets/icon-C76T6UYX.png";

// route:C:\Users\Augustine Ogiza\Documents\Development\react\wikki\app\routes\how-it-works\driver.tsx
var import_remix5 = __toESM(require_remix());
var meta3 = () => {
  return {
    title: "How it works driver - Use Wikki",
    description: "Real time deliveries"
  };
};
var WorksDriver = () => {
  return /* @__PURE__ */ import_react12.default.createElement(Body13, null, /* @__PURE__ */ import_react12.default.createElement(Cover8, null, /* @__PURE__ */ import_react12.default.createElement(WorksSelector, null, /* @__PURE__ */ import_react12.default.createElement(Selector, null, /* @__PURE__ */ import_react12.default.createElement(Driver, {
    to: "/how-it-works"
  }, /* @__PURE__ */ import_react12.default.createElement(SelectorText, null, "Rider ")), /* @__PURE__ */ import_react12.default.createElement(User, {
    to: "/how-it-works/driver"
  }, /* @__PURE__ */ import_react12.default.createElement(SelectorText, null, "Driver")))), /* @__PURE__ */ import_react12.default.createElement(WorksRow, null, /* @__PURE__ */ import_react12.default.createElement(TopRow, null, /* @__PURE__ */ import_react12.default.createElement(DownloadSection, null, /* @__PURE__ */ import_react12.default.createElement(DownloadCover, null, /* @__PURE__ */ import_react12.default.createElement(DownloadContent, null, /* @__PURE__ */ import_react12.default.createElement(DownloadNumber, null, /* @__PURE__ */ import_react12.default.createElement(NumberText2, null, "1")), /* @__PURE__ */ import_react12.default.createElement(DownloadText, null, /* @__PURE__ */ import_react12.default.createElement(DownloadTitle, null, "Download the app and sign up"), /* @__PURE__ */ import_react12.default.createElement(Downloadbody, null, "You can drive and make as much as you want. And, the more you drive, the more you could make. Plus, your fares get automatically deposited weekly."))), /* @__PURE__ */ import_react12.default.createElement(DownloadApp, null, /* @__PURE__ */ import_react12.default.createElement(AppImage, {
    src: app_default2,
    alt: "use wikki my wikki"
  }))))), /* @__PURE__ */ import_react12.default.createElement(BottomRow, null, /* @__PURE__ */ import_react12.default.createElement(SecondRow, null, /* @__PURE__ */ import_react12.default.createElement(SecondMask, {
    src: icon_default,
    alt: "use wikki my wikki"
  }), /* @__PURE__ */ import_react12.default.createElement(BottomCover, null, /* @__PURE__ */ import_react12.default.createElement(SecondContent, null, /* @__PURE__ */ import_react12.default.createElement(SecondNumber, null, /* @__PURE__ */ import_react12.default.createElement(SecondText, null, "2")), /* @__PURE__ */ import_react12.default.createElement(SecondDownload, null, /* @__PURE__ */ import_react12.default.createElement(SecondTitle, null, "Pick up order, and deliver"), /* @__PURE__ */ import_react12.default.createElement(SecondPara, null, "You can drive and make as much as you want. And, the more you drive, the more you could make. Plus, your fares get automatically deposited weekly."))), /* @__PURE__ */ import_react12.default.createElement(SecondImage, null, /* @__PURE__ */ import_react12.default.createElement(SecondLustration, {
    src: route_default,
    alt: "mywikki use wikki"
  })))), " ", /* @__PURE__ */ import_react12.default.createElement(ThirdRow, null, /* @__PURE__ */ import_react12.default.createElement(ThirdMask, {
    src: bave_default,
    alt: "use wikki my wikki"
  }), /* @__PURE__ */ import_react12.default.createElement(ThirdBottomCover, null, /* @__PURE__ */ import_react12.default.createElement(ThirdContent, null, /* @__PURE__ */ import_react12.default.createElement(ThirdNumber, null, /* @__PURE__ */ import_react12.default.createElement(ThirdText, null, "3")), /* @__PURE__ */ import_react12.default.createElement(ThirdDownload, null, /* @__PURE__ */ import_react12.default.createElement(ThirdTitle, null, "Get paid and cashout"), /* @__PURE__ */ import_react12.default.createElement(ThirdPara, null, "You can drive and make as much as you want. And, the more you drive, the more you could make. Plus, your fares get automatically deposited weekly."))), /* @__PURE__ */ import_react12.default.createElement(ThirdImage, null, /* @__PURE__ */ import_react12.default.createElement(ThirdLustration, {
    src: pay_default,
    alt: "mywikki use wikki"
  }))))))));
};
var Body13 = import_styled_components13.default.section`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  margin: 0;
  align-items: flex-start;
  min-height: 600px;
  color: ${WikkiTheme.black};
  width: 100%;
  padding: 16px 40px;
  background: ${WikkiTheme.snowWhite};
  @media only screen and (max-width: 650px) {
    min-height: 450px;
  }
`;
var Cover8 = import_styled_components13.default.div`
  color: ${WikkiTheme.black};
  max-width: 1100px;
  width: 100%;
  margin: 96px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
var WorksSelector = import_styled_components13.default.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
var Selector = import_styled_components13.default.div`
  height: 64px;
  max-width: 340px;
  margin: 40px auto;
  width: 100%;
  background: ${WikkiTheme.white};
  border-radius: 40px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
var User = (0, import_styled_components13.default)(import_remix5.Link)`
  height: 44px;
  max-width: 154px;
  width: 100%;
  border-radius: 40px;
  padding: 14px 56px;
  color: ${WikkiTheme.white};
  background: ${WikkiTheme.black};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
var Driver = (0, import_styled_components13.default)(import_remix5.Link)`
  height: 44px;
  max-width: 154px;
  width: 100%;
  border-radius: 40px;
  padding: 14px 56px;
  color: ${WikkiTheme.black};
  background: ${WikkiTheme.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
var SelectorText = (0, import_styled_components13.default)(SubTitle)``;
var WorksRow = import_styled_components13.default.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
var TopRow = import_styled_components13.default.div`
  width: 100%;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
var BottomRow = import_styled_components13.default.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 40px;
  gap: 40px;
  width: 100%;
  @media only screen and (max-width: 950px) {
    grid-gap: 24px;
    place-items: center;
    grid-template-columns: repeat(1, 1fr);
    gap: 24px;
  }
`;
var DownloadSection = import_styled_components13.default.div`
  max-height: 550px;
  height: 100%;
  min-height: 540px;
  max-width: 1100px;
  width: 100%;
  overflow: hidden;
  padding: 20px;
  border-radius: 40px;
  background: ${WikkiTheme.white};
`;
var DownloadCover = import_styled_components13.default.div`
  max-width: 972px;
  width: 100%;
  margin: 64px auto 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 72px;
  gap: 72px;
  width: 100%;
  @media only screen and (max-width: 950px) {
    grid-gap: 36px;
    place-items: center;
    margin: 48px auto 0 auto;
    grid-template-columns: repeat(1, 1fr);
    gap: 36px;
  }
`;
var DownloadContent = import_styled_components13.default.div`
  display: grid;
  grid-template-columns: 80px auto;
  grid-gap: 32px;
  gap: 32px;
  width: 100%;
  @media only screen and (max-width: 650px) {
    grid-template-columns: 48px auto;
  }
`;
var DownloadNumber = import_styled_components13.default.span`
  height: 80px;
  width: 80px;
  border: 1px solid ${WikkiTheme.black};
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 650px) {
    height: 48px;
    width: 48px;
  }
`;
var NumberText2 = (0, import_styled_components13.default)(Header5)``;
var DownloadText = import_styled_components13.default.div`
  display: flex;
  flex-direction: column;
`;
var DownloadTitle = (0, import_styled_components13.default)(Header3)``;
var Downloadbody = (0, import_styled_components13.default)(Body3)`
  margin: 24px 0;
  @media only screen and (max-width: 650px) {
    margin: 16px 0;
  }
`;
var DownloadApp = import_styled_components13.default.div`
  height: 721px;
  max-width: 361px;
  width: 100%;
  margin: 0 auto;
`;
var AppImage = import_styled_components13.default.img`
  width: 100%;
  height: 100%;
`;
var SecondRow = import_styled_components13.default.div`
  max-height: 600px;
  height: 100%;
  min-height: 580px;
  max-width: 520px;
  padding: 20px;
  width: 100%;
  overflow: hidden;
  position: relative;
  border-radius: 40px;
  background: ${WikkiTheme.lightYelllow};
  @media only screen and (max-width: 650px) {
    min-height: 400px;
  }
`;
var SecondMask = import_styled_components13.default.img`
  height: 250px;
  width: 213px;
  right: 4px;
  top: -12px;
  position: absolute;
`;
var ThirdMask = import_styled_components13.default.img`
  left: -40px;
  height: 277px;
  width: 448px;
  top: -32px;
  position: absolute;
`;
var BottomCover = import_styled_components13.default.div`
  max-width: 481px;
  width: 100%;
  position: relative;
  z-index: 2;
  margin: 48px auto 0 auto;
  @media only screen and (max-width: 650px) {
    margin: 32px auto 0 auto;
  }
`;
var SecondContent = import_styled_components13.default.div`
  display: grid;
  grid-template-columns: 80px auto;
  grid-gap: 32px;
  gap: 32px;
  width: 100%;
  @media only screen and (max-width: 650px) {
    grid-template-columns: 48px auto;
  }
`;
var SecondNumber = import_styled_components13.default.div`
  height: 80px;
  width: 80px;
  border: 1px solid ${WikkiTheme.black};
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 650px) {
    height: 48px;
    width: 48px;
  }
`;
var SecondText = import_styled_components13.default.div`
  display: flex;
  flex-direction: column;
`;
var SecondTitle = (0, import_styled_components13.default)(Header3)`
  color: ${WikkiTheme.black};
  span {
    color: ${WikkiTheme.white};
  }
`;
var SecondPara = (0, import_styled_components13.default)(Body3)`
  margin: 24px 0;
  @media only screen and (max-width: 650px) {
    margin: 16px 0;
  }
`;
var SecondDownload = import_styled_components13.default.div`
  display: flex;
  flex-direction: column;
`;
var SecondImage = import_styled_components13.default.div`
  height: 100%;
  width: 100%;
  min-height: 250px;
  max-height: 441px;
  max-width: 441px;
  margin-bottom: 40px;
  margin-top: -60px;
  @media only screen and (max-width: 650px) {
    margin-bottom: 0px;
    max-height: 400px;
  }
`;
var SecondLustration = import_styled_components13.default.img`
  height: 100%;
  width: 100%;
  min-height: 250px;
  max-height: 441px;
  max-width: 441px;
`;
var ThirdRow = import_styled_components13.default.div`
  max-height: 600px;
  height: 100%;
  padding: 20px;
  position: relative;
  min-height: 580px;
  max-width: 520px;
  width: 100%;
  overflow: hidden;
  border-radius: 40px;
  background: ${WikkiTheme.darkRed};
  @media only screen and (max-width: 650px) {
    min-height: 400px;
  }
`;
var ThirdBottomCover = import_styled_components13.default.div`
  max-width: 481px;
  width: 100%;
  position: relative;
  z-index: 2;
  margin: 48px auto 0 auto;
  @media only screen and (max-width: 650px) {
    margin: 32px auto 0 auto;
  }
`;
var ThirdContent = import_styled_components13.default.div`
  display: grid;
  grid-template-columns: 80px auto;
  grid-gap: 32px;
  gap: 32px;
  width: 100%;
  @media only screen and (max-width: 650px) {
    grid-template-columns: 48px auto;
  }
`;
var ThirdNumber = import_styled_components13.default.div`
  height: 80px;
  width: 80px;
  border: 1px solid ${WikkiTheme.white};
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 650px) {
    height: 48px;
    width: 48px;
  }
`;
var ThirdText = import_styled_components13.default.div`
  display: flex;
  flex-direction: column;
  color: ${WikkiTheme.white};
`;
var ThirdPara = (0, import_styled_components13.default)(Body3)`
  margin: 24px 0;
  color: ${WikkiTheme.white};
  @media only screen and (max-width: 650px) {
    margin: 16px 0;
  }
`;
var ThirdDownload = import_styled_components13.default.div``;
var ThirdTitle = (0, import_styled_components13.default)(Header3)`
  color: ${WikkiTheme.white};
`;
var ThirdImage = import_styled_components13.default.div`
  height: 100%;
  width: 100%;
  min-height: 250px;
  max-height: 441px;
  max-width: 441px;
  margin-bottom: 40px;
  margin-top: -60px;
  @media only screen and (max-width: 650px) {
    margin-bottom: 0px;

    max-height: 400px;
  }
`;
var ThirdLustration = import_styled_components13.default.img`
  height: 100%;
  width: 100%;
`;
var driver_default = WorksDriver;

// route:C:\Users\Augustine Ogiza\Documents\Development\react\wikki\app\routes\how-it-works\index.tsx
var how_it_works_exports = {};
__export(how_it_works_exports, {
  default: () => how_it_works_default,
  meta: () => meta4
});
init_react();
var import_react13 = __toESM(require("react"));
var import_styled_components14 = __toESM(require("styled-components"));

// app/images/mask.svg
var mask_default = "/build/_assets/mask-OMEBINKE.svg";

// route:C:\Users\Augustine Ogiza\Documents\Development\react\wikki\app\routes\how-it-works\index.tsx
var import_remix6 = __toESM(require_remix());
var meta4 = () => {
  return {
    title: "How it works users - Use Wikki",
    description: "Real time deliveries"
  };
};
var index = () => {
  return /* @__PURE__ */ import_react13.default.createElement(Body14, null, /* @__PURE__ */ import_react13.default.createElement(Cover9, null, /* @__PURE__ */ import_react13.default.createElement(WorksSelector2, null, /* @__PURE__ */ import_react13.default.createElement(Selector2, null, /* @__PURE__ */ import_react13.default.createElement(User2, {
    to: "/how-it-works"
  }, /* @__PURE__ */ import_react13.default.createElement(SelectorText2, null, "Rider")), /* @__PURE__ */ import_react13.default.createElement(Driver2, {
    to: "/how-it-works/driver"
  }, /* @__PURE__ */ import_react13.default.createElement(SelectorText2, null, "Driver")))), /* @__PURE__ */ import_react13.default.createElement(WorksRow2, null, /* @__PURE__ */ import_react13.default.createElement(TopRow2, null, /* @__PURE__ */ import_react13.default.createElement(DownloadSection2, null, /* @__PURE__ */ import_react13.default.createElement(DownloadCover2, null, /* @__PURE__ */ import_react13.default.createElement(DownloadContent2, null, /* @__PURE__ */ import_react13.default.createElement(DownloadNumber2, null, /* @__PURE__ */ import_react13.default.createElement(NumberText3, null, "1")), /* @__PURE__ */ import_react13.default.createElement(DownloadText2, null, /* @__PURE__ */ import_react13.default.createElement(DownloadTitle2, null, "Download the app and sign up"), /* @__PURE__ */ import_react13.default.createElement(Downloadbody2, null, "You can drive and make as much as you want. And, the more you drive, the more you could make. Plus, your fares get automatically deposited weekly."))), /* @__PURE__ */ import_react13.default.createElement(DownloadApp2, null, /* @__PURE__ */ import_react13.default.createElement(AppImage2, {
    src: app_default2,
    alt: "use wikki my wikki"
  }))))), /* @__PURE__ */ import_react13.default.createElement(BottomRow2, null, /* @__PURE__ */ import_react13.default.createElement(SecondRow2, null, /* @__PURE__ */ import_react13.default.createElement(SecondMask2, {
    src: mask_default,
    alt: "use wikki my wikki"
  }), /* @__PURE__ */ import_react13.default.createElement(BottomCover2, null, /* @__PURE__ */ import_react13.default.createElement(SecondContent2, null, /* @__PURE__ */ import_react13.default.createElement(SecondNumber2, null, /* @__PURE__ */ import_react13.default.createElement(SecondText2, null, "2")), /* @__PURE__ */ import_react13.default.createElement(SecondDownload2, null, /* @__PURE__ */ import_react13.default.createElement(SecondTitle2, null, "Request a pick", /* @__PURE__ */ import_react13.default.createElement("span", null, "up an"), "d choose destina", /* @__PURE__ */ import_react13.default.createElement("span", null, "tio"), "n"), /* @__PURE__ */ import_react13.default.createElement(SecondPara2, null, "You can drive and make as much as you want. And, the more you drive, the more you could make. Plus, your fares get automatically deposited weekly."))), /* @__PURE__ */ import_react13.default.createElement(SecondImage2, null, /* @__PURE__ */ import_react13.default.createElement(SecondLustration2, {
    src: route_default,
    alt: "mywikki use wikki"
  })))), " ", /* @__PURE__ */ import_react13.default.createElement(ThirdRow2, null, /* @__PURE__ */ import_react13.default.createElement(ThirdMask2, {
    src: bave_default,
    alt: "use wikki my wikki"
  }), /* @__PURE__ */ import_react13.default.createElement(ThirdBottomCover2, null, /* @__PURE__ */ import_react13.default.createElement(ThirdContent2, null, /* @__PURE__ */ import_react13.default.createElement(ThirdNumber2, null, /* @__PURE__ */ import_react13.default.createElement(ThirdText2, null, "3")), /* @__PURE__ */ import_react13.default.createElement(ThirdDownload2, null, /* @__PURE__ */ import_react13.default.createElement(ThirdTitle2, null, "Get item delivered and make payment"), /* @__PURE__ */ import_react13.default.createElement(ThirdPara2, null, "You can drive and make as much as you want. And, the more you drive, the more you could make. Plus, your fares get automatically deposited weekly."))), /* @__PURE__ */ import_react13.default.createElement(ThirdImage2, null, /* @__PURE__ */ import_react13.default.createElement(ThirdLustration2, {
    src: pay_default,
    alt: "mywikki use wikki"
  }))))))));
};
var Body14 = import_styled_components14.default.section`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  margin: 0;
  align-items: flex-start;
  min-height: 600px;
  color: ${WikkiTheme.black};
  width: 100%;
  padding: 16px 40px;
  background: ${WikkiTheme.snowWhite};
  @media only screen and (max-width: 650px) {
    min-height: 450px;
  }
`;
var Cover9 = import_styled_components14.default.div`
  color: ${WikkiTheme.black};
  max-width: 1100px;
  width: 100%;
  margin: 96px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
var WorksSelector2 = import_styled_components14.default.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
var Selector2 = import_styled_components14.default.div`
  height: 64px;
  max-width: 340px;
  margin: 40px auto;
  width: 100%;
  background: ${WikkiTheme.white};
  border-radius: 40px;
  padding: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
var User2 = (0, import_styled_components14.default)(import_remix6.Link)`
  height: 44px;
  max-width: 154px;
  width: 100%;
  border-radius: 40px;
  padding: 14px 56px;
  color: ${WikkiTheme.white};
  background: ${WikkiTheme.black};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
var Driver2 = (0, import_styled_components14.default)(import_remix6.Link)`
  height: 44px;
  max-width: 154px;
  width: 100%;
  border-radius: 40px;
  padding: 14px 56px;
  color: ${WikkiTheme.black};
  background: ${WikkiTheme.white};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
var SelectorText2 = (0, import_styled_components14.default)(SubTitle)``;
var WorksRow2 = import_styled_components14.default.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
var TopRow2 = import_styled_components14.default.div`
  width: 100%;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
var BottomRow2 = import_styled_components14.default.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 40px;
  gap: 40px;
  width: 100%;
  @media only screen and (max-width: 950px) {
    grid-gap: 24px;
    place-items: center;
    grid-template-columns: repeat(1, 1fr);
    gap: 24px;
  }
`;
var DownloadSection2 = import_styled_components14.default.div`
  max-height: 550px;
  height: 100%;
  min-height: 540px;
  max-width: 1100px;
  width: 100%;
  overflow: hidden;
  padding: 20px;
  border-radius: 40px;
  background: ${WikkiTheme.white};
`;
var DownloadCover2 = import_styled_components14.default.div`
  max-width: 972px;
  width: 100%;
  margin: 64px auto 0 auto;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 72px;
  gap: 72px;
  width: 100%;
  @media only screen and (max-width: 950px) {
    grid-gap: 36px;
    place-items: center;
    margin: 48px auto 0 auto;
    grid-template-columns: repeat(1, 1fr);
    gap: 36px;
  }
`;
var DownloadContent2 = import_styled_components14.default.div`
  display: grid;
  grid-template-columns: 80px auto;
  grid-gap: 32px;
  gap: 32px;
  width: 100%;
  @media only screen and (max-width: 650px) {
    grid-template-columns: 48px auto;
  }
`;
var DownloadNumber2 = import_styled_components14.default.span`
  height: 80px;
  width: 80px;
  border: 1px solid ${WikkiTheme.black};
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 650px) {
    height: 48px;
    width: 48px;
  }
`;
var NumberText3 = (0, import_styled_components14.default)(Header5)``;
var DownloadText2 = import_styled_components14.default.div`
  display: flex;
  flex-direction: column;
`;
var DownloadTitle2 = (0, import_styled_components14.default)(Header3)``;
var Downloadbody2 = (0, import_styled_components14.default)(Body3)`
  margin: 24px 0;
  @media only screen and (max-width: 650px) {
    margin: 16px 0;
  }
`;
var DownloadApp2 = import_styled_components14.default.div`
  height: 721px;
  max-width: 361px;
  width: 100%;
  margin: 0 auto;
`;
var AppImage2 = import_styled_components14.default.img`
  width: 100%;
  height: 100%;
`;
var SecondRow2 = import_styled_components14.default.div`
  max-height: 600px;
  height: 100%;
  min-height: 580px;
  max-width: 520px;
  padding: 20px;
  width: 100%;
  overflow: hidden;
  position: relative;
  border-radius: 40px;
  background: ${WikkiTheme.yellow};
  @media only screen and (max-width: 650px) {
    min-height: 400px;
  }
`;
var SecondMask2 = import_styled_components14.default.img`
  height: 250px;
  width: 213px;
  right: 4px;
  top: -48px;
  position: absolute;
`;
var ThirdMask2 = import_styled_components14.default.img`
  left: -40px;
  height: 277px;
  width: 448px;
  top: -32px;
  position: absolute;
`;
var BottomCover2 = import_styled_components14.default.div`
  max-width: 481px;
  width: 100%;
  position: relative;
  z-index: 2;
  margin: 48px auto 0 auto;
  @media only screen and (max-width: 650px) {
    margin: 32px auto 0 auto;
  }
`;
var SecondContent2 = import_styled_components14.default.div`
  display: grid;
  grid-template-columns: 80px auto;
  grid-gap: 32px;
  gap: 32px;
  width: 100%;
  @media only screen and (max-width: 650px) {
    grid-template-columns: 48px auto;
  }
`;
var SecondNumber2 = import_styled_components14.default.div`
  height: 80px;
  width: 80px;
  border: 1px solid ${WikkiTheme.black};
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 650px) {
    height: 48px;
    width: 48px;
  }
`;
var SecondText2 = import_styled_components14.default.div`
  display: flex;
  flex-direction: column;
`;
var SecondTitle2 = (0, import_styled_components14.default)(Header3)`
  color: ${WikkiTheme.black};
  span {
    color: ${WikkiTheme.white};
  }
`;
var SecondPara2 = (0, import_styled_components14.default)(Body3)`
  margin: 24px 0;
  @media only screen and (max-width: 650px) {
    margin: 16px 0;
  }
`;
var SecondDownload2 = import_styled_components14.default.div`
  display: flex;
  flex-direction: column;
`;
var SecondImage2 = import_styled_components14.default.div`
  height: 100%;
  width: 100%;
  min-height: 250px;
  max-height: 441px;
  max-width: 441px;
  margin-bottom: 40px;
  margin-top: -60px;
  @media only screen and (max-width: 650px) {
    margin-bottom: 0px;
    max-height: 400px;
  }
`;
var SecondLustration2 = import_styled_components14.default.img`
  height: 100%;
  width: 100%;
  min-height: 250px;
  max-height: 441px;
  max-width: 441px;
`;
var ThirdRow2 = import_styled_components14.default.div`
  max-height: 600px;
  height: 100%;
  padding: 20px;
  position: relative;
  min-height: 580px;
  max-width: 520px;
  width: 100%;
  overflow: hidden;
  border-radius: 40px;
  background: ${WikkiTheme.blue};
  @media only screen and (max-width: 650px) {
    min-height: 400px;
  }
`;
var ThirdBottomCover2 = import_styled_components14.default.div`
  max-width: 481px;
  width: 100%;
  position: relative;
  z-index: 2;
  margin: 48px auto 0 auto;
  @media only screen and (max-width: 650px) {
    margin: 32px auto 0 auto;
  }
`;
var ThirdContent2 = import_styled_components14.default.div`
  display: grid;
  grid-template-columns: 80px auto;
  grid-gap: 32px;
  gap: 32px;
  width: 100%;
  @media only screen and (max-width: 650px) {
    grid-template-columns: 48px auto;
  }
`;
var ThirdNumber2 = import_styled_components14.default.div`
  height: 80px;
  width: 80px;
  border: 1px solid ${WikkiTheme.white};
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 650px) {
    height: 48px;
    width: 48px;
  }
`;
var ThirdText2 = import_styled_components14.default.div`
  display: flex;
  flex-direction: column;
  color: ${WikkiTheme.white};
`;
var ThirdPara2 = (0, import_styled_components14.default)(Body3)`
  margin: 24px 0;
  color: ${WikkiTheme.white};
  @media only screen and (max-width: 650px) {
    margin: 16px 0;
  }
`;
var ThirdDownload2 = import_styled_components14.default.div``;
var ThirdTitle2 = (0, import_styled_components14.default)(Header3)`
  color: ${WikkiTheme.white};
`;
var ThirdImage2 = import_styled_components14.default.div`
  height: 100%;
  width: 100%;
  min-height: 250px;
  max-height: 441px;
  max-width: 441px;
  margin-bottom: 40px;
  margin-top: -60px;
  @media only screen and (max-width: 650px) {
    margin-bottom: 0px;

    max-height: 400px;
  }
`;
var ThirdLustration2 = import_styled_components14.default.img`
  height: 100%;
  width: 100%;
`;
var how_it_works_default = index;

// route:C:\Users\Augustine Ogiza\Documents\Development\react\wikki\app\routes\business.tsx
var business_exports = {};
__export(business_exports, {
  default: () => business_default,
  meta: () => meta5
});
init_react();
var import_react14 = __toESM(require("react"));
var meta5 = () => {
  return {
    title: "Business Using wikki - Use Wikki",
    description: "Real time deliveries"
  };
};
var business = () => {
  return /* @__PURE__ */ import_react14.default.createElement("div", null, "business");
};
var business_default = business;

// route:C:\Users\Augustine Ogiza\Documents\Development\react\wikki\app\routes\contact.tsx
var contact_exports = {};
__export(contact_exports, {
  default: () => contact_default,
  meta: () => meta6
});
init_react();
var import_react17 = __toESM(require("react"));
var import_styled_components18 = __toESM(require("styled-components"));

// app/components/contact/ContactForm.tsx
init_react();
var import_react15 = __toESM(require("react"));
var import_styled_components16 = __toESM(require("styled-components"));
var import_formik2 = require("formik");
var Yup = __toESM(require("yup"));

// app/styles/InputStyles.tsx
init_react();
var import_formik = require("formik");
var import_styled_components15 = __toESM(require("styled-components"));
var TextInput = (0, import_styled_components15.default)(import_formik.Field)`
  height: 56px;
  max-width: 450px;
  width: 100%;
  background: ${WikkiTheme.snowWhite};
  border-radius: 32px;
  outline: none;
  padding: 19px 24px;
  border: none;
  font-family: "Clash Display Medium";
  font-size: 16px;
  font-weight: 500;
  line-height: 1.1;
  color: ${WikkiTheme.dark};
  @media only screen and (max-width: 650px) {
    font-size: 14px;
  }
  ::placeholder {
    font-family: "Clash Display Medium";
    font-size: 16px;
    font-weight: 500;
    line-height: 1.1;
    color: ${WikkiTheme.gray};
    @media only screen and (max-width: 650px) {
      font-size: 14px;
    }
  }
`;
var TextArea = (0, import_styled_components15.default)(import_formik.Field)`
  height: 250px;
  max-width: 450px;
  width: 100%;
  background: ${WikkiTheme.snowWhite};
  border-radius: 32px;
  outline: none;
  padding: 19px 24px;
  border: none;
  resize: none;
  font-family: "Clash Display Medium";
  font-size: 16px;
  font-weight: 500;
  line-height: 1.1;
  color: ${WikkiTheme.dark};
  @media only screen and (max-width: 650px) {
    font-size: 14px;
  }
  ::placeholder {
    font-family: "Clash Display Medium";
    font-size: 16px;
    font-weight: 500;
    line-height: 1.1;
    color: ${WikkiTheme.gray};
    @media only screen and (max-width: 650px) {
      font-size: 14px;
    }
  }
`;

// app/components/contact/ContactForm.tsx
var ContactForm = () => {
  const ContactSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string().email().required("Required"),
    message: Yup.string().required("Required")
  });
  const [sent, setSent] = (0, import_react15.useState)(false);
  const submitForm = (values, onSubmitProps) => {
    onSubmitProps.setSubmitting(true);
  };
  return /* @__PURE__ */ import_react15.default.createElement(Body15, null, /* @__PURE__ */ import_react15.default.createElement(Cover10, null, /* @__PURE__ */ import_react15.default.createElement(FormTitle, null, "Send us a message"), /* @__PURE__ */ import_react15.default.createElement(import_formik2.Formik, {
    initialValues: { email: "", name: "", message: "" },
    validationSchema: ContactSchema,
    onSubmit: submitForm
  }, ({
    errors,
    isSubmitting,
    values,
    handleChange,
    handleBlur,
    touched
  }) => /* @__PURE__ */ import_react15.default.createElement(FormForm, null, /* @__PURE__ */ import_react15.default.createElement(FormColumn, null, /* @__PURE__ */ import_react15.default.createElement(FormLabel, {
    htmlFor: "name"
  }, " ", /* @__PURE__ */ import_react15.default.createElement(LabelText, null, "Name")), /* @__PURE__ */ import_react15.default.createElement(FormInput, {
    id: "name",
    value: values.name,
    onChange: handleChange,
    onBlur: handleBlur,
    as: "input",
    type: "text"
  }), errors.name && touched.name && /* @__PURE__ */ import_react15.default.createElement(FormError, null, /* @__PURE__ */ import_react15.default.createElement(FormErrorText, null, "Your name is required"))), /* @__PURE__ */ import_react15.default.createElement(FormColumn, null, /* @__PURE__ */ import_react15.default.createElement(FormLabel, {
    htmlFor: "email"
  }, " ", /* @__PURE__ */ import_react15.default.createElement(LabelText, null, "Email")), /* @__PURE__ */ import_react15.default.createElement(FormInput, {
    id: "email",
    value: values.email,
    onChange: handleChange,
    onBlur: handleBlur,
    as: "input",
    type: "email"
  }), errors.email && touched.email && /* @__PURE__ */ import_react15.default.createElement(FormError, null, /* @__PURE__ */ import_react15.default.createElement(FormErrorText, null, "Your email is required"))), /* @__PURE__ */ import_react15.default.createElement(FormColumn, null, /* @__PURE__ */ import_react15.default.createElement(FormLabel, {
    htmlFor: "message"
  }, " ", /* @__PURE__ */ import_react15.default.createElement(LabelText, null, "Message")), /* @__PURE__ */ import_react15.default.createElement(FormArea, {
    id: "message",
    value: values.message,
    onChange: handleChange,
    onBlur: handleBlur,
    as: "textarea",
    placeholder: "Type your message"
  }), errors.message && touched.message && /* @__PURE__ */ import_react15.default.createElement(FormError, null, /* @__PURE__ */ import_react15.default.createElement(FormErrorText, null, "Your message is required"))), /* @__PURE__ */ import_react15.default.createElement(FormButtonWrap, null, /* @__PURE__ */ import_react15.default.createElement(FormButtonMain, null, "Send"))))));
};
var Body15 = import_styled_components16.default.div`
  width: 100%;
  min-height: 900px;
  background: ${WikkiTheme.snowWhite};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 64px 0;
  padding: 80px 0;
`;
var Cover10 = import_styled_components16.default.div`
  min-height: 500px;
  max-width: 550px;

  width: 100%;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
  border-radius: 40px;
  margin: 0 auto;
  background: ${WikkiTheme.white};
  padding: 16px;
`;
var FormTitle = (0, import_styled_components16.default)(Header3)`
  margin: 40px 0 56px 0;
  text-align: center;
  @media only screen and (max-width: 650px) {
    margin: 32px 0 40px 0;
  }
`;
var FormForm = (0, import_styled_components16.default)(import_formik2.Form)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;
var FormColumn = import_styled_components16.default.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin: 16px auto;
  max-width: 450px;
`;
var LabelText = (0, import_styled_components16.default)(SubTitle)`
  color: ${WikkiTheme.dark};
  margin: 10px 0;
`;
var FormLabel = import_styled_components16.default.label`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-start;
`;
var FormInput = (0, import_styled_components16.default)(TextInput)``;
var FormArea = (0, import_styled_components16.default)(TextArea)``;
var FormError = import_styled_components16.default.div`
  margin: 10px 0;
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-start;
`;
var FormErrorText = (0, import_styled_components16.default)(SubTitleSmall)`
  color: ${WikkiTheme.red};
`;
var FormButtonWrap = import_styled_components16.default.div`
  margin: 40px 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
var FormButtonMain = (0, import_styled_components16.default)(FormButton)``;
var ContactForm_default = ContactForm;

// app/components/contact/ContactHero.tsx
init_react();
var import_react16 = __toESM(require("react"));
var import_styled_components17 = __toESM(require("styled-components"));
var ContactHero = () => {
  return /* @__PURE__ */ import_react16.default.createElement(Body16, null, /* @__PURE__ */ import_react16.default.createElement(Cover11, null, /* @__PURE__ */ import_react16.default.createElement(ContactHeader, null, /* @__PURE__ */ import_react16.default.createElement(ContactTitle, null, "How can we help?"), /* @__PURE__ */ import_react16.default.createElement(ContactText, null, "Looking for the solution to your logistics needs or answers? Fill out the contact form and we will be in touch."))));
};
var Body16 = import_styled_components17.default.section`
  width: 100%;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;
var Cover11 = import_styled_components17.default.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 72px 0 0 0;
`;
var ContactHeader = import_styled_components17.default.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
`;
var ContactTitle = (0, import_styled_components17.default)(Header1)`
  margin: 8px 0;
  text-align: center;
`;
var ContactText = (0, import_styled_components17.default)(Body1)`
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
`;
var ContactHero_default = ContactHero;

// route:C:\Users\Augustine Ogiza\Documents\Development\react\wikki\app\routes\contact.tsx
var meta6 = () => {
  return {
    title: "Contact Us - Use Wikki",
    description: "Real time deliveries"
  };
};
var contact = () => {
  return /* @__PURE__ */ import_react17.default.createElement(Body17, null, /* @__PURE__ */ import_react17.default.createElement(ContactHero_default, null), /* @__PURE__ */ import_react17.default.createElement(ContactForm_default, null));
};
var Body17 = import_styled_components18.default.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
var contact_default = contact;

// route:C:\Users\Augustine Ogiza\Documents\Development\react\wikki\app\routes\about.tsx
var about_exports = {};
__export(about_exports, {
  default: () => about_default,
  meta: () => meta7
});
init_react();
var import_react23 = __toESM(require("react"));
var import_styled_components24 = __toESM(require("styled-components"));

// app/components/about/AboutBusiness.tsx
init_react();
var import_react18 = __toESM(require("react"));
var import_styled_components19 = __toESM(require("styled-components"));

// app/images/delivery02.png
var delivery02_default = "/build/_assets/delivery02-XGBTQ7GE.png";

// app/images/delivery01.png
var delivery01_default = "/build/_assets/delivery01-BBMAVTUQ.png";

// app/components/about/AboutBusiness.tsx
var AboutBusiness = () => {
  return /* @__PURE__ */ import_react18.default.createElement(Body18, null, /* @__PURE__ */ import_react18.default.createElement(Cover12, null, /* @__PURE__ */ import_react18.default.createElement(BusinesInfo, null, /* @__PURE__ */ import_react18.default.createElement(BusinessText, null, "What more Do we offer you")), /* @__PURE__ */ import_react18.default.createElement(DetailsGrid, null, /* @__PURE__ */ import_react18.default.createElement(GridRight, null, " ", /* @__PURE__ */ import_react18.default.createElement(GridCover, null, /* @__PURE__ */ import_react18.default.createElement(RideTitle, null, "Track your order"), /* @__PURE__ */ import_react18.default.createElement(RideText2, null, "Real time order & package tracking"))), /* @__PURE__ */ import_react18.default.createElement(GridLeft, null, /* @__PURE__ */ import_react18.default.createElement(GridCover, null, /* @__PURE__ */ import_react18.default.createElement(RideTitle, null, "Quick delivery"), /* @__PURE__ */ import_react18.default.createElement(RideText2, null, "Deliver items to your customers without hassle"))))));
};
var Body18 = import_styled_components19.default.div`
  min-height: 300px;
  width: 100%;
  overflow: hidden;
  display: flex;
  padding: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 80px 0;
  @media only screen and (max-width: 650px) {
    margin: 24px 0;
  }
`;
var Cover12 = import_styled_components19.default.div`
  max-width: 1232px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
var BusinesInfo = import_styled_components19.default.div`
  max-width: 400px;
  width: 100%;
  margin: 32px 0;
`;
var BusinessText = (0, import_styled_components19.default)(Header2)`
  text-transform: capitalize;
`;
var DetailsGrid = import_styled_components19.default.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 16px;
  gap: 16px;
  width: 100%;
  margin: 40px 0;
  @media only screen and (max-width: 850px) {
    place-items: center;
    grid-template-columns: repeat(1, 1fr);
    width: 100%;
  }
`;
var GridLeft = import_styled_components19.default.div`
  min-height: 500px;
  max-height: 630px;
  padding: 0 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 0px;
  position: relative;
  background: url(${delivery01_default}) no-repeat center center/cover;
  :after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: rgba(0, 0, 0, 0.3);
  }
`;
var GridCover = import_styled_components19.default.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  margin: 64px 0;
  z-index: 3;
`;
var RideTitle = (0, import_styled_components19.default)(Header3)`
  color: ${WikkiTheme.white};
  margin: 0;
`;
var GridRight = import_styled_components19.default.div`
  min-height: 500px;
  max-height: 630px;
  padding: 0 40px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border-radius: 0px;
  position: relative;
  background: url(${delivery02_default}) no-repeat center center/cover;
  :after {
    position: absolute;
    content: "";
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    background: rgba(0, 0, 0, 0.3);
  }
`;
var RideText2 = (0, import_styled_components19.default)(Body3)`
  margin: 16px 0;
  color: ${WikkiTheme.white};
`;
var AboutBusiness_default = AboutBusiness;

// app/components/about/AboutDelivery.tsx
init_react();
var import_react19 = __toESM(require("react"));
var import_styled_components20 = __toESM(require("styled-components"));
var AboutDelivery = () => {
  return /* @__PURE__ */ import_react19.default.createElement(Body19, null, /* @__PURE__ */ import_react19.default.createElement(Cover13, null, /* @__PURE__ */ import_react19.default.createElement(RideText3, null, "Delivery made easy")), " ", /* @__PURE__ */ import_react19.default.createElement(Cover13, null, /* @__PURE__ */ import_react19.default.createElement(RideText3, null, "Delivery made easy")), " ", /* @__PURE__ */ import_react19.default.createElement(Cover13, null, /* @__PURE__ */ import_react19.default.createElement(RideText3, null, "Delivery made easy")), " ", /* @__PURE__ */ import_react19.default.createElement(Cover13, null, /* @__PURE__ */ import_react19.default.createElement(RideText3, null, "Delivery made easy")), " ", /* @__PURE__ */ import_react19.default.createElement(Cover13, null, /* @__PURE__ */ import_react19.default.createElement(RideText3, null, "Delivery made easy")), " ", /* @__PURE__ */ import_react19.default.createElement(Cover13, null, /* @__PURE__ */ import_react19.default.createElement(RideText3, null, "Delivery made easy")), " ", /* @__PURE__ */ import_react19.default.createElement(Cover13, null, /* @__PURE__ */ import_react19.default.createElement(RideText3, null, "Delivery made easy")), " ", /* @__PURE__ */ import_react19.default.createElement(Cover13, null, /* @__PURE__ */ import_react19.default.createElement(RideText3, null, "Delivery made easy")), " ", /* @__PURE__ */ import_react19.default.createElement(Cover13, null, /* @__PURE__ */ import_react19.default.createElement(RideText3, null, "Delivery made easy")), " ", /* @__PURE__ */ import_react19.default.createElement(Cover13, null, /* @__PURE__ */ import_react19.default.createElement(RideText3, null, "Delivery made easy")), " ", /* @__PURE__ */ import_react19.default.createElement(Cover13, null, /* @__PURE__ */ import_react19.default.createElement(RideText3, null, "Delivery made easy")));
};
var Body19 = import_styled_components20.default.div`
  height: 276px;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media only screen and (max-width: 650px) {
    height: 200px;
  }
`;
var animation2 = import_styled_components20.keyframes`

 0% {
    transform: translateZ(0);
  }
  to {
    transform: translate3d(-100%, 0, 0);
  }

`;
var Cover13 = import_styled_components20.default.div`
  animation: ${animation2} 15s linear infinite;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
var RideText3 = (0, import_styled_components20.default)(LargeHeader)`
  white-space: nowrap;
  margin: 40px;
`;
var AboutDelivery_default = AboutDelivery;

// app/components/about/AboutDetails.tsx
init_react();
var import_react20 = __toESM(require("react"));
var import_styled_components21 = __toESM(require("styled-components"));

// app/images/purpose01.png
var purpose01_default = "/build/_assets/purpose01-7HL33MBO.png";

// app/images/purpose02.png
var purpose02_default = "/build/_assets/purpose02-RLNMTGP4.png";

// app/components/about/AboutDetails.tsx
var AboutDetails = () => {
  return /* @__PURE__ */ import_react20.default.createElement(Body20, null, /* @__PURE__ */ import_react20.default.createElement(Cover14, null, /* @__PURE__ */ import_react20.default.createElement(DetailsGrid2, null, /* @__PURE__ */ import_react20.default.createElement(GridLeft2, null, /* @__PURE__ */ import_react20.default.createElement(RideTitle2, null, "Waiting is boring"), /* @__PURE__ */ import_react20.default.createElement(RideText4, null, "We know how hard it can be to start building your client base, especially as a student. We built Clutch to be a safe space for students to build out their side-hustles and get support from their classmates.")), /* @__PURE__ */ import_react20.default.createElement(GridRight2, null, /* @__PURE__ */ import_react20.default.createElement(GridImage, {
    src: purpose02_default,
    alt: "use wikki"
  })), " "), " ", /* @__PURE__ */ import_react20.default.createElement(DetailsGrid2, null, /* @__PURE__ */ import_react20.default.createElement(GridRight2, null, /* @__PURE__ */ import_react20.default.createElement(GridImage, {
    src: purpose01_default,
    alt: "use wikki"
  })), /* @__PURE__ */ import_react20.default.createElement(GridLeft2, null, /* @__PURE__ */ import_react20.default.createElement(RideTitle2, null, "Our Mission"), /* @__PURE__ */ import_react20.default.createElement(RideText4, null, "We know how hard it can be to start building your client base, especially as a student. We built Clutch to be a safe space for students to build out their side-hustles and get support from their classmates.")))));
};
var Body20 = import_styled_components21.default.div`
  min-height: 300px;
  width: 100%;
  overflow: hidden;
  display: flex;
  padding: 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 80px 0;
  @media only screen and (max-width: 650px) {
    margin: 24px 0;
  }
`;
var Cover14 = import_styled_components21.default.div`
  max-width: 1056px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
var DetailsGrid2 = import_styled_components21.default.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 40px;
  gap: 40px;
  width: 100%;
  margin: 40px 0;
  @media only screen and (max-width: 950px) {
    grid-gap: 24px;
    place-items: center;
    grid-template-columns: repeat(1, 1fr);
    gap: 24px;
    width: 100%;
    margin: 24px 0;
  }
`;
var GridLeft2 = import_styled_components21.default.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  width: 100%;
`;
var RideTitle2 = (0, import_styled_components21.default)(Header2)``;
var GridRight2 = import_styled_components21.default.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
var GridImage = import_styled_components21.default.img`
  max-width: 550px;
  border-radius: 20px;
  max-height: 630px;
  min-height: 300px;
  height: 100%;
  outline: none;
  width: 100%;
`;
var RideText4 = (0, import_styled_components21.default)(Body3)`
  margin: 16px 0;
`;
var AboutDetails_default = AboutDetails;

// app/components/about/AboutHero.tsx
init_react();
var import_react21 = __toESM(require("react"));
var import_styled_components22 = __toESM(require("styled-components"));
var AboutHero = () => {
  return /* @__PURE__ */ import_react21.default.createElement(Body21, null, /* @__PURE__ */ import_react21.default.createElement(MoreOverlay, null), /* @__PURE__ */ import_react21.default.createElement(Cover15, null, /* @__PURE__ */ import_react21.default.createElement(MoreTitle, null, "ABOUT WIKKI"), /* @__PURE__ */ import_react21.default.createElement(CoverImage, null, /* @__PURE__ */ import_react21.default.createElement(AboutImage, {
    src: main_default,
    alt: "the wikki my wikki"
  })), /* @__PURE__ */ import_react21.default.createElement(CoverDets, null, /* @__PURE__ */ import_react21.default.createElement(CoverTitle, null, "Robust delivery and pickup for Nigeria"), /* @__PURE__ */ import_react21.default.createElement(CoverText, null, "Wikki is a technology company on a mission to power the digital economy in Africa, using open banking as a layer for financial data, identity data, and bank transfer payments for businesses."))));
};
var Body21 = import_styled_components22.default.div`
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 600px;
  color: ${WikkiTheme.white};
  width: 100%;

  margin: 0;
  background: ${WikkiTheme.white};
  @media only screen and (max-width: 550px) {
    min-height: 450px;
  }
`;
var MoreOverlay = import_styled_components22.default.div`
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: ${WikkiTheme.primary};
  height: 500px;
  @media only screen and (max-width: 650px) {
    height: 300px;
  }
`;
var Cover15 = import_styled_components22.default.div`
  position: relative;
  z-index: 2;
  color: ${WikkiTheme.white};
  max-width: 1232px;
  width: 100%;
  margin: 120px auto 80px auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  @media only screen and (max-width: 650px) {
    margin: 92px auto 56 auto;
  }
`;
var MoreTitle = (0, import_styled_components22.default)(Header1)`
  margin: 16px 0;
  text-align: left;
  @media only screen and (max-width: 650px) {
    margin: 8px 0;
  }
`;
var CoverImage = import_styled_components22.default.div`
  min-height: 350px;
  max-width: 1232px;
  width: 100%;
  margin: 48px auto;
  @media only screen and (max-width: 650px) {
    min-height: 250px;
    margin: 24px auto;
  }
`;
var AboutImage = import_styled_components22.default.img`
  width: 100%;
  min-height: 350px;
  @media only screen and (max-width: 650px) {
    min-height: 250px;
  }
`;
var CoverDets = import_styled_components22.default.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 800px;
  width: 100%;
  margin: 24px auto;
  @media only screen and (max-width: 650px) {
    max-width: 500px;
  }
`;
var CoverTitle = (0, import_styled_components22.default)(Header1)`
  text-align: center;
  color: ${WikkiTheme.black};
`;
var CoverText = (0, import_styled_components22.default)(Body2)`
  text-align: center;
  color: ${WikkiTheme.black};
`;
var AboutHero_default = AboutHero;

// app/components/about/AboutPurpose.tsx
init_react();
var import_react22 = __toESM(require("react"));
var import_styled_components23 = __toESM(require("styled-components"));

// app/images/pointcard.gif
var pointcard_default = "/build/_assets/pointcard-J2HSU7TO.gif";

// app/components/about/PurposeData.tsx
init_react();
var purposeData = [
  {
    icon: /* @__PURE__ */ React.createElement("svg", {
      width: "40",
      height: "40",
      viewBox: "0 0 40 40",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, /* @__PURE__ */ React.createElement("path", {
      d: "M20 23.3333H21.6667C23.5 23.3333 25 21.8333 25 20V3.33334H10C7.5 3.33334 5.31668 4.71666 4.18335 6.74999",
      stroke: "white",
      "stroke-width": "1.5",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }), /* @__PURE__ */ React.createElement("path", {
      d: "M3.33337 28.3333C3.33337 31.1 5.56671 33.3333 8.33337 33.3333H10C10 31.5 11.5 30 13.3334 30C15.1667 30 16.6667 31.5 16.6667 33.3333H23.3334C23.3334 31.5 24.8334 30 26.6667 30C28.5 30 30 31.5 30 33.3333H31.6667C34.4334 33.3333 36.6667 31.1 36.6667 28.3333V23.3333H31.6667C30.75 23.3333 30 22.5833 30 21.6667V16.6667C30 15.75 30.75 15 31.6667 15H33.8167L30.9667 10.0167C30.3667 8.98336 29.2668 8.33334 28.0668 8.33334H25V20C25 21.8333 23.5 23.3333 21.6667 23.3333H20",
      stroke: "white",
      "stroke-width": "1.5",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }), /* @__PURE__ */ React.createElement("path", {
      d: "M13.3333 36.6667C15.1743 36.6667 16.6667 35.1743 16.6667 33.3333C16.6667 31.4924 15.1743 30 13.3333 30C11.4924 30 10 31.4924 10 33.3333C10 35.1743 11.4924 36.6667 13.3333 36.6667Z",
      stroke: "white",
      "stroke-width": "1.5",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }), /* @__PURE__ */ React.createElement("path", {
      d: "M26.6667 36.6667C28.5077 36.6667 30 35.1743 30 33.3333C30 31.4924 28.5077 30 26.6667 30C24.8258 30 23.3334 31.4924 23.3334 33.3333C23.3334 35.1743 24.8258 36.6667 26.6667 36.6667Z",
      stroke: "white",
      "stroke-width": "1.5",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }), /* @__PURE__ */ React.createElement("path", {
      d: "M36.6667 20V23.3333H31.6667C30.75 23.3333 30 22.5833 30 21.6667V16.6667C30 15.75 30.75 15 31.6667 15H33.8166L36.6667 20Z",
      stroke: "white",
      "stroke-width": "1.5",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }), /* @__PURE__ */ React.createElement("path", {
      d: "M3.33337 13.3333H13.3334",
      stroke: "white",
      "stroke-width": "1.5",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }), /* @__PURE__ */ React.createElement("path", {
      d: "M3.33337 18.3333H10",
      stroke: "white",
      "stroke-width": "1.5",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }), /* @__PURE__ */ React.createElement("path", {
      d: "M3.33337 23.3333H6.66671",
      stroke: "white",
      "stroke-width": "1.5",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    })),
    title: "Fast delivery",
    text: "New world financial literacy for the future of work. Giving the youth the confidence to follow their calling."
  },
  {
    icon: /* @__PURE__ */ React.createElement("svg", {
      width: "40",
      height: "40",
      viewBox: "0 0 40 40",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, /* @__PURE__ */ React.createElement("path", {
      d: "M5.00004 5H35C35.4421 5 35.866 5.17559 36.1786 5.48816C36.4911 5.80072 36.6667 6.22464 36.6667 6.66667V33.3333C36.6667 33.7754 36.4911 34.1993 36.1786 34.5118C35.866 34.8244 35.4421 35 35 35H5.00004C4.55801 35 4.13409 34.8244 3.82153 34.5118C3.50897 34.1993 3.33337 33.7754 3.33337 33.3333V6.66667C3.33337 6.22464 3.50897 5.80072 3.82153 5.48816C4.13409 5.17559 4.55801 5 5.00004 5V5ZM6.66671 8.33333V31.6667H33.3334V8.33333H6.66671ZM14.1667 23.3333H23.3334C23.5544 23.3333 23.7664 23.2455 23.9226 23.0893C24.0789 22.933 24.1667 22.721 24.1667 22.5C24.1667 22.279 24.0789 22.067 23.9226 21.9107C23.7664 21.7545 23.5544 21.6667 23.3334 21.6667H16.6667C15.5616 21.6667 14.5018 21.2277 13.7204 20.4463C12.939 19.6649 12.5 18.6051 12.5 17.5C12.5 16.3949 12.939 15.3351 13.7204 14.5537C14.5018 13.7723 15.5616 13.3333 16.6667 13.3333H18.3334V10H21.6667V13.3333H25.8334V16.6667H16.6667C16.4457 16.6667 16.2337 16.7545 16.0775 16.9107C15.9212 17.067 15.8334 17.279 15.8334 17.5C15.8334 17.721 15.9212 17.933 16.0775 18.0893C16.2337 18.2455 16.4457 18.3333 16.6667 18.3333H23.3334C24.4384 18.3333 25.4983 18.7723 26.2797 19.5537C27.0611 20.3351 27.5 21.3949 27.5 22.5C27.5 23.6051 27.0611 24.6649 26.2797 25.4463C25.4983 26.2277 24.4384 26.6667 23.3334 26.6667H21.6667V30H18.3334V26.6667H14.1667V23.3333Z",
      fill: "white"
    })),
    title: "Cheap fees",
    text: "New world financial literacy for the future of work. Giving the youth the confidence to follow their calling."
  },
  {
    icon: /* @__PURE__ */ React.createElement("svg", {
      width: "40",
      height: "40",
      viewBox: "0 0 40 40",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, /* @__PURE__ */ React.createElement("path", {
      d: "M5.28345 12.4L20.0001 20.9166L34.6167 12.4499",
      stroke: "white",
      "stroke-width": "1.5",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }), /* @__PURE__ */ React.createElement("path", {
      d: "M20.0001 36.0166V20.8999",
      stroke: "white",
      "stroke-width": "1.5",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }), /* @__PURE__ */ React.createElement("path", {
      d: "M36.0167 15.2833V24.7167C36.0167 24.8001 36.0167 24.8666 36.0001 24.95C34.8334 23.9333 33.3334 23.3334 31.6667 23.3334C30.1 23.3334 28.65 23.8834 27.5 24.8C25.9667 26.0167 25 27.9 25 30C25 31.25 25.35 32.4334 25.9667 33.4334C26.1167 33.7 26.3 33.95 26.5 34.1834L23.4501 35.8667C21.5501 36.9334 18.45 36.9334 16.55 35.8667L7.65003 30.9334C5.63337 29.8167 3.9834 27.0167 3.9834 24.7167V15.2833C3.9834 12.9833 5.63337 10.1834 7.65003 9.0667L16.55 4.13333C18.45 3.06666 21.5501 3.06666 23.4501 4.13333L32.35 9.0667C34.3667 10.1834 36.0167 12.9833 36.0167 15.2833Z",
      stroke: "white",
      "stroke-width": "1.5",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }), /* @__PURE__ */ React.createElement("path", {
      d: "M38.3333 30C38.3333 31.25 37.9834 32.4333 37.3667 33.4333C37.0167 34.0333 36.5667 34.5667 36.05 35C34.8833 36.05 33.35 36.6667 31.6667 36.6667C29.2333 36.6667 27.1166 35.3667 25.9666 33.4333C25.35 32.4333 25 31.25 25 30C25 27.9 25.9667 26.0167 27.5 24.8C28.65 23.8833 30.1 23.3333 31.6667 23.3333C35.35 23.3333 38.3333 26.3167 38.3333 30Z",
      stroke: "white",
      "stroke-width": "1.5",
      "stroke-miterlimit": "10",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }), /* @__PURE__ */ React.createElement("path", {
      d: "M33.45 31.7333L29.9166 28.2166",
      stroke: "white",
      "stroke-width": "1.5",
      "stroke-miterlimit": "10",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }), /* @__PURE__ */ React.createElement("path", {
      d: "M33.4166 28.2667L29.8833 31.7833",
      stroke: "white",
      "stroke-width": "1.5",
      "stroke-miterlimit": "10",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    })),
    title: "Better logistics",
    text: "New world financial literacy for the future of work. Giving the youth the confidence to follow their calling."
  }
];

// app/components/about/AboutPurpose.tsx
var AboutPurpose = () => {
  return /* @__PURE__ */ import_react22.default.createElement(Body22, null, /* @__PURE__ */ import_react22.default.createElement(MoreOverlay2, null), /* @__PURE__ */ import_react22.default.createElement(Cover16, null, /* @__PURE__ */ import_react22.default.createElement(MoreTitle2, null, "Our Purpose"), /* @__PURE__ */ import_react22.default.createElement(DetailsGrid3, null, purposeData.map((data, index3) => /* @__PURE__ */ import_react22.default.createElement(PurposeRow, {
    key: index3
  }, " ", /* @__PURE__ */ import_react22.default.createElement(PurposeIcon, null, data.icon), /* @__PURE__ */ import_react22.default.createElement(MoreSub, null, data.title), /* @__PURE__ */ import_react22.default.createElement(MoreText, null, data.text))))));
};
var Body22 = import_styled_components23.default.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 700px;
  color: ${WikkiTheme.white};
  width: 100%;
  padding: 16px;
  background: url(${pointcard_default}) no-repeat center center/cover;
  @media only screen and (max-width: 550px) {
    min-height: 450px;
  }
`;
var MoreOverlay2 = import_styled_components23.default.div`
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: rgba(0, 0, 0, 0.5);
`;
var Cover16 = import_styled_components23.default.div`
  position: relative;
  z-index: 2;
  color: ${WikkiTheme.white};
  max-width: 1000px;
  width: 100%;
  margin: 16px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
var MoreSub = (0, import_styled_components23.default)(Header5)`
  text-align: left;
`;
var MoreTitle2 = (0, import_styled_components23.default)(Header1)`
  margin: 16px 0;
  text-align: center;
`;
var MoreText = (0, import_styled_components23.default)(Body3)`
  text-align: left;
  margin: 16px 0;
`;
var DetailsGrid3 = import_styled_components23.default.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 40px;
  gap: 40px;
  width: 100%;
  margin: 40px 0;
  @media only screen and (max-width: 950px) {
    grid-gap: 24px;

    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
    width: 100%;
    margin: 24px 0;
  }
  @media only screen and (max-width: 650px) {
    grid-gap: 24px;

    grid-template-columns: repeat(1, 1fr);
    gap: 24px;
    width: 100%;
    margin: 24px 0;
  }
`;
var PurposeRow = import_styled_components23.default.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
var PurposeIcon = import_styled_components23.default.span`
  width: 40px;
  height: 40px;
  margin: 32px 0;
`;
var AboutPurpose_default = AboutPurpose;

// route:C:\Users\Augustine Ogiza\Documents\Development\react\wikki\app\routes\about.tsx
var meta7 = () => {
  return {
    title: "About - Use Wikki",
    description: "Realtime delivery"
  };
};
var about = () => {
  return /* @__PURE__ */ import_react23.default.createElement(Body23, null, /* @__PURE__ */ import_react23.default.createElement(AboutHero_default, null), /* @__PURE__ */ import_react23.default.createElement(AboutPurpose_default, null), /* @__PURE__ */ import_react23.default.createElement(AboutDelivery_default, null), /* @__PURE__ */ import_react23.default.createElement(AboutDetails_default, null), /* @__PURE__ */ import_react23.default.createElement(AboutBusiness_default, null));
};
var Body23 = import_styled_components24.default.div``;
var about_default = about;

// route:C:\Users\Augustine Ogiza\Documents\Development\react\wikki\app\routes\index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => routes_default,
  meta: () => meta8
});
init_react();
var import_react27 = __toESM(require("react"));
var import_styled_components28 = __toESM(require("styled-components"));

// app/components/home/DoMore.tsx
init_react();
var import_react24 = __toESM(require("react"));
var import_styled_components25 = __toESM(require("styled-components"));
var DoMore = () => {
  return /* @__PURE__ */ import_react24.default.createElement(Body24, null, /* @__PURE__ */ import_react24.default.createElement(MoreOverlay3, null), /* @__PURE__ */ import_react24.default.createElement(Cover17, null, /* @__PURE__ */ import_react24.default.createElement(MoreSub2, null, "Do more with wikki"), /* @__PURE__ */ import_react24.default.createElement(MoreTitle3, null, "Designed for the next billion users and riders"), /* @__PURE__ */ import_react24.default.createElement(MoreText2, null, "Beautifully easy to use software to accept card payments on your phone, and grow your business anywhere on the planet")));
};
var Body24 = import_styled_components25.default.section`
  position: relative;
  z-index: -1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 600px;
  color: ${WikkiTheme.white};
  width: 100%;
  padding: 16px;
  background: url(${pointcard_default}) no-repeat center center/cover;
  @media only screen and (max-width: 550px) {
    min-height: 450px;
  }
`;
var MoreOverlay3 = import_styled_components25.default.div`
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: rgba(0, 0, 0, 0.5);
`;
var Cover17 = import_styled_components25.default.div`
  position: relative;
  z-index: 2;
  color: ${WikkiTheme.white};
  max-width: 800px;
  width: 100%;
  margin: 16px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
var MoreSub2 = (0, import_styled_components25.default)(Header5)`
  text-align: center;
`;
var MoreTitle3 = (0, import_styled_components25.default)(Header1)`
  margin: 16px 0 24px 0;
  text-align: center;
`;
var MoreText2 = (0, import_styled_components25.default)(Body3)`
  text-align: center;
`;
var DoMore_default = DoMore;

// app/components/home/HomeHero.tsx
init_react();
var import_react25 = __toESM(require("react"));
var import_styled_components26 = __toESM(require("styled-components"));
var HomeHero = () => {
  return /* @__PURE__ */ import_react25.default.createElement(Body25, null);
};
var Body25 = import_styled_components26.default.section`
  position: relative;
`;
var HomeHero_default = HomeHero;

// app/components/home/HomeWaiting.tsx
init_react();
var import_react26 = __toESM(require("react"));
var HomeWaiting = () => {
  return /* @__PURE__ */ import_react26.default.createElement("div", null, "HomeWaiting");
};
var HomeWaiting_default = HomeWaiting;

// app/components/home/UseCases.tsx
init_react();
var import_styled_components27 = __toESM(require("styled-components"));

// app/images/user.png
var user_default = "/build/_assets/user-URS5GCDW.png";

// app/images/driver.png
var driver_default2 = "/build/_assets/driver-5QCCW63S.png";

// app/components/home/UseCases.tsx
var UseCases = () => {
  return /* @__PURE__ */ React.createElement(Body26, null, /* @__PURE__ */ React.createElement(Cover18, null, /* @__PURE__ */ React.createElement(MoreTitle4, null, "Discover The Wikki Usecases"), /* @__PURE__ */ React.createElement(CaseGrid, null, /* @__PURE__ */ React.createElement(CaseRowUsers, null, " ", /* @__PURE__ */ React.createElement(MoreOverlay4, null), /* @__PURE__ */ React.createElement(RowContent, null, /* @__PURE__ */ React.createElement(CaseTitle, null, "For users "), " ", /* @__PURE__ */ React.createElement(CaseTitle, null, "and companies"), /* @__PURE__ */ React.createElement(CaseButtonLink, {
    to: "/how-it-works"
  }, "Learn more"))), /* @__PURE__ */ React.createElement(CaseRowDrivers, null, " ", /* @__PURE__ */ React.createElement(MoreOverlay4, null), /* @__PURE__ */ React.createElement(RowContent, null, /* @__PURE__ */ React.createElement(CaseTitle, null, "For drivers"), /* @__PURE__ */ React.createElement(CaseButtonLink, {
    to: "/how-it-works/driver"
  }, "Learn more"))))));
};
var Body26 = import_styled_components27.default.section`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  margin: 144px 0;
  align-items: flex-start;
  min-height: 600px;
  color: ${WikkiTheme.black};
  width: 100%;
  padding: 16px;
  background: ${WikkiTheme.white};
  @media only screen and (max-width: 650px) {
    min-height: 450px;
    margin: 64px 0;
  }
`;
var MoreOverlay4 = import_styled_components27.default.div`
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  border-radius: 32px;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: rgba(0, 0, 0, 0.5);
`;
var Cover18 = import_styled_components27.default.div`
  color: ${WikkiTheme.black};
  max-width: 1232px;
  width: 100%;
  margin: 16px auto;
  display: flex;
  flex-direction: column;

  align-items: flex-start;
`;
var MoreTitle4 = (0, import_styled_components27.default)(Header1)`
  margin: 16px 0 80px 0;
  text-align: left;
  max-width: 550px;
  width: 100%;
  @media only screen and (max-width: 650px) {
    margin: 16px 0 48px 0;
  }
`;
var CaseGrid = import_styled_components27.default.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 40px;
  gap: 40px;
  width: 100%;
  @media only screen and (max-width: 950px) {
    grid-gap: 24px;
    place-items: center;
    grid-template-columns: repeat(1, 1fr);
    gap: 24px;
  }
`;
var CaseRowUsers = import_styled_components27.default.div`
  max-height: 700px;
  min-height: 680px;
  height: 100%;
  max-width: 630px;
  width: 100%;
  position: relative;
  z-index: 2;
  border-radius: 32px;
  padding: 16px;
  background: url(${user_default}) no-repeat center center/cover;
  @media only screen and (max-width: 650px) {
    max-height: 600px;
    min-height: 550px;
  }
`;
var RowContent = import_styled_components27.default.div`
  position: relative;
  z-index: 2;

  width: 100%;
  display: flex;
  color: ${WikkiTheme.white};
  flex-direction: column;
  margin: 96px 40px;
  @media only screen and (max-width: 650px) {
    margin: 56px 24px;
  }
  a {
    margin: 32px 0;
    @media only screen and (max-width: 650px) {
      margin: 24px 0;
    }
  }
`;
var CaseTitle = (0, import_styled_components27.default)(Header2)``;
var CaseButtonLink = (0, import_styled_components27.default)(CaseButton)``;
var CaseRowDrivers = import_styled_components27.default.div`
  position: relative;
  z-index: 2;
  padding: 16px;
  max-height: 700px;
  min-height: 680px;
  height: 100%;
  max-width: 630px;
  width: 100%;

  border-radius: 32px;
  background: url(${driver_default2}) no-repeat center center/cover;
  @media only screen and (max-width: 650px) {
    max-height: 600px;
    min-height: 550px;
  }
`;
var UseCases_default = UseCases;

// route:C:\Users\Augustine Ogiza\Documents\Development\react\wikki\app\routes\index.tsx
var meta8 = () => {
  return {
    title: "Home - Use Wikki",
    description: "Real time deliveries"
  };
};
var index2 = () => {
  return /* @__PURE__ */ import_react27.default.createElement(Body27, null, /* @__PURE__ */ import_react27.default.createElement(HomeHero_default, null), /* @__PURE__ */ import_react27.default.createElement(HomeWaiting_default, null), /* @__PURE__ */ import_react27.default.createElement(UseCases_default, null), /* @__PURE__ */ import_react27.default.createElement(DoMore_default, null));
};
var Body27 = import_styled_components28.default.div``;
var routes_default = index2;

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "d63d9a43", "entry": { "module": "/build/entry.client-53N2RJWB.js", "imports": ["/build/_shared/chunk-PZ2Z7HGX.js", "/build/_shared/chunk-6K6B2XQG.js", "/build/_shared/chunk-2ADOHOB6.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-WY5QOA3S.js", "imports": ["/build/_shared/chunk-D7HEMV6S.js", "/build/_shared/chunk-NTQSPRWT.js", "/build/_shared/chunk-KP2GOCWB.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/about": { "id": "routes/about", "parentId": "root", "path": "about", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/about-5VUJ5DGU.js", "imports": ["/build/_shared/chunk-2LU3WT75.js", "/build/_shared/chunk-MZGYASWF.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/business": { "id": "routes/business", "parentId": "root", "path": "business", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/business-HY6AHSQV.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/contact": { "id": "routes/contact", "parentId": "root", "path": "contact", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/contact-6YPCHEDV.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/driver-requirements": { "id": "routes/driver-requirements", "parentId": "root", "path": "driver-requirements", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/driver-requirements-FAR7YI5M.js", "imports": ["/build/_shared/chunk-MZGYASWF.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/how-it-works/driver": { "id": "routes/how-it-works/driver", "parentId": "root", "path": "how-it-works/driver", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/how-it-works/driver-SLYJVCJB.js", "imports": ["/build/_shared/chunk-C7EPAFOV.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/how-it-works/index": { "id": "routes/how-it-works/index", "parentId": "root", "path": "how-it-works", "index": true, "caseSensitive": void 0, "module": "/build/routes/how-it-works/index-E2VRYGOC.js", "imports": ["/build/_shared/chunk-C7EPAFOV.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-B7R3ZEUS.js", "imports": ["/build/_shared/chunk-2LU3WT75.js"], "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-D63D9A43.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/driver-requirements": {
    id: "routes/driver-requirements",
    parentId: "root",
    path: "driver-requirements",
    index: void 0,
    caseSensitive: void 0,
    module: driver_requirements_exports
  },
  "routes/how-it-works/driver": {
    id: "routes/how-it-works/driver",
    parentId: "root",
    path: "how-it-works/driver",
    index: void 0,
    caseSensitive: void 0,
    module: driver_exports
  },
  "routes/how-it-works/index": {
    id: "routes/how-it-works/index",
    parentId: "root",
    path: "how-it-works",
    index: true,
    caseSensitive: void 0,
    module: how_it_works_exports
  },
  "routes/business": {
    id: "routes/business",
    parentId: "root",
    path: "business",
    index: void 0,
    caseSensitive: void 0,
    module: business_exports
  },
  "routes/contact": {
    id: "routes/contact",
    parentId: "root",
    path: "contact",
    index: void 0,
    caseSensitive: void 0,
    module: contact_exports
  },
  "routes/about": {
    id: "routes/about",
    parentId: "root",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: about_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};

// server.js
function getLoadContext(event, context) {
  let rawAuthorizationString;
  let netlifyGraphToken;
  if (event.authlifyToken != null) {
    netlifyGraphToken = event.authlifyToken;
  }
  let authHeader = event.headers["authorization"];
  let graphSignatureHeader = event.headers["x-netlify-graph-signature"];
  if (authHeader != null && /Bearer /gi.test(authHeader)) {
    rawAuthorizationString = authHeader.split(" ")[1];
  }
  let loadContext = {
    clientNetlifyGraphAccessToken: rawAuthorizationString,
    netlifyGraphToken,
    netlifyGraphSignature: graphSignatureHeader
  };
  Object.keys(loadContext).forEach((key) => {
    if (loadContext[key] == null) {
      delete loadContext[key];
    }
  });
  return loadContext;
}
var handler = (0, import_netlify.createRequestHandler)({
  build: server_build_exports,
  getLoadContext,
  mode: "production"
});
module.exports = __toCommonJS(server_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
/**
 * @remix-run/node v1.3.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.3.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.3.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
