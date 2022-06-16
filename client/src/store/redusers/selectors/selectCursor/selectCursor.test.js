import { selectCursor } from './selectCursor';

describe('Selector cursor', () => {
  it('returns the value of the cursor', () => {
    const cursor = 'test';
    const result = selectCursor({
      NFTCollections: {
        cursor: 'test',
      },
    });
    expect(result).toBe(cursor)
  });
});

