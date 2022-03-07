var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[Object.keys(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[Object.keys(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  __markAsModule(target);
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && key !== "default")
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toModule = (module2) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", module2 && module2.__esModule && "default" in module2 ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toModule(require("react"));
  }
});

// node_modules/remix/client.js
var require_client = __commonJS({
  "node_modules/remix/client.js"(exports) {
    init_react();
    "use strict";
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

// node_modules/remix/server.js
var require_server = __commonJS({
  "node_modules/remix/server.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
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
  }
});

// node_modules/remix/platform.js
var require_platform = __commonJS({
  "node_modules/remix/platform.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
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
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    init_react();
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var client = require_client();
    var server = require_server();
    var platform = require_platform();
    Object.keys(client).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return client[k];
          }
        });
    });
    Object.keys(server).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return server[k];
          }
        });
    });
    Object.keys(platform).forEach(function(k) {
      if (k !== "default" && !exports.hasOwnProperty(k))
        Object.defineProperty(exports, k, {
          enumerable: true,
          get: function() {
            return platform[k];
          }
        });
    });
  }
});

// <stdin>
__export(exports, {
  assets: () => import_assets.default,
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
var import_server = __toModule(require("react-dom/server"));
var import_remix = __toModule(require_remix());
var import_styled_components = __toModule(require("styled-components"));
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

// route-module:C:\Users\Augustine Ogiza\Documents\Development\react\wikki\app\root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
init_react();
var import_remix2 = __toModule(require_remix());

// node_modules/react-toastify/dist/ReactToastify.css
var ReactToastify_default = "/build/_assets/ReactToastify-XWSWQFLW.css";

// app/index.css
var app_default = "/build/_assets/index-GCB4E4ZP.css";

// route-module:C:\Users\Augustine Ogiza\Documents\Development\react\wikki\app\root.tsx
var import_react_toastify = __toModule(require("react-toastify"));

// app/components/Navbar.tsx
init_react();
var import_react = __toModule(require("react"));
var Navbar = () => {
  return /* @__PURE__ */ import_react.default.createElement("div", null);
};
var Navbar_default = Navbar;

// app/components/Footer.tsx
init_react();
var import_react2 = __toModule(require("react"));
var Footer = () => {
  return /* @__PURE__ */ import_react2.default.createElement("div", null);
};
var Footer_default = Footer;

// route-module:C:\Users\Augustine Ogiza\Documents\Development\react\wikki\app\root.tsx
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
    {
      rel: "icon",
      href: "/favicon.png",
      type: "image/png"
    }
  ];
};
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "en"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(import_remix2.Meta, null), /* @__PURE__ */ React.createElement(import_remix2.Links, null), typeof document === "undefined" ? "__STYLES__" : null), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_react_toastify.ToastContainer, {
    position: "top-right",
    autoClose: 5e3,
    hideProgressBar: true,
    newestOnTop: false,
    closeOnClick: true,
    rtl: false,
    pauseOnFocusLoss: true,
    draggable: true,
    pauseOnHover: true
  }), /* @__PURE__ */ React.createElement(Navbar_default, null), /* @__PURE__ */ React.createElement(import_remix2.Outlet, null), /* @__PURE__ */ React.createElement(Footer_default, null), /* @__PURE__ */ React.createElement(import_remix2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix2.Scripts, null), /* @__PURE__ */ React.createElement(import_remix2.LiveReload, null)));
}

// route-module:C:\Users\Augustine Ogiza\Documents\Development\react\wikki\app\routes\driver-requirements.tsx
var driver_requirements_exports = {};
__export(driver_requirements_exports, {
  default: () => driver_requirements_default
});
init_react();
var import_react8 = __toModule(require("react"));
var import_styled_components7 = __toModule(require("styled-components"));

// app/components/driver/DriverAdvantage.tsx
init_react();
var import_react3 = __toModule(require("react"));
var DriverAdvantage = () => {
  return /* @__PURE__ */ import_react3.default.createElement("div", null);
};
var DriverAdvantage_default = DriverAdvantage;

// app/components/driver/DriverHero.tsx
init_react();
var import_react4 = __toModule(require("react"));
var import_styled_components3 = __toModule(require("styled-components"));

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

// app/styles/TextStyles.tsx
init_react();
var import_styled_components2 = __toModule(require("styled-components"));
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

// app/components/driver/DriverHero.tsx
var DriverHero = () => {
  return /* @__PURE__ */ import_react4.default.createElement(Body, null, /* @__PURE__ */ import_react4.default.createElement(Cover, null, /* @__PURE__ */ import_react4.default.createElement(DriverTitle, null, "Get in the driver\u2019s seat and get paid"), /* @__PURE__ */ import_react4.default.createElement(DriverText, null, "Make the most of your time on the road on the platform with the largest network of active riders.")));
};
var Body = import_styled_components3.default.section`
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
  padding: 16px;
  background: ${WikkiTheme.white};
  @media only screen and (max-width: 650px) {
    min-height: 350px;
  }
`;
var Cover = import_styled_components3.default.div`
  color: ${WikkiTheme.black};
  max-width: 500px;
  width: 100%;
  height: 100%;
  margin: 24px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
var DriverTitle = (0, import_styled_components3.default)(Header2)`
  text-align: center;
`;
var DriverText = (0, import_styled_components3.default)(Body3)`
  text-align: center;
  margin: 8px 0;
`;
var DriverHero_default = DriverHero;

// app/components/driver/DriverMessage.tsx
init_react();
var import_react5 = __toModule(require("react"));
var import_styled_components4 = __toModule(require("styled-components"));
var DriverMessage = () => {
  return /* @__PURE__ */ import_react5.default.createElement(Body5, null, /* @__PURE__ */ import_react5.default.createElement(Cover2, null, /* @__PURE__ */ import_react5.default.createElement(RideText, null, "Ride with us")), /* @__PURE__ */ import_react5.default.createElement(Cover2, null, /* @__PURE__ */ import_react5.default.createElement(RideText, null, "Ride with us")), /* @__PURE__ */ import_react5.default.createElement(Cover2, null, /* @__PURE__ */ import_react5.default.createElement(RideText, null, "Ride with us")), /* @__PURE__ */ import_react5.default.createElement(Cover2, null, /* @__PURE__ */ import_react5.default.createElement(RideText, null, "Ride with us")), /* @__PURE__ */ import_react5.default.createElement(Cover2, null, /* @__PURE__ */ import_react5.default.createElement(RideText, null, "Ride with us")), /* @__PURE__ */ import_react5.default.createElement(Cover2, null, /* @__PURE__ */ import_react5.default.createElement(RideText, null, "Ride with us")), /* @__PURE__ */ import_react5.default.createElement(Cover2, null, /* @__PURE__ */ import_react5.default.createElement(RideText, null, "Ride with us")), /* @__PURE__ */ import_react5.default.createElement(Cover2, null, /* @__PURE__ */ import_react5.default.createElement(RideText, null, "Ride with us")), /* @__PURE__ */ import_react5.default.createElement(Cover2, null, /* @__PURE__ */ import_react5.default.createElement(RideText, null, "Ride with us")));
};
var Body5 = import_styled_components4.default.div`
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
var animation = import_styled_components4.keyframes`

 0% {
    transform: translateZ(0);
  }
  to {
    transform: translate3d(-100%, 0, 0);
  }

`;
var Cover2 = import_styled_components4.default.div`
  animation: ${animation} 15s linear infinite;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
var RideText = (0, import_styled_components4.default)(LargeHeader)`
  white-space: nowrap;
  margin: 40px;
`;
var DriverMessage_default = DriverMessage;

// app/components/driver/DriverRequirements.tsx
init_react();
var import_react7 = __toModule(require("react"));
var import_styled_components6 = __toModule(require("styled-components"));

// app/components/driver/DriverAccordion.tsx
init_react();
var import_react6 = __toModule(require("react"));
var import_fi = __toModule(require("react-icons/fi"));
var import_styled_components5 = __toModule(require("styled-components"));
var DriverAccordion = (props) => {
  const { number, active, text, content, click } = props;
  return /* @__PURE__ */ import_react6.default.createElement(Body6, {
    onClick: () => click(number)
  }, /* @__PURE__ */ import_react6.default.createElement(Cover3, null, /* @__PURE__ */ import_react6.default.createElement(DriverNumber, null, /* @__PURE__ */ import_react6.default.createElement(NumberText, null, number)), /* @__PURE__ */ import_react6.default.createElement(DriverBody, null, /* @__PURE__ */ import_react6.default.createElement(DriverContent, null, text), /* @__PURE__ */ import_react6.default.createElement(DriverPara, {
    active
  }, content)), /* @__PURE__ */ import_react6.default.createElement(DriverIcon, null, active ? /* @__PURE__ */ import_react6.default.createElement(DriverDown, null) : /* @__PURE__ */ import_react6.default.createElement(DriverUp, null))));
};
var Body6 = import_styled_components5.default.div`
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
var Cover3 = import_styled_components5.default.div`
  display: grid;
  grid-template-columns: 48px auto 32px;
  grid-gap: 16px;
  gap: 16px;
  transition: 0.4s ease-in-out;
`;
var DriverNumber = import_styled_components5.default.div`
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
var NumberText = (0, import_styled_components5.default)(Header5)``;
var DriverBody = import_styled_components5.default.div`
  display: flex;
  flex-direction: column;
  transition: 0.4s ease-in-out;
`;
var DriverContent = (0, import_styled_components5.default)(Header5)`
  transition: 0.4s ease-in-out;
`;
var DriverPara = (0, import_styled_components5.default)(Body4)`
  margin: 8px 0;
  transition: 0.4s ease-in-out;
  height: ${(props) => props.active ? "100%" : "0px"};
  display: ${(props) => props.active ? "flex" : "none"};
`;
var DriverIcon = import_styled_components5.default.div`
  transition: 0.4s ease-in-out;
`;
var DriverUp = (0, import_styled_components5.default)(import_fi.FiChevronUp)`
  height: 24px;
  width: 24px;
  transition: 0.4s ease-in-out;
`;
var DriverDown = (0, import_styled_components5.default)(import_fi.FiChevronDown)`
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
  const [selected, setSelected] = (0, import_react7.useState)(1);
  const selectRequirement = (number) => {
    if (selected === number) {
      return setSelected(null);
    }
    setSelected(number);
  };
  return /* @__PURE__ */ import_react7.default.createElement(Body7, null, /* @__PURE__ */ import_react7.default.createElement(Cover4, null, /* @__PURE__ */ import_react7.default.createElement(DriverCover, null, " ", /* @__PURE__ */ import_react7.default.createElement(DriverTitle2, null, "Driver\u2019s requirement"), /* @__PURE__ */ import_react7.default.createElement(DriverText2, null, "Wikki is a great way to be your own boss and make money.")), /* @__PURE__ */ import_react7.default.createElement(DriverGrid, null, /* @__PURE__ */ import_react7.default.createElement(DriverNeeds, null, requirementData.map((data) => /* @__PURE__ */ import_react7.default.createElement(DriverAccordion_default, {
    key: data.id,
    number: data.id,
    text: data.title,
    content: data.text,
    click: () => selectRequirement(data.id),
    active: data.id === selected ? true : false
  }))), /* @__PURE__ */ import_react7.default.createElement(DriverImage, null, /* @__PURE__ */ import_react7.default.createElement(DriverPhoto, {
    src: driver2_default,
    alt: "wikki"
  })))));
};
var Body7 = import_styled_components6.default.section`
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
var Cover4 = import_styled_components6.default.div`
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
var DriverCover = import_styled_components6.default.div`
  display: flex;
  flex-direction: column;
  max-width: 380px;
  width: 100%;
  margin: 80px 0;
`;
var DriverTitle2 = (0, import_styled_components6.default)(Header2)`
  text-align: left;
`;
var DriverText2 = (0, import_styled_components6.default)(Body3)`
  text-align: left;
  margin: 8px 0;
`;
var DriverGrid = import_styled_components6.default.div`
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
var DriverNeeds = import_styled_components6.default.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
`;
var DriverImage = import_styled_components6.default.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  justify-content: center;
`;
var DriverPhoto = import_styled_components6.default.img`
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

// route-module:C:\Users\Augustine Ogiza\Documents\Development\react\wikki\app\routes\driver-requirements.tsx
var driver = () => {
  return /* @__PURE__ */ import_react8.default.createElement(Body8, null, /* @__PURE__ */ import_react8.default.createElement(DriverHero_default, null), /* @__PURE__ */ import_react8.default.createElement(DriverAdvantage_default, null), /* @__PURE__ */ import_react8.default.createElement(DriverMessage_default, null), /* @__PURE__ */ import_react8.default.createElement(DriverRequirements_default, null));
};
var Body8 = import_styled_components7.default.div``;
var driver_requirements_default = driver;

// route-module:C:\Users\Augustine Ogiza\Documents\Development\react\wikki\app\routes\how-it-works\driver.tsx
var driver_exports = {};
__export(driver_exports, {
  default: () => driver_default
});
init_react();
var import_react9 = __toModule(require("react"));
var import_styled_components8 = __toModule(require("styled-components"));

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

// route-module:C:\Users\Augustine Ogiza\Documents\Development\react\wikki\app\routes\how-it-works\driver.tsx
var import_remix3 = __toModule(require_remix());
var WorksDriver = () => {
  return /* @__PURE__ */ import_react9.default.createElement(Body9, null, /* @__PURE__ */ import_react9.default.createElement(Cover5, null, /* @__PURE__ */ import_react9.default.createElement(WorksSelector, null, /* @__PURE__ */ import_react9.default.createElement(Selector, null, /* @__PURE__ */ import_react9.default.createElement(Driver, {
    to: "/how-it-works"
  }, /* @__PURE__ */ import_react9.default.createElement(SelectorText, null, "Rider ")), /* @__PURE__ */ import_react9.default.createElement(User, {
    to: "/how-it-works/driver"
  }, /* @__PURE__ */ import_react9.default.createElement(SelectorText, null, "Driver")))), /* @__PURE__ */ import_react9.default.createElement(WorksRow, null, /* @__PURE__ */ import_react9.default.createElement(TopRow, null, /* @__PURE__ */ import_react9.default.createElement(DownloadSection, null, /* @__PURE__ */ import_react9.default.createElement(DownloadCover, null, /* @__PURE__ */ import_react9.default.createElement(DownloadContent, null, /* @__PURE__ */ import_react9.default.createElement(DownloadNumber, null, /* @__PURE__ */ import_react9.default.createElement(NumberText2, null, "1")), /* @__PURE__ */ import_react9.default.createElement(DownloadText, null, /* @__PURE__ */ import_react9.default.createElement(DownloadTitle, null, "Download the app and sign up"), /* @__PURE__ */ import_react9.default.createElement(Downloadbody, null, "You can drive and make as much as you want. And, the more you drive, the more you could make. Plus, your fares get automatically deposited weekly."))), /* @__PURE__ */ import_react9.default.createElement(DownloadApp, null, /* @__PURE__ */ import_react9.default.createElement(AppImage, {
    src: app_default2,
    alt: "use wikki my wikki"
  }))))), /* @__PURE__ */ import_react9.default.createElement(BottomRow, null, /* @__PURE__ */ import_react9.default.createElement(SecondRow, null, /* @__PURE__ */ import_react9.default.createElement(SecondMask, {
    src: icon_default,
    alt: "use wikki my wikki"
  }), /* @__PURE__ */ import_react9.default.createElement(BottomCover, null, /* @__PURE__ */ import_react9.default.createElement(SecondContent, null, /* @__PURE__ */ import_react9.default.createElement(SecondNumber, null, /* @__PURE__ */ import_react9.default.createElement(SecondText, null, "2")), /* @__PURE__ */ import_react9.default.createElement(SecondDownload, null, /* @__PURE__ */ import_react9.default.createElement(SecondTitle, null, "Pick up order, and deliver"), /* @__PURE__ */ import_react9.default.createElement(SecondPara, null, "You can drive and make as much as you want. And, the more you drive, the more you could make. Plus, your fares get automatically deposited weekly."))), /* @__PURE__ */ import_react9.default.createElement(SecondImage, null, /* @__PURE__ */ import_react9.default.createElement(SecondLustration, {
    src: route_default,
    alt: "mywikki use wikki"
  })))), " ", /* @__PURE__ */ import_react9.default.createElement(ThirdRow, null, /* @__PURE__ */ import_react9.default.createElement(ThirdMask, {
    src: bave_default,
    alt: "use wikki my wikki"
  }), /* @__PURE__ */ import_react9.default.createElement(ThirdBottomCover, null, /* @__PURE__ */ import_react9.default.createElement(ThirdContent, null, /* @__PURE__ */ import_react9.default.createElement(ThirdNumber, null, /* @__PURE__ */ import_react9.default.createElement(ThirdText, null, "3")), /* @__PURE__ */ import_react9.default.createElement(ThirdDownload, null, /* @__PURE__ */ import_react9.default.createElement(ThirdTitle, null, "Get paid and cashout"), /* @__PURE__ */ import_react9.default.createElement(ThirdPara, null, "You can drive and make as much as you want. And, the more you drive, the more you could make. Plus, your fares get automatically deposited weekly."))), /* @__PURE__ */ import_react9.default.createElement(ThirdImage, null, /* @__PURE__ */ import_react9.default.createElement(ThirdLustration, {
    src: pay_default,
    alt: "mywikki use wikki"
  }))))))));
};
var Body9 = import_styled_components8.default.section`
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
var Cover5 = import_styled_components8.default.div`
  color: ${WikkiTheme.black};
  max-width: 1100px;
  width: 100%;
  margin: 16px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
var WorksSelector = import_styled_components8.default.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
var Selector = import_styled_components8.default.div`
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
var User = (0, import_styled_components8.default)(import_remix3.Link)`
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
var Driver = (0, import_styled_components8.default)(import_remix3.Link)`
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
var SelectorText = (0, import_styled_components8.default)(SubTitle)``;
var WorksRow = import_styled_components8.default.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
var TopRow = import_styled_components8.default.div`
  width: 100%;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
var BottomRow = import_styled_components8.default.div`
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
var DownloadSection = import_styled_components8.default.div`
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
var DownloadCover = import_styled_components8.default.div`
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
var DownloadContent = import_styled_components8.default.div`
  display: grid;
  grid-template-columns: 80px auto;
  grid-gap: 32px;
  gap: 32px;
  width: 100%;
  @media only screen and (max-width: 650px) {
    grid-template-columns: 48px auto;
  }
`;
var DownloadNumber = import_styled_components8.default.span`
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
var NumberText2 = (0, import_styled_components8.default)(Header5)``;
var DownloadText = import_styled_components8.default.div`
  display: flex;
  flex-direction: column;
`;
var DownloadTitle = (0, import_styled_components8.default)(Header3)``;
var Downloadbody = (0, import_styled_components8.default)(Body3)`
  margin: 24px 0;
  @media only screen and (max-width: 650px) {
    margin: 16px 0;
  }
`;
var DownloadApp = import_styled_components8.default.div`
  height: 721px;
  max-width: 361px;
  width: 100%;
  margin: 0 auto;
`;
var AppImage = import_styled_components8.default.img`
  width: 100%;
  height: 100%;
`;
var SecondRow = import_styled_components8.default.div`
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
var SecondMask = import_styled_components8.default.img`
  height: 250px;
  width: 213px;
  right: 4px;
  top: -12px;
  position: absolute;
`;
var ThirdMask = import_styled_components8.default.img`
  left: -40px;
  height: 277px;
  width: 448px;
  top: -32px;
  position: absolute;
`;
var BottomCover = import_styled_components8.default.div`
  max-width: 481px;
  width: 100%;
  position: relative;
  z-index: 2;
  margin: 48px auto 0 auto;
  @media only screen and (max-width: 650px) {
    margin: 32px auto 0 auto;
  }
`;
var SecondContent = import_styled_components8.default.div`
  display: grid;
  grid-template-columns: 80px auto;
  grid-gap: 32px;
  gap: 32px;
  width: 100%;
  @media only screen and (max-width: 650px) {
    grid-template-columns: 48px auto;
  }
`;
var SecondNumber = import_styled_components8.default.div`
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
var SecondText = import_styled_components8.default.div`
  display: flex;
  flex-direction: column;
`;
var SecondTitle = (0, import_styled_components8.default)(Header3)`
  color: ${WikkiTheme.black};
  span {
    color: ${WikkiTheme.white};
  }
`;
var SecondPara = (0, import_styled_components8.default)(Body3)`
  margin: 24px 0;
  @media only screen and (max-width: 650px) {
    margin: 16px 0;
  }
`;
var SecondDownload = import_styled_components8.default.div`
  display: flex;
  flex-direction: column;
`;
var SecondImage = import_styled_components8.default.div`
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
var SecondLustration = import_styled_components8.default.img`
  height: 100%;
  width: 100%;
  min-height: 250px;
  max-height: 441px;
  max-width: 441px;
`;
var ThirdRow = import_styled_components8.default.div`
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
var ThirdBottomCover = import_styled_components8.default.div`
  max-width: 481px;
  width: 100%;
  position: relative;
  z-index: 2;
  margin: 48px auto 0 auto;
  @media only screen and (max-width: 650px) {
    margin: 32px auto 0 auto;
  }
`;
var ThirdContent = import_styled_components8.default.div`
  display: grid;
  grid-template-columns: 80px auto;
  grid-gap: 32px;
  gap: 32px;
  width: 100%;
  @media only screen and (max-width: 650px) {
    grid-template-columns: 48px auto;
  }
`;
var ThirdNumber = import_styled_components8.default.div`
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
var ThirdText = import_styled_components8.default.div`
  display: flex;
  flex-direction: column;
  color: ${WikkiTheme.white};
`;
var ThirdPara = (0, import_styled_components8.default)(Body3)`
  margin: 24px 0;
  color: ${WikkiTheme.white};
  @media only screen and (max-width: 650px) {
    margin: 16px 0;
  }
`;
var ThirdDownload = import_styled_components8.default.div``;
var ThirdTitle = (0, import_styled_components8.default)(Header3)`
  color: ${WikkiTheme.white};
`;
var ThirdImage = import_styled_components8.default.div`
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
var ThirdLustration = import_styled_components8.default.img`
  height: 100%;
  width: 100%;
`;
var driver_default = WorksDriver;

// route-module:C:\Users\Augustine Ogiza\Documents\Development\react\wikki\app\routes\how-it-works\index.tsx
var how_it_works_exports = {};
__export(how_it_works_exports, {
  default: () => how_it_works_default
});
init_react();
var import_react10 = __toModule(require("react"));
var import_styled_components9 = __toModule(require("styled-components"));

// app/images/mask.svg
var mask_default = "/build/_assets/mask-OMEBINKE.svg";

// route-module:C:\Users\Augustine Ogiza\Documents\Development\react\wikki\app\routes\how-it-works\index.tsx
var import_remix4 = __toModule(require_remix());
var index = () => {
  return /* @__PURE__ */ import_react10.default.createElement(Body10, null, /* @__PURE__ */ import_react10.default.createElement(Cover6, null, /* @__PURE__ */ import_react10.default.createElement(WorksSelector2, null, /* @__PURE__ */ import_react10.default.createElement(Selector2, null, /* @__PURE__ */ import_react10.default.createElement(User2, {
    to: "/how-it-works"
  }, /* @__PURE__ */ import_react10.default.createElement(SelectorText2, null, "Rider")), /* @__PURE__ */ import_react10.default.createElement(Driver2, {
    to: "/how-it-works/driver"
  }, /* @__PURE__ */ import_react10.default.createElement(SelectorText2, null, "Driver")))), /* @__PURE__ */ import_react10.default.createElement(WorksRow2, null, /* @__PURE__ */ import_react10.default.createElement(TopRow2, null, /* @__PURE__ */ import_react10.default.createElement(DownloadSection2, null, /* @__PURE__ */ import_react10.default.createElement(DownloadCover2, null, /* @__PURE__ */ import_react10.default.createElement(DownloadContent2, null, /* @__PURE__ */ import_react10.default.createElement(DownloadNumber2, null, /* @__PURE__ */ import_react10.default.createElement(NumberText3, null, "1")), /* @__PURE__ */ import_react10.default.createElement(DownloadText2, null, /* @__PURE__ */ import_react10.default.createElement(DownloadTitle2, null, "Download the app and sign up"), /* @__PURE__ */ import_react10.default.createElement(Downloadbody2, null, "You can drive and make as much as you want. And, the more you drive, the more you could make. Plus, your fares get automatically deposited weekly."))), /* @__PURE__ */ import_react10.default.createElement(DownloadApp2, null, /* @__PURE__ */ import_react10.default.createElement(AppImage2, {
    src: app_default2,
    alt: "use wikki my wikki"
  }))))), /* @__PURE__ */ import_react10.default.createElement(BottomRow2, null, /* @__PURE__ */ import_react10.default.createElement(SecondRow2, null, /* @__PURE__ */ import_react10.default.createElement(SecondMask2, {
    src: mask_default,
    alt: "use wikki my wikki"
  }), /* @__PURE__ */ import_react10.default.createElement(BottomCover2, null, /* @__PURE__ */ import_react10.default.createElement(SecondContent2, null, /* @__PURE__ */ import_react10.default.createElement(SecondNumber2, null, /* @__PURE__ */ import_react10.default.createElement(SecondText2, null, "2")), /* @__PURE__ */ import_react10.default.createElement(SecondDownload2, null, /* @__PURE__ */ import_react10.default.createElement(SecondTitle2, null, "Request a pick", /* @__PURE__ */ import_react10.default.createElement("span", null, "up an"), "d choose destina", /* @__PURE__ */ import_react10.default.createElement("span", null, "tio"), "n"), /* @__PURE__ */ import_react10.default.createElement(SecondPara2, null, "You can drive and make as much as you want. And, the more you drive, the more you could make. Plus, your fares get automatically deposited weekly."))), /* @__PURE__ */ import_react10.default.createElement(SecondImage2, null, /* @__PURE__ */ import_react10.default.createElement(SecondLustration2, {
    src: route_default,
    alt: "mywikki use wikki"
  })))), " ", /* @__PURE__ */ import_react10.default.createElement(ThirdRow2, null, /* @__PURE__ */ import_react10.default.createElement(ThirdMask2, {
    src: bave_default,
    alt: "use wikki my wikki"
  }), /* @__PURE__ */ import_react10.default.createElement(ThirdBottomCover2, null, /* @__PURE__ */ import_react10.default.createElement(ThirdContent2, null, /* @__PURE__ */ import_react10.default.createElement(ThirdNumber2, null, /* @__PURE__ */ import_react10.default.createElement(ThirdText2, null, "3")), /* @__PURE__ */ import_react10.default.createElement(ThirdDownload2, null, /* @__PURE__ */ import_react10.default.createElement(ThirdTitle2, null, "Get item delivered and make payment"), /* @__PURE__ */ import_react10.default.createElement(ThirdPara2, null, "You can drive and make as much as you want. And, the more you drive, the more you could make. Plus, your fares get automatically deposited weekly."))), /* @__PURE__ */ import_react10.default.createElement(ThirdImage2, null, /* @__PURE__ */ import_react10.default.createElement(ThirdLustration2, {
    src: pay_default,
    alt: "mywikki use wikki"
  }))))))));
};
var Body10 = import_styled_components9.default.section`
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
var Cover6 = import_styled_components9.default.div`
  color: ${WikkiTheme.black};
  max-width: 1100px;
  width: 100%;
  margin: 16px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
var WorksSelector2 = import_styled_components9.default.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
var Selector2 = import_styled_components9.default.div`
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
var User2 = (0, import_styled_components9.default)(import_remix4.Link)`
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
var Driver2 = (0, import_styled_components9.default)(import_remix4.Link)`
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
var SelectorText2 = (0, import_styled_components9.default)(SubTitle)``;
var WorksRow2 = import_styled_components9.default.div`
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
var TopRow2 = import_styled_components9.default.div`
  width: 100%;
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
var BottomRow2 = import_styled_components9.default.div`
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
var DownloadSection2 = import_styled_components9.default.div`
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
var DownloadCover2 = import_styled_components9.default.div`
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
var DownloadContent2 = import_styled_components9.default.div`
  display: grid;
  grid-template-columns: 80px auto;
  grid-gap: 32px;
  gap: 32px;
  width: 100%;
  @media only screen and (max-width: 650px) {
    grid-template-columns: 48px auto;
  }
`;
var DownloadNumber2 = import_styled_components9.default.span`
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
var NumberText3 = (0, import_styled_components9.default)(Header5)``;
var DownloadText2 = import_styled_components9.default.div`
  display: flex;
  flex-direction: column;
`;
var DownloadTitle2 = (0, import_styled_components9.default)(Header3)``;
var Downloadbody2 = (0, import_styled_components9.default)(Body3)`
  margin: 24px 0;
  @media only screen and (max-width: 650px) {
    margin: 16px 0;
  }
`;
var DownloadApp2 = import_styled_components9.default.div`
  height: 721px;
  max-width: 361px;
  width: 100%;
  margin: 0 auto;
`;
var AppImage2 = import_styled_components9.default.img`
  width: 100%;
  height: 100%;
