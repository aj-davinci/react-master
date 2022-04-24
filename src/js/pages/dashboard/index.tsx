import * as React from "react";
import AppLoader from "@src/common/components/AppLoader";

const LoadableHome = AppLoader(import(/* webpackChunkName: "dashboard" */ "./Dashboard"));

export default LoadableHome;
