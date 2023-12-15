import { AuthGuard } from './auth.guard';

describe('AuthuserGuard', () => {
  it('should be defined', () => {
    expect(new AuthGuard()).toBeDefined();
  });
});
