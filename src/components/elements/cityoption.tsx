import * as React from "react";
import { City } from "../city";
import {Map} from "../map";
import * as $ from "jquery";

export interface CityOptionProps {
    key: string;
    city: City;
    map: Map;
}

export class CityOption extends React.Component<CityOptionProps> {

    handleClick(e) {
        this.props.map.selected = this.props.city;
        console.log(this.props.map.selected);
        $(e.target).parent().hide();
    }

    render() {
        return <div className="select-option" onClick={(e) => this.handleClick(e)}>{this.props.city.name}</div>;
    }

}