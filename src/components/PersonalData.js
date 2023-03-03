import React from "react";
import Header from './Header';
import Body from "./Body";


function PersonalData(){
    
const favoriteFood = [
    {
        name: 'Zuppa',
        image: '/images/zuppa.jpg'
    },
    {
        name: 'Ayam',
        image: '/images/ayam.jpg'
    },
    {
        name: 'Ayam Gaprek',
        image: '/images/ayamgeprek.jpg'
    },
    {
        name: 'Mi Ayam',
        image: '/images/miayam.jpg'
    },
    {
        name: 'Bakso',
        image: '/images/bakso.jpg'
    }
]
    return (
        <div>
            <Header name="Salsa" kelas="10 PPLG 1"/>
            <p> My Favorite food is : </p>
            {
                favoriteFood.map((foods) => (
                    <Body {...foods} key={foods.name}/>
                ))
            }
        </div>
    );
}

export default PersonalData;