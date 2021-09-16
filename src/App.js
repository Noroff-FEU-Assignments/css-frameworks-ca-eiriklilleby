import "./sass/style.scss";
import Navigation from "./components/Navigation";
import CourselSlider from "./components/home/CarouselSlider";
import Intro from "./components/home/Intro";
import Panel from "./components/home/Panel";

function App() {
  return (
    <>
      <Navigation />
      <div className="wrapper">
        <CourselSlider />
        <main>
          <Intro />
          <Panel />
        </main>
      </div>
    </>
  );
}

export default App;
