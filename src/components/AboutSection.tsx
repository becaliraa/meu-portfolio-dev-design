import { motion } from "framer-motion";
import { Palette, Code2, Lightbulb } from "lucide-react";

const cards = [
  {
    icon: Palette,
    title: "UI Design",
    desc: "Criação de interfaces modernas e intuitivas.",
  },
  {
    icon: Code2,
    title: "Front-End Development",
    desc: "Construção de aplicações web rápidas e responsivas.",
  },
  {
    icon: Lightbulb,
    title: "Pensamento Criativo",
    desc: "Soluções criativas para problemas reais de produtos digitais.",
  },
];

const AboutSection = () => {
  return (
    <section id="sobre" className="section-padding">
      <div className="container max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="text-xs font-medium text-primary tracking-widest uppercase">// sobre mim</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-3">Sobre mim</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-2xl glow-border bg-card p-6 md:p-10 mb-12"
        >
          <p className="text-sm md:text-base text-secondary-foreground leading-relaxed">
            Sou desenvolvedora <strong className="text-foreground">Front-End</strong> e designer{" "}
            <strong className="text-foreground">UI/UX</strong> apaixonada por criar experiências digitais
            intuitivas e visualmente impactantes. Tenho experiência em design de interfaces, prototipação
            e desenvolvimento de aplicações web modernas utilizando tecnologias como{" "}
            <strong className="text-foreground">React</strong> e{" "}
            <strong className="text-foreground">TypeScript</strong>.
          </p>
          <p className="text-sm md:text-base text-secondary-foreground leading-relaxed mt-4">
            Meu foco é transformar ideias em produtos digitais funcionais, acessíveis e bem estruturados.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-xl glow-border bg-card p-6 hover:bg-surface-hover transition-colors group"
            >
              <card.icon
                size={28}
                className="text-primary mb-4 group-hover:scale-110 transition-transform"
              />
              <h3 className="font-display font-semibold text-sm mb-2">{card.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
