import { useState } from 'react'
import Card from 'react-bootstrap/Card';
import './App.css'
import {Button} from 'react-bootstrap'
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import joker2 from './assets/img/joker2.jpg';
import brillo1 from './assets/img/brillo1.jpeg'; 

function App() {
  const [arreglo, setarreglo] = useState('')
  const [inputvalue, setinput] = useState('');  
  const createcart=()=>{
    const nuevo = createarrayramdom();
    setarreglo(nuevo)
  }

  const readinput=(event)=>{
    setinput(event.target.value); 
  }
  const createarrayramdom=()=>{
    let array  = [1]
    for (let index = 0; index < 12; index++) {
      array.push (Math.floor(Math.random() * (13 - 1 + 1)) + 1); 
    }
    return array 
  }
  return (
    <>
      <div style={{display: 'flex',margin:'20px', padding:'20px' ,justifyContent: 'center'}}>
      <Button style={{margin:'10px', marginTop:'-30px'}} onClick={createcart} variant="primary">
            Generar cartas aleatorias 
      </Button>
      </div>
      {
        arreglo.length > 0 ? (
          <Container
          >
          <Row className='clastransition' style={{transition: '250ms'}} >
          <Col xs={7}>
          <Row>
            {arreglo.map((item, idx) => (
              <Col xs={3} key={idx}  style={{ 
                marginBottom: '10px'}}>
                <Card className="card-fade"
            style={{
              width: '100%',
              height: '10rem',
              padding:'10px',
              margin:'10px',
              backgroundImage: `url(${brillo1})`,
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              animationDelay: `${idx * 0.4}s` // Retardo progresivo
            }}>
                  <Card.Body>
                    <Card.Title></Card.Title>
                    {Array.from({ length: item }, (_, index) => (
                      <div key={index}>
                        <p className=""></p>
                      </div>
                    ))}
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          </Col>
          <Col xs={5}>
          <Container>
        <Row>
          <Col xs={12} style={{ display:'flex', justifyContent:'center'}}>
              <img className='imgcard' src={joker2} alt="" srcset="" />     
          </Col>
          <Col xs={12} style={{ display:'flex', justifyContent:'center'}}>
          <Button style={{margin:'10px'}} onClick={createcart} variant="danger">
                Ordenar Cartas
            </Button>
          </Col>
        </Row>
        </Container>
          </Col>
          <Row>
      </Row>
          </Row>
          
          </Container>
      
        ):
        (
        <Container>
        <Row>
          <Col style={{ display:'flex', justifyContent:'center'}}>
            
              <img className='imgcard' src={joker2} alt="" srcset="" />     
          </Col>
        </Row>
        </Container>
        )

      }
     
    </>
  )
}

export default App
