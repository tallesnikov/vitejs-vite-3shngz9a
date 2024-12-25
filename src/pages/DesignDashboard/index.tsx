import React, { useState } from 'react';
import { MOCK_ORDERS } from '@/data/mockOrders';
import { AGENTS, FACTORIES, STATUSES } from '@/constants';
import { Order } from '@/types';
import { useOrderFilters } from './hooks/useOrderFilters';
import { Header } from './components/Header';
import { FilterSection } from './components/FilterSection';
import { OrderGrid } from './components/OrderGrid';
import { CommentModal } from './components/CommentModal';
import { OrderDetailsModal } from './components/OrderDetails/OrderDetailsModal';

const DesignDashboard = () => {
  const {
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
  } = useOrderFilters(MOCK_ORDERS);

  const [commentModalOpen, setCommentModalOpen] = useState(false);
  const [showOrderDetails, setShowOrderDetails] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [newComment, setNewComment] = useState('');

  const handleComment = (order: Order) => {
    setSelectedOrder(order);
    setCommentModalOpen(true);
  };

  const handleDetailsClick = (order: Order) => {
    setSelectedOrder(order);
    setShowOrderDetails(true);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-[1800px] mx-auto">
        <Header statusCounts={statusCounts} />
        
        <FilterSection
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          selectedAgent={selectedAgent}
          setSelectedAgent={setSelectedAgent}
          selectedFactory={selectedFactory}
          setSelectedFactory={setSelectedFactory}
          selectedStatus={selectedStatus}
          setSelectedStatus={setSelectedStatus}
          AGENTS={AGENTS}
          FACTORIES={FACTORIES}
          STATUSES={STATUSES}
          statusCounts={statusCounts}
        />

        <OrderGrid
          orders={filteredOrders}
          onCommentClick={handleComment}
          onDetailsClick={handleDetailsClick}
        />

        <CommentModal
          isOpen={commentModalOpen}
          onClose={() => setCommentModalOpen(false)}
          order={selectedOrder}
          newComment={newComment}
          setNewComment={setNewComment}
        />

        <OrderDetailsModal
          isOpen={showOrderDetails}
          onClose={() => setShowOrderDetails(false)}
          order={selectedOrder}
        />
      </div>
    </div>
  );
};

export default DesignDashboard;