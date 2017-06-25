"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const Container_1 = require("./Container");
exports.default = new graphql_1.GraphQLObjectType({
    name: 'ServiceType',
    fields: {
        id: { type: graphql_1.GraphQLString },
        name: { type: graphql_1.GraphQLString },
        image: { type: graphql_1.GraphQLString },
        containers: {
            type: new graphql_1.GraphQLList(Container_1.default),
            resolve: (obj, _, ctx) => {
                return ctx.db.getContainers(obj.id);
            }
        }
    }
});
