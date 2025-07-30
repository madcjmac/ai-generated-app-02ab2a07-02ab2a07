import { create } from 'zustand';
import { MenuItem, Order, Table, Staff, InventoryItem } from '@/types';

interface StoreState {
  menuItems: MenuItem[];
  orders: Order[];
  tables: Table[];
  staff: Staff[];
  inventory: InventoryItem[];
  addMenuItem: (item: MenuItem) => void;
  updateMenuItem: (item: MenuItem) => void;
  deleteMenuItem: (id: string) => void;
  addOrder: (order: Order) => void;
  updateOrder: (order: Order) => void;
  updateTable: (table: Table) => void;
}

export const useStore = create<StoreState>((set) => ({
  menuItems: [],
  orders: [],
  tables: [],
  staff: [],
  inventory: [],
  
  addMenuItem: (item) => 
    set((state) => ({ menuItems: [...state.menuItems, item] })),
  
  updateMenuItem: (item) =>
    set((state) => ({
      menuItems: state.menuItems.map((i) => 
        i.id === item.id ? item : i
      ),
    })),
  
  deleteMenuItem: (id) =>
    set((state) => ({
      menuItems: state.menuItems.filter((i) => i.id !== id),
    })),
  
  addOrder: (order) =>
    set((state) => ({ orders: [...state.orders, order] })),
  
  updateOrder: (order) =>
    set((state) => ({
      orders: state.menuItems.map((o) => 
        o.id === order.id ? order : o
      ),
    })),
  
  updateTable: (table) =>
    set((state) => ({
      tables: state.tables.map((t) => 
        t.id === table.id ? table : t
      ),
    })),
}));