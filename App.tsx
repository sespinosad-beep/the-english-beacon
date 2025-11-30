
import React from 'react';
import { features, testimonials, faqData } from './constants';
import type { Feature, Testimonial, Faq } from './types';
import { LOGO_BASE64 } from './constants';

const FeatureCard: React.FC<{ feature: Feature }> = ({ feature }) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center h-full">
    <div className="bg-[#1a2a4c] text-white rounded-full p-3 mb-4 inline-block">
      {feature.icon}
    </div>
    <h3 className="text-lg font-semibold text-[#1a2a4c] mb-2">{feature.title}</h3>
    <p className="text-gray-600 text-sm flex-grow">{feature.description}</p>
  </div>
);

const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
  <div className="bg-white p-8 rounded-lg shadow-lg text-center">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-[#c8102e] mx-auto mb-4" fill="currentColor" viewBox="0 0 16 16">
      <path d="M7.001 3a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V3zm-4 3h2v-2H3v2zm10-3a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v4a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V3zm-4 3h2v-2h-2v2z"/>
    </svg>
    <p className="text-gray-600 italic mb-6">"{testimonial.quote}"</p>
    <p className="font-bold text-lg text-[#1a2a4c]">{testimonial.name}</p>
    <p className="text-sm text-gray-500">{testimonial.status}</p>
  </div>
);

const FaqItem: React.FC<{ faq: Faq }> = ({ faq }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="border-b border-gray-200 py-5">
      <button
        className="w-full flex justify-between items-center text-left text-lg font-semibold text-[#1a2a4c] hover:text-[#c8102e] transition-colors"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <span>{faq.question}</span>
        <svg className={`w-6 h-6 transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
      </button>
      <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-96 mt-4' : 'max-h-0'}`}>
        <p className="text-gray-700 leading-relaxed">
          {faq.answer}
        </p>
      </div>
    </div>
  );
};


const App: React.FC = () => {
   const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    alert('Gracias por tu consulta. Nos pondremos en contacto contigo pronto.');
  };

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800">
      <main>
        {/* Hero Section */}
        <section className="bg-white text-center pt-12 pb-20 px-6">
          <div className="container mx-auto">
             <img src={LOGO_BASE64} alt="The English Beacon Logo" className="h-48 mx-auto mb-8" />
            <h1 className="text-4xl md:text-5xl font-bold text-[#1a2a4c] mb-4 leading-tight">
              Consigue tu Título Aptis General en solo 1 Mes
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Nuestro curso intensivo está diseñado para tu éxito. Con grupos reducidos y atención personalizada, te preparamos para superar el examen.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
               <a href="#pricing" className="bg-[#c8102e] text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-red-700 transition-colors duration-300 shadow-lg">
                ¡Inscríbete Ahora!
              </a>
               <p className="font-semibold bg-yellow-200 text-yellow-800 px-4 py-2 rounded-md">¡Solo 10 plazas disponibles!</p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-20 px-6 bg-gray-100">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#1a2a4c] mb-3">¿Qué incluye el curso?</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Todo lo que necesitas para prepararte y superar el examen Aptis General con confianza.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <FeatureCard key={index} feature={feature} />
              ))}
            </div>
          </div>
        </section>

         {/* Testimonials Section */}
        <section id="testimonials" className="py-20 px-6 bg-white">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#1a2a4c] mb-3">Lo que dicen nuestros alumnos</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">Historias de éxito de quienes confiaron en nuestro método.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} />
              ))}
            </div>
          </div>
        </section>

        {/* Pricing & Details Section */}
        <section id="pricing" className="py-20 px-6 bg-gray-100">
          <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-12">
            <div className="bg-[#1a2a4c] text-white p-10 rounded-xl shadow-2xl text-center max-w-md w-full order-2 lg:order-1">
              <h3 className="text-2xl font-bold mb-2">Curso Intensivo Aptis General</h3>
              <p className="text-6xl font-bold mb-4">200€</p>
              <p className="text-lg text-gray-300 mb-6">Curso completo de 1 mes</p>
              <ul className="text-left space-y-3 mb-8 text-gray-200">
                <li className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-400" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Grupos reducidos</li>
                <li className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-400" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Flexibilidad horaria</li>
                <li className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-400" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Soporte continuo</li>
                <li className="flex items-center"><svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-400" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Material exclusivo</li>
              </ul>
              <a href="#contact" className="bg-white text-[#1a2a4c] font-bold py-3 px-8 rounded-lg text-lg hover:bg-gray-200 transition-colors duration-300 w-full block">
                Reservar Mi Plaza
              </a>
            </div>
            
            {/* Important Note */}
            <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-800 p-6 rounded-r-lg max-w-lg w-full order-1 lg:order-2">
              <h4 className="text-xl font-bold mb-2">Nota Importante</h4>
              <p>Para que este curso sea fructífero y se pueda conseguir el título se requiere una base estándar de inglés. Nuestro método intensivo está diseñado para potenciar tus habilidades, no para construirlas desde cero.</p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 px-6 bg-white">
          <div className="container mx-auto max-w-3xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-[#1a2a4c] mb-3">Preguntas Frecuentes</h2>
              <p className="text-gray-600">Resolvemos tus dudas para que te inscribas con total confianza.</p>
            </div>
            <div>
              {faqData.map((faq, index) => (
                <FaqItem key={index} faq={faq} />
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-6 bg-gray-100">
          <div className="container mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold text-[#1a2a4c] mb-3">¿Todavía tienes dudas?</h2>
            <p className="text-gray-600 mb-8 max-w-xl mx-auto">Rellena el formulario y nuestro equipo se pondrá en contacto contigo para resolver cualquier pregunta sobre el curso Aptis General.</p>
            <div className="bg-white p-8 rounded-xl shadow-lg text-left">
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">Nombre Completo</label>
                  <input type="text" id="name" name="name" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c8102e] focus:border-transparent transition" placeholder="Tu nombre" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">Correo Electrónico</label>
                  <input type="email" id="email" name="email" className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c8102e] focus:border-transparent transition" placeholder="tu@email.com" required />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">Mensaje</label>
                  <textarea id="message" name="message" rows={5} className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#c8102e] focus:border-transparent transition" placeholder="Escribe tu consulta aquí..." required></textarea>
                </div>
                <button type="submit" className="w-full bg-[#c8102e] text-white font-bold py-3 px-8 rounded-lg text-lg hover:bg-red-700 transition-colors duration-300 shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500">
                  Enviar Consulta
                </button>
              </form>
            </div>
          </div>
        </section>

      </main>

      <footer className="bg-[#1a2a4c] text-white py-6">
        <div className="container mx-auto text-center px-6">
          <p>&copy; {new Date().getFullYear()} The English Beacon. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
