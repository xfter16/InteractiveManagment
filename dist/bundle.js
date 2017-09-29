(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Form = function (_React$Component) {
  _inherits(Form, _React$Component);

  function Form() {
    _classCallCheck(this, Form);

    return _possibleConstructorReturn(this, (Form.__proto__ || Object.getPrototypeOf(Form)).apply(this, arguments));
  }

  _createClass(Form, [{
    key: "render",
    value: function render() {
      return React.createElement(
        "h1",
        null,
        "First Page"
      );
    }
  }]);

  return Form;
}(React.Component);

var UserForm = function (_React$Component2) {
  _inherits(UserForm, _React$Component2);

  function UserForm(props) {
    _classCallCheck(this, UserForm);

    var _this2 = _possibleConstructorReturn(this, (UserForm.__proto__ || Object.getPrototypeOf(UserForm)).call(this, props));

    _this2.state = { name: "" };

    _this2.onChange = _this2.onChange.bind(_this2);
    _this2.handleSubmit = _this2.handleSubmit.bind(_this2);
    return _this2;
  }

  _createClass(UserForm, [{
    key: "onChange",
    value: function onChange(e) {
      var val = e.target.value;
      this.setState({ name: val });
    }
  }, {
    key: "handleSubmit",
    value: function handleSubmit(e) {
      e.preventDefault();
      alert("Имя: " + this.state.name);
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        null,
        React.createElement(
          "h1",
          null,
          "sadasdf"
        ),
        React.createElement(
          "form",
          { onSubmit: this.handleSubmit },
          React.createElement(
            "p",
            null,
            React.createElement(
              "label",
              null,
              "\u0418\u043C\u044F:"
            ),
            React.createElement("br", null),
            React.createElement("input", { type: "text", value: this.state.name, onChange: this.onChange })
          ),
          React.createElement("input", { type: "submit", value: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C" })
        ),
        React.createElement(Form, null)
      );
    }
  }]);

  return UserForm;
}(React.Component);

ReactDOM.render(React.createElement(UserForm, null), document.getElementById("container"));

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXBwLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUNBTSxJOzs7Ozs7Ozs7Ozs2QkFDTztBQUNMLGFBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQURKO0FBR0g7Ozs7RUFMYyxNQUFNLFM7O0lBUW5CLFE7OztBQUNKLG9CQUFZLEtBQVosRUFBbUI7QUFBQTs7QUFBQSxxSEFDWCxLQURXOztBQUVqQixXQUFLLEtBQUwsR0FBYSxFQUFDLE1BQU0sRUFBUCxFQUFiOztBQUVBLFdBQUssUUFBTCxHQUFnQixPQUFLLFFBQUwsQ0FBYyxJQUFkLFFBQWhCO0FBQ0EsV0FBSyxZQUFMLEdBQW9CLE9BQUssWUFBTCxDQUFrQixJQUFsQixRQUFwQjtBQUxpQjtBQU1sQjs7Ozs2QkFDUSxDLEVBQUc7QUFDVixVQUFJLE1BQU0sRUFBRSxNQUFGLENBQVMsS0FBbkI7QUFDQSxXQUFLLFFBQUwsQ0FBYyxFQUFDLE1BQU0sR0FBUCxFQUFkO0FBQ0Q7OztpQ0FFWSxDLEVBQUc7QUFDZCxRQUFFLGNBQUY7QUFDQSxZQUFNLFVBQVUsS0FBSyxLQUFMLENBQVcsSUFBM0I7QUFDRDs7OzZCQUVRO0FBQ1AsYUFDRTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFNBREE7QUFFQTtBQUFBO0FBQUEsWUFBTSxVQUFVLEtBQUssWUFBckI7QUFDRTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFDcUIsMkNBRHJCO0FBRUUsMkNBQU8sTUFBSyxNQUFaLEVBQW1CLE9BQU8sS0FBSyxLQUFMLENBQVcsSUFBckMsRUFBMkMsVUFBVSxLQUFLLFFBQTFEO0FBRkYsV0FERjtBQUtFLHlDQUFPLE1BQUssUUFBWixFQUFxQixPQUFNLHdEQUEzQjtBQUxGLFNBRkE7QUFTQSw0QkFBQyxJQUFEO0FBVEEsT0FERjtBQWFEOzs7O0VBaENvQixNQUFNLFM7O0FBa0M3QixTQUFTLE1BQVQsQ0FDRSxvQkFBQyxRQUFELE9BREYsRUFFRSxTQUFTLGNBQVQsQ0FBd0IsV0FBeEIsQ0FGRiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJjbGFzcyBGb3JtIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHsgICAgXG4gICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGgxPkZpcnN0IFBhZ2U8L2gxPlxuICAgICAgICApO1xuICAgIH1cbn1cblxuY2xhc3MgVXNlckZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcbiAgICB0aGlzLnN0YXRlID0ge25hbWU6IFwiXCJ9O1xuXG4gICAgdGhpcy5vbkNoYW5nZSA9IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKTtcbiAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XG4gIH1cbiAgb25DaGFuZ2UoZSkge1xuICAgIHZhciB2YWwgPSBlLnRhcmdldC52YWx1ZTtcbiAgICB0aGlzLnNldFN0YXRlKHtuYW1lOiB2YWx9KTtcbiAgfVxuICBcbiAgaGFuZGxlU3VibWl0KGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgYWxlcnQoXCLQmNC80Y86IFwiICsgdGhpcy5zdGF0ZS5uYW1lKTtcbiAgfVxuICBcbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgPGgxPnNhZGFzZGY8L2gxPlxuICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cbiAgICAgICAgPHA+XG4gICAgICAgICAgPGxhYmVsPtCY0LzRjzo8L2xhYmVsPjxiciAvPlxuICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aGlzLnN0YXRlLm5hbWV9IG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfS8+XG4gICAgICAgIDwvcD5cbiAgICAgICAgPGlucHV0IHR5cGU9XCJzdWJtaXRcIiB2YWx1ZT1cItCe0YLQv9GA0LDQstC40YLRjFwiIC8+XG4gICAgICA8L2Zvcm0+XG4gICAgICA8Rm9ybSAvPlxuICAgICAgPC9kaXY+XG4gICAgICApO1xuICB9XG59XG5SZWFjdERPTS5yZW5kZXIoXG4gIDxVc2VyRm9ybSAvPixcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWluZXJcIilcbiAgKSJdfQ==
