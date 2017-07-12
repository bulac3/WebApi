import { SuperMapPage } from './app.po';

describe('super-map App', () => {
  let page: SuperMapPage;

  beforeEach(() => {
    page = new SuperMapPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
