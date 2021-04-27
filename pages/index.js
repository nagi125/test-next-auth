import Layout from '../components/layout'
import { useLoginUser } from "../hooks/useLoginUser";

const Home = () => {

  const { loginUser, isAuthChecking } = useLoginUser()

  if(isAuthChecking) return (<div>ログイン情報を確認中…</div>);
  if(!loginUser)     return (<div>ログインしていません</div>);

  return (
      <Layout>
        <h1>認証サンプル</h1>
        <div>あなたのユーザー名は{loginUser.name}です</div>
      </Layout>
  )
}

export default Home