import Banner from "./components/Banner";
import InfoBanner from "./components/InfoBanner";
import "./home/style.css";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <Banner />
        <InfoBanner />
      </main>
    </div>
  );
}
