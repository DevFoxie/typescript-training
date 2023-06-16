"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Shapes = void 0;
var Shapes;
(function (Shapes) {
    var Circle = /** @class */ (function () {
        function Circle() {
            console.log('Circle constructor');
        }
        return Circle;
    }());
    Shapes.Circle = Circle;
    var Rectangle = /** @class */ (function () {
        function Rectangle() {
            console.log('Rectangle constructor');
        }
        return Rectangle;
    }());
    Shapes.Rectangle = Rectangle;
})(Shapes || (exports.Shapes = Shapes = {}));
