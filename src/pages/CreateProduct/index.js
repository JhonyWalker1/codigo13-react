import { Container, Grid, TextField, Button } from "@mui/material";
import { useState } from "react";
import {storeProductClothe} from "../../service/firestore"
import swal from "sweetalert";

const CreateProduct = () => {
    const [values, setValues] = useState({
        name: "",
        photo:"",
        price: "",
        price_sale: "",
    })

    const handleInputChange = (e) => {
        const { value, name } = e.target;
        setValues({
          ...values,
          [name]: value,
        });
      };


    const handleClickStore = async () => {
        await storeProductClothe(values)
        swal ( "Producto Creado", "Succes", "success" )
    }


    return(
        <Container>
            <Grid container spacing={3} mt={5}>
                <Grid item md={12}> 
                    <h4>Crear Product</h4>
                </Grid>
                <Grid item md={6}>
                    <TextField label= "Nombre del producto" name="name" onChange={handleInputChange} fullWidth />    
                 </Grid>
                 <Grid item md={6}>
                    <TextField label= "Link producto" name="photo" onChange={handleInputChange} fullWidth/>    
                 </Grid>
                 <Grid item md={6}>
                    <TextField label= "Precio del producto" name="price" onChange={handleInputChange} fullWidth/>    
                 </Grid>
                 <Grid item md={6}>
                    <TextField label= "Precio oferta producto" name="price_sale" onChange={handleInputChange} fullWidth/>    
                 </Grid>
                 <Grid item md={12}>
                     <Button onClick={handleClickStore} variant="contained">Enviar</Button>
                 </Grid>
            </Grid>
        </Container>
    )
}
export default CreateProduct;