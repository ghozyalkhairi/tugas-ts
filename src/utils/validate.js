"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = validate;
function validate(data, schema) {
    for (var key in schema) {
        if (typeof data[key] !== schema[key]) {
            return false;
        }
    }
    return true;
}
