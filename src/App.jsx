import { Home } from './Pages/Home/Home.jsx'
import { Layout } from './Components/Layout/Layout.jsx'
import { Cursor } from './Components/Cursor/Cursor.jsx';
/* import { Error } from './Components/Error/Error.jsx' */
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <Cursor />
      <Routes>
        <Route element={<Layout />}>
          <Route path="*" element={<Home />} />
          {/* <Route path='*' element={<Error />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
