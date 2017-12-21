/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 8);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var Frame = /** @class */ (function (_super) {
    __extends(Frame, _super);
    function Frame() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Frame.prototype.render = function () {
        return React.createElement("div", { className: "frame", id: this.props.frameId + "-frame" }, this.props.children);
    };
    return Frame;
}(React.Component));
exports.Frame = Frame;


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Stats = /** @class */ (function () {
    function Stats() {
    }
    Stats.citiesWithOutlets = 0;
    Stats.totalCompanies = 0;
    Stats.totalOutlets = 0;
    return Stats;
}());
exports.Stats = Stats;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Format = /** @class */ (function () {
    function Format() {
    }
    /**
     * Abbriviates a number (1000 => 1k)
     * Anything less than 1000 wont be abbriviated
     * @param number number to be abbriviated
     */
    Format.abbriviate = function (number) {
        var n;
        if (number < Math.pow(10, 3)) {
            if (Format.isInteger(number)) {
                n = Math.floor(number).toString();
            }
            else {
                n = number.toFixed(1).toString();
            }
            return n;
        }
        var pow = 3;
        for (var i = 0; i < Format.largenumberabbr.length; i++) {
            if (number >= Math.pow(10, pow) && number < Math.pow(10, pow + 3)) {
                number /= Math.pow(10, pow);
                n = number.toFixed(1).toString();
                n += Format.largenumberabbr[i];
                return n;
            }
            pow += 3;
        }
        number /= Math.pow(10, (Format.largenumberabbr.length * 3));
        n = number.toFixed(1).toString();
        return n + Format.largenumberabbr[Format.largenumberabbr.length - 1];
    };
    /**
     * Check if a number is an integer
     * @param value value to be checked
     */
    Format.isInteger = function (value) {
        return typeof value === 'number' &&
            isFinite(value) &&
            Math.floor(value) === value;
    };
    Format.largenumberabbr = [
        "k", "m", "b", "t", "q", "Q", "s", "S", "o", "n", "d", "u", "X"
    ];
    return Format;
}());
exports.Format = Format;


