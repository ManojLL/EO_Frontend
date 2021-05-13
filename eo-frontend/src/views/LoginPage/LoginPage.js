import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';


import styles from "assets/jss/material-kit-react/views/loginPage.js";

import image from "assets/img/bg7.jpg";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";


const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(15),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function LoginPage() {
  const classes = useStyles();

  return (

      <div>

        <div
            className={classes.pageHeader}
            style={{
              backgroundImage: "url(" + image + ")",
              backgroundSize: "cover",
              backgroundPosition: "top center",
            }}
        >
          <div className={classes.container}>
            <GridContainer justify="center">
              <GridItem xs={12} sm={12} md={5}>
                <Card className={classes[cardAnimaton]}>
                  <form className={classes.form}>
                    <CardHeader color="primary" className={classes.cardHeader}>
                      <h4>Login</h4>
                      <div className={classes.socialLine}>
                        <Button
                            justIcon
                            href="#pablo"
                            target="_blank"
                            color="transparent"
                            onClick={(e) => e.preventDefault()}
                        >
                          <i className={"fab fa-twitter"} />
                        </Button>
                        <Button
                            justIcon
                            href="#pablo"
                            target="_blank"
                            color="transparent"
                            onClick={(e) => e.preventDefault()}
                        >
                          <i className={"fab fa-facebook"} />
                        </Button>
                        <Button
                            justIcon
                            href="#pablo"
                            target="_blank"
                            color="transparent"
                            onClick={(e) => e.preventDefault()}
                        >
                          <i className={"fab fa-google-plus-g"} />
                        </Button>
                      </div>
                    </CardHeader>


                    <CardBody>
                      <CustomInput
                          labelText="User Name..."
                          id="first"
                          formControlProps={{
                            fullWidth: true,
                          }}
                          inputProps={{
                            type: "text",
                            endAdornment: (
                                <InputAdornment position="end">
                                  <People className={classes.inputIconsColor} />
                                </InputAdornment>
                            ),
                          }}
                      />

                      <CustomInput
                          labelText="Password"
                          id="pass"
                          formControlProps={{
                            fullWidth: true,
                          }}
                          inputProps={{
                            type: "password",
                            endAdornment: (
                                <InputAdornment position="end">
                                  <Icon className={classes.inputIconsColor}>
                                    lock_outline
                                  </Icon>
                                </InputAdornment>
                            ),
                            autoComplete: "off",
                          }}
                      />
                      <Grid container justify="flex-end">
                        <Grid item>
                          <Link href="/singUp" variant="body2">
                            Create an account? Sign Up
                          </Link>
                        </Grid>
                      </Grid>
                    </CardBody>
                    <CardFooter className={classes.cardFooter}>
                      <Button  color="primary" size="lg">
                        login
                      </Button>
                    </CardFooter>
                  </form>
                </Card>
              </GridItem>
            </GridContainer>
          </div>
        </div>
      </div>

  );
}
