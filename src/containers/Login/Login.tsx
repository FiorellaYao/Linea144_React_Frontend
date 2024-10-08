import { useState } from "react";
import { CssBaseline, Grid } from "@mui/material";
import LoginForm from "../../components/Login/Form/LoginForm";
import LoginBackground from "../../components/Login/Background/LoginBackground";
//import LoginLoading from "../../components/Login/Loading/LoginLoading";

const Login = () => {
  const [loading, setLoading] = useState(false);

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />

      <LoginBackground />

      <LoginForm loading={loading} setLoading={setLoading} />

      {/*<LoginLoading loading={loading} />*/}
    </Grid>
  );
};

export default Login;
