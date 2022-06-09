var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import styles from './TestAjax.module.scss';
import * as $ from 'jquery';
require('bootstrap');
require('../../../../node_modules/bootstrap/dist/css/bootstrap.css');
var questionValue = 0;
var TestAjax = /** @class */ (function (_super) {
    __extends(TestAjax, _super);
    function TestAjax(props) {
        var _this = _super.call(this, props) || this;
        _this.setQuestionValue = function (option) {
            console.log(option);
            switch (option) {
                case 'Yes':
                    questionValue = 100;
                    break;
                case 'No':
                case 'N/A':
                    questionValue = 0;
                    break;
            }
            console.log(questionValue);
        };
        _this.state = {
            items: [
                {
                    "Section": "",
                    "Assessment": "",
                    "Question_Number": "",
                    "Title": "",
                    "Min_Outcome": ""
                }
            ],
            siteurl: "",
            option: ""
        };
        return _this;
    }
    TestAjax.prototype.componentDidMount = function () {
        var reactHandler = this;
        $.ajax({
            url: this.props.siteurl + "/_api/web/lists/GetByTitle('Audit%20Tool%20Questions')/Items?$filter=Section eq 'Consultation Records'",
            type: "GET",
            headers: { 'Accept': 'application/json; odata=verbose;' },
            success: function (resultData) {
                reactHandler.setState({
                    items: resultData.d.results
                });
            },
            error: function (jqXHR, textStatus, errorThrown) {
            }
        });
    };
    TestAjax.prototype.render = function () {
        return (React.createElement("div", { className: styles.testAjax },
            React.createElement("div", { className: styles.container },
                React.createElement("div", { className: styles.row },
                    React.createElement("div", { className: styles.column },
                        React.createElement("span", { className: styles.title }, "Welcome to SharePoint!"),
                        React.createElement("div", { className: styles.subTitle }, "Demo : Retrieve SharePoint List Items using SPFx , REST API  & React JS"),
                        React.createElement("br", null),
                        React.createElement("div", { className: styles.subTitle }, "Audit Questions"),
                        React.createElement("div", { className: "row" },
                            React.createElement("div", { className: styles.subTitle }, "Q Num"),
                            React.createElement("div", { className: styles.subTitle }, "Question Text"),
                            React.createElement("div", { className: styles.subTitle }, "Min Outcome")),
                        this.state.items.map(function (item, key) {
                            var _this = this;
                            return (React.createElement("div", { className: "row", key: key },
                                React.createElement("div", { className: "col-1" }, item.Question_Number),
                                React.createElement("div", { className: "col-6" }, item.Title),
                                React.createElement("div", { className: "col-3 text-center" },
                                    React.createElement("div", { className: "form-check-inline" },
                                        React.createElement("div", { onChange: function (event) { return _this.setQuestionValue(event); } },
                                            React.createElement("input", { type: "radio", value: "Yes", name: "ccrqa" }),
                                            " Yes",
                                            React.createElement("input", { type: "radio", value: "No", name: "ccrqa" }),
                                            " No",
                                            React.createElement("input", { type: "radio", value: "NA", name: "ccrqa" }),
                                            " N/A"))),
                                React.createElement("div", { className: "col-2" }, item.Min_Outcome)));
                        }))))));
    };
    return TestAjax;
}(React.Component));
export default TestAjax;
//# sourceMappingURL=TestAjax.js.map