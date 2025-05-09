import { Route, Routes } from "react-router-dom"
import App from "./Components/App.jsx"
import Custom from "./Components/Custom.jsx"

function AppRoutes(){
  return <Routes>
    <Route path="/" element={<App />} />
    <Route path="/custom" element={<Custom />} />
  </Routes>
}

export default AppRoutes