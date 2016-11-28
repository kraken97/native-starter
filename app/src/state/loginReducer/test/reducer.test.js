import reducer from '../reducer';

describe('loginReducer reducer', () => {
  it('returns default state', () => {
    expect(
      reducer(undefined, {})
    ).toEqual({});
  });
});
