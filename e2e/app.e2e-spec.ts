import { KmkAppPage } from './app.po';

describe('kmk-app App', function() {
  let page: KmkAppPage;

  beforeEach(() => {
    page = new KmkAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
