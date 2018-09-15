import { CatchPipe } from './catch.pipe';
import { Catch } from '../models/catch';

describe('CatchPipe tests', () => {
  let pipe: CatchPipe;

  const testObject: Catch = {
    catch: new Date().toLocaleString(),
  }

  beforeEach(() => {
    pipe = new CatchPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  })

  it(`should transform value to 'catched'`, () => {
    expect(pipe.transform(testObject.catch)).toBe('catched');
  })

  it(`should transform value to 'catch'`, () => {
    testObject.catch = null;
    expect(pipe.transform(testObject.catch)).toBe('catch');
  })
})