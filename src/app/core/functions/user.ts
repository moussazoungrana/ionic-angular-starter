import {environment} from "../../../environments/environment";


export const currentUserName = (): string => {
  return currentUser().name;
}

export const currentUserEmail = (): string => {
  return currentUser().email;
}

export const currentUserAvatar = (): string => {
  return currentUser().avatar;
}



export const currentUser = (): any => {
  const user = JSON.parse(localStorage.getItem(environment.user_info));
  return user ? user : {};
}
