import './App.css';
import Generator from './components/Generator';

function App() {
  return (
    <div className='h-screen'>
      <h1 className="text-center text-4xl font-bold pt-10">Instantly generate a random secure password</h1>
       <div className='flex items-center flex-col justify-center h-3/4'>
      <Generator/>
    </div>
    </div>
   
  );
}

export default App;
