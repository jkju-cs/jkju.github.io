import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { Publications } from "./pages/Publications";
import { Blog } from "./pages/Blog";
import { BlogPost } from "./pages/BlogPost";
import { Analytics } from "./pages/Analytics";
import { Contact } from "./pages/Contact";
import { NotFound } from "./pages/NotFound";
import { Layout } from "./components/Layout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "publications", Component: Publications },
      { path: "blog", Component: Blog },
      { path: "blog/:slug", Component: BlogPost },
      { path: "analytics", Component: Analytics },
      { path: "contact", Component: Contact },
      { path: "*", Component: NotFound },
    ],
  },
]);
