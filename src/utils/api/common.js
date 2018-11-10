import {get} from "./api";

export const searchDrugNames = values => get("/search-drug-names", values);
