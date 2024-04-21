const domain = "http://10.0.2.2:8080"

export const config =  {
    route: {
        domain: `${domain}/`,
        createEvent: `${domain}/events`,
        rateEvent: `${domain}/event/rate/{id}`,
        filterBySearch: `${domain}/search/{query}`,
        filterByCriteria: `${domain}/search/criteria`,
        getEventPagination: `${domain}/events/pagination?page={page}&size={size}&sort={sort}`,
        getCoursePagination: `${domain}/parcours/pagination?page={page}&size={size}&sort={sort}`,
        createCourse: `${domain}/course/create`
    },
}