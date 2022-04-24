import React from "react";
import Home from "@src/pages/home";
import Dashboard from "@src/pages/dashboard";
import Users from "@src/pages/users/Users";
import Posts from "@src/pages/posts/Posts";

type Category = "Home" | "Dashboard" | "Users" | "Posts";

interface Route<T> {
  title?: T;
  path: string;
  url?: string;
  exact?: boolean;
  main: any;
  routes?: Route<string>[];
}

type MainRoute = Route<Category>;

export const homeRoute = "/";
export const dashboardRoute = "/dashboard";
export const usersRoute = "/users";
export const postsRoute = "/posts";

export const routes: MainRoute[] = [
  {
    title: "Home",
    path: homeRoute,
    url: homeRoute,
    main: Home,
    exact: true
  },
  {
    title: "Dashboard",
    path: dashboardRoute,
    url: dashboardRoute,
    main: Dashboard
  },
  {
    title: "Users",
    path: usersRoute,
    url: usersRoute,
    main: Users
  },
  {
    title: "Posts",
    path: postsRoute,
    url: postsRoute,
    main: Posts
  }
];
