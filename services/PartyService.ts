import Party from "../models/Party";
export default class PartyService {
    static BASE_URL = 'http://localhost:8080/api/partys';

    static async createParty(party) {
        const response = await fetch(PartyService.BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(party)
        });
        return await response.json();
    }

    static async getPartyById(partyId) {
        const response = await fetch(`${PartyService.BASE_URL}/${partyId}`);
        if (!response.ok) {
            throw new Error(`Party with ID ${partyId} not found`);
        }
        return await response.json();
    }

    static async getPartys() {
        const response = await fetch(PartyService.BASE_URL);
        return await response.json();
    }

    static async updateParty(partyId, partyDetails) {
        const response = await fetch(`${PartyService.BASE_URL}/${partyId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(partyDetails)
        });
        return await response.json();
    }

    static async deleteParty(partyId) {
        await fetch(`${PartyService.BASE_URL}/${partyId}`, {
            method: 'DELETE'
        });
    }
}
