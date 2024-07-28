import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Chat from "../components/Chat";
import Layout from "../components/Layout";

function App() {
  return (
    <Router>
        <Routes>
            <Route path="/" element={<Chat />} />
            <Route path="/cooking" element={<Layout />} />
            {/* <Route path="*" element={<NotPage />}/> */}
        </Routes>
    </Router>
  );
}

export default App;