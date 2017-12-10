import * as React from "react";
import {City} from "./city";
import * as $ from "jquery";
import * as CityJSON from "../json/cities.json";

export class Map {

    cities: Array<City> = new Array<City>();
    selected: City;

    constructor() {
        this.initCities();
        // sort cities
        this.cities.sort((a, b) => a.name < b.name ? -1 : a.name > b.name ? 1 : 0);
        this.setSelected(0);
    }

    /**
     * set selected city by it's id
     * @param id city's id
     */
    public setSelected(id: string);
    /**
     * set selected city by it's index
     * @param index city's index
     */
    public setSelected(index: number);
    public setSelected(x) {
        if (typeof x == "number") {
            this.selected = this.cities[x];
        } else {
            let city = this.findCityById(x);
            this.selected = city;
        }
    }

    /**
     * Searches and returns a city by it's id
     * @param id id of the city
     * @returns city found or null if not found
     */
    public findCityById(id: string): City {
        for (let i = 0; i < this.cities.length; i++) {
            if (this.cities[i].id == id) {
                return this.cities[i];
            }
        }
        return null;
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
}