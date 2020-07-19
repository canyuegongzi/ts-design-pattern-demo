"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Football = exports.Cricket = void 0;
var Game = /** @class */ (function () {
    function Game() {
    }
    Game.prototype.play = function () {
        this.initialize();
        this.startPlay();
        this.endPlay();
    };
    return Game;
}());
var Cricket = /** @class */ (function (_super) {
    __extends(Cricket, _super);
    function Cricket() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Cricket.prototype.endPlay = function () {
        console.log("Cricket Game Finished!");
    };
    Cricket.prototype.initialize = function () {
        console.log("Cricket Game Initialized! Start playing.");
    };
    Cricket.prototype.startPlay = function () {
        console.log("Cricket Game Started. Enjoy the game!");
    };
    return Cricket;
}(Game));
exports.Cricket = Cricket;
var Football = /** @class */ (function (_super) {
    __extends(Football, _super);
    function Football() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Football.prototype.endPlay = function () {
        console.log("Football Game Finished!");
    };
    Football.prototype.initialize = function () {
        console.log("Football Game Initialized! Start playing.");
    };
    Football.prototype.startPlay = function () {
        console.log("Football Game Started. Enjoy the game!");
    };
    return Football;
}(Game));
exports.Football = Football;
