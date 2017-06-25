"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const graphql_1 = require("graphql");
const Service_1 = require("./Service");
let counterType = new graphql_1.GraphQLObjectType({
    name: 'Counter',
    fields: () => ({
        counter: { type: graphql_1.GraphQLInt }
    }),
});
let linkType = new graphql_1.GraphQLObjectType({
    name: 'Link',
    fields: () => ({
        _id: { type: graphql_1.GraphQLString },
        title: {
            type: graphql_1.GraphQLString,
            description: 'the title of fields',
            resolve: (obj) => `hello ${obj.title}`,
        },
        url: { type: graphql_1.GraphQLString },
    }),
});
const data = [{
        counter: 42
    },
    {
        counter: 40
    },
];
const rootQueryType = () => (new graphql_1.GraphQLObjectType({
    name: 'RootQueryType',
    fields: () => ({
        products: {
            type: new graphql_1.GraphQLList(counterType),
            resolve: () => data
        },
        links: {
            type: new graphql_1.GraphQLList(linkType),
            description: 'the http links of fields',
            args: {
                key: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) }
            },
            resolve: (obj, args, ctx) => {
                // args.key
                // ctx 
                console.log(obj);
                return ctx.db.getLinks(args.key);
            }
        },
        service: {
            type: Service_1.default,
            args: {
                id: { type: new graphql_1.GraphQLNonNull(graphql_1.GraphQLString) }
            },
            resolve: (_, args, ctx) => {
                return ctx.db.getServiceByID(args.id);
            }
        }
    })
}));
exports.schema = () => {
    return new graphql_1.GraphQLSchema({
        query: rootQueryType()
    });
};
