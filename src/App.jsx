 
import { Link, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Home from './pages/home.jsx'
import About from './pages/about.jsx'
import Contact from './pages/contact.jsx'

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div>
      <nav className="flex items-center justify-between bg-slate-900 p-5 text-white shadow-lg">
        <h2 className="text-xl font-bold text-blue-400">MyWebsite</h2>

        <button
          className="text-2xl md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        <div className={`${menuOpen ? 'flex' : 'hidden'} absolute left-0 top-16 z-10 w-full flex-col gap-5 bg-slate-900 p-5 md:static md:flex md:w-auto md:flex-row md:items-center md:p-0`}>
          <Link onClick={() => setMenuOpen(false)} to="/">Home</Link>
          <Link onClick={() => setMenuOpen(false)} to="/about">About</Link>
          <Link onClick={() => setMenuOpen(false)} to="/contact">Contact</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <footer className="bg-slate-900 px-6 py-8 text-center text-slate-300">
        <h2 className="mb-3 text-xl font-bold text-blue-400">
          MyWebsite
        </h2>

        <p className="mb-4 text-sm">
          Building modern and responsive web experiences.
        </p>

        <div className="mb-4 flex justify-center gap-6 text-sm">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </div>

        <hr className="mx-auto mb-4 max-w-3xl border-slate-700" />

        <p className="text-xs text-slate-500">
          © 2026 MyWebsite. All Rights Reserved.
        </p>
      </footer>
    </div>
  )
}

export default App
