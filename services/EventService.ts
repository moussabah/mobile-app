import Event from "../models/Event";
import HttpRequestService from "./HttpRequestService";
import {config} from "../config/config";
import CrudInterface from "./CrudInterface";
import EventStorage from "./storages/EventStorage";
export default class EventService implements CrudInterface<Event>{

    private eventStorage = new EventStorage();

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
}