import Image from "next/image";
import Card from "./Card";

const InfoBanner = () => {
  return (
    <div className="info-banner">
      <div className="left">
        <Image
          className="image salad-and-coffee"
          src="/salad_and_coffee.png"
          alt="Ensalada y café"
          width={500}
          height={400}
          priority
        />
      </div>

      <div className="right">
        <div className="info-content">
          <h1 className="info-title">¿Por qué la gente nos elige?</h1>

          <div className="cards-container">
            <Card
              title="Ingredientes 100% naturales"
              text="Usamos solo ingredientes frescos, orgánicos y de origen local para ofrecerte alimentos que nutren tu cuerpo y cuidan el planeta."
              type="type1"
              icon="/icon1.png"
            />
            <Card
              title="Compromiso con tu bienestar"
              text="Preparamos cada producto para aportar energía, salud y equilibrio, ayudándote a mantener un estilo de vida más consciente y vital."
              type="type1"
              icon="/icon2.png"
            />
            <Card
              title="Sabor y nutrición sin compromisos"
              text="Combinamos lo mejor de la naturaleza con recetas deliciosas, logrando alimentos saludables que realmente disfrutas cada día."
              type="type1"
              icon="/icon3.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoBanner;
