import { LoadingPipe } from './loading.pipe';
import { Loading } from '../models/loading';

describe('LoadingPipe tests', () => {
  let pipe: LoadingPipe;

  const testObject: Loading = {
    isFetching: true,
  }

  beforeEach(() => {
    pipe = new LoadingPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  })

  it(`should transform value to 'Loading...'`, () => {
    expect(pipe.transform(testObject.isFetching)).toBe('Loading...');
  })

  it(`should transform value to 'Load'`, () => {
    testObject.isFetching = null;
    expect(pipe.transform(testObject.isFetching)).toBe('Load');
  })
})