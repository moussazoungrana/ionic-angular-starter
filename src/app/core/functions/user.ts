import {environment} from "../../../environments/environment";


/**
 * Get current name
 */
export const currentUserName = (): string => {
  return currentUser().name;
}

/**
 * Get current email
 */
export const currentUserEmail = (): string => {
  return currentUser().email;
}

/**
 * Get current avatar
 */
export const currentUserAvatar = (): string => {
  return currentUser().avatar;
}


/**
 * Get current user
 */
export const currentUser = (): any => {
  const user = JSON.parse(localStorage.getItem(environment.user_info));
  return user ? user : {};
}
