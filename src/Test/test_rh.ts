import { _Decorator, _Controller } from '../index'

const {
	f, g, sealed,
	// enumerable,
	configurable,
	format, getFormat,
	required, validate, validateT
} = _Decorator;
const {
	Controller,
	defaultValue,
	enumerable,
	logFunc, logParameter
} = _Controller
type Point = string;

// @sealed
@Controller
class C {

	// @format('format_data, %s')
	// _format: string;

	// private _p0: Point;
	// private _p1: Point;

	// @validateT
	// @Reflect.metadata("design:type", 'Point')
	// set p0(value: Point) { this._p0 = value; }
	// get p0() { return this._p0; }

	// @validateT
	// // @Reflect.metadata("design:type", Point)
	// set p1(value: Point) { this._p1 = value; }
	// get p1() { return this._p1; }


	// @f()
	// @g()
	@defaultValue('null str')
	greeting: string;

	@logFunc('log装饰器')
	sayHello2(@logParameter name: string) {
		console.log(name + ' sayHello');
	}

	constructor(message: string) {
		// this.greeting = message;
	}

	private _name: string = 'zzb';
	private _age: number = 10;

	@enumerable(true)
	get name() {
		return this._name;
	}
	@enumerable(true)
	get name123f() {
		return this._name;
	}

	set name(name: string) {
		this._name = name;
	}

	@enumerable(false)
	get age() {
		return this._age;
	}

	set age(age: number) {
		this._age = name;
	}

	// formatFn() {
	// 	let formatString: string = getFormat(this, "greeting") || 'NULL'
	// 	return formatString.replace('%s', this.greeting)
	// }

	// @validate
	// validateFn(@required name: string) {
	// 	return "Hello " + name;
	// }

	// @enumerable(false)
	greet() {
		return "Hello, " + this.greeting;
	}

	// @configurable(false)
	// get x() { return this._x; }

	// @configurable(false)
	// get y() { return this._y; }

}

let c = new C('123')
// c.sayHello();
c.sayHello2();
// console.log(c.greeting);
// console.log(c.formatFn())
// console.log(c.validateFn("ruihuag"))
// console.log('Obj', Object.seal(c));
for (let prop in c) {
	console.log(`property = ${prop}`)
}

