
import React from 'react';
import type { Feature, Testimonial, Faq } from './types';

export const LOGO_BASE64 = `data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAJYAqADASIAAhEBAxEB/8QAGwABAAMBAQEBAAAAAAAAAAAAAAECAwQFBgf/xAA4EAEAAQIEBQMCBAUEAgMAAAAAAQIRAwQSITFRBUFhcSKRodETFDJCUoGxweHwBiNiM/FCgpKi/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECAwT/xAAhEQEBAAIBBQEBAQEAAAAAAAAAAQIRAxIhMQRBEyJRYf/aAAwDAQACEQMRAD8A+zAYdRgGgBqMA0AwGoA0Aw0wBoAaYDQDDTAaAYaYA0Aw0wBoBhpgNMANMBgMA0AwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAwDAAw-gAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/wAARCAJYAqADAREAAhEBAxEB/8QAGwABAQACAwEBAAAAAAAAAAAAAAECAwQFBgf/xAAzEAABAgQEBQUBAQACAgIDAAAAAQIRAyESMUEEUSJhcYEFMpGhsfDxQsHR4RQjQnIGU//aAAgBAQABPwD4wJASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASASAS-gADhBAgAAAgMBAQAAAAAAAgMBAgAB/9oACAEBAAEFAmAJASASASA//2Q==`;

export const features: Feature[] = [
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v11.494m-9-5.747l9 5.747 9-5.747M12 6.253L3 11.998l9 5.747" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v11.494m-9-5.747l9 5.747 9-5.747M12 6.253L3 11.998l9 5.747" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 11.998l9 5.747L21 12l-9-5.747-9 5.747z" />
      </svg>
    ),
    title: 'Material en PDF',
    description: 'Recibirás el libro de gramática y Mejora de Writings en formato digital.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Vídeos de Gramática',
    description: 'Acceso a explicaciones de gramática en vídeo para que los veas a tu propio ritmo y con total flexibilidad.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
    title: '3 Horas Interactivas Semanales',
    description: 'Elige tu horario de Lunes a Jueves (10-13h) para tus clases interactivas en grupos reducidos. Solo mañanas.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    title: 'Llamada Semanal de Dudas',
    description: 'Todos los Jueves de 11 a 12h, una llamada en directo (vía Google Meet/Zoom) para solucionar todas tus dudas.',
  },
  {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.196-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.783-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
      </svg>
    ),
    title: 'Masterclasses Grabadas',
    description: 'Cada semana, accede a una nueva masterclass grabada con trucos y estrategias para cada parte del examen.',
  },
    {
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Exámenes Reales y Correcciones',
    description: '3 exámenes autocorregibles en Google Forms. El profesor corregirá personalmente tus Writings y Speaking.',
  },
];


export const testimonials: Testimonial[] = [
  {
    quote: 'El curso superó mis expectativas. Las explicaciones son clarísimas y el material es muy completo. ¡Conseguí mi título Aptis a la primera gracias a ellos!',
    name: 'Laura García',
    status: 'Alumna Satisfecha',
  },
  {
    quote: 'Lo que más valoro es el trato personalizado. El profesor corrige los writings al detalle y las llamadas semanales resuelven todas las dudas. 100% recomendable.',
    name: 'Carlos Martínez',
    status: 'Alumno Satisfecho',
  },
  {
    quote: 'Gracias a las masterclasses y los trucos que te dan, fui al examen con mucha más seguridad. El método es realmente efectivo y se adapta a tus horarios.',
    name: 'Sofía Rodríguez',
    status: 'Alumna Satisfecha',
  },
];

export const faqData: Faq[] = [
  {
    question: '¿Cuál es la duración total del curso?',
    answer: 'El curso tiene una duración intensiva de 1 mes, diseñado para prepararte de manera completa y eficiente para el examen Aptis General.',
  },
  {
    question: '¿Qué materiales didácticos están incluidos?',
    answer: 'El curso incluye el libro de Gramática y otro sobre mejorar los Writings" en formato PDF, acceso a vídeos explicativos de gramática, masterclasses grabadas semanales y 3 exámenes reales.',
  },
  {
    question: '¿Cómo son los horarios de las clases?',
    answer: 'Ofrecemos 3 horas interactivas a la semana. Puedes elegir tu hora de Lunes a Jueves, en horario de mañana (de 10:00 a 13:00). Además, hay una llamada en directo los Jueves de 11:00 a 12:00 para resolver dudas.',
  },
  {
    question: '¿Quién corrige las partes de Writing y Speaking?',
    answer: 'El profesor se encarga personalmente de corregir tus Writings y la parte de Speaking, ofreciendo comentarios detallados y consejos de mejora para que avances rápidamente.',
  },
  {
    question: '¿Necesito tener un nivel de inglés específico para apuntarme?',
    answer: 'Sí, es importante. Para que el curso sea fructífero y puedas conseguir el título, se requiere una base estándar de inglés. El curso está diseñado para potenciar y certificar tus conocimientos, no para aprender desde cero.',
  },
];
