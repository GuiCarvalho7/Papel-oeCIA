import React from "react";
import { motion } from "motion/react";
import { 
  Instagram, 
  Video, 
  TrendingUp, 
  Target, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  Users, 
  Zap,
  Package,
  Store,
  LayoutDashboard,
  MessageCircle,
  HelpCircle
} from "lucide-react";
import { cn } from "./lib/utils";

// Components
const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
    <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-[#0066FF] rounded-lg flex items-center justify-center">
          <span className="text-white font-bold text-lg">W</span>
        </div>
        <span className="font-bold text-xl tracking-tighter">Wisefy</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
        <a href="#analise" className="hover:text-[#0066FF] transition-colors">Análise</a>
        <a href="#estrategia" className="hover:text-[#0066FF] transition-colors">Estratégia</a>
        <a href="#rotina" className="hover:text-[#0066FF] transition-colors">Rotina</a>
        <a href="#cronograma" className="hover:text-[#0066FF] transition-colors">Cronograma</a>
      </div>
    </div>
  </nav>
);

const SectionHeading = ({ children, title, subtitle }: { children?: React.ReactNode, title: string, subtitle?: string }) => (
  <div className="mb-12">
    <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">{title}</h2>
    {subtitle && <p className="text-gray-500 text-lg max-w-2xl">{subtitle}</p>}
    {children}
  </div>
);

