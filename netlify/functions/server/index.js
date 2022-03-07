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

// route:C:\Users\Augustine Ogiza\Documents\Development\react\send\app\root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
init_react();
var import_remix2 = __toESM(require_remix());

// app/index.css
var app_default = "/build/_assets/index-R6MKYZV7.css";

// route:C:\Users\Augustine Ogiza\Documents\Development\react\send\app\root.tsx
var meta = () => {
  return { title: "SEND FREIGHT" };
};
var links = () => {
  return [
    { rel: "stylesheet", href: app_default },
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
  }), /* @__PURE__ */ React.createElement(import_remix2.Meta, null), /* @__PURE__ */ React.createElement(import_remix2.Links, null), typeof document === "undefined" ? "__STYLES__" : null), /* @__PURE__ */ React.createElement("body", null, /* @__PURE__ */ React.createElement(import_remix2.Outlet, null), /* @__PURE__ */ React.createElement(import_remix2.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix2.Scripts, null), /* @__PURE__ */ React.createElement(import_remix2.LiveReload, null)));
}

// route:C:\Users\Augustine Ogiza\Documents\Development\react\send\app\routes\index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => routes_default,
  meta: () => meta2
});
init_react();
var import_react15 = __toESM(require("react"));
var import_styled_components18 = __toESM(require("styled-components"));

// app/components/MainContent.tsx
init_react();
var import_react8 = __toESM(require("react"));
var import_styled_components11 = __toESM(require("styled-components"));

// app/styles/ColorStyles.tsx
init_react();
var SendTheme = {
  smokeWhite: "#E9ECF1",
  offWhite: "#F2F4F7",
  white: "#fff",
  black: "#000",
  snowWhite: "#F9FAFC",
  stroke: "#81868C",
  gray: "#78797A",
  dark: "#303030",
  blue: "#0747A6",
  border: "#e4e6ea",
  catColor: "#737a91",
  tableStroke: "#f5f5f5",
  catBG: "rgba(233, 236, 241, 0.6)",
  orange: "#F7C244",
  green: "#5CC685"
};

// app/components/maincontent/Filter.tsx
init_react();
var import_react3 = __toESM(require("react"));
var import_styled_components5 = __toESM(require("styled-components"));

// app/utils/TableData.tsx
init_react();
var tableData = [
  {
    title: "SF-162F318",
    category: "Plain Shirts",
    fromName: "Xiamen, China",
    fromDate: "Ready: 24th Feb, 2021",
    toName: "Lagos, Nigeria",
    toDate: "Expires: 17th Feb, 2021",
    amount: 149e5,
    status: "ready"
  },
  {
    title: "SF-162F318",
    category: "Plain Shirts",
    fromName: "Xiamen, China",
    fromDate: "Ready: 24th Feb, 2021",
    toName: "Lagos, Nigeria",
    toDate: "Expires: 17th Feb, 2021",
    amount: 149e5,
    status: "booked"
  },
  {
    title: "SF-162F318",
    category: "Plain Shirts",
    fromName: "Xiamen, China",
    fromDate: "Ready: 24th Feb, 2021",
    toName: "Lagos, Nigeria",
    toDate: "Expires: 17th Feb, 2021",
    amount: 149e5,
    status: "booked"
  },
  {
    title: "SF-162F318",
    category: "Plain Shirts",
    fromName: "Xiamen, China",
    fromDate: "Ready: 24th Feb, 2021",
    toName: "Lagos, Nigeria",
    toDate: "Expires: 17th Feb, 2021",
    amount: 149e5,
    status: "pending"
  },
  {
    title: "SF-162F318",
    category: "Plain Shirts",
    fromName: "Xiamen, China",
    fromDate: "Ready: 24th Feb, 2021",
    toName: "Lagos, Nigeria",
    toDate: "Expires: 17th Feb, 2021",
    amount: 149e5,
    status: "pending"
  },
  {
    title: "SF-162F318",
    category: "Plain Shirts",
    fromName: "Xiamen, China",
    fromDate: "Ready: 24th Feb, 2021",
    toName: "Lagos, Nigeria",
    toDate: "Expires: 17th Feb, 2021",
    amount: 149e5,
    status: "pending"
  },
  {
    title: "SF-162F318",
    category: "Plain Shirts",
    fromName: "Xiamen, China",
    fromDate: "Ready: 24th Feb, 2021",
    toName: "Lagos, Nigeria",
    toDate: "Expires: 17th Feb, 2021",
    amount: 149e5,
    status: "pending"
  },
  {
    title: "SF-162F318",
    category: "Plain Shirts",
    fromName: "Xiamen, China",
    fromDate: "Ready: 24th Feb, 2021",
    toName: "Lagos, Nigeria",
    toDate: "Expires: 17th Feb, 2021",
    amount: 149e5,
    status: "booked"
  },
  {
    title: "SF-162F318",
    category: "Plain Shirts",
    fromName: "Xiamen, China",
    fromDate: "Ready: 24th Feb, 2021",
    toName: "Lagos, Nigeria",
    toDate: "Expires: 17th Feb, 2021",
    amount: 149e5,
    status: "ready"
  },
  {
    title: "SF-162F318",
    category: "Plain Shirts",
    fromName: "Xiamen, China",
    fromDate: "Ready: 24th Feb, 2021",
    toName: "Lagos, Nigeria",
    toDate: "Expires: 17th Feb, 2021",
    amount: 149e5,
    status: "pending"
  },
  {
    title: "SF-162F318",
    category: "Plain Shirts",
    fromName: "Xiamen, China",
    fromDate: "Ready: 24th Feb, 2021",
    toName: "Lagos, Nigeria",
    toDate: "Expires: 17th Feb, 2021",
    amount: 149e5,
    status: "pending"
  },
  {
    title: "SF-162F318",
    category: "Plain Shirts",
    fromName: "Xiamen, China",
    fromDate: "Ready: 24th Feb, 2021",
    toName: "Lagos, Nigeria",
    toDate: "Expires: 17th Feb, 2021",
    amount: 149e5,
    status: "pending"
  },
  {
    title: "SF-162F318",
    category: "Plain Shirts",
    fromName: "Xiamen, China",
    fromDate: "Ready: 24th Feb, 2021",
    toName: "Lagos, Nigeria",
    toDate: "Expires: 17th Feb, 2021",
    amount: 149e5,
    status: "ready"
  },
  {
    title: "SF-162F318",
    category: "Plain Shirts",
    fromName: "Xiamen, China",
    fromDate: "Ready: 24th Feb, 2021",
    toName: "Lagos, Nigeria",
    toDate: "Expires: 17th Feb, 2021",
    amount: 149e5,
    status: "ready"
  },
  {
    title: "SF-162F318",
    category: "Plain Shirts",
    fromName: "Xiamen, China",
    fromDate: "Ready: 24th Feb, 2021",
    toName: "Lagos, Nigeria",
    toDate: "Expires: 17th Feb, 2021",
    amount: 149e5,
    status: "booked"
  },
  {
    title: "SF-162F318",
    category: "Plain Shirts",
    fromName: "Xiamen, China",
    fromDate: "Ready: 24th Feb, 2021",
    toName: "Lagos, Nigeria",
    toDate: "Expires: 17th Feb, 2021",
    amount: 149e5,
    status: "booked"
  },
  {
    title: "SF-162F318",
    category: "Plain Shirts",
    fromName: "Xiamen, China",
    fromDate: "Ready: 24th Feb, 2021",
    toName: "Lagos, Nigeria",
    toDate: "Expires: 17th Feb, 2021",
    amount: 149e5,
    status: "pending"
  },
  {
    title: "SF-162F318",
    category: "Plain Shirts",
    fromName: "Xiamen, China",
    fromDate: "Ready: 24th Feb, 2021",
    toName: "Lagos, Nigeria",
    toDate: "Expires: 17th Feb, 2021",
    amount: 149e5,
    status: "pending"
  },
  {
    title: "SF-162F318",
    category: "Plain Shirts",
    fromName: "Xiamen, China",
    fromDate: "Ready: 24th Feb, 2021",
    toName: "Lagos, Nigeria",
    toDate: "Expires: 17th Feb, 2021",
    amount: 149e5,
    status: "pending"
  },
  {
    title: "SF-162F318",
    category: "Plain Shirts",
    fromName: "Xiamen, China",
    fromDate: "Ready: 24th Feb, 2021",
    toName: "Lagos, Nigeria",
    toDate: "Expires: 17th Feb, 2021",
    amount: 149e5,
    status: "pending"
  },
  {
    title: "SF-162F318",
    category: "Plain Shirts",
    fromName: "Xiamen, China",
    fromDate: "Ready: 24th Feb, 2021",
    toName: "Lagos, Nigeria",
    toDate: "Expires: 17th Feb, 2021",
    amount: 149e5,
    status: "booked"
  },
  {
    title: "SF-162F318",
    category: "Plain Shirts",
    fromName: "Xiamen, China",
    fromDate: "Ready: 24th Feb, 2021",
    toName: "Lagos, Nigeria",
    toDate: "Expires: 17th Feb, 2021",
    amount: 149e5,
    status: "ready"
  },
  {
    title: "SF-162F318",
    category: "Plain Shirts",
    fromName: "Xiamen, China",
    fromDate: "Ready: 24th Feb, 2021",
    toName: "Lagos, Nigeria",
    toDate: "Expires: 17th Feb, 2021",
    amount: 149e5,
    status: "pending"
  },
  {
    title: "SF-162F318",
    category: "Plain Shirts",
    fromName: "Xiamen, China",
    fromDate: "Ready: 24th Feb, 2021",
    toName: "Lagos, Nigeria",
    toDate: "Expires: 17th Feb, 2021",
    amount: 149e5,
    status: "pending"
  },
  {
    title: "SF-162F318",
    category: "Plain Shirts",
    fromName: "Xiamen, China",
    fromDate: "Ready: 24th Feb, 2021",
    toName: "Lagos, Nigeria",
    toDate: "Expires: 17th Feb, 2021",
    amount: 149e5,
    status: "pending"
  },
  {
    title: "SF-162F318",
    category: "Plain Shirts",
    fromName: "Xiamen, China",
    fromDate: "Ready: 24th Feb, 2021",
    toName: "Lagos, Nigeria",
    toDate: "Expires: 17th Feb, 2021",
    amount: 149e5,
    status: "ready"
  }
];

// app/components/maincontent/Categories.tsx
init_react();
var import_react = __toESM(require("react"));
var import_styled_components3 = __toESM(require("styled-components"));

// app/styles/TextStyles.tsx
init_react();
var import_styled_components2 = __toESM(require("styled-components"));
var Header1 = import_styled_components2.default.h1`
  font-family: "Inter";

  font-size: 24px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
`;
var Header2 = import_styled_components2.default.h2`
  font-family: "Inter";
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.3;
`;
var SidebarText = import_styled_components2.default.h3`
  font-family: "Inter";
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.3;
`;
var CaptionLarge = import_styled_components2.default.h6`
  font-family: "Inter";

  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.3;
`;
var CaptionSmall = import_styled_components2.default.h6`
  font-family: "Inter";
  font-size: 10px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.2;
`;

