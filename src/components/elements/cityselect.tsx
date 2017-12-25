import * as React from "react";
import {Map} from "../core/map";
import {Props} from "../helpers/props";

export class CitySelect extends React.Component<Props> {
    
    /**
     * Shows all the select options
     */
    showOptions() {
        $(".select-options").show();
        $(".select-search").focus();
    }

    /**
     * Hides all the select options
     */
    hideOptions = () => {
        $(".select-options").hide();
        $(".select-search").val("");
    }

    /**
     * Selects an option, set e.target to specify which element to select
     */
    selectOption = (e) => {
        let id = $(e.target).attr("data-id");
        this.props.game.map.setSelected(id);
        $(".select-option").show();
        this.props.update();
        this.hideOptions();
    }

    /**
     * Selects an option on enter click
     */
    enterInput = (e) => {
        if (e.keyCode == 13) {
            let visible = $(".select-option:visible");
            if (visible.length) {
                e.target = visible[0];
                this.selectOption(e);
            }
        }
    }

    /**
     * Search for cities (oninput event)
     */
    searchInput = (e) => {
        $(".select-option").hide();
        $(".select-option").filter(function(): boolean {
            let reg = new RegExp("" + $(".select-search").val(), "i");
            return reg.test($(this).text());
        }).show();
    }

    render() {
        let options = new Array<JSX.Element>();
        this.props.game.map.cities.forEach((city, index) => {
            options.push(<div key={index} className="select-option" data-id={city.id} onClick={(e) => this.selectOption(e)}>{city.name}</div>);
        });
        return (
            <div className="city-select">
                <div className="selected-city" onClick={this.showOptions} data-id={this.props.game.map.selected.id}>
                    <span className="name">{this.props.game.map.selected.name}</span>
                    <span className="icon">&#9660;</span>
                </div>
                <div className="select-options">
                    <div className="close-city-select" onClick={this.hideOptions}/>
                    <input type="text" className="select-search" placeholder="Search" onInput={(e) => this.searchInput(e)} onKeyDown={(e) => this.enterInput(e)}/>
                    {options}
                </div>
            </div>
        );
    }
}
