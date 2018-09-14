import { CaughtPipe } from './caught.pipe';

describe('CaughtPipe', () => {
  it('create an instance', () => {
    const pipe = new CaughtPipe();
    expect(pipe).toBeTruthy();
  });
});
