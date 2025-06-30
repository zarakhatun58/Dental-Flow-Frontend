
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";

export const AIRecommendations = () => {
  const recommendations = [
    {
      id: 1,
      type: "booking",
      priority: "high",
      title: "Double-book high-risk appointments",
      description: "Tomorrow's 2 PM slot has Sarah M. (85% no-show risk). Consider double-booking with Emily R. who needs urgent cleaning.",
      impact: "$450 revenue protection",
      action: "Auto-book Emily R.",
      confidence: 92
    },
    {
      id: 2,
      type: "campaign",
      priority: "high",
      title: "Launch emergency filling campaign",
      description: "23 patients with overdue cleanings show cavity risk patterns. Send targeted campaign for emergency appointments.",
      impact: "$8,400 potential revenue",
      action: "Launch Campaign",
      confidence: 88
    },
    {
      id: 3,
      type: "pricing",
      priority: "medium",
      title: "Discount cleaning for crown patients",
      description: "15 patients need crowns but haven't booked cleanings. Offer free cleaning to secure $18,750 in crown work.",
      impact: "$18,750 upsell potential",
      action: "Send Offers",
      confidence: 76
    },
    {
      id: 4,
      type: "scheduling",
      priority: "medium",
      title: "Optimize Friday afternoon slots",
      description: "Friday 2-5 PM consistently underbooked. Target working professionals with evening/weekend contact preference.",
      impact: "12 hrs weekly capacity",
      action: "Adjust Targeting",
      confidence: 82
    },
    {
      id: 5,
      type: "retention",
      priority: "low",
      title: "Win back lapsed patients",
      description: "67 patients haven't visited in 12+ months. Offer significant discount to restart regular care cycle.",
      impact: "$12,600 annual value",
      action: "Create Win-Back Series",
      confidence: 65
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'high': return 'bg-red-100 text-red-700 border-red-200';
      case 'medium': return 'bg-amber-100 text-amber-700 border-amber-200';
      case 'low': return 'bg-blue-100 text-blue-700 border-blue-200';
      default: return 'bg-gray-100 text-gray-700 border-gray-200';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'booking': return '📅';
      case 'campaign': return '📢';
      case 'pricing': return '💰';
      case 'scheduling': return '⏰';
      case 'retention': return '🔄';
      default: return '🤖';
    }
  };

  return (
    <div className="space-y-6">
      {/* AI Overview */}
      <Card className="bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
        <CardContent className="p-6">
          <div className="flex items-center gap-4">
            <div className="bg-blue-600 text-white p-3 rounded-full">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
              </svg>
            </div>
            <div>
              <h2 className="text-xl font-bold text-gray-900">AI Analysis Complete</h2>
              <p className="text-gray-600">Analyzed 1,247 patient records • Last updated 3 minutes ago</p>
            </div>
            <div className="ml-auto text-right">
              <div className="text-2xl font-bold text-green-600">$47,200</div>
              <div className="text-sm text-gray-600">Total opportunity identified</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Recommendations */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900">Smart Recommendations</h3>
        
        {recommendations.map((rec) => (
          <Card key={rec.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="text-2xl">{getTypeIcon(rec.type)}</div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="text-lg font-semibold text-gray-900">{rec.title}</h4>
                    <Badge className={getPriorityColor(rec.priority)}>
                      {rec.priority.toUpperCase()} PRIORITY
                    </Badge>
                    <Badge  className="text-blue-700 border-blue-300">
                      {rec.confidence}% confidence
                    </Badge>
                  </div>
                  
                  <p className="text-gray-600 mb-3">{rec.description}</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm">
                      <span className="text-gray-500">Potential impact: </span>
                      <span className="font-semibold text-green-600">{rec.impact}</span>
                    </div>
                    
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline">
                        View Details
                      </Button>
                      <Button size="sm">
                        {rec.action}
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Performance Metrics */}
      <Card>
        <CardHeader>
          <CardTitle>AI Performance This Month</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <div className="text-2xl font-bold text-green-600">94%</div>
              <div className="text-sm text-gray-600">Prediction Accuracy</div>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <div className="text-2xl font-bold text-blue-600">156</div>
              <div className="text-sm text-gray-600">Successful Rebookings</div>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <div className="text-2xl font-bold text-purple-600">$31,400</div>
              <div className="text-sm text-gray-600">Revenue Generated</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
