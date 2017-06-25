import {
  GraphQLObjectType,
  GraphQLString
} from 'graphql';

export default new GraphQLObjectType({
  name: 'ContainerType',
  fields: {
    name: { type: GraphQLString },
    startAt: {type: GraphQLString}
  }
});
