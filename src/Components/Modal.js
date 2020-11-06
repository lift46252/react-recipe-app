import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Modal,Button,Container,Row,Col} from 'react-bootstrap'
function MyVerticallyCenteredModal(props) {
    return (
      <Modal 
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
           {props.recipe.label}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Container>
        <Row>
        <Col md={6}>
            <ul style={{listStyleType:'none', padding:0}}>
                {props.recipe.ingredients.map((ingredients,index) =>(
                    <li key={index}>{ingredients.text}</li>
                ))}
            </ul>
        </Col>
        <Col md={6}>
            <img src={props.recipe.image} alt={props.recipe.label} style={{padding:0 , width:'100%'}}></img>
        </Col>
        </Row>
        </Container>
        </Modal.Body>
        <Modal.Footer>
        <Container>
            <Row>
            <Col md={6}>
                <p className='text-muted' style={{fontSize:12,}}>Calories {props.recipe.calories.toFixed(0)} kcal</p>
            </Col>
            <Col md={6} style={{textAlign:'right'}}>
                <Button onClick={props.onHide}>Close</Button>        
            </Col>
                
            </Row>
        </Container>
        </Modal.Footer>
      </Modal>
    );
  }
  
  function App(props) {
    const [modalShow, setModalShow] = React.useState(false);
  
    return (
      <>
        <Button variant="primary" onClick={() => setModalShow(true)}>
          View More
        </Button>
  
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          recipe={props.recipe}
        />
      </>
    );
  }
  
export default App