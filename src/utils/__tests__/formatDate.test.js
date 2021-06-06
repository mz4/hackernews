import formatDate from '../formatDate';

describe('Test Date fromatting', () => {
  it('tests date formatting', () => {
    expect(formatDate('338811300')).toEqual('9/26/1980, 10:15:00 AM');
  })
})