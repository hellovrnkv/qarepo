"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeId = makeId;
function makeId(prefix = 'id') {
    return `${prefix}_${Math.random().toString(36).slice(2, 9)}`;
}
