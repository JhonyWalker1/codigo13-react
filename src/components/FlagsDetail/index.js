import { useState, useEffect } from "react";
import {
  Button,
  Grid,
  Container,
  Card,
  CardContent,
  CardMedia,
  CircularProgress,
} from "@mui/material";
import KeyboardBackspaceOutlinedIcon from '@mui/icons-material/KeyboardBackspaceOutlined';

import { useParams, useNavigate } from "react-router-dom";
import {getPaisDetail}  from "../../service/movies";
import "./index.css"


const FLagsDetail = () => {

    const history =useNavigate();

    const {names} = useParams();

    const [values, setValues] = useState({
        name:"",
        currencies:"",
        capital:"",
        region:"",
        population: "",
        flags:"",
    })
    
    const FLagsDetailPais = async () => {
      const response = await getPaisDetail(names);
      console.log("response: ", response)
      setValues({
        name:response[0].name.common,
        currencies: response[0].currencies.name,
        capital:response[0].capital,
        region: response[0].region,
        population: response[0].population,
        flags: response[0].flags,
      });
    };

    useEffect(() => {
      FLagsDetailPais(); 
    }, []);



  return (
    <Container>
      <h4>Detalle de país</h4>

      <Button variant="outline" onClick={()=>history(-1)}><KeyboardBackspaceOutlinedIcon/>Atras</Button>
     
      <Grid container md={12} spacing={1} sx={{marginTop:5}}>
       
            <Grid item md={6}>
              <Card className="card">
                <CardMedia
                  component="img"
                  height={300}
                  width={200}
                  image={values.flags.svg}
                  className="card"
                />
                <CardContent>
                  <h4>Nombre de país: {values.name.toUpperCase()}</h4>
                  <p><b>Population</b> {values.population} </p>
                  <p><b>Capital:</b> {values.capital}</p>
                  <p><b>Region:</b> {values.region}</p>
                  <p><b>Moneda:</b> {values.currencies}</p>
                </CardContent>
              </Card>
              </Grid>
               
            </Grid>
          

    </Container>
  );
};

export default FLagsDetail;
