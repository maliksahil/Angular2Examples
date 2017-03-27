import { EagerLazyLoadingPage } from './app.po';

describe('eager-lazy-loading App', () => {
  let page: EagerLazyLoadingPage;

  beforeEach(() => {
    page = new EagerLazyLoadingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
