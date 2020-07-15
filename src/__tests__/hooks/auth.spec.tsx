import { renderHook } from '@testing-library/react-hooks';
import { useAuth, AuthProvider } from '../../hooks/auth';

describe('Auth hook', () => {
  it('should be able to sign in', () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: AuthProvider,
    });

    result.current.signIn({
      email: 'john@hotmail.com',
      password: '123456',
    });

    expect(result.current.user.email).toEqual('john@hotmail.com');
  });
});
