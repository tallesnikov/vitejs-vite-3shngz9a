import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Order } from '../types';

interface CommentModalProps {
  isOpen: boolean;
  onClose: () => void;
  order: Order | null;
  newComment: string;
  setNewComment: (comment: string) => void;
}

export const CommentModal: React.FC<CommentModalProps> = ({
  isOpen,
  onClose,
  order,
  newComment,
  setNewComment,
}) => {
  if (!order) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Comments - Order #{order.id}</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="space-y-3 max-h-[300px] overflow-y-auto">
            {order.comments.map(comment => (
              <div key={comment.id} className="bg-gray-50 p-3 rounded">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{comment.user}</span>
                  <span className="text-gray-500">{comment.date}</span>
                </div>
                <p className="mt-1 text-sm">{comment.text}</p>
              </div>
            ))}
          </div>

          <Textarea
            placeholder="Add your comment..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            className="min-h-[100px]"
          />
          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={() => {
              if (newComment.trim()) {
                // Add new comment logic here
                onClose();
                setNewComment('');
              }
            }}>
              Save Comment
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};