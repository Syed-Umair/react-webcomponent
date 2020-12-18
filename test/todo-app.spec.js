describe('ToDo-App', () => {
  test('should display Todo App text', () => {
    const element = window.document.createElement('todo-app');
    window.document.body.appendChild(element);
    const renderedText = element.textContent;
    expect(renderedText).toContain('Todo App');
  });
});
