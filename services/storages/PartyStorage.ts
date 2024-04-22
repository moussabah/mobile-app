import StorageService from "./StorageService";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Party from "../../models/Party";
import {ne} from "@faker-js/faker";

export default class PartyStorage implements StorageService<Party>{

    storageKey = "partys"
    async add(item: Party): Promise<void> {
        await AsyncStorage.setItem(this.storageKey, JSON.stringify(item))
        return Promise.resolve();
    }

    async delete(id: number | string): Promise<void> {
        //TODO
    }

    get(id: number | string = ""): Promise<Party> {
        if (id != ""){
            console.log('default', this.storageKey);
        }
        return new Promise((resolve, reject) => {
            AsyncStorage.getItem(this.storageKey).then((partyStr) => {
                if (partyStr == null){
                    reject("Party doesn't exists")
                }else{
                    const party = (new Party()).toParty(JSON.parse(partyStr))
                    resolve(party);
                }
            })

        });
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
        return  new Promise((resolve, reject) => {
            resolve(new Party());
            reject(new Party());
        });
    }

}