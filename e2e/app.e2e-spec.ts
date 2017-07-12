import { TestTradingPlatformPage } from './app.po';

describe('test-trading-platform App', () => {
  let page: TestTradingPlatformPage;

  beforeEach(() => {
    page = new TestTradingPlatformPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
