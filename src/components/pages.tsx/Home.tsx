import { Button, Container, Typography, Grid, Card, CardContent } from '@mui/material';

const Home = () => {
  return (
    <Container>
      <Typography variant="h2" align="center" gutterBottom>
        Добро пожаловать на сайт с использованием MUI
      </Typography>
      
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Услуга 1
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Описание услуги 1
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Услуга 2
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Описание услуги 2
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" gutterBottom>
                Услуга 3
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Описание услуги 3
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      <div style={{ textAlign: 'center', marginTop: '20px' }}>
        <Button variant="contained" color="primary" size="large">
          Узнать больше
        </Button>
      </div>
    </Container>
  );
};

export default Home;
