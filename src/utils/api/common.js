import {get} from "./api";

export const searchDrugNames = values => get("/branches", values);
