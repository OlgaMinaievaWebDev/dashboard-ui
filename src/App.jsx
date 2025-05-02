import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Account from "./pages/Account";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path='/account' element={<Account/>}/>
 </Routes>
    </BrowserRouter>
  );
}

export default App