/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = $;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var money_1 = __webpack_require__(6);
var List = /** @class */ (function (_super) {
    __extends(List, _super);
    function List() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    List.prototype.render = function () {
        return (React.createElement("div", { className: "list", id: this.props.id != null ? this.props.id + "-list" : null }, this.props.items));
    };
    return List;
}(React.Component));
exports.List = List;
var ListItem = /** @class */ (function (_super) {
    __extends(ListItem, _super);
    function ListItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.showInfo = function (e) {
            if (_this.props.info != null) {
                $(e.currentTarget).find(".list-info").show();
            }
        };
        _this.hideInfo = function (e) {
            if (_this.props.info != null) {
                $(e.currentTarget).find(".list-info").hide();
            }
        };
        return _this;
    }
    ListItem.prototype.listNumber = function () {
        if (this.props.number != null) {
            return React.createElement("span", { className: "list-number" }, this.props.number);
        }
    };
    ListItem.prototype.listMoney = function () {
        if (this.props.money != null) {
            return React.createElement("div", { className: "list-money" },
                React.createElement(money_1.Money, { amount: this.props.money, total: this.props.total }));
        }
    };
    ListItem.prototype.buyable = function () {
        if (this.props.money != null) {
            if (this.props.total >= this.props.money) {
                return "can-upgrade";
            }
            return "cannot-upgrade";
        }
        return "";
    };
    ListItem.prototype.render = function () {
        return (React.createElement("div", { className: "list-item " + this.buyable(), onClick: this.props.onClick, onMouseOver: this.showInfo, onMouseLeave: this.hideInfo },
            this.props.info,
            this.listNumber(),
            React.createElement("span", { className: "list-title" }, this.props.title),
            this.listMoney()));
    };
    return ListItem;
}(React.Component));
exports.ListItem = ListItem;
var ListInfo = /** @class */ (function (_super) {
    __extends(ListInfo, _super);
    function ListInfo() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.hide = function (e) {
            e.stopPropagation();
            $(e.currentTarget).hide();
        };
        return _this;
    }
    ListInfo.prototype.render = function () {
        return (React.createElement("div", { className: "list-info", onMouseOver: this.hide }, this.props.children));
    };
    return ListInfo;
}(React.Component));
exports.ListInfo = ListInfo;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var format_1 = __webpack_require__(3);
var Money = /** @class */ (function (_super) {
    __extends(Money, _super);
    function Money() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Money.prototype.getClassName = function () {
        if (this.props.total >= this.props.amount) {
            return 'enough';
        }
        return 'not-enough';
    };
    Money.prototype.render = function () {
        return (React.createElement("div", { className: "money" },
            React.createElement("span", { className: "amount " + this.getClassName() }, format_1.Format.abbriviate(this.props.amount)),
            React.createElement("img", { className: "money-pile", src: "./img/svg/money_pile_1.svg" })));
    };
    return Money;
}(React.Component));
exports.Money = Money;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var ModalType;
(function (ModalType) {
    ModalType[ModalType["YesNo"] = 0] = "YesNo";
    ModalType[ModalType["OKCancel"] = 1] = "OKCancel";
    ModalType[ModalType["OK"] = 2] = "OK";
    ModalType[ModalType["Cancel"] = 3] = "Cancel";
})(ModalType = exports.ModalType || (exports.ModalType = {}));
var Modal = /** @class */ (function (_super) {
    __extends(Modal, _super);
    function Modal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.okbutton = React.createElement("input", { className: "modal-button modal-button-ok", key: "modal-ok", type: "button", onClick: function (e) { return _this.hide(e, _this.props.onOK); }, value: "OK" });
        _this.cancelbutton = React.createElement("input", { className: "modal-button modal-button-cancel", key: "modal-cancel", type: "button", onClick: function (e) { return _this.hide(e, _this.props.onCancel); }, value: "Cancel" });
        _this.nobutton = React.createElement("input", { className: "modal-button modal-button-no", key: "modal-no", type: "button", onClick: function (e) { return _this.hide(e, _this.props.onNo); }, value: "No" });
        _this.yesbutton = React.createElement("input", { className: "modal-button modal-button-yes", key: "modal-yes", type: "button", onClick: function (e) { return _this.hide(e, _this.props.onYes); }, value: "Yes" });
        /**
         * Hides the modal IF clickevent returns true
         * @param clickevent Event to do when we click OK/No/Yes
         */
        _this.hide = function (e, clickevent) {
            if (clickevent() === true) {
                $("#" + _this.props.id + "-modal").hide();
            }
        };
        return _this;
    }
    /**
     * Returns the button(s) of this modals type
     */
    Modal.prototype.getButtonFromType = function () {
        var button;
        switch (this.props.type) {
            case ModalType.OK:
                button = this.okbutton;
                break;
            case ModalType.Cancel:
                button = this.cancelbutton;
                break;
            case ModalType.YesNo:
                button = [
                    this.nobutton,
                    this.yesbutton
                ];
                break;
            case ModalType.OKCancel:
                button = [
                    this.cancelbutton,
                    this.okbutton
                ];
                break;
        }
        return button;
    };
    Modal.prototype.render = function () {
        // get button(s) from modal type
        var button = this.getButtonFromType();
        // get title
        var title;
        if (this.props.title != null) {
            title = React.createElement("div", { className: "modal-title" }, this.props.title);
        }
        return (React.createElement("div", { className: "modal-bg", id: this.props.id + "-modal" },
            React.createElement("div", { className: "modal" },
                title,
                React.createElement("div", { className: "modal-content" }, this.props.children),
                React.createElement("div", { className: "modal-buttons" }, button))));
    };
    return Modal;
}(React.Component));
exports.Modal = Modal;


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(9);
module.exports = __webpack_require__(34);


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(10);
var $ = __webpack_require__(4);
var game_1 = __webpack_require__(11);
var mainframe_1 = __webpack_require__(17);
var game = new game_1.Game();
ReactDOM.render(React.createElement(mainframe_1.MainFrame, { game: game }), $("#body")[0]);


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var stats_1 = __webpack_require__(2);
var map_1 = __webpack_require__(12);
var clock_1 = __webpack_require__(16);
var Game = /** @class */ (function () {
    function Game() {
        var _this = this;
        this.companies = [];
        this.companycost = 50;
        this.costmodifier = 10;
        this.perClick = 1;
        this.totalMoney = 0;
        this.clock = new clock_1.Clock();
        this.clock.onNextDay = function () {
            _this.totalMoney += _this.getTotalMpd();
        };
        this.map = new map_1.Map();
    }
    /**
     * Returns the total mpd
     */
    Game.prototype.getTotalMpd = function () {
        var total = 0;
        this.map.cities.forEach(function (city) {
            city.outlets.forEach(function (outlet) {
                total += outlet.mpd;
            });
        });
        return total;
    };
    /**
     * Checks if you have enough money for something
     * @param amount amount
     */
    Game.prototype.enoughMoneyFor = function (amount) {
        return this.totalMoney >= amount;
    };
    /**
     * Uses money
     * @param amount the amount to use
     */
    Game.prototype.useMoney = function (amount) {
        this.totalMoney -= amount;
    };
    /**
     * "Work" (click) for money
     */
    Game.prototype.work = function () {
        this.totalMoney += this.perClick;
    };
    /**
     * adds a new company
     * @param company company that is added
     */
    Game.prototype.newCompany = function (company) {
        this.companies[company.id] = company;
        this.companycost = this.companycost * this.costmodifier;
        stats_1.Stats.totalCompanies++;
    };
    return Game;
}());
exports.Game = Game;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var city_1 = __webpack_require__(13);
var $ = __webpack_require__(4);
var CityJSON = __webpack_require__(15);
var stats_1 = __webpack_require__(2);
var Map = /** @class */ (function () {
    function Map() {
        this.cities = new Array();
        this.initCities();
        // sort cities
        this.cities.sort(function (a, b) { return a.name < b.name ? -1 : a.name > b.name ? 1 : 0; });
        this.setSelected(0);
    }
    Map.prototype.setSelected = function (x) {
        if (typeof x == "number") {
            this.selected = this.cities[x];
        }
        else {
            var city = this.findCityById(x);
            this.selected = city;
        }
    };
    /**
     * Creates a new outlet to a city
     * @param company company of the outlet
     * @param city city where to create the outlet, default = this.selected
     */
    Map.prototype.newOutlet = function (company, city) {
        if (city === void 0) { city = this.selected; }
        var outlets = city.outletCount();
        city.newOutlet(company);
        if (outlets == 0) {
            stats_1.Stats.citiesWithOutlets++;
            // recalculate cities without outlets cost
            for (var i = 0; i < this.cities.length; i++) {
                if (this.cities[i].outletCount() == 0) {
                    this.cities[i].updateCostOnNewCity();
                }
            }
        }
    };
    /**
     * Searches and returns a city by it's id
     * @param id id of the city
     * @returns city found or null if not found
     */
    Map.prototype.findCityById = function (id) {
        for (var i = 0; i < this.cities.length; i++) {
            if (this.cities[i].id == id) {
                return this.cities[i];
            }
        }
        return null;
    };
    /**
     * Adds a city to the map
     * @param city the city to add
     */
    Map.prototype.addCity = function (city) {
        this.cities.push(city);
    };
    /**
     * Initializes the map with cities
     */
    Map.prototype.initCities = function () {
        var _this = this;
        var data = CityJSON;
        $.each(data, function (key, value) {
            _this.addCity(new city_1.City(key, value));
        });
    };
    return Map;
}());
exports.Map = Map;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var company_1 = __webpack_require__(14);
var stats_1 = __webpack_require__(2);
var React = __webpack_require__(0);
var City = /** @class */ (function () {
    function City(id, props) {
        this.outlets = [];
        this.basecost = 15;
        this.cost = 15;
        this.costmodifier = 1.75;
        this.citymodifier = 2;
        this.id = id;
        this.name = props.name;
        this.icon = React.createElement("img", { className: "city-icon", src: props.icon });
    }
    /**
     * Update the cost of this city when you create a new outlet in a new city
     */
    City.prototype.updateCostOnNewCity = function () {
        this.cost = Math.floor(Math.pow(this.citymodifier, stats_1.Stats.citiesWithOutlets) * this.basecost);
    };
    /**
     * checks if the company already has an outlet in the city
     * @param company company that is being checked
     * @returns true is outlet exists
     */
    City.prototype.hasOutletFor = function (company) {
        return company.id in this.outlets;
    };
    /**
     * Returns the number of outlets in this city
     */
    City.prototype.outletCount = function () {
        var count = 0;
        for (var i = 0; i < this.outlets.length; i++) {
            if (this.outlets[i] != null) {
                count++;
            }
        }
        return count;
    };
    /**
     * Checks if this city has all outlets for all companies
     * @param companies list of companies
     * @returns true if this city has all outlets
     */
    City.prototype.hasAllOutlets = function (companies) {
        for (var i = 0; i < companies.length; i++) {
            if (!this.hasOutletFor(companies[i])) {
                return false;
            }
        }
        return true;
    };
    /**
     * adds a new outlet to the city if it doesn't exist yet
     * @param company companies' props
     * @returns outlet added or not
     */
    City.prototype.newOutlet = function (company) {
        if (!this.hasOutletFor(company)) {
            this.outlets[company.id] = new company_1.Outlet(company, this.outletCount());
            stats_1.Stats.totalOutlets++;
            this.cost = Math.floor(this.cost * this.costmodifier);
            return true;
        }
        return false;
    };
    return City;
}());
exports.City = City;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Outlet = /** @class */ (function () {
    function Outlet(props, nth) {
        if (nth === void 0) { nth = 0; }
        this.mpd = 0.1;
        this.basempd = 0.1;
        this.basecost = 15;
        this.cost = 15;
        this.costmodifier = 1.15;
        this.name = props.name;
        this.count = 1;
        this.adjustBaseMpd(nth);
    }
    /**
     * Adjust the base mpd of this outlet
     * @param nth the nth outlet in the city
     */
    Outlet.prototype.adjustBaseMpd = function (nth) {
        this.basempd = this.basempd * Math.pow(10, nth);
        this.mpd = this.basempd;
    };
    /**
     * Calculate mpd of this outlet
     * Use this everytime you update something
     */
    Outlet.prototype.calculateMpd = function () {
        this.mpd = this.basempd * this.count;
    };
    Outlet.prototype.calculateCost = function () {
        this.cost = Math.floor(Math.pow(this.costmodifier, this.count) * this.basecost);
    };
    /**
     * Upgrade the outlet
     */
    Outlet.prototype.upgrade = function () {
        this.count += 1;
        this.calculateCost();
        this.calculateMpd();
    };
    return Outlet;
}());
exports.Outlet = Outlet;


