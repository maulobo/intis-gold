import Footer from "./components/footer";
import Hero from "./components/hero";
import Mockup from "./components/mockup";
import Profits from "./components/profits";
import Rewards from "./components/rewards";

export default function Home() {
  return (
    <main>
      <Hero />
      <div style={{ backgroundColor: "black" }}>
        {/* <Mockup /> */}
        <Profits />
      </div>
      <Rewards />
      <Footer />
    </main>
  );
}
