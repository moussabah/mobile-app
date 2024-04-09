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

    async delete(id: number | string): Promise<void> {
        const events = await this.getAll();
        const newEvents = events.filter((event) => event.id !== id)
        await AsyncStorage.setItem(this.storageKey, JSON.stringify(newEvents))
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

    async update(item: Event): Promise<Event> {
        const events = await this.getAll();
        const index = events.findIndex(event => event.id == item.id);
        events[index] = item;
        await AsyncStorage.setItem(this.storageKey, JSON.stringify(events));
        return Promise.resolve(item);
    }


     async getLastId(): Promise<string|number> {
        const events = await this.getAll();
        if (events.length == 0){
            return 1;
        }
        const lastId = events[events.length-1]!.id!;
        if (typeof lastId == "string"){
            return lastId+"1";
        }
        return lastId+1;
    }

}