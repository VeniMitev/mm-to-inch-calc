import './App.css';
import InchToMm from './components/InchToMm';
import MmToInch from './components/MmToInch';

function App() {
  return (
    <section className='flex flex-col gap-4 items-center justify-center min-h-screen bg-gray-100 text-gray-900'>
      <MmToInch />

      <InchToMm />
    </section>
  );
}

export default App;
