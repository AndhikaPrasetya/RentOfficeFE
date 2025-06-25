import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Browse from "./pages/Browse";
import CityDetails from "./pages/CityDetails";
import { Details } from "./pages/Details";
import { BookOffice } from "./pages/BookOffice";
import { CheckBooking } from "./pages/CheckBooking";
import { SuccessBooking } from "./pages/SuccessBooking";

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Browse/>}></Route>
      <Route path="/office/:slug" element={<Details/>}></Route>
      <Route path="/office/:slug/book" element={<BookOffice/>}></Route>
      <Route path="/city/:Slug" element={<CityDetails/>}></Route>
      <Route path="/success-booking" element={<SuccessBooking/>}></Route>
      <Route path="/check-booking" element={<CheckBooking/>}></Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
