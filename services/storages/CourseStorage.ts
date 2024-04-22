import StorageService from "./StorageService";
import Course from "../../models/Course";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default class CourseStorage implements StorageService<Course>{

    storageKey = "courses"
    async add(item: Course): Promise<void> {
        let courses: string|null = await AsyncStorage.getItem(this.storageKey);
        if (courses == null){
            courses = JSON.stringify([item])
        }
        const newCourses = [
            ...JSON.parse(courses),
            item,
        ];
        await AsyncStorage.setItem(this.storageKey, JSON.stringify(newCourses))

        return Promise.resolve();
    }

    delete(id: number | string): Promise<void> {
        return new Promise((resolve, reject) => {

        });
    }

    get(id: number | string): Promise<Course> {
        return Promise.resolve(new Course());
    }

    async getAll(): Promise<Course[]> {
        const Courses = await AsyncStorage.getItem(this.storageKey)
        if (Courses == null){
            return [];
        }
        const CoursesObjects: any[] = JSON.parse(Courses);
        return CoursesObjects.map( c => {
            return (new Course()).format(c);
        });
    }

    update(course: Course): Promise<Course> {
        return new Promise((resolve, reject) => {
            resolve(new Course())
        });
    }

    async getLastId(): Promise<string|number> {
        const courses = await this.getAll();
        if (courses.length == 0){
            return 1;
        }
        const lastId = courses[courses.length-1]!.id!;
        if (typeof lastId == "string"){
            return lastId+"1";
        }
        return lastId+1;
    }

}