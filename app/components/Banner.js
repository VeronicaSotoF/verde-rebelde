import Image from "next/image";

const Banner = () => {
  return (
    <div className="banner">
      <div className="left">
        <div className="texts">
          <h1>
            ENSALADA <br />
            GREEK
            <br /> CHERRY
          </h1>
          <p>
            Mix de lechugas, tomate cherry, queso de cabra, aceitunas y cebolla.
          </p>
        </div>
      </div>
      <div className="right">
        <Image
          className="image salad"
          src="/salad.png"
          alt="Next.js logo"
          width={500}
          height={400}
          priority
        />
      </div>
    </div>
  );
};

export default Banner;
