"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Database {
    async getProduct() {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    name: 'hello',
                    value: 'world'
                });
            }, 1000);
        });
    }
    async getLinks(key) {
        console.log(key);
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([{
                        _id: '123',
                        title: 'sean',
                        url: 'bbbb',
                    }, {
                        _id: '345',
                        title: 'jack',
                        url: 'ddddddd'
                    }]);
            }, 1000);
        });
    }
    async getContainers(id) {
        console.log('serviceid', id);
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve([{
                        name: 'container001',
                        startAt: new Date(),
                    }, {
                        name: 'container002',
                        startAt: new Date(),
                    }]);
            }, 1000);
        });
    }
    async getServiceByID(id) {
        console.log('serviceid', id);
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve({
                    id,
                    image: 'alpine:1.0.0'
                });
            }, 1000);
        });
    }
}
exports.Database = Database;
