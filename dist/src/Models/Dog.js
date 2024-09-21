function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _define_property(obj, key, value) {
    if (key in obj) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
    } else {
        obj[key] = value;
    }
    return obj;
}
export var Dog = function Dog(id, name, species, age, price) {
    "use strict";
    _class_call_check(this, Dog);
    _define_property(this, "id", void 0);
    _define_property(this, "name", void 0);
    _define_property(this, "age", void 0);
    _define_property(this, "species", void 0);
    _define_property(this, "price", void 0);
    this.id = id;
    this.name = name;
    this.species = species;
    this.age = age;
    this.price = price;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Nb2RlbHMvRG9nLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFBldCB9IGZyb20gJy4vUGV0LmpzJztcbmltcG9ydCB7IFNwZWNpZXMgfSBmcm9tICcuL1NwZWNpZXMuanMnO1xuXG5leHBvcnQgY2xhc3MgRG9nIGltcGxlbWVudHMgUGV0IHtcbiAgaWQ6IHN0cmluZztcbiAgbmFtZTogc3RyaW5nO1xuICBhZ2U6IG51bWJlcjtcbiAgc3BlY2llczogU3BlY2llcztcbiAgcHJpY2U6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBpZDogc3RyaW5nLFxuICAgIG5hbWU6IHN0cmluZyxcbiAgICBzcGVjaWVzOiBTcGVjaWVzLFxuICAgIGFnZTogbnVtYmVyLFxuICAgIHByaWNlOiBudW1iZXJcbiAgKSB7XG4gICAgdGhpcy5pZCA9IGlkO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5zcGVjaWVzID0gc3BlY2llcztcbiAgICB0aGlzLmFnZSA9IGFnZTtcbiAgICB0aGlzLnByaWNlID0gcHJpY2U7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJEb2ciLCJpZCIsIm5hbWUiLCJzcGVjaWVzIiwiYWdlIiwicHJpY2UiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBLE9BQU8sSUFBQSxBQUFNQSxNQUFOLFNBQU1BLElBUVRDLEVBQVUsRUFDVkMsSUFBWSxFQUNaQyxPQUFnQixFQUNoQkMsR0FBVyxFQUNYQyxLQUFhOzs0QkFaSkw7SUFDWEMsdUJBQUFBLE1BQUFBLEtBQUFBO0lBQ0FDLHVCQUFBQSxRQUFBQSxLQUFBQTtJQUNBRSx1QkFBQUEsT0FBQUEsS0FBQUE7SUFDQUQsdUJBQUFBLFdBQUFBLEtBQUFBO0lBQ0FFLHVCQUFBQSxTQUFBQSxLQUFBQTtJQVNFLElBQUksQ0FBQ0osRUFBRSxHQUFHQTtJQUNWLElBQUksQ0FBQ0MsSUFBSSxHQUFHQTtJQUNaLElBQUksQ0FBQ0MsT0FBTyxHQUFHQTtJQUNmLElBQUksQ0FBQ0MsR0FBRyxHQUFHQTtJQUNYLElBQUksQ0FBQ0MsS0FBSyxHQUFHQTtFQUVoQiJ9