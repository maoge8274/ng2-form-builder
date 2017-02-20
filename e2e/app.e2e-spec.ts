import { Ng2FormBuilderPage } from './app.po';

describe('ng2-form-builder App', () => {
  let page: Ng2FormBuilderPage;

  beforeEach(() => {
    page = new Ng2FormBuilderPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
