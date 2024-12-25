import React from 'react';
import OrderCard from '@/components/OrderCard';
import { STATUSES } from '@/constants/dashboardConstants';
import { Order } from '../types';

interface OrderGridProps {
  orders: Order[];
  onCommentClick: (order: Order) => void;
  onDetailsClick: (order: Order) => void;
}

export const OrderGrid: React.FC<OrderGridProps> = ({ 
  orders, 
  onCommentClick, 
  onDetailsClick 
}) => (
  <div className="grid grid-cols-4 gap-6">
    {orders.map(order => (
      <OrderCard
        key={order.id}
        order={order}
        STATUSES={STATUSES}
        onCommentClick={onCommentClick}
        onDetailsClick={onDetailsClick}
      />
    ))}
  </div>
);