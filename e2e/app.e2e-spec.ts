import { TodoMVCPage } from './app.po';

describe('todo-mvc App', () => {
  let page: TodoMVCPage;

  beforeEach(() => {
    page = new TodoMVCPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
