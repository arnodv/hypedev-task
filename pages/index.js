import Layout from '../components/MyLayout'
import Image from 'react-bootstrap/Image'
import Document, {
	Html, Head, Main, NextScript,
  } from 'next/document';
//home page
export default () => (
	<html>
	<head>
		<script async src="https://www.googletagmanager.com/gtag/js?id=G-H34W95RX0N"></script>
		<script>
  			window.dataLayer = window.dataLayer || [];
  			function gtag(){dataLayer.push(arguments)}
  			gtag('js', new Date());

  			gtag('config', 'G-H34W95RX0N');
		</script>
	</head>

	<Layout>
	    <h1>Developer Portfolio</h1>
		<h3>Arno De Villiers</h3>
		<br />
		<Image src="/static/images/IMG-20201122-WA0007.jpg/" width="300" height="300" thumbnail />
  </Layout>
  </html>
)