export function calculateNights(checkin: string, checkout: string): number {
  const start = new Date(checkin);
  const end = new Date(checkout);
  const diff = end.getTime() - start.getTime();
  return Math.max(1, Math.ceil(diff / (1000 * 60 * 60 * 24)));
}
export function calculateTotal(pricePerNight: number, nights: number) {
  const subtotal = Math.round(pricePerNight * nights);
  const taxes = Math.round(subtotal * 0.08);
  const total = subtotal + taxes;

  return {
    subtotal,
    taxes,
    total,
  };
}
