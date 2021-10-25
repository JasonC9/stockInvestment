import { useParams } from 'react-router';
import RegisterCreditCard from '../components/RegisterCreditCard';
import { Grid } from "@material-ui/core";

export default function CreditcardPage() {

    // const id = useParams();

    return (
        <div>
            <Grid container direction="column" alignItems="center" justify="center">
                <RegisterCreditCard />
            </Grid>
        </div>

    )
}