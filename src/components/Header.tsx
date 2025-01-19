import { AppBar, Toolbar, Typography, Button, IconButton } from '@mui/material';
import LanguageIcon from '@mui/icons-material/Language';

const Header = () => {
  const handleScrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AppBar position="fixed" color="primary">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Логотип
        </Typography>
        <Button color="inherit" onClick={() => handleScrollTo('services')}>
          Услуги
        </Button>
        <Button color="inherit" onClick={() => handleScrollTo('contacts')}>
          Контакты
        </Button>
        <IconButton color="inherit" onClick={() => alert('Смена языка')}>
          <LanguageIcon />
        </IconButton>
        <Button color="inherit" onClick={() => alert('Вход')}>
          Вход
        </Button>
        <Button color="inherit" onClick={() => alert('Выход')}>
          Выход
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
