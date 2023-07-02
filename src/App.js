import './App.css';
import Header from './components/Header';
import Form from './components/Form';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className='App'>
      <Header title='QR Code Generator'/>
      <Form />
      <Footer copy='Dev Kawin &copy; 2023 All rights reserved.'/>
    </div>
  );
}