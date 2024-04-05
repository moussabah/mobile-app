import Event from "../models/Event";
import HttpRequestService from "./HttpRequestService";
import {config} from "../config/config";
import CrudInterface from "./CrudInterface";
export default class EventService implements CrudInterface<Event>{
    async create(entity: Event ): Promise<Event> {
        await HttpRequestService.postData(config.route.createEvent, entity)
        entity.id = 1;
        return entity;
    }
    async delete(id: number|string): Promise<boolean> {

        return true
    }

    read(id: number | string): Event {
        return new Event();
    }

    update(entity: Event): Promise<boolean> {
        return Promise.resolve(false);
    }
}