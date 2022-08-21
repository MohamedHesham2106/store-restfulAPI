import { OrderStore } from '../order';

const store = new OrderStore();
describe('Test Order Model methods', () => {
  it('should contain create method', () => {
    expect(store.create).toBeDefined();
  });
  it('should contain addProduct method', () => {
    expect(store.addProduct).toBeDefined();
  });
  it('should contain getOrderbyUserId method', () => {
    expect(store.getOrderbyUserId).toBeDefined();
  });
});
