import { Box, Grid } from "@mui/material";
import loginImage from "../../../assets/react.svg"

export const LoginBackground = () => {
  return (
    <Grid
    item
    xs={12}
    sm={4}
    md={7}
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Box
      component="img"
      src={loginImage}
      alt="Login"
      sx={{ width: "50%", height: "auto" }}
    />
  </Grid>
  )
}

export default LoginBackground;
