import Hello from './hello';
function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center  bg-gray-100 border-2 border-gray-300 hover:bg-gray-400 transition duration-300 ease-in-out">
        <h1 className="sm:text-lg md:text-xl lg:text-2xl font-bold text-blue-600 hover:text-blue-800 transition duration-300 ease-in-out">
          Hello Tailwind CSS!
        </h1>
      </div>
        <Hello />
    </>
  )
}

export default App
