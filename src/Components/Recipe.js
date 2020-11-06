import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Card,Col} from 'react-bootstrap'
import App from './Modal'
const Recipe = (props) =>{
        return(
                    <Col md={6} lg={4}>
                        <Card style={{ width: '18rem' ,height: '35rem', overflow: 'hidden', borderRadius:15,display:"inline-block"}}>
                        <Card.Img variant="top" src={props.recipe.image} alt={props.recipe.label}/>
                        <Card.Body style={{padding:10}}>
                            <Card.Title>{props.recipe.label}</Card.Title>
                            <p>Calories {props.recipe.calories.toFixed(0)} kcal</p>
                            <App recipe={props.recipe}>view More</App>
                                <ul style={{listStyleType:'none', padding:0}}>
                                    {props.recipe.ingredients.map((ingredients,index) =>(
                                        <li key={index}>{ingredients.text}</li>
                                    ))}
                                </ul>
                        </Card.Body>
                        </Card>                
                    </Col>
        )
}
export default Recipe