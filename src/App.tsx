import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import EarnPage from "./pages/EarnPage";
import MemepadPage from "./pages/MemepadPage";
import FrensPage from "./pages/FrensPage";
import WalletPage from "./pages/WalletPage";
import StarField from "./components/background/StarField";
import "./styles/animations.css";

function App() {
  return (
    <Router basename="/mr2-mini-app">
      <div className="min-h-screen bg-black text-white relative">
        <StarField />
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/earn" element={<EarnPage />} />
            <Route path="/memepad" element={<MemepadPage />} />
            <Route path="/frens" element={<FrensPage />} />
            <Route path="/wallet" element={<WalletPage />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
