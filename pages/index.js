import Head from 'next/head'
import Layout from '../components/layout'

export default function Home() {
    return (
        <div data-theme="valentine">
            <Head>
                <title>Compliment Me</title>
                <meta name="description" content="App to receive compliments" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout/>
        </div>
    )
}