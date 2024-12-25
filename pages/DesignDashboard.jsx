import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

// Import our components
import StatusBadge from '../components/StatusBadge';
import OrderCard from '../components/OrderCard';
import StatsCards from '../components/StatsCards';
import FilterSection from '../components/FilterSection';

// Constants
const AGENTS = ['MM', 'Phil', 'Own warehouse'];
const FACTORIES = ['Music Glass', 'Stainless Steel', 'Flowers'];
const STATUSES = [
  { value: 'need_artwork', label: 'Need Artwork', color: 'bg-red-100 text-red-800' },
  { value: 'missing_info', label: 'Missing Info', color: 'bg-orange-100 text-orange-800' },
  { value: 'can_produce', label: 'Can Produce', color: 'bg-green-100 text-green-800' },
  { value: 'can_produce_other', label: 'Can Produce Other', color: 'bg-blue-100 text-blue-800' }
];

// Mock orders data (You can move this to a separate file)
const MOCK_ORDERS = [/* Your mock orders data */];

const DesignDashboard = () => {
  // State management
  const [selectedAgent, setSelectedAgent] = useState('all');
  const [selectedFactory, setSelectedFactory] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [commentModalOpen, setCommentModalOpen] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const [newComment, setNewComment] = useState('');
  const [showOrderDetails, setShowOrderDetails] = useState(false);

  // Calculate status counts
  const statusCounts = MOCK_ORDERS.reduce((acc, order) => {
    acc[order.status] = (acc[order.status] || 0) + 1;
    return acc;
  }, {});

  // Filter orders
  const filteredOrders = MOCK_ORDERS.filter(order => {
    const matchesStatus = selectedStatus === 'all' || order.status === selectedStatus;
    const matchesAgent = selectedAgent === 'all' || order.sourcing_agent === selectedAgent;
    const matchesFactory = selectedFactory === 'all' || order.factory === selectedFactory;
    const matchesSearch = !searchTerm || 
      order.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.details.song_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      order.details.singer.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesStatus && matchesAgent && matchesFactory && matchesSearch;
  });

  // Handlers
  const handleComment = (order) => {
    setSelectedOrder(order);
    setCommentModalOpen(true);
  };

  const handleDetailsClick = (order) => {
    setSelectedOrder(order);
    setShowOrderDetails(true);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-[1800px] mx-auto">
        {/* Header and Stats */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-6">Design Dashboard</h1>
          <StatsCards STATUSES={STATUSES} statusCounts={statusCounts} />
        </div>

        {/* Filters */}
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

        {/* Orders Grid */}
        <div className="grid grid-cols-4 gap-6">
          {filteredOrders.map(order => (
            <OrderCard 
              key={order.id}
              order={order}
              STATUSES={STATUSES}
              onCommentClick={handleComment}
              onDetailsClick={handleDetailsClick}
            />
          ))}
        </div>

        {/* Comments Modal */}
        <Dialog open={commentModalOpen} onOpenChange={setCommentModalOpen}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Comments - Order #{selectedOrder?.id}</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
              {/* Comment History */}
              <div className="space-y-3 max-h-[300px] overflow-y-auto">
                {selectedOrder?.comments.map(comment => (
                  <div key={comment.id} className="bg-gray-50 p-3 rounded">
                    <div className="flex justify-between text-sm">
                      <span className="font-medium">{comment.user}</span>
                      <span className="text-gray-500">{comment.date}</span>
                    </div>
                    <p className="mt-1 text-sm">{comment.text}</p>
                  </div>
                ))}
              </div>

              {/* New Comment */}
              <Textarea
                placeholder="Add your comment..."
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="min-h-[100px]"
              />
              <div className="flex justify-end gap-2">
                <Button variant="outline" onClick={() => setCommentModalOpen(false)}>
                  Cancel
                </Button>
                <Button onClick={() => {
                  if (selectedOrder && newComment.trim()) {
                    // Add new comment logic here
                    setCommentModalOpen(false);
                    setNewComment('');
                  }
                }}>
                  Save Comment
                </Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};
import { AGENTS, FACTORIES, STATUSES } from '../constants/dashboardConstants';
import { MOCK_ORDERS } from '../data/mockOrders';
import OrderDetailsModal from '../components/OrderDetailsModal';

export default DesignDashboard;