export class Channel {
    Id: number;
    Name: string;
    Sort: number;
    IsActive: boolean = false;

    constructor(id: number, name: string, sort: number, isActive: boolean = false) {
        this.Id = id;
        this.Name = name;
        this.Sort = sort;
        this.IsActive = isActive;
    }
}