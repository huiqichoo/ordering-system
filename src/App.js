import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "primereact/resources/themes/lara-light-cyan/theme.css";
import 'primeicons/primeicons.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'primeflex/primeflex.css';
import 'primereact/resources/primereact.min.css';
import Products from './components/Products';
import Navbar from './components/Navbar';
import Orders from './components/Order';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <div className="container">
          <Routes>
            <Route path="/*" element={<Orders />} />
            <Route path="/Orders" element={<Orders />} />
            <Route path="/Products" element={<Products />} />
          </Routes>
        </div>
      </Router>

    </>
  );
}

export default App;
