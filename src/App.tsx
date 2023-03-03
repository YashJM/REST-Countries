import { Route, Routes, Navigate } from "react-router-dom";

import AppLayout from "./layouts/AppLayout";
import Countries from "./Countries";
import CountryContainer from "./Containers/CountryContainer";

function App() {
  return (
    <AppLayout>
      <Routes>
        <Route path="/countries" element={<Countries />} />
        <Route path="/countries/:country" element={<CountryContainer />} />
        <Route path="/" element={<Navigate to="/countries" replace />} />
      </Routes>
    </AppLayout>
  );
}

export default App;
