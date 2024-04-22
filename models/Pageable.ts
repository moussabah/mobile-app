export class Pageable {
    public page: number;
    public size: number;
    public sort: string[];

    constructor( page: number, size: number , sort: string[]) {
       this.page = page;
       this.size = size;
       this.sort = sort;

    }
}
