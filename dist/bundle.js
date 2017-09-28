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
                    "h1",
                    null,
                    "React JS"
                ),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvYXBwLmpzeCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7SUNBTSxROzs7QUFDQSxzQkFBWSxLQUFaLEVBQW1CO0FBQUE7O0FBQUEsd0hBQ1gsS0FEVzs7QUFFakIsY0FBSyxLQUFMLEdBQWEsRUFBQyxNQUFNLEVBQVAsRUFBYjs7QUFFQSxjQUFLLFFBQUwsR0FBZ0IsTUFBSyxRQUFMLENBQWMsSUFBZCxPQUFoQjtBQUNBLGNBQUssWUFBTCxHQUFvQixNQUFLLFlBQUwsQ0FBa0IsSUFBbEIsT0FBcEI7QUFMaUI7QUFNbEI7Ozs7aUNBQ1EsQyxFQUFHO0FBQ1YsZ0JBQUksTUFBTSxFQUFFLE1BQUYsQ0FBUyxLQUFuQjtBQUNBLGlCQUFLLFFBQUwsQ0FBYyxFQUFDLE1BQU0sR0FBUCxFQUFkO0FBQ0g7OztxQ0FFYyxDLEVBQUc7QUFDZCxjQUFFLGNBQUY7QUFDQSxrQkFBTSxVQUFVLEtBQUssS0FBTCxDQUFXLElBQTNCO0FBQ0Q7OztpQ0FFUTtBQUNQLG1CQUNJO0FBQUE7QUFBQSxrQkFBTSxVQUFVLEtBQUssWUFBckI7QUFDQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUREO0FBRUk7QUFBQTtBQUFBO0FBQ0k7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFESjtBQUN1QixtREFEdkI7QUFFSSxtREFBTyxNQUFLLE1BQVosRUFBbUIsT0FBTyxLQUFLLEtBQUwsQ0FBVyxJQUFyQyxFQUEyQyxVQUFVLEtBQUssUUFBMUQ7QUFGSixpQkFGSjtBQU1JLCtDQUFPLE1BQUssUUFBWixFQUFxQixPQUFNLHdEQUEzQjtBQU5KLGFBREo7QUFVRDs7OztFQTdCZ0IsTUFBTSxTOztBQStCekIsU0FBUyxNQUFULENBQ0ksb0JBQUMsUUFBRCxPQURKLEVBRUksU0FBUyxjQUFULENBQXdCLFdBQXhCLENBRkoiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiY2xhc3MgVXNlckZvcm0gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICAgICAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICAgICAgc3VwZXIocHJvcHMpO1xuICAgICAgICB0aGlzLnN0YXRlID0ge25hbWU6IFwiXCJ9O1xuICBcbiAgICAgICAgdGhpcy5vbkNoYW5nZSA9IHRoaXMub25DaGFuZ2UuYmluZCh0aGlzKTtcbiAgICAgICAgdGhpcy5oYW5kbGVTdWJtaXQgPSB0aGlzLmhhbmRsZVN1Ym1pdC5iaW5kKHRoaXMpO1xuICAgICAgfVxuICAgICAgb25DaGFuZ2UoZSkge1xuICAgICAgICB2YXIgdmFsID0gZS50YXJnZXQudmFsdWU7XG4gICAgICAgIHRoaXMuc2V0U3RhdGUoe25hbWU6IHZhbH0pO1xuICAgIH1cbiAgXG4gICAgICBoYW5kbGVTdWJtaXQoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGFsZXJ0KFwi0JjQvNGPOiBcIiArIHRoaXMuc3RhdGUubmFtZSk7XG4gICAgICB9XG4gIFxuICAgICAgcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e3RoaXMuaGFuZGxlU3VibWl0fT5cbiAgICAgICAgICAgICA8aDE+UmVhY3QgSlM8L2gxPlxuICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICA8bGFiZWw+0JjQvNGPOjwvbGFiZWw+PGJyIC8+XG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHZhbHVlPXt0aGlzLnN0YXRlLm5hbWV9IG9uQ2hhbmdlPXt0aGlzLm9uQ2hhbmdlfS8+XG4gICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwic3VibWl0XCIgdmFsdWU9XCLQntGC0L/RgNCw0LLQuNGC0YxcIiAvPlxuICAgICAgICAgICAgPC9mb3JtPlxuICAgICAgICApO1xuICAgICAgfVxuICAgIH1cbiAgICBSZWFjdERPTS5yZW5kZXIoXG4gICAgICAgIDxVc2VyRm9ybSAvPixcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjb250YWluZXJcIilcbiAgICApIl19
