
import { motion } from "framer-motion";
import { Card, CardContent } from "../components/ui/card";
import { Badge } from "../components/ui/badge";
import { 
  Bell, 
  Mail, 
  MessageSquare, 
  Users, 
  DollarSign, 
  Calendar,
  AlertTriangle,
  TrendingUp,
  Clock,
  Heart,
  Shield,
  Target
} from "lucide-react";

export const OrbitDashboard = () => {
  const orbitCards = [
    // First orbit cards
    {
      orbit: 1,
      angle: 0,
      icon: Bell,
      title: "Notifications",
      value: "24",
      subtitle: "Active alerts",
      color: "bg-blue-500"
    },
    {
      orbit: 1,
      angle: 180,
      icon: Mail,
      title: "Email Campaigns",
      value: "156",
      subtitle: "Sent today",
      color: "bg-green-500"
    },
    // Second orbit cards
    {
      orbit: 2,
      angle: 60,
      icon: MessageSquare,
      title: "SMS Alerts",
      value: "89",
      subtitle: "Delivered",
      color: "bg-purple-500"
    },
    {
      orbit: 2,
      angle: 240,
      icon: Users,
      title: "At-Risk Patients",
      value: "42",
      subtitle: "Need attention",
      color: "bg-red-500"
    },
    // Third orbit cards
    {
      orbit: 3,
      angle: 30,
      icon: DollarSign,
      title: "Revenue Impact",
      value: "$47K",
      subtitle: "This month",
      color: "bg-emerald-500"
    },
    {
      orbit: 3,
      angle: 150,
      icon: Calendar,
      title: "Appointments",
      value: "234",
      subtitle: "Scheduled",
      color: "bg-orange-500"
    },
    {
      orbit: 3,
      angle: 270,
      icon: AlertTriangle,
      title: "No-Show Risk",
      value: "18",
      subtitle: "High probability",
      color: "bg-yellow-500"
    }
  ];

  const getOrbitRadius = (orbit: number) => {
    switch (orbit) {
      case 1: return 120;
      case 2: return 200;
      case 3: return 280;
      default: return 120;
    }
  };

  const getCardPosition = (orbit: number, angle: number) => {
    const radius = getOrbitRadius(orbit);
    const radian = (angle * Math.PI) / 180;
    return {
      x: Math.cos(radian) * radius,
      y: Math.sin(radian) * radius
    };
  };

  return (
    <div className="relative w-full h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-slate-800 overflow-hidden">
      {/* Orbital paths */}
      {[1, 2, 3].map((orbit) => (
        <motion.div
          key={orbit}
          className="absolute border-2 border-dashed border-[#18b1aa] rounded-full opacity-30"
          style={{
            width: getOrbitRadius(orbit) * 2,
            height: getOrbitRadius(orbit) * 2,
          }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 20 + orbit * 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}

      {/* Central teeth icon */}
      <motion.div
        className="absolute z-20 w-20 h-20 bg-white dark:bg-gray-800 rounded-full border-4 border-purple-500 flex items-center justify-center shadow-2xl"
        animate={{ 
          scale: [1, 1.1, 1],
          boxShadow: [
            "0 0 20px rgba(147, 51, 234, 0.3)",
            "0 0 40px rgba(147, 51, 234, 0.6)",
            "0 0 20px rgba(147, 51, 234, 0.3)"
          ]
        }}
        transition={{ 
          duration: 3, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="text-purple-600 dark:text-purple-400">
          <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
        </div>
      </motion.div>

      {/* Orbiting cards */}
      {orbitCards.map((card, index) => {
        const position = getCardPosition(card.orbit, card.angle);
        const IconComponent = card.icon;
        
        return (
          <motion.div
            key={index}
            className="absolute z-10"
            style={{
              left: '50%',
              top: '50%',
            }}
            animate={{
              x: [position.x, position.x],
              y: [position.y, position.y],
              rotate: 360
            }}
            transition={{
              duration: 15 + card.orbit * 5,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <Card className="w-20 h-16 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm border-2 hover:scale-110 transition-transform cursor-pointer shadow-lg">
              <CardContent className="p-1 flex flex-col items-center justify-center h-full">
                <div className={`w-4 h-4 ${card.color} rounded-full flex items-center justify-center mb-1`}>
                  <IconComponent className="w-2 h-2 text-white" />
                </div>
                <div className="text-sm font-bold text-gray-900 dark:text-white mb-0.5">
                  {card.value}
                </div>
                <div className="text-[8px] text-center text-gray-600 dark:text-gray-300 font-medium leading-tight">
                  {card.title}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        );
      })}

      {/* Additional floating elements */}
      <motion.div
        className="absolute top-20 left-20 text-[#18b1aa]"
        animate={{ 
          y: [-10, 10, -10],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <TrendingUp className="w-8 h-8" />
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-20 text-purple-500"
        animate={{ 
          rotate: [0, 180, 360],
          scale: [1, 1.2, 1]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Target className="w-10 h-10" />
      </motion.div>

      <motion.div
        className="absolute top-1/4 right-1/4 text-green-500"
        animate={{ 
          x: [-20, 20, -20],
          y: [-20, 20, -20]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <Heart className="w-6 h-6" />
      </motion.div>
    </div>
  );
};
