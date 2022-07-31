import './App.css';
import Footer from './component/footer/Footer';
import Hero from './component/hero/Hero';
import Join from './component/Join/Join';
import Plans from './component/Plans/Plans';
import Programs from './component/Programs/Programs';
import Reasons from './component/Reason/Reasons';
import Testimonials from './component/Testimonials/Testimonials';
function App() {
  return (
    <div className="App">
        <Hero/>
        <Programs/>
        <Reasons/>
        <Plans/>
        <Testimonials/>
        <Join/>
        <Footer/>
    </div>
  );
}

export default App;
