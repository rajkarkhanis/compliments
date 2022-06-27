import Head from 'next/head'
import Layout from '../components/layout'

export default function Home() {
    return (
        <div className="flex items-center justify-center w-full h-screen">
            <Head>
                <title>Compliment Me</title>
                <meta name="description" content="App to receive compliments" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout/>
        </div>
    )
}
