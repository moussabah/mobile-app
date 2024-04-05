import {Tag} from "../models/Tag";

export default class TagService {
    format(tagsStrings: string): Tag[]|null {
        if (tagsStrings.length == 0){
            return null;
        }
        return tagsStrings.split(",").map((item): Tag => {
            return new Tag(item.trim())
        });
    }
}