import { Grid } from "@material-ui/core";
import AddForm from "../components/AddForm";

export default function AddFormPage() {

    return (
        <div style={{ backgroundColor: "#ADD8E6" }}>
            <Grid container direction="column" alignItems="center" justify="center">
                <AddForm />
            </Grid>
        </div>

    )
}