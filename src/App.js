import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
// import { FaInstagram } from "react-icons/fa";
import InstagramIcon from "@material-ui/icons/Instagram";
// import
// import Avatar from "@material-ui/core/Avatar";
// import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
// import Pagination from "@material-ui/lab/Pagination";
import tiger from "./img/tiger.png";
import one from "./img/1.png";
import two from "./img/2.png";
import three from "./img/3.png";
import four from "./img/4.png";
import five from "./img/5.png";
import six from "./img/6.png";
import seven from "./img/7.png";
import eight from "./img/8.png";
import nine from "./img/9.png";
import ten from "./img/10.png";
import eleven from "./img/11.png";
const useStyles = makeStyles((theme) => ({
  appBar: {
    backgroundColor: "#fff",
  },
  hero: {
    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1598892419006-5ab92c88029f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1225&q=80')`,
    height: "500px",
    margin: "3px",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#fff",
    fontSize: "4rem",
    [theme.breakpoints.down("sm")]: {
      height: 300,
      fontSize: "3em",
    },
  },
  blogsContainer: {
    paddingTop: theme.spacing(1),
  },
  blogTitle: {
    fontWeight: 200,
    paddingBottom: theme.spacing(3),
    fontFamily: "AssistantRegular",
  },
  card: {
    maxWidth: "100%",
    height: "100%",
  },
  media: {
    height: 300,
  },
  cardActions: {
    display: "flex",
    margin: "0 10px",
    justifyContent: "space-between",
  },
  author: {
    display: "flex",
  },
  paginationContainer: {
    display: "flex",
    justifyContent: "center",
  },
  instagram: {
    display: "flex",
    paddingLeft: 10,
    color: "orange",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      {/* <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <Typography variant="h5" color="primary">
            Tiger's Den
          </Typography>
        </Toolbar>
      </AppBar> */}
      <Box className={classes.hero}>
        <Box>Welcome To The Real Himalayan Den</Box>
        <a
          className={classes.instagram}
          href="https://www.instagram.com/real_himalayan_den/"
          target="_blank"
        >
          <InstagramIcon />
        </a>
        {/* <InstagramIcon
          size="lg"
         
        /> */}
      </Box>
      <Container maxWidth="lg" className={classes.blogsContainer}>
        <Typography variant="h4" className={classes.blogTitle}>
          Tiger's Merch
        </Typography>
        <Grid container spacing={5}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={eight}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    To The Moon
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Tiger was the principal of the school Elon Musk studied at
                    so if Musk wants to send Dogecoin to the moon why not tiger
                    kattu
                  </Typography>
                </CardContent>
              </CardActionArea>

              <CardActions className={classes.cardActions}></CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={six}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Cheers
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Life is an amazing gift from our parents so every morning
                    Tiger starts his day with a Bloody Mary and thanks everyone
                    around him. This is why this t shirt is called Cheers.
                  </Typography>
                </CardContent>
              </CardActionArea>

              <CardActions className={classes.cardActions}></CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={one}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Breaking double standard
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Tiger is challenging societal norms and values. They say men
                    can’t multi task but tiger is running on a treadmill with
                    dumbbells on. So this is for all you feminists out there.
                    Tiger is breaking stereotypes against men
                  </Typography>
                </CardContent>
              </CardActionArea>

              <CardActions className={classes.cardActions}></CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={seven}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Chamcha Pilet
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Tiger is a snack so when you want to eat Him, you don’t need
                    to bring a plate or a spooon. He has them on his t shirt.
                    Just dive in 😜
                  </Typography>
                </CardContent>
              </CardActionArea>

              <CardActions className={classes.cardActions}></CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={five}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Cheers
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Life is an amazing gift from our parents so every morning
                    Tiger starts his day with a Bloody Mary and thanks everyone
                    around him. This is why this t shirt is called Cheers.
                  </Typography>
                </CardContent>
              </CardActionArea>

              <CardActions className={classes.cardActions}></CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={nine}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Tiger boka ho
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    You are what you eat. Tiger had the fortune of eating a
                    goats pussy. This is why tiger is a boka With a body count
                    of over 300 including goats and dogs and cats, tiger is the
                    ultimate player boy. This t shirt pays homage to his public
                    property dick and ass and glorifies his previous
                    experiences.
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}></CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={ten}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Be yourslef
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Tigers knows he is ugly but still stands tall and confident
                    and strong. He is an epitome of loving yourself. This is why
                    he lives by the motto whoever you are be yourself To
                    compliment his this t shirt is only available in black and
                    the size large
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}></CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={eleven}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    I suri
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Tiger has a small turi so after he has sex with a girl, he
                    says I Suri and this is why this T shirt is called I Suri.It
                    will get you laid and you won’t have to apologise for the
                    shit sex Just put the t shirt on
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}></CardActions>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardActionArea>
                <CardMedia
                  className={classes.media}
                  image={two}
                  title="Contemplative Reptile"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Tiger Yo
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    Yo it’s dream to grow from Honolulu Hawaii. Bitch I got taan
                    maan dhan. I’ve got a gun, teti le ni pugena bhani, tero
                    tauko ma dui shot Dong Dong
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className={classes.cardActions}></CardActions>
            </Card>
          </Grid>
        </Grid>
        {/* <Box my={4} className={classes.paginationContainer}>
          <Pagination count={10} />
        </Box> */}
      </Container>
    </div>
  );
}

export default App;
