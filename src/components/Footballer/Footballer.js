import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck,faSterlingSign} from '@fortawesome/free-solid-svg-icons'
import './Footballer.css';


const Footballer = (props) => {
    const { name, picture, salary } = props.footballer;
    const handleAddPlayer= props.handleAddPlayer;
    return (
        <div className="container">
            <div className="footballer-info">
                <div className='player-img'>
                    <img src={picture}></img>
                </div>
                <h5>Name: <small>{name}</small></h5>
                <h5>Yearly Salary: <small><FontAwesomeIcon icon={faSterlingSign}/> {salary}</small></h5>                                         
                <Button className='select-btn' variant="outline-primary" onClick={()=>handleAddPlayer(props.footballer)}> <FontAwesomeIcon icon={faCircleCheck} /> Select Player</Button>
            </div>
        </div>
    );
};

export default Footballer;