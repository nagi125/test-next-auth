import { useState, useEffect } from 'react'
import Router from 'next/router'
import Layout from '../components/layout'
import Form from '../components/form'
import fetch from 'isomorphic-unfetch'
import * as loginUser from "../lib/loginUser";
import {useSetRecoilState} from "recoil";
import {loginUserState} from "../states/loginUser";

const Login = () => {
  const setLoginUser = useSetRecoilState(loginUserState)
  const [errorMsg, setErrorMsg] = useState('')

  async function handleSubmit(e) {
    e.preventDefault()

    if (errorMsg) setErrorMsg('')

    const body = {
      email: e.currentTarget.email.value,
      password: e.currentTarget.password.value,
    }

    try {
      const res = await fetch('/api/admin/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
        credentials: 'include'
      })

      if (res.status === 200) {

        // リダイレクト前に認証情報をセットしないとチェックができないため
        try {
          const user = await loginUser.fetchLoginUser();
          setLoginUser(user);
        } catch {
          setLoginUser(null);
        }

        await Router.push('/')
      } else {
        throw new Error(await res.text())
      }
    } catch (error) {
      console.error('An unexpected error happened occurred:', error)
      setErrorMsg(error.message)
    }
  }

  return (
      <Layout>
        <div className="login">
          <Form isLogin errorMessage={errorMsg} onSubmit={handleSubmit} />
        </div>
        <style jsx>{`
        .login {
          max-width: 21rem;
          margin: 0 auto;
          padding: 1rem;
          border: 1px solid #ccc;
          border-radius: 4px;
        }
      `}</style>
      </Layout>
  )
}

export default Login