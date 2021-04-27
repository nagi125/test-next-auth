import Layout from '../components/layout'

const Home = () => {

  return (
      <Layout>
        <h1>Passport.js Example</h1>

        <p>Steps to test the example:</p>

        <ol>
          <li>Click Login and enter a username and password.</li>
          <li>
            You'll be redirected to Home. Click on Profile, notice how your
            session is being used through a token stored in a cookie.
          </li>
          <li>
            Click Logout and try to go to Profile again. You'll get redirected to
            Login.
          </li>
        </ol>

        <style jsx>{`
        li {
          margin-bottom: 0.5rem;
        }
        pre {
          white-space: pre-wrap;
          word-wrap: break-word;
        }
      `}</style>
      </Layout>
  )
}

export default Home