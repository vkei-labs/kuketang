import type { Site } from "./Site";

export class RankSubject {
    Id: number;
    Title: string;
    Sites: Site[] = [];

    constructor(id: number, title: string, sites: Site[]) {
        this.Id = id;
        this.Title = title;
        this.Sites = sites;
    }
}