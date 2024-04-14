const domain = "https://localhost"

export const config =  {
    route: {
        createEvent: `${domain}/event/create`,
        rateEvent: `${domain}/event/rate/{id}`,
        filterBySearch: `${domain}/search/{query}`,
        filterByCriteria: `${domain}/search/criteria`
    },
}