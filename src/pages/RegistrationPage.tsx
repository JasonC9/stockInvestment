import RegisterUser from '../components/RegisterUser';
import { Grid } from "@material-ui/core";



export default function RegistrationPage(){

    return (
        <Grid container direction="column" alignItems="center" justify="center">
            <RegisterUser />       
        </Grid>
    )
}