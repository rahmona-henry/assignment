import { AssignmentAppPage } from './app.po';

describe('assignment-app App', () => {
  let page: AssignmentAppPage;

  beforeEach(() => {
    page = new AssignmentAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
