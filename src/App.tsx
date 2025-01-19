import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/pages.tsx/Home';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;
