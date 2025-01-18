import { Container, Typography, TextField, Button } from '@mui/material';

const Contacts = () => {
  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Контакты
      </Typography>
      <Typography variant="body1" gutterBottom>
        Если у вас есть вопросы, заполните форму ниже:
      </Typography>
      <form noValidate autoComplete="off" style={{ marginTop: '20px' }}>
        <TextField
          label="Имя"
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Email"
          fullWidth
          margin="normal"
          variant="outlined"
        />
        <TextField
          label="Сообщение"
          fullWidth
          margin="normal"
          variant="outlined"
          multiline
          rows={4}
        />
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: '20px' }}
        >
          Отправить
        </Button>
      </form>
    </Container>
  );
};

export default Contacts;
