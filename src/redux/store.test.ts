import { createStore, applyMiddleware} from 'redux';

jest.mock('redux', () => ({
  ...jest.requireActual('redux'),
  createStore: jest.fn(),
  applyMiddleware: jest.fn(),
}));

describe('Store', () => {
  it('is created for testing reducer and middleware', () => {
    (applyMiddleware as jest.Mock).mockReturnValue(jest.fn());
    expect(createStore).toHaveBeenCalled();
  });
});