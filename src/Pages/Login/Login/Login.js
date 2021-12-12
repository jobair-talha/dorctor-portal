import {
  Alert,
  Button,
  CircularProgress,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import { NavLink, useLocation, useHistory } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import loginPhoto from "../../../images/login.png";

const Login = () => {
  const { user, loginUser, isLoading, authError, googleLogin } = useAuth();

  const location = useLocation();
  const history = useHistory();
  const [loginData, setLoginData] = useState({});

  const handleOnBlur = (e) => {
    const field = e.target.name;
    const value = e.target.value;
    const newLoginData = { ...loginData };
    newLoginData[field] = value;
    setLoginData(newLoginData);
  };

  const handleLoginSubmit = (e) => {
    loginUser(loginData.email, loginData.password, location, history);
    e.preventDefault();
  };

  return (
    <Container>
      <Box>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6} lg={6}>
            <Typography
              sx={{ my: 8, textAlign: "center" }}
              variant="h5"
              gutterBottom
              component="div"
            >
              Login
            </Typography>
            {isLoading ? (
              <CircularProgress color="inherit" />
            ) : (
              <form onSubmit={handleLoginSubmit}>
                <TextField
                  sx={{ width: "75%", m: 1, mb: 3 }}
                  id="standard-basic"
                  label="Your Email"
                  name="email"
                  type="email"
                  onBlur={handleOnBlur}
                  variant="standard"
                />
                <TextField
                  sx={{ width: "75%", m: 1, mb: 3 }}
                  id="standard-basic"
                  label="Your Password"
                  type="password"
                  name="password"
                  onBlur={handleOnBlur}
                  variant="standard"
                />
                <Button
                  sx={{
                    width: "75%",
                    background:
                      "linear-gradient(90deg, rgba(25,211,174,1) 0%, rgba(25,211,174,1) 0%, rgba(15,207,236,1) 100%)",
                  }}
                  type="submit"
                  variant="contained"
                >
                  Login
                </Button>
                <Typography sx={{ mt: 3 }} variant="body1" gutterBottom>
                  New User?
                  <NavLink
                    style={{
                      textDecoration: "none",
                      marginLeft: "5px",
                      color: "blue",
                    }}
                    to="/reg"
                  >
                    Register
                  </NavLink>
                </Typography>
              </form>
            )}

            <Button
              sx={{
                width: "75%",
                mb: 3,
                background:
                  "linear-gradient(90deg, rgba(25,211,174,1) 0%, rgba(25,211,174,1) 0%, rgba(15,207,236,1) 100%)",
              }}
              type="submit"
              variant="contained"
              onClick={() => {
                googleLogin(location, history);
              }}
            >
              Google Login
            </Button>
            {authError && (
              <Alert sx={{ width: "75%" }} severity="error">
                {authError}
              </Alert>
            )}
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
            <img
              style={{ width: "100%" }}
              src={loginPhoto}
              alt="Login PhotoPic"
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Login;
