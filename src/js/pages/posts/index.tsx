import * as React from "react";
import AppLoader from "@src/common/components/AppLoader";

const LoadableHome = AppLoader(import(/* webpackChunkName: "posts" */ "./Posts"));

export default LoadableHome;
