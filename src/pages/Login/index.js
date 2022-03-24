import { useContext, useState } from "react";
import { Button, Grid, Card, TextField, CardContent } from "@mui/material";
import bgLogin from "../../assets/bg-login.png";
import { UserContext } from "../../Context/UserContext";
import swal from "sweetalert";
import { Navigate } from "react-router-dom";

const Login = () => {
  const { storeUser } = useContext(UserContext);

  const [userData, setUserData] = useState({
    email: '',
    password: '',
});
  const handleChangeInput = (e) => {
      //Obtener el email y password del form
      const {value, name} = e.target;

      setUserData({
        ...userData,
        [name]: value,
      })
  };

  const handleClickLogin = () => {
    if (userData.email === "pepe@gmail.com" && userData.password === "123456"){
      const user = {
        nombre: "pepe",
        apellido: "zapata",
        correo: userData.email,
        edad: 21,
        trabajo: "software developer",
        dni: "13245687",
        cel: "9999999"
      }
      storeUser(user);
      swal({
        icon:"success",
        title: "Buenarda",
        text: "todo good",
      })

      //return <Navigate to="/youtube/administrador" />

      window.location.href = "/youtube/administrador"

    } else {
      swal({
        icon:"error",
        title: "Error",
        text: "eEmail or password incorrect",
      })
    }
    
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
                <TextField label="Email" fullWidth name="email"  onChange={handleChangeInput}/>
              </Grid>
              <Grid item md={12}>
                <TextField label="Password" fullWidth name="password"  onChange={handleChangeInput}/>
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