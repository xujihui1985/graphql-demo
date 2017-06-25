import {
  GraphQLObjectType,
  GraphQLString,
  GraphQLList,
} from 'graphql';
import ContainerType from './Container';

export default new GraphQLObjectType({
  name: 'ServiceType',
  fields: {
    id: {type: GraphQLString },
    name: { type: GraphQLString },
    image: { type: GraphQLString },
    containers: {
      type: new GraphQLList(ContainerType),
      resolve: (obj, _, ctx) => {
        return ctx.db.getContainers(obj.id);
      }
    }

  }
});
