import React, { useState, useEffect } from 'react';
import Footballer from '../Footballer/Footballer';
import PlayerCart from '../PlayerCart/PlayerCart';
import './FootballTeam.css';
const FootballTeam = () => {
    //Displaying all Footballers 
    const [footballers, setFootballers] = useState([]);
    useEffect(() => {
        fetch('./data/playersData.json')
            .then(res => res.json())
            .then(data => setFootballers(data));
    }, []);

    //Adding selected footballers to the Cart
    const [cart, setCart] = useState([]);
    const handleAddPlayer = (footballer) => {
        const newCart = [...cart, footballer];
        setCart(newCart);

    }
    return (
        <div className="team">
            <div className="player-info">
                <div className='heading'>
                    <h2>Fortune Football Team</h2>          
                </div>
                {
                    footballers.map(footballer => <Footballer footballer={footballer} key={footballer.id} handleAddPlayer={handleAddPlayer}></Footballer>)
                }
            </div>
            <div className="player-cart">
                <PlayerCart players={cart} key={cart.id}></PlayerCart>
            </div>
        </div>


    );
};

export default FootballTeam;