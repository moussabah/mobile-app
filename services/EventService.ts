import Event from "../models/Event";
import HttpRequestService from "./HttpRequestService";
import {config} from "../config/config";
import CrudInterface from "./CrudInterface";
import EventStorage from "./storages/EventStorage";
export default class EventService /*implements CrudInterface<Event>*/ {
    /*async create(entity: Event ): Promise<Event> {
        await HttpRequestService.postData(config.route.createEvent, entity)
        const eventStorage = new EventStorage();
        entity.id = await eventStorage.getLastId();
        await eventStorage.add(entity);
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
    }*/

    static BASE_URL = 'http://localhost:8080/api/events';

    static async createEvent(event: Event) {
        const response = await fetch(EventService.BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(event)
        });
        return await response.json();
    }

    static async getEventById(eventId: number) {
        const response = await fetch(`${EventService.BASE_URL}/${eventId}`);
        if (!response.ok) {
            throw new Error(`Event with ID ${eventId} not found`);
        }
        return await response.json();
    }

    static async getEvents() {
        const response = await fetch(EventService.BASE_URL);
        return await response.json();
    }

    static async getEventsPagination(pageNumber: number, pageSize: number) {
        const response = await fetch(`${EventService.BASE_URL}/pagination?page=${pageNumber}&size=${pageSize}`);
        return await response.json();
    }

    static async getFilteredEvents(name: string, themeDescription: string, dateCreation: any) {
        let url = `${EventService.BASE_URL}/filter?`;
        if (name) url += `name=${name}&`;
        if (themeDescription) url += `themeDescription=${themeDescription}&`;
        if (dateCreation) url += `dateCreation=${dateCreation.toISOString()}&`;

        const response = await fetch(url);
        return await response.json();
    }

    static async updateEvent(eventId: number, eventDetails: Event) {
        const response = await fetch(`${EventService.BASE_URL}/${eventId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventDetails)
        });
        return await response.json();
    }

    static async deleteEvent(eventId: number) {
        await fetch(`${EventService.BASE_URL}/${eventId}`, {
            method: 'DELETE'
        });
    }

    static async rateEvent(eventId: number, rating : number) {
        const response = await fetch(`${EventService.BASE_URL}/rate/${eventId}?rating=${rating}`, {
            method: 'PUT'
        });
        return await response.json();
    }

    static async publishEvent(eventId : number, value : boolean) {
        const response = await fetch(`${EventService.BASE_URL}/publish/${eventId}?value=${value}`, {
            method: 'PUT'
        });
        return await response.json();
    }

    static async indicateFullEvent(eventId : number, value : boolean) {
        const response = await fetch(`${EventService.BASE_URL}/indicateFull/${eventId}?value=${value}`, {
            method: 'PUT'
        });
        return await response.json();
    }
}
