import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Order } from '../../types';
import { ProductInfo } from './ProductInfo';
import { DetailGrid } from './DetailGrid';

interface OrderDetailsModalProps {
  order: Order | null;
  isOpen: boolean;
  onClose: () => void;
}

export const OrderDetailsModal: React.FC<OrderDetailsModalProps> = ({ 
  order, 
  isOpen, 
  onClose 
}) => {
  if (!order) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Order Details #{order.id}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <ProductInfo order={order} />
          <DetailGrid order={order} />
        </div>
      </DialogContent>
    </Dialog>
  );
};