// app/components/maincontent/Categories.tsx
var Categories = (props) => {
  const { onItemSelect, items, selectedItem, data } = props;
  return /* @__PURE__ */ import_react.default.createElement(Body, null, /* @__PURE__ */ import_react.default.createElement(Cover, null, data && data.map((data2, index) => /* @__PURE__ */ import_react.default.createElement(CategoryName, {
    key: index,
    onClick: () => onItemSelect(data2.name)
  }, /* @__PURE__ */ import_react.default.createElement(CategoryCover, null, /* @__PURE__ */ import_react.default.createElement(CategoryText, null, data2.name), /* @__PURE__ */ import_react.default.createElement(CategoryCount, null, data2.count)), selectedItem === data2.name && /* @__PURE__ */ import_react.default.createElement(ActivePane, null)))));
};
var Body = import_styled_components3.default.div`
  width: 100%;
  height: 20px;
  max-width: 400px;
`;
var Cover = import_styled_components3.default.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  .active {
    color: ${SendTheme.blue};
  }
`;
var CategoryName = import_styled_components3.default.div`
  display: flex;
  flex-direction: column;
  margin: 0 8px 0 0;
  cursor: pointer;
`;
var CategoryCover = import_styled_components3.default.div`
  display: flex;
  flex-direction: row;
`;
var CategoryText = (0, import_styled_components3.default)(SidebarText)`
  margin: 0 8px 0 0;
  color: ${SendTheme.stroke};
`;
var CategoryCount = import_styled_components3.default.span`
  font-family: "Inter";
  font-size: 10px;
  font-style: normal;
  font-weight: 700;
  line-height: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 20px;
  width: 26px;
  border-radius: 8px;
  padding: 4px;
  background: ${SendTheme.catBG};
  color: ${SendTheme.catColor};
`;
var ActivePane = import_styled_components3.default.span`
  height: 3px;
  width: 100%;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  background: ${SendTheme.blue};
  margin: 8px 0 0 0;
`;
var Categories_default = Categories;

// app/components/maincontent/Pagination.tsx
init_react();
var import_react2 = __toESM(require("react"));
var import_styled_components4 = __toESM(require("styled-components"));
var Pagination = (props) => {
  const { postPerPage, totalPosts, first, last, paginate, currentNumber } = props;
  const pageNumbers = [];
  for (let i = 1; i < Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }
  return /* @__PURE__ */ import_react2.default.createElement(Body2, null, /* @__PURE__ */ import_react2.default.createElement(Cover2, null, /* @__PURE__ */ import_react2.default.createElement(PageText, null, "Showing ", first + 1, " - ", last, " of ", totalPosts, " results"), /* @__PURE__ */ import_react2.default.createElement(Counter, null, pageNumbers.map((number) => /* @__PURE__ */ import_react2.default.createElement(CountNumber, {
    className: `${currentNumber === number && "active"}`,
    onClick: () => paginate(number),
    key: number
  }, number)))));
};
var Body2 = import_styled_components4.default.div`
  display: flex;
  flex-direction: row;
`;
var Cover2 = import_styled_components4.default.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
`;
var PageText = (0, import_styled_components4.default)(CaptionLarge)`
  color: ${SendTheme.stroke};
`;
var Counter = import_styled_components4.default.div`
  display: flex;
  flex-direction: row;

  .active {
    color: ${SendTheme.dark};
  }
`;
var CountNumber = (0, import_styled_components4.default)(SidebarText)`
  color: ${SendTheme.dark};
  height: 32px;
  width: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${SendTheme.gray};
`;
var Pagination_default = Pagination;

// app/components/maincontent/Filter.tsx
var Filter = (props) => {
  const {
    paginate,
    postPerPage,
    totalPosts,
    onItemSelect,
    selectedItem,
    first,
    last,
    currentNumber
  } = props;
  const data = [
    { name: "All", count: tableData.length },
    {
      name: "Pending",
      count: tableData.filter((data2) => data2.status === "pending").length
    },
    {
      name: "Ready",
      count: tableData.filter((data2) => data2.status === "ready").length
    },
    {
      name: "Booked",
      count: tableData.filter((data2) => data2.status === "booked").length
    }
  ];
  return /* @__PURE__ */ import_react3.default.createElement(Body3, null, /* @__PURE__ */ import_react3.default.createElement(Cover3, null, /* @__PURE__ */ import_react3.default.createElement(Categories_default, {
    data,
    onItemSelect,
    selectedItem
  }), /* @__PURE__ */ import_react3.default.createElement(Pagination_default, {
    first,
    last,
    paginate,
    totalPosts,
    postPerPage,
    currentNumber
  })), /* @__PURE__ */ import_react3.default.createElement(FilterLine, null));
};
var Body3 = import_styled_components5.default.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
var Cover3 = import_styled_components5.default.div`
  height: 46px;
  max-width: 1206px;
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 24px auto;
  align-items: center;
  justify-content: space-between;
  padding: 0px 40px;
`;
var FilterLine = import_styled_components5.default.span`
  height: 1px;
  width: 100%;

  background: ${SendTheme.border};
`;
var Filter_default = Filter;

// app/components/maincontent/Header.tsx
init_react();
var import_react4 = __toESM(require("react"));
var import_styled_components7 = __toESM(require("styled-components"));

// app/styles/ButtonStyles.tsx
init_react();
var import_styled_components6 = __toESM(require("styled-components"));
var MainButton = import_styled_components6.default.button`
  height: 46px;
  max-width: 119px;
  width: 100%;
  border-radius: 4px;
  padding: 12px 14px;
  border: none;
  cursor: pointer;
  color: ${SendTheme.white};
  background: ${SendTheme.blue};
  font-family: "Inter";
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 19px;
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0em;
  text-align: center;
`;

// app/components/maincontent/Header.tsx
var Header = () => {
  return /* @__PURE__ */ import_react4.default.createElement(Body4, null, /* @__PURE__ */ import_react4.default.createElement(Cover4, null, /* @__PURE__ */ import_react4.default.createElement(HeaderTextWrap, null, /* @__PURE__ */ import_react4.default.createElement(HeaderText, null, "Quotes")), /* @__PURE__ */ import_react4.default.createElement(HeaderButtonWrap, null, /* @__PURE__ */ import_react4.default.createElement(HeaderButton, null, "Create New"))));
};
var Body4 = import_styled_components7.default.div`
  width: 100%;
  padding: 0px 40px;
`;
var Cover4 = import_styled_components7.default.div`
  height: 46px;
  max-width: 1206px;
  display: flex;
  flex-direction: row;
  width: 100%;
  margin: 24px auto;
  align-items: center;
  justify-content: space-between;
`;
var HeaderTextWrap = (0, import_styled_components7.default)(Header1)`
  color: ${SendTheme.dark};
`;
var HeaderText = import_styled_components7.default.div``;
var HeaderButtonWrap = import_styled_components7.default.div``;
var HeaderButton = (0, import_styled_components7.default)(MainButton)``;
var Header_default = Header;

// app/components/maincontent/Table.tsx
init_react();
var import_react7 = __toESM(require("react"));
var import_styled_components10 = __toESM(require("styled-components"));

// app/components/Skeleton.tsx
init_react();
var import_react5 = __toESM(require("react"));
var import_styled_components8 = __toESM(require("styled-components"));
var Skeleton = () => {
  return /* @__PURE__ */ import_react5.default.createElement(Body5, null, /* @__PURE__ */ import_react5.default.createElement(Shimmer, null, /* @__PURE__ */ import_react5.default.createElement(ShimmerHalf, null)));
};
var Body5 = import_styled_components8.default.div`
  height: 60px;
  width: 100%;
  max-width: 1500px;
  background: #f2f2f2;
  margin: 8px 0;
  padding: 8px 40px;
  overflow: hidden;
  position: relative;
`;
var animationLoading = import_styled_components8.keyframes`
0%{
transform: translateX(-150%);
}

50%{
    transform: translateX(-60%);
}
100%{
    transform: translateX(150%);
}
`;
var Shimmer = import_styled_components8.default.div`
  width: 100%;
  top: 0;
  left: 0;
  height: 100%;
  position: absolute;
  animation: ${animationLoading} 1.5s infinite;
`;
var ShimmerHalf = import_styled_components8.default.div`
  width: 50%;
  height: 100%;
  transform: skewX(-20deg);
  background: rgba(255, 255, 255, 0.8);
`;
var Image = import_styled_components8.default.div`
  height: 180px;
  width: 100%;
  margin: 16px 0;
  background: #ddd;
`;
var Text = import_styled_components8.default.div`
  height: 30px;
  margin: 8px 0;
  width: 100%;
  background: #ddd;
`;
var SmallText = import_styled_components8.default.div`
  height: 10px;
  width: 50%;
  margin: 8px 0;
  background: #ddd;
`;
var Skeleton_default = Skeleton;

