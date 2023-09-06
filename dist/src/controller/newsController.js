"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const newsService_1 = require("../services/newsService");
class NewsController {
    constructor() {
        this.get = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { page, qtd } = req.params;
                const amount = qtd ? parseInt(qtd) : 10;
                const pageNumber = page ? parseInt(page) : 1;
                let result = yield this._service.getAll(pageNumber, amount);
                res.status(200).json({ result });
            }
            catch (error) {
                res.status(500).json({ error: error.message || error.toString() });
            }
        });
        this.getById = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                let result = yield this._service.get(id);
                res.status(200).json({ result });
            }
            catch (error) {
                res.status(500).json({ error: error.message || error.toString() });
            }
        });
        this._service = new newsService_1.NewsService();
    }
}
exports.default = new NewsController();
