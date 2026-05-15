import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import { Toaster } from "react-hot-toast";
import { TOAST_STYLES } from "./constants";

const App = () => {
  return (
    <>
      <Toaster position="top-right" toastOptions={{ ...TOAST_STYLES }} />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
