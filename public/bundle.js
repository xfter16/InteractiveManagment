(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserForm = function (_React$Component) {
  _inherits(UserForm, _React$Component);

  function UserForm(props) {
    _classCallCheck(this, UserForm);

    var _this = _possibleConstructorReturn(this, (UserForm.__proto__ || Object.getPrototypeOf(UserForm)).call(this, props));

    _this.state = { name: "" };

    _this.onChange = _this.onChange.bind(_this);
    _this.handleSubmit = _this.handleSubmit.bind(_this);
    return _this;
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
          "form",
          { onSubmit: this.handleSubmit },
          React.createElement(
            "div",
            null,
            React.createElement(
              "label",
              null,
              "\u0418\u043C\u044F:"
            ),
            React.createElement("br", null),
            React.createElement("input", { type: "text", value: this.state.name, onChange: this.onChange })
          ),
          React.createElement(
            "div",
            null,
            React.createElement(
              "label",
              null,
              "\u0424\u0430\u043C\u0438\u043B\u0438\u044F:"
            ),
            React.createElement("br", null),
            React.createElement("input", { type: "text", value: this.state.name, onChange: this.onChange })
          ),
          React.createElement(
            "div",
            null,
            React.createElement(
              "label",
              null,
              "E-mail:"
            ),
            React.createElement("br", null),
            React.createElement("input", { type: "text", value: this.state.name, onChange: this.onChange })
          ),
          React.createElement("input", { type: "submit", value: "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C" })
        )
      );
    }
  }]);

  return UserForm;
}(React.Component);

ReactDOM.render(React.createElement(UserForm, null), document.getElementById("container"));

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXBwLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUNBTSxROzs7QUFDSixvQkFBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsb0hBQ1gsS0FEVzs7QUFFakIsVUFBSyxLQUFMLEdBQWEsRUFBQyxNQUFNLEVBQVAsRUFBYjs7QUFFQSxVQUFLLFFBQUwsR0FBZ0IsTUFBSyxRQUFMLENBQWMsSUFBZCxPQUFoQjtBQUNBLFVBQUssWUFBTCxHQUFvQixNQUFLLFlBQUwsQ0FBa0IsSUFBbEIsT0FBcEI7QUFMaUI7QUFNbEI7Ozs7NkJBQ1EsQyxFQUFHO0FBQ1YsVUFBSSxNQUFNLEVBQUUsTUFBRixDQUFTLEtBQW5CO0FBQ0EsV0FBSyxRQUFMLENBQWMsRUFBQyxNQUFNLEdBQVAsRUFBZDtBQUNEOzs7aUNBRVksQyxFQUFHO0FBQ2QsUUFBRSxjQUFGO0FBQ0EsWUFBTSxVQUFVLEtBQUssS0FBTCxDQUFXLElBQTNCO0FBQ0Q7Ozs2QkFFUTtBQUNQLGFBQ0U7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBLFlBQU0sVUFBVSxLQUFLLFlBQXJCO0FBQ0k7QUFBQTtBQUFBO0FBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGO0FBQ3FCLDJDQURyQjtBQUVFLDJDQUFPLE1BQUssTUFBWixFQUFtQixPQUFPLEtBQUssS0FBTCxDQUFXLElBQXJDLEVBQTJDLFVBQVUsS0FBSyxRQUExRDtBQUZGLFdBREo7QUFLSTtBQUFBO0FBQUE7QUFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREY7QUFDeUIsMkNBRHpCO0FBRUUsMkNBQU8sTUFBSyxNQUFaLEVBQW1CLE9BQU8sS0FBSyxLQUFMLENBQVcsSUFBckMsRUFBMkMsVUFBVSxLQUFLLFFBQTFEO0FBRkYsV0FMSjtBQVNJO0FBQUE7QUFBQTtBQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQUN3QiwyQ0FEeEI7QUFFRSwyQ0FBTyxNQUFLLE1BQVosRUFBbUIsT0FBTyxLQUFLLEtBQUwsQ0FBVyxJQUFyQyxFQUEyQyxVQUFVLEtBQUssUUFBMUQ7QUFGRixXQVRKO0FBYUUseUNBQU8sTUFBSyxRQUFaLEVBQXFCLE9BQU0sd0RBQTNCO0FBYkY7QUFEQSxPQURGO0FBbUJEOzs7O0VBdENvQixNQUFNLFM7O0FBd0M3QixTQUFTLE1BQVQsQ0FDRSxvQkFBQyxRQUFELE9BREYsRUFFRSxTQUFTLGNBQVQsQ0FBd0IsV0FBeEIsQ0FGRiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJjbGFzcyBVc2VyRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gIGNvbnN0cnVjdG9yKHByb3BzKSB7XG4gICAgc3VwZXIocHJvcHMpO1xuICAgIHRoaXMuc3RhdGUgPSB7bmFtZTogXCJcIn07XG5cbiAgICB0aGlzLm9uQ2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpO1xuICAgIHRoaXMuaGFuZGxlU3VibWl0ID0gdGhpcy5oYW5kbGVTdWJtaXQuYmluZCh0aGlzKTtcbiAgfVxuICBvbkNoYW5nZShlKSB7XG4gICAgdmFyIHZhbCA9IGUudGFyZ2V0LnZhbHVlO1xuICAgIHRoaXMuc2V0U3RhdGUoe25hbWU6IHZhbH0pO1xuICB9XG4gIFxuICBoYW5kbGVTdWJtaXQoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBhbGVydChcItCY0LzRjzogXCIgKyB0aGlzLnN0YXRlLm5hbWUpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsPtCY0LzRjzo8L2xhYmVsPjxiciAvPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e3RoaXMuc3RhdGUubmFtZX0gb25DaGFuZ2U9e3RoaXMub25DaGFuZ2V9Lz5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGxhYmVsPtCk0LDQvNC40LvQuNGPOjwvbGFiZWw+PGJyIC8+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17dGhpcy5zdGF0ZS5uYW1lfSBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX0vPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8bGFiZWw+RS1tYWlsOjwvbGFiZWw+PGJyIC8+XG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cInRleHRcIiB2YWx1ZT17dGhpcy5zdGF0ZS5uYW1lfSBvbkNoYW5nZT17dGhpcy5vbkNoYW5nZX0vPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8aW5wdXQgdHlwZT1cInN1Ym1pdFwiIHZhbHVlPVwi0J7RgtC/0YDQsNCy0LjRgtGMXCIgLz5cbiAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgICAgKTtcbiAgfVxufVxuUmVhY3RET00ucmVuZGVyKFxuICA8VXNlckZvcm0gLz4sXG4gIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGFpbmVyXCIpXG4gICkiXX0=
