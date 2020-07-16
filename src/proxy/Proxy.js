"use strict";
exports.__esModule = true;
exports.ProxyImage = exports.RealImage = void 0;
var RealImage = /** @class */ (function () {
    function RealImage(fileName) {
        this.fileName = fileName;
        this.loadFromDisk(fileName);
    }
    RealImage.prototype.display = function () {
        return "Displaying " + this.fileName;
    };
    RealImage.prototype.loadFromDisk = function (fileName) {
        console.log("Loading " + fileName);
    };
    return RealImage;
}());
exports.RealImage = RealImage;
var ProxyImage = /** @class */ (function () {
    function ProxyImage(fileName) {
        this.fileName = fileName;
    }
    ProxyImage.prototype.display = function () {
        if (this.realImage == null) {
            this.realImage = new RealImage(this.fileName);
        }
        return this.realImage.display();
    };
    return ProxyImage;
}());
exports.ProxyImage = ProxyImage;
var img = new ProxyImage('A.png');
console.log(img.display());
