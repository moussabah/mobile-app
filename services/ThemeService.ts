export default class ThemeService {

    static BASE_URL = 'http://localhost:8080/api/themes';

    static async createTheme(theme) {
        const response = await fetch(ThemeService.BASE_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(theme)
        });
        return await response.json();
    }

    static async getThemeById(themeId) {
        const response = await fetch(`${ThemeService.BASE_URL}/${themeId}`);
        if (!response.ok) {
            throw new Error(`Theme with ID ${themeId} not found`);
        }
        return await response.json();
    }

    static async getThemes() {
        const response = await fetch(ThemeService.BASE_URL);
        return await response.json();
    }

    static async updateTheme(themeId, themeDetails) {
        const response = await fetch(`${ThemeService.BASE_URL}/${themeId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(themeDetails)
        });
        return await response.json();
    }

    static async deleteTheme(themeId) {
        await fetch(`${ThemeService.BASE_URL}/${themeId}`, {
            method: 'DELETE'
        });
    }

}
