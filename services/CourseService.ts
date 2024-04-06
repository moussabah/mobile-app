import CrudInterface from "./CrudInterface";
import Course from "../models/Course";
import HttpRequestService from "./HttpRequestService";
import EventStorage from "./storages/EventStorage";

export default class CourseService implements CrudInterface<Course>{
    async create(entity: Course ): Promise<Course> {
        await HttpRequestService.postData(config.route.createCourse, entity)
        const eventStorage = new EventStorage();
        entity.id = 1;
        await eventStorage.add(entity);
        return entity;
    }
    async delete(id: number|string): Promise<boolean> {

        return true
    }

    read(id: number | string): Course {
        return new Course();
    }

    update(entity: Course): Promise<boolean> {
        return Promise.resolve(false);
    }
}