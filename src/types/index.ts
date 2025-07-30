export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image?: string;
  available: boolean;
}

export interface Order {
  id: string;
  tableNumber: number;
  items: OrderItem[];
  status: 'pending' | 'preparing' | 'ready' | 'served' | 'paid';
  totalAmount: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface OrderItem {
  menuItemId: string;
  quantity: number;
  notes?: string;
}

export interface Table {
  id: number;
  seats: number;
  status: 'available' | 'occupied' | 'reserved';
  currentOrderId?: string;
}

export interface Staff {
  id: string;
  name: string;
  role: 'manager' | 'waiter' | 'chef' | 'cashier';
  email: string;
  phone: string;
  schedule: WorkShift[];
}

export interface WorkShift {
  day: string;
  startTime: string;
  endTime: string;
}

export interface InventoryItem {
  id: string;
  name: string;
  quantity: number;
  unit: string;
  reorderPoint: number;
  cost: number;
  lastRestocked: Date;
}