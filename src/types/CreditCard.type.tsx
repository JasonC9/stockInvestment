import React from "react";

export default interface ICreditCardData {
    id?: any | null,
    creditCardNumber: string,
    cvc: string,
    expireMonth: string,
    expireYear: string,
    streetAddress: string,
    city: string,
    state: string,
    zipCode: string

}