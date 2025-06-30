
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";

export const PatientDatabase = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filterRisk, setFilterRisk] = useState("all");

  const patients = [
    {
      id: 1,
      name: "Sarah Martinez",
      lastVisit: "2023-08-15",
      daysSince: 137,
      riskLevel: "high",
      phone: "(555) 123-4567",
      email: "sarah.m@email.com",
      noShowProbability: 85,
      upsellPotential: "Crown ($2,400)",
      insuranceStatus: "Active"
    },
    {
      id: 2,
      name: "Michael Chen",
      lastVisit: "2023-10-22",
      daysSince: 70,
      riskLevel: "medium",
      phone: "(555) 234-5678",
      email: "m.chen@email.com",
      noShowProbability: 45,
      upsellPotential: "Whitening ($450)",
      insuranceStatus: "Expired"
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      lastVisit: "2023-06-10",
      daysSince: 204,
      riskLevel: "high",
      phone: "(555) 345-6789",
      email: "emily.r@email.com",
      noShowProbability: 92,
      upsellPotential: "Veneers ($3,200)",
      insuranceStatus: "None"
    },
    {
      id: 4,
      name: "David Kim",
      lastVisit: "2023-11-15",
      daysSince: 46,
      riskLevel: "low",
      phone: "(555) 456-7890",
      email: "d.kim@email.com",
      noShowProbability: 15,
      upsellPotential: "Sealants ($180)",
      insuranceStatus: "Active"
    },
    {
      id: 5,
      name: "Jessica Thompson",
      lastVisit: "2023-07-28",
      daysSince: 156,
      riskLevel: "high",
      phone: "(555) 567-8901",
      email: "j.thompson@email.com",
      noShowProbability: 78,
      upsellPotential: "Implant ($4,500)",
      insuranceStatus: "Pending"
    }
  ];

  const getRiskBadge = (risk: string) => {
    const colors = {
      high: "bg-red-100 text-red-700 border-red-200",
      medium: "bg-amber-100 text-amber-700 border-amber-200",
      low: "bg-green-100 text-green-700 border-green-200"
    };
    return colors[risk as keyof typeof colors] || colors.medium;
  };

  const filteredPatients = patients.filter(patient => {
    const matchesSearch = patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         patient.email.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filterRisk === "all" || patient.riskLevel === filterRisk;
    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-6">
      {/* Search and Filters */}
      <Card>
        <CardHeader>
          <CardTitle>Patient Management</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col sm:flex-row gap-4">
            <Input
              placeholder="Search patients..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="flex-1"
            />
            <div className="flex gap-2">
              <Button
                variant={filterRisk === "all" ? "default" : "outline"}
                onClick={() => setFilterRisk("all")}
                size="sm"
              >
                All
              </Button>
              <Button
                variant={filterRisk === "high" ? "default" : "outline"}
                onClick={() => setFilterRisk("high")}
                size="sm"
              >
                High Risk
              </Button>
              <Button
                variant={filterRisk === "medium" ? "default" : "outline"}
                onClick={() => setFilterRisk("medium")}
                size="sm"
              >
                Medium Risk
              </Button>
              <Button
                variant={filterRisk === "low" ? "default" : "outline"}
                onClick={() => setFilterRisk("low")}
                size="sm"
              >
                Low Risk
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Patient List */}
      <div className="grid gap-4">
        {filteredPatients.map((patient) => (
          <Card key={patient.id} className="hover:shadow-lg transition-shadow">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                {/* Patient Info */}
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">{patient.name}</h3>
                    <Badge className={getRiskBadge(patient.riskLevel)}>
                      {patient.riskLevel.toUpperCase()} RISK
                    </Badge>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-600">
                    <p>📧 {patient.email}</p>
                    <p>📱 {patient.phone}</p>
                    <p>📅 Last visit: {patient.lastVisit} ({patient.daysSince} days ago)</p>
                    <p>🏥 Insurance: {patient.insuranceStatus}</p>
                  </div>
                </div>

                {/* AI Insights */}
                <div className="bg-blue-50 p-4 rounded-lg min-w-[280px]">
                  <h4 className="font-semibold text-blue-900 mb-2">AI Insights</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>No-show probability:</span>
                      <Badge variant="outline" className={
                        patient.noShowProbability > 70 ? "border-red-300 text-red-700" :
                        patient.noShowProbability > 40 ? "border-amber-300 text-amber-700" :
                        "border-green-300 text-green-700"
                      }>
                        {patient.noShowProbability}%
                      </Badge>
                    </div>
                    <div className="flex justify-between">
                      <span>Upsell opportunity:</span>
                      <span className="font-medium text-green-700">{patient.upsellPotential}</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-col gap-2 min-w-[140px]">
                  <Button size="sm" className="w-full">
                    📞 Contact
                  </Button>
                  <Button size="sm" variant="outline" className="w-full">
                    📅 Book Slot
                  </Button>
                  <Button size="sm" variant="outline" className="w-full">
                    💰 Send Promo
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