// app/components/maincontent/TableContent.tsx
init_react();
var import_react6 = __toESM(require("react"));
var import_styled_components9 = __toESM(require("styled-components"));
var TableContent = (props) => {
  const { name, category, fromName, fromDate, toName, toDate, amount, status } = props;
  return /* @__PURE__ */ import_react6.default.createElement(Body6, null, /* @__PURE__ */ import_react6.default.createElement(Import, null, /* @__PURE__ */ import_react6.default.createElement(NameRow, null, /* @__PURE__ */ import_react6.default.createElement(Title, null, /* @__PURE__ */ import_react6.default.createElement(Icon, null, /* @__PURE__ */ import_react6.default.createElement("svg", {
    width: "36",
    height: "32",
    viewBox: "0 0 36 32",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ import_react6.default.createElement("path", {
    d: "M7.89806 21.6096C8.01381 21.8713 8.24041 22.081 8.52799 22.1925C8.81558 22.3039 9.14059 22.308 9.43155 22.2039C9.7225 22.0997 9.95555 21.8959 10.0794 21.6372C10.2033 21.3784 10.2079 21.086 10.0921 20.8243L8.77097 17.8315L16.6036 16.2715V21.3124C16.6036 21.5939 16.7278 21.8638 16.9491 22.0629C17.1703 22.2619 17.4703 22.3737 17.7832 22.3737C18.096 22.3737 18.396 22.2619 18.6173 22.0629C18.8385 21.8638 18.9628 21.5939 18.9628 21.3124V16.2715L26.7953 17.8315L25.4742 20.8243C25.4167 20.9539 25.3882 21.0924 25.3903 21.2319C25.3925 21.3714 25.4251 21.5092 25.4865 21.6373C25.5478 21.7655 25.6367 21.8815 25.7479 21.9787C25.8592 22.0759 25.9906 22.1524 26.1348 22.2039C26.2737 22.2533 26.4218 22.2785 26.5712 22.2782C26.8075 22.2784 27.0384 22.2148 27.2339 22.0955C27.4295 21.9763 27.5808 21.807 27.6683 21.6096L29.4966 17.4601C29.5594 17.3166 29.5866 17.1625 29.5765 17.0085C29.5663 16.8545 29.5189 16.7044 29.4377 16.5686C29.3588 16.4333 29.2485 16.3149 29.1141 16.2215C28.9798 16.1281 28.8246 16.0619 28.6591 16.0274L24.8608 15.2739V10.6999C24.8608 10.4184 24.7365 10.1485 24.5153 9.94947C24.2941 9.75044 23.994 9.63863 23.6812 9.63863H21.322V6.45487C21.322 6.17341 21.1977 5.90347 20.9765 5.70445C20.7553 5.50543 20.4552 5.39362 20.1424 5.39362H15.4239C15.1111 5.39362 14.8111 5.50543 14.5898 5.70445C14.3686 5.90347 14.2443 6.17341 14.2443 6.45487V9.63863H11.8851C11.5723 9.63863 11.2722 9.75044 11.051 9.94947C10.8298 10.1485 10.7055 10.4184 10.7055 10.6999V15.2739L6.90719 16.0062C6.74176 16.0406 6.58657 16.1069 6.4522 16.2003C6.31784 16.2937 6.20747 16.4121 6.12865 16.5474C6.04741 16.6832 6.00005 16.8333 5.98986 16.9873C5.97967 17.1412 6.00691 17.2953 6.06967 17.4389L7.89806 21.6096ZM16.6036 7.51612H18.9628V9.63863H16.6036V7.51612ZM13.0647 11.7611H22.5016V14.7963L18.0427 13.8836H17.5236L13.0647 14.7963V11.7611ZM28.0575 23.7321C27.6436 23.8462 27.2473 24.0066 26.8779 24.2097C26.5021 24.4074 26.0747 24.5116 25.6393 24.5116C25.204 24.5116 24.7765 24.4074 24.4008 24.2097C23.5836 23.7949 22.6613 23.577 21.723 23.577C20.7848 23.577 19.8625 23.7949 19.0453 24.2097C18.6644 24.4051 18.2335 24.5078 17.795 24.5078C17.3564 24.5078 16.9255 24.4051 16.5446 24.2097C15.7267 23.7969 14.8046 23.5801 13.8669 23.5801C12.9291 23.5801 12.007 23.7969 11.1892 24.2097C10.8134 24.4074 10.3859 24.5116 9.95057 24.5116C9.51525 24.5116 9.08777 24.4074 8.71199 24.2097C8.34257 24.0066 7.94627 23.8462 7.53238 23.7321C7.37542 23.6819 7.20843 23.6622 7.04239 23.6742C6.87634 23.6862 6.71502 23.7298 6.56904 23.802C6.42305 23.8742 6.29572 23.9734 6.19541 24.093C6.09511 24.2127 6.02411 24.3501 5.9871 24.4962C5.89903 24.765 5.93271 25.0542 6.08077 25.3007C6.22884 25.5473 6.47927 25.7311 6.77743 25.8121C7.01496 25.87 7.24158 25.9595 7.44981 26.0775C8.16548 26.4553 8.97925 26.6566 9.80902 26.6612C10.6708 26.6613 11.5174 26.4563 12.2626 26.0668C12.725 25.8374 13.2444 25.717 13.7725 25.717C14.3006 25.717 14.82 25.8374 15.2824 26.0668C16.0224 26.4475 16.86 26.6478 17.7124 26.6478C18.5648 26.6478 19.4024 26.4475 20.1424 26.0668C20.6047 25.8374 21.1242 25.717 21.6523 25.717C22.1803 25.717 22.6998 25.8374 23.1622 26.0668C23.8933 26.4594 24.7289 26.6667 25.5804 26.6667C26.4318 26.6667 27.2674 26.4594 27.9985 26.0668C28.2068 25.9489 28.4334 25.8594 28.6709 25.8015C28.8279 25.773 28.9768 25.7159 29.1085 25.6339C29.2401 25.5519 29.3519 25.4466 29.4369 25.3245C29.5219 25.2023 29.5783 25.0659 29.6028 24.9235C29.6273 24.7811 29.6192 24.6357 29.5792 24.4962C29.5417 24.3526 29.4714 24.2176 29.3726 24.0998C29.2739 23.982 29.1489 23.884 29.0058 23.8121C28.8626 23.7402 28.7043 23.696 28.541 23.6822C28.3777 23.6684 28.2131 23.6854 28.0575 23.7321Z",
    fill: "#81868C"
  }))), /* @__PURE__ */ import_react6.default.createElement(Name, null, name), /* @__PURE__ */ import_react6.default.createElement("svg", {
    width: "5",
    height: "4",
    viewBox: "0 0 5 4",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ import_react6.default.createElement("ellipse", {
    cx: "2.72072",
    cy: "2",
    rx: "2.22304",
    ry: "2",
    fill: "#303030"
  })), /* @__PURE__ */ import_react6.default.createElement(Cat, null, category)), /* @__PURE__ */ import_react6.default.createElement(ImportTag, null, "IMPORT")), /* @__PURE__ */ import_react6.default.createElement(LocationRow, null, /* @__PURE__ */ import_react6.default.createElement(FromLocation, null, /* @__PURE__ */ import_react6.default.createElement(FromText, null, fromName), /* @__PURE__ */ import_react6.default.createElement(FromDate, null, fromDate)), /* @__PURE__ */ import_react6.default.createElement("svg", {
    width: "17",
    height: "8",
    viewBox: "0 0 17 8",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ import_react6.default.createElement("path", {
    d: "M15.9148 4.35355C16.1101 4.15829 16.1101 3.84171 15.9148 3.64645L12.7329 0.46447C12.5376 0.269208 12.221 0.269208 12.0258 0.46447C11.8305 0.659732 11.8305 0.976315 12.0258 1.17157L14.8542 4L12.0258 6.82843C11.8305 7.02369 11.8305 7.34027 12.0258 7.53553C12.221 7.7308 12.5376 7.7308 12.7329 7.53553L15.9148 4.35355ZM0 4.5H15.5613V3.5H0V4.5Z",
    fill: "black"
  })), /* @__PURE__ */ import_react6.default.createElement(FromLocation, null, /* @__PURE__ */ import_react6.default.createElement(FromText, null, toName), /* @__PURE__ */ import_react6.default.createElement(FromDate, null, toDate))), /* @__PURE__ */ import_react6.default.createElement(AmountRow, null, /* @__PURE__ */ import_react6.default.createElement(AmountText, null, "\u20A6", Number(parseFloat(`${amount}`).toFixed(3)).toLocaleString())), /* @__PURE__ */ import_react6.default.createElement(StatusRow, null, status === "pending" && /* @__PURE__ */ import_react6.default.createElement(StatusText, {
    className: "pending"
  }, status), " ", status === "booked" && /* @__PURE__ */ import_react6.default.createElement(StatusText, {
    className: "booked"
  }, status), " ", status === "ready" && /* @__PURE__ */ import_react6.default.createElement(StatusText, {
    className: "ready"
  }, status))), /* @__PURE__ */ import_react6.default.createElement(TableLine, null));
};
var Body6 = import_styled_components9.default.div`
  width: 100%;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  width: 100%;
  margin: 12px 0;
  display: flex;
  flex-direction: column;

  :hover {
    background: ${SendTheme.snowWhite};
  }
`;
var Import = import_styled_components9.default.div`
  /* display: flex;
  flex-direction: row;
  justify-content: space-between; */
  padding: 8px 40px;
  display: grid;
  grid-template-columns: 2fr 3fr 1fr 0.5fr;
  gap: 16px;
  grid-gap: 16px;
`;
var TableLine = import_styled_components9.default.span`
  width: 100%;
  max-width: 1500px;
  height: 1px;
  background: ${SendTheme.tableStroke};
`;
var NameRow = import_styled_components9.default.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
var ImportTag = (0, import_styled_components9.default)(CaptionSmall)`
  height: 20px;
  width: 63px;
  margin: 8px 0;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${SendTheme.stroke};
  border: 1px solid ${SendTheme.stroke};
  cursor: pointer;
`;
var Title = import_styled_components9.default.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
var Icon = import_styled_components9.default.div`
  height: 32px;
  width: 35px;

  border-radius: 0px;
`;
var Name = (0, import_styled_components9.default)(Header2)`
  color: ${SendTheme.blue};
`;
var Cat = (0, import_styled_components9.default)(SidebarText)`
  color: ${SendTheme.dark};
`;
var LocationRow = import_styled_components9.default.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
var FromLocation = import_styled_components9.default.div`
  display: flex;
  flex-direction: column;
`;
var FromText = (0, import_styled_components9.default)(Header2)`
  color: ${SendTheme.dark};
`;
var FromDate = (0, import_styled_components9.default)(SidebarText)`
  color: ${SendTheme.stroke};
  margin: 8px 0;
`;
var AmountRow = import_styled_components9.default.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
var AmountText = (0, import_styled_components9.default)(Header2)`
  color: ${SendTheme.dark};
`;
var StatusRow = import_styled_components9.default.div`
  display: flex;
  justify-content: center;
  align-items: center;

  .pending {
    color: ${SendTheme.orange};
  }
  .ready {
    color: ${SendTheme.green};
  }
  .booked {
    color: ${SendTheme.gray};
  }
`;
var StatusText = (0, import_styled_components9.default)(SidebarText)`
  text-transform: capitalize;
`;
var TableContent_default = TableContent;

// app/components/maincontent/Table.tsx
var Table = (props) => {
  const { posts, loading } = props;
  return /* @__PURE__ */ import_react7.default.createElement(Body7, null, /* @__PURE__ */ import_react7.default.createElement(Cover5, null, /* @__PURE__ */ import_react7.default.createElement(TableRow, null, loading ? /* @__PURE__ */ import_react7.default.createElement(import_react7.default.Fragment, null, /* @__PURE__ */ import_react7.default.createElement(SkeletonCover, null, loading && [1, 2, 3, 4, 5, 6].map((data, index) => /* @__PURE__ */ import_react7.default.createElement(Skeleton_default, {
    key: index
  })))) : /* @__PURE__ */ import_react7.default.createElement(import_react7.default.Fragment, null, posts.length > 0 ? posts.map((post) => /* @__PURE__ */ import_react7.default.createElement(import_react7.default.Fragment, null, /* @__PURE__ */ import_react7.default.createElement(TableContent_default, {
    name: post.title,
    category: post.category,
    fromName: post.fromName,
    fromDate: post.fromDate,
    toName: post.toName,
    toDate: post.toDate,
    amount: post.amount,
    status: post.status
  }))) : /* @__PURE__ */ import_react7.default.createElement(import_react7.default.Fragment, null, "No item in selected status")))));
};
var Body7 = import_styled_components10.default.div`
  width: 100%;
`;
var Cover5 = import_styled_components10.default.div`
  max-width: 1206px;
  width: 100%;
  margin: 24px auto;
`;
var TableRow = import_styled_components10.default.div`
  display: flex;
  flex-direction: column;
`;
var SkeletonCover = import_styled_components10.default.div`
  display: flex;
  flex-direction: column;
  padding: 8px 24px;
`;
var Table_default = Table;

// app/components/MainContent.tsx
var MainContent = (props) => {
  const {
    paginate,
    postPerPage,
    totalPosts,
    posts,
    onItemSelect,
    selectedItem,
    first,
    last,
    loading,
    currentNumber
  } = props;
  return /* @__PURE__ */ import_react8.default.createElement(Body8, null, /* @__PURE__ */ import_react8.default.createElement(Header_default, null), /* @__PURE__ */ import_react8.default.createElement(Filter_default, {
    selectedItem,
    onItemSelect,
    paginate,
    totalPosts,
    postPerPage,
    first,
    last,
    currentNumber
  }), /* @__PURE__ */ import_react8.default.createElement(Table_default, {
    loading,
    posts
  }));
};
var Body8 = import_styled_components11.default.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  background: ${SendTheme.white};
`;
var MainContent_default = MainContent;

// app/components/Sidebar.tsx
init_react();
var import_react14 = __toESM(require("react"));
var import_styled_components17 = __toESM(require("styled-components"));

// app/components/sidebar/Name.tsx
init_react();
var import_react9 = __toESM(require("react"));
var import_styled_components12 = __toESM(require("styled-components"));
var Name2 = () => {
  return /* @__PURE__ */ import_react9.default.createElement(Body9, null, /* @__PURE__ */ import_react9.default.createElement(Cover6, null, /* @__PURE__ */ import_react9.default.createElement(NameWrap, null, /* @__PURE__ */ import_react9.default.createElement("svg", {
    width: "22",
    height: "12",
    viewBox: "0 0 22 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ import_react9.default.createElement("path", {
    d: "M5.11344 11.5454C3.91176 11.5454 2.92577 11.2065 2.15546 10.5286C1.38515 9.85073 1 8.94177 1 7.80171V0.54541H3.11064V7.63225C3.11064 8.20741 3.27498 8.65932 3.60364 8.98799C3.94258 9.30638 4.44584 9.46558 5.11344 9.46558C5.78105 9.46558 6.27918 9.30638 6.60784 8.98799C6.94678 8.65932 7.11625 8.20741 7.11625 7.63225V0.54541H9.2423V7.80171C9.2423 8.94177 8.85714 9.85073 8.08683 10.5286C7.31653 11.2065 6.3254 11.5454 5.11344 11.5454Z",
    fill: "white"
  }), /* @__PURE__ */ import_react9.default.createElement("path", {
    d: "M16.6785 5.78351L20.8228 11.3297H18.3732L14.5216 6.2765V11.3297H12.3956V0.54541H14.5216V5.30591L18.2191 0.54541H20.6687L16.6785 5.78351Z",
    fill: "white"
  }), /* @__PURE__ */ import_react9.default.createElement("path", {
    d: "M5.11344 11.5454C3.91176 11.5454 2.92577 11.2065 2.15546 10.5286C1.38515 9.85073 1 8.94177 1 7.80171V0.54541H3.11064V7.63225C3.11064 8.20741 3.27498 8.65932 3.60364 8.98799C3.94258 9.30638 4.44584 9.46558 5.11344 9.46558C5.78105 9.46558 6.27918 9.30638 6.60784 8.98799C6.94678 8.65932 7.11625 8.20741 7.11625 7.63225V0.54541H9.2423V7.80171C9.2423 8.94177 8.85714 9.85073 8.08683 10.5286C7.31653 11.2065 6.3254 11.5454 5.11344 11.5454Z",
    stroke: "white",
    "stroke-width": "0.5"
  }), /* @__PURE__ */ import_react9.default.createElement("path", {
    d: "M16.6785 5.78351L20.8228 11.3297H18.3732L14.5216 6.2765V11.3297H12.3956V0.54541H14.5216V5.30591L18.2191 0.54541H20.6687L16.6785 5.78351Z",
    stroke: "white",
    "stroke-width": "0.5"
  }))), /* @__PURE__ */ import_react9.default.createElement(NameText, null, /* @__PURE__ */ import_react9.default.createElement(NameHeader, null, "Mati Industries"), /* @__PURE__ */ import_react9.default.createElement(NameEmail, null, /* @__PURE__ */ import_react9.default.createElement("a", {
    href: "mailto:Lanremati@gmail.com"
  }, "Lanremati@gmail.com"))), /* @__PURE__ */ import_react9.default.createElement(NameIcon, null, /* @__PURE__ */ import_react9.default.createElement("svg", {
    width: "24",
    height: "25",
    viewBox: "0 0 24 25",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, /* @__PURE__ */ import_react9.default.createElement("rect", {
    width: "24",
    height: "24",
    transform: "translate(0 0.5)",
    fill: "#F2F4F7"
  }), /* @__PURE__ */ import_react9.default.createElement("path", {
    d: "M8 10.5L12 14.5L16 10.5",
    stroke: "#A0AEC0",
    "stroke-width": "1.33333",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  })))));
};
var Body9 = import_styled_components12.default.div`
  height: 69px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${SendTheme.offWhite};
  padding: 16px;
  border-radius: 0px;
`;
var Cover6 = import_styled_components12.default.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  cursor: pointer;
  max-width: 190px;
  margin: 0 auto;
`;
var NameWrap = import_styled_components12.default.div`
  background: ${SendTheme.dark};
  display: flex;
  justify-content: center;
  align-items: center;
  height: 32px;
  width: 32px;

  border-radius: 8px;
`;
var NameText = import_styled_components12.default.div`
  display: flex;
  flex-direction: column;
  margin: 0 8px;
`;
var NameHeader = (0, import_styled_components12.default)(CaptionLarge)`
  text-align: left;
  color: ${SendTheme.dark};
`;
var NameEmail = (0, import_styled_components12.default)(CaptionSmall)`
  text-align: left;

  a {
    color: ${SendTheme.gray};
  }
`;
var NameIcon = import_styled_components12.default.span`
  height: 24px;
  width: 24px;
  cursor: pointer;
`;
var Name_default = Name2;

// app/assets/logo.svg
var logo_default = "/build/_assets/logo-EIDL4KY2.svg";

// app/components/sidebar/Section.tsx
init_react();
var import_react13 = __toESM(require("react"));
var import_styled_components16 = __toESM(require("styled-components"));

// app/components/sidebar/Billing.tsx
init_react();
var import_react10 = __toESM(require("react"));
var import_styled_components13 = __toESM(require("styled-components"));

// app/components/sidebar/Data.tsx
init_react();
var DashboardData = [
  {
    icon: /* @__PURE__ */ React.createElement("svg", {
      width: "24",
      height: "25",
      viewBox: "0 0 24 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, /* @__PURE__ */ React.createElement("path", {
      d: "M8.11111 19.4547H15.8889C17.6 19.4547 19 18.073 19 16.3842V11.3946C19 10.3967 18.5333 9.55231 17.7556 8.93821L13.8667 6.02121C12.7778 5.25358 11.2222 5.25358 10.1333 6.09798L6.24444 8.93821C5.46667 9.55231 5 10.3967 5 11.3946V16.3842C5 18.073 6.4 19.4547 8.11111 19.4547ZM6.55556 11.3946C6.55556 10.934 6.78889 10.4735 7.17778 10.1664L11.0667 7.24942C11.3778 7.01913 11.6889 6.94237 12 6.94237C12.3111 6.94237 12.6222 7.01913 12.9333 7.24942L16.8222 10.1664C17.2111 10.4735 17.4444 10.934 17.4444 11.3946V16.3842C17.4444 17.2286 16.7444 17.9195 15.8889 17.9195H8.11111C7.25556 17.9195 6.55556 17.2286 6.55556 16.3842V11.3946Z",
      fill: "#78797A"
    })),
    name: "Dashboard"
  },
  {
    classname: "active",
    icon: /* @__PURE__ */ React.createElement("svg", {
      width: "24",
      height: "25",
      viewBox: "0 0 24 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, /* @__PURE__ */ React.createElement("path", {
      d: "M13.2 5.45474H7.60001C7.22871 5.45474 6.87261 5.60224 6.61006 5.86479C6.34751 6.12734 6.20001 6.48344 6.20001 6.85474V18.0547C6.20001 18.426 6.34751 18.7821 6.61006 19.0447C6.87261 19.3072 7.22871 19.4547 7.60001 19.4547H16C16.3713 19.4547 16.7274 19.3072 16.99 19.0447C17.2525 18.7821 17.4 18.426 17.4 18.0547V9.65474L13.2 5.45474Z",
      stroke: "#0746A6",
      "stroke-width": "1.4",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }), /* @__PURE__ */ React.createElement("path", {
      d: "M14.6001 15.9547H9.00006",
      stroke: "#0746A6",
      "stroke-width": "1.4",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }), /* @__PURE__ */ React.createElement("path", {
      d: "M14.6001 13.1547H9.00006",
      stroke: "#0746A6",
      "stroke-width": "1.4",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }), /* @__PURE__ */ React.createElement("path", {
      d: "M10.4001 10.355H9.70006H9.00006",
      stroke: "#0746A6",
      "stroke-width": "1.4",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }), /* @__PURE__ */ React.createElement("path", {
      d: "M13.2001 5.45474V9.65474H17.4001",
      stroke: "#0746A6",
      "stroke-width": "1.4",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    })),
    name: "Quotes"
  },
  {
    icon: /* @__PURE__ */ React.createElement("svg", {
      width: "24",
      height: "25",
      viewBox: "0 0 24 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, /* @__PURE__ */ React.createElement("path", {
      d: "M16.5 5.00003H9C8.20435 5.00003 7.44129 5.3161 6.87868 5.87871C6.31607 6.44132 6 7.20438 6 8.00003V17C6 17.7957 6.31607 18.5587 6.87868 19.1214C7.44129 19.684 8.20435 20 9 20H16.5C16.8978 20 17.2794 19.842 17.5607 19.5607C17.842 19.2794 18 18.8979 18 18.5V6.50003C18 6.10221 17.842 5.72067 17.5607 5.43937C17.2794 5.15807 16.8978 5.00003 16.5 5.00003ZM7.5 8.00003C7.5 7.60221 7.65804 7.22067 7.93934 6.93937C8.22064 6.65807 8.60218 6.50003 9 6.50003H16.5V14H9C8.47128 14.0022 7.95299 14.1474 7.5 14.42V8.00003ZM9 18.5C8.60218 18.5 8.22064 18.342 7.93934 18.0607C7.65804 17.7794 7.5 17.3979 7.5 17C7.5 16.6022 7.65804 16.2207 7.93934 15.9394C8.22064 15.6581 8.60218 15.5 9 15.5H16.5V18.5H9ZM10.5 9.50003H13.5C13.6989 9.50003 13.8897 9.42101 14.0303 9.28036C14.171 9.13971 14.25 8.94894 14.25 8.75003C14.25 8.55112 14.171 8.36035 14.0303 8.2197C13.8897 8.07905 13.6989 8.00003 13.5 8.00003H10.5C10.3011 8.00003 10.1103 8.07905 9.96967 8.2197C9.82902 8.36035 9.75 8.55112 9.75 8.75003C9.75 8.94894 9.82902 9.13971 9.96967 9.28036C10.1103 9.42101 10.3011 9.50003 10.5 9.50003Z",
      fill: "#78797A"
    })),
    name: "Bookings"
  },
  {
    icon: /* @__PURE__ */ React.createElement("svg", {
      width: "24",
      height: "25",
      viewBox: "0 0 24 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, /* @__PURE__ */ React.createElement("path", {
      d: "M5.32922 16.6619C5.40733 16.8582 5.56022 17.0155 5.75427 17.099C5.94832 17.1826 6.16763 17.1857 6.36395 17.1076C6.56027 17.0295 6.71752 16.8766 6.80111 16.6826C6.8847 16.4885 6.88778 16.2692 6.80967 16.0729L5.91822 13.8283L11.2033 12.6583V16.439C11.2033 16.6501 11.2871 16.8526 11.4364 17.0018C11.5857 17.1511 11.7881 17.235 11.9992 17.235C12.2103 17.235 12.4128 17.1511 12.562 17.0018C12.7113 16.8526 12.7951 16.6501 12.7951 16.439V12.6583L18.0802 13.8283L17.1887 16.0729C17.15 16.1701 17.1307 16.274 17.1322 16.3786C17.1336 16.4832 17.1556 16.5866 17.197 16.6827C17.2384 16.7788 17.2984 16.8658 17.3734 16.9387C17.4485 17.0116 17.5372 17.069 17.6345 17.1076C17.7282 17.1447 17.8282 17.1636 17.929 17.1633C18.0884 17.1635 18.2442 17.1158 18.3761 17.0264C18.5081 16.937 18.6102 16.81 18.6692 16.6619L19.9029 13.5498C19.9452 13.4421 19.9636 13.3265 19.9567 13.2111C19.9499 13.0956 19.9179 12.983 19.8631 12.8812C19.8099 12.7797 19.7354 12.6909 19.6448 12.6208C19.5541 12.5508 19.4494 12.5011 19.3378 12.4752L16.7749 11.9101V8.47961C16.7749 8.26852 16.691 8.06606 16.5417 7.9168C16.3925 7.76753 16.19 7.68367 15.9789 7.68367H14.387V5.29585C14.387 5.08475 14.3032 4.8823 14.1539 4.73303C14.0046 4.58377 13.8022 4.49991 13.5911 4.49991H10.4073C10.1962 4.49991 9.99378 4.58377 9.84451 4.73303C9.69524 4.8823 9.61139 5.08475 9.61139 5.29585V7.68367H8.0195C7.80841 7.68367 7.60596 7.76753 7.45669 7.9168C7.30742 8.06606 7.22356 8.26852 7.22356 8.47961V11.9101L4.66063 12.4593C4.54901 12.4852 4.44429 12.5348 4.35363 12.6049C4.26297 12.675 4.1885 12.7638 4.13531 12.8652C4.0805 12.9671 4.04854 13.0797 4.04167 13.1952C4.03479 13.3106 4.05317 13.4262 4.09552 13.5338L5.32922 16.6619ZM11.2033 6.09179H12.7951V7.68367H11.2033V6.09179ZM8.81544 9.27555H15.183V11.5519L12.1743 10.8674H11.8241L8.81544 11.5519V9.27555ZM18.9318 18.2538C18.6526 18.3393 18.3852 18.4597 18.1359 18.6119C17.8823 18.7602 17.5939 18.8384 17.3002 18.8384C17.0064 18.8384 16.718 18.7602 16.4644 18.6119C15.9131 18.3009 15.2907 18.1374 14.6576 18.1374C14.0246 18.1374 13.4022 18.3009 12.8509 18.6119C12.5938 18.7585 12.3031 18.8356 12.0072 18.8356C11.7113 18.8356 11.4205 18.7585 11.1635 18.6119C10.6116 18.3024 9.98945 18.1398 9.35668 18.1398C8.72392 18.1398 8.10177 18.3024 7.5499 18.6119C7.29634 18.7602 7.00789 18.8384 6.71416 18.8384C6.42043 18.8384 6.13198 18.7602 5.87842 18.6119C5.62916 18.4597 5.36175 18.3393 5.08248 18.2538C4.97658 18.2161 4.8639 18.2013 4.75186 18.2103C4.63982 18.2194 4.53097 18.252 4.43247 18.3062C4.33396 18.3603 4.24804 18.4347 4.18036 18.5245C4.11268 18.6142 4.06478 18.7172 4.0398 18.8268C3.98038 19.0284 4.0031 19.2453 4.10301 19.4302C4.20291 19.6151 4.3719 19.753 4.57308 19.8138C4.73335 19.8572 4.88626 19.9243 5.02677 20.0128C5.50967 20.2962 6.05876 20.4472 6.61865 20.4506C7.20016 20.4507 7.77135 20.2969 8.27421 20.0048C8.58619 19.8327 8.9367 19.7425 9.29301 19.7425C9.64932 19.7425 9.99982 19.8327 10.3118 20.0048C10.8111 20.2903 11.3763 20.4405 11.9515 20.4405C12.5266 20.4405 13.0918 20.2903 13.5911 20.0048C13.9031 19.8327 14.2536 19.7425 14.6099 19.7425C14.9662 19.7425 15.3167 19.8327 15.6287 20.0048C16.122 20.2993 16.6859 20.4547 17.2604 20.4547C17.8349 20.4547 18.3987 20.2993 18.8921 20.0048C19.0326 19.9163 19.1855 19.8493 19.3457 19.8058C19.4517 19.7844 19.5521 19.7416 19.641 19.6801C19.7298 19.6186 19.8052 19.5397 19.8626 19.4481C19.9199 19.3564 19.958 19.2541 19.9745 19.1473C19.991 19.0405 19.9856 18.9315 19.9586 18.8268C19.9333 18.7191 19.8858 18.6179 19.8192 18.5295C19.7526 18.4412 19.6683 18.3677 19.5717 18.3138C19.475 18.2599 19.3682 18.2267 19.2581 18.2163C19.1479 18.206 19.0368 18.2187 18.9318 18.2538Z",
      fill: "#78797A"
    })),
    name: "Shipments"
  },
  {
    icon: /* @__PURE__ */ React.createElement("svg", {
      width: "24",
      height: "25",
      viewBox: "0 0 24 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, /* @__PURE__ */ React.createElement("path", {
      d: "M16.9001 8.95472H16.2001V8.25471C16.2001 7.69775 15.9788 7.1636 15.585 6.76977C15.1912 6.37594 14.657 6.15469 14.1001 6.15469H7.10002C6.54306 6.15469 6.00891 6.37594 5.61508 6.76977C5.22125 7.1636 5 7.69775 5 8.25471V16.6548C5 17.2117 5.22125 17.7459 5.61508 18.1397C6.00891 18.5335 6.54306 18.7548 7.10002 18.7548H16.9001C17.4571 18.7548 17.9912 18.5335 18.385 18.1397C18.7789 17.7459 19.0001 17.2117 19.0001 16.6548V11.0547C19.0001 10.4978 18.7789 9.96363 18.385 9.5698C17.9912 9.17597 17.4571 8.95472 16.9001 8.95472ZM7.10002 7.5547H14.1001C14.2857 7.5547 14.4638 7.62845 14.595 7.75973C14.7263 7.89101 14.8001 8.06906 14.8001 8.25471V8.95472H7.10002C6.91436 8.95472 6.73631 8.88096 6.60504 8.74969C6.47376 8.61841 6.40001 8.44036 6.40001 8.25471C6.40001 8.06906 6.47376 7.89101 6.60504 7.75973C6.73631 7.62845 6.91436 7.5547 7.10002 7.5547ZM17.6001 14.5548H16.9001C16.7144 14.5548 16.5364 14.481 16.4051 14.3497C16.2738 14.2185 16.2001 14.0404 16.2001 13.8548C16.2001 13.6691 16.2738 13.4911 16.4051 13.3598C16.5364 13.2285 16.7144 13.1547 16.9001 13.1547H17.6001V14.5548ZM17.6001 11.7547H16.9001C16.3431 11.7547 15.809 11.976 15.4152 12.3698C15.0213 12.7636 14.8001 13.2978 14.8001 13.8548C14.8001 14.4117 15.0213 14.9459 15.4152 15.3397C15.809 15.7335 16.3431 15.9548 16.9001 15.9548H17.6001V16.6548C17.6001 16.8404 17.5263 17.0185 17.3951 17.1498C17.2638 17.281 17.0857 17.3548 16.9001 17.3548H7.10002C6.91436 17.3548 6.73631 17.281 6.60504 17.1498C6.47376 17.0185 6.40001 16.8404 6.40001 16.6548V10.2357C6.6249 10.3148 6.86162 10.3551 7.10002 10.3547H16.9001C17.0857 10.3547 17.2638 10.4285 17.3951 10.5598C17.5263 10.691 17.6001 10.8691 17.6001 11.0547V11.7547Z",
      fill: "#78797A"
    })),
    name: "Trade Finance"
  }
];
var BillingData = [
  {
    icon: /* @__PURE__ */ React.createElement("svg", {
      width: "24",
      height: "25",
      viewBox: "0 0 24 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, /* @__PURE__ */ React.createElement("path", {
      d: "M5 10.5047C4.6134 10.5047 4.3 10.8181 4.3 11.2047C4.3 11.5913 4.6134 11.9047 5 11.9047V10.5047ZM18.75 11.9047C19.1366 11.9047 19.45 11.5913 19.45 11.2047C19.45 10.8181 19.1366 10.5047 18.75 10.5047V11.9047ZM6.25 8.15474H17.5V6.75474H6.25V8.15474ZM17.5 8.15474C17.8038 8.15474 18.05 8.40099 18.05 8.70474H19.45C19.45 7.62779 18.577 6.75474 17.5 6.75474V8.15474ZM18.05 8.70474V16.2047H19.45V8.70474H18.05ZM18.05 16.2047C18.05 16.5085 17.8038 16.7547 17.5 16.7547V18.1547C18.577 18.1547 19.45 17.2817 19.45 16.2047H18.05ZM17.5 16.7547H6.25V18.1547H17.5V16.7547ZM6.25 16.7547C5.94624 16.7547 5.7 16.5085 5.7 16.2047H4.3C4.3 17.2817 5.17304 18.1547 6.25 18.1547V16.7547ZM5.7 16.2047V8.70474H4.3V16.2047H5.7ZM5.7 8.70474C5.7 8.40099 5.94624 8.15474 6.25 8.15474V6.75474C5.17304 6.75474 4.3 7.62779 4.3 8.70474H5.7ZM5 11.9047H18.75V10.5047H5V11.9047Z",
      fill: "#78797A"
    })),
    name: "Billings"
  },
  {
    icon: /* @__PURE__ */ React.createElement("svg", {
      width: "24",
      height: "25",
      viewBox: "0 0 24 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, /* @__PURE__ */ React.createElement("path", {
      d: "M16.1996 8.94559C16.1996 8.80697 16.1585 8.67147 16.0815 8.55622C16.0045 8.44096 15.895 8.35113 15.7669 8.29809C15.6389 8.24504 15.498 8.23116 15.362 8.25821C15.2261 8.28525 15.1012 8.352 15.0032 8.45001C14.9052 8.54803 14.8384 8.67291 14.8114 8.80886C14.7843 8.94481 14.7982 9.08573 14.8512 9.21379C14.9043 9.34185 14.9941 9.45131 15.1094 9.52832C15.2246 9.60533 15.3601 9.64643 15.4987 9.64643C15.6846 9.64643 15.8629 9.57259 15.9943 9.44116C16.1258 9.30973 16.1996 9.13146 16.1996 8.94559ZM12.1487 19.2551L18.7787 12.611C18.8492 12.5457 18.9054 12.4665 18.944 12.3785C18.9826 12.2905 19.0027 12.1955 19.003 12.0994V7.89432C19.0035 7.80208 18.9858 7.71065 18.951 7.62526C18.9161 7.53987 18.8647 7.4622 18.7997 7.39671L17.0546 5.6446C16.9891 5.57964 16.9115 5.52825 16.8261 5.49337C16.7407 5.45849 16.6493 5.44082 16.557 5.44135H12.3519C12.1664 5.44393 11.9886 5.51653 11.8543 5.6446L5.19628 12.2956C5.06822 12.4299 4.99562 12.6077 4.99304 12.7932C4.99251 12.8855 5.01018 12.9769 5.04506 13.0623C5.07994 13.1477 5.13133 13.2254 5.19628 13.2908L11.1605 19.2551C11.226 19.32 11.3036 19.3714 11.389 19.4063C11.4744 19.4412 11.5659 19.4588 11.6581 19.4583C11.8412 19.454 12.0162 19.3815 12.1487 19.2551ZM6.67507 12.7932L12.6323 6.84304H16.2697L17.6013 8.17465V11.805L11.6511 17.7622L6.67507 12.7932Z",
      fill: "#78797A"
    })),
    name: "Products"
  },
  {
    icon: /* @__PURE__ */ React.createElement("svg", {
      width: "24",
      height: "25",
      viewBox: "0 0 24 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, /* @__PURE__ */ React.createElement("path", {
      d: "M20.2726 13.8299C20.2696 13.7856 20.2625 13.7416 20.2513 13.6985L18.5124 9.06798C18.8288 8.86329 19.0891 8.5827 19.2695 8.25176C19.4498 7.92081 19.5445 7.55002 19.545 7.17313C19.545 6.97302 19.4656 6.7811 19.3241 6.6396C19.1826 6.4981 18.9906 6.41861 18.7905 6.41861C18.5904 6.41861 18.3985 6.4981 18.257 6.6396C18.1155 6.7811 18.036 6.97302 18.036 7.17313C18.0359 7.34127 17.9797 7.50458 17.8763 7.63714C17.7729 7.76971 17.6282 7.86395 17.4651 7.90491C17.302 7.94587 17.1299 7.93121 16.9761 7.86324C16.8223 7.79528 16.6956 7.67791 16.6161 7.52976C16.4225 7.18608 16.1394 6.90129 15.7969 6.70564C15.4544 6.50999 15.0652 6.4108 14.6709 6.41861H12.7544V5.66409C12.7544 5.46398 12.6749 5.27207 12.5334 5.13057C12.3919 4.98907 12.2 4.90958 11.9999 4.90958C11.7998 4.90958 11.6079 4.98907 11.4664 5.13057C11.3249 5.27207 11.2454 5.46398 11.2454 5.66409V6.41861H9.32889C8.93451 6.4108 8.54538 6.50999 8.20286 6.70564C7.86035 6.90129 7.57724 7.18608 7.38362 7.52976C7.30412 7.67791 7.17742 7.79528 7.02363 7.86324C6.86983 7.93121 6.69775 7.94587 6.53467 7.90491C6.37159 7.86395 6.22686 7.76971 6.12344 7.63714C6.02001 7.50458 5.96381 7.34127 5.96375 7.17313C5.96375 6.97302 5.88425 6.7811 5.74275 6.6396C5.60125 6.4981 5.40934 6.41861 5.20923 6.41861C5.00912 6.41861 4.8172 6.4981 4.6757 6.6396C4.53421 6.7811 4.45471 6.97302 4.45471 7.17313C4.45521 7.55002 4.54994 7.92081 4.7303 8.25176C4.91066 8.5827 5.17091 8.86329 5.48738 9.06798L3.74848 13.6985C3.73732 13.7416 3.7302 13.7856 3.72721 13.8299C3.71396 13.8736 3.70492 13.9184 3.7002 13.9638C3.7002 13.9708 3.70222 13.9772 3.70227 13.9842C3.7025 13.9942 3.70453 14.0033 3.70521 14.0132C3.71696 14.8046 4.03957 15.5596 4.60335 16.115C5.16713 16.6705 5.92681 16.9819 6.71826 16.9819C7.50971 16.9819 8.26939 16.6705 8.83317 16.115C9.39695 15.5596 9.71956 14.8046 9.73131 14.0132C9.73195 14.0033 9.73403 13.9942 9.73425 13.9842C9.7343 13.9772 9.73633 13.9708 9.73633 13.9638C9.73162 13.9184 9.72258 13.8736 9.70934 13.8299C9.70635 13.7856 9.69923 13.7416 9.68807 13.6985L7.94711 9.06259C8.26685 8.85855 8.52996 8.57717 8.71213 8.24448C8.77797 8.14208 8.86967 8.05886 8.97796 8.00323C9.08625 7.9476 9.2073 7.92152 9.32889 7.92764H11.2454V18.4909H8.98181C8.7817 18.4909 8.58979 18.5704 8.44829 18.7119C8.30679 18.8534 8.22729 19.0453 8.22729 19.2454C8.22729 19.4455 8.30679 19.6374 8.44829 19.7789C8.58979 19.9204 8.7817 19.9999 8.98181 19.9999H15.0179C15.2181 19.9999 15.41 19.9204 15.5515 19.7789C15.693 19.6374 15.7725 19.4455 15.7725 19.2454C15.7725 19.0453 15.693 18.8534 15.5515 18.7119C15.41 18.5704 15.2181 18.4909 15.0179 18.4909H12.7544V7.92764H14.6709C14.7925 7.92153 14.9135 7.9476 15.0218 8.00323C15.1301 8.05886 15.2218 8.14208 15.2876 8.24448C15.4698 8.57717 15.7329 8.85855 16.0526 9.06259L14.3117 13.6985C14.3006 13.7416 14.2934 13.7856 14.2904 13.8299C14.2772 13.8736 14.2681 13.9184 14.2634 13.9638C14.2634 13.9708 14.2655 13.9772 14.2655 13.9842C14.2657 13.9942 14.2678 14.0033 14.2684 14.0132C14.2802 14.8046 14.6028 15.5596 15.1666 16.115C15.7304 16.6705 16.49 16.9819 17.2815 16.9819C18.0729 16.9819 18.8326 16.6705 19.3964 16.115C19.9602 15.5596 20.2828 14.8046 20.2945 14.0132C20.2952 14.0033 20.2973 13.9942 20.2975 13.9842C20.2975 13.9772 20.2996 13.9708 20.2996 13.9638C20.2948 13.9184 20.2858 13.8736 20.2726 13.8299ZM6.71826 10.0822L8.01804 14.7183H5.41185L6.71826 10.0822ZM8.01804 14.7183C7.88488 14.9455 7.6952 15.1344 7.46744 15.2666C7.23969 15.3988 6.9816 15.4699 6.71826 15.4728C6.45345 15.4727 6.19333 15.4029 5.96402 15.2705C5.7347 15.1381 5.54427 14.9476 5.41185 14.7183H8.01804ZM17.2815 10.0822L18.5813 14.7183H15.9751L17.2815 10.0822ZM17.2815 15.4728C17.0167 15.4727 16.7566 15.4029 16.5272 15.2705C16.2979 15.1381 16.1075 14.9476 15.9751 14.7183H18.5813C18.4481 14.9455 18.2584 15.1344 18.0307 15.2666C17.8029 15.3988 17.5448 15.4699 17.2815 15.4728Z",
      fill: "#78797A"
    })),
    name: "Fixed Rates"
  },
  {
    icon: /* @__PURE__ */ React.createElement("svg", {
      width: "24",
      height: "25",
      viewBox: "0 0 24 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, /* @__PURE__ */ React.createElement("path", {
      d: "M14.9137 12.961C15.5541 12.4599 16.0216 11.7728 16.251 10.9952C16.4804 10.2176 16.4605 9.3882 16.1939 8.62242C15.9273 7.85665 15.4273 7.19255 14.7635 6.72252C14.0997 6.25249 13.3052 5.99991 12.4903 5.99991C11.6755 5.99991 10.8809 6.25249 10.2171 6.72252C9.55331 7.19255 9.05335 7.85665 8.78675 8.62242C8.52016 9.3882 8.50019 10.2176 8.72963 10.9952C8.95907 11.7728 9.4265 12.4599 10.0669 12.961C8.96956 13.3982 8.01209 14.1234 7.29657 15.0592C6.58105 15.995 6.1343 17.1064 6.00394 18.2749C5.9945 18.3602 6.00206 18.4465 6.02617 18.5289C6.05028 18.6114 6.09047 18.6882 6.14445 18.7552C6.25348 18.8904 6.41205 18.977 6.5853 18.996C6.75854 19.0149 6.93226 18.9647 7.06823 18.8562C7.20421 18.7478 7.2913 18.5901 7.31036 18.4178C7.45379 17.1479 8.06265 15.9751 9.02061 15.1234C9.97856 14.2718 11.2184 13.801 12.5034 13.801C13.7883 13.801 15.0282 14.2718 15.9861 15.1234C16.9441 15.9751 17.553 17.1479 17.6964 18.4178C17.7142 18.5774 17.7907 18.7249 17.9114 18.8316C18.032 18.9384 18.1881 18.997 18.3496 18.996H18.4215C18.5927 18.9764 18.7492 18.8903 18.8569 18.7564C18.9645 18.6226 19.0146 18.4518 18.9963 18.2814C18.8653 17.1096 18.4161 15.9954 17.6969 15.0581C16.9777 14.1208 16.0156 13.3959 14.9137 12.961ZM12.4903 12.4997C11.9735 12.4997 11.4684 12.3473 11.0387 12.0618C10.609 11.7763 10.2741 11.3704 10.0764 10.8956C9.8786 10.4208 9.82686 9.89835 9.92768 9.39429C10.0285 8.89023 10.2773 8.42722 10.6428 8.06381C11.0082 7.70041 11.4737 7.45292 11.9806 7.35266C12.4874 7.2524 13.0128 7.30385 13.4902 7.50053C13.9676 7.6972 14.3757 8.03026 14.6628 8.45758C14.9499 8.8849 15.1032 9.3873 15.1032 9.90123C15.1032 10.5904 14.8279 11.2513 14.3379 11.7386C13.8479 12.226 13.1833 12.4997 12.4903 12.4997Z",
      fill: "#78797A"
    })),
    name: "Network"
  },
  {
    icon: /* @__PURE__ */ React.createElement("svg", {
      width: "24",
      height: "25",
      viewBox: "0 0 24 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, /* @__PURE__ */ React.createElement("path", {
      d: "M19.8056 11.3485C19.7373 11.2644 19.651 11.1965 19.553 11.1501C19.4551 11.1036 19.348 11.0797 19.2395 11.08H17.7882V10.3544C17.7882 9.77696 17.5588 9.22321 17.1505 8.81493C16.7422 8.40665 16.1885 8.17728 15.6111 8.17728H11.0538L10.8215 7.45159C10.671 7.02578 10.3918 6.65733 10.0225 6.39728C9.65322 6.13724 9.21223 5.99847 8.76059 6.00021H6.17713C5.59974 6.00021 5.04599 6.22958 4.63771 6.63786C4.22943 7.04614 4.00006 7.59989 4.00006 8.17728V16.8856C4.00006 17.463 4.22943 18.0167 4.63771 18.425C5.04599 18.8333 5.59974 19.0626 6.17713 19.0626H16.6271C17.1214 19.0612 17.6006 18.8916 17.9857 18.5816C18.3708 18.2717 18.639 17.8399 18.7461 17.3573L19.9652 11.9654C19.9873 11.8572 19.9844 11.7454 19.9567 11.6385C19.9291 11.5316 19.8774 11.4324 19.8056 11.3485ZM7.17133 17.0452C7.13446 17.2089 7.042 17.3548 6.90969 17.458C6.77738 17.5612 6.61339 17.6154 6.44564 17.6113H6.17713C5.98467 17.6113 5.80008 17.5348 5.66399 17.3987C5.5279 17.2626 5.45144 17.078 5.45144 16.8856V8.17728C5.45144 7.98482 5.5279 7.80024 5.66399 7.66414C5.80008 7.52805 5.98467 7.45159 6.17713 7.45159H8.76059C8.91884 7.44333 9.07544 7.4871 9.20648 7.57621C9.33751 7.66531 9.43578 7.79486 9.48628 7.94506L9.87815 9.1352C9.92472 9.27362 10.012 9.39477 10.1285 9.48281C10.245 9.57085 10.3854 9.62168 10.5313 9.62866H15.6111C15.8036 9.62866 15.9881 9.70512 16.1242 9.84121C16.2603 9.97731 16.3368 10.1619 16.3368 10.3544V11.08H9.07989C8.91214 11.0759 8.74815 11.1301 8.61584 11.2333C8.48353 11.3365 8.39107 11.4824 8.3542 11.6461L7.17133 17.0452ZM17.331 17.0452C17.2941 17.2089 17.2017 17.3548 17.0693 17.458C16.937 17.5612 16.773 17.6154 16.6053 17.6113H8.5066C8.54408 17.5304 8.57091 17.445 8.58642 17.3573L9.66044 12.5314H18.3687L17.331 17.0452Z",
      fill: "#78797A"
    })),
    name: "Reports"
  }
];
var SettingsData = [
  {
    icon: /* @__PURE__ */ React.createElement("svg", {
      width: "24",
      height: "25",
      viewBox: "0 0 24 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, /* @__PURE__ */ React.createElement("path", {
      d: "M17.7775 15.6663C16.9133 14.6086 16.3032 14.0701 16.3032 11.154C16.3032 8.48356 14.9395 7.53216 13.8172 7.0701C13.6681 7.00885 13.5277 6.86817 13.4823 6.71505C13.2854 6.045 12.7335 5.45471 11.9999 5.45471C11.2662 5.45471 10.7139 6.04534 10.5191 6.71572C10.4736 6.87053 10.3333 7.00885 10.1842 7.0701C9.06052 7.53284 7.69822 8.48087 7.69822 11.154C7.69653 14.0701 7.08639 14.6086 6.22216 15.6663C5.86408 16.1045 6.17774 16.7624 6.80403 16.7624H17.199C17.822 16.7624 18.1336 16.1025 17.7775 15.6663Z",
      stroke: "#78797A",
      "stroke-width": "1.5",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    }), /* @__PURE__ */ React.createElement("path", {
      d: "M14.1538 16.7624V17.3009C14.1538 17.8721 13.9268 18.4199 13.5229 18.8239C13.119 19.2278 12.5712 19.4547 11.9999 19.4547C11.4287 19.4547 10.8808 19.2278 10.4769 18.8239C10.073 18.4199 9.84607 17.8721 9.84607 17.3009V16.7624",
      stroke: "#78797A",
      "stroke-width": "1.5",
      "stroke-linecap": "round",
      "stroke-linejoin": "round"
    })),
    name: "Notifications"
  },
  {
    icon: /* @__PURE__ */ React.createElement("svg", {
      width: "24",
      height: "25",
      viewBox: "0 0 24 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, /* @__PURE__ */ React.createElement("path", {
      d: "M18.6129 13.0436C18.492 12.9059 18.4253 12.7289 18.4253 12.5457C18.4253 12.3624 18.492 12.1854 18.6129 12.0477L19.5786 10.9613C19.685 10.8426 19.7511 10.6933 19.7674 10.5347C19.7836 10.3761 19.7493 10.2164 19.6692 10.0786L18.1603 7.46823C18.081 7.33056 17.9602 7.22143 17.8153 7.1564C17.6703 7.09138 17.5085 7.07377 17.353 7.10609L15.9346 7.39278C15.7542 7.43007 15.5663 7.40002 15.4064 7.30828C15.2466 7.21655 15.1259 7.06949 15.067 6.89485L14.6068 5.5142C14.5562 5.36435 14.4598 5.2342 14.3311 5.14214C14.2025 5.05008 14.0482 5.00077 13.8901 5.00118H10.8723C10.7078 4.99259 10.5449 5.03809 10.4087 5.13073C10.2725 5.22337 10.1703 5.35805 10.1178 5.5142L9.69534 6.89485C9.63649 7.06949 9.51576 7.21655 9.35592 7.30828C9.19608 7.40002 9.0082 7.43007 8.82772 7.39278L7.37163 7.10609C7.22418 7.08525 7.07385 7.10852 6.9396 7.17297C6.80534 7.23741 6.69316 7.34014 6.61719 7.46823L5.10829 10.0786C5.02617 10.2149 4.98925 10.3737 5.0028 10.5322C5.01635 10.6908 5.07968 10.8409 5.18373 10.9613L6.14188 12.0477C6.26284 12.1854 6.32954 12.3624 6.32954 12.5457C6.32954 12.7289 6.26284 12.9059 6.14188 13.0436L5.18373 14.13C5.07968 14.2504 5.01635 14.4006 5.0028 14.5591C4.98925 14.7177 5.02617 14.8764 5.10829 15.0127L6.61719 17.6231C6.69648 17.7608 6.8172 17.8699 6.96216 17.9349C7.10711 18 7.2689 18.0176 7.42445 17.9852L8.84281 17.6986C9.02329 17.6613 9.21117 17.6913 9.37101 17.7831C9.53085 17.8748 9.65158 18.0218 9.71043 18.1965L10.1706 19.5771C10.2231 19.7333 10.3253 19.868 10.4615 19.9606C10.5978 20.0532 10.7606 20.0987 10.9251 20.0902H13.9429C14.101 20.0906 14.2553 20.0413 14.384 19.9492C14.5126 19.8571 14.609 19.727 14.6596 19.5771L15.1198 18.1965C15.1787 18.0218 15.2994 17.8748 15.4592 17.7831C15.6191 17.6913 15.807 17.6613 15.9874 17.6986L17.4058 17.9852C17.5614 18.0176 17.7231 18 17.8681 17.9349C18.013 17.8699 18.1338 17.7608 18.2131 17.6231L19.722 15.0127C19.8021 14.8749 19.8365 14.7152 19.8202 14.5566C19.8039 14.3981 19.7378 14.2487 19.6314 14.13L18.6129 13.0436ZM17.4888 14.0546L18.0924 14.7336L17.1267 16.4084L16.2364 16.2274C15.693 16.1163 15.1278 16.2086 14.648 16.4868C14.1682 16.7649 13.8072 17.2095 13.6336 17.7363L13.3469 18.5813H11.4155L11.1439 17.7212C10.9702 17.1945 10.6093 16.7498 10.1295 16.4717C9.64964 16.1935 9.0844 16.1012 8.54103 16.2123L7.65078 16.3934L6.67 14.726L7.27356 14.047C7.64471 13.6321 7.8499 13.0949 7.8499 12.5381C7.8499 11.9814 7.64471 11.4442 7.27356 11.0292L6.67 10.3502L7.63569 8.69043L8.52594 8.8715C9.06931 8.98257 9.63455 8.89027 10.1144 8.61212C10.5942 8.33397 10.9552 7.88933 11.1288 7.3626L11.4155 6.51008H13.3469L13.6336 7.37015C13.8072 7.89687 14.1682 8.34151 14.648 8.61967C15.1278 8.89782 15.693 8.99012 16.2364 8.87905L17.1267 8.69798L18.0924 10.3729L17.4888 11.0519C17.1218 11.4659 16.9192 12 16.9192 12.5532C16.9192 13.1065 17.1218 13.6406 17.4888 14.0546ZM12.3812 9.52787C11.7843 9.52787 11.2009 9.70486 10.7046 10.0365C10.2083 10.3681 9.8215 10.8394 9.59309 11.3908C9.36469 11.9422 9.30492 12.549 9.42137 13.1344C9.53781 13.7198 9.82522 14.2575 10.2473 14.6796C10.6693 15.1016 11.207 15.389 11.7924 15.5055C12.3778 15.6219 12.9846 15.5622 13.536 15.3337C14.0875 15.1053 14.5588 14.7185 14.8904 14.2223C15.222 13.726 15.399 13.1425 15.399 12.5457C15.399 11.7453 15.081 10.9777 14.5151 10.4118C13.9491 9.84582 13.1815 9.52787 12.3812 9.52787ZM12.3812 14.0546C12.0827 14.0546 11.791 13.9661 11.5429 13.8003C11.2947 13.6345 11.1013 13.3988 10.9871 13.1231C10.8729 12.8474 10.843 12.544 10.9013 12.2513C10.9595 11.9586 11.1032 11.6897 11.3142 11.4787C11.5252 11.2677 11.7941 11.124 12.0868 11.0658C12.3795 11.0075 12.6829 11.0374 12.9586 11.1516C13.2343 11.2658 13.47 11.4592 13.6358 11.7074C13.8016 11.9555 13.8901 12.2472 13.8901 12.5457C13.8901 12.9459 13.7311 13.3296 13.4481 13.6126C13.1652 13.8956 12.7814 14.0546 12.3812 14.0546Z",
      fill: "#78797A"
    })),
    name: "Settings"
  },
  {
    icon: /* @__PURE__ */ React.createElement("svg", {
      width: "24",
      height: "25",
      viewBox: "0 0 24 25",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg"
    }, /* @__PURE__ */ React.createElement("path", {
      d: "M17.061 12.0478C16.916 12.0478 16.7769 11.9902 16.6744 11.8877C16.5718 11.7852 16.5142 11.6461 16.5142 11.5011V9.95695C16.5142 7.76982 14.4933 6.02012 12.0087 6.02012C9.52414 6.02012 7.50323 7.79169 7.50323 9.95695V11.5011C7.50323 11.6461 7.44563 11.7852 7.34308 11.8877C7.24054 11.9902 7.10147 12.0478 6.95645 12.0478C6.81143 12.0478 6.67236 11.9902 6.56982 11.8877C6.46728 11.7852 6.40967 11.6461 6.40967 11.5011V9.95695C6.40967 7.17492 8.92487 4.90906 12.0087 4.90906C15.0926 4.90906 17.6078 7.17492 17.6078 9.95695V11.5011C17.6084 11.573 17.5946 11.6444 17.5673 11.711C17.5401 11.7776 17.4998 11.8381 17.4489 11.889C17.398 11.9399 17.3375 11.9801 17.2709 12.0074C17.2043 12.0347 17.133 12.0484 17.061 12.0478Z",
      fill: "#78797A",
      stroke: "#78797A",
      "stroke-width": "0.4"
    }), /* @__PURE__ */ React.createElement("path", {
      d: "M15.5825 17.192C15.4375 17.192 15.2984 17.1344 15.1959 17.0319C15.0934 16.9293 15.0357 16.7903 15.0357 16.6452V11.453C15.0403 11.311 15.0999 11.1764 15.202 11.0776C15.304 10.9788 15.4405 10.9236 15.5825 10.9237C17.4678 10.9237 19.0032 12.3366 19.0032 14.0688C19.0032 15.801 17.4678 17.192 15.5825 17.192ZM16.1293 12.0566V16.0416C16.608 15.9623 17.0452 15.7217 17.3683 15.3596C17.6913 14.9976 17.8808 14.5359 17.9053 14.0513C17.8818 13.5659 17.6928 13.1032 17.3696 12.7403C17.0465 12.3773 16.6087 12.1361 16.1293 12.0566ZM8.4175 17.192C6.53219 17.192 4.99683 15.7835 4.99683 14.0513C4.99683 12.3191 6.53219 10.9237 8.4175 10.9237C8.56251 10.9237 8.70159 10.9813 8.80413 11.0839C8.90667 11.1864 8.96428 11.3255 8.96428 11.4705V16.6452C8.96428 16.7903 8.90667 16.9293 8.80413 17.0319C8.70159 17.1344 8.56251 17.192 8.4175 17.192ZM7.87071 12.0566C7.3913 12.1361 6.95356 12.3773 6.63042 12.7403C6.30727 13.1032 6.11823 13.5659 6.09476 14.0513C6.1192 14.5359 6.30868 14.9976 6.63174 15.3596C6.9548 15.7217 7.392 15.9623 7.87071 16.0416V12.0566Z",
      fill: "#78797A",
      stroke: "#78797A",
      "stroke-width": "0.4"
    }), /* @__PURE__ */ React.createElement("path", {
      d: "M15.4031 18.9724H13.5922C13.4472 18.9724 13.3081 18.9148 13.2056 18.8122C13.103 18.7097 13.0454 18.5706 13.0454 18.4256C13.0454 18.2806 13.103 18.1415 13.2056 18.0389C13.3081 17.9364 13.4472 17.8788 13.5922 17.8788H15.4031C15.6862 17.8788 15.9577 17.7663 16.1578 17.5662C16.358 17.366 16.4705 17.0945 16.4705 16.8115V16.5709C16.4705 16.4259 16.5281 16.2868 16.6306 16.1843C16.7331 16.0817 16.8722 16.0241 17.0172 16.0241C17.1623 16.0241 17.3013 16.0817 17.4039 16.1843C17.5064 16.2868 17.564 16.4259 17.564 16.5709V16.8115C17.564 17.3846 17.3364 17.9342 16.9311 18.3395C16.5259 18.7447 15.9762 18.9724 15.4031 18.9724Z",
      fill: "#78797A",
      stroke: "#78797A",
      "stroke-width": "0.4"
    }), /* @__PURE__ */ React.createElement("path", {
      d: "M12.6562 20.0002H11.5758C11.179 20.0002 10.7985 19.8425 10.5179 19.562C10.2374 19.2814 10.0798 18.9009 10.0798 18.5042V18.4429C10.0809 18.0469 10.2391 17.6675 10.5195 17.3879C10.7999 17.1083 11.1798 16.9513 11.5758 16.9513H12.6562C13.0518 16.9513 13.4312 17.1084 13.7109 17.3882C13.9907 17.6679 14.1478 18.0473 14.1478 18.4429V18.5042C14.1478 18.9002 13.9908 19.28 13.7112 19.5604C13.4316 19.8409 13.0522 19.999 12.6562 20.0002ZM11.5845 18.0449C11.4785 18.0449 11.3768 18.0867 11.3015 18.1612C11.2261 18.2357 11.1832 18.3369 11.1821 18.4429V18.5042C11.1821 18.6109 11.2245 18.7132 11.3 18.7887C11.3754 18.8642 11.4778 18.9066 11.5845 18.9066H12.6562C12.7622 18.9054 12.8634 18.8625 12.9379 18.7872C13.0125 18.7118 13.0543 18.6101 13.0543 18.5042V18.4429C13.0543 18.3373 13.0123 18.2361 12.9377 18.1614C12.863 18.0868 12.7618 18.0449 12.6562 18.0449H11.5845Z",
      fill: "#78797A",
      stroke: "#78797A",
      "stroke-width": "0.4"
    })),
    name: "Support"
  }
];

