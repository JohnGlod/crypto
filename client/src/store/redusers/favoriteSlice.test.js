import favoriteReducer, {
  setItemToFavorite,
  removeItemFromFavorite,
} from './favoriteSlice';

describe('favoriteSlice', () => {
  it('should return default state when passed an empty action', () => {
    const result = favoriteReducer(undefined, { type: '' });
    expect(result).toEqual([]);
  });

  it('should add new favotite item with "setItemToFavorite" action', () => {
    const action = {
      type: setItemToFavorite.type,
      payload: {
        token_address: '123332',
        token_id: '123332',
        name: 'name',
      },
    };
    const result = favoriteReducer([], action);

    expect(result[0].name).toBe('name');
    expect(result).toHaveLength(1);
    expect(result[0]).toEqual(action.payload);
    expect(result[0]).toBeDefined();
  });

  it('should remove favorite item with "removeItemFromFavorite" action', () => {
    const favorites = [
      {
        token_address: '123332',
        token_id: '123332',
        name: 'name',
      },
    ];
    const token = { id: '123332', address: '123332' };

    const action = {
      type: removeItemFromFavorite.type,
      payload: token,
    };

    const result = favoriteReducer(favorites, action);
    expect(result).toEqual([]);
    expect(result).toHaveLength(0);
    expect(result[0]).toBeUndefined();
  });
});
