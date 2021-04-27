import fetch from "isomorphic-unfetch"

export function fetchLoginUser() {

  return (async function() {

    let loginUser = null

    try {
      const res  = await fetch('/api/admin/user')
      loginUser  = await res.json()
    } catch {
      loginUser  = null
    }
    return loginUser
  })();

}