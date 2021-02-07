import Slider from "./../../components/Slider/Slider";
import classes from "./SliderPage.module.css";

const images = [
  "https://picsum.photos/id/1/1200/500",
  "https://picsum.photos/id/200/1200/500",
  "https://picsum.photos/id/700/1200/500",
  "https://picsum.photos/id/400/1200/500",
];

function App() {
  return (
    <div className={classes.App}>
      <Slider imagesArr={images} autoplay />
    </div>
  );
}

export default App;