// app/components/sidebar/Billing.tsx
var Billing = () => {
  return /* @__PURE__ */ import_react10.default.createElement(Body10, null, /* @__PURE__ */ import_react10.default.createElement(BarRow, null, BillingData.map((data, index) => /* @__PURE__ */ import_react10.default.createElement(BarColumn, {
    className: data.classname,
    key: index
  }, data.icon, /* @__PURE__ */ import_react10.default.createElement(BarText, null, " ", data.name)))));
};
var Body10 = import_styled_components13.default.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  margin: 4px 0;
  /* justify-content: space-between;
  align-items: flex-start; */
`;
var BarRow = import_styled_components13.default.ul`
  display: flex;
  flex-direction: column;
  width: 100%;

  .active {
    background: ${SendTheme.smokeWhite};
    color: ${SendTheme.blue};
  }
`;
var BarColumn = import_styled_components13.default.li`
  transition: 0.4s ease-in;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  height: 40px;
  background: ${SendTheme.snowWhite};
  padding: 0 0 0 16px;
  transition: 0.3s ease-in-out;
  :hover {
    background: ${SendTheme.white};
  }
  svg {
    height: 24px;
    width: 24px;
  }
`;
var BarText = (0, import_styled_components13.default)(SidebarText)`
  margin: 0 8px;
