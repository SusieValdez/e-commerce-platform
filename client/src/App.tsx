import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Catalog from "./components/Catalog";
import Map from "./components/Map";
import Footer from "./components/Footer";
import "./index.css";

function App() {
  return (
    <div className="min-w-full min-h-screen">
      <Navbar />
      <div className="divide-y-2">
        <Header />
        <Catalog />
        <Map />
        <Footer />
      </div>
    </div>
  );
}

export default App;
