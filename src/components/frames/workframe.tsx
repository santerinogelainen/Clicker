import * as React from "react";
import {Format} from "../other/format";
import {Frame} from "../elements/frame";
import {Game} from "../core/game";
import {Props} from "../other/props";

export class WorkFrame extends React.Component<Props> {

    constructor(props: Props) {
        super(props);
        this.props.game.clock.onNextDay = () => {
            this.forceUpdate();
        }
    }

    work = () => {
        this.props.game.work();
        this.props.update();
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
                    <img id="work" src="./img/placeholder.png" onClick={this.work}/>
                    {this.getMoneyPileImg()}
                </Frame>
            </Frame>
        );
    }
}