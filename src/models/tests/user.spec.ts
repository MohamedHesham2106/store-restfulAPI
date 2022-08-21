import { UserStore } from '../user';

const store = new UserStore();
describe('Test User Model methods', () => {
  it('should contain index method', () => {
    expect(store.index).toBeDefined();
  });
  it('should contain show method', () => {
    expect(store.show).toBeDefined();
  });
  it('should contain create method', () => {
    expect(store.create).toBeDefined();
  });
  it('should contain authenticate method', () => {
    expect(store.authenticate).toBeDefined();
  });
});
