export interface Company {
    id: number; //THIS HAS TO BE UNIQUE
    name: string;
}

export class Outlet {
    name: string;
    amount: number;

    constructor(props: Company) {
        this.name = props.name;
        this.amount = 1;
    }

    upgrade() {
        this.amount += 1;
    }

}