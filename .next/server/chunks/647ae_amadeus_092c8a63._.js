module.exports = [
"[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/client/access_token.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _events = _interopRequireDefault(__turbopack_context__.r("[externals]/events [external] (events, cjs)"));
function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        "default": e
    };
}
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
// The number of seconds before the token expires, when
// we will already try to refresh it
var TOKEN_BUFFER = 10;
/**
  * A helper library to create and maintain the OAuth2 AccessTokens between
  * requests. Keeps track of the expiry time and automatically tries to fetch
  * a new token if needed.
  *
  * @property {string} accessToken the cached current access token (bearer)
  * @property {number} expiresAt the aproximate time this token expires at
  * @protected
  */ var AccessToken = /*#__PURE__*/ function() {
    function AccessToken() {
        _classCallCheck(this, AccessToken);
        this.accessToken;
        this.expiresAt;
    }
    // PROTECTED
    /**
   * Fetches or returns a cached bearer token. Used by the Client to get a
   * token before making an API call.
   *
   * @param  {Client} client the Amadeus Client to make an API call with
   * @return {Promise.<Response,ResponseError>} a Promise
   * @protected
   */ return _createClass(AccessToken, [
        {
            key: "bearerToken",
            value: function bearerToken(client) {
                var emitter = new _events["default"]();
                var promise = this.promise(emitter);
                this.emitOrLoadAccessToken(client, emitter);
                return promise;
            }
        },
        {
            key: "promise",
            value: function promise(emitter) {
                return new Promise(function(resolve, reject) {
                    emitter.on('resolve', function(response) {
                        return resolve(response);
                    });
                    emitter.on('reject', function(error) {
                        return reject(error);
                    });
                });
            }
        },
        {
            key: "emitOrLoadAccessToken",
            value: function emitOrLoadAccessToken(client, emitter) {
                if (this.needsLoadOrRefresh()) {
                    this.loadAccessToken(client, emitter);
                } else {
                    emitter.emit('resolve', this.accessToken);
                }
            }
        },
        {
            key: "needsLoadOrRefresh",
            value: function needsLoadOrRefresh() {
                return !this.accessToken || Date.now() + TOKEN_BUFFER > this.expiresAt;
            }
        },
        {
            key: "loadAccessToken",
            value: function loadAccessToken(client, emitter) {
                var _this = this;
                client.unauthenticatedRequest('POST', '/v1/security/oauth2/token', {
                    'grant_type': 'client_credentials',
                    'client_id': client.clientId,
                    'client_secret': client.clientSecret
                }).then(function(response) {
                    _this.storeAccessToken(response);
                    _this.emitOrLoadAccessToken(client, emitter);
                })["catch"](function(error) {
                    emitter.emit('reject', error);
                });
            }
        },
        {
            key: "storeAccessToken",
            value: function storeAccessToken(response) {
                this.accessToken = response.result['access_token'];
                this.expiresAt = Date.now() + response.result['expires_in'] * 1000;
            }
        }
    ]);
}();
var _default = exports["default"] = AccessToken;
module.exports = exports.default; //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZXZlbnRzIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJlIiwiX19lc01vZHVsZSIsIl90eXBlb2YiLCJvIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJjb25zdHJ1Y3RvciIsInByb3RvdHlwZSIsIl9jbGFzc0NhbGxDaGVjayIsImEiLCJuIiwiVHlwZUVycm9yIiwiX2RlZmluZVByb3BlcnRpZXMiLCJyIiwidCIsImxlbmd0aCIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX3RvUHJvcGVydHlLZXkiLCJrZXkiLCJfY3JlYXRlQ2xhc3MiLCJpIiwiX3RvUHJpbWl0aXZlIiwidG9QcmltaXRpdmUiLCJjYWxsIiwiU3RyaW5nIiwiTnVtYmVyIiwiVE9LRU5fQlVGRkVSIiwiQWNjZXNzVG9rZW4iLCJhY2Nlc3NUb2tlbiIsImV4cGlyZXNBdCIsInZhbHVlIiwiYmVhcmVyVG9rZW4iLCJjbGllbnQiLCJlbWl0dGVyIiwiRXZlbnRFbWl0dGVyIiwicHJvbWlzZSIsImVtaXRPckxvYWRBY2Nlc3NUb2tlbiIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0Iiwib24iLCJyZXNwb25zZSIsImVycm9yIiwibmVlZHNMb2FkT3JSZWZyZXNoIiwibG9hZEFjY2Vzc1Rva2VuIiwiZW1pdCIsIkRhdGUiLCJub3ciLCJfdGhpcyIsInVuYXV0aGVudGljYXRlZFJlcXVlc3QiLCJjbGllbnRJZCIsImNsaWVudFNlY3JldCIsInRoZW4iLCJzdG9yZUFjY2Vzc1Rva2VuIiwicmVzdWx0IiwiX2RlZmF1bHQiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmYXVsdCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hbWFkZXVzL2NsaWVudC9hY2Nlc3NfdG9rZW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICdldmVudHMnO1xuXG4vLyBUaGUgbnVtYmVyIG9mIHNlY29uZHMgYmVmb3JlIHRoZSB0b2tlbiBleHBpcmVzLCB3aGVuXG4vLyB3ZSB3aWxsIGFscmVhZHkgdHJ5IHRvIHJlZnJlc2ggaXRcbmNvbnN0IFRPS0VOX0JVRkZFUiA9IDEwO1xuXG4vKipcbiAgKiBBIGhlbHBlciBsaWJyYXJ5IHRvIGNyZWF0ZSBhbmQgbWFpbnRhaW4gdGhlIE9BdXRoMiBBY2Nlc3NUb2tlbnMgYmV0d2VlblxuICAqIHJlcXVlc3RzLiBLZWVwcyB0cmFjayBvZiB0aGUgZXhwaXJ5IHRpbWUgYW5kIGF1dG9tYXRpY2FsbHkgdHJpZXMgdG8gZmV0Y2hcbiAgKiBhIG5ldyB0b2tlbiBpZiBuZWVkZWQuXG4gICpcbiAgKiBAcHJvcGVydHkge3N0cmluZ30gYWNjZXNzVG9rZW4gdGhlIGNhY2hlZCBjdXJyZW50IGFjY2VzcyB0b2tlbiAoYmVhcmVyKVxuICAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBleHBpcmVzQXQgdGhlIGFwcm94aW1hdGUgdGltZSB0aGlzIHRva2VuIGV4cGlyZXMgYXRcbiAgKiBAcHJvdGVjdGVkXG4gICovXG5jbGFzcyBBY2Nlc3NUb2tlbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYWNjZXNzVG9rZW47XG4gICAgdGhpcy5leHBpcmVzQXQ7XG4gIH1cblxuICAvLyBQUk9URUNURURcblxuICAvKipcbiAgICogRmV0Y2hlcyBvciByZXR1cm5zIGEgY2FjaGVkIGJlYXJlciB0b2tlbi4gVXNlZCBieSB0aGUgQ2xpZW50IHRvIGdldCBhXG4gICAqIHRva2VuIGJlZm9yZSBtYWtpbmcgYW4gQVBJIGNhbGwuXG4gICAqXG4gICAqIEBwYXJhbSAge0NsaWVudH0gY2xpZW50IHRoZSBBbWFkZXVzIENsaWVudCB0byBtYWtlIGFuIEFQSSBjYWxsIHdpdGhcbiAgICogQHJldHVybiB7UHJvbWlzZS48UmVzcG9uc2UsUmVzcG9uc2VFcnJvcj59IGEgUHJvbWlzZVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBiZWFyZXJUb2tlbihjbGllbnQpIHtcbiAgICBsZXQgZW1pdHRlciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBsZXQgcHJvbWlzZSA9IHRoaXMucHJvbWlzZShlbWl0dGVyKTtcbiAgICB0aGlzLmVtaXRPckxvYWRBY2Nlc3NUb2tlbihjbGllbnQsIGVtaXR0ZXIpO1xuICAgIHJldHVybiBwcm9taXNlO1xuICB9XG5cbiAgLy8gUFJJVkFURVxuXG4gIC8qKlxuICAgKiBCdWlsZHMgYSBwcm9taXNlIHRvIGJlIHJldHVybmVkIHRvIHRoZSBBUEkgdXNlclxuICAgKlxuICAgKiBAcGFyYW0gIHt0eXBlfSBlbWl0dGVyIHRoZSBFdmVudEVtaXR0ZXIgdXNlZCB0byBub3RpZnkgdGhlIFByb21pc2Ugb2ZcbiAgICogQHJldHVybiB7UHJvbWlzZX0gYSBwcm9taXNlXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBwcm9taXNlKGVtaXR0ZXIpIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgZW1pdHRlci5vbigncmVzb2x2ZScsIHJlc3BvbnNlID0+IHJlc29sdmUocmVzcG9uc2UpKTtcbiAgICAgIGVtaXR0ZXIub24oJ3JlamVjdCcsIGVycm9yID0+IHJlamVjdChlcnJvcikpO1xuICAgIH0pO1xuICB9XG5cblxuICAvKipcbiAgICogQ2hlY2tzIGlmIHRoZSB0b2tlbiBuZWVkcyBhIHJlZnJlc2gsIGlmIG5vdCBlbWl0cyB0aGUgY2FjaGVkIHRva2VuLFxuICAgKiBvdGhlcndpc2UgdHJpZXMgdG8gbG9hZCBhIG5ldyBhY2Nlc3MgdG9rZW5cbiAgICpcbiAgICogQHBhcmFtICB7Q2xpZW50fSBjbGllbnQgdGhlIEFtYWRldXMgQ2xpZW50IHRvIG1ha2UgYW4gQVBJIGNhbGwgd2l0aFxuICAgKiBAcGFyYW0gIHt0eXBlfSBlbWl0dGVyIHRoZSBFdmVudEVtaXR0ZXIgdXNlZCB0byBlbWl0IHRoZSB0b2tlblxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgZW1pdE9yTG9hZEFjY2Vzc1Rva2VuKGNsaWVudCwgZW1pdHRlcikge1xuICAgIGlmICh0aGlzLm5lZWRzTG9hZE9yUmVmcmVzaCgpKSB7IHRoaXMubG9hZEFjY2Vzc1Rva2VuKGNsaWVudCwgZW1pdHRlcik7IH1cbiAgICBlbHNlIHsgZW1pdHRlci5lbWl0KCdyZXNvbHZlJywgdGhpcy5hY2Nlc3NUb2tlbik7IH1cbiAgfVxuXG4gIC8qKlxuICAgKiBDaGVja3MgaWYgdGhlIHRva2VuIG5lZWRzIGEgcmVmcmVzaCBvciBmaXJzdCBsb2FkXG4gICAqXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59IHdldGhlciB0aGUgdG9rZW4gbmVlZHMgYSByZWZyZXNoXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBuZWVkc0xvYWRPclJlZnJlc2goKSB7XG4gICAgcmV0dXJuICF0aGlzLmFjY2Vzc1Rva2VuIHx8ICgoRGF0ZS5ub3coKSArIFRPS0VOX0JVRkZFUikgPiB0aGlzLmV4cGlyZXNBdCk7XG4gIH1cblxuXG4gIC8qKlxuICAgKiBMb2FkcyB0aGUgYWNjZXNzIHRva2VuIHVzaW5nIHRoZSBjbGllbnQsIGVtaXRzIHRoZSB0b2tlbiB3aGVuIGl0J3MgbG9hZGVkXG4gICAqXG4gICAqIEBwYXJhbSAge0NsaWVudH0gY2xpZW50IHRoZSBBbWFkZXVzIENsaWVudCB0byBtYWtlIGFuIEFQSSBjYWxsIHdpdGhcbiAgICogQHBhcmFtICB7dHlwZX0gZW1pdHRlciB0aGUgRXZlbnRFbWl0dGVyIHVzZWQgdG8gZW1pdCB0aGUgdG9rZW5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGxvYWRBY2Nlc3NUb2tlbihjbGllbnQsIGVtaXR0ZXIpIHtcbiAgICBjbGllbnQudW5hdXRoZW50aWNhdGVkUmVxdWVzdCgnUE9TVCcsICcvdjEvc2VjdXJpdHkvb2F1dGgyL3Rva2VuJywge1xuICAgICAgJ2dyYW50X3R5cGUnIDogJ2NsaWVudF9jcmVkZW50aWFscycsXG4gICAgICAnY2xpZW50X2lkJyA6IGNsaWVudC5jbGllbnRJZCxcbiAgICAgICdjbGllbnRfc2VjcmV0JyA6IGNsaWVudC5jbGllbnRTZWNyZXRcbiAgICB9KS50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgdGhpcy5zdG9yZUFjY2Vzc1Rva2VuKHJlc3BvbnNlKTtcbiAgICAgIHRoaXMuZW1pdE9yTG9hZEFjY2Vzc1Rva2VuKGNsaWVudCwgZW1pdHRlcik7XG4gICAgfSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICBlbWl0dGVyLmVtaXQoJ3JlamVjdCcsIGVycm9yKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBTdG9yZXMgYSBsb2FkZWQgYWNjZXNzIHRva2VuLCBjYWxjdWxhdGluZyB0aGUgZXhwaXJ5IGRhdGVcbiAgICpcbiAgICogQHBhcmFtICB7UmVzcG9uc2V9IHJlc3BvbnNlIHRoZSByZXNwb25zZSBvYmplY3QgcmVjZWl2ZWQgZnJvbSB0aGUgY2xpZW50XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBzdG9yZUFjY2Vzc1Rva2VuKHJlc3BvbnNlKSB7XG4gICAgdGhpcy5hY2Nlc3NUb2tlbiA9IHJlc3BvbnNlLnJlc3VsdFsnYWNjZXNzX3Rva2VuJ107XG4gICAgdGhpcy5leHBpcmVzQXQgPSBEYXRlLm5vdygpICsgKHJlc3BvbnNlLnJlc3VsdFsnZXhwaXJlc19pbiddICogMTAwMCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQWNjZXNzVG9rZW47XG4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLElBQUFBLE9BQUEsR0FBQUMsc0JBQUEsQ0FBQUMsT0FBQTtBQUFrQyxTQUFBRCx1QkFBQUUsQ0FBQSxXQUFBQSxDQUFBLElBQUFBLENBQUEsQ0FBQUMsVUFBQSxHQUFBRCxDQUFBLGdCQUFBQSxDQUFBO0FBQUEsU0FBQUUsUUFBQUMsQ0FBQSxzQ0FBQUQsT0FBQSx3QkFBQUUsTUFBQSx1QkFBQUEsTUFBQSxDQUFBQyxRQUFBLGFBQUFGLENBQUEsa0JBQUFBLENBQUEsZ0JBQUFBLENBQUEsV0FBQUEsQ0FBQSx5QkFBQUMsTUFBQSxJQUFBRCxDQUFBLENBQUFHLFdBQUEsS0FBQUYs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
}),
"[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/client/response.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
var JSON_CONTENT_TYPES = [
    'application/json',
    'application/vnd.amadeus+json'
];
/**
 * The response object returned for every API call.
 *
 * @param {Object} http_response the response object returned from the Node/HTTP
 *  request
 * @param {Request} request the request object used to make this API call
 *
 * @property {number} statusCode the HTTP status code for the response, if any
 * @property {string} body the raw body received from the API
 * @property {Object} result the parsed JSON received from the API
 * @property {Object} data the data attribute taken from the result
 * @property {boolean} parsed wether the raw body has been parsed into JSON
 * @property {Request} request the request object used to make this API call
 *
 */ var Response = /*#__PURE__*/ function() {
    function Response(http_response, request) {
        _classCallCheck(this, Response);
        this.headers = http_response.headers || {};
        this.statusCode = http_response.statusCode;
        this.request = request;
        this.body = '';
        this.result = null;
        this.data = null;
        this.parsed = false;
    }
    // PROTECTED
    /**
   * Add a chunk received from the API to the body
   *
   * @param  {string} chunk a chunk of data
   * @protected
   */ return _createClass(Response, [
        {
            key: "addChunk",
            value: function addChunk(chunk) {
                this.body += chunk;
            }
        },
        {
            key: "parse",
            value: function parse() {
                try {
                    if (this.statusCode === 204) {
                        return;
                    }
                    if (this.isJson()) {
                        this.result = JSON.parse(this.body);
                        this.data = this.result.data;
                        this.parsed = true;
                    } else {
                        this.parsed = false;
                    }
                } catch (SyntaxError) {
                    this.parsed = false;
                }
            }
        },
        {
            key: "success",
            value: function success() {
                if (this.statusCode == 204) {
                    return true;
                }
                if (this.parsed && this.statusCode < 300) {
                    return true;
                }
            }
        },
        {
            key: "isJson",
            value: function isJson() {
                return JSON_CONTENT_TYPES.indexOf(this.headers['content-type']) !== -1;
            }
        }
    ]);
}();
var _default = exports["default"] = Response;
module.exports = exports.default; //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJKU09OX0NPTlRFTlRfVFlQRVMiLCJSZXNwb25zZSIsImh0dHBfcmVzcG9uc2UiLCJyZXF1ZXN0IiwiX2NsYXNzQ2FsbENoZWNrIiwiaGVhZGVycyIsInN0YXR1c0NvZGUiLCJib2R5IiwicmVzdWx0IiwiZGF0YSIsInBhcnNlZCIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiYWRkQ2h1bmsiLCJjaHVuayIsInBhcnNlIiwiaXNKc29uIiwiSlNPTiIsIlN5bnRheEVycm9yIiwic3VjY2VzcyIsImluZGV4T2YiLCJfZGVmYXVsdCIsImV4cG9ydHMiLCJtb2R1bGUiLCJkZWZhdWx0Il0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FtYWRldXMvY2xpZW50L3Jlc3BvbnNlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImxldCBKU09OX0NPTlRFTlRfVFlQRVMgPSBbJ2FwcGxpY2F0aW9uL2pzb24nLCAnYXBwbGljYXRpb24vdm5kLmFtYWRldXMranNvbiddO1xuXG4vKipcbiAqIFRoZSByZXNwb25zZSBvYmplY3QgcmV0dXJuZWQgZm9yIGV2ZXJ5IEFQSSBjYWxsLlxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBodHRwX3Jlc3BvbnNlIHRoZSByZXNwb25zZSBvYmplY3QgcmV0dXJuZWQgZnJvbSB0aGUgTm9kZS9IVFRQXG4gKiAgcmVxdWVzdFxuICogQHBhcmFtIHtSZXF1ZXN0fSByZXF1ZXN0IHRoZSByZXF1ZXN0IG9iamVjdCB1c2VkIHRvIG1ha2UgdGhpcyBBUEkgY2FsbFxuICpcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBzdGF0dXNDb2RlIHRoZSBIVFRQIHN0YXR1cyBjb2RlIGZvciB0aGUgcmVzcG9uc2UsIGlmIGFueVxuICogQHByb3BlcnR5IHtzdHJpbmd9IGJvZHkgdGhlIHJhdyBib2R5IHJlY2VpdmVkIGZyb20gdGhlIEFQSVxuICogQHByb3BlcnR5IHtPYmplY3R9IHJlc3VsdCB0aGUgcGFyc2VkIEpTT04gcmVjZWl2ZWQgZnJvbSB0aGUgQVBJXG4gKiBAcHJvcGVydHkge09iamVjdH0gZGF0YSB0aGUgZGF0YSBhdHRyaWJ1dGUgdGFrZW4gZnJvbSB0aGUgcmVzdWx0XG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IHBhcnNlZCB3ZXRoZXIgdGhlIHJhdyBib2R5IGhhcyBiZWVuIHBhcnNlZCBpbnRvIEpTT05cbiAqIEBwcm9wZXJ0eSB7UmVxdWVzdH0gcmVxdWVzdCB0aGUgcmVxdWVzdCBvYmplY3QgdXNlZCB0byBtYWtlIHRoaXMgQVBJIGNhbGxcbiAqXG4gKi9cbmNsYXNzIFJlc3BvbnNlIHtcbiAgY29uc3RydWN0b3IoaHR0cF9yZXNwb25zZSwgcmVxdWVzdCkge1xuICAgIHRoaXMuaGVhZGVycyA9IGh0dHBfcmVzcG9uc2UuaGVhZGVycyB8fCB7fTtcbiAgICB0aGlzLnN0YXR1c0NvZGUgID0gaHR0cF9yZXNwb25zZS5zdGF0dXNDb2RlO1xuICAgIHRoaXMucmVxdWVzdCAgICAgPSByZXF1ZXN0O1xuICAgIHRoaXMuYm9keSAgICAgICAgPSAnJztcbiAgICB0aGlzLnJlc3VsdCAgICAgID0gbnVsbDtcbiAgICB0aGlzLmRhdGEgICAgICAgID0gbnVsbDtcbiAgICB0aGlzLnBhcnNlZCAgICAgID0gZmFsc2U7XG4gIH1cblxuICAvLyBQUk9URUNURURcblxuICAvKipcbiAgICogQWRkIGEgY2h1bmsgcmVjZWl2ZWQgZnJvbSB0aGUgQVBJIHRvIHRoZSBib2R5XG4gICAqXG4gICAqIEBwYXJhbSAge3N0cmluZ30gY2h1bmsgYSBjaHVuayBvZiBkYXRhXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIGFkZENodW5rKGNodW5rKSB7XG4gICAgdGhpcy5ib2R5ICs9IGNodW5rO1xuICB9XG5cblxuICAvKipcbiAgICogVHJpZXMgdG8gcGFyc2UgcGFyc2UgdGhlIHJhdyBkYXRhXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIHBhcnNlKCkge1xuICAgIHRyeSB7XG4gICAgICBpZiAodGhpcy5zdGF0dXNDb2RlID09PSAyMDQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuaXNKc29uKCkpIHtcbiAgICAgICAgdGhpcy5yZXN1bHQgPSBKU09OLnBhcnNlKHRoaXMuYm9keSk7XG4gICAgICAgIHRoaXMuZGF0YSA9IHRoaXMucmVzdWx0LmRhdGE7XG4gICAgICAgIHRoaXMucGFyc2VkID0gdHJ1ZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMucGFyc2VkID0gZmFsc2U7XG4gICAgICB9XG4gICAgfSBjYXRjaCAoU3ludGF4RXJyb3IpIHtcbiAgICAgIHRoaXMucGFyc2VkID0gZmFsc2U7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFdldGhlciB0aGlzIEFQSSBjYWxsIGNhbiBiZSBjb25zaWRlcmVkIGEgc3VjY2Vzcy4gVXNlZCB0byB3cmFwIHRoZSByZXNwb25zZVxuICAgKiBpbnRvIGEgUmVzcG9uc2VFcnJvclxuICAgKlxuICAgKiBAcmV0dXJuIHtib29sZWFufVxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuICBzdWNjZXNzKCkge1xuICAgIGlmICh0aGlzLnN0YXR1c0NvZGUgPT0gMjA0KSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHRoaXMucGFyc2VkICYmIHRoaXMuc3RhdHVzQ29kZSA8IDMwMCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgLy8gUFJJVkFURVxuXG5cbiAgLyoqXG4gICAqIFRlc3RzIGlmIHRoZSBjb250ZW50IGlzIHNlZW1pbmdseSBKU09OXG4gICAqXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBpc0pzb24oKSB7XG4gICAgcmV0dXJuIChKU09OX0NPTlRFTlRfVFlQRVMuaW5kZXhPZih0aGlzLmhlYWRlcnNbJ2NvbnRlbnQtdHlwZSddKSAhPT0gLTEpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlc3BvbnNlO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQSxJ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
}),
"[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/client/errors.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.UnknownError = exports.ServerError = exports.ResponseError = exports.ParserError = exports.NotFoundError = exports.NetworkError = exports.ClientError = exports.AuthenticationError = void 0;
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function _callSuper(t, o, e) {
    return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
}
function _possibleConstructorReturn(t, e) {
    if (e && ("object" == _typeof(e) || "function" == typeof e)) return e;
    if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(t);
}
function _assertThisInitialized(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
function _isNativeReflectConstruct() {
    try {
        var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (t) {}
    return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
        return !!t;
    })();
}
function _getPrototypeOf(t) {
    return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t);
    }, _getPrototypeOf(t);
}
function _inherits(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(t, "prototype", {
        writable: !1
    }), e && _setPrototypeOf(t, e);
}
function _setPrototypeOf(t, e) {
    return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
        return t.__proto__ = e, t;
    }, _setPrototypeOf(t, e);
}
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
/**
 * The error that is passed to the Promise when the API call fails.
 *
 * @param {Response} response the {@link Response} object containing the raw
 *  http response and the {@link Request} instance that made the API call.
 * @property {Response} response the {@link Response} object containing the raw
 *  http response and the {@link Request} instance that made the API call.
 * @property {string} code a unique code for this type of error. Options include
 *  `NetworkError`, `ParserError`, `ResponseError`, `ServerError`,
 *  `AuthenticationError`, `NotFoundError` and `UnknownError`
 *  from the  {@link Response}'s parsed data
 */ var ResponseError = exports.ResponseError = /*#__PURE__*/ function() {
    function ResponseError(response) {
        _classCallCheck(this, ResponseError);
        this.response = response;
        this.determineDescription();
    }
    // PRIVATE
    return _createClass(ResponseError, [
        {
            key: "determineDescription",
            value: function determineDescription() {
                if (!this.response || !this.response.parsed) {
                    this.description = null;
                    return;
                }
                var result = this.response.result;
                if (result && result.errors) {
                    this.description = result.errors;
                } else if (result) {
                    this.description = result;
                }
                return;
            }
        }
    ]);
}(); // Protected
var NetworkError = exports.NetworkError = /*#__PURE__*/ function(_ResponseError) {
    function NetworkError() {
        var _this;
        _classCallCheck(this, NetworkError);
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++){
            args[_key] = arguments[_key];
        }
        _this = _callSuper(this, NetworkError, [].concat(args));
        _this.code = 'NetworkError';
        return _this;
    }
    _inherits(NetworkError, _ResponseError);
    return _createClass(NetworkError);
}(ResponseError);
var ParserError = exports.ParserError = /*#__PURE__*/ function(_ResponseError2) {
    function ParserError() {
        var _this2;
        _classCallCheck(this, ParserError);
        for(var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++){
            args[_key2] = arguments[_key2];
        }
        _this2 = _callSuper(this, ParserError, [].concat(args));
        _this2.code = 'ParserError';
        return _this2;
    }
    _inherits(ParserError, _ResponseError2);
    return _createClass(ParserError);
}(ResponseError);
var ServerError = exports.ServerError = /*#__PURE__*/ function(_ResponseError3) {
    function ServerError() {
        var _this3;
        _classCallCheck(this, ServerError);
        for(var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++){
            args[_key3] = arguments[_key3];
        }
        _this3 = _callSuper(this, ServerError, [].concat(args));
        _this3.code = 'ServerError';
        return _this3;
    }
    _inherits(ServerError, _ResponseError3);
    return _createClass(ServerError);
}(ResponseError);
var ClientError = exports.ClientError = /*#__PURE__*/ function(_ResponseError4) {
    function ClientError() {
        var _this4;
        _classCallCheck(this, ClientError);
        for(var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++){
            args[_key4] = arguments[_key4];
        }
        _this4 = _callSuper(this, ClientError, [].concat(args));
        _this4.code = 'ClientError';
        return _this4;
    }
    _inherits(ClientError, _ResponseError4);
    return _createClass(ClientError);
}(ResponseError);
var AuthenticationError = exports.AuthenticationError = /*#__PURE__*/ function(_ResponseError5) {
    function AuthenticationError() {
        var _this5;
        _classCallCheck(this, AuthenticationError);
        for(var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++){
            args[_key5] = arguments[_key5];
        }
        _this5 = _callSuper(this, AuthenticationError, [].concat(args));
        _this5.code = 'AuthenticationError';
        return _this5;
    }
    _inherits(AuthenticationError, _ResponseError5);
    return _createClass(AuthenticationError);
}(ResponseError);
var NotFoundError = exports.NotFoundError = /*#__PURE__*/ function(_ResponseError6) {
    function NotFoundError() {
        var _this6;
        _classCallCheck(this, NotFoundError);
        for(var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++){
            args[_key6] = arguments[_key6];
        }
        _this6 = _callSuper(this, NotFoundError, [].concat(args));
        _this6.code = 'NotFoundError';
        return _this6;
    }
    _inherits(NotFoundError, _ResponseError6);
    return _createClass(NotFoundError);
}(ResponseError);
var UnknownError = exports.UnknownError = /*#__PURE__*/ function(_ResponseError7) {
    function UnknownError() {
        var _this7;
        _classCallCheck(this, UnknownError);
        for(var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++){
            args[_key7] = arguments[_key7];
        }
        _this7 = _callSuper(this, UnknownError, [].concat(args));
        _this7.code = 'UnknownError';
        return _this7;
    }
    _inherits(UnknownError, _ResponseError7);
    return _createClass(UnknownError);
}(ResponseError); //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZXNwb25zZUVycm9yIiwiZXhwb3J0cyIsInJlc3BvbnNlIiwiX2NsYXNzQ2FsbENoZWNrIiwiZGV0ZXJtaW5lRGVzY3JpcHRpb24iLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsInBhcnNlZCIsImRlc2NyaXB0aW9uIiwicmVzdWx0IiwiZXJyb3JzIiwiTmV0d29ya0Vycm9yIiwiX1Jlc3BvbnNlRXJyb3IiLCJfdGhpcyIsIl9sZW4iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJhcmdzIiwiQXJyYXkiLCJfa2V5IiwiX2NhbGxTdXBlciIsImNvbmNhdCIsImNvZGUiLCJfaW5oZXJpdHMiLCJQYXJzZXJFcnJvciIsIl9SZXNwb25zZUVycm9yMiIsIl90aGlzMiIsIl9sZW4yIiwiX2tleTIiLCJTZXJ2ZXJFcnJvciIsIl9SZXNwb25zZUVycm9yMyIsIl90aGlzMyIsIl9sZW4zIiwiX2tleTMiLCJDbGllbnRFcnJvciIsIl9SZXNwb25zZUVycm9yNCIsIl90aGlzNCIsIl9sZW40IiwiX2tleTQiLCJBdXRoZW50aWNhdGlvbkVycm9yIiwiX1Jlc3BvbnNlRXJyb3I1IiwiX3RoaXM1IiwiX2xlbjUiLCJfa2V5NSIsIk5vdEZvdW5kRXJyb3IiLCJfUmVzcG9uc2VFcnJvcjYiLCJfdGhpczYiLCJfbGVuNiIsIl9rZXk2IiwiVW5rbm93bkVycm9yIiwiX1Jlc3BvbnNlRXJyb3I3IiwiX3RoaXM3IiwiX2xlbjciLCJfa2V5NyJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hbWFkZXVzL2NsaWVudC9lcnJvcnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXG4vKipcbiAqIFRoZSBlcnJvciB0aGF0IGlzIHBhc3NlZCB0byB0aGUgUHJvbWlzZSB3aGVuIHRoZSBBUEkgY2FsbCBmYWlscy5cbiAqXG4gKiBAcGFyYW0ge1Jlc3BvbnNlfSByZXNwb25zZSB0aGUge0BsaW5rIFJlc3BvbnNlfSBvYmplY3QgY29udGFpbmluZyB0aGUgcmF3XG4gKiAgaHR0cCByZXNwb25zZSBhbmQgdGhlIHtAbGluayBSZXF1ZXN0fSBpbnN0YW5jZSB0aGF0IG1hZGUgdGhlIEFQSSBjYWxsLlxuICogQHByb3BlcnR5IHtSZXNwb25zZX0gcmVzcG9uc2UgdGhlIHtAbGluayBSZXNwb25zZX0gb2JqZWN0IGNvbnRhaW5pbmcgdGhlIHJhd1xuICogIGh0dHAgcmVzcG9uc2UgYW5kIHRoZSB7QGxpbmsgUmVxdWVzdH0gaW5zdGFuY2UgdGhhdCBtYWRlIHRoZSBBUEkgY2FsbC5cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBjb2RlIGEgdW5pcXVlIGNvZGUgZm9yIHRoaXMgdHlwZSBvZiBlcnJvci4gT3B0aW9ucyBpbmNsdWRlXG4gKiAgYE5ldHdvcmtFcnJvcmAsIGBQYXJzZXJFcnJvcmAsIGBSZXNwb25zZUVycm9yYCwgYFNlcnZlckVycm9yYCxcbiAqICBgQXV0aGVudGljYXRpb25FcnJvcmAsIGBOb3RGb3VuZEVycm9yYCBhbmQgYFVua25vd25FcnJvcmBcbiAqICBmcm9tIHRoZSAge0BsaW5rIFJlc3BvbnNlfSdzIHBhcnNlZCBkYXRhXG4gKi9cbmV4cG9ydCBjbGFzcyBSZXNwb25zZUVycm9yIHtcbiAgY29uc3RydWN0b3IocmVzcG9uc2UpIHtcbiAgICB0aGlzLnJlc3BvbnNlID0gcmVzcG9uc2U7XG4gICAgdGhpcy5kZXRlcm1pbmVEZXNjcmlwdGlvbigpO1xuICB9XG5cbiAgLy8gUFJJVkFURVxuXG4gIGRldGVybWluZURlc2NyaXB0aW9uKCkge1xuICAgIGlmICghdGhpcy5yZXNwb25zZSB8fCAhdGhpcy5yZXNwb25zZS5wYXJzZWQpIHtcbiAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBudWxsO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBsZXQgcmVzdWx0ID0gdGhpcy5yZXNwb25zZS5yZXN1bHQ7XG4gICAgaWYgKHJlc3VsdCAmJiByZXN1bHQuZXJyb3JzKSB7IHRoaXMuZGVzY3JpcHRpb24gPSByZXN1bHQuZXJyb3JzOyB9XG4gICAgZWxzZSBpZiAocmVzdWx0KSB7IHRoaXMuZGVzY3JpcHRpb24gPSByZXN1bHQ7IH1cbiAgICByZXR1cm47XG4gIH1cbn1cblxuLy8gUHJvdGVjdGVkXG5cbmV4cG9ydCBjbGFzcyBOZXR3b3JrRXJyb3IgZXh0ZW5kcyBSZXNwb25zZUVycm9yIHtcbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIHRoaXMuY29kZSA9ICdOZXR3b3JrRXJyb3InO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQYXJzZXJFcnJvciBleHRlbmRzIFJlc3BvbnNlRXJyb3Ige1xuICBjb25zdHJ1Y3RvciguLi5hcmdzKSB7XG4gICAgc3VwZXIoLi4uYXJncyk7XG4gICAgdGhpcy5jb2RlID0gJ1BhcnNlckVycm9yJztcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgU2VydmVyRXJyb3IgZXh0ZW5kcyBSZXNwb25zZUVycm9yIHtcbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIHRoaXMuY29kZSA9ICdTZXJ2ZXJFcnJvcic7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENsaWVudEVycm9yIGV4dGVuZHMgUmVzcG9uc2VFcnJvciB7XG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgICB0aGlzLmNvZGUgPSAnQ2xpZW50RXJyb3InO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBBdXRoZW50aWNhdGlvbkVycm9yIGV4dGVuZHMgUmVzcG9uc2VFcnJvciB7XG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgICB0aGlzLmNvZGUgPSAnQXV0aGVudGljYXRpb25FcnJvcic7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIE5vdEZvdW5kRXJyb3IgZXh0ZW5kcyBSZXNwb25zZUVycm9yIHtcbiAgY29uc3RydWN0b3IoLi4uYXJncykge1xuICAgIHN1cGVyKC4uLmFyZ3MpO1xuICAgIHRoaXMuY29kZSA9ICdOb3RGb3VuZEVycm9yJztcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgVW5rbm93bkVycm9yIGV4dGVuZHMgUmVzcG9uc2VFcnJvciB7XG4gIGNvbnN0cnVjdG9yKC4uLmFyZ3MpIHtcbiAgICBzdXBlciguLi5hcmdzKTtcbiAgICB0aGlzLmNvZGUgPSAnVW5rbm93bkVycm9yJztcbiAgfVxufVxuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWEEsSUFZYUEsYUFBYSxHQUFBQyxPQUFBLENBQUFELGFBQUE7RUFDeEIsU0FBQUEsY0FBWUUsUUFBUSxFQUFFO0lBQUFDLGVBQUEsT0FBQUgsYUFBQTtJQUNwQixJQUFJLENBQUNFLFFBQVEsR0FBR0EsUUFBUTtJQUN4QixJQUFJLENBQUNFLG9CQUFvQixDQUFDLENBQUM7RUFDN0I7O0VBRUE7RUFBQSxPQUFBQyxZQUFBLENBQUFMLGFBQUE7SUFBQU0sR0FBQTtJQUFBQyxLQUFBLEVBRUEsU0FBQUgsb0JBQW9CQSxDQUFBLEVBQUc7TUFDckIsSUFBSSxDQUFDLElBQUksQ0FBQ0YsUUFBUSxJQUFJLENBQUMsSUFBSSxDQUFDQSxRQUFRLENBQUNNLE1BQU0sRUFBRTtRQUMzQyxJQUFJLENBQUNDLFdBQVcsR0FBRyxJQUFJO1FBQ3ZCO01BQ0Y7TUFDQSxJQUFJQyxNQUFNLEdBQUcsSUFBSSxDQUFDUixRQUFRLENBQUNRLE1BQU07TUFDakMsSUFBSUEsTUFBTSxJQUFJQSxNQUFNLENBQUNDLE1BQU0sRUFBRTtRQUFFLElBQUksQ0FBQ0YsV0FBVyxHQUFHQyxNQUFNLENBQUNDLE1BQU07TUFBRSxDQUFDLE1BQzdELElBQUlELE1BQU0sRUFBRTtRQUFFLElBQUksQ0FBQ0QsV0FBVyxHQUFHQyxNQUFNO01BQUU7TUFDOUM7SUFDRjtFQUFDO0FBQUEsS0FHSDtBQUFBLElBRWFFLFlBQVksR0FBQVgsT0FBQSxDQUFBVyxZQUFBLDBCQUFBQyxjQUFBO0VBQ3ZC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
}),
"[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/client/listener.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _response = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/client/response.js [app-route] (ecmascript)"));
var _util = _interopRequireDefault(__turbopack_context__.r("[externals]/util [external] (util, cjs)"));
var _errors = __turbopack_context__.r("[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/client/errors.js [app-route] (ecmascript)");
function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        "default": e
    };
}
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
/**
 * Listen to changes in the HTTP request and build Response/ResponseError
 * objects accordingly.
 *
 * @param {Request} request the request object used to make the call
 * @param {EventEmitter} emitter a Node event emitter
 * @param {Client} client the client instance to log results to
 * @protected
 */ var Listener = /*#__PURE__*/ function() {
    function Listener(request, emitter, client) {
        _classCallCheck(this, Listener);
        this.request = request;
        this.emitter = emitter;
        this.client = client;
    }
    // PROTECTED
    /**
   * Listens to various events on the http_response object, listening for data,
   * connections closing for bad reasons, and the end of the response.
   *
   * Used by the Client when making an API call.
   *
   * @param  {Object} http_response a Node http response object
   * @protected
   */ return _createClass(Listener, [
        {
            key: "onResponse",
            value: function onResponse(http_response) {
                var response = new _response["default"](http_response, this.request);
                http_response.on('data', response.addChunk.bind(response));
                http_response.on('end', this.onEnd(response).bind(this));
                http_response.on('close', this.onNetworkError(response).bind(this));
                http_response.on('error', this.onNetworkError(response).bind(this));
            }
        },
        {
            key: "onError",
            value: function onError(http_response) {
                var response = new _response["default"](http_response, this.request);
                this.onNetworkError(response)();
            }
        },
        {
            key: "onEnd",
            value: function onEnd(response) {
                var _this = this;
                return function() {
                    response.parse();
                    if (response.success()) {
                        _this.onSuccess(response);
                    } else {
                        _this.onFail(response);
                    }
                };
            }
        },
        {
            key: "onSuccess",
            value: function onSuccess(response) {
                this.log(response);
                this.emitter.emit('resolve', response);
            }
        },
        {
            key: "onFail",
            value: function onFail(response) {
                var Error = this.errorFor(response);
                var error = new Error(response);
                this.log(response, error);
                this.emitter.emit('reject', error);
            }
        },
        {
            key: "errorFor",
            value: function errorFor(_ref) {
                var statusCode = _ref.statusCode, parsed = _ref.parsed;
                var error = null;
                if (statusCode >= 500) {
                    error = _errors.ServerError;
                } else if (statusCode === 401) {
                    error = _errors.AuthenticationError;
                } else if (statusCode === 404) {
                    error = _errors.NotFoundError;
                } else if (statusCode >= 400) {
                    error = _errors.ClientError;
                } else if (!parsed) {
                    error = _errors.ParserError;
                } else {
                    error = _errors.UnknownError;
                }
                return error;
            }
        },
        {
            key: "onNetworkError",
            value: function onNetworkError(response) {
                var _this2 = this;
                return function() {
                    response.parse();
                    var error = new _errors.NetworkError(response);
                    _this2.log(response, error);
                    _this2.emitter.emit('reject', error);
                };
            }
        },
        {
            key: "log",
            value: function log(response, error) {
                if (this.client.debug()) {
                    /* istanbul ignore next */ this.client.logger.log(_util["default"].inspect(response, false, null));
                }
                if (!this.client.debug() && this.client.warn() && error) {
                    /* istanbul ignore next */ this.client.logger.log('Amadeus', error.code, error.description);
                }
            }
        }
    ]);
}();
var _default = exports["default"] = Listener;
module.exports = exports.default; //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcmVzcG9uc2UiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl91dGlsIiwiX2Vycm9ycyIsImUiLCJfX2VzTW9kdWxlIiwiX3R5cGVvZiIsIm8iLCJTeW1ib2wiLCJpdGVyYXRvciIsImNvbnN0cnVjdG9yIiwicHJvdG90eXBlIiwiX2NsYXNzQ2FsbENoZWNrIiwiYSIsIm4iLCJUeXBlRXJyb3IiLCJfZGVmaW5lUHJvcGVydGllcyIsInIiLCJ0IiwibGVuZ3RoIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfdG9Qcm9wZXJ0eUtleSIsImtleSIsIl9jcmVhdGVDbGFzcyIsImkiLCJfdG9QcmltaXRpdmUiLCJ0b1ByaW1pdGl2ZSIsImNhbGwiLCJTdHJpbmciLCJOdW1iZXIiLCJMaXN0ZW5lciIsInJlcXVlc3QiLCJlbWl0dGVyIiwiY2xpZW50IiwidmFsdWUiLCJvblJlc3BvbnNlIiwiaHR0cF9yZXNwb25zZSIsInJlc3BvbnNlIiwiUmVzcG9uc2UiLCJvbiIsImFkZENodW5rIiwiYmluZCIsIm9uRW5kIiwib25OZXR3b3JrRXJyb3IiLCJvbkVycm9yIiwiX3RoaXMiLCJwYXJzZSIsInN1Y2Nlc3MiLCJvblN1Y2Nlc3MiLCJvbkZhaWwiLCJsb2ciLCJlbWl0IiwiRXJyb3IiLCJlcnJvckZvciIsImVycm9yIiwiX3JlZiIsInN0YXR1c0NvZGUiLCJwYXJzZWQiLCJTZXJ2ZXJFcnJvciIsIkF1dGhlbnRpY2F0aW9uRXJyb3IiLCJOb3RGb3VuZEVycm9yIiwiQ2xpZW50RXJyb3IiLCJQYXJzZXJFcnJvciIsIlVua25vd25FcnJvciIsIl90aGlzMiIsIk5ldHdvcmtFcnJvciIsImRlYnVnIiwibG9nZ2VyIiwidXRpbCIsImluc3BlY3QiLCJ3YXJuIiwiY29kZSIsImRlc2NyaXB0aW9uIiwiX2RlZmF1bHQiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmYXVsdCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hbWFkZXVzL2NsaWVudC9saXN0ZW5lci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVzcG9uc2UgZnJvbSAnLi9yZXNwb25zZSc7XG5pbXBvcnQgdXRpbCAgICAgZnJvbSAndXRpbCc7XG5cbmltcG9ydCB7XG4gIFNlcnZlckVycm9yLFxuICBOb3RGb3VuZEVycm9yLFxuICBDbGllbnRFcnJvcixcbiAgUGFyc2VyRXJyb3IsXG4gIFVua25vd25FcnJvcixcbiAgTmV0d29ya0Vycm9yLFxuICBBdXRoZW50aWNhdGlvbkVycm9yXG59IGZyb20gJy4vZXJyb3JzJztcblxuXG4vKipcbiAqIExpc3RlbiB0byBjaGFuZ2VzIGluIHRoZSBIVFRQIHJlcXVlc3QgYW5kIGJ1aWxkIFJlc3BvbnNlL1Jlc3BvbnNlRXJyb3JcbiAqIG9iamVjdHMgYWNjb3JkaW5nbHkuXG4gKlxuICogQHBhcmFtIHtSZXF1ZXN0fSByZXF1ZXN0IHRoZSByZXF1ZXN0IG9iamVjdCB1c2VkIHRvIG1ha2UgdGhlIGNhbGxcbiAqIEBwYXJhbSB7RXZlbnRFbWl0dGVyfSBlbWl0dGVyIGEgTm9kZSBldmVudCBlbWl0dGVyXG4gKiBAcGFyYW0ge0NsaWVudH0gY2xpZW50IHRoZSBjbGllbnQgaW5zdGFuY2UgdG8gbG9nIHJlc3VsdHMgdG9cbiAqIEBwcm90ZWN0ZWRcbiAqL1xuY2xhc3MgTGlzdGVuZXIge1xuICBjb25zdHJ1Y3RvcihyZXF1ZXN0LCBlbWl0dGVyLCBjbGllbnQpIHtcbiAgICB0aGlzLnJlcXVlc3QgPSByZXF1ZXN0O1xuICAgIHRoaXMuZW1pdHRlciA9IGVtaXR0ZXI7XG4gICAgdGhpcy5jbGllbnQgID0gY2xpZW50O1xuICB9XG5cbiAgLy8gUFJPVEVDVEVEXG5cblxuICAvKipcbiAgICogTGlzdGVucyB0byB2YXJpb3VzIGV2ZW50cyBvbiB0aGUgaHR0cF9yZXNwb25zZSBvYmplY3QsIGxpc3RlbmluZyBmb3IgZGF0YSxcbiAgICogY29ubmVjdGlvbnMgY2xvc2luZyBmb3IgYmFkIHJlYXNvbnMsIGFuZCB0aGUgZW5kIG9mIHRoZSByZXNwb25zZS5cbiAgICpcbiAgICogVXNlZCBieSB0aGUgQ2xpZW50IHdoZW4gbWFraW5nIGFuIEFQSSBjYWxsLlxuICAgKlxuICAgKiBAcGFyYW0gIHtPYmplY3R9IGh0dHBfcmVzcG9uc2UgYSBOb2RlIGh0dHAgcmVzcG9uc2Ugb2JqZWN0XG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIG9uUmVzcG9uc2UoaHR0cF9yZXNwb25zZSkge1xuICAgIGxldCByZXNwb25zZSA9IG5ldyBSZXNwb25zZShodHRwX3Jlc3BvbnNlLCB0aGlzLnJlcXVlc3QpO1xuXG4gICAgaHR0cF9yZXNwb25zZS5vbignZGF0YScsICByZXNwb25zZS5hZGRDaHVuay5iaW5kKHJlc3BvbnNlKSk7XG4gICAgaHR0cF9yZXNwb25zZS5vbignZW5kJywgICB0aGlzLm9uRW5kKHJlc3BvbnNlKS5iaW5kKHRoaXMpKTtcbiAgICBodHRwX3Jlc3BvbnNlLm9uKCdjbG9zZScsIHRoaXMub25OZXR3b3JrRXJyb3IocmVzcG9uc2UpLmJpbmQodGhpcykpO1xuICAgIGh0dHBfcmVzcG9uc2Uub24oJ2Vycm9yJywgdGhpcy5vbk5ldHdvcmtFcnJvcihyZXNwb25zZSkuYmluZCh0aGlzKSk7XG4gIH1cblxuICAvKipcbiAgICogTGlzdGVucyB0byBhIG5ldHdvcmsgZXJyb3Igd2hlbiBtYWtpbmcgYW4gQVBJIGNhbGwuXG4gICAqXG4gICAqIFVzZWQgYnkgdGhlIENsaWVudCB3aGVuIG1ha2luZyBhbiBBUEkgY2FsbC5cbiAgICpcbiAgICogQHBhcmFtICB7T2JqZWN0fSBodHRwX3Jlc3BvbnNlIGEgTm9kZSBodHRwIHJlc3BvbnNlIG9iamVjdFxuICAgKiBAcHJvdGVjdGVkXG4gICAqL1xuXG4gIG9uRXJyb3IoaHR0cF9yZXNwb25zZSkge1xuICAgIGxldCByZXNwb25zZSA9IG5ldyBSZXNwb25zZShodHRwX3Jlc3BvbnNlLCB0aGlzLnJlcXVlc3QpO1xuICAgIHRoaXMub25OZXR3b3JrRXJyb3IocmVzcG9uc2UpKCk7XG4gIH1cblxuICAvLyBQUklWQVRFXG5cblxuICAvKipcbiAgICogV2hlbiB0aGUgY29ubmVjdGlvbiBlbmRzLCBjaGVjayBpZiB0aGUgcmVzcG9uc2UgY2FuIGJlIHBhcnNlZCBvciBub3QgYW5kXG4gICAqIGFjdCBhY2NvcmRpbmdseS5cbiAgICpcbiAgICogQHBhcmFtICB7UmVzcG9uc2V9IHJlc3BvbnNlXG4gICAqL1xuICBvbkVuZChyZXNwb25zZSkge1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICByZXNwb25zZS5wYXJzZSgpO1xuICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MoKSkgeyB0aGlzLm9uU3VjY2VzcyhyZXNwb25zZSk7IH1cbiAgICAgIGVsc2UgeyB0aGlzLm9uRmFpbChyZXNwb25zZSk7ICB9XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGVuIHRoZSByZXNwb25zZSB3YXMgc3VjY2Vzc2Z1bCwgcmVzb2x2ZSB0aGUgcHJvbWlzZSBhbmQgcmV0dXJuIHRoZVxuICAgKiByZXNwb25zZSBvYmplY3RcbiAgICpcbiAgICogQHBhcmFtICB7UmVzcG9uc2V9IHJlc3BvbnNlXG4gICAqL1xuICBvblN1Y2Nlc3MocmVzcG9uc2UpIHtcbiAgICB0aGlzLmxvZyhyZXNwb25zZSk7XG4gICAgdGhpcy5lbWl0dGVyLmVtaXQoJ3Jlc29sdmUnLCByZXNwb25zZSk7XG4gIH1cblxuICAvKipcbiAgICogV2hlbiB0aGUgY29ubmVjdGlvbiB3YXMgbm90IHN1Y2Nlc3NmdWwsIGRldGVybWluZSB0aGUgcmVhc29uIGFuZCByZXNvbHZlXG4gICAqIHRoZSBwcm9taXNlIGFjY29yZGluZ2x5LlxuICAgKlxuICAgKiBAcGFyYW0gIHtSZXNwb25zZX0gcmVzcG9uc2VcbiAgICovXG4gIG9uRmFpbChyZXNwb25zZSkge1xuICAgIGxldCBFcnJvciA9IHRoaXMuZXJyb3JGb3IocmVzcG9uc2UpO1xuICAgIGxldCBlcnJvciA9IG5ldyBFcnJvcihyZXNwb25zZSk7XG4gICAgdGhpcy5sb2cocmVzcG9uc2UsIGVycm9yKTtcbiAgICB0aGlzLmVtaXR0ZXIuZW1pdCgncmVqZWN0JywgZXJyb3IpO1xuICB9XG5cblxuICAvKipcbiAgICogRmluZCB0aGUgcmlnaHQgZXJyb3IgZm9yIHRoZSBnaXZlbiByZXNwb25zZS5cbiAgICpcbiAgICogQHBhcmFtIHtSZXNwb25zZX0gcmVwb25zZVxuICAgKiBAcmV0dXJucyB7UmVzcG9uc2VFcnJvcn1cbiAgICovXG4gIGVycm9yRm9yKHtzdGF0dXNDb2RlLCBwYXJzZWR9KSB7XG4gICAgbGV0IGVycm9yID0gbnVsbDtcbiAgICBpZiAoc3RhdHVzQ29kZSA+PSA1MDApIHsgZXJyb3IgPSBTZXJ2ZXJFcnJvcjsgfVxuICAgIGVsc2UgaWYgKHN0YXR1c0NvZGUgPT09IDQwMSkgeyBlcnJvciA9IEF1dGhlbnRpY2F0aW9uRXJyb3I7IH1cbiAgICBlbHNlIGlmIChzdGF0dXNDb2RlID09PSA0MDQpIHsgZXJyb3IgPSBOb3RGb3VuZEVycm9yOyB9XG4gICAgZWxzZSBpZiAoc3RhdHVzQ29kZSA+PSA0MDApIHsgZXJyb3IgPSBDbGllbnRFcnJvcjsgfVxuICAgIGVsc2UgaWYgKCFwYXJzZWQpIHsgZXJyb3IgPSBQYXJzZXJFcnJvcjsgfVxuICAgIGVsc2UgeyBlcnJvciA9IFVua25vd25FcnJvcjsgfVxuICAgIHJldHVybiBlcnJvcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGVuIHRoZSBjb25uZWN0aW9uIHJhbiBpbnRvIGEgbmV0d29yayBlcnJvciwgcmVqZWN0IHRoZSBwcm9taXNlIHdpdGggYVxuICAgKiBOZXR3b3JrRXJyb3IuXG4gICAqXG4gICAqIEBwYXJhbSAge1Jlc3BvbnNlfSByZXNwb25zZVxuICAgKi9cbiAgb25OZXR3b3JrRXJyb3IocmVzcG9uc2UpIHtcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgcmVzcG9uc2UucGFyc2UoKTtcbiAgICAgIGxldCBlcnJvciA9IG5ldyBOZXR3b3JrRXJyb3IocmVzcG9uc2UpO1xuICAgICAgdGhpcy5sb2cocmVzcG9uc2UsIGVycm9yKTtcbiAgICAgIHRoaXMuZW1pdHRlci5lbWl0KCdyZWplY3QnLCBlcnJvcik7XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2dzIHRoZSByZXNwb25zZSwgd2hlbiBpbiBkZWJ1ZyBtb2RlXG4gICAqXG4gICAqIEBwYXJhbSAge1Jlc3BvbnNlfSByZXNwb25zZSB0aGUgcmVzcG9uc2Ugb2JqZWN0IHRvIGxvZ1xuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgbG9nKHJlc3BvbnNlLCBlcnJvcikge1xuICAgIGlmICh0aGlzLmNsaWVudC5kZWJ1ZygpKSB7XG4gICAgICAvKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAqL1xuICAgICAgdGhpcy5jbGllbnQubG9nZ2VyLmxvZyh1dGlsLmluc3BlY3QocmVzcG9uc2UsIGZhbHNlLCBudWxsKSk7XG4gICAgfVxuICAgIGlmICghdGhpcy5jbGllbnQuZGVidWcoKSAmJiB0aGlzLmNsaWVudC53YXJuKCkgJiYgZXJyb3IpIHtcbiAgICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICovXG4gICAgICB0aGlzLmNsaWVudC5sb2dnZXIubG9nKCdBbWFkZXVzJywgZXJyb3IuY29kZSwgZXJyb3IuZGVzY3JpcHRpb24pO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBMaXN0ZW5lcjtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsSUFBQUEsU0FBQSxHQUFBQyxzQkFBQSxDQUFBQyxPQUFBO0FBQ0EsSUFBQUMsS0FBQSxHQUFBRixzQkFBQSxDQUFBQyxPQUFBO0FBRUEsSUFBQUUsT0FBQSxHQUFBRixPQUFBO0FBUWtCLFNBQUFELHVCQUFBSSxDQUFBLFdBQUFBLENBQUEsSUFBQUEsQ0FBQSxDQUFBQyxVQUFBLEdBQUFELENBQUEsZ0JBQUFBLENBQUE7QUFBQSxTQUFBRSxRQUFBQyxDQUFBLHNDQUFBRCxPQUFBLHdCQUFBRSxNQUFBLHVCQUFBQSxNQUFBLENBQUFDLFFBQUEsYUFBQUYsQ0FBQSxrQkFBQUEsQ0FBQSxnQkFBQUEsQ0FBQSxXQUFBQSxDQUFBLHlCQUFBQyxNQUFBLElBQUFELENBQUEsQ0FBQUcsV0FBQSxLQUFBRixNQUFBLElBQUFELENBQUEsS0FBQUMsTUFBQSxDQUFBRyxTQUFBLHFCQUFBSixDQUFBLEtBQUFELE9BQUEsQ0FBQUMsQ0FBQTtBQUFBLFNBQUFLLGdCQUFBQyxDQUFBLEVBQUFDLENBQUEsVUFBQUQsQ0FBQSxZQUFBQyxDQUFBLGFBQUFDLFNBQUE7QUFBQSxTQUFBQyxrQkFBQVosQ0FBQSxFQUFBYSxDQUFBLGFBQUFDLENBQUEsTUFBQUEsQ0FBQSxHQUFBRCxDQUFBLENBQUFFLE1BQUEsRUFBQUQsQ0FBQSxVQUFBWCxDQUFBLEdBQUFVLENBQUEsQ0FBQUMsQ0FBQSxHQUFBWCxDQUFBLENBQUFhLFVBQUEsR0FBQWIsQ0FBQSxDQUFBYSxVQUFBLFFBQUFiLENBQUEsQ0FBQWMsWUFBQSxrQkFBQWQsQ0FBQSxLQUFBQSxDQUFBLENBQUFlLFFBQUEsUUFBQUMsTUFBQSxDQUFBQyxjQUFBLENBQUFwQixDQUFBLEVBQUFxQixjQUFBLENBQUFsQixDQUFBLENBQUFtQixHQUFBLEdBQUFuQixDQUFBO0FBQUEsU0FBQW9CLGFBQUF2QixDQUFBLEVBQUFhLENBQUEsRUFBQUMsQ0FBQSxXQUFBRCxDQUFBLElBQUFELGlCQUFBLENBQUFaLENBQUEsQ0FBQU8sU0FBQSxFQUFBTSxDQUFBLEdBQUFDLENBQUEsSUFBQUYsaUJBQUEsQ0FBQVosQ0FBQSxFQUFBYyxDQUFBLEdBQUFLLE1BQUEsQ0FBQUMsY0FBQSxDQUFBcEIsQ0FBQSxpQkFBQWtCLFFBQUEsU0FBQWxCLENBQUE7QUFBQSxTQUFBcUIsZUFBQVAsQ0FBQSxRQUFBVSxDQUFBLEdBQUFDLFlBQUEsQ0FBQVgsQ0FBQSxnQ0FBQVosT0FBQSxDQUFBc0IsQ0FBQSxJQUFBQSxDQUFBLEdBQUFBLENBQUE7QUFBQSxTQUFBQyxhQUFBWCxDQUFBLEVBQUFELENBQUEsb0JBQUFYLE9BQUEsQ0FBQVksQ0FBQSxNQUFBQSxDQUFBLFNBQUFBLENBQUEsTUFBQWQsQ0FBQSxHQUFBYyxDQUFBLENBQUFWLE1BQUEsQ0FBQXNCLFdBQUEsa0JBQUExQixDQUFBLFFBQUF3QixDQUFBLEdBQUF4QixDQUFBLENBQUEyQixJQUFBLENBQUFiLENBQUEsRUFBQUQsQ0FBQSxnQ0FBQVgsT0FBQSxDQUFBc0IsQ0FBQSxVQUFBQSxDQUFBLFlBQUFiLFNBQUEseUVBQUFFLENBQUEsR0FBQWUsTUFBQSxHQUFBQyxNQUFBLEVBQUFmLENBQUE7QUFHbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkEsSUFTTWdCLFFBQVE7RUFDWixTQUFBQSxTQUFZQyxPQUFPLEVBQUVDLE9BQU8sRUFBRUMsTUFBTSxFQUFFO0lBQUF6QixlQUFBLE9BQUFzQixRQUFBO0lBQ3BDLElBQUksQ0FBQ0MsT0FBTyxHQUFHQSxPQUFPO0lBQ3RCLElBQUksQ0FBQ0MsT0FBTyxHQUFHQSxPQUFPO0lBQ3RCLElBQUksQ0FBQ0MsTUFBTSxHQUFJQSxNQUFNO0VBQ3ZCOztFQUVBOztFQUdBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQVJFLE9BQUFWLFlBQUEsQ0FBQU8sUUFBQTtJQUFBUixHQUFBO0lBQUFZLEtBQUEsRUFTQSxTQUFBQyxVQUFVQSxDQUFDQyxhQUFhLEVBQUU7TUFDeEIsSUFBSUMsUUFBUSxHQUFHLElBQUlDLG9CQUFRLENBQUNGLGFBQWEsRUFBRSxJQUFJLENBQUNMLE9BQU8sQ0FBQztNQUV4REssYUFBYSxDQUFDRyxFQUFFLENBQUMsTUFBTSxFQUFHRixRQUFRLENBQUNHLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDSixRQUFRLENBQUMsQ0FBQztNQUMzREQsYUFBYSxDQUFDRyxFQUFFLENBQUMsS0FBSyxFQUFJLElBQUksQ0FBQ0csS0FBSyxDQUFDTCxRQUFRLENBQUMsQ0FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO01BQzFETCxhQUFhLENBQUNHLEVBQUUsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDSSxjQUFjLENBQUNOLFFBQVEsQ0FBQyxDQUFDSSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7TUFDbkVMLGFBQWEsQ0FBQ0csRUFBRSxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUNJLGNBQWMsQ0FBQ04sUUFBUSxDQUFDLENBQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNyRTs7SUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBUEU7SUFBQW5CLEdBQUE7SUFBQVksS0FBQSxFQVNBLFNBQUFVLE9BQU9BLENBQUNSLGFBQWEsRUFBRTtNQUNyQixJQUFJQyxRQUFRLEdBQUcsSUFBSUMsb0JBQVEsQ0FBQ0YsYUFBYSxFQUFFLElBQUksQ0FBQ0wsT0FBTyxDQUFDO01BQ3hELElBQUksQ0FBQ1ksY0FBYyxDQUFDTixRQUFRLENBQUMsQ0FBQyxDQUFDO0lBQ2pDOztJQUVBOztJQUdBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUxFO0lBQUFmLEdBQUE7SUFBQVksS0FBQSxFQU1BLFNBQUFRLEtBQUtBLENBQUNMLFFBQVEsRUFBRTtNQUFBLElBQUFRLEtBQUE7TUFDZCxPQUFPLFlBQU07UUFDWFIsUUFBUSxDQUFDUyxLQUFLLENBQUMsQ0FBQztRQUNoQixJQUFJVCxRQUFRLENBQUNVLE9BQU8sQ0FBQyxDQUFDLEVBQUU7VUFBRUYsS0FBSSxDQUFDRyxTQUFTLENBQUNYLFFBQVEsQ0FBQztRQUFFLENBQUMsTUFDaEQ7VUFBRVEsS0FBSSxDQUFDSSxNQUFNLENBQUNaLFFBQVEsQ0FBQztRQUFHO01BQ2pDLENBQUM7SUFDSDs7SUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFMRTtJQUFBZixHQUFBO0lBQUFZLEtBQUEsRUFNQSxTQUFBYyxTQUFTQSxDQUFDWCxRQUFRLEVBQUU7TUFDbEIsSUFBSSxDQUFDYSxHQUFHLENBQUNiLFFBQVEsQ0FBQztNQUNsQixJQUFJLENBQUNMLE9BQU8sQ0FBQ21CLElBQUksQ0FBQyxTQUFTLEVBQUVkLFFBQVEsQ0FBQztJQUN4Qzs7SUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFMRTtJQUFBZixHQUFBO0lBQUFZLEtBQUEsRUFNQSxTQUFBZSxNQUFNQSxDQUFDWixRQUFRLEVBQUU7TUFDZixJQUFJZSxLQUFLLEdBQUcsSUFBSSxDQUFDQyxRQUFRLENBQUNoQixRQUFRLENBQUM7TUFDbkMsSUFBSWlCLEtBQUssR0FBRyxJQUFJRixLQUFLLENBQUNmLFFBQVEsQ0FBQztNQUMvQixJQUFJLENBQUNhLEdBQUcsQ0FBQ2IsUUFBUSxFQUFFaUIsS0FBSyxDQUFDO01BQ3pCLElBQUksQ0FBQ3RCLE9BQU8sQ0FBQ21CLElBQUksQ0FBQyxRQUFRLEVBQUVHLEtBQUssQ0FBQztJQUNwQzs7SUFHQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFMRTtJQUFBaEMsR0FBQTtJQUFBWSxLQUFBLEVBTUEsU0FBQW1CLFFBQVFBLENBQUFFLElBQUEsRUFBdUI7TUFBQSxJQUFyQkMsVUFBVSxHQUFBRCxJQUFBLENBQVZDLFVBQVU7UUFBRUMsTUFBTSxHQUFBRixJQUFBLENBQU5FLE1BQU07TUFDMUIsSUFBSUgsS0FBSyxHQUFHLElBQUk7TUFDaEIsSUFBSUUsVUFBVSxJQUFJLEdBQUcsRUFBRTtRQUFFRixLQUFLLEdBQUdJLG1CQUFXO01BQUUsQ0FBQyxNQUMxQyxJQUFJRixVQUFVLEtBQUssR0FBRyxFQUFFO1FBQUVGLEtBQUssR0FBR0ssMkJBQW1CO01BQUUsQ0FBQyxNQUN4RCxJQUFJSCxVQUFVLEtBQUssR0FBRyxFQUFFO1FBQUVGLEtBQUssR0FBR00scUJBQWE7TUFBRSxDQUFDLE1BQ2xELElBQUlKLFVBQVUsSUFBSSxHQUFHLEVBQUU7UUFBRUYsS0FBSyxHQUFHTyxtQkFBVztNQUFFLENBQUMsTUFDL0MsSUFBSSxDQUFDSixNQUFNLEVBQUU7UUFBRUgsS0FBSyxHQUFHUSxtQkFBVztNQUFFLENBQUMsTUFDckM7UUFBRVIsS0FBSyxHQUFHUyxvQkFBWTtNQUFFO01BQzdCLE9BQU9ULEtBQUs7SUFDZDs7SUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFMRTtJQUFBaEMsR0FBQTtJQUFBWSxLQUFBLEVBTUEsU0FBQVMsY0FBY0EsQ0FBQ04sUUFBUSxFQUFFO01BQUEsSUFBQTJCLE1BQUE7TUFDdkIsT0FBTyxZQUFNO1FBQ1gzQixRQUFRLENBQUNTLEtBQUssQ0FBQyxDQUFDO1FBQ2hCLElBQUlRLEtBQUssR0FBRyxJQUFJVyxvQkFBWSxDQUFDNUIsUUFBUSxDQUFDO1FBQ3RDMkIsTUFBSSxDQUFDZCxHQUFHLENBQUNiLFFBQVEsRUFBRWlCLEtBQUssQ0FBQztRQUN6QlUsTUFBSSxDQUFDaEMsT0FBTyxDQUFDbUIsSUFBSSxDQUFDLFFBQVEsRUFBRUcsS0FBSyxDQUFDO01BQ3BDLENBQUM7SUFDSDs7SUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFMRTtJQUFBaEMsR0FBQTtJQUFBWSxLQUFBLEVBTUEsU0FBQWdCLEdBQUdBLENBQUNiLFFBQVEsRUFBRWlCLEtBQUssRUFBRTtNQUNuQixJQUFJLElBQUksQ0FBQ3JCLE1BQU0sQ0FBQ2lDLEtBQUssQ0FBQyxDQUFDLEVBQUU7UUFDdkI7UUFDQSxJQUFJLENBQUNqQyxNQUFNLENBQUNrQyxNQUFNLENBQUNqQixHQUFHLENBQUNrQixnQkFBSSxDQUFDQyxPQUFPLENBQUNoQyxRQUFRLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO01BQzdEO01BQ0EsSUFBSSxDQUFDLElBQUksQ0FBQ0osTUFBTSxDQUFDaUMsS0FBSyxDQUFDLENBQUMsSUFBSSxJQUFJLENBQUNqQyxNQUFNLENBQUNxQyxJQUFJLENBQUMsQ0FBQyxJQUFJaEIsS0FBSyxFQUFFO1FBQ3ZEO1FBQ0EsSUFBSSxDQUFDckIsTUFBTSxDQUFDa0MsTUFBTSxDQUFDakIsR0FBRyxDQUFDLFNBQVMsRUFBRUksS0FBSyxDQUFDaUIsSUFBSSxFQUFFakIsS0FBSyxDQUFDa0IsV0FBVyxDQUFDO01BQ2xFO0lBQ0Y7RUFBQztBQUFBO0FBQUEsSUFBQUMsUUFBQSxHQUFBQyxPQUFBLGNBR1k1QyxRQUFRO0FBQUE2QyxNQUFBLENBQUFELE9BQUEsR0FBQUEsT0FBQSxDQUFBRSxPQUFBIiwiaWdub3JlTGlzdCI6W119
}),
"[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/client/request.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _qs = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/CLI/Mixpal/my-app/node_modules/qs/lib/index.js [app-route] (ecmascript)"));
function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        "default": e
    };
}
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
/**
 * A Request object containing all the compiled information about this request.
 *
 * @property {string} host the host used for this API call
 * @property {number} port the port for this API call. Standard set to 443.
 * @property {boolean} ssl wether this API call uses SSL
 * @property {string} scheme the scheme inferred from the SSL state
 * @property {string} verb the HTTP method, for example `GET` or `POST`
 * @property {string} path the full path of the API endpoint
 * @property {Object} params the parameters to pass in the query or body
 * @property {string} queryPath the path and query string used for the API call
 * @property {string} bearerToken the authentication token
 * @property {string} clientVersion the version of the Amadeus library
 * @property {string} languageVersion the version of Node used
 * @property {string} appId the custom ID of the application using this library
 * @property {string} appVersion the custom version of the application
 *  using this library
 * @property {Object} headers the request headers
 *
 * @param {Object} options
 */ var Request = /*#__PURE__*/ function() {
    function Request(options) {
        _classCallCheck(this, Request);
        this.host = options.host;
        this.port = options.port;
        this.ssl = options.ssl;
        this.scheme = this.ssl ? 'https' : 'http';
        this.verb = options.verb;
        this.path = options.path;
        this.params = options.params;
        this.queryPath = this.fullQueryPath();
        this.bearerToken = options.bearerToken;
        this.clientVersion = options.clientVersion;
        this.languageVersion = options.languageVersion;
        this.appId = options.appId;
        this.appVersion = options.appVersion;
        this.headers = {
            'User-Agent': this.userAgent(),
            'Accept': 'application/json, application/vnd.amadeus+json'
        };
        this.ListHTTPOverride = [
            '/v2/shopping/flight-offers',
            '/v1/shopping/seatmaps',
            '/v1/shopping/availability/flight-availabilities',
            '/v2/shopping/flight-offers/prediction',
            '/v1/shopping/flight-offers/pricing',
            '/v1/shopping/flight-offers/upselling'
        ];
        this.addAuthorizationHeader();
        this.addContentTypeHeader();
        this.addHTTPOverrideHeader();
    }
    // PROTECTED
    /**
   * Compiles the options for the HTTP request.
   *
   * Used by Client.execute when executing this request against the server.
   *
   * @return {Object} an associative array of options to be passed into the
   *  Client.execute function
   * @protected
   */ return _createClass(Request, [
        {
            key: "options",
            value: function options() {
                var options = {
                    'host': this.host,
                    'port': this.port,
                    'protocol': "".concat(this.scheme, ":"),
                    'path': this.queryPath,
                    'method': this.verb,
                    'headers': this.headers
                };
                return options;
            }
        },
        {
            key: "body",
            value: function body() {
                if (this.verb !== 'POST') {
                    return '';
                } else {
                    if (!this.bearerToken) {
                        return _qs["default"].stringify(this.params);
                    }
                    return this.params;
                }
            }
        },
        {
            key: "userAgent",
            value: function userAgent() {
                var userAgent = "amadeus-node/".concat(this.clientVersion, " node/").concat(this.languageVersion);
                if (!this.appId) {
                    return userAgent;
                }
                return "".concat(userAgent, " ").concat(this.appId, "/").concat(this.appVersion);
            }
        },
        {
            key: "fullQueryPath",
            value: function fullQueryPath() {
                if (this.verb === 'POST') {
                    return this.path;
                } else {
                    return "".concat(this.path, "?").concat(_qs["default"].stringify(this.params));
                }
            }
        },
        {
            key: "addAuthorizationHeader",
            value: function addAuthorizationHeader() {
                if (!this.bearerToken) {
                    return;
                }
                this.headers['Authorization'] = "Bearer ".concat(this.bearerToken);
            }
        },
        {
            key: "addContentTypeHeader",
            value: function addContentTypeHeader() {
                if (this.verb === 'POST' && !this.bearerToken) {
                    this.headers['Content-Type'] = 'application/x-www-form-urlencoded';
                } else {
                    this.headers['Content-Type'] = 'application/vnd.amadeus+json';
                }
                return;
            }
        },
        {
            key: "addHTTPOverrideHeader",
            value: function addHTTPOverrideHeader() {
                if (this.verb === 'POST' && this.ListHTTPOverride.includes(this.path)) {
                    this.headers['X-HTTP-Method-Override'] = 'GET';
                }
                return;
            }
        }
    ]);
}();
var _default = exports["default"] = Request;
module.exports = exports.default; //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfcXMiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsImUiLCJfX2VzTW9kdWxlIiwiX3R5cGVvZiIsIm8iLCJTeW1ib2wiLCJpdGVyYXRvciIsImNvbnN0cnVjdG9yIiwicHJvdG90eXBlIiwiX2NsYXNzQ2FsbENoZWNrIiwiYSIsIm4iLCJUeXBlRXJyb3IiLCJfZGVmaW5lUHJvcGVydGllcyIsInIiLCJ0IiwibGVuZ3RoIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfdG9Qcm9wZXJ0eUtleSIsImtleSIsIl9jcmVhdGVDbGFzcyIsImkiLCJfdG9QcmltaXRpdmUiLCJ0b1ByaW1pdGl2ZSIsImNhbGwiLCJTdHJpbmciLCJOdW1iZXIiLCJSZXF1ZXN0Iiwib3B0aW9ucyIsImhvc3QiLCJwb3J0Iiwic3NsIiwic2NoZW1lIiwidmVyYiIsInBhdGgiLCJwYXJhbXMiLCJxdWVyeVBhdGgiLCJmdWxsUXVlcnlQYXRoIiwiYmVhcmVyVG9rZW4iLCJjbGllbnRWZXJzaW9uIiwibGFuZ3VhZ2VWZXJzaW9uIiwiYXBwSWQiLCJhcHBWZXJzaW9uIiwiaGVhZGVycyIsInVzZXJBZ2VudCIsIkxpc3RIVFRQT3ZlcnJpZGUiLCJhZGRBdXRob3JpemF0aW9uSGVhZGVyIiwiYWRkQ29udGVudFR5cGVIZWFkZXIiLCJhZGRIVFRQT3ZlcnJpZGVIZWFkZXIiLCJ2YWx1ZSIsImNvbmNhdCIsImJvZHkiLCJxcyIsInN0cmluZ2lmeSIsImluY2x1ZGVzIiwiX2RlZmF1bHQiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmYXVsdCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hbWFkZXVzL2NsaWVudC9yZXF1ZXN0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBxcyBmcm9tICdxcyc7XG5cbi8qKlxuICogQSBSZXF1ZXN0IG9iamVjdCBjb250YWluaW5nIGFsbCB0aGUgY29tcGlsZWQgaW5mb3JtYXRpb24gYWJvdXQgdGhpcyByZXF1ZXN0LlxuICpcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBob3N0IHRoZSBob3N0IHVzZWQgZm9yIHRoaXMgQVBJIGNhbGxcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBwb3J0IHRoZSBwb3J0IGZvciB0aGlzIEFQSSBjYWxsLiBTdGFuZGFyZCBzZXQgdG8gNDQzLlxuICogQHByb3BlcnR5IHtib29sZWFufSBzc2wgd2V0aGVyIHRoaXMgQVBJIGNhbGwgdXNlcyBTU0xcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBzY2hlbWUgdGhlIHNjaGVtZSBpbmZlcnJlZCBmcm9tIHRoZSBTU0wgc3RhdGVcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSB2ZXJiIHRoZSBIVFRQIG1ldGhvZCwgZm9yIGV4YW1wbGUgYEdFVGAgb3IgYFBPU1RgXG4gKiBAcHJvcGVydHkge3N0cmluZ30gcGF0aCB0aGUgZnVsbCBwYXRoIG9mIHRoZSBBUEkgZW5kcG9pbnRcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBwYXJhbXMgdGhlIHBhcmFtZXRlcnMgdG8gcGFzcyBpbiB0aGUgcXVlcnkgb3IgYm9keVxuICogQHByb3BlcnR5IHtzdHJpbmd9IHF1ZXJ5UGF0aCB0aGUgcGF0aCBhbmQgcXVlcnkgc3RyaW5nIHVzZWQgZm9yIHRoZSBBUEkgY2FsbFxuICogQHByb3BlcnR5IHtzdHJpbmd9IGJlYXJlclRva2VuIHRoZSBhdXRoZW50aWNhdGlvbiB0b2tlblxuICogQHByb3BlcnR5IHtzdHJpbmd9IGNsaWVudFZlcnNpb24gdGhlIHZlcnNpb24gb2YgdGhlIEFtYWRldXMgbGlicmFyeVxuICogQHByb3BlcnR5IHtzdHJpbmd9IGxhbmd1YWdlVmVyc2lvbiB0aGUgdmVyc2lvbiBvZiBOb2RlIHVzZWRcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBhcHBJZCB0aGUgY3VzdG9tIElEIG9mIHRoZSBhcHBsaWNhdGlvbiB1c2luZyB0aGlzIGxpYnJhcnlcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBhcHBWZXJzaW9uIHRoZSBjdXN0b20gdmVyc2lvbiBvZiB0aGUgYXBwbGljYXRpb25cbiAqICB1c2luZyB0aGlzIGxpYnJhcnlcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBoZWFkZXJzIHRoZSByZXF1ZXN0IGhlYWRlcnNcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9uc1xuICovXG5jbGFzcyBSZXF1ZXN0IHtcbiAgY29uc3RydWN0b3Iob3B0aW9ucykge1xuICAgIHRoaXMuaG9zdCAgICAgICAgICAgID0gb3B0aW9ucy5ob3N0O1xuICAgIHRoaXMucG9ydCAgICAgICAgICAgID0gb3B0aW9ucy5wb3J0O1xuICAgIHRoaXMuc3NsICAgICAgICAgICAgID0gb3B0aW9ucy5zc2w7XG4gICAgdGhpcy5zY2hlbWUgICAgICAgICAgPSB0aGlzLnNzbCA/ICdodHRwcycgOiAnaHR0cCc7XG4gICAgdGhpcy52ZXJiICAgICAgICAgICAgPSBvcHRpb25zLnZlcmI7XG4gICAgdGhpcy5wYXRoICAgICAgICAgICAgPSBvcHRpb25zLnBhdGg7XG4gICAgdGhpcy5wYXJhbXMgICAgICAgICAgPSBvcHRpb25zLnBhcmFtcztcbiAgICB0aGlzLnF1ZXJ5UGF0aCAgICAgICA9IHRoaXMuZnVsbFF1ZXJ5UGF0aCgpO1xuICAgIHRoaXMuYmVhcmVyVG9rZW4gICAgID0gb3B0aW9ucy5iZWFyZXJUb2tlbjtcbiAgICB0aGlzLmNsaWVudFZlcnNpb24gICA9IG9wdGlvbnMuY2xpZW50VmVyc2lvbjtcbiAgICB0aGlzLmxhbmd1YWdlVmVyc2lvbiA9IG9wdGlvbnMubGFuZ3VhZ2VWZXJzaW9uO1xuICAgIHRoaXMuYXBwSWQgICAgICAgICAgID0gb3B0aW9ucy5hcHBJZDtcbiAgICB0aGlzLmFwcFZlcnNpb24gICAgICA9IG9wdGlvbnMuYXBwVmVyc2lvbjtcbiAgICB0aGlzLmhlYWRlcnMgICAgICAgICA9IHtcbiAgICAgICdVc2VyLUFnZW50JyA6IHRoaXMudXNlckFnZW50KCksXG4gICAgICAnQWNjZXB0JyA6ICdhcHBsaWNhdGlvbi9qc29uLCBhcHBsaWNhdGlvbi92bmQuYW1hZGV1cytqc29uJ1xuICAgIH07XG4gICAgdGhpcy5MaXN0SFRUUE92ZXJyaWRlPSBbXG4gICAgICAnL3YyL3Nob3BwaW5nL2ZsaWdodC1vZmZlcnMnLFxuICAgICAgJy92MS9zaG9wcGluZy9zZWF0bWFwcycsXG4gICAgICAnL3YxL3Nob3BwaW5nL2F2YWlsYWJpbGl0eS9mbGlnaHQtYXZhaWxhYmlsaXRpZXMnLFxuICAgICAgJy92Mi9zaG9wcGluZy9mbGlnaHQtb2ZmZXJzL3ByZWRpY3Rpb24nLFxuICAgICAgJy92MS9zaG9wcGluZy9mbGlnaHQtb2ZmZXJzL3ByaWNpbmcnLFxuICAgICAgJy92MS9zaG9wcGluZy9mbGlnaHQtb2ZmZXJzL3Vwc2VsbGluZydcbiAgICBdO1xuICAgIHRoaXMuYWRkQXV0aG9yaXphdGlvbkhlYWRlcigpO1xuICAgIHRoaXMuYWRkQ29udGVudFR5cGVIZWFkZXIoKTtcbiAgICB0aGlzLmFkZEhUVFBPdmVycmlkZUhlYWRlcigpO1xuICB9XG5cbiAgLy8gUFJPVEVDVEVEXG5cbiAgLyoqXG4gICAqIENvbXBpbGVzIHRoZSBvcHRpb25zIGZvciB0aGUgSFRUUCByZXF1ZXN0LlxuICAgKlxuICAgKiBVc2VkIGJ5IENsaWVudC5leGVjdXRlIHdoZW4gZXhlY3V0aW5nIHRoaXMgcmVxdWVzdCBhZ2FpbnN0IHRoZSBzZXJ2ZXIuXG4gICAqXG4gICAqIEByZXR1cm4ge09iamVjdH0gYW4gYXNzb2NpYXRpdmUgYXJyYXkgb2Ygb3B0aW9ucyB0byBiZSBwYXNzZWQgaW50byB0aGVcbiAgICogIENsaWVudC5leGVjdXRlIGZ1bmN0aW9uXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIG9wdGlvbnMoKSB7XG4gICAgbGV0IG9wdGlvbnMgPSB7XG4gICAgICAnaG9zdCcgOiB0aGlzLmhvc3QsXG4gICAgICAncG9ydCcgOiB0aGlzLnBvcnQsXG4gICAgICAncHJvdG9jb2wnIDogYCR7dGhpcy5zY2hlbWV9OmAsXG4gICAgICAncGF0aCcgOiB0aGlzLnF1ZXJ5UGF0aCxcbiAgICAgICdtZXRob2QnIDogdGhpcy52ZXJiLFxuICAgICAgJ2hlYWRlcnMnIDogdGhpcy5oZWFkZXJzXG4gICAgfTtcbiAgICByZXR1cm4gb3B0aW9ucztcbiAgfVxuXG4gIC8qKlxuICAgKiBDcmVhdHMgdGhlIGJvZHkgZm9yIHRoZSBBUEkgY2FsLCBzZXJpYWxpemluZyB0aGUgcGFyYW1zIGlmIHRoZSB2ZXJiIGlzIFBPU1QuXG4gICAqXG4gICAqIEByZXR1cm4ge3N0cmluZ30gdGhlIHNlcmlhbGl6ZWQgcGFyYW1zXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIGJvZHkoKSB7XG4gICAgaWYgKHRoaXMudmVyYiAhPT0gJ1BPU1QnKSB7IHJldHVybiAnJzsgfVxuICAgIGVsc2Uge1xuICAgICAgaWYgKCF0aGlzLmJlYXJlclRva2VuKSB7XG4gICAgICAgIHJldHVybiBxcy5zdHJpbmdpZnkodGhpcy5wYXJhbXMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMucGFyYW1zO1xuICAgIH1cbiAgfVxuXG4gIC8vIFBSSVZBVEVcblxuICAvKipcbiAgICogQnVpbGQgdXAgdGhlIGN1c3RvbSBVc2VyIEFnZW50XG4gICAqXG4gICAqIEByZXR1cm4ge3N0cmluZ30gYSB1c2VyIGFnZW50IGluIHRoZSBmb3JtYXQgXCJsaWJyYXJ5L3ZlcnNpb24gbGFuZ3VhZ2UvdmVyc2lvbiBhcHAvdmVyc2lvblwiXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICB1c2VyQWdlbnQoKSB7XG4gICAgbGV0IHVzZXJBZ2VudCA9IGBhbWFkZXVzLW5vZGUvJHt0aGlzLmNsaWVudFZlcnNpb259IG5vZGUvJHt0aGlzLmxhbmd1YWdlVmVyc2lvbn1gO1xuICAgIGlmICghdGhpcy5hcHBJZCkgeyByZXR1cm4gdXNlckFnZW50OyB9XG4gICAgcmV0dXJuIGAke3VzZXJBZ2VudH0gJHt0aGlzLmFwcElkfS8ke3RoaXMuYXBwVmVyc2lvbn1gO1xuICB9XG5cbiAgLyoqXG4gICAqIEJ1aWxkIHRoZSBmdWxsIHF1ZXJ5IHBhdGgsIGNvbWJpbmluZyB0aGUgcGF0aCB3aXRoIHRoZSBxdWVyeSBwYXJhbXMgaWYgdGhlXG4gICAqIHZlcmIgaXMgJ0dFVCcuIEZvciBleGFtcGxlOiAnL2Zvby9iYXI/YmF6PXF1eCdcbiAgICpcbiAgICogQHJldHVybiB7c3RyaW5nfSB0aGUgcGF0aCBhbmQgcGFyYW1zIGNvbWJpbmVkIGludG8gb25lIHN0cmluZy5cbiAgICogQHByaXZhdGVcbiAgICovXG4gIGZ1bGxRdWVyeVBhdGgoKSB7XG4gICAgaWYgKHRoaXMudmVyYiA9PT0gJ1BPU1QnKSB7IHJldHVybiB0aGlzLnBhdGg7IH1cbiAgICBlbHNlIHsgcmV0dXJuIGAke3RoaXMucGF0aH0/JHtxcy5zdHJpbmdpZnkodGhpcy5wYXJhbXMpfWA7IH1cbiAgfVxuXG4gIC8qKlxuICAgKiBBZGRzIGFuIEF1dGhvcml6YXRpb24gaGVhZGVyIGlmIHRoZSBCZWFyZXJUb2tlbiBpcyBwcmVzZW50XG4gICAqXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBhZGRBdXRob3JpemF0aW9uSGVhZGVyKCkge1xuICAgIGlmICghdGhpcy5iZWFyZXJUb2tlbikgeyByZXR1cm47IH1cbiAgICB0aGlzLmhlYWRlcnNbJ0F1dGhvcml6YXRpb24nXSA9IGBCZWFyZXIgJHt0aGlzLmJlYXJlclRva2VufWA7XG4gIH1cblxuICAvKipcbiAgICogQWRkcyBhbiBDb250ZW50LVR5cGUgaGVhZGVyIGlmIHRoZSBIVFRQIG1ldGhvZCBlcXVhbHMgUE9TVFxuICAgKlxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgYWRkQ29udGVudFR5cGVIZWFkZXIoKSB7XG4gICAgaWYgKHRoaXMudmVyYiA9PT0gJ1BPU1QnICYmICF0aGlzLmJlYXJlclRva2VuKSB7XG4gICAgICB0aGlzLmhlYWRlcnNbJ0NvbnRlbnQtVHlwZSddID0gJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZCc7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuaGVhZGVyc1snQ29udGVudC1UeXBlJ10gPSAnYXBwbGljYXRpb24vdm5kLmFtYWRldXMranNvbic7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAqIEFkZHMgSFRUUE92ZXJyaWRlIG1ldGhvZCBpZiBpdCBpcyByZXF1aXJlZFxuICAqXG4gICogIEBwcml2YXRlXG4gICovXG4gIGFkZEhUVFBPdmVycmlkZUhlYWRlcigpIHtcbiAgICBpZiAodGhpcy52ZXJiID09PSAnUE9TVCcgJiYgdGhpcy5MaXN0SFRUUE92ZXJyaWRlLmluY2x1ZGVzKHRoaXMucGF0aCkpIHtcbiAgICAgIHRoaXMuaGVhZGVyc1snWC1IVFRQLU1ldGhvZC1PdmVycmlkZSddID0gJ0dFVCc7XG4gICAgfVxuICAgIHJldHVybjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBSZXF1ZXN0O1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxJQUFBQSxHQUFBLEdBQUFDLHNCQUFBLENBQUFDLE9BQUE7QUFBb0IsU0FBQUQsdUJBQUFFLENBQUEsV0FBQUEsQ0FBQSxJQUFBQSxDQUFBLENBQUFDLFVBQUEsR0FBQUQsQ0FBQSxnQkFBQUEsQ0FBQTtBQUFBLFNBQUFFLFFBQUFDLENBQUEsc0NBQUFELE9BQUEsd0JBQUFFLE1BQUEsdUJBQUFBLE1BQUEsQ0FBQUMsUUFBQSxhQUFBRixDQUFBLGtCQUFBQSxDQUFBLGdCQUFBQSxDQUFBLFdBQUFBLENBQUEseUJBQUFDLE1BQUEsSUFBQUQsQ0FBQSxDQUFBRyxXQUFBLEtBQUFGLE1BQUEsSUFBQUQsQ0FBQSxLQUFBQyxNQUFBLENBQUFHLFNBQUEscUJBQUFKLENBQUEsS0FBQUQsT0FBQSxDQUFBQyxDQUFBO0FBQUEsU0FBQUssZ0JBQUFDLENBQUEsRUFBQUMsQ0FBQSxVQUFBRCxDQUFBLFlBQUFDLENBQUEsYUFBQUMsU0FBQTtBQUFBLFNBQUFDLGtCQUFBWixDQUFBLEVBQUFhLENBQUEsYUFBQUMsQ0FBQSxNQUFBQSxDQUFBLEdBQUFELENBQUEsQ0FBQUUsTUFBQSxFQUFBRCxDQUFBLFVBQUFY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
}),
"[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/client/validator.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _https = _interopRequireDefault(__turbopack_context__.r("[externals]/https [external] (https, cjs)"));
var _http = _interopRequireDefault(__turbopack_context__.r("[externals]/http [external] (http, cjs)"));
function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        "default": e
    };
}
function _callSuper(t, o, e) {
    return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
}
function _possibleConstructorReturn(t, e) {
    if (e && ("object" == _typeof(e) || "function" == typeof e)) return e;
    if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
    return _assertThisInitialized(t);
}
function _assertThisInitialized(e) {
    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return e;
}
function _inherits(t, e) {
    if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
    t.prototype = Object.create(e && e.prototype, {
        constructor: {
            value: t,
            writable: !0,
            configurable: !0
        }
    }), Object.defineProperty(t, "prototype", {
        writable: !1
    }), e && _setPrototypeOf(t, e);
}
function _wrapNativeSuper(t) {
    var r = "function" == typeof Map ? new Map() : void 0;
    return _wrapNativeSuper = function _wrapNativeSuper(t) {
        if (null === t || !_isNativeFunction(t)) return t;
        if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function");
        if (void 0 !== r) {
            if (r.has(t)) return r.get(t);
            r.set(t, Wrapper);
        }
        function Wrapper() {
            return _construct(t, arguments, _getPrototypeOf(this).constructor);
        }
        return Wrapper.prototype = Object.create(t.prototype, {
            constructor: {
                value: Wrapper,
                enumerable: !1,
                writable: !0,
                configurable: !0
            }
        }), _setPrototypeOf(Wrapper, t);
    }, _wrapNativeSuper(t);
}
function _construct(t, e, r) {
    if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
    var o = [
        null
    ];
    o.push.apply(o, e);
    var p = new (t.bind.apply(t, o))();
    return r && _setPrototypeOf(p, r.prototype), p;
}
function _isNativeReflectConstruct() {
    try {
        var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {}));
    } catch (t) {}
    return (_isNativeReflectConstruct = function _isNativeReflectConstruct() {
        return !!t;
    })();
}
function _isNativeFunction(t) {
    try {
        return -1 !== Function.toString.call(t).indexOf("[native code]");
    } catch (n) {
        return "function" == typeof t;
    }
}
function _setPrototypeOf(t, e) {
    return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(t, e) {
        return t.__proto__ = e, t;
    }, _setPrototypeOf(t, e);
}
function _getPrototypeOf(t) {
    return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
        return t.__proto__ || Object.getPrototypeOf(t);
    }, _getPrototypeOf(t);
}
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
var HOSTS = {
    'test': 'test.api.amadeus.com',
    'production': 'api.amadeus.com'
};
var RECOGNIZED_OPTIONS = [
    'clientId',
    'clientSecret',
    'logger',
    'logLevel',
    'hostname',
    'host',
    'customAppId',
    'customAppVersion',
    'http',
    'ssl',
    'port'
];
/**
 * Helper class for validating parameters
 * @protected
 */ var Validator = /*#__PURE__*/ function() {
    function Validator() {
        _classCallCheck(this, Validator);
    }
    return _createClass(Validator, [
        {
            key: "validateAndInitialize",
            value: /**
     * Initialise the client's default value, ensuring the required values are
     * present
     *
     * @param  {Client} client the client object to set the defaults for
     * @param  {Object} options the associative array of options passed to the
     *  client on initialization
     */ function validateAndInitialize(client, options) {
                this.initializeClientCredentials(client, options);
                this.initializeLogger(client, options);
                this.initializeHost(client, options);
                this.initializeCustomApp(client, options);
                this.initializeHttp(client, options);
                this.warnOnUnrecognizedOptions(options, client, RECOGNIZED_OPTIONS);
            }
        },
        {
            key: "initializeClientCredentials",
            value: function initializeClientCredentials(client, options) {
                client.clientId = this.initRequired('clientId', options);
                client.clientSecret = this.initRequired('clientSecret', options);
            }
        },
        {
            key: "initializeLogger",
            value: function initializeLogger(client, options) {
                client.logger = this.initOptional('logger', options, console);
                client.logLevel = this.initOptional('logLevel', options, 'silent');
            }
        },
        {
            key: "initializeHost",
            value: function initializeHost(client, options) {
                var hostname = this.initOptional('hostname', options, 'test');
                client.host = this.initOptional('host', options, HOSTS[hostname]);
                client.port = this.initOptional('port', options, 443);
                client.ssl = this.initOptional('ssl', options, true);
            }
        },
        {
            key: "initializeCustomApp",
            value: function initializeCustomApp(client, options) {
                client.customAppId = this.initOptional('customAppId', options);
                client.customAppVersion = this.initOptional('customAppVersion', options);
            }
        },
        {
            key: "initializeHttp",
            value: function initializeHttp(client, options) {
                var network = client.ssl ? _https["default"] : _http["default"];
                client.http = this.initOptional('http', options, network);
            }
        },
        {
            key: "initRequired",
            value: function initRequired(key, options) {
                var result = this.initOptional(key, options);
                if (!result) throw new ArgumentError("Missing required argument: ".concat(key));
                return result;
            }
        },
        {
            key: "initOptional",
            value: function initOptional(key, options) {
                var fallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
                //Env variables names expected to be in SNAKE_CASE and uppercase
                var envKey = "AMADEUS_".concat(key.replace(/[A-Z]/g, function(c) {
                    return "_".concat(c.toLowerCase());
                }).toUpperCase());
                var value = options[key] || process.env[envKey] || fallback;
                return value;
            }
        },
        {
            key: "warnOnUnrecognizedOptions",
            value: function warnOnUnrecognizedOptions(options, client, recognizedOptions) {
                Object.keys(options).forEach(function(key) {
                    if (recognizedOptions.indexOf(key) === -1 && client.warn()) {
                        client.logger.log("Unrecognized option: ".concat(key));
                    }
                });
                return null;
            }
        }
    ]);
}(); // PRIVATE
var ArgumentError = /*#__PURE__*/ function(_Error) {
    function ArgumentError(message) {
        var _this;
        _classCallCheck(this, ArgumentError);
        _this = _callSuper(this, ArgumentError, [
            message
        ]);
        _this.name = 'ArgumentError';
        return _this;
    }
    _inherits(ArgumentError, _Error);
    return _createClass(ArgumentError);
}(/*#__PURE__*/ _wrapNativeSuper(Error));
var _default = exports["default"] = Validator;
module.exports = exports.default; //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfaHR0cHMiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9odHRwIiwiZSIsIl9fZXNNb2R1bGUiLCJfY2FsbFN1cGVyIiwidCIsIm8iLCJfZ2V0UHJvdG90eXBlT2YiLCJfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybiIsIl9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QiLCJSZWZsZWN0IiwiY29uc3RydWN0IiwiY29uc3RydWN0b3IiLCJhcHBseSIsIl90eXBlb2YiLCJUeXBlRXJyb3IiLCJfYXNzZXJ0VGhpc0luaXRpYWxpemVkIiwiUmVmZXJlbmNlRXJyb3IiLCJfaW5oZXJpdHMiLCJwcm90b3R5cGUiLCJPYmplY3QiLCJjcmVhdGUiLCJ2YWx1ZSIsIndyaXRhYmxlIiwiY29uZmlndXJhYmxlIiwiZGVmaW5lUHJvcGVydHkiLCJfc2V0UHJvdG90eXBlT2YiLCJfd3JhcE5hdGl2ZVN1cGVyIiwiciIsIk1hcCIsIl9pc05hdGl2ZUZ1bmN0aW9uIiwiaGFzIiwiZ2V0Iiwic2V0IiwiV3JhcHBlciIsIl9jb25zdHJ1Y3QiLCJhcmd1bWVudHMiLCJlbnVtZXJhYmxlIiwicHVzaCIsInAiLCJiaW5kIiwiQm9vbGVhbiIsInZhbHVlT2YiLCJjYWxsIiwiRnVuY3Rpb24iLCJ0b1N0cmluZyIsImluZGV4T2YiLCJuIiwic2V0UHJvdG90eXBlT2YiLCJfX3Byb3RvX18iLCJnZXRQcm90b3R5cGVPZiIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiX2NsYXNzQ2FsbENoZWNrIiwiYSIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwibGVuZ3RoIiwiX3RvUHJvcGVydHlLZXkiLCJrZXkiLCJfY3JlYXRlQ2xhc3MiLCJpIiwiX3RvUHJpbWl0aXZlIiwidG9QcmltaXRpdmUiLCJTdHJpbmciLCJOdW1iZXIiLCJIT1NUUyIsIlJFQ09HTklaRURfT1BUSU9OUyIsIlZhbGlkYXRvciIsInZhbGlkYXRlQW5kSW5pdGlhbGl6ZSIsImNsaWVudCIsIm9wdGlvbnMiLCJpbml0aWFsaXplQ2xpZW50Q3JlZGVudGlhbHMiLCJpbml0aWFsaXplTG9nZ2VyIiwiaW5pdGlhbGl6ZUhvc3QiLCJpbml0aWFsaXplQ3VzdG9tQXBwIiwiaW5pdGlhbGl6ZUh0dHAiLCJ3YXJuT25VbnJlY29nbml6ZWRPcHRpb25zIiwiY2xpZW50SWQiLCJpbml0UmVxdWlyZWQiLCJjbGllbnRTZWNyZXQiLCJsb2dnZXIiLCJpbml0T3B0aW9uYWwiLCJjb25zb2xlIiwibG9nTGV2ZWwiLCJob3N0bmFtZSIsImhvc3QiLCJwb3J0Iiwic3NsIiwiY3VzdG9tQXBwSWQiLCJjdXN0b21BcHBWZXJzaW9uIiwibmV0d29yayIsImh0dHBzIiwiaHR0cCIsInJlc3VsdCIsIkFyZ3VtZW50RXJyb3IiLCJjb25jYXQiLCJmYWxsYmFjayIsInVuZGVmaW5lZCIsImVudktleSIsInJlcGxhY2UiLCJjIiwidG9Mb3dlckNhc2UiLCJ0b1VwcGVyQ2FzZSIsInByb2Nlc3MiLCJlbnYiLCJyZWNvZ25pemVkT3B0aW9ucyIsImtleXMiLCJmb3JFYWNoIiwid2FybiIsImxvZyIsIl9FcnJvciIsIm1lc3NhZ2UiLCJfdGhpcyIsIm5hbWUiLCJFcnJvciIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmF1bHQiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYW1hZGV1cy9jbGllbnQvdmFsaWRhdG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBodHRwcyAgICAgZnJvbSAnaHR0cHMnO1xuaW1wb3J0IGh0dHAgICAgICBmcm9tICdodHRwJztcblxuY29uc3QgSE9TVFMgPSB7XG4gICd0ZXN0JyAgICAgICA6ICd0ZXN0LmFwaS5hbWFkZXVzLmNvbScsXG4gICdwcm9kdWN0aW9uJyA6ICdhcGkuYW1hZGV1cy5jb20nXG59O1xuXG5jb25zdCBSRUNPR05JWkVEX09QVElPTlMgPSBbXG4gICdjbGllbnRJZCcsXG4gICdjbGllbnRTZWNyZXQnLFxuICAnbG9nZ2VyJyxcbiAgJ2xvZ0xldmVsJyxcbiAgJ2hvc3RuYW1lJyxcbiAgJ2hvc3QnLFxuICAnY3VzdG9tQXBwSWQnLFxuICAnY3VzdG9tQXBwVmVyc2lvbicsXG4gICdodHRwJyxcbiAgJ3NzbCcsXG4gICdwb3J0J1xuXTtcblxuLyoqXG4gKiBIZWxwZXIgY2xhc3MgZm9yIHZhbGlkYXRpbmcgcGFyYW1ldGVyc1xuICogQHByb3RlY3RlZFxuICovXG5jbGFzcyBWYWxpZGF0b3Ige1xuXG4gIC8qKlxuICAgKiBJbml0aWFsaXNlIHRoZSBjbGllbnQncyBkZWZhdWx0IHZhbHVlLCBlbnN1cmluZyB0aGUgcmVxdWlyZWQgdmFsdWVzIGFyZVxuICAgKiBwcmVzZW50XG4gICAqXG4gICAqIEBwYXJhbSAge0NsaWVudH0gY2xpZW50IHRoZSBjbGllbnQgb2JqZWN0IHRvIHNldCB0aGUgZGVmYXVsdHMgZm9yXG4gICAqIEBwYXJhbSAge09iamVjdH0gb3B0aW9ucyB0aGUgYXNzb2NpYXRpdmUgYXJyYXkgb2Ygb3B0aW9ucyBwYXNzZWQgdG8gdGhlXG4gICAqICBjbGllbnQgb24gaW5pdGlhbGl6YXRpb25cbiAgICovXG4gIHZhbGlkYXRlQW5kSW5pdGlhbGl6ZShjbGllbnQsIG9wdGlvbnMpIHtcbiAgICB0aGlzLmluaXRpYWxpemVDbGllbnRDcmVkZW50aWFscyhjbGllbnQsIG9wdGlvbnMpO1xuICAgIHRoaXMuaW5pdGlhbGl6ZUxvZ2dlcihjbGllbnQsIG9wdGlvbnMpO1xuICAgIHRoaXMuaW5pdGlhbGl6ZUhvc3QoY2xpZW50LCBvcHRpb25zKTtcbiAgICB0aGlzLmluaXRpYWxpemVDdXN0b21BcHAoY2xpZW50LCBvcHRpb25zKTtcbiAgICB0aGlzLmluaXRpYWxpemVIdHRwKGNsaWVudCwgb3B0aW9ucyk7XG5cbiAgICB0aGlzLndhcm5PblVucmVjb2duaXplZE9wdGlvbnMob3B0aW9ucywgY2xpZW50LCBSRUNPR05JWkVEX09QVElPTlMpO1xuICB9XG5cbiAgLy8gUFJJVkFURVxuXG4gIGluaXRpYWxpemVDbGllbnRDcmVkZW50aWFscyhjbGllbnQsIG9wdGlvbnMpIHtcbiAgICBjbGllbnQuY2xpZW50SWQgPSB0aGlzLmluaXRSZXF1aXJlZCgnY2xpZW50SWQnLCBvcHRpb25zKTtcbiAgICBjbGllbnQuY2xpZW50U2VjcmV0ID0gdGhpcy5pbml0UmVxdWlyZWQoJ2NsaWVudFNlY3JldCcsIG9wdGlvbnMpO1xuICB9XG5cbiAgaW5pdGlhbGl6ZUxvZ2dlcihjbGllbnQsIG9wdGlvbnMpIHtcbiAgICBjbGllbnQubG9nZ2VyICAgID0gdGhpcy5pbml0T3B0aW9uYWwoJ2xvZ2dlcicsIG9wdGlvbnMsIGNvbnNvbGUpO1xuICAgIGNsaWVudC5sb2dMZXZlbCA9IHRoaXMuaW5pdE9wdGlvbmFsKCdsb2dMZXZlbCcsIG9wdGlvbnMsICdzaWxlbnQnKTtcbiAgfVxuXG4gIGluaXRpYWxpemVIb3N0KGNsaWVudCwgb3B0aW9ucykge1xuICAgIGxldCBob3N0bmFtZSA9IHRoaXMuaW5pdE9wdGlvbmFsKCdob3N0bmFtZScsIG9wdGlvbnMsICd0ZXN0Jyk7XG4gICAgY2xpZW50Lmhvc3QgID0gdGhpcy5pbml0T3B0aW9uYWwoJ2hvc3QnLCBvcHRpb25zLCBIT1NUU1tob3N0bmFtZV0pO1xuICAgIGNsaWVudC5wb3J0ICA9IHRoaXMuaW5pdE9wdGlvbmFsKCdwb3J0Jywgb3B0aW9ucywgNDQzKTtcbiAgICBjbGllbnQuc3NsICAgPSB0aGlzLmluaXRPcHRpb25hbCgnc3NsJywgb3B0aW9ucywgdHJ1ZSk7XG4gIH1cblxuICBpbml0aWFsaXplQ3VzdG9tQXBwKGNsaWVudCwgb3B0aW9ucykge1xuICAgIGNsaWVudC5jdXN0b21BcHBJZCA9IHRoaXMuaW5pdE9wdGlvbmFsKCdjdXN0b21BcHBJZCcsIG9wdGlvbnMpO1xuICAgIGNsaWVudC5jdXN0b21BcHBWZXJzaW9uID0gdGhpcy5pbml0T3B0aW9uYWwoJ2N1c3RvbUFwcFZlcnNpb24nLCBvcHRpb25zKTtcbiAgfVxuXG4gIGluaXRpYWxpemVIdHRwKGNsaWVudCwgb3B0aW9ucykge1xuICAgIGxldCBuZXR3b3JrID0gY2xpZW50LnNzbCA/IGh0dHBzIDogaHR0cDtcbiAgICBjbGllbnQuaHR0cCA9IHRoaXMuaW5pdE9wdGlvbmFsKCdodHRwJywgb3B0aW9ucywgbmV0d29yayk7XG4gIH1cblxuICBpbml0UmVxdWlyZWQoa2V5LCBvcHRpb25zKSB7XG4gICAgbGV0IHJlc3VsdCA9IHRoaXMuaW5pdE9wdGlvbmFsKGtleSwgb3B0aW9ucyk7XG4gICAgaWYgKCFyZXN1bHQpIHRocm93IG5ldyBBcmd1bWVudEVycm9yKGBNaXNzaW5nIHJlcXVpcmVkIGFyZ3VtZW50OiAke2tleX1gKTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG5cbiAgaW5pdE9wdGlvbmFsKGtleSwgb3B0aW9ucywgZmFsbGJhY2sgPSBudWxsKSB7XG4gICAgLy9FbnYgdmFyaWFibGVzIG5hbWVzIGV4cGVjdGVkIHRvIGJlIGluIFNOQUtFX0NBU0UgYW5kIHVwcGVyY2FzZVxuICAgIGxldCBlbnZLZXkgPSBgQU1BREVVU18ke2tleS5yZXBsYWNlKC9bQS1aXS9nLCBjID0+IGBfJHtjLnRvTG93ZXJDYXNlKCl9YCkudG9VcHBlckNhc2UoKX1gO1xuICAgIGxldCB2YWx1ZSA9IG9wdGlvbnNba2V5XSB8fCBwcm9jZXNzLmVudltlbnZLZXldIHx8IGZhbGxiYWNrO1xuICAgIHJldHVybiB2YWx1ZTtcbiAgfVxuXG4gIHdhcm5PblVucmVjb2duaXplZE9wdGlvbnMob3B0aW9ucywgY2xpZW50LCByZWNvZ25pemVkT3B0aW9ucykge1xuICAgIE9iamVjdC5rZXlzKG9wdGlvbnMpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgaWYgKHJlY29nbml6ZWRPcHRpb25zLmluZGV4T2Yoa2V5KSA9PT0gLTEgJiYgY2xpZW50Lndhcm4oKSkge1xuICAgICAgICBjbGllbnQubG9nZ2VyLmxvZyhgVW5yZWNvZ25pemVkIG9wdGlvbjogJHtrZXl9YCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cblxuLy8gUFJJVkFURVxuXG5jbGFzcyBBcmd1bWVudEVycm9yIGV4dGVuZHMgRXJyb3Ige1xuICBjb25zdHJ1Y3RvcihtZXNzYWdlKSB7XG4gICAgc3VwZXIobWVzc2FnZSk7XG4gICAgdGhpcy5uYW1lID0gJ0FyZ3VtZW50RXJyb3InO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFZhbGlkYXRvcjtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsSUFBQUEsTUFBQSxHQUFBQyxzQkFBQSxDQUFBQyxPQUFBO0FBQ0EsSUFBQUMsS0FBQSxHQUFBRixzQkFBQSxDQUFBQyxPQUFBO0FBQTZCLFNBQUFELHVCQUFBRyxDQUFBLFdBQUFBLENBQUEsSUFBQUEsQ0FBQSxDQUFBQyxVQUFBLEdBQUFELENBQUEsZ0JBQUFBLENBQUE7QUFBQSxTQUFBRSxXQUFBQyxDQUFBLEVBQUFDLENBQUEsRUFBQUosQ0FBQSxXQUFBSSxDQUFBLEdBQUFDLGVBQUEsQ0FBQUQsQ0FBQSxHQUFBRSwwQkFBQSxDQUFBSCxDQUFBLEVBQUFJLHlCQUFBLEtBQUFDLE9BQUEsQ0FBQUMsU0FBQSxDQUFBTCxDQUFBLEVBQUFKLENBQUEsUUFBQUssZUFBQSxDQUFBRixDQUFBLEVBQUFPLFdBQUEsSUFBQU4sQ0FBQSxDQUFBTyxLQUFBLENBQUFSLENBQUEsRUFBQUgsQ0FBQTtBQUFBLFNBQUFNLDJCQUFBSCxDQUFBLEVBQUFILENBQUEsUUFBQUEsQ0FBQSxpQkFBQVksT0FBQSxDQUFBWixDQUFBLDBCQUFBQSxDQUFBLFVBQUFBLENBQUEsaUJBQUFBLENBQUEsWUFBQWEsU0FBQSxxRUFBQUMsc0JBQUEsQ0FBQVgsQ0FBQTtBQUFBLFNBQUFXLHVCQUFBZCxDQUFBLG1CQUFBQSxDQUFBLFlBQUFlLGNBQUEsc0VBQUFmLENBQUE7QUFBQSxTQUFBZ0IsVUFBQWIsQ0FBQSxFQUFBSCxDQUFBLDZCQUFBQSxDQUFBLGFBQUFBLENBQUEsWUFBQWEsU0FBQSx3REFBQVYsQ0FBQSxDQUFBYyxTQUFBLEdBQUFDLE1BQUEsQ0FBQUMsTUFBQSxDQUFBbkIsQ0FBQSxJQUFBQSxDQUFBLENBQUFpQixTQUFBLElBQUFQLFdBQUEsSUFBQVUsS0FBQSxFQUFBakIsQ0FBQSxFQUFBa0IsUUFBQSxNQUFBQyxZQUFBLFdBQUFKLE1BQUEsQ0FBQUssY0FBQSxDQUFBcEIsQ0FBQSxpQkFBQWtCLFFBQUEsU0FBQXJCLENBQUEsSUFBQXdCLGVBQUEsQ0FBQXJCLENBQUEsRUFBQUgsQ0FBQTtBQUFBLFNBQUF5QixpQkFBQXRCLENBQUEsUUFBQXVCLENBQUEsd0JBQUFDLEdBQUEsT0FBQUEsR0FBQSxvQkFBQUYsZ0JBQUEsWUFBQUEsaUJBQUF0QixDQUFBLGlCQUFBQSxDQUFBLEtBQUF5QixpQkFBQSxDQUFBekIsQ0FBQSxVQUFBQSxDQUFBLDJCQUFBQSxDQUFBLFlBQUFVLFNBQUEsdUVBQUFhLENBQUEsUUFBQUEsQ0FBQSxDQUFBRyxHQUFBLENBQUExQixDQUFBLFVBQUF1QixDQUFBLENBQUFJLEdBQUEsQ0FBQTNCLENBQUEsR0FBQXVCLENBQUEsQ0FBQUssR0FBQSxDQUFBNUIsQ0FBQSxFQUFBNkIsT0FBQSxjQUFBQSxRQUFBLFdBQUFDLFVBQUEsQ0FBQTlCLENBQUEsRUFBQStCLFNBQUEsRUFBQTdCLGVBQUEsT0FBQUssV0FBQSxZQUFBc0IsT0FBQSxDQUFBZixTQUFBLEdBQUFDLE1BQUEsQ0FBQUMsTUFBQSxDQUFBaEIsQ0FBQSxDQUFBYyxTQUFBLElBQUFQLFdBQUEsSUFBQVUsS0FBQSxFQUFBWSxPQUFBLEVBQUFHLFVBQUEsTUFBQWQsUUFBQSxNQUFBQyxZQUFBLFdBQUFFLGVBQUEsQ0FBQVEsT0FBQSxFQUFBN0IsQ0FBQSxNQUFBc0IsZ0JBQUEsQ0FBQXRCLENBQUE7QUFBQSxTQUFBOEIsV0FBQTlCLENBQUEsRUFBQUgsQ0FBQSxFQUFBMEIsQ0FBQSxRQUFBbkIseUJBQUEsV0FBQUMsT0FBQSxDQUFBQyxTQUFBLENBQUFFLEtBQUEsT0FBQXVCLFNBQUEsT0FBQTlCLENBQUEsV0FBQUEsQ0FBQSxDQUFBZ0MsSUFBQSxDQUFBekIsS0FBQSxDQUFBUCxDQUFBLEVBQUFKLENBQUEsT0FBQXFDLENBQUEsUUFBQWxDLENBQUEsQ0FBQW1DLElBQUEsQ0FBQTNCLEtBQUEsQ0FBQVIsQ0FBQSxFQUFBQyxDQUFBLGFBQUFzQixDQUFBLElBQUFGLGVBQUEsQ0FBQWEsQ0FBQSxFQUFBWCxDQUFBLENBQUFULFNBQUEsR0FBQW9CLENBQUE7QUFBQSxTQUFBOUIsMEJBQUEsY0FBQUosQ0FBQSxJQUFBb0MsT0FBQSxDQUFBdEIsU0FBQSxDQUFBdUIsT0FBQSxDQUFBQyxJQUFBLENBQUFqQyxPQUFBLENBQUFDLFNBQUEsQ0FBQThCLE9BQUEsaUNBQUFwQyxDQUFBLGFBQUFJLHlCQUFBLFlBQUFBLDBCQUFBLGFBQUFKLENBQUE7QUFBQSxTQUFBeUIsa0JBQUF6QixDQUFBLHdCQUFBdUMsUUFBQSxDQUFBQyxRQUFBLENBQUFGLElBQUEsQ0FBQXRDLENBQUEsRUFBQXlDLE9BQUEsNEJBQUFDLENBQUEsZ0NBQUExQyxDQUFBO0FBQUEsU0FBQXFCLGdCQUFBckIsQ0FBQSxFQUFBSCxDQUFBLFdBQUF3QixlQUFBLEdBQUFOLE1BQUEsQ0FBQTRCLGNBQUEsR0FBQTVCLE1BQUEsQ0FBQTRCLGNBQUEsQ0FBQVIsSUFBQSxlQUFBbkMsQ0FBQSxFQUFBSCxDQUFBLFdBQUFHLENBQUEsQ0FBQTRDLFNBQUEsR0FBQS9DLENBQUEsRUFBQUcsQ0FBQSxLQUFBcUIsZUFBQSxDQUFBckIsQ0FBQSxFQUFBSCxDQUFBO0FBQUEsU0FBQUssZ0JBQUFGLENBQUEsV0FBQUUsZUFBQSxHQUFBYSxNQUFBLENBQUE0QixjQUFBLEdBQUE1QixNQUFBLENBQUE4QixjQUFBLENBQUFWLElBQUEsZUFBQW5DLENBQUEsV0FBQUEsQ0FBQSxDQUFBNEMsU0FBQSxJQUFBN0IsTUFBQSxDQUFBOEIsY0FBQSxDQUFBN0MsQ0FBQSxNQUFBRSxlQUFBLENBQUFGLENBQUE7QUFBQSxTQUFBUyxRQUFBUixDQUFBLHNDQUFBUSxPQUFBLHdCQUFBcUMsTUFBQSx1QkFBQUEsTUFBQSxDQUFBQyxRQUFBLGFBQUE5QyxDQUFBLGtCQUFBQSxDQUFBLGdCQUFBQSxDQUFBLFdBQUFBLENBQUEseUJBQUE2QyxNQUFBLElBQUE3QyxDQUFBLENBQUFNLFdBQUEsS0FBQXVDLE1BQUEsSUFBQTdDLENBQUEsS0FBQTZDLE1BQUEsQ0FBQWhDLFNBQUEscUJBQUFiLENBQUEsS0FBQVEsT0FBQSxDQUFBUixDQUFBO0FBQUEsU0FBQStDLGdCQUFBQyxDQUFBLEVBQUFQLENBQUEsVUFBQU8sQ0FBQSxZQUFBUCxDQUFBLGFBQUFoQyxTQUFBO0FBQUEsU0FBQXdDLGtCQUFBckQsQ0FBQSxFQUFBMEIsQ0FBQSxhQUFBdkIsQ0FBQSxNQUFBQSxDQUFBLEdBQUF1QixDQUFBLENBQUE0QixNQUFBLEVBQUFuRCxDQUFBLFVBQUFDLENBQUEsR0FBQXNCLENBQUEsQ0FBQXZCLENBQUEsR0FBQUMsQ0FBQSxDQUFBK0IsVUFBQSxHQUFBL0IsQ0FBQSxDQUFBK0IsVUFBQSxRQUFBL0IsQ0FBQSxDQUFBa0IsWUFBQSxrQkFBQWxCLENBQUEsS0FBQUEsQ0FBQSxDQUFBaUIsUUFBQSxRQUFBSCxNQUFBLENBQUFLLGNBQUEsQ0FBQXZCLENBQUEsRUFBQXVELGNBQUEsQ0FBQW5ELENBQUEsQ0FBQW9ELEdBQUEsR0FBQXBELENBQUE7QUFBQSxTQUFBcUQsYUFBQXpELENBQUEsRUFBQTBCLENBQUEsRUFBQXZCLENBQUEsV0FBQXVCLENBQUEsSUFBQTJCLGlCQUFBLENBQUFyRCxDQUFBLENBQUFpQixTQUFBLEVBQUFTLENBQUEsR0FBQXZCLENBQUEsSUFBQWtELGlCQUFBLENBQUFyRCxDQUFBLEVBQUFHLENBQUEsR0FBQWUsTUFBQSxDQUFBSyxjQUFBLENBQUF2QixDQUFBLGlCQUFBcUIsUUFBQSxTQUFBckIsQ0FBQTtBQUFBLFNBQUF1RCxlQUFBcEQsQ0FBQSxRQUFBdUQsQ0FBQSxHQUFBQyxZQUFBLENBQUF4RCxDQUFBLGdDQUFBUyxPQUFBLENBQUE4QyxDQUFBLElBQUFBLENBQUEsR0FBQUEsQ0FBQTtBQUFBLFNBQUFDLGFBQUF4RCxDQUFBLEVBQUF1QixDQUFBLG9CQUFBZCxPQUFBLENBQUFULENBQUEsTUFBQUEsQ0FBQSxTQUFBQSxDQUFBLE1BQUFILENBQUEsR0FBQUcsQ0FBQSxDQUFBOEMsTUFBQSxDQUFBVyxXQUFBLGtCQUFBNUQsQ0FBQSxRQUFBMEQsQ0FBQSxHQUFBMUQsQ0FBQSxDQUFBeUMsSUFBQSxDQUFBdEMsQ0FBQSxFQUFBdUIsQ0FBQSxnQ0FBQWQsT0FBQSxDQUFBOEMsQ0FBQSxVQUFBQSxDQUFBLFlBQUE3QyxTQUFBLHlFQUFBYSxDQUFBLEdBQUFtQyxNQUFBLEdBQUFDLE1BQUEsRUFBQTNELENBQUE7QUFFN0IsSUFBTTRELEtBQUssR0FBRztFQUNaLE1BQU0sRUFBUyxzQkFBc0I7RUFDckMsWUFBWSxFQUFHO0FBQ2pCLENBQUM7QUFFRCxJQUFNQyxrQkFBa0IsR0FBRyxDQUN6QixVQUFVLEVBQ1YsY0FBYyxFQUNkLFFBQVEsRUFDUixVQUFVLEVBQ1YsVUFBVSxFQUNWLE1BQU0sRUFDTixhQUFhLEVBQ2Isa0JBQWtCLEVBQ2xCLE1BQU0sRUFDTixLQUFLLEVBQ0wsTUFBTSxDQUNQOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBSEEsSUFJTUMsU0FBUztFQUFBLFNBQUFBLFVBQUE7SUFBQWQsZUFBQSxPQUFBYyxTQUFBO0VBQUE7RUFBQSxPQUFBUixZQUFBLENBQUFRLFNBQUE7SUFBQVQsR0FBQTtJQUFBcEMsS0FBQTtJQUViO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7SUFDRSxTQUFBOEMscUJBQXFCQSxDQUFDQyxNQUFNLEVBQUVDLE9BQU8sRUFBRTtNQUNyQyxJQUFJLENBQUNDLDJCQUEyQixDQUFDRixNQUFNLEVBQUVDLE9BQU8sQ0FBQztNQUNqRCxJQUFJLENBQUNFLGdCQUFnQixDQUFDSCxNQUFNLEVBQUVDLE9BQU8sQ0FBQztNQUN0QyxJQUFJLENBQUNHLGNBQWMsQ0FBQ0osTUFBTSxFQUFFQyxPQUFPLENBQUM7TUFDcEMsSUFBSSxDQUFDSSxtQkFBbUIsQ0FBQ0wsTUFBTSxFQUFFQyxPQUFPLENBQUM7TUFDekMsSUFBSSxDQUFDSyxjQUFjLENBQUNOLE1BQU0sRUFBRUMsT0FBTyxDQUFDO01BRXBDLElBQUksQ0FBQ00seUJBQXlCLENBQUNOLE9BQU8sRUFBRUQsTUFBTSxFQUFFSCxrQkFBa0IsQ0FBQztJQUNyRTs7SUFFQTtFQUFBO0lBQUFSLEdBQUE7SUFBQXBDLEtBQUEsRUFFQSxTQUFBaUQsMkJBQTJCQSxDQUFDRixNQUFNLEVBQUVDLE9BQU8sRUFBRTtNQUMzQ0QsTUFBTSxDQUFDUSxRQUFRLEdBQUcsSUFBSSxDQUFDQyxZQUFZLENBQUMsVUFBVSxFQUFFUixPQUFPLENBQUM7TUFDeERELE1BQU0sQ0FBQ1UsWUFBWSxHQUFHLElBQUksQ0FBQ0QsWUFBWSxDQUFDLGNBQWMsRUFBRVIsT0FBTyxDQUFDO0lBQ2xFO0VBQUM7SUFBQVosR0FBQTtJQUFBcEMsS0FBQSxFQUVELFNBQUFrRCxnQkFBZ0JBLENBQUNILE1BQU0sRUFBRUMsT0FBTyxFQUFFO01BQ2hDRCxNQUFNLENBQUNXLE1BQU0sR0FBTSxJQUFJLENBQUNDLFlBQVksQ0FBQyxRQUFRLEVBQUVYLE9BQU8sRUFBRVksT0FBTyxDQUFDO01BQ2hFYixNQUFNLENBQUNjLFFBQVEsR0FBRyxJQUFJLENBQUNGLFlBQVksQ0FBQyxVQUFVLEVBQUVYLE9BQU8sRUFBRSxRQUFRLENBQUM7SUFDcEU7RUFBQztJQUFBWixHQUFBO0lBQUFwQyxLQUFBLEVBRUQsU0FBQW1ELGNBQWNBLENBQUNKLE1BQU0sRUFBRUMsT0FBTyxFQUFFO01BQzlCLElBQUljLFFBQVEsR0FBRyxJQUFJLENBQUNILFlBQVksQ0FBQyxVQUFVLEVBQUVYLE9BQU8sRUFBRSxNQUFNLENBQUM7TUFDN0RELE1BQU0sQ0FBQ2dCLElBQUksR0FBSSxJQUFJLENBQUNKLFlBQVksQ0FBQyxNQUFNLEVBQUVYLE9BQU8sRUFBRUwsS0FBSyxDQUFDbUIsUUFBUSxDQUFDLENBQUM7TUFDbEVmLE1BQU0sQ0FBQ2lCLElBQUksR0FBSSxJQUFJLENBQUNMLFlBQVksQ0FBQyxNQUFNLEVBQUVYLE9BQU8sRUFBRSxHQUFHLENBQUM7TUFDdERELE1BQU0sQ0FBQ2tCLEdBQUcsR0FBSyxJQUFJLENBQUNOLFlBQVksQ0FBQyxLQUFLLEVBQUVYLE9BQU8sRUFBRSxJQUFJLENBQUM7SUFDeEQ7RUFBQztJQUFBWixHQUFBO0lBQUFwQyxLQUFBLEVBRUQsU0FBQW9ELG1CQUFtQkEsQ0FBQ0wsTUFBTSxFQUFFQyxPQUFPLEVBQUU7TUFDbkNELE1BQU0sQ0FBQ21CLFdBQVcsR0FBRyxJQUFJLENBQUNQLFlBQVksQ0FBQyxhQUFhLEVBQUVYLE9BQU8sQ0FBQztNQUM5REQsTUFBTSxDQUFDb0IsZ0JBQWdCLEdBQUcsSUFBSSxDQUFDUixZQUFZLENBQUMsa0JBQWtCLEVBQUVYLE9BQU8sQ0FBQztJQUMxRTtFQUFDO0lBQUFaLEdBQUE7SUFBQXBDLEtBQUEsRUFFRCxTQUFBcUQsY0FBY0EsQ0FBQ04sTUFBTSxFQUFFQyxPQUFPLEVBQUU7TUFDOUIsSUFBSW9CLE9BQU8sR0FBR3JCLE1BQU0sQ0FBQ2tCLEdBQUcsR0FBR0ksaUJBQUssR0FBR0MsZ0JBQUk7TUFDdkN2QixNQUFNLENBQUN1QixJQUFJLEdBQUcsSUFBSSxDQUFDWCxZQUFZLENBQUMsTUFBTSxFQUFFWCxPQUFPLEVBQUVvQixPQUFPLENBQUM7SUFDM0Q7RUFBQztJQUFBaEMsR0FBQTtJQUFBcEMsS0FBQSxFQUVELFNBQUF3RCxZQUFZQSxDQUFDcEIsR0FBRyxFQUFFWSxPQUFPLEVBQUU7TUFDekIsSUFBSXVCLE1BQU0sR0FBRyxJQUFJLENBQUNaLFlBQVksQ0FBQ3ZCLEdBQUcsRUFBRVksT0FBTyxDQUFDO01BQzVDLElBQUksQ0FBQ3VCLE1BQU0sRUFBRSxNQUFNLElBQUlDLGFBQWEsK0JBQUFDLE1BQUEsQ0FBK0JyQyxHQUFHLENBQUUsQ0FBQztNQUN6RSxPQUFPbUMsTUFBTTtJQUNmO0VBQUM7SUFBQW5DLEdBQUE7SUFBQXBDLEtBQUEsRUFFRCxTQUFBMkQsWUFBWUEsQ0FBQ3ZCLEdBQUcsRUFBRVksT0FBTyxFQUFtQjtNQUFBLElBQWpCMEIsUUFBUSxHQUFBNUQsU0FBQSxDQUFBb0IsTUFBQSxRQUFBcEIsU0FBQSxRQUFBNkQsU0FBQSxHQUFBN0QsU0FBQSxNQUFHLElBQUk7TUFDeEM7TUFDQSxJQUFJOEQsTUFBTSxjQUFBSCxNQUFBLENBQWNyQyxHQUFHLENBQUN5QyxPQUFPLENBQUMsUUFBUSxFQUFFLFVBQUFDLENBQUM7UUFBQSxXQUFBTCxNQUFBLENBQVFLLENBQUMsQ0FBQ0MsV0FBVyxDQUFDLENBQUM7TUFBQSxDQUFFLENBQUMsQ0FBQ0MsV0FBVyxDQUFDLENBQUMsQ0FBRTtNQUN6RixJQUFJaEYsS0FBSyxHQUFHZ0QsT0FBTyxDQUFDWixHQUFHLENBQUMsSUFBSTZDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTixNQUFNLENBQUMsSUFBSUYsUUFBUTtNQUMzRCxPQUFPMUUsS0FBSztJQUNkO0VBQUM7SUFBQW9DLEdBQUE7SUFBQXBDLEtBQUEsRUFFRCxTQUFBc0QseUJBQXlCQSxDQUFDTixPQUFPLEVBQUVELE1BQU0sRUFBRW9DLGlCQUFpQixFQUFFO01BQzVEckYsTUFBTSxDQUFDc0YsSUFBSSxDQUFDcEMsT0FBTyxDQUFDLENBQUNxQyxPQUFPLENBQUMsVUFBQ2pELEdBQUcsRUFBSztRQUNwQyxJQUFJK0MsaUJBQWlCLENBQUMzRCxPQUFPLENBQUNZLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJVyxNQUFNLENBQUN1QyxJQUFJLENBQUMsQ0FBQyxFQUFFO1VBQzFEdkMsTUFBTSxDQUFDVyxNQUFNLENBQUM2QixHQUFHLHlCQUFBZCxNQUFBLENBQXlCckMsR0FBRyxDQUFFLENBQUM7UUFDbEQ7TUFDRixDQUFDLENBQUM7TUFDRixPQUFPLElBQUk7SUFDYjtFQUFDO0FBQUEsS0FHSDtBQUFBLElBRU1vQyxhQUFhLDBCQUFBZ0IsTUFBQTtFQUNqQixTQUFBaEIsY0FBWWlCLE9BQU8sRUFBRTtJQUFBLElBQUFDLEtBQUE7SUFBQTNELGVBQUEsT0FBQXlDLGFBQUE7SUFDbkJrQixLQUFBLEdBQUE1RyxVQUFBLE9BQUEwRixhQUFBLEdBQU1pQixPQUFPO0lBQ2JDLEtBQUEsQ0FBS0MsSUFBSSxHQUFHLGVBQWU7SUFBQyxPQUFBRCxLQUFBO0VBQzlCO0VBQUM5RixTQUFBLENBQUE0RSxhQUFBLEVBQUFnQixNQUFBO0VBQUEsT0FBQW5ELFlBQUEsQ0FBQW1DLGFBQUE7QUFBQSxlQUFBbkUsZ0JBQUEsQ0FKeUJ1RixLQUFLO0FBQUEsSUFBQUMsUUFBQSxHQUFBQyxPQUFBLGNBT2xCakQsU0FBUztBQUFBa0QsTUFBQSxDQUFBRCxPQUFBLEdBQUFBLE9BQUEsQ0FBQUUsT0FBQSIsImlnbm9yZUxpc3QiOltdfQ==
}),
"[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/package.json (json)", ((__turbopack_context__) => {

__turbopack_context__.v(JSON.parse("{\"name\":\"amadeus\",\"version\":\"11.0.0\",\"description\":\"Node library for the Amadeus travel APIs\",\"main\":\"lib/amadeus.js\",\"scripts\":{\"prebuild\":\"npm run lint:src & npm run docs\",\"build\":\"babel -d lib src/ -s inline\",\"build:watch\":\"watch 'npm run build' src\",\"prepublishOnly\":\"babel -d lib src/ -s inline\",\"pretest\":\"eslint spec\",\"test\":\"jest spec --coverage --collectCoverageFrom=src/**/*.js\",\"test:watch\":\"watch 'npm test' src spec\",\"predocs\":\"npm run lint:docs\",\"docs\":\"documentation build src/** -f html -o docs -a undefined -a public\",\"docs:watch\":\"watch 'npm run docs' src\",\"docs:serve\":\"open docs/\",\"docs:dev\":\"npm run docs:serve && npm run docs:watch\",\"lint:src\":\"eslint src\",\"lint:docs\":\"documentation lint src/**\",\"console\":\"node -r ./lib/amadeus.js\"},\"jest\":{\"verbose\":true,\"testEnvironment\":\"node\"},\"repository\":{\"type\":\"git\",\"url\":\"git+https://github.com/amadeus4dev/amadeus-node.git\"},\"keywords\":[\"amadeus\",\"travel\",\"api\",\"apis\",\"hotels\",\"flights\"],\"author\":\"amadeus-developer\",\"license\":\"MIT\",\"bugs\":{\"url\":\"https://github.com/amadeus4dev/amadeus-node/issues\"},\"homepage\":\"https://developers.amadeus.com\",\"contributors\":[\"cbetta\",\"Anthony Roux\",\"Alvaro Navarro\",\"Akshit Singla\",\"Anna Tsolakou\",\"Minji Kim\",\"Gustavo Giunco Bertoldi\"],\"devDependencies\":{\"@babel/cli\":\"^7.18.6\",\"@babel/core\":\"^7.18.6\",\"@babel/preset-env\":\"^7.18.6\",\"babel-plugin-add-module-exports\":\"^1.0.4\",\"babel-preset-env\":\"^1.7.0\",\"documentation\":\"^13.2.5\",\"eslint\":\"^4.16.0\",\"jest\":\"^24.8.0\",\"merge\":\"^2.1.1\",\"watch\":\"^1.0.2\"},\"dependencies\":{\"qs\":\"^6.11.0\"}}"));}),
"[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/client.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _events = _interopRequireDefault(__turbopack_context__.r("[externals]/events [external] (events, cjs)"));
var _util = _interopRequireDefault(__turbopack_context__.r("[externals]/util [external] (util, cjs)"));
var _access_token = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/client/access_token.js [app-route] (ecmascript)"));
var _listener = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/client/listener.js [app-route] (ecmascript)"));
var _request = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/client/request.js [app-route] (ecmascript)"));
var _validator = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/client/validator.js [app-route] (ecmascript)"));
var _package = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/package.json (json)"));
function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        "default": e
    };
}
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
/**
 * A convenient wrapper around the API, allowing for generic, authenticated and
 * unauthenticated API calls without having to manage the serialization,
 * desrialization, and authentication.
 *
 * Generally you do not need to use this object directly. Instead it is used
 * indirectly by the various namespaced methods for every API call.
 *
 * For example, the following are the semantically the same.
 *
 * ```js
 * amadeus.client.get('/v1/reference-data/urls/checkin-links', params);
 * amadeus.amadeus.reference_data.urls.checkin_links.get(params);
 * ```
 *
 * @param {Object} options a list of options. See {@link Amadeus} .
 * @property {string} clientId the API key used to authenticate the API
 * @property {string} clientSecret the API secret used to authenticate
 *  the API
 * @property {Object} logger the `console`-compatible logger used to debug calls
 * @property {string} logLevel the log level for the client, available options
 *  are `debug`, `warn`, and `silent`. Defaults to 'silent'
 * @property {string} host the hostname of the server API calls are made to
 * @property {number} port the port the server API calls are made to
 * @property {boolean} ssl wether an SSL request is made to the server
 * @property {string} customAppId the custom App ID to be passed in the User
 *  Agent to the server
 * @property {string} customAppVersion the custom App Version number to be
 *  passed in the User Agent to the server
 * @property {Object} http the Node/HTTP(S)-compatible client used to make
 *  requests
 * @property {number} version The version of this API client
 */ var Client = /*#__PURE__*/ function() {
    function Client() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck(this, Client);
        new _validator["default"]().validateAndInitialize(this, options);
        this.accessToken = new _access_token["default"](this);
        this.version = _package["default"].version;
    }
    /**
   * Make an authenticated GET API call.
   *
   * ```js
   * amadeus.client.get('/v2/foo/bar', { some: 'data' });
   * ```
   * @param {string} path the full path of the API endpoint
   * @param {Object} [params={}] the query string parameters
   * @return {Promise.<Response,ResponseError>} a Promise
   */ return _createClass(Client, [
        {
            key: "get",
            value: function get(path) {
                var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                return this.request('GET', path, params);
            }
        },
        {
            key: "post",
            value: function post(path) {
                var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                var stringifiedParams = typeof params === 'string' ? params : JSON.stringify(params);
                return this.request('POST', path, stringifiedParams);
            }
        },
        {
            key: "delete",
            value: function _delete(path) {
                var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                return this.request('DELETE', path, params);
            }
        },
        {
            key: "request",
            value: function request(verb, path) {
                var _this = this;
                var params = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
                return this.accessToken.bearerToken(this).then(function(bearerToken) {
                    return _this.unauthenticatedRequest(verb, path, params, bearerToken);
                });
            }
        },
        {
            key: "unauthenticatedRequest",
            value: function unauthenticatedRequest(verb, path, params) {
                var bearerToken = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
                var request = this.buildRequest(verb, path, params, bearerToken);
                this.log(request);
                var emitter = new _events["default"]();
                var promise = this.buildPromise(emitter);
                this.execute(request, emitter);
                return promise;
            }
        },
        {
            key: "execute",
            value: function execute(request, emitter) {
                var http_request = this.http.request(request.options());
                var listener = new _listener["default"](request, emitter, this);
                http_request.on('response', listener.onResponse.bind(listener));
                http_request.on('error', listener.onError.bind(listener));
                http_request.write(request.body());
                http_request.end();
            }
        },
        {
            key: "buildRequest",
            value: function buildRequest(verb, path, params, bearerToken) {
                return new _request["default"]({
                    host: this.host,
                    verb: verb,
                    path: path,
                    params: params,
                    bearerToken: bearerToken,
                    clientVersion: this.version,
                    languageVersion: process.versions.node,
                    appId: this.customAppId,
                    appVersion: this.customAppVersion,
                    port: this.port,
                    ssl: this.ssl
                });
            }
        },
        {
            key: "buildPromise",
            value: function buildPromise(emitter) {
                return new Promise(function(resolve, reject) {
                    emitter.on('resolve', function(response) {
                        return resolve(response);
                    });
                    emitter.on('reject', function(error) {
                        return reject(error);
                    });
                });
            }
        },
        {
            key: "log",
            value: function log(request) {
                /* istanbul ignore next */ if (this.debug()) {
                    this.logger.log(_util["default"].inspect(request, false, null));
                }
            }
        },
        {
            key: "debug",
            value: function debug() {
                return this.logLevel == 'debug';
            }
        },
        {
            key: "warn",
            value: function warn() {
                return this.logLevel == 'warn' || this.debug();
            }
        }
    ]);
}();
var _default = exports["default"] = Client;
module.exports = exports.default; //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZXZlbnRzIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfdXRpbCIsIl9hY2Nlc3NfdG9rZW4iLCJfbGlzdGVuZXIiLCJfcmVxdWVzdCIsIl92YWxpZGF0b3IiLCJfcGFja2FnZSIsImUiLCJfX2VzTW9kdWxlIiwiX3R5cGVvZiIsIm8iLCJTeW1ib2wiLCJpdGVyYXRvciIsImNvbnN0cnVjdG9yIiwicHJvdG90eXBlIiwiX2NsYXNzQ2FsbENoZWNrIiwiYSIsIm4iLCJUeXBlRXJyb3IiLCJfZGVmaW5lUHJvcGVydGllcyIsInIiLCJ0IiwibGVuZ3RoIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfdG9Qcm9wZXJ0eUtleSIsImtleSIsIl9jcmVhdGVDbGFzcyIsImkiLCJfdG9QcmltaXRpdmUiLCJ0b1ByaW1pdGl2ZSIsImNhbGwiLCJTdHJpbmciLCJOdW1iZXIiLCJDbGllbnQiLCJvcHRpb25zIiwiYXJndW1lbnRzIiwidW5kZWZpbmVkIiwiVmFsaWRhdG9yIiwidmFsaWRhdGVBbmRJbml0aWFsaXplIiwiYWNjZXNzVG9rZW4iLCJBY2Nlc3NUb2tlbiIsInZlcnNpb24iLCJwa2ciLCJ2YWx1ZSIsImdldCIsInBhdGgiLCJwYXJhbXMiLCJyZXF1ZXN0IiwicG9zdCIsInN0cmluZ2lmaWVkUGFyYW1zIiwiSlNPTiIsInN0cmluZ2lmeSIsImRlbGV0ZSIsInZlcmIiLCJfdGhpcyIsImJlYXJlclRva2VuIiwidGhlbiIsInVuYXV0aGVudGljYXRlZFJlcXVlc3QiLCJidWlsZFJlcXVlc3QiLCJsb2ciLCJlbWl0dGVyIiwiRXZlbnRFbWl0dGVyIiwicHJvbWlzZSIsImJ1aWxkUHJvbWlzZSIsImV4ZWN1dGUiLCJodHRwX3JlcXVlc3QiLCJodHRwIiwibGlzdGVuZXIiLCJMaXN0ZW5lciIsIm9uIiwib25SZXNwb25zZSIsImJpbmQiLCJvbkVycm9yIiwid3JpdGUiLCJib2R5IiwiZW5kIiwiUmVxdWVzdCIsImhvc3QiLCJjbGllbnRWZXJzaW9uIiwibGFuZ3VhZ2VWZXJzaW9uIiwicHJvY2VzcyIsInZlcnNpb25zIiwibm9kZSIsImFwcElkIiwiY3VzdG9tQXBwSWQiLCJhcHBWZXJzaW9uIiwiY3VzdG9tQXBwVmVyc2lvbiIsInBvcnQiLCJzc2wiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInJlc3BvbnNlIiwiZXJyb3IiLCJkZWJ1ZyIsImxvZ2dlciIsInV0aWwiLCJpbnNwZWN0IiwibG9nTGV2ZWwiLCJ3YXJuIiwiX2RlZmF1bHQiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmYXVsdCJdLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9hbWFkZXVzL2NsaWVudC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJ2V2ZW50cyc7XG5pbXBvcnQgdXRpbCAgICAgICAgIGZyb20gJ3V0aWwnO1xuXG5pbXBvcnQgQWNjZXNzVG9rZW4gZnJvbSAnLi9jbGllbnQvYWNjZXNzX3Rva2VuJztcbmltcG9ydCBMaXN0ZW5lciAgICBmcm9tICcuL2NsaWVudC9saXN0ZW5lcic7XG5pbXBvcnQgUmVxdWVzdCAgICAgZnJvbSAnLi9jbGllbnQvcmVxdWVzdCc7XG5pbXBvcnQgVmFsaWRhdG9yICAgZnJvbSAnLi9jbGllbnQvdmFsaWRhdG9yJztcblxuaW1wb3J0IHBrZyAgICAgICAgIGZyb20gJy4uLy4uL3BhY2thZ2UuanNvbic7XG5cbi8qKlxuICogQSBjb252ZW5pZW50IHdyYXBwZXIgYXJvdW5kIHRoZSBBUEksIGFsbG93aW5nIGZvciBnZW5lcmljLCBhdXRoZW50aWNhdGVkIGFuZFxuICogdW5hdXRoZW50aWNhdGVkIEFQSSBjYWxscyB3aXRob3V0IGhhdmluZyB0byBtYW5hZ2UgdGhlIHNlcmlhbGl6YXRpb24sXG4gKiBkZXNyaWFsaXphdGlvbiwgYW5kIGF1dGhlbnRpY2F0aW9uLlxuICpcbiAqIEdlbmVyYWxseSB5b3UgZG8gbm90IG5lZWQgdG8gdXNlIHRoaXMgb2JqZWN0IGRpcmVjdGx5LiBJbnN0ZWFkIGl0IGlzIHVzZWRcbiAqIGluZGlyZWN0bHkgYnkgdGhlIHZhcmlvdXMgbmFtZXNwYWNlZCBtZXRob2RzIGZvciBldmVyeSBBUEkgY2FsbC5cbiAqXG4gKiBGb3IgZXhhbXBsZSwgdGhlIGZvbGxvd2luZyBhcmUgdGhlIHNlbWFudGljYWxseSB0aGUgc2FtZS5cbiAqXG4gKiBgYGBqc1xuICogYW1hZGV1cy5jbGllbnQuZ2V0KCcvdjEvcmVmZXJlbmNlLWRhdGEvdXJscy9jaGVja2luLWxpbmtzJywgcGFyYW1zKTtcbiAqIGFtYWRldXMuYW1hZGV1cy5yZWZlcmVuY2VfZGF0YS51cmxzLmNoZWNraW5fbGlua3MuZ2V0KHBhcmFtcyk7XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge09iamVjdH0gb3B0aW9ucyBhIGxpc3Qgb2Ygb3B0aW9ucy4gU2VlIHtAbGluayBBbWFkZXVzfSAuXG4gKiBAcHJvcGVydHkge3N0cmluZ30gY2xpZW50SWQgdGhlIEFQSSBrZXkgdXNlZCB0byBhdXRoZW50aWNhdGUgdGhlIEFQSVxuICogQHByb3BlcnR5IHtzdHJpbmd9IGNsaWVudFNlY3JldCB0aGUgQVBJIHNlY3JldCB1c2VkIHRvIGF1dGhlbnRpY2F0ZVxuICogIHRoZSBBUElcbiAqIEBwcm9wZXJ0eSB7T2JqZWN0fSBsb2dnZXIgdGhlIGBjb25zb2xlYC1jb21wYXRpYmxlIGxvZ2dlciB1c2VkIHRvIGRlYnVnIGNhbGxzXG4gKiBAcHJvcGVydHkge3N0cmluZ30gbG9nTGV2ZWwgdGhlIGxvZyBsZXZlbCBmb3IgdGhlIGNsaWVudCwgYXZhaWxhYmxlIG9wdGlvbnNcbiAqICBhcmUgYGRlYnVnYCwgYHdhcm5gLCBhbmQgYHNpbGVudGAuIERlZmF1bHRzIHRvICdzaWxlbnQnXG4gKiBAcHJvcGVydHkge3N0cmluZ30gaG9zdCB0aGUgaG9zdG5hbWUgb2YgdGhlIHNlcnZlciBBUEkgY2FsbHMgYXJlIG1hZGUgdG9cbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBwb3J0IHRoZSBwb3J0IHRoZSBzZXJ2ZXIgQVBJIGNhbGxzIGFyZSBtYWRlIHRvXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IHNzbCB3ZXRoZXIgYW4gU1NMIHJlcXVlc3QgaXMgbWFkZSB0byB0aGUgc2VydmVyXG4gKiBAcHJvcGVydHkge3N0cmluZ30gY3VzdG9tQXBwSWQgdGhlIGN1c3RvbSBBcHAgSUQgdG8gYmUgcGFzc2VkIGluIHRoZSBVc2VyXG4gKiAgQWdlbnQgdG8gdGhlIHNlcnZlclxuICogQHByb3BlcnR5IHtzdHJpbmd9IGN1c3RvbUFwcFZlcnNpb24gdGhlIGN1c3RvbSBBcHAgVmVyc2lvbiBudW1iZXIgdG8gYmVcbiAqICBwYXNzZWQgaW4gdGhlIFVzZXIgQWdlbnQgdG8gdGhlIHNlcnZlclxuICogQHByb3BlcnR5IHtPYmplY3R9IGh0dHAgdGhlIE5vZGUvSFRUUChTKS1jb21wYXRpYmxlIGNsaWVudCB1c2VkIHRvIG1ha2VcbiAqICByZXF1ZXN0c1xuICogQHByb3BlcnR5IHtudW1iZXJ9IHZlcnNpb24gVGhlIHZlcnNpb24gb2YgdGhpcyBBUEkgY2xpZW50XG4gKi9cbmNsYXNzIENsaWVudCB7XG4gIGNvbnN0cnVjdG9yKG9wdGlvbnMgPSB7fSkge1xuICAgIG5ldyBWYWxpZGF0b3IoKS52YWxpZGF0ZUFuZEluaXRpYWxpemUodGhpcywgb3B0aW9ucyk7XG4gICAgdGhpcy5hY2Nlc3NUb2tlbiA9IG5ldyBBY2Nlc3NUb2tlbih0aGlzKTtcbiAgICB0aGlzLnZlcnNpb24gPSBwa2cudmVyc2lvbjtcbiAgfVxuXG4gIC8qKlxuICAgKiBNYWtlIGFuIGF1dGhlbnRpY2F0ZWQgR0VUIEFQSSBjYWxsLlxuICAgKlxuICAgKiBgYGBqc1xuICAgKiBhbWFkZXVzLmNsaWVudC5nZXQoJy92Mi9mb28vYmFyJywgeyBzb21lOiAnZGF0YScgfSk7XG4gICAqIGBgYFxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCB0aGUgZnVsbCBwYXRoIG9mIHRoZSBBUEkgZW5kcG9pbnRcbiAgICogQHBhcmFtIHtPYmplY3R9IFtwYXJhbXM9e31dIHRoZSBxdWVyeSBzdHJpbmcgcGFyYW1ldGVyc1xuICAgKiBAcmV0dXJuIHtQcm9taXNlLjxSZXNwb25zZSxSZXNwb25zZUVycm9yPn0gYSBQcm9taXNlXG4gICAqL1xuICBnZXQocGF0aCwgcGFyYW1zID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KCdHRVQnLCBwYXRoLCBwYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ha2UgYW4gYXV0aGVudGljYXRlZCBQT1NUIEFQSSBjYWxsLlxuICAgKlxuICAgKiBgYGBqc1xuICAgKiBhbWFkZXVzLmNsaWVudC5wb3N0KCcvdjIvZm9vL2JhcicsIHsgc29tZTogJ2RhdGEnIH0pO1xuICAgKiBgYGBcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggdGhlIGZ1bGwgcGF0aCBvZiB0aGUgQVBJIGVuZHBvaW50XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBbcGFyYW1zPXt9XSB0aGUgUE9TVCBwYXJhbWV0ZXJzXG4gICAqIEByZXR1cm4ge1Byb21pc2UuPFJlc3BvbnNlLFJlc3BvbnNlRXJyb3I+fSBhIFByb21pc2VcbiAgICovXG4gIHBvc3QocGF0aCwgcGFyYW1zID0ge30pIHtcbiAgICBjb25zdCBzdHJpbmdpZmllZFBhcmFtcyA9IHR5cGVvZiBwYXJhbXMgPT09ICdzdHJpbmcnID8gcGFyYW1zIDogSlNPTi5zdHJpbmdpZnkocGFyYW1zKTtcbiAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KCdQT1NUJywgcGF0aCwgc3RyaW5naWZpZWRQYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIE1ha2UgYW4gYXV0aGVudGljYXRlZCBERUxFVEUgQVBJIGNhbGwuXG4gICAqXG4gICAqIGBgYGpzXG4gICAqIGFtYWRldXMuY2xpZW50LmRlbGV0ZSgnL3YyL2Zvby9iYXInLCB7IHNvbWU6ICdkYXRhJyB9KTtcbiAgICogYGBgXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIHRoZSBmdWxsIHBhdGggb2YgdGhlIEFQSSBlbmRwb2ludFxuICAgKiBAcGFyYW0ge09iamVjdH0gW3BhcmFtcz17fV0gdGhlIHF1ZXJ5IHN0cmluZyBwYXJhbWV0ZXJzXG4gICAqIEByZXR1cm4ge1Byb21pc2UuPFJlc3BvbnNlLFJlc3BvbnNlRXJyb3I+fSBhIFByb21pc2VcbiAgICovXG4gIGRlbGV0ZShwYXRoLCBwYXJhbXMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLnJlcXVlc3QoJ0RFTEVURScsIHBhdGgsIHBhcmFtcyk7XG4gIH1cblxuICAvLyBQUk9URUNURURcblxuICAvKipcbiAgICogTWFrZSBhbiBhdXRoZW50aWNhdGVkIEFQSSBjYWxsLlxuICAgKlxuICAgKiBgYGBqc1xuICAgKiBhbWFkZXVzLmNsaWVudC5jYWxsKCdHRVQnLCAnL3YyL2Zvby9iYXInLCB7IHNvbWU6ICdkYXRhJyB9KTtcbiAgICogYGBgXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB2ZXJiIHRoZSBIVFRQIG1ldGhvZCwgZm9yIGV4YW1wbGUgYEdFVGAgb3IgYFBPU1RgXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIHRoZSBmdWxsIHBhdGggb2YgdGhlIEFQSSBlbmRwb2ludFxuICAgKiBAcGFyYW0ge09iamVjdH0gW3BhcmFtcz17fV0gdGhlIFBPU1QgcGFyYW1ldGVyc1xuICAgKiBAcmV0dXJuIHtQcm9taXNlLjxSZXNwb25zZSxSZXNwb25zZUVycm9yPn0gYSBQcm9taXNlXG4gICAqIEBwcm90ZWN0ZWRcbiAgICovXG4gIHJlcXVlc3QodmVyYiwgcGF0aCwgcGFyYW1zID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5hY2Nlc3NUb2tlbi5iZWFyZXJUb2tlbih0aGlzKS50aGVuKChiZWFyZXJUb2tlbikgPT4ge1xuICAgICAgcmV0dXJuIHRoaXMudW5hdXRoZW50aWNhdGVkUmVxdWVzdCh2ZXJiLCBwYXRoLCBwYXJhbXMsIGJlYXJlclRva2VuKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIFBSSVZBVEVcblxuICAvKipcbiAgICogTWFrZSBhbnkga2luZCBvZiBBUEkgY2FsbCwgYXV0aGVudGljYXRlZCBvciBub3RcbiAgICpcbiAgICogVXNlZCBieSB0aGUgLmdldCwgLnBvc3QgbWV0aG9kcyB0byBtYWtlIEFQSSBjYWxscy5cbiAgICpcbiAgICogU2V0cyB1cCBhIG5ldyBQcm9taXNlIGFuZCB0aGVuIGV4Y3V0ZXMgdGhlIEFQSSBjYWxsLCB0cmlnZ2VyaW5nIHRoZSBQcm9taXNlXG4gICAqIHRvIGJlIGNhbGxlZCB3aGVuIHRoZSBBUEkgY2FsbCBmYWlscyBvciBzdWNjZWVkcy5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZlcmIgdGhlIEhUVFAgbWV0aG9kLCBmb3IgZXhhbXBsZSBgR0VUYCBvciBgUE9TVGBcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggdGhlIGZ1bGwgcGF0aCBvZiB0aGUgQVBJIGVuZHBvaW50XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXMgdGhlIHBhcmFtZXRlcnMgdG8gcGFzcyBpbiB0aGUgcXVlcnkgb3IgYm9keVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2JlYXJlclRva2VuPW51bGxdIHRoZSBCZWFyZXJUb2tlbiBhcyBnZW5lcmF0ZWQgYnkgdGhlXG4gICAqICBBY2Nlc3NUb2tlbiBjbGFzc1xuICAgKiBAcmV0dXJuIHtQcm9taXNlLjxSZXNwb25zZSxSZXNwb25zZUVycm9yPn0gYSBQcm9taXNlXG4gICAqIEBwcml2YXRlXG4gICAqL1xuICB1bmF1dGhlbnRpY2F0ZWRSZXF1ZXN0KHZlcmIsIHBhdGgsIHBhcmFtcywgYmVhcmVyVG9rZW4gPSBudWxsKSB7XG4gICAgbGV0IHJlcXVlc3QgPSB0aGlzLmJ1aWxkUmVxdWVzdCh2ZXJiLCBwYXRoLCBwYXJhbXMsIGJlYXJlclRva2VuKTtcbiAgICB0aGlzLmxvZyhyZXF1ZXN0KTtcbiAgICBsZXQgZW1pdHRlciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICBsZXQgcHJvbWlzZSA9IHRoaXMuYnVpbGRQcm9taXNlKGVtaXR0ZXIpO1xuXG4gICAgdGhpcy5leGVjdXRlKHJlcXVlc3QsIGVtaXR0ZXIpO1xuICAgIHJldHVybiBwcm9taXNlO1xuICB9XG5cbiAgLyoqXG4gICAqIEFjdHVhbGx5IGV4ZWN1dGVzIHRoZSBBUEkgY2FsbC5cbiAgICpcbiAgICogQHBhcmFtIHtSZXF1ZXN0fSByZXF1ZXN0IHRoZSByZXF1ZXN0IHRvIGV4ZWN1dGVcbiAgICogQHBhcmFtIHtFdmVudEVtaXR0ZXJ9IGVtaXR0ZXIgdGhlIGV2ZW50IGVtaXR0ZXIgdG8gbm90aWZ5IG9mIGNoYW5nZXNcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGV4ZWN1dGUocmVxdWVzdCwgZW1pdHRlcikge1xuICAgIGxldCBodHRwX3JlcXVlc3QgPSB0aGlzLmh0dHAucmVxdWVzdChyZXF1ZXN0Lm9wdGlvbnMoKSk7XG4gICAgbGV0IGxpc3RlbmVyID0gbmV3IExpc3RlbmVyKHJlcXVlc3QsIGVtaXR0ZXIsIHRoaXMpO1xuICAgIGh0dHBfcmVxdWVzdC5vbigncmVzcG9uc2UnLCBsaXN0ZW5lci5vblJlc3BvbnNlLmJpbmQobGlzdGVuZXIpKTtcbiAgICBodHRwX3JlcXVlc3Qub24oJ2Vycm9yJywgICAgbGlzdGVuZXIub25FcnJvci5iaW5kKGxpc3RlbmVyKSk7XG4gICAgaHR0cF9yZXF1ZXN0LndyaXRlKHJlcXVlc3QuYm9keSgpKTtcbiAgICBodHRwX3JlcXVlc3QuZW5kKCk7XG4gIH1cblxuICAvKipcbiAgICogQnVpbGRzIGEgUmVxdWVzdCBvYmplY3QgdG8gYmUgdXNlZCBpbiB0aGUgQVBJIGNhbGxcbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHZlcmIgdGhlIEhUVFAgbWV0aG9kLCBmb3IgZXhhbXBsZSBgR0VUYCBvciBgUE9TVGBcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggdGhlIGZ1bGwgcGF0aCBvZiB0aGUgQVBJIGVuZHBvaW50XG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXMgdGhlIHBhcmFtZXRlcnMgdG8gcGFzcyBpbiB0aGUgcXVlcnkgb3IgYm9keVxuICAgKiBAcGFyYW0ge3N0cmluZ30gW2JlYXJlclRva2VuPW51bGxdIHRoZSBCZWFyZXJUb2tlbiBhcyBnZW5lcmF0ZWQgYnkgdGhlXG4gICAqICBBY2Nlc3NUb2tlbiBjbGFzc1xuICAgKiBAcmV0dXJuIHtSZXF1ZXN0fVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgYnVpbGRSZXF1ZXN0KHZlcmIsIHBhdGgsIHBhcmFtcywgYmVhcmVyVG9rZW4pIHtcbiAgICByZXR1cm4gbmV3IFJlcXVlc3Qoe1xuICAgICAgaG9zdDogdGhpcy5ob3N0LFxuICAgICAgdmVyYjogdmVyYixcbiAgICAgIHBhdGg6IHBhdGgsXG4gICAgICBwYXJhbXM6IHBhcmFtcyxcbiAgICAgIGJlYXJlclRva2VuOiBiZWFyZXJUb2tlbixcbiAgICAgIGNsaWVudFZlcnNpb246IHRoaXMudmVyc2lvbixcbiAgICAgIGxhbmd1YWdlVmVyc2lvbjogcHJvY2Vzcy52ZXJzaW9ucy5ub2RlLFxuICAgICAgYXBwSWQ6IHRoaXMuY3VzdG9tQXBwSWQsXG4gICAgICBhcHBWZXJzaW9uOiB0aGlzLmN1c3RvbUFwcFZlcnNpb24sXG4gICAgICBwb3J0OiB0aGlzLnBvcnQsXG4gICAgICBzc2w6IHRoaXMuc3NsXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQnVpbGRzIGEgUHJvbWlzZSB0byBiZSByZXR1cm5lZCB0byB0aGUgQVBJIHVzZXJcbiAgICpcbiAgICogQHBhcmFtICB7dHlwZX0gZW1pdHRlciB0aGUgZXZlbnQgZW1pdHRlciB0byBub3RpZnkgb2YgY2hhbmdlc1xuICAgKiBAcmV0dXJuIHtQcm9taXNlfSBhIHByb21pc2VcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGJ1aWxkUHJvbWlzZShlbWl0dGVyKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgIGVtaXR0ZXIub24oJ3Jlc29sdmUnLCByZXNwb25zZSA9PiByZXNvbHZlKHJlc3BvbnNlKSk7XG4gICAgICBlbWl0dGVyLm9uKCdyZWplY3QnLCBlcnJvciA9PiByZWplY3QoZXJyb3IpKTtcbiAgICB9KTtcbiAgfVxuXG5cbiAgLyoqXG4gICAqIExvZ3MgdGhlIHJlcXVlc3QsIHdoZW4gaW4gZGVidWcgbW9kZVxuICAgKlxuICAgKiBAcGFyYW0gIHtSZXF1ZXN0fSByZXF1ZXN0IHRoZSByZXF1ZXN0IG9iamVjdCB0byBsb2dcbiAgICogQHByaXZhdGVcbiAgICovXG4gIGxvZyhyZXF1ZXN0KSB7XG4gICAgLyogaXN0YW5idWwgaWdub3JlIG5leHQgKi9cbiAgICBpZih0aGlzLmRlYnVnKCkpIHsgdGhpcy5sb2dnZXIubG9nKHV0aWwuaW5zcGVjdChyZXF1ZXN0LCBmYWxzZSwgbnVsbCkpOyB9XG4gIH1cblxuICAvKipcbiAgICogRGV0ZXJtaW5lcyBpZiB0aGlzIGNsaWVudCBpcyBpbiBkZWJ1ZyBtb2RlXG4gICAqXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICBkZWJ1ZygpIHtcbiAgICByZXR1cm4gdGhpcy5sb2dMZXZlbCA9PSAnZGVidWcnO1xuICB9XG5cbiAgLyoqXG4gICAqIERldGVybWluZXMgaWYgdGhpcyBjbGllbnQgaXMgaW4gd2FybiBvciBkZWJ1ZyBtb2RlXG4gICAqXG4gICAqIEByZXR1cm4ge2Jvb2xlYW59XG4gICAqL1xuICB3YXJuKCkge1xuICAgIHJldHVybiB0aGlzLmxvZ0xldmVsID09ICd3YXJuJyB8fCB0aGlzLmRlYnVnKCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2xpZW50O1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxJQUFBQSxPQUFBLEdBQUFDLHNCQUFBLENBQUFDLE9BQUE7QUFDQSxJQUFBQyxLQUFBLEdBQUFGLHNCQUFBLENBQUFDLE9BQUE7QUFFQSxJQUFBRSxhQUFBLEdBQUFILHNCQUFBLENBQUFDLE9BQUE7QUFDQSxJQUFBRyxTQUFBLEdBQUFKLHNCQUFBLENBQUFDLE9BQUE7QUFDQSxJQUFBSSxRQUFBLEdBQUFMLHNCQUFBLENBQUFDLE9BQUE7QUFDQSxJQUFBSyxV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
}),
"[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/client/pagination.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
/**
 * A helper library for handling pagination.
 *
 * @param {Client} client the client to make the API calls against
 * @protected
 */ var Pagination = /*#__PURE__*/ function() {
    function Pagination(client) {
        _classCallCheck(this, Pagination);
        this.client = client;
    }
    /**
   * Fetch the page for the given page name, and make the next API call based on
   * the previous request made.
   *
   * @param  {type} pageName the name of the page to fetch, should be available
   *    as a link in the meta links in the response
   * @param  {type} response the response containing the links to the next pages,
   *   and the request used to make the previous call
   * @return {Promise.<Response,ResponseError>} a Promise
   * @protected
   */ return _createClass(Pagination, [
        {
            key: "page",
            value: function page(pageName, response) {
                var pageNumber = this.pageNumber(response, pageName);
                if (pageNumber) {
                    return this.call(response.request, pageNumber);
                } else {
                    return this.nullPromise();
                }
            }
        },
        {
            key: "call",
            value: function call(request, pageNumber) {
                var params = request.params || {};
                params['page'] = params['page'] || {};
                params['page']['offset'] = pageNumber;
                return this.client.request(request.verb, request.path, params);
            }
        },
        {
            key: "pageNumber",
            value: function pageNumber(response, pageName) {
                try {
                    return response.result['meta']['links'][pageName].split('page%5Boffset%5D=')[1].split('&')[0];
                } catch (TypeError1) {
                    return null;
                }
            }
        },
        {
            key: "nullPromise",
            value: function nullPromise() {
                return new Promise(function(resolve) {
                    resolve(null);
                });
            }
        }
    ]);
}();
var _default = exports["default"] = Pagination;
module.exports = exports.default; //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJQYWdpbmF0aW9uIiwiY2xpZW50IiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJwYWdlIiwicGFnZU5hbWUiLCJyZXNwb25zZSIsInBhZ2VOdW1iZXIiLCJjYWxsIiwicmVxdWVzdCIsIm51bGxQcm9taXNlIiwicGFyYW1zIiwidmVyYiIsInBhdGgiLCJyZXN1bHQiLCJzcGxpdCIsIlR5cGVFcnJvciIsIlByb21pc2UiLCJyZXNvbHZlIiwiX2RlZmF1bHQiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmYXVsdCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hbWFkZXVzL2NsaWVudC9wYWdpbmF0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQSBoZWxwZXIgbGlicmFyeSBmb3IgaGFuZGxpbmcgcGFnaW5hdGlvbi5cbiAqXG4gKiBAcGFyYW0ge0NsaWVudH0gY2xpZW50IHRoZSBjbGllbnQgdG8gbWFrZSB0aGUgQVBJIGNhbGxzIGFnYWluc3RcbiAqIEBwcm90ZWN0ZWRcbiAqL1xuY2xhc3MgUGFnaW5hdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNsaWVudCkge1xuICAgIHRoaXMuY2xpZW50ID0gY2xpZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIEZldGNoIHRoZSBwYWdlIGZvciB0aGUgZ2l2ZW4gcGFnZSBuYW1lLCBhbmQgbWFrZSB0aGUgbmV4dCBBUEkgY2FsbCBiYXNlZCBvblxuICAgKiB0aGUgcHJldmlvdXMgcmVxdWVzdCBtYWRlLlxuICAgKlxuICAgKiBAcGFyYW0gIHt0eXBlfSBwYWdlTmFtZSB0aGUgbmFtZSBvZiB0aGUgcGFnZSB0byBmZXRjaCwgc2hvdWxkIGJlIGF2YWlsYWJsZVxuICAgKiAgICBhcyBhIGxpbmsgaW4gdGhlIG1ldGEgbGlua3MgaW4gdGhlIHJlc3BvbnNlXG4gICAqIEBwYXJhbSAge3R5cGV9IHJlc3BvbnNlIHRoZSByZXNwb25zZSBjb250YWluaW5nIHRoZSBsaW5rcyB0byB0aGUgbmV4dCBwYWdlcyxcbiAgICogICBhbmQgdGhlIHJlcXVlc3QgdXNlZCB0byBtYWtlIHRoZSBwcmV2aW91cyBjYWxsXG4gICAqIEByZXR1cm4ge1Byb21pc2UuPFJlc3BvbnNlLFJlc3BvbnNlRXJyb3I+fSBhIFByb21pc2VcbiAgICogQHByb3RlY3RlZFxuICAgKi9cbiAgcGFnZShwYWdlTmFtZSwgcmVzcG9uc2UpIHtcbiAgICBsZXQgcGFnZU51bWJlciA9IHRoaXMucGFnZU51bWJlcihyZXNwb25zZSwgcGFnZU5hbWUpO1xuXG4gICAgaWYgKHBhZ2VOdW1iZXIpIHtcbiAgICAgIHJldHVybiB0aGlzLmNhbGwocmVzcG9uc2UucmVxdWVzdCwgcGFnZU51bWJlcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0aGlzLm51bGxQcm9taXNlKCk7XG4gICAgfVxuICB9XG5cbiAgLy8gUFJJVkFURVxuXG5cbiAgLyoqXG4gICAqIE1ha2VzIGEgbmV3IGNhbGwgZm9yIHRoZSBuZXcgcGFnZSBudW1iZXJcbiAgICpcbiAgICogQHBhcmFtICB7dHlwZX0gcmVxdWVzdCAgICB0aGUgcmVxdWVzdCB1c2VkIHRvIG1ha2UgdGhlIHByZXZpb3VzIGNhbGxcbiAgICogQHBhcmFtICB7dHlwZX0gcGFnZU51bWJlciB0aGUgcGFnZSBudW1iZXIgdG8gZmV0Y2hcbiAgICogQHJldHVybiB7UHJvbWlzZS48UmVzcG9uc2UsUmVzcG9uc2VFcnJvcj59IGEgUHJvbWlzZVxuICAgKiBAcHJpdmF0ZVxuICAgKi9cbiAgY2FsbChyZXF1ZXN0LCBwYWdlTnVtYmVyKSB7XG4gICAgbGV0IHBhcmFtcyA9IHJlcXVlc3QucGFyYW1zIHx8IHt9O1xuICAgIHBhcmFtc1sncGFnZSddID0gcGFyYW1zWydwYWdlJ10gfHwge307XG4gICAgcGFyYW1zWydwYWdlJ11bJ29mZnNldCddID0gcGFnZU51bWJlcjtcblxuICAgIHJldHVybiB0aGlzLmNsaWVudC5yZXF1ZXN0KFxuICAgICAgcmVxdWVzdC52ZXJiLFxuICAgICAgcmVxdWVzdC5wYXRoLFxuICAgICAgcGFyYW1zXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUcmllcyB0byBkZXRlcm1pbmUgdGhlIHBhZ2UgbnVtYmVyIGZyb20gdGhlIHBhZ2UgbmFtZS4gSWYgbm90IHByZXNlbnQsIGl0XG4gICAqIGp1c3QgcmV0dXJucyBudWxsXG4gICAqXG4gICAqIEBwYXJhbSAge3R5cGV9IHJlc3BvbnNlIHRoZSByZXNwb25zZSBjb250YWluaW5nIHRoZSBsaW5rcyB0byB0aGUgbmV4dCBwYWdlc1xuICAgKiBAcGFyYW0gIHt0eXBlfSBwYWdlTmFtZSB0aGUgbmFtZSBvZiB0aGUgcGFnZSB0byBmZXRjaFxuICAgKiBAcmV0dXJuIHtudW1iZXJ9XG4gICAqIEBwcml2YXRlXG4gICAqL1xuICBwYWdlTnVtYmVyKHJlc3BvbnNlLCBwYWdlTmFtZSkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gcmVzcG9uc2UucmVzdWx0WydtZXRhJ11bJ2xpbmtzJ11bcGFnZU5hbWVdXG4gICAgICAgIC5zcGxpdCgncGFnZSU1Qm9mZnNldCU1RD0nKVsxXS5zcGxpdCgnJicpWzBdO1xuICAgIH0gY2F0Y2ggKFR5cGVFcnJvcikge1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBQcm9taXNlIHRoYXQgYWx3YXlzIHJlc29sdmVzIHRvIG51bGxcbiAgICpcbiAgICogQHJldHVybiB7UHJvbWlzZX0gYSBQcm9taXNlIHRoYXQgYWx3YXlzIHJlc29sdmVzIHRvIG51bGxcbiAgICogQHByaXZhdGVcbiAgICovXG4gIG51bGxQcm9taXNlKCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlKSB7IHJlc29sdmUobnVsbCk7IH0pO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBhZ2luYXRpb247XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBLElBTU1BLFVBQVU7RUFDZCxTQUFBQSxXQUFZQyxNQUFNLEVBQUU7SUFBQUMsZUFBQSxPQUFBRixVQUFBO0lBQ2xCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQSxNQUFNO0VBQ3RCOztFQUVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFWRSxPQUFBRSxZQUFBLENBQUFILFVBQUE7SUFBQUksR0FBQTtJQUFBQyxLQUFBLEVBV0EsU0FBQUMsSUFBSUEsQ0FBQ0MsUUFBUSxFQUFFQyxRQUFRLEVBQUU7TUFDdkIsSUFBSUMsVUFBVSxHQUFHLElBQUksQ0FBQ0EsVUFBVSxDQUFDRCxRQUFRLEVBQUVELFFBQVEsQ0FBQztNQUVwRCxJQUFJRSxVQUFVLEVBQUU7UUFDZCxPQUFPLElBQUksQ0FBQ0MsSUFBSSxDQUFDRixRQUFRLENBQUNHLE9BQU8sRUFBRUYsVUFBVSxDQUFDO01BQ2hELENBQUMsTUFBTTtRQUNMLE9BQU8sSUFBSSxDQUFDRyxXQUFXLENBQUMsQ0FBQztNQUMzQjtJQUNGOztJQUVBOztJQUdBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFQRTtJQUFBUixHQUFBO0lBQUFDLEtBQUEsRUFRQSxTQUFBSyxJQUFJQSxDQUFDQyxPQUFPLEVBQUVGLFVBQVUsRUFBRTtNQUN4QixJQUFJSSxNQUFNLEdBQUdGLE9BQU8sQ0FBQ0UsTUFBTSxJQUFJLENBQUMsQ0FBQztNQUNqQ0EsTUFBTSxDQUFDLE1BQU0sQ0FBQyxHQUFHQSxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO01BQ3JDQSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLEdBQUdKLFVBQVU7TUFFckMsT0FBTyxJQUFJLENBQUNSLE1BQU0sQ0FBQ1UsT0FBTyxDQUN4QkEsT0FBTyxDQUFDRyxJQUFJLEVBQ1pILE9BQU8sQ0FBQ0ksSUFBSSxFQUNaRixNQUNGLENBQUM7SUFDSDs7SUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFSRTtJQUFBVCxHQUFBO0lBQUFDLEtBQUEsRUFTQSxTQUFBSSxVQUFVQSxDQUFDRCxRQUFRLEVBQUVELFFBQVEsRUFBRTtNQUM3QixJQUFJO1FBQ0YsT0FBT0MsUUFBUSxDQUFDUSxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUNULFFBQVEsQ0FBQyxDQUM5Q1UsS0FBSyxDQUFDLG1CQUFtQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUNBLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDaEQsQ0FBQyxDQUFDLE9BQU9DLFNBQVMsRUFBRTtRQUNsQixPQUFPLElBQUk7TUFDYjtJQUNGOztJQUVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUxFO0lBQUFkLEdBQUE7SUFBQUMsS0FBQSxFQU1BLFNBQUFPLFdBQVdBLENBQUEsRUFBRztNQUNaLE9BQU8sSUFBSU8sT0FBTyxDQUFDLFVBQVNDLE9BQU8sRUFBRTtRQUFFQSxPQUFPLENBQUMsSUFBSSxDQUFDO01BQUUsQ0FBQyxDQUFDO0lBQzFEO0VBQUM7QUFBQTtBQUFBLElBQUFDLFFBQUEsR0FBQUMsT0FBQSxjQUdZdEIsVUFBVTtBQUFBdUIsTUFBQSxDQUFBRCxPQUFBLEdBQUFBLE9BQUEsQ0FBQUUsT0FBQSIsImlnbm9yZUxpc3QiOltdfQ==
}),
"[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/reference_data/urls/checkin_links.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
/**
 * A namespaced client for the
 * `/v2/reference-data/urls/checkin-links` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.referenceData.urls.checkinLinks;
 * ```
 *
 * @param {Client} client
 */ var CheckinLinks = /*#__PURE__*/ function() {
    function CheckinLinks(client) {
        _classCallCheck(this, CheckinLinks);
        this.client = client;
    }
    /**
   * Returns the checkin links for an airline, for the
   * language of your choice
   *
   * @param {Object} params
   * @param {string} params.airlineCode airline ID - required
   * @param {string} [params.language="en-GB"] the locale for the links
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * Find a the checkin links for Air France
   *
   * ```js
   * amadeus.referenceData.urls.checkinLinks.get({
   *   airlineCode: 'AF'
   * });
   * ```
   */ return _createClass(CheckinLinks, [
        {
            key: "get",
            value: function get() {
                var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                return this.client.get('/v2/reference-data/urls/checkin-links', params);
            }
        }
    ]);
}();
var _default = exports["default"] = CheckinLinks;
module.exports = exports.default; //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJDaGVja2luTGlua3MiLCJjbGllbnQiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImdldCIsInBhcmFtcyIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmF1bHQiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvYW1hZGV1cy9uYW1lc3BhY2VzL3JlZmVyZW5jZV9kYXRhL3VybHMvY2hlY2tpbl9saW5rcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEEgbmFtZXNwYWNlZCBjbGllbnQgZm9yIHRoZVxuICogYC92Mi9yZWZlcmVuY2UtZGF0YS91cmxzL2NoZWNraW4tbGlua3NgIGVuZHBvaW50c1xuICpcbiAqIEFjY2VzcyB2aWEgdGhlIHtAbGluayBBbWFkZXVzfSBvYmplY3RcbiAqXG4gKiBgYGBqc1xuICogbGV0IGFtYWRldXMgPSBuZXcgQW1hZGV1cygpO1xuICogYW1hZGV1cy5yZWZlcmVuY2VEYXRhLnVybHMuY2hlY2tpbkxpbmtzO1xuICogYGBgXG4gKlxuICogQHBhcmFtIHtDbGllbnR9IGNsaWVudFxuICovXG5jbGFzcyBDaGVja2luTGlua3Mge1xuICBjb25zdHJ1Y3RvcihjbGllbnQpIHtcbiAgICB0aGlzLmNsaWVudCA9IGNsaWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIHRoZSBjaGVja2luIGxpbmtzIGZvciBhbiBhaXJsaW5lLCBmb3IgdGhlXG4gICAqIGxhbmd1YWdlIG9mIHlvdXIgY2hvaWNlXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXNcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtcy5haXJsaW5lQ29kZSBhaXJsaW5lIElEIC0gcmVxdWlyZWRcbiAgICogQHBhcmFtIHtzdHJpbmd9IFtwYXJhbXMubGFuZ3VhZ2U9XCJlbi1HQlwiXSB0aGUgbG9jYWxlIGZvciB0aGUgbGlua3NcbiAgICogQHJldHVybiB7UHJvbWlzZS48UmVzcG9uc2UsUmVzcG9uc2VFcnJvcj59IGEgUHJvbWlzZVxuICAgKlxuICAgKiBGaW5kIGEgdGhlIGNoZWNraW4gbGlua3MgZm9yIEFpciBGcmFuY2VcbiAgICpcbiAgICogYGBganNcbiAgICogYW1hZGV1cy5yZWZlcmVuY2VEYXRhLnVybHMuY2hlY2tpbkxpbmtzLmdldCh7XG4gICAqICAgYWlybGluZUNvZGU6ICdBRidcbiAgICogfSk7XG4gICAqIGBgYFxuICAgKi9cbiAgZ2V0KHBhcmFtcyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuY2xpZW50LmdldCgnL3YyL3JlZmVyZW5jZS1kYXRhL3VybHMvY2hlY2tpbi1saW5rcycsIHBhcmFtcyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQ2hlY2tpbkxpbmtzO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBLElBYU1BLFlBQVk7RUFDaEIsU0FBQUEsYUFBWUMsTUFBTSxFQUFFO0lBQUFDLGVBQUEsT0FBQUYsWUFBQTtJQUNsQixJQUFJLENBQUNDLE1BQU0sR0FBR0EsTUFBTTtFQUN0Qjs7RUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBaEJFLE9BQUFFLFlBQUEsQ0FBQUgsWUFBQTtJQUFBSSxHQUFBO0lBQUFDLEtBQUEsRUFpQkEsU0FBQUMsR0FBR0EsQ0FBQSxFQUFjO01BQUEsSUFBYkMsTUFBTSxHQUFBQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBRyxDQUFDLENBQUM7TUFDYixPQUFPLElBQUksQ0FBQ1AsTUFBTSxDQUFDSyxHQUFHLENBQUMsdUNBQXVDLEVBQUVDLE1BQU0sQ0FBQztJQUN6RTtFQUFDO0FBQUE7QUFBQSxJQUFBSSxRQUFBLEdBQUFDLE9BQUEsY0FHWVosWUFBWTtBQUFBYSxNQUFBLENBQUFELE9BQUEsR0FBQUEsT0FBQSxDQUFBRSxPQUFBIiwiaWdub3JlTGlzdCI6W119
}),
"[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/reference_data/urls.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _checkin_links = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/reference_data/urls/checkin_links.js [app-route] (ecmascript)"));
function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        "default": e
    };
}
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
/**
 * A namespaced client for the
 * `/v2/reference-data/urls` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.referenceData.urls;
 * ```
 *
 * @param {Client} client
 * @property {CheckinLinks} checkin_links
 * @protected
 */ var Urls = /*#__PURE__*/ _createClass(function Urls(client) {
    _classCallCheck(this, Urls);
    this.client = client;
    this.checkinLinks = new _checkin_links["default"](client);
});
var _default = exports["default"] = Urls;
module.exports = exports.default; //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY2hlY2tpbl9saW5rcyIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiZSIsIl9fZXNNb2R1bGUiLCJfZGVmaW5lUHJvcGVydGllcyIsInIiLCJ0IiwibGVuZ3RoIiwibyIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX3RvUHJvcGVydHlLZXkiLCJrZXkiLCJfY3JlYXRlQ2xhc3MiLCJwcm90b3R5cGUiLCJpIiwiX3RvUHJpbWl0aXZlIiwiX3R5cGVvZiIsIlN5bWJvbCIsInRvUHJpbWl0aXZlIiwiY2FsbCIsIlR5cGVFcnJvciIsIlN0cmluZyIsIk51bWJlciIsIl9jbGFzc0NhbGxDaGVjayIsImEiLCJuIiwiVXJscyIsImNsaWVudCIsImNoZWNraW5MaW5rcyIsIkNoZWNraW5MaW5rcyIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmF1bHQiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYW1hZGV1cy9uYW1lc3BhY2VzL3JlZmVyZW5jZV9kYXRhL3VybHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENoZWNraW5MaW5rcyBmcm9tICcuL3VybHMvY2hlY2tpbl9saW5rcyc7XG5cbi8qKlxuICogQSBuYW1lc3BhY2VkIGNsaWVudCBmb3IgdGhlXG4gKiBgL3YyL3JlZmVyZW5jZS1kYXRhL3VybHNgIGVuZHBvaW50c1xuICpcbiAqIEFjY2VzcyB2aWEgdGhlIHtAbGluayBBbWFkZXVzfSBvYmplY3RcbiAqXG4gKiBgYGBqc1xuICogbGV0IGFtYWRldXMgPSBuZXcgQW1hZGV1cygpO1xuICogYW1hZGV1cy5yZWZlcmVuY2VEYXRhLnVybHM7XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge0NsaWVudH0gY2xpZW50XG4gKiBAcHJvcGVydHkge0NoZWNraW5MaW5rc30gY2hlY2tpbl9saW5rc1xuICogQHByb3RlY3RlZFxuICovXG5jbGFzcyBVcmxzIHtcbiAgY29uc3RydWN0b3IoY2xpZW50KSB7XG4gICAgdGhpcy5jbGllbnQgPSBjbGllbnQ7XG4gICAgdGhpcy5jaGVja2luTGlua3MgPSBuZXcgQ2hlY2tpbkxpbmtzKGNsaWVudCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgVXJscztcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLElBQUFBLGNBQUEsR0FBQUMsc0JBQUEsQ0FBQUMsT0FBQTtBQUFnRCxTQUFBRCx1QkFBQUUsQ0FBQSxXQUFBQSxDQUFBLElBQUFBLENBQUEsQ0FBQUMsVUFBQSxHQUFBRCxDQUFBLGdCQUFBQSxDQUFBO0FBQUEsU0FBQUUsa0JBQUFGLENBQUEsRUFBQUcsQ0FBQSxhQUFBQyxDQUFBLE1BQUFBLENBQUEsR0FBQUQsQ0FBQSxDQUFBRSxNQUFBLEVBQUFELENBQUEsVUFBQUUsQ0FBQSxHQUFBSCxDQUFBLENBQUFDLENBQUEsR0FBQUUsQ0FBQSxDQUFBQyxVQUFBLEdBQUFELENBQUEsQ0FBQUMsVUFBQSxRQUFBRCxDQUFBLENBQUFFLFlBQUEsa0JBQUFGLENBQUEsS0FBQUEsQ0FBQSxDQUFBRyxRQUFBLFFBQUFDLE1BQUEsQ0FBQUMsY0FBQSxDQUFBWCxDQUFBLEVBQUFZLGNBQUEsQ0FBQU4sQ0FBQSxDQUFBTyxHQUFBLEdBQUFQLENBQUE7QUFBQSxTQUFBUSxhQUFBZCxDQUFBLEVBQUFHLENBQUEsRUFBQUMsQ0FBQSxXQUFBRCxDQUFBLElBQUFELGlCQUFBLENBQUFGLENBQUEsQ0FBQWUsU0FBQSxFQUFBWixDQUFBLEdBQUFDLENBQUEsSUFBQUYsaUJBQUEsQ0FBQUYsQ0FBQSxFQUFBSSxDQUFBLEdBQUFNLE1BQUEsQ0FBQUMsY0FBQSxDQUFBWCxDQUFBLGlCQUFBUyxRQUFBLFNBQUFULENBQUE7QUFBQSxTQUFBWSxlQUFBUixDQUFBLFFBQUFZLENBQUEsR0FBQUMsWUFBQSxDQUFBYixDQUFBLGdDQUFBYyxPQUFBLENBQUFGLENBQUEsSUFBQUEsQ0FBQSxHQUFBQSxDQUFBO0FBQUEsU0FBQUMsYUFBQWIsQ0FBQSxFQUFBRCxDQUFBLG9CQUFBZSxPQUFBLENBQUFkLENBQUEsTUFBQUEsQ0FBQSxTQUFBQSxDQUFBLE1BQUFKLENBQUEsR0FBQUksQ0FBQSxDQUFBZSxNQUFBLENBQUFDLFdBQUEsa0JBQUFwQixDQUFBLFFBQUFnQixDQUFBLEdBQUFoQixDQUFBLENBQUFxQixJQUFBLENBQUFqQixDQUFBLEVBQUFELENBQUEsZ0NBQUFlLE9BQUEsQ0FBQUYsQ0FBQSxVQUFBQSxDQUFBLFlBQUFNLFNBQUEseUVBQUFuQixDQUFBLEdBQUFvQixNQUFBLEdBQUFDLE1BQUEsRUFBQXBCLENBQUE7QUFBQSxTQUFBcUIsZ0JBQUFDLENBQUEsRUFBQUMsQ0FBQSxVQUFBRCxDQUFBLFlBQUFDLENBQUEsYUFBQUwsU0FBQTtBQUVoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFkQSxJQWVNTSxJQUFJLGdCQUFBZCxZQUFBLENBQ1IsU0FBQWMsS0FBWUMsTUFBTSxFQUFFO0VBQUFKLGVBQUEsT0FBQUcsSUFBQTtFQUNsQixJQUFJLENBQUNDLE1BQU0sR0FBR0EsTUFBTTtFQUNwQixJQUFJLENBQUNDLFlBQVksR0FBRyxJQUFJQyx5QkFBWSxDQUFDRixNQUFNLENBQUM7QUFDOUMsQ0FBQztBQUFBLElBQUFHLFFBQUEsR0FBQUMsT0FBQSxjQUdZTCxJQUFJO0FBQUFNLE1BQUEsQ0FBQUQsT0FBQSxHQUFBQSxPQUFBLENBQUFFLE9BQUEiLCJpZ25vcmVMaXN0IjpbXX0=
}),
"[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/reference_data/locations/airports.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
/**
 * A namespaced client for the
 * `/v2/reference-data/locations/airports` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.referenceData.locations.airports;
 * ```
 *
 * @param {Client} client
 */ var Airports = /*#__PURE__*/ function() {
    function Airports(client) {
        _classCallCheck(this, Airports);
        this.client = client;
    }
    /**
   * Returns a list of relevant airports near to a given point.
   *
   * @param {Object} params
   * @param {Double} params.latitude latitude location to be at the center of
   *   the search circle - required
   * @param {Double} params.longitude longitude location to be at the center of
   *   the search circle - required
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * Find the nearest airport to the 49.0000,2.55 lat/long
   *
   * ```js
   * amadeus.referenceData.locations.airports.get({
   *   longitude: 49.0000,
   *   latitude: 2.55
   * });
   * ```
   */ return _createClass(Airports, [
        {
            key: "get",
            value: function get() {
                var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                return this.client.get('/v1/reference-data/locations/airports', params);
            }
        }
    ]);
}();
var _default = exports["default"] = Airports;
module.exports = exports.default; //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJBaXJwb3J0cyIsImNsaWVudCIsIl9jbGFzc0NhbGxDaGVjayIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiZ2V0IiwicGFyYW1zIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiX2RlZmF1bHQiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmYXVsdCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hbWFkZXVzL25hbWVzcGFjZXMvcmVmZXJlbmNlX2RhdGEvbG9jYXRpb25zL2FpcnBvcnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQSBuYW1lc3BhY2VkIGNsaWVudCBmb3IgdGhlXG4gKiBgL3YyL3JlZmVyZW5jZS1kYXRhL2xvY2F0aW9ucy9haXJwb3J0c2AgZW5kcG9pbnRzXG4gKlxuICogQWNjZXNzIHZpYSB0aGUge0BsaW5rIEFtYWRldXN9IG9iamVjdFxuICpcbiAqIGBgYGpzXG4gKiBsZXQgYW1hZGV1cyA9IG5ldyBBbWFkZXVzKCk7XG4gKiBhbWFkZXVzLnJlZmVyZW5jZURhdGEubG9jYXRpb25zLmFpcnBvcnRzO1xuICogYGBgXG4gKlxuICogQHBhcmFtIHtDbGllbnR9IGNsaWVudFxuICovXG5jbGFzcyBBaXJwb3J0cyB7XG4gIGNvbnN0cnVjdG9yKGNsaWVudCkge1xuICAgIHRoaXMuY2xpZW50ID0gY2xpZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBsaXN0IG9mIHJlbGV2YW50IGFpcnBvcnRzIG5lYXIgdG8gYSBnaXZlbiBwb2ludC5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtc1xuICAgKiBAcGFyYW0ge0RvdWJsZX0gcGFyYW1zLmxhdGl0dWRlIGxhdGl0dWRlIGxvY2F0aW9uIHRvIGJlIGF0IHRoZSBjZW50ZXIgb2ZcbiAgICogICB0aGUgc2VhcmNoIGNpcmNsZSAtIHJlcXVpcmVkXG4gICAqIEBwYXJhbSB7RG91YmxlfSBwYXJhbXMubG9uZ2l0dWRlIGxvbmdpdHVkZSBsb2NhdGlvbiB0byBiZSBhdCB0aGUgY2VudGVyIG9mXG4gICAqICAgdGhlIHNlYXJjaCBjaXJjbGUgLSByZXF1aXJlZFxuICAgKiBAcmV0dXJuIHtQcm9taXNlLjxSZXNwb25zZSxSZXNwb25zZUVycm9yPn0gYSBQcm9taXNlXG4gICAqXG4gICAqIEZpbmQgdGhlIG5lYXJlc3QgYWlycG9ydCB0byB0aGUgNDkuMDAwMCwyLjU1IGxhdC9sb25nXG4gICAqXG4gICAqIGBgYGpzXG4gICAqIGFtYWRldXMucmVmZXJlbmNlRGF0YS5sb2NhdGlvbnMuYWlycG9ydHMuZ2V0KHtcbiAgICogICBsb25naXR1ZGU6IDQ5LjAwMDAsXG4gICAqICAgbGF0aXR1ZGU6IDIuNTVcbiAgICogfSk7XG4gICAqIGBgYFxuICAgKi9cbiAgZ2V0KHBhcmFtcyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuY2xpZW50LmdldCgnL3YxL3JlZmVyZW5jZS1kYXRhL2xvY2F0aW9ucy9haXJwb3J0cycsIHBhcmFtcyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQWlycG9ydHM7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWkEsSUFhTUEsUUFBUTtFQUNaLFNBQUFBLFNBQVlDLE1BQU0sRUFBRTtJQUFBQyxlQUFBLE9BQUFGLFFBQUE7SUFDbEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBLE1BQU07RUFDdEI7O0VBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFsQkUsT0FBQUUsWUFBQSxDQUFBSCxRQUFBO0lBQUFJLEdBQUE7SUFBQUMsS0FBQSxFQW1CQSxTQUFBQyxHQUFHQSxDQUFBLEVBQWM7TUFBQSxJQUFiQyxNQUFNLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFHLENBQUMsQ0FBQztNQUNiLE9BQU8sSUFBSSxDQUFDUCxNQUFNLENBQUNLLEdBQUcsQ0FBQyx1Q0FBdUMsRUFBRUMsTUFBTSxDQUFDO0lBQ3pFO0VBQUM7QUFBQTtBQUFBLElBQUFJLFFBQUEsR0FBQUMsT0FBQSxjQUdZWixRQUFRO0FBQUFhLE1BQUEsQ0FBQUQsT0FBQSxHQUFBQSxPQUFBLENBQUFFLE9BQUEiLCJpZ25vcmVMaXN0IjpbXX0=
}),
"[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/reference_data/locations/cities.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
/**
 * A namespaced client for the
 * `/v2/reference-data/locations/cities` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.referenceData.locations.cities;
 * ```
 *
 * @param {Client} client
 */ var Cities = /*#__PURE__*/ function() {
    function Cities(client) {
        _classCallCheck(this, Cities);
        this.client = client;
    }
    /**
   * Return a list of cities matching a given keyword..
   *
   * @param {Object} params
   * @param {string} params.keyword keyword that should represent
   * the start of a word in a city name
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * Return a list of cities matching a keyword 'France'
   *
   * ```js
   * amadeus.referenceData.locations.cities.get({
   *   keyword: 'FRANCE'
   * });
   * ```
   */ return _createClass(Cities, [
        {
            key: "get",
            value: function get() {
                var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                return this.client.get('/v1/reference-data/locations/cities', params);
            }
        }
    ]);
}();
var _default = exports["default"] = Cities;
module.exports = exports.default; //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJDaXRpZXMiLCJjbGllbnQiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImdldCIsInBhcmFtcyIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmF1bHQiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvYW1hZGV1cy9uYW1lc3BhY2VzL3JlZmVyZW5jZV9kYXRhL2xvY2F0aW9ucy9jaXRpZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBBIG5hbWVzcGFjZWQgY2xpZW50IGZvciB0aGVcbiAqIGAvdjIvcmVmZXJlbmNlLWRhdGEvbG9jYXRpb25zL2NpdGllc2AgZW5kcG9pbnRzXG4gKlxuICogQWNjZXNzIHZpYSB0aGUge0BsaW5rIEFtYWRldXN9IG9iamVjdFxuICpcbiAqIGBgYGpzXG4gKiBsZXQgYW1hZGV1cyA9IG5ldyBBbWFkZXVzKCk7XG4gKiBhbWFkZXVzLnJlZmVyZW5jZURhdGEubG9jYXRpb25zLmNpdGllcztcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7Q2xpZW50fSBjbGllbnRcbiAqL1xuY2xhc3MgQ2l0aWVzIHtcbiAgY29uc3RydWN0b3IoY2xpZW50KSB7XG4gICAgdGhpcy5jbGllbnQgPSBjbGllbnQ7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGEgbGlzdCBvZiBjaXRpZXMgbWF0Y2hpbmcgYSBnaXZlbiBrZXl3b3JkLi5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zLmtleXdvcmQga2V5d29yZCB0aGF0IHNob3VsZCByZXByZXNlbnRcbiAgICogdGhlIHN0YXJ0IG9mIGEgd29yZCBpbiBhIGNpdHkgbmFtZVxuICAgKiBAcmV0dXJuIHtQcm9taXNlLjxSZXNwb25zZSxSZXNwb25zZUVycm9yPn0gYSBQcm9taXNlXG4gICAqXG4gICAqIFJldHVybiBhIGxpc3Qgb2YgY2l0aWVzIG1hdGNoaW5nIGEga2V5d29yZCAnRnJhbmNlJ1xuICAgKlxuICAgKiBgYGBqc1xuICAgKiBhbWFkZXVzLnJlZmVyZW5jZURhdGEubG9jYXRpb25zLmNpdGllcy5nZXQoe1xuICAgKiAgIGtleXdvcmQ6ICdGUkFOQ0UnXG4gICAqIH0pO1xuICAgKiBgYGBcbiAgICovXG4gIGdldChwYXJhbXMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmNsaWVudC5nZXQoJy92MS9yZWZlcmVuY2UtZGF0YS9sb2NhdGlvbnMvY2l0aWVzJywgcGFyYW1zKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDaXRpZXM7Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBLElBYU1BLE1BQU07RUFDVixTQUFBQSxPQUFZQyxNQUFNLEVBQUU7SUFBQUMsZUFBQSxPQUFBRixNQUFBO0lBQ2xCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQSxNQUFNO0VBQ3RCOztFQUVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBZkUsT0FBQUUsWUFBQSxDQUFBSCxNQUFBO0lBQUFJLEdBQUE7SUFBQUMsS0FBQSxFQWdCQSxTQUFBQyxHQUFHQSxDQUFBLEVBQWM7TUFBQSxJQUFiQyxNQUFNLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFHLENBQUMsQ0FBQztNQUNiLE9BQU8sSUFBSSxDQUFDUCxNQUFNLENBQUNLLEdBQUcsQ0FBQyxxQ0FBcUMsRUFBRUMsTUFBTSxDQUFDO0lBQ3ZFO0VBQUM7QUFBQTtBQUFBLElBQUFJLFFBQUEsR0FBQUMsT0FBQSxjQUdZWixNQUFNO0FBQUFhLE1BQUEsQ0FBQUQsT0FBQSxHQUFBQSxPQUFBLENBQUFFLE9BQUEiLCJpZ25vcmVMaXN0IjpbXX0=
}),
"[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/reference_data/locations/hotel.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
/**
 * A namespaced client for the
 * `/v1/reference-data/locations/hotel` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.referenceData.locations.hotel;
 * ```
 *
 * @param {Client} client
 */ var Hotel = /*#__PURE__*/ function() {
    function Hotel(client) {
        _classCallCheck(this, Hotel);
        this.client = client;
    }
    /**
   * Returns a list of hotels for a given area.
   *
   * @param {Object} params
   * @param {string} params.keyword Location query keyword Example: PARI
   * @param {string} params.subType Category of search - To enter several value, repeat the query parameter    * Use HOTEL_LEISURE to target aggregators or HOTEL_GDS to target directly the chains
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   *  Find relevant points of interest within an area in Barcelona
   * ```js
   * amadeus.referenceData.locations.hotel.get({
   *   keyword: 'PARI',
   *   subType: 'HOTEL_GDS'
   * })
    */ return _createClass(Hotel, [
        {
            key: "get",
            value: function get() {
                var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                return this.client.get('/v1/reference-data/locations/hotel', params);
            }
        }
    ]);
}();
var _default = exports["default"] = Hotel;
module.exports = exports.default; //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJIb3RlbCIsImNsaWVudCIsIl9jbGFzc0NhbGxDaGVjayIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiZ2V0IiwicGFyYW1zIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiX2RlZmF1bHQiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmYXVsdCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hbWFkZXVzL25hbWVzcGFjZXMvcmVmZXJlbmNlX2RhdGEvbG9jYXRpb25zL2hvdGVsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQSBuYW1lc3BhY2VkIGNsaWVudCBmb3IgdGhlXG4gKiBgL3YxL3JlZmVyZW5jZS1kYXRhL2xvY2F0aW9ucy9ob3RlbGAgZW5kcG9pbnRzXG4gKlxuICogQWNjZXNzIHZpYSB0aGUge0BsaW5rIEFtYWRldXN9IG9iamVjdFxuICpcbiAqIGBgYGpzXG4gKiBsZXQgYW1hZGV1cyA9IG5ldyBBbWFkZXVzKCk7XG4gKiBhbWFkZXVzLnJlZmVyZW5jZURhdGEubG9jYXRpb25zLmhvdGVsO1xuICogYGBgXG4gKlxuICogQHBhcmFtIHtDbGllbnR9IGNsaWVudFxuICovXG5jbGFzcyBIb3RlbCB7XG4gIGNvbnN0cnVjdG9yKGNsaWVudCkge1xuICAgIHRoaXMuY2xpZW50ID0gY2xpZW50O1xuICB9XG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgbGlzdCBvZiBob3RlbHMgZm9yIGEgZ2l2ZW4gYXJlYS5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zLmtleXdvcmQgTG9jYXRpb24gcXVlcnkga2V5d29yZCBFeGFtcGxlOiBQQVJJXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMuc3ViVHlwZSBDYXRlZ29yeSBvZiBzZWFyY2ggLSBUbyBlbnRlciBzZXZlcmFsIHZhbHVlLCByZXBlYXQgdGhlIHF1ZXJ5IHBhcmFtZXRlciAgICAqIFVzZSBIT1RFTF9MRUlTVVJFIHRvIHRhcmdldCBhZ2dyZWdhdG9ycyBvciBIT1RFTF9HRFMgdG8gdGFyZ2V0IGRpcmVjdGx5IHRoZSBjaGFpbnNcbiAgICogQHJldHVybiB7UHJvbWlzZS48UmVzcG9uc2UsUmVzcG9uc2VFcnJvcj59IGEgUHJvbWlzZVxuICAgKlxuICAgKiAgRmluZCByZWxldmFudCBwb2ludHMgb2YgaW50ZXJlc3Qgd2l0aGluIGFuIGFyZWEgaW4gQmFyY2Vsb25hXG4gICAqIGBgYGpzXG4gICAqIGFtYWRldXMucmVmZXJlbmNlRGF0YS5sb2NhdGlvbnMuaG90ZWwuZ2V0KHtcbiAgICogICBrZXl3b3JkOiAnUEFSSScsXG4gICAqICAgc3ViVHlwZTogJ0hPVEVMX0dEUydcbiAgICogfSlcbiAgICAqL1xuICBnZXQocGFyYW1zID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5jbGllbnQuZ2V0KCcvdjEvcmVmZXJlbmNlLWRhdGEvbG9jYXRpb25zL2hvdGVsJywgcGFyYW1zKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb3RlbDtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFaQSxJQWFNQSxLQUFLO0VBQ1QsU0FBQUEsTUFBWUMsTUFBTSxFQUFFO0lBQUFDLGVBQUEsT0FBQUYsS0FBQTtJQUNsQixJQUFJLENBQUNDLE1BQU0sR0FBR0EsTUFBTTtFQUN0QjtFQUNBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQWRFLE9BQUFFLFlBQUEsQ0FBQUgsS0FBQTtJQUFBSSxHQUFBO0lBQUFDLEtBQUEsRUFlQSxTQUFBQyxHQUFHQSxDQUFBLEVBQWM7TUFBQSxJQUFiQyxNQUFNLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFHLENBQUMsQ0FBQztNQUNiLE9BQU8sSUFBSSxDQUFDUCxNQUFNLENBQUNLLEdBQUcsQ0FBQyxvQ0FBb0MsRUFBRUMsTUFBTSxDQUFDO0lBQ3RFO0VBQUM7QUFBQTtBQUFBLElBQUFJLFFBQUEsR0FBQUMsT0FBQSxjQUdZWixLQUFLO0FBQUFhLE1BQUEsQ0FBQUQsT0FBQSxHQUFBQSxPQUFBLENBQUFFLE9BQUEiLCJpZ25vcmVMaXN0IjpbXX0=
}),
"[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/reference_data/locations/hotels/by-city.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
/**
 * A namespaced client for the
 * `/v1/reference-data/locations/hotels/by-city` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.referenceData.locations.hotels.byCity;
 * ```
 *
 * @param {Client} client
 */ var byCity = /*#__PURE__*/ function() {
    function byCity(client) {
        _classCallCheck(this, byCity);
        this.client = client;
    }
    /**
   * Returns a list of hotels for a given area.
   *
   * @param {Object} params
   * @param {string} params.cityCode City IATA code
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * Find list of hotels in Barcelona
   *
   * ```js
   * amadeus.referenceData.locations.hotels.byCity.get({
   *   cityCode: 'BCN'
   * });
   * ```
   */ return _createClass(byCity, [
        {
            key: "get",
            value: function get() {
                var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                return this.client.get('/v1/reference-data/locations/hotels/by-city', params);
            }
        }
    ]);
}();
var _default = exports["default"] = byCity;
module.exports = exports.default; //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJieUNpdHkiLCJjbGllbnQiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImdldCIsInBhcmFtcyIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmF1bHQiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYW1hZGV1cy9uYW1lc3BhY2VzL3JlZmVyZW5jZV9kYXRhL2xvY2F0aW9ucy9ob3RlbHMvYnktY2l0eS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEEgbmFtZXNwYWNlZCBjbGllbnQgZm9yIHRoZVxuICogYC92MS9yZWZlcmVuY2UtZGF0YS9sb2NhdGlvbnMvaG90ZWxzL2J5LWNpdHlgIGVuZHBvaW50c1xuICpcbiAqIEFjY2VzcyB2aWEgdGhlIHtAbGluayBBbWFkZXVzfSBvYmplY3RcbiAqXG4gKiBgYGBqc1xuICogbGV0IGFtYWRldXMgPSBuZXcgQW1hZGV1cygpO1xuICogYW1hZGV1cy5yZWZlcmVuY2VEYXRhLmxvY2F0aW9ucy5ob3RlbHMuYnlDaXR5O1xuICogYGBgXG4gKlxuICogQHBhcmFtIHtDbGllbnR9IGNsaWVudFxuICovXG5jbGFzcyBieUNpdHkge1xuICBjb25zdHJ1Y3RvcihjbGllbnQpIHtcbiAgICB0aGlzLmNsaWVudCA9IGNsaWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgbGlzdCBvZiBob3RlbHMgZm9yIGEgZ2l2ZW4gYXJlYS5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zLmNpdHlDb2RlIENpdHkgSUFUQSBjb2RlXG4gICAqIEByZXR1cm4ge1Byb21pc2UuPFJlc3BvbnNlLFJlc3BvbnNlRXJyb3I+fSBhIFByb21pc2VcbiAgICpcbiAgICogRmluZCBsaXN0IG9mIGhvdGVscyBpbiBCYXJjZWxvbmFcbiAgICpcbiAgICogYGBganNcbiAgICogYW1hZGV1cy5yZWZlcmVuY2VEYXRhLmxvY2F0aW9ucy5ob3RlbHMuYnlDaXR5LmdldCh7XG4gICAqICAgY2l0eUNvZGU6ICdCQ04nXG4gICAqIH0pO1xuICAgKiBgYGBcbiAgICovXG4gIGdldChwYXJhbXMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmNsaWVudC5nZXQoJy92MS9yZWZlcmVuY2UtZGF0YS9sb2NhdGlvbnMvaG90ZWxzL2J5LWNpdHknLCBwYXJhbXMpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJ5Q2l0eTsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWkEsSUFhTUEsTUFBTTtFQUNWLFNBQUFBLE9BQVlDLE1BQU0sRUFBRTtJQUFBQyxlQUFBLE9BQUFGLE1BQUE7SUFDbEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBLE1BQU07RUFDdEI7O0VBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBZEUsT0FBQUUsWUFBQSxDQUFBSCxNQUFBO0lBQUFJLEdBQUE7SUFBQUMsS0FBQSxFQWVBLFNBQUFDLEdBQUdBLENBQUEsRUFBYztNQUFBLElBQWJDLE1BQU0sR0FBQUMsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUcsQ0FBQyxDQUFDO01BQ2IsT0FBTyxJQUFJLENBQUNQLE1BQU0sQ0FBQ0ssR0FBRyxDQUFDLDZDQUE2QyxFQUFFQyxNQUFNLENBQUM7SUFDL0U7RUFBQztBQUFBO0FBQUEsSUFBQUksUUFBQSxHQUFBQyxPQUFBLGNBR1laLE1BQU07QUFBQWEsTUFBQSxDQUFBRCxPQUFBLEdBQUFBLE9BQUEsQ0FBQUUsT0FBQSIsImlnbm9yZUxpc3QiOltdfQ==
}),
"[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/reference_data/locations/hotels/by-geocode.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
/**
 * A namespaced client for the
 * `/v1/reference-data/locations/hotels/by-geocode` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.referenceData.locations.hotels.byGeocode;
 * ```
 *
 * @param {Client} client
 */ var byGeocode = /*#__PURE__*/ function() {
    function byGeocode(client) {
        _classCallCheck(this, byGeocode);
        this.client = client;
    }
    /**
   *  Returns a list of hotels for a given area.
   *
   * @param {Object} params
   * @param {Double} params.latitude latitude location to be at the center of
   * the search circle - required
   * @param {Double} params.longitude longitude location to be at the center of
   * the search circle - required
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   *  Returns a list of hotels within an area in Barcelona
   *
   * ```js
   * amadeus.referenceData.locations.hotels.byGeocode.get({
      latitude: 48.83152,
      longitude: 2.24691
   * });
   * ```
   */ return _createClass(byGeocode, [
        {
            key: "get",
            value: function get() {
                var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                return this.client.get('/v1/reference-data/locations/hotels/by-geocode', params);
            }
        }
    ]);
}();
var _default = exports["default"] = byGeocode;
module.exports = exports.default; //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJieUdlb2NvZGUiLCJjbGllbnQiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImdldCIsInBhcmFtcyIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmF1bHQiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYW1hZGV1cy9uYW1lc3BhY2VzL3JlZmVyZW5jZV9kYXRhL2xvY2F0aW9ucy9ob3RlbHMvYnktZ2VvY29kZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEEgbmFtZXNwYWNlZCBjbGllbnQgZm9yIHRoZVxuICogYC92MS9yZWZlcmVuY2UtZGF0YS9sb2NhdGlvbnMvaG90ZWxzL2J5LWdlb2NvZGVgIGVuZHBvaW50c1xuICpcbiAqIEFjY2VzcyB2aWEgdGhlIHtAbGluayBBbWFkZXVzfSBvYmplY3RcbiAqXG4gKiBgYGBqc1xuICogbGV0IGFtYWRldXMgPSBuZXcgQW1hZGV1cygpO1xuICogYW1hZGV1cy5yZWZlcmVuY2VEYXRhLmxvY2F0aW9ucy5ob3RlbHMuYnlHZW9jb2RlO1xuICogYGBgXG4gKlxuICogQHBhcmFtIHtDbGllbnR9IGNsaWVudFxuICovXG5jbGFzcyBieUdlb2NvZGUge1xuICBjb25zdHJ1Y3RvcihjbGllbnQpIHtcbiAgICB0aGlzLmNsaWVudCA9IGNsaWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiAgUmV0dXJucyBhIGxpc3Qgb2YgaG90ZWxzIGZvciBhIGdpdmVuIGFyZWEuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXNcbiAgICogQHBhcmFtIHtEb3VibGV9IHBhcmFtcy5sYXRpdHVkZSBsYXRpdHVkZSBsb2NhdGlvbiB0byBiZSBhdCB0aGUgY2VudGVyIG9mXG4gICAqIHRoZSBzZWFyY2ggY2lyY2xlIC0gcmVxdWlyZWRcbiAgICogQHBhcmFtIHtEb3VibGV9IHBhcmFtcy5sb25naXR1ZGUgbG9uZ2l0dWRlIGxvY2F0aW9uIHRvIGJlIGF0IHRoZSBjZW50ZXIgb2ZcbiAgICogdGhlIHNlYXJjaCBjaXJjbGUgLSByZXF1aXJlZFxuICAgKiBAcmV0dXJuIHtQcm9taXNlLjxSZXNwb25zZSxSZXNwb25zZUVycm9yPn0gYSBQcm9taXNlXG4gICAqXG4gICAqICBSZXR1cm5zIGEgbGlzdCBvZiBob3RlbHMgd2l0aGluIGFuIGFyZWEgaW4gQmFyY2Vsb25hXG4gICAqXG4gICAqIGBgYGpzXG4gICAqIGFtYWRldXMucmVmZXJlbmNlRGF0YS5sb2NhdGlvbnMuaG90ZWxzLmJ5R2VvY29kZS5nZXQoe1xuICAgICAgbGF0aXR1ZGU6IDQ4LjgzMTUyLFxuICAgICAgbG9uZ2l0dWRlOiAyLjI0NjkxXG4gICAqIH0pO1xuICAgKiBgYGBcbiAgICovXG4gIGdldChwYXJhbXMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmNsaWVudC5nZXQoJy92MS9yZWZlcmVuY2UtZGF0YS9sb2NhdGlvbnMvaG90ZWxzL2J5LWdlb2NvZGUnLCBwYXJhbXMpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJ5R2VvY29kZTsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWkEsSUFhTUEsU0FBUztFQUNiLFNBQUFBLFVBQVlDLE1BQU0sRUFBRTtJQUFBQyxlQUFBLE9BQUFGLFNBQUE7SUFDbEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBLE1BQU07RUFDdEI7O0VBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFsQkUsT0FBQUUsWUFBQSxDQUFBSCxTQUFBO0lBQUFJLEdBQUE7SUFBQUMsS0FBQSxFQW1CQSxTQUFBQyxHQUFHQSxDQUFBLEVBQWM7TUFBQSxJQUFiQyxNQUFNLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFHLENBQUMsQ0FBQztNQUNiLE9BQU8sSUFBSSxDQUFDUCxNQUFNLENBQUNLLEdBQUcsQ0FBQyxnREFBZ0QsRUFBRUMsTUFBTSxDQUFDO0lBQ2xGO0VBQUM7QUFBQTtBQUFBLElBQUFJLFFBQUEsR0FBQUMsT0FBQSxjQUdZWixTQUFTO0FBQUFhLE1BQUEsQ0FBQUQsT0FBQSxHQUFBQSxPQUFBLENBQUFFLE9BQUEiLCJpZ25vcmVMaXN0IjpbXX0=
}),
"[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/reference_data/locations/hotels/by-hotels.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
/**
 * A namespaced client for the
 * `/v1/reference-data/locations/hotels/by-hotels` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.referenceData.locations.hotels.byHotels;
 * ```
 *
 * @param {Client} client
 */ var byHotels = /*#__PURE__*/ function() {
    function byHotels(client) {
        _classCallCheck(this, byHotels);
        this.client = client;
    }
    /**
  * Returns a list of hotels for a given area.
  *
  * @param {Object} params
  * @param {string} params.hotelIds Comma separated list of Amadeus hotel
  *   codes to request. Example: XKPARC12
  * @return {Promise.<Response,ResponseError>} a Promise
  *
  * Find relevant points of interest within an area in Barcelona
  * ```js
  * amadeus.referenceData.locations.hotels.byHotels.get({
  *   hotelIds: 'ACPAR245'
  * })
  * ```
  */ return _createClass(byHotels, [
        {
            key: "get",
            value: function get() {
                var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                return this.client.get('/v1/reference-data/locations/hotels/by-hotels', params);
            }
        }
    ]);
}();
var _default = exports["default"] = byHotels;
module.exports = exports.default; //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJieUhvdGVscyIsImNsaWVudCIsIl9jbGFzc0NhbGxDaGVjayIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiZ2V0IiwicGFyYW1zIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiX2RlZmF1bHQiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmYXVsdCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hbWFkZXVzL25hbWVzcGFjZXMvcmVmZXJlbmNlX2RhdGEvbG9jYXRpb25zL2hvdGVscy9ieS1ob3RlbHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBBIG5hbWVzcGFjZWQgY2xpZW50IGZvciB0aGVcbiAqIGAvdjEvcmVmZXJlbmNlLWRhdGEvbG9jYXRpb25zL2hvdGVscy9ieS1ob3RlbHNgIGVuZHBvaW50c1xuICpcbiAqIEFjY2VzcyB2aWEgdGhlIHtAbGluayBBbWFkZXVzfSBvYmplY3RcbiAqXG4gKiBgYGBqc1xuICogbGV0IGFtYWRldXMgPSBuZXcgQW1hZGV1cygpO1xuICogYW1hZGV1cy5yZWZlcmVuY2VEYXRhLmxvY2F0aW9ucy5ob3RlbHMuYnlIb3RlbHM7XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge0NsaWVudH0gY2xpZW50XG4gKi9cbmNsYXNzIGJ5SG90ZWxzIHtcbiAgY29uc3RydWN0b3IoY2xpZW50KSB7XG4gICAgdGhpcy5jbGllbnQgPSBjbGllbnQ7XG4gIH1cblxuICAvKipcbiAgKiBSZXR1cm5zIGEgbGlzdCBvZiBob3RlbHMgZm9yIGEgZ2l2ZW4gYXJlYS5cbiAgKlxuICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXNcbiAgKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zLmhvdGVsSWRzIENvbW1hIHNlcGFyYXRlZCBsaXN0IG9mIEFtYWRldXMgaG90ZWxcbiAgKiAgIGNvZGVzIHRvIHJlcXVlc3QuIEV4YW1wbGU6IFhLUEFSQzEyXG4gICogQHJldHVybiB7UHJvbWlzZS48UmVzcG9uc2UsUmVzcG9uc2VFcnJvcj59IGEgUHJvbWlzZVxuICAqXG4gICogRmluZCByZWxldmFudCBwb2ludHMgb2YgaW50ZXJlc3Qgd2l0aGluIGFuIGFyZWEgaW4gQmFyY2Vsb25hXG4gICogYGBganNcbiAgKiBhbWFkZXVzLnJlZmVyZW5jZURhdGEubG9jYXRpb25zLmhvdGVscy5ieUhvdGVscy5nZXQoe1xuICAqICAgaG90ZWxJZHM6ICdBQ1BBUjI0NSdcbiAgKiB9KVxuICAqIGBgYFxuICAqL1xuICBnZXQocGFyYW1zID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5jbGllbnQuZ2V0KCcvdjEvcmVmZXJlbmNlLWRhdGEvbG9jYXRpb25zL2hvdGVscy9ieS1ob3RlbHMnLCBwYXJhbXMpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGJ5SG90ZWxzOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFaQSxJQWFNQSxRQUFRO0VBQ1osU0FBQUEsU0FBWUMsTUFBTSxFQUFFO0lBQUFDLGVBQUEsT0FBQUYsUUFBQTtJQUNsQixJQUFJLENBQUNDLE1BQU0sR0FBR0EsTUFBTTtFQUN0Qjs7RUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFkRSxPQUFBRSxZQUFBLENBQUFILFFBQUE7SUFBQUksR0FBQTtJQUFBQyxLQUFBLEVBZUEsU0FBQUMsR0FBR0EsQ0FBQSxFQUFjO01BQUEsSUFBYkMsTUFBTSxHQUFBQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBRyxDQUFDLENBQUM7TUFDYixPQUFPLElBQUksQ0FBQ1AsTUFBTSxDQUFDSyxHQUFHLENBQUMsK0NBQStDLEVBQUVDLE1BQU0sQ0FBQztJQUNqRjtFQUFDO0FBQUE7QUFBQSxJQUFBSSxRQUFBLEdBQUFDLE9BQUEsY0FHWVosUUFBUTtBQUFBYSxNQUFBLENBQUFELE9BQUEsR0FBQUEsT0FBQSxDQUFBRSxPQUFBIiwiaWdub3JlTGlzdCI6W119
}),
"[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/reference_data/locations/hotels.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _byCity = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/reference_data/locations/hotels/by-city.js [app-route] (ecmascript)"));
var _byGeocode = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/reference_data/locations/hotels/by-geocode.js [app-route] (ecmascript)"));
var _byHotels = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/reference_data/locations/hotels/by-hotels.js [app-route] (ecmascript)"));
function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        "default": e
    };
}
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
/**
 * A namespaced client for the
 * `/v1/reference-data/locations/hotels` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.referenceData.locations.hotels;
 * ```
 *
 * @param {Client} client
 */ var Hotels = /*#__PURE__*/ _createClass(function Hotels(client) {
    _classCallCheck(this, Hotels);
    this.client = client;
    this.byCity = new _byCity["default"](client);
    this.byGeocode = new _byGeocode["default"](client);
    this.byHotels = new _byHotels["default"](client);
});
var _default = exports["default"] = Hotels;
module.exports = exports.default; //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYnlDaXR5IiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfYnlHZW9jb2RlIiwiX2J5SG90ZWxzIiwiZSIsIl9fZXNNb2R1bGUiLCJfZGVmaW5lUHJvcGVydGllcyIsInIiLCJ0IiwibGVuZ3RoIiwibyIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX3RvUHJvcGVydHlLZXkiLCJrZXkiLCJfY3JlYXRlQ2xhc3MiLCJwcm90b3R5cGUiLCJpIiwiX3RvUHJpbWl0aXZlIiwiX3R5cGVvZiIsIlN5bWJvbCIsInRvUHJpbWl0aXZlIiwiY2FsbCIsIlR5cGVFcnJvciIsIlN0cmluZyIsIk51bWJlciIsIl9jbGFzc0NhbGxDaGVjayIsImEiLCJuIiwiSG90ZWxzIiwiY2xpZW50IiwiYnlDaXR5IiwiYnlHZW9jb2RlIiwiYnlIb3RlbHMiLCJfZGVmYXVsdCIsImV4cG9ydHMiLCJtb2R1bGUiLCJkZWZhdWx0Il0sInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2FtYWRldXMvbmFtZXNwYWNlcy9yZWZlcmVuY2VfZGF0YS9sb2NhdGlvbnMvaG90ZWxzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBieUNpdHkgZnJvbSAnLi9ob3RlbHMvYnktY2l0eS5qcyc7XG5pbXBvcnQgYnlHZW9jb2RlIGZyb20gJy4vaG90ZWxzL2J5LWdlb2NvZGUuanMnO1xuaW1wb3J0IGJ5SG90ZWxzIGZyb20gJy4vaG90ZWxzL2J5LWhvdGVscy5qcyc7XG5cbi8qKlxuICogQSBuYW1lc3BhY2VkIGNsaWVudCBmb3IgdGhlXG4gKiBgL3YxL3JlZmVyZW5jZS1kYXRhL2xvY2F0aW9ucy9ob3RlbHNgIGVuZHBvaW50c1xuICpcbiAqIEFjY2VzcyB2aWEgdGhlIHtAbGluayBBbWFkZXVzfSBvYmplY3RcbiAqXG4gKiBgYGBqc1xuICogbGV0IGFtYWRldXMgPSBuZXcgQW1hZGV1cygpO1xuICogYW1hZGV1cy5yZWZlcmVuY2VEYXRhLmxvY2F0aW9ucy5ob3RlbHM7XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge0NsaWVudH0gY2xpZW50XG4gKi9cbmNsYXNzIEhvdGVscyB7XG4gIGNvbnN0cnVjdG9yKGNsaWVudCkge1xuICAgIHRoaXMuY2xpZW50ID0gY2xpZW50O1xuICAgIHRoaXMuYnlDaXR5ID0gbmV3IGJ5Q2l0eShjbGllbnQpO1xuICAgIHRoaXMuYnlHZW9jb2RlID0gbmV3IGJ5R2VvY29kZShjbGllbnQpO1xuICAgIHRoaXMuYnlIb3RlbHMgPSBuZXcgYnlIb3RlbHMoY2xpZW50KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb3RlbHM7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxJQUFBQSxPQUFBLEdBQUFDLHNCQUFBLENBQUFDLE9BQUE7QUFDQSxJQUFBQyxVQUFBLEdBQUFGLHNCQUFBLENBQUFDLE9BQUE7QUFDQSxJQUFBRSxTQUFBLEdBQUFILHNCQUFBLENBQUFDLE9BQUE7QUFBNkMsU0FBQUQsdUJBQUFJLENBQUEsV0FBQUEsQ0FBQSxJQUFBQSxDQUFBLENBQUFDLFVBQUEsR0FBQUQsQ0FBQSxnQkFBQUEsQ0FBQTtBQUFBLFNBQUFFLGtCQUFBRixDQUFBLEVBQUFHLENBQUEsYUFBQUMsQ0FBQSxNQUFBQSxDQUFBLEdBQUFELENBQUEsQ0FBQUUsTUFBQSxFQUFBRCxDQUFBLFVBQUFFLENBQUEsR0FBQUgsQ0FBQSxDQUFBQyxDQUFBLEdBQUFFLENBQUEsQ0FBQUMsVUFBQSxHQUFBRCxDQUFBLENBQUFDLFVBQUEsUUFBQUQsQ0FBQSxDQUFBRSxZQUFBLGtCQUFBRixDQUFBLEtBQUFBLENBQUEsQ0FBQUcsUUFBQSxRQUFBQyxNQUFBLENBQUFDLGNBQUEsQ0FBQVgsQ0FBQSxFQUFBWSxjQUFBLENBQUFOLENBQUEsQ0FBQU8sR0FBQSxHQUFBUCxDQUFBO0FBQUEsU0FBQVEsYUFBQWQsQ0FBQSxFQUFBRyxDQUFBLEVBQUFDLENBQUEsV0FBQUQsQ0FBQSxJQUFBRCxpQkFBQSxDQUFBRixDQUFBLENBQUFlLFNBQUEsRUFBQVosQ0FBQSxHQUFBQyxDQUFBLElBQUFGLGlCQUFBLENBQUFGLENBQUEsRUFBQUksQ0FBQSxHQUFBTSxNQUFBLENBQUFDLGNBQUEsQ0FBQVgsQ0FBQSxpQkFBQVMsUUFBQSxTQUFBVCxDQUFBO0FBQUEsU0FBQVksZUFBQVIsQ0FBQSxRQUFBWSxDQUFBLEdBQUFDLFlBQUEsQ0FBQWIsQ0FBQSxnQ0FBQWMsT0FBQSxDQUFBRixDQUFBLElBQUFBLENBQUEsR0FBQUEsQ0FBQTtBQUFBLFNBQUFDLGFBQUFiLENBQUEsRUFBQUQsQ0FBQSxvQkFBQWUsT0FBQSxDQUFBZCxDQUFBLE1BQUFBLENBQUEsU0FBQUEsQ0FBQSxNQUFBSixDQUFBLEdBQUFJLENBQUEsQ0FBQWUsTUFBQSxDQUFBQyxXQUFBLGtCQUFBcEIsQ0FBQSxRQUFBZ0IsQ0FBQSxHQUFBaEIsQ0FBQSxDQUFBcUIsSUFBQSxDQUFBakIsQ0FBQSxFQUFBRCxDQUFBLGdDQUFBZSxPQUFBLENBQUFGLENBQUEsVUFBQUEsQ0FBQSxZQUFBTSxTQUFBLHlFQUFBbkIsQ0FBQSxHQUFBb0IsTUFBQSxHQUFBQyxNQUFBLEVBQUFwQixDQUFBO0FBQUEsU0FBQXFCLGdCQUFBQyxDQUFBLEVBQUFDLENBQUEsVUFBQUQsQ0FBQSxZQUFBQyxDQUFBLGFBQUFMLFNBQUE7QUFFN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFaQSxJQWFNTSxNQUFNLGdCQUFBZCxZQUFBLENBQ1YsU0FBQWMsT0FBWUMsTUFBTSxFQUFFO0VBQUFKLGVBQUEsT0FBQUcsTUFBQTtFQUNsQixJQUFJLENBQUNDLE1BQU0sR0FBR0EsTUFBTTtFQUNwQixJQUFJLENBQUNDLE1BQU0sR0FBRyxJQUFJQSxrQkFBTSxDQUFDRCxNQUFNLENBQUM7RUFDaEMsSUFBSSxDQUFDRSxTQUFTLEdBQUcsSUFBSUEscUJBQVMsQ0FBQ0YsTUFBTSxDQUFDO0VBQ3RDLElBQUksQ0FBQ0csUUFBUSxHQUFHLElBQUlBLG9CQUFRLENBQUNILE1BQU0sQ0FBQztBQUN0QyxDQUFDO0FBQUEsSUFBQUksUUFBQSxHQUFBQyxPQUFBLGNBR1lOLE1BQU07QUFBQU8sTUFBQSxDQUFBRCxPQUFBLEdBQUFBLE9BQUEsQ0FBQUUsT0FBQSIsImlnbm9yZUxpc3QiOltdfQ==
}),
"[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/reference_data/locations/poi.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
/**
 * A namespaced client for the
 * `/v1/reference-data/locations/pois` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.referenceData.locations.pointOfInterest;
 * ```
 *
 * @param {Client} client
 */ var PointOfInterest = /*#__PURE__*/ function() {
    function PointOfInterest(client, poiId) {
        _classCallCheck(this, PointOfInterest);
        this.client = client;
        this._poiId = poiId;
    }
    /**
   * Extracts the information about point of interest with given ID
   *
   * Extract the information about point of interest with ID '9CB40CB5D0'
   * ```js
   * amadeus.referenceData.locations.pointOfInterest('9CB40CB5D0').get();
   * ```
   */ return _createClass(PointOfInterest, [
        {
            key: "get",
            value: function get() {
                return this.client.get("/v1/reference-data/locations/pois/".concat(this._poiId));
            }
        }
    ]);
}();
var _default = exports["default"] = PointOfInterest;
module.exports = exports.default; //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJQb2ludE9mSW50ZXJlc3QiLCJjbGllbnQiLCJwb2lJZCIsIl9jbGFzc0NhbGxDaGVjayIsIl9wb2lJZCIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiZ2V0IiwiY29uY2F0IiwiX2RlZmF1bHQiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmYXVsdCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hbWFkZXVzL25hbWVzcGFjZXMvcmVmZXJlbmNlX2RhdGEvbG9jYXRpb25zL3BvaS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEEgbmFtZXNwYWNlZCBjbGllbnQgZm9yIHRoZVxuICogYC92MS9yZWZlcmVuY2UtZGF0YS9sb2NhdGlvbnMvcG9pc2AgZW5kcG9pbnRzXG4gKlxuICogQWNjZXNzIHZpYSB0aGUge0BsaW5rIEFtYWRldXN9IG9iamVjdFxuICpcbiAqIGBgYGpzXG4gKiBsZXQgYW1hZGV1cyA9IG5ldyBBbWFkZXVzKCk7XG4gKiBhbWFkZXVzLnJlZmVyZW5jZURhdGEubG9jYXRpb25zLnBvaW50T2ZJbnRlcmVzdDtcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7Q2xpZW50fSBjbGllbnRcbiAqL1xuY2xhc3MgUG9pbnRPZkludGVyZXN0IHtcbiAgY29uc3RydWN0b3IoY2xpZW50LCBwb2lJZCkge1xuICAgIHRoaXMuY2xpZW50ID0gY2xpZW50O1xuICAgIHRoaXMuX3BvaUlkID0gcG9pSWQ7XG4gIH1cblxuICAvKipcbiAgICogRXh0cmFjdHMgdGhlIGluZm9ybWF0aW9uIGFib3V0IHBvaW50IG9mIGludGVyZXN0IHdpdGggZ2l2ZW4gSURcbiAgICpcbiAgICogRXh0cmFjdCB0aGUgaW5mb3JtYXRpb24gYWJvdXQgcG9pbnQgb2YgaW50ZXJlc3Qgd2l0aCBJRCAnOUNCNDBDQjVEMCdcbiAgICogYGBganNcbiAgICogYW1hZGV1cy5yZWZlcmVuY2VEYXRhLmxvY2F0aW9ucy5wb2ludE9mSW50ZXJlc3QoJzlDQjQwQ0I1RDAnKS5nZXQoKTtcbiAgICogYGBgXG4gICAqL1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2xpZW50LmdldChgL3YxL3JlZmVyZW5jZS1kYXRhL2xvY2F0aW9ucy9wb2lzLyR7dGhpcy5fcG9pSWR9YCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9pbnRPZkludGVyZXN0O1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBLElBYU1BLGVBQWU7RUFDbkIsU0FBQUEsZ0JBQVlDLE1BQU0sRUFBRUMsS0FBSyxFQUFFO0lBQUFDLGVBQUEsT0FBQUgsZUFBQTtJQUN6QixJQUFJLENBQUNDLE1BQU0sR0FBR0EsTUFBTTtJQUNwQixJQUFJLENBQUNHLE1BQU0sR0FBR0YsS0FBSztFQUNyQjs7RUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBUEUsT0FBQUcsWUFBQSxDQUFBTCxlQUFBO0lBQUFNLEdBQUE7SUFBQUMsS0FBQSxFQVFBLFNBQUFDLEdBQUdBLENBQUEsRUFBRztNQUNKLE9BQU8sSUFBSSxDQUFDUCxNQUFNLENBQUNPLEdBQUcsc0NBQUFDLE1BQUEsQ0FBc0MsSUFBSSxDQUFDTCxNQUFNLENBQUUsQ0FBQztJQUM1RTtFQUFDO0FBQUE7QUFBQSxJQUFBTSxRQUFBLEdBQUFDLE9BQUEsY0FHWVgsZUFBZTtBQUFBWSxNQUFBLENBQUFELE9BQUEsR0FBQUEsT0FBQSxDQUFBRSxPQUFBIiwiaWdub3JlTGlzdCI6W119
}),
"[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/reference_data/locations/points_of_interest/by-square.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
/**
 * A namespaced client for the
 * `/v1/reference-data/locations/pois/by-square` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.referenceData.locations.pointsOfInterest.bySquare;
 * ```
 *
 * @param {Client} client
 */ var bySquare = /*#__PURE__*/ function() {
    function bySquare(client) {
        _classCallCheck(this, bySquare);
        this.client = client;
    }
    /**
   * Returns a list of relevant points of interest for a given area.
   *
   * @param {Object} params
   * @param {Double} params.north latitude north of bounding box - required
   * @param {Double} params.west  longitude west of bounding box - required
   * @param {Double} params.south latitude south of bounding box - required
   * @param {Double} params.east  longitude east of bounding box - required
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * Find relevant points of interest within an area in Barcelona
   *
   * ```js
   * amadeus.referenceData.locations.pointsOfInterest.bySquare.get({
   *   north: 41.397158,
   *   west: 2.160873,
   *   south: 41.394582,
   *   east: 2.177181
   * });
   * ```
   */ return _createClass(bySquare, [
        {
            key: "get",
            value: function get() {
                var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                return this.client.get('/v1/reference-data/locations/pois/by-square', params);
            }
        }
    ]);
}();
var _default = exports["default"] = bySquare;
module.exports = exports.default; //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJieVNxdWFyZSIsImNsaWVudCIsIl9jbGFzc0NhbGxDaGVjayIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiZ2V0IiwicGFyYW1zIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiX2RlZmF1bHQiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmYXVsdCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hbWFkZXVzL25hbWVzcGFjZXMvcmVmZXJlbmNlX2RhdGEvbG9jYXRpb25zL3BvaW50c19vZl9pbnRlcmVzdC9ieS1zcXVhcmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBBIG5hbWVzcGFjZWQgY2xpZW50IGZvciB0aGVcbiAqIGAvdjEvcmVmZXJlbmNlLWRhdGEvbG9jYXRpb25zL3BvaXMvYnktc3F1YXJlYCBlbmRwb2ludHNcbiAqXG4gKiBBY2Nlc3MgdmlhIHRoZSB7QGxpbmsgQW1hZGV1c30gb2JqZWN0XG4gKlxuICogYGBganNcbiAqIGxldCBhbWFkZXVzID0gbmV3IEFtYWRldXMoKTtcbiAqIGFtYWRldXMucmVmZXJlbmNlRGF0YS5sb2NhdGlvbnMucG9pbnRzT2ZJbnRlcmVzdC5ieVNxdWFyZTtcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7Q2xpZW50fSBjbGllbnRcbiAqL1xuY2xhc3MgYnlTcXVhcmUge1xuICBjb25zdHJ1Y3RvcihjbGllbnQpIHtcbiAgICB0aGlzLmNsaWVudCA9IGNsaWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgbGlzdCBvZiByZWxldmFudCBwb2ludHMgb2YgaW50ZXJlc3QgZm9yIGEgZ2l2ZW4gYXJlYS5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtc1xuICAgKiBAcGFyYW0ge0RvdWJsZX0gcGFyYW1zLm5vcnRoIGxhdGl0dWRlIG5vcnRoIG9mIGJvdW5kaW5nIGJveCAtIHJlcXVpcmVkXG4gICAqIEBwYXJhbSB7RG91YmxlfSBwYXJhbXMud2VzdCAgbG9uZ2l0dWRlIHdlc3Qgb2YgYm91bmRpbmcgYm94IC0gcmVxdWlyZWRcbiAgICogQHBhcmFtIHtEb3VibGV9IHBhcmFtcy5zb3V0aCBsYXRpdHVkZSBzb3V0aCBvZiBib3VuZGluZyBib3ggLSByZXF1aXJlZFxuICAgKiBAcGFyYW0ge0RvdWJsZX0gcGFyYW1zLmVhc3QgIGxvbmdpdHVkZSBlYXN0IG9mIGJvdW5kaW5nIGJveCAtIHJlcXVpcmVkXG4gICAqIEByZXR1cm4ge1Byb21pc2UuPFJlc3BvbnNlLFJlc3BvbnNlRXJyb3I+fSBhIFByb21pc2VcbiAgICpcbiAgICogRmluZCByZWxldmFudCBwb2ludHMgb2YgaW50ZXJlc3Qgd2l0aGluIGFuIGFyZWEgaW4gQmFyY2Vsb25hXG4gICAqXG4gICAqIGBgYGpzXG4gICAqIGFtYWRldXMucmVmZXJlbmNlRGF0YS5sb2NhdGlvbnMucG9pbnRzT2ZJbnRlcmVzdC5ieVNxdWFyZS5nZXQoe1xuICAgKiAgIG5vcnRoOiA0MS4zOTcxNTgsXG4gICAqICAgd2VzdDogMi4xNjA4NzMsXG4gICAqICAgc291dGg6IDQxLjM5NDU4MixcbiAgICogICBlYXN0OiAyLjE3NzE4MVxuICAgKiB9KTtcbiAgICogYGBgXG4gICAqL1xuICBnZXQocGFyYW1zID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5jbGllbnQuZ2V0KCcvdjEvcmVmZXJlbmNlLWRhdGEvbG9jYXRpb25zL3BvaXMvYnktc3F1YXJlJywgcGFyYW1zKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBieVNxdWFyZTtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFaQSxJQWFNQSxRQUFRO0VBQ1osU0FBQUEsU0FBWUMsTUFBTSxFQUFFO0lBQUFDLGVBQUEsT0FBQUYsUUFBQTtJQUNsQixJQUFJLENBQUNDLE1BQU0sR0FBR0EsTUFBTTtFQUN0Qjs7RUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFwQkUsT0FBQUUsWUFBQSxDQUFBSCxRQUFBO0lBQUFJLEdBQUE7SUFBQUMsS0FBQSxFQXFCQSxTQUFBQyxHQUFHQSxDQUFBLEVBQWM7TUFBQSxJQUFiQyxNQUFNLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFHLENBQUMsQ0FBQztNQUNiLE9BQU8sSUFBSSxDQUFDUCxNQUFNLENBQUNLLEdBQUcsQ0FBQyw2Q0FBNkMsRUFBRUMsTUFBTSxDQUFDO0lBQy9FO0VBQUM7QUFBQTtBQUFBLElBQUFJLFFBQUEsR0FBQUMsT0FBQSxjQUdZWixRQUFRO0FBQUFhLE1BQUEsQ0FBQUQsT0FBQSxHQUFBQSxPQUFBLENBQUFFLE9BQUEiLCJpZ25vcmVMaXN0IjpbXX0=
}),
"[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/reference_data/locations/pois.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _bySquare = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/reference_data/locations/points_of_interest/by-square.js [app-route] (ecmascript)"));
function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        "default": e
    };
}
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
/**
 * A namespaced client for the
 * `/v1/reference-data/locations/pois` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.referenceData.locations.pointsOfInterest;
 * ```
 *
 * @param {Client} client
 */ var PointsOfInterest = /*#__PURE__*/ function() {
    function PointsOfInterest(client) {
        _classCallCheck(this, PointsOfInterest);
        this.client = client;
        this.bySquare = new _bySquare["default"](client);
    }
    /**
   * Returns a list of relevant points of interest near to a given point
   *
   * @param {Object} params
   * @param {Double} params.latitude latitude location to be at the center of
   *   the search circle - required
   * @param {Double} params.longitude longitude location to be at the center of
   *   the search circle - required
   * @param {Double} params.radius radius of the search in Kilometer - optional
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * Find relevant points of interest close to Barcelona
   *
   * ```js
   * amadeus.referenceData.locations.pointsOfInterest.get({
   *   longitude: 2.160873,
   *   latitude: 41.397158
   * });
   * ```
   */ return _createClass(PointsOfInterest, [
        {
            key: "get",
            value: function get() {
                var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                return this.client.get('/v1/reference-data/locations/pois', params);
            }
        }
    ]);
}();
var _default = exports["default"] = PointsOfInterest;
module.exports = exports.default; //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYnlTcXVhcmUiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsImUiLCJfX2VzTW9kdWxlIiwiX3R5cGVvZiIsIm8iLCJTeW1ib2wiLCJpdGVyYXRvciIsImNvbnN0cnVjdG9yIiwicHJvdG90eXBlIiwiX2NsYXNzQ2FsbENoZWNrIiwiYSIsIm4iLCJUeXBlRXJyb3IiLCJfZGVmaW5lUHJvcGVydGllcyIsInIiLCJ0IiwibGVuZ3RoIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfdG9Qcm9wZXJ0eUtleSIsImtleSIsIl9jcmVhdGVDbGFzcyIsImkiLCJfdG9QcmltaXRpdmUiLCJ0b1ByaW1pdGl2ZSIsImNhbGwiLCJTdHJpbmciLCJOdW1iZXIiLCJQb2ludHNPZkludGVyZXN0IiwiY2xpZW50IiwiYnlTcXVhcmUiLCJCeVNxdWFyZSIsInZhbHVlIiwiZ2V0IiwicGFyYW1zIiwiYXJndW1lbnRzIiwidW5kZWZpbmVkIiwiX2RlZmF1bHQiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmYXVsdCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hbWFkZXVzL25hbWVzcGFjZXMvcmVmZXJlbmNlX2RhdGEvbG9jYXRpb25zL3BvaXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJ5U3F1YXJlIGZyb20gJy4vcG9pbnRzX29mX2ludGVyZXN0L2J5LXNxdWFyZSc7XG5cbi8qKlxuICogQSBuYW1lc3BhY2VkIGNsaWVudCBmb3IgdGhlXG4gKiBgL3YxL3JlZmVyZW5jZS1kYXRhL2xvY2F0aW9ucy9wb2lzYCBlbmRwb2ludHNcbiAqXG4gKiBBY2Nlc3MgdmlhIHRoZSB7QGxpbmsgQW1hZGV1c30gb2JqZWN0XG4gKlxuICogYGBganNcbiAqIGxldCBhbWFkZXVzID0gbmV3IEFtYWRldXMoKTtcbiAqIGFtYWRldXMucmVmZXJlbmNlRGF0YS5sb2NhdGlvbnMucG9pbnRzT2ZJbnRlcmVzdDtcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7Q2xpZW50fSBjbGllbnRcbiAqL1xuY2xhc3MgUG9pbnRzT2ZJbnRlcmVzdCB7XG4gIGNvbnN0cnVjdG9yKGNsaWVudCkge1xuICAgIHRoaXMuY2xpZW50ID0gY2xpZW50O1xuICAgIHRoaXMuYnlTcXVhcmUgPSBuZXcgQnlTcXVhcmUoY2xpZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgbGlzdCBvZiByZWxldmFudCBwb2ludHMgb2YgaW50ZXJlc3QgbmVhciB0byBhIGdpdmVuIHBvaW50XG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXNcbiAgICogQHBhcmFtIHtEb3VibGV9IHBhcmFtcy5sYXRpdHVkZSBsYXRpdHVkZSBsb2NhdGlvbiB0byBiZSBhdCB0aGUgY2VudGVyIG9mXG4gICAqICAgdGhlIHNlYXJjaCBjaXJjbGUgLSByZXF1aXJlZFxuICAgKiBAcGFyYW0ge0RvdWJsZX0gcGFyYW1zLmxvbmdpdHVkZSBsb25naXR1ZGUgbG9jYXRpb24gdG8gYmUgYXQgdGhlIGNlbnRlciBvZlxuICAgKiAgIHRoZSBzZWFyY2ggY2lyY2xlIC0gcmVxdWlyZWRcbiAgICogQHBhcmFtIHtEb3VibGV9IHBhcmFtcy5yYWRpdXMgcmFkaXVzIG9mIHRoZSBzZWFyY2ggaW4gS2lsb21ldGVyIC0gb3B0aW9uYWxcbiAgICogQHJldHVybiB7UHJvbWlzZS48UmVzcG9uc2UsUmVzcG9uc2VFcnJvcj59IGEgUHJvbWlzZVxuICAgKlxuICAgKiBGaW5kIHJlbGV2YW50IHBvaW50cyBvZiBpbnRlcmVzdCBjbG9zZSB0byBCYXJjZWxvbmFcbiAgICpcbiAgICogYGBganNcbiAgICogYW1hZGV1cy5yZWZlcmVuY2VEYXRhLmxvY2F0aW9ucy5wb2ludHNPZkludGVyZXN0LmdldCh7XG4gICAqICAgbG9uZ2l0dWRlOiAyLjE2MDg3MyxcbiAgICogICBsYXRpdHVkZTogNDEuMzk3MTU4XG4gICAqIH0pO1xuICAgKiBgYGBcbiAgICovXG4gIGdldChwYXJhbXMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmNsaWVudC5nZXQoJy92MS9yZWZlcmVuY2UtZGF0YS9sb2NhdGlvbnMvcG9pcycsIHBhcmFtcyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUG9pbnRzT2ZJbnRlcmVzdDtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsSUFBQUEsU0FBQSxHQUFBQyxzQkFBQSxDQUFBQyxPQUFBO0FBQXNELFNBQUFELHVCQUFBRSxDQUFBLFdBQUFBLENBQUEsSUFBQUEsQ0FBQSxDQUFBQyxVQUFBLEdBQUFELENBQUEsZ0JBQUFBLENBQUE7QUFBQSxTQUFBRSxRQUFBQyxDQUFBLHNDQUFBRCxPQUFBLHdCQUFBRSxNQUFBLHVCQUFBQSxNQUFBLENBQUFDLFFBQUEsYUFBQUYsQ0FBQSxrQkFBQUEsQ0FBQSxnQkFBQUEsQ0FBQSxXQUFBQSxDQUFBLHlCQUFBQyxNQUFBLElBQUFELENBQUEsQ0FBQUcsV0FBQSxLQUFBRixNQUFBLElBQUFELENBQUEsS0FBQUMsTUFBQSxDQUFBRyxTQUFBLHFCQUFBSixDQUFBLEtBQUFELE9BQUEsQ0FBQUMsQ0FBQTtBQUFBLFNBQUFLLGdCQUFBQyxDQUFBLEVBQUFDLENBQUEsVUFBQUQsQ0FBQSxZQUFBQyxDQUFBLGFBQUFDLFNBQUE7QUFBQSxTQUFBQyxrQkFBQVosQ0FBQSxFQUFBYSxDQUFBLGFBQUFDLENBQUEsTUFBQUEsQ0FBQSxHQUFBRCxDQUFBLENBQUFFLE1BQUEsRUFBQUQsQ0FBQSxVQUFBWCxDQUFBLEdBQUFVLENBQUEsQ0FBQUMsQ0FBQSxHQUFBWCxDQUFBLENBQUFhLFVBQUEsR0FBQWIsQ0FBQSxDQUFBYSxVQUFBLFFBQUFiLENBQUEsQ0FBQWMsWUFBQSxrQkFBQWQsQ0FBQSxLQUFBQSxDQUFBLENBQUFlLFFBQUEsUUFBQUMsTUFBQSxDQUFBQyxjQUFBLENBQUFwQixDQUFBLEVBQUFxQixjQUFBLENBQUFsQixDQUFBLENBQUFtQixHQUFBLEdBQUFuQixDQUFBO0FBQUEsU0FBQW9CLGFBQUF2QixDQUFBLEVBQUFhLENBQUEsRUFBQUMsQ0FBQSxXQUFBRCxDQUFBLElBQUFELGlCQUFBLENBQUFaLENBQUEsQ0FBQU8sU0FBQSxFQUFBTSxDQUFBLEdBQUFDLENBQUEsSUFBQUYsaUJBQUEsQ0FBQVosQ0FBQSxFQUFBYyxDQUFBLEdBQUFLLE1BQUEsQ0FBQUMsY0FBQSxDQUFBcEIsQ0FBQSxpQkFBQWtCLFFBQUEsU0FBQWxCLENBQUE7QUFBQSxTQUFBcUIsZUFBQVAsQ0FBQSxRQUFBVSxDQUFBLEdBQUFDLFlBQUEsQ0FBQVgsQ0FBQSxnQ0FBQVosT0FBQSxDQUFBc0IsQ0FBQSxJQUFBQSxDQUFBLEdBQUFBLENBQUE7QUFBQSxTQUFBQyxhQUFBWCxDQUFBLEVBQUFELENBQUEsb0JBQUFYLE9BQUEsQ0FBQVksQ0FBQSxNQUFBQSxDQUFBLFNBQUFBLENBQUEsTUFBQWQsQ0FBQSxHQUFBYyxDQUFBLENBQUFWLE1BQUEsQ0FBQXNCLFdBQUEsa0JBQUExQixDQUFBLFFBQUF3QixDQUFBLEdBQUF4QixDQUFBLENBQUEyQixJQUFBLENBQUFiLENBQUEsRUFBQUQsQ0FBQSxnQ0FBQVgsT0FBQSxDQUFBc0IsQ0FBQSxVQUFBQSxDQUFBLFlBQUFiLFNBQUEseUVBQUFFLENBQUEsR0FBQWUsTUFBQSxHQUFBQyxNQUFBLEVBQUFmLENBQUE7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFaQSxJQWFNZ0IsZ0JBQWdCO0VBQ3BCLFNBQUFBLGlCQUFZQyxNQUFNLEVBQUU7SUFBQXZCLGVBQUEsT0FBQXNCLGdCQUFBO0lBQ2xCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQSxNQUFNO0lBQ3BCLElBQUksQ0FBQ0MsUUFBUSxHQUFHLElBQUlDLG9CQUFRLENBQUNGLE1BQU0sQ0FBQztFQUN0Qzs7RUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBbkJFLE9BQUFSLFlBQUEsQ0FBQU8sZ0JBQUE7SUFBQVIsR0FBQTtJQUFBWSxLQUFBLEVBb0JBLFNBQUFDLEdBQUdBLENBQUEsRUFBYztNQUFBLElBQWJDLE1BQU0sR0FBQUMsU0FBQSxDQUFBdEIsTUFBQSxRQUFBc0IsU0FBQSxRQUFBQyxTQUFBLEdBQUFELFNBQUEsTUFBRyxDQUFDLENBQUM7TUFDYixPQUFPLElBQUksQ0FBQ04sTUFBTSxDQUFDSSxHQUFHLENBQUMsbUNBQW1DLEVBQUVDLE1BQU0sQ0FBQztJQUNyRTtFQUFDO0FBQUE7QUFBQSxJQUFBRyxRQUFBLEdBQUFDLE9BQUEsY0FHWVYsZ0JBQWdCO0FBQUFXLE1BQUEsQ0FBQUQsT0FBQSxHQUFBQSxPQUFBLENBQUFFLE9BQUEiLCJpZ25vcmVMaXN0IjpbXX0=
}),
"[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/reference_data/locations.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _airports = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/reference_data/locations/airports.js [app-route] (ecmascript)"));
var _cities = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/reference_data/locations/cities.js [app-route] (ecmascript)"));
var _hotel = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/reference_data/locations/hotel.js [app-route] (ecmascript)"));
var _hotels = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/reference_data/locations/hotels.js [app-route] (ecmascript)"));
var _poi = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/reference_data/locations/poi.js [app-route] (ecmascript)"));
var _pois = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/reference_data/locations/pois.js [app-route] (ecmascript)"));
function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        "default": e
    };
}
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
/**
 * A namespaced client for the
 * `/v2/reference-data/locations` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.referenceData.locations;
 * ```
 *
 * @param {Client} client
 * @property {Airports} airports
 */ var Locations = /*#__PURE__*/ function() {
    function Locations(client) {
        _classCallCheck(this, Locations);
        this.client = client;
        this.airports = new _airports["default"](client);
        this.cities = new _cities["default"](client);
        this.hotel = new _hotel["default"](client);
        this.hotels = new _hotels["default"](client);
        this.pointsOfInterest = new _pois["default"](client);
    }
    /**
   * Returns a list of airports and cities matching a given keyword.
   *
   * @param {Object} params
   * @param {string} params.keyword keyword that should represent the start of
   *   a word in a city or airport name or code
   * @param {string} params.subType the type of location to search for
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * Find any location starting with 'lon'
   *
   * ```js
   * amadeus.referenceData.locations.get({
   *   keyword: 'lon',
   *   subType: Amadeus.location.any
   * });
   * ```
   */ return _createClass(Locations, [
        {
            key: "get",
            value: function get() {
                var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                return this.client.get('/v1/reference-data/locations', params);
            }
        },
        {
            key: "pointOfInterest",
            value: function pointOfInterest(poiId) {
                return new _poi["default"](this.client, poiId);
            }
        }
    ]);
}();
var _default = exports["default"] = Locations;
module.exports = exports.default; //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYWlycG9ydHMiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9jaXRpZXMiLCJfaG90ZWwiLCJfaG90ZWxzIiwiX3BvaSIsIl9wb2lzIiwiZSIsIl9fZXNNb2R1bGUiLCJfdHlwZW9mIiwibyIsIlN5bWJvbCIsIml0ZXJhdG9yIiwiY29uc3RydWN0b3IiLCJwcm90b3R5cGUiLCJfY2xhc3NDYWxsQ2hlY2siLCJhIiwibiIsIlR5cGVFcnJvciIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwiciIsInQiLCJsZW5ndGgiLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIl90b1Byb3BlcnR5S2V5Iiwia2V5IiwiX2NyZWF0ZUNsYXNzIiwiaSIsIl90b1ByaW1pdGl2ZSIsInRvUHJpbWl0aXZlIiwiY2FsbCIsIlN0cmluZyIsIk51bWJlciIsIkxvY2F0aW9ucyIsImNsaWVudCIsImFpcnBvcnRzIiwiQWlycG9ydHMiLCJjaXRpZXMiLCJDaXRpZXMiLCJob3RlbCIsIkhvdGVsIiwiaG90ZWxzIiwiSG90ZWxzIiwicG9pbnRzT2ZJbnRlcmVzdCIsIlBvaW50c09mSW50ZXJlc3QiLCJ2YWx1ZSIsImdldCIsInBhcmFtcyIsImFyZ3VtZW50cyIsInVuZGVmaW5lZCIsInBvaW50T2ZJbnRlcmVzdCIsInBvaUlkIiwiUG9pbnRPZkludGVyZXN0IiwiX2RlZmF1bHQiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmYXVsdCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hbWFkZXVzL25hbWVzcGFjZXMvcmVmZXJlbmNlX2RhdGEvbG9jYXRpb25zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBaXJwb3J0cyBmcm9tICcuL2xvY2F0aW9ucy9haXJwb3J0cyc7XG5pbXBvcnQgQ2l0aWVzIGZyb20gJy4vbG9jYXRpb25zL2NpdGllcyc7XG5pbXBvcnQgSG90ZWwgZnJvbSAnLi9sb2NhdGlvbnMvaG90ZWwnO1xuaW1wb3J0IEhvdGVscyBmcm9tICcuL2xvY2F0aW9ucy9ob3RlbHMnO1xuaW1wb3J0IFBvaW50T2ZJbnRlcmVzdCBmcm9tICcuL2xvY2F0aW9ucy9wb2knO1xuaW1wb3J0IFBvaW50c09mSW50ZXJlc3QgZnJvbSAnLi9sb2NhdGlvbnMvcG9pcyc7XG5cbi8qKlxuICogQSBuYW1lc3BhY2VkIGNsaWVudCBmb3IgdGhlXG4gKiBgL3YyL3JlZmVyZW5jZS1kYXRhL2xvY2F0aW9uc2AgZW5kcG9pbnRzXG4gKlxuICogQWNjZXNzIHZpYSB0aGUge0BsaW5rIEFtYWRldXN9IG9iamVjdFxuICpcbiAqIGBgYGpzXG4gKiBsZXQgYW1hZGV1cyA9IG5ldyBBbWFkZXVzKCk7XG4gKiBhbWFkZXVzLnJlZmVyZW5jZURhdGEubG9jYXRpb25zO1xuICogYGBgXG4gKlxuICogQHBhcmFtIHtDbGllbnR9IGNsaWVudFxuICogQHByb3BlcnR5IHtBaXJwb3J0c30gYWlycG9ydHNcbiAqL1xuY2xhc3MgTG9jYXRpb25zIHtcbiAgY29uc3RydWN0b3IoY2xpZW50KSB7XG4gICAgdGhpcy5jbGllbnQgPSBjbGllbnQ7XG4gICAgdGhpcy5haXJwb3J0cyA9IG5ldyBBaXJwb3J0cyhjbGllbnQpO1xuICAgIHRoaXMuY2l0aWVzID0gbmV3IENpdGllcyhjbGllbnQpO1xuICAgIHRoaXMuaG90ZWwgPSBuZXcgSG90ZWwoY2xpZW50KTtcbiAgICB0aGlzLmhvdGVscyA9IG5ldyBIb3RlbHMoY2xpZW50KTtcbiAgICB0aGlzLnBvaW50c09mSW50ZXJlc3QgPSBuZXcgUG9pbnRzT2ZJbnRlcmVzdChjbGllbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBsaXN0IG9mIGFpcnBvcnRzIGFuZCBjaXRpZXMgbWF0Y2hpbmcgYSBnaXZlbiBrZXl3b3JkLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMua2V5d29yZCBrZXl3b3JkIHRoYXQgc2hvdWxkIHJlcHJlc2VudCB0aGUgc3RhcnQgb2ZcbiAgICogICBhIHdvcmQgaW4gYSBjaXR5IG9yIGFpcnBvcnQgbmFtZSBvciBjb2RlXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMuc3ViVHlwZSB0aGUgdHlwZSBvZiBsb2NhdGlvbiB0byBzZWFyY2ggZm9yXG4gICAqIEByZXR1cm4ge1Byb21pc2UuPFJlc3BvbnNlLFJlc3BvbnNlRXJyb3I+fSBhIFByb21pc2VcbiAgICpcbiAgICogRmluZCBhbnkgbG9jYXRpb24gc3RhcnRpbmcgd2l0aCAnbG9uJ1xuICAgKlxuICAgKiBgYGBqc1xuICAgKiBhbWFkZXVzLnJlZmVyZW5jZURhdGEubG9jYXRpb25zLmdldCh7XG4gICAqICAga2V5d29yZDogJ2xvbicsXG4gICAqICAgc3ViVHlwZTogQW1hZGV1cy5sb2NhdGlvbi5hbnlcbiAgICogfSk7XG4gICAqIGBgYFxuICAgKi9cbiAgZ2V0KHBhcmFtcyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuY2xpZW50LmdldCgnL3YxL3JlZmVyZW5jZS1kYXRhL2xvY2F0aW9ucycsIHBhcmFtcyk7XG4gIH1cblxuICBwb2ludE9mSW50ZXJlc3QocG9pSWQpIHtcbiAgICByZXR1cm4gbmV3IFBvaW50T2ZJbnRlcmVzdCh0aGlzLmNsaWVudCwgcG9pSWQpO1xuICB9XG5cbn1cblxuZXhwb3J0IGRlZmF1bHQgTG9jYXRpb25zO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxJQUFBQSxTQUFBLEdBQUFDLHNCQUFBLENBQUFDLE9BQUE7QUFDQSxJQUFBQyxPQUFBLEdBQUFGLHNCQUFBLENBQUFDLE9BQUE7QUFDQSxJQUFBRSxNQUFBLEdBQUFILHNCQUFBLENBQUFDLE9BQUE7QUFDQSxJQUFBRyxPQUFBLEdBQUFKLHNCQUFBLENBQUFDLE9BQUE7QUFDQSxJQUFBSSxJQUFBLEdBQUFMLHNCQUFBLENBQUFDLE9BQUE7QUFDQSxJQUFBSyxLQUFBLEdBQUFOLHNCQUFBLENBQUFDLE9BQUE7QUFBZ0QsU0FBQUQs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
}),
"[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/reference_data/location.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
/**
 * A namespaced client for the
 * `/v2/reference-data/locations/:location_id` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.referenceData.locations('ALHR');
 * ```
 *
 * @param {Client} client
 * @property {number} locationId
 */ var Location = /*#__PURE__*/ function() {
    function Location(client, locationId) {
        _classCallCheck(this, Location);
        this.client = client;
        this.locationId = locationId;
    }
    /**
   * Returns details for a specific airport
   *
   * @param {Object} params
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * Find details for location with ID 'ALHR'
   *
   * ```js
   * amadeus.referenceData.location('ALHR').get();
   * ```
   */ return _createClass(Location, [
        {
            key: "get",
            value: function get() {
                var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                return this.client.get("/v1/reference-data/locations/".concat(this.locationId), params);
            }
        }
    ]);
}();
var _default = exports["default"] = Location;
module.exports = exports.default; //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJMb2NhdGlvbiIsImNsaWVudCIsImxvY2F0aW9uSWQiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImdldCIsInBhcmFtcyIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsImNvbmNhdCIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmF1bHQiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYW1hZGV1cy9uYW1lc3BhY2VzL3JlZmVyZW5jZV9kYXRhL2xvY2F0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQSBuYW1lc3BhY2VkIGNsaWVudCBmb3IgdGhlXG4gKiBgL3YyL3JlZmVyZW5jZS1kYXRhL2xvY2F0aW9ucy86bG9jYXRpb25faWRgIGVuZHBvaW50c1xuICpcbiAqIEFjY2VzcyB2aWEgdGhlIHtAbGluayBBbWFkZXVzfSBvYmplY3RcbiAqXG4gKiBgYGBqc1xuICogbGV0IGFtYWRldXMgPSBuZXcgQW1hZGV1cygpO1xuICogYW1hZGV1cy5yZWZlcmVuY2VEYXRhLmxvY2F0aW9ucygnQUxIUicpO1xuICogYGBgXG4gKlxuICogQHBhcmFtIHtDbGllbnR9IGNsaWVudFxuICogQHByb3BlcnR5IHtudW1iZXJ9IGxvY2F0aW9uSWRcbiAqL1xuY2xhc3MgTG9jYXRpb24ge1xuICBjb25zdHJ1Y3RvcihjbGllbnQsIGxvY2F0aW9uSWQpIHtcbiAgICB0aGlzLmNsaWVudCA9IGNsaWVudDtcbiAgICB0aGlzLmxvY2F0aW9uSWQgPSBsb2NhdGlvbklkO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgZGV0YWlscyBmb3IgYSBzcGVjaWZpYyBhaXJwb3J0XG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXNcbiAgICogQHJldHVybiB7UHJvbWlzZS48UmVzcG9uc2UsUmVzcG9uc2VFcnJvcj59IGEgUHJvbWlzZVxuICAgKlxuICAgKiBGaW5kIGRldGFpbHMgZm9yIGxvY2F0aW9uIHdpdGggSUQgJ0FMSFInXG4gICAqXG4gICAqIGBgYGpzXG4gICAqIGFtYWRldXMucmVmZXJlbmNlRGF0YS5sb2NhdGlvbignQUxIUicpLmdldCgpO1xuICAgKiBgYGBcbiAgICovXG4gIGdldChwYXJhbXMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmNsaWVudC5nZXQoXG4gICAgICBgL3YxL3JlZmVyZW5jZS1kYXRhL2xvY2F0aW9ucy8ke3RoaXMubG9jYXRpb25JZH1gLCBwYXJhbXNcbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvY2F0aW9uO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBYkEsSUFjTUEsUUFBUTtFQUNaLFNBQUFBLFNBQVlDLE1BQU0sRUFBRUMsVUFBVSxFQUFFO0lBQUFDLGVBQUEsT0FBQUgsUUFBQTtJQUM5QixJQUFJLENBQUNDLE1BQU0sR0FBR0EsTUFBTTtJQUNwQixJQUFJLENBQUNDLFVBQVUsR0FBR0EsVUFBVTtFQUM5Qjs7RUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFYRSxPQUFBRSxZQUFBLENBQUFKLFFBQUE7SUFBQUssR0FBQTtJQUFBQyxLQUFBLEVBWUEsU0FBQUMsR0FBR0EsQ0FBQSxFQUFjO01BQUEsSUFBYkMsTUFBTSxHQUFBQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBRyxDQUFDLENBQUM7TUFDYixPQUFPLElBQUksQ0FBQ1IsTUFBTSxDQUFDTSxHQUFHLGlDQUFBSyxNQUFBLENBQ1ksSUFBSSxDQUFDVixVQUFVLEdBQUlNLE1BQ3JELENBQUM7SUFDSDtFQUFDO0FBQUE7QUFBQSxJQUFBSyxRQUFBLEdBQUFDLE9BQUEsY0FHWWQsUUFBUTtBQUFBZSxNQUFBLENBQUFELE9BQUEsR0FBQUEsT0FBQSxDQUFBRSxPQUFBIiwiaWdub3JlTGlzdCI6W119
}),
"[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/reference_data/airlines.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
/**
 * A namespaced client for the
 * `/v1/reference-data/airlines` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.referenceData.airlines;
 * ```
 *
 * @param {Client} client
 */ var Airlines = /*#__PURE__*/ function() {
    function Airlines(client) {
        _classCallCheck(this, Airlines);
        this.client = client;
    }
    /**
   * Returns the airline name and code.
   *
   * @param {Object} params
   * @param {string} params.airlineCodes Code of the airline following IATA or ICAO standard.
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * Find to which airlines belongs IATA Code BA
   *
   * ```js
   * amadeus.referenceData.airlines.get({
   *   airlineCodes : 'BA'
   * });
   * ```
   */ return _createClass(Airlines, [
        {
            key: "get",
            value: function get() {
                var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                return this.client.get('/v1/reference-data/airlines', params);
            }
        }
    ]);
}();
var _default = exports["default"] = Airlines;
module.exports = exports.default; //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJBaXJsaW5lcyIsImNsaWVudCIsIl9jbGFzc0NhbGxDaGVjayIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiZ2V0IiwicGFyYW1zIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiX2RlZmF1bHQiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmYXVsdCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hbWFkZXVzL25hbWVzcGFjZXMvcmVmZXJlbmNlX2RhdGEvYWlybGluZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBBIG5hbWVzcGFjZWQgY2xpZW50IGZvciB0aGVcbiAqIGAvdjEvcmVmZXJlbmNlLWRhdGEvYWlybGluZXNgIGVuZHBvaW50c1xuICpcbiAqIEFjY2VzcyB2aWEgdGhlIHtAbGluayBBbWFkZXVzfSBvYmplY3RcbiAqXG4gKiBgYGBqc1xuICogbGV0IGFtYWRldXMgPSBuZXcgQW1hZGV1cygpO1xuICogYW1hZGV1cy5yZWZlcmVuY2VEYXRhLmFpcmxpbmVzO1xuICogYGBgXG4gKlxuICogQHBhcmFtIHtDbGllbnR9IGNsaWVudFxuICovXG5jbGFzcyBBaXJsaW5lc3tcbiAgY29uc3RydWN0b3IoY2xpZW50KSB7XG4gICAgdGhpcy5jbGllbnQgPSBjbGllbnQ7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgYWlybGluZSBuYW1lIGFuZCBjb2RlLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMuYWlybGluZUNvZGVzIENvZGUgb2YgdGhlIGFpcmxpbmUgZm9sbG93aW5nIElBVEEgb3IgSUNBTyBzdGFuZGFyZC5cbiAgICogQHJldHVybiB7UHJvbWlzZS48UmVzcG9uc2UsUmVzcG9uc2VFcnJvcj59IGEgUHJvbWlzZVxuICAgKlxuICAgKiBGaW5kIHRvIHdoaWNoIGFpcmxpbmVzIGJlbG9uZ3MgSUFUQSBDb2RlIEJBXG4gICAqXG4gICAqIGBgYGpzXG4gICAqIGFtYWRldXMucmVmZXJlbmNlRGF0YS5haXJsaW5lcy5nZXQoe1xuICAgKiAgIGFpcmxpbmVDb2RlcyA6ICdCQSdcbiAgICogfSk7XG4gICAqIGBgYFxuICAgKi9cbiAgZ2V0KHBhcmFtcyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuY2xpZW50LmdldCgnL3YxL3JlZmVyZW5jZS1kYXRhL2FpcmxpbmVzJywgcGFyYW1zKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBaXJsaW5lcztcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFaQSxJQWFNQSxRQUFRO0VBQ1osU0FBQUEsU0FBWUMsTUFBTSxFQUFFO0lBQUFDLGVBQUEsT0FBQUYsUUFBQTtJQUNsQixJQUFJLENBQUNDLE1BQU0sR0FBR0EsTUFBTTtFQUN0Qjs7RUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFkRSxPQUFBRSxZQUFBLENBQUFILFFBQUE7SUFBQUksR0FBQTtJQUFBQyxLQUFBLEVBZUEsU0FBQUMsR0FBR0EsQ0FBQSxFQUFjO01BQUEsSUFBYkMsTUFBTSxHQUFBQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBRyxDQUFDLENBQUM7TUFDYixPQUFPLElBQUksQ0FBQ1AsTUFBTSxDQUFDSyxHQUFHLENBQUMsNkJBQTZCLEVBQUVDLE1BQU0sQ0FBQztJQUMvRDtFQUFDO0FBQUE7QUFBQSxJQUFBSSxRQUFBLEdBQUFDLE9BQUEsY0FHWVosUUFBUTtBQUFBYSxNQUFBLENBQUFELE9BQUEsR0FBQUEsT0FBQSxDQUFBRSxPQUFBIiwiaWdub3JlTGlzdCI6W119
}),
"[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/reference_data/recommended_locations.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
/**
 * A namespaced client for the
 * `/v1/reference-data/recommended-locations` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.referenceData.recommendedLocations;
 * ```
 *
 * @param {Client} client
 */ var RecommendedLocations = /*#__PURE__*/ function() {
    function RecommendedLocations(client) {
        _classCallCheck(this, RecommendedLocations);
        this.client = client;
    }
    /**
   * Returns the recommended locations (destinations).
   *
   * @param {Object} params
   * @param {string} params.cityCodes Code of the city following IATA standard.
   * @param {string} params.travelerCountryCode Origin country of the traveler following IATA standard.
   * @param {string} params.destinationCountryCodes Country codes follow IATA standard.
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * Get recommended destinations from a given origin
   *
   * ```js
   * amadeus.referenceData.recommendedDestinations.get({
   *   cityCodes: 'PAR',
   *   travelerCountryCode: 'FR'
   * });
   * ```
   */ return _createClass(RecommendedLocations, [
        {
            key: "get",
            value: function get() {
                var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                return this.client.get('/v1/reference-data/recommended-locations', params);
            }
        }
    ]);
}();
var _default = exports["default"] = RecommendedLocations;
module.exports = exports.default; //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJSZWNvbW1lbmRlZExvY2F0aW9ucyIsImNsaWVudCIsIl9jbGFzc0NhbGxDaGVjayIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiZ2V0IiwicGFyYW1zIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiX2RlZmF1bHQiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmYXVsdCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hbWFkZXVzL25hbWVzcGFjZXMvcmVmZXJlbmNlX2RhdGEvcmVjb21tZW5kZWRfbG9jYXRpb25zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQSBuYW1lc3BhY2VkIGNsaWVudCBmb3IgdGhlXG4gKiBgL3YxL3JlZmVyZW5jZS1kYXRhL3JlY29tbWVuZGVkLWxvY2F0aW9uc2AgZW5kcG9pbnRzXG4gKlxuICogQWNjZXNzIHZpYSB0aGUge0BsaW5rIEFtYWRldXN9IG9iamVjdFxuICpcbiAqIGBgYGpzXG4gKiBsZXQgYW1hZGV1cyA9IG5ldyBBbWFkZXVzKCk7XG4gKiBhbWFkZXVzLnJlZmVyZW5jZURhdGEucmVjb21tZW5kZWRMb2NhdGlvbnM7XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge0NsaWVudH0gY2xpZW50XG4gKi9cbmNsYXNzIFJlY29tbWVuZGVkTG9jYXRpb25zIHtcbiAgY29uc3RydWN0b3IoY2xpZW50KSB7XG4gICAgdGhpcy5jbGllbnQgPSBjbGllbnQ7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyB0aGUgcmVjb21tZW5kZWQgbG9jYXRpb25zIChkZXN0aW5hdGlvbnMpLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMuY2l0eUNvZGVzIENvZGUgb2YgdGhlIGNpdHkgZm9sbG93aW5nIElBVEEgc3RhbmRhcmQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMudHJhdmVsZXJDb3VudHJ5Q29kZSBPcmlnaW4gY291bnRyeSBvZiB0aGUgdHJhdmVsZXIgZm9sbG93aW5nIElBVEEgc3RhbmRhcmQuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMuZGVzdGluYXRpb25Db3VudHJ5Q29kZXMgQ291bnRyeSBjb2RlcyBmb2xsb3cgSUFUQSBzdGFuZGFyZC5cbiAgICogQHJldHVybiB7UHJvbWlzZS48UmVzcG9uc2UsUmVzcG9uc2VFcnJvcj59IGEgUHJvbWlzZVxuICAgKlxuICAgKiBHZXQgcmVjb21tZW5kZWQgZGVzdGluYXRpb25zIGZyb20gYSBnaXZlbiBvcmlnaW5cbiAgICpcbiAgICogYGBganNcbiAgICogYW1hZGV1cy5yZWZlcmVuY2VEYXRhLnJlY29tbWVuZGVkRGVzdGluYXRpb25zLmdldCh7XG4gICAqICAgY2l0eUNvZGVzOiAnUEFSJyxcbiAgICogICB0cmF2ZWxlckNvdW50cnlDb2RlOiAnRlInXG4gICAqIH0pO1xuICAgKiBgYGBcbiAgICovXG4gIGdldChwYXJhbXMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmNsaWVudC5nZXQoJy92MS9yZWZlcmVuY2UtZGF0YS9yZWNvbW1lbmRlZC1sb2NhdGlvbnMnLCBwYXJhbXMpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlY29tbWVuZGVkTG9jYXRpb25zO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBLElBYU1BLG9CQUFvQjtFQUN4QixTQUFBQSxxQkFBWUMsTUFBTSxFQUFFO0lBQUFDLGVBQUEsT0FBQUYsb0JBQUE7SUFDbEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBLE1BQU07RUFDdEI7O0VBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBakJFLE9BQUFFLFlBQUEsQ0FBQUgsb0JBQUE7SUFBQUksR0FBQTtJQUFBQyxLQUFBLEVBa0JBLFNBQUFDLEdBQUdBLENBQUEsRUFBYztNQUFBLElBQWJDLE1BQU0sR0FBQUMsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUcsQ0FBQyxDQUFDO01BQ2IsT0FBTyxJQUFJLENBQUNQLE1BQU0sQ0FBQ0ssR0FBRyxDQUFDLDBDQUEwQyxFQUFFQyxNQUFNLENBQUM7SUFDNUU7RUFBQztBQUFBO0FBQUEsSUFBQUksUUFBQSxHQUFBQyxPQUFBLGNBR1laLG9CQUFvQjtBQUFBYSxNQUFBLENBQUFELE9BQUEsR0FBQUEsT0FBQSxDQUFBRSxPQUFBIiwiaWdub3JlTGlzdCI6W119
}),
"[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/reference_data.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _urls = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/reference_data/urls.js [app-route] (ecmascript)"));
var _locations = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/reference_data/locations.js [app-route] (ecmascript)"));
var _location = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/reference_data/location.js [app-route] (ecmascript)"));
var _airlines = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/reference_data/airlines.js [app-route] (ecmascript)"));
var _recommended_locations = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/reference_data/recommended_locations.js [app-route] (ecmascript)"));
function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        "default": e
    };
}
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
/**
 * A namespaced client for the
 * `/v2/reference-data` endpoints
 *
 * Access via the {Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.referenceData.urls;
 * ```
 *
 * @param {Client} client
 * @property {Urls} urls
 * @protected
 */ var ReferenceData = /*#__PURE__*/ function() {
    function ReferenceData(client) {
        _classCallCheck(this, ReferenceData);
        this.client = client;
        this.urls = new _urls["default"](client);
        this.locations = new _locations["default"](client);
        this.airlines = new _airlines["default"](client);
        this.recommendedLocations = new _recommended_locations["default"](client);
    }
    /**
   * The namespace for the Location APIs - accessing a specific location
   *
   * @param  {string} [locationId]  The ID of the location to search for
   * @return {Location}
   **/ return _createClass(ReferenceData, [
        {
            key: "location",
            value: function location(locationId) {
                return new _location["default"](this.client, locationId);
            }
        }
    ]);
}();
var _default = exports["default"] = ReferenceData;
module.exports = exports.default; //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfdXJscyIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiX2xvY2F0aW9ucyIsIl9sb2NhdGlvbiIsIl9haXJsaW5lcyIsIl9yZWNvbW1lbmRlZF9sb2NhdGlvbnMiLCJlIiwiX19lc01vZHVsZSIsIl90eXBlb2YiLCJvIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJjb25zdHJ1Y3RvciIsInByb3RvdHlwZSIsIl9jbGFzc0NhbGxDaGVjayIsImEiLCJuIiwiVHlwZUVycm9yIiwiX2RlZmluZVByb3BlcnRpZXMiLCJyIiwidCIsImxlbmd0aCIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX3RvUHJvcGVydHlLZXkiLCJrZXkiLCJfY3JlYXRlQ2xhc3MiLCJpIiwiX3RvUHJpbWl0aXZlIiwidG9QcmltaXRpdmUiLCJjYWxsIiwiU3RyaW5nIiwiTnVtYmVyIiwiUmVmZXJlbmNlRGF0YSIsImNsaWVudCIsInVybHMiLCJVcmxzIiwibG9jYXRpb25zIiwiTG9jYXRpb25zIiwiYWlybGluZXMiLCJBaXJsaW5lcyIsInJlY29tbWVuZGVkTG9jYXRpb25zIiwiUmVjb21tZW5kZWRMb2NhdGlvbnMiLCJ2YWx1ZSIsImxvY2F0aW9uIiwibG9jYXRpb25JZCIsIkxvY2F0aW9uIiwiX2RlZmF1bHQiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmYXVsdCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hbWFkZXVzL25hbWVzcGFjZXMvcmVmZXJlbmNlX2RhdGEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFVybHMgICAgICBmcm9tICcuL3JlZmVyZW5jZV9kYXRhL3VybHMnO1xuaW1wb3J0IExvY2F0aW9ucyBmcm9tICcuL3JlZmVyZW5jZV9kYXRhL2xvY2F0aW9ucyc7XG5pbXBvcnQgTG9jYXRpb24gIGZyb20gJy4vcmVmZXJlbmNlX2RhdGEvbG9jYXRpb24nO1xuaW1wb3J0IEFpcmxpbmVzIGZyb20gJy4vcmVmZXJlbmNlX2RhdGEvYWlybGluZXMnO1xuaW1wb3J0IFJlY29tbWVuZGVkTG9jYXRpb25zIGZyb20gJy4vcmVmZXJlbmNlX2RhdGEvcmVjb21tZW5kZWRfbG9jYXRpb25zJztcblxuLyoqXG4gKiBBIG5hbWVzcGFjZWQgY2xpZW50IGZvciB0aGVcbiAqIGAvdjIvcmVmZXJlbmNlLWRhdGFgIGVuZHBvaW50c1xuICpcbiAqIEFjY2VzcyB2aWEgdGhlIHtBbWFkZXVzfSBvYmplY3RcbiAqXG4gKiBgYGBqc1xuICogbGV0IGFtYWRldXMgPSBuZXcgQW1hZGV1cygpO1xuICogYW1hZGV1cy5yZWZlcmVuY2VEYXRhLnVybHM7XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge0NsaWVudH0gY2xpZW50XG4gKiBAcHJvcGVydHkge1VybHN9IHVybHNcbiAqIEBwcm90ZWN0ZWRcbiAqL1xuY2xhc3MgUmVmZXJlbmNlRGF0YSB7XG4gIGNvbnN0cnVjdG9yKGNsaWVudCkge1xuICAgIHRoaXMuY2xpZW50ICAgID0gY2xpZW50O1xuICAgIHRoaXMudXJscyAgICAgID0gbmV3IFVybHMoY2xpZW50KTtcbiAgICB0aGlzLmxvY2F0aW9ucyA9IG5ldyBMb2NhdGlvbnMoY2xpZW50KTtcbiAgICB0aGlzLmFpcmxpbmVzICA9IG5ldyBBaXJsaW5lcyhjbGllbnQpO1xuICAgIHRoaXMucmVjb21tZW5kZWRMb2NhdGlvbnMgPSBuZXcgUmVjb21tZW5kZWRMb2NhdGlvbnMoY2xpZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUaGUgbmFtZXNwYWNlIGZvciB0aGUgTG9jYXRpb24gQVBJcyAtIGFjY2Vzc2luZyBhIHNwZWNpZmljIGxvY2F0aW9uXG4gICAqXG4gICAqIEBwYXJhbSAge3N0cmluZ30gW2xvY2F0aW9uSWRdICBUaGUgSUQgb2YgdGhlIGxvY2F0aW9uIHRvIHNlYXJjaCBmb3JcbiAgICogQHJldHVybiB7TG9jYXRpb259XG4gICAqKi9cbiAgbG9jYXRpb24obG9jYXRpb25JZCkge1xuICAgIHJldHVybiBuZXcgTG9jYXRpb24odGhpcy5jbGllbnQsIGxvY2F0aW9uSWQpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlZmVyZW5jZURhdGE7XG4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLElBQUFBLEtBQUEsR0FBQUMsc0JBQUEsQ0FBQUMsT0FBQTtBQUNBLElBQUFDLFVBQUEsR0FBQUYsc0JBQUEsQ0FBQUMsT0FBQTtBQUNBLElBQUFFLFNBQUEsR0FBQUgsc0JBQUEsQ0FBQUMsT0FBQTtBQUNBLElBQUFHLFNBQUEsR0FBQUosc0JBQUEsQ0FBQUMsT0FBQTtBQUNBLElBQUFJLHNCQUFBLEdBQUFMLHNCQUFBLENBQUFDLE9BQUE7QUFBMEUsU0FBQUQsdUJBQUFNLENBQUEsV0FBQUEsQ0FBQSxJQUFBQSxDQUFBLENBQUFDLFVBQUEsR0FBQUQsQ0FBQSxnQkFBQUEsQ0FBQTtBQUFBLFNBQUFFLFFBQUFDLENBQUEsc0NBQUFELE9BQUEsd0JBQUFFLE1BQUEsdUJBQUFBLE1BQUEsQ0FBQUMsUUFBQSxhQUFBRixDQUFBLGtCQUFBQSxDQUFBLGdCQUFBQSxDQUFBLFdBQUFBLENBQUEseUJBQUFDLE1BQUEsSUFBQUQsQ0FBQSxDQUFBRyxXQUFBLEtBQUFGLE1BQUEsSUFBQUQsQ0FBQSxLQUFBQyxNQUFBLENBQUFHLFNBQUEscUJBQUFKLENBQUEsS0FBQUQsT0FBQSxDQUFBQyxDQUFBO0FBQUEsU0FBQUssZ0JBQUFDLENBQUEsRUFBQUMsQ0FBQSxVQUFBRCxDQUFBLFlBQUFDLENBQUEsYUFBQUMsU0FBQTtBQUFBLFNBQUFDLGtCQUFBWixDQUFBLEVBQUFhLENBQUEsYUFBQUMsQ0FBQSxNQUFBQSxDQUFBLEdBQUFELENBQUEsQ0FBQUUsTUFBQSxFQUFBRCxDQUFBLFVBQUFYLENBQUEsR0FBQVUsQ0FBQSxDQUFBQyxDQUFBLEdBQUFYLENBQUEsQ0FBQWEsVUFBQSxHQUFBYixDQUFBLENBQUFhLFVBQUEsUUFBQWIsQ0FBQSxDQUFBYyxZQUFBLGtCQUFBZCxDQUFBLEtBQUFBLENBQUEsQ0FBQWUsUUFBQSxRQUFBQyxNQUFBLENBQUFDLGNBQUEsQ0FBQXBCLENBQUEsRUFBQXFCLGNBQUEsQ0FBQWxCLENBQUEsQ0FBQW1CLEdBQUEsR0FBQW5CLENBQUE7QUFBQSxTQUFBb0IsYUFBQXZCLENBQUEsRUFBQWEsQ0FBQSxFQUFBQyxDQUFBLFdBQUFELENBQUEsSUFBQUQsaUJBQUEsQ0FBQVosQ0FBQSxDQUFBTyxTQUFBLEVBQUFNLENBQUEsR0FBQUMsQ0FBQSxJQUFBRixpQkFBQSxDQUFBWixDQUFBLEVBQUFjLENBQUEsR0FBQUssTUFBQSxDQUFBQyxjQUFBLENBQUFwQixDQUFBLGlCQUFBa0IsUUFBQSxTQUFBbEIsQ0FBQTtBQUFBLFNBQUFxQixlQUFBUCxDQUFBLFFBQUFVLENBQUEsR0FBQUMsWUFBQSxDQUFBWCxDQUFBLGdDQUFBWixPQUFBLENBQUFzQixDQUFBLElBQUFBLENBQUEsR0FBQUEsQ0FBQTtBQUFBLFNBQUFDLGFBQUFYLENBQUEsRUFBQUQsQ0FBQSxvQkFBQVgsT0FBQSxDQUFBWSxDQUFBLE1BQUFBLENBQUEsU0FBQUEsQ0FBQSxNQUFBZCxDQUFBLEdBQUFjLENBQUEsQ0FBQVYsTUFBQSxDQUFBc0IsV0FBQSxrQkFBQTFCLENBQUEsUUFBQXdCLENBQUEsR0FBQXhCLENBQUEsQ0FBQTJCLElBQUEsQ0FBQWIsQ0FBQSxFQUFBRCxDQUFBLGdDQUFBWCxPQUFBLENBQUFzQixDQUFBLFVBQUFBLENBQUEsWUFBQWIsU0FBQSx5RUFBQUUsQ0FBQSxHQUFBZSxNQUFBLEdBQUFDLE1BQUEsRUFBQWYsQ0FBQTtBQUUxRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFkQSxJQWVNZ0IsYUFBYTtFQUNqQixTQUFBQSxjQUFZQyxNQUFNLEVBQUU7SUFBQXZCLGVBQUEsT0FBQXNCLGFBQUE7SUFDbEIsSUFBSSxDQUFDQyxNQUFNLEdBQU1BLE1BQU07SUFDdkIsSUFBSSxDQUFDQyxJQUFJLEdBQVEsSUFBSUMsZ0JBQUksQ0FBQ0YsTUFBTSxDQUFDO0lBQ2pDLElBQUksQ0FBQ0csU0FBUyxHQUFHLElBQUlDLHFCQUFTLENBQUNKLE1BQU0sQ0FBQztJQUN0QyxJQUFJLENBQUNLLFFBQVEsR0FBSSxJQUFJQyxvQkFBUSxDQUFDTixNQUFNLENBQUM7SUFDckMsSUFBSSxDQUFDTyxvQkFBb0IsR0FBRyxJQUFJQyxpQ0FBb0IsQ0FBQ1IsTUFBTSxDQUFDO0VBQzlEOztFQUVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUxFLE9BQUFSLFlBQUEsQ0FBQU8sYUFBQTtJQUFBUixHQUFBO0lBQUFrQixLQUFBLEVBTUEsU0FBQUMsUUFBUUEsQ0FBQ0MsVUFBVSxFQUFFO01BQ25CLE9BQU8sSUFBSUMsb0JBQVEsQ0FBQyxJQUFJLENBQUNaLE1BQU0sRUFBRVcsVUFBVSxDQUFDO0lBQzlDO0VBQUM7QUFBQTtBQUFBLElBQUFFLFFBQUEsR0FBQUMsT0FBQSxjQUdZZixhQUFhO0FBQUFnQixNQUFBLENBQUFELE9BQUEsR0FBQUEsT0FBQSxDQUFBRSxPQUFBIiwiaWdub3JlTGlzdCI6W119
}),
"[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/shopping/flight_destinations.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
/**
 * A namespaced client for the
 * `/v1/shopping/flight-destinations` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.shopping.flightDestinations;
 * ```
 *
 * @param {Client} client
 */ var FlightDestinations = /*#__PURE__*/ function() {
    function FlightDestinations(client) {
        _classCallCheck(this, FlightDestinations);
        this.client = client;
    }
    /**
   * Find the cheapest destinations where you can fly to.
   *
   * @param {Object} params
   * @param {string} params.origin City/Airport IATA code from which the flight
   *   will depart. BOS, for example.
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * Find the cheapest destination from Madrid
   *
   * ```js
   * amadeus.shopping.flightDestinations.get({
   *   origin: 'MAD'
   * });
   * ```
   */ return _createClass(FlightDestinations, [
        {
            key: "get",
            value: function get() {
                var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                return this.client.get('/v1/shopping/flight-destinations', params);
            }
        }
    ]);
}();
var _default = exports["default"] = FlightDestinations;
module.exports = exports.default; //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJGbGlnaHREZXN0aW5hdGlvbnMiLCJjbGllbnQiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImdldCIsInBhcmFtcyIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmF1bHQiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYW1hZGV1cy9uYW1lc3BhY2VzL3Nob3BwaW5nL2ZsaWdodF9kZXN0aW5hdGlvbnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBBIG5hbWVzcGFjZWQgY2xpZW50IGZvciB0aGVcbiAqIGAvdjEvc2hvcHBpbmcvZmxpZ2h0LWRlc3RpbmF0aW9uc2AgZW5kcG9pbnRzXG4gKlxuICogQWNjZXNzIHZpYSB0aGUge0BsaW5rIEFtYWRldXN9IG9iamVjdFxuICpcbiAqIGBgYGpzXG4gKiBsZXQgYW1hZGV1cyA9IG5ldyBBbWFkZXVzKCk7XG4gKiBhbWFkZXVzLnNob3BwaW5nLmZsaWdodERlc3RpbmF0aW9ucztcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7Q2xpZW50fSBjbGllbnRcbiAqL1xuY2xhc3MgRmxpZ2h0RGVzdGluYXRpb25zIHtcbiAgY29uc3RydWN0b3IoY2xpZW50KSB7XG4gICAgdGhpcy5jbGllbnQgPSBjbGllbnQ7XG4gIH1cblxuICAvKipcbiAgICogRmluZCB0aGUgY2hlYXBlc3QgZGVzdGluYXRpb25zIHdoZXJlIHlvdSBjYW4gZmx5IHRvLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMub3JpZ2luIENpdHkvQWlycG9ydCBJQVRBIGNvZGUgZnJvbSB3aGljaCB0aGUgZmxpZ2h0XG4gICAqICAgd2lsbCBkZXBhcnQuIEJPUywgZm9yIGV4YW1wbGUuXG4gICAqIEByZXR1cm4ge1Byb21pc2UuPFJlc3BvbnNlLFJlc3BvbnNlRXJyb3I+fSBhIFByb21pc2VcbiAgICpcbiAgICogRmluZCB0aGUgY2hlYXBlc3QgZGVzdGluYXRpb24gZnJvbSBNYWRyaWRcbiAgICpcbiAgICogYGBganNcbiAgICogYW1hZGV1cy5zaG9wcGluZy5mbGlnaHREZXN0aW5hdGlvbnMuZ2V0KHtcbiAgICogICBvcmlnaW46ICdNQUQnXG4gICAqIH0pO1xuICAgKiBgYGBcbiAgICovXG4gIGdldChwYXJhbXMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmNsaWVudC5nZXQoJy92MS9zaG9wcGluZy9mbGlnaHQtZGVzdGluYXRpb25zJywgcGFyYW1zKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGbGlnaHREZXN0aW5hdGlvbnM7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWkEsSUFhTUEsa0JBQWtCO0VBQ3RCLFNBQUFBLG1CQUFZQyxNQUFNLEVBQUU7SUFBQUMsZUFBQSxPQUFBRixrQkFBQTtJQUNsQixJQUFJLENBQUNDLE1BQU0sR0FBR0EsTUFBTTtFQUN0Qjs7RUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQWZFLE9BQUFFLFlBQUEsQ0FBQUgsa0JBQUE7SUFBQUksR0FBQTtJQUFBQyxLQUFBLEVBZ0JBLFNBQUFDLEdBQUdBLENBQUEsRUFBYztNQUFBLElBQWJDLE1BQU0sR0FBQUMsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUcsQ0FBQyxDQUFDO01BQ2IsT0FBTyxJQUFJLENBQUNQLE1BQU0sQ0FBQ0ssR0FBRyxDQUFDLGtDQUFrQyxFQUFFQyxNQUFNLENBQUM7SUFDcEU7RUFBQztBQUFBO0FBQUEsSUFBQUksUUFBQSxHQUFBQyxPQUFBLGNBR1laLGtCQUFrQjtBQUFBYSxNQUFBLENBQUFELE9BQUEsR0FBQUEsT0FBQSxDQUFBRSxPQUFBIiwiaWdub3JlTGlzdCI6W119
}),
"[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/shopping/flight_offers/flight_choice_prediction.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
/**
 * A namespaced client for the
 * `/v1/shopping/flight-offers/prediction` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.shopping.flightOffers.prediction;
 * ```
 *
 * @param {Client} client
 */ var FlightChoicePrediction = /*#__PURE__*/ function() {
    function FlightChoicePrediction(client) {
        _classCallCheck(this, FlightChoicePrediction);
        this.client = client;
    }
    /**
   * Returns a list of flight offers with the probability to be chosen.
   *
   * @param {Object} params
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * Returns flights from NYC to MAD with the probability to be chosen.
   *
   * ```js
   * amadeus.shopping.flightOffersSearch.get({
   *     originLocationCode: 'SYD',
   *     destinationLocationCode: 'BKK',
   *     departureDate: '2020-08-01',
   *     adults: '2'
   * }).then(function(response){
   *     return amadeus.shopping.flightOffers.prediction.post(response);
   * }).then(function(response){
   *     console.log(response.data);
   * }).catch(function(responseError){
   *     console.log(responseError);
   * });
   * ```
   */ return _createClass(FlightChoicePrediction, [
        {
            key: "post",
            value: function post() {
                var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                return this.client.post('/v2/shopping/flight-offers/prediction', params);
            }
        }
    ]);
}();
var _default = exports["default"] = FlightChoicePrediction;
module.exports = exports.default; //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJGbGlnaHRDaG9pY2VQcmVkaWN0aW9uIiwiY2xpZW50IiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJwb3N0IiwicGFyYW1zIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiX2RlZmF1bHQiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmYXVsdCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hbWFkZXVzL25hbWVzcGFjZXMvc2hvcHBpbmcvZmxpZ2h0X29mZmVycy9mbGlnaHRfY2hvaWNlX3ByZWRpY3Rpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBBIG5hbWVzcGFjZWQgY2xpZW50IGZvciB0aGVcbiAqIGAvdjEvc2hvcHBpbmcvZmxpZ2h0LW9mZmVycy9wcmVkaWN0aW9uYCBlbmRwb2ludHNcbiAqXG4gKiBBY2Nlc3MgdmlhIHRoZSB7QGxpbmsgQW1hZGV1c30gb2JqZWN0XG4gKlxuICogYGBganNcbiAqIGxldCBhbWFkZXVzID0gbmV3IEFtYWRldXMoKTtcbiAqIGFtYWRldXMuc2hvcHBpbmcuZmxpZ2h0T2ZmZXJzLnByZWRpY3Rpb247XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge0NsaWVudH0gY2xpZW50XG4gKi9cbmNsYXNzIEZsaWdodENob2ljZVByZWRpY3Rpb24ge1xuICBjb25zdHJ1Y3RvcihjbGllbnQpIHtcbiAgICB0aGlzLmNsaWVudCA9IGNsaWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgbGlzdCBvZiBmbGlnaHQgb2ZmZXJzIHdpdGggdGhlIHByb2JhYmlsaXR5IHRvIGJlIGNob3Nlbi5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtc1xuICAgKiBAcmV0dXJuIHtQcm9taXNlLjxSZXNwb25zZSxSZXNwb25zZUVycm9yPn0gYSBQcm9taXNlXG4gICAqXG4gICAqIFJldHVybnMgZmxpZ2h0cyBmcm9tIE5ZQyB0byBNQUQgd2l0aCB0aGUgcHJvYmFiaWxpdHkgdG8gYmUgY2hvc2VuLlxuICAgKlxuICAgKiBgYGBqc1xuICAgKiBhbWFkZXVzLnNob3BwaW5nLmZsaWdodE9mZmVyc1NlYXJjaC5nZXQoe1xuICAgKiAgICAgb3JpZ2luTG9jYXRpb25Db2RlOiAnU1lEJyxcbiAgICogICAgIGRlc3RpbmF0aW9uTG9jYXRpb25Db2RlOiAnQktLJyxcbiAgICogICAgIGRlcGFydHVyZURhdGU6ICcyMDIwLTA4LTAxJyxcbiAgICogICAgIGFkdWx0czogJzInXG4gICAqIH0pLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2Upe1xuICAgKiAgICAgcmV0dXJuIGFtYWRldXMuc2hvcHBpbmcuZmxpZ2h0T2ZmZXJzLnByZWRpY3Rpb24ucG9zdChyZXNwb25zZSk7XG4gICAqIH0pLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2Upe1xuICAgKiAgICAgY29uc29sZS5sb2cocmVzcG9uc2UuZGF0YSk7XG4gICAqIH0pLmNhdGNoKGZ1bmN0aW9uKHJlc3BvbnNlRXJyb3Ipe1xuICAgKiAgICAgY29uc29sZS5sb2cocmVzcG9uc2VFcnJvcik7XG4gICAqIH0pO1xuICAgKiBgYGBcbiAgICovXG4gIHBvc3QocGFyYW1zID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5jbGllbnQucG9zdCgnL3YyL3Nob3BwaW5nL2ZsaWdodC1vZmZlcnMvcHJlZGljdGlvbicsIHBhcmFtcyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRmxpZ2h0Q2hvaWNlUHJlZGljdGlvbjtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFaQSxJQWFNQSxzQkFBc0I7RUFDMUIsU0FBQUEsdUJBQVlDLE1BQU0sRUFBRTtJQUFBQyxlQUFBLE9BQUFGLHNCQUFBO0lBQ2xCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQSxNQUFNO0VBQ3RCOztFQUVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUF0QkUsT0FBQUUsWUFBQSxDQUFBSCxzQkFBQTtJQUFBSSxHQUFBO0lBQUFDLEtBQUEsRUF1QkEsU0FBQUMsSUFBSUEsQ0FBQSxFQUFjO01BQUEsSUFBYkMsTUFBTSxHQUFBQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBRyxDQUFDLENBQUM7TUFDZCxPQUFPLElBQUksQ0FBQ1AsTUFBTSxDQUFDSyxJQUFJLENBQUMsdUNBQXVDLEVBQUVDLE1BQU0sQ0FBQztJQUMxRTtFQUFDO0FBQUE7QUFBQSxJQUFBSSxRQUFBLEdBQUFDLE9BQUEsY0FHWVosc0JBQXNCO0FBQUFhLE1BQUEsQ0FBQUQsT0FBQSxHQUFBQSxPQUFBLENBQUFFLE9BQUEiLCJpZ25vcmVMaXN0IjpbXX0=
}),
"[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/shopping/flight_offers/pricing.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
/**
 * A namespaced client for the
 * `/v1/shopping/flight-offers/pricing` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.shopping.flightOffers.pricing;
 * ```
 *
 * @param {Client} client
 */ var Pricing = /*#__PURE__*/ function() {
    function Pricing(client) {
        _classCallCheck(this, Pricing);
        this.client = client;
    }
    /**
   * To get or confirm the price of a flight and obtain information
   * about taxes and fees to be applied to the entire journey. It also
   * retrieves ancillary information (e.g. additional bag or extra legroom
   * seats pricing) and the payment information details requested at booking time.
   *
   * @param {Object} params
   * @param {Object} params.data
   * @param {string} params.data.type 'flight-offers-pricing' for Flight Offer Pricing
   * @param {Array} params.data.flightOffers list of flight offers for which the
   * pricing needs to be retrieved
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * ```js
   * amadeus.shopping.flightOffers.pricing.post({
   *  'data': {
   *      'type': 'flight-offers-pricing',
   *      'flightOffers': []
   *  }
   * });
   * ```
   */ return _createClass(Pricing, [
        {
            key: "post",
            value: function post() {
                var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                var additionalParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                // Convert additionalParams object to query string
                var queryString = Object.keys(additionalParams).map(function(key) {
                    return key + '=' + additionalParams[key];
                }).join('&');
                // Check if queryString is empty before appending it to the URL
                var url = '/v1/shopping/flight-offers/pricing';
                if (queryString !== '') {
                    url += '?' + queryString;
                }
                return this.client.post(url, params);
            }
        }
    ]);
}();
var _default = exports["default"] = Pricing;
module.exports = exports.default; //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJQcmljaW5nIiwiY2xpZW50IiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJwb3N0IiwicGFyYW1zIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiYWRkaXRpb25hbFBhcmFtcyIsInF1ZXJ5U3RyaW5nIiwiT2JqZWN0Iiwia2V5cyIsIm1hcCIsImpvaW4iLCJ1cmwiLCJfZGVmYXVsdCIsImV4cG9ydHMiLCJtb2R1bGUiLCJkZWZhdWx0Il0sInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2FtYWRldXMvbmFtZXNwYWNlcy9zaG9wcGluZy9mbGlnaHRfb2ZmZXJzL3ByaWNpbmcuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBBIG5hbWVzcGFjZWQgY2xpZW50IGZvciB0aGVcbiAqIGAvdjEvc2hvcHBpbmcvZmxpZ2h0LW9mZmVycy9wcmljaW5nYCBlbmRwb2ludHNcbiAqXG4gKiBBY2Nlc3MgdmlhIHRoZSB7QGxpbmsgQW1hZGV1c30gb2JqZWN0XG4gKlxuICogYGBganNcbiAqIGxldCBhbWFkZXVzID0gbmV3IEFtYWRldXMoKTtcbiAqIGFtYWRldXMuc2hvcHBpbmcuZmxpZ2h0T2ZmZXJzLnByaWNpbmc7XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge0NsaWVudH0gY2xpZW50XG4gKi9cbmNsYXNzIFByaWNpbmcge1xuICBjb25zdHJ1Y3RvcihjbGllbnQpIHtcbiAgICB0aGlzLmNsaWVudCA9IGNsaWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUbyBnZXQgb3IgY29uZmlybSB0aGUgcHJpY2Ugb2YgYSBmbGlnaHQgYW5kIG9idGFpbiBpbmZvcm1hdGlvblxuICAgKiBhYm91dCB0YXhlcyBhbmQgZmVlcyB0byBiZSBhcHBsaWVkIHRvIHRoZSBlbnRpcmUgam91cm5leS4gSXQgYWxzb1xuICAgKiByZXRyaWV2ZXMgYW5jaWxsYXJ5IGluZm9ybWF0aW9uIChlLmcuIGFkZGl0aW9uYWwgYmFnIG9yIGV4dHJhIGxlZ3Jvb21cbiAgICogc2VhdHMgcHJpY2luZykgYW5kIHRoZSBwYXltZW50IGluZm9ybWF0aW9uIGRldGFpbHMgcmVxdWVzdGVkIGF0IGJvb2tpbmcgdGltZS5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtc1xuICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zLmRhdGFcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtcy5kYXRhLnR5cGUgJ2ZsaWdodC1vZmZlcnMtcHJpY2luZycgZm9yIEZsaWdodCBPZmZlciBQcmljaW5nXG4gICAqIEBwYXJhbSB7QXJyYXl9IHBhcmFtcy5kYXRhLmZsaWdodE9mZmVycyBsaXN0IG9mIGZsaWdodCBvZmZlcnMgZm9yIHdoaWNoIHRoZVxuICAgKiBwcmljaW5nIG5lZWRzIHRvIGJlIHJldHJpZXZlZFxuICAgKiBAcmV0dXJuIHtQcm9taXNlLjxSZXNwb25zZSxSZXNwb25zZUVycm9yPn0gYSBQcm9taXNlXG4gICAqXG4gICAqIGBgYGpzXG4gICAqIGFtYWRldXMuc2hvcHBpbmcuZmxpZ2h0T2ZmZXJzLnByaWNpbmcucG9zdCh7XG4gICAqICAnZGF0YSc6IHtcbiAgICogICAgICAndHlwZSc6ICdmbGlnaHQtb2ZmZXJzLXByaWNpbmcnLFxuICAgKiAgICAgICdmbGlnaHRPZmZlcnMnOiBbXVxuICAgKiAgfVxuICAgKiB9KTtcbiAgICogYGBgXG4gICAqL1xuICBwb3N0KHBhcmFtcyA9IHt9LCBhZGRpdGlvbmFsUGFyYW1zID0ge30pIHtcbiAgICAvLyBDb252ZXJ0IGFkZGl0aW9uYWxQYXJhbXMgb2JqZWN0IHRvIHF1ZXJ5IHN0cmluZ1xuICAgIGNvbnN0IHF1ZXJ5U3RyaW5nID0gT2JqZWN0LmtleXMoYWRkaXRpb25hbFBhcmFtcykubWFwKGtleSA9PiBrZXkgKyAnPScgKyBhZGRpdGlvbmFsUGFyYW1zW2tleV0pLmpvaW4oJyYnKTtcblxuICAgIC8vIENoZWNrIGlmIHF1ZXJ5U3RyaW5nIGlzIGVtcHR5IGJlZm9yZSBhcHBlbmRpbmcgaXQgdG8gdGhlIFVSTFxuICAgIGxldCB1cmwgPSAnL3YxL3Nob3BwaW5nL2ZsaWdodC1vZmZlcnMvcHJpY2luZyc7XG4gICAgaWYgKHF1ZXJ5U3RyaW5nICE9PSAnJykge1xuICAgICAgdXJsICs9ICc/JyArIHF1ZXJ5U3RyaW5nO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLmNsaWVudC5wb3N0KHVybCwgcGFyYW1zKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcmljaW5nOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFaQSxJQWFNQSxPQUFPO0VBQ1gsU0FBQUEsUUFBWUMsTUFBTSxFQUFFO0lBQUFDLGVBQUEsT0FBQUYsT0FBQTtJQUNsQixJQUFJLENBQUNDLE1BQU0sR0FBR0EsTUFBTTtFQUN0Qjs7RUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQXJCRSxPQUFBRSxZQUFBLENBQUFILE9BQUE7SUFBQUksR0FBQTtJQUFBQyxLQUFBLEVBc0JBLFNBQUFDLElBQUlBLENBQUEsRUFBcUM7TUFBQSxJQUFwQ0MsTUFBTSxHQUFBQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBRyxDQUFDLENBQUM7TUFBQSxJQUFFRyxnQkFBZ0IsR0FBQUgsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUcsQ0FBQyxDQUFDO01BQ3JDO01BQ0EsSUFBTUksV0FBVyxHQUFHQyxNQUFNLENBQUNDLElBQUksQ0FBQ0gsZ0JBQWdCLENBQUMsQ0FBQ0ksR0FBRyxDQUFDLFVBQUFYLEdBQUc7UUFBQSxPQUFJQSxHQUFHLEdBQUcsR0FBRyxHQUFHTyxnQkFBZ0IsQ0FBQ1AsR0FBRyxDQUFDO01BQUEsRUFBQyxDQUFDWSxJQUFJLENBQUMsR0FBRyxDQUFDOztNQUV6RztNQUNBLElBQUlDLEdBQUcsR0FBRyxvQ0FBb0M7TUFDOUMsSUFBSUwsV0FBVyxLQUFLLEVBQUUsRUFBRTtRQUN0QkssR0FBRyxJQUFJLEdBQUcsR0FBR0wsV0FBVztNQUMxQjtNQUVBLE9BQU8sSUFBSSxDQUFDWCxNQUFNLENBQUNLLElBQUksQ0FBQ1csR0FBRyxFQUFFVixNQUFNLENBQUM7SUFDdEM7RUFBQztBQUFBO0FBQUEsSUFBQVcsUUFBQSxHQUFBQyxPQUFBLGNBR1luQixPQUFPO0FBQUFvQixNQUFBLENBQUFELE9BQUEsR0FBQUEsT0FBQSxDQUFBRSxPQUFBIiwiaWdub3JlTGlzdCI6W119
}),
"[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/shopping/flight_offers/upselling.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
/**
 * A namespaced client for the
 * `/v1/shopping/flight-offers/upselling` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.shopping.flightOffers.upselling;
 * ```
 *
 * @param {Client} client
 */ var Upselling = /*#__PURE__*/ function() {
    function Upselling(client) {
        _classCallCheck(this, Upselling);
        this.client = client;
    }
    /**
   * Get available seats in different fare classes
   *
   * @param {Object} params
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * ```js
   * amadeus.shopping.flightOffers.upselling.post(body);
   * ```
   */ return _createClass(Upselling, [
        {
            key: "post",
            value: function post() {
                var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                return this.client.post('/v1/shopping/flight-offers/upselling', params);
            }
        }
    ]);
}();
var _default = exports["default"] = Upselling;
module.exports = exports.default; //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJVcHNlbGxpbmciLCJjbGllbnQiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsInBvc3QiLCJwYXJhbXMiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJfZGVmYXVsdCIsImV4cG9ydHMiLCJtb2R1bGUiLCJkZWZhdWx0Il0sInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2FtYWRldXMvbmFtZXNwYWNlcy9zaG9wcGluZy9mbGlnaHRfb2ZmZXJzL3Vwc2VsbGluZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEEgbmFtZXNwYWNlZCBjbGllbnQgZm9yIHRoZVxuICogYC92MS9zaG9wcGluZy9mbGlnaHQtb2ZmZXJzL3Vwc2VsbGluZ2AgZW5kcG9pbnRzXG4gKlxuICogQWNjZXNzIHZpYSB0aGUge0BsaW5rIEFtYWRldXN9IG9iamVjdFxuICpcbiAqIGBgYGpzXG4gKiBsZXQgYW1hZGV1cyA9IG5ldyBBbWFkZXVzKCk7XG4gKiBhbWFkZXVzLnNob3BwaW5nLmZsaWdodE9mZmVycy51cHNlbGxpbmc7XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge0NsaWVudH0gY2xpZW50XG4gKi9cbmNsYXNzIFVwc2VsbGluZyB7XG4gIGNvbnN0cnVjdG9yKGNsaWVudCkge1xuICAgIHRoaXMuY2xpZW50ID0gY2xpZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBhdmFpbGFibGUgc2VhdHMgaW4gZGlmZmVyZW50IGZhcmUgY2xhc3Nlc1xuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zXG4gICAqIEByZXR1cm4ge1Byb21pc2UuPFJlc3BvbnNlLFJlc3BvbnNlRXJyb3I+fSBhIFByb21pc2VcbiAgICpcbiAgICogYGBganNcbiAgICogYW1hZGV1cy5zaG9wcGluZy5mbGlnaHRPZmZlcnMudXBzZWxsaW5nLnBvc3QoYm9keSk7XG4gICAqIGBgYFxuICAgKi9cbiAgcG9zdChwYXJhbXMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmNsaWVudC5wb3N0KCcvdjEvc2hvcHBpbmcvZmxpZ2h0LW9mZmVycy91cHNlbGxpbmcnLCBwYXJhbXMpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVwc2VsbGluZzsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWkEsSUFhTUEsU0FBUztFQUNiLFNBQUFBLFVBQVlDLE1BQU0sRUFBRTtJQUFBQyxlQUFBLE9BQUFGLFNBQUE7SUFDbEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBLE1BQU07RUFDdEI7O0VBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFURSxPQUFBRSxZQUFBLENBQUFILFNBQUE7SUFBQUksR0FBQTtJQUFBQyxLQUFBLEVBVUEsU0FBQUMsSUFBSUEsQ0FBQSxFQUFjO01BQUEsSUFBYkMsTUFBTSxHQUFBQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBRyxDQUFDLENBQUM7TUFDZCxPQUFPLElBQUksQ0FBQ1AsTUFBTSxDQUFDSyxJQUFJLENBQUMsc0NBQXNDLEVBQUVDLE1BQU0sQ0FBQztJQUN6RTtFQUFDO0FBQUE7QUFBQSxJQUFBSSxRQUFBLEdBQUFDLE9BQUEsY0FHWVosU0FBUztBQUFBYSxNQUFBLENBQUFELE9BQUEsR0FBQUEsT0FBQSxDQUFBRSxPQUFBIiwiaWdub3JlTGlzdCI6W119
}),
"[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/shopping/flight_offers.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _flight_choice_prediction = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/shopping/flight_offers/flight_choice_prediction.js [app-route] (ecmascript)"));
var _pricing = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/shopping/flight_offers/pricing.js [app-route] (ecmascript)"));
var _upselling = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/shopping/flight_offers/upselling.js [app-route] (ecmascript)"));
function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        "default": e
    };
}
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
/**
 * A namespaced client for the
 * `/v1/shopping/flight-offers` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.shopping.flightOffers;
 * ```
 *
 * @param {Client} client
 */ var FlightOffers = /*#__PURE__*/ _createClass(function FlightOffers(client) {
    _classCallCheck(this, FlightOffers);
    this.client = client;
    this.prediction = new _flight_choice_prediction["default"](client);
    this.pricing = new _pricing["default"](client);
    this.upselling = new _upselling["default"](client);
});
var _default = exports["default"] = FlightOffers;
module.exports = exports.default; //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZmxpZ2h0X2Nob2ljZV9wcmVkaWN0aW9uIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfcHJpY2luZyIsIl91cHNlbGxpbmciLCJlIiwiX19lc01vZHVsZSIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwiciIsInQiLCJsZW5ndGgiLCJvIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfdG9Qcm9wZXJ0eUtleSIsImtleSIsIl9jcmVhdGVDbGFzcyIsInByb3RvdHlwZSIsImkiLCJfdG9QcmltaXRpdmUiLCJfdHlwZW9mIiwiU3ltYm9sIiwidG9QcmltaXRpdmUiLCJjYWxsIiwiVHlwZUVycm9yIiwiU3RyaW5nIiwiTnVtYmVyIiwiX2NsYXNzQ2FsbENoZWNrIiwiYSIsIm4iLCJGbGlnaHRPZmZlcnMiLCJjbGllbnQiLCJwcmVkaWN0aW9uIiwiRmxpZ2h0Q2hvaWNlUHJlZGljdGlvbiIsInByaWNpbmciLCJQcmljaW5nIiwidXBzZWxsaW5nIiwiVXBzZWxsaW5nIiwiX2RlZmF1bHQiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmYXVsdCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hbWFkZXVzL25hbWVzcGFjZXMvc2hvcHBpbmcvZmxpZ2h0X29mZmVycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRmxpZ2h0Q2hvaWNlUHJlZGljdGlvbiBmcm9tICcuL2ZsaWdodF9vZmZlcnMvZmxpZ2h0X2Nob2ljZV9wcmVkaWN0aW9uLmpzJztcbmltcG9ydCBQcmljaW5nIGZyb20gJy4vZmxpZ2h0X29mZmVycy9wcmljaW5nLmpzJztcbmltcG9ydCBVcHNlbGxpbmcgZnJvbSAnLi9mbGlnaHRfb2ZmZXJzL3Vwc2VsbGluZy5qcyc7XG5cbi8qKlxuICogQSBuYW1lc3BhY2VkIGNsaWVudCBmb3IgdGhlXG4gKiBgL3YxL3Nob3BwaW5nL2ZsaWdodC1vZmZlcnNgIGVuZHBvaW50c1xuICpcbiAqIEFjY2VzcyB2aWEgdGhlIHtAbGluayBBbWFkZXVzfSBvYmplY3RcbiAqXG4gKiBgYGBqc1xuICogbGV0IGFtYWRldXMgPSBuZXcgQW1hZGV1cygpO1xuICogYW1hZGV1cy5zaG9wcGluZy5mbGlnaHRPZmZlcnM7XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge0NsaWVudH0gY2xpZW50XG4gKi9cbmNsYXNzIEZsaWdodE9mZmVycyB7XG4gIGNvbnN0cnVjdG9yKGNsaWVudCkge1xuICAgIHRoaXMuY2xpZW50ID0gY2xpZW50O1xuICAgIHRoaXMucHJlZGljdGlvbiA9IG5ldyBGbGlnaHRDaG9pY2VQcmVkaWN0aW9uKGNsaWVudCk7XG4gICAgdGhpcy5wcmljaW5nID0gbmV3IFByaWNpbmcoY2xpZW50KTtcbiAgICB0aGlzLnVwc2VsbGluZyA9IG5ldyBVcHNlbGxpbmcoY2xpZW50KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGbGlnaHRPZmZlcnM7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxJQUFBQSx5QkFBQSxHQUFBQyxzQkFBQSxDQUFBQyxPQUFBO0FBQ0EsSUFBQUMsUUFBQSxHQUFBRixzQkFBQSxDQUFBQyxPQUFBO0FBQ0EsSUFBQUUsVUFBQSxHQUFBSCxzQkFBQSxDQUFBQyxPQUFBO0FBQXFELFNBQUFELHVCQUFBSSxDQUFBLFdBQUFBLENBQUEsSUFBQUEsQ0FBQSxDQUFBQyxVQUFBLEdBQUFELENBQUEsZ0JBQUFBLENBQUE7QUFBQSxTQUFBRSxrQkFBQUYsQ0FBQSxFQUFBRyxDQUFBLGFBQUFDLENBQUEsTUFBQUEsQ0FBQSxHQUFBRCxDQUFBLENBQUFFLE1BQUEsRUFBQUQsQ0FBQSxVQUFBRSxDQUFBLEdBQUFILENBQUEsQ0FBQUMsQ0FBQSxHQUFBRSxDQUFBLENBQUFDLFVBQUEsR0FBQUQsQ0FBQSxDQUFBQyxVQUFBLFFBQUFELENBQUEsQ0FBQUUsWUFBQSxrQkFBQUYsQ0FBQSxLQUFBQSxDQUFBLENBQUFHLFFBQUEsUUFBQUMsTUFBQSxDQUFBQyxjQUFBLENBQUFYLENBQUEsRUFBQVksY0FBQSxDQUFBTixDQUFBLENBQUFPLEdBQUEsR0FBQVAsQ0FBQTtBQUFBLFNBQUFRLGFBQUFkLENBQUEsRUFBQUcsQ0FBQSxFQUFBQyxDQUFBLFdBQUFELENBQUEsSUFBQUQsaUJBQUEsQ0FBQUYsQ0FBQSxDQUFBZSxTQUFBLEVBQUFaLENBQUEsR0FBQUMsQ0FBQSxJQUFBRixpQkFBQSxDQUFBRixDQUFBLEVBQUFJLENBQUEsR0FBQU0sTUFBQSxDQUFBQyxjQUFBLENBQUFYLENBQUEsaUJBQUFTLFFBQUEsU0FBQVQsQ0FBQTtBQUFBLFNBQUFZLGVBQUFSLENBQUEsUUFBQVksQ0FBQSxHQUFBQyxZQUFBLENBQUFiLENBQUEsZ0NBQUFjLE9BQUEsQ0FBQUYsQ0FBQSxJQUFBQSxDQUFBLEdBQUFBLENBQUE7QUFBQSxTQUFBQyxhQUFBYixDQUFBLEVBQUFELENBQUEsb0JBQUFlLE9BQUEsQ0FBQWQsQ0FBQSxNQUFBQSxDQUFBLFNBQUFBLENBQUEsTUFBQUosQ0FBQSxHQUFBSSxDQUFBLENBQUFlLE1BQUEsQ0FBQUMsV0FBQSxrQkFBQXBCLENBQUEsUUFBQWdCLENBQUEsR0FBQWhCLENBQUEsQ0FBQXFCLElBQUEsQ0FBQWpCLENBQUEsRUFBQUQsQ0FBQSxnQ0FBQWUsT0FBQSxDQUFBRixDQUFBLFVBQUFBLENBQUEsWUFBQU0sU0FBQSx5RUFBQW5CLENBQUEsR0FBQW9CLE1BQUEsR0FBQUMsTUFBQSxFQUFBcEIsQ0FBQTtBQUFBLFNBQUFxQixnQkFBQUMsQ0FBQSxFQUFBQyxDQUFBLFVBQUFELENBQUEsWUFBQUMsQ0FBQSxhQUFBTCxTQUFBO0FBRXJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWkEsSUFhTU0sWUFBWSxnQkFBQWQsWUFBQSxDQUNoQixTQUFBYyxhQUFZQyxNQUFNLEVBQUU7RUFBQUosZUFBQSxPQUFBRyxZQUFBO0VBQ2xCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQSxNQUFNO0VBQ3BCLElBQUksQ0FBQ0MsVUFBVSxHQUFHLElBQUlDLG9DQUFzQixDQUFDRixNQUFNLENBQUM7RUFDcEQsSUFBSSxDQUFDRyxPQUFPLEdBQUcsSUFBSUMsbUJBQU8sQ0FBQ0osTUFBTSxDQUFDO0VBQ2xDLElBQUksQ0FBQ0ssU0FBUyxHQUFHLElBQUlDLHFCQUFTLENBQUNOLE1BQU0sQ0FBQztBQUN4QyxDQUFDO0FBQUEsSUFBQU8sUUFBQSxHQUFBQyxPQUFBLGNBR1lULFlBQVk7QUFBQVUsTUFBQSxDQUFBRCxPQUFBLEdBQUFBLE9BQUEsQ0FBQUUsT0FBQSIsImlnbm9yZUxpc3QiOltdfQ==
}),
"[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/shopping/flight_offers_search.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
/**
 * A namespaced client for the
 * `/v2/shopping/flight-offers` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.shopping.flightOffersSeach;
 * ```
 *
 * @param {Client} client
 */ var FlightOffersSearch = /*#__PURE__*/ function() {
    function FlightOffersSearch(client) {
        _classCallCheck(this, FlightOffersSearch);
        this.client = client;
    }
    /**
   * Get cheapest flight recommendations and prices on a given journey.
   *
   * @param {Object} params
   * @param {string} params.originLocationCode city/airport IATA code from which the traveler will depart, e.g. BOS for Boston
   * @param {string} params.destinationLocationCode city/airport IATA code to which the traveler is going, e.g. PAR for Paris
   * @param {string} params.departureDate the date on which the traveler will depart
   * from the origin to go to the destination. Dates are specified in the ISO 8601 YYYY-MM-DD format, e.g. 2017-12-25
   * @param {string} params.adults the number of adult travelers (age 12 or older on date of departure)
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * Get cheapest flight recommendations and prices for SYD-BKK on 2020-08-01 for 2 adults
   *
   * ```js
   * amadeus.shopping.flightOffers.get({
   *    originLocationCode: 'SYD',
   *    destinationLocationCode: 'BKK',
   *    departureDate: '2020-08-01',
   *    adults: '2'
   * });
   * ```
   */ return _createClass(FlightOffersSearch, [
        {
            key: "get",
            value: function get() {
                var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                return this.client.get('/v2/shopping/flight-offers', params);
            }
        },
        {
            key: "post",
            value: function post() {
                var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                return this.client.post('/v2/shopping/flight-offers', params);
            }
        }
    ]);
}();
var _default = exports["default"] = FlightOffersSearch;
module.exports = exports.default; //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJGbGlnaHRPZmZlcnNTZWFyY2giLCJjbGllbnQiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImdldCIsInBhcmFtcyIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsInBvc3QiLCJfZGVmYXVsdCIsImV4cG9ydHMiLCJtb2R1bGUiLCJkZWZhdWx0Il0sInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FtYWRldXMvbmFtZXNwYWNlcy9zaG9wcGluZy9mbGlnaHRfb2ZmZXJzX3NlYXJjaC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEEgbmFtZXNwYWNlZCBjbGllbnQgZm9yIHRoZVxuICogYC92Mi9zaG9wcGluZy9mbGlnaHQtb2ZmZXJzYCBlbmRwb2ludHNcbiAqXG4gKiBBY2Nlc3MgdmlhIHRoZSB7QGxpbmsgQW1hZGV1c30gb2JqZWN0XG4gKlxuICogYGBganNcbiAqIGxldCBhbWFkZXVzID0gbmV3IEFtYWRldXMoKTtcbiAqIGFtYWRldXMuc2hvcHBpbmcuZmxpZ2h0T2ZmZXJzU2VhY2g7XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge0NsaWVudH0gY2xpZW50XG4gKi9cbmNsYXNzIEZsaWdodE9mZmVyc1NlYXJjaCB7XG4gIGNvbnN0cnVjdG9yKGNsaWVudCkge1xuICAgIHRoaXMuY2xpZW50ID0gY2xpZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIEdldCBjaGVhcGVzdCBmbGlnaHQgcmVjb21tZW5kYXRpb25zIGFuZCBwcmljZXMgb24gYSBnaXZlbiBqb3VybmV5LlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMub3JpZ2luTG9jYXRpb25Db2RlIGNpdHkvYWlycG9ydCBJQVRBIGNvZGUgZnJvbSB3aGljaCB0aGUgdHJhdmVsZXIgd2lsbCBkZXBhcnQsIGUuZy4gQk9TIGZvciBCb3N0b25cbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtcy5kZXN0aW5hdGlvbkxvY2F0aW9uQ29kZSBjaXR5L2FpcnBvcnQgSUFUQSBjb2RlIHRvIHdoaWNoIHRoZSB0cmF2ZWxlciBpcyBnb2luZywgZS5nLiBQQVIgZm9yIFBhcmlzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMuZGVwYXJ0dXJlRGF0ZSB0aGUgZGF0ZSBvbiB3aGljaCB0aGUgdHJhdmVsZXIgd2lsbCBkZXBhcnRcbiAgICogZnJvbSB0aGUgb3JpZ2luIHRvIGdvIHRvIHRoZSBkZXN0aW5hdGlvbi4gRGF0ZXMgYXJlIHNwZWNpZmllZCBpbiB0aGUgSVNPIDg2MDEgWVlZWS1NTS1ERCBmb3JtYXQsIGUuZy4gMjAxNy0xMi0yNVxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zLmFkdWx0cyB0aGUgbnVtYmVyIG9mIGFkdWx0IHRyYXZlbGVycyAoYWdlIDEyIG9yIG9sZGVyIG9uIGRhdGUgb2YgZGVwYXJ0dXJlKVxuICAgKiBAcmV0dXJuIHtQcm9taXNlLjxSZXNwb25zZSxSZXNwb25zZUVycm9yPn0gYSBQcm9taXNlXG4gICAqXG4gICAqIEdldCBjaGVhcGVzdCBmbGlnaHQgcmVjb21tZW5kYXRpb25zIGFuZCBwcmljZXMgZm9yIFNZRC1CS0sgb24gMjAyMC0wOC0wMSBmb3IgMiBhZHVsdHNcbiAgICpcbiAgICogYGBganNcbiAgICogYW1hZGV1cy5zaG9wcGluZy5mbGlnaHRPZmZlcnMuZ2V0KHtcbiAgICogICAgb3JpZ2luTG9jYXRpb25Db2RlOiAnU1lEJyxcbiAgICogICAgZGVzdGluYXRpb25Mb2NhdGlvbkNvZGU6ICdCS0snLFxuICAgKiAgICBkZXBhcnR1cmVEYXRlOiAnMjAyMC0wOC0wMScsXG4gICAqICAgIGFkdWx0czogJzInXG4gICAqIH0pO1xuICAgKiBgYGBcbiAgICovXG4gIGdldChwYXJhbXMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmNsaWVudC5nZXQoJy92Mi9zaG9wcGluZy9mbGlnaHQtb2ZmZXJzJywgcGFyYW1zKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUbyBkbyBhIGN1c3RvbWl6ZWQgc2VhcmNoIHdpdGggZXZlcnkgb3B0aW9uIGF2YWlsYWJsZS5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtc1xuICAgKiBAcGFyYW0ge0RvdWJsZX0gcGFyYW1zLmdldEZsaWdodE9mZmVyc0JvZHkgbGlzdCBvZiBjcml0ZXJpYSB0byByZXRyaWV2ZSBhIGxpc3Qgb2YgZmxpZ2h0IG9mZmVyc1xuICAgKiBAcmV0dXJuIHtQcm9taXNlLjxSZXNwb25zZSxSZXNwb25zZUVycm9yPn0gYSBQcm9taXNlXG4gICAqXG4gICAqIFRvIGRvIGEgY3VzdG9taXplZCBzZWFyY2ggd2l0aCBnaXZlbiBvcHRpb25zLlxuICAgKlxuICAgKiBgYGBqc1xuICAgKiBhbWFkZXVzLnNob3BwaW5nLmZsaWdodE9mZmVyc1NlYXJjaC5wb3N0KHtcbiAgICAgICAgXCJjdXJyZW5jeUNvZGVcIjogXCJVU0RcIixcbiAgICAgICAgXCJvcmlnaW5EZXN0aW5hdGlvbnNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiaWRcIjogXCIxXCIsXG4gICAgICAgICAgICBcIm9yaWdpbkxvY2F0aW9uQ29kZVwiOiBcIlJJT1wiLFxuICAgICAgICAgICAgXCJkZXN0aW5hdGlvbkxvY2F0aW9uQ29kZVwiOiBcIk1BRFwiLFxuICAgICAgICAgICAgXCJkZXBhcnR1cmVEYXRlVGltZVJhbmdlXCI6IHtcbiAgICAgICAgICAgICAgXCJkYXRlXCI6IFwiMjAyMC0wMy0wMVwiLFxuICAgICAgICAgICAgICBcInRpbWVcIjogXCIxMDowMDowMFwiXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImlkXCI6IFwiMlwiLFxuICAgICAgICAgICAgXCJvcmlnaW5Mb2NhdGlvbkNvZGVcIjogXCJNQURcIixcbiAgICAgICAgICAgIFwiZGVzdGluYXRpb25Mb2NhdGlvbkNvZGVcIjogXCJSSU9cIixcbiAgICAgICAgICAgIFwiZGVwYXJ0dXJlRGF0ZVRpbWVSYW5nZVwiOiB7XG4gICAgICAgICAgICAgIFwiZGF0ZVwiOiBcIjIwMjAtMDMtMDVcIixcbiAgICAgICAgICAgICAgXCJ0aW1lXCI6IFwiMTc6MDA6MDBcIlxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgXCJ0cmF2ZWxlcnNcIjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwiaWRcIjogXCIxXCIsXG4gICAgICAgICAgICBcInRyYXZlbGVyVHlwZVwiOiBcIkFEVUxUXCIsXG4gICAgICAgICAgICBcImZhcmVPcHRpb25zXCI6IFtcbiAgICAgICAgICAgICAgXCJTVEFOREFSRFwiXG4gICAgICAgICAgICBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImlkXCI6IFwiMlwiLFxuICAgICAgICAgICAgXCJ0cmF2ZWxlclR5cGVcIjogXCJDSElMRFwiLFxuICAgICAgICAgICAgXCJmYXJlT3B0aW9uc1wiOiBbXG4gICAgICAgICAgICAgIFwiU1RBTkRBUkRcIlxuICAgICAgICAgICAgXVxuICAgICAgICAgIH1cbiAgICAgICAgXSxcbiAgICAgICAgXCJzb3VyY2VzXCI6IFtcbiAgICAgICAgICBcIkdEU1wiXG4gICAgICAgIF0sXG4gICAgICAgIFwic2VhcmNoQ3JpdGVyaWFcIjoge1xuICAgICAgICAgIFwibWF4RmxpZ2h0T2ZmZXJzXCI6IDUwLFxuICAgICAgICAgIFwiZmxpZ2h0RmlsdGVyc1wiOiB7XG4gICAgICAgICAgICBcImNhYmluUmVzdHJpY3Rpb25zXCI6IFtcbiAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIFwiY2FiaW5cIjogXCJCVVNJTkVTU1wiLFxuICAgICAgICAgICAgICAgIFwiY292ZXJhZ2VcIjogXCJNT1NUX1NFR01FTlRTXCIsXG4gICAgICAgICAgICAgICAgXCJvcmlnaW5EZXN0aW5hdGlvbklkc1wiOiBbXG4gICAgICAgICAgICAgICAgICBcIjFcIlxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIFwiY2FycmllclJlc3RyaWN0aW9uc1wiOiB7XG4gICAgICAgICAgICAgIFwiZXhjbHVkZWRDYXJyaWVyQ29kZXNcIjogW1xuICAgICAgICAgICAgICAgIFwiQUFcIixcbiAgICAgICAgICAgICAgICBcIlRQXCIsXG4gICAgICAgICAgICAgICAgXCJBWlwiXG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICogYGBgXG4gICAgKi9cbiAgcG9zdChwYXJhbXMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmNsaWVudC5wb3N0KCcvdjIvc2hvcHBpbmcvZmxpZ2h0LW9mZmVycycsIHBhcmFtcyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRmxpZ2h0T2ZmZXJzU2VhcmNoO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBLElBYU1BLGtCQUFrQjtFQUN0QixTQUFBQSxtQkFBWUMsTUFBTSxFQUFFO0lBQUFDLGVBQUEsT0FBQUYsa0JBQUE7SUFDbEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBLE1BQU07RUFDdEI7O0VBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFyQkUsT0FBQUUsWUFBQSxDQUFBSCxrQkFBQTtJQUFBSSxHQUFBO0lBQUFDLEtBQUEsRUFzQkEsU0FBQUMsR0FBR0EsQ0FBQSxFQUFjO01BQUEsSUFBYkMsTUFBTSxHQUFBQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBRyxDQUFDLENBQUM7TUFDYixPQUFPLElBQUksQ0FBQ1AsTUFBTSxDQUFDSyxHQUFHLENBQUMsNEJBQTRCLEVBQUVDLE1BQU0sQ0FBQztJQUM5RDs7SUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUExRUU7SUFBQUgsR0FBQTtJQUFBQyxLQUFBLEVBMkVBLFNBQUFNLElBQUlBLENBQUEsRUFBYztNQUFBLElBQWJKLE1BQU0sR0FBQUMsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUcsQ0FBQyxDQUFDO01BQ2QsT0FBTyxJQUFJLENBQUNQLE1BQU0sQ0FBQ1UsSUFBSSxDQUFDLDRCQUE0QixFQUFFSixNQUFNLENBQUM7SUFDL0Q7RUFBQztBQUFBO0FBQUEsSUFBQUssUUFBQSxHQUFBQyxPQUFBLGNBR1liLGtCQUFrQjtBQUFBYyxNQUFBLENBQUFELE9BQUEsR0FBQUEsT0FBQSxDQUFBRSxPQUFBIiwiaWdub3JlTGlzdCI6W119
}),
"[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/shopping/flight_dates.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
/**
 * A namespaced client for the
 * `/v1/shopping/flight-dates` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.shopping.flightDates;
 * ```
 *
 * @param {Client} client
 */ var FlightDates = /*#__PURE__*/ function() {
    function FlightDates(client) {
        _classCallCheck(this, FlightDates);
        this.client = client;
    }
    /**
   * Find the cheapest flight dates from an origin to a destination.
   *
   * @param {Object} params
   * @param {string} params.origin City/Airport IATA code from which the flight
   *   will depart. BOS, for example.
   * @param {string} params.destination City/Airport IATA code to which the
   *   traveler is going. PAR, for example
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * Find the cheapest flight dates from New-York to Madrid
   *
   * ```js
   * amadeus.shopping.flightDates.get({
   *   origin: 'NYC',
   *   destination: 'MAD'
   * });
   * ```
   */ return _createClass(FlightDates, [
        {
            key: "get",
            value: function get() {
                var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                return this.client.get('/v1/shopping/flight-dates', params);
            }
        }
    ]);
}();
var _default = exports["default"] = FlightDates;
module.exports = exports.default; //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJGbGlnaHREYXRlcyIsImNsaWVudCIsIl9jbGFzc0NhbGxDaGVjayIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiZ2V0IiwicGFyYW1zIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiX2RlZmF1bHQiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmYXVsdCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hbWFkZXVzL25hbWVzcGFjZXMvc2hvcHBpbmcvZmxpZ2h0X2RhdGVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQSBuYW1lc3BhY2VkIGNsaWVudCBmb3IgdGhlXG4gKiBgL3YxL3Nob3BwaW5nL2ZsaWdodC1kYXRlc2AgZW5kcG9pbnRzXG4gKlxuICogQWNjZXNzIHZpYSB0aGUge0BsaW5rIEFtYWRldXN9IG9iamVjdFxuICpcbiAqIGBgYGpzXG4gKiBsZXQgYW1hZGV1cyA9IG5ldyBBbWFkZXVzKCk7XG4gKiBhbWFkZXVzLnNob3BwaW5nLmZsaWdodERhdGVzO1xuICogYGBgXG4gKlxuICogQHBhcmFtIHtDbGllbnR9IGNsaWVudFxuICovXG5jbGFzcyBGbGlnaHREYXRlcyB7XG4gIGNvbnN0cnVjdG9yKGNsaWVudCkge1xuICAgIHRoaXMuY2xpZW50ID0gY2xpZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIEZpbmQgdGhlIGNoZWFwZXN0IGZsaWdodCBkYXRlcyBmcm9tIGFuIG9yaWdpbiB0byBhIGRlc3RpbmF0aW9uLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMub3JpZ2luIENpdHkvQWlycG9ydCBJQVRBIGNvZGUgZnJvbSB3aGljaCB0aGUgZmxpZ2h0XG4gICAqICAgd2lsbCBkZXBhcnQuIEJPUywgZm9yIGV4YW1wbGUuXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMuZGVzdGluYXRpb24gQ2l0eS9BaXJwb3J0IElBVEEgY29kZSB0byB3aGljaCB0aGVcbiAgICogICB0cmF2ZWxlciBpcyBnb2luZy4gUEFSLCBmb3IgZXhhbXBsZVxuICAgKiBAcmV0dXJuIHtQcm9taXNlLjxSZXNwb25zZSxSZXNwb25zZUVycm9yPn0gYSBQcm9taXNlXG4gICAqXG4gICAqIEZpbmQgdGhlIGNoZWFwZXN0IGZsaWdodCBkYXRlcyBmcm9tIE5ldy1Zb3JrIHRvIE1hZHJpZFxuICAgKlxuICAgKiBgYGBqc1xuICAgKiBhbWFkZXVzLnNob3BwaW5nLmZsaWdodERhdGVzLmdldCh7XG4gICAqICAgb3JpZ2luOiAnTllDJyxcbiAgICogICBkZXN0aW5hdGlvbjogJ01BRCdcbiAgICogfSk7XG4gICAqIGBgYFxuICAgKi9cbiAgZ2V0KHBhcmFtcyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuY2xpZW50LmdldCgnL3YxL3Nob3BwaW5nL2ZsaWdodC1kYXRlcycsIHBhcmFtcyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRmxpZ2h0RGF0ZXM7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWkEsSUFhTUEsV0FBVztFQUNmLFNBQUFBLFlBQVlDLE1BQU0sRUFBRTtJQUFBQyxlQUFBLE9BQUFGLFdBQUE7SUFDbEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBLE1BQU07RUFDdEI7O0VBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFsQkUsT0FBQUUsWUFBQSxDQUFBSCxXQUFBO0lBQUFJLEdBQUE7SUFBQUMsS0FBQSxFQW1CQSxTQUFBQyxHQUFHQSxDQUFBLEVBQWM7TUFBQSxJQUFiQyxNQUFNLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFHLENBQUMsQ0FBQztNQUNiLE9BQU8sSUFBSSxDQUFDUCxNQUFNLENBQUNLLEdBQUcsQ0FBQywyQkFBMkIsRUFBRUMsTUFBTSxDQUFDO0lBQzdEO0VBQUM7QUFBQTtBQUFBLElBQUFJLFFBQUEsR0FBQUMsT0FBQSxjQUdZWixXQUFXO0FBQUFhLE1BQUEsQ0FBQUQsT0FBQSxHQUFBQSxPQUFBLENBQUFFLE9BQUEiLCJpZ25vcmVMaXN0IjpbXX0=
}),
"[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/shopping/seatmaps.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
/**
 * A namespaced client for the
 * `/v1/shopping/seatmaps` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.shopping.seatmaps;
 * ```
 *
 * @param {Client} client
 */ var Seatmaps = /*#__PURE__*/ function() {
    function Seatmaps(client) {
        _classCallCheck(this, Seatmaps);
        this.client = client;
    }
    /**
   * To retrieve the seat map of each flight present in an order.
   *
   * @param {Object} params
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * Retrieve the seat map for flight order with ID 'XXX'
   *
   * ```js
   * amadeus.shopping.seatmaps.get({
   *    'flight-orderId': 'XXX'}
   * );
   * ```
   */ return _createClass(Seatmaps, [
        {
            key: "get",
            value: function get() {
                var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                return this.client.get('/v1/shopping/seatmaps', params);
            }
        },
        {
            key: "post",
            value: function post() {
                var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                return this.client.post('/v1/shopping/seatmaps', params);
            }
        }
    ]);
}();
var _default = exports["default"] = Seatmaps;
module.exports = exports.default; //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJTZWF0bWFwcyIsImNsaWVudCIsIl9jbGFzc0NhbGxDaGVjayIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiZ2V0IiwicGFyYW1zIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwicG9zdCIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmF1bHQiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYW1hZGV1cy9uYW1lc3BhY2VzL3Nob3BwaW5nL3NlYXRtYXBzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxuLyoqXG4gKiBBIG5hbWVzcGFjZWQgY2xpZW50IGZvciB0aGVcbiAqIGAvdjEvc2hvcHBpbmcvc2VhdG1hcHNgIGVuZHBvaW50c1xuICpcbiAqIEFjY2VzcyB2aWEgdGhlIHtAbGluayBBbWFkZXVzfSBvYmplY3RcbiAqXG4gKiBgYGBqc1xuICogbGV0IGFtYWRldXMgPSBuZXcgQW1hZGV1cygpO1xuICogYW1hZGV1cy5zaG9wcGluZy5zZWF0bWFwcztcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7Q2xpZW50fSBjbGllbnRcbiAqL1xuY2xhc3MgU2VhdG1hcHMge1xuICBjb25zdHJ1Y3RvcihjbGllbnQpIHtcbiAgICB0aGlzLmNsaWVudCA9IGNsaWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUbyByZXRyaWV2ZSB0aGUgc2VhdCBtYXAgb2YgZWFjaCBmbGlnaHQgcHJlc2VudCBpbiBhbiBvcmRlci5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtc1xuICAgKiBAcmV0dXJuIHtQcm9taXNlLjxSZXNwb25zZSxSZXNwb25zZUVycm9yPn0gYSBQcm9taXNlXG4gICAqXG4gICAqIFJldHJpZXZlIHRoZSBzZWF0IG1hcCBmb3IgZmxpZ2h0IG9yZGVyIHdpdGggSUQgJ1hYWCdcbiAgICpcbiAgICogYGBganNcbiAgICogYW1hZGV1cy5zaG9wcGluZy5zZWF0bWFwcy5nZXQoe1xuICAgKiAgICAnZmxpZ2h0LW9yZGVySWQnOiAnWFhYJ31cbiAgICogKTtcbiAgICogYGBgXG4gICAqL1xuICBnZXQocGFyYW1zID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5jbGllbnQuZ2V0KCcvdjEvc2hvcHBpbmcvc2VhdG1hcHMnLCBwYXJhbXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRvIHJldHJpZXZlIHRoZSBzZWF0IG1hcCBvZiBlYWNoIGZsaWdodCBpbmNsdWRlZCBpbiBhIGZsaWdodCBvZmZlci5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtc1xuICAgKiBAcmV0dXJuIHtQcm9taXNlLjxSZXNwb25zZSxSZXNwb25zZUVycm9yPn0gYSBQcm9taXNlXG4gICAqXG4gICAqIFRvIHJldHJpZXZlIHRoZSBzZWF0IG1hcCBvZiBlYWNoIGZsaWdodCBpbmNsdWRlZCBpbiBmbGlnaHQgb2ZmZXJzXG4gICAqIGZvciBNQUQtTllDIGZsaWdodCBvbiAyMDIwLTA4LTAxLlxuICAgKlxuICAgKiBgYGBqc1xuICAgKiBhbWFkZXVzLnNob3BwaW5nLmZsaWdodE9mZmVycy5nZXQoe1xuICAgKiAgICBvcmlnaW46ICdNQUQnLFxuICAgKiAgICBkZXN0aW5hdGlvbjogJ05ZQycsXG4gICAqICAgIGRlcGFydHVyZURhdGU6ICcyMDIwLTA4LTAxJ1xuICAgKiB9KS50aGVuKGZ1bmN0aW9uKHJlc3BvbnNlKXtcbiAgICogICAgcmV0dXJuIGFtYWRldXMuc2hvcHBpbmcuZmxpZ2h0T2ZmZXJzLnNlYXRtYXBzLnBvc3QoXG4gICAqICAgICAgICB7XG4gICAqICAgICAgICAgICAgZGF0YTogcmVzcG9uc2UuZGF0YVxuICAgKiAgICAgICAgfVxuICAgKiAgICApO1xuICAgKiB9KTtcbiAgICogYGBgXG4gICovXG4gIHBvc3QocGFyYW1zID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5jbGllbnQucG9zdCgnL3YxL3Nob3BwaW5nL3NlYXRtYXBzJywgcGFyYW1zKTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IFNlYXRtYXBzOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFaQSxJQWFNQSxRQUFRO0VBQ1osU0FBQUEsU0FBWUMsTUFBTSxFQUFFO0lBQUFDLGVBQUEsT0FBQUYsUUFBQTtJQUNsQixJQUFJLENBQUNDLE1BQU0sR0FBR0EsTUFBTTtFQUN0Qjs7RUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBYkUsT0FBQUUsWUFBQSxDQUFBSCxRQUFBO0lBQUFJLEdBQUE7SUFBQUMsS0FBQSxFQWNBLFNBQUFDLEdBQUdBLENBQUEsRUFBYztNQUFBLElBQWJDLE1BQU0sR0FBQUMsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUcsQ0FBQyxDQUFDO01BQ2IsT0FBTyxJQUFJLENBQUNQLE1BQU0sQ0FBQ0ssR0FBRyxDQUFDLHVCQUF1QixFQUFFQyxNQUFNLENBQUM7SUFDekQ7O0lBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQXRCRTtJQUFBSCxHQUFBO0lBQUFDLEtBQUEsRUF1QkEsU0FBQU0sSUFBSUEsQ0FBQSxFQUFjO01BQUEsSUFBYkosTUFBTSxHQUFBQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBRyxDQUFDLENBQUM7TUFDZCxPQUFPLElBQUksQ0FBQ1AsTUFBTSxDQUFDVSxJQUFJLENBQUMsdUJBQXVCLEVBQUVKLE1BQU0sQ0FBQztJQUMxRDtFQUFDO0FBQUE7QUFBQSxJQUFBSyxRQUFBLEdBQUFDLE9BQUEsY0FJWWIsUUFBUTtBQUFBYyxNQUFBLENBQUFELE9BQUEsR0FBQUEsT0FBQSxDQUFBRSxPQUFBIiwiaWdub3JlTGlzdCI6W119
}),
"[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/shopping/hotel_offer_search.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
/**
 * A namespaced client for the
 * `/v3/shopping/hotel-offers/:offer_id` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.shopping.hotelOfferSearch('XXX');
 * ```
 *
 * @param {Client} client
 * @property {number} offerId
 */ var HotelOfferSearch = /*#__PURE__*/ function() {
    function HotelOfferSearch(client, offerId) {
        _classCallCheck(this, HotelOfferSearch);
        this.client = client;
        this.offerId = offerId;
    }
    /**
   * Returns details for a specific offer
   *
   * @param {Object} params
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * Find details for the offer with ID 'XXX'
   *
   * ```js
   *  amadeus.shopping.hotelOfferSearch('XXX').get();
   * ```
   */ return _createClass(HotelOfferSearch, [
        {
            key: "get",
            value: function get() {
                var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                return this.client.get("/v3/shopping/hotel-offers/".concat(this.offerId), params);
            }
        }
    ]);
}();
var _default = exports["default"] = HotelOfferSearch;
module.exports = exports.default; //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJIb3RlbE9mZmVyU2VhcmNoIiwiY2xpZW50Iiwib2ZmZXJJZCIsIl9jbGFzc0NhbGxDaGVjayIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiZ2V0IiwicGFyYW1zIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiY29uY2F0IiwiX2RlZmF1bHQiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmYXVsdCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hbWFkZXVzL25hbWVzcGFjZXMvc2hvcHBpbmcvaG90ZWxfb2ZmZXJfc2VhcmNoLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQSBuYW1lc3BhY2VkIGNsaWVudCBmb3IgdGhlXG4gKiBgL3YzL3Nob3BwaW5nL2hvdGVsLW9mZmVycy86b2ZmZXJfaWRgIGVuZHBvaW50c1xuICpcbiAqIEFjY2VzcyB2aWEgdGhlIHtAbGluayBBbWFkZXVzfSBvYmplY3RcbiAqXG4gKiBgYGBqc1xuICogbGV0IGFtYWRldXMgPSBuZXcgQW1hZGV1cygpO1xuICogYW1hZGV1cy5zaG9wcGluZy5ob3RlbE9mZmVyU2VhcmNoKCdYWFgnKTtcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7Q2xpZW50fSBjbGllbnRcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSBvZmZlcklkXG4gKi9cbmNsYXNzIEhvdGVsT2ZmZXJTZWFyY2gge1xuICBjb25zdHJ1Y3RvcihjbGllbnQsIG9mZmVySWQpIHtcbiAgICB0aGlzLmNsaWVudCA9IGNsaWVudDtcbiAgICB0aGlzLm9mZmVySWQgPSBvZmZlcklkO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgZGV0YWlscyBmb3IgYSBzcGVjaWZpYyBvZmZlclxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zXG4gICAqIEByZXR1cm4ge1Byb21pc2UuPFJlc3BvbnNlLFJlc3BvbnNlRXJyb3I+fSBhIFByb21pc2VcbiAgICpcbiAgICogRmluZCBkZXRhaWxzIGZvciB0aGUgb2ZmZXIgd2l0aCBJRCAnWFhYJ1xuICAgKlxuICAgKiBgYGBqc1xuICAgKiAgYW1hZGV1cy5zaG9wcGluZy5ob3RlbE9mZmVyU2VhcmNoKCdYWFgnKS5nZXQoKTtcbiAgICogYGBgXG4gICAqL1xuICBnZXQocGFyYW1zID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5jbGllbnQuZ2V0KFxuICAgICAgYC92My9zaG9wcGluZy9ob3RlbC1vZmZlcnMvJHt0aGlzLm9mZmVySWR9YCwgcGFyYW1zXG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb3RlbE9mZmVyU2VhcmNoOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWJBLElBY01BLGdCQUFnQjtFQUNwQixTQUFBQSxpQkFBWUMsTUFBTSxFQUFFQyxPQUFPLEVBQUU7SUFBQUMsZUFBQSxPQUFBSCxnQkFBQTtJQUMzQixJQUFJLENBQUNDLE1BQU0sR0FBR0EsTUFBTTtJQUNwQixJQUFJLENBQUNDLE9BQU8sR0FBR0EsT0FBTztFQUN4Qjs7RUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFYRSxPQUFBRSxZQUFBLENBQUFKLGdCQUFBO0lBQUFLLEdBQUE7SUFBQUMsS0FBQSxFQVlBLFNBQUFDLEdBQUdBLENBQUEsRUFBYztNQUFBLElBQWJDLE1BQU0sR0FBQUMsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUcsQ0FBQyxDQUFDO01BQ2IsT0FBTyxJQUFJLENBQUNSLE1BQU0sQ0FBQ00sR0FBRyw4QkFBQUssTUFBQSxDQUNTLElBQUksQ0FBQ1YsT0FBTyxHQUFJTSxNQUMvQyxDQUFDO0lBQ0g7RUFBQztBQUFBO0FBQUEsSUFBQUssUUFBQSxHQUFBQyxPQUFBLGNBR1lkLGdCQUFnQjtBQUFBZSxNQUFBLENBQUFELE9BQUEsR0FBQUEsT0FBQSxDQUFBRSxPQUFBIiwiaWdub3JlTGlzdCI6W119
}),
"[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/shopping/hotel_offers_search.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
/**
 * A namespaced client for the
 * `/v3/shopping/hotel-offers` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.shopping.hotelOffersSearch;
 * ```
 *
 * @param {Client} client
 */ var HotelOffersSearch = /*#__PURE__*/ function() {
    function HotelOffersSearch(client) {
        _classCallCheck(this, HotelOffersSearch);
        this.client = client;
    }
    /**
   * Find the list of available offers in the specific hotels
   *
   * @param {Object} params
   * @param {string} params.hotelIds Comma separated list of Amadeus hotel
   * codes to request. Example: RTPAR001
   * @param {string} params.adults Number of adult guests (1-9) per room.
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * Search for available offers in Novotel Paris for 2 adults
   *
   * ```js
   * amadeus.shopping.hotelOffersSearch.get({
   *   hotelIds: 'RTPAR001',
   *   adults: '2'
   * })
   * ```
   */ return _createClass(HotelOffersSearch, [
        {
            key: "get",
            value: function get() {
                var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                return this.client.get('/v3/shopping/hotel-offers', params);
            }
        }
    ]);
}();
var _default = exports["default"] = HotelOffersSearch;
module.exports = exports.default; //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJIb3RlbE9mZmVyc1NlYXJjaCIsImNsaWVudCIsIl9jbGFzc0NhbGxDaGVjayIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiZ2V0IiwicGFyYW1zIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiX2RlZmF1bHQiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmYXVsdCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hbWFkZXVzL25hbWVzcGFjZXMvc2hvcHBpbmcvaG90ZWxfb2ZmZXJzX3NlYXJjaC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEEgbmFtZXNwYWNlZCBjbGllbnQgZm9yIHRoZVxuICogYC92My9zaG9wcGluZy9ob3RlbC1vZmZlcnNgIGVuZHBvaW50c1xuICpcbiAqIEFjY2VzcyB2aWEgdGhlIHtAbGluayBBbWFkZXVzfSBvYmplY3RcbiAqXG4gKiBgYGBqc1xuICogbGV0IGFtYWRldXMgPSBuZXcgQW1hZGV1cygpO1xuICogYW1hZGV1cy5zaG9wcGluZy5ob3RlbE9mZmVyc1NlYXJjaDtcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7Q2xpZW50fSBjbGllbnRcbiAqL1xuY2xhc3MgSG90ZWxPZmZlcnNTZWFyY2gge1xuICBjb25zdHJ1Y3RvcihjbGllbnQpIHtcbiAgICB0aGlzLmNsaWVudCA9IGNsaWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBGaW5kIHRoZSBsaXN0IG9mIGF2YWlsYWJsZSBvZmZlcnMgaW4gdGhlIHNwZWNpZmljIGhvdGVsc1xuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMuaG90ZWxJZHMgQ29tbWEgc2VwYXJhdGVkIGxpc3Qgb2YgQW1hZGV1cyBob3RlbFxuICAgKiBjb2RlcyB0byByZXF1ZXN0LiBFeGFtcGxlOiBSVFBBUjAwMVxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zLmFkdWx0cyBOdW1iZXIgb2YgYWR1bHQgZ3Vlc3RzICgxLTkpIHBlciByb29tLlxuICAgKiBAcmV0dXJuIHtQcm9taXNlLjxSZXNwb25zZSxSZXNwb25zZUVycm9yPn0gYSBQcm9taXNlXG4gICAqXG4gICAqIFNlYXJjaCBmb3IgYXZhaWxhYmxlIG9mZmVycyBpbiBOb3ZvdGVsIFBhcmlzIGZvciAyIGFkdWx0c1xuICAgKlxuICAgKiBgYGBqc1xuICAgKiBhbWFkZXVzLnNob3BwaW5nLmhvdGVsT2ZmZXJzU2VhcmNoLmdldCh7XG4gICAqICAgaG90ZWxJZHM6ICdSVFBBUjAwMScsXG4gICAqICAgYWR1bHRzOiAnMidcbiAgICogfSlcbiAgICogYGBgXG4gICAqL1xuICBnZXQocGFyYW1zID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5jbGllbnQuZ2V0KCcvdjMvc2hvcHBpbmcvaG90ZWwtb2ZmZXJzJywgcGFyYW1zKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb3RlbE9mZmVyc1NlYXJjaDtcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFaQSxJQWFNQSxpQkFBaUI7RUFDckIsU0FBQUEsa0JBQVlDLE1BQU0sRUFBRTtJQUFBQyxlQUFBLE9BQUFGLGlCQUFBO0lBQ2xCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQSxNQUFNO0VBQ3RCOztFQUVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQWpCRSxPQUFBRSxZQUFBLENBQUFILGlCQUFBO0lBQUFJLEdBQUE7SUFBQUMsS0FBQSxFQWtCQSxTQUFBQyxHQUFHQSxDQUFBLEVBQWM7TUFBQSxJQUFiQyxNQUFNLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFHLENBQUMsQ0FBQztNQUNiLE9BQU8sSUFBSSxDQUFDUCxNQUFNLENBQUNLLEdBQUcsQ0FBQywyQkFBMkIsRUFBRUMsTUFBTSxDQUFDO0lBQzdEO0VBQUM7QUFBQTtBQUFBLElBQUFJLFFBQUEsR0FBQUMsT0FBQSxjQUdZWixpQkFBaUI7QUFBQWEsTUFBQSxDQUFBRCxPQUFBLEdBQUFBLE9BQUEsQ0FBQUUsT0FBQSIsImlnbm9yZUxpc3QiOltdfQ==
}),
"[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/shopping/activities/by_square.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
/**
 * A namespaced client for the
 * `/v1/shopping/activities/by-square` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.shopping.activities.bySquare;
 * ```
 *
 * @param {Client} client
 */ var bySquare = /*#__PURE__*/ function() {
    function bySquare(client) {
        _classCallCheck(this, bySquare);
        this.client = client;
    }
    /**
   * Returns a list of tours and activities a given area.
   *
   * @param {Object} params
   * @param {Double} params.north latitude north of bounding box - required
   * @param {Double} params.west  longitude west of bounding box - required
   * @param {Double} params.south latitude south of bounding box - required
   * @param {Double} params.east  longitude east of bounding box - required
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * Find relevant tours and activities within an area in Barcelona
   *
   * ```js
   * amadeus.shopping.activities.bySquare.get({
   *   north: 41.397158,
   *   west: 2.160873,
   *   south: 41.394582,
   *   east: 2.177181
   * });
   * ```
   */ return _createClass(bySquare, [
        {
            key: "get",
            value: function get() {
                var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                return this.client.get('/v1/shopping/activities/by-square', params);
            }
        }
    ]);
}();
var _default = exports["default"] = bySquare;
module.exports = exports.default; //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJieVNxdWFyZSIsImNsaWVudCIsIl9jbGFzc0NhbGxDaGVjayIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiZ2V0IiwicGFyYW1zIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiX2RlZmF1bHQiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmYXVsdCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hbWFkZXVzL25hbWVzcGFjZXMvc2hvcHBpbmcvYWN0aXZpdGllcy9ieV9zcXVhcmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBBIG5hbWVzcGFjZWQgY2xpZW50IGZvciB0aGVcbiAqIGAvdjEvc2hvcHBpbmcvYWN0aXZpdGllcy9ieS1zcXVhcmVgIGVuZHBvaW50c1xuICpcbiAqIEFjY2VzcyB2aWEgdGhlIHtAbGluayBBbWFkZXVzfSBvYmplY3RcbiAqXG4gKiBgYGBqc1xuICogbGV0IGFtYWRldXMgPSBuZXcgQW1hZGV1cygpO1xuICogYW1hZGV1cy5zaG9wcGluZy5hY3Rpdml0aWVzLmJ5U3F1YXJlO1xuICogYGBgXG4gKlxuICogQHBhcmFtIHtDbGllbnR9IGNsaWVudFxuICovXG5jbGFzcyBieVNxdWFyZSB7XG4gIGNvbnN0cnVjdG9yKGNsaWVudCkge1xuICAgIHRoaXMuY2xpZW50ID0gY2xpZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBsaXN0IG9mIHRvdXJzIGFuZCBhY3Rpdml0aWVzIGEgZ2l2ZW4gYXJlYS5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtc1xuICAgKiBAcGFyYW0ge0RvdWJsZX0gcGFyYW1zLm5vcnRoIGxhdGl0dWRlIG5vcnRoIG9mIGJvdW5kaW5nIGJveCAtIHJlcXVpcmVkXG4gICAqIEBwYXJhbSB7RG91YmxlfSBwYXJhbXMud2VzdCAgbG9uZ2l0dWRlIHdlc3Qgb2YgYm91bmRpbmcgYm94IC0gcmVxdWlyZWRcbiAgICogQHBhcmFtIHtEb3VibGV9IHBhcmFtcy5zb3V0aCBsYXRpdHVkZSBzb3V0aCBvZiBib3VuZGluZyBib3ggLSByZXF1aXJlZFxuICAgKiBAcGFyYW0ge0RvdWJsZX0gcGFyYW1zLmVhc3QgIGxvbmdpdHVkZSBlYXN0IG9mIGJvdW5kaW5nIGJveCAtIHJlcXVpcmVkXG4gICAqIEByZXR1cm4ge1Byb21pc2UuPFJlc3BvbnNlLFJlc3BvbnNlRXJyb3I+fSBhIFByb21pc2VcbiAgICpcbiAgICogRmluZCByZWxldmFudCB0b3VycyBhbmQgYWN0aXZpdGllcyB3aXRoaW4gYW4gYXJlYSBpbiBCYXJjZWxvbmFcbiAgICpcbiAgICogYGBganNcbiAgICogYW1hZGV1cy5zaG9wcGluZy5hY3Rpdml0aWVzLmJ5U3F1YXJlLmdldCh7XG4gICAqICAgbm9ydGg6IDQxLjM5NzE1OCxcbiAgICogICB3ZXN0OiAyLjE2MDg3MyxcbiAgICogICBzb3V0aDogNDEuMzk0NTgyLFxuICAgKiAgIGVhc3Q6IDIuMTc3MTgxXG4gICAqIH0pO1xuICAgKiBgYGBcbiAgICovXG4gIGdldChwYXJhbXMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmNsaWVudC5nZXQoJy92MS9zaG9wcGluZy9hY3Rpdml0aWVzL2J5LXNxdWFyZScsIHBhcmFtcyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgYnlTcXVhcmU7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWkEsSUFhTUEsUUFBUTtFQUNaLFNBQUFBLFNBQVlDLE1BQU0sRUFBRTtJQUFBQyxlQUFBLE9BQUFGLFFBQUE7SUFDbEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBLE1BQU07RUFDdEI7O0VBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBcEJFLE9BQUFFLFlBQUEsQ0FBQUgsUUFBQTtJQUFBSSxHQUFBO0lBQUFDLEtBQUEsRUFxQkEsU0FBQUMsR0FBR0EsQ0FBQSxFQUFjO01BQUEsSUFBYkMsTUFBTSxHQUFBQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBRyxDQUFDLENBQUM7TUFDYixPQUFPLElBQUksQ0FBQ1AsTUFBTSxDQUFDSyxHQUFHLENBQUMsbUNBQW1DLEVBQUVDLE1BQU0sQ0FBQztJQUNyRTtFQUFDO0FBQUE7QUFBQSxJQUFBSSxRQUFBLEdBQUFDLE9BQUEsY0FHWVosUUFBUTtBQUFBYSxNQUFBLENBQUFELE9BQUEsR0FBQUEsT0FBQSxDQUFBRSxPQUFBIiwiaWdub3JlTGlzdCI6W119
}),
"[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/shopping/activities.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _by_square = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/shopping/activities/by_square.js [app-route] (ecmascript)"));
function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        "default": e
    };
}
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
/**
 * A namespaced client for the
 * `/v1/shopping/activities` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.shopping.activities
 * ```
 *
 * @param {Client} client
 */ var Activities = /*#__PURE__*/ function() {
    function Activities(client) {
        _classCallCheck(this, Activities);
        this.client = client;
        this.bySquare = new _by_square["default"](client);
    }
    /**
   * /shopping/activities
   *
   * @param {Object} params
   * @param {Double} params.latitude latitude location to be at the center of
   *   the search circle - required
   * @param {Double} params.longitude longitude location to be at the center of
   *   the search circle - required
   * @param {Double} params.radius radius of the search in Kilometer - optional
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * What are the best tours and activities in Barcelona? (based a geo location and a radius)
   *
   * ```js
   * amadeus.shopping.activities.get({
   *   longitude: 2.160873,
   *   latitude: 41.397158
   * });
   * ```
   */ return _createClass(Activities, [
        {
            key: "get",
            value: function get() {
                var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                return this.client.get('/v1/shopping/activities', params);
            }
        }
    ]);
}();
var _default = exports["default"] = Activities;
module.exports = exports.default; //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYnlfc3F1YXJlIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJlIiwiX19lc01vZHVsZSIsIl90eXBlb2YiLCJvIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJjb25zdHJ1Y3RvciIsInByb3RvdHlwZSIsIl9jbGFzc0NhbGxDaGVjayIsImEiLCJuIiwiVHlwZUVycm9yIiwiX2RlZmluZVByb3BlcnRpZXMiLCJyIiwidCIsImxlbmd0aCIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX3RvUHJvcGVydHlLZXkiLCJrZXkiLCJfY3JlYXRlQ2xhc3MiLCJpIiwiX3RvUHJpbWl0aXZlIiwidG9QcmltaXRpdmUiLCJjYWxsIiwiU3RyaW5nIiwiTnVtYmVyIiwiQWN0aXZpdGllcyIsImNsaWVudCIsImJ5U3F1YXJlIiwiQnlTcXVhcmUiLCJ2YWx1ZSIsImdldCIsInBhcmFtcyIsImFyZ3VtZW50cyIsInVuZGVmaW5lZCIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmF1bHQiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYW1hZGV1cy9uYW1lc3BhY2VzL3Nob3BwaW5nL2FjdGl2aXRpZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJ5U3F1YXJlIGZyb20gJy4vYWN0aXZpdGllcy9ieV9zcXVhcmUnO1xuXG4vKipcbiAqIEEgbmFtZXNwYWNlZCBjbGllbnQgZm9yIHRoZVxuICogYC92MS9zaG9wcGluZy9hY3Rpdml0aWVzYCBlbmRwb2ludHNcbiAqXG4gKiBBY2Nlc3MgdmlhIHRoZSB7QGxpbmsgQW1hZGV1c30gb2JqZWN0XG4gKlxuICogYGBganNcbiAqIGxldCBhbWFkZXVzID0gbmV3IEFtYWRldXMoKTtcbiAqIGFtYWRldXMuc2hvcHBpbmcuYWN0aXZpdGllc1xuICogYGBgXG4gKlxuICogQHBhcmFtIHtDbGllbnR9IGNsaWVudFxuICovXG5jbGFzcyBBY3Rpdml0aWVzIHtcbiAgY29uc3RydWN0b3IoY2xpZW50KSB7XG4gICAgdGhpcy5jbGllbnQgPSBjbGllbnQ7XG4gICAgdGhpcy5ieVNxdWFyZSA9IG5ldyBCeVNxdWFyZShjbGllbnQpO1xuICB9XG5cbiAgLyoqXG4gICAqIC9zaG9wcGluZy9hY3Rpdml0aWVzXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXNcbiAgICogQHBhcmFtIHtEb3VibGV9IHBhcmFtcy5sYXRpdHVkZSBsYXRpdHVkZSBsb2NhdGlvbiB0byBiZSBhdCB0aGUgY2VudGVyIG9mXG4gICAqICAgdGhlIHNlYXJjaCBjaXJjbGUgLSByZXF1aXJlZFxuICAgKiBAcGFyYW0ge0RvdWJsZX0gcGFyYW1zLmxvbmdpdHVkZSBsb25naXR1ZGUgbG9jYXRpb24gdG8gYmUgYXQgdGhlIGNlbnRlciBvZlxuICAgKiAgIHRoZSBzZWFyY2ggY2lyY2xlIC0gcmVxdWlyZWRcbiAgICogQHBhcmFtIHtEb3VibGV9IHBhcmFtcy5yYWRpdXMgcmFkaXVzIG9mIHRoZSBzZWFyY2ggaW4gS2lsb21ldGVyIC0gb3B0aW9uYWxcbiAgICogQHJldHVybiB7UHJvbWlzZS48UmVzcG9uc2UsUmVzcG9uc2VFcnJvcj59IGEgUHJvbWlzZVxuICAgKlxuICAgKiBXaGF0IGFyZSB0aGUgYmVzdCB0b3VycyBhbmQgYWN0aXZpdGllcyBpbiBCYXJjZWxvbmE/IChiYXNlZCBhIGdlbyBsb2NhdGlvbiBhbmQgYSByYWRpdXMpXG4gICAqXG4gICAqIGBgYGpzXG4gICAqIGFtYWRldXMuc2hvcHBpbmcuYWN0aXZpdGllcy5nZXQoe1xuICAgKiAgIGxvbmdpdHVkZTogMi4xNjA4NzMsXG4gICAqICAgbGF0aXR1ZGU6IDQxLjM5NzE1OFxuICAgKiB9KTtcbiAgICogYGBgXG4gICAqL1xuICBnZXQocGFyYW1zID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5jbGllbnQuZ2V0KCcvdjEvc2hvcHBpbmcvYWN0aXZpdGllcycsIHBhcmFtcyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQWN0aXZpdGllcztcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsSUFBQUEsVUFBQSxHQUFBQyxzQkFBQSxDQUFBQyxPQUFBO0FBQThDLFNBQUFELHVCQUFBRSxDQUFBLFdBQUFBLENBQUEsSUFBQUEsQ0FBQSxDQUFBQyxVQUFBLEdBQUFELENBQUEsZ0JBQUFBLENBQUE7QUFBQSxTQUFBRSxRQUFBQyxDQUFBLHNDQUFBRCxPQUFBLHdCQUFBRSxNQUFBLHVCQUFBQSxNQUFBLENBQUFDLFFBQUEsYUFBQUYsQ0FBQSxrQkFBQUEsQ0FBQSxnQkFBQUEsQ0FBQSxXQUFBQSxDQUFBLHlCQUFBQyxNQUFBLElBQUFELENBQUEsQ0FBQUcsV0FBQSxLQUFBRixNQUFBLElBQUFELENBQUEsS0FBQUMsTUFBQSxDQUFBRyxTQUFBLHFCQUFBSixDQUFBLEtBQUFELE9BQUEsQ0FBQUMsQ0FBQTtBQUFBLFNBQUFLLGdCQUFBQyxDQUFBLEVBQUFDLENBQUEsVUFBQUQsQ0FBQSxZQUFBQyxDQUFBLGFBQUFDLFNBQUE7QUFBQSxTQUFBQyxrQkFBQVosQ0FBQSxFQUFBYSxDQUFBLGFBQUFDLENBQUEsTUFBQUEsQ0FBQSxHQUFBRCxDQUFBLENBQUFFLE1BQUEsRUFBQUQsQ0FBQSxVQUFBWCxDQUFBLEdBQUFVLENBQUEsQ0FBQUMsQ0FBQSxHQUFBWCxDQUFBLENBQUFhLFVBQUEsR0FBQWIsQ0FBQSxDQUFBYSxVQUFBLFFBQUFiLENBQUEsQ0FBQWMsWUFBQSxrQkFBQWQsQ0FBQSxLQUFBQSxDQUFBLENBQUFlLFFBQUEsUUFBQUMsTUFBQSxDQUFBQyxjQUFBLENBQUFwQixDQUFBLEVBQUFxQixjQUFBLENBQUFsQixDQUFBLENBQUFtQixHQUFBLEdBQUFuQixDQUFBO0FBQUEsU0FBQW9CLGFBQUF2QixDQUFBLEVBQUFhLENBQUEsRUFBQUMsQ0FBQSxXQUFBRCxDQUFBLElBQUFELGlCQUFBLENBQUFaLENBQUEsQ0FBQU8sU0FBQSxFQUFBTSxDQUFBLEdBQUFDLENBQUEsSUFBQUYsaUJBQUEsQ0FBQVosQ0FBQSxFQUFBYyxDQUFBLEdBQUFLLE1BQUEsQ0FBQUMsY0FBQSxDQUFBcEIsQ0FBQSxpQkFBQWtCLFFBQUEsU0FBQWxCLENBQUE7QUFBQSxTQUFBcUIsZUFBQVAsQ0FBQSxRQUFBVSxDQUFBLEdBQUFDLFlBQUEsQ0FBQVgsQ0FBQSxnQ0FBQVosT0FBQSxDQUFBc0IsQ0FBQSxJQUFBQSxDQUFBLEdBQUFBLENBQUE7QUFBQSxTQUFBQyxhQUFBWCxDQUFBLEVBQUFELENBQUEsb0JBQUFYLE9BQUEsQ0FBQVksQ0FBQSxNQUFBQSxDQUFBLFNBQUFBLENBQUEsTUFBQWQsQ0FBQSxHQUFBYyxDQUFBLENBQUFWLE1BQUEsQ0FBQXNCLFdBQUEsa0JBQUExQixDQUFBLFFBQUF3QixDQUFBLEdBQUF4QixDQUFBLENBQUEyQixJQUFBLENBQUFiLENBQUEsRUFBQUQsQ0FBQSxnQ0FBQVgsT0FBQSxDQUFBc0IsQ0FBQSxVQUFBQSxDQUFBLFlBQUFiLFNBQUEseUVBQUFFLENBQUEsR0FBQWUsTUFBQSxHQUFBQyxNQUFBLEVBQUFmLENBQUE7QUFFOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFaQSxJQWFNZ0IsVUFBVTtFQUNkLFNBQUFBLFdBQVlDLE1BQU0sRUFBRTtJQUFBdkIsZUFBQSxPQUFBc0IsVUFBQTtJQUNsQixJQUFJLENBQUNDLE1BQU0sR0FBR0EsTUFBTTtJQUNwQixJQUFJLENBQUNDLFFBQVEsR0FBRyxJQUFJQyxxQkFBUSxDQUFDRixNQUFNLENBQUM7RUFDdEM7O0VBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQW5CRSxPQUFBUixZQUFBLENBQUFPLFVBQUE7SUFBQVIsR0FBQTtJQUFBWSxLQUFBLEVBb0JBLFNBQUFDLEdBQUdBLENBQUEsRUFBYztNQUFBLElBQWJDLE1BQU0sR0FBQUMsU0FBQSxDQUFBdEIsTUFBQSxRQUFBc0IsU0FBQSxRQUFBQyxTQUFBLEdBQUFELFNBQUEsTUFBRyxDQUFDLENBQUM7TUFDYixPQUFPLElBQUksQ0FBQ04sTUFBTSxDQUFDSSxHQUFHLENBQUMseUJBQXlCLEVBQUVDLE1BQU0sQ0FBQztJQUMzRDtFQUFDO0FBQUE7QUFBQSxJQUFBRyxRQUFBLEdBQUFDLE9BQUEsY0FHWVYsVUFBVTtBQUFBVyxNQUFBLENBQUFELE9BQUEsR0FBQUEsT0FBQSxDQUFBRSxPQUFBIiwiaWdub3JlTGlzdCI6W119
}),
"[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/shopping/activity.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
/**
 * A namespaced client for the
 * `/v1/shopping/activities/{activityId}` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.shopping.activity
 * ```
 *
 * @param {Client} client
 */ var Activity = /*#__PURE__*/ function() {
    function Activity(client, activityId) {
        _classCallCheck(this, Activity);
        this.client = client;
        this.activityId = activityId;
    }
    /**
   * Retieve information of an activity by its Id.
   *
   * What is the activity information with Id 3216547684?
   * ```js
   * amadeus.shopping.activity('3216547684').get();
   * ```
   */ return _createClass(Activity, [
        {
            key: "get",
            value: function get() {
                return this.client.get("/v1/shopping/activities/".concat(this.activityId));
            }
        }
    ]);
}();
var _default = exports["default"] = Activity;
module.exports = exports.default; //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJBY3Rpdml0eSIsImNsaWVudCIsImFjdGl2aXR5SWQiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImdldCIsImNvbmNhdCIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmF1bHQiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYW1hZGV1cy9uYW1lc3BhY2VzL3Nob3BwaW5nL2FjdGl2aXR5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQSBuYW1lc3BhY2VkIGNsaWVudCBmb3IgdGhlXG4gKiBgL3YxL3Nob3BwaW5nL2FjdGl2aXRpZXMve2FjdGl2aXR5SWR9YCBlbmRwb2ludHNcbiAqXG4gKiBBY2Nlc3MgdmlhIHRoZSB7QGxpbmsgQW1hZGV1c30gb2JqZWN0XG4gKlxuICogYGBganNcbiAqIGxldCBhbWFkZXVzID0gbmV3IEFtYWRldXMoKTtcbiAqIGFtYWRldXMuc2hvcHBpbmcuYWN0aXZpdHlcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7Q2xpZW50fSBjbGllbnRcbiAqL1xuY2xhc3MgQWN0aXZpdHkge1xuICBjb25zdHJ1Y3RvcihjbGllbnQsIGFjdGl2aXR5SWQpIHtcbiAgICB0aGlzLmNsaWVudCA9IGNsaWVudDtcbiAgICB0aGlzLmFjdGl2aXR5SWQgPSBhY3Rpdml0eUlkO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldGlldmUgaW5mb3JtYXRpb24gb2YgYW4gYWN0aXZpdHkgYnkgaXRzIElkLlxuICAgKlxuICAgKiBXaGF0IGlzIHRoZSBhY3Rpdml0eSBpbmZvcm1hdGlvbiB3aXRoIElkIDMyMTY1NDc2ODQ/XG4gICAqIGBgYGpzXG4gICAqIGFtYWRldXMuc2hvcHBpbmcuYWN0aXZpdHkoJzMyMTY1NDc2ODQnKS5nZXQoKTtcbiAgICogYGBgXG4gICAqL1xuICBnZXQoKSB7XG4gICAgcmV0dXJuIHRoaXMuY2xpZW50LmdldChgL3YxL3Nob3BwaW5nL2FjdGl2aXRpZXMvJHt0aGlzLmFjdGl2aXR5SWR9YCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgQWN0aXZpdHk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWkEsSUFhTUEsUUFBUTtFQUNaLFNBQUFBLFNBQVlDLE1BQU0sRUFBRUMsVUFBVSxFQUFFO0lBQUFDLGVBQUEsT0FBQUgsUUFBQTtJQUM5QixJQUFJLENBQUNDLE1BQU0sR0FBR0EsTUFBTTtJQUNwQixJQUFJLENBQUNDLFVBQVUsR0FBR0EsVUFBVTtFQUM5Qjs7RUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBUEUsT0FBQUUsWUFBQSxDQUFBSixRQUFBO0lBQUFLLEdBQUE7SUFBQUMsS0FBQSxFQVFBLFNBQUFDLEdBQUdBLENBQUEsRUFBRztNQUNKLE9BQU8sSUFBSSxDQUFDTixNQUFNLENBQUNNLEdBQUcsNEJBQUFDLE1BQUEsQ0FBNEIsSUFBSSxDQUFDTixVQUFVLENBQUUsQ0FBQztJQUN0RTtFQUFDO0FBQUE7QUFBQSxJQUFBTyxRQUFBLEdBQUFDLE9BQUEsY0FHWVYsUUFBUTtBQUFBVyxNQUFBLENBQUFELE9BQUEsR0FBQUEsT0FBQSxDQUFBRSxPQUFBIiwiaWdub3JlTGlzdCI6W119
}),
"[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/shopping/availability/flight_availabilities.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
/**
 * A namespaced client for the
 * `/v1/shopping/availability/flight-availabilities` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.availability.flightAvailabilities;
 * ```
 *
 * @param {Client} client
 */ var FlightAvailabilities = /*#__PURE__*/ function() {
    function FlightAvailabilities(client) {
        _classCallCheck(this, FlightAvailabilities);
        this.client = client;
    }
    /**
   * Get available seats in different fare classes
   *
   * @param {Object} params
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * ```js
   * amadeus.shopping.availability.flightAvailabilities.post(body);
   * ```
   */ return _createClass(FlightAvailabilities, [
        {
            key: "post",
            value: function post() {
                var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                return this.client.post('/v1/shopping/availability/flight-availabilities', params);
            }
        }
    ]);
}();
var _default = exports["default"] = FlightAvailabilities;
module.exports = exports.default; //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJGbGlnaHRBdmFpbGFiaWxpdGllcyIsImNsaWVudCIsIl9jbGFzc0NhbGxDaGVjayIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwicG9zdCIsInBhcmFtcyIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmF1bHQiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvYW1hZGV1cy9uYW1lc3BhY2VzL3Nob3BwaW5nL2F2YWlsYWJpbGl0eS9mbGlnaHRfYXZhaWxhYmlsaXRpZXMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBBIG5hbWVzcGFjZWQgY2xpZW50IGZvciB0aGVcbiAqIGAvdjEvc2hvcHBpbmcvYXZhaWxhYmlsaXR5L2ZsaWdodC1hdmFpbGFiaWxpdGllc2AgZW5kcG9pbnRzXG4gKlxuICogQWNjZXNzIHZpYSB0aGUge0BsaW5rIEFtYWRldXN9IG9iamVjdFxuICpcbiAqIGBgYGpzXG4gKiBsZXQgYW1hZGV1cyA9IG5ldyBBbWFkZXVzKCk7XG4gKiBhbWFkZXVzLmF2YWlsYWJpbGl0eS5mbGlnaHRBdmFpbGFiaWxpdGllcztcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7Q2xpZW50fSBjbGllbnRcbiAqL1xuY2xhc3MgRmxpZ2h0QXZhaWxhYmlsaXRpZXMge1xuICBjb25zdHJ1Y3RvcihjbGllbnQpIHtcbiAgICB0aGlzLmNsaWVudCA9IGNsaWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgYXZhaWxhYmxlIHNlYXRzIGluIGRpZmZlcmVudCBmYXJlIGNsYXNzZXNcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtc1xuICAgKiBAcmV0dXJuIHtQcm9taXNlLjxSZXNwb25zZSxSZXNwb25zZUVycm9yPn0gYSBQcm9taXNlXG4gICAqXG4gICAqIGBgYGpzXG4gICAqIGFtYWRldXMuc2hvcHBpbmcuYXZhaWxhYmlsaXR5LmZsaWdodEF2YWlsYWJpbGl0aWVzLnBvc3QoYm9keSk7XG4gICAqIGBgYFxuICAgKi9cbiAgcG9zdChwYXJhbXMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmNsaWVudC5wb3N0KCcvdjEvc2hvcHBpbmcvYXZhaWxhYmlsaXR5L2ZsaWdodC1hdmFpbGFiaWxpdGllcycsIHBhcmFtcyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRmxpZ2h0QXZhaWxhYmlsaXRpZXM7Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBLElBYU1BLG9CQUFvQjtFQUN4QixTQUFBQSxxQkFBWUMsTUFBTSxFQUFFO0lBQUFDLGVBQUEsT0FBQUYsb0JBQUE7SUFDbEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBLE1BQU07RUFDdEI7O0VBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFURSxPQUFBRSxZQUFBLENBQUFILG9CQUFBO0lBQUFJLEdBQUE7SUFBQUMsS0FBQSxFQVVBLFNBQUFDLElBQUlBLENBQUEsRUFBYztNQUFBLElBQWJDLE1BQU0sR0FBQUMsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUcsQ0FBQyxDQUFDO01BQ2QsT0FBTyxJQUFJLENBQUNQLE1BQU0sQ0FBQ0ssSUFBSSxDQUFDLGlEQUFpRCxFQUFFQyxNQUFNLENBQUM7SUFDcEY7RUFBQztBQUFBO0FBQUEsSUFBQUksUUFBQSxHQUFBQyxPQUFBLGNBR1laLG9CQUFvQjtBQUFBYSxNQUFBLENBQUFELE9BQUEsR0FBQUEsT0FBQSxDQUFBRSxPQUFBIiwiaWdub3JlTGlzdCI6W119
}),
"[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/shopping/availability.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _flight_availabilities = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/shopping/availability/flight_availabilities.js [app-route] (ecmascript)"));
function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        "default": e
    };
}
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
/**
 * A namespaced client for the
 * `/v1/shopping/availability` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.shopping.availability;
 * ```
 *
 * @param {Client} client
 * @property {Availability} availability
 * @protected
 */ var Availability = /*#__PURE__*/ _createClass(function Availability(client) {
    _classCallCheck(this, Availability);
    this.client = client;
    this.flightAvailabilities = new _flight_availabilities["default"](client);
});
var _default = exports["default"] = Availability;
module.exports = exports.default; //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZmxpZ2h0X2F2YWlsYWJpbGl0aWVzIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJlIiwiX19lc01vZHVsZSIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwiciIsInQiLCJsZW5ndGgiLCJvIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfdG9Qcm9wZXJ0eUtleSIsImtleSIsIl9jcmVhdGVDbGFzcyIsInByb3RvdHlwZSIsImkiLCJfdG9QcmltaXRpdmUiLCJfdHlwZW9mIiwiU3ltYm9sIiwidG9QcmltaXRpdmUiLCJjYWxsIiwiVHlwZUVycm9yIiwiU3RyaW5nIiwiTnVtYmVyIiwiX2NsYXNzQ2FsbENoZWNrIiwiYSIsIm4iLCJBdmFpbGFiaWxpdHkiLCJjbGllbnQiLCJmbGlnaHRBdmFpbGFiaWxpdGllcyIsIkZsaWdodEF2YWlsYWJpbGl0aWVzIiwiX2RlZmF1bHQiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmYXVsdCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hbWFkZXVzL25hbWVzcGFjZXMvc2hvcHBpbmcvYXZhaWxhYmlsaXR5LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGbGlnaHRBdmFpbGFiaWxpdGllcyBmcm9tICcuL2F2YWlsYWJpbGl0eS9mbGlnaHRfYXZhaWxhYmlsaXRpZXMnO1xuXG4vKipcbiAqIEEgbmFtZXNwYWNlZCBjbGllbnQgZm9yIHRoZVxuICogYC92MS9zaG9wcGluZy9hdmFpbGFiaWxpdHlgIGVuZHBvaW50c1xuICpcbiAqIEFjY2VzcyB2aWEgdGhlIHtAbGluayBBbWFkZXVzfSBvYmplY3RcbiAqXG4gKiBgYGBqc1xuICogbGV0IGFtYWRldXMgPSBuZXcgQW1hZGV1cygpO1xuICogYW1hZGV1cy5zaG9wcGluZy5hdmFpbGFiaWxpdHk7XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge0NsaWVudH0gY2xpZW50XG4gKiBAcHJvcGVydHkge0F2YWlsYWJpbGl0eX0gYXZhaWxhYmlsaXR5XG4gKiBAcHJvdGVjdGVkXG4gKi9cbmNsYXNzIEF2YWlsYWJpbGl0eSB7XG4gIGNvbnN0cnVjdG9yKGNsaWVudCkge1xuICAgIHRoaXMuY2xpZW50ID0gY2xpZW50O1xuICAgIHRoaXMuZmxpZ2h0QXZhaWxhYmlsaXRpZXMgPSBuZXcgRmxpZ2h0QXZhaWxhYmlsaXRpZXMoY2xpZW50KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBdmFpbGFiaWxpdHk7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxJQUFBQSxzQkFBQSxHQUFBQyxzQkFBQSxDQUFBQyxPQUFBO0FBQXdFLFNBQUFELHVCQUFBRSxDQUFBLFdBQUFBLENBQUEsSUFBQUEsQ0FBQSxDQUFBQyxVQUFBLEdBQUFELENBQUEsZ0JBQUFBLENBQUE7QUFBQSxTQUFBRSxrQkFBQUYsQ0FBQSxFQUFBRyxDQUFBLGFBQUFDLENBQUEsTUFBQUEsQ0FBQSxHQUFBRCxDQUFBLENBQUFFLE1BQUEsRUFBQUQsQ0FBQSxVQUFBRSxDQUFBLEdBQUFILENBQUEsQ0FBQUMsQ0FBQSxHQUFBRSxDQUFBLENBQUFDLFVBQUEsR0FBQUQsQ0FBQSxDQUFBQyxVQUFBLFFBQUFELENBQUEsQ0FBQUUsWUFBQSxrQkFBQUYsQ0FBQSxLQUFBQSxDQUFBLENBQUFHLFFBQUEsUUFBQUMsTUFBQSxDQUFBQyxjQUFBLENBQUFYLENBQUEsRUFBQVksY0FBQSxDQUFBTixDQUFBLENBQUFPLEdBQUEsR0FBQVAsQ0FBQTtBQUFBLFNBQUFRLGFBQUFkLENBQUEsRUFBQUcsQ0FBQSxFQUFBQyxDQUFBLFdBQUFELENBQUEsSUFBQUQsaUJBQUEsQ0FBQUYsQ0FBQSxDQUFBZSxTQUFBLEVBQUFaLENBQUEsR0FBQUMsQ0FBQSxJQUFBRixpQkFBQSxDQUFBRixDQUFBLEVBQUFJLENBQUEsR0FBQU0sTUFBQSxDQUFBQyxjQUFBLENBQUFYLENBQUEsaUJBQUFTLFFBQUEsU0FBQVQsQ0FBQTtBQUFBLFNBQUFZLGVBQUFSLENBQUEsUUFBQVksQ0FBQSxHQUFBQyxZQUFBLENBQUFiLENBQUEsZ0NBQUFjLE9BQUEsQ0FBQUYsQ0FBQSxJQUFBQSxDQUFBLEdBQUFBLENBQUE7QUFBQSxTQUFBQyxhQUFBYixDQUFBLEVBQUFELENBQUEsb0JBQUFlLE9BQUEsQ0FBQWQsQ0FBQSxNQUFBQSxDQUFBLFNBQUFBLENBQUEsTUFBQUosQ0FBQSxHQUFBSSxDQUFBLENBQUFlLE1BQUEsQ0FBQUMsV0FBQSxrQkFBQXBCLENBQUEsUUFBQWdCLENBQUEsR0FBQWhCLENBQUEsQ0FBQXFCLElBQUEsQ0FBQWpCLENBQUEsRUFBQUQsQ0FBQSxnQ0FBQWUsT0FBQSxDQUFBRixDQUFBLFVBQUFBLENBQUEsWUFBQU0sU0FBQSx5RUFBQW5CLENBQUEsR0FBQW9CLE1BQUEsR0FBQUMsTUFBQSxFQUFBcEIsQ0FBQTtBQUFBLFNBQUFxQixnQkFBQUMsQ0FBQSxFQUFBQyxDQUFBLFVBQUFELENBQUEsWUFBQUMsQ0FBQSxhQUFBTCxTQUFBO0FBRXhFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWRBLElBZU1NLFlBQVksZ0JBQUFkLFlBQUEsQ0FDaEIsU0FBQWMsYUFBWUMsTUFBTSxFQUFFO0VBQUFKLGVBQUEsT0FBQUcsWUFBQTtFQUNsQixJQUFJLENBQUNDLE1BQU0sR0FBR0EsTUFBTTtFQUNwQixJQUFJLENBQUNDLG9CQUFvQixHQUFHLElBQUlDLGlDQUFvQixDQUFDRixNQUFNLENBQUM7QUFDOUQsQ0FBQztBQUFBLElBQUFHLFFBQUEsR0FBQUMsT0FBQSxjQUdZTCxZQUFZO0FBQUFNLE1BQUEsQ0FBQUQsT0FBQSxHQUFBQSxPQUFBLENBQUFFLE9BQUEiLCJpZ25vcmVMaXN0IjpbXX0=
}),
"[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/shopping/transfer_offers.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
/**
 * A namespaced client for the
 * `/v1/shopping/transfer-offers` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.shopping.transferOffers;
 * ```
 *
 * @param {Client} client
 */ var TransferOffers = /*#__PURE__*/ function() {
    function TransferOffers(client) {
        _classCallCheck(this, TransferOffers);
        this.client = client;
    }
    /**
   * To search the list of transfer offers.
   *
   * @param {Object} params
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * To search the list of transfer offers
   *
   * ```js
   * amadeus.shopping.transferOffers.post(body)
    * ```
  */ return _createClass(TransferOffers, [
        {
            key: "post",
            value: function post() {
                var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                return this.client.post('/v1/shopping/transfer-offers', params);
            }
        }
    ]);
}();
var _default = exports["default"] = TransferOffers;
module.exports = exports.default; //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJUcmFuc2Zlck9mZmVycyIsImNsaWVudCIsIl9jbGFzc0NhbGxDaGVjayIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwicG9zdCIsInBhcmFtcyIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmF1bHQiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYW1hZGV1cy9uYW1lc3BhY2VzL3Nob3BwaW5nL3RyYW5zZmVyX29mZmVycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbi8qKlxuICogQSBuYW1lc3BhY2VkIGNsaWVudCBmb3IgdGhlXG4gKiBgL3YxL3Nob3BwaW5nL3RyYW5zZmVyLW9mZmVyc2AgZW5kcG9pbnRzXG4gKlxuICogQWNjZXNzIHZpYSB0aGUge0BsaW5rIEFtYWRldXN9IG9iamVjdFxuICpcbiAqIGBgYGpzXG4gKiBsZXQgYW1hZGV1cyA9IG5ldyBBbWFkZXVzKCk7XG4gKiBhbWFkZXVzLnNob3BwaW5nLnRyYW5zZmVyT2ZmZXJzO1xuICogYGBgXG4gKlxuICogQHBhcmFtIHtDbGllbnR9IGNsaWVudFxuICovXG5jbGFzcyBUcmFuc2Zlck9mZmVycyB7XG4gIGNvbnN0cnVjdG9yKGNsaWVudCkge1xuICAgIHRoaXMuY2xpZW50ID0gY2xpZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIFRvIHNlYXJjaCB0aGUgbGlzdCBvZiB0cmFuc2ZlciBvZmZlcnMuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXNcbiAgICogQHJldHVybiB7UHJvbWlzZS48UmVzcG9uc2UsUmVzcG9uc2VFcnJvcj59IGEgUHJvbWlzZVxuICAgKlxuICAgKiBUbyBzZWFyY2ggdGhlIGxpc3Qgb2YgdHJhbnNmZXIgb2ZmZXJzXG4gICAqXG4gICAqIGBgYGpzXG4gICAqIGFtYWRldXMuc2hvcHBpbmcudHJhbnNmZXJPZmZlcnMucG9zdChib2R5KVxuXG4gICAqIGBgYFxuICAqL1xuICBwb3N0KHBhcmFtcyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuY2xpZW50LnBvc3QoJy92MS9zaG9wcGluZy90cmFuc2Zlci1vZmZlcnMnLCBwYXJhbXMpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyYW5zZmVyT2ZmZXJzOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFaQSxJQWFNQSxjQUFjO0VBQ2xCLFNBQUFBLGVBQVlDLE1BQU0sRUFBRTtJQUFBQyxlQUFBLE9BQUFGLGNBQUE7SUFDbEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBLE1BQU07RUFDdEI7O0VBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBWEUsT0FBQUUsWUFBQSxDQUFBSCxjQUFBO0lBQUFJLEdBQUE7SUFBQUMsS0FBQSxFQWFBLFNBQUFDLElBQUlBLENBQUEsRUFBYztNQUFBLElBQWJDLE1BQU0sR0FBQUMsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUcsQ0FBQyxDQUFDO01BQ2QsT0FBTyxJQUFJLENBQUNQLE1BQU0sQ0FBQ0ssSUFBSSxDQUFDLDhCQUE4QixFQUFFQyxNQUFNLENBQUM7SUFDakU7RUFBQztBQUFBO0FBQUEsSUFBQUksUUFBQSxHQUFBQyxPQUFBLGNBR1laLGNBQWM7QUFBQWEsTUFBQSxDQUFBRCxPQUFBLEdBQUFBLE9BQUEsQ0FBQUUsT0FBQSIsImlnbm9yZUxpc3QiOltdfQ==
}),
"[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/shopping.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _flight_destinations = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/shopping/flight_destinations.js [app-route] (ecmascript)"));
var _flight_offers = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/shopping/flight_offers.js [app-route] (ecmascript)"));
var _flight_offers_search = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/shopping/flight_offers_search.js [app-route] (ecmascript)"));
var _flight_dates = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/shopping/flight_dates.js [app-route] (ecmascript)"));
var _seatmaps = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/shopping/seatmaps.js [app-route] (ecmascript)"));
var _hotel_offer_search = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/shopping/hotel_offer_search.js [app-route] (ecmascript)"));
var _hotel_offers_search = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/shopping/hotel_offers_search.js [app-route] (ecmascript)"));
var _activities = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/shopping/activities.js [app-route] (ecmascript)"));
var _activity = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/shopping/activity.js [app-route] (ecmascript)"));
var _availability = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/shopping/availability.js [app-route] (ecmascript)"));
var _transfer_offers = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/shopping/transfer_offers.js [app-route] (ecmascript)"));
function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        "default": e
    };
}
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
/**
 * A namespaced client for the
 * `/v1/shopping`, `/v2/shopping` and `/v3/shopping` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.shopping;
 * ```
 *
 * @param {Client} client
 * @property {FlightDestinations} flightDestinations
 * @property {FlightOffers} flightOffers
 * @property {FlightOffersSearch} flightOffersSearch
 * @property {FlightDates} flightDates
 * @property {Seatmaps} seatmaps
 * @property {HotelOfferSearch} hotelOffers
 * @property {HotelOffersSearch} hotelOffers
 * @property {Availability} availability
 * @property {TransferOffers} transferOffers
 */ var Shopping = /*#__PURE__*/ function() {
    function Shopping(client) {
        _classCallCheck(this, Shopping);
        this.client = client;
        this.flightDestinations = new _flight_destinations["default"](client);
        this.flightOffers = new _flight_offers["default"](client);
        this.flightOffersSearch = new _flight_offers_search["default"](client);
        this.flightDates = new _flight_dates["default"](client);
        this.seatmaps = new _seatmaps["default"](client);
        this.hotelOffersSearch = new _hotel_offers_search["default"](client);
        this.activities = new _activities["default"](client);
        this.availability = new _availability["default"](client);
        this.transferOffers = new _transfer_offers["default"](client);
    }
    /**
   * Loads a namespaced path for a specific offer ID for Hotel Search V3
   *
   * @param  {string} [offerId]  The ID of the offer for a dedicated hotel
   * @return {HotelOfferSearch}
   **/ return _createClass(Shopping, [
        {
            key: "hotelOfferSearch",
            value: function hotelOfferSearch(offerId) {
                return new _hotel_offer_search["default"](this.client, offerId);
            }
        },
        {
            key: "activity",
            value: function activity(activityId) {
                return new _activity["default"](this.client, activityId);
            }
        }
    ]);
}();
var _default = exports["default"] = Shopping;
module.exports = exports.default; //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZmxpZ2h0X2Rlc3RpbmF0aW9ucyIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiX2ZsaWdodF9vZmZlcnMiLCJfZmxpZ2h0X29mZmVyc19zZWFyY2giLCJfZmxpZ2h0X2RhdGVzIiwiX3NlYXRtYXBzIiwiX2hvdGVsX29mZmVyX3NlYXJjaCIsIl9ob3RlbF9vZmZlcnNfc2VhcmNoIiwiX2FjdGl2aXRpZXMiLCJfYWN0aXZpdHkiLCJfYXZhaWxhYmlsaXR5IiwiX3RyYW5zZmVyX29mZmVycyIsImUiLCJfX2VzTW9kdWxlIiwiX3R5cGVvZiIsIm8iLCJTeW1ib2wiLCJpdGVyYXRvciIsImNvbnN0cnVjdG9yIiwicHJvdG90eXBlIiwiX2NsYXNzQ2FsbENoZWNrIiwiYSIsIm4iLCJUeXBlRXJyb3IiLCJfZGVmaW5lUHJvcGVydGllcyIsInIiLCJ0IiwibGVuZ3RoIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfdG9Qcm9wZXJ0eUtleSIsImtleSIsIl9jcmVhdGVDbGFzcyIsImkiLCJfdG9QcmltaXRpdmUiLCJ0b1ByaW1pdGl2ZSIsImNhbGwiLCJTdHJpbmciLCJOdW1iZXIiLCJTaG9wcGluZyIsImNsaWVudCIsImZsaWdodERlc3RpbmF0aW9ucyIsIkZsaWdodERlc3RpbmF0aW9ucyIsImZsaWdodE9mZmVycyIsIkZsaWdodE9mZmVycyIsImZsaWdodE9mZmVyc1NlYXJjaCIsIkZsaWdodE9mZmVyc1NlYXJjaCIsImZsaWdodERhdGVzIiwiRmxpZ2h0RGF0ZXMiLCJzZWF0bWFwcyIsIlNlYXRtYXBzIiwiaG90ZWxPZmZlcnNTZWFyY2giLCJIb3RlbE9mZmVyc1NlYXJjaCIsImFjdGl2aXRpZXMiLCJBY3Rpdml0aWVzIiwiYXZhaWxhYmlsaXR5IiwiQXZhaWxhYmlsaXR5IiwidHJhbnNmZXJPZmZlcnMiLCJUcmFuc2Zlck9mZmVycyIsInZhbHVlIiwiaG90ZWxPZmZlclNlYXJjaCIsIm9mZmVySWQiLCJIb3RlbE9mZmVyU2VhcmNoIiwiYWN0aXZpdHkiLCJhY3Rpdml0eUlkIiwiQWN0aXZpdHkiLCJfZGVmYXVsdCIsImV4cG9ydHMiLCJtb2R1bGUiLCJkZWZhdWx0Il0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FtYWRldXMvbmFtZXNwYWNlcy9zaG9wcGluZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRmxpZ2h0RGVzdGluYXRpb25zIGZyb20gJy4vc2hvcHBpbmcvZmxpZ2h0X2Rlc3RpbmF0aW9ucyc7XG5pbXBvcnQgRmxpZ2h0T2ZmZXJzICAgICAgIGZyb20gJy4vc2hvcHBpbmcvZmxpZ2h0X29mZmVycyc7XG5pbXBvcnQgRmxpZ2h0T2ZmZXJzU2VhcmNoIGZyb20gJy4vc2hvcHBpbmcvZmxpZ2h0X29mZmVyc19zZWFyY2gnO1xuaW1wb3J0IEZsaWdodERhdGVzICAgICAgICBmcm9tICcuL3Nob3BwaW5nL2ZsaWdodF9kYXRlcyc7XG5pbXBvcnQgU2VhdG1hcHMgICAgICAgICAgIGZyb20gJy4vc2hvcHBpbmcvc2VhdG1hcHMnO1xuaW1wb3J0IEhvdGVsT2ZmZXJTZWFyY2ggICBmcm9tICcuL3Nob3BwaW5nL2hvdGVsX29mZmVyX3NlYXJjaCc7XG5pbXBvcnQgSG90ZWxPZmZlcnNTZWFyY2ggIGZyb20gJy4vc2hvcHBpbmcvaG90ZWxfb2ZmZXJzX3NlYXJjaCc7XG5pbXBvcnQgQWN0aXZpdGllcyAgICAgICAgIGZyb20gJy4vc2hvcHBpbmcvYWN0aXZpdGllcyc7XG5pbXBvcnQgQWN0aXZpdHkgICAgICAgICAgIGZyb20gJy4vc2hvcHBpbmcvYWN0aXZpdHknO1xuaW1wb3J0IEF2YWlsYWJpbGl0eSAgICAgICBmcm9tICcuL3Nob3BwaW5nL2F2YWlsYWJpbGl0eSc7XG5pbXBvcnQgVHJhbnNmZXJPZmZlcnMgICAgIGZyb20gJy4vc2hvcHBpbmcvdHJhbnNmZXJfb2ZmZXJzJztcblxuLyoqXG4gKiBBIG5hbWVzcGFjZWQgY2xpZW50IGZvciB0aGVcbiAqIGAvdjEvc2hvcHBpbmdgLCBgL3YyL3Nob3BwaW5nYCBhbmQgYC92My9zaG9wcGluZ2AgZW5kcG9pbnRzXG4gKlxuICogQWNjZXNzIHZpYSB0aGUge0BsaW5rIEFtYWRldXN9IG9iamVjdFxuICpcbiAqIGBgYGpzXG4gKiBsZXQgYW1hZGV1cyA9IG5ldyBBbWFkZXVzKCk7XG4gKiBhbWFkZXVzLnNob3BwaW5nO1xuICogYGBgXG4gKlxuICogQHBhcmFtIHtDbGllbnR9IGNsaWVudFxuICogQHByb3BlcnR5IHtGbGlnaHREZXN0aW5hdGlvbnN9IGZsaWdodERlc3RpbmF0aW9uc1xuICogQHByb3BlcnR5IHtGbGlnaHRPZmZlcnN9IGZsaWdodE9mZmVyc1xuICogQHByb3BlcnR5IHtGbGlnaHRPZmZlcnNTZWFyY2h9IGZsaWdodE9mZmVyc1NlYXJjaFxuICogQHByb3BlcnR5IHtGbGlnaHREYXRlc30gZmxpZ2h0RGF0ZXNcbiAqIEBwcm9wZXJ0eSB7U2VhdG1hcHN9IHNlYXRtYXBzXG4gKiBAcHJvcGVydHkge0hvdGVsT2ZmZXJTZWFyY2h9IGhvdGVsT2ZmZXJzXG4gKiBAcHJvcGVydHkge0hvdGVsT2ZmZXJzU2VhcmNofSBob3RlbE9mZmVyc1xuICogQHByb3BlcnR5IHtBdmFpbGFiaWxpdHl9IGF2YWlsYWJpbGl0eVxuICogQHByb3BlcnR5IHtUcmFuc2Zlck9mZmVyc30gdHJhbnNmZXJPZmZlcnNcbiAqL1xuY2xhc3MgU2hvcHBpbmcge1xuICBjb25zdHJ1Y3RvcihjbGllbnQpIHtcbiAgICB0aGlzLmNsaWVudCAgICAgICAgICAgICA9IGNsaWVudDtcbiAgICB0aGlzLmZsaWdodERlc3RpbmF0aW9ucyA9IG5ldyBGbGlnaHREZXN0aW5hdGlvbnMoY2xpZW50KTtcbiAgICB0aGlzLmZsaWdodE9mZmVycyAgICAgICA9IG5ldyBGbGlnaHRPZmZlcnMoY2xpZW50KTtcbiAgICB0aGlzLmZsaWdodE9mZmVyc1NlYXJjaCA9IG5ldyBGbGlnaHRPZmZlcnNTZWFyY2goY2xpZW50KTtcbiAgICB0aGlzLmZsaWdodERhdGVzICAgICAgICA9IG5ldyBGbGlnaHREYXRlcyhjbGllbnQpO1xuICAgIHRoaXMuc2VhdG1hcHMgICAgICAgICAgID0gbmV3IFNlYXRtYXBzKGNsaWVudCk7XG4gICAgdGhpcy5ob3RlbE9mZmVyc1NlYXJjaCAgPSBuZXcgSG90ZWxPZmZlcnNTZWFyY2goY2xpZW50KTtcbiAgICB0aGlzLmFjdGl2aXRpZXMgICAgICAgICA9IG5ldyBBY3Rpdml0aWVzKGNsaWVudCk7XG4gICAgdGhpcy5hdmFpbGFiaWxpdHkgICAgICAgPSBuZXcgQXZhaWxhYmlsaXR5KGNsaWVudCk7XG4gICAgdGhpcy50cmFuc2Zlck9mZmVycyAgICAgPSBuZXcgVHJhbnNmZXJPZmZlcnMoY2xpZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBMb2FkcyBhIG5hbWVzcGFjZWQgcGF0aCBmb3IgYSBzcGVjaWZpYyBvZmZlciBJRCBmb3IgSG90ZWwgU2VhcmNoIFYzXG4gICAqXG4gICAqIEBwYXJhbSAge3N0cmluZ30gW29mZmVySWRdICBUaGUgSUQgb2YgdGhlIG9mZmVyIGZvciBhIGRlZGljYXRlZCBob3RlbFxuICAgKiBAcmV0dXJuIHtIb3RlbE9mZmVyU2VhcmNofVxuICAgKiovXG4gIGhvdGVsT2ZmZXJTZWFyY2gob2ZmZXJJZCkge1xuICAgIHJldHVybiBuZXcgSG90ZWxPZmZlclNlYXJjaCh0aGlzLmNsaWVudCwgb2ZmZXJJZCk7XG4gIH1cblxuICAvKipcbiAgICogTG9hZHMgYSBuYW1lc3BhY2VkIHBhdGggZm9yIGEgc3BlY2lmaWMgYWN0aXZpdHkgSURcbiAgICpcbiAgICogQHBhcmFtICB7c3RyaW5nfSBbYWN0aXZpdHlJZF0gIFRoZSBJRCBvZiB0aGUgYWN0aXZpdHkgZm9yIGEgZGVkaWNhdGVkIHRvdXIgb3IgYWN0aXZpdHlcbiAgICogQHJldHVybiB7QWN0aXZpdHl9XG4gICAqKi9cbiAgYWN0aXZpdHkoYWN0aXZpdHlJZCkge1xuICAgIHJldHVybiBuZXcgQWN0aXZpdHkodGhpcy5jbGllbnQsIGFj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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFyQkEsSUFzQk1nQixRQUFRO0VBQ1osU0FBQUEsU0FBWUMsTUFBTSxFQUFFO0lBQUF2QixlQUFBLE9BQUFzQixRQUFBO0lBQ2xCLElBQUksQ0FBQ0MsTUFBTSxHQUFlQSxNQUFNO0lBQ2hDLElBQUksQ0FBQ0Msa0JBQWtCLEdBQUcsSUFBSUMsK0JBQWtCLENBQUNGLE1BQU0sQ0FBQztJQUN4RCxJQUFJLENBQUNHLFlBQVksR0FBUyxJQUFJQyx5QkFBWSxDQUFDSixNQUFNLENBQUM7SUFDbEQsSUFBSSxDQUFDSyxrQkFBa0IsR0FBRyxJQUFJQyxnQ0FBa0IsQ0FBQ04sTUFBTSxDQUFDO0lBQ3hELElBQUksQ0FBQ08sV0FBVyxHQUFVLElBQUlDLHdCQUFXLENBQUNSLE1BQU0sQ0FBQztJQUNqRCxJQUFJLENBQUNTLFFBQVEsR0FBYSxJQUFJQyxvQkFBUSxDQUFDVixNQUFNLENBQUM7SUFDOUMsSUFBSSxDQUFDVyxpQkFBaUIsR0FBSSxJQUFJQywrQkFBaUIsQ0FBQ1osTUFBTSxDQUFDO0lBQ3ZELElBQUksQ0FBQ2EsVUFBVSxHQUFXLElBQUlDLHNCQUFVLENBQUNkLE1BQU0sQ0FBQztJQUNoRCxJQUFJLENBQUNlLFlBQVksR0FBUyxJQUFJQyx3QkFBWSxDQUFDaEIsTUFBTSxDQUFDO0lBQ2xELElBQUksQ0FBQ2lCLGNBQWMsR0FBTyxJQUFJQywyQkFBYyxDQUFDbEIsTUFBTSxDQUFDO0VBQ3REOztFQUVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQUxFLE9BQUFSLFlBQUEsQ0FBQU8sUUFBQTtJQUFBUixHQUFBO0lBQUE0QixLQUFBLEVBTUEsU0FBQUMsZ0JBQWdCQSxDQUFDQyxPQUFPLEVBQUU7TUFDeEIsT0FBTyxJQUFJQyw4QkFBZ0IsQ0FBQyxJQUFJLENBQUN0QixNQUFNLEVBQUVxQixPQUFPLENBQUM7SUFDbkQ7O0lBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBTEU7SUFBQTlCLEdBQUE7SUFBQTRCLEtBQUEsRUFNQSxTQUFBSSxRQUFRQSxDQUFDQyxVQUFVLEVBQUU7TUFDbkIsT0FBTyxJQUFJQyxvQkFBUSxDQUFDLElBQUksQ0FBQ3pCLE1BQU0sRUFBRXdCLFVBQVUsQ0FBQztJQUM5QztFQUFDO0FBQUE7QUFBQSxJQUFBRSxRQUFBLEdBQUFDLE9BQUEsY0FJWTVCLFFBQVE7QUFBQTZCLE1BQUEsQ0FBQUQsT0FBQSxHQUFBQSxPQUFBLENBQUFFLE9BQUEiLCJpZ25vcmVMaXN0IjpbXX0=
}),
"[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/booking/flight_orders.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
/**
 * A namespaced client for the
 * `/v1/booking/flight-orders` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.booking.flightOrders;
 * ```
 *
 * @param {Client} client
 */ var FlightOrders = /*#__PURE__*/ function() {
    function FlightOrders(client) {
        _classCallCheck(this, FlightOrders);
        this.client = client;
    }
    /**
   * To book the selected flight-offer and create a flight-order
   *
   * @param {Object} params
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * To book the flight-offer(s) suggested by flightOffersSearch and create a flight-order
   *
   * ```js
   * amadeus.booking.flightOrders.post({
   *  'type': 'flight-order',
   *  'flightOffers': [],
   *  'travelers': []
   * });
   * ```
   */ return _createClass(FlightOrders, [
        {
            key: "post",
            value: function post() {
                var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                return this.client.post('/v1/booking/flight-orders', params);
            }
        }
    ]);
}();
var _default = exports["default"] = FlightOrders;
module.exports = exports.default; //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJGbGlnaHRPcmRlcnMiLCJjbGllbnQiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsInBvc3QiLCJwYXJhbXMiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJfZGVmYXVsdCIsImV4cG9ydHMiLCJtb2R1bGUiLCJkZWZhdWx0Il0sInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FtYWRldXMvbmFtZXNwYWNlcy9ib29raW5nL2ZsaWdodF9vcmRlcnMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBBIG5hbWVzcGFjZWQgY2xpZW50IGZvciB0aGVcbiAqIGAvdjEvYm9va2luZy9mbGlnaHQtb3JkZXJzYCBlbmRwb2ludHNcbiAqXG4gKiBBY2Nlc3MgdmlhIHRoZSB7QGxpbmsgQW1hZGV1c30gb2JqZWN0XG4gKlxuICogYGBganNcbiAqIGxldCBhbWFkZXVzID0gbmV3IEFtYWRldXMoKTtcbiAqIGFtYWRldXMuYm9va2luZy5mbGlnaHRPcmRlcnM7XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge0NsaWVudH0gY2xpZW50XG4gKi9cbmNsYXNzIEZsaWdodE9yZGVycyB7XG4gIGNvbnN0cnVjdG9yKGNsaWVudCkge1xuICAgIHRoaXMuY2xpZW50ID0gY2xpZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIFRvIGJvb2sgdGhlIHNlbGVjdGVkIGZsaWdodC1vZmZlciBhbmQgY3JlYXRlIGEgZmxpZ2h0LW9yZGVyXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXNcbiAgICogQHJldHVybiB7UHJvbWlzZS48UmVzcG9uc2UsUmVzcG9uc2VFcnJvcj59IGEgUHJvbWlzZVxuICAgKlxuICAgKiBUbyBib29rIHRoZSBmbGlnaHQtb2ZmZXIocykgc3VnZ2VzdGVkIGJ5IGZsaWdodE9mZmVyc1NlYXJjaCBhbmQgY3JlYXRlIGEgZmxpZ2h0LW9yZGVyXG4gICAqXG4gICAqIGBgYGpzXG4gICAqIGFtYWRldXMuYm9va2luZy5mbGlnaHRPcmRlcnMucG9zdCh7XG4gICAqICAndHlwZSc6ICdmbGlnaHQtb3JkZXInLFxuICAgKiAgJ2ZsaWdodE9mZmVycyc6IFtdLFxuICAgKiAgJ3RyYXZlbGVycyc6IFtdXG4gICAqIH0pO1xuICAgKiBgYGBcbiAgICovXG4gIHBvc3QocGFyYW1zID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5jbGllbnQucG9zdCgnL3YxL2Jvb2tpbmcvZmxpZ2h0LW9yZGVycycsIHBhcmFtcyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRmxpZ2h0T3JkZXJzOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFaQSxJQWFNQSxZQUFZO0VBQ2hCLFNBQUFBLGFBQVlDLE1BQU0sRUFBRTtJQUFBQyxlQUFBLE9BQUFGLFlBQUE7SUFDbEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBLE1BQU07RUFDdEI7O0VBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFmRSxPQUFBRSxZQUFBLENBQUFILFlBQUE7SUFBQUksR0FBQTtJQUFBQyxLQUFBLEVBZ0JBLFNBQUFDLElBQUlBLENBQUEsRUFBYztNQUFBLElBQWJDLE1BQU0sR0FBQUMsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUcsQ0FBQyxDQUFDO01BQ2QsT0FBTyxJQUFJLENBQUNQLE1BQU0sQ0FBQ0ssSUFBSSxDQUFDLDJCQUEyQixFQUFFQyxNQUFNLENBQUM7SUFDOUQ7RUFBQztBQUFBO0FBQUEsSUFBQUksUUFBQSxHQUFBQyxPQUFBLGNBR1laLFlBQVk7QUFBQWEsTUFBQSxDQUFBRCxPQUFBLEdBQUFBLE9BQUEsQ0FBQUUsT0FBQSIsImlnbm9yZUxpc3QiOltdfQ==
}),
"[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/booking/flight_order.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
/**
 * A namespaced client for the
 * `/v1/booking/flight-orders` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.booking.flightOrder;
 * ```
 *
 * @param {Client} client
 */ var FlightOrder = /*#__PURE__*/ function() {
    function FlightOrder(client, orderId) {
        _classCallCheck(this, FlightOrder);
        this.client = client;
        this._orderId = orderId;
    }
    /**
   * To retrieve a flight order based on its id.
   *
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * To retrieve a flight order with ID 'XXX'
   *
   * ```js
   * amadeus.booking.flightOrder('XXX').get();
   * ```
   */ return _createClass(FlightOrder, [
        {
            key: "get",
            value: function get() {
                if (this._orderId) return this.client.get('/v1/booking/flight-orders/' + this._orderId);
                else throw new Error('MISSING_REQUIRED_PARAMETER');
            }
        },
        {
            key: "delete",
            value: function _delete() {
                if (this._orderId) return this.client["delete"]('/v1/booking/flight-orders/' + this._orderId);
                else throw new Error('MISSING_REQUIRED_PARAMETER');
            }
        }
    ]);
}();
var _default = exports["default"] = FlightOrder;
module.exports = exports.default; //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJGbGlnaHRPcmRlciIsImNsaWVudCIsIm9yZGVySWQiLCJfY2xhc3NDYWxsQ2hlY2siLCJfb3JkZXJJZCIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiZ2V0IiwiRXJyb3IiLCJkZWxldGUiLCJfZGVmYXVsdCIsImV4cG9ydHMiLCJtb2R1bGUiLCJkZWZhdWx0Il0sInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FtYWRldXMvbmFtZXNwYWNlcy9ib29raW5nL2ZsaWdodF9vcmRlci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEEgbmFtZXNwYWNlZCBjbGllbnQgZm9yIHRoZVxuICogYC92MS9ib29raW5nL2ZsaWdodC1vcmRlcnNgIGVuZHBvaW50c1xuICpcbiAqIEFjY2VzcyB2aWEgdGhlIHtAbGluayBBbWFkZXVzfSBvYmplY3RcbiAqXG4gKiBgYGBqc1xuICogbGV0IGFtYWRldXMgPSBuZXcgQW1hZGV1cygpO1xuICogYW1hZGV1cy5ib29raW5nLmZsaWdodE9yZGVyO1xuICogYGBgXG4gKlxuICogQHBhcmFtIHtDbGllbnR9IGNsaWVudFxuICovXG5jbGFzcyBGbGlnaHRPcmRlciB7XG4gIGNvbnN0cnVjdG9yKGNsaWVudCwgb3JkZXJJZCkge1xuICAgIHRoaXMuY2xpZW50ID0gY2xpZW50O1xuICAgIHRoaXMuX29yZGVySWQgPSBvcmRlcklkO1xuICB9XG5cbiAgLyoqXG4gICAqIFRvIHJldHJpZXZlIGEgZmxpZ2h0IG9yZGVyIGJhc2VkIG9uIGl0cyBpZC5cbiAgICpcbiAgICogQHJldHVybiB7UHJvbWlzZS48UmVzcG9uc2UsUmVzcG9uc2VFcnJvcj59IGEgUHJvbWlzZVxuICAgKlxuICAgKiBUbyByZXRyaWV2ZSBhIGZsaWdodCBvcmRlciB3aXRoIElEICdYWFgnXG4gICAqXG4gICAqIGBgYGpzXG4gICAqIGFtYWRldXMuYm9va2luZy5mbGlnaHRPcmRlcignWFhYJykuZ2V0KCk7XG4gICAqIGBgYFxuICAgKi9cbiAgZ2V0KCkge1xuICAgIGlmICh0aGlzLl9vcmRlcklkKVxuICAgICAgcmV0dXJuIHRoaXMuY2xpZW50LmdldCgnL3YxL2Jvb2tpbmcvZmxpZ2h0LW9yZGVycy8nICsgdGhpcy5fb3JkZXJJZCk7XG4gICAgZWxzZVxuICAgICAgdGhyb3cgbmV3IEVycm9yKCdNSVNTSU5HX1JFUVVJUkVEX1BBUkFNRVRFUicpO1xuICB9XG5cbiAgLyoqXG4gICAqIFRvIGNhbmNlbCBhIGZsaWdodCBvcmRlciBiYXNlZCBvbiBpdHMgaWQuXG4gICAqXG4gICAqIEByZXR1cm4ge1Byb21pc2UuPFJlc3BvbnNlLFJlc3BvbnNlRXJyb3I+fSBhIFByb21pc2VcbiAgICpcbiAgICogVG8gY2FuY2VsIGEgZmxpZ2h0IG9yZGVyIHdpdGggSUQgJ1hYWCdcbiAgICpcbiAgICogYGBganNcbiAgICogYW1hZGV1cy5ib29raW5nLmZsaWdodE9yZGVyKCdYWFgnKS5kZWxldGUoKTtcbiAgICogYGBgXG4gICAqL1xuICBkZWxldGUoKSB7XG4gICAgaWYgKHRoaXMuX29yZGVySWQpXG4gICAgICByZXR1cm4gdGhpcy5jbGllbnQuZGVsZXRlKCcvdjEvYm9va2luZy9mbGlnaHQtb3JkZXJzLycgKyB0aGlzLl9vcmRlcklkKTtcbiAgICBlbHNlXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ01JU1NJTkdfUkVRVUlSRURfUEFSQU1FVEVSJyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRmxpZ2h0T3JkZXI7Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBLElBYU1BLFdBQVc7RUFDZixTQUFBQSxZQUFZQyxNQUFNLEVBQUVDLE9BQU8sRUFBRTtJQUFBQyxlQUFBLE9BQUFILFdBQUE7SUFDM0IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBLE1BQU07SUFDcEIsSUFBSSxDQUFDRyxRQUFRLEdBQUdGLE9BQU87RUFDekI7O0VBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQVZFLE9BQUFHLFlBQUEsQ0FBQUwsV0FBQTtJQUFBTSxHQUFBO0lBQUFDLEtBQUEsRUFXQSxTQUFBQyxHQUFHQSxDQUFBLEVBQUc7TUFDSixJQUFJLElBQUksQ0FBQ0osUUFBUSxFQUNmLE9BQU8sSUFBSSxDQUFDSCxNQUFNLENBQUNPLEdBQUcsQ0FBQyw0QkFBNEIsR0FBRyxJQUFJLENBQUNKLFFBQVEsQ0FBQyxDQUFDLEtBRXJFLE1BQU0sSUFBSUssS0FBSyxDQUFDLDRCQUE0QixDQUFDO0lBQ2pEOztJQUVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFWRTtJQUFBSCxHQUFBO0lBQUFDLEtBQUEsRUFXQSxTQUFBRyxPQUFNQSxDQUFBLEVBQUc7TUFDUCxJQUFJLElBQUksQ0FBQ04sUUFBUSxFQUNmLE9BQU8sSUFBSSxDQUFDSCxNQUFNLFVBQU8sQ0FBQyw0QkFBNEIsR0FBRyxJQUFJLENBQUNHLFFBQVEsQ0FBQyxDQUFDLEtBRXhFLE1BQU0sSUFBSUssS0FBSyxDQUFDLDRCQUE0QixDQUFDO0lBQ2pEO0VBQUM7QUFBQTtBQUFBLElBQUFFLFFBQUEsR0FBQUMsT0FBQSxjQUdZWixXQUFXO0FBQUFhLE1BQUEsQ0FBQUQsT0FBQSxHQUFBQSxPQUFBLENBQUFFLE9BQUEiLCJpZ25vcmVMaXN0IjpbXX0=
}),
"[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/booking/hotel_bookings.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
/**
 * A namespaced client for the
 * `/v1/booking/hotel-bookings` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.booking.hotelBookings;
 * ```
 *
 * @param {Client} client
 */ var HotelBookings = /*#__PURE__*/ function() {
    function HotelBookings(client) {
        _classCallCheck(this, HotelBookings);
        this.client = client;
    }
    /**
   * To book the offer retrieved from Hotel Shopping API.
   *
   * @param {Object} params
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * To book the hotel offer with ID 'XXX' with guests & payments info
   *
   * ```js
   * amadeus.booking.hotelBookings.post(
   * {
   * 'data': {
   *   'offerId': 'XXXX',
   *   'guests': [],
   *   'payments': [],
   *   'rooms': []
   * }}
   * )
   * ```
   */ return _createClass(HotelBookings, [
        {
            key: "post",
            value: function post() {
                var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                return this.client.post('/v1/booking/hotel-bookings', params);
            }
        }
    ]);
}();
var _default = exports["default"] = HotelBookings;
module.exports = exports.default; //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJIb3RlbEJvb2tpbmdzIiwiY2xpZW50IiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJwb3N0IiwicGFyYW1zIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiX2RlZmF1bHQiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmYXVsdCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hbWFkZXVzL25hbWVzcGFjZXMvYm9va2luZy9ob3RlbF9ib29raW5ncy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEEgbmFtZXNwYWNlZCBjbGllbnQgZm9yIHRoZVxuICogYC92MS9ib29raW5nL2hvdGVsLWJvb2tpbmdzYCBlbmRwb2ludHNcbiAqXG4gKiBBY2Nlc3MgdmlhIHRoZSB7QGxpbmsgQW1hZGV1c30gb2JqZWN0XG4gKlxuICogYGBganNcbiAqIGxldCBhbWFkZXVzID0gbmV3IEFtYWRldXMoKTtcbiAqIGFtYWRldXMuYm9va2luZy5ob3RlbEJvb2tpbmdzO1xuICogYGBgXG4gKlxuICogQHBhcmFtIHtDbGllbnR9IGNsaWVudFxuICovXG5jbGFzcyBIb3RlbEJvb2tpbmdzIHtcbiAgY29uc3RydWN0b3IoY2xpZW50KSB7XG4gICAgdGhpcy5jbGllbnQgPSBjbGllbnQ7XG4gIH1cblxuICAvKipcbiAgICogVG8gYm9vayB0aGUgb2ZmZXIgcmV0cmlldmVkIGZyb20gSG90ZWwgU2hvcHBpbmcgQVBJLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zXG4gICAqIEByZXR1cm4ge1Byb21pc2UuPFJlc3BvbnNlLFJlc3BvbnNlRXJyb3I+fSBhIFByb21pc2VcbiAgICpcbiAgICogVG8gYm9vayB0aGUgaG90ZWwgb2ZmZXIgd2l0aCBJRCAnWFhYJyB3aXRoIGd1ZXN0cyAmIHBheW1lbnRzIGluZm9cbiAgICpcbiAgICogYGBganNcbiAgICogYW1hZGV1cy5ib29raW5nLmhvdGVsQm9va2luZ3MucG9zdChcbiAgICoge1xuICAgKiAnZGF0YSc6IHtcbiAgICogICAnb2ZmZXJJZCc6ICdYWFhYJyxcbiAgICogICAnZ3Vlc3RzJzogW10sXG4gICAqICAgJ3BheW1lbnRzJzogW10sXG4gICAqICAgJ3Jvb21zJzogW11cbiAgICogfX1cbiAgICogKVxuICAgKiBgYGBcbiAgICovXG4gIHBvc3QocGFyYW1zID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5jbGllbnQucG9zdCgnL3YxL2Jvb2tpbmcvaG90ZWwtYm9va2luZ3MnLCBwYXJhbXMpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEhvdGVsQm9va2luZ3M7Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBLElBYU1BLGFBQWE7RUFDakIsU0FBQUEsY0FBWUMsTUFBTSxFQUFFO0lBQUFDLGVBQUEsT0FBQUYsYUFBQTtJQUNsQixJQUFJLENBQUNDLE1BQU0sR0FBR0EsTUFBTTtFQUN0Qjs7RUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBbkJFLE9BQUFFLFlBQUEsQ0FBQUgsYUFBQTtJQUFBSSxHQUFBO0lBQUFDLEtBQUEsRUFvQkEsU0FBQUMsSUFBSUEsQ0FBQSxFQUFjO01BQUEsSUFBYkMsTUFBTSxHQUFBQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBRyxDQUFDLENBQUM7TUFDZCxPQUFPLElBQUksQ0FBQ1AsTUFBTSxDQUFDSyxJQUFJLENBQUMsNEJBQTRCLEVBQUVDLE1BQU0sQ0FBQztJQUMvRDtFQUFDO0FBQUE7QUFBQSxJQUFBSSxRQUFBLEdBQUFDLE9BQUEsY0FHWVosYUFBYTtBQUFBYSxNQUFBLENBQUFELE9BQUEsR0FBQUEsT0FBQSxDQUFBRSxPQUFBIiwiaWdub3JlTGlzdCI6W119
}),
"[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/booking/hotel_orders.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
/**
 * A namespaced client for the
 * `/v2/booking/hotel-orders` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.booking.hotelOrders;
 * ```
 *
 * @param {Client} client
 */ var HotelOrders = /*#__PURE__*/ function() {
    function HotelOrders(client) {
        _classCallCheck(this, HotelOrders);
        this.client = client;
    }
    /**
   * To book the offer retrieved from Hotel Search API.
   *
   * @param {Object} params
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * To book the hotel offer with ID 'XXX' with guests, travel agents and payment info
   *
   * ```js
   * amadeus.booking.hotelOrders.post(
   * {
   * 'data': {
   *     'type': 'hotel-order',
   *     'guests': [],
   *     'travelAgent': {},
   *     'roomAssociations': [],
   *     'payment': {}
   *   }
   * })
   * ```
    */ return _createClass(HotelOrders, [
        {
            key: "post",
            value: function post() {
                var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                return this.client.post('/v2/booking/hotel-orders', params);
            }
        }
    ]);
}();
var _default = exports["default"] = HotelOrders;
module.exports = exports.default; //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJIb3RlbE9yZGVycyIsImNsaWVudCIsIl9jbGFzc0NhbGxDaGVjayIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwicG9zdCIsInBhcmFtcyIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmF1bHQiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYW1hZGV1cy9uYW1lc3BhY2VzL2Jvb2tpbmcvaG90ZWxfb3JkZXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQSBuYW1lc3BhY2VkIGNsaWVudCBmb3IgdGhlXG4gKiBgL3YyL2Jvb2tpbmcvaG90ZWwtb3JkZXJzYCBlbmRwb2ludHNcbiAqXG4gKiBBY2Nlc3MgdmlhIHRoZSB7QGxpbmsgQW1hZGV1c30gb2JqZWN0XG4gKlxuICogYGBganNcbiAqIGxldCBhbWFkZXVzID0gbmV3IEFtYWRldXMoKTtcbiAqIGFtYWRldXMuYm9va2luZy5ob3RlbE9yZGVycztcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7Q2xpZW50fSBjbGllbnRcbiAqL1xuY2xhc3MgSG90ZWxPcmRlcnMge1xuICBjb25zdHJ1Y3RvcihjbGllbnQpIHtcbiAgICB0aGlzLmNsaWVudCA9IGNsaWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUbyBib29rIHRoZSBvZmZlciByZXRyaWV2ZWQgZnJvbSBIb3RlbCBTZWFyY2ggQVBJLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zXG4gICAqIEByZXR1cm4ge1Byb21pc2UuPFJlc3BvbnNlLFJlc3BvbnNlRXJyb3I+fSBhIFByb21pc2VcbiAgICpcbiAgICogVG8gYm9vayB0aGUgaG90ZWwgb2ZmZXIgd2l0aCBJRCAnWFhYJyB3aXRoIGd1ZXN0cywgdHJhdmVsIGFnZW50cyBhbmQgcGF5bWVudCBpbmZvXG4gICAqXG4gICAqIGBgYGpzXG4gICAqIGFtYWRldXMuYm9va2luZy5ob3RlbE9yZGVycy5wb3N0KFxuICAgKiB7XG4gICAqICdkYXRhJzoge1xuICAgKiAgICAgJ3R5cGUnOiAnaG90ZWwtb3JkZXInLFxuICAgKiAgICAgJ2d1ZXN0cyc6IFtdLFxuICAgKiAgICAgJ3RyYXZlbEFnZW50Jzoge30sXG4gICAqICAgICAncm9vbUFzc29jaWF0aW9ucyc6IFtdLFxuICAgKiAgICAgJ3BheW1lbnQnOiB7fVxuICAgKiAgIH1cbiAgICogfSlcbiAgICogYGBgXG5cbiAgICovXG4gIHBvc3QocGFyYW1zID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5jbGllbnQucG9zdCgnL3YyL2Jvb2tpbmcvaG90ZWwtb3JkZXJzJywgcGFyYW1zKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb3RlbE9yZGVyczsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWkEsSUFhTUEsV0FBVztFQUNmLFNBQUFBLFlBQVlDLE1BQU0sRUFBRTtJQUFBQyxlQUFBLE9BQUFGLFdBQUE7SUFDbEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBLE1BQU07RUFDdEI7O0VBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBcEJFLE9BQUFFLFlBQUEsQ0FBQUgsV0FBQTtJQUFBSSxHQUFBO0lBQUFDLEtBQUEsRUFzQkEsU0FBQUMsSUFBSUEsQ0FBQSxFQUFjO01BQUEsSUFBYkMsTUFBTSxHQUFBQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBRyxDQUFDLENBQUM7TUFDZCxPQUFPLElBQUksQ0FBQ1AsTUFBTSxDQUFDSyxJQUFJLENBQUMsMEJBQTBCLEVBQUVDLE1BQU0sQ0FBQztJQUM3RDtFQUFDO0FBQUE7QUFBQSxJQUFBSSxRQUFBLEdBQUFDLE9BQUEsY0FHWVosV0FBVztBQUFBYSxNQUFBLENBQUFELE9BQUEsR0FBQUEsT0FBQSxDQUFBRSxPQUFBIiwiaWdub3JlTGlzdCI6W119
}),
"[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/booking.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _flight_orders = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/booking/flight_orders.js [app-route] (ecmascript)"));
var _flight_order = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/booking/flight_order.js [app-route] (ecmascript)"));
var _hotel_bookings = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/booking/hotel_bookings.js [app-route] (ecmascript)"));
var _hotel_orders = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/booking/hotel_orders.js [app-route] (ecmascript)"));
function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        "default": e
    };
}
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
/**
 * A namespaced client for the
 * `/v1/booking` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.booking;
 * ```
 *
 * @param {Client} client
 * @property {FlightOrders} flightOrders
 * @property {FlightOrder} flightOrder
 * @property {HotelBookings} hotelBookings
 * @property {HotelOrders} hotelOrders
 * @protected
 */ var Booking = /*#__PURE__*/ function() {
    function Booking(client) {
        _classCallCheck(this, Booking);
        this.client = client;
        this.flightOrders = new _flight_orders["default"](client);
        this.hotelBookings = new _hotel_bookings["default"](client);
        this.hotelOrders = new _hotel_orders["default"](client);
    }
    return _createClass(Booking, [
        {
            key: "flightOrder",
            value: function flightOrder(orderId) {
                return new _flight_order["default"](this.client, orderId);
            }
        }
    ]);
}();
var _default = exports["default"] = Booking;
module.exports = exports.default; //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZmxpZ2h0X29yZGVycyIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiX2ZsaWdodF9vcmRlciIsIl9ob3RlbF9ib29raW5ncyIsIl9ob3RlbF9vcmRlcnMiLCJlIiwiX19lc01vZHVsZSIsIl90eXBlb2YiLCJvIiwiU3ltYm9sIiwiaXRlcmF0b3IiLCJjb25zdHJ1Y3RvciIsInByb3RvdHlwZSIsIl9jbGFzc0NhbGxDaGVjayIsImEiLCJuIiwiVHlwZUVycm9yIiwiX2RlZmluZVByb3BlcnRpZXMiLCJyIiwidCIsImxlbmd0aCIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX3RvUHJvcGVydHlLZXkiLCJrZXkiLCJfY3JlYXRlQ2xhc3MiLCJpIiwiX3RvUHJpbWl0aXZlIiwidG9QcmltaXRpdmUiLCJjYWxsIiwiU3RyaW5nIiwiTnVtYmVyIiwiQm9va2luZyIsImNsaWVudCIsImZsaWdodE9yZGVycyIsIkZsaWdodE9yZGVycyIsImhvdGVsQm9va2luZ3MiLCJIb3RlbEJvb2tpbmdzIiwiaG90ZWxPcmRlcnMiLCJIb3RlbE9yZGVycyIsInZhbHVlIiwiZmxpZ2h0T3JkZXIiLCJvcmRlcklkIiwiRmxpZ2h0T3JkZXIiLCJfZGVmYXVsdCIsImV4cG9ydHMiLCJtb2R1bGUiLCJkZWZhdWx0Il0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FtYWRldXMvbmFtZXNwYWNlcy9ib29raW5nLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGbGlnaHRPcmRlcnMgZnJvbSAnLi9ib29raW5nL2ZsaWdodF9vcmRlcnMnO1xuaW1wb3J0IEZsaWdodE9yZGVyIGZyb20gJy4vYm9va2luZy9mbGlnaHRfb3JkZXInO1xuaW1wb3J0IEhvdGVsQm9va2luZ3MgZnJvbSAnLi9ib29raW5nL2hvdGVsX2Jvb2tpbmdzJztcbmltcG9ydCBIb3RlbE9yZGVycyBmcm9tICcuL2Jvb2tpbmcvaG90ZWxfb3JkZXJzJztcblxuLyoqXG4gKiBBIG5hbWVzcGFjZWQgY2xpZW50IGZvciB0aGVcbiAqIGAvdjEvYm9va2luZ2AgZW5kcG9pbnRzXG4gKlxuICogQWNjZXNzIHZpYSB0aGUge0BsaW5rIEFtYWRldXN9IG9iamVjdFxuICpcbiAqIGBgYGpzXG4gKiBsZXQgYW1hZGV1cyA9IG5ldyBBbWFkZXVzKCk7XG4gKiBhbWFkZXVzLmJvb2tpbmc7XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge0NsaWVudH0gY2xpZW50XG4gKiBAcHJvcGVydHkge0ZsaWdodE9yZGVyc30gZmxpZ2h0T3JkZXJzXG4gKiBAcHJvcGVydHkge0ZsaWdodE9yZGVyfSBmbGlnaHRPcmRlclxuICogQHByb3BlcnR5IHtIb3RlbEJvb2tpbmdzfSBob3RlbEJvb2tpbmdzXG4gKiBAcHJvcGVydHkge0hvdGVsT3JkZXJzfSBob3RlbE9yZGVyc1xuICogQHByb3RlY3RlZFxuICovXG5jbGFzcyBCb29raW5nIHtcbiAgY29uc3RydWN0b3IoY2xpZW50KSB7XG4gICAgdGhpcy5jbGllbnQgICAgPSBjbGllbnQ7XG4gICAgdGhpcy5mbGlnaHRPcmRlcnMgPSBuZXcgRmxpZ2h0T3JkZXJzKGNsaWVudCk7XG4gICAgdGhpcy5ob3RlbEJvb2tpbmdzID0gbmV3IEhvdGVsQm9va2luZ3MoY2xpZW50KTtcbiAgICB0aGlzLmhvdGVsT3JkZXJzID0gbmV3IEhvdGVsT3JkZXJzKGNsaWVudCk7XG4gIH1cblxuICBmbGlnaHRPcmRlciAob3JkZXJJZCkge1xuICAgIHJldHVybiBuZXcgRmxpZ2h0T3JkZXIodGhpcy5jbGllbnQsIG9yZGVySWQpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEJvb2tpbmc7Il0sIm1hcHBpbmdzIjoiOzs7Ozs7QUFBQSxJQUFBQSxjQUFBLEdBQUFDLHNCQUFBLENBQUFDLE9BQUE7QUFDQSxJQUFBQyxhQUFBLEdBQUFGLHNCQUFBLENBQUFDLE9BQUE7QUFDQSxJQUFBRSxlQUFBLEdBQUFILHNCQUFBLENBQUFD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
}),
"[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/travel/analytics/air_traffic/traveled.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
/**
 * A namespaced client for the
 * `/v1/travel/analytics/air-traffic/traveled` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.travel.analytics.AirTraffic.Traveled;
 * ```
 *
 * @param {Client} client
 */ var Traveled = /*#__PURE__*/ function() {
    function Traveled(client) {
        _classCallCheck(this, Traveled);
        this.client = client;
    }
    /**
   * Returns a list of air traffic reports based on the number of people traveling.
   *
   * @param {Object} params
   * @param {string} params.originCityCode IATA code of the origin city - e.g. MAD for
   *   Madrid - required
   * @param {string} params.period period when consumers are travelling in
   *   YYYY-MM format
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * Where were people flying to from Madrid in the January 2017?
   *
   * ```js
   * amadeus.travel.analytics.AirTraffic.Traveled.get({
   *   originCityCode: 'MAD',
   *   period: '2017-01'
   * });
   * ```
   */ return _createClass(Traveled, [
        {
            key: "get",
            value: function get() {
                var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                return this.client.get('/v1/travel/analytics/air-traffic/traveled', params);
            }
        }
    ]);
}();
var _default = exports["default"] = Traveled;
module.exports = exports.default; //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJUcmF2ZWxlZCIsImNsaWVudCIsIl9jbGFzc0NhbGxDaGVjayIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiZ2V0IiwicGFyYW1zIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiX2RlZmF1bHQiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmYXVsdCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3NyYy9hbWFkZXVzL25hbWVzcGFjZXMvdHJhdmVsL2FuYWx5dGljcy9haXJfdHJhZmZpYy90cmF2ZWxlZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEEgbmFtZXNwYWNlZCBjbGllbnQgZm9yIHRoZVxuICogYC92MS90cmF2ZWwvYW5hbHl0aWNzL2Fpci10cmFmZmljL3RyYXZlbGVkYCBlbmRwb2ludHNcbiAqXG4gKiBBY2Nlc3MgdmlhIHRoZSB7QGxpbmsgQW1hZGV1c30gb2JqZWN0XG4gKlxuICogYGBganNcbiAqIGxldCBhbWFkZXVzID0gbmV3IEFtYWRldXMoKTtcbiAqIGFtYWRldXMudHJhdmVsLmFuYWx5dGljcy5BaXJUcmFmZmljLlRyYXZlbGVkO1xuICogYGBgXG4gKlxuICogQHBhcmFtIHtDbGllbnR9IGNsaWVudFxuICovXG5jbGFzcyBUcmF2ZWxlZHtcbiAgY29uc3RydWN0b3IoY2xpZW50KSB7XG4gICAgdGhpcy5jbGllbnQgPSBjbGllbnQ7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGxpc3Qgb2YgYWlyIHRyYWZmaWMgcmVwb3J0cyBiYXNlZCBvbiB0aGUgbnVtYmVyIG9mIHBlb3BsZSB0cmF2ZWxpbmcuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXNcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtcy5vcmlnaW5DaXR5Q29kZSBJQVRBIGNvZGUgb2YgdGhlIG9yaWdpbiBjaXR5IC0gZS5nLiBNQUQgZm9yXG4gICAqICAgTWFkcmlkIC0gcmVxdWlyZWRcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtcy5wZXJpb2QgcGVyaW9kIHdoZW4gY29uc3VtZXJzIGFyZSB0cmF2ZWxsaW5nIGluXG4gICAqICAgWVlZWS1NTSBmb3JtYXRcbiAgICogQHJldHVybiB7UHJvbWlzZS48UmVzcG9uc2UsUmVzcG9uc2VFcnJvcj59IGEgUHJvbWlzZVxuICAgKlxuICAgKiBXaGVyZSB3ZXJlIHBlb3BsZSBmbHlpbmcgdG8gZnJvbSBNYWRyaWQgaW4gdGhlIEphbnVhcnkgMjAxNz9cbiAgICpcbiAgICogYGBganNcbiAgICogYW1hZGV1cy50cmF2ZWwuYW5hbHl0aWNzLkFpclRyYWZmaWMuVHJhdmVsZWQuZ2V0KHtcbiAgICogICBvcmlnaW5DaXR5Q29kZTogJ01BRCcsXG4gICAqICAgcGVyaW9kOiAnMjAxNy0wMSdcbiAgICogfSk7XG4gICAqIGBgYFxuICAgKi9cbiAgZ2V0KHBhcmFtcyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuY2xpZW50LmdldCgnL3YxL3RyYXZlbC9hbmFseXRpY3MvYWlyLXRyYWZmaWMvdHJhdmVsZWQnLCBwYXJhbXMpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyYXZlbGVkO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBLElBYU1BLFFBQVE7RUFDWixTQUFBQSxTQUFZQyxNQUFNLEVBQUU7SUFBQUMsZUFBQSxPQUFBRixRQUFBO0lBQ2xCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQSxNQUFNO0VBQ3RCOztFQUVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBbEJFLE9BQUFFLFlBQUEsQ0FBQUgsUUFBQTtJQUFBSSxHQUFBO0lBQUFDLEtBQUEsRUFtQkEsU0FBQUMsR0FBR0EsQ0FBQSxFQUFjO01BQUEsSUFBYkMsTUFBTSxHQUFBQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBRyxDQUFDLENBQUM7TUFDYixPQUFPLElBQUksQ0FBQ1AsTUFBTSxDQUFDSyxHQUFHLENBQUMsMkNBQTJDLEVBQUVDLE1BQU0sQ0FBQztJQUM3RTtFQUFDO0FBQUE7QUFBQSxJQUFBSSxRQUFBLEdBQUFDLE9BQUEsY0FHWVosUUFBUTtBQUFBYSxNQUFBLENBQUFELE9BQUEsR0FBQUEsT0FBQSxDQUFBRSxPQUFBIiwiaWdub3JlTGlzdCI6W119
}),
"[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/travel/analytics/air_traffic/booked.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
/**
 * A namespaced client for the
 * `/v1/travel/analytics/air-traffic/booked` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.travel.analytics.AirTraffic.Booked;
 * ```
 *
 * @param {Client} client
 */ var Booked = /*#__PURE__*/ function() {
    function Booked(client) {
        _classCallCheck(this, Booked);
        this.client = client;
    }
    /**
   * Returns a list of air traffic reports based on the number of bookings.
   *
   * @param {Object} params
   * @param {string} params.originCityCode IATA code of the origin city - e.g. MAD for
   *   Madrid - required
   * @param {string} params.period period when consumers are travelling in
   *   YYYY-MM format
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * Where were people flying to from Madrid in the August 2017?
   *
   * ```js
   * amadeus.travel.analytics.AirTraffic.Booked.get({
   *   originCityCode: 'MAD',
   *   period: '2017-08'
   * });
   * ```
   */ return _createClass(Booked, [
        {
            key: "get",
            value: function get() {
                var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                return this.client.get('/v1/travel/analytics/air-traffic/booked', params);
            }
        }
    ]);
}();
var _default = exports["default"] = Booked;
module.exports = exports.default; //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJCb29rZWQiLCJjbGllbnQiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImdldCIsInBhcmFtcyIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmF1bHQiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9zcmMvYW1hZGV1cy9uYW1lc3BhY2VzL3RyYXZlbC9hbmFseXRpY3MvYWlyX3RyYWZmaWMvYm9va2VkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQSBuYW1lc3BhY2VkIGNsaWVudCBmb3IgdGhlXG4gKiBgL3YxL3RyYXZlbC9hbmFseXRpY3MvYWlyLXRyYWZmaWMvYm9va2VkYCBlbmRwb2ludHNcbiAqXG4gKiBBY2Nlc3MgdmlhIHRoZSB7QGxpbmsgQW1hZGV1c30gb2JqZWN0XG4gKlxuICogYGBganNcbiAqIGxldCBhbWFkZXVzID0gbmV3IEFtYWRldXMoKTtcbiAqIGFtYWRldXMudHJhdmVsLmFuYWx5dGljcy5BaXJUcmFmZmljLkJvb2tlZDtcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7Q2xpZW50fSBjbGllbnRcbiAqL1xuY2xhc3MgQm9va2Vke1xuICBjb25zdHJ1Y3RvcihjbGllbnQpIHtcbiAgICB0aGlzLmNsaWVudCA9IGNsaWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgbGlzdCBvZiBhaXIgdHJhZmZpYyByZXBvcnRzIGJhc2VkIG9uIHRoZSBudW1iZXIgb2YgYm9va2luZ3MuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXNcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtcy5vcmlnaW5DaXR5Q29kZSBJQVRBIGNvZGUgb2YgdGhlIG9yaWdpbiBjaXR5IC0gZS5nLiBNQUQgZm9yXG4gICAqICAgTWFkcmlkIC0gcmVxdWlyZWRcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtcy5wZXJpb2QgcGVyaW9kIHdoZW4gY29uc3VtZXJzIGFyZSB0cmF2ZWxsaW5nIGluXG4gICAqICAgWVlZWS1NTSBmb3JtYXRcbiAgICogQHJldHVybiB7UHJvbWlzZS48UmVzcG9uc2UsUmVzcG9uc2VFcnJvcj59IGEgUHJvbWlzZVxuICAgKlxuICAgKiBXaGVyZSB3ZXJlIHBlb3BsZSBmbHlpbmcgdG8gZnJvbSBNYWRyaWQgaW4gdGhlIEF1Z3VzdCAyMDE3P1xuICAgKlxuICAgKiBgYGBqc1xuICAgKiBhbWFkZXVzLnRyYXZlbC5hbmFseXRpY3MuQWlyVHJhZmZpYy5Cb29rZWQuZ2V0KHtcbiAgICogICBvcmlnaW5DaXR5Q29kZTogJ01BRCcsXG4gICAqICAgcGVyaW9kOiAnMjAxNy0wOCdcbiAgICogfSk7XG4gICAqIGBgYFxuICAgKi9cbiAgZ2V0KHBhcmFtcyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuY2xpZW50LmdldCgnL3YxL3RyYXZlbC9hbmFseXRpY3MvYWlyLXRyYWZmaWMvYm9va2VkJywgcGFyYW1zKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCb29rZWQ7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWkEsSUFhTUEsTUFBTTtFQUNWLFNBQUFBLE9BQVlDLE1BQU0sRUFBRTtJQUFBQyxlQUFBLE9BQUFGLE1BQUE7SUFDbEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBLE1BQU07RUFDdEI7O0VBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFsQkUsT0FBQUUsWUFBQSxDQUFBSCxNQUFBO0lBQUFJLEdBQUE7SUFBQUMsS0FBQSxFQW1CQSxTQUFBQyxHQUFHQSxDQUFBLEVBQWM7TUFBQSxJQUFiQyxNQUFNLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFHLENBQUMsQ0FBQztNQUNiLE9BQU8sSUFBSSxDQUFDUCxNQUFNLENBQUNLLEdBQUcsQ0FBQyx5Q0FBeUMsRUFBRUMsTUFBTSxDQUFDO0lBQzNFO0VBQUM7QUFBQTtBQUFBLElBQUFJLFFBQUEsR0FBQUMsT0FBQSxjQUdZWixNQUFNO0FBQUFhLE1BQUEsQ0FBQUQsT0FBQSxHQUFBQSxPQUFBLENBQUFFLE9BQUEiLCJpZ25vcmVMaXN0IjpbXX0=
}),
"[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/travel/analytics/air_traffic/busiest_period.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
/**
 * A namespaced client for the
 * `/v1/travel/analytics/air-traffic/busiest-period` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.travel.analytics.AirTraffic.BusiestPeriod;
 * ```
 *
 * @param {Client} client
 */ var BusiestPeriod = /*#__PURE__*/ function() {
    function BusiestPeriod(client) {
        _classCallCheck(this, BusiestPeriod);
        this.client = client;
    }
    /**
   * Returns a list of air traffic reports.
   *
   * @param {Object} params
   * @param {string} params.cityCode IATA code of the origin city - e.g. MAD for
   *   Madrid - required
   * @param {string} params.period period when consumers are travelling in
   *   YYYY-MM format
   * @param {string} params.direction to select between arrivals and departures (default: arrivals)
   *   YYYY-MM format
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * What were the busiest months for Madrid in 2017?
   *
   * ```js
   * amadeus.travel.analytics.AirTraffic.BusiestPeriod.get({
   *   cityCode: 'MAD',
   *   period: '2017',
   *   direction: Amadeus.direction.arriving
   * });
   * ```
   */ return _createClass(BusiestPeriod, [
        {
            key: "get",
            value: function get() {
                var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                return this.client.get('/v1/travel/analytics/air-traffic/busiest-period', params);
            }
        }
    ]);
}();
var _default = exports["default"] = BusiestPeriod;
module.exports = exports.default; //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJCdXNpZXN0UGVyaW9kIiwiY2xpZW50IiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJnZXQiLCJwYXJhbXMiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJfZGVmYXVsdCIsImV4cG9ydHMiLCJtb2R1bGUiLCJkZWZhdWx0Il0sInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FtYWRldXMvbmFtZXNwYWNlcy90cmF2ZWwvYW5hbHl0aWNzL2Fpcl90cmFmZmljL2J1c2llc3RfcGVyaW9kLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQSBuYW1lc3BhY2VkIGNsaWVudCBmb3IgdGhlXG4gKiBgL3YxL3RyYXZlbC9hbmFseXRpY3MvYWlyLXRyYWZmaWMvYnVzaWVzdC1wZXJpb2RgIGVuZHBvaW50c1xuICpcbiAqIEFjY2VzcyB2aWEgdGhlIHtAbGluayBBbWFkZXVzfSBvYmplY3RcbiAqXG4gKiBgYGBqc1xuICogbGV0IGFtYWRldXMgPSBuZXcgQW1hZGV1cygpO1xuICogYW1hZGV1cy50cmF2ZWwuYW5hbHl0aWNzLkFpclRyYWZmaWMuQnVzaWVzdFBlcmlvZDtcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7Q2xpZW50fSBjbGllbnRcbiAqL1xuY2xhc3MgQnVzaWVzdFBlcmlvZHtcbiAgY29uc3RydWN0b3IoY2xpZW50KSB7XG4gICAgdGhpcy5jbGllbnQgPSBjbGllbnQ7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIGxpc3Qgb2YgYWlyIHRyYWZmaWMgcmVwb3J0cy5cbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zLmNpdHlDb2RlIElBVEEgY29kZSBvZiB0aGUgb3JpZ2luIGNpdHkgLSBlLmcuIE1BRCBmb3JcbiAgICogICBNYWRyaWQgLSByZXF1aXJlZFxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zLnBlcmlvZCBwZXJpb2Qgd2hlbiBjb25zdW1lcnMgYXJlIHRyYXZlbGxpbmcgaW5cbiAgICogICBZWVlZLU1NIGZvcm1hdFxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zLmRpcmVjdGlvbiB0byBzZWxlY3QgYmV0d2VlbiBhcnJpdmFscyBhbmQgZGVwYXJ0dXJlcyAoZGVmYXVsdDogYXJyaXZhbHMpXG4gICAqICAgWVlZWS1NTSBmb3JtYXRcbiAgICogQHJldHVybiB7UHJvbWlzZS48UmVzcG9uc2UsUmVzcG9uc2VFcnJvcj59IGEgUHJvbWlzZVxuICAgKlxuICAgKiBXaGF0IHdlcmUgdGhlIGJ1c2llc3QgbW9udGhzIGZvciBNYWRyaWQgaW4gMjAxNz9cbiAgICpcbiAgICogYGBganNcbiAgICogYW1hZGV1cy50cmF2ZWwuYW5hbHl0aWNzLkFpclRyYWZmaWMuQnVzaWVzdFBlcmlvZC5nZXQoe1xuICAgKiAgIGNpdHlDb2RlOiAnTUFEJyxcbiAgICogICBwZXJpb2Q6ICcyMDE3JyxcbiAgICogICBkaXJlY3Rpb246IEFtYWRldXMuZGlyZWN0aW9uLmFycml2aW5nXG4gICAqIH0pO1xuICAgKiBgYGBcbiAgICovXG4gIGdldChwYXJhbXMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmNsaWVudC5nZXQoJy92MS90cmF2ZWwvYW5hbHl0aWNzL2Fpci10cmFmZmljL2J1c2llc3QtcGVyaW9kJywgcGFyYW1zKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBCdXNpZXN0UGVyaW9kO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBLElBYU1BLGFBQWE7RUFDakIsU0FBQUEsY0FBWUMsTUFBTSxFQUFFO0lBQUFDLGVBQUEsT0FBQUYsYUFBQTtJQUNsQixJQUFJLENBQUNDLE1BQU0sR0FBR0EsTUFBTTtFQUN0Qjs7RUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQXJCRSxPQUFBRSxZQUFBLENBQUFILGFBQUE7SUFBQUksR0FBQTtJQUFBQyxLQUFBLEVBc0JBLFNBQUFDLEdBQUdBLENBQUEsRUFBYztNQUFBLElBQWJDLE1BQU0sR0FBQUMsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUcsQ0FBQyxDQUFDO01BQ2IsT0FBTyxJQUFJLENBQUNQLE1BQU0sQ0FBQ0ssR0FBRyxDQUFDLGlEQUFpRCxFQUFFQyxNQUFNLENBQUM7SUFDbkY7RUFBQztBQUFBO0FBQUEsSUFBQUksUUFBQSxHQUFBQyxPQUFBLGNBR1laLGFBQWE7QUFBQWEsTUFBQSxDQUFBRCxPQUFBLEdBQUFBLE9BQUEsQ0FBQUUsT0FBQSIsImlnbm9yZUxpc3QiOltdfQ==
}),
"[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/travel/analytics/air_traffic.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _traveled = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/travel/analytics/air_traffic/traveled.js [app-route] (ecmascript)"));
var _booked = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/travel/analytics/air_traffic/booked.js [app-route] (ecmascript)"));
var _busiest_period = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/travel/analytics/air_traffic/busiest_period.js [app-route] (ecmascript)"));
function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        "default": e
    };
}
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
/**
 * A namespaced client for the
 * `/v1/travel/analytics/air-traffic` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.travel.analytics.airTraffic;
 * ```
 *
 * @param {Client} client
 */ var AirTraffic = /*#__PURE__*/ _createClass(function AirTraffic(client) {
    _classCallCheck(this, AirTraffic);
    this.client = client;
    this.traveled = new _traveled["default"](client);
    this.booked = new _booked["default"](client);
    this.busiestPeriod = new _busiest_period["default"](client);
});
var _default = exports["default"] = AirTraffic;
module.exports = exports.default; //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfdHJhdmVsZWQiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsIl9ib29rZWQiLCJfYnVzaWVzdF9wZXJpb2QiLCJlIiwiX19lc01vZHVsZSIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwiciIsInQiLCJsZW5ndGgiLCJvIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfdG9Qcm9wZXJ0eUtleSIsImtleSIsIl9jcmVhdGVDbGFzcyIsInByb3RvdHlwZSIsImkiLCJfdG9QcmltaXRpdmUiLCJfdHlwZW9mIiwiU3ltYm9sIiwidG9QcmltaXRpdmUiLCJjYWxsIiwiVHlwZUVycm9yIiwiU3RyaW5nIiwiTnVtYmVyIiwiX2NsYXNzQ2FsbENoZWNrIiwiYSIsIm4iLCJBaXJUcmFmZmljIiwiY2xpZW50IiwidHJhdmVsZWQiLCJUcmF2ZWxlZCIsImJvb2tlZCIsIkJvb2tlZCIsImJ1c2llc3RQZXJpb2QiLCJCdXNpZXN0UGVyaW9kIiwiX2RlZmF1bHQiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmYXVsdCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hbWFkZXVzL25hbWVzcGFjZXMvdHJhdmVsL2FuYWx5dGljcy9haXJfdHJhZmZpYy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhdmVsZWQgZnJvbSAnLi9haXJfdHJhZmZpYy90cmF2ZWxlZC5qcyc7XG5pbXBvcnQgQm9va2VkIGZyb20gJy4vYWlyX3RyYWZmaWMvYm9va2VkLmpzJztcbmltcG9ydCBCdXNpZXN0UGVyaW9kIGZyb20gJy4vYWlyX3RyYWZmaWMvYnVzaWVzdF9wZXJpb2QuanMnO1xuXG4vKipcbiAqIEEgbmFtZXNwYWNlZCBjbGllbnQgZm9yIHRoZVxuICogYC92MS90cmF2ZWwvYW5hbHl0aWNzL2Fpci10cmFmZmljYCBlbmRwb2ludHNcbiAqXG4gKiBBY2Nlc3MgdmlhIHRoZSB7QGxpbmsgQW1hZGV1c30gb2JqZWN0XG4gKlxuICogYGBganNcbiAqIGxldCBhbWFkZXVzID0gbmV3IEFtYWRldXMoKTtcbiAqIGFtYWRldXMudHJhdmVsLmFuYWx5dGljcy5haXJUcmFmZmljO1xuICogYGBgXG4gKlxuICogQHBhcmFtIHtDbGllbnR9IGNsaWVudFxuICovXG5jbGFzcyBBaXJUcmFmZmljIHtcbiAgY29uc3RydWN0b3IoY2xpZW50KSB7XG4gICAgdGhpcy5jbGllbnQgICA9IGNsaWVudDtcbiAgICB0aGlzLnRyYXZlbGVkID0gbmV3IFRyYXZlbGVkKGNsaWVudCk7XG4gICAgdGhpcy5ib29rZWQgPSBuZXcgQm9va2VkKGNsaWVudCk7XG4gICAgdGhpcy5idXNpZXN0UGVyaW9kID0gbmV3IEJ1c2llc3RQZXJpb2QoY2xpZW50KTtcbiAgfVxuXG59XG5cbmV4cG9ydCBkZWZhdWx0IEFpclRyYWZmaWM7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxJQUFBQSxTQUFBLEdBQUFDLHNCQUFBLENBQUFDLE9BQUE7QUFDQSxJQUFBQyxPQUFBLEdBQUFGLHNCQUFBLENBQUFDLE9BQUE7QUFDQSxJQUFBRSxlQUFBLEdBQUFILHNCQUFBLENBQUFDLE9BQUE7QUFBNEQsU0FBQUQsdUJBQUFJLENBQUEsV0FBQUEsQ0FBQSxJQUFBQSxDQUFBLENBQUFDLFVBQUEsR0FBQUQsQ0FBQSxnQkFBQUEsQ0FBQTtBQUFBLFNBQUFFLGtCQUFBRixDQUFBLEVBQUFHLENBQUEsYUFBQUMsQ0FBQSxNQUFBQSxDQUFBLEdBQUFELENBQUEsQ0FBQUUsTUFBQSxFQUFBRCxDQUFBLFVBQUFFLENBQUEsR0FBQUgsQ0FBQSxDQUFBQyxDQUFBLEdBQUFFLENBQUEsQ0FBQUMsVUFBQSxHQUFBRCxDQUFBLENBQUFDLFVBQUEsUUFBQUQsQ0FBQSxDQUFBRSxZQUFBLGtCQUFBRixDQUFBLEtBQUFBLENBQUEsQ0FBQUcsUUFBQSxRQUFBQyxNQUFBLENBQUFDLGNBQUEsQ0FBQVgsQ0FBQSxFQUFBWSxjQUFBLENBQUFOLENBQUEsQ0FBQU8sR0FBQSxHQUFBUCxDQUFBO0FBQUEsU0FBQVEsYUFBQWQsQ0FBQSxFQUFBRyxDQUFBLEVBQUFDLENBQUEsV0FBQUQsQ0FBQSxJQUFBRCxpQkFBQSxDQUFBRixDQUFBLENBQUFlLFNBQUEsRUFBQVosQ0FBQSxHQUFBQyxDQUFBLElBQUFGLGlCQUFBLENBQUFGLENBQUEsRUFBQUksQ0FBQSxHQUFBTSxNQUFBLENBQUFDLGNBQUEsQ0FBQVgsQ0FBQSxpQkFBQVMsUUFBQSxTQUFBVCxDQUFBO0FBQUEsU0FBQVksZUFBQVIsQ0FBQSxRQUFBWSxDQUFBLEdBQUFDLFlBQUEsQ0FBQWIsQ0FBQSxnQ0FBQWMsT0FBQSxDQUFBRixDQUFBLElBQUFBLENBQUEsR0FBQUEsQ0FBQTtBQUFBLFNBQUFDLGFBQUFiLENBQUEsRUFBQUQsQ0FBQSxvQkFBQWUsT0FBQSxDQUFBZCxDQUFBLE1BQUFBLENBQUEsU0FBQUEsQ0FBQSxNQUFBSixDQUFBLEdBQUFJLENBQUEsQ0FBQWUsTUFBQSxDQUFBQyxXQUFBLGtCQUFBcEIsQ0FBQSxRQUFBZ0IsQ0FBQSxHQUFBaEIsQ0FBQSxDQUFBcUIsSUFBQSxDQUFBakIsQ0FBQSxFQUFBRCxDQUFBLGdDQUFBZSxPQUFBLENBQUFGLENBQUEsVUFBQUEsQ0FBQSxZQUFBTSxTQUFBLHlFQUFBbkIsQ0FBQSxHQUFBb0IsTUFBQSxHQUFBQyxNQUFBLEVBQUFwQixDQUFBO0FBQUEsU0FBQXFCLGdCQUFBQyxDQUFBLEVBQUFDLENBQUEsVUFBQUQsQ0FBQSxZQUFBQyxDQUFBLGFBQUFMLFNBQUE7QUFFNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFaQSxJQWFNTSxVQUFVLGdCQUFBZCxZQUFBLENBQ2QsU0FBQWMsV0FBWUMsTUFBTSxFQUFFO0VBQUFKLGVBQUEsT0FBQUcsVUFBQTtFQUNsQixJQUFJLENBQUNDLE1BQU0sR0FBS0EsTUFBTTtFQUN0QixJQUFJLENBQUNDLFFBQVEsR0FBRyxJQUFJQyxvQkFBUSxDQUFDRixNQUFNLENBQUM7RUFDcEMsSUFBSSxDQUFDRyxNQUFNLEdBQUcsSUFBSUMsa0JBQU0sQ0FBQ0osTUFBTSxDQUFDO0VBQ2hDLElBQUksQ0FBQ0ssYUFBYSxHQUFHLElBQUlDLDBCQUFhLENBQUNOLE1BQU0sQ0FBQztBQUNoRCxDQUFDO0FBQUEsSUFBQU8sUUFBQSxHQUFBQyxPQUFBLGNBSVlULFVBQVU7QUFBQVUsTUFBQSxDQUFBRCxPQUFBLEdBQUFBLE9BQUEsQ0FBQUUsT0FBQSIsImlnbm9yZUxpc3QiOltdfQ==
}),
"[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/travel/analytics.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _air_traffic = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/travel/analytics/air_traffic.js [app-route] (ecmascript)"));
function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        "default": e
    };
}
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
/**
 * A namespaced client for the
 * `/v2/travel/analytics` endpoints
 *
 * Access via the {Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.travel.analytics;
 * ```
 *
 * @param {Client} client
 * @property {Urls} urls
 * @protected
 */ var Analytics = /*#__PURE__*/ _createClass(function Analytics(client) {
    _classCallCheck(this, Analytics);
    this.client = client;
    this.airTraffic = new _air_traffic["default"](client);
});
var _default = exports["default"] = Analytics;
module.exports = exports.default; //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYWlyX3RyYWZmaWMiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsImUiLCJfX2VzTW9kdWxlIiwiX2RlZmluZVByb3BlcnRpZXMiLCJyIiwidCIsImxlbmd0aCIsIm8iLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIl90b1Byb3BlcnR5S2V5Iiwia2V5IiwiX2NyZWF0ZUNsYXNzIiwicHJvdG90eXBlIiwiaSIsIl90b1ByaW1pdGl2ZSIsIl90eXBlb2YiLCJTeW1ib2wiLCJ0b1ByaW1pdGl2ZSIsImNhbGwiLCJUeXBlRXJyb3IiLCJTdHJpbmciLCJOdW1iZXIiLCJfY2xhc3NDYWxsQ2hlY2siLCJhIiwibiIsIkFuYWx5dGljcyIsImNsaWVudCIsImFpclRyYWZmaWMiLCJBaXJUcmFmZmljIiwiX2RlZmF1bHQiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmYXVsdCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hbWFkZXVzL25hbWVzcGFjZXMvdHJhdmVsL2FuYWx5dGljcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQWlyVHJhZmZpYyAgZnJvbSAnLi9hbmFseXRpY3MvYWlyX3RyYWZmaWMnO1xuXG4vKipcbiAqIEEgbmFtZXNwYWNlZCBjbGllbnQgZm9yIHRoZVxuICogYC92Mi90cmF2ZWwvYW5hbHl0aWNzYCBlbmRwb2ludHNcbiAqXG4gKiBBY2Nlc3MgdmlhIHRoZSB7QW1hZGV1c30gb2JqZWN0XG4gKlxuICogYGBganNcbiAqIGxldCBhbWFkZXVzID0gbmV3IEFtYWRldXMoKTtcbiAqIGFtYWRldXMudHJhdmVsLmFuYWx5dGljcztcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7Q2xpZW50fSBjbGllbnRcbiAqIEBwcm9wZXJ0eSB7VXJsc30gdXJsc1xuICogQHByb3RlY3RlZFxuICovXG5jbGFzcyBBbmFseXRpY3Mge1xuICBjb25zdHJ1Y3RvcihjbGllbnQpIHtcbiAgICB0aGlzLmNsaWVudCAgICAgICAgPSBjbGllbnQ7XG4gICAgdGhpcy5haXJUcmFmZmljICAgID0gbmV3IEFpclRyYWZmaWMoY2xpZW50KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBbmFseXRpY3M7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxJQUFBQSxZQUFBLEdBQUFDLHNCQUFBLENBQUFDLE9BQUE7QUFBa0QsU0FBQUQsdUJBQUFFLENBQUEsV0FBQUEsQ0FBQSxJQUFBQSxDQUFBLENBQUFDLFVBQUEsR0FBQUQsQ0FBQSxnQkFBQUEsQ0FBQTtBQUFBLFNBQUFFLGtCQUFBRixDQUFBLEVBQUFHLENBQUEsYUFBQUMsQ0FBQSxNQUFBQSxDQUFBLEdBQUFELENBQUEsQ0FBQUUsTUFBQSxFQUFBRCxDQUFBLFVBQUFFLENBQUEsR0FBQUgsQ0FBQSxDQUFBQyxDQUFBLEdBQUFFLENBQUEsQ0FBQUMsVUFBQSxHQUFBRCxDQUFBLENBQUFDLFVBQUEsUUFBQUQsQ0FBQSxDQUFBRSxZQUFBLGtCQUFBRixDQUFBLEtBQUFBLENBQUEsQ0FBQUcsUUFBQSxRQUFBQyxNQUFBLENBQUFDLGNBQUEsQ0FBQVgsQ0FBQSxFQUFBWSxjQUFBLENBQUFOLENBQUEsQ0FBQU8sR0FBQSxHQUFBUCxDQUFBO0FBQUEsU0FBQVEsYUFBQWQsQ0FBQSxFQUFBRyxDQUFBLEVBQUFDLENBQUEsV0FBQUQsQ0FBQSxJQUFBRCxpQkFBQSxDQUFBRixDQUFBLENBQUFlLFNBQUEsRUFBQVosQ0FBQSxHQUFBQyxDQUFBLElBQUFGLGlCQUFBLENBQUFGLENBQUEsRUFBQUksQ0FBQSxHQUFBTSxNQUFBLENBQUFDLGNBQUEsQ0FBQVgsQ0FBQSxpQkFBQVMsUUFBQSxTQUFBVCxDQUFBO0FBQUEsU0FBQVksZUFBQVIsQ0FBQSxRQUFBWSxDQUFBLEdBQUFDLFlBQUEsQ0FBQWIsQ0FBQSxnQ0FBQWMsT0FBQSxDQUFBRixDQUFBLElBQUFBLENBQUEsR0FBQUEsQ0FBQTtBQUFBLFNBQUFDLGFBQUFiLENBQUEsRUFBQUQsQ0FBQSxvQkFBQWUsT0FBQSxDQUFBZCxDQUFBLE1BQUFBLENBQUEsU0FBQUEsQ0FBQSxNQUFBSixDQUFBLEdBQUFJLENBQUEsQ0FBQWUsTUFBQSxDQUFBQyxXQUFBLGtCQUFBcEIsQ0FBQSxRQUFBZ0IsQ0FBQSxHQUFBaEIsQ0FBQSxDQUFBcUIsSUFBQSxDQUFBakIsQ0FBQSxFQUFBRCxDQUFBLGdDQUFBZSxPQUFBLENBQUFGLENBQUEsVUFBQUEsQ0FBQSxZQUFBTSxTQUFBLHlFQUFBbkIsQ0FBQSxHQUFBb0IsTUFBQSxHQUFBQyxNQUFBLEVBQUFwQixDQUFBO0FBQUEsU0FBQXFCLGdCQUFBQyxDQUFBLEVBQUFDLENBQUEsVUFBQUQsQ0FBQSxZQUFBQyxDQUFBLGFBQUFMLFNBQUE7QUFFbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZEEsSUFlTU0sU0FBUyxnQkFBQWQsWUFBQSxDQUNiLFNBQUFjLFVBQVlDLE1BQU0sRUFBRTtFQUFBSixlQUFBLE9BQUFHLFNBQUE7RUFDbEIsSUFBSSxDQUFDQyxNQUFNLEdBQVVBLE1BQU07RUFDM0IsSUFBSSxDQUFDQyxVQUFVLEdBQU0sSUFBSUMsdUJBQVUsQ0FBQ0YsTUFBTSxDQUFDO0FBQzdDLENBQUM7QUFBQSxJQUFBRyxRQUFBLEdBQUFDLE9BQUEsY0FHWUwsU0FBUztBQUFBTSxNQUFBLENBQUFELE9BQUEsR0FBQUEsT0FBQSxDQUFBRSxPQUFBIiwiaWdub3JlTGlzdCI6W119
}),
"[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/travel/predictions/trip_purpose.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
/**
 * A namespaced client for the
 * `/v1/travel/predictions/trip-purpose` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.travel.predictions.tripPurpose;
 * ```
 *
 * @param {Client} client
 */ var TripPurpose = /*#__PURE__*/ function() {
    function TripPurpose(client) {
        _classCallCheck(this, TripPurpose);
        this.client = client;
    }
    /**
   * Forecast traveler purpose, Business or Leisure, together with the probability in the context of search & shopping.
   *
   * @param {Object} params
   * @param {string} params.originLocationCode city/airport IATA code from which the traveler will depart, e.g. BOS for Boston
   * @param {string} params.destinationLocationCode city/airport IATA code to which the traveler is going, e.g. PAR for Paris
   * @param {string} params.departureDate the date on which the traveler will depart from the origin to go to the destination. Dates are specified in the ISO 8601 YYYY-MM-DD format, e.g. 2017-12-25
   * @param {string} params.returnDate the date on which the traveler will depart from the destination to return to the origin. Dates are specified in the ISO 8601 YYYY-MM-DD format, e.g. 2018-02-28
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * Forecast traveler purpose for a NYC-MAD round-trip between 2020-08-01 & 2020-08-12.
   *
   * ```js
   * amadeus.travel.predictions.tripPurpose.get({
   *    originLocationCode: 'NYC',
   *    destinationLocationCode: 'MAD',
   *    departureDate: '2020-08-01',
   *    returnDate: '2020-08-12'
   * })
   * ```
   */ return _createClass(TripPurpose, [
        {
            key: "get",
            value: function get() {
                var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                return this.client.get('/v1/travel/predictions/trip-purpose', params);
            }
        }
    ]);
}();
var _default = exports["default"] = TripPurpose;
module.exports = exports.default; //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJUcmlwUHVycG9zZSIsImNsaWVudCIsIl9jbGFzc0NhbGxDaGVjayIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiZ2V0IiwicGFyYW1zIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiX2RlZmF1bHQiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmYXVsdCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hbWFkZXVzL25hbWVzcGFjZXMvdHJhdmVsL3ByZWRpY3Rpb25zL3RyaXBfcHVycG9zZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEEgbmFtZXNwYWNlZCBjbGllbnQgZm9yIHRoZVxuICogYC92MS90cmF2ZWwvcHJlZGljdGlvbnMvdHJpcC1wdXJwb3NlYCBlbmRwb2ludHNcbiAqXG4gKiBBY2Nlc3MgdmlhIHRoZSB7QGxpbmsgQW1hZGV1c30gb2JqZWN0XG4gKlxuICogYGBganNcbiAqIGxldCBhbWFkZXVzID0gbmV3IEFtYWRldXMoKTtcbiAqIGFtYWRldXMudHJhdmVsLnByZWRpY3Rpb25zLnRyaXBQdXJwb3NlO1xuICogYGBgXG4gKlxuICogQHBhcmFtIHtDbGllbnR9IGNsaWVudFxuICovXG5jbGFzcyBUcmlwUHVycG9zZSB7XG4gIGNvbnN0cnVjdG9yKGNsaWVudCkge1xuICAgIHRoaXMuY2xpZW50ID0gY2xpZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIEZvcmVjYXN0IHRyYXZlbGVyIHB1cnBvc2UsIEJ1c2luZXNzIG9yIExlaXN1cmUsIHRvZ2V0aGVyIHdpdGggdGhlIHByb2JhYmlsaXR5IGluIHRoZSBjb250ZXh0IG9mIHNlYXJjaCAmIHNob3BwaW5nLlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMub3JpZ2luTG9jYXRpb25Db2RlIGNpdHkvYWlycG9ydCBJQVRBIGNvZGUgZnJvbSB3aGljaCB0aGUgdHJhdmVsZXIgd2lsbCBkZXBhcnQsIGUuZy4gQk9TIGZvciBCb3N0b25cbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtcy5kZXN0aW5hdGlvbkxvY2F0aW9uQ29kZSBjaXR5L2FpcnBvcnQgSUFUQSBjb2RlIHRvIHdoaWNoIHRoZSB0cmF2ZWxlciBpcyBnb2luZywgZS5nLiBQQVIgZm9yIFBhcmlzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMuZGVwYXJ0dXJlRGF0ZSB0aGUgZGF0ZSBvbiB3aGljaCB0aGUgdHJhdmVsZXIgd2lsbCBkZXBhcnQgZnJvbSB0aGUgb3JpZ2luIHRvIGdvIHRvIHRoZSBkZXN0aW5hdGlvbi4gRGF0ZXMgYXJlIHNwZWNpZmllZCBpbiB0aGUgSVNPIDg2MDEgWVlZWS1NTS1ERCBmb3JtYXQsIGUuZy4gMjAxNy0xMi0yNVxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zLnJldHVybkRhdGUgdGhlIGRhdGUgb24gd2hpY2ggdGhlIHRyYXZlbGVyIHdpbGwgZGVwYXJ0IGZyb20gdGhlIGRlc3RpbmF0aW9uIHRvIHJldHVybiB0byB0aGUgb3JpZ2luLiBEYXRlcyBhcmUgc3BlY2lmaWVkIGluIHRoZSBJU08gODYwMSBZWVlZLU1NLUREIGZvcm1hdCwgZS5nLiAyMDE4LTAyLTI4XG4gICAqIEByZXR1cm4ge1Byb21pc2UuPFJlc3BvbnNlLFJlc3BvbnNlRXJyb3I+fSBhIFByb21pc2VcbiAgICpcbiAgICogRm9yZWNhc3QgdHJhdmVsZXIgcHVycG9zZSBmb3IgYSBOWUMtTUFEIHJvdW5kLXRyaXAgYmV0d2VlbiAyMDIwLTA4LTAxICYgMjAyMC0wOC0xMi5cbiAgICpcbiAgICogYGBganNcbiAgICogYW1hZGV1cy50cmF2ZWwucHJlZGljdGlvbnMudHJpcFB1cnBvc2UuZ2V0KHtcbiAgICogICAgb3JpZ2luTG9jYXRpb25Db2RlOiAnTllDJyxcbiAgICogICAgZGVzdGluYXRpb25Mb2NhdGlvbkNvZGU6ICdNQUQnLFxuICAgKiAgICBkZXBhcnR1cmVEYXRlOiAnMjAyMC0wOC0wMScsXG4gICAqICAgIHJldHVybkRhdGU6ICcyMDIwLTA4LTEyJ1xuICAgKiB9KVxuICAgKiBgYGBcbiAgICovXG4gIGdldChwYXJhbXMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmNsaWVudC5nZXQoJy92MS90cmF2ZWwvcHJlZGljdGlvbnMvdHJpcC1wdXJwb3NlJywgcGFyYW1zKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUcmlwUHVycG9zZTsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWkEsSUFhTUEsV0FBVztFQUNmLFNBQUFBLFlBQVlDLE1BQU0sRUFBRTtJQUFBQyxlQUFBLE9BQUFGLFdBQUE7SUFDbEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBLE1BQU07RUFDdEI7O0VBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBcEJFLE9BQUFFLFlBQUEsQ0FBQUgsV0FBQTtJQUFBSSxHQUFBO0lBQUFDLEtBQUEsRUFxQkEsU0FBQUMsR0FBR0EsQ0FBQSxFQUFjO01BQUEsSUFBYkMsTUFBTSxHQUFBQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBRyxDQUFDLENBQUM7TUFDYixPQUFPLElBQUksQ0FBQ1AsTUFBTSxDQUFDSyxHQUFHLENBQUMscUNBQXFDLEVBQUVDLE1BQU0sQ0FBQztJQUN2RTtFQUFDO0FBQUE7QUFBQSxJQUFBSSxRQUFBLEdBQUFDLE9BQUEsY0FHWVosV0FBVztBQUFBYSxNQUFBLENBQUFELE9BQUEsR0FBQUEsT0FBQSxDQUFBRSxPQUFBIiwiaWdub3JlTGlzdCI6W119
}),
"[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/travel/predictions/flight_delay.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
/**
 * A namespaced client for the
 * `/v1/travel/predictions/flight-delay` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.travel.predictions.flightDelay;
 * ```
 *
 * @param {Client} client
 */ var FlightDelay = /*#__PURE__*/ function() {
    function FlightDelay(client) {
        _classCallCheck(this, FlightDelay);
        this.client = client;
    }
    /**
   * This machine learning API is based on a prediction model that takes the input of
   * the user -time, carrier, airport and aircraft information- and
   * predict the segment where the flight is likely to lay.
   *
   * @param {Object} params
   * @param {string} params.originLocationCode city/airport IATA code to which the traveler is departing, e.g. PAR for Paris
   * @param {string} params.destinationLocationCode city/airport IATA code to which the traveler is departing, e.g. PAR for Paris
   * @param {string} params.departureDate the date on which the traveler will depart from the origin to go to the destination. Dates are specified in the ISO 8601 YYYY-MM-DD format, e.g. 2019-12-25
   * @param {string} params.departureTime local time relative to originLocationCode on which the traveler will depart from the origin. Time respects ISO 8601 standard. e.g. 13:22:00
   * @param {string} params.arrivalDate the date on which the traveler will arrive to the destination from the origin. Dates are specified in the ISO 8601 YYYY-MM-DD format, e.g. 2019-12-25
   * @param {string} params.arrivalTime local time relative to destinationLocationCode on which the traveler will arrive to destination. Time respects ISO 8601 standard. e.g. 13:22:00
   * @param {string} params.aircraftCode IATA aircraft code (http://www.flugzeuginfo.net/table_accodes_iata_en.php)
   * @param {string} params.carrierCode airline / carrier code
   * @param {string} params.flightNumber flight number as assigned by the carrier
   * @param {string} params.duration flight duration in ISO8601 PnYnMnDTnHnMnS format, e.g. PT2H10M
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * Predict the segment where LH1009 (BRU-FRA) is likely to lay on 2020-01-14
   *
   * ```js
   * amadeus.travel.predictions.flightDelay.get({
   *    originLocationCode: 'BRU',
   *    destinationLocationCode: 'FRA',
   *    departureDate: '2020-01-14',
   *    departureTime: '11:05:00',
   *    arrivalDate: '2020-01-14',
   *    arrivalTime: '12:10:00',
   *    aircraftCode: '32A',
   *    carrierCode: 'LH',
   *    flightNumber: '1009',
   *    duration: 'PT1H05M'
   * })
   * ```
   */ return _createClass(FlightDelay, [
        {
            key: "get",
            value: function get() {
                var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                return this.client.get('/v1/travel/predictions/flight-delay', params);
            }
        }
    ]);
}();
var _default = exports["default"] = FlightDelay;
module.exports = exports.default; //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJGbGlnaHREZWxheSIsImNsaWVudCIsIl9jbGFzc0NhbGxDaGVjayIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwiZ2V0IiwicGFyYW1zIiwiYXJndW1lbnRzIiwibGVuZ3RoIiwidW5kZWZpbmVkIiwiX2RlZmF1bHQiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmYXVsdCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hbWFkZXVzL25hbWVzcGFjZXMvdHJhdmVsL3ByZWRpY3Rpb25zL2ZsaWdodF9kZWxheS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEEgbmFtZXNwYWNlZCBjbGllbnQgZm9yIHRoZVxuICogYC92MS90cmF2ZWwvcHJlZGljdGlvbnMvZmxpZ2h0LWRlbGF5YCBlbmRwb2ludHNcbiAqXG4gKiBBY2Nlc3MgdmlhIHRoZSB7QGxpbmsgQW1hZGV1c30gb2JqZWN0XG4gKlxuICogYGBganNcbiAqIGxldCBhbWFkZXVzID0gbmV3IEFtYWRldXMoKTtcbiAqIGFtYWRldXMudHJhdmVsLnByZWRpY3Rpb25zLmZsaWdodERlbGF5O1xuICogYGBgXG4gKlxuICogQHBhcmFtIHtDbGllbnR9IGNsaWVudFxuICovXG5jbGFzcyBGbGlnaHREZWxheSB7XG4gIGNvbnN0cnVjdG9yKGNsaWVudCkge1xuICAgIHRoaXMuY2xpZW50ID0gY2xpZW50O1xuICB9XG5cbiAgLyoqXG4gICAqIFRoaXMgbWFjaGluZSBsZWFybmluZyBBUEkgaXMgYmFzZWQgb24gYSBwcmVkaWN0aW9uIG1vZGVsIHRoYXQgdGFrZXMgdGhlIGlucHV0IG9mXG4gICAqIHRoZSB1c2VyIC10aW1lLCBjYXJyaWVyLCBhaXJwb3J0IGFuZCBhaXJjcmFmdCBpbmZvcm1hdGlvbi0gYW5kXG4gICAqIHByZWRpY3QgdGhlIHNlZ21lbnQgd2hlcmUgdGhlIGZsaWdodCBpcyBsaWtlbHkgdG8gbGF5LlxuICAgKlxuICAgKiBAcGFyYW0ge09iamVjdH0gcGFyYW1zXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMub3JpZ2luTG9jYXRpb25Db2RlIGNpdHkvYWlycG9ydCBJQVRBIGNvZGUgdG8gd2hpY2ggdGhlIHRyYXZlbGVyIGlzIGRlcGFydGluZywgZS5nLiBQQVIgZm9yIFBhcmlzXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMuZGVzdGluYXRpb25Mb2NhdGlvbkNvZGUgY2l0eS9haXJwb3J0IElBVEEgY29kZSB0byB3aGljaCB0aGUgdHJhdmVsZXIgaXMgZGVwYXJ0aW5nLCBlLmcuIFBBUiBmb3IgUGFyaXNcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtcy5kZXBhcnR1cmVEYXRlIHRoZSBkYXRlIG9uIHdoaWNoIHRoZSB0cmF2ZWxlciB3aWxsIGRlcGFydCBmcm9tIHRoZSBvcmlnaW4gdG8gZ28gdG8gdGhlIGRlc3RpbmF0aW9uLiBEYXRlcyBhcmUgc3BlY2lmaWVkIGluIHRoZSBJU08gODYwMSBZWVlZLU1NLUREIGZvcm1hdCwgZS5nLiAyMDE5LTEyLTI1XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMuZGVwYXJ0dXJlVGltZSBsb2NhbCB0aW1lIHJlbGF0aXZlIHRvIG9yaWdpbkxvY2F0aW9uQ29kZSBvbiB3aGljaCB0aGUgdHJhdmVsZXIgd2lsbCBkZXBhcnQgZnJvbSB0aGUgb3JpZ2luLiBUaW1lIHJlc3BlY3RzIElTTyA4NjAxIHN0YW5kYXJkLiBlLmcuIDEzOjIyOjAwXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMuYXJyaXZhbERhdGUgdGhlIGRhdGUgb24gd2hpY2ggdGhlIHRyYXZlbGVyIHdpbGwgYXJyaXZlIHRvIHRoZSBkZXN0aW5hdGlvbiBmcm9tIHRoZSBvcmlnaW4uIERhdGVzIGFyZSBzcGVjaWZpZWQgaW4gdGhlIElTTyA4NjAxIFlZWVktTU0tREQgZm9ybWF0LCBlLmcuIDIwMTktMTItMjVcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtcy5hcnJpdmFsVGltZSBsb2NhbCB0aW1lIHJlbGF0aXZlIHRvIGRlc3RpbmF0aW9uTG9jYXRpb25Db2RlIG9uIHdoaWNoIHRoZSB0cmF2ZWxlciB3aWxsIGFycml2ZSB0byBkZXN0aW5hdGlvbi4gVGltZSByZXNwZWN0cyBJU08gODYwMSBzdGFuZGFyZC4gZS5nLiAxMzoyMjowMFxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zLmFpcmNyYWZ0Q29kZSBJQVRBIGFpcmNyYWZ0IGNvZGUgKGh0dHA6Ly93d3cuZmx1Z3pldWdpbmZvLm5ldC90YWJsZV9hY2NvZGVzX2lhdGFfZW4ucGhwKVxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zLmNhcnJpZXJDb2RlIGFpcmxpbmUgLyBjYXJyaWVyIGNvZGVcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtcy5mbGlnaHROdW1iZXIgZmxpZ2h0IG51bWJlciBhcyBhc3NpZ25lZCBieSB0aGUgY2FycmllclxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zLmR1cmF0aW9uIGZsaWdodCBkdXJhdGlvbiBpbiBJU084NjAxIFBuWW5NbkRUbkhuTW5TIGZvcm1hdCwgZS5nLiBQVDJIMTBNXG4gICAqIEByZXR1cm4ge1Byb21pc2UuPFJlc3BvbnNlLFJlc3BvbnNlRXJyb3I+fSBhIFByb21pc2VcbiAgICpcbiAgICogUHJlZGljdCB0aGUgc2VnbWVudCB3aGVyZSBMSDEwMDkgKEJSVS1GUkEpIGlzIGxpa2VseSB0byBsYXkgb24gMjAyMC0wMS0xNFxuICAgKlxuICAgKiBgYGBqc1xuICAgKiBhbWFkZXVzLnRyYXZlbC5wcmVkaWN0aW9ucy5mbGlnaHREZWxheS5nZXQoe1xuICAgKiAgICBvcmlnaW5Mb2NhdGlvbkNvZGU6ICdCUlUnLFxuICAgKiAgICBkZXN0aW5hdGlvbkxvY2F0aW9uQ29kZTogJ0ZSQScsXG4gICAqICAgIGRlcGFydHVyZURhdGU6ICcyMDIwLTAxLTE0JyxcbiAgICogICAgZGVwYXJ0dXJlVGltZTogJzExOjA1OjAwJyxcbiAgICogICAgYXJyaXZhbERhdGU6ICcyMDIwLTAxLTE0JyxcbiAgICogICAgYXJyaXZhbFRpbWU6ICcxMjoxMDowMCcsXG4gICAqICAgIGFpcmNyYWZ0Q29kZTogJzMyQScsXG4gICAqICAgIGNhcnJpZXJDb2RlOiAnTEgnLFxuICAgKiAgICBmbGlnaHROdW1iZXI6ICcxMDA5JyxcbiAgICogICAgZHVyYXRpb246ICdQVDFIMDVNJ1xuICAgKiB9KVxuICAgKiBgYGBcbiAgICovXG4gIGdldChwYXJhbXMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmNsaWVudC5nZXQoJy92MS90cmF2ZWwvcHJlZGljdGlvbnMvZmxpZ2h0LWRlbGF5JywgcGFyYW1zKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBGbGlnaHREZWxheTsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWkEsSUFhTUEsV0FBVztFQUNmLFNBQUFBLFlBQVlDLE1BQU0sRUFBRTtJQUFBQyxlQUFBLE9BQUFGLFdBQUE7SUFDbEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBLE1BQU07RUFDdEI7O0VBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQWxDRSxPQUFBRSxZQUFBLENBQUFILFdBQUE7SUFBQUksR0FBQTtJQUFBQyxLQUFBLEVBbUNBLFNBQUFDLEdBQUdBLENBQUEsRUFBYztNQUFBLElBQWJDLE1BQU0sR0FBQUMsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUcsQ0FBQyxDQUFDO01BQ2IsT0FBTyxJQUFJLENBQUNQLE1BQU0sQ0FBQ0ssR0FBRyxDQUFDLHFDQUFxQyxFQUFFQyxNQUFNLENBQUM7SUFDdkU7RUFBQztBQUFBO0FBQUEsSUFBQUksUUFBQSxHQUFBQyxPQUFBLGNBR1laLFdBQVc7QUFBQWEsTUFBQSxDQUFBRCxPQUFBLEdBQUFBLE9BQUEsQ0FBQUUsT0FBQSIsImlnbm9yZUxpc3QiOltdfQ==
}),
"[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/travel/predictions.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _trip_purpose = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/travel/predictions/trip_purpose.js [app-route] (ecmascript)"));
var _flight_delay = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/travel/predictions/flight_delay.js [app-route] (ecmascript)"));
function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        "default": e
    };
}
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
/**
 * A namespaced client for the
 * `/v1/travel/predictions/trip-purpose` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.travel.predictions;
 * ```
 *
 * @param {Client} client
 * @property {TripPurpose} tripPurpose
 * @property {FlightDelay} flightDelay
 */ var Predictions = /*#__PURE__*/ _createClass(function Predictions(client) {
    _classCallCheck(this, Predictions);
    this.client = client;
    this.tripPurpose = new _trip_purpose["default"](client);
    this.flightDelay = new _flight_delay["default"](client);
});
var _default = exports["default"] = Predictions;
module.exports = exports.default; //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfdHJpcF9wdXJwb3NlIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfZmxpZ2h0X2RlbGF5IiwiZSIsIl9fZXNNb2R1bGUiLCJfZGVmaW5lUHJvcGVydGllcyIsInIiLCJ0IiwibGVuZ3RoIiwibyIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX3RvUHJvcGVydHlLZXkiLCJrZXkiLCJfY3JlYXRlQ2xhc3MiLCJwcm90b3R5cGUiLCJpIiwiX3RvUHJpbWl0aXZlIiwiX3R5cGVvZiIsIlN5bWJvbCIsInRvUHJpbWl0aXZlIiwiY2FsbCIsIlR5cGVFcnJvciIsIlN0cmluZyIsIk51bWJlciIsIl9jbGFzc0NhbGxDaGVjayIsImEiLCJuIiwiUHJlZGljdGlvbnMiLCJjbGllbnQiLCJ0cmlwUHVycG9zZSIsIlRyaXBQdXJwb3NlIiwiZmxpZ2h0RGVsYXkiLCJGbGlnaHREZWxheSIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmF1bHQiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYW1hZGV1cy9uYW1lc3BhY2VzL3RyYXZlbC9wcmVkaWN0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJpcFB1cnBvc2UgZnJvbSAnLi9wcmVkaWN0aW9ucy90cmlwX3B1cnBvc2UnO1xuaW1wb3J0IEZsaWdodERlbGF5IGZyb20gJy4vcHJlZGljdGlvbnMvZmxpZ2h0X2RlbGF5JztcblxuLyoqXG4gKiBBIG5hbWVzcGFjZWQgY2xpZW50IGZvciB0aGVcbiAqIGAvdjEvdHJhdmVsL3ByZWRpY3Rpb25zL3RyaXAtcHVycG9zZWAgZW5kcG9pbnRzXG4gKlxuICogQWNjZXNzIHZpYSB0aGUge0BsaW5rIEFtYWRldXN9IG9iamVjdFxuICpcbiAqIGBgYGpzXG4gKiBsZXQgYW1hZGV1cyA9IG5ldyBBbWFkZXVzKCk7XG4gKiBhbWFkZXVzLnRyYXZlbC5wcmVkaWN0aW9ucztcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7Q2xpZW50fSBjbGllbnRcbiAqIEBwcm9wZXJ0eSB7VHJpcFB1cnBvc2V9IHRyaXBQdXJwb3NlXG4gKiBAcHJvcGVydHkge0ZsaWdodERlbGF5fSBmbGlnaHREZWxheVxuICovXG5jbGFzcyBQcmVkaWN0aW9ucyB7XG4gIGNvbnN0cnVjdG9yKGNsaWVudCkge1xuICAgIHRoaXMuY2xpZW50ID0gY2xpZW50O1xuICAgIHRoaXMudHJpcFB1cnBvc2UgPSBuZXcgVHJpcFB1cnBvc2UoY2xpZW50KTtcbiAgICB0aGlzLmZsaWdodERlbGF5ID0gbmV3IEZsaWdodERlbGF5KGNsaWVudCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUHJlZGljdGlvbnM7Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsSUFBQUEsYUFBQSxHQUFBQyxzQkFBQSxDQUFBQyxPQUFBO0FBQ0EsSUFBQUMsYUFBQSxHQUFBRixzQkFBQSxDQUFBQyxPQUFBO0FBQXFELFNBQUFELHVCQUFBRyxDQUFBLFdBQUFBLENBQUEsSUFBQUEsQ0FBQSxDQUFBQyxVQUFBLEdBQUFELENBQUEsZ0JBQUFBLENBQUE7QUFBQSxTQUFBRSxrQkFBQUYsQ0FBQSxFQUFBRyxDQUFBLGFBQUFDLENBQUEsTUFBQUEsQ0FBQSxHQUFBRCxDQUFBLENBQUFFLE1BQUEsRUFBQUQsQ0FBQSxVQUFBRSxDQUFBLEdBQUFILENBQUEsQ0FBQUMsQ0FBQSxHQUFBRSxDQUFBLENBQUFDLFVBQUEsR0FBQUQsQ0FBQSxDQUFBQyxVQUFBLFFBQUFELENBQUEsQ0FBQUUsWUFBQSxrQkFBQUYsQ0FBQSxLQUFBQSxDQUFBLENBQUFHLFFBQUEsUUFBQUMsTUFBQSxDQUFBQyxjQUFBLENBQUFYLENBQUEsRUFBQVksY0FBQSxDQUFBTixDQUFBLENBQUFPLEdBQUEsR0FBQVAsQ0FBQTtBQUFBLFNBQUFRLGFBQUFkLENBQUEsRUFBQUcsQ0FBQSxFQUFBQyxDQUFBLFdBQUFELENBQUEsSUFBQUQsaUJBQUEsQ0FBQUYsQ0FBQSxDQUFBZSxTQUFBLEVBQUFaLENBQUEsR0FBQUMsQ0FBQSxJQUFBRixpQkFBQSxDQUFBRixDQUFBLEVBQUFJLENBQUEsR0FBQU0sTUFBQSxDQUFBQyxjQUFBLENBQUFYLENBQUEsaUJBQUFTLFFBQUEsU0FBQVQsQ0FBQTtBQUFBLFNBQUFZLGVBQUFSLENBQUEsUUFBQVksQ0FBQSxHQUFBQyxZQUFBLENBQUFiLENBQUEsZ0NBQUFjLE9BQUEsQ0FBQUYsQ0FBQSxJQUFBQSxDQUFBLEdBQUFBLENBQUE7QUFBQSxTQUFBQyxhQUFBYixDQUFBLEVBQUFELENBQUEsb0JBQUFlLE9BQUEsQ0FBQWQsQ0FBQSxNQUFBQSxDQUFBLFNBQUFBLENBQUEsTUFBQUosQ0FBQSxHQUFBSSxDQUFBLENBQUFlLE1BQUEsQ0FBQUMsV0FBQSxrQkFBQXBCLENBQUEsUUFBQWdCLENBQUEsR0FBQWhCLENBQUEsQ0FBQXFCLElBQUEsQ0FBQWpCLENBQUEsRUFBQUQsQ0FBQSxnQ0FBQWUsT0FBQSxDQUFBRixDQUFBLFVBQUFBLENBQUEsWUFBQU0sU0FBQSx5RUFBQW5CLENBQUEsR0FBQW9CLE1BQUEsR0FBQUMsTUFBQSxFQUFBcEIsQ0FBQTtBQUFBLFNBQUFxQixnQkFBQUMsQ0FBQSxFQUFBQyxDQUFBLFVBQUFELENBQUEsWUFBQUMsQ0FBQSxhQUFBTCxTQUFBO0FBRXJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWRBLElBZU1NLFdBQVcsZ0JBQUFkLFlBQUEsQ0FDZixTQUFBYyxZQUFZQyxNQUFNLEVBQUU7RUFBQUosZUFBQSxPQUFBRyxXQUFBO0VBQ2xCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQSxNQUFNO0VBQ3BCLElBQUksQ0FBQ0MsV0FBVyxHQUFHLElBQUlDLHdCQUFXLENBQUNGLE1BQU0sQ0FBQztFQUMxQyxJQUFJLENBQUNHLFdBQVcsR0FBRyxJQUFJQyx3QkFBVyxDQUFDSixNQUFNLENBQUM7QUFDNUMsQ0FBQztBQUFBLElBQUFLLFFBQUEsR0FBQUMsT0FBQSxjQUdZUCxXQUFXO0FBQUFRLE1BQUEsQ0FBQUQsT0FBQSxHQUFBQSxPQUFBLENBQUFFLE9BQUEiLCJpZ25vcmVMaXN0IjpbXX0=
}),
"[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/travel.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _analytics = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/travel/analytics.js [app-route] (ecmascript)"));
var _predictions = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/travel/predictions.js [app-route] (ecmascript)"));
function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        "default": e
    };
}
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
/**
 * A namespaced client for the
 * `/v1/travel` & `/v2/travel` & `/v3/travel` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.travel;
 * ```
 *
 * @param {Client} client
 * @property {Analytics} analytics
 * @property {Predictions} predictions
 * @protected
 */ var Travel = /*#__PURE__*/ _createClass(function Travel(client) {
    _classCallCheck(this, Travel);
    this.client = client;
    this.analytics = new _analytics["default"](client);
    this.predictions = new _predictions["default"](client);
});
var _default = exports["default"] = Travel;
module.exports = exports.default; //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYW5hbHl0aWNzIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfcHJlZGljdGlvbnMiLCJlIiwiX19lc01vZHVsZSIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwiciIsInQiLCJsZW5ndGgiLCJvIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfdG9Qcm9wZXJ0eUtleSIsImtleSIsIl9jcmVhdGVDbGFzcyIsInByb3RvdHlwZSIsImkiLCJfdG9QcmltaXRpdmUiLCJfdHlwZW9mIiwiU3ltYm9sIiwidG9QcmltaXRpdmUiLCJjYWxsIiwiVHlwZUVycm9yIiwiU3RyaW5nIiwiTnVtYmVyIiwiX2NsYXNzQ2FsbENoZWNrIiwiYSIsIm4iLCJUcmF2ZWwiLCJjbGllbnQiLCJhbmFseXRpY3MiLCJBbmFseXRpY3MiLCJwcmVkaWN0aW9ucyIsIlByZWRpY3Rpb25zIiwiX2RlZmF1bHQiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmYXVsdCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hbWFkZXVzL25hbWVzcGFjZXMvdHJhdmVsLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBbmFseXRpY3MgZnJvbSAnLi90cmF2ZWwvYW5hbHl0aWNzJztcbmltcG9ydCBQcmVkaWN0aW9ucyBmcm9tICcuL3RyYXZlbC9wcmVkaWN0aW9ucyc7XG5cbi8qKlxuICogQSBuYW1lc3BhY2VkIGNsaWVudCBmb3IgdGhlXG4gKiBgL3YxL3RyYXZlbGAgJiBgL3YyL3RyYXZlbGAgJiBgL3YzL3RyYXZlbGAgZW5kcG9pbnRzXG4gKlxuICogQWNjZXNzIHZpYSB0aGUge0BsaW5rIEFtYWRldXN9IG9iamVjdFxuICpcbiAqIGBgYGpzXG4gKiBsZXQgYW1hZGV1cyA9IG5ldyBBbWFkZXVzKCk7XG4gKiBhbWFkZXVzLnRyYXZlbDtcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7Q2xpZW50fSBjbGllbnRcbiAqIEBwcm9wZXJ0eSB7QW5hbHl0aWNzfSBhbmFseXRpY3NcbiAqIEBwcm9wZXJ0eSB7UHJlZGljdGlvbnN9IHByZWRpY3Rpb25zXG4gKiBAcHJvdGVjdGVkXG4gKi9cbmNsYXNzIFRyYXZlbCB7XG4gIGNvbnN0cnVjdG9yKGNsaWVudCkge1xuICAgIHRoaXMuY2xpZW50ICAgID0gY2xpZW50O1xuICAgIHRoaXMuYW5hbHl0aWNzID0gbmV3IEFuYWx5dGljcyhjbGllbnQpO1xuICAgIHRoaXMucHJlZGljdGlvbnMgPSBuZXcgUHJlZGljdGlvbnMoY2xpZW50KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUcmF2ZWw7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxJQUFBQSxVQUFBLEdBQUFDLHNCQUFBLENBQUFDLE9BQUE7QUFDQSxJQUFBQyxZQUFBLEdBQUFGLHNCQUFBLENBQUFDLE9BQUE7QUFBK0MsU0FBQUQsdUJBQUFHLENBQUEsV0FBQUEsQ0FBQSxJQUFBQSxDQUFBLENBQUFDLFVBQUEsR0FBQUQsQ0FBQSxnQkFBQUEsQ0FBQTtBQUFBLFNBQUFFLGtCQUFBRixDQUFBLEVBQUFHLENBQUEsYUFBQUMsQ0FBQSxNQUFBQSxDQUFBLEdBQUFELENBQUEsQ0FBQUUsTUFBQSxFQUFBRCxDQUFBLFVBQUFFLENBQUEsR0FBQUgsQ0FBQSxDQUFBQyxDQUFBLEdBQUFFLENBQUEsQ0FBQUMsVUFBQSxHQUFBRCxDQUFBLENBQUFDLFVBQUEsUUFBQUQsQ0FBQSxDQUFBRSxZQUFBLGtCQUFBRixDQUFBLEtBQUFBLENBQUEsQ0FBQUcsUUFBQSxRQUFBQyxNQUFBLENBQUFDLGNBQUEsQ0FBQVgsQ0FBQSxFQUFBWSxjQUFBLENBQUFOLENBQUEsQ0FBQU8sR0FBQSxHQUFBUCxDQUFBO0FBQUEsU0FBQVEsYUFBQWQsQ0FBQSxFQUFBRyxDQUFBLEVBQUFDLENBQUEsV0FBQUQsQ0FBQSxJQUFBRCxpQkFBQSxDQUFBRixDQUFBLENBQUFlLFNBQUEsRUFBQVosQ0FBQSxHQUFBQyxDQUFBLElBQUFGLGlCQUFBLENBQUFGLENBQUEsRUFBQUksQ0FBQSxHQUFBTSxNQUFBLENBQUFDLGNBQUEsQ0FBQVgsQ0FBQSxpQkFBQVMsUUFBQSxTQUFBVCxDQUFBO0FBQUEsU0FBQVksZUFBQVIsQ0FBQSxRQUFBWSxDQUFBLEdBQUFDLFlBQUEsQ0FBQWIsQ0FBQSxnQ0FBQWMsT0FBQSxDQUFBRixDQUFBLElBQUFBLENBQUEsR0FBQUEsQ0FBQTtBQUFBLFNBQUFDLGFBQUFiLENBQUEsRUFBQUQsQ0FBQSxvQkFBQWUsT0FBQSxDQUFBZCxDQUFBLE1BQUFBLENBQUEsU0FBQUEsQ0FBQSxNQUFBSixDQUFBLEdBQUFJLENBQUEsQ0FBQWUsTUFBQSxDQUFBQyxXQUFBLGtCQUFBcEIsQ0FBQSxRQUFBZ0IsQ0FBQSxHQUFBaEIsQ0FBQSxDQUFBcUIsSUFBQSxDQUFBakIsQ0FBQSxFQUFBRCxDQUFBLGdDQUFBZSxPQUFBLENBQUFGLENBQUEsVUFBQUEsQ0FBQSxZQUFBTSxTQUFBLHlFQUFBbkIsQ0FBQSxHQUFBb0IsTUFBQSxHQUFBQyxNQUFBLEVBQUFwQixDQUFBO0FBQUEsU0FBQXFCLGdCQUFBQyxDQUFBLEVBQUFDLENBQUEsVUFBQUQsQ0FBQSxZQUFBQyxDQUFBLGFBQUFMLFNBQUE7QUFFL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFmQSxJQWdCTU0sTUFBTSxnQkFBQWQsWUFBQSxDQUNWLFNBQUFjLE9BQVlDLE1BQU0sRUFBRTtFQUFBSixlQUFBLE9BQUFHLE1BQUE7RUFDbEIsSUFBSSxDQUFDQyxNQUFNLEdBQU1BLE1BQU07RUFDdkIsSUFBSSxDQUFDQyxTQUFTLEdBQUcsSUFBSUMscUJBQVMsQ0FBQ0YsTUFBTSxDQUFDO0VBQ3RDLElBQUksQ0FBQ0csV0FBVyxHQUFHLElBQUlDLHVCQUFXLENBQUNKLE1BQU0sQ0FBQztBQUM1QyxDQUFDO0FBQUEsSUFBQUssUUFBQSxHQUFBQyxPQUFBLGNBR1lQLE1BQU07QUFBQVEsTUFBQSxDQUFBRCxPQUFBLEdBQUFBLE9BQUEsQ0FBQUUsT0FBQSIsImlnbm9yZUxpc3QiOltdfQ==
}),
"[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/e_reputation/hotel_sentiments.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
/**
 * A namespaced client for the
 * `/v2/e-reputation/hotel-sentiments` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.eReputation.hotelSentiments;
 * ```
 *
 * @param {Client} client
 */ var HotelSentiments = /*#__PURE__*/ function() {
    function HotelSentiments(client) {
        _classCallCheck(this, HotelSentiments);
        this.client = client;
    }
    /**
   * Get the sentiment analysis of hotel reviews
   *
   * @param {Object} params
   * @param {string} params.hotelIds Comma separated list of Amadeus hotel
   *   codes to request. Example: XKPARC12
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * Get Sentiment Analysis of reviews about Holiday Inn Paris Notre Dame.
   *
   * ```js
   * amadeus.eReputation.hotelSentiments.get({
   *   hotelIds: 'XKPARC12'
   * })
   * ```
   */ return _createClass(HotelSentiments, [
        {
            key: "get",
            value: function get() {
                var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                return this.client.get('/v2/e-reputation/hotel-sentiments', params);
            }
        }
    ]);
}();
var _default = exports["default"] = HotelSentiments;
module.exports = exports.default; //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJIb3RlbFNlbnRpbWVudHMiLCJjbGllbnQiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImdldCIsInBhcmFtcyIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmF1bHQiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYW1hZGV1cy9uYW1lc3BhY2VzL2VfcmVwdXRhdGlvbi9ob3RlbF9zZW50aW1lbnRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQSBuYW1lc3BhY2VkIGNsaWVudCBmb3IgdGhlXG4gKiBgL3YyL2UtcmVwdXRhdGlvbi9ob3RlbC1zZW50aW1lbnRzYCBlbmRwb2ludHNcbiAqXG4gKiBBY2Nlc3MgdmlhIHRoZSB7QGxpbmsgQW1hZGV1c30gb2JqZWN0XG4gKlxuICogYGBganNcbiAqIGxldCBhbWFkZXVzID0gbmV3IEFtYWRldXMoKTtcbiAqIGFtYWRldXMuZVJlcHV0YXRpb24uaG90ZWxTZW50aW1lbnRzO1xuICogYGBgXG4gKlxuICogQHBhcmFtIHtDbGllbnR9IGNsaWVudFxuICovXG5jbGFzcyBIb3RlbFNlbnRpbWVudHMge1xuICBjb25zdHJ1Y3RvcihjbGllbnQpIHtcbiAgICB0aGlzLmNsaWVudCA9IGNsaWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXQgdGhlIHNlbnRpbWVudCBhbmFseXNpcyBvZiBob3RlbCByZXZpZXdzXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXNcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtcy5ob3RlbElkcyBDb21tYSBzZXBhcmF0ZWQgbGlzdCBvZiBBbWFkZXVzIGhvdGVsXG4gICAqICAgY29kZXMgdG8gcmVxdWVzdC4gRXhhbXBsZTogWEtQQVJDMTJcbiAgICogQHJldHVybiB7UHJvbWlzZS48UmVzcG9uc2UsUmVzcG9uc2VFcnJvcj59IGEgUHJvbWlzZVxuICAgKlxuICAgKiBHZXQgU2VudGltZW50IEFuYWx5c2lzIG9mIHJldmlld3MgYWJvdXQgSG9saWRheSBJbm4gUGFyaXMgTm90cmUgRGFtZS5cbiAgICpcbiAgICogYGBganNcbiAgICogYW1hZGV1cy5lUmVwdXRhdGlvbi5ob3RlbFNlbnRpbWVudHMuZ2V0KHtcbiAgICogICBob3RlbElkczogJ1hLUEFSQzEyJ1xuICAgKiB9KVxuICAgKiBgYGBcbiAgICovXG4gIGdldChwYXJhbXMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmNsaWVudC5nZXQoJy92Mi9lLXJlcHV0YXRpb24vaG90ZWwtc2VudGltZW50cycsIHBhcmFtcyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG90ZWxTZW50aW1lbnRzOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFaQSxJQWFNQSxlQUFlO0VBQ25CLFNBQUFBLGdCQUFZQyxNQUFNLEVBQUU7SUFBQUMsZUFBQSxPQUFBRixlQUFBO0lBQ2xCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQSxNQUFNO0VBQ3RCOztFQUVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBZkUsT0FBQUUsWUFBQSxDQUFBSCxlQUFBO0lBQUFJLEdBQUE7SUFBQUMsS0FBQSxFQWdCQSxTQUFBQyxHQUFHQSxDQUFBLEVBQWM7TUFBQSxJQUFiQyxNQUFNLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFHLENBQUMsQ0FBQztNQUNiLE9BQU8sSUFBSSxDQUFDUCxNQUFNLENBQUNLLEdBQUcsQ0FBQyxtQ0FBbUMsRUFBRUMsTUFBTSxDQUFDO0lBQ3JFO0VBQUM7QUFBQTtBQUFBLElBQUFJLFFBQUEsR0FBQUMsT0FBQSxjQUdZWixlQUFlO0FBQUFhLE1BQUEsQ0FBQUQsT0FBQSxHQUFBQSxPQUFBLENBQUFFLE9BQUEiLCJpZ25vcmVMaXN0IjpbXX0=
}),
"[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/e_reputation.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _hotel_sentiments = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/e_reputation/hotel_sentiments.js [app-route] (ecmascript)"));
function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        "default": e
    };
}
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
/**
 * A namespaced client for the
 * `/v2/e-reputation` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.eReputation;
 * ```
 *
 * @param {Client} client
 * @property {hotelSentiments} hotel_sentiments
 */ var EReputation = /*#__PURE__*/ _createClass(function EReputation(client) {
    _classCallCheck(this, EReputation);
    this.client = client;
    this.hotelSentiments = new _hotel_sentiments["default"](client);
});
var _default = exports["default"] = EReputation;
module.exports = exports.default; //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfaG90ZWxfc2VudGltZW50cyIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiZSIsIl9fZXNNb2R1bGUiLCJfZGVmaW5lUHJvcGVydGllcyIsInIiLCJ0IiwibGVuZ3RoIiwibyIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX3RvUHJvcGVydHlLZXkiLCJrZXkiLCJfY3JlYXRlQ2xhc3MiLCJwcm90b3R5cGUiLCJpIiwiX3RvUHJpbWl0aXZlIiwiX3R5cGVvZiIsIlN5bWJvbCIsInRvUHJpbWl0aXZlIiwiY2FsbCIsIlR5cGVFcnJvciIsIlN0cmluZyIsIk51bWJlciIsIl9jbGFzc0NhbGxDaGVjayIsImEiLCJuIiwiRVJlcHV0YXRpb24iLCJjbGllbnQiLCJob3RlbFNlbnRpbWVudHMiLCJIb3RlbFNlbnRpbWVudHMiLCJfZGVmYXVsdCIsImV4cG9ydHMiLCJtb2R1bGUiLCJkZWZhdWx0Il0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FtYWRldXMvbmFtZXNwYWNlcy9lX3JlcHV0YXRpb24uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhvdGVsU2VudGltZW50cyAgICBmcm9tICcuL2VfcmVwdXRhdGlvbi9ob3RlbF9zZW50aW1lbnRzJztcblxuLyoqXG4gKiBBIG5hbWVzcGFjZWQgY2xpZW50IGZvciB0aGVcbiAqIGAvdjIvZS1yZXB1dGF0aW9uYCBlbmRwb2ludHNcbiAqXG4gKiBBY2Nlc3MgdmlhIHRoZSB7QGxpbmsgQW1hZGV1c30gb2JqZWN0XG4gKlxuICogYGBganNcbiAqIGxldCBhbWFkZXVzID0gbmV3IEFtYWRldXMoKTtcbiAqIGFtYWRldXMuZVJlcHV0YXRpb247XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge0NsaWVudH0gY2xpZW50XG4gKiBAcHJvcGVydHkge2hvdGVsU2VudGltZW50c30gaG90ZWxfc2VudGltZW50c1xuICovXG5jbGFzcyBFUmVwdXRhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNsaWVudCkge1xuICAgIHRoaXMuY2xpZW50ICAgICAgICAgICAgID0gY2xpZW50O1xuICAgIHRoaXMuaG90ZWxTZW50aW1lbnRzID0gbmV3IEhvdGVsU2VudGltZW50cyhjbGllbnQpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEVSZXB1dGF0aW9uO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsSUFBQUEsaUJBQUEsR0FBQUMsc0JBQUEsQ0FBQUMsT0FBQTtBQUFpRSxTQUFBRCx1QkFBQUUsQ0FBQSxXQUFBQSxDQUFBLElBQUFBLENBQUEsQ0FBQUMsVUFBQSxHQUFBRCxDQUFBLGdCQUFBQSxDQUFBO0FBQUEsU0FBQUUsa0JBQUFGLENBQUEsRUFBQUcsQ0FBQSxhQUFBQyxDQUFBLE1BQUFBLENBQUEsR0FBQUQsQ0FBQSxDQUFBRSxNQUFBLEVBQUFELENBQUEsVUFBQUUsQ0FBQSxHQUFBSCxDQUFBLENBQUFDLENBQUEsR0FBQUUsQ0FBQSxDQUFBQyxVQUFBLEdBQUFELENBQUEsQ0FBQUMsVUFBQSxRQUFBRCxDQUFBLENBQUFFLFlBQUEsa0JBQUFGLENBQUEsS0FBQUEsQ0FBQSxDQUFBRyxRQUFBLFFBQUFDLE1BQUEsQ0FBQUMsY0FBQSxDQUFBWCxDQUFBLEVBQUFZLGNBQUEsQ0FBQU4sQ0FBQSxDQUFBTyxHQUFBLEdBQUFQLENBQUE7QUFBQSxTQUFBUSxhQUFBZCxDQUFBLEVBQUFHLENBQUEsRUFBQUMsQ0FBQSxXQUFBRCxDQUFBLElBQUFELGlCQUFBLENBQUFGLENBQUEsQ0FBQWUsU0FBQSxFQUFBWixDQUFBLEdBQUFDLENBQUEsSUFBQUYsaUJBQUEsQ0FBQUYsQ0FBQSxFQUFBSSxDQUFBLEdBQUFNLE1BQUEsQ0FBQUMsY0FBQSxDQUFBWCxDQUFBLGlCQUFBUyxRQUFBLFNBQUFULENBQUE7QUFBQSxTQUFBWSxlQUFBUixDQUFBLFFBQUFZLENBQUEsR0FBQUMsWUFBQSxDQUFBYixDQUFBLGdDQUFBYyxPQUFBLENBQUFGLENBQUEsSUFBQUEsQ0FBQSxHQUFBQSxDQUFBO0FBQUEsU0FBQUMsYUFBQWIsQ0FBQSxFQUFBRCxDQUFBLG9CQUFBZSxPQUFBLENBQUFkLENBQUEsTUFBQUEsQ0FBQSxTQUFBQSxDQUFBLE1BQUFKLENBQUEsR0FBQUksQ0FBQSxDQUFBZSxNQUFBLENBQUFDLFdBQUEsa0JBQUFwQixDQUFBLFFBQUFnQixDQUFBLEdBQUFoQixDQUFBLENBQUFxQixJQUFBLENBQUFqQixDQUFBLEVBQUFELENBQUEsZ0NBQUFlLE9BQUEsQ0FBQUYsQ0FBQSxVQUFBQSxDQUFBLFlBQUFNLFNBQUEseUVBQUFuQixDQUFBLEdBQUFvQixNQUFBLEdBQUFDLE1BQUEsRUFBQXBCLENBQUE7QUFBQSxTQUFBcUIsZ0JBQUFDLENBQUEsRUFBQUMsQ0FBQSxVQUFBRCxDQUFBLFlBQUFDLENBQUEsYUFBQUwsU0FBQTtBQUVqRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBYkEsSUFjTU0sV0FBVyxnQkFBQWQsWUFBQSxDQUNmLFNBQUFjLFlBQVlDLE1BQU0sRUFBRTtFQUFBSixlQUFBLE9BQUFHLFdBQUE7RUFDbEIsSUFBSSxDQUFDQyxNQUFNLEdBQWVBLE1BQU07RUFDaEMsSUFBSSxDQUFDQyxlQUFlLEdBQUcsSUFBSUMsNEJBQWUsQ0FBQ0YsTUFBTSxDQUFDO0FBQ3BELENBQUM7QUFBQSxJQUFBRyxRQUFBLEdBQUFDLE9BQUEsY0FHWUwsV0FBVztBQUFBTSxNQUFBLENBQUFELE9BQUEsR0FBQUEsT0FBQSxDQUFBRSxPQUFBIiwiaWdub3JlTGlzdCI6W119
}),
"[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/media/files.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
/**
 * A namespaced client for the
 * `/v2/media/files` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.media.files;
 * ```
 *
 * @param {Client} client
 */ var Files = /*#__PURE__*/ _createClass(function Files(client) {
    _classCallCheck(this, Files);
    this.client = client;
});
var _default = exports["default"] = Files;
module.exports = exports.default; //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJGaWxlcyIsIl9jcmVhdGVDbGFzcyIsImNsaWVudCIsIl9jbGFzc0NhbGxDaGVjayIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmF1bHQiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYW1hZGV1cy9uYW1lc3BhY2VzL21lZGlhL2ZpbGVzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQSBuYW1lc3BhY2VkIGNsaWVudCBmb3IgdGhlXG4gKiBgL3YyL21lZGlhL2ZpbGVzYCBlbmRwb2ludHNcbiAqXG4gKiBBY2Nlc3MgdmlhIHRoZSB7QGxpbmsgQW1hZGV1c30gb2JqZWN0XG4gKlxuICogYGBganNcbiAqIGxldCBhbWFkZXVzID0gbmV3IEFtYWRldXMoKTtcbiAqIGFtYWRldXMubWVkaWEuZmlsZXM7XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge0NsaWVudH0gY2xpZW50XG4gKi9cbmNsYXNzIEZpbGVzIHtcbiAgY29uc3RydWN0b3IoY2xpZW50KSB7XG4gICAgdGhpcy5jbGllbnQgPSBjbGllbnQ7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgRmlsZXM7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWkEsSUFhTUEsS0FBSyxnQkFBQUMsWUFBQSxDQUNULFNBQUFELE1BQVlFLE1BQU0sRUFBRTtFQUFBQyxlQUFBLE9BQUFILEtBQUE7RUFDbEIsSUFBSSxDQUFDRSxNQUFNLEdBQUdBLE1BQU07QUFDdEIsQ0FBQztBQUFBLElBQUFFLFFBQUEsR0FBQUMsT0FBQSxjQUdZTCxLQUFLO0FBQUFNLE1BQUEsQ0FBQUQsT0FBQSxHQUFBQSxPQUFBLENBQUFFLE9BQUEiLCJpZ25vcmVMaXN0IjpbXX0=
}),
"[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/media.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _files = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/media/files.js [app-route] (ecmascript)"));
function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        "default": e
    };
}
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
/**
 * A namespaced client for the
 * `/v2/media` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.media;
 * ```
 *
 * @param {Client} client
 * @property {Files} files
 */ var Media = /*#__PURE__*/ _createClass(function Media(client) {
    _classCallCheck(this, Media);
    this.client = client;
    this.files = new _files["default"](client);
});
var _default = exports["default"] = Media;
module.exports = exports.default; //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZmlsZXMiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsImUiLCJfX2VzTW9kdWxlIiwiX2RlZmluZVByb3BlcnRpZXMiLCJyIiwidCIsImxlbmd0aCIsIm8iLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIl90b1Byb3BlcnR5S2V5Iiwia2V5IiwiX2NyZWF0ZUNsYXNzIiwicHJvdG90eXBlIiwiaSIsIl90b1ByaW1pdGl2ZSIsIl90eXBlb2YiLCJTeW1ib2wiLCJ0b1ByaW1pdGl2ZSIsImNhbGwiLCJUeXBlRXJyb3IiLCJTdHJpbmciLCJOdW1iZXIiLCJfY2xhc3NDYWxsQ2hlY2siLCJhIiwibiIsIk1lZGlhIiwiY2xpZW50IiwiZmlsZXMiLCJGaWxlcyIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmF1bHQiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYW1hZGV1cy9uYW1lc3BhY2VzL21lZGlhLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGaWxlcyBmcm9tICcuL21lZGlhL2ZpbGVzJztcblxuLyoqXG4gKiBBIG5hbWVzcGFjZWQgY2xpZW50IGZvciB0aGVcbiAqIGAvdjIvbWVkaWFgIGVuZHBvaW50c1xuICpcbiAqIEFjY2VzcyB2aWEgdGhlIHtAbGluayBBbWFkZXVzfSBvYmplY3RcbiAqXG4gKiBgYGBqc1xuICogbGV0IGFtYWRldXMgPSBuZXcgQW1hZGV1cygpO1xuICogYW1hZGV1cy5tZWRpYTtcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7Q2xpZW50fSBjbGllbnRcbiAqIEBwcm9wZXJ0eSB7RmlsZXN9IGZpbGVzXG4gKi9cbmNsYXNzIE1lZGlhIHtcbiAgY29uc3RydWN0b3IoY2xpZW50KSB7XG4gICAgdGhpcy5jbGllbnQgPSBjbGllbnQ7XG4gICAgdGhpcy5maWxlcyA9IG5ldyBGaWxlcyhjbGllbnQpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE1lZGlhO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsSUFBQUEsTUFBQSxHQUFBQyxzQkFBQSxDQUFBQyxPQUFBO0FBQWtDLFNBQUFELHVCQUFBRSxDQUFBLFdBQUFBLENBQUEsSUFBQUEsQ0FBQSxDQUFBQyxVQUFBLEdBQUFELENBQUEsZ0JBQUFBLENBQUE7QUFBQSxTQUFBRSxrQkFBQUYsQ0FBQSxFQUFBRyxDQUFBLGFBQUFDLENBQUEsTUFBQUEsQ0FBQSxHQUFBRCxDQUFBLENBQUFFLE1BQUEsRUFBQUQsQ0FBQSxVQUFBRSxDQUFBLEdBQUFILENBQUEsQ0FBQUMsQ0FBQSxHQUFBRSxDQUFBLENBQUFDLFVBQUEsR0FBQUQsQ0FBQSxDQUFBQyxVQUFBLFFBQUFELENBQUEsQ0FBQUUsWUFBQSxrQkFBQUYsQ0FBQSxLQUFBQSxDQUFBLENBQUFHLFFBQUEsUUFBQUMsTUFBQSxDQUFBQyxjQUFBLENBQUFYLENBQUEsRUFBQVksY0FBQSxDQUFBTixDQUFBLENBQUFPLEdBQUEsR0FBQVAsQ0FBQTtBQUFBLFNBQUFRLGFBQUFkLENBQUEsRUFBQUcsQ0FBQSxFQUFBQyxDQUFBLFdBQUFELENBQUEsSUFBQUQsaUJBQUEsQ0FBQUYsQ0FBQSxDQUFBZSxTQUFBLEVBQUFaLENBQUEsR0FBQUMsQ0FBQSxJQUFBRixpQkFBQSxDQUFBRixDQUFBLEVBQUFJLENBQUEsR0FBQU0sTUFBQSxDQUFBQyxjQUFBLENBQUFYLENBQUEsaUJBQUFTLFFBQUEsU0FBQVQsQ0FBQTtBQUFBLFNBQUFZLGVBQUFSLENBQUEsUUFBQVksQ0FBQSxHQUFBQyxZQUFBLENBQUFiLENBQUEsZ0NBQUFjLE9BQUEsQ0FBQUYsQ0FBQSxJQUFBQSxDQUFBLEdBQUFBLENBQUE7QUFBQSxTQUFBQyxhQUFBYixDQUFBLEVBQUFELENBQUEsb0JBQUFlLE9BQUEsQ0FBQWQsQ0FBQSxNQUFBQSxDQUFBLFNBQUFBLENBQUEsTUFBQUosQ0FBQSxHQUFBSSxDQUFBLENBQUFlLE1BQUEsQ0FBQUMsV0FBQSxrQkFBQXBCLENBQUEsUUFBQWdCLENBQUEsR0FBQWhCLENBQUEsQ0FBQXFCLElBQUEsQ0FBQWpCLENBQUEsRUFBQUQsQ0FBQSxnQ0FBQWUsT0FBQSxDQUFBRixDQUFBLFVBQUFBLENBQUEsWUFBQU0sU0FBQSx5RUFBQW5CLENBQUEsR0FBQW9CLE1BQUEsR0FBQUMsTUFBQSxFQUFBcEIsQ0FBQTtBQUFBLFNBQUFxQixnQkFBQUMsQ0FBQSxFQUFBQyxDQUFBLFVBQUFELENBQUEsWUFBQUMsQ0FBQSxhQUFBTCxTQUFBO0FBRWxDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFiQSxJQWNNTSxLQUFLLGdCQUFBZCxZQUFBLENBQ1QsU0FBQWMsTUFBWUMsTUFBTSxFQUFFO0VBQUFKLGVBQUEsT0FBQUcsS0FBQTtFQUNsQixJQUFJLENBQUNDLE1BQU0sR0FBR0EsTUFBTTtFQUNwQixJQUFJLENBQUNDLEtBQUssR0FBRyxJQUFJQyxpQkFBSyxDQUFDRixNQUFNLENBQUM7QUFDaEMsQ0FBQztBQUFBLElBQUFHLFFBQUEsR0FBQUMsT0FBQSxjQUdZTCxLQUFLO0FBQUFNLE1BQUEsQ0FBQUQsT0FBQSxHQUFBQSxPQUFBLENBQUFFLE9BQUEiLCJpZ25vcmVMaXN0IjpbXX0=
}),
"[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/ordering/transfer_orders.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
/**
 * A namespaced client for the
 * `/v1/ordering/transfer-orders` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.ordering.transferOrders;
 * ```
 *
 * @param {Client} client
 */ var TransferOrders = /*#__PURE__*/ function() {
    function TransferOrders(client) {
        _classCallCheck(this, TransferOrders);
        this.client = client;
    }
    /**
   * To book the selected transfer-offer and create a transfer-order
   *
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * To book the transfer-offer(s) suggested by transferOffers and create a transfer-order
   *
   * ```js
   * amadeus.ordering.transferOrders.post(body, '2094123123');
   * ```
   */ return _createClass(TransferOrders, [
        {
            key: "post",
            value: function post(body, offerId) {
                return this.client.post("/v1/ordering/transfer-orders?offerId=".concat(offerId), body);
            }
        }
    ]);
}();
var _default = exports["default"] = TransferOrders;
module.exports = exports.default; //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJUcmFuc2Zlck9yZGVycyIsImNsaWVudCIsIl9jbGFzc0NhbGxDaGVjayIsIl9jcmVhdGVDbGFzcyIsImtleSIsInZhbHVlIiwicG9zdCIsImJvZHkiLCJvZmZlcklkIiwiY29uY2F0IiwiX2RlZmF1bHQiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmYXVsdCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9hbWFkZXVzL25hbWVzcGFjZXMvb3JkZXJpbmcvdHJhbnNmZXJfb3JkZXJzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQSBuYW1lc3BhY2VkIGNsaWVudCBmb3IgdGhlXG4gKiBgL3YxL29yZGVyaW5nL3RyYW5zZmVyLW9yZGVyc2AgZW5kcG9pbnRzXG4gKlxuICogQWNjZXNzIHZpYSB0aGUge0BsaW5rIEFtYWRldXN9IG9iamVjdFxuICpcbiAqIGBgYGpzXG4gKiBsZXQgYW1hZGV1cyA9IG5ldyBBbWFkZXVzKCk7XG4gKiBhbWFkZXVzLm9yZGVyaW5nLnRyYW5zZmVyT3JkZXJzO1xuICogYGBgXG4gKlxuICogQHBhcmFtIHtDbGllbnR9IGNsaWVudFxuICovXG5jbGFzcyBUcmFuc2Zlck9yZGVycyB7XG4gIGNvbnN0cnVjdG9yKGNsaWVudCkge1xuICAgIHRoaXMuY2xpZW50ID0gY2xpZW50O1xuXG4gIH1cblxuICAvKipcbiAgICogVG8gYm9vayB0aGUgc2VsZWN0ZWQgdHJhbnNmZXItb2ZmZXIgYW5kIGNyZWF0ZSBhIHRyYW5zZmVyLW9yZGVyXG4gICAqXG4gICAqIEByZXR1cm4ge1Byb21pc2UuPFJlc3BvbnNlLFJlc3BvbnNlRXJyb3I+fSBhIFByb21pc2VcbiAgICpcbiAgICogVG8gYm9vayB0aGUgdHJhbnNmZXItb2ZmZXIocykgc3VnZ2VzdGVkIGJ5IHRyYW5zZmVyT2ZmZXJzIGFuZCBjcmVhdGUgYSB0cmFuc2Zlci1vcmRlclxuICAgKlxuICAgKiBgYGBqc1xuICAgKiBhbWFkZXVzLm9yZGVyaW5nLnRyYW5zZmVyT3JkZXJzLnBvc3QoYm9keSwgJzIwOTQxMjMxMjMnKTtcbiAgICogYGBgXG4gICAqL1xuICBwb3N0KGJvZHksIG9mZmVySWQpIHtcbiAgICByZXR1cm4gdGhpcy5jbGllbnQucG9zdChgL3YxL29yZGVyaW5nL3RyYW5zZmVyLW9yZGVycz9vZmZlcklkPSR7b2ZmZXJJZH1gLCBib2R5KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUcmFuc2Zlck9yZGVyczsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWkEsSUFhTUEsY0FBYztFQUNsQixTQUFBQSxlQUFZQyxNQUFNLEVBQUU7SUFBQUMsZUFBQSxPQUFBRixjQUFBO0lBQ2xCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQSxNQUFNO0VBRXRCOztFQUVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFWRSxPQUFBRSxZQUFBLENBQUFILGNBQUE7SUFBQUksR0FBQTtJQUFBQyxLQUFBLEVBV0EsU0FBQUMsSUFBSUEsQ0FBQ0MsSUFBSSxFQUFFQyxPQUFPLEVBQUU7TUFDbEIsT0FBTyxJQUFJLENBQUNQLE1BQU0sQ0FBQ0ssSUFBSSx5Q0FBQUcsTUFBQSxDQUF5Q0QsT0FBTyxHQUFJRCxJQUFJLENBQUM7SUFDbEY7RUFBQztBQUFBO0FBQUEsSUFBQUcsUUFBQSxHQUFBQyxPQUFBLGNBR1lYLGNBQWM7QUFBQVksTUFBQSxDQUFBRCxPQUFBLEdBQUFBLE9BQUEsQ0FBQUUsT0FBQSIsImlnbm9yZUxpc3QiOltdfQ==
}),
"[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/ordering/transfer_orders/transfers/cancellation.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
/**
 * A namespaced client for the
 * `/v1/ordering/transfer-orders/XXX/transfers/cancellation` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.ordering.transferOrder('XXX').transfers.cancellation.post({}, '12345');;
 * ```
 *
 * @param {Client} client
 */ var Cancellation = /*#__PURE__*/ function() {
    function Cancellation(client, orderId) {
        _classCallCheck(this, Cancellation);
        this.client = client;
        this.orderId = orderId;
    }
    /**
   * To cancel a transfer order based on its id
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * To cancel a transfer order with ID 'XXX' and confirmation number '12345'
   *
   * ```js
   * amadeus.ordering.transferOrder('XXX').transfers.cancellation.post({}, '12345');;
   * ```
   */ return _createClass(Cancellation, [
        {
            key: "post",
            value: function post(body, confirmNbr) {
                return this.client.post("/v1/ordering/transfer-orders/".concat(this.orderId, "/transfers/cancellation?confirmNbr=").concat(confirmNbr), body);
            }
        }
    ]);
}();
var _default = exports["default"] = Cancellation;
module.exports = exports.default; //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJDYW5jZWxsYXRpb24iLCJjbGllbnQiLCJvcmRlcklkIiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJwb3N0IiwiYm9keSIsImNvbmZpcm1OYnIiLCJjb25jYXQiLCJfZGVmYXVsdCIsImV4cG9ydHMiLCJtb2R1bGUiLCJkZWZhdWx0Il0sInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vc3JjL2FtYWRldXMvbmFtZXNwYWNlcy9vcmRlcmluZy90cmFuc2Zlcl9vcmRlcnMvdHJhbnNmZXJzL2NhbmNlbGxhdGlvbi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEEgbmFtZXNwYWNlZCBjbGllbnQgZm9yIHRoZVxuICogYC92MS9vcmRlcmluZy90cmFuc2Zlci1vcmRlcnMvWFhYL3RyYW5zZmVycy9jYW5jZWxsYXRpb25gIGVuZHBvaW50c1xuICpcbiAqIEFjY2VzcyB2aWEgdGhlIHtAbGluayBBbWFkZXVzfSBvYmplY3RcbiAqXG4gKiBgYGBqc1xuICogbGV0IGFtYWRldXMgPSBuZXcgQW1hZGV1cygpO1xuICogYW1hZGV1cy5vcmRlcmluZy50cmFuc2Zlck9yZGVyKCdYWFgnKS50cmFuc2ZlcnMuY2FuY2VsbGF0aW9uLnBvc3Qoe30sICcxMjM0NScpOztcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7Q2xpZW50fSBjbGllbnRcbiAqL1xuY2xhc3MgQ2FuY2VsbGF0aW9uIHtcbiAgY29uc3RydWN0b3IoY2xpZW50LCBvcmRlcklkKSB7XG4gICAgdGhpcy5jbGllbnQgPSBjbGllbnQ7XG4gICAgdGhpcy5vcmRlcklkID0gb3JkZXJJZDtcbiAgfVxuXG4gIC8qKlxuICAgKiBUbyBjYW5jZWwgYSB0cmFuc2ZlciBvcmRlciBiYXNlZCBvbiBpdHMgaWRcbiAgICogQHJldHVybiB7UHJvbWlzZS48UmVzcG9uc2UsUmVzcG9uc2VFcnJvcj59IGEgUHJvbWlzZVxuICAgKlxuICAgKiBUbyBjYW5jZWwgYSB0cmFuc2ZlciBvcmRlciB3aXRoIElEICdYWFgnIGFuZCBjb25maXJtYXRpb24gbnVtYmVyICcxMjM0NSdcbiAgICpcbiAgICogYGBganNcbiAgICogYW1hZGV1cy5vcmRlcmluZy50cmFuc2Zlck9yZGVyKCdYWFgnKS50cmFuc2ZlcnMuY2FuY2VsbGF0aW9uLnBvc3Qoe30sICcxMjM0NScpOztcbiAgICogYGBgXG4gICAqL1xuICBwb3N0KGJvZHksIGNvbmZpcm1OYnIpIHtcbiAgICByZXR1cm4gdGhpcy5jbGllbnQucG9zdChcbiAgICAgIGAvdjEvb3JkZXJpbmcvdHJhbnNmZXItb3JkZXJzLyR7dGhpcy5vcmRlcklkfS90cmFuc2ZlcnMvY2FuY2VsbGF0aW9uP2NvbmZpcm1OYnI9JHtjb25maXJtTmJyfWAsIGJvZHkpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhbmNlbGxhdGlvbjsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWkEsSUFhTUEsWUFBWTtFQUNoQixTQUFBQSxhQUFZQyxNQUFNLEVBQUVDLE9BQU8sRUFBRTtJQUFBQyxlQUFBLE9BQUFILFlBQUE7SUFDM0IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBLE1BQU07SUFDcEIsSUFBSSxDQUFDQyxPQUFPLEdBQUdBLE9BQU87RUFDeEI7O0VBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFURSxPQUFBRSxZQUFBLENBQUFKLFlBQUE7SUFBQUssR0FBQTtJQUFBQyxLQUFBLEVBVUEsU0FBQUMsSUFBSUEsQ0FBQ0MsSUFBSSxFQUFFQyxVQUFVLEVBQUU7TUFDckIsT0FBTyxJQUFJLENBQUNSLE1BQU0sQ0FBQ00sSUFBSSxpQ0FBQUcsTUFBQSxDQUNXLElBQUksQ0FBQ1IsT0FBTyx5Q0FBQVEsTUFBQSxDQUFzQ0QsVUFBVSxHQUFJRCxJQUFJLENBQUM7SUFDekc7RUFBQztBQUFBO0FBQUEsSUFBQUcsUUFBQSxHQUFBQyxPQUFBLGNBR1laLFlBQVk7QUFBQWEsTUFBQSxDQUFBRCxPQUFBLEdBQUFBLE9BQUEsQ0FBQUUsT0FBQSIsImlnbm9yZUxpc3QiOltdfQ==
}),
"[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/ordering/transfer_orders/transfers.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _cancellation = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/ordering/transfer_orders/transfers/cancellation.js [app-route] (ecmascript)"));
function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        "default": e
    };
}
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
/**
 * A namespaced client for the
 * `/v1/ordering/transfer-orders/XXXXX/transfers` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.ordering.transferOrders('XXX').transfers;
 * ```
 *
 * @param {Client} client
 */ var Transfers = /*#__PURE__*/ _createClass(function Transfers(client, orderId) {
    _classCallCheck(this, Transfers);
    this.client = client;
    this.orderId = orderId;
    this.cancellation = new _cancellation["default"](client, orderId);
});
var _default = exports["default"] = Transfers;
module.exports = exports.default; //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY2FuY2VsbGF0aW9uIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJlIiwiX19lc01vZHVsZSIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwiciIsInQiLCJsZW5ndGgiLCJvIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfdG9Qcm9wZXJ0eUtleSIsImtleSIsIl9jcmVhdGVDbGFzcyIsInByb3RvdHlwZSIsImkiLCJfdG9QcmltaXRpdmUiLCJfdHlwZW9mIiwiU3ltYm9sIiwidG9QcmltaXRpdmUiLCJjYWxsIiwiVHlwZUVycm9yIiwiU3RyaW5nIiwiTnVtYmVyIiwiX2NsYXNzQ2FsbENoZWNrIiwiYSIsIm4iLCJUcmFuc2ZlcnMiLCJjbGllbnQiLCJvcmRlcklkIiwiY2FuY2VsbGF0aW9uIiwiQ2FuY2VsbGF0aW9uIiwiX2RlZmF1bHQiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmYXVsdCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9hbWFkZXVzL25hbWVzcGFjZXMvb3JkZXJpbmcvdHJhbnNmZXJfb3JkZXJzL3RyYW5zZmVycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2FuY2VsbGF0aW9uIGZyb20gJy4vdHJhbnNmZXJzL2NhbmNlbGxhdGlvbic7XG5cbi8qKlxuICogQSBuYW1lc3BhY2VkIGNsaWVudCBmb3IgdGhlXG4gKiBgL3YxL29yZGVyaW5nL3RyYW5zZmVyLW9yZGVycy9YWFhYWC90cmFuc2ZlcnNgIGVuZHBvaW50c1xuICpcbiAqIEFjY2VzcyB2aWEgdGhlIHtAbGluayBBbWFkZXVzfSBvYmplY3RcbiAqXG4gKiBgYGBqc1xuICogbGV0IGFtYWRldXMgPSBuZXcgQW1hZGV1cygpO1xuICogYW1hZGV1cy5vcmRlcmluZy50cmFuc2Zlck9yZGVycygnWFhYJykudHJhbnNmZXJzO1xuICogYGBgXG4gKlxuICogQHBhcmFtIHtDbGllbnR9IGNsaWVudFxuICovXG5jbGFzcyBUcmFuc2ZlcnMge1xuICBjb25zdHJ1Y3RvcihjbGllbnQsIG9yZGVySWQpIHtcbiAgICB0aGlzLmNsaWVudCA9IGNsaWVudDtcbiAgICB0aGlzLm9yZGVySWQgPSBvcmRlcklkO1xuICAgIHRoaXMuY2FuY2VsbGF0aW9uID0gbmV3IENhbmNlbGxhdGlvbihjbGllbnQsIG9yZGVySWQpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRyYW5zZmVyczsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxJQUFBQSxhQUFBLEdBQUFDLHNCQUFBLENBQUFDLE9BQUE7QUFBb0QsU0FBQUQsdUJBQUFFLENBQUEsV0FBQUEsQ0FBQSxJQUFBQSxDQUFBLENBQUFDLFVBQUEsR0FBQUQsQ0FBQSxnQkFBQUEsQ0FBQTtBQUFBLFNBQUFFLGtCQUFBRixDQUFBLEVBQUFHLENBQUEsYUFBQUMsQ0FBQSxNQUFBQSxDQUFBLEdBQUFELENBQUEsQ0FBQUUsTUFBQSxFQUFBRCxDQUFBLFVBQUFFLENBQUEsR0FBQUgsQ0FBQSxDQUFBQyxDQUFBLEdBQUFFLENBQUEsQ0FBQUMsVUFBQSxHQUFBRCxDQUFBLENBQUFDLFVBQUEsUUFBQUQsQ0FBQSxDQUFBRSxZQUFBLGtCQUFBRixDQUFBLEtBQUFBLENBQUEsQ0FBQUcsUUFBQSxRQUFBQyxNQUFBLENBQUFDLGNBQUEsQ0FBQVgsQ0FBQSxFQUFBWSxjQUFBLENBQUFOLENBQUEsQ0FBQU8sR0FBQSxHQUFBUCxDQUFBO0FBQUEsU0FBQVEsYUFBQWQsQ0FBQSxFQUFBRyxDQUFBLEVBQUFDLENBQUEsV0FBQUQsQ0FBQSxJQUFBRCxpQkFBQSxDQUFBRixDQUFBLENBQUFlLFNBQUEsRUFBQVosQ0FBQSxHQUFBQyxDQUFBLElBQUFGLGlCQUFBLENBQUFGLENBQUEsRUFBQUksQ0FBQSxHQUFBTSxNQUFBLENBQUFDLGNBQUEsQ0FBQVgsQ0FBQSxpQkFBQVMsUUFBQSxTQUFBVCxDQUFBO0FBQUEsU0FBQVksZUFBQVIsQ0FBQSxRQUFBWSxDQUFBLEdBQUFDLFlBQUEsQ0FBQWIsQ0FBQSxnQ0FBQWMsT0FBQSxDQUFBRixDQUFBLElBQUFBLENBQUEsR0FBQUEsQ0FBQTtBQUFBLFNBQUFDLGFBQUFiLENBQUEsRUFBQUQsQ0FBQSxvQkFBQWUsT0FBQSxDQUFBZCxDQUFBLE1BQUFBLENBQUEsU0FBQUEsQ0FBQSxNQUFBSixDQUFBLEdBQUFJLENBQUEsQ0FBQWUsTUFBQSxDQUFBQyxXQUFBLGtCQUFBcEIsQ0FBQSxRQUFBZ0IsQ0FBQSxHQUFBaEIsQ0FBQSxDQUFBcUIsSUFBQSxDQUFBakIsQ0FBQSxFQUFBRCxDQUFBLGdDQUFBZSxPQUFBLENBQUFGLENBQUEsVUFBQUEsQ0FBQSxZQUFBTSxTQUFBLHlFQUFBbkIsQ0FBQSxHQUFBb0IsTUFBQSxHQUFBQyxNQUFBLEVBQUFwQixDQUFBO0FBQUEsU0FBQXFCLGdCQUFBQyxDQUFBLEVBQUFDLENBQUEsVUFBQUQsQ0FBQSxZQUFBQyxDQUFBLGFBQUFMLFNBQUE7QUFFcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFaQSxJQWFNTSxTQUFTLGdCQUFBZCxZQUFBLENBQ2IsU0FBQWMsVUFBWUMsTUFBTSxFQUFFQyxPQUFPLEVBQUU7RUFBQUwsZUFBQSxPQUFBRyxTQUFBO0VBQzNCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQSxNQUFNO0VBQ3BCLElBQUksQ0FBQ0MsT0FBTyxHQUFHQSxPQUFPO0VBQ3RCLElBQUksQ0FBQ0MsWUFBWSxHQUFHLElBQUlDLHdCQUFZLENBQUNILE1BQU0sRUFBRUMsT0FBTyxDQUFDO0FBQ3ZELENBQUM7QUFBQSxJQUFBRyxRQUFBLEdBQUFDLE9BQUEsY0FHWU4sU0FBUztBQUFBTyxNQUFBLENBQUFELE9BQUEsR0FBQUEsT0FBQSxDQUFBRSxPQUFBIiwiaWdub3JlTGlzdCI6W119
}),
"[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/ordering/transfer_order.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _transfers = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/ordering/transfer_orders/transfers.js [app-route] (ecmascript)"));
function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        "default": e
    };
}
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
/**
 * A namespaced client for the
 * `/v1/ordering/transfer-orders/XXXXX` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.ordering.transferOrder('XXX');
 * ```
 *
 * @param {Client} client
 * @param {string} orderId
 */ var TransferOrder = /*#__PURE__*/ _createClass(function TransferOrder(client, orderId) {
    _classCallCheck(this, TransferOrder);
    this.client = client;
    this.orderId = orderId;
    this.transfers = new _transfers["default"](client, orderId);
});
var _default = exports["default"] = TransferOrder;
module.exports = exports.default; //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfdHJhbnNmZXJzIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJlIiwiX19lc01vZHVsZSIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwiciIsInQiLCJsZW5ndGgiLCJvIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfdG9Qcm9wZXJ0eUtleSIsImtleSIsIl9jcmVhdGVDbGFzcyIsInByb3RvdHlwZSIsImkiLCJfdG9QcmltaXRpdmUiLCJfdHlwZW9mIiwiU3ltYm9sIiwidG9QcmltaXRpdmUiLCJjYWxsIiwiVHlwZUVycm9yIiwiU3RyaW5nIiwiTnVtYmVyIiwiX2NsYXNzQ2FsbENoZWNrIiwiYSIsIm4iLCJUcmFuc2Zlck9yZGVyIiwiY2xpZW50Iiwib3JkZXJJZCIsInRyYW5zZmVycyIsIlRyYW5zZmVycyIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmF1bHQiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYW1hZGV1cy9uYW1lc3BhY2VzL29yZGVyaW5nL3RyYW5zZmVyX29yZGVyLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBUcmFuc2ZlcnMgZnJvbSAnLi90cmFuc2Zlcl9vcmRlcnMvdHJhbnNmZXJzJztcblxuLyoqXG4gKiBBIG5hbWVzcGFjZWQgY2xpZW50IGZvciB0aGVcbiAqIGAvdjEvb3JkZXJpbmcvdHJhbnNmZXItb3JkZXJzL1hYWFhYYCBlbmRwb2ludHNcbiAqXG4gKiBBY2Nlc3MgdmlhIHRoZSB7QGxpbmsgQW1hZGV1c30gb2JqZWN0XG4gKlxuICogYGBganNcbiAqIGxldCBhbWFkZXVzID0gbmV3IEFtYWRldXMoKTtcbiAqIGFtYWRldXMub3JkZXJpbmcudHJhbnNmZXJPcmRlcignWFhYJyk7XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge0NsaWVudH0gY2xpZW50XG4gKiBAcGFyYW0ge3N0cmluZ30gb3JkZXJJZFxuICovXG5jbGFzcyBUcmFuc2Zlck9yZGVyIHtcbiAgY29uc3RydWN0b3IoY2xpZW50LCBvcmRlcklkKSB7XG4gICAgdGhpcy5jbGllbnQgPSBjbGllbnQ7XG4gICAgdGhpcy5vcmRlcklkID0gb3JkZXJJZDtcbiAgICB0aGlzLnRyYW5zZmVycyA9IG5ldyBUcmFuc2ZlcnMoY2xpZW50LCBvcmRlcklkKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBUcmFuc2Zlck9yZGVyOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLElBQUFBLFVBQUEsR0FBQUMsc0JBQUEsQ0FBQUMsT0FBQTtBQUFvRCxTQUFBRCx1QkFBQUUsQ0FBQSxXQUFBQSxDQUFBLElBQUFBLENBQUEsQ0FBQUMsVUFBQSxHQUFBRCxDQUFBLGdCQUFBQSxDQUFBO0FBQUEsU0FBQUUsa0JBQUFGLENBQUEsRUFBQUcsQ0FBQSxhQUFBQyxDQUFBLE1BQUFBLENBQUEsR0FBQUQsQ0FBQSxDQUFBRSxNQUFBLEVBQUFELENBQUEsVUFBQUUsQ0FBQSxHQUFBSCxDQUFBLENBQUFDLENBQUEsR0FBQUUsQ0FBQSxDQUFBQyxVQUFBLEdBQUFELENBQUEsQ0FBQUMsVUFBQSxRQUFBRCxDQUFBLENBQUFFLFlBQUEsa0JBQUFGLENBQUEsS0FBQUEsQ0FBQSxDQUFBRyxRQUFBLFFBQUFDLE1BQUEsQ0FBQUMsY0FBQSxDQUFBWCxDQUFBLEVBQUFZLGNBQUEsQ0FBQU4sQ0FBQSxDQUFBTyxHQUFBLEdBQUFQLENBQUE7QUFBQSxTQUFBUSxhQUFBZCxDQUFBLEVBQUFHLENBQUEsRUFBQUMsQ0FBQSxXQUFBRCxDQUFBLElBQUFELGlCQUFBLENBQUFGLENBQUEsQ0FBQWUsU0FBQSxFQUFBWixDQUFBLEdBQUFDLENBQUEsSUFBQUYsaUJBQUEsQ0FBQUYsQ0FBQSxFQUFBSSxDQUFBLEdBQUFNLE1BQUEsQ0FBQUMsY0FBQSxDQUFBWCxDQUFBLGlCQUFBUyxRQUFBLFNBQUFULENBQUE7QUFBQSxTQUFBWSxlQUFBUixDQUFBLFFBQUFZLENBQUEsR0FBQUMsWUFBQSxDQUFBYixDQUFBLGdDQUFBYyxPQUFBLENBQUFGLENBQUEsSUFBQUEsQ0FBQSxHQUFBQSxDQUFBO0FBQUEsU0FBQUMsYUFBQWIsQ0FBQSxFQUFBRCxDQUFBLG9CQUFBZSxPQUFBLENBQUFkLENBQUEsTUFBQUEsQ0FBQSxTQUFBQSxDQUFBLE1BQUFKLENBQUEsR0FBQUksQ0FBQSxDQUFBZSxNQUFBLENBQUFDLFdBQUEsa0JBQUFwQixDQUFBLFFBQUFnQixDQUFBLEdBQUFoQixDQUFBLENBQUFxQixJQUFBLENBQUFqQixDQUFBLEVBQUFELENBQUEsZ0NBQUFlLE9BQUEsQ0FBQUYsQ0FBQSxVQUFBQSxDQUFBLFlBQUFNLFNBQUEseUVBQUFuQixDQUFBLEdBQUFvQixNQUFBLEdBQUFDLE1BQUEsRUFBQXBCLENBQUE7QUFBQSxTQUFBcUIsZ0JBQUFDLENBQUEsRUFBQUMsQ0FBQSxVQUFBRCxDQUFBLFlBQUFDLENBQUEsYUFBQUwsU0FBQTtBQUVwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBYkEsSUFjTU0sYUFBYSxnQkFBQWQsWUFBQSxDQUNqQixTQUFBYyxjQUFZQyxNQUFNLEVBQUVDLE9BQU8sRUFBRTtFQUFBTCxlQUFBLE9BQUFHLGFBQUE7RUFDM0IsSUFBSSxDQUFDQyxNQUFNLEdBQUdBLE1BQU07RUFDcEIsSUFBSSxDQUFDQyxPQUFPLEdBQUdBLE9BQU87RUFDdEIsSUFBSSxDQUFDQyxTQUFTLEdBQUcsSUFBSUMscUJBQVMsQ0FBQ0gsTUFBTSxFQUFFQyxPQUFPLENBQUM7QUFDakQsQ0FBQztBQUFBLElBQUFHLFFBQUEsR0FBQUMsT0FBQSxjQUdZTixhQUFhO0FBQUFPLE1BQUEsQ0FBQUQsT0FBQSxHQUFBQSxPQUFBLENBQUFFLE9BQUEiLCJpZ25vcmVMaXN0IjpbXX0=
}),
"[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/ordering.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _transfer_orders = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/ordering/transfer_orders.js [app-route] (ecmascript)"));
var _transfer_order = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/ordering/transfer_order.js [app-route] (ecmascript)"));
function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        "default": e
    };
}
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
/**
 * A namespaced client for the
 * `/v1/ordering` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.ordering;
 * ```
 *
 * @param {Client} client
 * @property {TransferOrders} transferOrders
 * @property {TransferOrder} transferOrder
 */ var Ordering = /*#__PURE__*/ _createClass(function Ordering(client) {
    _classCallCheck(this, Ordering);
    this.client = client;
    this.transferOrders = new _transfer_orders["default"](client);
    this.transferOrder = function(orderId) {
        return new _transfer_order["default"](client, orderId);
    };
});
var _default = exports["default"] = Ordering;
module.exports = exports.default; //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfdHJhbnNmZXJfb3JkZXJzIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfdHJhbnNmZXJfb3JkZXIiLCJlIiwiX19lc01vZHVsZSIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwiciIsInQiLCJsZW5ndGgiLCJvIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfdG9Qcm9wZXJ0eUtleSIsImtleSIsIl9jcmVhdGVDbGFzcyIsInByb3RvdHlwZSIsImkiLCJfdG9QcmltaXRpdmUiLCJfdHlwZW9mIiwiU3ltYm9sIiwidG9QcmltaXRpdmUiLCJjYWxsIiwiVHlwZUVycm9yIiwiU3RyaW5nIiwiTnVtYmVyIiwiX2NsYXNzQ2FsbENoZWNrIiwiYSIsIm4iLCJPcmRlcmluZyIsImNsaWVudCIsInRyYW5zZmVyT3JkZXJzIiwiVHJhbnNmZXJPcmRlcnMiLCJ0cmFuc2Zlck9yZGVyIiwib3JkZXJJZCIsIlRyYW5zZmVyT3JkZXIiLCJfZGVmYXVsdCIsImV4cG9ydHMiLCJtb2R1bGUiLCJkZWZhdWx0Il0sInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL2FtYWRldXMvbmFtZXNwYWNlcy9vcmRlcmluZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgVHJhbnNmZXJPcmRlcnMgZnJvbSAnLi9vcmRlcmluZy90cmFuc2Zlcl9vcmRlcnMnO1xuaW1wb3J0IFRyYW5zZmVyT3JkZXIgZnJvbSAnLi9vcmRlcmluZy90cmFuc2Zlcl9vcmRlcic7XG5cbi8qKlxuICogQSBuYW1lc3BhY2VkIGNsaWVudCBmb3IgdGhlXG4gKiBgL3YxL29yZGVyaW5nYCBlbmRwb2ludHNcbiAqXG4gKiBBY2Nlc3MgdmlhIHRoZSB7QGxpbmsgQW1hZGV1c30gb2JqZWN0XG4gKlxuICogYGBganNcbiAqIGxldCBhbWFkZXVzID0gbmV3IEFtYWRldXMoKTtcbiAqIGFtYWRldXMub3JkZXJpbmc7XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge0NsaWVudH0gY2xpZW50XG4gKiBAcHJvcGVydHkge1RyYW5zZmVyT3JkZXJzfSB0cmFuc2Zlck9yZGVyc1xuICogQHByb3BlcnR5IHtUcmFuc2Zlck9yZGVyfSB0cmFuc2Zlck9yZGVyXG4gKi9cbmNsYXNzIE9yZGVyaW5nIHtcbiAgY29uc3RydWN0b3IoY2xpZW50KSB7XG4gICAgdGhpcy5jbGllbnQgPSBjbGllbnQ7XG4gICAgdGhpcy50cmFuc2Zlck9yZGVycyA9IG5ldyBUcmFuc2Zlck9yZGVycyhjbGllbnQpO1xuICAgIHRoaXMudHJhbnNmZXJPcmRlciA9IChvcmRlcklkKSA9PiBuZXcgVHJhbnNmZXJPcmRlcihjbGllbnQsIG9yZGVySWQpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IE9yZGVyaW5nOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLElBQUFBLGdCQUFBLEdBQUFDLHNCQUFBLENBQUFDLE9BQUE7QUFDQSxJQUFBQyxlQUFBLEdBQUFGLHNCQUFBLENBQUFDLE9BQUE7QUFBc0QsU0FBQUQsdUJBQUFHLENBQUEsV0FBQUEsQ0FBQSxJQUFBQSxDQUFBLENBQUFDLFVBQUEsR0FBQUQsQ0FBQSxnQkFBQUEsQ0FBQTtBQUFBLFNBQUFFLGtCQUFBRixDQUFBLEVBQUFHLENBQUEsYUFBQUMsQ0FBQSxNQUFBQSxDQUFBLEdBQUFELENBQUEsQ0FBQUUsTUFBQSxFQUFBRCxDQUFBLFVBQUFFLENBQUEsR0FBQUgsQ0FBQSxDQUFBQyxDQUFBLEdBQUFFLENBQUEsQ0FBQUMsVUFBQSxHQUFBRCxDQUFBLENBQUFDLFVBQUEsUUFBQUQsQ0FBQSxDQUFBRSxZQUFBLGtCQUFBRixDQUFBLEtBQUFBLENBQUEsQ0FBQUcsUUFBQSxRQUFBQyxNQUFBLENBQUFDLGNBQUEsQ0FBQVgsQ0FBQSxFQUFBWSxjQUFBLENBQUFOLENBQUEsQ0FBQU8sR0FBQSxHQUFBUCxDQUFBO0FBQUEsU0FBQVEsYUFBQWQsQ0FBQSxFQUFBRyxDQUFBLEVBQUFDLENBQUEsV0FBQUQsQ0FBQSxJQUFBRCxpQkFBQSxDQUFBRixDQUFBLENBQUFlLFNBQUEsRUFBQVosQ0FBQSxHQUFBQyxDQUFBLElBQUFGLGlCQUFBLENBQUFGLENBQUEsRUFBQUksQ0FBQSxHQUFBTSxNQUFBLENBQUFDLGNBQUEsQ0FBQVgsQ0FBQSxpQkFBQVMsUUFBQSxTQUFBVCxDQUFBO0FBQUEsU0FBQVksZUFBQVIsQ0FBQSxRQUFBWSxDQUFBLEdBQUFDLFlBQUEsQ0FBQWIsQ0FBQSxnQ0FBQWMsT0FBQSxDQUFBRixDQUFBLElBQUFBLENBQUEsR0FBQUEsQ0FBQTtBQUFBLFNBQUFDLGFBQUFiLENBQUEsRUFBQUQsQ0FBQSxvQkFBQWUsT0FBQSxDQUFBZCxDQUFBLE1BQUFBLENBQUEsU0FBQUEsQ0FBQSxNQUFBSixDQUFBLEdBQUFJLENBQUEsQ0FBQWUsTUFBQSxDQUFBQyxXQUFBLGtCQUFBcEIsQ0FBQSxRQUFBZ0IsQ0FBQSxHQUFBaEIsQ0FBQSxDQUFBcUIsSUFBQSxDQUFBakIsQ0FBQSxFQUFBRCxDQUFBLGdDQUFBZSxPQUFBLENBQUFGLENBQUEsVUFBQUEsQ0FBQSxZQUFBTSxTQUFBLHlFQUFBbkIsQ0FBQSxHQUFBb0IsTUFBQSxHQUFBQyxNQUFBLEVBQUFwQixDQUFBO0FBQUEsU0FBQXFCLGdCQUFBQyxDQUFBLEVBQUFDLENBQUEsVUFBQUQsQ0FBQSxZQUFBQyxDQUFBLGFBQUFMLFNBQUE7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZEEsSUFlTU0sUUFBUSxnQkFBQWQsWUFBQSxDQUNaLFNBQUFjLFNBQVlDLE1BQU0sRUFBRTtFQUFBSixlQUFBLE9BQUFHLFFBQUE7RUFDbEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBLE1BQU07RUFDcEIsSUFBSSxDQUFDQyxjQUFjLEdBQUcsSUFBSUMsMkJBQWMsQ0FBQ0YsTUFBTSxDQUFDO0VBQ2hELElBQUksQ0FBQ0csYUFBYSxHQUFHLFVBQUNDLE9BQU87SUFBQSxPQUFLLElBQUlDLDBCQUFhLENBQUNMLE1BQU0sRUFBRUksT0FBTyxDQUFDO0VBQUE7QUFDdEUsQ0FBQztBQUFBLElBQUFFLFFBQUEsR0FBQUMsT0FBQSxjQUdZUixRQUFRO0FBQUFTLE1BQUEsQ0FBQUQsT0FBQSxHQUFBQSxPQUFBLENBQUFFLE9BQUEiLCJpZ25vcmVMaXN0IjpbXX0=
}),
"[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/airport/direct-destinations.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
/**
 * A namespaced client for the
 * `/v1/airport/direct-destinations` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.airport.directDestinations;
 * ```
 *
 * @param {Client} client
 */ var DirectDestinations = /*#__PURE__*/ function() {
    function DirectDestinations(client) {
        _classCallCheck(this, DirectDestinations);
        this.client = client;
    }
    /**
   * Get the percentage of on-time flight departures from a given airport
   *
   * @param {Object} params
   * @param {string} params.departureAirportCode airport IATA code, e.g. BOS for Boston
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * What destinations are served by this airport?
   *  ```js
   * amadeus.airport.directDestinations.get({
   *   departureAirportCode: 'JFK',
   * })
   * ```
   */ return _createClass(DirectDestinations, [
        {
            key: "get",
            value: function get() {
                var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                return this.client.get('/v1/airport/direct-destinations', params);
            }
        }
    ]);
}();
var _default = exports["default"] = DirectDestinations;
module.exports = exports.default; //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJEaXJlY3REZXN0aW5hdGlvbnMiLCJjbGllbnQiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImdldCIsInBhcmFtcyIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmF1bHQiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYW1hZGV1cy9uYW1lc3BhY2VzL2FpcnBvcnQvZGlyZWN0LWRlc3RpbmF0aW9ucy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEEgbmFtZXNwYWNlZCBjbGllbnQgZm9yIHRoZVxuICogYC92MS9haXJwb3J0L2RpcmVjdC1kZXN0aW5hdGlvbnNgIGVuZHBvaW50c1xuICpcbiAqIEFjY2VzcyB2aWEgdGhlIHtAbGluayBBbWFkZXVzfSBvYmplY3RcbiAqXG4gKiBgYGBqc1xuICogbGV0IGFtYWRldXMgPSBuZXcgQW1hZGV1cygpO1xuICogYW1hZGV1cy5haXJwb3J0LmRpcmVjdERlc3RpbmF0aW9ucztcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7Q2xpZW50fSBjbGllbnRcbiAqL1xuY2xhc3MgRGlyZWN0RGVzdGluYXRpb25zIHtcbiAgY29uc3RydWN0b3IoY2xpZW50KSB7XG4gICAgdGhpcy5jbGllbnQgPSBjbGllbnQ7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBwZXJjZW50YWdlIG9mIG9uLXRpbWUgZmxpZ2h0IGRlcGFydHVyZXMgZnJvbSBhIGdpdmVuIGFpcnBvcnRcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zLmRlcGFydHVyZUFpcnBvcnRDb2RlIGFpcnBvcnQgSUFUQSBjb2RlLCBlLmcuIEJPUyBmb3IgQm9zdG9uXG4gICAqIEByZXR1cm4ge1Byb21pc2UuPFJlc3BvbnNlLFJlc3BvbnNlRXJyb3I+fSBhIFByb21pc2VcbiAgICpcbiAgICogV2hhdCBkZXN0aW5hdGlvbnMgYXJlIHNlcnZlZCBieSB0aGlzIGFpcnBvcnQ/XG4gICAqICBgYGBqc1xuICAgKiBhbWFkZXVzLmFpcnBvcnQuZGlyZWN0RGVzdGluYXRpb25zLmdldCh7XG4gICAqICAgZGVwYXJ0dXJlQWlycG9ydENvZGU6ICdKRksnLFxuICAgKiB9KVxuICAgKiBgYGBcbiAgICovXG4gIGdldChwYXJhbXMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmNsaWVudC5nZXQoJy92MS9haXJwb3J0L2RpcmVjdC1kZXN0aW5hdGlvbnMnLCBwYXJhbXMpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IERpcmVjdERlc3RpbmF0aW9uczsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWkEsSUFhTUEsa0JBQWtCO0VBQ3RCLFNBQUFBLG1CQUFZQyxNQUFNLEVBQUU7SUFBQUMsZUFBQSxPQUFBRixrQkFBQTtJQUNsQixJQUFJLENBQUNDLE1BQU0sR0FBR0EsTUFBTTtFQUN0Qjs7RUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBYkUsT0FBQUUsWUFBQSxDQUFBSCxrQkFBQTtJQUFBSSxHQUFBO0lBQUFDLEtBQUEsRUFjQSxTQUFBQyxHQUFHQSxDQUFBLEVBQWM7TUFBQSxJQUFiQyxNQUFNLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFHLENBQUMsQ0FBQztNQUNiLE9BQU8sSUFBSSxDQUFDUCxNQUFNLENBQUNLLEdBQUcsQ0FBQyxpQ0FBaUMsRUFBRUMsTUFBTSxDQUFDO0lBQ25FO0VBQUM7QUFBQTtBQUFBLElBQUFJLFFBQUEsR0FBQUMsT0FBQSxjQUdZWixrQkFBa0I7QUFBQWEsTUFBQSxDQUFBRCxPQUFBLEdBQUFBLE9BQUEsQ0FBQUUsT0FBQSIsImlnbm9yZUxpc3QiOltdfQ==
}),
"[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/airport/predictions/on_time.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
/**
 * A namespaced client for the
 * `/v1/airport/predictions/on-time` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.airport.predictions.onTime;
 * ```
 *
 * @param {Client} client
 */ var OnTime = /*#__PURE__*/ function() {
    function OnTime(client) {
        _classCallCheck(this, OnTime);
        this.client = client;
    }
    /**
   * Get the percentage of on-time flight departures from a given airport
   *
   * @param {Object} params
   * @param {string} params.airportCode airport IATA code, e.g. BOS for Boston
   * @param {string} params.date the date on which the traveler will depart
   * from the give airport. Dates are specified in the ISO 8601 YYYY-MM-DD format, e.g. 2019-12-25
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * Get the percentage of on-time flight departures from JFK
   *
   * ```js
   * amadeus.airport.predictions.onTime.get({
   *   airportCode: 'JFK',
   *   date: '2020-08-01'
   * })
   * ```
   */ return _createClass(OnTime, [
        {
            key: "get",
            value: function get() {
                var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                return this.client.get('/v1/airport/predictions/on-time', params);
            }
        }
    ]);
}();
var _default = exports["default"] = OnTime;
module.exports = exports.default; //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJPblRpbWUiLCJjbGllbnQiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImdldCIsInBhcmFtcyIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmF1bHQiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvYW1hZGV1cy9uYW1lc3BhY2VzL2FpcnBvcnQvcHJlZGljdGlvbnMvb25fdGltZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEEgbmFtZXNwYWNlZCBjbGllbnQgZm9yIHRoZVxuICogYC92MS9haXJwb3J0L3ByZWRpY3Rpb25zL29uLXRpbWVgIGVuZHBvaW50c1xuICpcbiAqIEFjY2VzcyB2aWEgdGhlIHtAbGluayBBbWFkZXVzfSBvYmplY3RcbiAqXG4gKiBgYGBqc1xuICogbGV0IGFtYWRldXMgPSBuZXcgQW1hZGV1cygpO1xuICogYW1hZGV1cy5haXJwb3J0LnByZWRpY3Rpb25zLm9uVGltZTtcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7Q2xpZW50fSBjbGllbnRcbiAqL1xuY2xhc3MgT25UaW1lIHtcbiAgY29uc3RydWN0b3IoY2xpZW50KSB7XG4gICAgdGhpcy5jbGllbnQgPSBjbGllbnQ7XG4gIH1cblxuICAvKipcbiAgICogR2V0IHRoZSBwZXJjZW50YWdlIG9mIG9uLXRpbWUgZmxpZ2h0IGRlcGFydHVyZXMgZnJvbSBhIGdpdmVuIGFpcnBvcnRcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtc1xuICAgKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zLmFpcnBvcnRDb2RlIGFpcnBvcnQgSUFUQSBjb2RlLCBlLmcuIEJPUyBmb3IgQm9zdG9uXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMuZGF0ZSB0aGUgZGF0ZSBvbiB3aGljaCB0aGUgdHJhdmVsZXIgd2lsbCBkZXBhcnRcbiAgICogZnJvbSB0aGUgZ2l2ZSBhaXJwb3J0LiBEYXRlcyBhcmUgc3BlY2lmaWVkIGluIHRoZSBJU08gODYwMSBZWVlZLU1NLUREIGZvcm1hdCwgZS5nLiAyMDE5LTEyLTI1XG4gICAqIEByZXR1cm4ge1Byb21pc2UuPFJlc3BvbnNlLFJlc3BvbnNlRXJyb3I+fSBhIFByb21pc2VcbiAgICpcbiAgICogR2V0IHRoZSBwZXJjZW50YWdlIG9mIG9uLXRpbWUgZmxpZ2h0IGRlcGFydHVyZXMgZnJvbSBKRktcbiAgICpcbiAgICogYGBganNcbiAgICogYW1hZGV1cy5haXJwb3J0LnByZWRpY3Rpb25zLm9uVGltZS5nZXQoe1xuICAgKiAgIGFpcnBvcnRDb2RlOiAnSkZLJyxcbiAgICogICBkYXRlOiAnMjAyMC0wOC0wMSdcbiAgICogfSlcbiAgICogYGBgXG4gICAqL1xuICBnZXQocGFyYW1zID0ge30pIHtcbiAgICByZXR1cm4gdGhpcy5jbGllbnQuZ2V0KCcvdjEvYWlycG9ydC9wcmVkaWN0aW9ucy9vbi10aW1lJywgcGFyYW1zKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBPblRpbWU7Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBLElBYU1BLE1BQU07RUFDVixTQUFBQSxPQUFZQyxNQUFNLEVBQUU7SUFBQUMsZUFBQSxPQUFBRixNQUFBO0lBQ2xCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQSxNQUFNO0VBQ3RCOztFQUVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQWpCRSxPQUFBRSxZQUFBLENBQUFILE1BQUE7SUFBQUksR0FBQTtJQUFBQyxLQUFBLEVBa0JBLFNBQUFDLEdBQUdBLENBQUEsRUFBYztNQUFBLElBQWJDLE1BQU0sR0FBQUMsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUcsQ0FBQyxDQUFDO01BQ2IsT0FBTyxJQUFJLENBQUNQLE1BQU0sQ0FBQ0ssR0FBRyxDQUFDLGlDQUFpQyxFQUFFQyxNQUFNLENBQUM7SUFDbkU7RUFBQztBQUFBO0FBQUEsSUFBQUksUUFBQSxHQUFBQyxPQUFBLGNBR1laLE1BQU07QUFBQWEsTUFBQSxDQUFBRCxPQUFBLEdBQUFBLE9BQUEsQ0FBQUUsT0FBQSIsImlnbm9yZUxpc3QiOltdfQ==
}),
"[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/airport/predictions.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _on_time = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/airport/predictions/on_time.js [app-route] (ecmascript)"));
function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        "default": e
    };
}
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
/**
 * A namespaced client for the
 * `/v1/airport/predictions` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.airport;
 * ```
 *
 * @param {Client} client
 * @property {predictions} OnTime
 */ var Predictions = /*#__PURE__*/ _createClass(function Predictions(client) {
    _classCallCheck(this, Predictions);
    this.client = client;
    this.onTime = new _on_time["default"](client);
});
var _default = exports["default"] = Predictions;
module.exports = exports.default; //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfb25fdGltZSIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiZSIsIl9fZXNNb2R1bGUiLCJfZGVmaW5lUHJvcGVydGllcyIsInIiLCJ0IiwibGVuZ3RoIiwibyIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX3RvUHJvcGVydHlLZXkiLCJrZXkiLCJfY3JlYXRlQ2xhc3MiLCJwcm90b3R5cGUiLCJpIiwiX3RvUHJpbWl0aXZlIiwiX3R5cGVvZiIsIlN5bWJvbCIsInRvUHJpbWl0aXZlIiwiY2FsbCIsIlR5cGVFcnJvciIsIlN0cmluZyIsIk51bWJlciIsIl9jbGFzc0NhbGxDaGVjayIsImEiLCJuIiwiUHJlZGljdGlvbnMiLCJjbGllbnQiLCJvblRpbWUiLCJPblRpbWUiLCJfZGVmYXVsdCIsImV4cG9ydHMiLCJtb2R1bGUiLCJkZWZhdWx0Il0sInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FtYWRldXMvbmFtZXNwYWNlcy9haXJwb3J0L3ByZWRpY3Rpb25zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBPblRpbWUgICAgZnJvbSAnLi9wcmVkaWN0aW9ucy9vbl90aW1lJztcblxuLyoqXG4gKiBBIG5hbWVzcGFjZWQgY2xpZW50IGZvciB0aGVcbiAqIGAvdjEvYWlycG9ydC9wcmVkaWN0aW9uc2AgZW5kcG9pbnRzXG4gKlxuICogQWNjZXNzIHZpYSB0aGUge0BsaW5rIEFtYWRldXN9IG9iamVjdFxuICpcbiAqIGBgYGpzXG4gKiBsZXQgYW1hZGV1cyA9IG5ldyBBbWFkZXVzKCk7XG4gKiBhbWFkZXVzLmFpcnBvcnQ7XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge0NsaWVudH0gY2xpZW50XG4gKiBAcHJvcGVydHkge3ByZWRpY3Rpb25zfSBPblRpbWVcbiAqL1xuY2xhc3MgUHJlZGljdGlvbnMge1xuICBjb25zdHJ1Y3RvcihjbGllbnQpIHtcbiAgICB0aGlzLmNsaWVudCA9IGNsaWVudDtcbiAgICB0aGlzLm9uVGltZSA9IG5ldyBPblRpbWUoY2xpZW50KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQcmVkaWN0aW9uczsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxJQUFBQSxRQUFBLEdBQUFDLHNCQUFBLENBQUFDLE9BQUE7QUFBOEMsU0FBQUQsdUJBQUFFLENBQUEsV0FBQUEsQ0FBQSxJQUFBQSxDQUFBLENBQUFDLFVBQUEsR0FBQUQsQ0FBQSxnQkFBQUEsQ0FBQTtBQUFBLFNBQUFFLGtCQUFBRixDQUFBLEVBQUFHLENBQUEsYUFBQUMsQ0FBQSxNQUFBQSxDQUFBLEdBQUFELENBQUEsQ0FBQUUsTUFBQSxFQUFBRCxDQUFBLFVBQUFFLENBQUEsR0FBQUgsQ0FBQSxDQUFBQyxDQUFBLEdBQUFFLENBQUEsQ0FBQUMsVUFBQSxHQUFBRCxDQUFBLENBQUFDLFVBQUEsUUFBQUQsQ0FBQSxDQUFBRSxZQUFBLGtCQUFBRixDQUFBLEtBQUFBLENBQUEsQ0FBQUcsUUFBQSxRQUFBQyxNQUFBLENBQUFDLGNBQUEsQ0FBQVgsQ0FBQSxFQUFBWSxjQUFBLENBQUFOLENBQUEsQ0FBQU8sR0FBQSxHQUFBUCxDQUFBO0FBQUEsU0FBQVEsYUFBQWQsQ0FBQSxFQUFBRyxDQUFBLEVBQUFDLENBQUEsV0FBQUQsQ0FBQSxJQUFBRCxpQkFBQSxDQUFBRixDQUFBLENBQUFlLFNBQUEsRUFBQVosQ0FBQSxHQUFBQyxDQUFBLElBQUFGLGlCQUFBLENBQUFGLENBQUEsRUFBQUksQ0FBQSxHQUFBTSxNQUFBLENBQUFDLGNBQUEsQ0FBQVgsQ0FBQSxpQkFBQVMsUUFBQSxTQUFBVCxDQUFBO0FBQUEsU0FBQVksZUFBQVIsQ0FBQSxRQUFBWSxDQUFBLEdBQUFDLFlBQUEsQ0FBQWIsQ0FBQSxnQ0FBQWMsT0FBQSxDQUFBRixDQUFBLElBQUFBLENBQUEsR0FBQUEsQ0FBQTtBQUFBLFNBQUFDLGFBQUFiLENBQUEsRUFBQUQsQ0FBQSxvQkFBQWUsT0FBQSxDQUFBZCxDQUFBLE1BQUFBLENBQUEsU0FBQUEsQ0FBQSxNQUFBSixDQUFBLEdBQUFJLENBQUEsQ0FBQWUsTUFBQSxDQUFBQyxXQUFBLGtCQUFBcEIsQ0FBQSxRQUFBZ0IsQ0FBQSxHQUFBaEIsQ0FBQSxDQUFBcUIsSUFBQSxDQUFBakIsQ0FBQSxFQUFBRCxDQUFBLGdDQUFBZSxPQUFBLENBQUFGLENBQUEsVUFBQUEsQ0FBQSxZQUFBTSxTQUFBLHlFQUFBbkIsQ0FBQSxHQUFBb0IsTUFBQSxHQUFBQyxNQUFBLEVBQUFwQixDQUFBO0FBQUEsU0FBQXFCLGdCQUFBQyxDQUFBLEVBQUFDLENBQUEsVUFBQUQsQ0FBQSxZQUFBQyxDQUFBLGFBQUFMLFNBQUE7QUFFOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWJBLElBY01NLFdBQVcsZ0JBQUFkLFlBQUEsQ0FDZixTQUFBYyxZQUFZQyxNQUFNLEVBQUU7RUFBQUosZUFBQSxPQUFBRyxXQUFBO0VBQ2xCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQSxNQUFNO0VBQ3BCLElBQUksQ0FBQ0MsTUFBTSxHQUFHLElBQUlDLG1CQUFNLENBQUNGLE1BQU0sQ0FBQztBQUNsQyxDQUFDO0FBQUEsSUFBQUcsUUFBQSxHQUFBQyxPQUFBLGNBR1lMLFdBQVc7QUFBQU0sTUFBQSxDQUFBRCxPQUFBLEdBQUFBLE9BQUEsQ0FBQUUsT0FBQSIsImlnbm9yZUxpc3QiOltdfQ==
}),
"[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/airport.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _directDestinations = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/airport/direct-destinations.js [app-route] (ecmascript)"));
var _predictions = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/airport/predictions.js [app-route] (ecmascript)"));
function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        "default": e
    };
}
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
/**
 * A namespaced client for the
 * `/v1/airport` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.airport;
 * ```
 *
 * @param {Client} client
 * @property {predictions} predictions
 */ var Airport = /*#__PURE__*/ _createClass(function Airport(client) {
    _classCallCheck(this, Airport);
    this.client = client;
    this.directDestinations = new _directDestinations["default"](client);
    this.predictions = new _predictions["default"](client);
});
var _default = exports["default"] = Airport;
module.exports = exports.default; //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZGlyZWN0RGVzdGluYXRpb25zIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfcHJlZGljdGlvbnMiLCJlIiwiX19lc01vZHVsZSIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwiciIsInQiLCJsZW5ndGgiLCJvIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfdG9Qcm9wZXJ0eUtleSIsImtleSIsIl9jcmVhdGVDbGFzcyIsInByb3RvdHlwZSIsImkiLCJfdG9QcmltaXRpdmUiLCJfdHlwZW9mIiwiU3ltYm9sIiwidG9QcmltaXRpdmUiLCJjYWxsIiwiVHlwZUVycm9yIiwiU3RyaW5nIiwiTnVtYmVyIiwiX2NsYXNzQ2FsbENoZWNrIiwiYSIsIm4iLCJBaXJwb3J0IiwiY2xpZW50IiwiZGlyZWN0RGVzdGluYXRpb25zIiwiRGlyZWN0RGVzdGluYXRpb25zIiwicHJlZGljdGlvbnMiLCJQcmVkaWN0aW9ucyIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmF1bHQiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYW1hZGV1cy9uYW1lc3BhY2VzL2FpcnBvcnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IERpcmVjdERlc3RpbmF0aW9ucyBmcm9tICcuL2FpcnBvcnQvZGlyZWN0LWRlc3RpbmF0aW9ucyc7XG5pbXBvcnQgUHJlZGljdGlvbnMgICAgZnJvbSAnLi9haXJwb3J0L3ByZWRpY3Rpb25zJztcblxuLyoqXG4gKiBBIG5hbWVzcGFjZWQgY2xpZW50IGZvciB0aGVcbiAqIGAvdjEvYWlycG9ydGAgZW5kcG9pbnRzXG4gKlxuICogQWNjZXNzIHZpYSB0aGUge0BsaW5rIEFtYWRldXN9IG9iamVjdFxuICpcbiAqIGBgYGpzXG4gKiBsZXQgYW1hZGV1cyA9IG5ldyBBbWFkZXVzKCk7XG4gKiBhbWFkZXVzLmFpcnBvcnQ7XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge0NsaWVudH0gY2xpZW50XG4gKiBAcHJvcGVydHkge3ByZWRpY3Rpb25zfSBwcmVkaWN0aW9uc1xuICovXG5jbGFzcyBBaXJwb3J0IHtcbiAgY29uc3RydWN0b3IoY2xpZW50KSB7XG4gICAgdGhpcy5jbGllbnQgICAgICAgICAgICAgPSBjbGllbnQ7XG4gICAgdGhpcy5kaXJlY3REZXN0aW5hdGlvbnMgPSBuZXcgRGlyZWN0RGVzdGluYXRpb25zKGNsaWVudCk7XG4gICAgdGhpcy5wcmVkaWN0aW9ucyA9IG5ldyBQcmVkaWN0aW9ucyhjbGllbnQpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFpcnBvcnQ7Il0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUEsSUFBQUEsbUJBQUEsR0FBQUMsc0JBQUEsQ0FBQUMsT0FBQTtBQUNBLElBQUFDLFlBQUEsR0FBQUYsc0JBQUEsQ0FBQUMsT0FBQTtBQUFtRCxTQUFBRCx1QkFBQUcsQ0FBQSxXQUFBQSxDQUFBLElBQUFBLENBQUEsQ0FBQUMsVUFBQSxHQUFBRCxDQUFBLGdCQUFBQSxDQUFBO0FBQUEsU0FBQUUsa0JBQUFGLENBQUEsRUFBQUcsQ0FBQSxhQUFBQyxDQUFBLE1BQUFBLENBQUEsR0FBQUQsQ0FBQSxDQUFBRSxNQUFBLEVBQUFELENBQUEsVUFBQUUsQ0FBQSxHQUFBSCxDQUFBLENBQUFDLENBQUEsR0FBQUUsQ0FBQSxDQUFBQyxVQUFBLEdBQUFELENBQUEsQ0FBQUMsVUFBQSxRQUFBRCxDQUFBLENBQUFFLFlBQUEsa0JBQUFGLENBQUEsS0FBQUEsQ0FBQSxDQUFBRyxRQUFBLFFBQUFDLE1BQUEsQ0FBQUMsY0FBQSxDQUFBWCxDQUFBLEVBQUFZLGNBQUEsQ0FBQU4sQ0FBQSxDQUFBTyxHQUFBLEdBQUFQLENBQUE7QUFBQSxTQUFBUSxhQUFBZCxDQUFBLEVBQUFHLENBQUEsRUFBQUMsQ0FBQSxXQUFBRCxDQUFBLElBQUFELGlCQUFBLENBQUFGLENBQUEsQ0FBQWUsU0FBQSxFQUFBWixDQUFBLEdBQUFDLENBQUEsSUFBQUYsaUJBQUEsQ0FBQUYsQ0FBQSxFQUFBSSxDQUFBLEdBQUFNLE1BQUEsQ0FBQUMsY0FBQSxDQUFBWCxDQUFBLGlCQUFBUyxRQUFBLFNBQUFULENBQUE7QUFBQSxTQUFBWSxlQUFBUixDQUFBLFFBQUFZLENBQUEsR0FBQUMsWUFBQSxDQUFBYixDQUFBLGdDQUFBYyxPQUFBLENBQUFGLENBQUEsSUFBQUEsQ0FBQSxHQUFBQSxDQUFBO0FBQUEsU0FBQUMsYUFBQWIsQ0FBQSxFQUFBRCxDQUFBLG9CQUFBZSxPQUFBLENBQUFkLENBQUEsTUFBQUEsQ0FBQSxTQUFBQSxDQUFBLE1BQUFKLENBQUEsR0FBQUksQ0FBQSxDQUFBZSxNQUFBLENBQUFDLFdBQUEsa0JBQUFwQixDQUFBLFFBQUFnQixDQUFBLEdBQUFoQixDQUFBLENBQUFxQixJQUFBLENBQUFqQixDQUFBLEVBQUFELENBQUEsZ0NBQUFlLE9BQUEsQ0FBQUYsQ0FBQSxVQUFBQSxDQUFBLFlBQUFNLFNBQUEseUVBQUFuQixDQUFBLEdBQUFvQixNQUFBLEdBQUFDLE1BQUEsRUFBQXBCLENBQUE7QUFBQSxTQUFBcUIsZ0JBQUFDLENBQUEsRUFBQUMsQ0FBQSxVQUFBRCxDQUFBLFlBQUFDLENBQUEsYUFBQUwsU0FBQTtBQUVuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBYkEsSUFjTU0sT0FBTyxnQkFBQWQsWUFBQSxDQUNYLFNBQUFjLFFBQVlDLE1BQU0sRUFBRTtFQUFBSixlQUFBLE9BQUFHLE9BQUE7RUFDbEIsSUFBSSxDQUFDQyxNQUFNLEdBQWVBLE1BQU07RUFDaEMsSUFBSSxDQUFDQyxrQkFBa0IsR0FBRyxJQUFJQyw4QkFBa0IsQ0FBQ0YsTUFBTSxDQUFDO0VBQ3hELElBQUksQ0FBQ0csV0FBVyxHQUFHLElBQUlDLHVCQUFXLENBQUNKLE1BQU0sQ0FBQztBQUM1QyxDQUFDO0FBQUEsSUFBQUssUUFBQSxHQUFBQyxPQUFBLGNBR1lQLE9BQU87QUFBQVEsTUFBQSxDQUFBRCxPQUFBLEdBQUFBLE9BQUEsQ0FBQUUsT0FBQSIsImlnbm9yZUxpc3QiOltdfQ==
}),
"[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/schedule/flights.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
/**
 * A namespaced client for the
 * `/v2/schedule/flights` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.schedule.flights;
 * ```
 *
 * @param {Client} client
 */ var Flights = /*#__PURE__*/ function() {
    function Flights(client) {
        _classCallCheck(this, Flights);
        this.client = client;
    }
    /**
   * Provides real-time flight schedule data including up-to-date departure and arrival times,
   *  terminal and gate information, flight duration and real-time delay status
   *
   * @param {Object} params
   * @param {Double} params.carrierCode 2 to 3-character IATA carrier code - required
   * @param {Double} params.flightNumber 1 to 4-digit number of the flight. e.g. 4537 - required
   * @param {Double} params.scheduledDepartureDate scheduled departure date of the flight, local to the departure airport - required
   * @return {Promise.<Response,ResponseError>} a Promise
   * What's the current status of my flight?
   * ```js
   * amadeus.schedule.flights.get({
   * carrierCode: 'AZ',
   * flightNumber: '319',
   * scheduledDepartureDate: '2021-03-13'
   * });
   * ```
   */ return _createClass(Flights, [
        {
            key: "get",
            value: function get() {
                var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                return this.client.get('/v2/schedule/flights', params);
            }
        }
    ]);
}();
var _default = exports["default"] = Flights;
module.exports = exports.default; //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJGbGlnaHRzIiwiY2xpZW50IiwiX2NsYXNzQ2FsbENoZWNrIiwiX2NyZWF0ZUNsYXNzIiwia2V5IiwidmFsdWUiLCJnZXQiLCJwYXJhbXMiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJ1bmRlZmluZWQiLCJfZGVmYXVsdCIsImV4cG9ydHMiLCJtb2R1bGUiLCJkZWZhdWx0Il0sInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vc3JjL2FtYWRldXMvbmFtZXNwYWNlcy9zY2hlZHVsZS9mbGlnaHRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQSBuYW1lc3BhY2VkIGNsaWVudCBmb3IgdGhlXG4gKiBgL3YyL3NjaGVkdWxlL2ZsaWdodHNgIGVuZHBvaW50c1xuICpcbiAqIEFjY2VzcyB2aWEgdGhlIHtAbGluayBBbWFkZXVzfSBvYmplY3RcbiAqXG4gKiBgYGBqc1xuICogbGV0IGFtYWRldXMgPSBuZXcgQW1hZGV1cygpO1xuICogYW1hZGV1cy5zY2hlZHVsZS5mbGlnaHRzO1xuICogYGBgXG4gKlxuICogQHBhcmFtIHtDbGllbnR9IGNsaWVudFxuICovXG5jbGFzcyBGbGlnaHRzIHtcbiAgY29uc3RydWN0b3IoY2xpZW50KSB7XG4gICAgdGhpcy5jbGllbnQgPSBjbGllbnQ7XG4gIH1cblxuICAvKipcbiAgICogUHJvdmlkZXMgcmVhbC10aW1lIGZsaWdodCBzY2hlZHVsZSBkYXRhIGluY2x1ZGluZyB1cC10by1kYXRlIGRlcGFydHVyZSBhbmQgYXJyaXZhbCB0aW1lcyxcbiAgICogIHRlcm1pbmFsIGFuZCBnYXRlIGluZm9ybWF0aW9uLCBmbGlnaHQgZHVyYXRpb24gYW5kIHJlYWwtdGltZSBkZWxheSBzdGF0dXNcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtc1xuICAgKiBAcGFyYW0ge0RvdWJsZX0gcGFyYW1zLmNhcnJpZXJDb2RlIDIgdG8gMy1jaGFyYWN0ZXIgSUFUQSBjYXJyaWVyIGNvZGUgLSByZXF1aXJlZFxuICAgKiBAcGFyYW0ge0RvdWJsZX0gcGFyYW1zLmZsaWdodE51bWJlciAxIHRvIDQtZGlnaXQgbnVtYmVyIG9mIHRoZSBmbGlnaHQuIGUuZy4gNDUzNyAtIHJlcXVpcmVkXG4gICAqIEBwYXJhbSB7RG91YmxlfSBwYXJhbXMuc2NoZWR1bGVkRGVwYXJ0dXJlRGF0ZSBzY2hlZHVsZWQgZGVwYXJ0dXJlIGRhdGUgb2YgdGhlIGZsaWdodCwgbG9jYWwgdG8gdGhlIGRlcGFydHVyZSBhaXJwb3J0IC0gcmVxdWlyZWRcbiAgICogQHJldHVybiB7UHJvbWlzZS48UmVzcG9uc2UsUmVzcG9uc2VFcnJvcj59IGEgUHJvbWlzZVxuICAgKiBXaGF0J3MgdGhlIGN1cnJlbnQgc3RhdHVzIG9mIG15IGZsaWdodD9cbiAgICogYGBganNcbiAgICogYW1hZGV1cy5zY2hlZHVsZS5mbGlnaHRzLmdldCh7XG4gICAqIGNhcnJpZXJDb2RlOiAnQVonLFxuICAgKiBmbGlnaHROdW1iZXI6ICczMTknLFxuICAgKiBzY2hlZHVsZWREZXBhcnR1cmVEYXRlOiAnMjAyMS0wMy0xMydcbiAgICogfSk7XG4gICAqIGBgYFxuICAgKi9cbiAgZ2V0KHBhcmFtcyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuY2xpZW50LmdldCgnL3YyL3NjaGVkdWxlL2ZsaWdodHMnLCBwYXJhbXMpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEZsaWdodHM7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWkEsSUFhTUEsT0FBTztFQUNYLFNBQUFBLFFBQVlDLE1BQU0sRUFBRTtJQUFBQyxlQUFBLE9BQUFGLE9BQUE7SUFDbEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBLE1BQU07RUFDdEI7O0VBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBakJFLE9BQUFFLFlBQUEsQ0FBQUgsT0FBQTtJQUFBSSxHQUFBO0lBQUFDLEtBQUEsRUFrQkEsU0FBQUMsR0FBR0EsQ0FBQSxFQUFjO01BQUEsSUFBYkMsTUFBTSxHQUFBQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBRyxDQUFDLENBQUM7TUFDYixPQUFPLElBQUksQ0FBQ1AsTUFBTSxDQUFDSyxHQUFHLENBQUMsc0JBQXNCLEVBQUVDLE1BQU0sQ0FBQztJQUN4RDtFQUFDO0FBQUE7QUFBQSxJQUFBSSxRQUFBLEdBQUFDLE9BQUEsY0FHWVosT0FBTztBQUFBYSxNQUFBLENBQUFELE9BQUEsR0FBQUEsT0FBQSxDQUFBRSxPQUFBIiwiaWdub3JlTGlzdCI6W119
}),
"[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/schedule.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _flights = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/schedule/flights.js [app-route] (ecmascript)"));
function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        "default": e
    };
}
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
/**
 * A namespaced client for the
 * `/v2/schedule` endpoints
 *
 * Access via the {Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.schedule.flights;
 * ```
 *
 * @param {Client} client
 * @property {Flights} flights
 * @protected
 */ var Schedule = /*#__PURE__*/ _createClass(function Schedule(client) {
    _classCallCheck(this, Schedule);
    this.client = client;
    this.flights = new _flights["default"](client);
});
var _default = exports["default"] = Schedule;
module.exports = exports.default; //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZmxpZ2h0cyIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiZSIsIl9fZXNNb2R1bGUiLCJfZGVmaW5lUHJvcGVydGllcyIsInIiLCJ0IiwibGVuZ3RoIiwibyIsImVudW1lcmFibGUiLCJjb25maWd1cmFibGUiLCJ3cml0YWJsZSIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwiX3RvUHJvcGVydHlLZXkiLCJrZXkiLCJfY3JlYXRlQ2xhc3MiLCJwcm90b3R5cGUiLCJpIiwiX3RvUHJpbWl0aXZlIiwiX3R5cGVvZiIsIlN5bWJvbCIsInRvUHJpbWl0aXZlIiwiY2FsbCIsIlR5cGVFcnJvciIsIlN0cmluZyIsIk51bWJlciIsIl9jbGFzc0NhbGxDaGVjayIsImEiLCJuIiwiU2NoZWR1bGUiLCJjbGllbnQiLCJmbGlnaHRzIiwiRmxpZ2h0cyIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmF1bHQiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYW1hZGV1cy9uYW1lc3BhY2VzL3NjaGVkdWxlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBGbGlnaHRzIGZyb20gJy4vc2NoZWR1bGUvZmxpZ2h0cyc7XG5cbi8qKlxuICogQSBuYW1lc3BhY2VkIGNsaWVudCBmb3IgdGhlXG4gKiBgL3YyL3NjaGVkdWxlYCBlbmRwb2ludHNcbiAqXG4gKiBBY2Nlc3MgdmlhIHRoZSB7QW1hZGV1c30gb2JqZWN0XG4gKlxuICogYGBganNcbiAqIGxldCBhbWFkZXVzID0gbmV3IEFtYWRldXMoKTtcbiAqIGFtYWRldXMuc2NoZWR1bGUuZmxpZ2h0cztcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7Q2xpZW50fSBjbGllbnRcbiAqIEBwcm9wZXJ0eSB7RmxpZ2h0c30gZmxpZ2h0c1xuICogQHByb3RlY3RlZFxuICovXG5jbGFzcyBTY2hlZHVsZSB7XG4gIGNvbnN0cnVjdG9yKGNsaWVudCkge1xuICAgIHRoaXMuY2xpZW50ID0gY2xpZW50O1xuICAgIHRoaXMuZmxpZ2h0cyA9IG5ldyBGbGlnaHRzKGNsaWVudCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2NoZWR1bGU7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxJQUFBQSxRQUFBLEdBQUFDLHNCQUFBLENBQUFDLE9BQUE7QUFBeUMsU0FBQUQsdUJBQUFFLENBQUEsV0FBQUEsQ0FBQSxJQUFBQSxDQUFBLENBQUFDLFVBQUEsR0FBQUQsQ0FBQSxnQkFBQUEsQ0FBQTtBQUFBLFNBQUFFLGtCQUFBRixDQUFBLEVBQUFHLENBQUEsYUFBQUMsQ0FBQSxNQUFBQSxDQUFBLEdBQUFELENBQUEsQ0FBQUUsTUFBQSxFQUFBRCxDQUFBLFVBQUFFLENBQUEsR0FBQUgsQ0FBQSxDQUFBQyxDQUFBLEdBQUFFLENBQUEsQ0FBQUMsVUFBQSxHQUFBRCxDQUFBLENBQUFDLFVBQUEsUUFBQUQsQ0FBQSxDQUFBRSxZQUFBLGtCQUFBRixDQUFBLEtBQUFBLENBQUEsQ0FBQUcsUUFBQSxRQUFBQyxNQUFBLENBQUFDLGNBQUEsQ0FBQVgsQ0FBQSxFQUFBWSxjQUFBLENBQUFOLENBQUEsQ0FBQU8sR0FBQSxHQUFBUCxDQUFBO0FBQUEsU0FBQVEsYUFBQWQsQ0FBQSxFQUFBRyxDQUFBLEVBQUFDLENBQUEsV0FBQUQsQ0FBQSxJQUFBRCxpQkFBQSxDQUFBRixDQUFBLENBQUFlLFNBQUEsRUFBQVosQ0FBQSxHQUFBQyxDQUFBLElBQUFGLGlCQUFBLENBQUFGLENBQUEsRUFBQUksQ0FBQSxHQUFBTSxNQUFBLENBQUFDLGNBQUEsQ0FBQVgsQ0FBQSxpQkFBQVMsUUFBQSxTQUFBVCxDQUFBO0FBQUEsU0FBQVksZUFBQVIsQ0FBQSxRQUFBWSxDQUFBLEdBQUFDLFlBQUEsQ0FBQWIsQ0FBQSxnQ0FBQWMsT0FBQSxDQUFBRixDQUFBLElBQUFBLENBQUEsR0FBQUEsQ0FBQTtBQUFBLFNBQUFDLGFBQUFiLENBQUEsRUFBQUQsQ0FBQSxvQkFBQWUsT0FBQSxDQUFBZCxDQUFBLE1BQUFBLENBQUEsU0FBQUEsQ0FBQSxNQUFBSixDQUFBLEdBQUFJLENBQUEsQ0FBQWUsTUFBQSxDQUFBQyxXQUFBLGtCQUFBcEIsQ0FBQSxRQUFBZ0IsQ0FBQSxHQUFBaEIsQ0FBQSxDQUFBcUIsSUFBQSxDQUFBakIsQ0FBQSxFQUFBRCxDQUFBLGdDQUFBZSxPQUFBLENBQUFGLENBQUEsVUFBQUEsQ0FBQSxZQUFBTSxTQUFBLHlFQUFBbkIsQ0FBQSxHQUFBb0IsTUFBQSxHQUFBQyxNQUFBLEVBQUFwQixDQUFBO0FBQUEsU0FBQXFCLGdCQUFBQyxDQUFBLEVBQUFDLENBQUEsVUFBQUQsQ0FBQSxZQUFBQyxDQUFBLGFBQUFMLFNBQUE7QUFFekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZEEsSUFlTU0sUUFBUSxnQkFBQWQsWUFBQSxDQUNaLFNBQUFjLFNBQVlDLE1BQU0sRUFBRTtFQUFBSixlQUFBLE9BQUFHLFFBQUE7RUFDbEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBLE1BQU07RUFDcEIsSUFBSSxDQUFDQyxPQUFPLEdBQUcsSUFBSUMsbUJBQU8sQ0FBQ0YsTUFBTSxDQUFDO0FBQ3BDLENBQUM7QUFBQSxJQUFBRyxRQUFBLEdBQUFDLE9BQUEsY0FHWUwsUUFBUTtBQUFBTSxNQUFBLENBQUFELE9BQUEsR0FBQUEsT0FBQSxDQUFBRSxPQUFBIiwiaWdub3JlTGlzdCI6W119
}),
"[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/analytics/itinerary_price_metrics.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
/**
 * A namespaced client for the
 * `/v1/analytics/itinerary-price-metrics
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.analytics.itineraryPriceMetrics
 * ```
 *
 * @param {Client} client
 */ var ItineraryPriceMetrics = /*#__PURE__*/ function() {
    function ItineraryPriceMetrics(client) {
        _classCallCheck(this, ItineraryPriceMetrics);
        this.client = client;
    }
    /**
   * Provides historical prices in a quartile distribution, including minimum, maximum and average price.
   *
   * @param {Object} params
   * @param {string} params.originIataCode city/airport code, following IATA standard, from which the traveler will depart
   * @param {string} params.destinationIataCode city/airport code, following IATA standard, from which the traveler is going
   * @param {string} params.departureDate The date on which the traveler will depart from the origin to go to the destination.
   * @return {Promise.<Response,ResponseError>} a Promise
   * Am I getting a good deal on this flight?
   * ```js
   * amadeus.analytics.itineraryPriceMetrics.get({
   * originIataCode: 'MAD',
   * destinationIataCode: 'CDG',
   * departureDate: '2021-03-13'
   * });
   * ```
   */ return _createClass(ItineraryPriceMetrics, [
        {
            key: "get",
            value: function get() {
                var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                return this.client.get('/v1/analytics/itinerary-price-metrics', params);
            }
        }
    ]);
}();
var _default = exports["default"] = ItineraryPriceMetrics;
module.exports = exports.default; //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJJdGluZXJhcnlQcmljZU1ldHJpY3MiLCJjbGllbnQiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImdldCIsInBhcmFtcyIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmF1bHQiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYW1hZGV1cy9uYW1lc3BhY2VzL2FuYWx5dGljcy9pdGluZXJhcnlfcHJpY2VfbWV0cmljcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEEgbmFtZXNwYWNlZCBjbGllbnQgZm9yIHRoZVxuICogYC92MS9hbmFseXRpY3MvaXRpbmVyYXJ5LXByaWNlLW1ldHJpY3NcbiAqXG4gKiBBY2Nlc3MgdmlhIHRoZSB7QGxpbmsgQW1hZGV1c30gb2JqZWN0XG4gKlxuICogYGBganNcbiAqIGxldCBhbWFkZXVzID0gbmV3IEFtYWRldXMoKTtcbiAqIGFtYWRldXMuYW5hbHl0aWNzLml0aW5lcmFyeVByaWNlTWV0cmljc1xuICogYGBgXG4gKlxuICogQHBhcmFtIHtDbGllbnR9IGNsaWVudFxuICovXG5jbGFzcyBJdGluZXJhcnlQcmljZU1ldHJpY3Mge1xuICBjb25zdHJ1Y3RvcihjbGllbnQpIHtcbiAgICB0aGlzLmNsaWVudCA9IGNsaWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBQcm92aWRlcyBoaXN0b3JpY2FsIHByaWNlcyBpbiBhIHF1YXJ0aWxlIGRpc3RyaWJ1dGlvbiwgaW5jbHVkaW5nIG1pbmltdW0sIG1heGltdW0gYW5kIGF2ZXJhZ2UgcHJpY2UuXG4gICAqXG4gICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXNcbiAgICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtcy5vcmlnaW5JYXRhQ29kZSBjaXR5L2FpcnBvcnQgY29kZSwgZm9sbG93aW5nIElBVEEgc3RhbmRhcmQsIGZyb20gd2hpY2ggdGhlIHRyYXZlbGVyIHdpbGwgZGVwYXJ0XG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMuZGVzdGluYXRpb25JYXRhQ29kZSBjaXR5L2FpcnBvcnQgY29kZSwgZm9sbG93aW5nIElBVEEgc3RhbmRhcmQsIGZyb20gd2hpY2ggdGhlIHRyYXZlbGVyIGlzIGdvaW5nXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMuZGVwYXJ0dXJlRGF0ZSBUaGUgZGF0ZSBvbiB3aGljaCB0aGUgdHJhdmVsZXIgd2lsbCBkZXBhcnQgZnJvbSB0aGUgb3JpZ2luIHRvIGdvIHRvIHRoZSBkZXN0aW5hdGlvbi5cbiAgICogQHJldHVybiB7UHJvbWlzZS48UmVzcG9uc2UsUmVzcG9uc2VFcnJvcj59IGEgUHJvbWlzZVxuICAgKiBBbSBJIGdldHRpbmcgYSBnb29kIGRlYWwgb24gdGhpcyBmbGlnaHQ/XG4gICAqIGBgYGpzXG4gICAqIGFtYWRldXMuYW5hbHl0aWNzLml0aW5lcmFyeVByaWNlTWV0cmljcy5nZXQoe1xuICAgKiBvcmlnaW5JYXRhQ29kZTogJ01BRCcsXG4gICAqIGRlc3RpbmF0aW9uSWF0YUNvZGU6ICdDREcnLFxuICAgKiBkZXBhcnR1cmVEYXRlOiAnMjAyMS0wMy0xMydcbiAgICogfSk7XG4gICAqIGBgYFxuICAgKi9cbiAgZ2V0KHBhcmFtcyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuY2xpZW50LmdldCgnL3YxL2FuYWx5dGljcy9pdGluZXJhcnktcHJpY2UtbWV0cmljcycsIHBhcmFtcyk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSXRpbmVyYXJ5UHJpY2VNZXRyaWNzO1xuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBLElBYU1BLHFCQUFxQjtFQUN6QixTQUFBQSxzQkFBWUMsTUFBTSxFQUFFO0lBQUFDLGVBQUEsT0FBQUYscUJBQUE7SUFDbEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBLE1BQU07RUFDdEI7O0VBRUE7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtFQWhCRSxPQUFBRSxZQUFBLENBQUFILHFCQUFBO0lBQUFJLEdBQUE7SUFBQUMsS0FBQSxFQWlCQSxTQUFBQyxHQUFHQSxDQUFBLEVBQWM7TUFBQSxJQUFiQyxNQUFNLEdBQUFDLFNBQUEsQ0FBQUMsTUFBQSxRQUFBRCxTQUFBLFFBQUFFLFNBQUEsR0FBQUYsU0FBQSxNQUFHLENBQUMsQ0FBQztNQUNiLE9BQU8sSUFBSSxDQUFDUCxNQUFNLENBQUNLLEdBQUcsQ0FBQyx1Q0FBdUMsRUFBRUMsTUFBTSxDQUFDO0lBQ3pFO0VBQUM7QUFBQTtBQUFBLElBQUFJLFFBQUEsR0FBQUMsT0FBQSxjQUdZWixxQkFBcUI7QUFBQWEsTUFBQSxDQUFBRCxPQUFBLEdBQUFBLE9BQUEsQ0FBQUUsT0FBQSIsImlnbm9yZUxpc3QiOltdfQ==
}),
"[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/analytics.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _itinerary_price_metrics = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/analytics/itinerary_price_metrics.js [app-route] (ecmascript)"));
function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        "default": e
    };
}
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
/**
 * A namespaced client for the
 * `/v1/analytics` endpoints
 *
 * Access via the {Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.analytics;
 * ```
 *
 * @param {Client} client
 * @property {Flights} flights
 * @protected
 */ var Analytics = /*#__PURE__*/ _createClass(function Analytics(client) {
    _classCallCheck(this, Analytics);
    this.client = client;
    this.itineraryPriceMetrics = new _itinerary_price_metrics["default"](client);
});
var _default = exports["default"] = Analytics;
module.exports = exports.default; //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfaXRpbmVyYXJ5X3ByaWNlX21ldHJpY3MiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsImUiLCJfX2VzTW9kdWxlIiwiX2RlZmluZVByb3BlcnRpZXMiLCJyIiwidCIsImxlbmd0aCIsIm8iLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIl90b1Byb3BlcnR5S2V5Iiwia2V5IiwiX2NyZWF0ZUNsYXNzIiwicHJvdG90eXBlIiwiaSIsIl90b1ByaW1pdGl2ZSIsIl90eXBlb2YiLCJTeW1ib2wiLCJ0b1ByaW1pdGl2ZSIsImNhbGwiLCJUeXBlRXJyb3IiLCJTdHJpbmciLCJOdW1iZXIiLCJfY2xhc3NDYWxsQ2hlY2siLCJhIiwibiIsIkFuYWx5dGljcyIsImNsaWVudCIsIml0aW5lcmFyeVByaWNlTWV0cmljcyIsIkl0aW5lcmFyeVByaWNlTWV0cmljcyIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmF1bHQiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYW1hZGV1cy9uYW1lc3BhY2VzL2FuYWx5dGljcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSXRpbmVyYXJ5UHJpY2VNZXRyaWNzIGZyb20gJy4vYW5hbHl0aWNzL2l0aW5lcmFyeV9wcmljZV9tZXRyaWNzJztcblxuLyoqXG4gKiBBIG5hbWVzcGFjZWQgY2xpZW50IGZvciB0aGVcbiAqIGAvdjEvYW5hbHl0aWNzYCBlbmRwb2ludHNcbiAqXG4gKiBBY2Nlc3MgdmlhIHRoZSB7QW1hZGV1c30gb2JqZWN0XG4gKlxuICogYGBganNcbiAqIGxldCBhbWFkZXVzID0gbmV3IEFtYWRldXMoKTtcbiAqIGFtYWRldXMuYW5hbHl0aWNzO1xuICogYGBgXG4gKlxuICogQHBhcmFtIHtDbGllbnR9IGNsaWVudFxuICogQHByb3BlcnR5IHtGbGlnaHRzfSBmbGlnaHRzXG4gKiBAcHJvdGVjdGVkXG4gKi9cbmNsYXNzIEFuYWx5dGljcyB7XG4gIGNvbnN0cnVjdG9yKGNsaWVudCkge1xuICAgIHRoaXMuY2xpZW50ID0gY2xpZW50O1xuICAgIHRoaXMuaXRpbmVyYXJ5UHJpY2VNZXRyaWNzID0gbmV3IEl0aW5lcmFyeVByaWNlTWV0cmljcyhjbGllbnQpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFuYWx5dGljcztcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLElBQUFBLHdCQUFBLEdBQUFDLHNCQUFBLENBQUFDLE9BQUE7QUFBd0UsU0FBQUQsdUJBQUFFLENBQUEsV0FBQUEsQ0FBQSxJQUFBQSxDQUFBLENBQUFDLFVBQUEsR0FBQUQsQ0FBQSxnQkFBQUEsQ0FBQTtBQUFBLFNBQUFFLGtCQUFBRixDQUFBLEVBQUFHLENBQUEsYUFBQUMsQ0FBQSxNQUFBQSxDQUFBLEdBQUFELENBQUEsQ0FBQUUsTUFBQSxFQUFBRCxDQUFBLFVBQUFFLENBQUEsR0FBQUgsQ0FBQSxDQUFBQyxDQUFBLEdBQUFFLENBQUEsQ0FBQUMsVUFBQSxHQUFBRCxDQUFBLENBQUFDLFVBQUEsUUFBQUQsQ0FBQSxDQUFBRSxZQUFBLGtCQUFBRixDQUFBLEtBQUFBLENBQUEsQ0FBQUcsUUFBQSxRQUFBQyxNQUFBLENBQUFDLGNBQUEsQ0FBQVgsQ0FBQSxFQUFBWSxjQUFBLENBQUFOLENBQUEsQ0FBQU8sR0FBQSxHQUFBUCxDQUFBO0FBQUEsU0FBQVEsYUFBQWQsQ0FBQSxFQUFBRyxDQUFBLEVBQUFDLENBQUEsV0FBQUQsQ0FBQSxJQUFBRCxpQkFBQSxDQUFBRixDQUFBLENBQUFlLFNBQUEsRUFBQVosQ0FBQSxHQUFBQyxDQUFBLElBQUFGLGlCQUFBLENBQUFGLENBQUEsRUFBQUksQ0FBQSxHQUFBTSxNQUFBLENBQUFDLGNBQUEsQ0FBQVgsQ0FBQSxpQkFBQVMsUUFBQSxTQUFBVCxDQUFBO0FBQUEsU0FBQVksZUFBQVIsQ0FBQSxRQUFBWSxDQUFBLEdBQUFDLFlBQUEsQ0FBQWIsQ0FBQSxnQ0FBQWMsT0FBQSxDQUFBRixDQUFBLElBQUFBLENBQUEsR0FBQUEsQ0FBQTtBQUFBLFNBQUFDLGFBQUFiLENBQUEsRUFBQUQsQ0FBQSxvQkFBQWUsT0FBQSxDQUFBZCxDQUFBLE1BQUFBLENBQUEsU0FBQUEsQ0FBQSxNQUFBSixDQUFBLEdBQUFJLENBQUEsQ0FBQWUsTUFBQSxDQUFBQyxXQUFBLGtCQUFBcEIsQ0FBQSxRQUFBZ0IsQ0FBQSxHQUFBaEIsQ0FBQSxDQUFBcUIsSUFBQSxDQUFBakIsQ0FBQSxFQUFBRCxDQUFBLGdDQUFBZSxPQUFBLENBQUFGLENBQUEsVUFBQUEsQ0FBQSxZQUFBTSxTQUFBLHlFQUFBbkIsQ0FBQSxHQUFBb0IsTUFBQSxHQUFBQyxNQUFBLEVBQUFwQixDQUFBO0FBQUEsU0FBQXFCLGdCQUFBQyxDQUFBLEVBQUFDLENBQUEsVUFBQUQsQ0FBQSxZQUFBQyxDQUFBLGFBQUFMLFNBQUE7QUFFeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBZEEsSUFlTU0sU0FBUyxnQkFBQWQsWUFBQSxDQUNiLFNBQUFjLFVBQVlDLE1BQU0sRUFBRTtFQUFBSixlQUFBLE9BQUFHLFNBQUE7RUFDbEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBLE1BQU07RUFDcEIsSUFBSSxDQUFDQyxxQkFBcUIsR0FBRyxJQUFJQyxtQ0FBcUIsQ0FBQ0YsTUFBTSxDQUFDO0FBQ2hFLENBQUM7QUFBQSxJQUFBRyxRQUFBLEdBQUFDLE9BQUEsY0FHWUwsU0FBUztBQUFBTSxNQUFBLENBQUFELE9BQUEsR0FBQUEsT0FBQSxDQUFBRSxPQUFBIiwiaWdub3JlTGlzdCI6W119
}),
"[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/location/analytics/category_rated_areas.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
/**
 * A namespaced client for the
 * `/v1/location/analytics/category-rated-areas` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.location.analytics.categoryRatedAreas;
 * ```
 *
 * @param {Client} client
 */ var CategoryRatedAreas = /*#__PURE__*/ function() {
    function CategoryRatedAreas(client) {
        _classCallCheck(this, CategoryRatedAreas);
        this.client = client;
    }
    /**
   * Gets popularity score for location categories
   *
   * @param {Object} params
   * @param {Double} params.latitude latitude location to be at the center of
   *   the search circle - required
   * @param {Double} params.longitude longitude location to be at the center of
   *   the search circle - required
   * @param {Double} params.radius radius of the search in Kilometer - optional
   * @return {Promise.<Response,ResponseError>} a Promise
   *
   * Gets popularity score for location categories in Barcelona
   *
   * ```js
   * amadeus.location.analytics.categoryRatedAreas.get({
   *   longitude: 2.160873,
   *   latitude: 41.397158
   * });
   * ```
   */ return _createClass(CategoryRatedAreas, [
        {
            key: "get",
            value: function get() {
                var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                return this.client.get('/v1/location/analytics/category-rated-areas', params);
            }
        }
    ]);
}();
var _default = exports["default"] = CategoryRatedAreas;
module.exports = exports.default; //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJDYXRlZ29yeVJhdGVkQXJlYXMiLCJjbGllbnQiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImdldCIsInBhcmFtcyIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmF1bHQiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvYW1hZGV1cy9uYW1lc3BhY2VzL2xvY2F0aW9uL2FuYWx5dGljcy9jYXRlZ29yeV9yYXRlZF9hcmVhcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEEgbmFtZXNwYWNlZCBjbGllbnQgZm9yIHRoZVxuICogYC92MS9sb2NhdGlvbi9hbmFseXRpY3MvY2F0ZWdvcnktcmF0ZWQtYXJlYXNgIGVuZHBvaW50c1xuICpcbiAqIEFjY2VzcyB2aWEgdGhlIHtAbGluayBBbWFkZXVzfSBvYmplY3RcbiAqXG4gKiBgYGBqc1xuICogbGV0IGFtYWRldXMgPSBuZXcgQW1hZGV1cygpO1xuICogYW1hZGV1cy5sb2NhdGlvbi5hbmFseXRpY3MuY2F0ZWdvcnlSYXRlZEFyZWFzO1xuICogYGBgXG4gKlxuICogQHBhcmFtIHtDbGllbnR9IGNsaWVudFxuICovXG5jbGFzcyBDYXRlZ29yeVJhdGVkQXJlYXMge1xuICBjb25zdHJ1Y3RvcihjbGllbnQpIHtcbiAgICB0aGlzLmNsaWVudCA9IGNsaWVudDtcbiAgfVxuXG4gIC8qKlxuICAgKiBHZXRzIHBvcHVsYXJpdHkgc2NvcmUgZm9yIGxvY2F0aW9uIGNhdGVnb3JpZXNcbiAgICpcbiAgICogQHBhcmFtIHtPYmplY3R9IHBhcmFtc1xuICAgKiBAcGFyYW0ge0RvdWJsZX0gcGFyYW1zLmxhdGl0dWRlIGxhdGl0dWRlIGxvY2F0aW9uIHRvIGJlIGF0IHRoZSBjZW50ZXIgb2ZcbiAgICogICB0aGUgc2VhcmNoIGNpcmNsZSAtIHJlcXVpcmVkXG4gICAqIEBwYXJhbSB7RG91YmxlfSBwYXJhbXMubG9uZ2l0dWRlIGxvbmdpdHVkZSBsb2NhdGlvbiB0byBiZSBhdCB0aGUgY2VudGVyIG9mXG4gICAqICAgdGhlIHNlYXJjaCBjaXJjbGUgLSByZXF1aXJlZFxuICAgKiBAcGFyYW0ge0RvdWJsZX0gcGFyYW1zLnJhZGl1cyByYWRpdXMgb2YgdGhlIHNlYXJjaCBpbiBLaWxvbWV0ZXIgLSBvcHRpb25hbFxuICAgKiBAcmV0dXJuIHtQcm9taXNlLjxSZXNwb25zZSxSZXNwb25zZUVycm9yPn0gYSBQcm9taXNlXG4gICAqXG4gICAqIEdldHMgcG9wdWxhcml0eSBzY29yZSBmb3IgbG9jYXRpb24gY2F0ZWdvcmllcyBpbiBCYXJjZWxvbmFcbiAgICpcbiAgICogYGBganNcbiAgICogYW1hZGV1cy5sb2NhdGlvbi5hbmFseXRpY3MuY2F0ZWdvcnlSYXRlZEFyZWFzLmdldCh7XG4gICAqICAgbG9uZ2l0dWRlOiAyLjE2MDg3MyxcbiAgICogICBsYXRpdHVkZTogNDEuMzk3MTU4XG4gICAqIH0pO1xuICAgKiBgYGBcbiAgICovXG4gIGdldChwYXJhbXMgPSB7fSkge1xuICAgIHJldHVybiB0aGlzLmNsaWVudC5nZXQoJy92MS9sb2NhdGlvbi9hbmFseXRpY3MvY2F0ZWdvcnktcmF0ZWQtYXJlYXMnLCBwYXJhbXMpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IENhdGVnb3J5UmF0ZWRBcmVhcztcbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFaQSxJQWFNQSxrQkFBa0I7RUFDdEIsU0FBQUEsbUJBQVlDLE1BQU0sRUFBRTtJQUFBQyxlQUFBLE9BQUFGLGtCQUFBO0lBQ2xCLElBQUksQ0FBQ0MsTUFBTSxHQUFHQSxNQUFNO0VBQ3RCOztFQUVBO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7RUFuQkUsT0FBQUUsWUFBQSxDQUFBSCxrQkFBQTtJQUFBSSxHQUFBO0lBQUFDLEtBQUEsRUFvQkEsU0FBQUMsR0FBR0EsQ0FBQSxFQUFjO01BQUEsSUFBYkMsTUFBTSxHQUFBQyxTQUFBLENBQUFDLE1BQUEsUUFBQUQsU0FBQSxRQUFBRSxTQUFBLEdBQUFGLFNBQUEsTUFBRyxDQUFDLENBQUM7TUFDYixPQUFPLElBQUksQ0FBQ1AsTUFBTSxDQUFDSyxHQUFHLENBQUMsNkNBQTZDLEVBQUVDLE1BQU0sQ0FBQztJQUMvRTtFQUFDO0FBQUE7QUFBQSxJQUFBSSxRQUFBLEdBQUFDLE9BQUEsY0FHWVosa0JBQWtCO0FBQUFhLE1BQUEsQ0FBQUQsT0FBQSxHQUFBQSxPQUFBLENBQUFFLE9BQUEiLCJpZ25vcmVMaXN0IjpbXX0=
}),
"[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/location/analytics.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _category_rated_areas = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/location/analytics/category_rated_areas.js [app-route] (ecmascript)"));
function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        "default": e
    };
}
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
/**
 * A namespaced client for the
 * `/v1/location/analytics` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.location;
 * ```
 *
 * @param {Client} client
 * @property {analytics} CategoryRatedAreas
 */ var Analytics = /*#__PURE__*/ _createClass(function Analytics(client) {
    _classCallCheck(this, Analytics);
    this.client = client;
    this.categoryRatedAreas = new _category_rated_areas["default"](client);
});
var _default = exports["default"] = Analytics;
module.exports = exports.default; //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY2F0ZWdvcnlfcmF0ZWRfYXJlYXMiLCJfaW50ZXJvcFJlcXVpcmVEZWZhdWx0IiwicmVxdWlyZSIsImUiLCJfX2VzTW9kdWxlIiwiX2RlZmluZVByb3BlcnRpZXMiLCJyIiwidCIsImxlbmd0aCIsIm8iLCJlbnVtZXJhYmxlIiwiY29uZmlndXJhYmxlIiwid3JpdGFibGUiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsIl90b1Byb3BlcnR5S2V5Iiwia2V5IiwiX2NyZWF0ZUNsYXNzIiwicHJvdG90eXBlIiwiaSIsIl90b1ByaW1pdGl2ZSIsIl90eXBlb2YiLCJTeW1ib2wiLCJ0b1ByaW1pdGl2ZSIsImNhbGwiLCJUeXBlRXJyb3IiLCJTdHJpbmciLCJOdW1iZXIiLCJfY2xhc3NDYWxsQ2hlY2siLCJhIiwibiIsIkFuYWx5dGljcyIsImNsaWVudCIsImNhdGVnb3J5UmF0ZWRBcmVhcyIsIkNhdGVnb3J5UmF0ZWRBcmVhcyIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmF1bHQiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYW1hZGV1cy9uYW1lc3BhY2VzL2xvY2F0aW9uL2FuYWx5dGljcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2F0ZWdvcnlSYXRlZEFyZWFzICAgIGZyb20gJy4vYW5hbHl0aWNzL2NhdGVnb3J5X3JhdGVkX2FyZWFzJztcblxuLyoqXG4gKiBBIG5hbWVzcGFjZWQgY2xpZW50IGZvciB0aGVcbiAqIGAvdjEvbG9jYXRpb24vYW5hbHl0aWNzYCBlbmRwb2ludHNcbiAqXG4gKiBBY2Nlc3MgdmlhIHRoZSB7QGxpbmsgQW1hZGV1c30gb2JqZWN0XG4gKlxuICogYGBganNcbiAqIGxldCBhbWFkZXVzID0gbmV3IEFtYWRldXMoKTtcbiAqIGFtYWRldXMubG9jYXRpb247XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge0NsaWVudH0gY2xpZW50XG4gKiBAcHJvcGVydHkge2FuYWx5dGljc30gQ2F0ZWdvcnlSYXRlZEFyZWFzXG4gKi9cbmNsYXNzIEFuYWx5dGljcyB7XG4gIGNvbnN0cnVjdG9yKGNsaWVudCkge1xuICAgIHRoaXMuY2xpZW50ID0gY2xpZW50O1xuICAgIHRoaXMuY2F0ZWdvcnlSYXRlZEFyZWFzID0gbmV3IENhdGVnb3J5UmF0ZWRBcmVhcyhjbGllbnQpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEFuYWx5dGljczsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBQSxJQUFBQSxxQkFBQSxHQUFBQyxzQkFBQSxDQUFBQyxPQUFBO0FBQXFFLFNBQUFELHVCQUFBRSxDQUFBLFdBQUFBLENBQUEsSUFBQUEsQ0FBQSxDQUFBQyxVQUFBLEdBQUFELENBQUEsZ0JBQUFBLENBQUE7QUFBQSxTQUFBRSxrQkFBQUYsQ0FBQSxFQUFBRyxDQUFBLGFBQUFDLENBQUEsTUFBQUEsQ0FBQSxHQUFBRCxDQUFBLENBQUFFLE1BQUEsRUFBQUQsQ0FBQSxVQUFBRSxDQUFBLEdBQUFILENBQUEsQ0FBQUMsQ0FBQSxHQUFBRSxDQUFBLENBQUFDLFVBQUEsR0FBQUQsQ0FBQSxDQUFBQyxVQUFBLFFBQUFELENBQUEsQ0FBQUUsWUFBQSxrQkFBQUYsQ0FBQSxLQUFBQSxDQUFBLENBQUFHLFFBQUEsUUFBQUMsTUFBQSxDQUFBQyxjQUFBLENBQUFYLENBQUEsRUFBQVksY0FBQSxDQUFBTixDQUFBLENBQUFPLEdBQUEsR0FBQVAsQ0FBQTtBQUFBLFNBQUFRLGFBQUFkLENBQUEsRUFBQUcsQ0FBQSxFQUFBQyxDQUFBLFdBQUFELENBQUEsSUFBQUQsaUJBQUEsQ0FBQUYsQ0FBQSxDQUFBZSxTQUFBLEVBQUFaLENBQUEsR0FBQUMsQ0FBQSxJQUFBRixpQkFBQSxDQUFBRixDQUFBLEVBQUFJLENBQUEsR0FBQU0sTUFBQSxDQUFBQyxjQUFBLENBQUFYLENBQUEsaUJBQUFTLFFBQUEsU0FBQVQsQ0FBQTtBQUFBLFNBQUFZLGVBQUFSLENBQUEsUUFBQVksQ0FBQSxHQUFBQyxZQUFBLENBQUFiLENBQUEsZ0NBQUFjLE9BQUEsQ0FBQUYsQ0FBQSxJQUFBQSxDQUFBLEdBQUFBLENBQUE7QUFBQSxTQUFBQyxhQUFBYixDQUFBLEVBQUFELENBQUEsb0JBQUFlLE9BQUEsQ0FBQWQsQ0FBQSxNQUFBQSxDQUFBLFNBQUFBLENBQUEsTUFBQUosQ0FBQSxHQUFBSSxDQUFBLENBQUFlLE1BQUEsQ0FBQUMsV0FBQSxrQkFBQXBCLENBQUEsUUFBQWdCLENBQUEsR0FBQWhCLENBQUEsQ0FBQXFCLElBQUEsQ0FBQWpCLENBQUEsRUFBQUQsQ0FBQSxnQ0FBQWUsT0FBQSxDQUFBRixDQUFBLFVBQUFBLENBQUEsWUFBQU0sU0FBQSx5RUFBQW5CLENBQUEsR0FBQW9CLE1BQUEsR0FBQUMsTUFBQSxFQUFBcEIsQ0FBQTtBQUFBLFNBQUFxQixnQkFBQUMsQ0FBQSxFQUFBQyxDQUFBLFVBQUFELENBQUEsWUFBQUMsQ0FBQSxhQUFBTCxTQUFBO0FBRXJFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFiQSxJQWNNTSxTQUFTLGdCQUFBZCxZQUFBLENBQ2IsU0FBQWMsVUFBWUMsTUFBTSxFQUFFO0VBQUFKLGVBQUEsT0FBQUcsU0FBQTtFQUNsQixJQUFJLENBQUNDLE1BQU0sR0FBR0EsTUFBTTtFQUNwQixJQUFJLENBQUNDLGtCQUFrQixHQUFHLElBQUlDLGdDQUFrQixDQUFDRixNQUFNLENBQUM7QUFDMUQsQ0FBQztBQUFBLElBQUFHLFFBQUEsR0FBQUMsT0FBQSxjQUdZTCxTQUFTO0FBQUFNLE1BQUEsQ0FBQUQsT0FBQSxHQUFBQSxPQUFBLENBQUFFLE9BQUEiLCJpZ25vcmVMaXN0IjpbXX0=
}),
"[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/location.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _analytics = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/location/analytics.js [app-route] (ecmascript)"));
function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        "default": e
    };
}
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
/**
 * A namespaced client for the
 * `/v1/location` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.location;
 * ```
 *
 * @param {Client} client
 * @property {analytics} analytics
 */ var Location = /*#__PURE__*/ _createClass(function Location(client) {
    _classCallCheck(this, Location);
    this.client = client;
    this.analytics = new _analytics["default"](client);
});
var _default = exports["default"] = Location;
module.exports = exports.default; //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfYW5hbHl0aWNzIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJlIiwiX19lc01vZHVsZSIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwiciIsInQiLCJsZW5ndGgiLCJvIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfdG9Qcm9wZXJ0eUtleSIsImtleSIsIl9jcmVhdGVDbGFzcyIsInByb3RvdHlwZSIsImkiLCJfdG9QcmltaXRpdmUiLCJfdHlwZW9mIiwiU3ltYm9sIiwidG9QcmltaXRpdmUiLCJjYWxsIiwiVHlwZUVycm9yIiwiU3RyaW5nIiwiTnVtYmVyIiwiX2NsYXNzQ2FsbENoZWNrIiwiYSIsIm4iLCJMb2NhdGlvbiIsImNsaWVudCIsImFuYWx5dGljcyIsIkFuYWx5dGljcyIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmF1bHQiXSwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvYW1hZGV1cy9uYW1lc3BhY2VzL2xvY2F0aW9uLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBbmFseXRpY3MgICAgZnJvbSAnLi9sb2NhdGlvbi9hbmFseXRpY3MnO1xuXG4vKipcbiAqIEEgbmFtZXNwYWNlZCBjbGllbnQgZm9yIHRoZVxuICogYC92MS9sb2NhdGlvbmAgZW5kcG9pbnRzXG4gKlxuICogQWNjZXNzIHZpYSB0aGUge0BsaW5rIEFtYWRldXN9IG9iamVjdFxuICpcbiAqIGBgYGpzXG4gKiBsZXQgYW1hZGV1cyA9IG5ldyBBbWFkZXVzKCk7XG4gKiBhbWFkZXVzLmxvY2F0aW9uO1xuICogYGBgXG4gKlxuICogQHBhcmFtIHtDbGllbnR9IGNsaWVudFxuICogQHByb3BlcnR5IHthbmFseXRpY3N9IGFuYWx5dGljc1xuICovXG5jbGFzcyBMb2NhdGlvbiB7XG4gIGNvbnN0cnVjdG9yKGNsaWVudCkge1xuICAgIHRoaXMuY2xpZW50ICAgICAgICAgICAgID0gY2xpZW50O1xuICAgIHRoaXMuYW5hbHl0aWNzID0gbmV3IEFuYWx5dGljcyhjbGllbnQpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IExvY2F0aW9uOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLElBQUFBLFVBQUEsR0FBQUMsc0JBQUEsQ0FBQUMsT0FBQTtBQUFnRCxTQUFBRCx1QkFBQUUsQ0FBQSxXQUFBQSxDQUFBLElBQUFBLENBQUEsQ0FBQUMsVUFBQSxHQUFBRCxDQUFBLGdCQUFBQSxDQUFBO0FBQUEsU0FBQUUsa0JBQUFGLENBQUEsRUFBQUcsQ0FBQSxhQUFBQyxDQUFBLE1BQUFBLENBQUEsR0FBQUQsQ0FBQSxDQUFBRSxNQUFBLEVBQUFELENBQUEsVUFBQUUsQ0FBQSxHQUFBSCxDQUFBLENBQUFDLENBQUEsR0FBQUUsQ0FBQSxDQUFBQyxVQUFBLEdBQUFELENBQUEsQ0FBQUMsVUFBQSxRQUFBRCxDQUFBLENBQUFFLFlBQUEsa0JBQUFGLENBQUEsS0FBQUEsQ0FBQSxDQUFBRyxRQUFBLFFBQUFDLE1BQUEsQ0FBQUMsY0FBQSxDQUFBWCxDQUFBLEVBQUFZLGNBQUEsQ0FBQU4sQ0FBQSxDQUFBTyxHQUFBLEdBQUFQLENBQUE7QUFBQSxTQUFBUSxhQUFBZCxDQUFBLEVBQUFHLENBQUEsRUFBQUMsQ0FBQSxXQUFBRCxDQUFBLElBQUFELGlCQUFBLENBQUFGLENBQUEsQ0FBQWUsU0FBQSxFQUFBWixDQUFBLEdBQUFDLENBQUEsSUFBQUYsaUJBQUEsQ0FBQUYsQ0FBQSxFQUFBSSxDQUFBLEdBQUFNLE1BQUEsQ0FBQUMsY0FBQSxDQUFBWCxDQUFBLGlCQUFBUyxRQUFBLFNBQUFULENBQUE7QUFBQSxTQUFBWSxlQUFBUixDQUFBLFFBQUFZLENBQUEsR0FBQUMsWUFBQSxDQUFBYixDQUFBLGdDQUFBYyxPQUFBLENBQUFGLENBQUEsSUFBQUEsQ0FBQSxHQUFBQSxDQUFBO0FBQUEsU0FBQUMsYUFBQWIsQ0FBQSxFQUFBRCxDQUFBLG9CQUFBZSxPQUFBLENBQUFkLENBQUEsTUFBQUEsQ0FBQSxTQUFBQSxDQUFBLE1BQUFKLENBQUEsR0FBQUksQ0FBQSxDQUFBZSxNQUFBLENBQUFDLFdBQUEsa0JBQUFwQixDQUFBLFFBQUFnQixDQUFBLEdBQUFoQixDQUFBLENBQUFxQixJQUFBLENBQUFqQixDQUFBLEVBQUFELENBQUEsZ0NBQUFlLE9BQUEsQ0FBQUYsQ0FBQSxVQUFBQSxDQUFBLFlBQUFNLFNBQUEseUVBQUFuQixDQUFBLEdBQUFvQixNQUFBLEdBQUFDLE1BQUEsRUFBQXBCLENBQUE7QUFBQSxTQUFBcUIsZ0JBQUFDLENBQUEsRUFBQUMsQ0FBQSxVQUFBRCxDQUFBLFlBQUFDLENBQUEsYUFBQUwsU0FBQTtBQUVoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBYkEsSUFjTU0sUUFBUSxnQkFBQWQsWUFBQSxDQUNaLFNBQUFjLFNBQVlDLE1BQU0sRUFBRTtFQUFBSixlQUFBLE9BQUFHLFFBQUE7RUFDbEIsSUFBSSxDQUFDQyxNQUFNLEdBQWVBLE1BQU07RUFDaEMsSUFBSSxDQUFDQyxTQUFTLEdBQUcsSUFBSUMscUJBQVMsQ0FBQ0YsTUFBTSxDQUFDO0FBQ3hDLENBQUM7QUFBQSxJQUFBRyxRQUFBLEdBQUFDLE9BQUEsY0FHWUwsUUFBUTtBQUFBTSxNQUFBLENBQUFELE9BQUEsR0FBQUEsT0FBQSxDQUFBRSxPQUFBIiwiaWdub3JlTGlzdCI6W119
}),
"[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/airline/destinations.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
/**
 * A namespaced client for the
 * `/v1/airline/destinations` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.airline.destinations;
 * ```
 *
 * @param {Client} client
 */ var Destinations = /*#__PURE__*/ function() {
    function Destinations(client) {
        _classCallCheck(this, Destinations);
        this.client = client;
    }
    /**
     * find all destinations served by a given airline
     *
     * @param {Object} params
     * @param {string} params.airlineCode airline IATA code, e.g. BA for British airways
     * @return {Promise.<Response,ResponseError>} a Promise
     *
     *  What destinations are served by this airline?
     *  ```js
     * amadeus.airline.destinations.get({
     *   airlineCode: 'BA',
     * })
     * ```
     */ return _createClass(Destinations, [
        {
            key: "get",
            value: function get() {
                var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
                return this.client.get('/v1/airline/destinations', params);
            }
        }
    ]);
}();
var _default = exports["default"] = Destinations;
module.exports = exports.default; //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJEZXN0aW5hdGlvbnMiLCJjbGllbnQiLCJfY2xhc3NDYWxsQ2hlY2siLCJfY3JlYXRlQ2xhc3MiLCJrZXkiLCJ2YWx1ZSIsImdldCIsInBhcmFtcyIsImFyZ3VtZW50cyIsImxlbmd0aCIsInVuZGVmaW5lZCIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmF1bHQiXSwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvYW1hZGV1cy9uYW1lc3BhY2VzL2FpcmxpbmUvZGVzdGluYXRpb25zLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQSBuYW1lc3BhY2VkIGNsaWVudCBmb3IgdGhlXG4gKiBgL3YxL2FpcmxpbmUvZGVzdGluYXRpb25zYCBlbmRwb2ludHNcbiAqXG4gKiBBY2Nlc3MgdmlhIHRoZSB7QGxpbmsgQW1hZGV1c30gb2JqZWN0XG4gKlxuICogYGBganNcbiAqIGxldCBhbWFkZXVzID0gbmV3IEFtYWRldXMoKTtcbiAqIGFtYWRldXMuYWlybGluZS5kZXN0aW5hdGlvbnM7XG4gKiBgYGBcbiAqXG4gKiBAcGFyYW0ge0NsaWVudH0gY2xpZW50XG4gKi9cbmNsYXNzIERlc3RpbmF0aW9ucyB7XG4gIGNvbnN0cnVjdG9yKGNsaWVudCkge1xuICAgIHRoaXMuY2xpZW50ID0gY2xpZW50O1xuICB9XG5cbiAgLyoqXG4gICAgICogZmluZCBhbGwgZGVzdGluYXRpb25zIHNlcnZlZCBieSBhIGdpdmVuIGFpcmxpbmVcbiAgICAgKlxuICAgICAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXNcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGFyYW1zLmFpcmxpbmVDb2RlIGFpcmxpbmUgSUFUQSBjb2RlLCBlLmcuIEJBIGZvciBCcml0aXNoIGFpcndheXNcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlLjxSZXNwb25zZSxSZXNwb25zZUVycm9yPn0gYSBQcm9taXNlXG4gICAgICpcbiAgICAgKiAgV2hhdCBkZXN0aW5hdGlvbnMgYXJlIHNlcnZlZCBieSB0aGlzIGFpcmxpbmU/XG4gICAgICogIGBgYGpzXG4gICAgICogYW1hZGV1cy5haXJsaW5lLmRlc3RpbmF0aW9ucy5nZXQoe1xuICAgICAqICAgYWlybGluZUNvZGU6ICdCQScsXG4gICAgICogfSlcbiAgICAgKiBgYGBcbiAgICAgKi9cbiAgZ2V0KHBhcmFtcyA9IHt9KSB7XG4gICAgcmV0dXJuIHRoaXMuY2xpZW50LmdldCgnL3YxL2FpcmxpbmUvZGVzdGluYXRpb25zJywgcGFyYW1zKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBEZXN0aW5hdGlvbnM7Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVpBLElBYU1BLFlBQVk7RUFDaEIsU0FBQUEsYUFBWUMsTUFBTSxFQUFFO0lBQUFDLGVBQUEsT0FBQUYsWUFBQTtJQUNsQixJQUFJLENBQUNDLE1BQU0sR0FBR0EsTUFBTTtFQUN0Qjs7RUFFQTtBQUNGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0VBYkUsT0FBQUUsWUFBQSxDQUFBSCxZQUFBO0lBQUFJLEdBQUE7SUFBQUMsS0FBQSxFQWNBLFNBQUFDLEdBQUdBLENBQUEsRUFBYztNQUFBLElBQWJDLE1BQU0sR0FBQUMsU0FBQSxDQUFBQyxNQUFBLFFBQUFELFNBQUEsUUFBQUUsU0FBQSxHQUFBRixTQUFBLE1BQUcsQ0FBQyxDQUFDO01BQ2IsT0FBTyxJQUFJLENBQUNQLE1BQU0sQ0FBQ0ssR0FBRyxDQUFDLDBCQUEwQixFQUFFQyxNQUFNLENBQUM7SUFDNUQ7RUFBQztBQUFBO0FBQUEsSUFBQUksUUFBQSxHQUFBQyxPQUFBLGNBR1laLFlBQVk7QUFBQWEsTUFBQSxDQUFBRCxPQUFBLEdBQUFBLE9BQUEsQ0FBQUUsT0FBQSIsImlnbm9yZUxpc3QiOltdfQ==
}),
"[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/airline.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _destinations = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/airline/destinations.js [app-route] (ecmascript)"));
function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        "default": e
    };
}
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
/**
 * A namespaced client for the
 * `/v1/airline` endpoints
 *
 * Access via the {@link Amadeus} object
 *
 * ```js
 * let amadeus = new Amadeus();
 * amadeus.airline;
 * ```
 *
 * @param {Client} client
 * @property {predictions} predictions
 */ var Airline = /*#__PURE__*/ _createClass(function Airline(client) {
    _classCallCheck(this, Airline);
    this.client = client;
    this.destinations = new _destinations["default"](client);
});
var _default = exports["default"] = Airline;
module.exports = exports.default; //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfZGVzdGluYXRpb25zIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJlIiwiX19lc01vZHVsZSIsIl9kZWZpbmVQcm9wZXJ0aWVzIiwiciIsInQiLCJsZW5ndGgiLCJvIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfdG9Qcm9wZXJ0eUtleSIsImtleSIsIl9jcmVhdGVDbGFzcyIsInByb3RvdHlwZSIsImkiLCJfdG9QcmltaXRpdmUiLCJfdHlwZW9mIiwiU3ltYm9sIiwidG9QcmltaXRpdmUiLCJjYWxsIiwiVHlwZUVycm9yIiwiU3RyaW5nIiwiTnVtYmVyIiwiX2NsYXNzQ2FsbENoZWNrIiwiYSIsIm4iLCJBaXJsaW5lIiwiY2xpZW50IiwiZGVzdGluYXRpb25zIiwiRGVzdGluYXRpb25zIiwiX2RlZmF1bHQiLCJleHBvcnRzIiwibW9kdWxlIiwiZGVmYXVsdCJdLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9hbWFkZXVzL25hbWVzcGFjZXMvYWlybGluZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRGVzdGluYXRpb25zIGZyb20gJy4vYWlybGluZS9kZXN0aW5hdGlvbnMnO1xuXG4vKipcbiAqIEEgbmFtZXNwYWNlZCBjbGllbnQgZm9yIHRoZVxuICogYC92MS9haXJsaW5lYCBlbmRwb2ludHNcbiAqXG4gKiBBY2Nlc3MgdmlhIHRoZSB7QGxpbmsgQW1hZGV1c30gb2JqZWN0XG4gKlxuICogYGBganNcbiAqIGxldCBhbWFkZXVzID0gbmV3IEFtYWRldXMoKTtcbiAqIGFtYWRldXMuYWlybGluZTtcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7Q2xpZW50fSBjbGllbnRcbiAqIEBwcm9wZXJ0eSB7cHJlZGljdGlvbnN9IHByZWRpY3Rpb25zXG4gKi9cbmNsYXNzIEFpcmxpbmUge1xuICBjb25zdHJ1Y3RvcihjbGllbnQpIHtcbiAgICB0aGlzLmNsaWVudCA9IGNsaWVudDtcbiAgICB0aGlzLmRlc3RpbmF0aW9ucyA9IG5ldyBEZXN0aW5hdGlvbnMoY2xpZW50KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBaXJsaW5lOyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLElBQUFBLGFBQUEsR0FBQUMsc0JBQUEsQ0FBQUMsT0FBQTtBQUFrRCxTQUFBRCx1QkFBQUUsQ0FBQSxXQUFBQSxDQUFBLElBQUFBLENBQUEsQ0FBQUMsVUFBQSxHQUFBRCxDQUFBLGdCQUFBQSxDQUFBO0FBQUEsU0FBQUUsa0JBQUFGLENBQUEsRUFBQUcsQ0FBQSxhQUFBQyxDQUFBLE1BQUFBLENBQUEsR0FBQUQsQ0FBQSxDQUFBRSxNQUFBLEVBQUFELENBQUEsVUFBQUUsQ0FBQSxHQUFBSCxDQUFBLENBQUFDLENBQUEsR0FBQUUsQ0FBQSxDQUFBQyxVQUFBLEdBQUFELENBQUEsQ0FBQUMsVUFBQSxRQUFBRCxDQUFBLENBQUFFLFlBQUEsa0JBQUFGLENBQUEsS0FBQUEsQ0FBQSxDQUFBRyxRQUFBLFFBQUFDLE1BQUEsQ0FBQUMsY0FBQSxDQUFBWCxDQUFBLEVBQUFZLGNBQUEsQ0FBQU4sQ0FBQSxDQUFBTyxHQUFBLEdBQUFQLENBQUE7QUFBQSxTQUFBUSxhQUFBZCxDQUFBLEVBQUFHLENBQUEsRUFBQUMsQ0FBQSxXQUFBRCxDQUFBLElBQUFELGlCQUFBLENBQUFGLENBQUEsQ0FBQWUsU0FBQSxFQUFBWixDQUFBLEdBQUFDLENBQUEsSUFBQUYsaUJBQUEsQ0FBQUYsQ0FBQSxFQUFBSSxDQUFBLEdBQUFNLE1BQUEsQ0FBQUMsY0FBQSxDQUFBWCxDQUFBLGlCQUFBUyxRQUFBLFNBQUFULENBQUE7QUFBQSxTQUFBWSxlQUFBUixDQUFBLFFBQUFZLENBQUEsR0FBQUMsWUFBQSxDQUFBYixDQUFBLGdDQUFBYyxPQUFBLENBQUFGLENBQUEsSUFBQUEsQ0FBQSxHQUFBQSxDQUFBO0FBQUEsU0FBQUMsYUFBQWIsQ0FBQSxFQUFBRCxDQUFBLG9CQUFBZSxPQUFBLENBQUFkLENBQUEsTUFBQUEsQ0FBQSxTQUFBQSxDQUFBLE1BQUFKLENBQUEsR0FBQUksQ0FBQSxDQUFBZSxNQUFBLENBQUFDLFdBQUEsa0JBQUFwQixDQUFBLFFBQUFnQixDQUFBLEdBQUFoQixDQUFBLENBQUFxQixJQUFBLENBQUFqQixDQUFBLEVBQUFELENBQUEsZ0NBQUFlLE9BQUEsQ0FBQUYsQ0FBQSxVQUFBQSxDQUFBLFlBQUFNLFNBQUEseUVBQUFuQixDQUFBLEdBQUFvQixNQUFBLEdBQUFDLE1BQUEsRUFBQXBCLENBQUE7QUFBQSxTQUFBcUIsZ0JBQUFDLENBQUEsRUFBQUMsQ0FBQSxVQUFBRCxDQUFBLFlBQUFDLENBQUEsYUFBQUwsU0FBQTtBQUVsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBYkEsSUFjTU0sT0FBTyxnQkFBQWQsWUFBQSxDQUNYLFNBQUFjLFFBQVlDLE1BQU0sRUFBRTtFQUFBSixlQUFBLE9BQUFHLE9BQUE7RUFDbEIsSUFBSSxDQUFDQyxNQUFNLEdBQUdBLE1BQU07RUFDcEIsSUFBSSxDQUFDQyxZQUFZLEdBQUcsSUFBSUMsd0JBQVksQ0FBQ0YsTUFBTSxDQUFDO0FBQzlDLENBQUM7QUFBQSxJQUFBRyxRQUFBLEdBQUFDLE9BQUEsY0FHWUwsT0FBTztBQUFBTSxNQUFBLENBQUFELE9BQUEsR0FBQUEsT0FBQSxDQUFBRSxPQUFBIiwiaWdub3JlTGlzdCI6W119
}),
"[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus.js [app-route] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports["default"] = void 0;
var _client = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/client.js [app-route] (ecmascript)"));
var _pagination = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/client/pagination.js [app-route] (ecmascript)"));
var _reference_data = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/reference_data.js [app-route] (ecmascript)"));
var _shopping = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/shopping.js [app-route] (ecmascript)"));
var _booking = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/booking.js [app-route] (ecmascript)"));
var _travel = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/travel.js [app-route] (ecmascript)"));
var _e_reputation = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/e_reputation.js [app-route] (ecmascript)"));
var _media = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/media.js [app-route] (ecmascript)"));
var _ordering = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/ordering.js [app-route] (ecmascript)"));
var _airport = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/airport.js [app-route] (ecmascript)"));
var _schedule = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/schedule.js [app-route] (ecmascript)"));
var _analytics = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/analytics.js [app-route] (ecmascript)"));
var _location = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/location.js [app-route] (ecmascript)"));
var _airline = _interopRequireDefault(__turbopack_context__.r("[project]/Desktop/CLI/Mixpal/my-app/node_modules/amadeus/lib/amadeus/namespaces/airline.js [app-route] (ecmascript)"));
function _interopRequireDefault(e) {
    return e && e.__esModule ? e : {
        "default": e
    };
}
function _typeof(o) {
    "@babel/helpers - typeof";
    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(o) {
        return typeof o;
    } : function(o) {
        return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
}
function _classCallCheck(a, n) {
    if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
    for(var t = 0; t < r.length; t++){
        var o = r[t];
        o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
    }
}
function _createClass(e, r, t) {
    return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
        writable: !1
    }), e;
}
function _toPropertyKey(t) {
    var i = _toPrimitive(t, "string");
    return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
    if ("object" != _typeof(t) || !t) return t;
    var e = t[Symbol.toPrimitive];
    if (void 0 !== e) {
        var i = e.call(t, r || "default");
        if ("object" != _typeof(i)) return i;
        throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return ("string" === r ? String : Number)(t);
}
/**
 * The Amadeus client library for accessing the travel APIs.
 *
 * Initialize using your credentials:
 *
 * ```js
 * var Amadeus = require('amadeus');
 * var amadeus = new Amadeus({
 *     clientId:    'YOUR_CLIENT_ID',
 *     clientSecret: 'YOUR_CLIENT_SECRET'
 * });
 * ```
 *
 * Alternatively, initialize the library using
 * the environment variables `AMADEUS_CLIENT_ID`
 * and `AMADEUS_CLIENT_SECRET`
 *
 * ```js
 * var amadeus = new Amadeus();
 * ```
 *
 * @param {Object} params
 * @param {string} params.clientId the API key used to authenticate the API
 * @param {string} params.clientSecret the API secret used to authenticate
 *  the API
 * @param {Object} [params.logger=console] a `console`-compatible logger that
 *  accepts `log`, `error` and `debug` calls.
 * @param {string} [params.logLevel='warn'] the log level for the client,
 *  available options are `debug`, `warn`, and `silent`
 * @param {string} [params.hostname='production'] the name of the server API
 *  calls are made to (`production` or `test`)
 * @param {string} [params.host] the full domain or IP for a server to make the
 *  API clal to. Only use this if you don't want to use the provided servers
 * @param {boolean} [params.ssl=true] wether to use SSL for this API call
 * @param {number} [params.port=443] the port to make the API call to
 * @param {string} [params.customAppId=null] a custom App ID to be passed in
 * the User Agent to the server.
 * @param {string} [params.customAppVersion=null] a custom App Version number to
 * be passed in the User Agent to the server.
 * @param {Object} [params.http=https] an optional Node/HTTP(S)-compatible client
 *  that accepts a 'request()' call with an array of options.
 *
 * @property {Client} client The client for making authenticated HTTP calls
 * @property {number} version The version of this API client
 */ var Amadeus = /*#__PURE__*/ function() {
    function Amadeus() {
        var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        _classCallCheck(this, Amadeus);
        this.client = new _client["default"](params);
        this.version = this.client.version;
        this.referenceData = new _reference_data["default"](this.client);
        this.shopping = new _shopping["default"](this.client);
        this.booking = new _booking["default"](this.client);
        this.travel = new _travel["default"](this.client);
        this.eReputation = new _e_reputation["default"](this.client);
        this.media = new _media["default"](this.client);
        this.ordering = new _ordering["default"](this.client);
        this.airport = new _airport["default"](this.client);
        this.pagination = new _pagination["default"](this.client);
        this.schedule = new _schedule["default"](this.client);
        this.analytics = new _analytics["default"](this.client);
        this.location = new _location["default"](this.client);
        this.airline = new _airline["default"](this.client);
    }
    /**
   * The previous page for the given response. Resolves to null if the page
   * could not be found.
   *
   * ```js
   * amadeus.referenceData.locations.get({
   *   keyword: 'LON',
   *   subType: 'AIRPORT,CITY',
   *   page: { offset: 2 }
   * }).then(function(response){
   *   console.log(response);
   *   return amadeus.previous(response);
   * }).then(function(previousPage){
   *   console.log(previousPage);
   * });
   * ```
   *
   * @param response the previous response for an API call
   * @return {Promise.<Response,ResponseError>} a Promise
   */ return _createClass(Amadeus, [
        {
            key: "previous",
            value: function previous(response) {
                return this.pagination.page('previous', response);
            }
        },
        {
            key: "next",
            value: function next(response) {
                return this.pagination.page('next', response);
            }
        },
        {
            key: "first",
            value: function first(response) {
                return this.pagination.page('first', response);
            }
        },
        {
            key: "last",
            value: function last(response) {
                return this.pagination.page('last', response);
            }
        }
    ]);
}();
/**
 * A handy list of location types, to be used in the locations API:
 *
 * ```js
 * amadeus.referenceData.location.get({
 *   keyword: 'lon',
 *   subType: Amadeus.location.any
 * });
 * ```
 *
 * Currently available are the types `.airport`, `.city`, and `.any`
 */ Amadeus.location = {
    airport: 'AIRPORT',
    city: 'CITY',
    any: 'AIRPORT,CITY'
};
/**
 * A handy list of direction types, to be used in the Flight Busiest Period API:
 *
 * ```js
 * amadeus.travel.analytics.airTraffic.busiestPeriod.get({
 *   cityCode: 'par',
 *   perdiod: 2015,
 *   direction: Amadeus.direction.arriving
 * });
 * ```
 *
 * Currently available are the types `.arriving` and `.departing`
 */ Amadeus.direction = {
    arriving: 'ARRIVING',
    departing: 'DEPARTING'
};
var _default = exports["default"] = Amadeus;
module.exports = exports.default; //# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfY2xpZW50IiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfcGFnaW5hdGlvbiIsIl9yZWZlcmVuY2VfZGF0YSIsIl9zaG9wcGluZyIsIl9ib29raW5nIiwiX3RyYXZlbCIsIl9lX3JlcHV0YXRpb24iLCJfbWVkaWEiLCJfb3JkZXJpbmciLCJfYWlycG9ydCIsIl9zY2hlZHVsZSIsIl9hbmFseXRpY3MiLCJfbG9jYXRpb24iLCJfYWlybGluZSIsImUiLCJfX2VzTW9kdWxlIiwiX3R5cGVvZiIsIm8iLCJTeW1ib2wiLCJpdGVyYXRvciIsImNvbnN0cnVjdG9yIiwicHJvdG90eXBlIiwiX2NsYXNzQ2FsbENoZWNrIiwiYSIsIm4iLCJUeXBlRXJyb3IiLCJfZGVmaW5lUHJvcGVydGllcyIsInIiLCJ0IiwibGVuZ3RoIiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsIndyaXRhYmxlIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJfdG9Qcm9wZXJ0eUtleSIsImtleSIsIl9jcmVhdGVDbGFzcyIsImkiLCJfdG9QcmltaXRpdmUiLCJ0b1ByaW1pdGl2ZSIsImNhbGwiLCJTdHJpbmciLCJOdW1iZXIiLCJBbWFkZXVzIiwicGFyYW1zIiwiYXJndW1lbnRzIiwidW5kZWZpbmVkIiwiY2xpZW50IiwiQ2xpZW50IiwidmVyc2lvbiIsInJlZmVyZW5jZURhdGEiLCJSZWZlcmVuY2VEYXRhIiwic2hvcHBpbmciLCJTaG9wcGluZyIsImJvb2tpbmciLCJCb29raW5nIiwidHJhdmVsIiwiVHJhdmVsIiwiZVJlcHV0YXRpb24iLCJFUmVwdXRhdGlvbiIsIm1lZGlhIiwiTWVkaWEiLCJvcmRlcmluZyIsIk9yZGVyaW5nIiwiYWlycG9ydCIsIkFpcnBvcnQiLCJwYWdpbmF0aW9uIiwiUGFnaW5hdGlvbiIsInNjaGVkdWxlIiwiU2NoZWR1bGUiLCJhbmFseXRpY3MiLCJBbmFseXRpY3MiLCJsb2NhdGlvbiIsIkxvY2F0aW9uIiwiYWlybGluZSIsIkFpcmxpbmUiLCJ2YWx1ZSIsInByZXZpb3VzIiwicmVzcG9uc2UiLCJwYWdlIiwibmV4dCIsImZpcnN0IiwibGFzdCIsImNpdHkiLCJhbnkiLCJkaXJlY3Rpb24iLCJhcnJpdmluZyIsImRlcGFydGluZyIsIl9kZWZhdWx0IiwiZXhwb3J0cyIsIm1vZHVsZSIsImRlZmF1bHQiXSwic291cmNlcyI6WyIuLi9zcmMvYW1hZGV1cy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQ2xpZW50ICAgICAgICBmcm9tICcuL2FtYWRldXMvY2xpZW50JztcbmltcG9ydCBQYWdpbmF0aW9uICAgIGZyb20gJy4vYW1hZGV1cy9jbGllbnQvcGFnaW5hdGlvbic7XG5cbmltcG9ydCBSZWZlcmVuY2VEYXRhIGZyb20gJy4vYW1hZGV1cy9uYW1lc3BhY2VzL3JlZmVyZW5jZV9kYXRhJztcbmltcG9ydCBTaG9wcGluZyAgICAgIGZyb20gJy4vYW1hZGV1cy9uYW1lc3BhY2VzL3Nob3BwaW5nJztcbmltcG9ydCBCb29raW5nICAgICAgIGZyb20gJy4vYW1hZGV1cy9uYW1lc3BhY2VzL2Jvb2tpbmcnO1xuaW1wb3J0IFRyYXZlbCAgICAgICAgZnJvbSAnLi9hbWFkZXVzL25hbWVzcGFjZXMvdHJhdmVsJztcbmltcG9ydCBFUmVwdXRhdGlvbiAgIGZyb20gJy4vYW1hZGV1cy9uYW1lc3BhY2VzL2VfcmVwdXRhdGlvbic7XG5pbXBvcnQgTWVkaWEgICAgICAgICBmcm9tICcuL2FtYWRldXMvbmFtZXNwYWNlcy9tZWRpYSc7XG5pbXBvcnQgT3JkZXJpbmcgICAgICBmcm9tICcuL2FtYWRldXMvbmFtZXNwYWNlcy9vcmRlcmluZyc7XG5pbXBvcnQgQWlycG9ydCAgICAgICBmcm9tICcuL2FtYWRldXMvbmFtZXNwYWNlcy9haXJwb3J0JztcbmltcG9ydCBTY2hlZHVsZSAgICAgIGZyb20gJy4vYW1hZGV1cy9uYW1lc3BhY2VzL3NjaGVkdWxlJztcbmltcG9ydCBBbmFseXRpY3MgICAgIGZyb20gJy4vYW1hZGV1cy9uYW1lc3BhY2VzL2FuYWx5dGljcyc7XG5pbXBvcnQgTG9jYXRpb24gICAgICBmcm9tICcuL2FtYWRldXMvbmFtZXNwYWNlcy9sb2NhdGlvbic7XG5pbXBvcnQgQWlybGluZSAgICAgICBmcm9tICcuL2FtYWRldXMvbmFtZXNwYWNlcy9haXJsaW5lJztcblxuXG4vKipcbiAqIFRoZSBBbWFkZXVzIGNsaWVudCBsaWJyYXJ5IGZvciBhY2Nlc3NpbmcgdGhlIHRyYXZlbCBBUElzLlxuICpcbiAqIEluaXRpYWxpemUgdXNpbmcgeW91ciBjcmVkZW50aWFsczpcbiAqXG4gKiBgYGBqc1xuICogdmFyIEFtYWRldXMgPSByZXF1aXJlKCdhbWFkZXVzJyk7XG4gKiB2YXIgYW1hZGV1cyA9IG5ldyBBbWFkZXVzKHtcbiAqICAgICBjbGllbnRJZDogICAgJ1lPVVJfQ0xJRU5UX0lEJyxcbiAqICAgICBjbGllbnRTZWNyZXQ6ICdZT1VSX0NMSUVOVF9TRUNSRVQnXG4gKiB9KTtcbiAqIGBgYFxuICpcbiAqIEFsdGVybmF0aXZlbHksIGluaXRpYWxpemUgdGhlIGxpYnJhcnkgdXNpbmdcbiAqIHRoZSBlbnZpcm9ubWVudCB2YXJpYWJsZXMgYEFNQURFVVNfQ0xJRU5UX0lEYFxuICogYW5kIGBBTUFERVVTX0NMSUVOVF9TRUNSRVRgXG4gKlxuICogYGBganNcbiAqIHZhciBhbWFkZXVzID0gbmV3IEFtYWRldXMoKTtcbiAqIGBgYFxuICpcbiAqIEBwYXJhbSB7T2JqZWN0fSBwYXJhbXNcbiAqIEBwYXJhbSB7c3RyaW5nfSBwYXJhbXMuY2xpZW50SWQgdGhlIEFQSSBrZXkgdXNlZCB0byBhdXRoZW50aWNhdGUgdGhlIEFQSVxuICogQHBhcmFtIHtzdHJpbmd9IHBhcmFtcy5jbGllbnRTZWNyZXQgdGhlIEFQSSBzZWNyZXQgdXNlZCB0byBhdXRoZW50aWNhdGVcbiAqICB0aGUgQVBJXG4gKiBAcGFyYW0ge09iamVjdH0gW3BhcmFtcy5sb2dnZXI9Y29uc29sZV0gYSBgY29uc29sZWAtY29tcGF0aWJsZSBsb2dnZXIgdGhhdFxuICogIGFjY2VwdHMgYGxvZ2AsIGBlcnJvcmAgYW5kIGBkZWJ1Z2AgY2FsbHMuXG4gKiBAcGFyYW0ge3N0cmluZ30gW3BhcmFtcy5sb2dMZXZlbD0nd2FybiddIHRoZSBsb2cgbGV2ZWwgZm9yIHRoZSBjbGllbnQsXG4gKiAgYXZhaWxhYmxlIG9wdGlvbnMgYXJlIGBkZWJ1Z2AsIGB3YXJuYCwgYW5kIGBzaWxlbnRgXG4gKiBAcGFyYW0ge3N0cmluZ30gW3BhcmFtcy5ob3N0bmFtZT0ncHJvZHVjdGlvbiddIHRoZSBuYW1lIG9mIHRoZSBzZXJ2ZXIgQVBJXG4gKiAgY2FsbHMgYXJlIG1hZGUgdG8gKGBwcm9kdWN0aW9uYCBvciBgdGVzdGApXG4gKiBAcGFyYW0ge3N0cmluZ30gW3BhcmFtcy5ob3N0XSB0aGUgZnVsbCBkb21haW4gb3IgSVAgZm9yIGEgc2VydmVyIHRvIG1ha2UgdGhlXG4gKiAgQVBJIGNsYWwgdG8uIE9ubHkgdXNlIHRoaXMgaWYgeW91IGRvbid0IHdhbnQgdG8gdXNlIHRoZSBwcm92aWRlZCBzZXJ2ZXJzXG4gKiBAcGFyYW0ge2Jvb2xlYW59IFtwYXJhbXMuc3NsPXRydWVdIHdldGhlciB0byB1c2UgU1NMIGZvciB0aGlzIEFQSSBjYWxsXG4gKiBAcGFyYW0ge251bWJlcn0gW3BhcmFtcy5wb3J0PTQ0M10gdGhlIHBvcnQgdG8gbWFrZSB0aGUgQVBJIGNhbGwgdG9cbiAqIEBwYXJhbSB7c3RyaW5nfSBbcGFyYW1zLmN1c3RvbUFwcElkPW51bGxdIGEgY3VzdG9tIEFwcCBJRCB0byBiZSBwYXNzZWQgaW5cbiAqIHRoZSBVc2VyIEFnZW50IHRvIHRoZSBzZXJ2ZXIuXG4gKiBAcGFyYW0ge3N0cmluZ30gW3BhcmFtcy5jdXN0b21BcHBWZXJzaW9uPW51bGxdIGEgY3VzdG9tIEFwcCBWZXJzaW9uIG51bWJlciB0b1xuICogYmUgcGFzc2VkIGluIHRoZSBVc2VyIEFnZW50IHRvIHRoZSBzZXJ2ZXIuXG4gKiBAcGFyYW0ge09iamVjdH0gW3BhcmFtcy5odHRwPWh0dHBzXSBhbiBvcHRpb25hbCBOb2RlL0hUVFAoUyktY29tcGF0aWJsZSBjbGllbnRcbiAqICB0aGF0IGFjY2VwdHMgYSAncmVxdWVzdCgpJyBjYWxsIHdpdGggYW4gYXJyYXkgb2Ygb3B0aW9ucy5cbiAqXG4gKiBAcHJvcGVydHkge0NsaWVudH0gY2xpZW50IFRoZSBjbGllbnQgZm9yIG1ha2luZyBhdXRoZW50aWNhdGVkIEhUVFAgY2FsbHNcbiAqIEBwcm9wZXJ0eSB7bnVtYmVyfSB2ZXJzaW9uIFRoZSB2ZXJzaW9uIG9mIHRoaXMgQVBJIGNsaWVudFxuICovXG5jbGFzcyBBbWFkZXVzIHtcbiAgY29uc3RydWN0b3IocGFyYW1zID0ge30pIHtcbiAgICB0aGlzLmNsaWVudCA9IG5ldyBDbGllbnQocGFyYW1zKTtcbiAgICB0aGlzLnZlcnNpb24gPSB0aGlzLmNsaWVudC52ZXJzaW9uO1xuXG4gICAgdGhpcy5yZWZlcmVuY2VEYXRhICA9IG5ldyBSZWZlcmVuY2VEYXRhKHRoaXMuY2xpZW50KTtcbiAgICB0aGlzLnNob3BwaW5nICAgICAgID0gbmV3IFNob3BwaW5nKHRoaXMuY2xpZW50KTtcbiAgICB0aGlzLmJvb2tpbmcgICAgICAgID0gbmV3IEJvb2tpbmcodGhpcy5jbGllbnQpO1xuICAgIHRoaXMudHJhdmVsICAgICAgICAgPSBuZXcgVHJhdmVsKHRoaXMuY2xpZW50KTtcbiAgICB0aGlzLmVSZXB1dGF0aW9uICAgID0gbmV3IEVSZXB1dGF0aW9uKHRoaXMuY2xpZW50KTtcbiAgICB0aGlzLm1lZGlhICAgICAgICAgID0gbmV3IE1lZGlhKHRoaXMuY2xpZW50KTtcbiAgICB0aGlzLm9yZGVyaW5nICAgICAgID0gbmV3IE9yZGVyaW5nKHRoaXMuY2xpZW50KTtcbiAgICB0aGlzLmFpcnBvcnQgICAgICAgID0gbmV3IEFpcnBvcnQodGhpcy5jbGllbnQpO1xuICAgIHRoaXMucGFnaW5hdGlvbiAgICAgPSBuZXcgUGFnaW5hdGlvbih0aGlzLmNsaWVudCk7XG4gICAgdGhpcy5zY2hlZHVsZSAgICAgICA9IG5ldyBTY2hlZHVsZSh0aGlzLmNsaWVudCk7XG4gICAgdGhpcy5hbmFseXRpY3MgICAgICA9IG5ldyBBbmFseXRpY3ModGhpcy5jbGllbnQpO1xuICAgIHRoaXMubG9jYXRpb24gICAgICAgPSBuZXcgTG9jYXRpb24odGhpcy5jbGllbnQpO1xuICAgIHRoaXMuYWlybGluZSAgICAgICAgPSBuZXcgQWlybGluZSh0aGlzLmNsaWVudCk7XG4gIH1cblxuICAvKipcbiAgICogVGhlIHByZXZpb3VzIHBhZ2UgZm9yIHRoZSBnaXZlbiByZXNwb25zZS4gUmVzb2x2ZXMgdG8gbnVsbCBpZiB0aGUgcGFnZVxuICAgKiBjb3VsZCBub3QgYmUgZm91bmQuXG4gICAqXG4gICAqIGBgYGpzXG4gICAqIGFtYWRldXMucmVmZXJlbmNlRGF0YS5sb2NhdGlvbnMuZ2V0KHtcbiAgICogICBrZXl3b3JkOiAnTE9OJyxcbiAgICogICBzdWJUeXBlOiAnQUlSUE9SVCxDSVRZJyxcbiAgICogICBwYWdlOiB7IG9mZnNldDogMiB9XG4gICAqIH0pLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2Upe1xuICAgKiAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICogICByZXR1cm4gYW1hZGV1cy5wcmV2aW91cyhyZXNwb25zZSk7XG4gICAqIH0pLnRoZW4oZnVuY3Rpb24ocHJldmlvdXNQYWdlKXtcbiAgICogICBjb25zb2xlLmxvZyhwcmV2aW91c1BhZ2UpO1xuICAgKiB9KTtcbiAgICogYGBgXG4gICAqXG4gICAqIEBwYXJhbSByZXNwb25zZSB0aGUgcHJldmlvdXMgcmVzcG9uc2UgZm9yIGFuIEFQSSBjYWxsXG4gICAqIEByZXR1cm4ge1Byb21pc2UuPFJlc3BvbnNlLFJlc3BvbnNlRXJyb3I+fSBhIFByb21pc2VcbiAgICovXG4gIHByZXZpb3VzKHJlc3BvbnNlKSB7IHJldHVybiB0aGlzLnBhZ2luYXRpb24ucGFnZSgncHJldmlvdXMnLCByZXNwb25zZSk7IH1cblxuICAvKipcbiAgICogVGhlIG5leHQgcGFnZSBmb3IgdGhlIGdpdmVuIHJlc3BvbnNlLiBSZXNvbHZlcyB0byBudWxsIGlmIHRoZSBwYWdlIGNvdWxkXG4gICAqIG5vdCBiZSBmb3VuZC5cbiAgICpcbiAgICogYGBganNcbiAgICogYW1hZGV1cy5yZWZlcmVuY2VEYXRhLmxvY2F0aW9ucy5nZXQoe1xuICAgKiAgIGtleXdvcmQ6ICdMT04nLFxuICAgKiAgIHN1YlR5cGU6ICdBSVJQT1JULENJVFknXG4gICAqIH0pLnRoZW4oZnVuY3Rpb24ocmVzcG9uc2Upe1xuICAgKiAgIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcbiAgICogICByZXR1cm4gYW1hZGV1cy5uZXh0KHJlc3BvbnNlKTtcbiAgICogfSkudGhlbihmdW5jdGlvbihuZXh0UGFnZSl7XG4gICAqICAgY29uc29sZS5sb2cobmV4dFBhZ2UpO1xuICAgKiB9KTtcbiAgICogYGBgXG4gICAqXG4gICAqIEBwYXJhbSByZXNwb25zZSB0aGUgcHJldmlvdXMgcmVzcG9uc2UgZm9yIGFuIEFQSSBjYWxsXG4gICAqIEByZXR1cm4ge1Byb21pc2UuPFJlc3BvbnNlLFJlc3BvbnNlRXJyb3I+fSBhIFByb21pc2VcbiAgICovXG4gIG5leHQocmVzcG9uc2UpICAgICB7IHJldHVybiB0aGlzLnBhZ2luYXRpb24ucGFnZSgnbmV4dCcsIHJlc3BvbnNlKTsgfVxuXG4gIC8qKlxuICAgKiBUaGUgZmlyc3QgcGFnZSBmb3IgdGhlIGdpdmVuIHJlc3BvbnNlLiBSZXNvbHZlcyB0byBudWxsIGlmIHRoZSBwYWdlXG4gICAqIGNvdWxkIG5vdCBiZSBmb3VuZC5cbiAgICpcbiAgICogYGBganNcbiAgICogYW1hZGV1cy5yZWZlcmVuY2VEYXRhLmxvY2F0aW9ucy5nZXQoe1xuICAgKiAgIGtleXdvcmQ6ICdMT04nLFxuICAgKiAgIHN1YlR5cGU6ICdBSVJQT1JULENJVFknLFxuICAgKiAgIHBhZ2U6IHsgb2Zmc2V0OiAyIH1cbiAgICogfSkudGhlbihmdW5jdGlvbihyZXNwb25zZSl7XG4gICAqICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgKiAgIHJldHVybiBhbWFkZXVzLmZpcnN0KHJlc3BvbnNlKTtcbiAgICogfSkudGhlbihmdW5jdGlvbihmaXJzdFBhZ2Upe1xuICAgKiAgIGNvbnNvbGUubG9nKGZpcnN0UGFnZSk7XG4gICAqIH0pO1xuICAgKiBgYGBcbiAgICpcbiAgICogQHBhcmFtIHJlc3BvbnNlIHRoZSBwcmV2aW91cyByZXNwb25zZSBmb3IgYW4gQVBJIGNhbGxcbiAgICogQHJldHVybiB7UHJvbWlzZS48UmVzcG9uc2UsUmVzcG9uc2VFcnJvcj59IGEgUHJvbWlzZVxuICAgKi9cbiAgZmlyc3QocmVzcG9uc2UpICAgIHsgcmV0dXJuIHRoaXMucGFnaW5hdGlvbi5wYWdlKCdmaXJzdCcsIHJlc3BvbnNlKTsgfVxuXG4gIC8qKlxuICAgKiBUaGUgbGFzdCBwYWdlIGZvciB0aGUgZ2l2ZW4gcmVzcG9uc2UuIFJlc29sdmVzIHRvIG51bGwgaWYgdGhlIHBhZ2VcbiAgICogY291bGQgbm90IGJlIGZvdW5kLlxuICAgKlxuICAgKiBgYGBqc1xuICAgKiBhbWFkZXVzLnJlZmVyZW5jZURhdGEubG9jYXRpb25zLmdldCh7XG4gICAqICAga2V5d29yZDogJ0xPTicsXG4gICAqICAgc3ViVHlwZTogJ0FJUlBPUlQsQ0lUWSdcbiAgICogfSkudGhlbihmdW5jdGlvbihyZXNwb25zZSl7XG4gICAqICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgKiAgIHJldHVybiBhbWFkZXVzLmxhc3QocmVzcG9uc2UpO1xuICAgKiB9KS50aGVuKGZ1bmN0aW9uKGxhc3RQYWdlKXtcbiAgICogICBjb25zb2xlLmxvZyhsYXN0UGFnZSk7XG4gICAqIH0pO1xuICAgKiBgYGBcbiAgICpcbiAgICogQHBhcmFtIHJlc3BvbnNlIHRoZSBwcmV2aW91cyByZXNwb25zZSBmb3IgYW4gQVBJIGNhbGxcbiAgICogQHJldHVybiB7UHJvbWlzZS48UmVzcG9uc2UsUmVzcG9uc2VFcnJvcj59IGEgUHJvbWlzZVxuICAgKi9cbiAgbGFzdChyZXNwb25zZSkgICAgIHsgcmV0dXJuIHRoaXMucGFnaW5hdGlvbi5wYWdlKCdsYXN0JywgcmVzcG9uc2UpOyB9XG59XG5cblxuLyoqXG4gKiBBIGhhbmR5IGxpc3Qgb2YgbG9jYXRpb24gdHlwZXMsIHRvIGJlIHVzZWQgaW4gdGhlIGxvY2F0aW9ucyBBUEk6XG4gKlxuICogYGBganNcbiAqIGFtYWRldXMucmVmZXJlbmNlRGF0YS5sb2NhdGlvbi5nZXQoe1xuICogICBrZXl3b3JkOiAnbG9uJyxcbiAqICAgc3ViVHlwZTogQW1hZGV1cy5sb2NhdGlvbi5hbnlcbiAqIH0pO1xuICogYGBgXG4gKlxuICogQ3VycmVudGx5IGF2YWlsYWJsZSBhcmUgdGhlIHR5cGVzIGAuYWlycG9ydGAsIGAuY2l0eWAsIGFuZCBgLmFueWBcbiAqL1xuQW1hZGV1cy5sb2NhdGlvbiA9IHtcbiAgYWlycG9ydDogJ0FJUlBPUlQnLFxuICBjaXR5OiAnQ0lUWScsXG4gIGFueTogJ0FJUlBPUlQsQ0lUWSdcbn07XG5cbi8qKlxuICogQSBoYW5keSBsaXN0IG9mIGRpcmVjdGlvbiB0eXBlcywgdG8gYmUgdXNlZCBpbiB0aGUgRmxpZ2h0IEJ1c2llc3QgUGVyaW9kIEFQSTpcbiAqXG4gKiBgYGBqc1xuICogYW1hZGV1cy50cmF2ZWwuYW5hbHl0aWNzLmFpclRyYWZmaWMuYnVzaWVzdFBlcmlvZC5nZXQoe1xuICogICBjaXR5Q29kZTogJ3BhcicsXG4gKiAgIHBlcmRpb2Q6IDIwMTUsXG4gKiAgIGRpcmVjdGlvbjogQW1hZGV1cy5kaXJlY3Rpb24uYXJyaXZpbmdcbiAqIH0pO1xuICogYGBgXG4gKlxuICogQ3VycmVudGx5IGF2YWlsYWJsZSBhcmUgdGhlIHR5cGVzIGAuYXJyaXZpbmdgIGFuZCBgLmRlcGFydGluZ2BcbiAqL1xuXG5BbWFkZXVzLmRpcmVjdGlvbiA9IHtcbiAgYXJyaXZpbmc6ICdBUlJJVklORycsXG4gIGRlcGFydGluZzogJ0RFUEFSVElORydcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEFtYWRldXM7XG4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLElBQUFB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
}),
];

//# sourceMappingURL=647ae_amadeus_092c8a63._.js.map