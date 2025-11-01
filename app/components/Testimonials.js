import Image from "next/image";
import Card from "./Card";

const Testimonials = () => {
  return (
    <div className="testimonials">
      <h1 className="testimonial-title">Lo que dicen nuestros clientes</h1>

      <div className="image-container">
        <Image
          className="image fish"
          src="/fish.png"
          alt="Fondo de frutas o comida"
          width={1500}
          height={400}
          priority
        />
      </div>

      <div className="testimonial-cards">
        <Card
          title="Laura G."
          text="Me encantan sus productos, se nota la calidad y frescura en cada bocado."
          type="type2"
          icon="/icon4.png"
        />
        <Card
          title="Carlos M."
          text="Desde que probé sus smoothies, me siento con más energía todos los días."
          type="type2"
          icon="/icon5.png"
        />
        <Card
          title="Fernanda T."
          text="Una opción deliciosa y saludable, ¡lo recomiendo a todos mis amigos!"
          type="type2"
          icon="/icon6.png"
        />
      </div>
    </div>
  );
};

export default Testimonials;
