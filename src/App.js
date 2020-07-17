import React, { useRef, useLayoutEffect, useState, useEffect } from 'react';
import './App.css';
import Lottie from 'react-lottie';
import animationData from './lottie/15108-confetti-banner.json';
import animationData2 from './lottie/11272-party-popper.json';
import { Link } from "react-scroll";
import gui from './lottie/guipgn.png';
import isa from './lottie/isapgn.png';
import coracao from './lottie/coracao.png';
import musica from './lottie/masculino-feminino.mp3';

function App() {
  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };
  const defaultOptions2 = {
    loop: true,
    autoplay: true, 
    animationData: animationData2,
  };
  const targetRef = useRef();
  const divRef = useRef();
  const [dimensions, setDimensions] = useState({ width:0, height: 0 });
  const [info] = useState(['obrigado pelo meio ano juntos', 'obrigado pelos 6 meses juntos','obrigado pelas 26,0714284643 semanas juntos', 'obrigado pelos 182,5 dias juntos', 'obrigado pelas 4379,99998199 horas juntos','obrigado pelos 262799,99891940003727 minutos juntos', 'obrigado pelos 15767999,935164004564 segundos juntos']);
  const [counter, setCounter] = useState(0);
  useLayoutEffect(() => {
    if (targetRef.current) {
      setDimensions({
        width: targetRef.current.offsetWidth,
        height: targetRef.current.offsetHeight
      });
    }
  }, []);

  useEffect(() => {
    document.title = "Carta de 6 meses"
 }, []);

  const changeInfo = () => {
    if(counter === 6){
      setCounter(0);
    } else {
      setCounter(counter+1);
    }
  }

  return (
    <div className="App">
      <div className="App-header" ref={targetRef} style={{
        transform: [{ scaleX: 2 }]
      }}>
        <audio autoplay style={{ position: 'absolute', top: 10, left: 10 }}  controls loop>
          <source src={musica} type="audio/mp3"/>
        </audio>
        <Lottie options={defaultOptions}
              height={430}
              width={dimensions.width}
              style={{
                position: 'absolute',
              }}
        />
        <Lottie options={defaultOptions2}
              height={540}
              width={540}
              style={{
                position: 'absolute',
                right: 0,
              }}
        />
        <div className="Anim" style={{
                  position: 'absolute',
                  left: 0,
                  //transform: [{scaleX: -1}]
              }}>
          <Lottie   
                options={defaultOptions2}
                height={540}
                width={540}
          />
        </div>
        <h1 className="header1">
          Oi Isa,
        </h1>
        <h2 className="header2">
          bem vinda a carta online do aniversário de 6 meses!!!!!!!!!!!!!!
        </h2>
      
        <Link
            activeClass="active"
            to="App-div1"
            spy={true}
            smooth={true}
            duration={500}
            style={{
              position: "absolute",
              bottom: 0,
            }}
        >
          <button className="LetterOpen">
            Abrir a Carta
          </button>
        </Link>
      </div>
      <div className="App-div1" ref={divRef} title="carta2">
        <p className="carta" style={{textAlign: 'left'}}>
            &nbsp;&nbsp;&nbsp;&nbsp;É Isa, 6 meses...<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;Nem parece que foi tudo isso, e por mais que tenhamos passado tanto tempo quarentenados sempre me senti muito junto de você.<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;Fizemos tanta coisa nesse tempo que as vezes sinto que foram bem mais do que 24 semanas.<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;E quem diria que os amigos virariam um casal tão lindo, que se gostariam tanto, que aproveitariam muito, mas que tambem passariam 4 meses de saudades infinitas.<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;Espero de coração que a gente consiga se ver o mais rapido possível porque já não aguento mais ficar longe do seu ladinho (acho que vou ter que colar meu ouvido no radinho... kk).<br/>
            &nbsp;&nbsp;&nbsp;&nbsp;...
        </p>
        <Link
            activeClass="active"
            to="App-div2"
            spy={true}
            smooth={true}
            duration={500}
            style={{
              position: 'absolute',
              bottom: 0
            }}
        >  
          <button className="Letter2">
            ▼
          </button>
        </Link>
      </div>
      <div className="App-div2">
        <h1 className="header1" style={{zIndex: 2}} >
            Te amo muito,
        </h1>
        <h3 className="header2" style={{zIndex: 2}}>
          {info[counter]}!
        </h3>
        <img className="Isa" src={isa} alt="Isa" style={{ position: 'absolute', left: 0}}/>
        <img className="Gui" src={gui} alt="Gui" style={{ position: 'absolute', right: 0}}/>
        <img className="Coracao" src={coracao} alt="coracao" style={{ position: 'absolute', top: 100, left: 200}}/>
        <img className="Coracao" src={coracao} alt="coracao" style={{ position: 'absolute', top: 200, left: 800}}/>
        <img className="Coracao" src={coracao} alt="coracao" style={{ position: 'absolute', bottom: 100, left: 500}}/>
        <img className="Coracao" src={coracao} alt="coracao" style={{ position: 'absolute', right: 500}}/>
        <img className="Coracao" src={coracao} alt="coracao" style={{ position: 'absolute', bottom: 100, right: 200}}/>
        <img className="Coracao" src={coracao} alt="coracao" style={{ position: 'absolute', top: 50, right: 100}}/>
       {/*  <img className="CoracaoM" src={coracao} alt="coracao" style={{ position: 'absolute'}}/> 
        <img className="CoracaoA" src={coracaoazul} alt="coracao" style={{ position: 'absolute'}}/> 
        <img className="CoracaoAM" src={coracaoama} alt="coracao" style={{ position: 'absolute'}}/>  */}
        <button className="Letter3" onClick={changeInfo}>
            MAIS PRECISÃO
        </button>
        <Link
            activeClass="active"
            to="App-header"
            spy={true}
            smooth={true}
            duration={500}
            style={{
              position: 'absolute',
              bottom: 0,
              right: 0
            }}
        >  
          <button className="Letter4" onClick={() => alert("Amore, jantar de 6 meses no club penguin hoje???")}>
            ▲
          </button>
        </Link>
      </div>
    </div>
  );
}

export default App;
