import Event from "../models/Event";

export default interface CrudInterface<T> {
    create(entity: T): Promise<T>
    read(id: number|string): T
    update(entity: T): Promise<boolean>
    delete(id: number|string): Promise<boolean>
}