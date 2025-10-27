import Hero from './components/Hero';
import Services  from './components/Services';
import CTA   from './components/CTA';
import Results from './components/Results';
import CTAFooter  from './components/CTAFooter';

function App() {
  return (
    <div className="font-poppins">
      <Hero />
      <Services  />
      <CTA   />
      <Results />
      <CTAFooter  />
    </div>
  );
}

export default App;