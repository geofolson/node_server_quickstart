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
import express from 'express';
import PetService from './Service/PetService.js';
import ProductService from './Service/ProductService.js';
var app = express();
var port = process.env.PORT || 8080;
app.use(express.json());
app.listen(port, function() {
    console.log("Listening on port ".concat(port));
});
app.get('/', function() {
    var _ref = _async_to_generator(function(req, res) {
        return _ts_generator(this, function(_state) {
            res.json('Hello, World!');
            return [
                2
            ];
        });
    });
    return function(req, res) {
        return _ref.apply(this, arguments);
    };
}());
app.get('/pets', function() {
    var _ref = _async_to_generator(function(req, res) {
        var PS, pets;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    PS = new PetService();
                    return [
                        4,
                        PS.getAllPets()
                    ];
                case 1:
                    pets = _state.sent();
                    res.json(pets);
                    return [
                        2
                    ];
            }
        });
    });
    return function(req, res) {
        return _ref.apply(this, arguments);
    };
}());
app.get('/pets/count', function() {
    var _ref = _async_to_generator(function(req, res) {
        var PS, count;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    PS = new PetService();
                    return [
                        4,
                        PS.getCountPets()
                    ];
                case 1:
                    count = _state.sent();
                    res.json(count);
                    return [
                        2
                    ];
            }
        });
    });
    return function(req, res) {
        return _ref.apply(this, arguments);
    };
}());
app.get('/products', function() {
    var _ref = _async_to_generator(function(req, res) {
        var PS, costRange, products;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    PS = new ProductService();
                    costRange = req.query.cost;
                    return [
                        4,
                        PS.getProducts(costRange)
                    ];
                case 1:
                    products = _state.sent();
                    res.json(products);
                    return [
                        2
                    ];
            }
        });
    });
    return function(req, res) {
        return _ref.apply(this, arguments);
    };
}());
app.get('/products/:animalType', function() {
    var _ref = _async_to_generator(function(req, res) {
        var animalType, PS, products;
        return _ts_generator(this, function(_state) {
            switch(_state.label){
                case 0:
                    animalType = req.params.animalType;
                    PS = new ProductService();
                    return [
                        4,
                        PS.getProductsForAnimalType(animalType)
                    ];
                case 1:
                    products = _state.sent();
                    res.json(products);
                    return [
                        2
                    ];
            }
        });
    });
    return function(req, res) {
        return _ref.apply(this, arguments);
    };
}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9pbmRleC50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZXhwcmVzcyBmcm9tICdleHByZXNzJztcbmltcG9ydCBQZXRTZXJ2aWNlIGZyb20gJy4vU2VydmljZS9QZXRTZXJ2aWNlLmpzJztcbmltcG9ydCBQcm9kdWN0U2VydmljZSBmcm9tICcuL1NlcnZpY2UvUHJvZHVjdFNlcnZpY2UuanMnO1xuaW1wb3J0IHF1ZXJ5c3RyaW5nIGZyb20gJ25vZGU6cXVlcnlzdHJpbmcnO1xuXG5jb25zdCBhcHAgPSBleHByZXNzKCk7XG5jb25zdCBwb3J0ID0gcHJvY2Vzcy5lbnYuUE9SVCB8fCA4MDgwO1xuXG5hcHAudXNlKGV4cHJlc3MuanNvbigpKTtcblxuYXBwLmxpc3Rlbihwb3J0LCAoKSA9PiB7XG4gIGNvbnNvbGUubG9nKGBMaXN0ZW5pbmcgb24gcG9ydCAke3BvcnR9YCk7XG59KTtcblxuYXBwLmdldCgnLycsIGFzeW5jIChyZXEsIHJlcykgPT4ge1xuICByZXMuanNvbignSGVsbG8sIFdvcmxkIScpO1xufSk7XG5cbmFwcC5nZXQoJy9wZXRzJywgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IFBTID0gbmV3IFBldFNlcnZpY2UoKTtcbiAgY29uc3QgcGV0cyA9IGF3YWl0IFBTLmdldEFsbFBldHMoKTtcbiAgcmVzLmpzb24ocGV0cyk7XG59KTtcblxuYXBwLmdldCgnL3BldHMvY291bnQnLCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgY29uc3QgUFMgPSBuZXcgUGV0U2VydmljZSgpO1xuICBjb25zdCBjb3VudCA9IGF3YWl0IFBTLmdldENvdW50UGV0cygpO1xuICByZXMuanNvbihjb3VudCk7XG59KTtcblxuYXBwLmdldCgnL3Byb2R1Y3RzJywgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XG4gIGNvbnN0IFBTID0gbmV3IFByb2R1Y3RTZXJ2aWNlKCk7XG4gIGNvbnN0IGNvc3RSYW5nZSA9IHJlcS5xdWVyeS5jb3N0IGFzIHN0cmluZ1tdO1xuICBjb25zdCBwcm9kdWN0cyA9IGF3YWl0IFBTLmdldFByb2R1Y3RzKGNvc3RSYW5nZSk7XG4gIHJlcy5qc29uKHByb2R1Y3RzKTtcbn0pO1xuXG5hcHAuZ2V0KCcvcHJvZHVjdHMvOmFuaW1hbFR5cGUnLCBhc3luYyAocmVxLCByZXMpID0+IHtcbiAgY29uc3QgeyBhbmltYWxUeXBlIH0gPSByZXEucGFyYW1zO1xuICBjb25zdCBQUyA9IG5ldyBQcm9kdWN0U2VydmljZSgpO1xuICBjb25zdCBwcm9kdWN0cyA9IGF3YWl0IFBTLmdldFByb2R1Y3RzRm9yQW5pbWFsVHlwZShhbmltYWxUeXBlKTtcbiAgcmVzLmpzb24ocHJvZHVjdHMpO1xufSk7XG4iXSwibmFtZXMiOlsiZXhwcmVzcyIsIlBldFNlcnZpY2UiLCJQcm9kdWN0U2VydmljZSIsImFwcCIsInBvcnQiLCJwcm9jZXNzIiwiZW52IiwiUE9SVCIsInVzZSIsImpzb24iLCJsaXN0ZW4iLCJjb25zb2xlIiwibG9nIiwiZ2V0IiwicmVxIiwicmVzIiwiUFMiLCJwZXRzIiwiZ2V0QWxsUGV0cyIsImNvdW50IiwiZ2V0Q291bnRQZXRzIiwiY29zdFJhbmdlIiwicHJvZHVjdHMiLCJxdWVyeSIsImNvc3QiLCJnZXRQcm9kdWN0cyIsImFuaW1hbFR5cGUiLCJwYXJhbXMiLCJnZXRQcm9kdWN0c0ZvckFuaW1hbFR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPQSxhQUFhLFVBQVU7QUFDOUIsT0FBT0MsZ0JBQWdCLDBCQUEwQjtBQUNqRCxPQUFPQyxvQkFBb0IsOEJBQThCO0FBR3pELElBQU1DLE1BQU1IO0FBQ1osSUFBTUksT0FBT0MsUUFBUUMsR0FBRyxDQUFDQyxJQUFJLElBQUk7QUFFakNKLElBQUlLLEdBQUcsQ0FBQ1IsUUFBUVMsSUFBSTtBQUVwQk4sSUFBSU8sTUFBTSxDQUFDTixNQUFNO0lBQ2ZPLFFBQVFDLEdBQUcsQ0FBQyxBQUFDLHFCQUF5QixPQUFMUjtBQUNuQztBQUVBRCxJQUFJVSxHQUFHLENBQUM7ZUFBSyxvQkFBQSxTQUFPQyxLQUFLQzs7WUFDdkJBLElBQUlOLElBQUksQ0FBQzs7Ozs7SUFDWDtvQkFGb0JLLEtBQUtDOzs7O0FBSXpCWixJQUFJVSxHQUFHLENBQUM7ZUFBUyxvQkFBQSxTQUFPQyxLQUFLQztZQUNyQkMsSUFDQUM7Ozs7b0JBREFELEtBQUssSUFBSWY7b0JBQ0Y7O3dCQUFNZSxHQUFHRSxVQUFVOzs7b0JBQTFCRCxPQUFPO29CQUNiRixJQUFJTixJQUFJLENBQUNROzs7Ozs7SUFDWDtvQkFKd0JILEtBQUtDOzs7O0FBTTdCWixJQUFJVSxHQUFHLENBQUM7ZUFBZSxvQkFBQSxTQUFPQyxLQUFLQztZQUMzQkMsSUFDQUc7Ozs7b0JBREFILEtBQUssSUFBSWY7b0JBQ0Q7O3dCQUFNZSxHQUFHSSxZQUFZOzs7b0JBQTdCRCxRQUFRO29CQUNkSixJQUFJTixJQUFJLENBQUNVOzs7Ozs7SUFDWDtvQkFKOEJMLEtBQUtDOzs7O0FBTW5DWixJQUFJVSxHQUFHLENBQUM7ZUFBYSxvQkFBQSxTQUFPQyxLQUFLQztZQUN6QkMsSUFDQUssV0FDQUM7Ozs7b0JBRkFOLEtBQUssSUFBSWQ7b0JBQ1RtQixZQUFZUCxJQUFJUyxLQUFLLENBQUNDLElBQUk7b0JBQ2Y7O3dCQUFNUixHQUFHUyxXQUFXLENBQUNKOzs7b0JBQWhDQyxXQUFXO29CQUNqQlAsSUFBSU4sSUFBSSxDQUFDYTs7Ozs7O0lBQ1g7b0JBTDRCUixLQUFLQzs7OztBQU9qQ1osSUFBSVUsR0FBRyxDQUFDO2VBQXlCLG9CQUFBLFNBQU9DLEtBQUtDO1lBQ25DVyxZQUNGVixJQUNBTTs7OztvQkFGRUksYUFBZVosSUFBSWEsTUFBTSxDQUF6QkQ7b0JBQ0ZWLEtBQUssSUFBSWQ7b0JBQ0U7O3dCQUFNYyxHQUFHWSx3QkFBd0IsQ0FBQ0Y7OztvQkFBN0NKLFdBQVc7b0JBQ2pCUCxJQUFJTixJQUFJLENBQUNhOzs7Ozs7SUFDWDtvQkFMd0NSLEtBQUtDIn0=