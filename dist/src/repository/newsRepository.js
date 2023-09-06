"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.NewsRepository = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const NewsSchema = new mongoose_1.default.Schema({
    tags: { type: String },
    link: { type: String },
    texto: { type: String },
    autor: { type: String },
    chapeu: { type: String },
    titulo: { type: String },
    imagem: { type: String },
    ativo: { type: Boolean },
    dataPublicacao: { type: Date },
});
exports.NewsRepository = mongoose_1.default.model('news', NewsSchema);
