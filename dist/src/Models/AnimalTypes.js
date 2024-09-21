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
var AnimalTypes = function AnimalTypes($id, $type) {
    "use strict";
    _class_call_check(this, AnimalTypes);
    _define_property(this, "id", void 0);
    _define_property(this, "type", void 0);
    this.id = $id;
    this.type = $type;
};

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9Nb2RlbHMvQW5pbWFsVHlwZXMudHMiXSwic291cmNlc0NvbnRlbnQiOlsiY2xhc3MgQW5pbWFsVHlwZXMge1xuICBwcml2YXRlIGlkOiBzdHJpbmc7XG4gIHByaXZhdGUgdHlwZTogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKCRpZDogc3RyaW5nLCAkdHlwZTogc3RyaW5nKSB7XG4gICAgdGhpcy5pZCA9ICRpZDtcbiAgICB0aGlzLnR5cGUgPSAkdHlwZTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIkFuaW1hbFR5cGVzIiwiJGlkIiwiJHR5cGUiLCJpZCIsInR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUEsQUFBTUEsY0FBTixTQUFNQSxZQUlRQyxHQUFXLEVBQUVDLEtBQWE7OzRCQUpsQ0Y7SUFDSix1QkFBUUcsTUFBUixLQUFBO0lBQ0EsdUJBQVFDLFFBQVIsS0FBQTtJQUdFLElBQUksQ0FBQ0QsRUFBRSxHQUFHRjtJQUNWLElBQUksQ0FBQ0csSUFBSSxHQUFHRiJ9