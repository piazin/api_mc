"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.startUp = void 0;
const db_1 = require("./infra/db");
const express_1 = __importDefault(require("express"));
const newsController_1 = __importDefault(require("./controller/newsController"));
class StartUp {
    constructor() {
        this._db = new db_1.Database();
        this.app = (0, express_1.default)();
        this._db.createConnection();
        this.routes();
    }
    routes() {
        this.app.route('/').get((req, res) => {
            res.send({ version: '0.0.1' });
        });
        this.app.route('/api/v1/news/:page/:qtd').get((req, res) => {
            return newsController_1.default.get(req, res);
        });
        this.app.route('/api/v1/news/:id').get((req, res) => {
            return newsController_1.default.getById(req, res);
        });
    }
}
exports.startUp = new StartUp();
