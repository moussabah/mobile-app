import StorageService from "./StorageService";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Party from "../../models/Party";

export default class PartyStorage implements StorageService<Party>{

    storageKey = "partys"
    async add(item: Party): Promise<void> {
        let partys: string|null = await AsyncStorage.getItem(this.storageKey);
        if (partys == null){
            partys = JSON.stringify([{
                ...item
            }])
        }
        const newPartys = [
            ...JSON.parse(partys),
            item,
        ];
        await AsyncStorage.setItem(this.storageKey, JSON.stringify(newPartys))

        return Promise.resolve();
    }

    async delete(id: number | string): Promise<void> {
        const partys = await this.getAll();
        const newPartys = partys.filter((event) => event.id !== id)
        await AsyncStorage.setItem(this.storageKey, JSON.stringify(newPartys))
    }

    get(id: number | string): Promise<Party> {
        return Promise.resolve(new Party());
    }

    async getAll(): Promise<Party[]> {
        const partys = await AsyncStorage.getItem(this.storageKey)
        if (partys == null){
            return [];
        }
        const partysObjects: any[] = JSON.parse(partys);
        return partysObjects.map((event): Party => {
            return (new Party()).format(event);
        });
    }

    async update(item: Party): Promise<Party> {
        const partys = await this.getAll();
        const index = partys.findIndex(event => event.id == item.id);
        partys[index] = item;
        await AsyncStorage.setItem(this.storageKey, JSON.stringify(partys));
        return Promise.resolve(item);
    }


    async getLastId(): Promise<string|number> {
        const partys = await this.getAll();
        if (partys.length == 0){
            return 1;
        }
        const lastId = partys[partys.length-1]!.id!;
        if (typeof lastId == "string"){
            return lastId+"1";
        }
        return lastId+1;
    }

}