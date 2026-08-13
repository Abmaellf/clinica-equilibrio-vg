"use client";

import { useEffect, useState } from "react";

const whatsappUrl =
  "https://wa.me/5565992702996?text=Olá%2C%20vim%20pelo%20site%20da%20Clínica%20Equilíbrio%20e%20quero%20consultar%20os%20horários%20disponíveis.";

const slides = [
  {
    image: "/images/pilates.webp",
    alt: "Paciente praticando Pilates no reformer com acompanhamento profissional",
    eyebrow: "Pilates clínico",
    title: "Movimento com precisão",
    text: "Equipamentos completos e acompanhamento próximo para evoluir com segurança.",
  },
  {
    image: "/images/reabilitacao.webp",
    alt: "Paciente realizando exercício de reabilitação com fisioterapeuta",
    eyebrow: "Reabilitação funcional",
    title: "Volte à sua rotina",
    text: "Uma jornada orientada para recuperar mobilidade, confiança e autonomia.",
  },
  {
    image: "/images/hero-fisios.webp",
    alt: "Duas fisioterapeutas em clínica moderna e acolhedora",
    eyebrow: "Cuidado próximo",
    title: "Você no centro",
    text: "Escuta, avaliação e um plano construído para o seu momento.",
  },
];

const faqItems = [
  {
    question: "Como funciona o primeiro atendimento?",
    answer:
      "Começamos com uma conversa e uma avaliação para entender seus objetivos. Depois, indicamos o plano mais adequado para você.",
  },
  {
    question: "Quanto tempo dura cada sessão?",
    answer:
      "A duração varia conforme o serviço e o plano de cuidado. Nossa equipe confirma todos os detalhes no agendamento.",
  },
  {
    question: "A clínica oferece pacotes?",
    answer:
      "Sim. Temos opções de sessões e planos mensais. Os valores podem ser ajustados conforme a frequência e a necessidade de cada pessoa.",
  },
  {
    question: "Como faço para agendar?",
    answer:
      "Clique em qualquer botão de agendamento para falar com nossa equipe pelo WhatsApp e consultar os horários disponíveis.",
  },
];

