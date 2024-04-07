import Event from "../models/Event";

export default class EventValidator {
    validate(event: Event): string|null {
        const errors = {};
        let msg = "";
        if (event.name === ""){
            msg = "Le nom ne peut être vide";
        }
        if (event.address ===  ""){
            msg = "L'adresse ne peut être vide";
        }
        if (event.dateBegin === ""){
            msg = "La date de début ne peut être vide";
        }
        if (event.dateEnd === ""){
            msg = "La date de fin ne peut être vide";
        }
        if (event.email === ""){
            msg = "L'email de fin ne peut être vide";
        }
        if (!event.isFree && event.price === null){
            msg = "Le prix ne peut être vide";
        }
        if (event.description === ""){
            msg = "La description ne peut être vide";
        }
        if (event.postalCode === ""){
            msg = "Le code postal ne peut être vide";
        }
        if (msg !== ""){
            return msg
        }
        return  null;
    }



}