import Course from "../models/Course";
import HttpRequestService from "./HttpRequestService";
import {config} from "../config/config";
import CrudInterface from "./CrudInterface";

import CourseStorage from "./storages/CourseStorage";

export default class CourseService implements CrudInterface<Course>{
    courseStorage = new CourseStorage();
    async create(entity: Course ): Promise<Course> {
        // await HttpRequestService.postData(config.route.createCourse, entity);
        entity.id = 1;
        await this.courseStorage.add(entity);
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


    getAll(): Promise<Course[]>{
        return this.courseStorage.getAll();
    }
}