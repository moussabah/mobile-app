import Parcours from "../models/Parcours";
export default class ParcourService {

    static BASE_URL = 'http://localhost:8080/api/parcours';

    static async createParcour(parcour: Parcours) {
        const response = await fetch(ParcourService.BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(parcour)
        });
        return await response.json();
    }

    static async getParcourById(parcourId) {
        const response = await fetch(`${ParcourService.BASE_URL}/${parcourId}`);
        if (!response.ok) {
            throw new Error(`Parcour with ID ${parcourId} not found`);
        }
        return await response.json();
    }

    static async getParcours() {
        const response = await fetch(ParcourService.BASE_URL);
        return await response.json();
    }

    static async getParcoursPagination(pageNumber, pageSize) {
        const response = await fetch(`${ParcourService.BASE_URL}/pagination?page=${pageNumber}&size=${pageSize}`);
        return await response.json();
    }

    static async getFilteredParcours(title, description) {
        let url = `${ParcourService.BASE_URL}/filter?`;
        if (title) url += `title=${title}&`;
        if (description) url += `description=${description}&`;

        const response = await fetch(url);
        return await response.json();
    }

    static async updateParcour(parcourId, parcourDetails) {
        const response = await fetch(`${ParcourService.BASE_URL}/${parcourId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(parcourDetails)
        });
        return await response.json();
    }

    static async deleteParcour(parcourId) {
        await fetch(`${ParcourService.BASE_URL}/${parcourId}`, {
            method: 'DELETE'
        });
    }

    static async addEventsToParcour(parcourId, eventIds) {
        const response = await fetch(`${ParcourService.BASE_URL}/${parcourId}/events`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(eventIds)
        });
        return await response.json();
    }

}
