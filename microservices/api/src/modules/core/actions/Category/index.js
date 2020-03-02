import { load } from 'graphql-load';

import typeDefs from './types.gql';
import { CategoryService, SecurityService } from '../../services';
import RolesEnum from '../../../accounts/db/users/enums/RolesEnum';

load({
  typeDefs,
  resolvers: {
    Mutation: {
      createCategory(_, { categoryName }, { userId }) {
        SecurityService.checkRole(userId, RolesEnum.ADMIN);

        return CategoryService.createCategory(categoryName);
      },

      editCategory(_, { categoryId, categoryName }, { userId }) {
        SecurityService.checkRole(userId, RolesEnum.ADMIN);

        return CategoryService.editCategory({ categoryId, categoryName });
      },

      deleteCategory(_, { categoryId }, { userId }) {
        SecurityService.checkRole(userId, RolesEnum.ADMIN);

        return CategoryService.deleteCategory(categoryId);
      },
    },
  },
});
