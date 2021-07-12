import Layout from '../components/MyLayout'
import Image from 'react-bootstrap/Image'

//home page
export default () => (
	<Layout>
	    <h1>Developer Portfolio</h1>
		<h3>Arno De Villiers</h3>
		<br />
		<Image src="/static/images/IMG-20201122-WA0007.jpg/" width="300" height="300" thumbnail />
  </Layout>
)