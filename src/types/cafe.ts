export type Dietary = 'vegetarian' | 'vegan' | 'gluten-free';

export interface MenuItem {
  id: string;
  name: string;
  category: 'coffee' | 'tea' | 'pastries' | 'meals';
  price: number;
  dietary?: 'V' | 'VG' | 'GF';
  dietaryLabel?: string;
  description: string;
  badge?: string;
  image?: string;
  isFavorite?: boolean;
  isSeasonal?: boolean;
  tastingNotes?: string[];
  roastLevel?: 'Light' | 'Medium' | 'Medium-Dark';
  brewMethod?: string;
}

export interface CartItem {
  id: string;
  item: MenuItem;
  quantity: number;
  options?: {
    milk?: 'A2 Whole Milk' | 'Oat Milk (+₹30)' | 'Almond Milk (+₹30)' | 'None';
    sweetness?: 'Standard' | 'Less Sweet' | 'Unsweetened';
    temperature?: 'Hot' | 'Iced (+₹20)';
    specialNotes?: string;
  };
  totalPrice: number;
}

export interface ReservationRequest {
  fullName: string;
  email: string;
  phone: string;
  date: string;
  timeSlot: string;
  partySize: number;
  seatingArea: 'Sunny Window Nook' | 'Communal Hearth' | 'Leafy Patio' | 'Quiet Library Corner';
  specialRequests?: string;
}

export interface CustomerReview {
  id: string;
  name: string;
  role: string;
  initials: string;
  badgeColor: string;
  rating: number;
  comment: string;
  date: string;
}
