export interface Company {
    name: string
}

export class Outlet {
    name: string;

    constructor(props: Company) {
        this.name = props.name;
    }

}