/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = {"helsinki":{"name":"Helsinki","icon":"./img/placeholder.svg"},"london":{"name":"London","icon":"./img/placeholder.svg"},"paris":{"name":"Paris","icon":"./img/placeholder.svg"},"berlin":{"name":"Berlin","icon":"./img/placeholder.svg"},"moscow":{"name":"Moscow","icon":"./img/placeholder.svg"},"athens":{"name":"Athens","icon":"./img/placeholder.svg"},"madrid":{"name":"Madrid","icon":"./img/placeholder.svg"},"tokyo":{"name":"Tokyo","icon":"./img/placeholder.svg"}}

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Clock = /** @class */ (function () {
    function Clock() {
        var _this = this;
        this.nextDayEvents = [];
        /**
         * Goes to the next day
         */
        this.nextDay = function () {
            _this.date.setDate(_this.date.getDate() + 1);
            _this.nextDayEvents.forEach(function (func) {
                func();
            });
        };
        this.date = new Date();
        this.start();
    }
    Object.defineProperty(Clock.prototype, "onNextDay", {
        /**
         * Adds a new event to the clock that triggers everytime day changes
         */
        set: function (func) {
            this.nextDayEvents.push(func);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Starts the dayclock
     */
    Clock.prototype.start = function () {
        var _this = this;
        this.interval = setInterval(function () {
            _this.nextDay();
        }, 1000);
    };
    /**
     * Pauses the dayclock
     */
    Clock.prototype.pause = function () {
        clearInterval(this.interval);
    };
    return Clock;
}());
exports.Clock = Clock;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var mapframe_1 = __webpack_require__(18);
var frame_1 = __webpack_require__(1);
var newcompany_1 = __webpack_require__(25);
var workframe_1 = __webpack_require__(26);
var navigationframe_1 = __webpack_require__(27);
var statsframe_1 = __webpack_require__(30);
var newoutlet_1 = __webpack_require__(31);
var debugcontrols_1 = __webpack_require__(33);
var MainFrame = /** @class */ (function (_super) {
    __extends(MainFrame, _super);
    function MainFrame() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.update = function () {
            _this.forceUpdate();
        };
        return _this;
    }
    MainFrame.prototype.render = function () {
        return (React.createElement(frame_1.Frame, { frameId: "main" },
            React.createElement(debugcontrols_1.DebugControls, { game: this.props.game, update: this.update }),
            React.createElement(newcompany_1.NewCompanyModal, { game: this.props.game, update: this.update }),
            React.createElement(newoutlet_1.NewOutletModal, { game: this.props.game, update: this.update }),
            React.createElement(frame_1.Frame, { frameId: "game" },
                React.createElement(navigationframe_1.NavigationFrame, { game: this.props.game, update: this.update }),
                React.createElement(workframe_1.WorkFrame, { game: this.props.game, update: this.update }),
                React.createElement(statsframe_1.StatsFrame, { game: this.props.game, update: this.update }),
                React.createElement(mapframe_1.MapFrame, { game: this.props.game, update: this.update }))));
    };
    return MainFrame;
}(React.Component));
exports.MainFrame = MainFrame;


/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var selectedcityframe_1 = __webpack_require__(19);
var mapcanvasframe_1 = __webpack_require__(24);
var frame_1 = __webpack_require__(1);
var MapFrame = /** @class */ (function (_super) {
    __extends(MapFrame, _super);
    function MapFrame() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MapFrame.prototype.render = function () {
        return (React.createElement(frame_1.Frame, { frameId: "map" },
            React.createElement(mapcanvasframe_1.MapCanvasFrame, __assign({}, this.props)),
            React.createElement(selectedcityframe_1.SelectedCityFrame, __assign({}, this.props))));
    };
    return MapFrame;
}(React.Component));
exports.MapFrame = MapFrame;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var frame_1 = __webpack_require__(1);
var cityinfoframe_1 = __webpack_require__(20);
var upgradeinfoframe_1 = __webpack_require__(22);
var SelectedCityFrame = /** @class */ (function (_super) {
    __extends(SelectedCityFrame, _super);
    function SelectedCityFrame() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SelectedCityFrame.prototype.render = function () {
        return (React.createElement(frame_1.Frame, { frameId: "selected-city" },
            React.createElement(cityinfoframe_1.CityInfoFrame, __assign({}, this.props)),
            React.createElement(upgradeinfoframe_1.UpgradeInfoFrame, __assign({}, this.props))));
    };
    return SelectedCityFrame;
}(React.Component));
exports.SelectedCityFrame = SelectedCityFrame;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var frame_1 = __webpack_require__(1);
var cityselect_1 = __webpack_require__(21);
var CityInfoFrame = /** @class */ (function (_super) {
    __extends(CityInfoFrame, _super);
    function CityInfoFrame() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CityInfoFrame.prototype.render = function () {
        return (React.createElement(frame_1.Frame, { frameId: "city-info" },
            React.createElement(cityselect_1.CitySelect, __assign({}, this.props)),
            React.createElement(frame_1.Frame, { frameId: "selected-city-icon" }, this.props.game.map.selected.icon)));
    };
    return CityInfoFrame;
}(React.Component));
exports.CityInfoFrame = CityInfoFrame;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var CitySelect = /** @class */ (function (_super) {
    __extends(CitySelect, _super);
    function CitySelect() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Hides all the select options
         */
        _this.hideOptions = function () {
            $(".select-options").hide();
            $(".select-search").val("");
        };
        /**
         * Selects an option, set e.target to specify which element to select
         */
        _this.selectOption = function (e) {
            var id = $(e.target).attr("data-id");
            _this.props.game.map.setSelected(id);
            $(".select-option").show();
            _this.props.update();
            _this.hideOptions();
        };
        /**
         * Selects an option on enter click
         */
        _this.enterInput = function (e) {
            if (e.keyCode == 13) {
                var visible = $(".select-option:visible");
                if (visible.length) {
                    e.target = visible[0];
                    _this.selectOption(e);
                }
            }
        };
        /**
         * Search for cities (oninput event)
         */
        _this.searchInput = function (e) {
            $(".select-option").hide();
            $(".select-option").filter(function () {
                var reg = new RegExp("" + $(".select-search").val(), "i");
                return reg.test($(this).text());
            }).show();
        };
        return _this;
    }
    /**
     * Shows all the select options
     */
    CitySelect.prototype.showOptions = function () {
        $(".select-options").show();
        $(".select-search").focus();
    };
    CitySelect.prototype.render = function () {
        var _this = this;
        var options = new Array();
        this.props.game.map.cities.forEach(function (city, index) {
            options.push(React.createElement("div", { key: index, className: "select-option", "data-id": city.id, onClick: function (e) { return _this.selectOption(e); } }, city.name));
        });
        return (React.createElement("div", { className: "city-select" },
            React.createElement("div", { className: "selected-city", onClick: this.showOptions, "data-id": this.props.game.map.selected.id },
                React.createElement("span", { className: "name" }, this.props.game.map.selected.name),
                React.createElement("span", { className: "icon" }, "\u25BC")),
            React.createElement("div", { className: "select-options" },
                React.createElement("div", { className: "close-city-select", onClick: this.hideOptions }),
                React.createElement("input", { type: "text", className: "select-search", placeholder: "Search", onInput: function (e) { return _this.searchInput(e); }, onKeyDown: function (e) { return _this.enterInput(e); } }),
                options)));
    };
    return CitySelect;
}(React.Component));
exports.CitySelect = CitySelect;


/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var frame_1 = __webpack_require__(1);
var outletlist_1 = __webpack_require__(23);
var UpgradeInfoFrame = /** @class */ (function (_super) {
    __extends(UpgradeInfoFrame, _super);
    function UpgradeInfoFrame() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UpgradeInfoFrame.prototype.render = function () {
        return (React.createElement(frame_1.Frame, { frameId: "upgrade-info" },
            React.createElement(outletlist_1.OutletList, __assign({}, this.props))));
    };
    return UpgradeInfoFrame;
}(React.Component));
exports.UpgradeInfoFrame = UpgradeInfoFrame;


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var list_1 = __webpack_require__(5);
var format_1 = __webpack_require__(3);
var OutletList = /** @class */ (function (_super) {
    __extends(OutletList, _super);
    function OutletList() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Upgrades an outlet
         */
        _this.upgradeOutlet = function (e, outlet) {
            if (_this.props.game.enoughMoneyFor(outlet.cost)) {
                _this.props.game.useMoney(outlet.cost);
                outlet.upgrade();
                _this.props.update();
            }
        };
        /**
         * Shows the new outlet modal
         */
        _this.showNewOutletModal = function () {
            if (_this.props.game.enoughMoneyFor(_this.props.game.map.selected.cost)) {
                $("#new-outlet-modal").css("display", "flex");
            }
        };
        return _this;
    }
    /**
     * Turns outlets into JSX ListItems
     */
    OutletList.prototype.outletsToItems = function () {
        var _this = this;
        var items = [];
        this.props.game.map.selected.outlets.forEach(function (outlet, index) {
            var info = (React.createElement(list_1.ListInfo, null,
                React.createElement("div", { className: "outlet-mpd" },
                    React.createElement("span", { className: "outlet-mpd-text" }, "Mpd: "),
                    React.createElement("span", { className: "outlet-mpd-number" }, format_1.Format.abbriviate(outlet.mpd))),
                React.createElement("div", { className: "outlet-per-upgrade" },
                    React.createElement("span", { className: "outlet-per-upgrade-text" }, "Per upgrade: "),
                    React.createElement("span", { className: "outlet-per-upgrade-number" }, format_1.Format.abbriviate(outlet.basempd)))));
            items.push(React.createElement(list_1.ListItem, { info: info, title: outlet.name, key: index, number: outlet.count, money: outlet.cost, total: _this.props.game.totalMoney, onClick: function (e, o) { return _this.upgradeOutlet(e, outlet); } }));
        });
        if (!this.props.game.map.selected.hasAllOutlets(this.props.game.companies)) {
            items.push(React.createElement(list_1.ListItem, { title: "+ New outlet", key: "new-outlet", onClick: this.showNewOutletModal, money: this.props.game.map.selected.cost, total: this.props.game.totalMoney }));
        }
        return items;
    };
    OutletList.prototype.render = function () {
        return (React.createElement(list_1.List, { id: "outlet", items: this.outletsToItems() }));
    };
    return OutletList;
}(React.Component));
exports.OutletList = OutletList;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var frame_1 = __webpack_require__(1);
var MapCanvasFrame = /** @class */ (function (_super) {
    __extends(MapCanvasFrame, _super);
    function MapCanvasFrame() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MapCanvasFrame.prototype.render = function () {
        return (React.createElement(frame_1.Frame, { frameId: "canvas" }));
    };
    return MapCanvasFrame;
}(React.Component));
exports.MapCanvasFrame = MapCanvasFrame;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var modal_1 = __webpack_require__(7);
var NewCompanyModal = /** @class */ (function (_super) {
    __extends(NewCompanyModal, _super);
    function NewCompanyModal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewCompanyModal.prototype.createCompany = function (inputid) {
        if (inputid === void 0) { inputid = "#company-name-input"; }
        if (this.props.game.enoughMoneyFor(this.props.game.companycost)) {
            var nameinput = $(inputid);
            // check if company name is empty
            var cname = nameinput.val().toString();
            if (cname.length == 0) {
                alert("Company name cannot be empty.");
                return false;
            }
            // create new company
            this.props.game.useMoney(this.props.game.companycost);
            this.props.game.newCompany({
                id: this.props.game.companies.length,
                name: cname
            });
            // empty name input
            nameinput.val("");
            this.props.update();
            return true;
        }
        return false;
    };
    NewCompanyModal.prototype.createCompanyEnter = function (e) {
        if (e.keyCode == 13) {
            if (this.createCompany()) {
                $("#new-company-modal").hide();
            }
        }
    };
    NewCompanyModal.prototype.render = function () {
        var _this = this;
        return (React.createElement(modal_1.Modal, { id: "new-company", type: modal_1.ModalType.OKCancel, onCancel: function () { return true; }, onOK: function () { return _this.createCompany(); }, title: "New company" },
            React.createElement("div", { className: "input-title" }, "Name: "),
            React.createElement("input", { type: "text", id: "company-name-input", className: "text-input", onKeyDown: function (e) { return _this.createCompanyEnter(e); } })));
    };
    return NewCompanyModal;
}(React.Component));
exports.NewCompanyModal = NewCompanyModal;


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var format_1 = __webpack_require__(3);
var frame_1 = __webpack_require__(1);
var WorkFrame = /** @class */ (function (_super) {
    __extends(WorkFrame, _super);
    function WorkFrame() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.work = function () {
            _this.props.game.work();
            _this.props.update();
        };
        _this.rotate = function (elem, startdeg, enddeg, length) {
            var angle;
            $(elem).stop();
            $({ deg: startdeg }).animate({ deg: enddeg }, {
                duration: length,
                step: function (now) {
                    $(elem).css("transform", "rotate(" + now + "deg)");
                }
            });
        };
        _this.pickaxedown = function () {
            _this.rotate("#pickaxe", 0, -45, 50);
        };
        _this.pickaxeup = function () {
            _this.rotate("#pickaxe", -45, 0, 50);
        };
        return _this;
    }
    WorkFrame.prototype.getMoneyPileImg = function () {
        var first = 1000;
        var second = 10000;
        var third = 100000;
        var fourth = 1000000;
        var fifth = 10000000;
        if (this.moneyIsBetween(first, second)) {
            return React.createElement("img", { className: "work-money-pile", src: './img/money_pile_2.png' });
        }
        else if (this.moneyIsBetween(second, third)) {
            return React.createElement("img", { className: "work-money-pile", src: './img/money_pile_3.png' });
        }
        else if (this.moneyIsBetween(third, fourth)) {
            return React.createElement("img", { className: "work-money-pile", src: './img/money_pile_4.png' });
        }
        else if (this.moneyIsBetween(fourth, fifth)) {
            return React.createElement("img", { className: "work-money-pile", src: './img/money_pile_5.png' });
        }
        else if (this.props.game.totalMoney >= fifth) {
            return React.createElement("img", { className: "work-money-pile", src: './img/money_pile_6.png' });
        }
        return null;
    };
    /**
     * checks if game total money is between min and max
     * @param min inclusive min
     * @param max exclusive max
     */
    WorkFrame.prototype.moneyIsBetween = function (min, max) {
        return this.props.game.totalMoney >= min && this.props.game.totalMoney < max;
    };
    WorkFrame.prototype.render = function () {
        return (React.createElement(frame_1.Frame, { frameId: "work" },
            React.createElement(frame_1.Frame, { frameId: "total" },
                React.createElement("div", { className: "total-money" }, format_1.Format.abbriviate(this.props.game.totalMoney)),
                React.createElement("div", { className: "total-mpd" },
                    "+ ",
                    format_1.Format.abbriviate(this.props.game.getTotalMpd()),
                    " MPD")),
            React.createElement(frame_1.Frame, { frameId: "click" },
                React.createElement("div", { id: "work", onClick: this.work, onMouseDown: this.pickaxedown, onMouseUp: this.pickaxeup },
                    React.createElement("img", { id: "ore", src: "./img/gold_ore.png" }),
                    React.createElement("img", { id: "pickaxe", src: "./img/pickaxe.png" })),
                this.getMoneyPileImg())));
    };
    return WorkFrame;
}(React.Component));
exports.WorkFrame = WorkFrame;


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var frame_1 = __webpack_require__(1);
var navigationbutton_1 = __webpack_require__(28);
var dayclock_1 = __webpack_require__(29);
var money_1 = __webpack_require__(6);
var NavigationFrame = /** @class */ (function (_super) {
    __extends(NavigationFrame, _super);
    function NavigationFrame() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.showStats = function () {
            $("#map-frame").hide();
            $("#stats-frame").show();
        };
        _this.showMap = function () {
            $("#map-frame").show();
            $("#stats-frame").hide();
        };
        _this.showNewCompanyModal = function () {
            if (_this.props.game.totalMoney >= _this.props.game.companycost) {
                $("#new-company-modal").css("display", "flex");
                $("#company-name-input").focus();
            }
        };
        return _this;
    }
    NavigationFrame.prototype.render = function () {
        return (React.createElement(frame_1.Frame, { frameId: "navigation" },
            React.createElement(dayclock_1.DayClock, __assign({}, this.props)),
            React.createElement("div", { className: "nav-buttons" },
                React.createElement(navigationbutton_1.NavigationButton, { text: "Stats", onClick: this.showStats }),
                React.createElement(navigationbutton_1.NavigationButton, { text: "Map", onClick: this.showMap }),
                React.createElement(navigationbutton_1.NavigationButton, { text: "New company", onClick: this.showNewCompanyModal },
                    React.createElement(money_1.Money, { amount: this.props.game.companycost, total: this.props.game.totalMoney })))));
    };
    return NavigationFrame;
}(React.Component));
exports.NavigationFrame = NavigationFrame;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var NavigationButton = /** @class */ (function (_super) {
    __extends(NavigationButton, _super);
    function NavigationButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NavigationButton.prototype.render = function () {
        return (React.createElement("div", { className: "nav-button", onClick: this.props.onClick },
            React.createElement("span", { className: "nav-button-text" }, this.props.text),
            this.props.children));
    };
    return NavigationButton;
}(React.Component));
exports.NavigationButton = NavigationButton;


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var DayClock = /** @class */ (function (_super) {
    __extends(DayClock, _super);
    function DayClock(props) {
        var _this = _super.call(this, props) || this;
        _this.props.game.clock.onNextDay = function () {
            _this.props.update();
        };
        return _this;
    }
    DayClock.prototype.render = function () {
        return (React.createElement("div", { className: "day-clock" },
            React.createElement("span", { className: "day" }, this.props.game.clock.date.getDate()),
            "/",
            React.createElement("span", { className: "month" }, this.props.game.clock.date.getMonth() + 1),
            "/",
            React.createElement("span", { className: "year" }, this.props.game.clock.date.getFullYear())));
    };
    return DayClock;
}(React.Component));
exports.DayClock = DayClock;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var frame_1 = __webpack_require__(1);
var StatsFrame = /** @class */ (function (_super) {
    __extends(StatsFrame, _super);
    function StatsFrame() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StatsFrame.prototype.render = function () {
        return (React.createElement(frame_1.Frame, { frameId: "stats" }));
    };
    return StatsFrame;
}(React.Component));
exports.StatsFrame = StatsFrame;


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var modal_1 = __webpack_require__(7);
var companylist_1 = __webpack_require__(32);
var NewOutletModal = /** @class */ (function (_super) {
    __extends(NewOutletModal, _super);
    function NewOutletModal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewOutletModal.prototype.render = function () {
        return (React.createElement(modal_1.Modal, { type: modal_1.ModalType.Cancel, id: "new-outlet", onCancel: function () { return true; }, title: "New outlet in " + this.props.game.map.selected.name },
            React.createElement(companylist_1.CompanyList, __assign({}, this.props))));
    };
    return NewOutletModal;
}(React.Component));
exports.NewOutletModal = NewOutletModal;


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var list_1 = __webpack_require__(5);
var CompanyList = /** @class */ (function (_super) {
    __extends(CompanyList, _super);
    function CompanyList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Turns companies into JSX ListItems
     */
    CompanyList.prototype.companiesToItems = function () {
        var _this = this;
        var items = [];
        this.props.game.companies.forEach(function (company, index) {
            if (!_this.props.game.map.selected.hasOutletFor(company)) {
                items.push(React.createElement(CompanyListItem, __assign({ key: index, index: index, company: company }, _this.props)));
            }
        });
        return items;
    };
    CompanyList.prototype.render = function () {
        return (React.createElement(list_1.List, { id: "company", items: this.companiesToItems() }));
    };
    return CompanyList;
}(React.Component));
exports.CompanyList = CompanyList;
var CompanyListItem = /** @class */ (function (_super) {
    __extends(CompanyListItem, _super);
    function CompanyListItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Selects an item and creates a new outlet in selected city
         */
        _this.selectItem = function () {
            if (_this.props.game.enoughMoneyFor(_this.props.game.map.selected.cost)) {
                _this.props.game.useMoney(_this.props.game.map.selected.cost);
                _this.props.game.map.newOutlet(_this.props.company);
                $("#new-outlet-modal").hide();
                _this.props.update();
            }
        };
        return _this;
    }
    CompanyListItem.prototype.render = function () {
        return (React.createElement(list_1.ListItem, { title: this.props.company.name, key: this.props.index, onClick: this.selectItem, money: this.props.game.map.selected.cost, total: this.props.game.totalMoney }));
    };
    return CompanyListItem;
}(React.Component));


