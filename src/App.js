import { Bucket, Order, Payment, Product, Dashboard } from './Components';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <>
      <Router>
        <div>
          <Routes>
            <Route path='/' exact element={<Dashboard />} />
            <Route path='/home' exact element={<Dashboard />} />
            <Route path='/order' exact element={<Order />} />
            <Route path='/payment' element={<Payment />} />
            <Route path='/bucket' element={<Bucket />} />
            <Route path='/product' element={<Product />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
