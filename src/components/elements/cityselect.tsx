import * as React from "react";
import {Map} from "../map";

interface CitySelectProps {
    map: Map;
}

export class CitySelect extends React.Component<CitySelectProps> {
    
    showOptions() {
        $(".select-options").show();
        $(".select-search").focus();
    }

    hideOptions() {
        $(".select-options").hide();
        $(".select-search").val("");
    }

    selectOption = (e) => {
        let id = $(e.target).attr("data-id");
        this.props.map.setSelected(id);
        $(".select-option").show();
        this.forceUpdate();
        this.hideOptions();
    }

    enterInput = (e) => {
        if (e.keyCode == 13) {
            e.target = $(".select-option:visible")[0];
            this.selectOption(e);
        }
    }

    searchInput = (e) => {
        $(".select-option").hide();
        $(".select-option").filter(function(): boolean {
            let reg = new RegExp("" + $(".select-search").val(), "i");
            return reg.test($(this).text());
        }).show();
    }

    render() {
        let options = new Array<JSX.Element>();
        this.props.map.cities.forEach((city, index) => {
            options.push(<div key={index} className="select-option" data-id={city.id} onClick={(e) => this.selectOption(e)}>{city.name}</div>);
        });
        return (
            <div className="city-select">
                <div className="selected-city" onClick={this.showOptions} data-id={this.props.map.selected.id}>
                    <span className="name">{this.props.map.selected.name}</span>
                    <span className="icon">&#9660;</span>
                </div>
                <div className="select-options">
                    <input type="text" className="select-search" placeholder="Search" onInput={(e) => this.searchInput(e)} onKeyDown={(e) => this.enterInput(e)}/>
                    {options}
                </div>
            </div>
        );
    }
}
