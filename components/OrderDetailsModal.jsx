import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/card';

const OrderDetailsModal = ({ order, isOpen, onClose }) => {
  if (!order) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Order Details #{order.id}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
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

          <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
            <div>
              <p className="font-medium">Singer/Band</p>
              <p>{order.details.singer}</p>
            </div>
            <div>
              <p className="font-medium">Song Name</p>
              <p>{order.details.song_name}</p>
            </div>
            <div>
              <p className="font-medium">Music Platform</p>
              <p>{order.details.music_platform}</p>
            </div>
            <div>
              <p className="font-medium">Base Engraving</p>
              <p>{order.details.base_engraving}</p>
            </div>
            <div>
              <p className="font-medium">Color</p>
              <p>{order.details.color}</p>
            </div>
            <div>
              <p className="font-medium">Designer</p>
              <p>{order.details.designer}</p>
            </div>
            <div>
              <p className="font-medium">Sourcing Agent</p>
              <p>{order.sourcing_agent}</p>
            </div>
            <div>
              <p className="font-medium">Factory</p>
              <p>{order.factory}</p>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default OrderDetailsModal;