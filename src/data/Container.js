"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
exports.default = new graphql_1.GraphQLObjectType({
    name: 'ContainerType',
    fields: {
        name: { type: graphql_1.GraphQLString },
        startAt: { type: graphql_1.GraphQLString }
    }
});
