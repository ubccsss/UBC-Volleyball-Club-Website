import Head from 'next/head'

export default function Home() {
  return (
    <div className="bg-white">
      <Head>
        <title>UBC Volleyball Site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex justify-between items-center p-4">
        <img src='/clubLogo.png' alt="Club logo" className="h-10 w-auto"/>
        <a href="https://example.com" className="bg-custom-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          LOG IN
        </a>
      </header>



      <div style={{ marginTop: '5%', marginRight: '10%', marginBottom: '5%', marginLeft: '10%'}}>
        <img src="/R.jpg" alt="Volleyball image"/>
      </div>

      <div>
        <p className="text-center">
          Tryouts information?
        </p>
      </div>
    </div>
  )
}