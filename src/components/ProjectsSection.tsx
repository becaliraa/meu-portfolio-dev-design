import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  title: string;
  desc: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
}

const projects: Project[] = [
  {
    title: "CRM Client Pro",
    desc: "Sistema de gestão de clientes com interface moderna focada em organização e produtividade.",
    tags: ["React", "TypeScript", "CSS"],
    liveUrl: "https://crm-client-pro.vercel.app/",
    repoUrl: "https://github.com/becaliraa/crm-client-pro",
  },
  {
    title: "Case Study - Brewly",
    desc: "Estudo de UX focado na redução do abandono de carrinho em e-commerce, com melhorias na jornada de compra, usabilidade e conversão.",
    tags: ["UX Design", "UX Discovery", "E-commerce", "User Journey", "Conversion Optimization"],
    liveUrl: "https://case-study-brewly.vercel.app/",
  },
  {
    title: "Pack Social Media - Provedor de Internet",
    desc: "Pack de posts criado para comunicar planos e fortalecer a presença digital de um provedor de internet.",
    tags: ["Serviços Digitais", "Social Media Design", "Tech Design" ],
    liveUrl: "https://www.behance.net/gallery/227112481/Social-Media-Design-Provedor-de-Internet",
  },
  {
    title: "Identidade Visual - Shazam Delivery",
    desc: "Projeto de identidade visual para delivery, com foco em comunicação atrativa, reconhecimento de marca e presença digital no segmento alimentício",
    tags: ["Branding", "Logo", "Identidade Visual", "brand design"],
    liveUrl: "https://www.behance.net/gallery/226263859/Shazam-Salgados-Identidade-Visual",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projetos" className="section-padding">
      <div className="container max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="text-xs font-medium text-primary tracking-widest uppercase">// projetos</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-3">Meus Projetos</h2>
          <p className="text-sm text-muted-foreground mt-3 max-w-md mx-auto">
            Projetos criados para explorar e aprimorar habilidades de design e desenvolvimento.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((proj, i) => (
            <motion.div
              key={proj.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-2xl glow-border bg-card p-6 flex flex-col justify-between hover:bg-surface-hover transition-colors group"
            >
              <div>
                <h3 className="font-display font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {proj.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                  {proj.desc}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {proj.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] px-3 py-1 rounded-full bg-primary/10 text-primary font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-3">
                {proj.liveUrl && (
                  <a
                    href={proj.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground hover:text-primary transition-colors"
                  >
                    <ExternalLink size={14} /> Ver Projeto
                  </a>
                )}
                {proj.repoUrl && (
                  <a
                    href={proj.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <Github size={14} /> Código
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
