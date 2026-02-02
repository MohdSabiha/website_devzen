import { motion } from "framer-motion";
import { Network, Layers, Lock, Boxes, Sparkles, Database, Cloud, CloudUpload } from "lucide-react";

const highlights = [
  {
    icon: Cloud,
    title: "SAP CPI",
    subtitle: "Integrations",
  },
  {
    icon: CloudUpload,
    title: "SAP PI/PO to CPI",
    subtitle: "Migration",
  },
  /*
  {
    icon: Network,
    title: "API Management",
    subtitle: "Unified Gateway",
  },
  {
    icon: Layers,
    title: "Event-Driven",
    subtitle: "Architecture",
  }, */
  // {
  //   icon: Lock,
  //   title: "Enterprise",
  //   subtitle: "Security",
  // },
  {
    icon: Boxes,
    title: "SuccessFactors",
    subtitle: "Ready",
  },
  {
    icon: Sparkles,
    title: "AI",
    subtitle: "Advanced Integration",
  },
  {
    icon: Database,
    title: "SAP S4/HANA",
    subtitle: "Support",
  },
]; 

export const FeatureHighlights = () => {
  return (
    <section className="py-16 px-4 border-y border-border/50 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent" />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-wrap justify-center gap-6 md:gap-12">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              className="flex items-center gap-3 group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                <item.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground">{item.title}</p>
                <p className="text-xs text-muted-foreground">{item.subtitle}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
