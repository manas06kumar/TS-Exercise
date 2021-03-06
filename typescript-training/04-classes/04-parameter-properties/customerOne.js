"use strict";
var CustomerOne = /** @class */ (function () {
    function CustomerOne(_firstname, _lastname) {
        this._firstname = _firstname;
        this._lastname = _lastname;
        //No need to do anythings, all assignments done behind the scenes.
    }
    Object.defineProperty(CustomerOne.prototype, "firstname", {
        get: function () {
            return this._firstname;
        },
        set: function (value) {
            this._firstname = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CustomerOne.prototype, "lastname", {
        get: function () {
            return this._lastname;
        },
        set: function (value) {
            this._lastname = value;
        },
        enumerable: false,
        configurable: true
    });
    return CustomerOne;
}());
//let myCustomer = new Customer();
var myCustomer = new CustomerOne("Manas", "Kumar");
//myCustomer.firstname = "Manas";
//myCustomer.lastname = "kumar";
console.log(myCustomer.firstname);
console.log(myCustomer.lastname);
//console.log(`${myCustomer.firstname} ${myCustomer.lastname}`);
