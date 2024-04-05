import StorageService from "./StorageService";
import Event from "../../models/Event";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default class EventStorage implements StorageService<Event>{

    storageKey = "events"
    async add(item: Event): Promise<void> {
        let events: string|null = await AsyncStorage.getItem(this.storageKey);
        if (events == null){
           events = JSON.stringify([{
               ...item
           }])
        }
        const newEvents = [
            ...JSON.parse(events),
            item,
        ];
        await AsyncStorage.setItem(this.storageKey, JSON.stringify(newEvents))

        return Promise.resolve();
    }

    delete(id: number | string): Promise<Event> {
        return Promise.resolve(new Event());
    }

    get(id: number | string): Promise<Event> {
        return Promise.resolve(new Event());
    }

    async getAll(): Promise<Event[]> {
        const events = await AsyncStorage.getItem(this.storageKey)
        if (events == null){
            return [];
        }
        const eventsObjects: any[] = JSON.parse(events);
        return eventsObjects.map((event): Event => {
            return (new Event()).format(event);
        });
    }

    update(id: number | string): Promise<Event> {
        return Promise.resolve(new Event());
    }

}