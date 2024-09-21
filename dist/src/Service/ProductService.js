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
var ProductService = /*#__PURE__*/ function() {
    "use strict";
    function ProductService() {
        _class_call_check(this, ProductService);
    }
    _create_class(ProductService, [
        {
            key: "getProducts",
            value: function getProducts(costRange) {
                var _this = this;
                return _async_to_generator(function() {
                    var client, lowCost, highCost;
                    return _ts_generator(this, function(_state) {
                        client = DatabaseClient.instance.prisma;
                        lowCost = costRange ? parseInt(costRange[0]) : -1;
                        highCost = costRange ? parseInt(costRange[1]) : -1;
                        if (lowCost > -1 && highCost > -1) {
                            return [
                                2,
                                client.product.findMany({
                                    where: {
                                        price: {
                                            gt: lowCost,
                                            lte: highCost
                                        }
                                    }
                                })
                            ];
                        } else {
                            return [
                                2,
                                _this.getAllProducts()
                            ];
                        }
                        return [
                            2
                        ];
                    });
                })();
            }
        },
        {
            key: "getAllProducts",
            value: function getAllProducts() {
                return _async_to_generator(function() {
                    var client, products;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                client = DatabaseClient.instance.prisma;
                                return [
                                    4,
                                    client.product.findMany()
                                ];
                            case 1:
                                products = _state.sent();
                                return [
                                    2,
                                    products
                                ];
                        }
                    });
                })();
            }
        },
        {
            key: "getProductsForAnimalType",
            value: function getProductsForAnimalType(animalType) {
                return _async_to_generator(function() {
                    var client, products;
                    return _ts_generator(this, function(_state) {
                        switch(_state.label){
                            case 0:
                                client = DatabaseClient.instance.prisma;
                                return [
                                    4,
                                    client.product.findMany({
                                        where: {
                                            animal_type: animalType
                                        }
                                    })
                                ];
                            case 1:
                                products = _state.sent();
                                return [
                                    2,
                                    products
                                ];
                        }
                    });
                })();
            }
        }
    ]);
    return ProductService;
}();
export { ProductService as default };

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9TZXJ2aWNlL1Byb2R1Y3RTZXJ2aWNlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBEYXRhYmFzZUNsaWVudCBmcm9tICcuLi9QZXJzaXN0ZW5jZS9EYXRhYmFzZUNsaWVudC5qcyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0U2VydmljZSB7XG4gIGFzeW5jIGdldFByb2R1Y3RzKGNvc3RSYW5nZTogc3RyaW5nW10pIHtcbiAgICBjb25zdCBjbGllbnQgPSBEYXRhYmFzZUNsaWVudC5pbnN0YW5jZS5wcmlzbWE7XG4gICAgY29uc3QgbG93Q29zdCA9IGNvc3RSYW5nZSA/IHBhcnNlSW50KGNvc3RSYW5nZVswXSkgOiAtMTtcbiAgICBjb25zdCBoaWdoQ29zdCA9IGNvc3RSYW5nZSA/IHBhcnNlSW50KGNvc3RSYW5nZVsxXSkgOiAtMTtcblxuICAgIGlmIChsb3dDb3N0ID4gLTEgJiYgaGlnaENvc3QgPiAtMSkge1xuICAgICAgcmV0dXJuIGNsaWVudC5wcm9kdWN0LmZpbmRNYW55KHtcbiAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICBwcmljZToge1xuICAgICAgICAgICAgZ3Q6IGxvd0Nvc3QsXG4gICAgICAgICAgICBsdGU6IGhpZ2hDb3N0LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHRoaXMuZ2V0QWxsUHJvZHVjdHMoKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRBbGxQcm9kdWN0cygpIHtcbiAgICBjb25zdCBjbGllbnQgPSBEYXRhYmFzZUNsaWVudC5pbnN0YW5jZS5wcmlzbWE7XG4gICAgY29uc3QgcHJvZHVjdHMgPSBhd2FpdCBjbGllbnQucHJvZHVjdC5maW5kTWFueSgpO1xuICAgIHJldHVybiBwcm9kdWN0cztcbiAgfVxuXG4gIGFzeW5jIGdldFByb2R1Y3RzRm9yQW5pbWFsVHlwZShhbmltYWxUeXBlOiBzdHJpbmcpIHtcbiAgICBjb25zdCBjbGllbnQgPSBEYXRhYmFzZUNsaWVudC5pbnN0YW5jZS5wcmlzbWE7XG4gICAgY29uc3QgcHJvZHVjdHMgPSBhd2FpdCBjbGllbnQucHJvZHVjdC5maW5kTWFueSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBhbmltYWxfdHlwZTogYW5pbWFsVHlwZSxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgcmV0dXJuIHByb2R1Y3RzO1xuICB9XG59XG4iXSwibmFtZXMiOlsiRGF0YWJhc2VDbGllbnQiLCJQcm9kdWN0U2VydmljZSIsImdldFByb2R1Y3RzIiwiY29zdFJhbmdlIiwiY2xpZW50IiwibG93Q29zdCIsImhpZ2hDb3N0IiwiaW5zdGFuY2UiLCJwcmlzbWEiLCJwYXJzZUludCIsInByb2R1Y3QiLCJmaW5kTWFueSIsIndoZXJlIiwicHJpY2UiLCJndCIsImx0ZSIsImdldEFsbFByb2R1Y3RzIiwicHJvZHVjdHMiLCJnZXRQcm9kdWN0c0ZvckFuaW1hbFR5cGUiLCJhbmltYWxUeXBlIiwiYW5pbWFsX3R5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsT0FBT0Esb0JBQW9CLG1DQUFtQztBQUMvQyxJQUFBLEFBQU1DLCtCQUFELEFBQUw7O2FBQU1BO2dDQUFBQTs7a0JBQUFBOztZQUNiQyxLQUFBQTttQkFBTixTQUFNQSxZQUFZQyxTQUFtQjs7dUJBQXJDLG9CQUFBO3dCQUNRQyxRQUNBQyxTQUNBQzs7d0JBRkFGLFNBQVNKLGVBQWVPLFFBQVEsQ0FBQ0MsTUFBTTt3QkFDdkNILFVBQVVGLFlBQVlNLFNBQVNOLFNBQVMsQ0FBQyxFQUFFLElBQUksQ0FBQzt3QkFDaERHLFdBQVdILFlBQVlNLFNBQVNOLFNBQVMsQ0FBQyxFQUFFLElBQUksQ0FBQzt3QkFFdkQsSUFBSUUsVUFBVSxDQUFDLEtBQUtDLFdBQVcsQ0FBQyxHQUFHOzRCQUNqQzs7Z0NBQU9GLE9BQU9NLE9BQU8sQ0FBQ0MsUUFBUSxDQUFDO29DQUM3QkMsT0FBTzt3Q0FDTEMsT0FBTzs0Q0FDTEMsSUFBSVQ7NENBQ0pVLEtBQUtUO3dDQUNQO29DQUNGO2dDQUNGOzt3QkFDRixPQUFPOzRCQUNMOztnQ0FBTyxNQUFLVSxjQUFjOzt3QkFDNUI7Ozs7O2dCQUNGOzs7O1lBRU1BLEtBQUFBO21CQUFOLFNBQU1BO3VCQUFOLG9CQUFBO3dCQUNRWixRQUNBYTs7OztnQ0FEQWIsU0FBU0osZUFBZU8sUUFBUSxDQUFDQyxNQUFNO2dDQUM1Qjs7b0NBQU1KLE9BQU9NLE9BQU8sQ0FBQ0MsUUFBUTs7O2dDQUF4Q00sV0FBVztnQ0FDakI7O29DQUFPQTs7OztnQkFDVDs7OztZQUVNQyxLQUFBQTttQkFBTixTQUFNQSx5QkFBeUJDLFVBQWtCO3VCQUFqRCxvQkFBQTt3QkFDUWYsUUFDQWE7Ozs7Z0NBREFiLFNBQVNKLGVBQWVPLFFBQVEsQ0FBQ0MsTUFBTTtnQ0FDNUI7O29DQUFNSixPQUFPTSxPQUFPLENBQUNDLFFBQVEsQ0FBQzt3Q0FDN0NDLE9BQU87NENBQ0xRLGFBQWFEO3dDQUNmO29DQUNGOzs7Z0NBSk1GLFdBQVc7Z0NBS2pCOztvQ0FBT0E7Ozs7Z0JBQ1Q7Ozs7V0FsQ21CaEI7O0FBQXJCLFNBQXFCQSw0QkFtQ3BCIn0=