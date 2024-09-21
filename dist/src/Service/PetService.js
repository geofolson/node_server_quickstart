function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
        var info = gen[key](arg);
        var value = info.value;
    } catch (error) {
        reject(error);
        return;
    }
    if (info.done) {
        resolve(value);
    } else {
        Promise.resolve(value).then(_next, _throw);
    }
}
function _async_to_generator(fn) {
    return function() {
        var self = this, args = arguments;
        return new Promise(function(resolve, reject) {
            var gen = fn.apply(self, args);
            function _next(value) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
            }
            function _throw(err) {
                asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
            }
            _next(undefined);
        });
    };
}
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
function _ts_generator(thisArg, body) {
    var f, y, t, g, _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    };
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(_)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
import DatabaseClient from '../Persistence/DatabaseClient.js';
var PetService = /*#__PURE__*/ function() {
    "use strict";
    function PetService() {
        _class_call_check(this, PetService);
    }
    _create_class(PetService, [
        {
            key: "getAllPets",
            value: function getAllPets() {
                return _async_to_generator(function() {
                    var client, pets;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                client = DatabaseClient.instance.prisma;
                                return [
                                    4,
                                    client.pet.findMany()
                                ];
                            case 1:
                                pets = _state.sent();
                                return [
                                    2,
                                    pets
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "getCountPets",
            value: function getCountPets() {
                return _async_to_generator(function() {
                    var client, countPets;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                client = DatabaseClient.instance.prisma;
                                return [
                                    4,
                                    client.pet.count()
                                ];
                            case 1:
                                countPets = _state.sent();
                                return [
                                    2,
                                    countPets
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return PetService;
}();
export { PetService as default };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9TZXJ2aWNlL1BldFNlcnZpY2UudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERhdGFiYXNlQ2xpZW50IGZyb20gJy4uL1BlcnNpc3RlbmNlL0RhdGFiYXNlQ2xpZW50LmpzJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBldFNlcnZpY2Uge1xuICBhc3luYyBnZXRBbGxQZXRzKCkge1xuICAgIGNvbnN0IGNsaWVudCA9IERhdGFiYXNlQ2xpZW50Lmluc3RhbmNlLnByaXNtYTtcbiAgICBjb25zdCBwZXRzID0gYXdhaXQgY2xpZW50LnBldC5maW5kTWFueSgpO1xuICAgIHJldHVybiBwZXRzO1xuICB9XG4gIGFzeW5jIGdldENvdW50UGV0cygpIHtcbiAgICBjb25zdCBjbGllbnQgPSBEYXRhYmFzZUNsaWVudC5pbnN0YW5jZS5wcmlzbWE7XG4gICAgY29uc3QgY291bnRQZXRzID0gYXdhaXQgY2xpZW50LnBldC5jb3VudCgpO1xuICAgIHJldHVybiBjb3VudFBldHM7XG4gIH1cbn1cbiJdLCJuYW1lcyI6WyJEYXRhYmFzZUNsaWVudCIsIlBldFNlcnZpY2UiLCJnZXRBbGxQZXRzIiwiY2xpZW50IiwicGV0cyIsImluc3RhbmNlIiwicHJpc21hIiwicGV0IiwiZmluZE1hbnkiLCJnZXRDb3VudFBldHMiLCJjb3VudFBldHMiLCJjb3VudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxvQkFBb0IsbUNBQW1DO0FBQy9DLElBQUEsQUFBTUMsMkJBQUQsQUFBTDs7YUFBTUE7Z0NBQUFBOztrQkFBQUE7O1lBQ2JDLEtBQUFBO21CQUFOLFNBQU1BO3VCQUFOLG9CQUFBO3dCQUNRQyxRQUNBQzs7OztnQ0FEQUQsU0FBU0gsZUFBZUssUUFBUSxDQUFDQyxNQUFNO2dDQUNoQzs7b0NBQU1ILE9BQU9JLEdBQUcsQ0FBQ0MsUUFBUTs7O2dDQUFoQ0osT0FBTztnQ0FDYjs7b0NBQU9BOzs7O2dCQUNUOzs7O1lBQ01LLEtBQUFBO21CQUFOLFNBQU1BO3VCQUFOLG9CQUFBO3dCQUNRTixRQUNBTzs7OztnQ0FEQVAsU0FBU0gsZUFBZUssUUFBUSxDQUFDQyxNQUFNO2dDQUMzQjs7b0NBQU1ILE9BQU9JLEdBQUcsQ0FBQ0ksS0FBSzs7O2dDQUFsQ0QsWUFBWTtnQ0FDbEI7O29DQUFPQTs7OztnQkFDVDs7OztXQVZtQlQ7O0FBQXJCLFNBQXFCQSx3QkFXcEIifQ==