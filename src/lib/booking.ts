export type BookingData = {
  checkin_date: string;
  checkout_date: string;
  adults?: number;
  room_id?: string;
  price_per_night?: number;
  currency?: string;
};

export function saveBooking(data: BookingData) {
  sessionStorage.setItem("booking", JSON.stringify(data));
}

export function getBooking(): BookingData | null {
  const raw = sessionStorage.getItem("booking");
  if (!raw) return null;

  try {
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

export function clearBooking() {
  sessionStorage.removeItem("booking");
}
