import { AppPage } from './app.po';

describe('App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
  });

  it('should display "<Rest Grid Library>"', () => {
    expect(page.getTitleText()).toContain('<Rest Grid Library>');
  });
});
