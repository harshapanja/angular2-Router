import { DesktopProjectPage } from './app.po';

describe('desktop-project App', function() {
  let page: DesktopProjectPage;

  beforeEach(() => {
    page = new DesktopProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
