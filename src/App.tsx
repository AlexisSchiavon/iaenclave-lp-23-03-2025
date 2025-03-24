import React, { useState } from 'react';
import {
  ChevronDown,
  Code2,
  Brain,
  Bot,
  CircleDot,
  ArrowRight,
  PlayCircle,
  BrainCircuit,
  Slack,
  FileSpreadsheet,
  Database,
  FileText,
  Github,
  Mail,
  Calendar,
  MessageSquare,
  Clock,
  BarChart3,
  MessageCircle,
  Zap,
  Shield,
  Building2,
  Stethoscope,
  Store,
  Factory,
  BrainCog,
} from 'lucide-react';

// Benefit icon component
function BenefitIcon({ icon: Icon, text }: { icon: React.ElementType; text: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-16 h-16 bg-[#1e1e1e] rounded-full flex items-center justify-center mb-3">
        <Icon className="w-8 h-8 text-[#2563EB]" />
      </div>
      <span className="text-sm font-bold text-gray-300 text-center">{text}</span>
    </div>
  );
}

// Integration logos component
function IntegrationLogo({ icon: Icon, name }: { icon: React.ElementType; name: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-[60px] h-[60px] bg-[#1e1e1e] rounded-full border border-[#2a2a2a] flex items-center justify-center transform transition-all duration-300 hover:scale-110 hover:border-blue-500">
        <Icon className="w-[36px] h-[36px] text-gray-300" />
      </div>
      <span className="mt-2 text-xs text-gray-400">{name}</span>
    </div>
  );
}

// Business sector icon component
function SectorIcon({ icon: Icon, label }: { icon: React.ElementType; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="w-12 h-12 bg-[#1e1e1e] rounded-full flex items-center justify-center mb-2 border border-[#2a2a2a]">
        <Icon className="w-6 h-6 text-blue-500" />
      </div>
      <span className="text-xs text-gray-400">{label}</span>
    </div>
  );
}

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border border-[#2a2a2a] rounded-lg mb-4">
      <button
        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-[#1e1e1e] rounded-lg transition-colors"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium">{question}</span>
        <ChevronDown
          className={`transform transition-transform ${isOpen ? 'rotate-180' : ''
            }`}
        />
      </button>
      {isOpen && (
        <div className="px-6 py-4 border-t border-[#2a2a2a]">
          <p className="text-gray-300">{answer}</p>
        </div>
      )}
    </div>
  );
}

const faqData = [
  {
    question: '¿Qué es un agente de inteligencia artificial?',
    answer:
      'Un agente de inteligencia artificial es un sistema autónomo que puede percibir su entorno, tomar decisiones y actuar en consecuencia para lograr objetivos específicos. En el contexto empresarial, es como tener un asistente virtual que puede trabajar 24/7, procesando información, interactuando con clientes y ejecutando tareas sin necesidad de supervisión constante.',
  },
  {
    question: '¿Cómo funcionan los agentes de IA en el entorno empresarial?',
    answer:
      'Los agentes de IA funcionan integrándose con tus sistemas existentes para automatizar procesos y mejorar la toma de decisiones. Utilizan algoritmos avanzados para analizar datos, interactuar con clientes a través de chat o email, gestionar consultas frecuentes y ejecutar tareas repetitivas. A diferencia de la automatización tradicional, pueden adaptarse a situaciones nuevas y aprender de cada interacción.',
  },
  {
    question: '¿Qué tipos de tareas pueden realizar los agentes de IA?',
    answer:
      'Los agentes de IA pueden realizar una amplia variedad de tareas como atención al cliente 24/7, búsqueda y análisis de información en documentos extensos, generación de reportes automáticos, traducción de contenidos, coordinación de agendas, monitoreo de sistemas, detección de patrones en datos de ventas, y personalización de experiencias para cada cliente. La versatilidad es su punto fuerte.',
  },
  {
    question: '¿Qué es RAG (Retrieval Augmented Generation)?',
    answer:
      'RAG o Generación Aumentada por Recuperación es una tecnología que combina la capacidad de buscar información específica en tus documentos y bases de datos con la habilidad de generar respuestas coherentes en lenguaje natural. Es como tener un experto que conoce toda la documentación de tu empresa y puede responder preguntas con precisión usando exactamente tu información.',
  },
  {
    question: '¿Qué ventajas ofrece RAG frente a otros sistemas de búsqueda?',
    answer:
      'RAG supera a los buscadores tradicionales porque no solo encuentra información sino que la comprende en contexto. Ofrece respuestas completas en lugar de simples resultados, entiende preguntas en lenguaje conversacional, conecta información de múltiples documentos, y elimina la necesidad de revisar manualmente los resultados. Además, aprende continuamente para mejorar su precisión.',
  },
  {
    question: '¿Son seguras estas soluciones?',
    answer:
      'Absolutamente. Nuestras soluciones implementan múltiples capas de seguridad, incluido el cifrado de datos, autenticación de dos factores y permisos granulares de acceso. Además, la información de tu empresa permanece protegida dentro de tu entorno, con opciones para despliegue privado que aseguran que tus datos confidenciales nunca salgan de tu control.',
  },
  {
    question: '¿Cuáles son los casos de uso más comunes de los agentes de IA?',
    answer:
      'Los casos de uso más populares incluyen asistentes virtuales para atención al cliente, sistemas de recomendación personalizada para ventas, procesamiento automático de documentos (como facturas o contratos), análisis predictivo para anticipar tendencias del mercado, y chatbots especializados que responden consultas usando la documentación interna de la empresa. Cada solución se adapta a las necesidades específicas de tu negocio.',
  },
  {
    question: '¿Cómo me pueden ayudar estas automatizaciones en mi negocio?',
    answer:
      'Estas automatizaciones pueden transformar tu negocio reduciendo costos operativos hasta en un 40%, eliminando errores humanos en tareas repetitivas, acelerando la respuesta a clientes (de horas a segundos), liberando a tu equipo para tareas de mayor valor, y ofreciendo escalabilidad instantánea para manejar picos de demanda sin necesidad de contratar personal adicional. El resultado: mayor eficiencia, satisfacción del cliente y ventaja competitiva.',
  },
];

function App() {
  return (
    <div className="min-h-screen bg-[#121212] text-white">
      {/* Header */}
      <header className="fixed w-full bg-[#121212]/80 backdrop-blur-sm z-50">
        <div className="container mx-auto px-4 py-4 flex items-center">
          <div className="flex items-center gap-2">
            <BrainCircuit className="w-8 h-8 text-blue-500" />
            <span className="text-xl font-bold">IA en clave</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <h1 className="text-4xl md:text-6xl font-bold text-center mb-8 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
            Potencia tu empresa con soluciones personalizadas de IA
          </h1>

          <div className="flex justify-center items-center gap-2 mb-8">
            <PlayCircle className="text-blue-500" />
            <p className="text-gray-300">Ve el video antes de agendar</p>
          </div>

          <div className="bg-[#1e1e1e] rounded-xl p-2 mb-12 overflow-hidden">
            <div className="aspect-video w-full">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/_V_6OPZH4zM"
                title="Video Explicativo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen>
              </iframe>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <a
              href="https://calendly.com/alexis-schiavon/consultoria-gratuita-con-ia-en-clave"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
            >
              <span>Vi el video y quiero Agendar Llamada</span>
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
            >
              <span>Vi el video y quiero contactar contigo</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-[#1e1e1e]">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Todo lo que necesitas para potenciar tu negocio
          </h2>
          <h3 className="text-xl text-center text-gray-300 mb-12">
            Integración en tu propio sistema empresarial
          </h3>

          {/* Benefits Icons */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 max-w-4xl mx-auto mb-12">
            <BenefitIcon icon={Clock} text="Disponible 24/7" />
            <BenefitIcon icon={BarChart3} text="Análisis en tiempo real" />
            <BenefitIcon icon={MessageCircle} text="Respuesta instantánea" />
            <BenefitIcon icon={Zap} text="Alta eficiencia" />
            <BenefitIcon icon={Shield} text="Máxima seguridad" />
          </div>

          <div className="max-w-3xl mx-auto space-y-6 text-center">
            <p className="text-gray-300">
              Potencia tu empresa con Inteligencia Artificial. Nuestros sistemas
              avanzados te permiten interactuar automáticamente con tus clientes,
              de forma autónoma, las 24hs. Todo esto con Agentes de Inteligencia
              Artificial.
            </p>
            <p className="text-gray-300">
              También podrás chatear con bases de datos y documentos no
              estructurados para obtener respuestas precisas en lenguaje natural.
            </p>
            <a
              href="https://calendly.com/alexis-schiavon/consultoria-gratuita-con-ia-en-clave"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg transition-colors"
            >
              Agendar Llamada
            </a>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="flex flex-col justify-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                La IA es el nuevo estándar moderno.
              </h2>
              <p className="text-gray-300">
                Implementamos las últimas tecnologías de IA para transformar tu
                negocio y mantenerlo a la vanguardia de la innovación.
              </p>
            </div>
            <div className="bg-[#1e1e1e] rounded-xl p-6">
              <pre className="text-sm text-gray-300 overflow-x-auto">
                <code>{`from langchain.agents import Agent, Tool
from langchain.memory import ConversationBufferMemory
from langchain.chat_models import ChatOpenAI

# Configurar el agente de IA
agent = Agent(
    llm=ChatOpenAI(),
    memory=ConversationBufferMemory(),
    tools=[
        Tool.from_function(
            func=search_docs,
            name="Búsqueda",
            description="Buscar en documentos"
        ),
        Tool.from_function(
            func=process_data,
            name="Análisis",
            description="Analizar datos"
        )
    ]
)

# Ejecutar el agente
response = agent.run(
    "Analiza las ventas del último trimestre"
)`}</code>
              </pre>
            </div>
          </div>

          {/* Integration Logos */}
          <div className="text-center">
            <div className="flex flex-wrap justify-center gap-8 mb-4">
              <IntegrationLogo icon={Slack} name="Slack" />
              <IntegrationLogo icon={FileSpreadsheet} name="Google Sheets" />
              <IntegrationLogo icon={Database} name="Airtable" />
              <IntegrationLogo icon={FileText} name="Notion" />
              <IntegrationLogo icon={Github} name="GitHub" />
              <IntegrationLogo icon={Mail} name="Gmail" />
              <IntegrationLogo icon={Calendar} name="Google Calendar" />
              <IntegrationLogo icon={MessageSquare} name="Discord" />
            </div>
            <p className="text-sm text-gray-400">Integraciones disponibles</p>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 px-4 bg-[#1e1e1e]">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            Mejora la productividad de tu equipo
          </h2>
          <p className="text-xl text-center text-gray-300 mb-12 max-w-3xl mx-auto">
            Optimiza tu flujo de trabajo con nuestras soluciones de IA,
            ahorrándote tiempo, dinero y potenciales problemas.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-[#121212] rounded-xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <Brain className="w-8 h-8 text-blue-500" />
                <h3 className="text-xl font-semibold">
                  Adaptado a cualquier ambiente empresarial
                </h3>
              </div>
              <p className="text-gray-400 mb-6">
                Nuestra solución se integra perfectamente con cualquier sector empresarial,
                optimizando procesos específicos y adaptándose a tus necesidades únicas.
              </p>

              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-[#1e1e1e] rounded-full flex items-center justify-center border-2 border-blue-500 mb-6">
                  <BrainCog className="w-14 h-14 text-blue-500" />
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
                  <SectorIcon icon={Building2} label="Servicios" />
                  <SectorIcon icon={Stethoscope} label="Salud" />
                  <SectorIcon icon={Store} label="Retail" />
                  <SectorIcon icon={Factory} label="Industria" />
                </div>
              </div>
            </div>

            <div className="bg-[#121212] rounded-xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <Bot className="w-8 h-8 text-purple-500" />
                <h3 className="text-xl font-semibold">
                  Automatiza tu trabajo fácilmente
                </h3>
              </div>
              <pre className="text-sm text-gray-300 overflow-x-auto">
                <code>{`async function processDocument(doc) {
  const summary = await ai.summarize(doc);
  const entities = await ai.extractEntities(doc);
  const sentiment = await ai.analyzeSentiment(doc);
  
  return {
    summary,
    entities,
    sentiment,
    processed: true
  };
}`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Preguntas frecuentes
          </h2>

          <div className="mb-8">
            <a
              href="https://calendly.com/alexis-schiavon/consultoria-gratuita-con-ia-en-clave"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg flex items-center justify-center gap-2 transition-colors"
            >
              <span>Agendar Llamada</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>

          <div className="space-y-4">
            {faqData.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;