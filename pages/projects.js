import Link from 'next/link'
import Layout from '../components/MyLayout'
//projects page with a link to the project
export default () => (
  <Layout>
      <h4>Projects</h4>
      <p>This is a simple project that uses an api to search the itunes database for a media type. You can then add or remove media from a list of favorites</p>

    <Link href="https://epic-ptolemy-ff5071.netlify.app/" target="_blank">
        <a>project link</a>
    </Link>
  </Layout>
)