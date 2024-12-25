import React from 'react';
import StatsCards from '@/components/StatsCards';
import { STATUSES } from '@/constants/dashboardConstants';

interface HeaderProps {
  statusCounts: Record<string, number>;
}

export const Header: React.FC<HeaderProps> = ({ statusCounts }) => (
  <div className="mb-8">
    <h1 className="text-3xl font-bold mb-6">Design Dashboard</h1>
    <StatsCards STATUSES={STATUSES} statusCounts={statusCounts} />
  </div>
);