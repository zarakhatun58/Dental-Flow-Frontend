
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Badge } from "../components/ui/badge";

export const DashboardMetrics = () => {
  const metrics = [
    {
      title: "Monthly Revenue Impact",
      value: "$47,250",
      change: "+23.5%",
      changeType: "positive" as const,
      subtitle: "vs last month"
    },
    {
      title: "Empty Chair Hours",
      value: "142",
      change: "-31%",
      changeType: "positive" as const,
      subtitle: "reduced this month"
    },
    {
      title: "Patients at Risk",
      value: "89",
      change: "12 new",
      changeType: "neutral" as const,
      subtitle: "haven't visited 6+ months"
    },
    {
      title: "Successful Rebookings",
      value: "156",
      change: "+18%",
      changeType: "positive" as const,
      subtitle: "via AI campaigns"
    }
  ];

  const recentActivity = [
    { type: "booking", message: "AI booked Sarah M. for cleaning (high upsell probability)", time: "2 min ago", priority: "high" },
    { type: "payment", message: "$89 pre-payment received from John D.", time: "5 min ago", priority: "medium" },
    { type: "campaign", message: "Sent discount offers to 23 at-risk patients", time: "15 min ago", priority: "medium" },
    { type: "prediction", message: "Flagged 3 patients as no-show risks for tomorrow", time: "1 hour ago", priority: "high" },
  ];

  return (
    <div className="space-y-6">
      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                {metric.title}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900 mb-1">
                {metric.value}
              </div>
              <div className="flex items-center space-x-2">
                <Badge 
                  variant={metric.changeType === 'positive' ? 'default' : 'secondary'}
                  className={`${
                    metric.changeType === 'positive' 
                      ? 'bg-green-100 text-green-700 hover:bg-green-100' 
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  {metric.change}
                </Badge>
                <span className="text-sm text-gray-500">{metric.subtitle}</span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Activity Feed and Quick Actions */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Recent AI Activity</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentActivity.map((activity, index) => (
                <div key={index} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg">
                  <div className={`w-2 h-2 rounded-full mt-2 ${
                    activity.priority === 'high' ? 'bg-red-500' : 'bg-blue-500'
                  }`} />
                  <div className="flex-1">
                    <p className="text-sm text-gray-900">{activity.message}</p>
                    <p className="text-xs text-gray-500 mt-1">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Revenue Opportunities</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-blue-900">Crown Upsells</h4>
                  <Badge className="bg-blue-100 text-blue-700">$12,450 potential</Badge>
                </div>
                <p className="text-sm text-blue-700">15 patients flagged for crown recommendations during upcoming cleanings</p>
              </div>
              
              <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-green-900">Whitening Promotions</h4>
                  <Badge className="bg-green-100 text-green-700">$3,200 potential</Badge>
                </div>
                <p className="text-sm text-green-700">32 patients ideal for whitening upsell campaigns</p>
              </div>

              <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-semibold text-amber-900">Emergency Slots</h4>
                  <Badge className="bg-amber-100 text-amber-700">18 available</Badge>
                </div>
                <p className="text-sm text-amber-700">Open slots perfect for urgent patient needs</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};
