import { useState, useMemo } from 'react';
import { Order } from '../types';

export const useOrderFilters = (orders: Order[]) => {
  const [selectedAgent, setSelectedAgent] = useState('all');
  const [selectedFactory, setSelectedFactory] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const statusCounts = useMemo(() => 
    orders.reduce((acc, order) => ({
      ...acc,
      [order.status]: (acc[order.status] || 0) + 1
    }), {}),
    [orders]
  );

  const filteredOrders = useMemo(() => 
    orders.filter(order => {
      const matchesStatus = selectedStatus === 'all' || order.status === selectedStatus;
      const matchesAgent = selectedAgent === 'all' || order.sourcing_agent === selectedAgent;
      const matchesFactory = selectedFactory === 'all' || order.factory === selectedFactory;
      const matchesSearch = !searchTerm || 
        order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.details.song_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.details.singer.toLowerCase().includes(searchTerm.toLowerCase());

      return matchesStatus && matchesAgent && matchesFactory && matchesSearch;
    }),
    [orders, selectedStatus, selectedAgent, selectedFactory, searchTerm]
  );

  return {
    selectedAgent,
    setSelectedAgent,
    selectedFactory,
    setSelectedFactory,
    selectedStatus,
    setSelectedStatus,
    searchTerm,
    setSearchTerm,
    filteredOrders,
    statusCounts,
  };
};