`;
var Billing_default = Billing;

// app/components/sidebar/Dashboard.tsx
init_react();
var import_react11 = __toESM(require("react"));
var import_styled_components14 = __toESM(require("styled-components"));
var Dashboard = () => {
  return /* @__PURE__ */ import_react11.default.createElement(Body11, null, /* @__PURE__ */ import_react11.default.createElement(BarRow2, null, DashboardData.map((data, index) => /* @__PURE__ */ import_react11.default.createElement(BarColumn2, {
    className: data.classname,
    key: index
  }, data.icon, /* @__PURE__ */ import_react11.default.createElement(BarText2, null, " ", data.name)))), /* @__PURE__ */ import_react11.default.createElement(BarLine, null));
};
var Body11 = import_styled_components14.default.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  margin: 12px 0 0 0;
`;
var BarRow2 = import_styled_components14.default.ul`
  display: flex;
  flex-direction: column;
  width: 100%;

  .active {
    background: ${SendTheme.smokeWhite};
    color: ${SendTheme.blue};
  }
`;
var BarColumn2 = import_styled_components14.default.li`
  transition: 0.4s ease-in;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  height: 40px;
  background: ${SendTheme.snowWhite};
  padding: 0 0 0 16px;
  svg {
    height: 24px;
    width: 24px;
  }
  transition: 0.3s ease-in-out;
  :hover {
    background: ${SendTheme.white};
  }
`;
var BarText2 = (0, import_styled_components14.default)(SidebarText)`
  margin: 0 8px;
`;
var BarLine = import_styled_components14.default.div`
  width: 100%;
  height: 1px;

  background: ${SendTheme.stroke};
  opacity: 0.1;
  margin: 16px 0px;
`;
var Dashboard_default = Dashboard;

