import { NewRautingPage } from './app.po';

describe('new-rauting App', function() {
  let page: NewRautingPage;

  beforeEach(() => {
    page = new NewRautingPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
