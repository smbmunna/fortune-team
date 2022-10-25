import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSterlingSign} from '@fortawesome/free-solid-svg-icons'
import './PlayerCart.css';


const PlayerCart = (props) => {
    const players = props.players;
    let totalExpense = 0;
    totalExpense = players.reduce((totalExpense, player) => totalExpense + player.salary, 0);

    return (
        <div >
            <div className='player-cart'>
                <h4>Selected Players: <small>{players.length}</small></h4>
                <hr></hr>
                <h4>Total Salary: <FontAwesomeIcon icon={faSterlingSign}/> {totalExpense}</h4>
                <hr></hr>
                {

                    players.map((player, index) => {
                        return <p><small>{index + 1 + '. ' + player.name +': '} <FontAwesomeIcon icon={faSterlingSign}/> { player.salary}</small></p>
                    })
                }
            </div>

        </div>
    );
};

export default PlayerCart;