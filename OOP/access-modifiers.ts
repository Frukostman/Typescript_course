class User{
    private _name: string;
    private _lastname: string;

    get fullName():string {
        return `${this._name} ${this._lastname}`
    }

    set fullName(fullName: string) {
        let words = fullName.split(" ");
        console.log(words)
        this._name = words[0];
        this._lastname = words[1];  
    }
}

let user1: User = new User();

user1.fullName = "Santiago Homps";
console.log(user1.fullName);