import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Badge } from "../components/ui/badge";
import { ThemeToggle } from "../components/ThemeToggle";
import { DashboardMetrics } from "../components/DashboardMetrics";
import { OrbitDashboard } from "../components/OrbitDashboard";
import { PatientDatabase } from "../components/PatientDatabase";
import { AIRecommendations } from "../components/AIRecommendations";
import { CampaignManager } from "../components/CampaignManager";
import { PaymentProcessor } from "../components/PaymentProcessor";

import teethIcon from "../assets/images/teeth.jpg";
import { CalendarIntegration } from '../components/CalendarIntegration';


const UserDashboard = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-slate-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <div className="bg-white dark:bg-gray-900 border-b border-blue-100 dark:border-gray-700 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
             <div className=" text-white p-2 rounded-lg">
                <img src={teethIcon}  alt="dental" style={{width:"60px", height:"60px"}}/>
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-white">DentalAI Pro</h1>
                <p className="text-sm text-gray-600 dark:text-gray-300">AI-Powered Patient Retention Platform</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Badge variant="outline" className="bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 border-green-200 dark:border-green-700">
                Connected to Open Dental
              </Badge>
              <ThemeToggle />
              <Button variant="outline" size="sm">Settings</Button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-7 mb-8">
            <TabsTrigger value="dashboard">Dashboard</TabsTrigger>
            <TabsTrigger value="orbit">Orbit View</TabsTrigger>
            <TabsTrigger value="patients">Patients</TabsTrigger>
            <TabsTrigger value="ai-insights">AI Insights</TabsTrigger>
            <TabsTrigger value="campaigns">Campaigns</TabsTrigger>
            <TabsTrigger value="payments">Payments</TabsTrigger>
            <TabsTrigger value="calendar">Calendar</TabsTrigger>
          </TabsList>

          <TabsContent value="dashboard" className="space-y-6">
            <DashboardMetrics />
          </TabsContent>

          <TabsContent value="orbit" className="space-y-6">
            <OrbitDashboard />
          </TabsContent>

          <TabsContent value="patients" className="space-y-6">
            <PatientDatabase />
          </TabsContent>

          <TabsContent value="ai-insights" className="space-y-6">
            <AIRecommendations />
          </TabsContent>

          <TabsContent value="campaigns" className="space-y-6">
            <CampaignManager />
          </TabsContent>

          <TabsContent value="payments" className="space-y-6">
            <PaymentProcessor />
          </TabsContent>

          <TabsContent value="calendar" className="space-y-6">
            <CalendarIntegration />
          </TabsContent>
        </Tabs>
      </div>
    </div>
    );
};

export default UserDashboard;