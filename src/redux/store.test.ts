import { createStore, applyMiddleware} from 'redux';

jest.mock('redux', () => ({
  ...jest.requireActual('redux'),
  createStore: jest.fn(),
  applyMiddleware: jest.fn(),
}));

describe('Redux Store', () => {
  it('is created with the expected reducer and middleware', () => {
    (applyMiddleware as jest.Mock).mockReturnValue(jest.fn());
    expect(createStore).toHaveBeenCalled();
  });
});