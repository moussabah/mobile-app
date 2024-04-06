export default class Course {
     id?: string|number;
     title?: string;
     description?: string;
     events?: [Event];
     isPublished?: boolean;

    format(courseData: any): Course {
        this.id = courseData.id ?? null;
        this.title = courseData.title ?? null;
        this.events = courseData.events ?? null;
        return this
    }
}
