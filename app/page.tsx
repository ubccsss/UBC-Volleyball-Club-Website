import Head from 'next/head'

export default function Home() {
  return (
    <div className="bg-white">
      <Head>
        <title>UBC Volleyball Site</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex justify-between items-center p-4">
        <img src='/clubLogo.png' alt="Club logo" className="h-12 w-auto" />

        <div className="flex-grow flex justify-end items-center pr-4">
          <div className="text-center mr-4">
            <p>CONTACT</p>
          </div>

          <a href="https://example.com" className="bg-custom-blue hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            LOG IN
          </a>
        </div>
      </header>

      <div className="relative" style={{ marginTop: '5%', marginRight: '10%', marginBottom: '5%', marginLeft: '10%' }}>
        <img src="/R.jpg" alt="Volleyball image" className="w-full h-auto" />
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="absolute inset-0 flex justify-center items-center flex-col text-white">
          <p className="text-5xl font-bold">
            UBC Volleyball Club
          </p>
          <p className="text-sm mt-2">
            Playing competitive club volleyball est. 2022
          </p>
        </div>
      </div>
    </div>
  )
}