import Navbar from "./components/Navbar";
import Main from "./pages/Main";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <div className="raw">
          <div className="col-lg-8 offset-lg-2">
            <Main />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
