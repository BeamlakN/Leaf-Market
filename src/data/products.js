import { IMAGE_EXTENSION } from './imageConfig.js';

const photo = (slug) => `/products/${slug}.${IMAGE_EXTENSION}`;

// type is 'plant' or 'pot'. Update each `alt` to describe your real photo once you add it.
export const products = [
  { id: 1, type: 'plant', name: 'Monstera', category: 'Foliage', price: 28, image: photo('monstera'), alt: 'Monstera plant with large split leaves', description: 'A fast-growing climber with split leaves. Water when the top soil is dry.' },
  { id: 2, type: 'plant', name: 'Fiddle Leaf Fig', category: 'Foliage', price: 45, image: photo('fiddle-leaf-fig'), alt: 'Fiddle leaf fig with broad glossy leaves', description: 'A statement plant that loves bright light and hates being moved.' },
  { id: 3, type: 'plant', name: 'Rubber Plant', category: 'Foliage', price: 32, image: photo('rubber-plant'), alt: 'Rubber plant with dark glossy leaves', description: 'Glossy leaves and a sturdy habit. Very forgiving for beginners.' },
  { id: 4, type: 'plant', name: 'Aloe Vera', category: 'Succulents', price: 12, image: photo('aloe-vera'), alt: 'Aloe vera plant with thick spiky leaves', description: 'Needs plenty of sun and very little water.' },
  { id: 5, type: 'plant', name: 'Jade Plant', category: 'Succulents', price: 15, image: photo('jade-plant'), alt: 'Jade plant with thick round leaves', description: 'Thick, glossy leaves that store water. Can live for decades.' },
  { id: 6, type: 'plant', name: 'Echeveria', category: 'Succulents', price: 9, image: photo('echeveria'), alt: 'Echeveria succulent shaped like a rosette', description: 'A compact rosette that thrives on bright windowsills.' },
  { id: 7, type: 'plant', name: 'Peace Lily', category: 'Flowering', price: 24, image: photo('peace-lily'), alt: 'Peace lily with a white flower', description: 'White blooms, and it droops clearly when it needs water.' },
  { id: 8, type: 'plant', name: 'Orchid', category: 'Flowering', price: 30, image: photo('orchid'), alt: 'Orchid with pink blooms', description: 'Long-lasting flowers. Water weekly and keep out of harsh sun.' },
  { id: 9, type: 'plant', name: 'African Violet', category: 'Flowering', price: 14, image: photo('african-violet'), alt: 'African violet with purple flowers', description: 'Small, colorful blooms that suit shelves and desks.' },
  { id: 10, type: 'plant', name: 'Pothos', category: 'Hanging', price: 16, image: photo('pothos'), alt: 'Pothos with long trailing vines', description: 'A trailing plant that tolerates low light and missed waterings.' },
  { id: 11, type: 'plant', name: 'String of Pearls', category: 'Hanging', price: 19, image: photo('string-of-pearls'), alt: 'String of pearls with bead-like leaves hanging down', description: 'Bead-like leaves that cascade over the pot. Water sparingly.' },
  { id: 12, type: 'plant', name: 'Spider Plant', category: 'Hanging', price: 13, image: photo('spider-plant'), alt: 'Spider plant with arching striped leaves', description: 'Arching striped leaves and baby plantlets. Almost impossible to kill.' },
  { id: 13, type: 'pot', name: 'Classic Terracotta Pot', category: 'Terracotta', price: 8, image: photo('terracotta-classic-pot'), alt: 'Round terracotta pot', description: 'The traditional clay pot. Porous, so soil dries evenly and roots stay healthy.' },
  { id: 14, type: 'pot', name: 'Terracotta Pot with Saucer', category: 'Terracotta', price: 12, image: photo('terracotta-saucer-pot'), alt: 'Terracotta pot sitting on a matching saucer', description: 'Comes with a matching saucer to protect shelves and windowsills.' },
  { id: 15, type: 'pot', name: 'White Ceramic Planter', category: 'Ceramic', price: 22, image: photo('white-ceramic-planter'), alt: 'Smooth white ceramic planter', description: 'A clean, glazed planter with a drainage hole. Fits most medium plants.' },
  { id: 16, type: 'pot', name: 'Speckled Ceramic Pot', category: 'Ceramic', price: 26, image: photo('speckled-ceramic-pot'), alt: 'Cream ceramic pot with dark speckles', description: 'Hand-finished glaze with a speckled look. Each pot is slightly unique.' },
  { id: 17, type: 'pot', name: 'Macramé Hanging Planter', category: 'Hanging', price: 18, image: photo('macrame-hanging-planter'), alt: 'Woven macramé hanger holding a pot', description: 'A cotton macramé hanger that suits trailing plants like pothos.' },
  { id: 18, type: 'pot', name: 'Hanging Ceramic Planter', category: 'Hanging', price: 24, image: photo('hanging-ceramic-planter'), alt: 'Ceramic planter hanging from three chains', description: 'A glazed bowl on three metal chains, with a hook included.' },
];