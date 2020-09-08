import { SearchWordFilterPipe } from './search-word-filter.pipe';

describe('SearchWordFilterPipe', () => {
  it('create an instance', () => {
    const pipe: SearchWordFilterPipe = new SearchWordFilterPipe();
    expect(pipe).toBeTruthy();
  });
});