// app/components/sidebar/Settings.tsx
init_react();
var import_react12 = __toESM(require("react"));
var import_styled_components15 = __toESM(require("styled-components"));
var Settings = () => {
  return /* @__PURE__ */ import_react12.default.createElement(Body12, null, /* @__PURE__ */ import_react12.default.createElement(BarRow3, null, SettingsData.map((data, index) => /* @__PURE__ */ import_react12.default.createElement(BarColumn3, {
    className: data.classname,
    key: index
  }, data.icon, /* @__PURE__ */ import_react12.default.createElement(BarText3, null, " ", data.name)))));
};
var Body12 = import_styled_components15.default.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  margin: 4px 0;
  /* justify-content: space-between;
  align-items: flex-start; */
`;
var BarRow3 = import_styled_components15.default.ul`
  display: flex;
  flex-direction: column;
  width: 100%;

  .active {
    background: ${SendTheme.smokeWhite};
    color: ${SendTheme.blue};
  }
`;
var BarColumn3 = import_styled_components15.default.li`
  transition: 0.4s ease-in;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  cursor: pointer;
  height: 40px;
  background: ${SendTheme.snowWhite};
  padding: 0 0 0 16px;
  transition: 0.3s ease-in-out;
  :hover {
    background: ${SendTheme.white};
  }
  svg {
    height: 24px;
    width: 24px;
  }
