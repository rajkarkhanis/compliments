import Head from 'next/head'

export default function Home() {
    return (
        <div className="flex items-center justify-center w-full h-screen">
            <Head>
                <title>Compliment Me</title>
                <meta name="description" content="App to receive compliments" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div>
                <section className="mx-auto container w-full py-36">
                    <div className="flex flex-col justify-center items-center">
                        <div className="md:text-5xl text-4xl font-black text-center text-gray-800 leading-snug lg:w-3/4">
                            <h2>Build the next big thing and ship to market faster</h2>
                        </div>
                        <div className="flex justify-center items-center mt-16">
                            <button className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-800 hover:opacity-90 w-48 h-12 text-lg text-white bg-gradient-to-l from-indigo-600 to-indigo-700 rounded font-medium">More compliments!</button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
