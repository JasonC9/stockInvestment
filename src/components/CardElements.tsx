import styled from 'styled-components';

export const Cards =styled.nav`
  background-color: #B2DACD;
    display: grid;
    grid-template-rows: max-content 100px 1fr;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 10px;
    width 17rem;
    padding: 20px;
    margin-left: auto;
    margin-right: auto;
  `
  export const Contain =styled.nav`
    text-align: left;
    padding: 2px 20px;
    display: block;
    
  `
  export const Image=styled.img`
    object-fit: cover;
    width 200px;
    border-radius: 5px 5px 0 0;

  `
  export const InfoCard =styled.nav`
    background-color: #B2DACD;
    opacity: 0.5;
    display: grid;
    grid-template-rows: max-content 100px 1fr;
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    transition: 0.3s;
    border-radius: 10px;
    width 80rem;
    height 20rem;
    padding: 20px;
    margin-left: auto;
    margin-right: auto;
  `
  ;
