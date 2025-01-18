import { Container, Typography, Grid, Card, CardContent } from '@mui/material';

const Services = () => {
  return (
    <Container>
      <Typography variant="h2" gutterBottom>
        Наши услуги
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Разработка сайтов
              </Typography>
              <Typography variant="body2">
                Мы создаём адаптивные, быстрые и красивые сайты.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Дизайн
              </Typography>
              <Typography variant="body2">
                Уникальный и современный дизайн для вашего бизнеса.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Services;
