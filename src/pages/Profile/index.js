import { useState, useEffect } from "react";
import { Container, Grid, Button } from "@mui/material";
import { auth, updateUserProfile,sendEmail } from "../../service/firestore";
import { onAuthStateChanged } from "firebase/auth";
import "./index.css";

const Profile = () => {
  const [user, setUser] = useState(null);

  const update = async () => {
    const profile = {
      displayName: "Jhony",
      photoURL:
        "https://cenital.com/wp-content/uploads/2021/12/l-intro-1637865760.jpg",
    };
    await updateUserProfile(profile);
    getUser();
  };

  const getUser = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        console.log("No user logged in");
      }
    });
  };

  const fetchSendEmail = async () => {
    const response = await sendEmail();
    console.log(response);
  }

  useEffect(() => {
    getUser();
  }, []);

  return (
    <Container>
      {user && (
        <Grid container spacing={3}>
          <Grid item md={12}>
            <h1>Perfil de Usuario</h1>
          </Grid>
          <Grid item md={4}>
            <img src={user?.photoURL} alt="" className="img-circle" />
          </Grid>
          <Grid item md={4}>
            <h4>{user?.displayName}</h4>
            <p>{user?.email}</p>
            <Button onClick={update} variant="contained">
              Actualizar perfil
            </Button>
            <Button variant="contained" color="secondary" onClick={fetchSendEmail}>Confirmar cuenta</Button>
          </Grid>
        </Grid>
      )}
    </Container>
  );
};

export default Profile;
