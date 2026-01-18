import React from 'react'

const App = () => {
  return (
    <>
    <nav className='h-8 px-2 bg-black'>
      {/* logo */}
      <div className='text-white w-full translate-y-1.5'>
        <img width={"20px"} src="../public/unla.png" alt="" />
        <div className="text-white text-[8px] left-6 font-semibold top-0 absolute">
          <p>PASCASARJANA</p>
          <p>UNIVERSITAS LANGLANGBUANA</p>
        </div>
      </div>
      <ul className='relative text-right right-2 tracking-widest bottom-5 font-semibold text-white z-20 text-[12px] space-y-3'>
  <li>Home</li>
  <li>About us</li>
  <li>Academic</li>
  <li>Registration</li>
  <li>News</li>
</ul>
{/* pita */}
      <div className="bg-blue-400 h-44 w-[93px] absolute right-2 z-10 top-0">
        <div className="absolute bottom-0 left-0
    w-0 h-0
    border-l-[45px] border-l-transparent
    border-r-[45px] border-r-transparent
    border-b-[30px] border-b-white "></div>
      </div>
    </nav>
    <main className='w-full h-48 '>
  <img src="../public/background.jpg" alt="" />
   <div className='text-center w-full font-bold text-white absolute top-20 translate-1/2 right-1/2'>
    <h1 >Universitas Langlangbuana</h1>
    <h1 >Karawang</h1>
   </div>
    </main>
    </>
  )
}

export default App
