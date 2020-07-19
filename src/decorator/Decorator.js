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
var Rectangle = /** @class */ (function () {
    function Rectangle() {
    }
    Rectangle.prototype.draw = function () {
        console.log("Rectangle");
    };
    return Rectangle;
}());
var Circle = /** @class */ (function () {
    function Circle() {
    }
    Circle.prototype.draw = function () {
        console.log("Circle");
    };
    return Circle;
}());
// 定义装饰抽象类
var ShapeDecorator = /** @class */ (function () {
    function ShapeDecorator(decoratedShape) {
        this.decoratedShape = decoratedShape;
    }
    ShapeDecorator.prototype.draw = function () {
        this.decoratedShape.draw();
    };
    return ShapeDecorator;
}());
// 定义装饰器
var RedShapeDecorator = /** @class */ (function (_super) {
    __extends(RedShapeDecorator, _super);
    function RedShapeDecorator(decoratedShape) {
        return _super.call(this, decoratedShape) || this;
    }
    RedShapeDecorator.prototype.draw = function () {
        this.decoratedShape.draw();
        this.setRedBorder(this.decoratedShape);
    };
    RedShapeDecorator.prototype.setRedBorder = function (decoratedShape) {
        console.log("Border Color: Red");
    };
    return RedShapeDecorator;
}(ShapeDecorator));
var circle = new Circle();
var redCircle = new RedShapeDecorator(new Circle());
var redRectangle = new RedShapeDecorator(new Rectangle());
circle.draw();
redCircle.draw();
redRectangle.draw();
