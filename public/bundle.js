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
            );
        }
    }]);

    return UserForm;
}(React.Component);

ReactDOM.render(React.createElement(UserForm, null), document.getElementById("container"));

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXBwLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUNBTSxROzs7QUFDQSxzQkFBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsd0hBQ1gsS0FEVzs7QUFFakIsY0FBSyxLQUFMLEdBQWEsRUFBQyxNQUFNLEVBQVAsRUFBYjs7QUFFQSxjQUFLLFFBQUwsR0FBZ0IsTUFBSyxRQUFMLENBQWMsSUFBZCxPQUFoQjtBQUNBLGNBQUssWUFBTCxHQUFvQixNQUFLLFlBQUwsQ0FBa0IsSUFBbEIsT0FBcEI7QUFMaUI7QUFNbEI7Ozs7aUNBQ1EsQyxFQUFHO0FBQ1YsZ0JBQUksTUFBTSxFQUFFLE1BQUYsQ0FBUyxLQUFuQjtBQUNBLGlCQUFLLFFBQUwsQ0FBYyxFQUFDLE1BQU0sR0FBUCxFQUFkO0FBQ0g7OztxQ0FFYyxDLEVBQUc7QUFDZCxjQUFFLGNBQUY7QUFDQSxrQkFBTSxVQUFVLEtBQUssS0FBTCxDQUFXLElBQTNCO0FBQ0Q7OztpQ0FFUTtBQUNQLG1CQUNJO0FBQUE7QUFBQSxrQkFBTSxVQUFVLEtBQUssWUFBckI7QUFDSTtBQUFBO0FBQUE7QUFDSTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURKO0FBQ3VCLG1EQUR2QjtBQUVJLG1EQUFPLE1BQUssTUFBWixFQUFtQixPQUFPLEtBQUssS0FBTCxDQUFXLElBQXJDLEVBQTJDLFVBQVUsS0FBSyxRQUExRDtBQUZKLGlCQURKO0FBS0ksK0NBQU8sTUFBSyxRQUFaLEVBQXFCLE9BQU0sd0RBQTNCO0FBTEosYUFESjtBQVNEOzs7O0VBNUJnQixNQUFNLFM7O0FBOEJ6QixTQUFTLE1BQVQsQ0FDSSxvQkFBQyxRQUFELE9BREosRUFFSSxTQUFTLGNBQVQsQ0FBd0IsV0FBeEIsQ0FGSiIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJjbGFzcyBVc2VyRm9ybSBleHRlbmRzIFJlYWN0LkNvbXBvbmVudCB7XG4gICAgICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgICAgICBzdXBlcihwcm9wcyk7XG4gICAgICAgIHRoaXMuc3RhdGUgPSB7bmFtZTogXCJcIn07XG4gIFxuICAgICAgICB0aGlzLm9uQ2hhbmdlID0gdGhpcy5vbkNoYW5nZS5iaW5kKHRoaXMpO1xuICAgICAgICB0aGlzLmhhbmRsZVN1Ym1pdCA9IHRoaXMuaGFuZGxlU3VibWl0LmJpbmQodGhpcyk7XG4gICAgICB9XG4gICAgICBvbkNoYW5nZShlKSB7XG4gICAgICAgIHZhciB2YWwgPSBlLnRhcmdldC52YWx1ZTtcbiAgICAgICAgdGhpcy5zZXRTdGF0ZSh7bmFtZTogdmFsfSk7XG4gICAgfVxuICBcbiAgICAgIGhhbmRsZVN1Ym1pdChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgYWxlcnQoXCLQmNC80Y86IFwiICsgdGhpcy5zdGF0ZS5uYW1lKTtcbiAgICAgIH1cbiAgXG4gICAgICByZW5kZXIoKSB7XG4gICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17dGhpcy5oYW5kbGVTdWJtaXR9PlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+0JjQvNGPOjwvbGFiZWw+PGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aGlzLnN0YXRlLm5hbWV9IG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfS8+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCLQntGC0L/RgNCw0LLQuNGC0YxcIiAvPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgICBSZWFjdERPTS5yZW5kZXIoXG4gICAgICAgIDxVc2VyRm9ybSAvPixcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWluZXJcIilcbiAgICApIl19
