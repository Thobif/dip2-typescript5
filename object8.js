var Company = /** @class */ (function () {
    function Company(contName, contCountry) {
        this.name = contName;
        this.country = contCountry;
    }
    Company.prototype.getDetails = function () {
        return this.name + " " + this.country + " " + this.id;
    };
    return Company;
}());
var comp = new Company("Welcome", "Thailand");
console.log(comp.getDetails());
comp.id = 66;
console.log(comp.getDetails());
