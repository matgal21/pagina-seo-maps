import React, { useState } from 'react';
import { MapPin, Search, TrendingUp, Users, Building2, Star, ArrowRight, CheckCircle2, Globe, X } from 'lucide-react';

function App() {
  const [language, setLanguage] = useState('es');
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    city: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const content = {
    es: {
      nav: {
        services: 'Servicios',
        benefits: 'Beneficios',
        contact: 'Contactar'
      },
      hero: {
        title: 'Domina Google Maps y Haz Crecer tu Negocio',
        subtitle: 'Maximiza tu visibilidad local y atrae más clientes posicionando tu negocio en los primeros resultados de Google Maps.',
        cta: 'Empieza Ahora'
      },
      benefits: {
        title: '¿Por qué es importante estar bien posicionado?',
        items: [
          {
            title: 'Mayor Visibilidad Local',
            description: 'El 76% de las búsquedas locales resultan en una visita al negocio dentro de las 24 horas.'
          },
          {
            title: 'Más Clientes Potenciales',
            description: 'Aumenta el tráfico de clientes cualificados que buscan específicamente tus servicios.'
          },
          {
            title: 'Mejor Reputación',
            description: 'Gestiona y mejora tu presencia online con reseñas positivas y contenido actualizado.'
          }
        ]
      },
      services: {
        title: 'Nuestros Servicios',
        items: [
          {
            title: 'Optimización de Perfil GMB',
            description: 'Optimizamos completamente tu perfil de Google My Business para máxima visibilidad.'
          },
          {
            title: 'Gestión de Reseñas',
            description: 'Estrategias para obtener y gestionar reseñas positivas de clientes satisfechos.'
          },
          {
            title: 'SEO Local Avanzado',
            description: 'Posicionamiento local específico para tu área de servicio y keywords relevantes.'
          }
        ]
      },
      contact: {
        title: '¿Listo para mejorar tu presencia en Google Maps?',
        subtitle: 'Contacta con nosotros hoy y descubre cómo podemos ayudarte a destacar en tu mercado local.',
        cta: 'Solicitar Consulta Gratuita',
        form: {
          title: 'Solicitar Consulta Gratuita',
          name: 'Nombre',
          email: 'Correo electrónico',
          city: 'Ciudad',
          phone: 'Teléfono',
          submit: 'Enviar solicitud',
          success: '¡Gracias! Nos pondremos en contacto contigo pronto.',
          error: 'Hubo un error al enviar el formulario. Por favor, intenta nuevamente.'
        }
      },
      footer: {
        rights: 'Todos los derechos reservados.'
      }
    },
    en: {
      nav: {
        services: 'Services',
        benefits: 'Benefits',
        contact: 'Contact'
      },
      hero: {
        title: 'Master Google Maps and Grow Your Business',
        subtitle: 'Maximize your local visibility and attract more customers by positioning your business at the top of Google Maps results.',
        cta: 'Get Started'
      },
      benefits: {
        title: 'Why is good positioning important?',
        items: [
          {
            title: 'Greater Local Visibility',
            description: '76% of local searches result in a business visit within 24 hours.'
          },
          {
            title: 'More Potential Customers',
            description: 'Increase qualified traffic from customers specifically looking for your services.'
          },
          {
            title: 'Better Reputation',
            description: 'Manage and improve your online presence with positive reviews and updated content.'
          }
        ]
      },
      services: {
        title: 'Our Services',
        items: [
          {
            title: 'GMB Profile Optimization',
            description: 'We fully optimize your Google My Business profile for maximum visibility.'
          },
          {
            title: 'Review Management',
            description: 'Strategies to obtain and manage positive reviews from satisfied customers.'
          },
          {
            title: 'Advanced Local SEO',
            description: 'Local positioning specific to your service area and relevant keywords.'
          }
        ]
      },
      contact: {
        title: 'Ready to improve your Google Maps presence?',
        subtitle: 'Contact us today and discover how we can help you stand out in your local market.',
        cta: 'Request Free Consultation',
        form: {
          title: 'Request Free Consultation',
          name: 'Name',
          email: 'Email',
          city: 'City',
          phone: 'Phone',
          submit: 'Submit request',
          success: 'Thank you! We will contact you soon.',
          error: 'There was an error submitting the form. Please try again.'
        }
      },
      footer: {
        rights: 'All rights reserved.'
      }
    }
  };

  const t = content[language];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      const response = await fetch('https://formsubmit.co/ajax/migotusa@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          _subject: `Nueva consulta de ${formData.name}`,
          _template: 'table'
        })
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', city: '', phone: '' });
        setTimeout(() => {
          setShowModal(false);
          setSubmitStatus('idle');
        }, 3000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    }

    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <header className="bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=2000&q=80')] opacity-10 bg-cover bg-center"></div>
        <nav className="container mx-auto px-6 py-6 flex justify-between items-center relative z-10">
          <div className="flex items-center space-x-2">
            <MapPin className="h-7 w-7" />
            <span className="text-2xl font-bold tracking-tight">MapSEO Pro</span>
          </div>
          <div className="flex items-center space-x-8">
            <button
              onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
              className="flex items-center space-x-1 bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-colors duration-200"
            >
              <Globe className="h-4 w-4" />
              <span>{language === 'es' ? 'EN' : 'ES'}</span>
            </button>
            <a href="#servicios" className="hover:text-blue-200 transition-colors duration-200">{t.nav.services}</a>
            <a href="#beneficios" className="hover:text-blue-200 transition-colors duration-200">{t.nav.benefits}</a>
            <a href="#contacto" className="bg-white text-blue-900 px-6 py-2.5 rounded-full font-semibold hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl">
              {t.nav.contact}
            </a>
          </div>
        </nav>
        
        <div className="container mx-auto px-6 py-24 relative z-10">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="md:w-1/2">
              <h1 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
                {t.hero.title}
              </h1>
              <p className="text-xl mb-10 text-blue-100 leading-relaxed">
                {t.hero.subtitle}
              </p>
              <a href="#contacto" className="inline-flex items-center bg-white text-blue-900 px-8 py-4 rounded-full font-semibold hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl">
                {t.hero.cta} <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
            <div className="md:w-1/2">
              <img 
                src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=800&q=80" 
                alt="Google Maps Business"
                className="rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </header>

      {/* Benefits Section */}
      <section id="beneficios" className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-20 text-gray-900">{t.benefits.title}</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {t.benefits.items.map((benefit, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100">
                <div className="bg-blue-100 p-4 rounded-2xl w-fit mb-6">
                  {index === 0 && <Users className="h-8 w-8 text-blue-700" />}
                  {index === 1 && <TrendingUp className="h-8 w-8 text-blue-700" />}
                  {index === 2 && <Star className="h-8 w-8 text-blue-700" />}
                </div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicios" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-20 text-gray-900">{t.services.title}</h2>
          <div className="space-y-8">
            {t.services.items.map((service, index) => (
              <div key={index} className="flex items-start space-x-6 bg-gray-50 p-8 rounded-2xl hover:bg-gray-100 transition-colors duration-300">
                <CheckCircle2 className="h-8 w-8 text-blue-700 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-2xl font-semibold mb-3 text-gray-900">{service.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacto" className="py-24 bg-gradient-to-br from-blue-700 via-blue-800 to-blue-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=2000&q=80')] opacity-10 bg-cover bg-center"></div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl font-bold mb-8">{t.contact.title}</h2>
          <p className="text-2xl mb-12 max-w-3xl mx-auto text-blue-100">
            {t.contact.subtitle}
          </p>
          <button 
            onClick={() => setShowModal(true)}
            className="bg-white text-blue-900 px-10 py-5 rounded-full text-xl font-semibold hover:bg-blue-50 transition-all duration-200 shadow-lg hover:shadow-xl"
          >
            {t.contact.cta}
          </button>
        </div>
      </section>

      {/* Contact Form Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-md w-full p-8 relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors duration-200"
            >
              <X className="h-6 w-6" />
            </button>
            
            <h3 className="text-2xl font-bold mb-8 text-gray-900">
              {t.contact.form.title}
            </h3>

            {submitStatus === 'success' ? (
              <div className="text-center py-12">
                <CheckCircle2 className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <p className="text-green-600 text-lg">{t.contact.form.success}</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.contact.form.name}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.contact.form.email}
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.contact.form.city}
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.city}
                    onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    {t.contact.form.phone}
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                </div>

                {submitStatus === 'error' && (
                  <p className="text-red-600 text-sm">{t.contact.form.error}</p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-700 text-white py-4 rounded-xl font-semibold hover:bg-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 text-lg"
                >
                  {isSubmitting ? '...' : t.contact.form.submit}
                </button>
              </form>
            )}
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-3 mb-6 md:mb-0">
              <MapPin className="h-8 w-8" />
              <span className="text-2xl font-bold">MapSEO Pro</span>
            </div>
            <div className="text-gray-400">
              © 2024 MapSEO Pro. {t.footer.rights}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;