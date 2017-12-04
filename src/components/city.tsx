import { Outlet, Company } from "./company";

interface CityProps {
    name: string;
}

export class City {

    id: string;
    name: string;
    outlets: Array<Outlet>;
    isselected: boolean;

    constructor(id: string, props: CityProps) {
        this.id = id;
        this.name = props.name;
    }

    /**
     * checks if the outlet already exists in the city
     * @param outlet outlet that is being checked
     * @returns true is outlet exists
     */
    outletExists(outlet: Outlet): boolean {
        return this.outlets.indexOf(outlet) != -1 ? true : false;
    }

    /**
     * adds a new outlet to the city if it doesn't exist yet
     * @param company companies' props
     * @returns outlet added or not
     */
    newOutlet(company: Company): boolean {
        let outlet = new Outlet(company);
        if (!this.outletExists(outlet)) {
            this.outlets.push(outlet);
            return true;
        }
        return false;
    }

}