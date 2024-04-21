
export default class Party {
    id?: string|number;
    tagName?: string;
    public dateCreation?: string;
    public dateInit?: string;
    public dateEnd?: string;


    format(data: any): Party {
        this.id = data.id ?? null;
        this.tagName = data.tagName ?? null;
        this.dateCreation = data.dateCreation ?? null;
        this.dateInit = data.dateInit ?? null;
        this.dateEnd = data.dateEnd ?? null;
        return this;
    }
}

