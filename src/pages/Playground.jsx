import { useState } from "react";
import { motion } from "framer-motion";

export default function Playground() {
  const [count, setCount] = useState(0);

  return (
    <section className="space-y-4">
      <h2 className="text-2xl font-bold">Playground</h2>
      <p className="text-slate-300">Simple interactive state test.</p>

      <motion.button
        whileTap={{ scale: 0.95 }}
        className="px-5 py-3 bg-slate-800 rounded-2xl border border-slate-700"
        onClick={() => setCount((c) => c + 1)}
      >
        Clicked {count} times
      </motion.button>
    </section>
  );
}