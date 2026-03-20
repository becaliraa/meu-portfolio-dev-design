import { motion } from "framer-motion";

interface SkillCategory {
  label: string;
  items: string[];
}

const categories: SkillCategory[] = [
  {
    label: "Design",
    items: ["Figma", "Adobe XD", "Photoshop", "Illustrator", "Sketch"],
  },
  {
    label: "Front-End",
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Git", "GitHub"],
  },
  {
    label: "Produtividade",
    items: ["Notion", "ClickUp", "Miro", "Freepik", "Canva"],
  },
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-medium text-primary tracking-widest uppercase">// hard skills</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-3">Ferramentas & Skills</h2>
          <p className="text-sm text-muted-foreground mt-3 max-w-md mx-auto">
            Ferramentas e tecnologias que utilizo para criar experiências digitais incríveis.
          </p>
        </motion.div>

        <div className="space-y-10">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: ci * 0.1 }}
            >
              <h3 className="text-sm font-semibold text-foreground/70 uppercase tracking-wider mb-4">
                {cat.label}
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {cat.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-center justify-center py-4 rounded-xl bg-card glow-border text-sm font-medium text-secondary-foreground hover:bg-surface-hover hover:text-foreground transition-colors cursor-default"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
