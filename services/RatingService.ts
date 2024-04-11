import Event from "../models/Event";
import HttpRequestService from "./HttpRequestService";
import {config} from "../config/config";

export default class RatingService {
    rateEvent(event: Event, rate: number) {
        return HttpRequestService.postData(config.route.rateEvent, {
            rate: rate,
            event_id: event.rate,
            user_id: 0,
        })
    }
};