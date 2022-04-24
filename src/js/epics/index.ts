import { combineEpics } from "redux-observable";
import { EpicFetchUsers } from "@src/pages/users/epics/EpicFetchUsers";
import { EpicFetchPosts } from "@src/pages/posts/epics/EpicFetchPosts";

const importSet = new Set([EpicFetchUsers, EpicFetchPosts]);

const importArray = [];

importSet.forEach(entry => importArray.push(entry));

export const EpicRoot = combineEpics(...importArray);
