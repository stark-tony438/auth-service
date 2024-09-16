"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
class DataBaseServer {
}
DataBaseServer.open = (mongoUrl) => {
    return new Promise((resolve, reject) => {
        try {
            mongoose.connect(mongoUrl, { autoIndex: true });
            return resolve();
        }
        catch (e) {
            return reject(e);
        }
    });
};
DataBaseServer.disconnect = () => {
    console.log('Mongoose Disconnect');
    mongoose.connection.close();
};
exports.default = DataBaseServer;
//# sourceMappingURL=DataBase.js.map