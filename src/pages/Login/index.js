import { useContext, useState } from "react";
import { Button, Grid, Card, TextField, CardContent } from "@mui/material";
import bgLogin from "../../assets/bg-login.png";
import { UserContext } from "../../Context/UserContext";
import {
  loginUser,
  storeUser as storeUserFirebase,
} from "../../service/firestore";
import swal from "sweetalert";

const Login = () => {
  const { storeUser } = useContext(UserContext);

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });
  const handleChangeInput = (e) => {
    //Obtener el email y password del form
    const { value, name } = e.target;

    setUserData({
      ...userData,
      [name]: value,
    });
  };

  const handleClickLogin = async () => {
    //vamos hcer una funcion que se encargue de pder hacer login
    //ahora si el usaurio

    /* Primero vamos a intentar hacer el login el usuario
    
    */
    const { email, password } = userData;
    let response = await loginUser(email, password);
    if (!response.ok) {
      //Si esto es falso el usuario no existe por ende lo creamos
      response = await storeUserFirebase(email, password);
      if (!response.ok) {
        swal("Error", storeUserFirebase.data, "error");
        return;
      }
    }

    //Recuerden que despues del login o createuser debemos guardar al usuario en userContext
    storeUser(response.data.user);
    window.location.href = "/ecommerce/create";
  };

  return (
    <Grid
      container
      alignItems="center"
      justifyContent="space-around"
      sx={{ height: "100vh", padding: 20, backgroundColor: "#FFD885" }}
    >
      <Grid item md={6}>
        <img src={bgLogin} width={600} alt="" />
      </Grid>
      <Grid item md={6}>
        <Card sx={{ width: 500 }}>
          <CardContent>
            <h5>Welcome to</h5>
            <h3>Tecsup - Codigo</h3>
            <p>
              Bienvenido a la comunidad de CodiGo, juntos aprenderemos a
              programas paginas web.
            </p>
            <Grid container spacing={3} mt={5}>
              <Grid item md={12}>
                <TextField
                  label="Email"
                  fullWidth
                  name="email"
                  onChange={handleChangeInput}
                />
              </Grid>
              <Grid item md={12}>
                <TextField
                  label="Password"
                  fullWidth
                  name="password"
                  onChange={handleChangeInput}
                />
              </Grid>
              <Grid item md={12}>
                <Button
                  sx={{ backgroundColor: "#000" }}
                  variant="contained"
                  fullWidth
                  size="large"
                  onClick={handleClickLogin}
                >
                  Iniciar Session
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Login;