/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var DebugControls = /** @class */ (function (_super) {
    __extends(DebugControls, _super);
    function DebugControls(props) {
        var _this = _super.call(this, props) || this;
        _this.visible = false;
        _this.enableOnKeyCombo = function (e) {
            if (e.ctrlKey && e.keyCode == 68) {
                e.preventDefault();
                if (_this.visible) {
                    $(".debug-controls").hide();
                }
                else {
                    $(".debug-controls").show();
                }
                _this.visible = !_this.visible;
            }
        };
        _this.update = function () {
            _this.props.update();
        };
        _this.add1k = function () {
            _this.props.game.totalMoney += 1000;
            _this.update();
        };
        _this.add100k = function () {
            _this.props.game.totalMoney += 100000;
            _this.update();
        };
        _this.printGame = function () {
            console.log(_this.props.game);
        };
        document.addEventListener("keydown", _this.enableOnKeyCombo);
        return _this;
    }
    DebugControls.prototype.render = function () {
        return (React.createElement("div", { className: "debug-controls" },
            React.createElement(DebugControl, { title: "Update", onClick: this.update }),
            React.createElement(DebugControl, { title: "Add 1k", onClick: this.add1k }),
            React.createElement(DebugControl, { title: "Add 100k", onClick: this.add100k }),
            React.createElement(DebugControl, { title: "Console.log Game", onClick: this.printGame })));
    };
    return DebugControls;
}(React.Component));
exports.DebugControls = DebugControls;
var DebugControl = /** @class */ (function (_super) {
    __extends(DebugControl, _super);
    function DebugControl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DebugControl.prototype.render = function () {
        return (React.createElement("div", { className: "debug-control", onClick: this.props.onClick },
            React.createElement("span", { className: "debug-control-title" }, this.props.title)));
    };
    return DebugControl;
}(React.Component));
exports.DebugControl = DebugControl;


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "../css/index.css";

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map