import '../styles/globals.css'
import { useState, useEffect } from "react"
import { useRouter } from 'next/router'
import fetch from 'isomorphic-unfetch'


function AppInit() {

  const [user, setUser] = useState(null)
  const router = useRouter()

  useEffect(() => {
    if(router.pathname === "/login") return; // pathnameが"/login"の場合には処理を行わない
    (async () => {
      try {
        const res  = await fetch('/api/admin/user')
        const json = await res.json()
        await setUser(json)

      } catch {
        await setUser(null)
      }

      await (() => {
        if (user) {
          console.log(user)
        } else {
          console.log(user)
        }
      })();

    })();
  }, [router.pathname])

  return null
}

function MyApp({ Component, pageProps }) {
  return(
      <>
        <Component {...pageProps} />
        <AppInit />
      </>
  )
}

export default MyApp