function BrandMark() {
  return (
    <span className="brand-mark" aria-hidden="true">
      <span />
      <span />
      <span />
    </span>
  );
}

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const timer = window.setInterval(
      () => setCurrentSlide((value) => (value + 1) % slides.length),
      6000,
    );
    return () => window.clearInterval(timer);
  }, []);

  const selectSlide = (index: number) => setCurrentSlide(index);
  const nextSlide = () =>
    setCurrentSlide((value) => (value + 1) % slides.length);
  const previousSlide = () =>
    setCurrentSlide((value) => (value - 1 + slides.length) % slides.length);

  return (
    <main>
      <header className="site-header">
        <div className="nav-shell">
          <a className="brand" href="#inicio" aria-label="Clínica Equilíbrio — início">
            <BrandMark />
            <span className="brand-copy">
              <strong>Equilíbrio</strong>
              <small>Fisioterapia &amp; Pilates</small>
            </span>
          </a>

          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((value) => !value)}
          >
            <span />
            <span />
          </button>

          <nav className={menuOpen ? "nav-links is-open" : "nav-links"} aria-label="Navegação principal">
            <a href="#sobre" onClick={() => setMenuOpen(false)}>Sobre a clínica</a>
            <a href="#detalhes" onClick={() => setMenuOpen(false)}>Detalhes</a>
            <a href="#faq" onClick={() => setMenuOpen(false)}>FAQ</a>
            <a className="nav-cta" href="#agendamento" onClick={() => setMenuOpen(false)}>
              Acessar agora <span aria-hidden="true">↗</span>
            </a>
          </nav>
        </div>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-photo" aria-hidden="true" />
        <div className="hero-shade" aria-hidden="true" />
        <div className="hero-grid shell">
          <div className="hero-copy reveal">
            <p className="eyebrow"><span /> Fisioterapia &amp; Pilates em Várzea Grande</p>
            <h1>Mantenha a saúde e o <em>bem-estar</em> em dia.</h1>
            <p className="hero-lead">
              Cuidado individualizado para aliviar dores, recuperar movimentos e construir uma rotina mais forte, leve e ativa.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href={whatsappUrl} target="_blank" rel="noreferrer">
                Quero cuidar de mim <span aria-hidden="true">↗</span>
              </a>
              <a className="text-link" href="#detalhes">
                Conhecer tratamentos <span aria-hidden="true">↓</span>
              </a>
            </div>
            <div className="trust-row" aria-label="Diferenciais da clínica">
              <div><strong>Atendimento</strong><span>individualizado</span></div>
              <div><strong>Estrutura</strong><span>completa e moderna</span></div>
              <div><strong>Plano</strong><span>feito para você</span></div>
            </div>
          </div>

          <aside className="availability-card reveal reveal-delay" aria-label="Disponibilidade de atendimento">
            <span className="live-dot" />
            <div>
              <small>AGENDA EM MOVIMENTO</small>
              <strong>Consulte os próximos horários</strong>
              <p>Vagas reduzidas por período para manter um cuidado próximo.</p>
            </div>
            <a href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Consultar horários pelo WhatsApp">→</a>
          </aside>
        </div>
        <a className="scroll-cue" href="#sobre" aria-label="Rolar para conhecer a clínica">
          <span>Explore</span><i aria-hidden="true" />
        </a>
      </section>

      <section className="about section" id="sobre">
        <div className="shell about-grid">
          <div className="section-intro reveal">
            <p className="eyebrow dark"><span /> Sobre a Equilíbrio</p>
            <h2>Seu corpo conta uma história. <em>Nós cuidamos do próximo capítulo.</em></h2>
          </div>
          <div className="about-copy reveal reveal-delay">
            <p className="large-copy">
              Mais do que tratar sintomas, queremos entender o que limita seus movimentos e acompanhar sua evolução de perto.
            </p>
            <p>
              Na Clínica Equilíbrio, fisioterapia, Pilates, alongamento e treino funcional se encontram em um ambiente acolhedor, com atenção profissional e equipamentos selecionados para uma experiência segura.
            </p>
            <a className="inline-link" href={whatsappUrl} target="_blank" rel="noreferrer">
              Conversar com a equipe <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        <div className="shell benefits-grid">
          <article className="benefit-card reveal">
            <span className="benefit-number">01</span>
            <h3>Alívio da dor</h3>
            <p>Estratégias individualizadas para reduzir desconfortos e devolver liberdade ao seu dia.</p>
          </article>
          <article className="benefit-card reveal reveal-delay">
            <span className="benefit-number">02</span>
            <h3>Mobilidade e força</h3>
            <p>Movimentos guiados para ganhar estabilidade, flexibilidade e confiança progressivamente.</p>
          </article>
          <article className="benefit-card reveal reveal-delay-2">
            <span className="benefit-number">03</span>
            <h3>Prevenção e vitalidade</h3>
            <p>Cuidado contínuo para prevenir lesões e sustentar uma vida mais ativa e saudável.</p>
          </article>
        </div>
      </section>

      <section className="details section" id="detalhes">
        <div className="shell details-grid">
          <div className="carousel-wrap reveal">
            <div className="carousel-frame" aria-live="polite">
              {slides.map((slide, index) => (
                <figure className={index === currentSlide ? "slide is-active" : "slide"} key={slide.title}>
                  <img src={slide.image} alt={slide.alt} />
                  <figcaption>
                    <small>{slide.eyebrow}</small>
                    <strong>{slide.title}</strong>
                    <span>{slide.text}</span>
                  </figcaption>
                </figure>
              ))}
              <div className="carousel-controls">
                <button type="button" onClick={previousSlide} aria-label="Imagem anterior">←</button>
                <span>{String(currentSlide + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}</span>
                <button type="button" onClick={nextSlide} aria-label="Próxima imagem">→</button>
              </div>
            </div>
            <div className="carousel-dots" aria-label="Selecionar imagem">
              {slides.map((slide, index) => (
                <button
                  type="button"
                  className={index === currentSlide ? "is-active" : ""}
                  onClick={() => selectSlide(index)}
                  aria-label={`Mostrar ${slide.eyebrow}`}
                  aria-current={index === currentSlide ? "true" : undefined}
                  key={slide.title}
                />
              ))}
            </div>
          </div>

          <div className="details-copy reveal reveal-delay">
            <p className="eyebrow light"><span /> Cuidado que se adapta</p>
            <h2>Uma experiência completa para <em>se movimentar melhor.</em></h2>
            <p>
              Cada atendimento começa com você: seus objetivos, sua rotina e o que deseja voltar a fazer com confiança.
            </p>
            <div className="service-list">
              <div>
                <span>01</span>
                <h3>Fisioterapia</h3>
                <p>Reabilitação, prevenção e recuperação funcional com acompanhamento próximo.</p>
              </div>
              <div>
                <span>02</span>
                <h3>Pilates</h3>
                <p>Força, postura, equilíbrio e flexibilidade com movimentos precisos e adaptados.</p>
              </div>
              <div>
                <span>03</span>
                <h3>Funcional e alongamento</h3>
                <p>Treino orientado para mais disposição, autonomia e qualidade de movimento.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="urgency section">
        <div className="shell urgency-inner">
          <div className="urgency-badge" aria-hidden="true"><span>!</span></div>
          <div>
            <p className="eyebrow dark"><span /> Atendimento com hora marcada</p>
            <h2>Seu bem-estar não precisa ficar para depois.</h2>
            <p>
              Para preservar a qualidade e a atenção em cada sessão, trabalhamos com agenda limitada por período. Consulte agora a disponibilidade mais próxima.
            </p>
          </div>
          <a className="button button-dark" href={whatsappUrl} target="_blank" rel="noreferrer">
            Ver horários disponíveis <span aria-hidden="true">↗</span>
          </a>
        </div>
      </section>

      <section className="faq section" id="faq">
        <div className="shell faq-grid">
          <div className="section-intro reveal">
            <p className="eyebrow dark"><span /> Dúvidas frequentes</p>
            <h2>Antes de começar, <em>saiba o essencial.</em></h2>
            <p>Se ainda tiver alguma dúvida, nossa equipe está pronta para conversar.</p>
            <a className="inline-link" href={whatsappUrl} target="_blank" rel="noreferrer">
              Tirar uma dúvida <span aria-hidden="true">↗</span>
            </a>
          </div>
          <div className="faq-list reveal reveal-delay">
            {faqItems.map((item, index) => (
              <details key={item.question} open={index === 0}>
                <summary>
                  <span>{item.question}</span><i aria-hidden="true">+</i>
                </summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="booking section" id="agendamento">
        <div className="booking-glow" aria-hidden="true" />
        <div className="shell">
          <div className="booking-heading reveal">
            <p className="eyebrow light"><span /> Escolha seu próximo passo</p>
            <h2>Invista no que acompanha você todos os dias: <em>seu corpo.</em></h2>
            <p>Planos transparentes, acompanhamento profissional e pagamento facilitado.</p>
          </div>

          <div className="pricing-grid">
            <article className="price-card reveal">
              <div>
                <p>Fisioterapia</p>
                <span>Avaliação individual</span>
              </div>
              <h3><small>a partir de</small> R$ 100</h3>
              <ul>
                <li>Avaliação direcionada</li>
                <li>Plano de cuidado individual</li>
                <li>Acompanhamento da evolução</li>
              </ul>
              <a href={whatsappUrl} target="_blank" rel="noreferrer">Consultar disponibilidade <span>↗</span></a>
            </article>

            <article className="price-card featured reveal reveal-delay">
              <div className="popular-label">Mais escolhido</div>
              <div>
                <p>Pilates Essencial</p>
                <span>2 vezes por semana</span>
              </div>
              <h3><small>mensal</small> R$ 300</h3>
              <ul>
                <li>Acompanhamento profissional</li>
                <li>Exercícios adaptados</li>
                <li>Força, postura e mobilidade</li>
              </ul>
              <a href={whatsappUrl} target="_blank" rel="noreferrer">Quero começar <span>↗</span></a>
            </article>

            <article className="price-card reveal reveal-delay-2">
              <div>
                <p>Pilates Intensivo</p>
                <span>3 vezes por semana</span>
              </div>
              <h3><small>mensal</small> R$ 450</h3>
              <ul>
                <li>Maior frequência semanal</li>
                <li>Progressão acompanhada</li>
                <li>Foco em constância e evolução</li>
              </ul>
              <a href={whatsappUrl} target="_blank" rel="noreferrer">Reservar meu horário <span>↗</span></a>
            </article>
          </div>

          <div className="payment-note reveal">
            <span>✓</span>
            <p><strong>Pagamento facilitado</strong> — Pix, cartão e parcelamento em até 2x sem juros.</p>
            <small>*Valores e condições sujeitos a confirmação no agendamento.</small>
          </div>
        </div>
      </section>

      <footer>
        <div className="shell footer-grid">
          <div className="footer-brand">
            <a className="brand" href="#inicio">
              <BrandMark />
              <span className="brand-copy"><strong>Equilíbrio</strong><small>Fisioterapia &amp; Pilates</small></span>
            </a>
            <p>Cuidado para você viver com mais movimento, autonomia e bem-estar.</p>
          </div>
          <div>
            <small>ONDE ESTAMOS</small>
            <p>Parque do Lago<br />Várzea Grande — MT</p>
          </div>
          <div>
            <small>FALE CONOSCO</small>
            <a href={whatsappUrl} target="_blank" rel="noreferrer">(65) 99270-2996</a>
          </div>
          <div>
            <small>ACOMPANHE</small>
            <div className="social-links">
              <a href="https://instagram.com/clinicaequilibrio" target="_blank" rel="noreferrer">Instagram ↗</a>
              <a href="https://youtube.com/@cequilibrio" target="_blank" rel="noreferrer">YouTube ↗</a>
            </div>
          </div>
        </div>
        <div className="shell footer-bottom">
          <span>© 2026 Clínica Equilíbrio</span>
          <span>Saúde em movimento.</span>
        </div>
      </footer>

      <a className="floating-cta" href={whatsappUrl} target="_blank" rel="noreferrer" aria-label="Agendar pelo WhatsApp">
        <span className="floating-pulse" />
        <strong>Agendar</strong>
        <i aria-hidden="true">↗</i>
      </a>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Physiotherapy",
            name: "Clínica Equilíbrio",
            description: "Clínica de fisioterapia e Pilates em Várzea Grande.",
            telephone: "+55 65 99270-2996",
            address: {
              "@type": "PostalAddress",
              addressLocality: "Várzea Grande",
              addressRegion: "MT",
              addressCountry: "BR",
            },
            sameAs: [
              "https://instagram.com/clinicaequilibrio",
              "https://youtube.com/@cequilibrio",
            ],
          }),
        }}
      />
    </main>
  );
}
