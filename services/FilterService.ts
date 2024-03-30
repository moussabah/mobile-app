import Criteria from "../models/Criteria";
import HttpRequestService from "./HttpRequestService";
import {config} from "../config/config";

export default class FilterService {

    static filterByCriteria(filter: Criteria): any[]{
        const url:string = config.domain+"/criteria"
        const result = HttpRequestService.getData(url, {});
        return [];
    }

    static filterBySearch(data: any[], search: string){
        const url:string = config.domain+"/search"
        const result = HttpRequestService.getData(url, {});
        return [];
    }
}