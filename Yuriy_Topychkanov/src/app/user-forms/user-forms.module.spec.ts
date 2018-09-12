import { UserFormsModule } from './user-forms.module';

describe('UserFormsModule', () => {
  let userFormsModule: UserFormsModule;

  beforeEach(() => {
    userFormsModule = new UserFormsModule();
  });

  it('should create an instance', () => {
    expect(userFormsModule).toBeTruthy();
  });
});
