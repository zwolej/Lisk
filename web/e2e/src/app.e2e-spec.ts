import { AppPage } from './app.po';

describe('AppPage', () => {

  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display version', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Lisk Tools 0.0.1');
  });

});
