"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const schema_1 = require("./data/schema");
const GraphQLHTTP = require("express-graphql");
const database_1 = require("./database");
const app = express();
app.use('/graphql', GraphQLHTTP({
    schema: schema_1.schema(),
    graphiql: true,
    context: {
        db: new database_1.Database()
    }
}));
const PORT = 3000;
app.listen(PORT);
