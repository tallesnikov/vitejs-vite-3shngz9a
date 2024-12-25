import React from 'react';
import { Order } from '../../types';

interface DetailItemProps {
  label: string;
  value: string;
}

const DetailItem: React.FC<DetailItemProps> = ({ label, value }) => (
  <div>
    <p className="font-medium">{label}</p>
    <p>{value}</p>
  </div>
);

interface DetailGridProps {
  order: Order;
}

export const DetailGrid: React.FC<DetailGridProps> = ({ order }) => (
  <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
    <DetailItem label="Singer/Band" value={order.details.singer} />
    <DetailItem label="Song Name" value={order.details.song_name} />
    <DetailItem label="Music Platform" value={order.details.music_platform} />
    <DetailItem label="Base Engraving" value={order.details.base_engraving} />
    <DetailItem label="Color" value={order.details.color} />
    <DetailItem label="Designer" value={order.details.designer} />
    <DetailItem label="Sourcing Agent" value={order.sourcing_agent} />
    <DetailItem label="Factory" value={order.factory} />
  </div>
);