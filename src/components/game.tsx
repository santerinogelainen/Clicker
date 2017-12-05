import {Company} from "./company";
import * as React from "react";
import {Map} from "./map";
import {MapFrame} from "./frames/mapframe";
import {Frame} from "./frames/frame";
import {WorkFrame} from "./frames/workframe";

export class Game extends React.Component {

    companies: Array<Company> = new Array<Company>();
    totalMoney: number;
    perClick: number = 1;
    map: Map;
    
    constructor(props: any) {
        super(props);
        this.totalMoney = 0;
        this.map = new Map();
    }

    work() {
        this.totalMoney += this.perClick;
    }

    /**
     * adds a new company
     * @param company company that is added
     */
    public newCompany(company: Company){
        this.companies.push(company);
    }

    render() {
        return (
            <Frame frameId="main">
                <WorkFrame game={this}/>
                <MapFrame map={this.map}/>
            </Frame>
        );
    }

}