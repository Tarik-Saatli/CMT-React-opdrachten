import './App.css'

function App() {

  return (
    <section className='w-screen min-h-screen flex justify-center bg-zinc-100 '>
      <section className='w-md'>

        <div className='flex items-center'>
          <img className='pt-6' src="./images/logo.png" alt="" />
          <h1 className='text-center text-black-600 font-bold text-4xl '>Work<span className='text-indigo-500'>cation </span></h1>
        </div>

        <img className='rounded-xl' src="./images/vakantiefoto.png" alt="" />
        <h2 className='font-bold text-3xl pt-5 pb-2'>You can work from anywhere. <span className='text-indigo-500'>Take advantage of it. </span></h2>
        <p className='pb-2'>Workcation helps you find work-friendly rentals in beautifuel locations so you can enjoy some nice weather even when you're on vacation.</p>
        <button className='button-center cursor-pointer bg-indigo-500 rounded-md text-white py-2 px-2 font-medium'>BOOK YOUR ESCAPE</button>

      </section>
    </section>
  )
}

export default App
