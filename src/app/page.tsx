
"use client";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { How } from "@/components/How";
import { Aboutus } from "@/components/Aboutus";
import { Services } from "@/components/Services";
import { BeforeAndAfter } from "@/components/BeforeAndAfter";
import { Faq } from "@/components/Faq";
import { BookAppointment } from "@/components/BookAppointment";
import { Footer } from "@/components/Footer";
export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
<Hero headline="Ventas Online en 24 Horas" subheadline="Digitaliza tu negocio rápido y fácil con soporte 24/7 para que siempre estés vendiendo." cta1="Comienza Ahora" />
<How step1Title="Contacta WebGo" step1Desc="Cuéntanos tu negocio y objetivos." step2Title="Creamos tu Web" step2Desc="Desarrollamos ventas digitales en 24 horas." step3Title="Apoyo Continuo" step3Desc="Soporte 24/7 para asegurar éxito." />
<Aboutus headline="WebGo: Digitaliza tus ventas hoy" subheadline="WebGo crea sitios web que convierten, gestionamos todo por ti, sin complicaciones." beneficiotitulo1="Gestión Total" beneficio1="Nos encargamos de todo por ti." beneficiotitulo2="Ventas Online" beneficio2="Implementamos estrategias que generan ventas." />
<Services heading="Impulsa Tus Ventas Digitales" description="Rapidez, compromiso, innovación: tu web lista en 24 horas." services={[{"name":"Diseño Web Express","icon":"flash","description":"Tu web en menos de 24 horas."},{"name":"Soporte 24/7","icon":"headset","description":"Asistencia continua para tranquilidad total."},{"name":"Optimización SEO","icon":"search","description":"Atrae más clientes con SEO efectivo."},{"name":"Integración eCommerce","icon":"cart","description":"Transforma recomendaciones en ventas online."},{"name":"Gestión de Contenido","icon":"pencil","description":"Publica contenido que convierte."},{"name":"Análisis de Tráfico","icon":"chart-line","description":"Entiende y mejora tu audiencia web."}]} />
<BeforeAndAfter subheadline="Transformamos ideas en realidades digitales de clase mundial." />
<Faq faqs={[{"pregunta":"¿Cómo puede WebGo ayudarme a digitalizar mis ventas rápidamente?","respuesta":"WebGo se especializa en crear sitios web eficientes y fáciles de usar que te permiten empezar a vender online rápidamente. Nos encargamos de todo, desde el diseño hasta la gestión del sitio, para que puedas enfocarte en tu negocio."},{"pregunta":"¿Qué beneficios ofrece WebGo para un dueño de negocio ocupado como yo?","respuesta":"En WebGo entendemos que tu tiempo es valioso. Por eso, nos encargamos de todo el proceso de digitalización. Desde la creación del sitio web hasta la implementación de estrategias de ventas online, nos aseguramos de que no tengas que preocuparte por nada."},{"pregunta":"¿Qué me garantiza que WebGo es la mejor opción para innovar en mi negocio?","respuesta":"WebGo se compromete a llevar la innovación a tu negocio. Con un equipo experto en las últimas tecnologías y tendencias de mercado, te garantizamos un sitio web moderno y efectivo que hará que tus ventas crezcan."},{"pregunta":"Si no tengo experiencia en ventas online, ¿puede WebGo ayudarme?","respuesta":"¡Por supuesto! WebGo está aquí para guiarte en cada paso. Proporcionamos asesoramiento sobre cómo generar ventas online y optimizamos tu sitio para atraer más clientes, sin que necesites experiencia previa."},{"pregunta":"¿Cuánto cuesta digitalizar mis ventas con WebGo y qué incluye?","respuesta":"El costo depende de tus necesidades específicas, pero WebGo ofrece precios competitivos que incluyen diseño, desarrollo y gestión de tu sitio web. Nos enfocamos en rapidez, compromiso e innovación para asegurar que obtienes el mejor retorno de tu inversión."}]} />
<BookAppointment 
                      heading="Transforma tu Negocio en Línea" 
                      description="Descubre cómo digitalizar tus ventas con rapidez, compromiso e innovación. No más ventas solo por recomendación. ¡Contáctanos hoy en WebGo!"
                      formPostUrl="/api/sendForm"
                      siteOwnerId="undefined"
                    />
<Footer />
    </main>
  );
}
