import Event from "../models/Event";
import HttpRequestService from "./HttpRequestService";
import {config} from "../config/config";
import CrudInterface from "./CrudInterface";

import CourseStorage from "./storages/CourseStorage";
import Course from "../models/Course";
import FakerService from "./FakerService";
import {Pageable} from "../models/Pageable";
import PartyStorage from "./storages/PartyStorage";
import Party from "../models/Party";

export default class PartyService implements CrudInterface<Party>{
    partyStorage = new PartyStorage();
    async create(entity: Party ): Promise<Party> {
        // @ts-ignore
        return  Promise.resolve(null);
    }
    async delete(id: number|string): Promise<boolean> {
        return true
    }

    read(id: number | string): Party {
        return new Party();
    }

    async update(entity: Party): Promise<boolean> {
        await this.partyStorage.update(entity);
        return Promise.resolve(false);
    }

    getAll(): Promise<Response>{
        const url = config.route.listParty;
        console.log({url})
        return HttpRequestService.getData(url);
    }

    async  getAllWithPagination(page: number, limit : number): Promise<Response>{
        let  pageable = new Pageable(page, limit, ["dateCreation"]);
        const url = config.route.getCoursePagination
            .replace(`{page}`,`${page}`)
            .replace(`{size}`,`${limit}`)
            .replace(`{sort}`,'ASC');
        console.log({url})
        return HttpRequestService.getData(url);
    }

    async  fetchCourses() {
        const eventList: Response = await this.getAllWithPagination(1, 10);
        console.log("CourseList",eventList );
    }
}