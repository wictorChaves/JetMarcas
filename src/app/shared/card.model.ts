export class Card {
    public id: number;
    public image: string;
    public url: string;
    public status: string;
    public description: string;

    constructor(id: number = 0, image: string, url: string, status: string, description: string) {
        this.id = id;
        this.image = image;
        this.url = url;
        this.status = status;
        this.description = description;
    }
}