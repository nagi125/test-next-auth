import { useRecoilValue } from 'recoil';
import { loginUserState } from '../states/loginUser'

export function useLoginUser() {
  const loginUser      = useRecoilValue(loginUserState)
  const isAuthChecking = (loginUser === undefined)

  return {
    loginUser,
    isAuthChecking
  };
}