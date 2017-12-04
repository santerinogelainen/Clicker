import * as React from "react";
import {CityOption} from "./cityoption";
import {Map} from "../map";
import {City} from "../city";

export class CitySelectProps {
    map: Map;
}

export class CitySelect extends React.Component<CitySelectProps> {

    onSelectedChange() {
        console.log(this.props.map.selected);
        
    }

    render() {
        let options = new Array<JSX.Element>();
        this.props.map.cities.forEach(city => {
            options.push(<CityOption key={city.id} city={city} map={this.props.map}/>);
        });
        return (
            <div className="city-select">
                <div className="selected-city">
                    <span className="name">{this.props.map.selected.name}</span>
                    <span className="icon">&#9660;</span>
                </div>
                <div className="select-options">
                    {options}
                </div>
            </div>
        );
    }
}