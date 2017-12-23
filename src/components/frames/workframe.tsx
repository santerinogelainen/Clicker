import * as React from "react";
import {Format} from "../other/format";
import {Frame} from "../elements/frame";
import {Game} from "../core/game";
import {Props} from "../other/props";

export class WorkFrame extends React.Component<Props> {

    rotate = (elem: string, startdeg: number, enddeg: number, length: number) => {
        let angle;
        $(elem).stop();
        $({deg: startdeg}).animate({deg: enddeg}, {
            duration: length,
            step: function(now) {
                $(elem).css("transform", "rotate(" + now + "deg)");
            }
        });
    }

    pickaxedown = () => {
        this.props.game.work();
        this.props.update();
        this.rotate("#pickaxe", 0, -45, 50);
    }

    pickaxeup = () => {
        this.rotate("#pickaxe", -45, 0, 50);
    }

    getMoneyPileImg() {
        let first = 1000;
        let second = 10000;
        let third = 100000;
        let fourth = 1000000;
        let fifth = 10000000;
        if (this.moneyIsBetween(first, second)) {
            return <img className="work-money-pile" src='./img/money_pile_2.png'/>;
        } else if (this.moneyIsBetween(second, third)) {
            return <img className="work-money-pile" src='./img/money_pile_3.png'/>;
        } else if (this.moneyIsBetween(third, fourth)) {
            return <img className="work-money-pile" src='./img/money_pile_4.png'/>;
        } else if (this.moneyIsBetween(fourth, fifth)) {
            return <img className="work-money-pile" src='./img/money_pile_5.png'/>;
        } else if (this.props.game.totalMoney >= fifth) {
            return <img className="work-money-pile" src='./img/money_pile_6.png'/>;
        }
        return null;
    }

    /**
     * checks if game total money is between min and max
     * @param min inclusive min
     * @param max exclusive max
     */
    moneyIsBetween(min: number, max: number) {
        return this.props.game.totalMoney >= min && this.props.game.totalMoney < max;
    }

    render() {
        return (
            <Frame frameId="work">
                <Frame frameId="total">
                    <div className="total-money">{Format.abbriviate(this.props.game.totalMoney)}</div>
                    <div className="total-mpd">+ {Format.abbriviate(this.props.game.getTotalMpd())} MPD</div>
                </Frame>
                <Frame frameId="click">
                    <div id="work" onMouseDown={this.pickaxedown} onMouseUp={this.pickaxeup}>
                        <img id="ore" src="./img/gold_ore.png"/>
                        <img id="pickaxe" src="./img/pickaxe.png"/>
                    </div>
                    {this.getMoneyPileImg()}
                </Frame>
            </Frame>
        );
    }
}