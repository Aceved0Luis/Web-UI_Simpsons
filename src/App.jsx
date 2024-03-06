import { Home } from './rutas/home.jsx'
import { Frases as Quotes } from './rutas/frases.jsx'
import { Routes, Route } from "react-router-dom"
import { Error } from './rutas/error.jsx'


export function App() {
  return (
    <Routes>
      <Route path='*' element={<Error />} />
      <Route path="/" element={<Home />} />
      <Route path="/frases" element={<Quotes />} />
    </Routes>
  )
}