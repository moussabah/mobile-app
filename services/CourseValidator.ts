import Course from "../models/Course";

export default class CourseValidator {
    validate(course: Course) : string|null {
        const errors = {};
        let msg = "";
        if (course.title === ""){
            msg = "Le titre ne peut être vide";
        }
        if (course.description === ""){
            msg = "La description ne peut être vide";
        }
        if (msg !== ""){
            return msg
        }
        return null;
    }
}