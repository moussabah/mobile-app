import StorageService from "./StorageService";
import Course from "../../models/Course";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default class CourseStorage implements StorageService<Course>{

    storageKey = "Courses"
    async add(item: Course): Promise<void> {
        let Courses: string|null = await AsyncStorage.getItem(this.storageKey);
        if (Courses == null){
            Courses = JSON.stringify([{
                ...item
            }])
        }
        const newCourses = [
            ...JSON.parse(Courses),
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
        return CoursesObjects.map((Course): Course => {
            return (new Course()).format(Course);
        });
    }

    update(course: Course): Promise<Course> {
        return new Promise((resolve, reject) => {
            resolve(new Course())
        });
    }

}