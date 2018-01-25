import * as CompanyTypeJSON from "../../json/companytypes.json";
import { Dictionary } from "../helpers/dictionary";

/**
 * Contains all the company types that the game has
 * string enum
 */
export enum CompanyType {
    Store = "store",
    Restaurant = "restaurant",
    Farm = "farm",
    Factory = "factory",
    Bank = "bank"
}

/**
 * Represents a single object in JSON, that contains the company types info
 * See companytypes.json
 */
export interface CompanyTypeInfo {
    key: string,
    title: string,
    icon: string,
    basempd: number,
    basecost: number,
    companycost: number
}

/**
 * Represents a single company, also contains static information of types
 */
export class Company {

    /**
     * Static readonly information of company types
     */
    static readonly typeinfo: Dictionary<CompanyTypeInfo> = new Dictionary<CompanyTypeInfo>(CompanyTypeJSON); 

    static getTypeInfo(type: CompanyType): CompanyTypeInfo {
        return Company.typeinfo.get(type);
    }

    key: string;
    name: string;
    type: CompanyType;

    constructor(name: string, type: CompanyType) {
        this.key = type;
        this.name = name;
        this.type = type;
    }

}

/**
 * Represents a single outlet
 */
export class Outlet {

    company: Company;
    count: number = 0;
    mpd: number = 0;
    basempd: number = 0.1;
    basecost: number = 15;
    cost: number = 15;
    costmodifier: number = 1.15;

    constructor(company: Company) {
        this.company = company;
        this.setBaseMpd();
        this.setBaseCost();
    }

    setBaseCost() {
        this.basecost = Company.getTypeInfo(this.company.type).basecost;
        this.cost = this.basecost;
    }

    setBaseMpd() {
        this.basempd = Company.getTypeInfo(this.company.type).basempd;
    }

    /**
     * Calculate mpd of this outlet
     * Use this everytime you update something
     */
    calculateMpd() {
        this.mpd = this.basempd * this.count;
    }

    calculateCost() {
        this.cost = Math.floor(Math.pow(this.costmodifier, this.count) * this.basecost);
    }

    /**
     * Upgrade the outlet
     */
    upgrade() {
        this.count += 1;
        this.calculateCost();
        this.calculateMpd();
    }

}