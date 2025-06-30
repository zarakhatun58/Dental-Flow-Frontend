
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Switch } from "../components/ui/switch";

export const CampaignManager = () => {
  const [showCreateForm, setShowCreateForm] = useState(false);

  const campaigns = [
    {
      id: 1,
      name: "Win-Back Cleaning Special",
      type: "SMS + Email",
      status: "active",
      targeting: "Patients 6+ months overdue",
      sent: 89,
      opened: 67,
      responded: 23,
      booked: 12,
      revenue: "$2,340",
      discount: "50% off cleaning"
    },
    {
      id: 2,
      name: "Crown Upsell Campaign",
      type: "Email",
      status: "scheduled",
      targeting: "Recent cleaning + cavity history",
      sent: 0,
      opened: 0,
      responded: 0,
      booked: 0,
      revenue: "$0",
      discount: "Free consultation"
    },
    {
      id: 3,
      name: "Emergency Appointment Alerts",
      type: "SMS",
      status: "active",
      targeting: "High pain keyword mentions",
      sent: 156,
      opened: 142,
      responded: 89,
      booked: 67,
      revenue: "$8,450",
      discount: "Same-day availability"
    }
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-100 text-green-700';
      case 'scheduled': return 'bg-blue-100 text-blue-700';
      case 'paused': return 'bg-gray-100 text-gray-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Actions */}
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Campaign Manager</h2>
          <p className="text-gray-600">Automated outreach and promotional campaigns</p>
        </div>
        <Button onClick={() => setShowCreateForm(!showCreateForm)}>
          + Create Campaign
        </Button>
      </div>

      {/* Create Campaign Form */}
      {showCreateForm && (
        <Card>
          <CardHeader>
            <CardTitle>Create New Campaign</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">Campaign Name</label>
                  <Input placeholder="e.g., Holiday Whitening Special" />
                </div>
                
                <div>
                  <label className="text-sm font-medium text-gray-700">Target Audience</label>
                  <select className="w-full p-2 border border-gray-300 rounded-md">
                    <option>Patients overdue for cleaning (6+ months)</option>
                    <option>Recent patients (potential upsells)</option>
                    <option>High-value patients (premium services)</option>
                    <option>No-show risk patients</option>
                    <option>Insurance lapsed patients</option>
                  </select>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">Discount/Offer</label>
                  <Input placeholder="e.g., 30% off whitening, Free consultation" />
                </div>

                <div className="flex items-center space-x-2">
                  <Switch id="sms" />
                  <label htmlFor="sms" className="text-sm font-medium text-gray-700">SMS</label>
                  <Switch id="email" />
                  <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-700">SMS Message</label>
                  <Textarea 
                    placeholder="Hi {name}! It's been a while since your last cleaning. Book now and save 30% - limited time offer!"
                    rows={3}
                  />
                  <p className="text-xs text-gray-500 mt-1">160 characters max for SMS</p>
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">Email Subject</label>
                  <Input placeholder="Don't miss out - 30% off your next cleaning!" />
                </div>

                <div>
                  <label className="text-sm font-medium text-gray-700">Send Schedule</label>
                  <select className="w-full p-2 border border-gray-300 rounded-md">
                    <option>Send immediately</option>
                    <option>Schedule for later</option>
                    <option>Recurring campaign</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="flex justify-end gap-3 mt-6">
              <Button variant="outline" onClick={() => setShowCreateForm(false)}>
                Cancel
              </Button>
              <Button>Launch Campaign</Button>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Active Campaigns */}
      <div className="space-y-4">
        {campaigns.map((campaign) => (
          <Card key={campaign.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                {/* Campaign Info */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{campaign.name}</h3>
                    <Badge className={getStatusBadge(campaign.status)}>
                      {campaign.status.toUpperCase()}
                    </Badge>
                    <Badge variant="outline">{campaign.type}</Badge>
                  </div>
                  <div className="text-sm text-gray-600 space-y-1">
                    <p><strong>Targeting:</strong> {campaign.targeting}</p>
                    <p><strong>Offer:</strong> {campaign.discount}</p>
                  </div>
                </div>

                {/* Performance Metrics */}
                <div className="bg-gray-50 p-4 rounded-lg min-w-[300px]">
                  <h4 className="font-semibold text-gray-900 mb-3">Performance</h4>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <div className="text-gray-600">Sent</div>
                      <div className="font-semibold">{campaign.sent}</div>
                    </div>
                    <div>
                      <div className="text-gray-600">Opened</div>
                      <div className="font-semibold">{campaign.opened}</div>
                    </div>
                    <div>
                      <div className="text-gray-600">Responded</div>
                      <div className="font-semibold text-blue-600">{campaign.responded}</div>
                    </div>
                    <div>
                      <div className="text-gray-600">Booked</div>
                      <div className="font-semibold text-green-600">{campaign.booked}</div>
                    </div>
                  </div>
                  <div className="mt-3 pt-3 border-t border-gray-200">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Revenue:</span>
                      <span className="font-bold text-green-600">{campaign.revenue}</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-2 min-w-[120px]">
                  <Button size="sm" variant="outline" className="w-full">
                    View Details
                  </Button>
                  <Button size="sm" variant="outline" className="w-full">
                    {campaign.status === 'active' ? 'Pause' : 'Resume'}
                  </Button>
                  <Button size="sm" variant="outline" className="w-full">
                    Duplicate
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};
