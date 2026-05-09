import { motion, useScroll, useTransform } from "motion/react";
import { 
  ShieldAlert, 
  MessageCircleX, 
  Eye, 
  UserPlus, 
  AlertTriangle, 
  PhoneCall, 
  CheckCircle2, 
  ArrowRight,
  Info,
  ShieldCheck,
  Lock,
  Flag,
  Instagram,
  Facebook,
  ExternalLink,
  QrCode
} from "lucide-react";
import { useRef } from "react";
import { QRCodeSVG } from "qrcode.react";

const SectionHeader = ({ title, subtitle, number }: { title: string; subtitle?: string; number: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="mb-16"
  >
    <div className="flex items-center gap-4 mb-2 text-brand-primary">
      <span className="font-display font-bold text-xl">{number}</span>
      <div className="h-[1px] w-12 bg-brand-primary opacity-50" />
    </div>
    <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 tracking-tight">
      {title}
    </h2>
    {subtitle && <p className="text-gray-400 max-w-2xl text-lg">{subtitle}</p>}
  </motion.div>
);

export default function App() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll();
  const heroOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSftAMoWt1oMFNEuXQFisvKoodvZMsqZMhc4ae0C9VZKABaMwA/viewform";

  return (
    <div ref={containerRef} className="relative min-h-screen bg-brand-bg scroll-smooth">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-brand-bg/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShieldAlert className="w-8 h-8 text-brand-primary" />
            <span className="font-display font-bold text-xl tracking-tighter text-glow">BEZPIECZNI W SIECI</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
            <a href="#co-to-jest" className="hover:text-brand-primary transition-colors">Definicja</a>
            <a href="#rodzaje" className="hover:text-brand-primary transition-colors">Rodzaje</a>
            <a href="#statystyki" className="hover:text-brand-primary transition-colors">Statystyki</a>
            <a href="#ochrona" className="hover:text-brand-primary transition-colors">Ochrona</a>
            <a href="#tworcy" className="hover:text-brand-primary transition-colors">Twórcy</a>
            <a href="#ankieta" className="hover:text-brand-primary transition-colors">Ankieta</a>
            <a href="#pomoc" className="px-5 py-2 bg-brand-primary/10 text-brand-primary rounded-full hover:bg-brand-primary hover:text-white transition-all">Pomoc</a>
            
            <div className="flex items-center gap-6 ml-4 pl-6 border-l border-white/10">
              <a href="https://www.instagram.com/cyberprzemoc.info/" target="_blank" rel="noopener noreferrer" className="text-white hover:text-brand-primary transition-all hover:scale-125 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                <Instagram size={32} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61589081975378" target="_blank" rel="noopener noreferrer" className="text-white hover:text-brand-primary transition-all hover:scale-125 drop-shadow-[0_0_8px_rgba(255,255,255,0.3)]">
                <Facebook size={32} />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        <motion.div 
          style={{ opacity: heroOpacity }}
          className="absolute inset-0 z-0 pointer-events-none"
        >
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-primary/20 rounded-full blur-[120px]" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />
        </motion.div>

        <div className="max-w-5xl mx-auto px-6 text-center z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-brand-primary/10 text-brand-primary text-xs font-bold uppercase tracking-widest mb-6 border border-brand-primary/20">
              Projekt Studencki
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-8 tracking-tighter leading-tight text-glow px-4">
              Wzrost świadomości społecznej w zakresie cyberprzemocy wśród młodzieży
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
              <span className="text-white font-medium block mb-2">Zrozumieć • Zauważyć • Reagować</span>
              Cyberprzemoc to nie tylko słowa na ekranie. To realne zagrożenie, które dotyka miliony młodych ludzi. Dowiedz się, jak rozpoznać zagrożenie i skutecznie mu przeciwdziałać.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a 
                href="#co-to-jest" 
                className="group px-8 py-4 bg-brand-primary text-white rounded-full font-bold flex items-center gap-2 hover:bg-orange-600 transition-all shadow-[0_0_30px_rgba(255,77,0,0.3)] hover:scale-105 active:scale-95"
              >
                Rozpocznij naukę
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#pomoc" 
                className="px-8 py-4 glass rounded-full font-bold hover:bg-white/10 transition-all border-white/20"
              >
                Szukam pomocy
              </a>
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-30"
        >
          <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center p-1">
            <div className="w-1 h-2 bg-white rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* Definition Section */}
      <section id="co-to-jest" className="py-32 bg-brand-card">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader 
            number="01" 
            title="Czym jest cyberprzemoc?" 
            subtitle="Zjawisko, które zmienia cyfrowy świat w pole walki o zdrowie psychiczne." 
          />
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 text-lg text-gray-400 font-light"
            >
              <p>
                Cyberprzemoc (cyberbullying) to stosowanie przemocy poprzez <span className="text-white font-medium">prześladowanie, zastraszanie, nękanie czy wyśmiewanie</span> innych osób z wykorzystaniem technologii informacyjnych i komunikacyjnych: internetu oraz narzędzi typu telefony komórkowe.
              </p>
              <p>
                W przeciwieństwie do tradycyjnej przemocy, ta cyfrowa jest <span className="text-white font-medium">wszechobecna</span> — ofiara nie może uciec przed oprawcą do domu, ponieważ agresor jest obecny w jej kieszeni, na ekranie smartfona, 24 godziny na dobę. 
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-8 glass rounded-3xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Info size={120} />
              </div>
              <h3 className="text-2xl font-display font-bold mb-4 flex items-center gap-2">
                <AlertTriangle className="text-brand-primary" />
                Kluczowe cechy:
              </h3>
              <ul className="space-y-4">
                {[
                  "Anonimowość sprawcy (często pozorna)",
                  "Szybkość rozpowszechniania treści",
                  "Trudność w usunięciu materiałów z sieci",
                  "Brak bezpośredniego kontaktu z ofiarą (brak empatii)",
                  "Potencjał do nękania o każdej porze"
                ].map((item, i) => (
                  <motion.li 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-3"
                  >
                    <CheckCircle2 className="text-brand-primary w-5 h-5 flex-shrink-0" />
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Types Section */}
      <section id="rodzaje" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader 
            number="02" 
            title="Twarze cyfrowej agresji" 
            subtitle="Cyberprzemoc przybiera różne formy. Poznanie mechanizmów to pierwszy krok do obrony." 
          />

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <MessageCircleX />,
                title: "Hejt i Flaming",
                text: "Wymiana agresywnych wiadomości, często publiczna, mająca na celu upokorzenie lub zdenerwowanie odbiorcy."
              },
              {
                icon: <UserPlus />,
                title: "Cyberstalking",
                text: "Uporczywe nękanie, śledzenie aktywności w sieci, wysyłanie niechcianych wiadomości i próby zastraszenia."
              },
              {
                icon: <Eye />,
                title: "Outing",
                text: "Upublicznianie prywatnych informacji, zdjęć lub filmów bez zgody właściciela w celu jego ośmieszenia."
              },
              {
                icon: <Lock />,
                title: "Kradzież tożsamości",
                text: "Podszywanie się pod inną osobę, zakładanie fałszywych profili w celu zniszczenia czyjejś reputacji."
              },
              {
                icon: <ShieldAlert />,
                title: "Wykluczenie",
                text: "Celowe usuwanie osoby z grup rówieśniczych, gier czy wydarzeń społecznościowych w sieci."
              },
              {
                icon: <Flag />,
                title: "Nękanie",
                text: "Długotrwałe i powtarzalne działania skierowane przeciwko konkretnej osobie, mające na celu jej izolację."
              }
            ].map((type, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="p-8 glass rounded-3xl border-white/5 hover:border-brand-primary/30 transition-all cursor-default"
              >
                <div className="w-12 h-12 bg-brand-primary/10 text-brand-primary rounded-xl flex items-center justify-center mb-6">
                  {type.icon}
                </div>
                <h4 className="text-xl font-display font-bold mb-3">{type.title}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{type.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section id="statystyki" className="py-32 bg-brand-primary">
        <div className="max-w-7xl mx-auto px-6 text-center text-white">
          <SectionHeader 
            number="03" 
            title="Głośne liczby" 
            subtitle="Skala problemu jest przerażająca. Statystyki pokazują, że nikt nie jest bezpieczny."
          />
          
          <div className="grid md:grid-cols-3 gap-12 mt-16">
            <div className="space-y-4">
              <div className="text-6xl font-display font-black">66%</div>
              <p className="text-white/80 font-medium">nastolatków doświadczyło wyzywania w internecie</p>
            </div>
            <div className="space-y-4">
              <div className="text-6xl font-display font-black">1 na 3</div>
              <p className="text-white/80 font-medium">uczniów padło ofiarą cyberprzemocy przynajmniej raz</p>
            </div>
            <div className="space-y-4">
              <div className="text-6xl font-display font-black">50%+</div>
              <p className="text-white/80 font-medium">ofiar nie zgłasza problemu dorosłym z obawy przed reakcją</p>
            </div>
          </div>
          
          <div className="mt-20 p-8 bg-black/20 rounded-3xl backdrop-blur-sm border border-white/10 max-w-3xl mx-auto">
            <p className="italic text-lg">
              "Słowa w internecie bolą tak samo jak te wypowiedziane prosto w twarz. Różnica polega na tym, że w sieci zostają na zawsze."
            </p>
          </div>
        </div>
      </section>

      {/* Protection Section */}
      <section id="ochrona" className="py-32">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader 
            number="04" 
            title="Akcja: Ochrona" 
            subtitle="Wiedza to Twoja najlepsza tarcza. Dowiedz się, co zrobić, gdy Ty lub ktoś inny stanie się celem." 
          />

          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-px bg-white/10 hidden md:block" />
            
            <div className="space-y-12 md:pl-12">
              {[
                {
                  title: "Nie odpowiadaj agresją",
                  text: "Agresorzy karmią się Twoją reakcją. Ignorowanie hejtu to często najskuteczniejszy pierwszy krok.",
                  icon: <ShieldCheck className="text-brand-primary" />
                },
                {
                  title: "Zabezpiecz dowody",
                  text: "Rób zrzuty ekranu (screenshoty). Mogą być one kluczowe przy zgłaszaniu sprawy na policję czy do administracji portalu.",
                  icon: <CheckCircle2 className="text-brand-primary" />
                },
                {
                  title: "Blokuj i raportuj",
                  text: "Każdy portal społecznościowy ma mechanizmy zgłaszania naruszeń. Nie wahaj się z nich korzystać.",
                  icon: <AlertTriangle className="text-brand-primary" />
                },
                {
                  title: "Rozmawiaj o tym",
                  text: "Nie zostawaj z tym sam. Powiedz rodzicom, nauczycielowi lub zadzwoń na linię wsparcia. To nie jest wstyd.",
                  icon: <PhoneCall className="text-brand-primary" />
                }
              ].map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.2 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  <div className="absolute -left-[53px] top-1 w-2.5 h-2.5 rounded-full bg-brand-primary hidden md:block group-hover:scale-150 transition-transform" />
                  <div className="p-8 glass rounded-3xl border-white/5 group-hover:border-brand-primary/20 transition-all">
                    <div className="flex items-start gap-4">
                      <div className="mt-1">{step.icon}</div>
                      <div>
                        <h4 className="text-2xl font-display font-bold mb-2">{step.title}</h4>
                        <p className="text-gray-400 font-light">{step.text}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="tworcy" className="py-32 bg-brand-bg">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader 
            number="05" 
            title="Zespół projektowy" 
            subtitle="Poznaj twórców inicjatywy. Jesteśmy studentkami, którym nie jest obojętny los drugiego człowieka w cyfrowej przestrzeni." 
          />

          <div className="grid md:grid-cols-2 gap-8 mt-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group p-8 glass rounded-[2.5rem] border-white/5 hover:border-brand-primary/30 transition-all"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
                <div className="w-32 h-32 rounded-3xl bg-brand-primary/10 overflow-hidden flex-shrink-0 flex items-center justify-center">
                   <ShieldAlert size={60} className="text-brand-primary opacity-20" />
                </div>
                <div>
                  <span className="text-brand-primary font-bold text-xs uppercase tracking-widest block mb-1">Twórczyni</span>
                  <h4 className="text-3xl font-display font-bold mb-3">Magdalena Stankiewicz</h4>
                  <p className="text-gray-400 font-light leading-relaxed text-sm">
                    Studentka Kryminologii i Kryminalistyki interesująca się problemem cyberprzemocy oraz wpływem internetu na młodzież. W projekcie odpowiada za cele informacyjne i świadomościowe.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="group p-8 glass rounded-[2.5rem] border-white/5 hover:border-blue-500/30 transition-all"
            >
              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left">
                <div className="w-32 h-32 rounded-3xl bg-blue-600/10 overflow-hidden flex-shrink-0 flex items-center justify-center">
                   <Lock size={60} className="text-blue-500 opacity-20" />
                </div>
                <div>
                  <span className="text-blue-500 font-bold text-xs uppercase tracking-widest block mb-1">Twórczyni</span>
                  <h4 className="text-3xl font-display font-bold mb-3">Dominika Kubiczek</h4>
                  <p className="text-gray-400 font-light leading-relaxed text-sm">
                    Studentka Kryminologii i Kryminalistyki zainteresowana bezpieczeństwem w sieci oraz tematyką cyberprzemocy wśród młodych osób. W projekcie odpowiada za cele edukacyjne i profilaktyczne.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Questionnaire Section */}
      <section id="ankieta" className="py-32 bg-brand-bg">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeader 
            number="06" 
            title="Twoja opinia ma znaczenie" 
            subtitle="Pomóż nam ulepszyć działania profilaktyczne." 
          />

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 glass rounded-[2.5rem] border-white/10"
          >
            <div className="mb-10 text-gray-400 font-light border-l-4 border-brand-primary pl-6 py-2">
              <p className="mb-4">
                Ankieta została przygotowana w ramach projektu społecznego „Wzrost świadomości społecznej w zakresie cyberprzemocy wśród młodzieży”. Jej celem jest sprawdzenie, czy kampania pomogła zwiększyć świadomość na temat cyberprzemocy oraz sposobów reagowania na nią.
              </p>
              <p className="text-sm italic">
                Ankieta jest anonimowa i zajmuje tylko chwilę.
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-12 bg-white/5 p-10 rounded-3xl border border-white/10">
              <div className="bg-white p-4 rounded-2xl shadow-[0_0_50px_rgba(255,255,255,0.1)]">
                <QRCodeSVG 
                  value={formUrl} 
                  size={180}
                  level="H"
                  includeMargin={false}
                  imageSettings={{
                    src: "/favicon.ico",
                    x: undefined,
                    y: undefined,
                    height: 24,
                    width: 24,
                    excavate: true,
                  }}
                />
              </div>
              
              <div className="flex-1 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 text-brand-primary mb-4">
                  <QrCode size={24} />
                  <span className="font-bold uppercase tracking-wider text-sm">Zeskanuj kod QR</span>
                </div>
                <h4 className="text-2xl font-display font-bold mb-4 text-white">Przejdź do formularza online</h4>
                <p className="text-gray-400 mb-8 font-light">
                  Zeskanuj kod telefonem lub kliknij poniższy przycisk, aby wypełnić anonimową ankietę w usłudze Google Forms.
                </p>
                <a 
                  href={formUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-brand-primary text-white rounded-full font-bold hover:bg-orange-600 transition-all shadow-lg group"
                >
                  Otwórz ankietę w nowym oknie
                  <ExternalLink size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Help Section */}
      <section id="pomoc" className="py-32 bg-brand-card relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-5">
           <PhoneCall className="absolute -right-20 -bottom-20" size={400} />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <SectionHeader 
            number="07" 
            title="Potrzebujesz pomocy?" 
            subtitle="Nie jesteś sam w tej walce. Istnieją profesjonaliści, którzy wiedzą, jak Ci pomóc." 
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="p-10 glass rounded-[2rem] border-white/10 hover:border-brand-primary/50 transition-all flex flex-col items-center">
              <div className="w-20 h-20 bg-brand-primary text-white rounded-3xl flex items-center justify-center mb-8 shadow-lg">
                <PhoneCall size={40} />
              </div>
              <h4 className="text-3xl font-display font-bold mb-4">116 111</h4>
              <p className="text-gray-400 mb-8 max-w-sm h-12">Telefon Zaufania dla Dzieci i Młodzieży. Bezpłatny i anonimowy, czynny 24/7.</p>
              <a href="tel:116111" className="w-full py-4 bg-brand-primary rounded-full font-bold hover:bg-orange-600 transition-all">Zadzwoń teraz</a>
            </div>

            <div className="p-10 glass rounded-[2rem] border-white/10 hover:border-blue-500/50 transition-all flex flex-col items-center">
              <div className="w-20 h-20 bg-blue-600 text-white rounded-3xl flex items-center justify-center mb-8 shadow-lg">
                <ShieldCheck size={40} />
              </div>
              <h4 className="text-3xl font-display font-bold mb-4">Dyżurnet.pl</h4>
              <p className="text-gray-400 mb-8 max-w-sm h-12">Polski punkt kontaktowy zgłaszający nielegalne treści w internecie.</p>
              <a href="https://dyzurnet.pl" target="_blank" rel="noopener noreferrer" className="w-full py-4 bg-blue-600 rounded-full font-bold hover:bg-blue-700 transition-all">Zgłoś incydent</a>
            </div>

            <div className="p-10 glass rounded-[2rem] border-white/10 hover:border-red-500/50 transition-all flex flex-col items-center lg:col-span-1 md:col-span-2">
              <div className="w-20 h-20 bg-red-600 text-white rounded-3xl flex items-center justify-center mb-8 shadow-lg">
                <ShieldAlert size={40} />
              </div>
              <h4 className="text-3xl font-display font-bold mb-4">112 / 997</h4>
              <p className="text-gray-400 mb-8 max-w-sm h-12">Policja. W sytuacjach bezpośredniego zagrożenia życia lub zdrowia.</p>
              <a href="tel:112" className="w-full py-4 bg-red-600 rounded-full font-bold hover:bg-red-700 transition-all">Zadzwoń na Policję</a>
            </div>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a 
              href="https://incydent.cert.pl" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-6 glass rounded-2xl border-white/10 hover:border-brand-primary/30 transition-all flex items-center justify-between group"
            >
              <div className="text-left">
                <h5 className="font-bold text-white group-hover:text-brand-primary transition-colors">CERT Polska</h5>
                <p className="text-sm text-gray-400">Zgłoś incydent bezpieczeństwa</p>
              </div>
              <ExternalLink size={20} className="text-gray-500 group-hover:text-brand-primary" />
            </a>
            <a 
              href="https://stophate.net" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-6 glass rounded-2xl border-white/10 hover:border-brand-primary/30 transition-all flex items-center justify-between group"
            >
              <div className="text-left">
                <h5 className="font-bold text-white group-hover:text-brand-primary transition-colors">Stop Hate</h5>
                <p className="text-sm text-gray-400">Wsparcie w walce z hejtem</p>
              </div>
              <ExternalLink size={20} className="text-gray-500 group-hover:text-brand-primary" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <ShieldAlert className="w-6 h-6 text-brand-primary" />
              <span className="font-display font-bold text-lg">BEZPIECZNI W SIECI</span>
            </div>
            <p className="text-gray-500 text-sm">© 2026 Projekt Studencki. Twój głos ma znaczenie.</p>
          </div>
          <div className="flex gap-8 text-sm text-gray-400">
            <a href="#" className="hover:text-brand-primary transition-colors">Polityka prywatności</a>
            <a href="#" className="hover:text-brand-primary transition-colors">O projekcie</a>
            <a href="#" className="hover:text-brand-primary transition-colors">Materiały dla szkół</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
