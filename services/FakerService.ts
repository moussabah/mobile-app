import Event from "../models/Event";
import {faker} from "@faker-js/faker";

export default class FakerService {


    static EDITION_SIZE = 10;

    getEvent():Event{
        const event = new Event();
        event.id = faker.number.int(100);
        event.rate = faker.number.int(5)
        event.descriptionFr = faker.lorem.sentences(15);
        event.postalCode = faker.location.zipCode();
        event.isFree = faker.datatype.boolean();
        event.name= faker.lorem.lines(10);
        event.dateBegin = faker.date.anytime().toString();
        event.dateEnd = faker.date.anytime().toString();
        event.email = faker.internet.email();
        event.price = faker.number.int(200);
        event.address =  faker.location.streetAddress();
        event.setGeolocation(faker.location.latitude({max: 46, min: 40}), faker.location.latitude({max: 6}));
        return event;
    }


    getEvents(count: number): Event[] {
        const events = [];
        for (let i = 0; i < count; i++) {
            events.push(this.getEvent());
        }
        return events;
    }

    getEditions(): {label: string, value: number}[]{
        const editions = [];
        for (let i = 0; i < FakerService.EDITION_SIZE; i++) {
            editions.push({
                label: faker.lorem.words(3),
                value: i,
            })
        }
        return editions;
    }
}