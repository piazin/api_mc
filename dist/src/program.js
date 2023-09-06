"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const startUp_1 = require("./startUp");
const port = '5000';
startUp_1.startUp.app.listen(port, () => {
    console.info(`server running in  localhost:${port}`);
});
