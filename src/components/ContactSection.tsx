import { motion } from "framer-motion";
import { Mail, Linkedin, Github, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contato" className="section-padding">
      <div className="container max-w-3xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-xs font-medium text-primary tracking-widest uppercase">// contato</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold mt-3 mb-4">
            Vamos Criar Juntos?
          </h2>
          <p className="text-sm text-muted-foreground max-w-md mx-auto mb-10">
            Estou disponível para projetos freelance, colaboração ou oportunidades como desenvolvedora front-end.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex flex-wrap items-center justify-center gap-6 mb-10"
        >
          <a
            href="mailto:ninenine.lira@gmail.com"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Mail size={16} className="text-primary" />
            ninenine.lira@gmail.com
          </a>
          <a
            href="https://linkedin.com/becaliraa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Linkedin size={16} className="text-primary" />
            LinkedIn
          </a>
          <a
            href="hhttps://github.com/becaliraa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github size={16} className="text-primary" />
            GitHub
          </a>
          <span className="inline-flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin size={16} className="text-primary" />
            Brasil
          </span>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <a
            href="mailto:ninenine.lira@gmail.com"
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-primary text-primary-foreground font-medium text-sm hover:opacity-90 transition-opacity"
          >
            <Mail size={16} />
            Enviar Email
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
