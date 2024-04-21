import Event from "../models/Event";
import HttpRequestService from "./HttpRequestService";
import {config} from "../config/config";
import CrudInterface from "./CrudInterface";
import EventStorage from "./storages/EventStorage";
import FakerService from "./FakerService";
import {Pageable} from "../models/Pageable";
import {P} from "@expo/html-elements";
export default class EventService implements CrudInterface<Event>{

    private  eventStorage = new EventStorage();

    async create(entity: Event ): Promise<Event> {
        await HttpRequestService.postData(config.route.createEvent, entity)
        entity.id = await this.eventStorage.getLastId();
        await this.eventStorage.add(entity);
        return entity;
    }
    async delete(id: number|string): Promise<boolean> {

        return true
    }

    read(id: number | string): Event {
        return new Event();
    }

    async update(entity: Event): Promise<boolean> {
        await this.eventStorage.update(entity);
        return Promise.resolve(false);
    }

    getAll(): Promise<Event[]>{
        return new Promise<Event[]>((resolve, reject) => {
            this.getAllWithPagination(0, 200)
                .then(res => res.json())
                .then(res => resolve(res.content))
                .catch(error => {
                    reject(error);
                })
        })
    }

    async  getAllWithPagination(page: number, limit : number): Promise<Response>{
        let  pageable = new Pageable(page, limit, ["dateCreation"]);
        const url = config.route.getEventPagination
            .replace(`{page}`,`${page}`)
            .replace(`{size}`,`${limit}`)
            .replace(`{sort}`,'ASC');
        console.log({url})
        return HttpRequestService.getData(url);
    }

    async  fetchEvents() {
        const eventList: Response = await this.getAllWithPagination(1, 10);
        console.log("EventList",eventList );
    }
}