const Analysis = () => {
  const items = [
    { obs: "Apenas 22 posts no total", impact: "O Instagram não mostra seu perfil pra quase ninguém. Pouco conteúdo = pouco alcance." },
    { obs: "Bio sem call to action claro", impact: "Quem chega no perfil não sabe o que fazer em seguida. A venda não acontece." },
    { obs: "Conteúdo não explica os produtos", impact: "O cliente não sabe por que comprar com você e não no concorrente." },
    { obs: "Sem depoimentos de clientes", impact: "Cliente novo não tem motivo para confiar. Prova social é o que convence." },
    { obs: "Zero presença no TikTok", impact: "Milhões de empreendedores compram embalagem todo mês e você ainda não está lá." },
  ];

  return (
    <section id="analise" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          title="O que encontramos no seu perfil hoje" 
          subtitle="Analisamos o seu Instagram com cuidado para entender o cenário atual e as oportunidades perdidas."
        />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1">
          {items.map((item, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              key={idx}
              className="group border border-gray-100 rounded-2xl p-6 hover:border-[#0066FF]/30 hover:bg-blue-50/30 transition-all flex flex-col md:flex-row md:items-center gap-6"
            >
              <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center group-hover:bg-white transition-colors">
                <HelpCircle className="text-gray-400 group-hover:text-[#0066FF]" size={24} />
              </div>
              <div className="flex-1">
                <h4 className="font-bold text-lg mb-1">{item.obs}</h4>
                <p className="text-gray-500">{item.impact}</p>
              </div>
              <div className="hidden md:block">
                <ArrowRight className="text-gray-300 group-hover:text-[#0066FF] group-hover:translate-x-1 transition-all" size={20} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Strategy = () => {
  const strategies = [
    {
      icon: <Instagram className="text-[#0066FF]" />,
      title: "Instagram como Canal de Vendas",
      desc: "Transformar uma vitrine estática em uma máquina de atração e conversão semanal.",
      points: [
        "Bio otimizada com CTA direto",
        "Conteúdo educativo (dúvidas reais)",
        "Vídeos curtos e visuais dos produtos",
        "Depoimentos e prova social",
        "Ofertas semanais nos Stories"
      ]
    },
    {
      icon: <Video className="text-[#0066FF]" />,
      title: "Expansão TikTok & Shop",
      desc: "Dominar o canal onde os pequenos negócios mais crescem no Brasil hoje.",
      points: [
        "Criação do perfil do zero",
        "Configuração de TikTok Shop",
        "Postagens diárias estratégicas",
        "Lives de venda semanais",
        "Parcerias com micro-influenciadores"
      ]
    },
    {
      icon: <LayoutDashboard className="text-[#0066FF]" />,
      title: "Conteúdo que Ensina e Vende",
      desc: "Resolver problemas reais antes de oferecer a solução perfeita.",
      points: [
        "Guia de tamanhos e economia",
        "Kits ideais para e-commerce",
        "Educativo: '3 erros na embalagem'",
        "Transparência de custos/preços",
        "Bastidores que humanizam a marca"
      ]
    }
  ];

  return (
    <section id="estrategia" className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          title="Nossa estratégia em 3 frentes" 
          subtitle="Focamos no que traz resultado real: visibilidade, educação de mercado e conversão direta."
        />
        <div className="grid md:grid-cols-3 gap-8">
          {strategies.map((s, idx) => (
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
              key={idx}
              className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6">
                {s.icon}
              </div>
              <h3 className="text-xl font-bold mb-4">{s.title}</h3>
              <p className="text-gray-500 mb-6 text-sm leading-relaxed">{s.desc}</p>
              <ul className="space-y-3">
                {s.points.map((p, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                    <CheckCircle2 size={16} className="text-[#0066FF] mt-0.5 shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const WeeklyRoutine = () => {
  const days = [
    { d: "SEG", type: "Reel Educativo", focus: "Educar" },
    { d: "TER", type: "Story: Oferta", focus: "Vender" },
    { d: "QUA", type: "Carrossel: Dica", focus: "Envolver" },
    { d: "QUI", type: "TikTok Live", focus: "Vender" },
    { d: "SEX", type: "Reel: Depoimento", focus: "Confiança" },
    { d: "SÁB", type: "Story: Bastidores", focus: "Conectar" },
    { d: "DOM", type: "Carrossel Evergreen", focus: "Alcance" },
  ];

  return (
    <section id="rotina" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          title="Rotina de Conteúdo Semanal" 
          subtitle="Uma grade estratégica onde cada postagem tem uma função específica no funil de vendas."
        />
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {days.map((day, idx) => (
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              key={idx}
              className="border border-gray-100 rounded-2xl p-4 text-center hover:bg-black group transition-all cursor-default"
            >
              <span className="text-xs font-bold text-gray-400 group-hover:text-gray-500 transition-colors uppercase tracking-widest">{day.d}</span>
              <div className="my-3 font-bold text-sm h-12 flex items-center justify-center group-hover:text-white transition-colors">
                {day.type}
              </div>
              <div className="text-[10px] bg-blue-50 text-[#0066FF] py-1 px-2 rounded-full inline-block font-bold">
                {day.focus}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Timeline = () => {
  const phases = [
    { title: "Fase 1: Preparação", term: "Semanas 1-2", desc: "Reescrita de bio, identidade visual, criação de contas e produção inicial (10 conteúdos)." },
    { title: "Fase 2: Lançamento", term: "Semanas 3-4", desc: "Frequência total, início do alcance orgânico e primeiras interações via WhatsApp." },
    { title: "Fase 3: Lives & Shop", term: "Mês 2", desc: "Início das lives semanais de venda no TikTok e fechamento de pedidos diretos." },
    { title: "Fase 4: Escala", term: "Mês 3+", desc: "Parcerias com criadores, aumento de volume e otimização total da estratégia." },
  ];

  return (
    <section id="cronograma" className="py-24 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          title="Cronograma de Implementação" 
        />
        <div className="relative border-l border-gray-800 ml-4 space-y-12">
          {phases.map((p, idx) => (
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              key={idx}
              className="relative pl-10"
            >
              <div className="absolute left-[-9px] top-1 w-4 h-4 rounded-full bg-[#0066FF] border-4 border-black" />
              <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                <h3 className="text-xl font-bold">{p.title}</h3>
                <span className="text-xs bg-gray-800 text-gray-400 px-3 py-1 rounded-full">{p.term}</span>
              </div>
              <p className="text-gray-400 max-w-xl">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Audience = () => {
  const profiles = [
    { cat: "Confeiteiras", need: "Caixas bonitas que valorizam o produto.", way: "Reels mostrando embalagens de doces." },
    { cat: "E-commerce", need: "Tamanho certo e baixo custo de frete.", way: "Conteúdo educativo sobre envios." },
    { cat: "Pequenas Lojas", need: "Lotes, entrega rápida e confiança.", way: "Variety Reels & Agilidade Wisefy." },
    { cat: "Artesãos", need: "Kits de presente e personalização.", way: "Inspirações e montagem de kits." },
    { cat: "Empresas Locais", need: "Parceiro robusto e sem complicação.", way: "Autoridade em Sertãozinho." },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading 
          title="Para quem vamos vender" 
          subtitle="Mapeamos os perfis com maior potencial de compra para direcionar o conteúdo com precisão."
        />
        <div className="overflow-hidden rounded-3xl border border-gray-100">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-gray-50 text-xs font-bold uppercase text-gray-400 tracking-widest">
                <th className="p-6">Público-Alvo</th>
                <th className="p-6">O que ele precisa</th>
                <th className="p-6">Como chegamos nele</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {profiles.map((p, idx) => (
                <motion.tr 
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: idx * 0.05 }}
                  key={idx}
                  className="hover:bg-blue-50/20 transition-colors"
                >
                  <td className="p-6 font-bold">{p.cat}</td>
                  <td className="p-6 text-sm text-gray-600">{p.need}</td>
                  <td className="p-6 text-sm text-gray-500 italic">{p.way}</td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};


const ResultsProjection = () => {
  const months = [
    { title: "Mês 1: Fundação", focus: "Organização", items: ["Perfil Profissional", "Conteúdo Rodando", "Primeiros Leads WA"] },
    { title: "Mês 2: Crescimento", focus: "Atração", items: ["TikTok em Ascensão", "Início das Lives", "Pedidos TikTok Shop"] },
    { title: "Mês 3: Consolidação", focus: "Vendas", items: ["Marca Forte na Cidade", "Receita Recorrente", "Referência Regional"] },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <SectionHeading title="O que você pode esperar" subtitle="Não prometemos milagres. Prometemos estratégia, consistência e trabalho." />
        <div className="grid md:grid-cols-3 gap-8">
          {months.map((m, idx) => (
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              key={idx}
              className="p-8 rounded-3xl bg-gray-50 hover:bg-white border border-transparent hover:border-[#0066FF]/20 hover:shadow-xl transition-all"
            >
              <div className="text-xs font-bold uppercase tracking-widest text-[#0066FF] mb-2">{m.focus}</div>
              <h3 className="text-2xl font-bold mb-6">{m.title}</h3>
              <ul className="space-y-4">
                {m.items.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-gray-600">
                    <TrendingUp size={16} className="text-[#0066FF]" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Requirements = () => (
  <section className="py-24 bg-white border-t border-gray-100">
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeading title="Como funciona na prática" subtitle="Sintonizamos nossa equipe com a sua rotina para máxima eficiência." />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { icon: <Clock />, title: "Acessos", text: "Gerenciamento compartilhado das redes sociais." },
          { icon: <Video />, title: "Gravações", text: "Sessões quinzenais rápidas na sua própria loja." },
          { icon: <Users />, title: "Presença", text: "Participação humana para gerar conexão real." },
          { icon: <MessageCircle />, title: "Feedback", text: "Aprovação ágil para manter o timing dos posts." },
          { icon: <Zap />, title: "Atendimento", text: "Sua equipe pronta para os novos pedidos que virão." }
        ].map((item, idx) => (
          <div key={idx} className="flex gap-4 p-6 rounded-2xl bg-gray-50 hover:bg-blue-50/50 transition-colors">
            <div className="text-[#0066FF] shrink-0">{item.icon}</div>
            <div>
              <h4 className="font-bold mb-1">{item.title}</h4>
              <p className="text-sm text-gray-500">{item.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const WhyDifferent = () => (
  <section className="py-24 bg-gray-50/50">
    <div className="max-w-7xl mx-auto px-6">
      <SectionHeading 
        title="Por que somos diferentes?" 
        subtitle="A maioria das empresas posta sem estratégia. Nós construímos máquinas de venda."
      />
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { title: "Frequência Real", desc: "Mínimo 5 posts por semana. O algoritmo premia quem aparece, não quem some por meses." },
          { title: "Conteúdo Intencional", desc: "Cada post tem um objetivo: atrair, convencer ou vender. Nada de post pra encher linguiça." },
          { title: "Omnicanalidade", desc: "Instagram e TikTok trabalhando juntos. O mesmo conteúdo alcança dois públicos distintos." },
          { title: "Foco em Vendas", desc: "Não buscamos seguidores por ego. Buscamos clientes que compram caixas de papelão." },
          { title: "Acompanhamento", desc: "Análise semanal do que funciona para dobrar a aposta no que traz lucro." },
        ].map((item, idx) => (
          <div key={idx} className="bg-white p-6 rounded-2xl border border-gray-100 flex flex-col items-start gap-4 shadow-sm">
            <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#0066FF]">
              <Target size={20} />
            </div>
            <div>
              <h4 className="font-bold mb-2">{item.title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-24 bg-black text-white text-center rounded-t-[3rem] mt-24">
    <div className="max-w-3xl mx-auto px-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="inline-block p-4 rounded-3xl bg-white/5 border border-white/10 mb-8"
      >
        <span className="text-xs font-bold tracking-widest text-[#0066FF] uppercase">Próximo Passo</span>
      </motion.div>
      <h2 className="text-4xl md:text-5xl font-bold mb-8 tracking-tight">Vamos começar a vender?</h2>
      <p className="text-gray-400 mb-12 text-lg">
        Temos tudo pronto para iniciar nossa parceria na próxima semana. 
        Cada dia sem conteúdo é um dia invisível para novos clientes.
      </p>
      <button className="bg-[#0066FF] hover:bg-blue-600 text-white font-bold px-10 py-6 rounded-full text-xl transition-all shadow-lg hover:shadow-blue-500/20 active:scale-95">
        Aprovar Proposta Agora
      </button>
      <div className="mt-24 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
        <span>Wisefy © 2026</span>
        <span>Sertãozinho, SP</span>
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 bg-[#0066FF] rounded flex items-center justify-center">
            <span className="text-white text-[10px] font-bold">W</span>
          </div>
          <span>Digital Growth Agency</span>
        </div>
      </div>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-white text-black font-sans selection:bg-[#0066FF] selection:text-white scroll-smooth">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-40 pb-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto relative">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col items-center text-center"
          >
            <div className="flex items-center gap-3 mb-6 bg-blue-50 px-4 py-2 rounded-full">
              <Package className="text-[#0066FF]" size={20} />
              <span className="text-[#0066FF] font-bold text-sm tracking-wide">PAPELÃO & CIA + WISEFY</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black tracking-tighter leading-[0.9] mb-8">
              Transformando seu <span className="text-[#0066FF]">Instagram</span> em canal de vendas.
            </h1>
            <p className="max-w-2xl text-xl text-gray-500 mb-12 leading-relaxed">
              Como vamos elevar o patamar digital da <span className="font-bold text-black italic">Papelão & Cia</span> com estratégia, 
              TikTok Shop e conteúdo de alta performance.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a href="#analise" className="bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-gray-800 transition-all flex items-center gap-2">
                Ver Proposta <ArrowRight size={18} />
              </a>
              <div className="flex items-center gap-2 text-gray-400 text-sm font-medium px-4">
                <Clock size={16} /> Parceria 12 meses
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Analysis />
      <Strategy />
      <WeeklyRoutine />
      <Timeline />
      <WhyDifferent />
      <Audience />
      <ResultsProjection />
      <Requirements />
      
      {/* Seção de Investimento */}
      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-white rounded-[3rem] p-12 md:p-20 shadow-xl border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#0066FF]/5 rounded-bl-[200px] -z-0" />
            
            <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-4 py-1 bg-blue-50 text-[#0066FF] text-xs font-bold rounded-full mb-6 tracking-widest uppercase">
                  Investimento Estratégico
                </div>
                <h2 className="text-4xl md:text-6xl font-black tracking-tighter mb-6">
                  Pronto para <br />o próximo nível?
                </h2>
                <p className="text-gray-500 text-lg mb-8">
                  Um plano completo de 12 meses desenhado para transformar sua presença digital e escalar suas vendas de forma sustentável.
                </p>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600">
                      <Zap size={20} />
                    </div>
                    <span className="font-medium">Pagamento via Pix (Desconto à vista)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-[#0066FF]">
                      <LayoutDashboard size={20} />
                    </div>
                    <span className="font-medium">Cartão de Crédito em até 12x</span>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Opção Pix */}
                <div className="bg-black text-white p-8 rounded-[2.5rem] flex flex-col items-center text-center shadow-2xl relative overflow-hidden group">
                  <div className="absolute top-0 right-0 px-4 py-1 bg-green-500 text-white text-[10px] font-black uppercase tracking-widest rounded-bl-xl">
                    Melhor Preço
                  </div>
                  <span className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-4">Pagamento via Pix</span>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-xl font-bold text-green-500">R$</span>
                    <span className="text-6xl font-black tracking-tighter">1.000</span>
                    <span className="text-lg font-bold text-gray-400">,00</span>
                  </div>
                  <p className="text-gray-500 text-[10px] mb-6 uppercase tracking-tighter">Valor Único com Desconto à Vista</p>
                  
                  <div className="w-full h-px bg-white/10 mb-6" />
                  
                  <ul className="space-y-3 text-left w-full">
                    <li className="flex items-center gap-2 text-xs text-gray-300">
                      <CheckCircle2 size={14} className="text-green-500" /> Sem taxas de processamento
                    </li>
                    <li className="flex items-center gap-2 text-xs text-gray-300">
                      <CheckCircle2 size={14} className="text-green-500" /> Liberação imediata do setup
                    </li>
                  </ul>
                </div>

                {/* Opção Cartão */}
                <div className="bg-white text-black p-8 rounded-[2.5rem] flex flex-col items-center text-center border border-gray-100 shadow-xl relative overflow-hidden">
                  <span className="text-gray-400 text-xs font-bold uppercase tracking-widest mb-4">Cartão de Crédito</span>
                  <div className="flex items-baseline gap-1 mb-1">
                    <span className="text-xl font-bold text-gray-400">R$</span>
                    <span className="text-5xl font-black tracking-tighter">1.500</span>
                    <span className="text-lg font-bold text-gray-400">,00</span>
                  </div>
                  <p className="text-gray-400 text-[10px] mb-6 uppercase tracking-tighter">Valor com taxas do provedor de pagamento</p>
                  
                  <div className="w-full h-px bg-gray-100 mb-6" />
                  
                  <ul className="space-y-3 text-left w-full">
                    <li className="flex items-center gap-2 text-xs text-gray-500">
                      <CheckCircle2 size={14} className="text-[#0066FF]" /> Pagamento via checkout seguro
                    </li>
                    <li className="flex items-center gap-2 text-xs text-gray-500">
                      <CheckCircle2 size={14} className="text-[#0066FF]" /> Processamento automatizado
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Background Accents */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 opacity-30">
        <div className="absolute top-[10%] right-[-5%] w-[40%] h-[40%] bg-blue-100 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] left-[-5%] w-[30%] h-[30%] bg-gray-100 rounded-full blur-[100px]" />
      </div>
    </div>
  );
}