`;
var SecondRow2 = import_styled_components9.default.div`
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
var SecondMask2 = import_styled_components9.default.img`
  height: 250px;
  width: 213px;
  right: 4px;
  top: -48px;
  position: absolute;
`;
var ThirdMask2 = import_styled_components9.default.img`
  left: -40px;
  height: 277px;
  width: 448px;
  top: -32px;
  position: absolute;
`;
var BottomCover2 = import_styled_components9.default.div`
  max-width: 481px;
  width: 100%;
  position: relative;
  z-index: 2;
  margin: 48px auto 0 auto;
  @media only screen and (max-width: 650px) {
    margin: 32px auto 0 auto;
  }
`;
var SecondContent2 = import_styled_components9.default.div`
  display: grid;
  grid-template-columns: 80px auto;
  grid-gap: 32px;
  gap: 32px;
  width: 100%;
  @media only screen and (max-width: 650px) {
    grid-template-columns: 48px auto;
  }
`;
var SecondNumber2 = import_styled_components9.default.div`
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
var SecondText2 = import_styled_components9.default.div`
  display: flex;
  flex-direction: column;
`;
var SecondTitle2 = (0, import_styled_components9.default)(Header3)`
  color: ${WikkiTheme.black};
  span {
    color: ${WikkiTheme.white};
  }
`;
var SecondPara2 = (0, import_styled_components9.default)(Body3)`
  margin: 24px 0;
  @media only screen and (max-width: 650px) {
    margin: 16px 0;
  }
`;
var SecondDownload2 = import_styled_components9.default.div`
  display: flex;
  flex-direction: column;
`;
var SecondImage2 = import_styled_components9.default.div`
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
var SecondLustration2 = import_styled_components9.default.img`
  height: 100%;
  width: 100%;
  min-height: 250px;
  max-height: 441px;
  max-width: 441px;
`;
var ThirdRow2 = import_styled_components9.default.div`
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
var ThirdBottomCover2 = import_styled_components9.default.div`
  max-width: 481px;
  width: 100%;
  position: relative;
  z-index: 2;
  margin: 48px auto 0 auto;
  @media only screen and (max-width: 650px) {
    margin: 32px auto 0 auto;
  }
`;
var ThirdContent2 = import_styled_components9.default.div`
  display: grid;
  grid-template-columns: 80px auto;
  grid-gap: 32px;
  gap: 32px;
  width: 100%;
  @media only screen and (max-width: 650px) {
    grid-template-columns: 48px auto;
  }
`;
var ThirdNumber2 = import_styled_components9.default.div`
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
var ThirdText2 = import_styled_components9.default.div`
  display: flex;
  flex-direction: column;
  color: ${WikkiTheme.white};
`;
var ThirdPara2 = (0, import_styled_components9.default)(Body3)`
  margin: 24px 0;
  color: ${WikkiTheme.white};
  @media only screen and (max-width: 650px) {
    margin: 16px 0;
  }
`;
var ThirdDownload2 = import_styled_components9.default.div``;
var ThirdTitle2 = (0, import_styled_components9.default)(Header3)`
  color: ${WikkiTheme.white};
`;
var ThirdImage2 = import_styled_components9.default.div`
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
var ThirdLustration2 = import_styled_components9.default.img`
  height: 100%;
  width: 100%;
`;
var how_it_works_default = index;

// route-module:C:\Users\Augustine Ogiza\Documents\Development\react\wikki\app\routes\contact.tsx
var contact_exports = {};
__export(contact_exports, {
  default: () => contact_default,
  meta: () => meta2
});
init_react();
var import_react13 = __toModule(require("react"));
var import_styled_components14 = __toModule(require("styled-components"));

// app/components/contact/ContactForm.tsx
init_react();
var import_react11 = __toModule(require("react"));
var import_styled_components12 = __toModule(require("styled-components"));
var import_formik2 = __toModule(require("formik"));
var Yup = __toModule(require("yup"));

// app/styles/InputStyles.tsx
init_react();
var import_formik = __toModule(require("formik"));
var import_styled_components10 = __toModule(require("styled-components"));
var TextInput = (0, import_styled_components10.default)(import_formik.Field)`
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
var TextArea = (0, import_styled_components10.default)(import_formik.Field)`
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

// app/styles/ButtonStyles.tsx
init_react();
var import_styled_components11 = __toModule(require("styled-components"));
var import_remix5 = __toModule(require_remix());
var MainButton = import_styled_components11.default.button`
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
var PrimaryButton = import_styled_components11.default.button`
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
var SecondaryButton = import_styled_components11.default.button`
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
var TertiaryButton = import_styled_components11.default.button`
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
var FormButton = import_styled_components11.default.button`
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
var CaseButton = (0, import_styled_components11.default)(import_remix5.Link)`
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

// app/components/contact/ContactForm.tsx
var ContactForm = () => {
  const ContactSchema = Yup.object().shape({
    name: Yup.string().required("Required"),
    email: Yup.string().email().required("Required"),
    message: Yup.string().required("Required")
  });
  const [sent, setSent] = (0, import_react11.useState)(false);
  const submitForm = (values, onSubmitProps) => {
    onSubmitProps.setSubmitting(true);
  };
  return /* @__PURE__ */ import_react11.default.createElement(Body11, null, /* @__PURE__ */ import_react11.default.createElement(Cover7, null, /* @__PURE__ */ import_react11.default.createElement(FormTitle, null, "Send us a message"), /* @__PURE__ */ import_react11.default.createElement(import_formik2.Formik, {
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
  }) => /* @__PURE__ */ import_react11.default.createElement(FormForm, null, /* @__PURE__ */ import_react11.default.createElement(FormColumn, null, /* @__PURE__ */ import_react11.default.createElement(FormLabel, {
    htmlFor: "name"
  }, " ", /* @__PURE__ */ import_react11.default.createElement(LabelText, null, "Name")), /* @__PURE__ */ import_react11.default.createElement(FormInput, {
    id: "name",
    value: values.name,
    onChange: handleChange,
    onBlur: handleBlur,
    as: "input",
    type: "text"
  }), errors.name && touched.name && /* @__PURE__ */ import_react11.default.createElement(FormError, null, /* @__PURE__ */ import_react11.default.createElement(FormErrorText, null, "Your name is required"))), /* @__PURE__ */ import_react11.default.createElement(FormColumn, null, /* @__PURE__ */ import_react11.default.createElement(FormLabel, {
    htmlFor: "email"
  }, " ", /* @__PURE__ */ import_react11.default.createElement(LabelText, null, "Email")), /* @__PURE__ */ import_react11.default.createElement(FormInput, {
    id: "email",
    value: values.email,
    onChange: handleChange,
    onBlur: handleBlur,
    as: "input",
    type: "email"
  }), errors.email && touched.email && /* @__PURE__ */ import_react11.default.createElement(FormError, null, /* @__PURE__ */ import_react11.default.createElement(FormErrorText, null, "Your email is required"))), /* @__PURE__ */ import_react11.default.createElement(FormColumn, null, /* @__PURE__ */ import_react11.default.createElement(FormLabel, {
    htmlFor: "message"
  }, " ", /* @__PURE__ */ import_react11.default.createElement(LabelText, null, "Message")), /* @__PURE__ */ import_react11.default.createElement(FormArea, {
    id: "message",
    value: values.message,
    onChange: handleChange,
    onBlur: handleBlur,
    as: "textarea",
    placeholder: "Type your message"
  }), errors.message && touched.message && /* @__PURE__ */ import_react11.default.createElement(FormError, null, /* @__PURE__ */ import_react11.default.createElement(FormErrorText, null, "Your message is required"))), /* @__PURE__ */ import_react11.default.createElement(FormButtonWrap, null, /* @__PURE__ */ import_react11.default.createElement(FormButtonMain, null, "Send"))))));
};
var Body11 = import_styled_components12.default.div`
  width: 100%;
  min-height: 900px;
  background: ${WikkiTheme.snowWhite};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 64px 0;
  padding: 80px 0;
`;
var Cover7 = import_styled_components12.default.div`
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
var FormTitle = (0, import_styled_components12.default)(Header3)`
  margin: 40px 0 56px 0;
  text-align: center;
  @media only screen and (max-width: 650px) {
    margin: 32px 0 40px 0;
  }
`;
var FormForm = (0, import_styled_components12.default)(import_formik2.Form)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;
var FormColumn = import_styled_components12.default.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin: 16px auto;
  max-width: 450px;
`;
var LabelText = (0, import_styled_components12.default)(SubTitle)`
  color: ${WikkiTheme.dark};
  margin: 10px 0;
`;
var FormLabel = import_styled_components12.default.label`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-start;
`;
var FormInput = (0, import_styled_components12.default)(TextInput)``;
var FormArea = (0, import_styled_components12.default)(TextArea)``;
var FormError = import_styled_components12.default.div`
  margin: 10px 0;
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: flex-start;
`;
var FormErrorText = (0, import_styled_components12.default)(SubTitleSmall)`
  color: ${WikkiTheme.red};
`;
var FormButtonWrap = import_styled_components12.default.div`
  margin: 40px 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
var FormButtonMain = (0, import_styled_components12.default)(FormButton)``;
var ContactForm_default = ContactForm;

// app/components/contact/ContactHero.tsx
init_react();
var import_react12 = __toModule(require("react"));
var import_styled_components13 = __toModule(require("styled-components"));
var ContactHero = () => {
  return /* @__PURE__ */ import_react12.default.createElement(Body12, null, /* @__PURE__ */ import_react12.default.createElement(Cover8, null, /* @__PURE__ */ import_react12.default.createElement(ContactHeader, null, /* @__PURE__ */ import_react12.default.createElement(ContactTitle, null, "How can we help?"), /* @__PURE__ */ import_react12.default.createElement(ContactText, null, "Looking for the solution to your logistics needs or answers? Fill out the contact form and we will be in touch."))));
};
var Body12 = import_styled_components13.default.section`
  width: 100%;
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
var Cover8 = import_styled_components13.default.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
var ContactHeader = import_styled_components13.default.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
`;
var ContactTitle = (0, import_styled_components13.default)(Header1)`
  margin: 8px 0;
  text-align: center;
`;
var ContactText = (0, import_styled_components13.default)(Body1)`
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
`;
var ContactHero_default = ContactHero;

// route-module:C:\Users\Augustine Ogiza\Documents\Development\react\wikki\app\routes\contact.tsx
var meta2 = () => {
  return {
    title: "Contact - Use Wikki",
    description: "Real time deliveries"
  };
};
var contact = () => {
  return /* @__PURE__ */ import_react13.default.createElement(Body13, null, /* @__PURE__ */ import_react13.default.createElement(ContactHero_default, null), /* @__PURE__ */ import_react13.default.createElement(ContactForm_default, null));
};
var Body13 = import_styled_components14.default.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;
var contact_default = contact;

// route-module:C:\Users\Augustine Ogiza\Documents\Development\react\wikki\app\routes\about.tsx
var about_exports = {};
__export(about_exports, {
  default: () => about_default
});
init_react();
var import_react18 = __toModule(require("react"));
var import_styled_components19 = __toModule(require("styled-components"));

// app/components/about/AboutDelivery.tsx
init_react();
var import_react14 = __toModule(require("react"));
var import_styled_components15 = __toModule(require("styled-components"));
var AboutDelivery = () => {
  return /* @__PURE__ */ import_react14.default.createElement(Body14, null, /* @__PURE__ */ import_react14.default.createElement(Cover9, null, /* @__PURE__ */ import_react14.default.createElement(RideText2, null, "Delivery made easy")), " ", /* @__PURE__ */ import_react14.default.createElement(Cover9, null, /* @__PURE__ */ import_react14.default.createElement(RideText2, null, "Delivery made easy")), " ", /* @__PURE__ */ import_react14.default.createElement(Cover9, null, /* @__PURE__ */ import_react14.default.createElement(RideText2, null, "Delivery made easy")), " ", /* @__PURE__ */ import_react14.default.createElement(Cover9, null, /* @__PURE__ */ import_react14.default.createElement(RideText2, null, "Delivery made easy")), " ", /* @__PURE__ */ import_react14.default.createElement(Cover9, null, /* @__PURE__ */ import_react14.default.createElement(RideText2, null, "Delivery made easy")), " ", /* @__PURE__ */ import_react14.default.createElement(Cover9, null, /* @__PURE__ */ import_react14.default.createElement(RideText2, null, "Delivery made easy")), " ", /* @__PURE__ */ import_react14.default.createElement(Cover9, null, /* @__PURE__ */ import_react14.default.createElement(RideText2, null, "Delivery made easy")), " ", /* @__PURE__ */ import_react14.default.createElement(Cover9, null, /* @__PURE__ */ import_react14.default.createElement(RideText2, null, "Delivery made easy")), " ", /* @__PURE__ */ import_react14.default.createElement(Cover9, null, /* @__PURE__ */ import_react14.default.createElement(RideText2, null, "Delivery made easy")), " ", /* @__PURE__ */ import_react14.default.createElement(Cover9, null, /* @__PURE__ */ import_react14.default.createElement(RideText2, null, "Delivery made easy")), " ", /* @__PURE__ */ import_react14.default.createElement(Cover9, null, /* @__PURE__ */ import_react14.default.createElement(RideText2, null, "Delivery made easy")));
};
var Body14 = import_styled_components15.default.div`
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
var animation2 = import_styled_components15.keyframes`

 0% {
    transform: translateZ(0);
  }
  to {
    transform: translate3d(-100%, 0, 0);
  }

`;
var Cover9 = import_styled_components15.default.div`
  animation: ${animation2} 15s linear infinite;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
var RideText2 = (0, import_styled_components15.default)(LargeHeader)`
  white-space: nowrap;
  margin: 40px;
`;
var AboutDelivery_default = AboutDelivery;

// app/components/about/AboutDetails.tsx
init_react();
var import_react15 = __toModule(require("react"));
var import_styled_components16 = __toModule(require("styled-components"));

// app/images/user.png
var user_default = "/build/_assets/user-URS5GCDW.png";

// app/components/about/AboutDetails.tsx
var AboutDetails = () => {
  return /* @__PURE__ */ import_react15.default.createElement(Body15, null, /* @__PURE__ */ import_react15.default.createElement(Cover10, null, /* @__PURE__ */ import_react15.default.createElement(DetailsGrid, null, /* @__PURE__ */ import_react15.default.createElement(GridLeft, null, /* @__PURE__ */ import_react15.default.createElement(RideTitle, null, "Waiting is boring"), /* @__PURE__ */ import_react15.default.createElement(RideText3, null, "We know how hard it can be to start building your client base, especially as a student. We built Clutch to be a safe space for students to build out their side-hustles and get support from their classmates.")), /* @__PURE__ */ import_react15.default.createElement(GridRight, null, /* @__PURE__ */ import_react15.default.createElement(GridImage, {
    src: user_default,
    alt: "use wikki"
  })), " "), " ", /* @__PURE__ */ import_react15.default.createElement(DetailsGrid, null, /* @__PURE__ */ import_react15.default.createElement(GridRight, null, /* @__PURE__ */ import_react15.default.createElement(GridImage, {
    src: user_default,
    alt: "use wikki"
  })), /* @__PURE__ */ import_react15.default.createElement(GridLeft, null, /* @__PURE__ */ import_react15.default.createElement(RideTitle, null, "Our Mission"), /* @__PURE__ */ import_react15.default.createElement(RideText3, null, "We know how hard it can be to start building your client base, especially as a student. We built Clutch to be a safe space for students to build out their side-hustles and get support from their classmates.")))));
};
var Body15 = import_styled_components16.default.div`
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
var Cover10 = import_styled_components16.default.div`
  max-width: 1056px;
  width: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
var DetailsGrid = import_styled_components16.default.div`
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
var GridLeft = import_styled_components16.default.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  width: 100%;
`;
var RideTitle = (0, import_styled_components16.default)(Header2)``;
var GridRight = import_styled_components16.default.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
var GridImage = import_styled_components16.default.img`
  max-width: 550px;

  max-height: 630px;
  min-height: 300px;
  height: 100%;
  width: 100%;
`;
var RideText3 = (0, import_styled_components16.default)(Body3)`
  margin: 16px 0;
`;
var AboutDetails_default = AboutDetails;

// app/components/about/AboutHero.tsx
init_react();
var import_react16 = __toModule(require("react"));
var import_styled_components17 = __toModule(require("styled-components"));

// app/images/main.png
var main_default = "/build/_assets/main-WO4APGIB.png";

// app/components/about/AboutHero.tsx
var AboutHero = () => {
  return /* @__PURE__ */ import_react16.default.createElement(Body16, null, /* @__PURE__ */ import_react16.default.createElement(MoreOverlay, null), /* @__PURE__ */ import_react16.default.createElement(Cover11, null, /* @__PURE__ */ import_react16.default.createElement(MoreTitle, null, "ABOUT WIKKI"), /* @__PURE__ */ import_react16.default.createElement(CoverImage, null, /* @__PURE__ */ import_react16.default.createElement(AboutImage, {
    src: main_default,
    alt: "the wikki my wikki"
  })), /* @__PURE__ */ import_react16.default.createElement(CoverDets, null, /* @__PURE__ */ import_react16.default.createElement(CoverTitle, null, "Robust delivery and pickup for Nigeria"), /* @__PURE__ */ import_react16.default.createElement(CoverText, null, "Wikki is a technology company on a mission to power the digital economy in Africa, using open banking as a layer for financial data, identity data, and bank transfer payments for businesses."))));
};
var Body16 = import_styled_components17.default.div`
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
var MoreOverlay = import_styled_components17.default.div`
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
var Cover11 = import_styled_components17.default.div`
  position: relative;
  z-index: 2;
  color: ${WikkiTheme.white};
  max-width: 1232px;
  width: 100%;
  margin: 80px auto;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  @media only screen and (max-width: 650px) {
    margin: 56px auto;
  }
`;
var MoreTitle = (0, import_styled_components17.default)(Header1)`
  margin: 16px 0;
  text-align: left;
  @media only screen and (max-width: 650px) {
    margin: 8px 0;
  }
`;
var CoverImage = import_styled_components17.default.div`
  min-height: 350px;
  max-width: 1232px;
  width: 100%;
  margin: 48px auto;
  @media only screen and (max-width: 650px) {
    min-height: 250px;
    margin: 24px auto;
  }
`;
var AboutImage = import_styled_components17.default.img`
  width: 100%;
  min-height: 350px;
  @media only screen and (max-width: 650px) {
    min-height: 250px;
  }
`;
var CoverDets = import_styled_components17.default.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 800px;
  width: 100%;
  margin: 24px auto;
`;
var CoverTitle = (0, import_styled_components17.default)(Header1)`
  text-align: center;
  color: ${WikkiTheme.black};
`;
var CoverText = (0, import_styled_components17.default)(Body2)`
  text-align: center;
  color: ${WikkiTheme.black};
`;
var AboutHero_default = AboutHero;

// app/components/about/AboutPurpose.tsx
init_react();
var import_react17 = __toModule(require("react"));
var import_styled_components18 = __toModule(require("styled-components"));

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
  return /* @__PURE__ */ import_react17.default.createElement(Body17, null, /* @__PURE__ */ import_react17.default.createElement(MoreOverlay2, null), /* @__PURE__ */ import_react17.default.createElement(Cover12, null, /* @__PURE__ */ import_react17.default.createElement(MoreTitle2, null, "Our Purpose"), /* @__PURE__ */ import_react17.default.createElement(DetailsGrid2, null, purposeData.map((data, index3) => /* @__PURE__ */ import_react17.default.createElement(PurposeRow, null, " ", /* @__PURE__ */ import_react17.default.createElement(PurposeIcon, null, data.icon), /* @__PURE__ */ import_react17.default.createElement(MoreSub, null, data.title), /* @__PURE__ */ import_react17.default.createElement(MoreText, null, data.text))))));
};
var Body17 = import_styled_components18.default.div`
  position: relative;
  z-index: 1;
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
var MoreOverlay2 = import_styled_components18.default.div`
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: rgba(0, 0, 0, 0.5);
`;
var Cover12 = import_styled_components18.default.div`
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
var MoreSub = (0, import_styled_components18.default)(Header5)`
  text-align: left;
`;
var MoreTitle2 = (0, import_styled_components18.default)(Header1)`
  margin: 16px 0;
  text-align: center;
`;
var MoreText = (0, import_styled_components18.default)(Body3)`
  text-align: left;
  margin: 16px 0;
`;
var DetailsGrid2 = import_styled_components18.default.div`
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
var PurposeRow = import_styled_components18.default.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
`;
var PurposeIcon = import_styled_components18.default.span`
  width: 40px;
  height: 40px;
  margin: 32px 0;
`;
var AboutPurpose_default = AboutPurpose;

// route-module:C:\Users\Augustine Ogiza\Documents\Development\react\wikki\app\routes\about.tsx
var about = () => {
  return /* @__PURE__ */ import_react18.default.createElement(Body18, null, /* @__PURE__ */ import_react18.default.createElement(AboutHero_default, null), /* @__PURE__ */ import_react18.default.createElement(AboutPurpose_default, null), /* @__PURE__ */ import_react18.default.createElement(AboutDelivery_default, null), /* @__PURE__ */ import_react18.default.createElement(AboutDetails_default, null));
};
var Body18 = import_styled_components19.default.div``;
var about_default = about;

// route-module:C:\Users\Augustine Ogiza\Documents\Development\react\wikki\app\routes\index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => routes_default
});
init_react();
var import_react22 = __toModule(require("react"));
var import_styled_components22 = __toModule(require("styled-components"));

// app/components/home/DoMore.tsx
init_react();
var import_react19 = __toModule(require("react"));
var import_styled_components20 = __toModule(require("styled-components"));
var DoMore = () => {
  return /* @__PURE__ */ import_react19.default.createElement(Body19, null, /* @__PURE__ */ import_react19.default.createElement(MoreOverlay3, null), /* @__PURE__ */ import_react19.default.createElement(Cover13, null, /* @__PURE__ */ import_react19.default.createElement(MoreSub2, null, "Do more with wikki"), /* @__PURE__ */ import_react19.default.createElement(MoreTitle3, null, "Designed for the next billion users and riders"), /* @__PURE__ */ import_react19.default.createElement(MoreText2, null, "Beautifully easy to use software to accept card payments on your phone, and grow your business anywhere on the planet")));
};
var Body19 = import_styled_components20.default.section`
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
var MoreOverlay3 = import_styled_components20.default.div`
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: rgba(0, 0, 0, 0.5);
`;
var Cover13 = import_styled_components20.default.div`
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
var MoreSub2 = (0, import_styled_components20.default)(Header5)`
  text-align: center;
`;
var MoreTitle3 = (0, import_styled_components20.default)(Header1)`
  margin: 16px 0 24px 0;
  text-align: center;
`;
var MoreText2 = (0, import_styled_components20.default)(Body3)`
  text-align: center;
`;
var DoMore_default = DoMore;

// app/components/home/HomeHero.tsx
init_react();
var import_react20 = __toModule(require("react"));
var HomeHero = () => {
  return /* @__PURE__ */ import_react20.default.createElement("div", null, "HomeHero");
};
var HomeHero_default = HomeHero;

// app/components/home/HomeWaiting.tsx
init_react();
var import_react21 = __toModule(require("react"));
var HomeWaiting = () => {
  return /* @__PURE__ */ import_react21.default.createElement("div", null, "HomeWaiting");
};
var HomeWaiting_default = HomeWaiting;

// app/components/home/UseCases.tsx
init_react();
var import_styled_components21 = __toModule(require("styled-components"));

// app/images/driver.png
var driver_default2 = "/build/_assets/driver-5QCCW63S.png";

// app/components/home/UseCases.tsx
var UseCases = () => {
  return /* @__PURE__ */ React.createElement(Body20, null, /* @__PURE__ */ React.createElement(Cover14, null, /* @__PURE__ */ React.createElement(MoreTitle4, null, "Discover The Wikki Usecases"), /* @__PURE__ */ React.createElement(CaseGrid, null, /* @__PURE__ */ React.createElement(CaseRowUsers, null, " ", /* @__PURE__ */ React.createElement(MoreOverlay4, null), /* @__PURE__ */ React.createElement(RowContent, null, /* @__PURE__ */ React.createElement(CaseTitle, null, "For users "), " ", /* @__PURE__ */ React.createElement(CaseTitle, null, "and companies"), /* @__PURE__ */ React.createElement(CaseButtonLink, {
    to: "/how-it-works"
  }, "Learn more"))), /* @__PURE__ */ React.createElement(CaseRowDrivers, null, " ", /* @__PURE__ */ React.createElement(MoreOverlay4, null), /* @__PURE__ */ React.createElement(RowContent, null, /* @__PURE__ */ React.createElement(CaseTitle, null, "For drivers"), /* @__PURE__ */ React.createElement(CaseButtonLink, {
    to: "/how-it-works/driver"
  }, "Learn more"))))));
};
var Body20 = import_styled_components21.default.section`
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
var MoreOverlay4 = import_styled_components21.default.div`
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
var Cover14 = import_styled_components21.default.div`
  color: ${WikkiTheme.black};
  max-width: 1232px;
  width: 100%;
  margin: 16px auto;
  display: flex;
  flex-direction: column;

  align-items: flex-start;
`;
var MoreTitle4 = (0, import_styled_components21.default)(Header1)`
  margin: 16px 0 80px 0;
  text-align: left;
  max-width: 550px;
  width: 100%;
  @media only screen and (max-width: 650px) {
    margin: 16px 0 48px 0;
  }
`;
var CaseGrid = import_styled_components21.default.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 72px;
  gap: 72px;
  width: 100%;
  @media only screen and (max-width: 950px) {
    grid-gap: 36px;
    place-items: center;
    grid-template-columns: repeat(1, 1fr);
    gap: 36px;
  }
`;
var CaseRowUsers = import_styled_components21.default.div`
  max-height: 700px;
  min-height: 680px;
  height: 100%;
  max-width: 580px;
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
var RowContent = import_styled_components21.default.div`
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
var CaseTitle = (0, import_styled_components21.default)(Header2)``;
var CaseButtonLink = (0, import_styled_components21.default)(CaseButton)``;
var CaseRowDrivers = import_styled_components21.default.div`
  position: relative;
  z-index: 2;
  padding: 16px;
  max-height: 700px;
  min-height: 680px;
  height: 100%;
  max-width: 580px;
  width: 100%;

  border-radius: 32px;
  background: url(${driver_default2}) no-repeat center center/cover;
  @media only screen and (max-width: 650px) {
    max-height: 600px;
    min-height: 550px;
  }
`;
var UseCases_default = UseCases;

// route-module:C:\Users\Augustine Ogiza\Documents\Development\react\wikki\app\routes\index.tsx
var index2 = () => {
  return /* @__PURE__ */ import_react22.default.createElement(Body21, null, /* @__PURE__ */ import_react22.default.createElement(HomeHero_default, null), /* @__PURE__ */ import_react22.default.createElement(HomeWaiting_default, null), /* @__PURE__ */ import_react22.default.createElement(UseCases_default, null), /* @__PURE__ */ import_react22.default.createElement(DoMore_default, null));
};
var Body21 = import_styled_components22.default.div``;
var routes_default = index2;

