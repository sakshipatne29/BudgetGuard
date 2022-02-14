import "./App.css";
// import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Sidebar from "./Components/Sidebar";

function App() {
  const handleClick = () => {
    document.querySelector("#sidebar").classList.toggle("active-nav");
    document.querySelector(".my-container").classList.toggle("active-cont");
  };

  return (
    <>
      {/* <Navbar title="TextUtils Spot" aboutText="About TextUtils"/> */}
      <Sidebar />
      <div className="my-container">
        <button className="btn my-4 btn-primary mx-2" onClick={handleClick}>
        <i className="fas fa-bars p-3"></i>
        </button>
        <div className="container my-3">
          <TextForm heading="Enter the text to analyze below" />
        </div>
      </div>
    </>
  );
}

export default App;
