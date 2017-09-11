import moment from 'moment';
import createDateObjects from '../createDateObjects';

it('createDateObjects', () => {
  for (let month = 0; month < 12; month++) {
    const date = moment.utc([2016, month, 1]);
    expect(createDateObjects(date)).toMatchSnapshot();
  }
});
