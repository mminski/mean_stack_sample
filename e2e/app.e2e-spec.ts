import { AngularFourCmsPage } from './app.po';

describe('angular-four-cms App', () => {
  let page: AngularFourCmsPage;

  beforeEach(() => {
    page = new AngularFourCmsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
