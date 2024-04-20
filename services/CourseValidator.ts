import Course from "../models/Course";

export default class CourseValidator {
    validate(course: Course) : string|null {
        const errors = {};
        let msg = "";
        if (course.title === "" || course.title == null){
            msg = "Le titre ne peut être vide";
        }
        if (course.description === "" || course.description == null){
            msg = "La description ne peut être vide";
        }
        if (course.events == null || course.events.length == 0){
            msg = "Un parcours doit avoir au moins un événement";
        }
        if (msg !== ""){
            return msg
        }
        return null;
    }
}