export const SELECT_ITEM = 'SELECT_ITEM';

export const selectItem = id => ({
  type: SELECT_ITEM,
  itemID: id,
});
