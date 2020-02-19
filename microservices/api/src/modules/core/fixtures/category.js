import Categories from '../db/categories';

export function createCategory(categoryName) {
  Categories.insert({
    name: categoryName,
  });
}
