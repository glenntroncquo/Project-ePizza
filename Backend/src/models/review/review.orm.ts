export interface ReviewORM {
  order_id: string
  user_id?: string
  guest_id?: string
  title: string
  description: string
  stars: number
}
