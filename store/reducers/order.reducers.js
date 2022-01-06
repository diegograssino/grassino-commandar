// import ORDER from '../../data/order';
import { CONFIRM_ORDER } from '../actions/order.action';

const INITIAL_STATE = {
  order: [
    {
      id: '1',
      category: '1',
      name: 'Pan Baguette',
      description: 'Clásico pan francés',
      weight: '350gr',
      price: 1600,
      quantity: 3,
    },
    {
      id: '2',
      category: '1',
      name: 'Pan Ciabatta Blanco',
      description:
        'Pan de alta hidratación, miga alveolada y corteza crujiente',
      weight: '800gr',
      price: 3000,
      quantity: 4,
    },
    {
      id: '3',
      category: '2',
      name: 'Pan de Arroz',
      description: 'Pan de arroz con leche',
      weight: '500gr',
      price: 2000,
      quantity: 2,
    },
    {
      id: '4',
      category: '2',
      name: 'Pan de Arroz',
      description: 'Pan de arroz con leche',
      weight: '500gr',
      price: 2000,
      quantity: 2,
    },
    {
      id: '5',
      category: '2',
      name: 'Pan de Arroz',
      description: 'Pan de arroz con leche',

      weight: '500gr',
      price: 2000,
      quantity: 2,
    },
    {
      id: '6',
      category: '2',
      name: 'Pan de Arroz',
      description: 'Pan de arroz con leche',

      weight: '500gr',
      price: 2000,
      quantity: 2,
    },
    {
      id: '7',
      category: '2',
      name: 'Pan de Arroz',
      description: 'Pan de arroz con leche',

      weight: '500gr',
      price: 2000,
      quantity: 2,
    },
    {
      id: '12',
      category: '2',
      name: 'Pan de Arroz',
      description: 'Pan de arroz con leche',

      weight: '500gr',
      price: 2000,
      quantity: 2,
    },
    {
      id: '8',
      category: '2',
      name: 'Pan de Arroz',
      description: 'Pan de arroz con leche',

      weight: '500gr',
      price: 2000,
      quantity: 2,
    },
    {
      id: '9',
      category: '2',
      name: 'Pan de Arroz',
      description: 'Pan de arroz con leche',

      weight: '500gr',
      price: 2000,
      quantity: 2,
    },
    {
      id: '10',
      category: '2',
      name: 'Pan de Arroz',
      description: 'Pan de arroz con leche',

      weight: '500gr',
      price: 2000,
      quantity: 2,
    },
    {
      id: '11',
      category: '2',
      name: 'Pan de Arroz',
      description: 'Pan de arroz con leche',

      weight: '500gr',
      price: 2000,
      quantity: 2,
    },
  ],
  total: 27000,
  status: null,
  orderID: null,
};

const OrderReducer = (state = INITIAL_STATE, action = '') => {
  switch (action.type) {
    case CONFIRM_ORDER:
      return {
        ...state,
        status: action.status,
        orderID: action.orderID,
      };
    default:
      return state;
  }
};

export default OrderReducer;
