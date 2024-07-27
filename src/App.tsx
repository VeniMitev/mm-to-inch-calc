import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import InchToMm from './components/InchToMm';
import MmToInch from './components/MmToInch';

function App() {
  return (
    <section className='flex flex-col min-h-screen text-gray-900'>
      <Header />

      <div className='grow flex flex-col md:flex-row gap-4 items-center justify-center bg-gray-100 p-6'>
        <InchToMm />

        <MmToInch />
      </div>

      <Footer />
    </section>
  );
}

export default App;
