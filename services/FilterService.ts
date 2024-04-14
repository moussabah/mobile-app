import Criteria from "../models/Criteria";
import HttpRequestService from "./HttpRequestService";
import {config} from "../config/config";

export default class FilterService {

    static filterByCriteria(filter: Criteria): any[]{
        console.log(filter)
        //TODO
        const url:string = config.route.filterByCriteria;
        const result = HttpRequestService.getData(url, {});
        return [];
    }

    static filterBySearch(data: any[], search: string){
        //TODO
        const url:string = config.route.filterBySearch
        const result = HttpRequestService.getData(url, {});
        return [];
    }
}