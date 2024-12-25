import React from 'react';
import { Order } from '../../types';

interface ProductInfoProps {
  order: Order;
}

export const ProductInfo: React.FC<ProductInfoProps> = ({ order }) => (
  <div className="grid grid-cols-2 gap-4">
    <img
      src={order.details.thumbnail}
      alt="Product thumbnail"
      className="w-24 h-24 object-cover rounded"
    />
    <div>
      <h3 className="font-medium">{order.details.product_name}</h3>
      <p className="text-sm text-gray-500">{order.factory}</p>
    </div>
  </div>
);