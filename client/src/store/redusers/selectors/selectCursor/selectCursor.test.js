import { selectCursor } from './selectCursor';

describe('Selector cursor', () => {
  it('returns the value of the cursor', () => {
    const cursor = 'test';
    const result = selectCursor({
      NFTCollections: {
        cursor,
      },
    });
    expect(result).toBe(cursor)
  });
  
  it('Checking for the absence of undefined', () => {
    const cursor = 'test';
    const result = selectCursor({
      NFTCollections: {
        cursor,
      },
    });
    expect(result).toBeDefined();
  });
});

