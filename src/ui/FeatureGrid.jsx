import { motion } from "framer-motion";

const items = [
  { title: "Routing", desc: "Verify multi-page navigation." },
  { title: "Animations", desc: "Framer Motion transitions." },
  { title: "Build", desc: "Ensure bundler + assets work." },
  { title: "State", desc: "Test React hooks behavior." },
];

export function FeatureGrid() {
  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
      {items.map((i, ix) => (
        <motion.div
          key={ix}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: ix * 0.1 }}
          className="rounded-2xl border border-slate-700 bg-slate-800 p-4"
        >
          <h3 className="font-semibold">{i.title}</h3>
          <p className="text-sm text-slate-300">{i.desc}</p>
        </motion.div>
      ))}
    </div>
  );
}