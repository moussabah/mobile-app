import Parcours from "./Parcours";

export default class Party {
    id: number;
    tagName: string;
    dateCreation: Date;
    dateInit: Date;
    dateEnd: Date;
    events: Event[];
    parcours: Parcours[];
}
