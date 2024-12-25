import React from 'react';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';

const FilterSection = ({ 
  searchTerm, 
  setSearchTerm, 
  selectedAgent, 
  setSelectedAgent,
  selectedFactory, 
  setSelectedFactory,
  selectedStatus, 
  setSelectedStatus,
  AGENTS,
  FACTORIES,
  STATUSES,
  statusCounts 
}) => (
  <>
    <div className="flex gap-4 mb-6 flex-wrap">
      <div className="relative flex-1 min-w-[200px]">
        <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
        <Input
          placeholder="Search orders..."
          className="pl-8"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <Select value={selectedAgent} onValueChange={setSelectedAgent}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Agent" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Agents</SelectItem>
          {AGENTS.map(agent => (
            <SelectItem key={agent} value={agent}>{agent}</SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select value={selectedFactory} onValueChange={setSelectedFactory}>
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Factory" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Factories</SelectItem>
          {FACTORIES.map(factory => (
            <SelectItem key={factory} value={factory}>{factory}</SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>

    <div className="flex gap-2 mb-6 flex-wrap">
      <Button 
        variant={selectedStatus === 'all' ? 'default' : 'outline'}
        onClick={() => setSelectedStatus('all')}
      >
        All Orders
      </Button>
      {STATUSES.map(status => (
        <Button
          key={status.value}
          variant={selectedStatus === status.value ? 'default' : 'outline'}
          className={selectedStatus === status.value ? status.color : ''}
          onClick={() => setSelectedStatus(status.value)}
        >
          {status.label} ({statusCounts[status.value] || 0})
        </Button>
      ))}
    </div>
  </>
);

export default FilterSection;