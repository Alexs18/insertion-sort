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
  const [movexcart, setmovecard] = useState(null);
  const [movexcartpositive, setmovecardpositivo] = useState(null);
  const [testpoint,settest]= useState(false)

  const testfunction=()=>{
    settest(true)
  }
  const createcart=()=>{
    const nuevo = createarrayramdom();
    setarreglo(nuevo)
  }
  

  const order2=async()=>{
    
    //for (let index = 0; index < arreglo.length; index++) {
    //  // obtenemos el elemento por el cual comenzamos
    //  const current = arreglo[0+1];
    //  if (current > arreglo[index]) {
    //    const elemento = document.getElementById(`idcard-${index+1}`); 
    //    const top_node = elemento.childNodes
    //    top_node[0].classList.add('move-card')
    //    elemento.classList.add('pespective-card')
    //  } 
    //}
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
    console.log('i inicio');
    console.log(i);
    
    let j = i;
    setHighlightIndex(j);
    //setmovecardpositivo(j-1)
    await delayfunction(2)
    // Recorre hacia atrás y hace swaps paso a paso
    while (j > 0 && nuevoarreglo[j].position < nuevoarreglo[j - 1].position) {

      // Intercambia
      
      
      //// Actualiza visual
      
      //setHighlightIndex(null);
      //setmovecard(j); // opcional: marcar la carta que se mueve
      nuevoarreglo[j-1].state = 1 // movimiento positivo
      nuevoarreglo[j].state = 2   // movimiento negativo
 
      await delayfunction(5);
      const temp = nuevoarreglo[j];
      nuevoarreglo[j] = nuevoarreglo[j - 1];
      nuevoarreglo[j - 1] = temp;
      setarreglo([...nuevoarreglo]);
      //setmovecardpositivo(j)
      j--;
      i--
    }

    console.log('i final');
    console.log(i);
  }

  setHighlightIndex(null); // Limpia animación al final
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
      <Button onClick={testfunction}>prueba </Button>
      <div style={{width:'100px', height:'100px', backgroundColor:'red'}}
      className={`${testpoint=== true?'move-card-xpositive':''}`}>
        <p>textio</p>
      </div>
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
          <Row >
            {arreglo.map((item, idx) => (
              <Col xs={3} key={idx}  style={{ 
                marginBottom: '10px'}}>
                <Card id={'idcard-' + idx} className={`card ${highlightIndex === idx ? 'move-card' : ''}
                ${movexcart ===idx? 'move-card-x':''}
                ${movexcartpositive === idx? 'move-card-xpositive':''}
                ${item.state === 2 ? 'move-card-x':''}
                ${item.state === 1 && (idx == 4 || idx == 8 || idx==12) == false? 'move-card-xpositive':''}
                ${(idx == 4 || idx == 8 || idx==12) && arreglo[idx].state ==1? 'move-card-xpositivefinish':''}`}
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
                     //backgroundImage: item.position && array_card[item.position - 1]
                    //</Card>? `url(${array_card[item.position - 1]})`
                    //: 'none',
                     backgroundRepeat: 'no-repeat',
                     backgroundSize: 'cover',
                     animationDelay: `${idx * 0.4}s` // Retardo progresivo
                  }}>
                    <Card.Title>{idx}</Card.Title>
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
