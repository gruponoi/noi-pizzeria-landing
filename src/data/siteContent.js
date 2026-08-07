export const whatsappNumber = '593979507496'
export const whatsappMessage = 'Hola Noi Pizzería, vi su página web y quiero realizar un pedido.'
export const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

export const visualAssets = {
  logo: {
    src: '/imagenes/logo-noi.png',
    alt: 'Logotipo oficial de Noi Pizzería',
    placeholder: 'Logo oficial pendiente',
  },
  hero: {
    src: '/imagenes/hero-pepperoni.webp',
    alt: 'Pizza de pepperoni de Noi Pizzería recién horneada',
    placeholder: 'Fotografía hero pendiente',
  },
  promotion: {
    src: '/imagenes/promo-1299.webp',
    alt: 'Promoción de Noi Pizzería con dos pizzas medianas y gaseosa de un litro por 12 dólares con 99 centavos',
    placeholder: 'Fotografía de promoción pendiente',
  },
  pepperoni: {
    src: '/imagenes/pepperoni.webp',
    alt: 'Pizza de pepperoni con abundante queso de Noi Pizzería',
    placeholder: 'Fotografía de pepperoni pendiente',
  },
  hawaiian: {
    src: '/imagenes/hawaiana.webp',
    alt: 'Pizza hawaiana con jamón, piña y queso de Noi Pizzería',
    placeholder: 'Fotografía de hawaiana pendiente',
  },
  ham: {
    src: '/imagenes/jamon.webp',
    alt: 'Pizza de jamón y queso de Noi Pizzería',
    placeholder: 'Fotografía de jamón pendiente',
  },
  bacon: {
    src: '/imagenes/tocino.webp',
    alt: 'Pizza con tocino crocante de Noi Pizzería',
    placeholder: 'Fotografía de tocino pendiente',
  },
  productionCenter: {
    src: '/imagenes/centro-produccion.webp',
    alt: 'Centro de producción de Noi Pizzería en Loja',
    placeholder: 'Fotografía del centro de producción pendiente',
  },
}

export const navigation = [
  { label: 'Promo', href: '#promo' },
  { label: 'Sabores', href: '#sabores' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Preguntas', href: '#preguntas' },
]

export const flavors = [
  { name: 'Pepperoni', description: '42 pepperonis perfectamente distribuidos sobre abundante mozzarella gratinada.', accent: 'pepperoni', icon: '●', image: visualAssets.pepperoni },
  { name: 'Hawaiana', description: 'Jamón de calidad, piña dulce y mozzarella gratinada en cada porción.', accent: 'hawaiian', icon: '◆', image: visualAssets.hawaiian },
  { name: 'Jamón', description: 'Jamón seleccionado, abundante queso y una masa suave por dentro, crujiente por fuera.', accent: 'ham', icon: '■', image: visualAssets.ham },
  { name: 'Tocino', description: 'Tocino crujiente, mozzarella gratinada y un sabor intenso en cada bocado.', accent: 'bacon', icon: '≈', image: visualAssets.bacon },
]

export const testimonials = [
  'Llegó rápido, muchas gracias. Deliciosas pizzas, la masa suavecita y crujiente y la hawaiana top. Excelente atención.',
  'Ya recibí mi pedido, muy buenas pizzas. Felicitaciones.',
  'Excelente. Muy ricas.',
]

export const faqs = [
  {
    question: '¿Puedo combinar los sabores?',
    answer: 'Sí. Puedes elegir cualquier combinación entre Pepperoni, Hawaiana, Jamón y Tocino.',
  },
  {
    question: '¿Las pizzas se preparan al momento?',
    answer: 'Sí. Cada pedido comienza a prepararse una vez confirmado para garantizar calidad y temperatura.',
  },
  {
    question: '¿Realizan entregas en toda Loja?',
    answer: 'Realizamos delivery en Loja. La cobertura y el costo de envío se confirman según tu ubicación.',
  },
  {
    question: '¿Tienen un local para comer ahí?',
    answer: 'No. Somos un centro de producción o dark kitchen enfocado en preparar tus pizzas y enviarlas a domicilio. No contamos con atención en un local abierto al público.',
  },
  {
    question: '¿En qué zonas realizan delivery?',
    answer: 'Realizamos delivery en Loja. Escríbenos por WhatsApp con tu ubicación para confirmar cobertura y tiempo estimado.',
  },
  {
    question: '¿Cuánto cuesta el envío?',
    answer: 'El costo de envío depende de tu ubicación. Te indicaremos el valor antes de confirmar el pedido.',
  },
  {
    question: '¿Hasta qué hora atienden?',
    answer: 'Recibimos pedidos hasta las 22:00. Te recomendamos escribirnos con anticipación para coordinar tu entrega.',
  },
  {
    question: '¿Cómo hago mi pedido?',
    answer: 'Toca cualquier botón de pedido, envíanos el mensaje por WhatsApp y cuéntanos qué sabores deseas y dónde debemos entregar.',
  },
]
