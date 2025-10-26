import Image from "next/image";

const InfoBanner = () => {
  return (
    <div className="info-banner">
      <div className="left">
        <Image
          className="image salad-and-coffee"
          src="/salad_and_coffee.png"
          alt="Next.js logo"
          width={500}
          height={400}
          priority
        />
      </div>
      <div className="right">
        <div className="texts">
          <h1>Porqué la gente nos elige?</h1>
          <div>
            <h1>Ingredientes 100% naturales</h1>
            <p>
              Usamos solo ingredientes frescos, orgánicos y de origen local para
              ofrecerte alimentos que nutren tu cuerpo y cuidan el planeta.
            </p>
          </div>
          <div>
            <h1>Compromiso con tu bienestar</h1>
            <p>
              Preparamos cada producto para aportar energía, salud y equilibrio,
              ayudándote a mantener un estilo de vida más consciente y vital.
            </p>
          </div>
          <div>
            <h1>Sabor y nutrición sin compromisos</h1>
            <p>
              Combinamos lo mejor de la naturaleza con recetas deliciosas,
              logrando alimentos saludables que realmente disfrutas cada día.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoBanner;
