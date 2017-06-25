import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList,
  GraphQLNonNull,
} from 'graphql';
import ServiceType from './Service';

let counterType = new GraphQLObjectType({
  name: 'Counter',
  fields: () => ({
    counter: { type: GraphQLInt }
  }),
});

let linkType = new GraphQLObjectType({
  name: 'Link',
  fields: () => ({
    _id: { type: GraphQLString },
    title: {
      type: GraphQLString,
      description: 'the title of fields',
      resolve: (obj) => `hello ${obj.title}`,
    },
    url: { type: GraphQLString },
  }),
})

const data = [{
  counter: 42
},
{
  counter: 40
},
];

const rootQueryType = () => (
  new GraphQLObjectType({
    name: 'RootQueryType',
    fields: () => ({
      products: {
        type: new GraphQLList(counterType),
        resolve: () => data
      },
      links: {
        type: new GraphQLList(linkType),
        description: 'the http links of fields',
        args: {
          key: { type: new GraphQLNonNull(GraphQLString) }
        },
        resolve: (obj, args, ctx) => {
          // args.key
          // ctx 
          console.log(obj);
          return ctx.db.getLinks(args.key);
        }
      },
      service: {
        type: ServiceType,
        args: {
          id: { type: new GraphQLNonNull(GraphQLString) }
        },
        resolve: (_, args, ctx) => {
          return ctx.db.getServiceByID(args.id);
        }
      }
    })
  })
);

export let schema = () => {
  return new GraphQLSchema({
    query: rootQueryType()
  });
}
