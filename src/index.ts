import * as _Decorator from './Decorator'
import * as _Controller from './Decorator/controller'

const RH = Object.assign({}, _Decorator, _Controller);

export {
	RH,
	_Decorator,
	_Controller
}