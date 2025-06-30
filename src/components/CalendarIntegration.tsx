
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";

export const CalendarIntegration = () => {
  const [selectedDate, setSelectedDate] = useState("2024-01-03");

  const timeSlots = [
    { time: "8:00 AM", status: "available", chair: "Chair 1", type: "cleaning" },
    { time: "8:30 AM", status: "booked", chair: "Chair 1", patient: "John Smith", type: "cleaning", risk: "low" },
    { time: "9:00 AM", status: "double-booked", chair: "Chair 1", patient: "Sarah M. (85% no-show)", backup: "Emily R.", type: "cleaning", risk: "high" },
    { time: "9:30 AM", status: "available", chair: "Chair 1", type: "cleaning" },
    { time: "10:00 AM", status: "booked", chair: "Chair 1", patient: "Michael Chen", type: "crown", risk: "medium" },
    { time: "10:30 AM", status: "blocked", chair: "Chair 1", reason: "Equipment maintenance" },
    { time: "11:00 AM", status: "available", chair: "Chair 1", type: "cleaning" },
    { time: "11:30 AM", status: "booked", chair: "Chair 1", patient: "Lisa Wong", type: "checkup", risk: "low" },
    
    { time: "8:00 AM", status: "booked", chair: "Chair 2", patient: "David Kim", type: "whitening", risk: "low" },
    { time: "8:30 AM", status: "available", chair: "Chair 2", type: "cleaning" },
    { time: "9:00 AM", status: "available", chair: "Chair 2", type: "cleaning" },
    { time: "9:30 AM", status: "urgent-available", chair: "Chair 2", type: "emergency" },
    { time: "10:00 AM", status: "booked", chair: "Chair 2", patient: "Maria Garcia", type: "filling", risk: "medium" },
    { time: "10:30 AM", status: "available", chair: "Chair 2", type: "cleaning" },
    { time: "11:00 AM", status: "booked", chair: "Chair 2", patient: "Robert Lee", type: "crown", risk: "low" },
    { time: "11:30 AM", status: "available", chair: "Chair 2", type: "cleaning" }
  ];

  const getSlotColor = (status: string, risk?: string) => {
    switch (status) {
      case 'available': return 'bg-green-100 border-green-300 text-green-800';
      case 'urgent-available': return 'bg-orange-100 border-orange-300 text-orange-800';
      case 'booked': 
        if (risk === 'high') return 'bg-red-100 border-red-300 text-red-800';
        if (risk === 'medium') return 'bg-amber-100 border-amber-300 text-amber-800';
        return 'bg-blue-100 border-blue-300 text-blue-800';
      case 'double-booked': return 'bg-purple-100 border-purple-300 text-purple-800';
      case 'blocked': return 'bg-gray-100 border-gray-300 text-gray-600';
      default: return 'bg-gray-100 border-gray-300 text-gray-600';
    }
  };

  const upcomingAlerts = [
    {
      type: "no-show-risk",
      message: "High no-show risk: Sarah M. (2:00 PM) - 85% probability",
      action: "Double-book with Emily R.",
      priority: "high"
    },
    {
      type: "upsell",
      message: "Crown opportunity: Michael Chen (10:00 AM) - $2,400 potential",
      action: "Prepare upsell materials",
      priority: "medium"
    },
    {
      type: "empty-slot",
      message: "3 empty slots this afternoon - potential $450 revenue loss",
      action: "Send urgent booking campaign",
      priority: "medium"
    }
  ];

  const chairs = ['Chair 1', 'Chair 2'];
  const times = ['8:00 AM', '8:30 AM', '9:00 AM', '9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM'];

  return (
    <div className="space-y-6">
      {/* Calendar Header */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Smart Calendar</h2>
          <p className="text-gray-600">AI-optimized scheduling with double-booking intelligence</p>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">← Previous</Button>
          <Button variant="outline">Today</Button>
          <Button variant="outline">Next →</Button>
        </div>
      </div>

      {/* Date Selector */}
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center gap-4">
            <span className="font-semibold">Selected Date:</span>
            <input 
              type="date" 
              value={selectedDate}
              onChange={(e) => setSelectedDate(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-1"
            />
            <div className="flex gap-2 ml-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-100 border border-green-300 rounded"></div>
                <span className="text-sm">Available</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-100 border border-blue-300 rounded"></div>
                <span className="text-sm">Booked</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-purple-100 border border-purple-300 rounded"></div>
                <span className="text-sm">Double-booked</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-red-100 border border-red-300 rounded"></div>
                <span className="text-sm">High Risk</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Calendar Grid */}
      <Card>
        <CardHeader>
          <CardTitle>Schedule Grid - {selectedDate}</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-3 gap-4">
            {/* Time Column */}
            <div className="space-y-2">
              <div className="h-12 flex items-center justify-center font-semibold text-gray-700 bg-gray-100 rounded">
                Time
              </div>
              {times.map((time) => (
                <div key={time} className="h-16 flex items-center justify-center text-sm font-medium text-gray-600 bg-gray-50 rounded">
                  {time}
                </div>
              ))}
            </div>

            {/* Chair Columns */}
            {chairs.map((chair) => (
              <div key={chair} className="space-y-2">
                <div className="h-12 flex items-center justify-center font-semibold text-gray-700 bg-gray-100 rounded">
                  {chair}
                </div>
                {times.map((time) => {
                  const slot = timeSlots.find(s => s.time === time && s.chair === chair);
                  if (!slot) return <div key={time} className="h-16 bg-gray-50 rounded"></div>;
                  
                  return (
                    <div 
                      key={time} 
                      className={`h-16 p-2 rounded border-2 cursor-pointer hover:shadow-md transition-shadow ${getSlotColor(slot.status, slot.risk)}`}
                    >
                      <div className="text-xs font-medium">
                        {slot.status === 'available' && '+ Available'}
                        {slot.status === 'urgent-available' && '🚨 Urgent'}
                        {slot.status === 'booked' && slot.patient}
                        {slot.status === 'double-booked' && (
                          <div>
                            <div>{slot.patient}</div>
                            <div className="text-xs opacity-75">Backup: {slot.backup}</div>
                          </div>
                        )}
                        {slot.status === 'blocked' && slot.reason}
                      </div>
                      {slot.type && (
                        <div className="text-xs opacity-75 mt-1">
                          {slot.type}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* AI Alerts */}
      <Card>
        <CardHeader>
          <CardTitle>Smart Scheduling Alerts</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {upcomingAlerts.map((alert, index) => (
              <div key={index} className={`p-4 rounded-lg border ${
                alert.priority === 'high' ? 'bg-red-50 border-red-200' : 'bg-amber-50 border-amber-200'
              }`}>
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-gray-900">{alert.message}</p>
                    <p className="text-xs text-gray-600 mt-1">Recommended: {alert.action}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button size="sm" variant="outline">Dismiss</Button>
                    <Button size="sm">Take Action</Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Integration Status */}
      <Card>
        <CardHeader>
          <CardTitle>Integration Status</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="flex items-center gap-3 p-3 bg-green-50 rounded-lg">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <div>
                <div className="font-medium text-green-900">Open Dental</div>
                <div className="text-sm text-green-700">Connected & Syncing</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-blue-50 rounded-lg">
              <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
              <div>
                <div className="font-medium text-blue-900">SMS Gateway</div>
                <div className="text-sm text-blue-700">Active</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-purple-50 rounded-lg">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <div>
                <div className="font-medium text-purple-900">AI Engine</div>
                <div className="text-sm text-purple-700">Processing</div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
