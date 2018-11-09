import {get} from "./api";

export const autocomplete = values => get("/search-drug-names");