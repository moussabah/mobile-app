import {Tag} from './Tag';
import Event from "./Event";

export default class Course {
     id?: string|number;
     title?: string;
     description?: string;
     events?: Event[] = [];
     tags: Tag[] = [];
     isPublished?: boolean;

    format(courseData: any): Course {
        this.id = courseData.id ?? null;
        this.title = courseData.title ?? null;
        this.events = courseData.events ?? null;
        this.isPublished = courseData.isPublished ?? null;

        if (Array.isArray(courseData.tags)){
            this.tags = courseData.tags.map((tag: any): Tag => {
                return new Tag(tag.name);
            })
        }
        return this
    }
}
