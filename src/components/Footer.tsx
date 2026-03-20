import { Github, Linkedin, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="border-t border-border py-10 px-4">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2">
          <span className="text-primary font-display font-bold">✦</span>
          <div>
            <p className="text-sm font-semibold">Beca Lira</p>
            <p className="text-xs text-muted-foreground">UI/UX Designer & Front-End Dev</p>
          </div>
        </div>

        <p className="text-xs text-muted-foreground">
         ninenine.lira@gmail.com
        </p>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/becaliraa"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-border hover:border-primary/40 text-muted-foreground hover:text-foreground transition-all"
          >
            <Github size={16} />
          </a>
          <a
            href="https://linkedin.com/becalira"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-border hover:border-primary/40 text-muted-foreground hover:text-foreground transition-all"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="https://behance.net/rebecaliraa"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full border border-border hover:border-primary/40 text-muted-foreground hover:text-foreground transition-all"
          >
            <ExternalLink size={16} />
          </a>
        </div>
      </div>

      <div className="container mt-8">
        <p className="text-center text-xs text-muted-foreground">
          © 2025 Beca Lira. Feito com <span className="text-primary">♥</span> e criatividade.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
