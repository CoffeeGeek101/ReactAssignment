import BoolButton from './components/BoolButton'
import ComponentA from './components/ComponentA'
import Counter from './components/Counter'
import './index.css'

function App() {
  return (
      <div className='flex flex-col gap-10 items-center justify-center w-[100vw] h-[100vh]'>
          <Counter/>
          <ComponentA/>
          <BoolButton/>
      </div>
  )
}

export default App
