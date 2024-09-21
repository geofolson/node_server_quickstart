function _class_call_check(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
        throw new TypeError("Cannot call a class as a function");
    }
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _create_class(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
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
import { PrismaClient } from '@prisma/client';
var DatabaseClient = /*#__PURE__*/ function() {
    "use strict";
    function DatabaseClient() {
        _class_call_check(this, DatabaseClient);
        _define_property(this, "_prisma", void 0);
        this._prisma = new PrismaClient({
            log: [
                'query',
                'info',
                'warn',
                'error'
            ]
        });
    }
    _create_class(DatabaseClient, [
        {
            key: "prisma",
            get: function get() {
                return this._prisma;
            }
        }
    ], [
        {
            key: "instance",
            get: function get() {
                return this._instance || (this._instance = new this());
            }
        }
    ]);
    return DatabaseClient;
}();
_define_property(DatabaseClient, "_instance", void 0);
export { DatabaseClient as default };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9QZXJzaXN0ZW5jZS9EYXRhYmFzZUNsaWVudC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL2NsaWVudCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERhdGFiYXNlQ2xpZW50IHtcbiAgc3RhdGljIF9pbnN0YW5jZTogRGF0YWJhc2VDbGllbnQ7XG4gIHByaXZhdGUgX3ByaXNtYTogUHJpc21hQ2xpZW50O1xuXG4gIHByaXZhdGUgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5fcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCh7XG4gICAgICBsb2c6IFsncXVlcnknLCAnaW5mbycsICd3YXJuJywgJ2Vycm9yJ10sXG4gICAgfSk7XG4gIH1cblxuICBwdWJsaWMgc3RhdGljIGdldCBpbnN0YW5jZSgpOiBEYXRhYmFzZUNsaWVudCB7XG4gICAgcmV0dXJuIHRoaXMuX2luc3RhbmNlIHx8ICh0aGlzLl9pbnN0YW5jZSA9IG5ldyB0aGlzKCkpO1xuICB9XG4gIHB1YmxpYyBnZXQgcHJpc21hKCk6IFByaXNtYUNsaWVudCB7XG4gICAgcmV0dXJuIHRoaXMuX3ByaXNtYTtcbiAgfVxufVxuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsIkRhdGFiYXNlQ2xpZW50IiwiX3ByaXNtYSIsImxvZyIsInByaXNtYSIsImluc3RhbmNlIiwiX2luc3RhbmNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLFNBQVNBLFlBQVksUUFBUSxpQkFBaUI7QUFFL0IsSUFBQSxBQUFNQywrQkFBRCxBQUFMOzthQUFNQTtnQ0FBQUE7UUFFbkIsdUJBQVFDLFdBQVIsS0FBQTtRQUdFLElBQUksQ0FBQ0EsT0FBTyxHQUFHLElBQUlGLGFBQWE7WUFDOUJHLEtBQUs7Z0JBQUM7Z0JBQVM7Z0JBQVE7Z0JBQVE7YUFBUTtRQUN6Qzs7a0JBUGlCRjs7WUFhUkcsS0FBQUE7aUJBQVg7Z0JBQ0UsT0FBTyxJQUFJLENBQUNGLE9BQU87WUFDckI7Ozs7WUFMa0JHLEtBQUFBO2lCQUFsQjtnQkFDRSxPQUFPLElBQUksQ0FBQ0MsU0FBUyxJQUFLLENBQUEsSUFBSSxDQUFDQSxTQUFTLEdBQUcsSUFBSSxJQUFJLEVBQUM7WUFDdEQ7OztXQVptQkw7O0FBQ25CLGlCQURtQkEsZ0JBQ1pLLGFBQVAsS0FBQTtBQURGLFNBQXFCTCw0QkFnQnBCIn0=