// <stdin>
var import_assets = __toModule(require("./assets.json"));
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  entry,
  routes
});
/**
 * @remix-run/node v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * remix v1.1.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vbm9kZV9tb2R1bGVzL0ByZW1peC1ydW4vZGV2L2NvbXBpbGVyL3NoaW1zL3JlYWN0LnRzIiwgIi4uL25vZGVfbW9kdWxlcy9yZW1peC9jbGllbnQuanMiLCAiLi4vbm9kZV9tb2R1bGVzL3JlbWl4L3NlcnZlci5qcyIsICIuLi9ub2RlX21vZHVsZXMvcmVtaXgvcGxhdGZvcm0uanMiLCAiLi4vbm9kZV9tb2R1bGVzL3JlbWl4L2luZGV4LmpzIiwgIjxzdGRpbj4iLCAiLi4vYXBwL2VudHJ5LnNlcnZlci50c3giLCAicm91dGUtbW9kdWxlOkM6XFxVc2Vyc1xcQXVndXN0aW5lIE9naXphXFxEb2N1bWVudHNcXERldmVsb3BtZW50XFxyZWFjdFxcd2lra2lcXGFwcFxccm9vdC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvTmF2YmFyLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9Gb290ZXIudHN4IiwgInJvdXRlLW1vZHVsZTpDOlxcVXNlcnNcXEF1Z3VzdGluZSBPZ2l6YVxcRG9jdW1lbnRzXFxEZXZlbG9wbWVudFxccmVhY3RcXHdpa2tpXFxhcHBcXHJvdXRlc1xcZHJpdmVyLXJlcXVpcmVtZW50cy50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvZHJpdmVyL0RyaXZlckFkdmFudGFnZS50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvZHJpdmVyL0RyaXZlckhlcm8udHN4IiwgIi4uL2FwcC9zdHlsZXMvQ29sb3JTdHlsZXMudHN4IiwgIi4uL2FwcC9zdHlsZXMvVGV4dFN0eWxlcy50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvZHJpdmVyL0RyaXZlck1lc3NhZ2UudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL2RyaXZlci9Ecml2ZXJSZXF1aXJlbWVudHMudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL2RyaXZlci9Ecml2ZXJBY2NvcmRpb24udHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL2RyaXZlci9SZXF1aXJlbWVudERhdGEudHN4IiwgInJvdXRlLW1vZHVsZTpDOlxcVXNlcnNcXEF1Z3VzdGluZSBPZ2l6YVxcRG9jdW1lbnRzXFxEZXZlbG9wbWVudFxccmVhY3RcXHdpa2tpXFxhcHBcXHJvdXRlc1xcaG93LWl0LXdvcmtzXFxkcml2ZXIudHN4IiwgInJvdXRlLW1vZHVsZTpDOlxcVXNlcnNcXEF1Z3VzdGluZSBPZ2l6YVxcRG9jdW1lbnRzXFxEZXZlbG9wbWVudFxccmVhY3RcXHdpa2tpXFxhcHBcXHJvdXRlc1xcaG93LWl0LXdvcmtzXFxpbmRleC50c3giLCAicm91dGUtbW9kdWxlOkM6XFxVc2Vyc1xcQXVndXN0aW5lIE9naXphXFxEb2N1bWVudHNcXERldmVsb3BtZW50XFxyZWFjdFxcd2lra2lcXGFwcFxccm91dGVzXFxjb250YWN0LnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9jb250YWN0L0NvbnRhY3RGb3JtLnRzeCIsICIuLi9hcHAvc3R5bGVzL0lucHV0U3R5bGVzLnRzeCIsICIuLi9hcHAvc3R5bGVzL0J1dHRvblN0eWxlcy50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvY29udGFjdC9Db250YWN0SGVyby50c3giLCAicm91dGUtbW9kdWxlOkM6XFxVc2Vyc1xcQXVndXN0aW5lIE9naXphXFxEb2N1bWVudHNcXERldmVsb3BtZW50XFxyZWFjdFxcd2lra2lcXGFwcFxccm91dGVzXFxhYm91dC50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvYWJvdXQvQWJvdXREZWxpdmVyeS50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvYWJvdXQvQWJvdXREZXRhaWxzLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9hYm91dC9BYm91dEhlcm8udHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL2Fib3V0L0Fib3V0UHVycG9zZS50c3giLCAiLi4vYXBwL2NvbXBvbmVudHMvYWJvdXQvUHVycG9zZURhdGEudHN4IiwgInJvdXRlLW1vZHVsZTpDOlxcVXNlcnNcXEF1Z3VzdGluZSBPZ2l6YVxcRG9jdW1lbnRzXFxEZXZlbG9wbWVudFxccmVhY3RcXHdpa2tpXFxhcHBcXHJvdXRlc1xcaW5kZXgudHN4IiwgIi4uL2FwcC9jb21wb25lbnRzL2hvbWUvRG9Nb3JlLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9ob21lL0hvbWVIZXJvLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9ob21lL0hvbWVXYWl0aW5nLnRzeCIsICIuLi9hcHAvY29tcG9uZW50cy9ob21lL1VzZUNhc2VzLnRzeCJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgeyBSZWFjdCB9O1xuIiwgIi8qKlxuICogQHJlbWl4LXJ1bi9yZWFjdCB2MS4xLjNcbiAqXG4gKiBDb3B5cmlnaHQgKGMpIFJlbWl4IFNvZnR3YXJlIEluYy5cbiAqXG4gKiBUaGlzIHNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZSBmb3VuZCBpbiB0aGVcbiAqIExJQ0VOU0UubWQgZmlsZSBpbiB0aGUgcm9vdCBkaXJlY3Rvcnkgb2YgdGhpcyBzb3VyY2UgdHJlZS5cbiAqXG4gKiBAbGljZW5zZSBNSVRcbiAqL1xuJ3VzZSBzdHJpY3QnO1xuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuXG52YXIgcmVhY3QgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3JlYWN0Jyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0Zvcm0nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuRm9ybTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmsnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuTGluazsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ0xpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LkxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTGl2ZVJlbG9hZCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5MaXZlUmVsb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTWV0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5NZXRhOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnTmF2TGluaycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5OYXZMaW5rOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnT3V0bGV0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0Lk91dGxldDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1ByZWZldGNoUGFnZUxpbmtzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlByZWZldGNoUGFnZUxpbmtzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnUmVtaXhCcm93c2VyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4QnJvd3NlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ1JlbWl4U2VydmVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LlJlbWl4U2VydmVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2NyaXB0cycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC5TY3JpcHRzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnU2Nyb2xsUmVzdG9yYXRpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QuU2Nyb2xsUmVzdG9yYXRpb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VBY3Rpb25EYXRhJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUFjdGlvbkRhdGE7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VCZWZvcmVVbmxvYWQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQmVmb3JlVW5sb2FkOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlQ2F0Y2gnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlQ2F0Y2g7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVyJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUZldGNoZXI7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VGZXRjaGVycycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VGZXRjaGVyczsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUZvcm1BY3Rpb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlRm9ybUFjdGlvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUhyZWYnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlSHJlZjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvYWRlckRhdGEnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTG9hZGVyRGF0YTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZUxvY2F0aW9uJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZUxvY2F0aW9uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTWF0Y2hlcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VNYXRjaGVzOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlTmF2aWdhdGUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlTmF2aWdhdGU7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VOYXZpZ2F0aW9uVHlwZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VOYXZpZ2F0aW9uVHlwZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZU91dGxldCcsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VPdXRsZXQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VPdXRsZXRDb250ZXh0Jywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZU91dGxldENvbnRleHQ7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VQYXJhbXMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlUGFyYW1zOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlUmVzb2x2ZWRQYXRoJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlYWN0LnVzZVJlc29sdmVkUGF0aDsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3VzZVNlYXJjaFBhcmFtcycsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VTZWFyY2hQYXJhbXM7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICd1c2VTdWJtaXQnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVhY3QudXNlU3VibWl0OyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndXNlVHJhbnNpdGlvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiByZWFjdC51c2VUcmFuc2l0aW9uOyB9XG59KTtcbiIsICIvKipcbiAqIEByZW1peC1ydW4vc2VydmVyLXJ1bnRpbWUgdjEuMS4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIHNlcnZlclJ1bnRpbWUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL3NlcnZlci1ydW50aW1lJyk7XG5cblxuXG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZUNvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2NyZWF0ZUNvb2tpZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHNlcnZlclJ1bnRpbWUuY3JlYXRlQ29va2llU2Vzc2lvblN0b3JhZ2U7IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVNZW1vcnlTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZU1lbW9yeVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb247IH1cbn0pO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdjcmVhdGVTZXNzaW9uU3RvcmFnZScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmNyZWF0ZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnaXNDb29raWUnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5pc0Nvb2tpZTsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2lzU2Vzc2lvbicsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJSdW50aW1lLmlzU2Vzc2lvbjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ2pzb24nLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5qc29uOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAncmVkaXJlY3QnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gc2VydmVyUnVudGltZS5yZWRpcmVjdDsgfVxufSk7XG4iLCAiLyoqXG4gKiBAcmVtaXgtcnVuL25vZGUgdjEuMS4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIG5vZGUgPSByZXF1aXJlKCdAcmVtaXgtcnVuL25vZGUnKTtcblxuXG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIG5vZGUuY3JlYXRlRmlsZVNlc3Npb25TdG9yYWdlOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfY3JlYXRlRmlsZVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVGaWxlVXBsb2FkSGFuZGxlcjsgfVxufSk7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ3Vuc3RhYmxlX2NyZWF0ZU1lbW9yeVVwbG9hZEhhbmRsZXInLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gbm9kZS51bnN0YWJsZV9jcmVhdGVNZW1vcnlVcGxvYWRIYW5kbGVyOyB9XG59KTtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAndW5zdGFibGVfcGFyc2VNdWx0aXBhcnRGb3JtRGF0YScsIHtcbiAgZW51bWVyYWJsZTogdHJ1ZSxcbiAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBub2RlLnVuc3RhYmxlX3BhcnNlTXVsdGlwYXJ0Rm9ybURhdGE7IH1cbn0pO1xuIiwgIi8qKlxuICogcmVtaXggdjEuMS4zXG4gKlxuICogQ29weXJpZ2h0IChjKSBSZW1peCBTb2Z0d2FyZSBJbmMuXG4gKlxuICogVGhpcyBzb3VyY2UgY29kZSBpcyBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2UgZm91bmQgaW4gdGhlXG4gKiBMSUNFTlNFLm1kIGZpbGUgaW4gdGhlIHJvb3QgZGlyZWN0b3J5IG9mIHRoaXMgc291cmNlIHRyZWUuXG4gKlxuICogQGxpY2Vuc2UgTUlUXG4gKi9cbid1c2Ugc3RyaWN0JztcblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcblxudmFyIGNsaWVudCA9IHJlcXVpcmUoJy4vY2xpZW50Jyk7XG52YXIgc2VydmVyID0gcmVxdWlyZSgnLi9zZXJ2ZXInKTtcbnZhciBwbGF0Zm9ybSA9IHJlcXVpcmUoJy4vcGxhdGZvcm0nKTtcblxuXG5cbk9iamVjdC5rZXlzKGNsaWVudCkuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBjbGllbnRba107IH1cblx0fSk7XG59KTtcbk9iamVjdC5rZXlzKHNlcnZlcikuZm9yRWFjaChmdW5jdGlvbiAoaykge1xuXHRpZiAoayAhPT0gJ2RlZmF1bHQnICYmICFleHBvcnRzLmhhc093blByb3BlcnR5KGspKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgaywge1xuXHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0Z2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBzZXJ2ZXJba107IH1cblx0fSk7XG59KTtcbk9iamVjdC5rZXlzKHBsYXRmb3JtKS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG5cdGlmIChrICE9PSAnZGVmYXVsdCcgJiYgIWV4cG9ydHMuaGFzT3duUHJvcGVydHkoaykpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrLCB7XG5cdFx0ZW51bWVyYWJsZTogdHJ1ZSxcblx0XHRnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHBsYXRmb3JtW2tdOyB9XG5cdH0pO1xufSk7XG4iLCAiXG5pbXBvcnQgKiBhcyBlbnRyeVNlcnZlciBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcQXVndXN0aW5lIE9naXphXFxcXERvY3VtZW50c1xcXFxEZXZlbG9wbWVudFxcXFxyZWFjdFxcXFx3aWtraVxcXFxhcHBcXFxcZW50cnkuc2VydmVyLnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUwIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxBdWd1c3RpbmUgT2dpemFcXFxcRG9jdW1lbnRzXFxcXERldmVsb3BtZW50XFxcXHJlYWN0XFxcXHdpa2tpXFxcXGFwcFxcXFxyb290LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGUxIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxBdWd1c3RpbmUgT2dpemFcXFxcRG9jdW1lbnRzXFxcXERldmVsb3BtZW50XFxcXHJlYWN0XFxcXHdpa2tpXFxcXGFwcFxcXFxyb3V0ZXNcXFxcZHJpdmVyLXJlcXVpcmVtZW50cy50c3hcIjtcbmltcG9ydCAqIGFzIHJvdXRlMiBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcQXVndXN0aW5lIE9naXphXFxcXERvY3VtZW50c1xcXFxEZXZlbG9wbWVudFxcXFxyZWFjdFxcXFx3aWtraVxcXFxhcHBcXFxccm91dGVzXFxcXGhvdy1pdC13b3Jrc1xcXFxkcml2ZXIudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTMgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXEF1Z3VzdGluZSBPZ2l6YVxcXFxEb2N1bWVudHNcXFxcRGV2ZWxvcG1lbnRcXFxccmVhY3RcXFxcd2lra2lcXFxcYXBwXFxcXHJvdXRlc1xcXFxob3ctaXQtd29ya3NcXFxcaW5kZXgudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXEF1Z3VzdGluZSBPZ2l6YVxcXFxEb2N1bWVudHNcXFxcRGV2ZWxvcG1lbnRcXFxccmVhY3RcXFxcd2lra2lcXFxcYXBwXFxcXHJvdXRlc1xcXFxjb250YWN0LnRzeFwiO1xuaW1wb3J0ICogYXMgcm91dGU1IGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxBdWd1c3RpbmUgT2dpemFcXFxcRG9jdW1lbnRzXFxcXERldmVsb3BtZW50XFxcXHJlYWN0XFxcXHdpa2tpXFxcXGFwcFxcXFxyb3V0ZXNcXFxcYWJvdXQudHN4XCI7XG5pbXBvcnQgKiBhcyByb3V0ZTYgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXEF1Z3VzdGluZSBPZ2l6YVxcXFxEb2N1bWVudHNcXFxcRGV2ZWxvcG1lbnRcXFxccmVhY3RcXFxcd2lra2lcXFxcYXBwXFxcXHJvdXRlc1xcXFxpbmRleC50c3hcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgYXNzZXRzIH0gZnJvbSBcIi4vYXNzZXRzLmpzb25cIjtcbmV4cG9ydCBjb25zdCBlbnRyeSA9IHsgbW9kdWxlOiBlbnRyeVNlcnZlciB9O1xuZXhwb3J0IGNvbnN0IHJvdXRlcyA9IHtcbiAgXCJyb290XCI6IHtcbiAgICBpZDogXCJyb290XCIsXG4gICAgcGFyZW50SWQ6IHVuZGVmaW5lZCxcbiAgICBwYXRoOiBcIlwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUwXG4gIH0sXG4gIFwicm91dGVzL2RyaXZlci1yZXF1aXJlbWVudHNcIjoge1xuICAgIGlkOiBcInJvdXRlcy9kcml2ZXItcmVxdWlyZW1lbnRzXCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwiZHJpdmVyLXJlcXVpcmVtZW50c1wiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUxXG4gIH0sXG4gIFwicm91dGVzL2hvdy1pdC13b3Jrcy9kcml2ZXJcIjoge1xuICAgIGlkOiBcInJvdXRlcy9ob3ctaXQtd29ya3MvZHJpdmVyXCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwiaG93LWl0LXdvcmtzL2RyaXZlclwiLFxuICAgIGluZGV4OiB1bmRlZmluZWQsXG4gICAgY2FzZVNlbnNpdGl2ZTogdW5kZWZpbmVkLFxuICAgIG1vZHVsZTogcm91dGUyXG4gIH0sXG4gIFwicm91dGVzL2hvdy1pdC13b3Jrcy9pbmRleFwiOiB7XG4gICAgaWQ6IFwicm91dGVzL2hvdy1pdC13b3Jrcy9pbmRleFwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcImhvdy1pdC13b3Jrc1wiLFxuICAgIGluZGV4OiB0cnVlLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlM1xuICB9LFxuICBcInJvdXRlcy9jb250YWN0XCI6IHtcbiAgICBpZDogXCJyb3V0ZXMvY29udGFjdFwiLFxuICAgIHBhcmVudElkOiBcInJvb3RcIixcbiAgICBwYXRoOiBcImNvbnRhY3RcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlNFxuICB9LFxuICBcInJvdXRlcy9hYm91dFwiOiB7XG4gICAgaWQ6IFwicm91dGVzL2Fib3V0XCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IFwiYWJvdXRcIixcbiAgICBpbmRleDogdW5kZWZpbmVkLFxuICAgIGNhc2VTZW5zaXRpdmU6IHVuZGVmaW5lZCxcbiAgICBtb2R1bGU6IHJvdXRlNVxuICB9LFxuICBcInJvdXRlcy9pbmRleFwiOiB7XG4gICAgaWQ6IFwicm91dGVzL2luZGV4XCIsXG4gICAgcGFyZW50SWQ6IFwicm9vdFwiLFxuICAgIHBhdGg6IHVuZGVmaW5lZCxcbiAgICBpbmRleDogdHJ1ZSxcbiAgICBjYXNlU2Vuc2l0aXZlOiB1bmRlZmluZWQsXG4gICAgbW9kdWxlOiByb3V0ZTZcbiAgfVxufTsiLCAiaW1wb3J0IFJlYWN0RE9NU2VydmVyIGZyb20gXCJyZWFjdC1kb20vc2VydmVyXCJcbmltcG9ydCB7IFJlbWl4U2VydmVyIH0gZnJvbSBcInJlbWl4XCJcbmltcG9ydCB0eXBlIHsgRW50cnlDb250ZXh0IH0gZnJvbSBcInJlbWl4XCJcbmltcG9ydCB7IFNlcnZlclN0eWxlU2hlZXQgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBoYW5kbGVSZXF1ZXN0KFxuICByZXF1ZXN0OiBSZXF1ZXN0LFxuICByZXNwb25zZVN0YXR1c0NvZGU6IG51bWJlcixcbiAgcmVzcG9uc2VIZWFkZXJzOiBIZWFkZXJzLFxuICByZW1peENvbnRleHQ6IEVudHJ5Q29udGV4dFxuKSB7XG4gIGNvbnN0IHNoZWV0ID0gbmV3IFNlcnZlclN0eWxlU2hlZXQoKVxuXG4gIGxldCBtYXJrdXAgPSBSZWFjdERPTVNlcnZlci5yZW5kZXJUb1N0cmluZyhcbiAgICBzaGVldC5jb2xsZWN0U3R5bGVzKFxuICAgICAgPFJlbWl4U2VydmVyIGNvbnRleHQ9e3JlbWl4Q29udGV4dH0gdXJsPXtyZXF1ZXN0LnVybH0gLz5cbiAgICApXG4gIClcbiAgY29uc3Qgc3R5bGVzID0gc2hlZXQuZ2V0U3R5bGVUYWdzKClcbiAgbWFya3VwID0gbWFya3VwLnJlcGxhY2UoXCJfX1NUWUxFU19fXCIsIHN0eWxlcylcblxuICByZXNwb25zZUhlYWRlcnMuc2V0KFwiQ29udGVudC1UeXBlXCIsIFwidGV4dC9odG1sXCIpXG5cbiAgcmV0dXJuIG5ldyBSZXNwb25zZShcIjwhRE9DVFlQRSBodG1sPlwiICsgbWFya3VwLCB7XG4gICAgc3RhdHVzOiByZXNwb25zZVN0YXR1c0NvZGUsXG4gICAgaGVhZGVyczogcmVzcG9uc2VIZWFkZXJzLFxuICB9KVxufVxuIiwgImltcG9ydCB7XG4gIExpbmtzLFxuICBMaW5rc0Z1bmN0aW9uLFxuICBMaXZlUmVsb2FkLFxuICBNZXRhLFxuICBPdXRsZXQsXG4gIFNjcmlwdHMsXG4gIFNjcm9sbFJlc3RvcmF0aW9uLFxufSBmcm9tIFwicmVtaXhcIlxuaW1wb3J0IHR5cGUgeyBNZXRhRnVuY3Rpb24gfSBmcm9tIFwicmVtaXhcIlxuaW1wb3J0IHRvYXN0IGZyb20gXCJyZWFjdC10b2FzdGlmeS9kaXN0L1JlYWN0VG9hc3RpZnkuY3NzXCJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4vaW5kZXguY3NzXCJcbmltcG9ydCB7IFRvYXN0Q29udGFpbmVyIH0gZnJvbSBcInJlYWN0LXRvYXN0aWZ5XCJcbmltcG9ydCBOYXZiYXIgZnJvbSBcIi4vY29tcG9uZW50cy9OYXZiYXJcIlxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9jb21wb25lbnRzL0Zvb3RlclwiXG5leHBvcnQgY29uc3QgbWV0YTogTWV0YUZ1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4ge1xuICAgIHRpdGxlOiBcIldpa2tpXCIsXG4gICAgZGVzY3JpcHRpb246IFwiUmVhbHRpbWUgZGVsaXZlcnlcIixcbiAgfVxufVxuZXhwb3J0IGNvbnN0IGxpbmtzOiBMaW5rc0Z1bmN0aW9uID0gKCkgPT4ge1xuICByZXR1cm4gW1xuICAgIHsgcmVsOiBcInN0eWxlc2hlZXRcIiwgaHJlZjogc3R5bGVzIH0sXG4gICAgeyByZWw6IFwic3R5bGVzaGVldFwiLCBocmVmOiB0b2FzdCB9LFxuICAgIHtcbiAgICAgIHJlbDogXCJpY29uXCIsXG4gICAgICBocmVmOiBcIi9mYXZpY29uLnBuZ1wiLFxuICAgICAgdHlwZTogXCJpbWFnZS9wbmdcIixcbiAgICB9LFxuICBdXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFwcCgpIHtcbiAgcmV0dXJuIChcbiAgICA8aHRtbCBsYW5nPVwiZW5cIj5cbiAgICAgIDxoZWFkPlxuICAgICAgICA8bWV0YSBjaGFyU2V0PVwidXRmLThcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIDxNZXRhIC8+XG4gICAgICAgIDxMaW5rcyAvPlxuICAgICAgICB7dHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiID8gXCJfX1NUWUxFU19fXCIgOiBudWxsfVxuICAgICAgPC9oZWFkPlxuICAgICAgPGJvZHk+XG4gICAgICAgIDxUb2FzdENvbnRhaW5lclxuICAgICAgICAgIHBvc2l0aW9uPVwidG9wLXJpZ2h0XCJcbiAgICAgICAgICBhdXRvQ2xvc2U9ezUwMDB9XG4gICAgICAgICAgaGlkZVByb2dyZXNzQmFyXG4gICAgICAgICAgbmV3ZXN0T25Ub3A9e2ZhbHNlfVxuICAgICAgICAgIGNsb3NlT25DbGlja1xuICAgICAgICAgIHJ0bD17ZmFsc2V9XG4gICAgICAgICAgcGF1c2VPbkZvY3VzTG9zc1xuICAgICAgICAgIGRyYWdnYWJsZVxuICAgICAgICAgIHBhdXNlT25Ib3ZlclxuICAgICAgICAvPlxuICAgICAgICA8TmF2YmFyIC8+XG4gICAgICAgIDxPdXRsZXQgLz5cbiAgICAgICAgPEZvb3RlciAvPlxuICAgICAgICA8U2Nyb2xsUmVzdG9yYXRpb24gLz5cbiAgICAgICAgPFNjcmlwdHMgLz5cbiAgICAgICAge3Byb2Nlc3MuZW52Lk5PREVfRU5WID09PSBcImRldmVsb3BtZW50XCIgJiYgPExpdmVSZWxvYWQgLz59XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICApXG59XG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcblxyXG5jb25zdCBOYXZiYXIgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIDxkaXY+PC9kaXY+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmJhclxyXG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcblxyXG5jb25zdCBGb290ZXIgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIDxkaXY+PC9kaXY+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvb3RlclxyXG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcclxuaW1wb3J0IERyaXZlckFkdmFudGFnZSBmcm9tIFwifi9jb21wb25lbnRzL2RyaXZlci9Ecml2ZXJBZHZhbnRhZ2VcIlxyXG5pbXBvcnQgRHJpdmVySGVybyBmcm9tIFwifi9jb21wb25lbnRzL2RyaXZlci9Ecml2ZXJIZXJvXCJcclxuaW1wb3J0IERyaXZlck1lc3NhZ2UgZnJvbSBcIn4vY29tcG9uZW50cy9kcml2ZXIvRHJpdmVyTWVzc2FnZVwiXHJcbmltcG9ydCBEcml2ZXJSZXF1aXJlbWVudHMgZnJvbSBcIn4vY29tcG9uZW50cy9kcml2ZXIvRHJpdmVyUmVxdWlyZW1lbnRzXCJcclxuXHJcbmNvbnN0IGRyaXZlciA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJvZHk+XHJcbiAgICAgIDxEcml2ZXJIZXJvIC8+XHJcbiAgICAgIDxEcml2ZXJBZHZhbnRhZ2UgLz5cclxuICAgICAgPERyaXZlck1lc3NhZ2UgLz5cclxuICAgICAgPERyaXZlclJlcXVpcmVtZW50cyAvPlxyXG4gICAgPC9Cb2R5PlxyXG4gIClcclxufVxyXG5jb25zdCBCb2R5ID0gc3R5bGVkLmRpdmBgXHJcbmV4cG9ydCBkZWZhdWx0IGRyaXZlclxyXG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcblxyXG5jb25zdCBEcml2ZXJBZHZhbnRhZ2UgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIDxkaXY+PC9kaXY+XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IERyaXZlckFkdmFudGFnZVxyXG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcclxuaW1wb3J0IHsgV2lra2lUaGVtZSB9IGZyb20gXCJ+L3N0eWxlcy9Db2xvclN0eWxlc1wiXHJcbmltcG9ydCB7IEJvZHkzLCBIZWFkZXIyIH0gZnJvbSBcIn4vc3R5bGVzL1RleHRTdHlsZXNcIlxyXG5cclxuY29uc3QgRHJpdmVySGVybyA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJvZHk+XHJcbiAgICAgIDxDb3Zlcj5cclxuICAgICAgICA8RHJpdmVyVGl0bGU+R2V0IGluIHRoZSBkcml2ZXJcdTIwMTlzIHNlYXQgYW5kIGdldCBwYWlkPC9Ecml2ZXJUaXRsZT5cclxuICAgICAgICA8RHJpdmVyVGV4dD5cclxuICAgICAgICAgIE1ha2UgdGhlIG1vc3Qgb2YgeW91ciB0aW1lIG9uIHRoZSByb2FkIG9uIHRoZSBwbGF0Zm9ybSB3aXRoIHRoZVxyXG4gICAgICAgICAgbGFyZ2VzdCBuZXR3b3JrIG9mIGFjdGl2ZSByaWRlcnMuXHJcbiAgICAgICAgPC9Ecml2ZXJUZXh0PlxyXG4gICAgICA8L0NvdmVyPlxyXG4gICAgPC9Cb2R5PlxyXG4gIClcclxufVxyXG5jb25zdCBCb2R5ID0gc3R5bGVkLnNlY3Rpb25gXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1hcmdpbjogMDtcclxuXHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtaW4taGVpZ2h0OiA0NTBweDtcclxuICBjb2xvcjogJHtXaWtraVRoZW1lLmJsYWNrfTtcclxuICB3aWR0aDogMTAwJTtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIGJhY2tncm91bmQ6ICR7V2lra2lUaGVtZS53aGl0ZX07XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xyXG4gICAgbWluLWhlaWdodDogMzUwcHg7XHJcbiAgfVxyXG5gXHJcbmNvbnN0IENvdmVyID0gc3R5bGVkLmRpdmBcclxuICBjb2xvcjogJHtXaWtraVRoZW1lLmJsYWNrfTtcclxuICBtYXgtd2lkdGg6IDUwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtYXJnaW46IDI0cHggYXV0bztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYFxyXG5jb25zdCBEcml2ZXJUaXRsZSA9IHN0eWxlZChIZWFkZXIyKWBcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbmBcclxuY29uc3QgRHJpdmVyVGV4dCA9IHN0eWxlZChCb2R5MylgXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogOHB4IDA7XHJcbmBcclxuZXhwb3J0IGRlZmF1bHQgRHJpdmVySGVyb1xyXG4iLCAiZXhwb3J0IGNvbnN0IFdpa2tpVGhlbWUgPSB7XHJcbiAgcHJpbWFyeTogXCIjMzMwMDY2XCIsXHJcbiAgc2Vjb25kYXJ5OiBcIiNGRjlFMTdcIixcclxuICB3aGl0ZTogXCIjZmZmZmZmXCIsXHJcbiAgYmxhY2s6IFwiIzAwMDAwMFwiLFxyXG4gIGRhcms6IFwiIzBhMGIxYVwiLFxyXG4gIHNub3dXaGl0ZTogXCIjRkFGQUZGXCIsXHJcbiAgcmVkOiBcIiNmZjAwMDBcIixcclxuICBncmF5OiBcIiM4MTgxODFcIixcclxuICB5ZWxsb3c6IFwiI0ZGQ0UzMlwiLFxyXG4gIGJsdWU6IFwiIzFENjNGRlwiLFxyXG4gIGxpZ2h0WWVsbGxvdzogXCIjRkVGQUYwXCIsXHJcbiAgZGFya1JlZDogXCIjRjM0NjQ2XCIsXHJcbn1cclxuIiwgImltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcclxuXHJcbmV4cG9ydCBjb25zdCBMYXJnZUhlYWRlciA9IHN0eWxlZC5oMWBcclxuICBmb250LWZhbWlseTogXCJDbGFzaCBEaXNwbGF5IE1lZGl1bVwiO1xyXG4gIGZvbnQtc2l6ZTogOTZweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjE7XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcclxuICAgIGZvbnQtc2l6ZTogNDhweDtcclxuICB9XHJcbmBcclxuZXhwb3J0IGNvbnN0IEhlYWRlcjEgPSBzdHlsZWQuaDFgXHJcbiAgZm9udC1mYW1pbHk6IFwiQ2xhc2ggRGlzcGxheSBNZWRpdW1cIjtcclxuICBmb250LXNpemU6IDcycHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBsaW5lLWhlaWdodDogMS4xO1xyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc1MHB4KSB7XHJcbiAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgfVxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTUwcHgpIHtcclxuICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBIZWFkZXIyID0gc3R5bGVkLmgyYFxyXG4gIGZvbnQtZmFtaWx5OiBcIkNsYXNoIERpc3BsYXkgTWVkaXVtXCI7XHJcbiAgZm9udC1zaXplOiA0OHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMTtcclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xyXG4gICAgZm9udC1zaXplOiAyOHB4O1xyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEhlYWRlcjMgPSBzdHlsZWQuaDNgXHJcbiAgZm9udC1mYW1pbHk6IFwiQ2xhc2ggRGlzcGxheSBNZWRpdW1cIjtcclxuICBmb250LXNpemU6IDM2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBsaW5lLWhlaWdodDogMS4xO1xyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XHJcbiAgICBmb250LXNpemU6IDIxcHg7XHJcbiAgfVxyXG5gXHJcblxyXG5leHBvcnQgY29uc3QgSGVhZGVyNSA9IHN0eWxlZC5oNGBcclxuICBmb250LWZhbWlseTogXCJDbGFzaCBEaXNwbGF5IE1lZGl1bVwiO1xyXG4gIGZvbnQtc2l6ZTogMjRweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjE7XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBTdWJUaXRsZSA9IHN0eWxlZC5oNGBcclxuICBmb250LWZhbWlseTogXCJDbGFzaCBEaXNwbGF5IE1lZGl1bVwiO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjE7XHJcblxyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBTdWJUaXRsZVNtYWxsID0gc3R5bGVkLmg1YFxyXG4gIGZvbnQtZmFtaWx5OiBcIkNsYXNoIERpc3BsYXkgTWVkaXVtXCI7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMTtcclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xyXG4gICAgZm9udC1zaXplOiAxM3B4O1xyXG4gIH1cclxuYFxyXG5leHBvcnQgY29uc3QgQ2FwdGlvbiA9IHN0eWxlZC5oNmBcclxuICBmb250LWZhbWlseTogXCJDbGFzaCBEaXNwbGF5IFJlZ3VsYXJcIjtcclxuICBmb250LXNpemU6IDEzcHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBsaW5lLWhlaWdodDogMS42O1xyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XHJcbiAgICBmb250LXNpemU6IDExcHg7XHJcbiAgfVxyXG5gXHJcbmV4cG9ydCBjb25zdCBCb2R5MSA9IHN0eWxlZC5wYFxyXG4gIGZvbnQtZmFtaWx5OiBcIkludGVyXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAyMXB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNjtcclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xyXG4gICAgZm9udC1zaXplOiAxOHB4O1xyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEJvZHkyID0gc3R5bGVkLnBgXHJcbiAgZm9udC1mYW1pbHk6IFwiSW50ZXJcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE4cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBsaW5lLWhlaWdodDogMS42O1xyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgfVxyXG5gXHJcbmV4cG9ydCBjb25zdCBCb2R5MyA9IHN0eWxlZC5wYFxyXG4gIGZvbnQtZmFtaWx5OiBcIkludGVyXCIsIHNhbnMtc2VyaWY7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuNjtcclxuXHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IEJvZHk0ID0gc3R5bGVkLnBgXHJcbiAgZm9udC1mYW1pbHk6IFwiSW50ZXJcIiwgc2Fucy1zZXJpZjtcclxuICBmb250LXNpemU6IDE0cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDQwMDtcclxuICBsaW5lLWhlaWdodDogMS42O1xyXG5cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XHJcbiAgICBmb250LXNpemU6IDEycHg7XHJcbiAgfVxyXG5gXHJcbiIsICJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHN0eWxlZCwgeyBrZXlmcmFtZXMgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5pbXBvcnQgeyBMYXJnZUhlYWRlciB9IGZyb20gXCJ+L3N0eWxlcy9UZXh0U3R5bGVzXCJcclxuXHJcbmNvbnN0IERyaXZlck1lc3NhZ2UgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb2R5PlxyXG4gICAgICA8Q292ZXI+XHJcbiAgICAgICAgPFJpZGVUZXh0PlJpZGUgd2l0aCB1czwvUmlkZVRleHQ+XHJcbiAgICAgIDwvQ292ZXI+XHJcbiAgICAgIDxDb3Zlcj5cclxuICAgICAgICA8UmlkZVRleHQ+UmlkZSB3aXRoIHVzPC9SaWRlVGV4dD5cclxuICAgICAgPC9Db3Zlcj5cclxuICAgICAgPENvdmVyPlxyXG4gICAgICAgIDxSaWRlVGV4dD5SaWRlIHdpdGggdXM8L1JpZGVUZXh0PlxyXG4gICAgICA8L0NvdmVyPlxyXG4gICAgICA8Q292ZXI+XHJcbiAgICAgICAgPFJpZGVUZXh0PlJpZGUgd2l0aCB1czwvUmlkZVRleHQ+XHJcbiAgICAgIDwvQ292ZXI+XHJcbiAgICAgIDxDb3Zlcj5cclxuICAgICAgICA8UmlkZVRleHQ+UmlkZSB3aXRoIHVzPC9SaWRlVGV4dD5cclxuICAgICAgPC9Db3Zlcj5cclxuICAgICAgPENvdmVyPlxyXG4gICAgICAgIDxSaWRlVGV4dD5SaWRlIHdpdGggdXM8L1JpZGVUZXh0PlxyXG4gICAgICA8L0NvdmVyPlxyXG4gICAgICA8Q292ZXI+XHJcbiAgICAgICAgPFJpZGVUZXh0PlJpZGUgd2l0aCB1czwvUmlkZVRleHQ+XHJcbiAgICAgIDwvQ292ZXI+XHJcbiAgICAgIDxDb3Zlcj5cclxuICAgICAgICA8UmlkZVRleHQ+UmlkZSB3aXRoIHVzPC9SaWRlVGV4dD5cclxuICAgICAgPC9Db3Zlcj5cclxuICAgICAgPENvdmVyPlxyXG4gICAgICAgIDxSaWRlVGV4dD5SaWRlIHdpdGggdXM8L1JpZGVUZXh0PlxyXG4gICAgICA8L0NvdmVyPlxyXG4gICAgPC9Cb2R5PlxyXG4gIClcclxufVxyXG5jb25zdCBCb2R5ID0gc3R5bGVkLmRpdmBcclxuICBoZWlnaHQ6IDI3NnB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICB9XHJcbmBcclxuY29uc3QgYW5pbWF0aW9uID0ga2V5ZnJhbWVzYFxyXG5cclxuIDAlIHtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcclxuICB9XHJcbiAgdG8ge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgtMTAwJSwgMCwgMCk7XHJcbiAgfVxyXG5cclxuYFxyXG5jb25zdCBDb3ZlciA9IHN0eWxlZC5kaXZgXHJcbiAgYW5pbWF0aW9uOiAke2FuaW1hdGlvbn0gMTVzIGxpbmVhciBpbmZpbml0ZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYFxyXG5jb25zdCBSaWRlVGV4dCA9IHN0eWxlZChMYXJnZUhlYWRlcilgXHJcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcclxuICBtYXJnaW46IDQwcHg7XHJcbmBcclxuXHJcbmV4cG9ydCBkZWZhdWx0IERyaXZlck1lc3NhZ2VcclxuIiwgImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcclxuaW1wb3J0IHsgV2lra2lUaGVtZSB9IGZyb20gXCJ+L3N0eWxlcy9Db2xvclN0eWxlc1wiXHJcbmltcG9ydCB7IEJvZHkzLCBIZWFkZXIyIH0gZnJvbSBcIn4vc3R5bGVzL1RleHRTdHlsZXNcIlxyXG5pbXBvcnQgRHJpdmVyQWNjb3JkaW9uIGZyb20gXCIuL0RyaXZlckFjY29yZGlvblwiXHJcbmltcG9ydCB7IHJlcXVpcmVtZW50RGF0YSB9IGZyb20gXCIuL1JlcXVpcmVtZW50RGF0YVwiXHJcbmltcG9ydCBkcml2ZXIgZnJvbSBcIn4vaW1hZ2VzL2RyaXZlcjIucG5nXCJcclxuY29uc3QgRHJpdmVyUmVxdWlyZW1lbnRzID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtzZWxlY3RlZCwgc2V0U2VsZWN0ZWRdID0gdXNlU3RhdGU8bnVtYmVyIHwgbnVsbD4oMSlcclxuXHJcbiAgY29uc3Qgc2VsZWN0UmVxdWlyZW1lbnQgPSAobnVtYmVyOiBudW1iZXIpID0+IHtcclxuICAgIGlmIChzZWxlY3RlZCA9PT0gbnVtYmVyKSB7XHJcbiAgICAgIHJldHVybiBzZXRTZWxlY3RlZChudWxsKVxyXG4gICAgfVxyXG4gICAgc2V0U2VsZWN0ZWQobnVtYmVyKVxyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPEJvZHk+XHJcbiAgICAgIDxDb3Zlcj5cclxuICAgICAgICA8RHJpdmVyQ292ZXI+XHJcbiAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICA8RHJpdmVyVGl0bGU+RHJpdmVyXHUyMDE5cyByZXF1aXJlbWVudDwvRHJpdmVyVGl0bGU+XHJcbiAgICAgICAgICA8RHJpdmVyVGV4dD5cclxuICAgICAgICAgICAgV2lra2kgaXMgYSBncmVhdCB3YXkgdG8gYmUgeW91ciBvd24gYm9zcyBhbmQgbWFrZSBtb25leS5cclxuICAgICAgICAgIDwvRHJpdmVyVGV4dD5cclxuICAgICAgICA8L0RyaXZlckNvdmVyPlxyXG4gICAgICAgIDxEcml2ZXJHcmlkPlxyXG4gICAgICAgICAgPERyaXZlck5lZWRzPlxyXG4gICAgICAgICAgICB7cmVxdWlyZW1lbnREYXRhLm1hcCgoZGF0YSkgPT4gKFxyXG4gICAgICAgICAgICAgIDxEcml2ZXJBY2NvcmRpb25cclxuICAgICAgICAgICAgICAgIGtleT17ZGF0YS5pZH1cclxuICAgICAgICAgICAgICAgIG51bWJlcj17ZGF0YS5pZH1cclxuICAgICAgICAgICAgICAgIHRleHQ9e2RhdGEudGl0bGV9XHJcbiAgICAgICAgICAgICAgICBjb250ZW50PXtkYXRhLnRleHR9XHJcbiAgICAgICAgICAgICAgICBjbGljaz17KCkgPT4gc2VsZWN0UmVxdWlyZW1lbnQoZGF0YS5pZCl9XHJcbiAgICAgICAgICAgICAgICBhY3RpdmU9e2RhdGEuaWQgPT09IHNlbGVjdGVkID8gdHJ1ZSA6IGZhbHNlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9Ecml2ZXJOZWVkcz5cclxuICAgICAgICAgIDxEcml2ZXJJbWFnZT5cclxuICAgICAgICAgICAgPERyaXZlclBob3RvIHNyYz17ZHJpdmVyfSBhbHQ9XCJ3aWtraVwiIC8+XHJcbiAgICAgICAgICA8L0RyaXZlckltYWdlPlxyXG4gICAgICAgIDwvRHJpdmVyR3JpZD5cclxuICAgICAgPC9Db3Zlcj5cclxuICAgIDwvQm9keT5cclxuICApXHJcbn1cclxuY29uc3QgQm9keSA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxO1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIG1hcmdpbjogMDtcclxuICBtaW4taGVpZ2h0OiA2MDBweDtcclxuICBjb2xvcjogJHtXaWtraVRoZW1lLmJsYWNrfTtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiAke1dpa2tpVGhlbWUuc25vd1doaXRlfTtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XHJcbiAgICBtaW4taGVpZ2h0OiAzNTBweDtcclxuICB9XHJcbmBcclxuY29uc3QgQ292ZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGNvbG9yOiAke1dpa2tpVGhlbWUuYmxhY2t9O1xyXG4gIG1heC13aWR0aDogMTIzMnB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtYXJnaW46IDI0cHggYXV0bztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbmBcclxuXHJcbmNvbnN0IERyaXZlckNvdmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWF4LXdpZHRoOiAzODBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDgwcHggMDtcclxuYFxyXG5jb25zdCBEcml2ZXJUaXRsZSA9IHN0eWxlZChIZWFkZXIyKWBcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG5gXHJcbmNvbnN0IERyaXZlclRleHQgPSBzdHlsZWQoQm9keTMpYFxyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgbWFyZ2luOiA4cHggMDtcclxuYFxyXG5cclxuY29uc3QgRHJpdmVyR3JpZCA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xyXG4gIGdyaWQtZ2FwOiA0MHB4O1xyXG4gIGdhcDogNDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk1MHB4KSB7XHJcbiAgICBncmlkLWdhcDogMjRweDtcclxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpO1xyXG4gICAgZ2FwOiAyNHB4O1xyXG4gIH1cclxuYFxyXG5jb25zdCBEcml2ZXJOZWVkcyA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG5gXHJcbmNvbnN0IERyaXZlckltYWdlID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbmBcclxuY29uc3QgRHJpdmVyUGhvdG8gPSBzdHlsZWQuaW1nYFxyXG4gIG1pbi1oZWlnaHQ6IDY5MHB4O1xyXG4gIG1heC1oZWlnaHQ6IDcwMHB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtYXgtd2lkdGg6IDYyN3B4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIDo6YWZ0ZXIge1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBib3JkZXItcmFkaXVzOiBpbmhlcml0O1xyXG4gICAgYmFja2dyb3VuZDogcmdiYSgwLCAwLCAwLCAwLjUpO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5gXHJcbmV4cG9ydCBkZWZhdWx0IERyaXZlclJlcXVpcmVtZW50c1xyXG4iLCAiaW1wb3J0IFJlYWN0LCB7IEZDIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHsgRmlDaGV2cm9uRG93biwgRmlDaGV2cm9uVXAgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmlcIlxyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXHJcbmltcG9ydCB7IFdpa2tpVGhlbWUgfSBmcm9tIFwifi9zdHlsZXMvQ29sb3JTdHlsZXNcIlxyXG5pbXBvcnQgeyBCb2R5NCwgSGVhZGVyNSB9IGZyb20gXCJ+L3N0eWxlcy9UZXh0U3R5bGVzXCJcclxuXHJcbmludGVyZmFjZSBEcml2ZXJQcm9wcyB7XHJcbiAgYWN0aXZlPzogYm9vbGVhblxyXG4gIG51bWJlcj86IG51bWJlclxyXG4gIHRleHQ/OiBzdHJpbmdcclxuICBjb250ZW50Pzogc3RyaW5nXHJcbiAgY2xpY2s/OiAobnVtYmVyOiBhbnkpID0+IHZvaWRcclxufVxyXG5jb25zdCBEcml2ZXJBY2NvcmRpb246IEZDPERyaXZlclByb3BzPiA9IChwcm9wcykgPT4ge1xyXG4gIGNvbnN0IHsgbnVtYmVyLCBhY3RpdmUsIHRleHQsIGNvbnRlbnQsIGNsaWNrIH0gPSBwcm9wc1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm9keSBvbkNsaWNrPXsoKSA9PiBjbGljayhudW1iZXIpfT5cclxuICAgICAgPENvdmVyPlxyXG4gICAgICAgIDxEcml2ZXJOdW1iZXI+XHJcbiAgICAgICAgICA8TnVtYmVyVGV4dD57bnVtYmVyfTwvTnVtYmVyVGV4dD5cclxuICAgICAgICA8L0RyaXZlck51bWJlcj5cclxuICAgICAgICA8RHJpdmVyQm9keT5cclxuICAgICAgICAgIDxEcml2ZXJDb250ZW50Pnt0ZXh0fTwvRHJpdmVyQ29udGVudD5cclxuICAgICAgICAgIDxEcml2ZXJQYXJhIGFjdGl2ZT17YWN0aXZlfT57Y29udGVudH08L0RyaXZlclBhcmE+XHJcbiAgICAgICAgPC9Ecml2ZXJCb2R5PlxyXG4gICAgICAgIDxEcml2ZXJJY29uPnthY3RpdmUgPyA8RHJpdmVyRG93biAvPiA6IDxEcml2ZXJVcCAvPn08L0RyaXZlckljb24+XHJcbiAgICAgIDwvQ292ZXI+XHJcbiAgICA8L0JvZHk+XHJcbiAgKVxyXG59XHJcbmNvbnN0IEJvZHkgPSBzdHlsZWQuZGl2YFxyXG4gIG1pbi1oZWlnaHQ6IDUwcHg7XHJcbiAgbWF4LXdpZHRoOiA1MjBweDtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgbWFyZ2luOiAyNHB4IDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDI0cHg7XHJcbiAgYmFja2dyb3VuZDogJHtXaWtraVRoZW1lLndoaXRlfTtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgdHJhbnNpdGlvbjogMC40cyBhbGwgZWFzZS1pbi1vdXQ7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xyXG4gICAgbWFyZ2luOiAxNnB4IDA7XHJcbiAgfVxyXG5gXHJcbmNvbnN0IENvdmVyID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDhweCBhdXRvIDMycHg7XHJcbiAgZ3JpZC1nYXA6IDE2cHg7XHJcbiAgZ2FwOiAxNnB4O1xyXG4gIHRyYW5zaXRpb246IDAuNHMgZWFzZS1pbi1vdXQ7XHJcbmBcclxuY29uc3QgRHJpdmVyTnVtYmVyID0gc3R5bGVkLmRpdmBcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgd2lkdGg6IDQwcHg7XHJcbiAgdHJhbnNpdGlvbjogMC40cyBlYXNlLWluLW91dDtcclxuXHJcbiAgYm9yZGVyOiAxcHggc29saWQgJHtXaWtraVRoZW1lLmJsYWNrfTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xyXG4gICAgaGVpZ2h0OiAzMnB4O1xyXG4gICAgd2lkdGg6IDMycHg7XHJcbiAgfVxyXG5gXHJcbmNvbnN0IE51bWJlclRleHQgPSBzdHlsZWQoSGVhZGVyNSlgYFxyXG5jb25zdCBEcml2ZXJCb2R5ID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgdHJhbnNpdGlvbjogMC40cyBlYXNlLWluLW91dDtcclxuYFxyXG5jb25zdCBEcml2ZXJDb250ZW50ID0gc3R5bGVkKEhlYWRlcjUpYFxyXG4gIHRyYW5zaXRpb246IDAuNHMgZWFzZS1pbi1vdXQ7XHJcbmBcclxuY29uc3QgRHJpdmVyUGFyYSA9IHN0eWxlZChCb2R5NCk8RHJpdmVyUHJvcHM+YFxyXG4gIG1hcmdpbjogOHB4IDA7XHJcbiAgdHJhbnNpdGlvbjogMC40cyBlYXNlLWluLW91dDtcclxuICBoZWlnaHQ6ICR7KHByb3BzKSA9PiAocHJvcHMuYWN0aXZlID8gXCIxMDAlXCIgOiBcIjBweFwiKX07XHJcbiAgZGlzcGxheTogJHsocHJvcHMpID0+IChwcm9wcy5hY3RpdmUgPyBcImZsZXhcIiA6IFwibm9uZVwiKX07XHJcbmBcclxuY29uc3QgRHJpdmVySWNvbiA9IHN0eWxlZC5kaXZgXHJcbiAgdHJhbnNpdGlvbjogMC40cyBlYXNlLWluLW91dDtcclxuYFxyXG5jb25zdCBEcml2ZXJVcCA9IHN0eWxlZChGaUNoZXZyb25VcClgXHJcbiAgaGVpZ2h0OiAyNHB4O1xyXG4gIHdpZHRoOiAyNHB4O1xyXG4gIHRyYW5zaXRpb246IDAuNHMgZWFzZS1pbi1vdXQ7XHJcbmBcclxuY29uc3QgRHJpdmVyRG93biA9IHN0eWxlZChGaUNoZXZyb25Eb3duKWBcclxuICBoZWlnaHQ6IDI0cHg7XHJcbiAgd2lkdGg6IDI0cHg7XHJcbiAgdHJhbnNpdGlvbjogMC40cyBlYXNlLWluLW91dDtcclxuYFxyXG5leHBvcnQgZGVmYXVsdCBEcml2ZXJBY2NvcmRpb25cclxuIiwgImV4cG9ydCBjb25zdCByZXF1aXJlbWVudERhdGEgPSBbXHJcbiAge1xyXG4gICAgaWQ6IDEsXHJcbiAgICB0aXRsZTogXCJEb3dubG9hZCBhcHAgYW5kIHNpZ24gdXBcIixcclxuICAgIHRleHQ6IFwiR290IGFuIGVtYWlsIGFkZHJlc3MgYW5kIGEgc21hcnRwaG9uZT8gR3JlYXQsIG5vdyB0ZWxsIHVzIGEgYml0IG1vcmUgYWJvdXQgeW91cnNlbGYgYW5kIHdlJ2xsIGdldCB5b3Ugc3RhcnRlZC5cIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiAyLFxyXG4gICAgdGl0bGU6IFwiVXBsb2FkIHlvdXIgZG9jdW1lbnRzXCIsXHJcbiAgICB0ZXh0OiBcIkdvdCBhbiBlbWFpbCBhZGRyZXNzIGFuZCBhIHNtYXJ0cGhvbmU/IEdyZWF0LCBub3cgdGVsbCB1cyBhIGJpdCBtb3JlIGFib3V0IHlvdXJzZWxmIGFuZCB3ZSdsbCBnZXQgeW91IHN0YXJ0ZWQuXCIsXHJcbiAgfSxcclxuICB7XHJcbiAgICBpZDogMyxcclxuICAgIHRpdGxlOiBcIlVwbG9hZCB2ZWhpY2xlIGRldGFpbHNcIixcclxuICAgIHRleHQ6IFwiR290IGFuIGVtYWlsIGFkZHJlc3MgYW5kIGEgc21hcnRwaG9uZT8gR3JlYXQsIG5vdyB0ZWxsIHVzIGEgYml0IG1vcmUgYWJvdXQgeW91cnNlbGYgYW5kIHdlJ2xsIGdldCB5b3Ugc3RhcnRlZC5cIixcclxuICB9LFxyXG4gIHtcclxuICAgIGlkOiA0LFxyXG4gICAgdGl0bGU6IFwiQWN0aXZhdGUgeW91ciBhY2NvdW50XCIsXHJcbiAgICB0ZXh0OiBcIkdvdCBhbiBlbWFpbCBhZGRyZXNzIGFuZCBhIHNtYXJ0cGhvbmU/IEdyZWF0LCBub3cgdGVsbCB1cyBhIGJpdCBtb3JlIGFib3V0IHlvdXJzZWxmIGFuZCB3ZSdsbCBnZXQgeW91IHN0YXJ0ZWQuXCIsXHJcbiAgfSxcclxuXVxyXG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcclxuaW1wb3J0IHsgV2lra2lUaGVtZSB9IGZyb20gXCJ+L3N0eWxlcy9Db2xvclN0eWxlc1wiXHJcbmltcG9ydCB7IEJvZHkzLCBIZWFkZXIzLCBIZWFkZXI1LCBTdWJUaXRsZSB9IGZyb20gXCJ+L3N0eWxlcy9UZXh0U3R5bGVzXCJcclxuaW1wb3J0IHJvdXRlIGZyb20gXCJ+L2ltYWdlcy9yb3V0ZS5wbmdcIlxyXG5pbXBvcnQgcGF5IGZyb20gXCJ+L2ltYWdlcy9wYXkucG5nXCJcclxuaW1wb3J0IGFwcCBmcm9tIFwifi9pbWFnZXMvYXBwLnBuZ1wiXHJcbmltcG9ydCBiYXZlIGZyb20gXCJ+L2ltYWdlcy9iYXZlLnN2Z1wiXHJcbmltcG9ydCBpY29uIGZyb20gXCJ+L2ltYWdlcy9pY29uLnBuZ1wiXHJcbmltcG9ydCB7IExpbmsgfSBmcm9tIFwicmVtaXhcIlxyXG5cclxuY29uc3QgV29ya3NEcml2ZXIgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb2R5PlxyXG4gICAgICA8Q292ZXI+XHJcbiAgICAgICAgPFdvcmtzU2VsZWN0b3I+XHJcbiAgICAgICAgICA8U2VsZWN0b3I+XHJcbiAgICAgICAgICAgIDxEcml2ZXIgdG89XCIvaG93LWl0LXdvcmtzXCI+XHJcbiAgICAgICAgICAgICAgPFNlbGVjdG9yVGV4dD5SaWRlciA8L1NlbGVjdG9yVGV4dD5cclxuICAgICAgICAgICAgPC9Ecml2ZXI+XHJcbiAgICAgICAgICAgIDxVc2VyIHRvPVwiL2hvdy1pdC13b3Jrcy9kcml2ZXJcIj5cclxuICAgICAgICAgICAgICA8U2VsZWN0b3JUZXh0PkRyaXZlcjwvU2VsZWN0b3JUZXh0PlxyXG4gICAgICAgICAgICA8L1VzZXI+XHJcbiAgICAgICAgICA8L1NlbGVjdG9yPlxyXG4gICAgICAgIDwvV29ya3NTZWxlY3Rvcj5cclxuXHJcbiAgICAgICAgPFdvcmtzUm93PlxyXG4gICAgICAgICAgPFRvcFJvdz5cclxuICAgICAgICAgICAgPERvd25sb2FkU2VjdGlvbj5cclxuICAgICAgICAgICAgICA8RG93bmxvYWRDb3Zlcj5cclxuICAgICAgICAgICAgICAgIDxEb3dubG9hZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgIDxEb3dubG9hZE51bWJlcj5cclxuICAgICAgICAgICAgICAgICAgICA8TnVtYmVyVGV4dD4xPC9OdW1iZXJUZXh0PlxyXG4gICAgICAgICAgICAgICAgICA8L0Rvd25sb2FkTnVtYmVyPlxyXG4gICAgICAgICAgICAgICAgICA8RG93bmxvYWRUZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxEb3dubG9hZFRpdGxlPkRvd25sb2FkIHRoZSBhcHAgYW5kIHNpZ24gdXA8L0Rvd25sb2FkVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPERvd25sb2FkYm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgIFlvdSBjYW4gZHJpdmUgYW5kIG1ha2UgYXMgbXVjaCBhcyB5b3Ugd2FudC4gQW5kLCB0aGUgbW9yZVxyXG4gICAgICAgICAgICAgICAgICAgICAgeW91IGRyaXZlLCB0aGUgbW9yZSB5b3UgY291bGQgbWFrZS4gUGx1cywgeW91ciBmYXJlcyBnZXRcclxuICAgICAgICAgICAgICAgICAgICAgIGF1dG9tYXRpY2FsbHkgZGVwb3NpdGVkIHdlZWtseS5cclxuICAgICAgICAgICAgICAgICAgICA8L0Rvd25sb2FkYm9keT5cclxuICAgICAgICAgICAgICAgICAgPC9Eb3dubG9hZFRleHQ+XHJcbiAgICAgICAgICAgICAgICA8L0Rvd25sb2FkQ29udGVudD5cclxuICAgICAgICAgICAgICAgIDxEb3dubG9hZEFwcD5cclxuICAgICAgICAgICAgICAgICAgPEFwcEltYWdlIHNyYz17YXBwfSBhbHQ9XCJ1c2Ugd2lra2kgbXkgd2lra2lcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9Eb3dubG9hZEFwcD5cclxuICAgICAgICAgICAgICA8L0Rvd25sb2FkQ292ZXI+XHJcbiAgICAgICAgICAgIDwvRG93bmxvYWRTZWN0aW9uPlxyXG4gICAgICAgICAgPC9Ub3BSb3c+XHJcbiAgICAgICAgICA8Qm90dG9tUm93PlxyXG4gICAgICAgICAgICA8U2Vjb25kUm93PlxyXG4gICAgICAgICAgICAgIDxTZWNvbmRNYXNrIHNyYz17aWNvbn0gYWx0PVwidXNlIHdpa2tpIG15IHdpa2tpXCIgLz5cclxuICAgICAgICAgICAgICA8Qm90dG9tQ292ZXI+XHJcbiAgICAgICAgICAgICAgICA8U2Vjb25kQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgPFNlY29uZE51bWJlcj5cclxuICAgICAgICAgICAgICAgICAgICA8U2Vjb25kVGV4dD4yPC9TZWNvbmRUZXh0PlxyXG4gICAgICAgICAgICAgICAgICA8L1NlY29uZE51bWJlcj5cclxuICAgICAgICAgICAgICAgICAgPFNlY29uZERvd25sb2FkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWNvbmRUaXRsZT5QaWNrIHVwIG9yZGVyLCBhbmQgZGVsaXZlcjwvU2Vjb25kVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPFNlY29uZFBhcmE+XHJcbiAgICAgICAgICAgICAgICAgICAgICBZb3UgY2FuIGRyaXZlIGFuZCBtYWtlIGFzIG11Y2ggYXMgeW91IHdhbnQuIEFuZCwgdGhlIG1vcmVcclxuICAgICAgICAgICAgICAgICAgICAgIHlvdSBkcml2ZSwgdGhlIG1vcmUgeW91IGNvdWxkIG1ha2UuIFBsdXMsIHlvdXIgZmFyZXMgZ2V0XHJcbiAgICAgICAgICAgICAgICAgICAgICBhdXRvbWF0aWNhbGx5IGRlcG9zaXRlZCB3ZWVrbHkuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9TZWNvbmRQYXJhPlxyXG4gICAgICAgICAgICAgICAgICA8L1NlY29uZERvd25sb2FkPlxyXG4gICAgICAgICAgICAgICAgPC9TZWNvbmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgPFNlY29uZEltYWdlPlxyXG4gICAgICAgICAgICAgICAgICA8U2Vjb25kTHVzdHJhdGlvbiBzcmM9e3JvdXRlfSBhbHQ9XCJteXdpa2tpIHVzZSB3aWtraVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L1NlY29uZEltYWdlPlxyXG4gICAgICAgICAgICAgIDwvQm90dG9tQ292ZXI+XHJcbiAgICAgICAgICAgIDwvU2Vjb25kUm93PntcIiBcIn1cclxuICAgICAgICAgICAgPFRoaXJkUm93PlxyXG4gICAgICAgICAgICAgIDxUaGlyZE1hc2sgc3JjPXtiYXZlfSBhbHQ9XCJ1c2Ugd2lra2kgbXkgd2lra2lcIiAvPlxyXG4gICAgICAgICAgICAgIDxUaGlyZEJvdHRvbUNvdmVyPlxyXG4gICAgICAgICAgICAgICAgPFRoaXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgPFRoaXJkTnVtYmVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxUaGlyZFRleHQ+MzwvVGhpcmRUZXh0PlxyXG4gICAgICAgICAgICAgICAgICA8L1RoaXJkTnVtYmVyPlxyXG4gICAgICAgICAgICAgICAgICA8VGhpcmREb3dubG9hZD5cclxuICAgICAgICAgICAgICAgICAgICA8VGhpcmRUaXRsZT5HZXQgcGFpZCBhbmQgY2FzaG91dDwvVGhpcmRUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICA8VGhpcmRQYXJhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgWW91IGNhbiBkcml2ZSBhbmQgbWFrZSBhcyBtdWNoIGFzIHlvdSB3YW50LiBBbmQsIHRoZSBtb3JlXHJcbiAgICAgICAgICAgICAgICAgICAgICB5b3UgZHJpdmUsIHRoZSBtb3JlIHlvdSBjb3VsZCBtYWtlLiBQbHVzLCB5b3VyIGZhcmVzIGdldFxyXG4gICAgICAgICAgICAgICAgICAgICAgYXV0b21hdGljYWxseSBkZXBvc2l0ZWQgd2Vla2x5LlxyXG4gICAgICAgICAgICAgICAgICAgIDwvVGhpcmRQYXJhPlxyXG4gICAgICAgICAgICAgICAgICA8L1RoaXJkRG93bmxvYWQ+XHJcbiAgICAgICAgICAgICAgICA8L1RoaXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgIDxUaGlyZEltYWdlPlxyXG4gICAgICAgICAgICAgICAgICA8VGhpcmRMdXN0cmF0aW9uIHNyYz17cGF5fSBhbHQ9XCJteXdpa2tpIHVzZSB3aWtraVwiIC8+XHJcbiAgICAgICAgICAgICAgICA8L1RoaXJkSW1hZ2U+XHJcbiAgICAgICAgICAgICAgPC9UaGlyZEJvdHRvbUNvdmVyPlxyXG4gICAgICAgICAgICA8L1RoaXJkUm93PlxyXG4gICAgICAgICAgPC9Cb3R0b21Sb3c+XHJcbiAgICAgICAgPC9Xb3Jrc1Jvdz5cclxuICAgICAgPC9Db3Zlcj5cclxuICAgIDwvQm9keT5cclxuICApXHJcbn1cclxuY29uc3QgQm9keSA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXJnaW46IDA7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgbWluLWhlaWdodDogNjAwcHg7XHJcbiAgY29sb3I6ICR7V2lra2lUaGVtZS5ibGFja307XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTZweCA0MHB4O1xyXG4gIGJhY2tncm91bmQ6ICR7V2lra2lUaGVtZS5zbm93V2hpdGV9O1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcclxuICAgIG1pbi1oZWlnaHQ6IDQ1MHB4O1xyXG4gIH1cclxuYFxyXG5jb25zdCBDb3ZlciA9IHN0eWxlZC5kaXZgXHJcbiAgY29sb3I6ICR7V2lra2lUaGVtZS5ibGFja307XHJcbiAgbWF4LXdpZHRoOiAxMTAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAxNnB4IGF1dG87XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmBcclxuY29uc3QgV29ya3NTZWxlY3RvciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbmBcclxuY29uc3QgU2VsZWN0b3IgPSBzdHlsZWQuZGl2YFxyXG4gIGhlaWdodDogNjRweDtcclxuICBtYXgtd2lkdGg6IDM0MHB4O1xyXG4gIG1hcmdpbjogNDBweCBhdXRvO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICR7V2lra2lUaGVtZS53aGl0ZX07XHJcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gXHJcbmNvbnN0IFVzZXIgPSBzdHlsZWQoTGluaylgXHJcbiAgaGVpZ2h0OiA0NHB4O1xyXG4gIG1heC13aWR0aDogMTU0cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICBwYWRkaW5nOiAxNHB4IDU2cHg7XHJcbiAgY29sb3I6ICR7V2lra2lUaGVtZS53aGl0ZX07XHJcbiAgYmFja2dyb3VuZDogJHtXaWtraVRoZW1lLmJsYWNrfTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYFxyXG5jb25zdCBEcml2ZXIgPSBzdHlsZWQoTGluaylgXHJcbiAgaGVpZ2h0OiA0NHB4O1xyXG4gIG1heC13aWR0aDogMTU0cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICBwYWRkaW5nOiAxNHB4IDU2cHg7XHJcbiAgY29sb3I6ICR7V2lra2lUaGVtZS5ibGFja307XHJcbiAgYmFja2dyb3VuZDogJHtXaWtraVRoZW1lLndoaXRlfTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYFxyXG5cclxuY29uc3QgU2VsZWN0b3JUZXh0ID0gc3R5bGVkKFN1YlRpdGxlKWBgXHJcbmNvbnN0IFdvcmtzUm93ID0gc3R5bGVkLmRpdmBcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmBcclxuXHJcbmNvbnN0IFRvcFJvdyA9IHN0eWxlZC5kaXZgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiA0MHB4IGF1dG87XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmBcclxuXHJcbmNvbnN0IEJvdHRvbVJvdyA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgyLCAxZnIpO1xyXG4gIGdyaWQtZ2FwOiA0MHB4O1xyXG4gIGdhcDogNDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk1MHB4KSB7XHJcbiAgICBncmlkLWdhcDogMjRweDtcclxuICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpO1xyXG4gICAgZ2FwOiAyNHB4O1xyXG4gIH1cclxuYFxyXG5jb25zdCBEb3dubG9hZFNlY3Rpb24gPSBzdHlsZWQuZGl2YFxyXG4gIG1heC1oZWlnaHQ6IDU1MHB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiA1NDBweDtcclxuICBtYXgtd2lkdGg6IDExMDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICBiYWNrZ3JvdW5kOiAke1dpa2tpVGhlbWUud2hpdGV9O1xyXG5gXHJcbmNvbnN0IERvd25sb2FkQ292ZXIgPSBzdHlsZWQuZGl2YFxyXG4gIG1heC13aWR0aDogOTcycHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiA2NHB4IGF1dG8gMCBhdXRvO1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcclxuICBncmlkLWdhcDogNzJweDtcclxuICBnYXA6IDcycHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NTBweCkge1xyXG4gICAgZ3JpZC1nYXA6IDM2cHg7XHJcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG4gICAgbWFyZ2luOiA0OHB4IGF1dG8gMCBhdXRvO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgMWZyKTtcclxuICAgIGdhcDogMzZweDtcclxuICB9XHJcbmBcclxuY29uc3QgRG93bmxvYWRDb250ZW50ID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogODBweCBhdXRvO1xyXG4gIGdyaWQtZ2FwOiAzMnB4O1xyXG4gIGdhcDogMzJweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQ4cHggYXV0bztcclxuICB9XHJcbmBcclxuY29uc3QgRG93bmxvYWROdW1iZXIgPSBzdHlsZWQuc3BhbmBcclxuICBoZWlnaHQ6IDgwcHg7XHJcbiAgd2lkdGg6IDgwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJHtXaWtraVRoZW1lLmJsYWNrfTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgd2lkdGg6IDQ4cHg7XHJcbiAgfVxyXG5gXHJcbmNvbnN0IE51bWJlclRleHQgPSBzdHlsZWQoSGVhZGVyNSlgYFxyXG5jb25zdCBEb3dubG9hZFRleHQgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuYFxyXG5jb25zdCBEb3dubG9hZFRpdGxlID0gc3R5bGVkKEhlYWRlcjMpYGBcclxuY29uc3QgRG93bmxvYWRib2R5ID0gc3R5bGVkKEJvZHkzKWBcclxuICBtYXJnaW46IDI0cHggMDtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XHJcbiAgICBtYXJnaW46IDE2cHggMDtcclxuICB9XHJcbmBcclxuY29uc3QgRG93bmxvYWRBcHAgPSBzdHlsZWQuZGl2YFxyXG4gIGhlaWdodDogNzIxcHg7XHJcbiAgbWF4LXdpZHRoOiAzNjFweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDAgYXV0bztcclxuYFxyXG5jb25zdCBBcHBJbWFnZSA9IHN0eWxlZC5pbWdgXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG5gXHJcbmNvbnN0IFNlY29uZFJvdyA9IHN0eWxlZC5kaXZgXHJcbiAgbWF4LWhlaWdodDogNjAwcHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDU4MHB4O1xyXG4gIG1heC13aWR0aDogNTIwcHg7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gIGJhY2tncm91bmQ6ICR7V2lra2lUaGVtZS5saWdodFllbGxsb3d9O1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcclxuICAgIG1pbi1oZWlnaHQ6IDQwMHB4O1xyXG4gIH1cclxuYFxyXG5cclxuY29uc3QgU2Vjb25kTWFzayA9IHN0eWxlZC5pbWdgXHJcbiAgaGVpZ2h0OiAyNTBweDtcclxuICB3aWR0aDogMjEzcHg7XHJcbiAgcmlnaHQ6IDRweDtcclxuICB0b3A6IC0xMnB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuYFxyXG5cclxuY29uc3QgVGhpcmRNYXNrID0gc3R5bGVkLmltZ2BcclxuICBsZWZ0OiAtNDBweDtcclxuICBoZWlnaHQ6IDI3N3B4O1xyXG4gIHdpZHRoOiA0NDhweDtcclxuICB0b3A6IC0zMnB4O1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuYFxyXG5jb25zdCBCb3R0b21Db3ZlciA9IHN0eWxlZC5kaXZgXHJcbiAgbWF4LXdpZHRoOiA0ODFweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMjtcclxuICBtYXJnaW46IDQ4cHggYXV0byAwIGF1dG87XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xyXG4gICAgbWFyZ2luOiAzMnB4IGF1dG8gMCBhdXRvO1xyXG4gIH1cclxuYFxyXG5jb25zdCBTZWNvbmRDb250ZW50ID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogODBweCBhdXRvO1xyXG4gIGdyaWQtZ2FwOiAzMnB4O1xyXG4gIGdhcDogMzJweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDQ4cHggYXV0bztcclxuICB9XHJcbmBcclxuY29uc3QgU2Vjb25kTnVtYmVyID0gc3R5bGVkLmRpdmBcclxuICBoZWlnaHQ6IDgwcHg7XHJcbiAgd2lkdGg6IDgwcHg7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgJHtXaWtraVRoZW1lLmJsYWNrfTtcclxuICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xyXG4gICAgaGVpZ2h0OiA0OHB4O1xyXG4gICAgd2lkdGg6IDQ4cHg7XHJcbiAgfVxyXG5gXHJcbmNvbnN0IFNlY29uZFRleHQgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuYFxyXG5jb25zdCBTZWNvbmRUaXRsZSA9IHN0eWxlZChIZWFkZXIzKWBcclxuICBjb2xvcjogJHtXaWtraVRoZW1lLmJsYWNrfTtcclxuICBzcGFuIHtcclxuICAgIGNvbG9yOiAke1dpa2tpVGhlbWUud2hpdGV9O1xyXG4gIH1cclxuYFxyXG5jb25zdCBTZWNvbmRQYXJhID0gc3R5bGVkKEJvZHkzKWBcclxuICBtYXJnaW46IDI0cHggMDtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XHJcbiAgICBtYXJnaW46IDE2cHggMDtcclxuICB9XHJcbmBcclxuY29uc3QgU2Vjb25kRG93bmxvYWQgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuYFxyXG5jb25zdCBTZWNvbmRJbWFnZSA9IHN0eWxlZC5kaXZgXHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDI1MHB4O1xyXG4gIG1heC1oZWlnaHQ6IDQ0MXB4O1xyXG4gIG1heC13aWR0aDogNDQxcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICBtYXJnaW4tdG9wOiAtNjBweDtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICBtYXgtaGVpZ2h0OiA0MDBweDtcclxuICB9XHJcbmBcclxuY29uc3QgU2Vjb25kTHVzdHJhdGlvbiA9IHN0eWxlZC5pbWdgXHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDI1MHB4O1xyXG4gIG1heC1oZWlnaHQ6IDQ0MXB4O1xyXG4gIG1heC13aWR0aDogNDQxcHg7XHJcbmBcclxuXHJcbmNvbnN0IFRoaXJkUm93ID0gc3R5bGVkLmRpdmBcclxuICBtYXgtaGVpZ2h0OiA2MDBweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWluLWhlaWdodDogNTgwcHg7XHJcbiAgbWF4LXdpZHRoOiA1MjBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgYmFja2dyb3VuZDogJHtXaWtraVRoZW1lLmRhcmtSZWR9O1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcclxuICAgIG1pbi1oZWlnaHQ6IDQwMHB4O1xyXG4gIH1cclxuYFxyXG5jb25zdCBUaGlyZEJvdHRvbUNvdmVyID0gc3R5bGVkLmRpdmBcclxuICBtYXgtd2lkdGg6IDQ4MXB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAyO1xyXG4gIG1hcmdpbjogNDhweCBhdXRvIDAgYXV0bztcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XHJcbiAgICBtYXJnaW46IDMycHggYXV0byAwIGF1dG87XHJcbiAgfVxyXG5gXHJcbmNvbnN0IFRoaXJkQ29udGVudCA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDgwcHggYXV0bztcclxuICBncmlkLWdhcDogMzJweDtcclxuICBnYXA6IDMycHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0OHB4IGF1dG87XHJcbiAgfVxyXG5gXHJcblxyXG5jb25zdCBUaGlyZE51bWJlciA9IHN0eWxlZC5kaXZgXHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIHdpZHRoOiA4MHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICR7V2lra2lUaGVtZS53aGl0ZX07XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIHdpZHRoOiA0OHB4O1xyXG4gIH1cclxuYFxyXG5jb25zdCBUaGlyZFRleHQgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBjb2xvcjogJHtXaWtraVRoZW1lLndoaXRlfTtcclxuYFxyXG5jb25zdCBUaGlyZFBhcmEgPSBzdHlsZWQoQm9keTMpYFxyXG4gIG1hcmdpbjogMjRweCAwO1xyXG4gIGNvbG9yOiAke1dpa2tpVGhlbWUud2hpdGV9O1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcclxuICAgIG1hcmdpbjogMTZweCAwO1xyXG4gIH1cclxuYFxyXG5jb25zdCBUaGlyZERvd25sb2FkID0gc3R5bGVkLmRpdmBgXHJcbmNvbnN0IFRoaXJkVGl0bGUgPSBzdHlsZWQoSGVhZGVyMylgXHJcbiAgY29sb3I6ICR7V2lra2lUaGVtZS53aGl0ZX07XHJcbmBcclxuY29uc3QgVGhpcmRJbWFnZSA9IHN0eWxlZC5kaXZgXHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDI1MHB4O1xyXG4gIG1heC1oZWlnaHQ6IDQ0MXB4O1xyXG4gIG1heC13aWR0aDogNDQxcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNDBweDtcclxuICBtYXJnaW4tdG9wOiAtNjBweDtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcblxyXG4gICAgbWF4LWhlaWdodDogNDAwcHg7XHJcbiAgfVxyXG5gXHJcbmNvbnN0IFRoaXJkTHVzdHJhdGlvbiA9IHN0eWxlZC5pbWdgXHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5gXHJcbmV4cG9ydCBkZWZhdWx0IFdvcmtzRHJpdmVyXHJcbiIsICJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5pbXBvcnQgeyBXaWtraVRoZW1lIH0gZnJvbSBcIn4vc3R5bGVzL0NvbG9yU3R5bGVzXCJcclxuaW1wb3J0IHsgQm9keTMsIEhlYWRlcjMsIEhlYWRlcjUsIFN1YlRpdGxlIH0gZnJvbSBcIn4vc3R5bGVzL1RleHRTdHlsZXNcIlxyXG5pbXBvcnQgcm91dGUgZnJvbSBcIn4vaW1hZ2VzL3JvdXRlLnBuZ1wiXHJcbmltcG9ydCBwYXkgZnJvbSBcIn4vaW1hZ2VzL3BheS5wbmdcIlxyXG5pbXBvcnQgYXBwIGZyb20gXCJ+L2ltYWdlcy9hcHAucG5nXCJcclxuaW1wb3J0IGJhdmUgZnJvbSBcIn4vaW1hZ2VzL2JhdmUuc3ZnXCJcclxuaW1wb3J0IG1hc2sgZnJvbSBcIn4vaW1hZ2VzL21hc2suc3ZnXCJcclxuaW1wb3J0IHsgTGluayB9IGZyb20gXCJyZW1peFwiXHJcbmNvbnN0IGluZGV4ID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm9keT5cclxuICAgICAgPENvdmVyPlxyXG4gICAgICAgIDxXb3Jrc1NlbGVjdG9yPlxyXG4gICAgICAgICAgPFNlbGVjdG9yPlxyXG4gICAgICAgICAgICA8VXNlciB0bz1cIi9ob3ctaXQtd29ya3NcIj5cclxuICAgICAgICAgICAgICA8U2VsZWN0b3JUZXh0PlJpZGVyPC9TZWxlY3RvclRleHQ+XHJcbiAgICAgICAgICAgIDwvVXNlcj5cclxuICAgICAgICAgICAgPERyaXZlciB0bz1cIi9ob3ctaXQtd29ya3MvZHJpdmVyXCI+XHJcbiAgICAgICAgICAgICAgPFNlbGVjdG9yVGV4dD5Ecml2ZXI8L1NlbGVjdG9yVGV4dD5cclxuICAgICAgICAgICAgPC9Ecml2ZXI+XHJcbiAgICAgICAgICA8L1NlbGVjdG9yPlxyXG4gICAgICAgIDwvV29ya3NTZWxlY3Rvcj5cclxuXHJcbiAgICAgICAgPFdvcmtzUm93PlxyXG4gICAgICAgICAgPFRvcFJvdz5cclxuICAgICAgICAgICAgPERvd25sb2FkU2VjdGlvbj5cclxuICAgICAgICAgICAgICA8RG93bmxvYWRDb3Zlcj5cclxuICAgICAgICAgICAgICAgIDxEb3dubG9hZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgIDxEb3dubG9hZE51bWJlcj5cclxuICAgICAgICAgICAgICAgICAgICA8TnVtYmVyVGV4dD4xPC9OdW1iZXJUZXh0PlxyXG4gICAgICAgICAgICAgICAgICA8L0Rvd25sb2FkTnVtYmVyPlxyXG4gICAgICAgICAgICAgICAgICA8RG93bmxvYWRUZXh0PlxyXG4gICAgICAgICAgICAgICAgICAgIDxEb3dubG9hZFRpdGxlPkRvd25sb2FkIHRoZSBhcHAgYW5kIHNpZ24gdXA8L0Rvd25sb2FkVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPERvd25sb2FkYm9keT5cclxuICAgICAgICAgICAgICAgICAgICAgIFlvdSBjYW4gZHJpdmUgYW5kIG1ha2UgYXMgbXVjaCBhcyB5b3Ugd2FudC4gQW5kLCB0aGUgbW9yZVxyXG4gICAgICAgICAgICAgICAgICAgICAgeW91IGRyaXZlLCB0aGUgbW9yZSB5b3UgY291bGQgbWFrZS4gUGx1cywgeW91ciBmYXJlcyBnZXRcclxuICAgICAgICAgICAgICAgICAgICAgIGF1dG9tYXRpY2FsbHkgZGVwb3NpdGVkIHdlZWtseS5cclxuICAgICAgICAgICAgICAgICAgICA8L0Rvd25sb2FkYm9keT5cclxuICAgICAgICAgICAgICAgICAgPC9Eb3dubG9hZFRleHQ+XHJcbiAgICAgICAgICAgICAgICA8L0Rvd25sb2FkQ29udGVudD5cclxuICAgICAgICAgICAgICAgIDxEb3dubG9hZEFwcD5cclxuICAgICAgICAgICAgICAgICAgPEFwcEltYWdlIHNyYz17YXBwfSBhbHQ9XCJ1c2Ugd2lra2kgbXkgd2lra2lcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9Eb3dubG9hZEFwcD5cclxuICAgICAgICAgICAgICA8L0Rvd25sb2FkQ292ZXI+XHJcbiAgICAgICAgICAgIDwvRG93bmxvYWRTZWN0aW9uPlxyXG4gICAgICAgICAgPC9Ub3BSb3c+XHJcbiAgICAgICAgICA8Qm90dG9tUm93PlxyXG4gICAgICAgICAgICA8U2Vjb25kUm93PlxyXG4gICAgICAgICAgICAgIDxTZWNvbmRNYXNrIHNyYz17bWFza30gYWx0PVwidXNlIHdpa2tpIG15IHdpa2tpXCIgLz5cclxuICAgICAgICAgICAgICA8Qm90dG9tQ292ZXI+XHJcbiAgICAgICAgICAgICAgICA8U2Vjb25kQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgPFNlY29uZE51bWJlcj5cclxuICAgICAgICAgICAgICAgICAgICA8U2Vjb25kVGV4dD4yPC9TZWNvbmRUZXh0PlxyXG4gICAgICAgICAgICAgICAgICA8L1NlY29uZE51bWJlcj5cclxuICAgICAgICAgICAgICAgICAgPFNlY29uZERvd25sb2FkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWNvbmRUaXRsZT5cclxuICAgICAgICAgICAgICAgICAgICAgIFJlcXVlc3QgYSBwaWNrPHNwYW4+dXAgYW48L3NwYW4+ZCBjaG9vc2UgZGVzdGluYVxyXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4+dGlvPC9zcGFuPm5cclxuICAgICAgICAgICAgICAgICAgICA8L1NlY29uZFRpdGxlPlxyXG4gICAgICAgICAgICAgICAgICAgIDxTZWNvbmRQYXJhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgWW91IGNhbiBkcml2ZSBhbmQgbWFrZSBhcyBtdWNoIGFzIHlvdSB3YW50LiBBbmQsIHRoZSBtb3JlXHJcbiAgICAgICAgICAgICAgICAgICAgICB5b3UgZHJpdmUsIHRoZSBtb3JlIHlvdSBjb3VsZCBtYWtlLiBQbHVzLCB5b3VyIGZhcmVzIGdldFxyXG4gICAgICAgICAgICAgICAgICAgICAgYXV0b21hdGljYWxseSBkZXBvc2l0ZWQgd2Vla2x5LlxyXG4gICAgICAgICAgICAgICAgICAgIDwvU2Vjb25kUGFyYT5cclxuICAgICAgICAgICAgICAgICAgPC9TZWNvbmREb3dubG9hZD5cclxuICAgICAgICAgICAgICAgIDwvU2Vjb25kQ29udGVudD5cclxuICAgICAgICAgICAgICAgIDxTZWNvbmRJbWFnZT5cclxuICAgICAgICAgICAgICAgICAgPFNlY29uZEx1c3RyYXRpb24gc3JjPXtyb3V0ZX0gYWx0PVwibXl3aWtraSB1c2Ugd2lra2lcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9TZWNvbmRJbWFnZT5cclxuICAgICAgICAgICAgICA8L0JvdHRvbUNvdmVyPlxyXG4gICAgICAgICAgICA8L1NlY29uZFJvdz57XCIgXCJ9XHJcbiAgICAgICAgICAgIDxUaGlyZFJvdz5cclxuICAgICAgICAgICAgICA8VGhpcmRNYXNrIHNyYz17YmF2ZX0gYWx0PVwidXNlIHdpa2tpIG15IHdpa2tpXCIgLz5cclxuICAgICAgICAgICAgICA8VGhpcmRCb3R0b21Db3Zlcj5cclxuICAgICAgICAgICAgICAgIDxUaGlyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgIDxUaGlyZE51bWJlcj5cclxuICAgICAgICAgICAgICAgICAgICA8VGhpcmRUZXh0PjM8L1RoaXJkVGV4dD5cclxuICAgICAgICAgICAgICAgICAgPC9UaGlyZE51bWJlcj5cclxuICAgICAgICAgICAgICAgICAgPFRoaXJkRG93bmxvYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRoaXJkVGl0bGU+R2V0IGl0ZW0gZGVsaXZlcmVkIGFuZCBtYWtlIHBheW1lbnQ8L1RoaXJkVGl0bGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRoaXJkUGFyYT5cclxuICAgICAgICAgICAgICAgICAgICAgIFlvdSBjYW4gZHJpdmUgYW5kIG1ha2UgYXMgbXVjaCBhcyB5b3Ugd2FudC4gQW5kLCB0aGUgbW9yZVxyXG4gICAgICAgICAgICAgICAgICAgICAgeW91IGRyaXZlLCB0aGUgbW9yZSB5b3UgY291bGQgbWFrZS4gUGx1cywgeW91ciBmYXJlcyBnZXRcclxuICAgICAgICAgICAgICAgICAgICAgIGF1dG9tYXRpY2FsbHkgZGVwb3NpdGVkIHdlZWtseS5cclxuICAgICAgICAgICAgICAgICAgICA8L1RoaXJkUGFyYT5cclxuICAgICAgICAgICAgICAgICAgPC9UaGlyZERvd25sb2FkPlxyXG4gICAgICAgICAgICAgICAgPC9UaGlyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICA8VGhpcmRJbWFnZT5cclxuICAgICAgICAgICAgICAgICAgPFRoaXJkTHVzdHJhdGlvbiBzcmM9e3BheX0gYWx0PVwibXl3aWtraSB1c2Ugd2lra2lcIiAvPlxyXG4gICAgICAgICAgICAgICAgPC9UaGlyZEltYWdlPlxyXG4gICAgICAgICAgICAgIDwvVGhpcmRCb3R0b21Db3Zlcj5cclxuICAgICAgICAgICAgPC9UaGlyZFJvdz5cclxuICAgICAgICAgIDwvQm90dG9tUm93PlxyXG4gICAgICAgIDwvV29ya3NSb3c+XHJcbiAgICAgIDwvQ292ZXI+XHJcbiAgICA8L0JvZHk+XHJcbiAgKVxyXG59XHJcbmNvbnN0IEJvZHkgPSBzdHlsZWQuc2VjdGlvbmBcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgbWFyZ2luOiAwO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIG1pbi1oZWlnaHQ6IDYwMHB4O1xyXG4gIGNvbG9yOiAke1dpa2tpVGhlbWUuYmxhY2t9O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDE2cHggNDBweDtcclxuICBiYWNrZ3JvdW5kOiAke1dpa2tpVGhlbWUuc25vd1doaXRlfTtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XHJcbiAgICBtaW4taGVpZ2h0OiA0NTBweDtcclxuICB9XHJcbmBcclxuY29uc3QgQ292ZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGNvbG9yOiAke1dpa2tpVGhlbWUuYmxhY2t9O1xyXG4gIG1heC13aWR0aDogMTEwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMTZweCBhdXRvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gXHJcbmNvbnN0IFdvcmtzU2VsZWN0b3IgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5gXHJcbmNvbnN0IFNlbGVjdG9yID0gc3R5bGVkLmRpdmBcclxuICBoZWlnaHQ6IDY0cHg7XHJcbiAgbWF4LXdpZHRoOiAzNDBweDtcclxuICBtYXJnaW46IDQwcHggYXV0bztcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiAke1dpa2tpVGhlbWUud2hpdGV9O1xyXG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYFxyXG5jb25zdCBVc2VyID0gc3R5bGVkKExpbmspYFxyXG4gIGhlaWdodDogNDRweDtcclxuICBtYXgtd2lkdGg6IDE1NHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgcGFkZGluZzogMTRweCA1NnB4O1xyXG4gIGNvbG9yOiAke1dpa2tpVGhlbWUud2hpdGV9O1xyXG4gIGJhY2tncm91bmQ6ICR7V2lra2lUaGVtZS5ibGFja307XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmBcclxuY29uc3QgRHJpdmVyID0gc3R5bGVkKExpbmspYFxyXG4gIGhlaWdodDogNDRweDtcclxuICBtYXgtd2lkdGg6IDE1NHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgcGFkZGluZzogMTRweCA1NnB4O1xyXG4gIGNvbG9yOiAke1dpa2tpVGhlbWUuYmxhY2t9O1xyXG4gIGJhY2tncm91bmQ6ICR7V2lra2lUaGVtZS53aGl0ZX07XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmBcclxuXHJcbmNvbnN0IFNlbGVjdG9yVGV4dCA9IHN0eWxlZChTdWJUaXRsZSlgYFxyXG5jb25zdCBXb3Jrc1JvdyA9IHN0eWxlZC5kaXZgXHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gXHJcblxyXG5jb25zdCBUb3BSb3cgPSBzdHlsZWQuZGl2YFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogNDBweCBhdXRvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gXHJcblxyXG5jb25zdCBCb3R0b21Sb3cgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcclxuICBncmlkLWdhcDogNDBweDtcclxuICBnYXA6IDQwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NTBweCkge1xyXG4gICAgZ3JpZC1nYXA6IDI0cHg7XHJcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgMWZyKTtcclxuICAgIGdhcDogMjRweDtcclxuICB9XHJcbmBcclxuY29uc3QgRG93bmxvYWRTZWN0aW9uID0gc3R5bGVkLmRpdmBcclxuICBtYXgtaGVpZ2h0OiA1NTBweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogNTQwcHg7XHJcbiAgbWF4LXdpZHRoOiAxMTAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgYmFja2dyb3VuZDogJHtXaWtraVRoZW1lLndoaXRlfTtcclxuYFxyXG5jb25zdCBEb3dubG9hZENvdmVyID0gc3R5bGVkLmRpdmBcclxuICBtYXgtd2lkdGg6IDk3MnB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogNjRweCBhdXRvIDAgYXV0bztcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XHJcbiAgZ3JpZC1nYXA6IDcycHg7XHJcbiAgZ2FwOiA3MnB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTUwcHgpIHtcclxuICAgIGdyaWQtZ2FwOiAzNnB4O1xyXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogNDhweCBhdXRvIDAgYXV0bztcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIDFmcik7XHJcbiAgICBnYXA6IDM2cHg7XHJcbiAgfVxyXG5gXHJcbmNvbnN0IERvd25sb2FkQ29udGVudCA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDgwcHggYXV0bztcclxuICBncmlkLWdhcDogMzJweDtcclxuICBnYXA6IDMycHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0OHB4IGF1dG87XHJcbiAgfVxyXG5gXHJcbmNvbnN0IERvd25sb2FkTnVtYmVyID0gc3R5bGVkLnNwYW5gXHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIHdpZHRoOiA4MHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICR7V2lra2lUaGVtZS5ibGFja307XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIHdpZHRoOiA0OHB4O1xyXG4gIH1cclxuYFxyXG5jb25zdCBOdW1iZXJUZXh0ID0gc3R5bGVkKEhlYWRlcjUpYGBcclxuY29uc3QgRG93bmxvYWRUZXh0ID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbmBcclxuY29uc3QgRG93bmxvYWRUaXRsZSA9IHN0eWxlZChIZWFkZXIzKWBgXHJcbmNvbnN0IERvd25sb2FkYm9keSA9IHN0eWxlZChCb2R5MylgXHJcbiAgbWFyZ2luOiAyNHB4IDA7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xyXG4gICAgbWFyZ2luOiAxNnB4IDA7XHJcbiAgfVxyXG5gXHJcbmNvbnN0IERvd25sb2FkQXBwID0gc3R5bGVkLmRpdmBcclxuICBoZWlnaHQ6IDcyMXB4O1xyXG4gIG1heC13aWR0aDogMzYxcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbmBcclxuY29uc3QgQXBwSW1hZ2UgPSBzdHlsZWQuaW1nYFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuYFxyXG5jb25zdCBTZWNvbmRSb3cgPSBzdHlsZWQuZGl2YFxyXG4gIG1heC1oZWlnaHQ6IDYwMHB4O1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiA1ODBweDtcclxuICBtYXgtd2lkdGg6IDUyMHB4O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICBiYWNrZ3JvdW5kOiAke1dpa2tpVGhlbWUueWVsbG93fTtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XHJcbiAgICBtaW4taGVpZ2h0OiA0MDBweDtcclxuICB9XHJcbmBcclxuXHJcbmNvbnN0IFNlY29uZE1hc2sgPSBzdHlsZWQuaW1nYFxyXG4gIGhlaWdodDogMjUwcHg7XHJcbiAgd2lkdGg6IDIxM3B4O1xyXG4gIHJpZ2h0OiA0cHg7XHJcbiAgdG9wOiAtNDhweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbmBcclxuXHJcbmNvbnN0IFRoaXJkTWFzayA9IHN0eWxlZC5pbWdgXHJcbiAgbGVmdDogLTQwcHg7XHJcbiAgaGVpZ2h0OiAyNzdweDtcclxuICB3aWR0aDogNDQ4cHg7XHJcbiAgdG9wOiAtMzJweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbmBcclxuY29uc3QgQm90dG9tQ292ZXIgPSBzdHlsZWQuZGl2YFxyXG4gIG1heC13aWR0aDogNDgxcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgbWFyZ2luOiA0OHB4IGF1dG8gMCBhdXRvO1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcclxuICAgIG1hcmdpbjogMzJweCBhdXRvIDAgYXV0bztcclxuICB9XHJcbmBcclxuY29uc3QgU2Vjb25kQ29udGVudCA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZ3JpZDtcclxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDgwcHggYXV0bztcclxuICBncmlkLWdhcDogMzJweDtcclxuICBnYXA6IDMycHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0OHB4IGF1dG87XHJcbiAgfVxyXG5gXHJcbmNvbnN0IFNlY29uZE51bWJlciA9IHN0eWxlZC5kaXZgXHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIHdpZHRoOiA4MHB4O1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICR7V2lra2lUaGVtZS5ibGFja307XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcclxuICAgIGhlaWdodDogNDhweDtcclxuICAgIHdpZHRoOiA0OHB4O1xyXG4gIH1cclxuYFxyXG5jb25zdCBTZWNvbmRUZXh0ID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbmBcclxuY29uc3QgU2Vjb25kVGl0bGUgPSBzdHlsZWQoSGVhZGVyMylgXHJcbiAgY29sb3I6ICR7V2lra2lUaGVtZS5ibGFja307XHJcbiAgc3BhbiB7XHJcbiAgICBjb2xvcjogJHtXaWtraVRoZW1lLndoaXRlfTtcclxuICB9XHJcbmBcclxuY29uc3QgU2Vjb25kUGFyYSA9IHN0eWxlZChCb2R5MylgXHJcbiAgbWFyZ2luOiAyNHB4IDA7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xyXG4gICAgbWFyZ2luOiAxNnB4IDA7XHJcbiAgfVxyXG5gXHJcbmNvbnN0IFNlY29uZERvd25sb2FkID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbmBcclxuY29uc3QgU2Vjb25kSW1hZ2UgPSBzdHlsZWQuZGl2YFxyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiAyNTBweDtcclxuICBtYXgtaGVpZ2h0OiA0NDFweDtcclxuICBtYXgtd2lkdGg6IDQ0MXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgbWFyZ2luLXRvcDogLTYwcHg7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgbWF4LWhlaWdodDogNDAwcHg7XHJcbiAgfVxyXG5gXHJcbmNvbnN0IFNlY29uZEx1c3RyYXRpb24gPSBzdHlsZWQuaW1nYFxyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiAyNTBweDtcclxuICBtYXgtaGVpZ2h0OiA0NDFweDtcclxuICBtYXgtd2lkdGg6IDQ0MXB4O1xyXG5gXHJcblxyXG5jb25zdCBUaGlyZFJvdyA9IHN0eWxlZC5kaXZgXHJcbiAgbWF4LWhlaWdodDogNjAwcHg7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIG1pbi1oZWlnaHQ6IDU4MHB4O1xyXG4gIG1heC13aWR0aDogNTIwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gIGJhY2tncm91bmQ6ICR7V2lra2lUaGVtZS5ibHVlfTtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XHJcbiAgICBtaW4taGVpZ2h0OiA0MDBweDtcclxuICB9XHJcbmBcclxuY29uc3QgVGhpcmRCb3R0b21Db3ZlciA9IHN0eWxlZC5kaXZgXHJcbiAgbWF4LXdpZHRoOiA0ODFweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMjtcclxuICBtYXJnaW46IDQ4cHggYXV0byAwIGF1dG87XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xyXG4gICAgbWFyZ2luOiAzMnB4IGF1dG8gMCBhdXRvO1xyXG4gIH1cclxuYFxyXG5jb25zdCBUaGlyZENvbnRlbnQgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA4MHB4IGF1dG87XHJcbiAgZ3JpZC1nYXA6IDMycHg7XHJcbiAgZ2FwOiAzMnB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogNDhweCBhdXRvO1xyXG4gIH1cclxuYFxyXG5cclxuY29uc3QgVGhpcmROdW1iZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGhlaWdodDogODBweDtcclxuICB3aWR0aDogODBweDtcclxuICBib3JkZXI6IDFweCBzb2xpZCAke1dpa2tpVGhlbWUud2hpdGV9O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgICB3aWR0aDogNDhweDtcclxuICB9XHJcbmBcclxuY29uc3QgVGhpcmRUZXh0ID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgY29sb3I6ICR7V2lra2lUaGVtZS53aGl0ZX07XHJcbmBcclxuY29uc3QgVGhpcmRQYXJhID0gc3R5bGVkKEJvZHkzKWBcclxuICBtYXJnaW46IDI0cHggMDtcclxuICBjb2xvcjogJHtXaWtraVRoZW1lLndoaXRlfTtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XHJcbiAgICBtYXJnaW46IDE2cHggMDtcclxuICB9XHJcbmBcclxuY29uc3QgVGhpcmREb3dubG9hZCA9IHN0eWxlZC5kaXZgYFxyXG5jb25zdCBUaGlyZFRpdGxlID0gc3R5bGVkKEhlYWRlcjMpYFxyXG4gIGNvbG9yOiAke1dpa2tpVGhlbWUud2hpdGV9O1xyXG5gXHJcbmNvbnN0IFRoaXJkSW1hZ2UgPSBzdHlsZWQuZGl2YFxyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiAyNTBweDtcclxuICBtYXgtaGVpZ2h0OiA0NDFweDtcclxuICBtYXgtd2lkdGg6IDQ0MXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcbiAgbWFyZ2luLXRvcDogLTYwcHg7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG5cclxuICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xyXG4gIH1cclxuYFxyXG5jb25zdCBUaGlyZEx1c3RyYXRpb24gPSBzdHlsZWQuaW1nYFxyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuYFxyXG5leHBvcnQgZGVmYXVsdCBpbmRleFxyXG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCB7IE1ldGFGdW5jdGlvbiB9IGZyb20gXCJyZW1peFwiXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcclxuaW1wb3J0IENvbnRhY3RGb3JtIGZyb20gXCJ+L2NvbXBvbmVudHMvY29udGFjdC9Db250YWN0Rm9ybVwiXHJcbmltcG9ydCBDb250YWN0SGVybyBmcm9tIFwifi9jb21wb25lbnRzL2NvbnRhY3QvQ29udGFjdEhlcm9cIlxyXG5cclxuZXhwb3J0IGNvbnN0IG1ldGE6IE1ldGFGdW5jdGlvbiA9ICgpID0+IHtcclxuICByZXR1cm4ge1xyXG4gICAgdGl0bGU6IFwiQ29udGFjdCAtIFVzZSBXaWtraVwiLFxyXG4gICAgZGVzY3JpcHRpb246IFwiUmVhbCB0aW1lIGRlbGl2ZXJpZXNcIixcclxuICB9XHJcbn1cclxuY29uc3QgY29udGFjdCA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJvZHk+XHJcbiAgICAgIDxDb250YWN0SGVybyAvPlxyXG4gICAgICA8Q29udGFjdEZvcm0gLz5cclxuICAgIDwvQm9keT5cclxuICApXHJcbn1cclxuY29uc3QgQm9keSA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbmBcclxuZXhwb3J0IGRlZmF1bHQgY29udGFjdFxyXG4iLCAiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5pbXBvcnQgeyBXaWtraVRoZW1lIH0gZnJvbSBcIn4vc3R5bGVzL0NvbG9yU3R5bGVzXCJcclxuaW1wb3J0IHsgRm9ybSwgRm9ybWlrLCBGb3JtaWtIZWxwZXJzIH0gZnJvbSBcImZvcm1pa1wiXHJcbmltcG9ydCAqIGFzIFl1cCBmcm9tIFwieXVwXCJcclxuaW1wb3J0IHsgVGV4dElucHV0LCBUZXh0QXJlYSB9IGZyb20gXCJ+L3N0eWxlcy9JbnB1dFN0eWxlc1wiXHJcbmltcG9ydCB7IFN1YlRpdGxlU21hbGwsIEhlYWRlcjMsIFN1YlRpdGxlIH0gZnJvbSBcIn4vc3R5bGVzL1RleHRTdHlsZXNcIlxyXG5pbXBvcnQgeyBGb3JtQnV0dG9uIH0gZnJvbSBcIn4vc3R5bGVzL0J1dHRvblN0eWxlc1wiXHJcblxyXG5pbnRlcmZhY2UgVmFsdWVzIHtcclxuICBlbWFpbDogc3RyaW5nXHJcbiAgbWVzc2FnZTogc3RyaW5nXHJcbiAgbmFtZTogc3RyaW5nXHJcbn1cclxuY29uc3QgQ29udGFjdEZvcm0gPSAoKSA9PiB7XHJcbiAgY29uc3QgQ29udGFjdFNjaGVtYSA9IFl1cC5vYmplY3QoKS5zaGFwZSh7XHJcbiAgICBuYW1lOiBZdXAuc3RyaW5nKCkucmVxdWlyZWQoXCJSZXF1aXJlZFwiKSxcclxuXHJcbiAgICBlbWFpbDogWXVwLnN0cmluZygpLmVtYWlsKCkucmVxdWlyZWQoXCJSZXF1aXJlZFwiKSxcclxuICAgIG1lc3NhZ2U6IFl1cC5zdHJpbmcoKS5yZXF1aXJlZChcIlJlcXVpcmVkXCIpLFxyXG4gIH0pXHJcblxyXG4gIGNvbnN0IFtzZW50LCBzZXRTZW50XSA9IHVzZVN0YXRlPGJvb2xlYW4+KGZhbHNlKVxyXG5cclxuICBjb25zdCBzdWJtaXRGb3JtID0gKHZhbHVlczogVmFsdWVzLCBvblN1Ym1pdFByb3BzOiBGb3JtaWtIZWxwZXJzPFZhbHVlcz4pID0+IHtcclxuICAgIG9uU3VibWl0UHJvcHMuc2V0U3VibWl0dGluZyh0cnVlKVxyXG5cclxuICAgIC8vICAgIG9uU3VibWl0UHJvcHMuc2V0U3VibWl0dGluZyhmYWxzZSlcclxuICAgIC8vIG9uU3VibWl0UHJvcHMucmVzZXRGb3JtKClcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb2R5PlxyXG4gICAgICA8Q292ZXI+XHJcbiAgICAgICAgPEZvcm1UaXRsZT5TZW5kIHVzIGEgbWVzc2FnZTwvRm9ybVRpdGxlPlxyXG4gICAgICAgIDxGb3JtaWtcclxuICAgICAgICAgIGluaXRpYWxWYWx1ZXM9e3sgZW1haWw6IFwiXCIsIG5hbWU6IFwiXCIsIG1lc3NhZ2U6IFwiXCIgfX1cclxuICAgICAgICAgIHZhbGlkYXRpb25TY2hlbWE9e0NvbnRhY3RTY2hlbWF9XHJcbiAgICAgICAgICBvblN1Ym1pdD17c3VibWl0Rm9ybX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7KHtcclxuICAgICAgICAgICAgZXJyb3JzLFxyXG4gICAgICAgICAgICBpc1N1Ym1pdHRpbmcsXHJcbiAgICAgICAgICAgIHZhbHVlcyxcclxuICAgICAgICAgICAgaGFuZGxlQ2hhbmdlLFxyXG4gICAgICAgICAgICBoYW5kbGVCbHVyLFxyXG4gICAgICAgICAgICB0b3VjaGVkLFxyXG4gICAgICAgICAgfSkgPT4gKFxyXG4gICAgICAgICAgICA8Rm9ybUZvcm0+XHJcbiAgICAgICAgICAgICAgPEZvcm1Db2x1bW4+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybUxhYmVsIGh0bWxGb3I9XCJuYW1lXCI+XHJcbiAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgPExhYmVsVGV4dD5OYW1lPC9MYWJlbFRleHQ+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm1MYWJlbD5cclxuICAgICAgICAgICAgICAgIDxGb3JtSW5wdXRcclxuICAgICAgICAgICAgICAgICAgaWQ9XCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XHJcbiAgICAgICAgICAgICAgICAgIGFzPVwiaW5wdXRcIlxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAge2Vycm9ycy5uYW1lICYmIHRvdWNoZWQubmFtZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgIDxGb3JtRXJyb3I+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZvcm1FcnJvclRleHQ+WW91ciBuYW1lIGlzIHJlcXVpcmVkPC9Gb3JtRXJyb3JUZXh0PlxyXG4gICAgICAgICAgICAgICAgICA8L0Zvcm1FcnJvcj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9Gb3JtQ29sdW1uPlxyXG4gICAgICAgICAgICAgIDxGb3JtQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgPEZvcm1MYWJlbCBodG1sRm9yPVwiZW1haWxcIj5cclxuICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICA8TGFiZWxUZXh0PkVtYWlsPC9MYWJlbFRleHQ+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm1MYWJlbD5cclxuICAgICAgICAgICAgICAgIDxGb3JtSW5wdXRcclxuICAgICAgICAgICAgICAgICAgaWQ9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgIHZhbHVlPXt2YWx1ZXMuZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgIG9uQmx1cj17aGFuZGxlQmx1cn1cclxuICAgICAgICAgICAgICAgICAgYXM9XCJpbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgIHR5cGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAge2Vycm9ycy5lbWFpbCAmJiB0b3VjaGVkLmVtYWlsICYmIChcclxuICAgICAgICAgICAgICAgICAgPEZvcm1FcnJvcj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUVycm9yVGV4dD5Zb3VyIGVtYWlsIGlzIHJlcXVpcmVkPC9Gb3JtRXJyb3JUZXh0PlxyXG4gICAgICAgICAgICAgICAgICA8L0Zvcm1FcnJvcj5cclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9Gb3JtQ29sdW1uPlxyXG4gICAgICAgICAgICAgIDxGb3JtQ29sdW1uPlxyXG4gICAgICAgICAgICAgICAgPEZvcm1MYWJlbCBodG1sRm9yPVwibWVzc2FnZVwiPlxyXG4gICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgIDxMYWJlbFRleHQ+TWVzc2FnZTwvTGFiZWxUZXh0PlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtTGFiZWw+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybUFyZWFcclxuICAgICAgICAgICAgICAgICAgaWQ9XCJtZXNzYWdlXCJcclxuICAgICAgICAgICAgICAgICAgdmFsdWU9e3ZhbHVlcy5tZXNzYWdlfVxyXG4gICAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgICAgICBvbkJsdXI9e2hhbmRsZUJsdXJ9XHJcbiAgICAgICAgICAgICAgICAgIGFzPVwidGV4dGFyZWFcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlR5cGUgeW91ciBtZXNzYWdlXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB7ZXJyb3JzLm1lc3NhZ2UgJiYgdG91Y2hlZC5tZXNzYWdlICYmIChcclxuICAgICAgICAgICAgICAgICAgPEZvcm1FcnJvcj5cclxuICAgICAgICAgICAgICAgICAgICA8Rm9ybUVycm9yVGV4dD5Zb3VyIG1lc3NhZ2UgaXMgcmVxdWlyZWQ8L0Zvcm1FcnJvclRleHQ+XHJcbiAgICAgICAgICAgICAgICAgIDwvRm9ybUVycm9yPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICA8L0Zvcm1Db2x1bW4+XHJcbiAgICAgICAgICAgICAgPEZvcm1CdXR0b25XcmFwPlxyXG4gICAgICAgICAgICAgICAgPEZvcm1CdXR0b25NYWluPlNlbmQ8L0Zvcm1CdXR0b25NYWluPlxyXG4gICAgICAgICAgICAgIDwvRm9ybUJ1dHRvbldyYXA+XHJcbiAgICAgICAgICAgIDwvRm9ybUZvcm0+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvRm9ybWlrPlxyXG4gICAgICA8L0NvdmVyPlxyXG4gICAgPC9Cb2R5PlxyXG4gIClcclxufVxyXG5jb25zdCBCb2R5ID0gc3R5bGVkLmRpdmBcclxuICB3aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiA5MDBweDtcclxuICBiYWNrZ3JvdW5kOiAke1dpa2tpVGhlbWUuc25vd1doaXRlfTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiA2NHB4IDA7XHJcbiAgcGFkZGluZzogODBweCAwO1xyXG5gXHJcbmNvbnN0IENvdmVyID0gc3R5bGVkLmRpdmBcclxuICBtaW4taGVpZ2h0OiA1MDBweDtcclxuICBtYXgtd2lkdGg6IDU1MHB4O1xyXG5cclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIC8qIGp1c3RpZnktY29udGVudDogY2VudGVyOyAqL1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGJhY2tncm91bmQ6ICR7V2lra2lUaGVtZS53aGl0ZX07XHJcbiAgcGFkZGluZzogMTZweDtcclxuYFxyXG5jb25zdCBGb3JtVGl0bGUgPSBzdHlsZWQoSGVhZGVyMylgXHJcbiAgbWFyZ2luOiA0MHB4IDAgNTZweCAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XHJcbiAgICBtYXJnaW46IDMycHggMCA0MHB4IDA7XHJcbiAgfVxyXG5gXHJcbmNvbnN0IEZvcm1Gb3JtID0gc3R5bGVkKEZvcm0pYFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG5gXHJcbmNvbnN0IEZvcm1Db2x1bW4gPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMTZweCBhdXRvO1xyXG4gIG1heC13aWR0aDogNDUwcHg7XHJcbmBcclxuY29uc3QgTGFiZWxUZXh0ID0gc3R5bGVkKFN1YlRpdGxlKWBcclxuICBjb2xvcjogJHtXaWtraVRoZW1lLmRhcmt9O1xyXG4gIG1hcmdpbjogMTBweCAwO1xyXG5gXHJcbmNvbnN0IEZvcm1MYWJlbCA9IHN0eWxlZC5sYWJlbGBcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuYFxyXG5jb25zdCBGb3JtSW5wdXQgPSBzdHlsZWQoVGV4dElucHV0KWBgXHJcbmNvbnN0IEZvcm1BcmVhID0gc3R5bGVkKFRleHRBcmVhKWBgXHJcblxyXG5jb25zdCBGb3JtRXJyb3IgPSBzdHlsZWQuZGl2YFxyXG4gIG1hcmdpbjogMTBweCAwO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG5gXHJcbmNvbnN0IEZvcm1FcnJvclRleHQgPSBzdHlsZWQoU3ViVGl0bGVTbWFsbClgXHJcbiAgY29sb3I6ICR7V2lra2lUaGVtZS5yZWR9O1xyXG5gXHJcbmNvbnN0IEZvcm1CdXR0b25XcmFwID0gc3R5bGVkLmRpdmBcclxuICBtYXJnaW46IDQwcHggMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmBcclxuY29uc3QgRm9ybUJ1dHRvbk1haW4gPSBzdHlsZWQoRm9ybUJ1dHRvbilgYFxyXG5leHBvcnQgZGVmYXVsdCBDb250YWN0Rm9ybVxyXG4iLCAiaW1wb3J0IHsgRmllbGQgfSBmcm9tIFwiZm9ybWlrXCJcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5pbXBvcnQgeyBXaWtraVRoZW1lIH0gZnJvbSBcIi4vQ29sb3JTdHlsZXNcIlxyXG5cclxuZXhwb3J0IGNvbnN0IFRleHRJbnB1dCA9IHN0eWxlZChGaWVsZClgXHJcbiAgaGVpZ2h0OiA1NnB4O1xyXG4gIG1heC13aWR0aDogNDUwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogJHtXaWtraVRoZW1lLnNub3dXaGl0ZX07XHJcbiAgYm9yZGVyLXJhZGl1czogMzJweDtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIHBhZGRpbmc6IDE5cHggMjRweDtcclxuICBib3JkZXI6IG5vbmU7XHJcbiAgZm9udC1mYW1pbHk6IFwiQ2xhc2ggRGlzcGxheSBNZWRpdW1cIjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBsaW5lLWhlaWdodDogMS4xO1xyXG4gIGNvbG9yOiAke1dpa2tpVGhlbWUuZGFya307XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG4gIH1cclxuICA6OnBsYWNlaG9sZGVyIHtcclxuICAgIGZvbnQtZmFtaWx5OiBcIkNsYXNoIERpc3BsYXkgTWVkaXVtXCI7XHJcbiAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDEuMTtcclxuICAgIGNvbG9yOiAke1dpa2tpVGhlbWUuZ3JheX07XHJcbiAgICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcclxuICAgIH1cclxuICB9XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBUZXh0QXJlYSA9IHN0eWxlZChGaWVsZClgXHJcbiAgaGVpZ2h0OiAyNTBweDtcclxuICBtYXgtd2lkdGg6IDQ1MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICR7V2lra2lUaGVtZS5zbm93V2hpdGV9O1xyXG4gIGJvcmRlci1yYWRpdXM6IDMycHg7XHJcbiAgb3V0bGluZTogbm9uZTtcclxuICBwYWRkaW5nOiAxOXB4IDI0cHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIHJlc2l6ZTogbm9uZTtcclxuICBmb250LWZhbWlseTogXCJDbGFzaCBEaXNwbGF5IE1lZGl1bVwiO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxLjE7XHJcbiAgY29sb3I6ICR7V2lra2lUaGVtZS5kYXJrfTtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgfVxyXG4gIDo6cGxhY2Vob2xkZXIge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiQ2xhc2ggRGlzcGxheSBNZWRpdW1cIjtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBsaW5lLWhlaWdodDogMS4xO1xyXG4gICAgY29sb3I6ICR7V2lra2lUaGVtZS5ncmF5fTtcclxuICAgIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcclxuICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgfVxyXG4gIH1cclxuYFxyXG4iLCAiaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5pbXBvcnQgeyBXaWtraVRoZW1lIH0gZnJvbSBcIi4vQ29sb3JTdHlsZXNcIlxyXG5pbXBvcnQgeyBMaW5rIH0gZnJvbSBcInJlbWl4XCJcclxuZXhwb3J0IGNvbnN0IE1haW5CdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gIGhlaWdodDogNTZweDtcclxuICBtYXgtd2lkdGg6IDE4MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICR7V2lra2lUaGVtZS5wcmltYXJ5fTtcclxuICBjb2xvcjogJHtXaWtraVRoZW1lLndoaXRlfTtcclxuICBib3JkZXItcmFkaXVzOiAzMnB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkNhYmluZXQgR3JvdGVzayBNZWRpdW1cIjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDBlbTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IFByaW1hcnlCdXR0b24gPSBzdHlsZWQuYnV0dG9uYFxyXG4gIGhlaWdodDogNTZweDtcclxuICBtYXgtd2lkdGg6IDE4MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICR7V2lra2lUaGVtZS5wcmltYXJ5fTtcclxuICBjb2xvcjogJHtXaWtraVRoZW1lLndoaXRlfTtcclxuICBib3JkZXItcmFkaXVzOiAzMnB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkNhYmluZXQgR3JvdGVzayBNZWRpdW1cIjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XHJcbiAgbGV0dGVyLXNwYWNpbmc6IDBlbTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IFNlY29uZGFyeUJ1dHRvbiA9IHN0eWxlZC5idXR0b25gXHJcbiAgaGVpZ2h0OiA1NnB4O1xyXG4gIG1heC13aWR0aDogMTgwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogJHtXaWtraVRoZW1lLnNlY29uZGFyeX07XHJcbiAgY29sb3I6ICR7V2lra2lUaGVtZS5wcmltYXJ5fTtcclxuICBib3JkZXItcmFkaXVzOiAzMnB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBmb250LWZhbWlseTogXCJDYWJpbmV0IEdyb3Rlc2sgTWVkaXVtXCI7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICBmb250LXdlaWdodDogNTAwO1xyXG4gIGxpbmUtaGVpZ2h0OiAxNnB4O1xyXG4gIGxldHRlci1zcGFjaW5nOiAwZW07XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuYFxyXG5cclxuZXhwb3J0IGNvbnN0IFRlcnRpYXJ5QnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICBoZWlnaHQ6IDU2cHg7XHJcbiAgbWF4LXdpZHRoOiAyMDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiAke1dpa2tpVGhlbWUucHJpbWFyeX07XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiAke1dpa2tpVGhlbWUud2hpdGV9O1xyXG4gIGJvcmRlci1yYWRpdXM6IDMycHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgZm9udC1mYW1pbHk6IFwiQ2FiaW5ldCBHcm90ZXNrIE1lZGl1bVwiO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBsaW5lLWhlaWdodDogMTZweDtcclxuICBsZXR0ZXItc3BhY2luZzogMGVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbmBcclxuXHJcbmV4cG9ydCBjb25zdCBGb3JtQnV0dG9uID0gc3R5bGVkLmJ1dHRvbmBcclxuICBoZWlnaHQ6IDU2cHg7XHJcbiAgbWF4LXdpZHRoOiA0NTBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBiYWNrZ3JvdW5kOiAke1dpa2tpVGhlbWUuZGFya307XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiAke1dpa2tpVGhlbWUud2hpdGV9O1xyXG4gIGJvcmRlci1yYWRpdXM6IDMycHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbiAgZm9udC1mYW1pbHk6IFwiQ2FiaW5ldCBHcm90ZXNrIE1lZGl1bVwiO1xyXG4gIGZvbnQtc2l6ZTogMTZweDtcclxuICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgZm9udC13ZWlnaHQ6IDUwMDtcclxuICBsaW5lLWhlaWdodDogMTZweDtcclxuICBsZXR0ZXItc3BhY2luZzogMGVtO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbmBcclxuZXhwb3J0IGNvbnN0IENhc2VCdXR0b24gPSBzdHlsZWQoTGluaylgXHJcbiAgaGVpZ2h0OiA2NHB4O1xyXG4gIG1heC13aWR0aDogMTgwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogJHtXaWtraVRoZW1lLndoaXRlfTtcclxuICBjb2xvcjogJHtXaWtraVRoZW1lLmJsYWNrfTtcclxuICBib3JkZXItcmFkaXVzOiAxNnB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBvdXRsaW5lOiBub25lO1xyXG4gIGZvbnQtZmFtaWx5OiBcIkNhYmluZXQgR3JvdGVzayBNZWRpdW1cIjtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgbGluZS1oZWlnaHQ6IDEuMTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1MHB4KSB7XHJcbiAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICBoZWlnaHQ6IDQ4cHg7XHJcbiAgfVxyXG5gXHJcbiIsICJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5pbXBvcnQgeyBCb2R5MSwgSGVhZGVyMSB9IGZyb20gXCJ+L3N0eWxlcy9UZXh0U3R5bGVzXCJcclxuXHJcbmNvbnN0IENvbnRhY3RIZXJvID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm9keT5cclxuICAgICAgPENvdmVyPlxyXG4gICAgICAgIDxDb250YWN0SGVhZGVyPlxyXG4gICAgICAgICAgPENvbnRhY3RUaXRsZT5Ib3cgY2FuIHdlIGhlbHA/PC9Db250YWN0VGl0bGU+XHJcbiAgICAgICAgICA8Q29udGFjdFRleHQ+XHJcbiAgICAgICAgICAgIExvb2tpbmcgZm9yIHRoZSBzb2x1dGlvbiB0byB5b3VyIGxvZ2lzdGljcyBuZWVkcyBvciBhbnN3ZXJzPyBGaWxsXHJcbiAgICAgICAgICAgIG91dCB0aGUgY29udGFjdCBmb3JtIGFuZCB3ZSB3aWxsIGJlIGluIHRvdWNoLlxyXG4gICAgICAgICAgPC9Db250YWN0VGV4dD5cclxuICAgICAgICA8L0NvbnRhY3RIZWFkZXI+XHJcbiAgICAgIDwvQ292ZXI+XHJcbiAgICA8L0JvZHk+XHJcbiAgKVxyXG59XHJcbmNvbnN0IEJvZHkgPSBzdHlsZWQuc2VjdGlvbmBcclxuICB3aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiA0MDBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYFxyXG5jb25zdCBDb3ZlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbmBcclxuY29uc3QgQ29udGFjdEhlYWRlciA9IHN0eWxlZC5kaXZgXHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZzogMTZweDtcclxuYFxyXG5jb25zdCBDb250YWN0VGl0bGUgPSBzdHlsZWQoSGVhZGVyMSlgXHJcbiAgbWFyZ2luOiA4cHggMDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbmBcclxuY29uc3QgQ29udGFjdFRleHQgPSBzdHlsZWQoQm9keTEpYFxyXG4gIG1heC13aWR0aDogNzAwcHg7XHJcbiAgbWFyZ2luOiAwIGF1dG87XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5gXHJcbmV4cG9ydCBkZWZhdWx0IENvbnRhY3RIZXJvXHJcbiIsICJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5pbXBvcnQgQWJvdXREZWxpdmVyeSBmcm9tIFwifi9jb21wb25lbnRzL2Fib3V0L0Fib3V0RGVsaXZlcnlcIlxyXG5pbXBvcnQgQWJvdXREZXRhaWxzIGZyb20gXCJ+L2NvbXBvbmVudHMvYWJvdXQvQWJvdXREZXRhaWxzXCJcclxuaW1wb3J0IEFib3V0SGVybyBmcm9tIFwifi9jb21wb25lbnRzL2Fib3V0L0Fib3V0SGVyb1wiXHJcbmltcG9ydCBBYm91dFB1cnBvc2UgZnJvbSBcIn4vY29tcG9uZW50cy9hYm91dC9BYm91dFB1cnBvc2VcIlxyXG5cclxuY29uc3QgYWJvdXQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb2R5PlxyXG4gICAgICA8QWJvdXRIZXJvIC8+XHJcbiAgICAgIDxBYm91dFB1cnBvc2UgLz5cclxuICAgICAgPEFib3V0RGVsaXZlcnkgLz5cclxuICAgICAgPEFib3V0RGV0YWlscyAvPlxyXG4gICAgPC9Cb2R5PlxyXG4gIClcclxufVxyXG5jb25zdCBCb2R5ID0gc3R5bGVkLmRpdmBgXHJcbmV4cG9ydCBkZWZhdWx0IGFib3V0XHJcbiIsICJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHN0eWxlZCwgeyBrZXlmcmFtZXMgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5pbXBvcnQgeyBMYXJnZUhlYWRlciB9IGZyb20gXCJ+L3N0eWxlcy9UZXh0U3R5bGVzXCJcclxuXHJcbmNvbnN0IEFib3V0RGVsaXZlcnkgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb2R5PlxyXG4gICAgICA8Q292ZXI+XHJcbiAgICAgICAgPFJpZGVUZXh0PkRlbGl2ZXJ5IG1hZGUgZWFzeTwvUmlkZVRleHQ+XHJcbiAgICAgIDwvQ292ZXI+e1wiIFwifVxyXG4gICAgICA8Q292ZXI+XHJcbiAgICAgICAgPFJpZGVUZXh0PkRlbGl2ZXJ5IG1hZGUgZWFzeTwvUmlkZVRleHQ+XHJcbiAgICAgIDwvQ292ZXI+e1wiIFwifVxyXG4gICAgICA8Q292ZXI+XHJcbiAgICAgICAgPFJpZGVUZXh0PkRlbGl2ZXJ5IG1hZGUgZWFzeTwvUmlkZVRleHQ+XHJcbiAgICAgIDwvQ292ZXI+e1wiIFwifVxyXG4gICAgICA8Q292ZXI+XHJcbiAgICAgICAgPFJpZGVUZXh0PkRlbGl2ZXJ5IG1hZGUgZWFzeTwvUmlkZVRleHQ+XHJcbiAgICAgIDwvQ292ZXI+e1wiIFwifVxyXG4gICAgICA8Q292ZXI+XHJcbiAgICAgICAgPFJpZGVUZXh0PkRlbGl2ZXJ5IG1hZGUgZWFzeTwvUmlkZVRleHQ+XHJcbiAgICAgIDwvQ292ZXI+e1wiIFwifVxyXG4gICAgICA8Q292ZXI+XHJcbiAgICAgICAgPFJpZGVUZXh0PkRlbGl2ZXJ5IG1hZGUgZWFzeTwvUmlkZVRleHQ+XHJcbiAgICAgIDwvQ292ZXI+e1wiIFwifVxyXG4gICAgICA8Q292ZXI+XHJcbiAgICAgICAgPFJpZGVUZXh0PkRlbGl2ZXJ5IG1hZGUgZWFzeTwvUmlkZVRleHQ+XHJcbiAgICAgIDwvQ292ZXI+e1wiIFwifVxyXG4gICAgICA8Q292ZXI+XHJcbiAgICAgICAgPFJpZGVUZXh0PkRlbGl2ZXJ5IG1hZGUgZWFzeTwvUmlkZVRleHQ+XHJcbiAgICAgIDwvQ292ZXI+e1wiIFwifVxyXG4gICAgICA8Q292ZXI+XHJcbiAgICAgICAgPFJpZGVUZXh0PkRlbGl2ZXJ5IG1hZGUgZWFzeTwvUmlkZVRleHQ+XHJcbiAgICAgIDwvQ292ZXI+e1wiIFwifVxyXG4gICAgICA8Q292ZXI+XHJcbiAgICAgICAgPFJpZGVUZXh0PkRlbGl2ZXJ5IG1hZGUgZWFzeTwvUmlkZVRleHQ+XHJcbiAgICAgIDwvQ292ZXI+e1wiIFwifVxyXG4gICAgICA8Q292ZXI+XHJcbiAgICAgICAgPFJpZGVUZXh0PkRlbGl2ZXJ5IG1hZGUgZWFzeTwvUmlkZVRleHQ+XHJcbiAgICAgIDwvQ292ZXI+XHJcbiAgICA8L0JvZHk+XHJcbiAgKVxyXG59XHJcbmNvbnN0IEJvZHkgPSBzdHlsZWQuZGl2YFxyXG4gIGhlaWdodDogMjc2cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gIH1cclxuYFxyXG5jb25zdCBhbmltYXRpb24gPSBrZXlmcmFtZXNgXHJcblxyXG4gMCUge1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xyXG4gIH1cclxuICB0byB7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKC0xMDAlLCAwLCAwKTtcclxuICB9XHJcblxyXG5gXHJcbmNvbnN0IENvdmVyID0gc3R5bGVkLmRpdmBcclxuICBhbmltYXRpb246ICR7YW5pbWF0aW9ufSAxNXMgbGluZWFyIGluZmluaXRlO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gXHJcbmNvbnN0IFJpZGVUZXh0ID0gc3R5bGVkKExhcmdlSGVhZGVyKWBcclxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gIG1hcmdpbjogNDBweDtcclxuYFxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWJvdXREZWxpdmVyeVxyXG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBzdHlsZWQsIHsga2V5ZnJhbWVzIH0gZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcclxuaW1wb3J0IHsgSGVhZGVyMiwgQm9keTMgfSBmcm9tIFwifi9zdHlsZXMvVGV4dFN0eWxlc1wiXHJcbmltcG9ydCB1c2VyIGZyb20gXCJ+L2ltYWdlcy91c2VyLnBuZ1wiXHJcbmNvbnN0IEFib3V0RGV0YWlscyA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJvZHk+XHJcbiAgICAgIDxDb3Zlcj5cclxuICAgICAgICA8RGV0YWlsc0dyaWQ+XHJcbiAgICAgICAgICA8R3JpZExlZnQ+XHJcbiAgICAgICAgICAgIDxSaWRlVGl0bGU+V2FpdGluZyBpcyBib3Jpbmc8L1JpZGVUaXRsZT5cclxuICAgICAgICAgICAgPFJpZGVUZXh0PlxyXG4gICAgICAgICAgICAgIFdlIGtub3cgaG93IGhhcmQgaXQgY2FuIGJlIHRvIHN0YXJ0IGJ1aWxkaW5nIHlvdXIgY2xpZW50IGJhc2UsXHJcbiAgICAgICAgICAgICAgZXNwZWNpYWxseSBhcyBhIHN0dWRlbnQuIFdlIGJ1aWx0IENsdXRjaCB0byBiZSBhIHNhZmUgc3BhY2UgZm9yXHJcbiAgICAgICAgICAgICAgc3R1ZGVudHMgdG8gYnVpbGQgb3V0IHRoZWlyIHNpZGUtaHVzdGxlcyBhbmQgZ2V0IHN1cHBvcnQgZnJvbVxyXG4gICAgICAgICAgICAgIHRoZWlyIGNsYXNzbWF0ZXMuXHJcbiAgICAgICAgICAgIDwvUmlkZVRleHQ+XHJcbiAgICAgICAgICA8L0dyaWRMZWZ0PlxyXG4gICAgICAgICAgPEdyaWRSaWdodD5cclxuICAgICAgICAgICAgPEdyaWRJbWFnZSBzcmM9e3VzZXJ9IGFsdD1cInVzZSB3aWtraVwiIC8+XHJcbiAgICAgICAgICA8L0dyaWRSaWdodD57XCIgXCJ9XHJcbiAgICAgICAgPC9EZXRhaWxzR3JpZD57XCIgXCJ9XHJcbiAgICAgICAgPERldGFpbHNHcmlkPlxyXG4gICAgICAgICAgPEdyaWRSaWdodD5cclxuICAgICAgICAgICAgPEdyaWRJbWFnZSBzcmM9e3VzZXJ9IGFsdD1cInVzZSB3aWtraVwiIC8+XHJcbiAgICAgICAgICA8L0dyaWRSaWdodD5cclxuICAgICAgICAgIDxHcmlkTGVmdD5cclxuICAgICAgICAgICAgPFJpZGVUaXRsZT5PdXIgTWlzc2lvbjwvUmlkZVRpdGxlPlxyXG4gICAgICAgICAgICA8UmlkZVRleHQ+XHJcbiAgICAgICAgICAgICAgV2Uga25vdyBob3cgaGFyZCBpdCBjYW4gYmUgdG8gc3RhcnQgYnVpbGRpbmcgeW91ciBjbGllbnQgYmFzZSxcclxuICAgICAgICAgICAgICBlc3BlY2lhbGx5IGFzIGEgc3R1ZGVudC4gV2UgYnVpbHQgQ2x1dGNoIHRvIGJlIGEgc2FmZSBzcGFjZSBmb3JcclxuICAgICAgICAgICAgICBzdHVkZW50cyB0byBidWlsZCBvdXQgdGhlaXIgc2lkZS1odXN0bGVzIGFuZCBnZXQgc3VwcG9ydCBmcm9tXHJcbiAgICAgICAgICAgICAgdGhlaXIgY2xhc3NtYXRlcy5cclxuICAgICAgICAgICAgPC9SaWRlVGV4dD5cclxuICAgICAgICAgIDwvR3JpZExlZnQ+XHJcbiAgICAgICAgPC9EZXRhaWxzR3JpZD5cclxuICAgICAgPC9Db3Zlcj5cclxuICAgIDwvQm9keT5cclxuICApXHJcbn1cclxuY29uc3QgQm9keSA9IHN0eWxlZC5kaXZgXHJcbiAgbWluLWhlaWdodDogMzAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1hcmdpbjogODBweCAwO1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcclxuICAgIG1hcmdpbjogMjRweCAwO1xyXG4gIH1cclxuYFxyXG5cclxuY29uc3QgQ292ZXIgPSBzdHlsZWQuZGl2YFxyXG4gIG1heC13aWR0aDogMTA1NnB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gXHJcbmNvbnN0IERldGFpbHNHcmlkID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XHJcbiAgZ3JpZC1nYXA6IDQwcHg7XHJcbiAgZ2FwOiA0MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogNDBweCAwO1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTUwcHgpIHtcclxuICAgIGdyaWQtZ2FwOiAyNHB4O1xyXG4gICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEsIDFmcik7XHJcbiAgICBnYXA6IDI0cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMjRweCAwO1xyXG4gIH1cclxuYFxyXG5cclxuY29uc3QgR3JpZExlZnQgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuXHJcbiAgd2lkdGg6IDEwMCU7XHJcbmBcclxuXHJcbmNvbnN0IFJpZGVUaXRsZSA9IHN0eWxlZChIZWFkZXIyKWBgXHJcblxyXG5jb25zdCBHcmlkUmlnaHQgPSBzdHlsZWQuZGl2YFxyXG4gIGhlaWdodDogMTAwJTtcclxuICB3aWR0aDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYFxyXG5cclxuY29uc3QgR3JpZEltYWdlID0gc3R5bGVkLmltZ2BcclxuICBtYXgtd2lkdGg6IDU1MHB4O1xyXG5cclxuICBtYXgtaGVpZ2h0OiA2MzBweDtcclxuICBtaW4taGVpZ2h0OiAzMDBweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbmBcclxuY29uc3QgUmlkZVRleHQgPSBzdHlsZWQoQm9keTMpYFxyXG4gIG1hcmdpbjogMTZweCAwO1xyXG5gXHJcblxyXG5leHBvcnQgZGVmYXVsdCBBYm91dERldGFpbHNcclxuIiwgImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXHJcbmltcG9ydCBtYWluIGZyb20gXCJ+L2ltYWdlcy9tYWluLnBuZ1wiXHJcbmltcG9ydCB7IFdpa2tpVGhlbWUgfSBmcm9tIFwifi9zdHlsZXMvQ29sb3JTdHlsZXNcIlxyXG5pbXBvcnQgeyBCb2R5MiwgSGVhZGVyMSB9IGZyb20gXCJ+L3N0eWxlcy9UZXh0U3R5bGVzXCJcclxuXHJcbmNvbnN0IEFib3V0SGVybyA9ICgpID0+IHtcclxuICByZXR1cm4gKFxyXG4gICAgPEJvZHk+XHJcbiAgICAgIDxNb3JlT3ZlcmxheSAvPlxyXG4gICAgICA8Q292ZXI+XHJcbiAgICAgICAgPE1vcmVUaXRsZT5BQk9VVCBXSUtLSTwvTW9yZVRpdGxlPlxyXG4gICAgICAgIDxDb3ZlckltYWdlPlxyXG4gICAgICAgICAgPEFib3V0SW1hZ2Ugc3JjPXttYWlufSBhbHQ9XCJ0aGUgd2lra2kgbXkgd2lra2lcIiAvPlxyXG4gICAgICAgIDwvQ292ZXJJbWFnZT5cclxuICAgICAgICA8Q292ZXJEZXRzPlxyXG4gICAgICAgICAgPENvdmVyVGl0bGU+Um9idXN0IGRlbGl2ZXJ5IGFuZCBwaWNrdXAgZm9yIE5pZ2VyaWE8L0NvdmVyVGl0bGU+XHJcbiAgICAgICAgICA8Q292ZXJUZXh0PlxyXG4gICAgICAgICAgICBXaWtraSBpcyBhIHRlY2hub2xvZ3kgY29tcGFueSBvbiBhIG1pc3Npb24gdG8gcG93ZXIgdGhlIGRpZ2l0YWxcclxuICAgICAgICAgICAgZWNvbm9teSBpbiBBZnJpY2EsIHVzaW5nIG9wZW4gYmFua2luZyBhcyBhIGxheWVyIGZvciBmaW5hbmNpYWwgZGF0YSxcclxuICAgICAgICAgICAgaWRlbnRpdHkgZGF0YSwgYW5kIGJhbmsgdHJhbnNmZXIgcGF5bWVudHMgZm9yIGJ1c2luZXNzZXMuXHJcbiAgICAgICAgICA8L0NvdmVyVGV4dD5cclxuICAgICAgICA8L0NvdmVyRGV0cz5cclxuICAgICAgPC9Db3Zlcj5cclxuICAgIDwvQm9keT5cclxuICApXHJcbn1cclxuY29uc3QgQm9keSA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBtaW4taGVpZ2h0OiA2MDBweDtcclxuICBjb2xvcjogJHtXaWtraVRoZW1lLndoaXRlfTtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgbWFyZ2luOiAwO1xyXG4gIGJhY2tncm91bmQ6ICR7V2lra2lUaGVtZS53aGl0ZX07XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NTBweCkge1xyXG4gICAgbWluLWhlaWdodDogNDUwcHg7XHJcbiAgfVxyXG5gXHJcblxyXG5jb25zdCBNb3JlT3ZlcmxheSA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIGNvbnRlbnQ6IFwiXCI7XHJcbiAgdG9wOiAwO1xyXG4gIGxlZnQ6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIHotaW5kZXg6IDE7XHJcbiAgYmFja2dyb3VuZDogJHtXaWtraVRoZW1lLnByaW1hcnl9O1xyXG4gIGhlaWdodDogNTAwcHg7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xyXG4gICAgaGVpZ2h0OiAzMDBweDtcclxuICB9XHJcbmBcclxuY29uc3QgQ292ZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAyO1xyXG4gIGNvbG9yOiAke1dpa2tpVGhlbWUud2hpdGV9O1xyXG4gIG1heC13aWR0aDogMTIzMnB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogODBweCBhdXRvO1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcclxuICAgIG1hcmdpbjogNTZweCBhdXRvO1xyXG4gIH1cclxuYFxyXG5cclxuY29uc3QgTW9yZVRpdGxlID0gc3R5bGVkKEhlYWRlcjEpYFxyXG4gIG1hcmdpbjogMTZweCAwO1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xyXG4gICAgbWFyZ2luOiA4cHggMDtcclxuICB9XHJcbmBcclxuXHJcbmNvbnN0IENvdmVySW1hZ2UgPSBzdHlsZWQuZGl2YFxyXG4gIG1pbi1oZWlnaHQ6IDM1MHB4O1xyXG4gIG1heC13aWR0aDogMTIzMnB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogNDhweCBhdXRvO1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcclxuICAgIG1pbi1oZWlnaHQ6IDI1MHB4O1xyXG4gICAgbWFyZ2luOiAyNHB4IGF1dG87XHJcbiAgfVxyXG5gXHJcbmNvbnN0IEFib3V0SW1hZ2UgPSBzdHlsZWQuaW1nYFxyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1pbi1oZWlnaHQ6IDM1MHB4O1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcclxuICAgIG1pbi1oZWlnaHQ6IDI1MHB4O1xyXG4gIH1cclxuYFxyXG5jb25zdCBDb3ZlckRldHMgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1heC13aWR0aDogODAwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWFyZ2luOiAyNHB4IGF1dG87XHJcbmBcclxuY29uc3QgQ292ZXJUaXRsZSA9IHN0eWxlZChIZWFkZXIxKWBcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICR7V2lra2lUaGVtZS5ibGFja307XHJcbmBcclxuY29uc3QgQ292ZXJUZXh0ID0gc3R5bGVkKEJvZHkyKWBcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6ICR7V2lra2lUaGVtZS5ibGFja307XHJcbmBcclxuZXhwb3J0IGRlZmF1bHQgQWJvdXRIZXJvXHJcbiIsICJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCJcclxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxyXG5pbXBvcnQgcG9pbnQgZnJvbSBcIn4vaW1hZ2VzL3BvaW50Y2FyZC5naWZcIlxyXG5pbXBvcnQgeyBXaWtraVRoZW1lIH0gZnJvbSBcIn4vc3R5bGVzL0NvbG9yU3R5bGVzXCJcclxuaW1wb3J0IHsgQm9keTMsIEhlYWRlcjUsIEhlYWRlcjEgfSBmcm9tIFwifi9zdHlsZXMvVGV4dFN0eWxlc1wiXHJcbmltcG9ydCB7IHB1cnBvc2VEYXRhIH0gZnJvbSBcIi4vUHVycG9zZURhdGFcIlxyXG5jb25zdCBBYm91dFB1cnBvc2UgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb2R5PlxyXG4gICAgICA8TW9yZU92ZXJsYXkgLz5cclxuICAgICAgPENvdmVyPlxyXG4gICAgICAgIDxNb3JlVGl0bGU+T3VyIFB1cnBvc2U8L01vcmVUaXRsZT5cclxuXHJcbiAgICAgICAgPERldGFpbHNHcmlkPlxyXG4gICAgICAgICAge3B1cnBvc2VEYXRhLm1hcCgoZGF0YSwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgPFB1cnBvc2VSb3c+XHJcbiAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgIDxQdXJwb3NlSWNvbj57ZGF0YS5pY29ufTwvUHVycG9zZUljb24+XHJcbiAgICAgICAgICAgICAgPE1vcmVTdWI+e2RhdGEudGl0bGV9PC9Nb3JlU3ViPlxyXG4gICAgICAgICAgICAgIDxNb3JlVGV4dD57ZGF0YS50ZXh0fTwvTW9yZVRleHQ+XHJcbiAgICAgICAgICAgIDwvUHVycG9zZVJvdz5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgIDwvRGV0YWlsc0dyaWQ+XHJcbiAgICAgIDwvQ292ZXI+XHJcbiAgICA8L0JvZHk+XHJcbiAgKVxyXG59XHJcbmNvbnN0IEJvZHkgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIG1pbi1oZWlnaHQ6IDYwMHB4O1xyXG4gIGNvbG9yOiAke1dpa2tpVGhlbWUud2hpdGV9O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgYmFja2dyb3VuZDogdXJsKCR7cG9pbnR9KSBuby1yZXBlYXQgY2VudGVyIGNlbnRlci9jb3ZlcjtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU1MHB4KSB7XHJcbiAgICBtaW4taGVpZ2h0OiA0NTBweDtcclxuICB9XHJcbmBcclxuXHJcbmNvbnN0IE1vcmVPdmVybGF5ID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgY29udGVudDogXCJcIjtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgei1pbmRleDogMTtcclxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNSk7XHJcbmBcclxuY29uc3QgQ292ZXIgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAyO1xyXG4gIGNvbG9yOiAke1dpa2tpVGhlbWUud2hpdGV9O1xyXG4gIG1heC13aWR0aDogMTAwMHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMTZweCBhdXRvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG5gXHJcbmNvbnN0IE1vcmVTdWIgPSBzdHlsZWQoSGVhZGVyNSlgXHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuYFxyXG5jb25zdCBNb3JlVGl0bGUgPSBzdHlsZWQoSGVhZGVyMSlgXHJcbiAgbWFyZ2luOiAxNnB4IDA7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5gXHJcbmNvbnN0IE1vcmVUZXh0ID0gc3R5bGVkKEJvZHkzKWBcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIG1hcmdpbjogMTZweCAwO1xyXG5gXHJcbmNvbnN0IERldGFpbHNHcmlkID0gc3R5bGVkLmRpdmBcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XHJcbiAgZ3JpZC1nYXA6IDQwcHg7XHJcbiAgZ2FwOiA0MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogNDBweCAwO1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTUwcHgpIHtcclxuICAgIGdyaWQtZ2FwOiAyNHB4O1xyXG5cclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XHJcbiAgICBnYXA6IDI0cHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogMjRweCAwO1xyXG4gIH1cclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XHJcbiAgICBncmlkLWdhcDogMjRweDtcclxuXHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxLCAxZnIpO1xyXG4gICAgZ2FwOiAyNHB4O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXJnaW46IDI0cHggMDtcclxuICB9XHJcbmBcclxuXHJcbmNvbnN0IFB1cnBvc2VSb3cgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuYFxyXG5cclxuY29uc3QgUHVycG9zZUljb24gPSBzdHlsZWQuc3BhbmBcclxuICB3aWR0aDogNDBweDtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgbWFyZ2luOiAzMnB4IDA7XHJcbmBcclxuZXhwb3J0IGRlZmF1bHQgQWJvdXRQdXJwb3NlXHJcbiIsICJleHBvcnQgY29uc3QgcHVycG9zZURhdGEgPSBbXHJcbiAge1xyXG4gICAgaWNvbjogKFxyXG4gICAgICA8c3ZnXHJcbiAgICAgICAgd2lkdGg9XCI0MFwiXHJcbiAgICAgICAgaGVpZ2h0PVwiNDBcIlxyXG4gICAgICAgIHZpZXdCb3g9XCIwIDAgNDAgNDBcIlxyXG4gICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBkPVwiTTIwIDIzLjMzMzNIMjEuNjY2N0MyMy41IDIzLjMzMzMgMjUgMjEuODMzMyAyNSAyMFYzLjMzMzM0SDEwQzcuNSAzLjMzMzM0IDUuMzE2NjggNC43MTY2NiA0LjE4MzM1IDYuNzQ5OTlcIlxyXG4gICAgICAgICAgc3Ryb2tlPVwid2hpdGVcIlxyXG4gICAgICAgICAgc3Ryb2tlLXdpZHRoPVwiMS41XCJcclxuICAgICAgICAgIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIlxyXG4gICAgICAgICAgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIGQ9XCJNMy4zMzMzNyAyOC4zMzMzQzMuMzMzMzcgMzEuMSA1LjU2NjcxIDMzLjMzMzMgOC4zMzMzNyAzMy4zMzMzSDEwQzEwIDMxLjUgMTEuNSAzMCAxMy4zMzM0IDMwQzE1LjE2NjcgMzAgMTYuNjY2NyAzMS41IDE2LjY2NjcgMzMuMzMzM0gyMy4zMzM0QzIzLjMzMzQgMzEuNSAyNC44MzM0IDMwIDI2LjY2NjcgMzBDMjguNSAzMCAzMCAzMS41IDMwIDMzLjMzMzNIMzEuNjY2N0MzNC40MzM0IDMzLjMzMzMgMzYuNjY2NyAzMS4xIDM2LjY2NjcgMjguMzMzM1YyMy4zMzMzSDMxLjY2NjdDMzAuNzUgMjMuMzMzMyAzMCAyMi41ODMzIDMwIDIxLjY2NjdWMTYuNjY2N0MzMCAxNS43NSAzMC43NSAxNSAzMS42NjY3IDE1SDMzLjgxNjdMMzAuOTY2NyAxMC4wMTY3QzMwLjM2NjcgOC45ODMzNiAyOS4yNjY4IDguMzMzMzQgMjguMDY2OCA4LjMzMzM0SDI1VjIwQzI1IDIxLjgzMzMgMjMuNSAyMy4zMzMzIDIxLjY2NjcgMjMuMzMzM0gyMFwiXHJcbiAgICAgICAgICBzdHJva2U9XCJ3aGl0ZVwiXHJcbiAgICAgICAgICBzdHJva2Utd2lkdGg9XCIxLjVcIlxyXG4gICAgICAgICAgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAgICAgICBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgZD1cIk0xMy4zMzMzIDM2LjY2NjdDMTUuMTc0MyAzNi42NjY3IDE2LjY2NjcgMzUuMTc0MyAxNi42NjY3IDMzLjMzMzNDMTYuNjY2NyAzMS40OTI0IDE1LjE3NDMgMzAgMTMuMzMzMyAzMEMxMS40OTI0IDMwIDEwIDMxLjQ5MjQgMTAgMzMuMzMzM0MxMCAzNS4xNzQzIDExLjQ5MjQgMzYuNjY2NyAxMy4zMzMzIDM2LjY2NjdaXCJcclxuICAgICAgICAgIHN0cm9rZT1cIndoaXRlXCJcclxuICAgICAgICAgIHN0cm9rZS13aWR0aD1cIjEuNVwiXHJcbiAgICAgICAgICBzdHJva2UtbGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgICAgIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBkPVwiTTI2LjY2NjcgMzYuNjY2N0MyOC41MDc3IDM2LjY2NjcgMzAgMzUuMTc0MyAzMCAzMy4zMzMzQzMwIDMxLjQ5MjQgMjguNTA3NyAzMCAyNi42NjY3IDMwQzI0LjgyNTggMzAgMjMuMzMzNCAzMS40OTI0IDIzLjMzMzQgMzMuMzMzM0MyMy4zMzM0IDM1LjE3NDMgMjQuODI1OCAzNi42NjY3IDI2LjY2NjcgMzYuNjY2N1pcIlxyXG4gICAgICAgICAgc3Ryb2tlPVwid2hpdGVcIlxyXG4gICAgICAgICAgc3Ryb2tlLXdpZHRoPVwiMS41XCJcclxuICAgICAgICAgIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIlxyXG4gICAgICAgICAgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIGQ9XCJNMzYuNjY2NyAyMFYyMy4zMzMzSDMxLjY2NjdDMzAuNzUgMjMuMzMzMyAzMCAyMi41ODMzIDMwIDIxLjY2NjdWMTYuNjY2N0MzMCAxNS43NSAzMC43NSAxNSAzMS42NjY3IDE1SDMzLjgxNjZMMzYuNjY2NyAyMFpcIlxyXG4gICAgICAgICAgc3Ryb2tlPVwid2hpdGVcIlxyXG4gICAgICAgICAgc3Ryb2tlLXdpZHRoPVwiMS41XCJcclxuICAgICAgICAgIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIlxyXG4gICAgICAgICAgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIGQ9XCJNMy4zMzMzNyAxMy4zMzMzSDEzLjMzMzRcIlxyXG4gICAgICAgICAgc3Ryb2tlPVwid2hpdGVcIlxyXG4gICAgICAgICAgc3Ryb2tlLXdpZHRoPVwiMS41XCJcclxuICAgICAgICAgIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIlxyXG4gICAgICAgICAgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIGQ9XCJNMy4zMzMzNyAxOC4zMzMzSDEwXCJcclxuICAgICAgICAgIHN0cm9rZT1cIndoaXRlXCJcclxuICAgICAgICAgIHN0cm9rZS13aWR0aD1cIjEuNVwiXHJcbiAgICAgICAgICBzdHJva2UtbGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgICAgIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBkPVwiTTMuMzMzMzcgMjMuMzMzM0g2LjY2NjcxXCJcclxuICAgICAgICAgIHN0cm9rZT1cIndoaXRlXCJcclxuICAgICAgICAgIHN0cm9rZS13aWR0aD1cIjEuNVwiXHJcbiAgICAgICAgICBzdHJva2UtbGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgICAgIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L3N2Zz5cclxuICAgICksXHJcbiAgICB0aXRsZTogXCJGYXN0IGRlbGl2ZXJ5XCIsXHJcbiAgICB0ZXh0OiBcIk5ldyB3b3JsZCBmaW5hbmNpYWwgbGl0ZXJhY3kgZm9yIHRoZSBmdXR1cmUgb2Ygd29yay4gR2l2aW5nIHRoZSB5b3V0aCB0aGUgY29uZmlkZW5jZSB0byBmb2xsb3cgdGhlaXIgY2FsbGluZy5cIixcclxuICB9LFxyXG4gIHtcclxuICAgIGljb246IChcclxuICAgICAgPHN2Z1xyXG4gICAgICAgIHdpZHRoPVwiNDBcIlxyXG4gICAgICAgIGhlaWdodD1cIjQwXCJcclxuICAgICAgICB2aWV3Qm94PVwiMCAwIDQwIDQwXCJcclxuICAgICAgICBmaWxsPVwibm9uZVwiXHJcbiAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXHJcbiAgICAgID5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgZD1cIk01LjAwMDA0IDVIMzVDMzUuNDQyMSA1IDM1Ljg2NiA1LjE3NTU5IDM2LjE3ODYgNS40ODgxNkMzNi40OTExIDUuODAwNzIgMzYuNjY2NyA2LjIyNDY0IDM2LjY2NjcgNi42NjY2N1YzMy4zMzMzQzM2LjY2NjcgMzMuNzc1NCAzNi40OTExIDM0LjE5OTMgMzYuMTc4NiAzNC41MTE4QzM1Ljg2NiAzNC44MjQ0IDM1LjQ0MjEgMzUgMzUgMzVINS4wMDAwNEM0LjU1ODAxIDM1IDQuMTM0MDkgMzQuODI0NCAzLjgyMTUzIDM0LjUxMThDMy41MDg5NyAzNC4xOTkzIDMuMzMzMzcgMzMuNzc1NCAzLjMzMzM3IDMzLjMzMzNWNi42NjY2N0MzLjMzMzM3IDYuMjI0NjQgMy41MDg5NyA1LjgwMDcyIDMuODIxNTMgNS40ODgxNkM0LjEzNDA5IDUuMTc1NTkgNC41NTgwMSA1IDUuMDAwMDQgNVY1Wk02LjY2NjcxIDguMzMzMzNWMzEuNjY2N0gzMy4zMzM0VjguMzMzMzNINi42NjY3MVpNMTQuMTY2NyAyMy4zMzMzSDIzLjMzMzRDMjMuNTU0NCAyMy4zMzMzIDIzLjc2NjQgMjMuMjQ1NSAyMy45MjI2IDIzLjA4OTNDMjQuMDc4OSAyMi45MzMgMjQuMTY2NyAyMi43MjEgMjQuMTY2NyAyMi41QzI0LjE2NjcgMjIuMjc5IDI0LjA3ODkgMjIuMDY3IDIzLjkyMjYgMjEuOTEwN0MyMy43NjY0IDIxLjc1NDUgMjMuNTU0NCAyMS42NjY3IDIzLjMzMzQgMjEuNjY2N0gxNi42NjY3QzE1LjU2MTYgMjEuNjY2NyAxNC41MDE4IDIxLjIyNzcgMTMuNzIwNCAyMC40NDYzQzEyLjkzOSAxOS42NjQ5IDEyLjUgMTguNjA1MSAxMi41IDE3LjVDMTIuNSAxNi4zOTQ5IDEyLjkzOSAxNS4zMzUxIDEzLjcyMDQgMTQuNTUzN0MxNC41MDE4IDEzLjc3MjMgMTUuNTYxNiAxMy4zMzMzIDE2LjY2NjcgMTMuMzMzM0gxOC4zMzM0VjEwSDIxLjY2NjdWMTMuMzMzM0gyNS44MzM0VjE2LjY2NjdIMTYuNjY2N0MxNi40NDU3IDE2LjY2NjcgMTYuMjMzNyAxNi43NTQ1IDE2LjA3NzUgMTYuOTEwN0MxNS45MjEyIDE3LjA2NyAxNS44MzM0IDE3LjI3OSAxNS44MzM0IDE3LjVDMTUuODMzNCAxNy43MjEgMTUuOTIxMiAxNy45MzMgMTYuMDc3NSAxOC4wODkzQzE2LjIzMzcgMTguMjQ1NSAxNi40NDU3IDE4LjMzMzMgMTYuNjY2NyAxOC4zMzMzSDIzLjMzMzRDMjQuNDM4NCAxOC4zMzMzIDI1LjQ5ODMgMTguNzcyMyAyNi4yNzk3IDE5LjU1MzdDMjcuMDYxMSAyMC4zMzUxIDI3LjUgMjEuMzk0OSAyNy41IDIyLjVDMjcuNSAyMy42MDUxIDI3LjA2MTEgMjQuNjY0OSAyNi4yNzk3IDI1LjQ0NjNDMjUuNDk4MyAyNi4yMjc3IDI0LjQzODQgMjYuNjY2NyAyMy4zMzM0IDI2LjY2NjdIMjEuNjY2N1YzMEgxOC4zMzM0VjI2LjY2NjdIMTQuMTY2N1YyMy4zMzMzWlwiXHJcbiAgICAgICAgICBmaWxsPVwid2hpdGVcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvc3ZnPlxyXG4gICAgKSxcclxuICAgIHRpdGxlOiBcIkNoZWFwIGZlZXNcIixcclxuICAgIHRleHQ6IFwiTmV3IHdvcmxkIGZpbmFuY2lhbCBsaXRlcmFjeSBmb3IgdGhlIGZ1dHVyZSBvZiB3b3JrLiBHaXZpbmcgdGhlIHlvdXRoIHRoZSBjb25maWRlbmNlIHRvIGZvbGxvdyB0aGVpciBjYWxsaW5nLlwiLFxyXG4gIH0sXHJcbiAge1xyXG4gICAgaWNvbjogKFxyXG4gICAgICA8c3ZnXHJcbiAgICAgICAgd2lkdGg9XCI0MFwiXHJcbiAgICAgICAgaGVpZ2h0PVwiNDBcIlxyXG4gICAgICAgIHZpZXdCb3g9XCIwIDAgNDAgNDBcIlxyXG4gICAgICAgIGZpbGw9XCJub25lXCJcclxuICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcclxuICAgICAgPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBkPVwiTTUuMjgzNDUgMTIuNEwyMC4wMDAxIDIwLjkxNjZMMzQuNjE2NyAxMi40NDk5XCJcclxuICAgICAgICAgIHN0cm9rZT1cIndoaXRlXCJcclxuICAgICAgICAgIHN0cm9rZS13aWR0aD1cIjEuNVwiXHJcbiAgICAgICAgICBzdHJva2UtbGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgICAgIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBkPVwiTTIwLjAwMDEgMzYuMDE2NlYyMC44OTk5XCJcclxuICAgICAgICAgIHN0cm9rZT1cIndoaXRlXCJcclxuICAgICAgICAgIHN0cm9rZS13aWR0aD1cIjEuNVwiXHJcbiAgICAgICAgICBzdHJva2UtbGluZWNhcD1cInJvdW5kXCJcclxuICAgICAgICAgIHN0cm9rZS1saW5lam9pbj1cInJvdW5kXCJcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxwYXRoXHJcbiAgICAgICAgICBkPVwiTTM2LjAxNjcgMTUuMjgzM1YyNC43MTY3QzM2LjAxNjcgMjQuODAwMSAzNi4wMTY3IDI0Ljg2NjYgMzYuMDAwMSAyNC45NUMzNC44MzM0IDIzLjkzMzMgMzMuMzMzNCAyMy4zMzM0IDMxLjY2NjcgMjMuMzMzNEMzMC4xIDIzLjMzMzQgMjguNjUgMjMuODgzNCAyNy41IDI0LjhDMjUuOTY2NyAyNi4wMTY3IDI1IDI3LjkgMjUgMzBDMjUgMzEuMjUgMjUuMzUgMzIuNDMzNCAyNS45NjY3IDMzLjQzMzRDMjYuMTE2NyAzMy43IDI2LjMgMzMuOTUgMjYuNSAzNC4xODM0TDIzLjQ1MDEgMzUuODY2N0MyMS41NTAxIDM2LjkzMzQgMTguNDUgMzYuOTMzNCAxNi41NSAzNS44NjY3TDcuNjUwMDMgMzAuOTMzNEM1LjYzMzM3IDI5LjgxNjcgMy45ODM0IDI3LjAxNjcgMy45ODM0IDI0LjcxNjdWMTUuMjgzM0MzLjk4MzQgMTIuOTgzMyA1LjYzMzM3IDEwLjE4MzQgNy42NTAwMyA5LjA2NjdMMTYuNTUgNC4xMzMzM0MxOC40NSAzLjA2NjY2IDIxLjU1MDEgMy4wNjY2NiAyMy40NTAxIDQuMTMzMzNMMzIuMzUgOS4wNjY3QzM0LjM2NjcgMTAuMTgzNCAzNi4wMTY3IDEyLjk4MzMgMzYuMDE2NyAxNS4yODMzWlwiXHJcbiAgICAgICAgICBzdHJva2U9XCJ3aGl0ZVwiXHJcbiAgICAgICAgICBzdHJva2Utd2lkdGg9XCIxLjVcIlxyXG4gICAgICAgICAgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAgICAgICBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgZD1cIk0zOC4zMzMzIDMwQzM4LjMzMzMgMzEuMjUgMzcuOTgzNCAzMi40MzMzIDM3LjM2NjcgMzMuNDMzM0MzNy4wMTY3IDM0LjAzMzMgMzYuNTY2NyAzNC41NjY3IDM2LjA1IDM1QzM0Ljg4MzMgMzYuMDUgMzMuMzUgMzYuNjY2NyAzMS42NjY3IDM2LjY2NjdDMjkuMjMzMyAzNi42NjY3IDI3LjExNjYgMzUuMzY2NyAyNS45NjY2IDMzLjQzMzNDMjUuMzUgMzIuNDMzMyAyNSAzMS4yNSAyNSAzMEMyNSAyNy45IDI1Ljk2NjcgMjYuMDE2NyAyNy41IDI0LjhDMjguNjUgMjMuODgzMyAzMC4xIDIzLjMzMzMgMzEuNjY2NyAyMy4zMzMzQzM1LjM1IDIzLjMzMzMgMzguMzMzMyAyNi4zMTY3IDM4LjMzMzMgMzBaXCJcclxuICAgICAgICAgIHN0cm9rZT1cIndoaXRlXCJcclxuICAgICAgICAgIHN0cm9rZS13aWR0aD1cIjEuNVwiXHJcbiAgICAgICAgICBzdHJva2UtbWl0ZXJsaW1pdD1cIjEwXCJcclxuICAgICAgICAgIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIlxyXG4gICAgICAgICAgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPHBhdGhcclxuICAgICAgICAgIGQ9XCJNMzMuNDUgMzEuNzMzM0wyOS45MTY2IDI4LjIxNjZcIlxyXG4gICAgICAgICAgc3Ryb2tlPVwid2hpdGVcIlxyXG4gICAgICAgICAgc3Ryb2tlLXdpZHRoPVwiMS41XCJcclxuICAgICAgICAgIHN0cm9rZS1taXRlcmxpbWl0PVwiMTBcIlxyXG4gICAgICAgICAgc3Ryb2tlLWxpbmVjYXA9XCJyb3VuZFwiXHJcbiAgICAgICAgICBzdHJva2UtbGluZWpvaW49XCJyb3VuZFwiXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8cGF0aFxyXG4gICAgICAgICAgZD1cIk0zMy40MTY2IDI4LjI2NjdMMjkuODgzMyAzMS43ODMzXCJcclxuICAgICAgICAgIHN0cm9rZT1cIndoaXRlXCJcclxuICAgICAgICAgIHN0cm9rZS13aWR0aD1cIjEuNVwiXHJcbiAgICAgICAgICBzdHJva2UtbWl0ZXJsaW1pdD1cIjEwXCJcclxuICAgICAgICAgIHN0cm9rZS1saW5lY2FwPVwicm91bmRcIlxyXG4gICAgICAgICAgc3Ryb2tlLWxpbmVqb2luPVwicm91bmRcIlxyXG4gICAgICAgIC8+XHJcbiAgICAgIDwvc3ZnPlxyXG4gICAgKSxcclxuICAgIHRpdGxlOiBcIkJldHRlciBsb2dpc3RpY3NcIixcclxuICAgIHRleHQ6IFwiTmV3IHdvcmxkIGZpbmFuY2lhbCBsaXRlcmFjeSBmb3IgdGhlIGZ1dHVyZSBvZiB3b3JrLiBHaXZpbmcgdGhlIHlvdXRoIHRoZSBjb25maWRlbmNlIHRvIGZvbGxvdyB0aGVpciBjYWxsaW5nLlwiLFxyXG4gIH0sXHJcbl1cclxuIiwgImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIlxuaW1wb3J0IERvTW9yZSBmcm9tIFwifi9jb21wb25lbnRzL2hvbWUvRG9Nb3JlXCJcbmltcG9ydCBIb21lSGVybyBmcm9tIFwifi9jb21wb25lbnRzL2hvbWUvSG9tZUhlcm9cIlxuaW1wb3J0IEhvbWVXYWl0aW5nIGZyb20gXCJ+L2NvbXBvbmVudHMvaG9tZS9Ib21lV2FpdGluZ1wiXG5pbXBvcnQgVXNlQ2FzZXMgZnJvbSBcIn4vY29tcG9uZW50cy9ob21lL1VzZUNhc2VzXCJcblxuY29uc3QgaW5kZXggPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPEJvZHk+XG4gICAgICA8SG9tZUhlcm8gLz5cbiAgICAgIDxIb21lV2FpdGluZyAvPlxuICAgICAgPFVzZUNhc2VzIC8+XG4gICAgICA8RG9Nb3JlIC8+XG4gICAgPC9Cb2R5PlxuICApXG59XG5jb25zdCBCb2R5ID0gc3R5bGVkLmRpdmBgXG5leHBvcnQgZGVmYXVsdCBpbmRleFxuIiwgImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiXHJcbmltcG9ydCBwb2ludCBmcm9tIFwifi9pbWFnZXMvcG9pbnRjYXJkLmdpZlwiXHJcbmltcG9ydCB7IFdpa2tpVGhlbWUgfSBmcm9tIFwifi9zdHlsZXMvQ29sb3JTdHlsZXNcIlxyXG5pbXBvcnQgeyBCb2R5MywgSGVhZGVyNSwgSGVhZGVyMSB9IGZyb20gXCJ+L3N0eWxlcy9UZXh0U3R5bGVzXCJcclxuY29uc3QgRG9Nb3JlID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8Qm9keT5cclxuICAgICAgPE1vcmVPdmVybGF5IC8+XHJcbiAgICAgIDxDb3Zlcj5cclxuICAgICAgICA8TW9yZVN1Yj5EbyBtb3JlIHdpdGggd2lra2k8L01vcmVTdWI+XHJcbiAgICAgICAgPE1vcmVUaXRsZT5EZXNpZ25lZCBmb3IgdGhlIG5leHQgYmlsbGlvbiB1c2VycyBhbmQgcmlkZXJzPC9Nb3JlVGl0bGU+XHJcbiAgICAgICAgPE1vcmVUZXh0PlxyXG4gICAgICAgICAgQmVhdXRpZnVsbHkgZWFzeSB0byB1c2Ugc29mdHdhcmUgdG8gYWNjZXB0IGNhcmQgcGF5bWVudHMgb24geW91clxyXG4gICAgICAgICAgcGhvbmUsIGFuZCBncm93IHlvdXIgYnVzaW5lc3MgYW55d2hlcmUgb24gdGhlIHBsYW5ldFxyXG4gICAgICAgIDwvTW9yZVRleHQ+XHJcbiAgICAgIDwvQ292ZXI+XHJcbiAgICA8L0JvZHk+XHJcbiAgKVxyXG59XHJcbmNvbnN0IEJvZHkgPSBzdHlsZWQuc2VjdGlvbmBcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogLTE7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgbWluLWhlaWdodDogNjAwcHg7XHJcbiAgY29sb3I6ICR7V2lra2lUaGVtZS53aGl0ZX07XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBiYWNrZ3JvdW5kOiB1cmwoJHtwb2ludH0pIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyL2NvdmVyO1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTUwcHgpIHtcclxuICAgIG1pbi1oZWlnaHQ6IDQ1MHB4O1xyXG4gIH1cclxuYFxyXG5cclxuY29uc3QgTW9yZU92ZXJsYXkgPSBzdHlsZWQuZGl2YFxyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBjb250ZW50OiBcIlwiO1xyXG4gIHRvcDogMDtcclxuICBsZWZ0OiAwO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB6LWluZGV4OiAxO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuYFxyXG5jb25zdCBDb3ZlciA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgY29sb3I6ICR7V2lra2lUaGVtZS53aGl0ZX07XHJcbiAgbWF4LXdpZHRoOiA4MDBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBtYXJnaW46IDE2cHggYXV0bztcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuYFxyXG5jb25zdCBNb3JlU3ViID0gc3R5bGVkKEhlYWRlcjUpYFxyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuYFxyXG5jb25zdCBNb3JlVGl0bGUgPSBzdHlsZWQoSGVhZGVyMSlgXHJcbiAgbWFyZ2luOiAxNnB4IDAgMjRweCAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuYFxyXG5jb25zdCBNb3JlVGV4dCA9IHN0eWxlZChCb2R5MylgXHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5gXHJcbmV4cG9ydCBkZWZhdWx0IERvTW9yZVxyXG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcblxyXG5jb25zdCBIb21lSGVybyA9ICgpID0+IHtcclxuICByZXR1cm4gPGRpdj5Ib21lSGVybzwvZGl2PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lSGVyb1xyXG4iLCAiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiXHJcblxyXG5jb25zdCBIb21lV2FpdGluZyA9ICgpID0+IHtcclxuICByZXR1cm4gPGRpdj5Ib21lV2FpdGluZzwvZGl2PlxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lV2FpdGluZ1xyXG4iLCAiaW1wb3J0IHJlYWN0IGZyb20gXCJyZWFjdFwiXHJcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCJcclxuaW1wb3J0IHVzZXIgZnJvbSBcIn4vaW1hZ2VzL3VzZXIucG5nXCJcclxuaW1wb3J0IGRyaXZlciBmcm9tIFwifi9pbWFnZXMvZHJpdmVyLnBuZ1wiXHJcbmltcG9ydCB7IFdpa2tpVGhlbWUgfSBmcm9tIFwifi9zdHlsZXMvQ29sb3JTdHlsZXNcIlxyXG5pbXBvcnQgeyBIZWFkZXIyLCBIZWFkZXIxIH0gZnJvbSBcIn4vc3R5bGVzL1RleHRTdHlsZXNcIlxyXG5cclxuaW1wb3J0IHsgQ2FzZUJ1dHRvbiB9IGZyb20gXCJ+L3N0eWxlcy9CdXR0b25TdHlsZXNcIlxyXG5cclxuY29uc3QgVXNlQ2FzZXMgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxCb2R5PlxyXG4gICAgICA8Q292ZXI+XHJcbiAgICAgICAgPE1vcmVUaXRsZT5EaXNjb3ZlciBUaGUgV2lra2kgVXNlY2FzZXM8L01vcmVUaXRsZT5cclxuICAgICAgICA8Q2FzZUdyaWQ+XHJcbiAgICAgICAgICA8Q2FzZVJvd1VzZXJzPlxyXG4gICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgIDxNb3JlT3ZlcmxheSAvPlxyXG4gICAgICAgICAgICA8Um93Q29udGVudD5cclxuICAgICAgICAgICAgICA8Q2FzZVRpdGxlPkZvciB1c2VycyA8L0Nhc2VUaXRsZT57XCIgXCJ9XHJcbiAgICAgICAgICAgICAgPENhc2VUaXRsZT5hbmQgY29tcGFuaWVzPC9DYXNlVGl0bGU+XHJcbiAgICAgICAgICAgICAgPENhc2VCdXR0b25MaW5rIHRvPVwiL2hvdy1pdC13b3Jrc1wiPkxlYXJuIG1vcmU8L0Nhc2VCdXR0b25MaW5rPlxyXG4gICAgICAgICAgICA8L1Jvd0NvbnRlbnQ+XHJcbiAgICAgICAgICA8L0Nhc2VSb3dVc2Vycz5cclxuICAgICAgICAgIDxDYXNlUm93RHJpdmVycz5cclxuICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICA8TW9yZU92ZXJsYXkgLz5cclxuICAgICAgICAgICAgPFJvd0NvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgPENhc2VUaXRsZT5Gb3IgZHJpdmVyczwvQ2FzZVRpdGxlPlxyXG5cclxuICAgICAgICAgICAgICA8Q2FzZUJ1dHRvbkxpbmsgdG89XCIvaG93LWl0LXdvcmtzL2RyaXZlclwiPlxyXG4gICAgICAgICAgICAgICAgTGVhcm4gbW9yZVxyXG4gICAgICAgICAgICAgIDwvQ2FzZUJ1dHRvbkxpbms+XHJcbiAgICAgICAgICAgIDwvUm93Q29udGVudD5cclxuICAgICAgICAgIDwvQ2FzZVJvd0RyaXZlcnM+XHJcbiAgICAgICAgPC9DYXNlR3JpZD5cclxuICAgICAgPC9Db3Zlcj5cclxuICAgIDwvQm9keT5cclxuICApXHJcbn1cclxuY29uc3QgQm9keSA9IHN0eWxlZC5zZWN0aW9uYFxyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBtYXJnaW46IDE0NHB4IDA7XHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbiAgbWluLWhlaWdodDogNjAwcHg7XHJcbiAgY29sb3I6ICR7V2lra2lUaGVtZS5ibGFja307XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBiYWNrZ3JvdW5kOiAke1dpa2tpVGhlbWUud2hpdGV9O1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcclxuICAgIG1pbi1oZWlnaHQ6IDQ1MHB4O1xyXG4gICAgbWFyZ2luOiA2NHB4IDA7XHJcbiAgfVxyXG5gXHJcbmNvbnN0IE1vcmVPdmVybGF5ID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgY29udGVudDogXCJcIjtcclxuICB0b3A6IDA7XHJcbiAgbGVmdDogMDtcclxuICBib3JkZXItcmFkaXVzOiAzMnB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB6LWluZGV4OiAxO1xyXG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC41KTtcclxuYFxyXG5cclxuY29uc3QgQ292ZXIgPSBzdHlsZWQuZGl2YFxyXG4gIGNvbG9yOiAke1dpa2tpVGhlbWUuYmxhY2t9O1xyXG4gIG1heC13aWR0aDogMTIzMnB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIG1hcmdpbjogMTZweCBhdXRvO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuXHJcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XHJcbmBcclxuXHJcbmNvbnN0IE1vcmVUaXRsZSA9IHN0eWxlZChIZWFkZXIxKWBcclxuICBtYXJnaW46IDE2cHggMCA4MHB4IDA7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICBtYXgtd2lkdGg6IDU1MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcclxuICAgIG1hcmdpbjogMTZweCAwIDQ4cHggMDtcclxuICB9XHJcbmBcclxuY29uc3QgQ2FzZUdyaWQgPSBzdHlsZWQuZGl2YFxyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMiwgMWZyKTtcclxuICBncmlkLWdhcDogNzJweDtcclxuICBnYXA6IDcycHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5NTBweCkge1xyXG4gICAgZ3JpZC1nYXA6IDM2cHg7XHJcbiAgICBwbGFjZS1pdGVtczogY2VudGVyO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMSwgMWZyKTtcclxuICAgIGdhcDogMzZweDtcclxuICB9XHJcbmBcclxuY29uc3QgQ2FzZVJvd1VzZXJzID0gc3R5bGVkLmRpdmBcclxuICBtYXgtaGVpZ2h0OiA3MDBweDtcclxuICBtaW4taGVpZ2h0OiA2ODBweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiA1ODBweDtcclxuICB3aWR0aDogMTAwJTtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMjtcclxuICBib3JkZXItcmFkaXVzOiAzMnB4O1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbiAgYmFja2dyb3VuZDogdXJsKCR7dXNlcn0pIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyL2NvdmVyO1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcclxuICAgIG1heC1oZWlnaHQ6IDYwMHB4O1xyXG4gICAgbWluLWhlaWdodDogNTUwcHg7XHJcbiAgfVxyXG5gXHJcblxyXG5jb25zdCBSb3dDb250ZW50ID0gc3R5bGVkLmRpdmBcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgei1pbmRleDogMjtcclxuXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBjb2xvcjogJHtXaWtraVRoZW1lLndoaXRlfTtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIG1hcmdpbjogOTZweCA0MHB4O1xyXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpIHtcclxuICAgIG1hcmdpbjogNTZweCAyNHB4O1xyXG4gIH1cclxuICBhIHtcclxuICAgIG1hcmdpbjogMzJweCAwO1xyXG4gICAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2NTBweCkge1xyXG4gICAgICBtYXJnaW46IDI0cHggMDtcclxuICAgIH1cclxuICB9XHJcbmBcclxuY29uc3QgQ2FzZVRpdGxlID0gc3R5bGVkKEhlYWRlcjIpYGBcclxuY29uc3QgQ2FzZUJ1dHRvbkxpbmsgPSBzdHlsZWQoQ2FzZUJ1dHRvbilgYFxyXG5jb25zdCBDYXNlUm93RHJpdmVycyA9IHN0eWxlZC5kaXZgXHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDI7XHJcbiAgcGFkZGluZzogMTZweDtcclxuICBtYXgtaGVpZ2h0OiA3MDBweDtcclxuICBtaW4taGVpZ2h0OiA2ODBweDtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgbWF4LXdpZHRoOiA1ODBweDtcclxuICB3aWR0aDogMTAwJTtcclxuXHJcbiAgYm9yZGVyLXJhZGl1czogMzJweDtcclxuICBiYWNrZ3JvdW5kOiB1cmwoJHtkcml2ZXJ9KSBuby1yZXBlYXQgY2VudGVyIGNlbnRlci9jb3ZlcjtcclxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDY1MHB4KSB7XHJcbiAgICBtYXgtaGVpZ2h0OiA2MDBweDtcclxuICAgIG1pbi1oZWlnaHQ6IDU1MHB4O1xyXG4gIH1cclxuYFxyXG5leHBvcnQgZGVmYXVsdCBVc2VDYXNlc1xyXG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFBdUI7QUFBQTtBQUFBOzs7QUNBdkI7QUFBQTtBQUFBO0FBVUE7QUFFQSxXQUFPLGVBQWUsU0FBUyxjQUFjLEVBQUUsT0FBTztBQUV0RCxRQUFJLFFBQVEsUUFBUTtBQUlwQixXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxTQUFTO0FBQUEsTUFDdEMsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxjQUFjO0FBQUEsTUFDM0MsWUFBWTtBQUFBLE1BQ1osS0FBSyxXQUFZO0FBQUUsZUFBTyxNQUFNO0FBQUE7QUFBQTtBQUVsQyxXQUFPLGVBQWUsU0FBUyxRQUFRO0FBQUEsTUFDckMsWUFBWTtBQUFBLE1BQ1osS0FB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
