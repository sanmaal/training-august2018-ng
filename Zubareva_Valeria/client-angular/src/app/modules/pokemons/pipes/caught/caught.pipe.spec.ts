import { CaughtPipe } from './caught.pipe';
import { Caughtable } from '../../../../domain/Caughtable';


describe('CaughtPipe', () => {
  let pipe: CaughtPipe;

  const testObj: Caughtable = {
    caught: true
  };

  beforeEach(() => {
    pipe = new CaughtPipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should transform value to caught', function () {
    expect(pipe.transform(testObj)).toBe('Caught')
  });

  it('should transform value to "Not Caught"', function () {
    testObj.caught = false;
    expect(pipe.transform(testObj)).toBe('Not Caught')
  });

});
