import { jsx, jsxs } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, useMatches, useActionData, useLoaderData, useParams, useRouteError, Meta, Links, ScrollRestoration, Scripts, Outlet, isRouteErrorResponse } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { createElement, useState } from "react";
import { Twitter, Globe } from "lucide-react";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough();
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
          pipe(body);
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
    setTimeout(abort, streamTimeout + 1e3);
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
function withComponentProps(Component) {
  return function Wrapped() {
    const props = {
      params: useParams(),
      loaderData: useLoaderData(),
      actionData: useActionData(),
      matches: useMatches()
    };
    return createElement(Component, props);
  };
}
function withErrorBoundaryProps(ErrorBoundary3) {
  return function Wrapped() {
    const props = {
      params: useParams(),
      loaderData: useLoaderData(),
      actionData: useActionData(),
      error: useRouteError()
    };
    return createElement(ErrorBoundary3, props);
  };
}
const links = () => [{
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap"
}];
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      children: [children, /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = withComponentProps(function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
});
const ErrorBoundary = withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack;
  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsxs("main", {
    className: "pt-16 p-4 container mx-auto",
    children: [/* @__PURE__ */ jsx("h1", {
      children: message
    }), /* @__PURE__ */ jsx("p", {
      children: details
    }), stack]
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root,
  links
}, Symbol.toStringTag, { value: "Module" }));
const Header = () => {
  return /* @__PURE__ */ jsx("header", { className: "flex items-center justify-between px-6 py-4 bg-transparent text-white", children: /* @__PURE__ */ jsxs("nav", { className: "flex space-x-4", children: [
    /* @__PURE__ */ jsx("div", { className: "px-4 py-2 rounded-md transition", children: "Odd Cafe Games" }),
    /* @__PURE__ */ jsx("a", { href: "#Projects", className: "px-4 py-2 hover:bg-neutral-900 transition", children: "Projects" })
  ] }) });
};
const FullScreenBanner = () => {
  return /* @__PURE__ */ jsx(
    "div",
    {
      style: {
        backgroundImage: `url('/assets/banner.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
        width: "100%"
      },
      children: /* @__PURE__ */ jsx(Header, {})
    }
  );
};
const Footer = () => {
  return /* @__PURE__ */ jsx("footer", { className: "w-full bg-gray-900 text-white py-12 px-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center md:items-start gap-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "space-y-2 text-center md:text-left", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 justify-center md:justify-start", children: [
        /* @__PURE__ */ jsx(Twitter, { size: 20 }),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "https://twitter.com/OddCafeGames",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "hover:text-blue-400 transition",
            children: "Twitter"
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 justify-center md:justify-start", children: [
        /* @__PURE__ */ jsx(Globe, { size: 20 }),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "https://bsky.app/profile/oddcafegames.bsky.social",
            target: "_blank",
            rel: "noopener noreferrer",
            className: "hover:text-blue-400 transition",
            children: "Bluesky"
          }
        )
      ] })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "text-sm text-gray-400 text-center md:text-right", children: /* @__PURE__ */ jsxs("p", { children: [
      "Email:",
      " ",
      /* @__PURE__ */ jsx(
        "a",
        {
          href: "mailto:OddCafeGames@gmail.com",
          className: "hover:text-blue-300 transition",
          children: "OddCafeGames@gmail.com"
        }
      )
    ] }) })
  ] }) });
};
const images = [
  "/assets/kittyMaker/kittyHome.png",
  "/assets/kittyMaker/calendar.png",
  "/assets/kittyMaker/merlinVN.png",
  "/assets/kittyMaker/sistersVN.png"
];
const ProjectsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const handlePrev = () => {
    setCurrentIndex((prevIndex) => prevIndex === 0 ? images.length - 1 : prevIndex - 1);
  };
  const handleNext = () => {
    setCurrentIndex((prevIndex) => prevIndex === images.length - 1 ? 0 : prevIndex + 1);
  };
  return /* @__PURE__ */ jsxs("section", { className: "min-h-screen w-full flex flex-col md:flex-row items-center justify-center px-6 py-12", children: [
    /* @__PURE__ */ jsxs("div", { id: "Projects", className: "relative w-full max-w-[800px] mb-10 md:mb-0 md:mr-12 flex flex-col items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative w-full aspect-[16/9] overflow-hidden rounded-lg shadow-lg", children: [
        /* @__PURE__ */ jsx(
          "img",
          {
            src: images[currentIndex],
            alt: `Slide ${currentIndex + 1}`,
            className: "w-full h-full object-cover"
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: handlePrev,
            className: "absolute -left-0 top-1/2 -translate-y-1/2 bg-gray-800/25 text-white text-3xl px-3 py-2 rounded-full hover:bg-opacity-70 transition",
            "aria-label": "Previous",
            children: "<"
          }
        ),
        /* @__PURE__ */ jsx(
          "button",
          {
            onClick: handleNext,
            className: "absolute -right-0 top-1/2 -translate-y-1/2 bg-gray-800/25 text-white text-3xl px-3 py-2 rounded-full hover:bg-opacity-70 transition",
            "aria-label": "Next",
            children: ">"
          }
        )
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex space-x-2 mt-4", children: images.map((_, index) => /* @__PURE__ */ jsx(
        "button",
        {
          onClick: () => setCurrentIndex(index),
          className: `w-3 h-3 rounded-full ${currentIndex === index ? "bg-gray-800" : "bg-gray-400 hover:bg-gray-600"} transition`,
          "aria-label": `Go to slide ${index + 1}`
        },
        index
      )) })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "w-full md:w-1/2 text-center md:text-left space-y-4", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-4xl md:text-6xl font-bold text-indigo-500", children: "Kitty Maker" }),
      /* @__PURE__ */ jsxs("p", { className: "text-lg md:text-xl text-gray-400", children: [
        "Through various circumstances, you've adopted a strange white kitten, and are in charge of raising her.",
        /* @__PURE__ */ jsx("br", {}),
        /* @__PURE__ */ jsx("br", {}),
        "Teach the small cat how to work, play, and build relationships with other cats to uncover more about her mysterious past."
      ] })
    ] })
  ] });
};
function meta({}) {
  return [{
    title: "Odd Cafe Games"
  }, {
    name: "description",
    content: "Odd Cafe Games Website"
  }];
}
const home = withComponentProps(function Home() {
  return /* @__PURE__ */ jsxs("h1", {
    className: "text-3x1 font-bold",
    children: [/* @__PURE__ */ jsx(FullScreenBanner, {}), /* @__PURE__ */ jsx(ProjectsSection, {}), /* @__PURE__ */ jsx(Footer, {})]
  });
});
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: home,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-SQZkSKxz.js", "imports": ["/assets/chunk-D4RADZKF-BXVSF3ox.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": true, "module": "/assets/root-DlGTAJTA.js", "imports": ["/assets/chunk-D4RADZKF-BXVSF3ox.js", "/assets/with-props-BMOtgW5C.js"], "css": ["/assets/root-2CZH4qCo.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/home": { "id": "routes/home", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/home-DcvjcZtB.js", "imports": ["/assets/with-props-BMOtgW5C.js", "/assets/chunk-D4RADZKF-BXVSF3ox.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "/assets/manifest-3e356217.js", "version": "3e356217", "sri": void 0 };
const assetsBuildDirectory = "build\\client";
const basename = "/";
const future = { "unstable_middleware": false, "unstable_optimizeDeps": false, "unstable_splitRouteModules": false, "unstable_subResourceIntegrity": false, "unstable_viteEnvironmentApi": false };
const ssr = true;
const isSpaMode = false;
const prerender = [];
const routeDiscovery = { "mode": "lazy", "manifestPath": "/__manifest" };
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/home": {
    id: "routes/home",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route1
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  prerender,
  publicPath,
  routeDiscovery,
  routes,
  ssr
};
