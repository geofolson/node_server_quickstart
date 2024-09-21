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
var Product = function Product(id, displayName, productType, price, animal_type) {
    "use strict";
    _class_call_check(this, Product);
    _define_property(this, "_id", void 0);
    _define_property(this, "_displayName", void 0);
    _define_property(this, "_productType", void 0);
    _define_property(this, "_price", void 0);
    _define_property(this, "_animal_type", void 0);
    this._id = id;
    this._displayName = displayName;
    this._productType = productType;
    this._price = price;
    this._animal_type = animal_type;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Nb2RlbHMvUHJvZHVjdC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBQcm9kdWN0IHtcbiAgcHJpdmF0ZSBfaWQ6IFN0cmluZztcbiAgcHJpdmF0ZSBfZGlzcGxheU5hbWU6IFN0cmluZztcbiAgcHJpdmF0ZSBfcHJvZHVjdFR5cGU6IFN0cmluZztcbiAgcHJpdmF0ZSBfcHJpY2U6IE51bWJlcjtcbiAgcHJpdmF0ZSBfYW5pbWFsX3R5cGU6IFN0cmluZztcblxuICBjb25zdHJ1Y3RvcihcbiAgICBpZDogU3RyaW5nLFxuICAgIGRpc3BsYXlOYW1lOiBTdHJpbmcsXG4gICAgcHJvZHVjdFR5cGU6IFN0cmluZyxcbiAgICBwcmljZTogTnVtYmVyLFxuICAgIGFuaW1hbF90eXBlOiBTdHJpbmdcbiAgKSB7XG4gICAgdGhpcy5faWQgPSBpZDtcbiAgICB0aGlzLl9kaXNwbGF5TmFtZSA9IGRpc3BsYXlOYW1lO1xuICAgIHRoaXMuX3Byb2R1Y3RUeXBlID0gcHJvZHVjdFR5cGU7XG4gICAgdGhpcy5fcHJpY2UgPSBwcmljZTtcbiAgICB0aGlzLl9hbmltYWxfdHlwZSA9IGFuaW1hbF90eXBlO1xuICB9XG59XG4iXSwibmFtZXMiOlsiUHJvZHVjdCIsImlkIiwiZGlzcGxheU5hbWUiLCJwcm9kdWN0VHlwZSIsInByaWNlIiwiYW5pbWFsX3R5cGUiLCJfaWQiLCJfZGlzcGxheU5hbWUiLCJfcHJvZHVjdFR5cGUiLCJfcHJpY2UiLCJfYW5pbWFsX3R5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUEsQUFBTUEsVUFBTixTQUFNQSxRQVFGQyxFQUFVLEVBQ1ZDLFdBQW1CLEVBQ25CQyxXQUFtQixFQUNuQkMsS0FBYSxFQUNiQyxXQUFtQjs7NEJBWmpCTDtJQUNKLHVCQUFRTSxPQUFSLEtBQUE7SUFDQSx1QkFBUUMsZ0JBQVIsS0FBQTtJQUNBLHVCQUFRQyxnQkFBUixLQUFBO0lBQ0EsdUJBQVFDLFVBQVIsS0FBQTtJQUNBLHVCQUFRQyxnQkFBUixLQUFBO0lBU0UsSUFBSSxDQUFDSixHQUFHLEdBQUdMO0lBQ1gsSUFBSSxDQUFDTSxZQUFZLEdBQUdMO0lBQ3BCLElBQUksQ0FBQ00sWUFBWSxHQUFHTDtJQUNwQixJQUFJLENBQUNNLE1BQU0sR0FBR0w7SUFDZCxJQUFJLENBQUNNLFlBQVksR0FBR0wifQ==