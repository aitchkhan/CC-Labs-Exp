import { CCLabsExperimentPage } from './app.po';

describe('cc-labs-experiment App', () => {
  let page: CCLabsExperimentPage;

  beforeEach(() => {
    page = new CCLabsExperimentPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
