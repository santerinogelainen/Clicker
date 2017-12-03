import {Company} from "./company";
import * as React from "react";
import {Map} from "./map";
import {Frame} from "./frame";
import {WorkFrame} from "./workframe";

export class Game extends React.Component {

    companies: Array<Company> = new Array<Company>();
    map: Map;
    
    constructor(props: any) {
        super(props);
        this.map = new Map(null);
    }

    public newCompany(company: Company){
        this.companies.push(company);
    }

    render() {
        return (
            <Frame frameId="main">
                <WorkFrame/>
                {this.map.render()}
            </Frame>
        );
    }

}