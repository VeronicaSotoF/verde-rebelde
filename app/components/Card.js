import Image from "next/image";

const Card = ({ title, text, type, icon }) => {
  return (
    <div className={`card ${type}`}>
      {type === "type1" ? (
        <div className="horizontal">
          <div className="icon-container left">
            <Image
              src={icon || "/icon1.png"}
              alt="Icono"
              width={50}
              height={50}
              className="icon"
            />
          </div>
          <div className="text-content">
            <h2>{title}</h2>
            <p>{text}</p>
          </div>
        </div>
      ) : (
        <>
          <div className="icon-container top">
            <Image
              src={icon || "/icon2.png"}
              alt="Icono"
              width={50}
              height={50}
              className="icon"
            />
          </div>
          <h2>{title}</h2>
          <p>{text}</p>
        </>
      )}
    </div>
  );
};

export default Card;
