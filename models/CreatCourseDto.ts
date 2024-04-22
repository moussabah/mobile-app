import {Tag} from './Tag';
import Event from "./Event";

export default class CreatCourseDto {
    title?: string;
    description?: string;
    published?: boolean;
    user_id?: number ;
    party_id?: number;

    format(courseData: any): CreatCourseDto {
        this.title = courseData.title ?? null;
        this.published = courseData.isPublished ?? null;
        this.description = courseData.description ?? null;
        this.user_id = courseData.user_id ?? 1;
        this.party_id = courseData.party_id ?? 1;
        return this;
    }
}

