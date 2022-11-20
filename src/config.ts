import * as pages from "./pages";

export const config = {
  pages: [
    { path: "/", title: "Home", component: pages.Home },
    { path: "/articles", title: "Articles", component: pages.Articles },
    { path: "/projects", title: "Projects", component: pages.Projects },
    { path: "/talks", title: "Talks", component: pages.Talks },
  ],
};
