import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { metaV1 } from "@remix-run/v1-meta";

import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from "@remix-run/react";
import styles from "./styles/app.css";
import { NavBar } from "./components/NavBar";
import { Footer } from "./components/Footer";
import { client } from "./lib/sanity";
export const meta: MetaFunction = () => ({
  charset: "utf-8",
  title: "Sybersyn",
  viewport: "width=device-width,initial-scale=1",
});

export type NavLink = {
  title: string;
  url: string;
};

export const loader = async () => {
  const query = `*[_type == "navigation"]`;
  const navInfo = await client.fetch(query);

  const processedNavInfo: NavLink[] = navInfo[0].pages;

  return { navInfo: processedNavInfo };
};

export default function App() {
  const { navInfo } = useLoaderData();
  console.log(navInfo);

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <NavBar navInfo={navInfo} />
        <Outlet />
        <Footer />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export const links: LinksFunction = () => [{ rel: "stylesheet", href: styles }];
