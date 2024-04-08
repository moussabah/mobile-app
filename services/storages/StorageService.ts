import AsyncStorage from "@react-native-async-storage/async-storage";

export default interface StorageService<T> {
    add(item: T): Promise<void>
    get(id: number|string): Promise<T>
    delete(id: number|string): Promise<void>
    update(item: T): Promise<T>
    getAll(): Promise<T[]>;
}