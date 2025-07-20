export interface ProductProps {
  id: string
  name: string
  price: number
  thumbnail?: string
  reviews?: []
}

export interface MenuProps {
  name: string;
  price: number;
  thumbnail: string;
}

export interface FormState {
  message: string
  errors?: {
    nameField?: string
    priceField?: string
  }
}