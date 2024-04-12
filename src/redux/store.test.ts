import { createStore, applyMiddleware, compose } from 'redux';

jest.mock('redux', () => ({
  ...jest.requireActual('redux'),
  createStore: jest.fn(),
  applyMiddleware: jest.fn(),
  compose: jest.fn(),
}));

describe('Redux Store', () => {
  it('is created with the expected reducer and middleware', () => {
    (compose as jest.Mock).mockImplementation((...args: any[]) => args[args.length - 1]);
    (applyMiddleware as jest.Mock).mockReturnValue(jest.fn());
    expect(createStore).toHaveBeenCalled();
  });
});