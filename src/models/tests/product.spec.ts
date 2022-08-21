import { ProductStore } from '../product';

const store = new ProductStore();
describe('Test Product Model methods', () => {
  it('should contain index method', () => {
    expect(store.index).toBeDefined();
  });
  it('should contain show method', () => {
    expect(store.show).toBeDefined();
  });
  it('should contain create method', () => {
    expect(store.create).toBeDefined();
  });
  it('should contain update method', () => {
    expect(store.update).toBeDefined();
  });
  it('should contain delete method', () => {
    expect(store.delete).toBeDefined();
  });
  it('should contain filterByCategory method', () => {
    expect(store.filterByCategory).toBeDefined();
  });
});
