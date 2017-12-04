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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
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
/***/ (function(module, exports) {

module.exports = $;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(4);
module.exports = __webpack_require__(17);


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(5);
var $ = __webpack_require__(2);
var game_1 = __webpack_require__(6);
ReactDOM.render(React.createElement(game_1.Game, null), $("#body")[0]);


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

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
var map_1 = __webpack_require__(7);
var mapframe_1 = __webpack_require__(11);
var frame_1 = __webpack_require__(1);
var workframe_1 = __webpack_require__(16);
var Game = /** @class */ (function (_super) {
    __extends(Game, _super);
    function Game(props) {
        var _this = _super.call(this, props) || this;
        _this.companies = new Array();
        _this.map = new map_1.Map();
        return _this;
    }
    Game.prototype.newCompany = function (company) {
        this.companies.push(company);
    };
    Game.prototype.render = function () {
        return (React.createElement(frame_1.Frame, { frameId: "main" },
            React.createElement(workframe_1.WorkFrame, null),
            React.createElement(mapframe_1.MapFrame, { map: this.map })));
    };
    return Game;
}(React.Component));
exports.Game = Game;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var city_1 = __webpack_require__(8);
var $ = __webpack_require__(2);
var CityJSON = __webpack_require__(10);
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var company_1 = __webpack_require__(9);
var City = /** @class */ (function () {
    function City(id, props) {
        this.id = id;
        this.name = props.name;
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
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Outlet = /** @class */ (function () {
    function Outlet(props) {
        this.name = props.name;
    }
    return Outlet;
}());
exports.Outlet = Outlet;


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = {"helsinki":{"name":"Helsinki"},"london":{"name":"London"},"paris":{"name":"Paris"},"berlin":{"name":"Berlin"},"moscow":{"name":"Moscow"},"athens":{"name":"Athens"},"madrid":{"name":"Madrid"},"tokyo":{"name":"Tokyo"}}

/***/ }),
/* 11 */
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
var selectedcityframe_1 = __webpack_require__(12);
var mapcanvasframe_1 = __webpack_require__(15);
var frame_1 = __webpack_require__(1);
var MapFrame = /** @class */ (function (_super) {
    __extends(MapFrame, _super);
    function MapFrame() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MapFrame.prototype.render = function () {
        return (React.createElement(frame_1.Frame, { frameId: "map" },
            React.createElement(mapcanvasframe_1.MapCanvasFrame, { map: this.props.map }),
            React.createElement(selectedcityframe_1.SelectedCityFrame, { map: this.props.map })));
    };
    return MapFrame;
}(React.Component));
exports.MapFrame = MapFrame;


/***/ }),
/* 12 */
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
var cityinfoframe_1 = __webpack_require__(13);
var SelectedCityFrame = /** @class */ (function (_super) {
    __extends(SelectedCityFrame, _super);
    function SelectedCityFrame() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SelectedCityFrame.prototype.render = function () {
        return (React.createElement(frame_1.Frame, { frameId: "selected-city" },
            React.createElement(cityinfoframe_1.CityInfoFrame, { map: this.props.map }),
            React.createElement(frame_1.Frame, { frameId: "upgrade-info" })));
    };
    return SelectedCityFrame;
}(React.Component));
exports.SelectedCityFrame = SelectedCityFrame;


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
var frame_1 = __webpack_require__(1);
var cityselect_1 = __webpack_require__(14);
var CityInfoFrame = /** @class */ (function (_super) {
    __extends(CityInfoFrame, _super);
    function CityInfoFrame() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CityInfoFrame.prototype.render = function () {
        return (React.createElement(frame_1.Frame, { frameId: "city-info" },
            React.createElement(cityselect_1.CitySelect, { map: this.props.map })));
    };
    return CityInfoFrame;
}(React.Component));
exports.CityInfoFrame = CityInfoFrame;


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
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var CitySelect = /** @class */ (function (_super) {
    __extends(CitySelect, _super);
    function CitySelect() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.selectOption = function (e) {
            var id = $(e.target).attr("data-id");
            _this.props.map.setSelected(id);
            $(".select-option").show();
            _this.forceUpdate();
            _this.hideOptions();
        };
        _this.enterInput = function (e) {
            if (e.keyCode == 13) {
                e.target = $(".select-option:visible")[0];
                _this.selectOption(e);
            }
        };
        _this.searchInput = function (e) {
            $(".select-option").hide();
            $(".select-option").filter(function () {
                var reg = new RegExp("" + $(".select-search").val(), "i");
                return reg.test($(this).text());
            }).show();
        };
        return _this;
    }
    CitySelect.prototype.showOptions = function () {
        $(".select-options").show();
        $(".select-search").focus();
    };
    CitySelect.prototype.hideOptions = function () {
        $(".select-options").hide();
        $(".select-search").val("");
    };
    CitySelect.prototype.render = function () {
        var _this = this;
        var options = new Array();
        this.props.map.cities.forEach(function (city, index) {
            options.push(React.createElement("div", { key: index, className: "select-option", "data-id": city.id, onClick: function (e) { return _this.selectOption(e); } }, city.name));
        });
        return (React.createElement("div", { className: "city-select" },
            React.createElement("div", { className: "selected-city", onClick: this.showOptions, "data-id": this.props.map.selected.id },
                React.createElement("span", { className: "name" }, this.props.map.selected.name),
                React.createElement("span", { className: "icon" }, "\u25BC")),
            React.createElement("div", { className: "select-options" },
                React.createElement("input", { type: "text", className: "select-search", placeholder: "Search", onInput: function (e) { return _this.searchInput(e); }, onKeyDown: function (e) { return _this.enterInput(e); } }),
                options)));
    };
    return CitySelect;
}(React.Component));
exports.CitySelect = CitySelect;


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
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var frame_1 = __webpack_require__(1);
var WorkFrame = /** @class */ (function (_super) {
    __extends(WorkFrame, _super);
    function WorkFrame() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    WorkFrame.prototype.render = function () {
        return (React.createElement(frame_1.Frame, { frameId: "work" }));
    };
    return WorkFrame;
}(React.Component));
exports.WorkFrame = WorkFrame;


/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "../css/index.css";

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map