import Criteria from "../models/Criteria";

export default class FilterService {
    static filterByCriteria(data: any[], filter: Criteria){
        console.log({filter})
    }

    static filterBySearch(data: any[], search: string){
        console.log(search);
    }
}