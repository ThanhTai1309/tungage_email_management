import Footer from "./components/layout/footer/footer.layout";
import Navbar from "./components/layout/navbar/navbar.layout";
import HomePage from "./pages/home/home.page";

function App() {
  return (
    <div className="bg-black w-full min-h-screen">
      <Navbar />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
