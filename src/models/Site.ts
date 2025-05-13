export class Site {
    Id: number;
    Name: string;
    Logo: string;
    Desc: string;
    Url: string;
    ChannelId: number;
    Cover: string;
    Sort: number;
    Hits: number;
    Recommend:number;

    constructor(
        id: number, name: string, logo: string, desc: string, url: string,
        channelId: number, cover: string, sort: number, hits:number,recommend:number) {
        this.Id = id;
        this.Name = name;
        this.Logo = logo;
        this.Desc = desc;
        this.Url = url;
        this.ChannelId = channelId;
        this.Cover = cover;
        this.Sort = sort;
        this.Hits = hits;
        this.Recommend = recommend;
    }
}
