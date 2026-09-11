import FeatureGrid from "./components/FeatureGrid";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <main className="px-8 py-16 lg:px-10 lg:py-20 ">
      <Header />
      <FeatureGrid />
      <Footer />
    </main>
  );
}

export default App;
