import './App.css';
import Header from './components/Header';
import ProfileCard from './components/ProfileCard';
import HobbiesList from './components/HobbiesList';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <ProfileCard />
      <HobbiesList />
      <ContactSection />
      <Footer />
    </div>
  );
}

export default App;
