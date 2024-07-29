import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Chat from "../components/Chat";
import Layout from "../components/Layout";
import Cooking from "../components/Cooking";

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Chat />} />
            <Route path="/cooking" element={<Layout />} />
            <Route path="/cooking/:id" element={<Cooking />} />
            {/* <Route path="*" element={<NotPage />}/> */}
        </Routes>
    </Router>
  );
}

export default App;