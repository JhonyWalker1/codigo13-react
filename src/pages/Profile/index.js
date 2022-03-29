import { useState, useEffect } from "react";
import { Container, Grid, Button } from "@mui/material";
import { getUserFromFirebase, updateUserProfile } from "../../service/firestore";

const Profile = () => {
    const [user, setUser] = useState(null);

    const update = async () => {
        const profile = {
            displayName: "Jhony",
            photoURL: "https://cenital.com/wp-content/uploads/2021/12/l-intro-1637865760.jpg"
        }
        await updateUserProfile(profile);
        getUser();
    }

    const getUser = () => {
        const userFromFirebase= getUserFromFirebase();
        setUser(userFromFirebase);
    }

    useEffect(() => {
        getUser();
    },[])


  return (
    <Container>
      <Grid container spacing={3}>
        <Grid item md={4}>
            <img width={300} src={user?.photoURL} alt="" />
        </Grid>
        <Grid item md={4}>
            <h4>{user?.displayName}</h4>
            <h4>{user?.email}</h4>
            <Button variant="contained" color="primary" onClick={update}>Actualizar Perfil </Button>
            </Grid>
      </Grid>
    </Container>
  );
};

export default Profile;
