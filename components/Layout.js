import Head from 'next/head'
import Navbar from './Navbar'

const Layout = (props) => (
    <>
        <Head>
            <title>Cryptotrees.org</title>
            <link rel="stylesheet" href="https://bootswatch.com/4/superhero/bootstrap.min.css"/>
        </Head>
        <Navbar />
        {props.children}
    </>
)

export default Layout
