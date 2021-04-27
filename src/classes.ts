class Robot {
    // class has 2 sides
    // 1. static side :  static methods and property and constructor
    // 2. instance members and property method 
    _color: string;

    private static availableColors = ['green' 'yellow'];
    static isColorAvailable(color: string) {
        return Robot.availableColors.includes(color);
    };

    constructor(protected _name: string) {
       
    }

    // methods
    askName() {
        console.log(`My name is ${this.name}`);
    }

    move(distance: number) {
        console.log(`${this.name} moved ${distance} meters`);
    }

    // setter
    set color(color: string) {
        if (!Robot.isColorAvailable(color)) {
            
            throw new Error(`Color ${color} is not available`)
        }
    }

    // setter and getter
    set name(value: string) {
        this._name = 'PREFIX_' + value;
    }

    get name() {
        return this._name + '_SUFFIX';
    }
}

class FlyingRobot extends Robot {
    // readonly: cannot modify
    private readonly jetpackSize: number;

    constructor(name: string, jetpackSize: number) {
        super(name);
        this.jetpackSize = jetpackSize;
    }

    move(distance: number) {
        console.log(`${this.name} is flying`);
        super.move(distance)
    }
}

const robot = new Robot('John');
robot.askName();

const flyingRobot = new FlyingRobot('Jim', 2);
flyingRobot.move(10);
// console.log(`Flyting robot's jetpack size is`, flyingRobot.name); << cannot access- private
flyingRobot.name = 'Kevin';
console.log(`My name is ${flyingRobot.name}`)  // My name is PREFIX_Kevin_SUFFIX
Robot.availableColors