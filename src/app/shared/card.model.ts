export class Card {
    public id: number;
    public image: string;
    public isActive: boolean;
    public description: string;

    constructor(id: number = 0, image: string, isActive: boolean, description: string) {
        this.id = id;
        this.image = image;
        this.isActive = isActive;
        this.description = description;
    }
}