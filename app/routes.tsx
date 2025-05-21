import { ActionFunctionArgs, LoaderFunctionArgs } from "react-router";
import About from "./about.tsx";
import aboutLoader from "./about.loader.tsx";
import Home from "./home.tsx";
import Layout from "./layout.tsx";

const isServer = typeof document === "undefined";

export default [
  {
    id: "layout",
    path: "/",
    Component: Layout,
    // up to you where your loaders run (client or server), this one dynamically
    // imports the correct one to avoid putting the server code in client bundles
    async loader(args: LoaderFunctionArgs) {
      const mod =
        await (isServer
          ? import("./layout.server.tsx")
          : import("./layout.client.tsx"));
      return mod.loader(args);
    },
    // same with the action, you'll probably want to abstract this kind of stuff
    // in a createRoute() kind of thing
    async action(args: ActionFunctionArgs) {
      const mod =
        await (isServer
          ? import("./layout.server.tsx")
          : import("./layout.client.tsx"));
      return mod.action(args);
    },
    children: [
      {
        id: "home",
        index: true,
        Component: Home,
      },
      {
        id: "about",
        path: "about",
        Component: About,
        // this loader runs in both places
        loader: aboutLoader,
      },
    ],
  },
];
