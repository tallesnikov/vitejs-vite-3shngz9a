import React from 'react';
import { Card } from '@/components/ui/card';

const StatsCards = ({ STATUSES, statusCounts }) => (
  <div className="grid grid-cols-4 gap-4 mb-6">
    {STATUSES.map(status => (
      <Card key={status.value} className={`p-4 ${status.color} bg-opacity-10`}>
        <h3 className="font-medium">{status.label}</h3>
        <p className="text-2xl font-bold">{statusCounts[status.value] || 0}</p>
      </Card>
    ))}
  </div>
);

export default StatsCards;