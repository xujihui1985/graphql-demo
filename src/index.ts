import * as express from 'express';
import { schema } from './data/schema';
import * as GraphQLHTTP from 'express-graphql';
import { Database } from './database';

const app = express();

app.use('/graphql', GraphQLHTTP({
  schema: schema(),
  graphiql: true,
  context: {
    db: new Database()
  }
}));

const PORT = 3000;

app.listen(PORT);
