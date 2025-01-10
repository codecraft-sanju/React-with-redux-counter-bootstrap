import Header from "./components/Header.jsx"
import DisplayCounter from "./components/DisplayCounter.jsx";
import Container from "./components/Container.jsx";
import Controls from "./components/Controls.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  return (
    
      <center className="px-4 py-5 my-5 text-center">
        <Container>
          <Header></Header>
          <div className="mx-auto col-lg-6">
            <DisplayCounter></DisplayCounter>
          <Controls></Controls>
          </div>
        </Container>
      </center>
    
  );
}
export default App
