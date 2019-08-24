export class Quote {
    // id: number;
    // name: string;
    // description: string;
    showDescription: boolean;
    constructor(
        public id: number, 
        public name: string, 
        public user: string, 
        public author: string, 
        public completeDate: Date, 
        public upvotes: number, 
        public downvotes: number){
        this.showDescription=false;
    }
}
