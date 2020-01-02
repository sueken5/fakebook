import { IActivity } from "../types/Activity";
import uuid from "uuid";
import { IUser } from "../types/User";
import { IProfile } from "../types/Profile";
import { INotice } from "../types/Notice";

export function getNotice(): INotice {
  return {
    id: uuid(),
    user: getUser(),
    text: "知り合いかも",
    createdAt: Date.now()
  };
}

export function getNotices(): INotice[] {
  return [getNotice(), getNotice(), getNotice()];
}

export function getProfile(): IProfile {
  return {
    id: uuid(),
    user: getUser(),
    backgroundImageURL:
      "https://cdn-business.nikkei.com/atcl/seminar/19/00123/00005/p01.jpg?__scale=w:576,h:432&_sh=07b0e009e0",
    selfDescription: "にゃんにゃんするにゃん！",
    createdAt: Date.now()
  };
}

export function getUser(): IUser {
  return {
    id: uuid(),
    name: "kengo",
    iconURL:
      "https://sociopouch.files.wordpress.com/2019/08/8y3a8062.jpg?w=640&h=640"
  };
}

export function getUsers(): IUser[] {
  return [getUser(), getUser(), getUser(), getUser()];
}

export function getActivities(): IActivity[] {
  return [getActivity(), getActivity(), getActivity(), getActivity()];
}

function getActivity(): IActivity {
  return {
    id: uuid(),
    user: getUser(),
    text: "hello world",
    createdAt: Date.now(),
    goodCount: 100,
    shareCount: 10,
    comments: [
      {
        id: uuid(),
        user: getUser(),
        text: "hello kengo",
        createdAt: Date.now()
      }
    ]
  };
}
