import { Quotes } from './quotes';

describe('Quotes', () => {
  it('should create an instance', () => {
    expect( new Quotes("Blue", "Blue",6,9,"7")).toBeTruthy();
  });
});
