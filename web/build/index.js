"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// server.js
var server_exports = {};
__export(server_exports, {
  handler: () => handler
});
module.exports = __toCommonJS(server_exports);
var import_netlify = require("@remix-run/netlify");

// server-entry-module:@remix-run/dev/server-build
var server_build_exports = {};
__export(server_build_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_react = require("@remix-run/react"), import_server = require("react-dom/server"), import_jsx_dev_runtime = require("react/jsx-dev-runtime");
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  let markup = (0, import_server.renderToString)(
    /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
      fileName: "app/entry.server.tsx",
      lineNumber: 12,
      columnNumber: 5
    }, this)
  );
  return responseHeaders.set("Content-Type", "text/html"), new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
var import_react2 = require("@remix-run/react");

// app/styles/app.css
var app_default = "/build/_assets/app-5YP6FSJF.css";

// app/root.tsx
var import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), meta = () => ({
  charset: "utf-8",
  title: "Sybersyn",
  viewport: "width=device-width,initial-scale=1"
});
function App() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("html", { lang: "en", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 23,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 22,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Outlet, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 29,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_react2.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 30,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 26,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 21,
    columnNumber: 5
  }, this);
}
var links = () => [{ rel: "stylesheet", href: app_default }];

// app/routes/subscribe/index.tsx
var subscribe_exports = {};
__export(subscribe_exports, {
  action: () => action,
  default: () => Index,
  loader: () => loader
});

// app/components/Footer.tsx
var import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), Footer = () => /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("footer", { className: "footer items-center p-4 bg-base-100 text-neutral-content fixed bottom-0 w-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("div", { className: "grid-flow-col gap-4 md:place-self-center md:justify-self-end", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "https://open.spotify.com/artist/3RmmqvC0pG45U0sG6tuE4A?si=JyN4yh3mToOrHD_LeiD2MA", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
    "svg",
    {
      width: "24",
      height: "24",
      viewBox: "0 0 48 48",
      version: "1.1",
      xmlns: "http://www.w3.org/1999/xlink",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        "g",
        {
          id: "Icons",
          stroke: "none",
          strokeWidth: "1",
          fill: "none",
          fillRule: "evenodd",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
            "g",
            {
              id: "Color-",
              transform: "translate(-200.000000, -460.000000)",
              fill: "#00DA5A",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
                "path",
                {
                  d: "M238.16,481.36 C230.48,476.8 217.64,476.32 210.32,478.6 C209.12,478.96 207.92,478.24 207.56,477.16 C207.2,475.96 207.92,474.76 209,474.4 C217.52,471.88 231.56,472.36 240.44,477.64 C241.52,478.24 241.88,479.68 241.28,480.76 C240.68,481.6 239.24,481.96 238.16,481.36 M237.92,488.08 C237.32,488.92 236.24,489.28 235.4,488.68 C228.92,484.72 219.08,483.52 211.52,485.92 C210.56,486.16 209.48,485.68 209.24,484.72 C209,483.76 209.48,482.68 210.44,482.44 C219.2,479.8 230,481.12 237.44,485.68 C238.16,486.04 238.52,487.24 237.92,488.08 M235.04,494.68 C234.56,495.4 233.72,495.64 233,495.16 C227.36,491.68 220.28,490.96 211.88,492.88 C211.04,493.12 210.32,492.52 210.08,491.8 C209.84,490.96 210.44,490.24 211.16,490 C220.28,487.96 228.2,488.8 234.44,492.64 C235.28,493 235.4,493.96 235.04,494.68 M224,460 C210.8,460 200,470.8 200,484 C200,497.2 210.8,508 224,508 C237.2,508 248,497.2 248,484 C248,470.8 237.32,460 224,460",
                  id: "Spotify"
                },
                void 0,
                !1,
                {
                  fileName: "app/components/Footer.tsx",
                  lineNumber: 27,
                  columnNumber: 15
                },
                this
              )
            },
            void 0,
            !1,
            {
              fileName: "app/components/Footer.tsx",
              lineNumber: 22,
              columnNumber: 13
            },
            this
          )
        },
        void 0,
        !1,
        {
          fileName: "app/components/Footer.tsx",
          lineNumber: 15,
          columnNumber: 11
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "app/components/Footer.tsx",
      lineNumber: 8,
      columnNumber: 9
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 7,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "https://www.youtube.com/@sybersyn", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      width: "24",
      height: "24",
      viewBox: "0 0 24 24",
      className: "dark:fill-current",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { d: "M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 43,
        columnNumber: 11
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/Footer.tsx",
      lineNumber: 36,
      columnNumber: 9
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 35,
    columnNumber: 7
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("a", { href: "https://www.instagram.com/sybersyn_/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
    "svg",
    {
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      width: "24",
      height: "24",
      className: "dark:fill-current",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)("path", { d: "M 8 3 C 5.243 3 3 5.243 3 8 L 3 16 C 3 18.757 5.243 21 8 21 L 16 21 C 18.757 21 21 18.757 21 16 L 21 8 C 21 5.243 18.757 3 16 3 L 8 3 z M 8 5 L 16 5 C 17.654 5 19 6.346 19 8 L 19 16 C 19 17.654 17.654 19 16 19 L 8 19 C 6.346 19 5 17.654 5 16 L 5 8 C 5 6.346 6.346 5 8 5 z M 17 6 A 1 1 0 0 0 16 7 A 1 1 0 0 0 17 8 A 1 1 0 0 0 18 7 A 1 1 0 0 0 17 6 z M 12 7 C 9.243 7 7 9.243 7 12 C 7 14.757 9.243 17 12 17 C 14.757 17 17 14.757 17 12 C 17 9.243 14.757 7 12 7 z M 12 9 C 13.654 9 15 10.346 15 12 C 15 13.654 13.654 15 12 15 C 10.346 15 9 13.654 9 12 C 9 10.346 10.346 9 12 9 z" }, void 0, !1, {
        fileName: "app/components/Footer.tsx",
        lineNumber: 54,
        columnNumber: 11
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/Footer.tsx",
      lineNumber: 47,
      columnNumber: 9
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/Footer.tsx",
    lineNumber: 46,
    columnNumber: 7
  }, this)
] }, void 0, !0, {
  fileName: "app/components/Footer.tsx",
  lineNumber: 6,
  columnNumber: 5
}, this) }, void 0, !1, {
  fileName: "app/components/Footer.tsx",
  lineNumber: 5,
  columnNumber: 3
}, this);

