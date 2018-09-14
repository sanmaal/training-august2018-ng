import { DataPipe } from './data.pipe';
import { Data } from '../models/data';

describe('DataPipe tests', () => {
  let pipe: DataPipe;

  const testObject: Data = {
    date: new Date().toLocaleString(),
  }

  beforeEach(() => {
    pipe = new DataPipe();
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  })

  it(`should return date if it exists`, () => {
    expect(pipe.transform(testObject)).toBe(testObject.date);
  })

  it(`should return 'Not yet catched' if date doesn't exist`, () => {
    testObject.date = null;
    expect(pipe.transform(testObject)).toBe('Not yet catched');
  })
})