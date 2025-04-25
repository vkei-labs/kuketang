export class Site {
    Id: number;
    Name: string;
    Logo: string;
    Description: string;
    Url: string;
    ChannelId: number;
    Background: string;
    Sort: number;
    Brief: string;

    constructor(
        id: number, name: string, logo: string, description: string, url: string, 
        channelId: number, background: string, brief: string, sort: number) {
        this.Id = id;
        this.Name = name;
        this.Logo = logo;
        this.Description = description;
        this.Url = url;
        this.ChannelId = channelId;
        this.Background = background;
        this.Brief = brief;
        this.Sort = sort;
    }
}