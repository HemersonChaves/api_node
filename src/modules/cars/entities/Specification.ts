import {v4 as uuidv4} from "uuid";
class Specification {
    id?: string;
    name: string;
    description: string;
    create_at?: Date;

    //constructor(name: string, description: string){
    constructor() {
        if (!this.id) {
            this.id = uuidv4();
        }
        if (!this.create_at) {
            this.create_at = new Date();
        }
    }
}

export { Specification }