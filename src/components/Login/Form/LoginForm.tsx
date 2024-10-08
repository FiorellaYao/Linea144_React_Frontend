import React, { useState } from "react";
import {
  AccountCircle,
  Visibility,
  VisibilityOff,
} from "@mui/icons-material";
import LockIcon from '@mui/icons-material/Lock';
import {
  Alert,
  Box,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
//import { loginService } from "../../../services/Auth/authService";
import style from "./styles.module.css";

interface FormProps {
  loading: boolean;
  setLoading: (Loading: boolean) => void;
}

export const LoginForm: React.FC<FormProps> = ({ loading, setLoading }) => {
  const navigate = useNavigate();

  const [credentials, setCredentials] = useState({
    userEmail: "",
    password: "",
  });
  const [error, setError] = useState<string | null>(null);
  const [showInput, setShowInput] = useState(false);
  const [focusUser, setFocusUser] = useState(false);
  const [focusPassword, setFocusPassword] = useState(false);

  const handleToggleVisibility = () => {
    setShowInput(!showInput);
  };

  const encodeBase64 = (str: string): string => {
    const result = window.btoa(str);
    return result;
  };

  /*const handleLogin = async () => {
    setLoading(true);
    try {
      const encodedCredentials = {
        ...credentials,
        password: encodeBase64(credentials.password),
      };
      const response = await loginService(encodedCredentials);

      sessionStorage.setItem("authToken", response.data.token);
      sessionStorage.setItem("userEmail", response.data.userEmail);
      sessionStorage.setItem("userName", response.data.userName)

      navigate("/home");
    } catch (err) {
      setError("Error al iniciar sesión");
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      event.preventDefault(); 
      handleLogin();
    }
  };*/

  return (
    <Grid
      item
      xs={12}
      sm={8}
      md={5}
      component={Paper}
      elevation={6}
      square
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "85px",
      }}
    >
      <Typography variant="h6" className={style.titleLogin} gutterBottom>
        ¡Buenas tardes!
      </Typography>
      <Typography variant="body2" gutterBottom className={style.subtitleLogin}>
        Ingresá con tu usuario y contraseña
      </Typography>

      <Stack spacing={3} sx={{ width: "100%", marginTop: "1rem" }}>
        <TextField
          className={style.inputUserLogin}
          id="user"
          variant="standard"
          type="text"
          label="Usuario"
          value={credentials.userEmail}
          onChange={(e) =>
            setCredentials({ ...credentials, userEmail: e.target.value })
          }
          onFocus={() => setFocusUser(true)}
          onBlur={() => setFocusUser(false)}
          //onKeyDown={handleKeyDown}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle
                  sx={{
                    color: focusUser ? "#169ace" : "inherit",
                  }}
                />
              </InputAdornment>
            ),
          }}
          sx={{
            "& label.Mui-focused": {
              color: "#169ace",
            },
            "& .MuiInput-underline:after": {
              borderBottomColor: "#169ace",
            },
            "& .MuiInputLabel-root": {
              color: focusUser ? "#169ace" : "inherit",
            },
          }}
        />
        <TextField
          className={style.inputUserLogin}
          id="pass"
          variant="standard"
          type={showInput ? "text" : "password"}
          label="Contraseña"
          value={credentials.password}
          onChange={(e) =>
            setCredentials({ ...credentials, password: e.target.value })
          }
          onFocus={() => setFocusPassword(true)}
          onBlur={() => setFocusPassword(false)}
          //onKeyDown={handleKeyDown}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon
                  sx={{
                    color: focusPassword ? "#169ace" : "inherit",
                  }}
                />
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={handleToggleVisibility}>
                  {showInput ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
          sx={{
            "& label.Mui-focused": {
              color: "#169ace",
            },
            "& .MuiInput-underline:after": {
              borderBottomColor: "#169ace",
            },
            "& .MuiInputLabel-root": {
              color: focusPassword ? "#169ace" : "inherit",
            },
          }}
        />
      </Stack>
      <Stack
        spacing={1}
        sx={{ width: "100%", marginBottom: "1rem", marginTop: "1rem" }}
      >
        <Button
          variant="contained"
          color="primary"
          className={style.buttonLogin}
          //onClick={handleLogin}
          sx={{
            backgroundColor: "#169ace",
            "&:hover": {
              backgroundColor: "rgba(22, 90, 250, 0.825)",
            },
          }}
        >
          Continuar
        </Button>
        {!loading
          ? error && (
              <Alert severity="error" sx={{ marginTop: "1rem !important" }}>
                {error}
              </Alert>
            )
          : null}
      </Stack>

      <Stack spacing={8} sx={{ width: "100%" }}>
        <Box component="section" className={style.boxText}>
          <Typography variant="body2" gutterBottom>
            NUNCA compartas tu usuario ni tus claves con nadie: El Banco JAMÁS
            te pedirá esa información.
          </Typography>
          <Typography variant="body2" gutterBottom>
            Tené en cuenta que SIEMPRE serás responsable de las operaciones que
            se puedan realizar en tu nombre al compartirlas.
          </Typography>
        </Box>
      </Stack>
    </Grid>
  );
};

export default LoginForm;
