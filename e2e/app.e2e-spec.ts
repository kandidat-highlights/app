import { KandidatAppPage } from './app.po';

describe('kandidat-app App', () => {
  let page: KandidatAppPage;

  beforeEach(() => {
    page = new KandidatAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
