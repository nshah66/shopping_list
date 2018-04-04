export class Ingredients {
    public name: string;
    public amount: number;

    constructor(name: string, amount: number){
        this.name = name;
        this.amount = amount;
    }

    //or you can use shortcut to above all statement as below
    //constructor(public name: string, public amount: string){}
}
