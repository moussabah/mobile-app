import { Tag } from "../models/Tag";

export default class TagService {

    static BASE_URL = 'http://localhost:8080/api/tags';
    format(tagsStrings: string): Tag[]|null {
        if (tagsStrings.length == 0){
            return null;
        }
        return tagsStrings.split(",").map((item): Tag => {
            return new Tag(item.trim())
        });
    }

    static async createTag(tag: Tag) {
        const response = await fetch(TagService.BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(tag)
        });
        return await response.json();
    }

    static async getTagById(tagId : number) {
        const response = await fetch(`${TagService.BASE_URL}/${tagId}`);
        if (!response.ok) {
            throw new Error(`Tag with ID ${tagId} not found`);
        }
        return await response.json();
    }

    static async getTags() {
        const response = await fetch(TagService.BASE_URL);
        return await response.json();
    }

    static async updateTag(tagId: number, tagDetails: Tag) {
        const response = await fetch(`${TagService.BASE_URL}/${tagId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(tagDetails)
        });
        return await response.json();
    }

    static async deleteTag(tagId: number) {
        await fetch(`${TagService.BASE_URL}/${tagId}`, {
            method: 'DELETE'
        });
    }

}
