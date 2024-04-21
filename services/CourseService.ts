import Event from "../models/Event";
import HttpRequestService from "./HttpRequestService";
import {config} from "../config/config";
import CrudInterface from "./CrudInterface";

import CourseStorage from "./storages/CourseStorage";
import Course from "../models/Course";
import FakerService from "./FakerService";
import {Pageable} from "../models/Pageable";


export default class CourseService implements CrudInterface<Course>{
    courseStorage = new CourseStorage();
    headers = {
        "accept":"*/*",
        "Content-Type":"application/json"
    };
    async create(entity: Course ): Promise<Course> {
        return new Promise<Course>((resolve, reject) => {
            HttpRequestService
                .postData(config.route.createCourse, entity, this.headers)
                .then(res => res.json())
                .then(res => {
                    resolve(res)
                    this.courseStorage.add(res);
                })
                .catch(err => reject(err))
        })
    }
    async delete(id: number|string): Promise<boolean> {

        return true
    }

    read(id: number | string): Course {
        return new Course();
    }

    async update(entity: Course): Promise<boolean> {
        await this.courseStorage.update(entity);
        return Promise.resolve(false);
    }

    getAll(): Promise<Course[]>{
        const fakers = new FakerService();
        return new Promise<Course[]>((resolve, reject) => {
            setTimeout(() => {
               // resolve(fakers.getCourses(100));
            }, 3000)
        })
    }

    async  getAllWithPagination(page: number, limit : number): Promise<Response>{
        let  pageable = new Pageable(page, limit, ["dateCreation"]);
        const url = config.route.getCoursePagination
            .replace(`{page}`,`${page}`)
            .replace(`{size}`,`${limit}`)
            .replace(`{sort}`,'ASC');
        console.log({url})
        return HttpRequestService.getData(url);
    }

    async  fetchCourses() {
        const eventList: Response = await this.getAllWithPagination(1, 10);
        console.log("CourseList",eventList );
    }

    async addEventsToCourse(courseId: number, eventIds: number[]): Promise<void> {
        const url = `${config.route.addEventsToParcour}/${courseId}/events`;
        try {
            const response = await HttpRequestService.postData(url, eventIds, this.headers);
            console.log("Events associated with course successfully", response);
        } catch (error) {
            console.error("Error associating events with course", error);
            throw error;
        }
    }
}