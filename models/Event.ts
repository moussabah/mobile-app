import {Tag} from "./Tag";

export default class Event {
    public id?: string|number;
    public name?: string;
    public rate?:number;
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
    public postalCode?:string;
    public tags: Tag[] = [];
}