import "core-js/modules/es.array.flat";
import "core-js/modules/es.array.unscopables.flat";
import "core-js/modules/es.object.to-string";
import "core-js/modules/es.promise";
import "core-js/modules/es.promise.finally";
import "regenerator-runtime/runtime";

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import ReactDOM from 'react-dom';

var App = function App() {
  return /*#__PURE__*/React.createElement("div", null, "HEY");
};

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById('root'));

var Perfomance = function Perfomance() {
  _classCallCheck(this, Perfomance);

  _defineProperty(this, "run", /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
    var state;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            state = {};
            console.log(state === null || state === void 0 ? void 0 : state.isActive);
            console.log([[1, 2], 3].flat());

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  })));
};

var app = new Perfomance();
app.run().then(function () {}).finally(function () {
  return console.log('done');
}); // download core-js library for adding polyfills for new features, add it in .babelrc
//