import { ZeekitCountryPage } from './app.po';

describe('zeekit-country App', () => {
  let page: ZeekitCountryPage;

  beforeEach(() => {
    page = new ZeekitCountryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
