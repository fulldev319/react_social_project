import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Divider,
  Link
} from '@material-ui/core';
import LockIcon from '@material-ui/icons/Lock';
import Page from 'src/components/Page';
import gradients from 'src/utils/gradients';
import LoginForm from './LoginForm';
import Constants from 'src/utils/constants';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'end',
    padding: theme.spacing(6, 2),
    backgroundSize: 'cover',
    backgroundPositionX: 'center',
    backgroundRepeat: 'no-repeat',
    flexDirection: 'column'
  },
  card: {
    width: theme.breakpoints.values.md,
    maxWidth: '100%',
    overflow: 'visible',
    display: 'flex',
    position: 'relative',
    '& > *': {
      flexGrow: 1,
      flexBasis: '50%',
      width: '50%'
    }
  },
  content: {
    padding: theme.spacing(8, 4, 3, 4)
  },
  media: {
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    padding: theme.spacing(3),
    color: theme.palette.common.white,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-end',
    [theme.breakpoints.down('md')]: {
      display: 'none'
    }
  },
  icon: {
    backgroundImage: gradients.green,
    color: theme.palette.common.white,
    borderRadius: theme.shape.borderRadius,
    padding: theme.spacing(1),
    position: 'absolute',
    top: -32,
    right: theme.spacing(3),
    height: 64,
    width: 64,
    fontSize: 32
  },
  loginForm: {
    marginTop: theme.spacing(3)
  },
  divider: {
    margin: theme.spacing(2, 0)
  },
  img: {
    marginBottom: '140px'
  }
}));

function Login() {
  const classes = useStyles();

  const bgImage = Constants.BACKGROUND_IMG;
  const logo = Constants.LOGO_IMG;

  return (
    <Page
      className={classes.root}
      title="Login"
      style={{
        backgroundImage: `url(${bgImage})`
      }}
    >
      <img src={logo} alt="logo" className={classes.img} />
      <Card className={classes.card}>
        <CardMedia
          className={classes.media}
          image="/images/auth.png"
          title="Cover"
        ></CardMedia>
        <CardContent className={classes.content}>
          <LockIcon className={classes.icon} />
          <Typography gutterBottom variant="h3">
            Sign in
          </Typography>
          <LoginForm className={classes.loginForm} />
          <Divider className={classes.divider} />
          <Link
            align="center"
            color="secondary"
            component={RouterLink}
            to="/auth/login"
            underline="always"
            variant="subtitle2"
          >
            {/* Don&apos;t have an account? */}
            Create New Account
          </Link>
        </CardContent>
      </Card>
    </Page>
  );
}

export default Login;
