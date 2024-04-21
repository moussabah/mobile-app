import {Tag} from './Tag';
import Event from "./Event";

export default class Course {
    id?: string|number;
    title?: string;
    description?: string;
    events?: Event[] = [];
    isPublished?: boolean;
    tags: Tag[] = [];

    format(courseData: any): Course {
        this.id = courseData.id ?? null;
        this.title = courseData.title ?? null;
        this.isPublished = courseData.isPublished ?? null;
        this.description = courseData.description ?? null;

        if (Array.isArray(courseData.events)){
            this.events = courseData.events.map((event: any): Event => {
                return (new Event()).format(event);
            })
        }

        if (Array.isArray(courseData.tags)){
            this.tags = courseData.tags.map((tag: any): Tag => {
                return new Tag(tag.name);
            })
        }
        return this;
    }
}

