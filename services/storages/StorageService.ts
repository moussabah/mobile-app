import AsyncStorage from "@react-native-async-storage/async-storage";

export default interface StorageService<T> {
    add(item: T): Promise<void>
    get(id: number|string): Promise<T>
    delete(id: number|string): Promise<T>
    update(id: number|string): Promise<T>
    getAll(): Promise<T[]>;
}