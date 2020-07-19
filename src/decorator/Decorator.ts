interface Shape{
    draw() : void;
}


class Rectangle implements Shape{
    public draw(){
        console.log("Rectangle")
    }
}

class Circle implements Shape{
    public draw(){
        console.log("Circle");
    }
}

// 定义装饰抽象类
abstract class ShapeDecorator implements Shape{

    protected constructor(
        protected decoratedShape: Shape
    ){}

    draw(){
        this.decoratedShape.draw()
    }
}

// 定义装饰器
class RedShapeDecorator extends ShapeDecorator {

    constructor(decoratedShape : Shape) {
        super(decoratedShape);
    }

    public draw() {
        this.decoratedShape.draw();
        this.setRedBorder(this.decoratedShape);
    }

    private setRedBorder( decoratedShape: Shape){
        console.log("Border Color: Red");
    }
}


let circle = new Circle();
let redCircle = new RedShapeDecorator(new Circle());
let redRectangle = new RedShapeDecorator(new Rectangle());


circle.draw();
redCircle.draw();
redRectangle.draw();
