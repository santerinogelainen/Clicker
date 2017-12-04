import {Company} from "./company";
import * as React from "react";
import {Map} from "./map";
import {MapFrame} from "./frames/mapframe";
import {Frame} from "./frames/frame";
import {WorkFrame} from "./frames/workframe";

export class Game extends React.Component {

    companies: Array<Company> = new Array<Company>();
    map: Map;
    
    constructor(props: any) {
        super(props);
        this.map = new Map();
    }

    public newCompany(company: Company){
        this.companies.push(company);
    }

    render() {
        return (
            <Frame frameId="main">
                <WorkFrame/>
                <MapFrame map={this.map}/>
            </Frame>
        );
    }

}