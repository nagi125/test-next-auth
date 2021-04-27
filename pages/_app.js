import '../styles/globals.css'
import { useEffect } from "react";
import { useSetRecoilState, RecoilRoot } from "recoil";
import { loginUserState } from "../states/loginUser";
import * as loginUser from "../lib/loginUser";


function AppInit() {
  const setLoginUser = useSetRecoilState(loginUserState)

  // Middleware
  useEffect(() => {
    (async function () {

      try {
        const user = loginUser.fetchLoginUser();
        setLoginUser(user);
      } catch {
        setLoginUser(null);
      }
    })();
  }, [])

  return null
}

function MyApp({ Component, pageProps }) {

  return(
      <RecoilRoot>
        <Component {...pageProps} />
        <AppInit />
      </RecoilRoot>
  )
}

export default MyApp
