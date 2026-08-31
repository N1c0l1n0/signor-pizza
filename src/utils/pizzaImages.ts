export const pizzaImageMap: Record<string, string> = {
  // Tradizionali
  'margherita': '/images/pizze/margherita.jpg',
  'marinara': '/images/pizze/marinara.jpg',
  'bufalina': '/images/pizze/bufalina.jpg',
  'napoli': '/images/pizze/napoli.jpg',
  'tonno-e-cipolle': '/images/pizze/tonno_cipolle.jpg',
  'contadina': '/images/pizze/contadina.jpg',
  'filante': '/images/pizze/filante.jpg',
  'salsiccia-e-friarielli': '/images/pizze/salsiccia_friarielli.jpg',
  'norma': '/images/pizze/norma.jpg',
  'calzone-semplice': '/images/pizze/calzone_semplice.jpg',
  'calzone-gustoso': '/images/pizze/calzone_gustoso.jpg',

  // Speciale
  'signorpizza': '/images/pizze/signorpizza.jpg',
  'signor-pizza': '/images/pizze/signorpizza.jpg',

  // Regionali
  'lazio': '/images/pizze/lazio.jpg',
  'campania': '/images/pizze/bufalina.jpg',
  'basilicata': '/images/pizze/salsiccia_friarielli.jpg',
  'sicilia': '/images/pizze/norma.jpg',
  'puglia': '/images/pizze/signorpizza.jpg',
  'liguria': '/images/pizze/signorpizza.jpg',
  'emilia-romagna': '/images/pizze/signorpizza.jpg',
  'calabria': '/images/pizze/napoli.jpg',
  'toscana': '/images/pizze/contadina.jpg',
  'valle-daosta': '/images/pizze/filante.jpg',
  'piemonte': '/images/pizze/contadina.jpg',
  'trentino-alto-adige': '/images/pizze/tonno_cipolle.jpg',
  'friuli-venezia-giulia': '/images/pizze/filante.jpg',
  'veneto': '/images/pizze/tonno_cipolle.jpg',
  'lombardia': '/images/pizze/filante.jpg',
  'marche': '/images/pizze/lazio.jpg',
  'abruzzo': '/images/pizze/norma.jpg',
  'umbria': '/images/pizze/lazio.jpg',
  'molise': '/images/pizze/contadina.jpg',
  'sardegna': '/images/pizze/filante.jpg',
};

export function getPizzaImage(slugOrImage?: string, name?: string): string {
  if (slugOrImage && pizzaImageMap[slugOrImage.toLowerCase()]) {
    return pizzaImageMap[slugOrImage.toLowerCase()];
  }
  if (name) {
    const slug = name.toLowerCase().replace(/['\s]+/g, '-');
    if (pizzaImageMap[slug]) return pizzaImageMap[slug];
  }
  return '/images/pizze/margherita.jpg';
}

export function getIngredientsList(description: string): string[] {
  return description.split(',').map((s) => s.trim()).filter(Boolean);
}

export function getWineBeerPairing(pizzaName: string, categoryId?: string): { beverage: string; note: string } {
  const lower = pizzaName.toLowerCase();
  if (lower.includes('margherita') || lower.includes('bufalina')) {
    return { beverage: 'Birra Pils Artigianale o Fiano di Avellino DOCG', note: 'Freschezza floreale che esalta la dolcezza del fior di latte' };
  }
  if (lower.includes('marinara')) {
    return { beverage: 'Birra Blonde Ale o Greco di Tufo', note: 'Acidità minerale che bilancia la sapidità dell\'aglio e pomodoro' };
  }
  if (lower.includes('lazio') || lower.includes('carbonara')) {
    return { beverage: 'Frascati Superiore DOCG o Ipa ambrata', note: 'Corpo strutturato perfetto per la cremosità del guanciale' };
  }
  if (lower.includes('signor') || lower.includes('burrata') || lower.includes('pesto')) {
    return { beverage: 'Franciacorta Brut DOCG o Vermentino di Gallura', note: 'Bollicina fine per sgrassare la burrata e valorizzare il pesto' };
  }
  if (lower.includes('calabria') || lower.includes('nduja') || lower.includes('spianata')) {
    return { beverage: 'Cirò Rosso Classico DOC o Birra Bock', note: 'Note speziate che accompagnano la piccantezza calibrata' };
  }
  if (lower.includes('salsiccia') || lower.includes('friarielli')) {
    return { beverage: 'Aglianico del Taburno DOCG o Doppelbock', note: 'Tannino elegante che sposa il sentore amarognolo dei friarielli' };
  }
  if (lower.includes('filante') || lower.includes('formaggi')) {
    return { beverage: 'Valpolicella Ripasso DOC o Birra Blanche', note: 'Morbidezza aromatica che unisce i quattro formaggi DOP' };
  }
  return { beverage: 'Birra Artigianale Signor Pizza o Falanghina del Sannio DOC', note: 'Abbinamento versatile ed equilibrato con l\'impasto a lunga lievitazione' };
}
