import { Address } from 'src/models/address/address.entity'
import { Guest } from 'src/models/guest/guest.entity'
import { Order } from 'src/models/order/order.entity'
import { OrderPizzaSizeTopping } from 'src/models/order_pizza/order.pizza.size.entity'
import { Pizza } from 'src/models/pizza/pizza.entity'
import { Review } from 'src/models/review/review.entity'
import { Size } from 'src/models/size/size.entity'
import { Topping } from 'src/models/topping/topping.entity'
import { User } from 'src/models/user/user.entity'
import { Connection } from 'typeorm'

export const repositoryProviders = [
  {
    provide: 'UserRepository',
    useFactory: (connection: Connection) => connection.getRepository(User),
    inject: ['DATABASE_CONNECTION'],
  },
  {
    provide: 'PizzaRepository',
    useFactory: (connection: Connection) => connection.getRepository(Pizza),
    inject: ['DATABASE_CONNECTION'],
  },
  {
    provide: 'SizeRepository',
    useFactory: (connection: Connection) => connection.getRepository(Size),
    inject: ['DATABASE_CONNECTION'],
  },
  {
    provide: 'OrderRepository',
    useFactory: (connection: Connection) => connection.getRepository(Order),
    inject: ['DATABASE_CONNECTION'],
  },
  {
    provide: 'OrderPizzaSizeRepository',
    useFactory: (connection: Connection) =>
      connection.getRepository(OrderPizzaSizeTopping),
    inject: ['DATABASE_CONNECTION'],
  },
  {
    provide: 'ToppingRepository',
    useFactory: (connection: Connection) => connection.getRepository(Topping),
    inject: ['DATABASE_CONNECTION'],
  },
  {
    provide: 'ReviewRepository',
    useFactory: (connection: Connection) => connection.getRepository(Review),
    inject: ['DATABASE_CONNECTION'],
  },
  {
    provide: 'AddressRepository',
    useFactory: (connection: Connection) => connection.getRepository(Address),
    inject: ['DATABASE_CONNECTION'],
  },
  {
    provide: 'GuestRepository',
    useFactory: (connection: Connection) => connection.getRepository(Guest),
    inject: ['DATABASE_CONNECTION'],
  },
]
