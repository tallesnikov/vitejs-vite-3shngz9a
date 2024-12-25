import React from 'react';

const StatusBadge = ({ status, STATUSES }) => {
  const statusInfo = STATUSES.find(s => s.value === status);
  return (
    <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusInfo?.color}`}>
      {statusInfo?.label}
    </span>
  );
};

export default StatusBadge;