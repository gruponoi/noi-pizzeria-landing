export const whatsappNumber = '593979507496'
export const whatsappMessage = 'Hola Noi Pizzería, vi su página web y quiero realizar un pedido.'
export const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`

export const navigation = [
  { label: 'Promo', href: '#promo' },
  { label: 'Sabores', href: '#sabores' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Opiniones', href: '#opiniones' },
  { label: 'Preguntas', href: '#preguntas' },
]

export const flavors = [
  { name: 'Pepperoni', description: 'Clásica, intensa y con una capa generosa de queso.', accent: 'pepperoni', icon: '●' },
  { name: 'Hawaiana', description: 'El balance irresistible entre jamón, piña y queso.', accent: 'hawaiian', icon: '◆' },
  { name: 'Jamón', description: 'Suave, familiar y perfecta para compartir.', accent: 'ham', icon: '■' },
  { name: 'Tocino', description: 'Sabor ahumado y crocante en cada porción.', accent: 'bacon', icon: '≈' },
]

export const testimonials = [
  'Llegaron calientitas y con bastante queso.',
  'La masa estaba crocante, no seca.',
  'La hawaiana es la mejor.',
  'Excelente atención y llegó rapidísimo.',
]

export const faqs = [
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
