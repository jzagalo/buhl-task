import './App.css'
import Menu from './components/Menu';
import StripeRow from './components/StripeRow';
import Jumbotron from './components/Jumbotron';
import CardSection from './components/CardSection';
import ProductSection from './components/ProductSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Menu />    
      <StripeRow />  
      <Jumbotron />
      <CardSection />
      <ProductSection reverse={false}/>
      <ProductSection reverse={true}/>
      <StripeRow />  
      <Footer />
    </div>
  );
}

export default App;
