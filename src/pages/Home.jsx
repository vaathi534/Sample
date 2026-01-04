import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="space-y-4">
      <h2 className="text-3xl font-bold">Welcome 👋</h2>
      <p className="text-slate-300 max-w-2xl">
        This multi-file React project helps you test routing, animations,
        and build behavior — without any database.
      </p>

      <motion.div
        className="rounded-2xl h-32 bg-slate-800 border border-slate-700"
        animate={{ borderRadius: [16, 40, 16] }}
        transition={{ repeat: Infinity, duration: 3 }}
      />
    </section>
  );
}