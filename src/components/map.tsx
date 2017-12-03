import * as React from "react";
import {Frame} from "./frame";
import {City} from "./city";
import * as $ from "jquery";
import * as CityJSON from "../json/cities.json";

export class Map extends React.Component {

    cities: Array<City> = new Array<City>();

    constructor(props: any) {
        super(props);
        this.initCities();
        // sort cities
        this.cities.sort((a, b) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0);
    }

    /**
     * Adds a city to the map
     * @param city the city to add
     */
    public addCity(city: City) {
        this.cities.push(city);
    }

    /**
     * Initializes the map with cities
     */
    private initCities() {
        let data = CityJSON as any;
        $.each(data, (key, value) => {
            this.addCity(new City(key, value));
        });
    }

    /**
     * Returns the options of the cities for the city selection
     */
    private cityOptions() {
        let options = new Array<JSX.Element>();
        this.cities.forEach(city => {
            options.push(<div className="select-option" data-id={city.id}>{city.name}</div>);
        });
        return (
            <div className="city-select">
                <div className="selected-city" data-id={this.cities[0].id}>
                    <span className="name">{this.cities[0].name}</span>
                    <span className="icon">&#9660;</span>
                </div>
                <div className="select-options">
                    {options}
                </div>
            </div>
        );
    }

    render() {
        return (
            <Frame frameId="map">
                <Frame frameId="canvas"></Frame>
                <Frame frameId="selected-city">
                    <Frame frameId="city-info">
                        {this.cityOptions()}
                    </Frame>
                    <Frame frameId="upgrade-info"></Frame>
                </Frame>
            </Frame>
        );
    }
}