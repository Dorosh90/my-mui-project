import { Container, Typography, Box } from "@mui/material";

const Home = () => {
  return (
    <Container sx={{ marginTop: "80px" }} className="container">
      <Box id="services" sx={{ padding: "50px 0" }}>
        <Typography variant="h4" gutterBottom></Typography>
        <Typography variant="body1">
          Тут будут услуги
        </Typography>
      </Box>

      <Box id="contacts" sx={{ padding: "50px 0" }}>
        <Typography variant="h4" gutterBottom>
          Контакты
        </Typography>
        <Typography variant="body1">
          Здесь будут размещены контактные данные.
        </Typography>
      </Box>
    </Container>
  );
};

export default Home;
