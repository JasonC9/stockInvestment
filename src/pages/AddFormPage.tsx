import { Grid } from "@material-ui/core";
import AddForm from "../components/AddForm";

export default function AddFormPage(){

    return (
        <Grid container direction="column" alignItems="center" justify="center">
           <AddForm /> 
        </Grid>
    )
}