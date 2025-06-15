import { useState } from 'react'
import Card from 'react-bootstrap/Card';
import './App.css'
import {Button} from 'react-bootstrap'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import joker2 from './assets/img/joker2.jpg';
import brillo1 from './assets/img/brillo1.jpeg';
import brillo2 from './assets/img/brillo2.jpeg';
import brillo3 from './assets/img/brillo3.jpeg';
import brillo4 from './assets/img/brillo4.jpeg';
import brillo5 from './assets/img/brillo5.jpeg';
import brillo6 from './assets/img/brillo6.jpeg';
import brillo7 from './assets/img/brillo7.jpeg';
import brillo8 from './assets/img/brillo8.jpeg';
import brillo9 from './assets/img/brillo9.jpeg';
import brillo10 from './assets/img/brillo10.jpeg';
import brillo11 from './assets/img/brillo11.jpeg';
import brillo12 from './assets/img/brillo12.jpeg';
import brillo13 from './assets/img/brillo13.jpeg';

function App() {
  const array_card = [brillo1, brillo2, brillo3, brillo4, brillo5,
    brillo6, brillo7, brillo8, brillo9, brillo10, brillo11, brillo12, 
    brillo13
  ]
  const [arreglo, setarreglo] = useState([])
  const [highlightIndex, setHighlightIndex] = useState(null);

  const createcart=()=>{
    const nuevo = createarrayramdom();
    setarreglo(nuevo)
  }
  

const order2=async()=>{
    
    let nuevoarreglo = [...arreglo]
    for (let i = 1; i < nuevoarreglo.length; i++) {
      const current = nuevoarreglo[i];
      let j;
      await delayfunction(2)
      for (j = i - 1; j >= 0 && nuevoarreglo[j] > current; j--) {
        nuevoarreglo[j + 1] = nuevoarreglo[j];
          const elemento = document.getElementById(`idcard-${i+1}`); 
          if (elemento) {
            const top_node = elemento.childNodes
            top_node[0].classList.add('move-card')
            elemento.classList.add('pespective-card')   
          }
         
      }
      
      nuevoarreglo[j + 1] = current;
      console.log('sale el nuevo')
      console.log(nuevoarreglo);
      
      setarreglo(nuevoarreglo)
    }
    //return setarreglo(nuevoarreglo)
}
  
const order = async () => {
  let nuevoarreglo = [...arreglo];

  for (let i = 1; i < nuevoarreglo.length; i++) {

    let j = i;
    setHighlightIndex(j);
    await delayfunction(1);


    while (j > 0 && nuevoarreglo[j].position < nuevoarreglo[j-1].position) {

      
      await delayfunction(1);
      console.log(arreglo[i]);
      arreglo[i].state = 2
      const temp = nuevoarreglo[j];
      nuevoarreglo[j] = nuevoarreglo[j - 1];
      nuevoarreglo[j - 1] = temp;
      arreglo[i].state = 0
      setarreglo([...nuevoarreglo])
      j--;
      i--;
    }
  }

  setHighlightIndex(null); 
};

async function delayfunction(seconds){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve(true)
    },seconds*1000)
  })
}
const createarrayramdom=()=>{
  let array  = [{position:1, state:0}]  
  for (let index = 0; index < 12; index++) {
    array.push ({position:(Math.floor(Math.random() * (13 - 1 + 1)) + 1), state:0}); 
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
          <Row className='clastransition'
          style={{
            marginTop:'-32px'
          }} >
          <Col  xs={7}>
          <Row className='main-style'>
            {arreglo.map((item, idx) => (
              <Col xs={3} key={idx}  style={{ 
                marginBottom: '10px'}}>
                <Card id={'idcard-' + idx} className={`card ${highlightIndex === idx ? 'move-card' : ''}
                ${item.state === 2 ? 'move-card-x':''}
                ${item.state === 1 ? 'move-card-xpositive':''}
               `}
            style={{
              width: '100%',
              height: '13rem',
              margin:'10px',
             
            }}>
                  <Card.Body style={{
                     width:'100%',
                     height:'auto',
                     backgroundColor:'red',
                     backgroundImage: `url(${array_card[item.position-1]})`,
                     backgroundRepeat: 'no-repeat',
                     backgroundSize: 'cover',
                     animationDelay: `${idx * 0.4}s` // Retardo progresivo
                  }}>
                    <Card.Title></Card.Title>
                    {Array.from({ length: item.position }, (_, index) => (
                      <div key={index}>
                      </div>
                    ))}
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          
          </Col>
          <Col xs={5}
          style={{marginTop:'50px'}}>
          <Container>
        <Row>
          <Col xs={12} style={{ display:'flex', justifyContent:'center'}}>
              <img className='imgcard' src={joker2} alt="" srcset="" />     
          </Col>
          <Col xs={12} style={{ display:'flex', justifyContent:'center'}}>
          <Button style={{margin:'10px'}} onClick={order} variant="danger">
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
