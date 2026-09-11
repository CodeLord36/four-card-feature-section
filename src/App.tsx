import FeatureGrid from "./components/FeatureGrid";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <main className="px-8 py-20 pb-10 font-poppins bg-white md:px-10 md:py-20 ">
      <Header />
      <FeatureGrid />
      <Footer />
    </main>
  );
}

export default App;
