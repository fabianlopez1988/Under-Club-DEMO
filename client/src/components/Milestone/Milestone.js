import "./Milestone.css";
import tresornight from "../../assets/tresornight.png";
import Bassiani from "../../assets/Bassiani.png";
import underground from "../../assets/underground-resistance.jpg";
import tierra from "../../assets/tierra.png";

const Milestone = () => {
  return (
    <div className="milestone-container">
      <div className="grid-milestone">
        <div className="img-milestone-container">
          <img className="tresor-img" src={tresornight} />
        </div>
        <div className="parrafo-container">
          <p>
            “Even before we saw the place, there was something special in the
            air. At the front there were some barred windows to the cellar, and
            there was ice-cold air blowing out. So it was obvious to us: we have
            to get down there”. Dimitri Hegeman. "Incluso antes de ver el lugar,
            había algo especial en el aire. En la parte delantera había unas
            ventanas enrejadas que daban al sótano, y salía un aire helado. Así
            que fue obvio para nosotros: tenemos que bajar allí". Dimitri
            Hegeman. Tresor es uno de los clubes más emblemáticos a nivel
            mundial, una institución de la música techno, legitimada por el paso
            del tiempo. En agosto del 2022, Under Club tuvo el privilegio de
            albergar a Handmade, Jonas Kopp y Dinamite, en lo que fueron noches
            históricas para todos. Conectando Sudamérica con Berlín, quedó
            demostrado que nuestro hogar crece, y lo hace fuerte.
          </p>
        </div>
      </div>

      <div className="grid-line">
        <div></div>
        <div className="line"></div>
        <div></div>
      </div>

      <div className="grid-line">
        <div></div>
        <div className="line-one"></div>
        <div></div>
      </div>

      <div className="grid-milestone inversa">
        <div className="parrafo-container">
          <p>
            "In Georgia, raving is a political act, and Bassiani happily
            embodies this credo, fighting the country's drug laws and
            challenging its social prejudices. For many people, it's much more
            than a club: it's a symbol of a new era in Tbilisi”. Paata
            Sabelashvili. "En Georgia, la rave es un acto político, y Bassiani
            encarna felizmente este credo, luchando contra las leyes de drogas
            del país y desafiando sus prejuicios sociales. Para mucha gente, es
            mucho más que un club: es un símbolo de una nueva era en Tbilisi".
            Paata Sabelashvili. Luego del éxito de la llegada de Tresor al
            continente sudaméricano, en septiembre del 2022 hubo un nuevo
            desembarco en la región: Bassiani. Desde Tbilisi, Georgia, Bassiani
            tiene la particularidad de ser un club ubicado en una región que aún
            sufre el paso de la Unión Soviética. Con una atmósfera oscura y
            particular, Bassiani ofrece maratónicas noches de techno, donde los
            artistas se presentan hasta 8 horas cada uno. Under Club sirvió de
            hogar para que dos de sus residentes, Kancheli y NDRX, nos acercaran
            una muestra de lo que allí sucede, fortaleciendo el vínculo entre
            Sudamérica y Europa.
          </p>
        </div>
        <div className="img-milestone-container-bassiani">
          <img className="bassiani-img" src={Bassiani} />
        </div>
      </div>

      <div className="grid-line">
        <div></div>
        <div className="line-center"></div>
        <div></div>
      </div>

      <div className="grid-line">
        <div></div>
        <div className="line-two"></div>
        <div></div>
      </div>

      <div className="grid-milestone">
        <div className="img-milestone-container">
          <img className="underground-img" src={underground} />
        </div>
        <div className="parrafo-container">
          <p>
            "I'm nothing in comparison to the music. How can my face be more
            important than the sound?". UR "No soy nada en comparación a la
            música. ¿Cómo puede ser mi cara más importante que el sonido?". UR
            Underground Resistance es sinónimo de techno. Pioneros indiscutidos
            del género y fundadores autoproclamados del mismo, el colectivo de
            Detroit puso a la música en el centro de atención: el foco es ahora
            sonoro, y no visual. Con sus rostros tapados, en línea con sus
            valores, han sido los generadores e impulsores de una cultura
            underground que se esparció exitosamente a lo largo del mundo. Jeff
            Mills (miembro fundador), y artistas relacionados con el colectivo
            tales como Juan Atkins, Derrick May, Kevin Saunderson, y Carl Craig,
            son algunos de los nombres que han confiado en Under Club y pasado
            por nuestro hogar, dejando un pedazo de historia en la escena local.
          </p>
        </div>
      </div>

      <div className="grid-line">
        <div></div>
        <div className="line"></div>
        <div></div>
      </div>

      <div className="grid-line">
        <div></div>
        <div className="line-three"></div>
        <div></div>
      </div>

      <div className="grid-milestone inversa">
        <div className="parrafo-container">
          <p>
            Under Club logró desarrollar un sonido propio y característico
            gracias a una curaduría formada tanto por su público como por el
            Club. El fruto de este trabajo en conjunto nos dio la posibilidad de
            unir fuerzas con Paraguay, Chile, Colombia, España y Holanda,
            trasladando nuestro sonido a lo largo del continente Sudaméricando y
            Europeo, representando a nuestro país en el exterior.
          </p>
        </div>
        <div className="img-milestone-container tierras">
          <img className="tierra-img" src={tierra} />
        </div>
      </div>

      <div className="banner-milestones">
        <p className="banner-milestones-text">
          Tras casi 10 años de arduo trabajo, nos enorgullece mirar atrás y ver
          todo lo que hemos logrado construir hasta el momento. A todos aquellos
          que nos permiten continuar creciendo y desarrollando nuestro sueño: GRACIAS.
        </p>
      </div>
    </div>
  );
};

export default Milestone;
