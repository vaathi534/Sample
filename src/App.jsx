import { Routes, Route, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import Home from "./pages/Home";
import Features from "./pages/Features";
import Playground from "./pages/Playground";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <header className="max-w-6xl mx-auto px-6 py-6 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Test React App</h1>

        <nav className="flex gap-4 text-slate-300">
          {[
            { to: "/", label: "Home" },
            { to: "/features", label: "Features" },
            { to: "/playground", label: "Playground" },
          ].map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `px-3 py-1.5 rounded-xl transition-all ${
                  isActive
                    ? "bg-slate-700 text-white shadow"
                    : "hover:bg-slate-800"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
      </header>

      <motion.main
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="max-w-6xl mx-auto px-6 pb-10"
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/playground" element={<Playground />} />
        </Routes>
      </motion.main>
    </div>
  );
}