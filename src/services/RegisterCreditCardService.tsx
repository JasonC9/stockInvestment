import hibernate from "../hibernate-common"
import ICreditCardData from "../types/CreditCard.type";


class RegisterCreditCardService {
    getUsers(){
        return hibernate.get("/creditcard/findAll")
    }

    create(customer: ICreditCardData) {
        return hibernate.post("/creditcard");
    }
}

export default new RegisterCreditCardService();