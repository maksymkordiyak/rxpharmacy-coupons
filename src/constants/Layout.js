import {isIos, isX} from "../utils/common";

export const PADDING_TOP = (isIos && ((isX && 40) || 20)) || 0;
export const MENU_ANIMATION = 100;
export const MENU_ANIMATION_DURATION = 500;
