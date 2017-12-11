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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
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
    Modal.prototype.render = function () {
        // get button(s) from modal type
        var button;
        if (this.props.type == ModalType.OK) {
            button = this.okbutton;
        }
        else if (this.props.type == ModalType.YesNo) {
            button = [
                this.nobutton,
                this.yesbutton
            ];
        }
        else if (this.props.type == ModalType.OKCancel) {
            button = [
                this.cancelbutton,
                this.okbutton
            ];
        }
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
/* 3 */
/***/ (function(module, exports) {

module.exports = $;

/***/ }),
/* 4 */
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
var modal_1 = __webpack_require__(2);
var NewCompanyModal = /** @class */ (function (_super) {
    __extends(NewCompanyModal, _super);
    function NewCompanyModal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NewCompanyModal.prototype.createCompany = function (inputid) {
        if (inputid === void 0) { inputid = "#company-name-input"; }
        var nameinput = $(inputid);
        // check if company name is empty
        var cname = nameinput.val().toString();
        if (cname.length == 0) {
            alert("Company name cannot be empty.");
            return false;
        }
        // create new company
        this.props.game.newCompany({
            name: cname
        });
        // empty name input
        nameinput.val("");
        return true;
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
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(6);
module.exports = __webpack_require__(28);


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(7);
var $ = __webpack_require__(3);
var game_1 = __webpack_require__(8);
var mainframe_1 = __webpack_require__(13);
var game = new game_1.Game();
ReactDOM.render(React.createElement(mainframe_1.MainFrame, { game: game }), $("#body")[0]);


/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var map_1 = __webpack_require__(9);
var Game = /** @class */ (function () {
    function Game() {
        this.companies = new Array();
        this.perClick = 1;
        this.mpd = 0;
        this.totalMoney = 0;
        this.map = new map_1.Map();
    }
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
        this.companies.push(company);
    };
    return Game;
}());
exports.Game = Game;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var city_1 = __webpack_require__(10);
var $ = __webpack_require__(3);
var CityJSON = __webpack_require__(12);
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
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var company_1 = __webpack_require__(11);
var React = __webpack_require__(0);
var City = /** @class */ (function () {
    function City(id, props) {
        this.outlets = [];
        this.id = id;
        this.name = props.name;
        this.icon = React.createElement("img", { className: "city-icon", src: props.icon });
    }
    /**
     * checks if the outlet already exists in the city
     * @param outlet outlet that is being checked
     * @returns true is outlet exists
     */
    City.prototype.outletExists = function (outlet) {
        return this.outlets.indexOf(outlet) != -1 ? true : false;
    };
    /**
     * adds a new outlet to the city if it doesn't exist yet
     * @param company companies' props
     * @returns outlet added or not
     */
    City.prototype.newOutlet = function (company) {
        var outlet = new company_1.Outlet(company);
        if (!this.outletExists(outlet)) {
            this.outlets.push(outlet);
            return true;
        }
        return false;
    };
    return City;
}());
exports.City = City;


/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Outlet = /** @class */ (function () {
    function Outlet(props) {
        this.name = props.name;
        this.amount = 1;
    }
    Outlet.prototype.upgrade = function () {
        this.amount += 1;
    };
    return Outlet;
}());
exports.Outlet = Outlet;


/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = {"helsinki":{"name":"Helsinki","icon":"./img/placeholder.svg"},"london":{"name":"London","icon":"./img/placeholder.svg"},"paris":{"name":"Paris","icon":"./img/placeholder.svg"},"berlin":{"name":"Berlin","icon":"./img/placeholder.svg"},"moscow":{"name":"Moscow","icon":"./img/placeholder.svg"},"athens":{"name":"Athens","icon":"./img/placeholder.svg"},"madrid":{"name":"Madrid","icon":"./img/placeholder.svg"},"tokyo":{"name":"Tokyo","icon":"./img/placeholder.svg"}}

/***/ }),
/* 13 */
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
var mapframe_1 = __webpack_require__(14);
var frame_1 = __webpack_require__(1);
var newcompany_1 = __webpack_require__(4);
var firstcompany_1 = __webpack_require__(22);
var workframe_1 = __webpack_require__(23);
var navigationframe_1 = __webpack_require__(24);
var statsframe_1 = __webpack_require__(26);
var newoutlet_1 = __webpack_require__(27);
var MainFrame = /** @class */ (function (_super) {
    __extends(MainFrame, _super);
    function MainFrame() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainFrame.prototype.render = function () {
        return (React.createElement(frame_1.Frame, { frameId: "main" },
            React.createElement(firstcompany_1.FirstCompanyModal, { game: this.props.game }),
            React.createElement(newcompany_1.NewCompanyModal, { game: this.props.game }),
            React.createElement(newoutlet_1.NewOutletModal, { game: this.props.game }),
            ",",
            React.createElement(frame_1.Frame, { frameId: "game" },
                React.createElement(navigationframe_1.NavigationFrame, null),
                React.createElement(workframe_1.WorkFrame, { game: this.props.game }),
                React.createElement(statsframe_1.StatsFrame, { game: this.props.game }),
                React.createElement(mapframe_1.MapFrame, { game: this.props.game }))));
    };
    return MainFrame;
}(React.Component));
exports.MainFrame = MainFrame;


/***/ }),
/* 14 */
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
var selectedcityframe_1 = __webpack_require__(15);
var mapcanvasframe_1 = __webpack_require__(21);
var frame_1 = __webpack_require__(1);
var MapFrame = /** @class */ (function (_super) {
    __extends(MapFrame, _super);
    function MapFrame() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.update = function () {
            _this.forceUpdate();
        };
        return _this;
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
/* 15 */
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
var cityinfoframe_1 = __webpack_require__(16);
var upgradeinfoframe_1 = __webpack_require__(18);
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
/* 16 */
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
var cityselect_1 = __webpack_require__(17);
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
var CitySelect = /** @class */ (function (_super) {
    __extends(CitySelect, _super);
    function CitySelect() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
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
                e.target = $(".select-option:visible")[0];
                _this.selectOption(e);
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
    /**
     * Hides all the select options
     */
    CitySelect.prototype.hideOptions = function () {
        $(".select-options").hide();
        $(".select-search").val("");
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
                React.createElement("input", { type: "text", className: "select-search", placeholder: "Search", onInput: function (e) { return _this.searchInput(e); }, onKeyDown: function (e) { return _this.enterInput(e); } }),
                options)));
    };
    return CitySelect;
}(React.Component));
exports.CitySelect = CitySelect;


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
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var frame_1 = __webpack_require__(1);
var outletlist_1 = __webpack_require__(19);
var UpgradeInfoFrame = /** @class */ (function (_super) {
    __extends(UpgradeInfoFrame, _super);
    function UpgradeInfoFrame() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UpgradeInfoFrame.prototype.render = function () {
        return (React.createElement(frame_1.Frame, { frameId: "upgrade-info" },
            React.createElement(outletlist_1.OutletList, { game: this.props.game })));
    };
    return UpgradeInfoFrame;
}(React.Component));
exports.UpgradeInfoFrame = UpgradeInfoFrame;


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
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var outletitem_1 = __webpack_require__(20);
var OutletList = /** @class */ (function (_super) {
    __extends(OutletList, _super);
    function OutletList() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    OutletList.prototype.outletsToItems = function () {
        var items = [];
        this.props.game.map.selected.outlets.forEach(function (outlet) {
            items.push(React.createElement(outletitem_1.OutletItem, { outlet: outlet, key: outlet.name }));
        });
        return items;
    };
    OutletList.prototype.render = function () {
        var items = this.outletsToItems();
        return (React.createElement("div", { className: "outlet-list" },
            items,
            React.createElement(outletitem_1.NewOutletItem, { game: this.props.game })));
    };
    return OutletList;
}(React.Component));
exports.OutletList = OutletList;


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
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var OutletItem = /** @class */ (function (_super) {
    __extends(OutletItem, _super);
    function OutletItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.upgrade = function () {
            _this.props.outlet.upgrade();
            _this.forceUpdate();
        };
        return _this;
    }
    OutletItem.prototype.render = function () {
        return (React.createElement("div", { className: "outlet-item", onClick: this.upgrade },
            React.createElement("span", { className: "outlet-upgrade-count" }, this.props.outlet.amount),
            React.createElement("span", { className: "outlet-name" }, this.props.outlet.name)));
    };
    return OutletItem;
}(React.Component));
exports.OutletItem = OutletItem;
var NewOutletItem = /** @class */ (function (_super) {
    __extends(NewOutletItem, _super);
    function NewOutletItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.openNewOutletModal = function () {
        };
        return _this;
    }
    NewOutletItem.prototype.render = function () {
        return (React.createElement("div", { className: "outlet-item new-outlet-button", onClick: this.openNewOutletModal },
            React.createElement("span", { className: "outlet-name" }, "+ New outlet")));
    };
    return NewOutletItem;
}(React.Component));
exports.NewOutletItem = NewOutletItem;


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
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var modal_1 = __webpack_require__(2);
var newcompany_1 = __webpack_require__(4);
var FirstCompanyModal = /** @class */ (function (_super) {
    __extends(FirstCompanyModal, _super);
    function FirstCompanyModal() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FirstCompanyModal.prototype.createCompany = function () {
        return _super.prototype.createCompany.call(this, "#first-company-name-input");
    };
    FirstCompanyModal.prototype.createCompanyEnter = function (e) {
        if (e.keyCode == 13) {
            if (this.createCompany()) {
                $("#first-company-modal").hide();
            }
        }
    };
    FirstCompanyModal.prototype.render = function () {
        var _this = this;
        return (React.createElement(modal_1.Modal, { id: "first-company", type: modal_1.ModalType.OK, onOK: function () { return _this.createCompany(); }, title: "Create your first company" },
            React.createElement("div", { className: "input-title" }, "Name: "),
            React.createElement("input", { type: "text", id: "first-company-name-input", className: "text-input", onKeyDown: function (e) { return _this.createCompanyEnter(e); } })));
    };
    return FirstCompanyModal;
}(newcompany_1.NewCompanyModal));
exports.FirstCompanyModal = FirstCompanyModal;


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
var frame_1 = __webpack_require__(1);
var WorkFrame = /** @class */ (function (_super) {
    __extends(WorkFrame, _super);
    function WorkFrame() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.work = function () {
            _this.props.game.work();
            _this.update();
        };
        _this.update = function () {
            _this.forceUpdate();
        };
        return _this;
    }
    WorkFrame.prototype.render = function () {
        return (React.createElement(frame_1.Frame, { frameId: "work" },
            React.createElement(frame_1.Frame, { frameId: "total" }, this.props.game.totalMoney),
            React.createElement(frame_1.Frame, { frameId: "click" },
                React.createElement("img", { id: "work", src: "./img/placeholder.png", onClick: this.work }))));
    };
    return WorkFrame;
}(React.Component));
exports.WorkFrame = WorkFrame;


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
var navigationbutton_1 = __webpack_require__(25);
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
            $("#new-company-modal").css("display", "flex");
            $("#company-name-input").focus();
        };
        return _this;
    }
    NavigationFrame.prototype.render = function () {
        return (React.createElement(frame_1.Frame, { frameId: "navigation" },
            React.createElement("div", { className: "nav-buttons" },
                React.createElement(navigationbutton_1.NavigationButton, { text: "Stats", onClick: this.showStats }),
                React.createElement(navigationbutton_1.NavigationButton, { text: "Map", onClick: this.showMap }),
                React.createElement(navigationbutton_1.NavigationButton, { text: "New company", onClick: this.showNewCompanyModal }))));
    };
    return NavigationFrame;
}(React.Component));
exports.NavigationFrame = NavigationFrame;


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
var NavigationButton = /** @class */ (function (_super) {
    __extends(NavigationButton, _super);
    function NavigationButton() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    NavigationButton.prototype.render = function () {
        return (React.createElement("div", { className: "nav-button", onClick: this.props.onClick }, this.props.text));
    };
    return NavigationButton;
}(React.Component));
exports.NavigationButton = NavigationButton;


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
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var modal_1 = __webpack_require__(2);
var NewOutletModal = /** @class */ (function (_super) {
    __extends(NewOutletModal, _super);
    function NewOutletModal() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.close = function () {
            $("#new-outlet-modal").remove();
        };
        return _this;
    }
    NewOutletModal.prototype.render = function () {
        return (React.createElement(modal_1.Modal, { type: modal_1.ModalType.OKCancel, id: "new-outlet", onCancel: this.close, title: "New outlet" }));
    };
    return NewOutletModal;
}(React.Component));
exports.NewOutletModal = NewOutletModal;


/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "../css/index.css";

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map