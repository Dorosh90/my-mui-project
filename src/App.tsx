import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { AppBar, Toolbar, Button, Container } from '@mui/material';
import Home from './components/pages.tsx/Home';
import About from './components/pages.tsx/About';
import Services from './components/pages.tsx/Services';
import Contacts from './components/pages.tsx/Contacts';

const App = () => {
  return (
    <Router>
      <AppBar position="static">
        <Toolbar>
          <Button color="inherit" component={Link} to="/">
            Главная
          </Button>
          <Button color="inherit" component={Link} to="/services">
            Услуги
          </Button>
          <Button color="inherit" component={Link} to="/about">
            О нас
          </Button>
          <Button color="inherit" component={Link} to="/contact">
            Контакты
          </Button>
        </Toolbar>
      </AppBar>

      <Container style={{ marginTop: '20px' }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contacts />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
