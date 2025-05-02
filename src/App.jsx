import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Account from "./pages/Account";
import Header from "./components/Header";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path='/account' element={<Account/>}/>
 </Routes>
    </BrowserRouter>
  );
}

export default App