`;
var BarText3 = (0, import_styled_components15.default)(SidebarText)`
  margin: 0 8px;
`;
var Settings_default = Settings;

// app/components/sidebar/Section.tsx
var Section = () => {
  return /* @__PURE__ */ import_react13.default.createElement(Body13, null, /* @__PURE__ */ import_react13.default.createElement(Dashboard_default, null), /* @__PURE__ */ import_react13.default.createElement(Billing_default, null), /* @__PURE__ */ import_react13.default.createElement(Settings_default, null));
};
var Body13 = import_styled_components16.default.div`
  display: flex;
  width: 100%;

  flex-direction: column;
`;
var Section_default = Section;

// app/components/Sidebar.tsx
var Sidebar = () => {
  return /* @__PURE__ */ import_react14.default.createElement(Body14, null, /* @__PURE__ */ import_react14.default.createElement(LogoCover, null, /* @__PURE__ */ import_react14.default.createElement(Logo, {
    src: logo_default,
    alt: "Send Freight Logo"
  })), /* @__PURE__ */ import_react14.default.createElement(Section_default, null), /* @__PURE__ */ import_react14.default.createElement(Name_default, null));
};
var Body14 = import_styled_components17.default.div`
  width: 100%;
  height: 100vh;
  position: sticky;
  z-index: 1;
  top: 0px;
  overflow: hidden;
  bottom: 0px;
  max-width: 226px;
  display: flex;
  flex-direction: column;

  background: ${SendTheme.snowWhite};
  justify-content: flex-start;
  align-items: flex-start;
  padding: 16px 0 0 0;
  border-right: 1px solid ${SendTheme.border};
  @media only screen and (max-width: 1500px) {
    overflow-y: scroll;
  }
