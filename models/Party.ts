
export default class Party {
    label?: string;
    value?: number;

    format(data: any): Party {
        this.label = data.tagName ?? null;
        this.value = data.id ?? null;
        return this;
    }
    
    
    toArray(data: any[]): Party[] {
        const partys = [];
        for (let i = 0; i < data.length; i++) {
            partys.push(this.format(data[i]));
        }
        return partys;
    }
}

