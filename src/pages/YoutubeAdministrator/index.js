import {
    Container,
    Grid,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    Tab,
    Button
} from "@mui/material"

import ModeEditRoundedIcon from '@mui/icons-material/ModeEditRounded';
import DeleteRoundedIcon from '@mui/icons-material/DeleteRounded';

const YoutubeAdministrator = ()=>{

    const [movies,setMovies] = useState([]);
    // reto deben completar el codifgo para traer
    //la pelicula cuando inciie
    const fetchMovies = async () => {
        const response = await getMovies();
        setMovies(response);
      };
    
      useEffect(() => {
        fetchMovies();
      }, []);


    return(
        <Container>
            <h4>Lista de Peliculas</h4>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Nombre</TableCell>
                            <TableCell>Director</TableCell>
                            <TableCell>Genero</TableCell>
                            <TableCell>Link del Video</TableCell>
                            <TableCell>Botones</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            movies.lenght > 0 && movies.map(movie => (
                                <TableRow>
                                    <TableCell>{movie.name}</TableCell>
                                    <TableCell>{movie.director}</TableCell>
                                    <TableCell>{movie.gender}</TableCell>
                                    <TableCell><a href={movie.video_link}>Ver Video</a></TableCell>
                                    <TableCell>
                                        <Button color="info">
                                            <ModeEditRoundedIcon />
                                        </Button>
                                        <Button color="error">
                                            <DeleteRoundedIcon />
                                        </Button>
                                    </TableCell>
                                  
                                </TableRow>
                            ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Container>
    )
}

export default YoutubeAdministrator