`;
var LogoCover = import_styled_components17.default.div`
  height: 24px;
  width: 110px;
`;
var Logo = import_styled_components17.default.img`
  height: 24px;
  width: 110px;
  cursor: pointer;
`;
var Sidebar_default = Sidebar;

// route:C:\Users\Augustine Ogiza\Documents\Development\react\send\app\routes\index.tsx
var meta2 = () => {
  return {
    title: "Send Freight",
    description: "Shipping"
  };
};
var Index = () => {
  const [details, setDetails] = (0, import_react15.useState)(tableData);
  const [currentpage, setCurrentPage] = (0, import_react15.useState)(1);
  const [loading, setLoading] = (0, import_react15.useState)(false);
  const [postPerPage] = (0, import_react15.useState)(6);
  const [selectedCategory, setSelectedCategory] = (0, import_react15.useState)("All");
  const filteredData = selectedCategory === "All" ? details : details.filter((data) => data.status === selectedCategory.toLowerCase());
  const changeCategory = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
    setLoading(true);
  };
  const indexofLastPost = currentpage * postPerPage;
  const indexofFirstPost = indexofLastPost - postPerPage;
  const currentDetails = filteredData.slice(indexofFirstPost, indexofLastPost);
  const paginate = (number) => {
    setCurrentPage(number);
    setLoading(true);
  };
  if (loading) {
    setTimeout(() => {
      setLoading(false);
    }, 2500);
  }
  (0, import_react15.useEffect)(() => {
    setLoading(true);
  }, []);
  return /* @__PURE__ */ import_react15.default.createElement(Body15, null, /* @__PURE__ */ import_react15.default.createElement(Shell, null, " ", /* @__PURE__ */ import_react15.default.createElement(Sidebar_default, null)), /* @__PURE__ */ import_react15.default.createElement(MainContent_default, {
    loading,
    onItemSelect: changeCategory,
    selectedItem: selectedCategory,
    paginate,
    posts: currentDetails,
    totalPosts: filteredData.length,
    postPerPage,
    first: indexofFirstPost,
    last: indexofLastPost,
    currentNumber: currentpage
  }));
};
var Body15 = import_styled_components18.default.div`
  width: 100%;
  height: 100vh;
  position: sticky;
  top: 0;
  overflow-y: scroll;
  overflow-x: hidden;
  display: grid;
  grid-template-columns: 226px auto;
`;
var Shell = import_styled_components18.default.div`
  width: 100%;
  max-width: 226px;
  height: 100vh;
  position: sticky;
  top: 0;
  left: 0;
`;
var routes_default = Index;

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "6704bd0b", "entry": { "module": "/build/entry.client-3TEMTW3J.js", "imports": ["/build/_shared/chunk-VMDZ5VLE.js", "/build/_shared/chunk-TOAMQMCD.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-A67KQALZ.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-E3KHHQ6A.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-6704BD0B.js" };

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
  const authHeader = event.headers["authorization"];
  const graphSignatureHeader = event.headers["x-netlify-graph-signature"];
  if (authHeader != null && /Bearer /gi.test(authHeader)) {
    rawAuthorizationString = authHeader.split(" ")[1];
  }
  const loadContext = {
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
 * @remix-run/node v1.2.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.2.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.2.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
