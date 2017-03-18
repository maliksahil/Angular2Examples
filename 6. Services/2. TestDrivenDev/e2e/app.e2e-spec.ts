import { TDDPage } from './app.po';

describe('tdd App', () => {
  let page: TDDPage;

  beforeEach(() => {
    page = new TDDPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
