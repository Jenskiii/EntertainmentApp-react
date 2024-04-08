import { baseApi } from "./base";

export function getHomeData(options){
    return baseApi.get("all", options).then(res => res.data)
}
export function getMoviesData(options){
    return baseApi.get("movies", options).then(res => res.data)
}
export function getSeriesData(options){
    return baseApi.get("series", options).then(res => res.data)
}
