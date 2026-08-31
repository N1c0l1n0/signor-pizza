export function formatPrice(price: number): string {
  return new Intl.NumberFormat('it-IT', {
    style: 'currency',
    currency: 'EUR',
  }).format(price);
}

export function telHref(phone: string): string {
  return `tel:${phone.replace(/\s/g, '')}`;
}

export function whatsappHref(number: string, message?: string): string {
  const base = `https://wa.me/${number.replace(/\D/g, '')}`;
  if (!message) return base;
  return `${base}?text=${encodeURIComponent(message)}`;
}
