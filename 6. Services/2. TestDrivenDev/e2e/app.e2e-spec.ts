import { TestDriveDevPage } from './app.po';

describe('test-drive-dev App', () => {
  let page: TestDriveDevPage;

  beforeEach(() => {
    page = new TestDriveDevPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
