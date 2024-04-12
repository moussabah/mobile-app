import {Tag} from "./Tag";
import Geolocation from "./Geolocation";

export default class Event {
    public id?: string|number;
    public name?: string;
    public rate:number = 0;
    public totalRate?:number;
    public address?:string;
    public email?: string;
    public facebookUrl?: string;
    public imageUrl?: string;
    public dateBegin?: string;
    public dateEnd?: string;
    public isFree?: boolean;
    public price?:number;
    public description?:string;
    public descriptionFr?:string;
    public postalCode?:string;
    public tags: Tag[] = [];
    public geolocation?: Geolocation;


    format(eventData: any): Event {
        this.id = eventData.id ?? null;
        this.name = eventData.name ?? null;
        this.rate = eventData.rate ?? 0;
        this.email = eventData.email ?? null;
        this.dateEnd = eventData.dateEnd ?? null;
        this.dateBegin = eventData.dateBegin ?? null;
        this.isFree = eventData.isFree ?? null;
        this.price = eventData.price ?? null;
        this.description = eventData.description ?? null;
        this.postalCode = eventData.postalCode ?? null;
        this.address = eventData.address ?? null;
        this.descriptionFr = eventData.descriptionFr ?? null;

        if (Array.isArray(eventData.tags)){
            this.tags = eventData.tags.map((tag: any): Tag => {
                return new Tag(tag.name);
            })
        }
        return this
    }

    setGeolocation(lon: number, lat:number ){
        this.geolocation = new Geolocation(lon, lat);
    }

}