// app/components/NavBar.tsx
var import_react3 = require("@remix-run/react"), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime"), NavBar = () => /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "navbar bg-base-100 opacity-80 z-10", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "navbar-start", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "dropdown", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("label", { tabIndex: 0, className: "btn btn-ghost lg:hidden", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "h-5 w-5",
          fill: "none",
          viewBox: "0 0 24 24",
          stroke: "currentColor",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
            "path",
            {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2",
              d: "M4 6h16M4 12h8m-8 6h16"
            },
            void 0,
            !1,
            {
              fileName: "app/components/NavBar.tsx",
              lineNumber: 15,
              columnNumber: 13
            },
            this
          )
        },
        void 0,
        !1,
        {
          fileName: "app/components/NavBar.tsx",
          lineNumber: 8,
          columnNumber: 11
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/NavBar.tsx",
        lineNumber: 7,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        "ul",
        {
          tabIndex: 0,
          className: "menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52",
          children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react3.Link, { to: "/about", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { children: "About" }, void 0, !1, {
              fileName: "app/components/NavBar.tsx",
              lineNumber: 29,
              columnNumber: 15
            }, this) }, void 0, !1, {
              fileName: "app/components/NavBar.tsx",
              lineNumber: 28,
              columnNumber: 13
            }, this) }, void 0, !1, {
              fileName: "app/components/NavBar.tsx",
              lineNumber: 27,
              columnNumber: 11
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react3.Link, { to: "/listen", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { children: "Listen" }, void 0, !1, {
              fileName: "app/components/NavBar.tsx",
              lineNumber: 34,
              columnNumber: 15
            }, this) }, void 0, !1, {
              fileName: "app/components/NavBar.tsx",
              lineNumber: 33,
              columnNumber: 13
            }, this) }, void 0, !1, {
              fileName: "app/components/NavBar.tsx",
              lineNumber: 32,
              columnNumber: 11
            }, this),
            " ",
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react3.Link, { to: "/latest", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { children: "Latest" }, void 0, !1, {
              fileName: "app/components/NavBar.tsx",
              lineNumber: 40,
              columnNumber: 15
            }, this) }, void 0, !1, {
              fileName: "app/components/NavBar.tsx",
              lineNumber: 39,
              columnNumber: 13
            }, this) }, void 0, !1, {
              fileName: "app/components/NavBar.tsx",
              lineNumber: 38,
              columnNumber: 11
            }, this)
          ]
        },
        void 0,
        !0,
        {
          fileName: "app/components/NavBar.tsx",
          lineNumber: 23,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/NavBar.tsx",
      lineNumber: 6,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react3.Link, { to: "/", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { className: "btn btn-ghost normal-case text-xl", children: "Sybersyn" }, void 0, !1, {
      fileName: "app/components/NavBar.tsx",
      lineNumber: 46,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/NavBar.tsx",
      lineNumber: 45,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/NavBar.tsx",
    lineNumber: 5,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "navbar-center hidden lg:flex", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("ul", { className: "menu menu-horizontal p-0", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react3.Link, { to: "/about", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { children: "About" }, void 0, !1, {
      fileName: "app/components/NavBar.tsx",
      lineNumber: 53,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/NavBar.tsx",
      lineNumber: 52,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/NavBar.tsx",
      lineNumber: 51,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react3.Link, { to: "/listen", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { children: "Listen" }, void 0, !1, {
      fileName: "app/components/NavBar.tsx",
      lineNumber: 58,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/NavBar.tsx",
      lineNumber: 57,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/NavBar.tsx",
      lineNumber: 56,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("li", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react3.Link, { to: "/latest", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { children: "Latest" }, void 0, !1, {
      fileName: "app/components/NavBar.tsx",
      lineNumber: 64,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/NavBar.tsx",
      lineNumber: 63,
      columnNumber: 11
    }, this) }, void 0, !1, {
      fileName: "app/components/NavBar.tsx",
      lineNumber: 62,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/NavBar.tsx",
    lineNumber: 50,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/NavBar.tsx",
    lineNumber: 49,
    columnNumber: 5
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("div", { className: "navbar-end", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react3.Link, { to: "/subscribe", children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("a", { className: "btn", children: "Subscribe" }, void 0, !1, {
    fileName: "app/components/NavBar.tsx",
    lineNumber: 71,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/NavBar.tsx",
    lineNumber: 70,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/NavBar.tsx",
    lineNumber: 69,
    columnNumber: 5
  }, this)
] }, void 0, !0, {
  fileName: "app/components/NavBar.tsx",
  lineNumber: 4,
  columnNumber: 3
}, this);

// app/components/HeroWrapper.tsx
var import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), HeroWrapper = ({
  img,
  component
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_jsx_dev_runtime5.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
  "div",
  {
    className: "hero min-h-screen",
    style: { backgroundImage: `url(${img})` },
    children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)("div", { className: "hero-overlay bg-opacity-60", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(NavBar, {}, void 0, !1, {
          fileName: "app/components/HeroWrapper.tsx",
          lineNumber: 17,
          columnNumber: 9
        }, this),
        component
      ] }, void 0, !0, {
        fileName: "app/components/HeroWrapper.tsx",
        lineNumber: 16,
        columnNumber: 7
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Footer, {}, void 0, !1, {
        fileName: "app/components/HeroWrapper.tsx",
        lineNumber: 20,
        columnNumber: 7
      }, this)
    ]
  },
  void 0,
  !0,
  {
    fileName: "app/components/HeroWrapper.tsx",
    lineNumber: 12,
    columnNumber: 5
  },
  this
) }, void 0, !1, {
  fileName: "app/components/HeroWrapper.tsx",
  lineNumber: 11,
  columnNumber: 3
}, this);

// app/components/SubscribeForm.tsx
var import_react4 = require("@remix-run/react");

// app/components/AlertComponent.tsx
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), AlertComponent = ({
  alertType,
  message
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
  "div",
  {
    className: `alert ${alertType === "error" ? "alert-error" : alertType === "success" ? "alert-success" : "alert-warning"} shadow-lg`,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("div", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          className: "stroke-current flex-shrink-0 h-6 w-6",
          fill: "none",
          viewBox: "0 0 24 24",
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
            "path",
            {
              strokeLinecap: "round",
              strokeLinejoin: "round",
              strokeWidth: "2",
              d: "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            },
            void 0,
            !1,
            {
              fileName: "app/components/AlertComponent.tsx",
              lineNumber: 27,
              columnNumber: 9
            },
            this
          )
        },
        void 0,
        !1,
        {
          fileName: "app/components/AlertComponent.tsx",
          lineNumber: 21,
          columnNumber: 7
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)("span", { children: message }, void 0, !1, {
        fileName: "app/components/AlertComponent.tsx",
        lineNumber: 34,
        columnNumber: 7
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/AlertComponent.tsx",
      lineNumber: 20,
      columnNumber: 5
    }, this)
  },
  void 0,
  !1,
  {
    fileName: "app/components/AlertComponent.tsx",
    lineNumber: 11,
    columnNumber: 3
  },
  this
);

// app/components/SubscribeForm.tsx
var import_react5 = require("react"), import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), SubscribeForm = ({
  subscribeInfo
}) => {
  let actionData = (0, import_react4.useActionData)(), [state, setState] = (0, import_react5.useState)("idle"), [isSubmitting, setSubmitting] = (0, import_react5.useState)(!1);
  return (0, import_react5.useEffect)(() => {
    actionData != null && actionData.subscription ? setState("success") : actionData != null && actionData.error ? setState("error") : setState("idle"), setSubmitting(!1);
  }, [actionData]), /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "hero lg:mt-36 md:mt-24 mt-12", children: [
    state !== "success" && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "hero-content flex-col lg:flex-row-reverse", children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "text-center lg:text-left lg:p-12", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("h1", { className: "text-5xl font-bold", children: subscribeInfo.title }, void 0, !1, {
          fileName: "app/components/SubscribeForm.tsx",
          lineNumber: 35,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { className: "py-6", children: subscribeInfo.subscribe }, void 0, !1, {
          fileName: "app/components/SubscribeForm.tsx",
          lineNumber: 36,
          columnNumber: 13
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/SubscribeForm.tsx",
        lineNumber: 34,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100", children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          import_react4.Form,
          {
            method: "post",
            className: "card-body",
            onSubmit: () => setSubmitting(!0),
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("fieldset", { className: "form-control", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("label", { className: "label", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { className: "label-text", children: "Name" }, void 0, !1, {
                  fileName: "app/components/SubscribeForm.tsx",
                  lineNumber: 46,
                  columnNumber: 19
                }, this) }, void 0, !1, {
                  fileName: "app/components/SubscribeForm.tsx",
                  lineNumber: 45,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                  "input",
                  {
                    name: "name",
                    type: "text",
                    placeholder: "Name",
                    className: "input input-bordered"
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/SubscribeForm.tsx",
                    lineNumber: 48,
                    columnNumber: 17
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/components/SubscribeForm.tsx",
                lineNumber: 44,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("fieldset", { className: "form-control", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("label", { className: "label", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("span", { className: "label-text", children: "Email" }, void 0, !1, {
                  fileName: "app/components/SubscribeForm.tsx",
                  lineNumber: 57,
                  columnNumber: 19
                }, this) }, void 0, !1, {
                  fileName: "app/components/SubscribeForm.tsx",
                  lineNumber: 56,
                  columnNumber: 17
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                  "input",
                  {
                    name: "email_address",
                    type: "email",
                    placeholder: "Email",
                    className: "input input-bordered",
                    required: !0
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/SubscribeForm.tsx",
                    lineNumber: 59,
                    columnNumber: 17
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/components/SubscribeForm.tsx",
                lineNumber: 55,
                columnNumber: 15
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "form-control mt-6", children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("button", { className: "btn btn-primary", disabled: isSubmitting, children: "Subscribe" }, void 0, !1, {
                  fileName: "app/components/SubscribeForm.tsx",
                  lineNumber: 68,
                  columnNumber: 17
                }, this),
                isSubmitting && state !== "error" ? /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("progress", { className: "progress w-70 mt-2" }, void 0, !1, {
                  fileName: "app/components/SubscribeForm.tsx",
                  lineNumber: 72,
                  columnNumber: 19
                }, this) : null
              ] }, void 0, !0, {
                fileName: "app/components/SubscribeForm.tsx",
                lineNumber: 67,
                columnNumber: 15
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/SubscribeForm.tsx",
            lineNumber: 39,
            columnNumber: 13
          },
          this
        ),
        state === "error" ? /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("p", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          AlertComponent,
          {
            alertType: "Error",
            message: actionData.message || "Something went wrong."
          },
          void 0,
          !1,
          {
            fileName: "app/components/SubscribeForm.tsx",
            lineNumber: 78,
            columnNumber: 17
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/SubscribeForm.tsx",
          lineNumber: 77,
          columnNumber: 15
        }, this) : null
      ] }, void 0, !0, {
        fileName: "app/components/SubscribeForm.tsx",
        lineNumber: 38,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/SubscribeForm.tsx",
      lineNumber: 33,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { hidden: state !== "success", children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
      AlertComponent,
      {
        alertType: "success",
        message: "Congratulations, you've subscribed! \u{1F389} We'll keep you updated."
      },
      void 0,
      !1,
      {
        fileName: "app/components/SubscribeForm.tsx",
        lineNumber: 88,
        columnNumber: 9
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/SubscribeForm.tsx",
      lineNumber: 87,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/SubscribeForm.tsx",
    lineNumber: 31,
    columnNumber: 5
  }, this);
};

// app/lib/sanity.ts
var import_client = require("@sanity/client"), import_preview_kit = require("@sanity/preview-kit"), import_image_url = __toESM(require("@sanity/image-url")), projectId = process.env.SANITY_PROJECT_ID || "", dataset = process.env.SANITY_DATASET || "production", apiVersion = process.env.SANITY_API_VERSION || "2021-03-25", client = (0, import_client.createClient)({
  projectId,
  dataset,
  apiVersion,
  useCdn: !0
}), usePreview = (0, import_preview_kit.definePreview)({ projectId, dataset }), builder = (preview = !1) => (0, import_image_url.default)(client), imageUrlForSource = (source, preview = !1) => source ? builder(preview).image(source) : void 0;

// app/routes/subscribe/index.tsx
var import_react6 = require("@remix-run/react"), import_jsx_dev_runtime8 = require("react/jsx-dev-runtime"), action = async ({ request }) => {
  {
    let formData = await request.formData(), email = formData.get("email_address"), name = formData.get("name"), API_KEY = process.env.CONVERTKIT_API_KEY, FORM_ID = process.env.CONVERTKIT_FORM_ID;
    return (await fetch(`https://api.convertkit.com/v3/forms/${FORM_ID}/subscribe`, {
      method: "post",
      body: JSON.stringify({ email, name, api_key: API_KEY }),
      headers: {
        "Content-Type": "application/json; charset=utf-8"
      }
    })).json();
  }
}, loader = async () => {
  var _a;
  let query = '*[_type == "subscribe"]', processedSubscribeInfo = (await client.fetch(query))[0], imageUrl = (_a = imageUrlForSource(processedSubscribeInfo.bgImage)) == null ? void 0 : _a.crop("focalpoint").dpr(1).format("webp").url();
  return { processedSubscribeInfo, imageUrl };
};
function Index() {
  let { processedSubscribeInfo, imageUrl } = (0, import_react6.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_jsx_dev_runtime8.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
    HeroWrapper,
    {
      img: imageUrl,
      component: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(SubscribeForm, { subscribeInfo: processedSubscribeInfo }, void 0, !1, {
        fileName: "app/routes/subscribe/index.tsx",
        lineNumber: 49,
        columnNumber: 20
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/routes/subscribe/index.tsx",
      lineNumber: 47,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/routes/subscribe/index.tsx",
    lineNumber: 46,
    columnNumber: 5
  }, this);
}

// app/routes/latest/index.tsx
var latest_exports = {};
__export(latest_exports, {
  default: () => Index2,
  loader: () => loader2
});
var import_react7 = require("@remix-run/react");

// app/components/LatestComponent.tsx
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime"), LatestComponent = ({ src }) => /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "flex justify-center mt-32", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "md:w-1/2 md:h-1/2 w-4/5 h-full", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("div", { className: "md:aspect-w-16 md:aspect-h-9 aspect-w-2 aspect-h-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)("iframe", { src, seamless: !0, allowFullScreen: !0 }, void 0, !1, {
  fileName: "app/components/LatestComponent.tsx",
  lineNumber: 5,
  columnNumber: 9
}, this) }, void 0, !1, {
  fileName: "app/components/LatestComponent.tsx",
  lineNumber: 4,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/components/LatestComponent.tsx",
  lineNumber: 3,
  columnNumber: 5
}, this) }, void 0, !1, {
  fileName: "app/components/LatestComponent.tsx",
  lineNumber: 2,
  columnNumber: 3
}, this);

// app/routes/latest/index.tsx
var import_jsx_dev_runtime10 = require("react/jsx-dev-runtime"), loader2 = async () => {
  var _a;
  let query = '*[_type == "latest"]', processedLatestInfo = (await client.fetch(query))[0], imageUrl = (_a = imageUrlForSource(processedLatestInfo.bgImage)) == null ? void 0 : _a.crop("focalpoint").dpr(1).format("webp").url();
  return { processedLatestInfo, imageUrl };
};
function Index2() {
  let { processedLatestInfo, imageUrl } = (0, import_react7.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_jsx_dev_runtime10.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
    HeroWrapper,
    {
      img: imageUrl,
      component: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(LatestComponent, { src: processedLatestInfo.source }, void 0, !1, {
        fileName: "app/routes/latest/index.tsx",
        lineNumber: 34,
        columnNumber: 20
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/routes/latest/index.tsx",
      lineNumber: 32,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/routes/latest/index.tsx",
    lineNumber: 31,
    columnNumber: 5
  }, this);
}

// app/routes/listen/index.tsx
var listen_exports = {};
__export(listen_exports, {
  default: () => Index3,
  loader: () => loader3
});
var import_react8 = require("@remix-run/react");

// app/components/BandcampComponent.tsx
var import_jsx_dev_runtime11 = require("react/jsx-dev-runtime"), BandcampComponent = ({
  title,
  link,
  src
}) => /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("div", { className: "xl:p-8 md:p-3", children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
  "iframe",
  {
    style: { border: "0", width: "350px", height: "442px" },
    src,
    seamless: !0,
    children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)("a", { href: link, children: title }, void 0, !1, {
      fileName: "app/components/BandcampComponent.tsx",
      lineNumber: 16,
      columnNumber: 7
    }, this)
  },
  void 0,
  !1,
  {
    fileName: "app/components/BandcampComponent.tsx",
    lineNumber: 11,
    columnNumber: 5
  },
  this
) }, void 0, !1, {
  fileName: "app/components/BandcampComponent.tsx",
  lineNumber: 10,
  columnNumber: 3
}, this);

// app/components/ListenComponent.tsx
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime"), ListenComponent = ({ songList }) => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_jsx_dev_runtime12.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "hero mt-24", children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)("div", { className: "grid xl:grid-flow-col lg:grid-cols-2 shadow-xl", children: songList.map((song, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
  BandcampComponent,
  {
    title: song.title,
    link: song.link,
    src: song.source
  },
  index,
  !1,
  {
    fileName: "app/components/ListenComponent.tsx",
    lineNumber: 10,
    columnNumber: 11
  },
  this
)) }, void 0, !1, {
  fileName: "app/components/ListenComponent.tsx",
  lineNumber: 8,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/components/ListenComponent.tsx",
  lineNumber: 7,
  columnNumber: 5
}, this) }, void 0, !1, {
  fileName: "app/components/ListenComponent.tsx",
  lineNumber: 6,
  columnNumber: 3
}, this);

// app/routes/listen/index.tsx
var import_jsx_dev_runtime13 = require("react/jsx-dev-runtime"), loader3 = async () => {
  var _a;
  let query = '*[_type == "listen"]', processedListenInfo = (await client.fetch(query))[0], imageUrl = (_a = imageUrlForSource(processedListenInfo.bgImage)) == null ? void 0 : _a.crop("focalpoint").dpr(1).format("webp").url();
  return { processedListenInfo, imageUrl };
};
function Index3() {
  let { processedListenInfo, imageUrl } = (0, import_react8.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
    HeroWrapper,
    {
      img: imageUrl,
      component: /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(ListenComponent, { songList: processedListenInfo.bandcampLinks }, void 0, !1, {
        fileName: "app/routes/listen/index.tsx",
        lineNumber: 28,
        columnNumber: 9
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/routes/listen/index.tsx",
      lineNumber: 25,
      columnNumber: 5
    },
    this
  );
}

// app/routes/about/index.tsx
var about_exports = {};
__export(about_exports, {
  default: () => Index4,
  loader: () => loader4
});

// app/components/AboutComponent.tsx
var import_react9 = require("@remix-run/react"), import_jsx_dev_runtime14 = require("react/jsx-dev-runtime"), AboutComponent = ({ aboutInfo, portraitImage }) => /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "hero lg:mt-36", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { className: "hero-content flex-col lg:flex-row-reverse", children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(
    "img",
    {
      src: portraitImage,
      className: " shadow-2xl w-2/4 lg:rounded-3xl invisible lg:visible md:visible"
    },
    void 0,
    !1,
    {
      fileName: "app/components/AboutComponent.tsx",
      lineNumber: 9,
      columnNumber: 9
    },
    this
  ),
  /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("h1", { className: "text-5xl font-bold", children: "Sybersyn" }, void 0, !1, {
      fileName: "app/components/AboutComponent.tsx",
      lineNumber: 14,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("p", { className: "py-6", children: "An artist from Cape Town, South Africa. Finding value in the unknown and forgotten. Inspired by sounds from all over the world, Sybersyn evokes an image of a network of digital roots beneath an ancient and mythical tree - often in seeking the unknown, in pushing up the skies we are drawn into the past. And the more we venture into the past, the more we discover portents of the future." }, void 0, !1, {
      fileName: "app/components/AboutComponent.tsx",
      lineNumber: 15,
      columnNumber: 11
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_react9.Link, { to: "/subscribe", children: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)("button", { className: "btn btn-primary", children: "Subscribe" }, void 0, !1, {
      fileName: "app/components/AboutComponent.tsx",
      lineNumber: 25,
      columnNumber: 13
    }, this) }, void 0, !1, {
      fileName: "app/components/AboutComponent.tsx",
      lineNumber: 24,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/AboutComponent.tsx",
    lineNumber: 13,
    columnNumber: 9
  }, this)
] }, void 0, !0, {
  fileName: "app/components/AboutComponent.tsx",
  lineNumber: 8,
  columnNumber: 7
}, this) }, void 0, !1, {
  fileName: "app/components/AboutComponent.tsx",
  lineNumber: 7,
  columnNumber: 5
}, this) }, void 0, !1, {
  fileName: "app/components/AboutComponent.tsx",
  lineNumber: 6,
  columnNumber: 3
}, this);

// app/routes/about/index.tsx
var import_react10 = require("@remix-run/react"), import_jsx_dev_runtime15 = require("react/jsx-dev-runtime"), loader4 = async () => {
  var _a, _b;
  let query = '*[_type == "about"]', aboutInfoProcessed = (await client.fetch(query))[0], backgroundImage = (_a = imageUrlForSource(aboutInfoProcessed.bgimage)) == null ? void 0 : _a.crop("focalpoint").dpr(1).format("webp").url(), portraitImage = (_b = imageUrlForSource(aboutInfoProcessed.image)) == null ? void 0 : _b.crop("focalpoint").dpr(1).format("webp").url();
  return { aboutInfo: aboutInfoProcessed, backgroundImage, portraitImage };
};
function Index4() {
  let { aboutInfo, backgroundImage, portraitImage } = (0, import_react10.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_jsx_dev_runtime15.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
    HeroWrapper,
    {
      component: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(AboutComponent, { aboutInfo: "", portraitImage }, void 0, !1, {
        fileName: "app/routes/about/index.tsx",
        lineNumber: 32,
        columnNumber: 11
      }, this),
      img: backgroundImage
    },
    void 0,
    !1,
    {
      fileName: "app/routes/about/index.tsx",
      lineNumber: 30,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/routes/about/index.tsx",
    lineNumber: 29,
    columnNumber: 5
  }, this);
}

// app/routes/index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index5,
  loader: () => loader5
});
var import_react11 = require("@remix-run/react"), import_jsx_dev_runtime16 = require("react/jsx-dev-runtime"), loader5 = async () => {
  var _a;
  let query = '*[_type == "homepage"]', homeInfoProcessed = (await client.fetch(query))[0], imageUrl = (_a = imageUrlForSource(homeInfoProcessed.image)) == null ? void 0 : _a.crop("focalpoint").fit("fillmax").dpr(1).format("webp").url();
  return { homeInfo: homeInfoProcessed, imageUrl };
};
function Index5() {
  let { imageUrl } = (0, import_react11.useLoaderData)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(import_jsx_dev_runtime16.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(HeroWrapper, { img: imageUrl, component: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", {}, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 27,
    columnNumber: 46
  }, this) }, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 27,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/routes/index.tsx",
    lineNumber: 26,
    columnNumber: 5
  }, this);
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { entry: { module: "/build/entry.client-EDB2AGW6.js", imports: ["/build/_shared/chunk-G6JVIMW4.js", "/build/_shared/chunk-DG4HR4CT.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-LGQL6ASS.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/about": { id: "routes/about", parentId: "root", path: "about", index: void 0, caseSensitive: void 0, module: "/build/routes/about-GYVPY4IB.js", imports: ["/build/_shared/chunk-PFFV5EHW.js", "/build/_shared/chunk-IZ74GOTN.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/about/index": { id: "routes/about/index", parentId: "root", path: "about", index: !0, caseSensitive: void 0, module: "/build/routes/about/index-LX5GCZA3.js", imports: ["/build/_shared/chunk-PFFV5EHW.js", "/build/_shared/chunk-IZ74GOTN.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/index": { id: "routes/index", parentId: "root", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/index-47SLQJEF.js", imports: ["/build/_shared/chunk-IZ74GOTN.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/latest": { id: "routes/latest", parentId: "root", path: "latest", index: void 0, caseSensitive: void 0, module: "/build/routes/latest-SZ5EPNZW.js", imports: ["/build/_shared/chunk-RGWQEIFR.js", "/build/_shared/chunk-IZ74GOTN.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/latest/index": { id: "routes/latest/index", parentId: "root", path: "latest", index: !0, caseSensitive: void 0, module: "/build/routes/latest/index-GF6ZO4ZT.js", imports: ["/build/_shared/chunk-RGWQEIFR.js", "/build/_shared/chunk-IZ74GOTN.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/listen": { id: "routes/listen", parentId: "root", path: "listen", index: void 0, caseSensitive: void 0, module: "/build/routes/listen-ECUDOCLR.js", imports: ["/build/_shared/chunk-P2AFDS6Z.js", "/build/_shared/chunk-IZ74GOTN.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/listen/index": { id: "routes/listen/index", parentId: "root", path: "listen", index: !0, caseSensitive: void 0, module: "/build/routes/listen/index-WZMQ32TG.js", imports: ["/build/_shared/chunk-P2AFDS6Z.js", "/build/_shared/chunk-IZ74GOTN.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/subscribe": { id: "routes/subscribe", parentId: "root", path: "subscribe", index: void 0, caseSensitive: void 0, module: "/build/routes/subscribe-B6ES3XV4.js", imports: ["/build/_shared/chunk-X5NJNPMD.js", "/build/_shared/chunk-IZ74GOTN.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/subscribe/index": { id: "routes/subscribe/index", parentId: "root", path: "subscribe", index: !0, caseSensitive: void 0, module: "/build/routes/subscribe/index-LU5D3EMG.js", imports: ["/build/_shared/chunk-X5NJNPMD.js", "/build/_shared/chunk-IZ74GOTN.js"], hasAction: !0, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, version: "b741b36e", hmr: void 0, url: "/build/manifest-B741B36E.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public\\build", future = { unstable_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, v2_errorBoundary: !0, v2_meta: !1, v2_normalizeFormMethod: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/subscribe": {
    id: "routes/subscribe",
    parentId: "root",
    path: "subscribe",
    index: void 0,
    caseSensitive: void 0,
    module: subscribe_exports
  },
  "routes/latest": {
    id: "routes/latest",
    parentId: "root",
    path: "latest",
    index: void 0,
    caseSensitive: void 0,
    module: latest_exports
  },
  "routes/listen": {
    id: "routes/listen",
    parentId: "root",
    path: "listen",
    index: void 0,
    caseSensitive: void 0,
    module: listen_exports
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
    index: !0,
    caseSensitive: void 0,
    module: routes_exports
  },
  "routes/subscribe/index": {
    id: "routes/subscribe/index",
    parentId: "root",
    path: "subscribe",
    index: !0,
    caseSensitive: void 0,
    module: subscribe_exports
  },
  "routes/latest/index": {
    id: "routes/latest/index",
    parentId: "root",
    path: "latest",
    index: !0,
    caseSensitive: void 0,
    module: latest_exports
  },
  "routes/listen/index": {
    id: "routes/listen/index",
    parentId: "root",
    path: "listen",
    index: !0,
    caseSensitive: void 0,
    module: listen_exports
  },
  "routes/about/index": {
    id: "routes/about/index",
    parentId: "root",
    path: "about",
    index: !0,
    caseSensitive: void 0,
    module: about_exports
  }
};

// server.js
function getLoadContext(event, context) {
  let rawAuthorizationString, netlifyGraphToken;
  event.authlifyToken != null && (netlifyGraphToken = event.authlifyToken);
  let authHeader = event.headers.authorization, graphSignatureHeader = event.headers["x-netlify-graph-signature"];
  authHeader != null && /Bearer /gi.test(authHeader) && (rawAuthorizationString = authHeader.split(" ")[1]);
  let loadContext = {
    clientNetlifyGraphAccessToken: rawAuthorizationString,
    netlifyGraphToken,
    netlifyGraphSignature: graphSignatureHeader
  };
  return Object.keys(loadContext).forEach((key) => {
    loadContext[key] == null && delete loadContext[key];
  }), loadContext;
}
var handler = (0, import_netlify.createRequestHandler)({
  build: server_build_exports,
  getLoadContext,
  mode: "development"
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  handler
});
//# sourceMappingURL=index.js.map
