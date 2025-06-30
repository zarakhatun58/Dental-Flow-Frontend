
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Input } from "../components/ui/input";

export const PaymentProcessor = () => {
  const [showPaymentLink, setShowPaymentLink] = useState(false);

  const recentTransactions = [
    {
      id: 1,
      patient: "Sarah Martinez",
      amount: "$89.00",
      service: "Discounted Cleaning",
      status: "completed",
      date: "2024-01-02",
      method: "Card"
    },
    {
      id: 2,
      patient: "Michael Chen",
      amount: "$225.00",
      service: "Whitening Treatment",
      status: "completed",
      date: "2024-01-02",
      method: "Card"
    },
    {
      id: 3,
      patient: "Emily Rodriguez",
      amount: "$45.00",
      service: "50% Off Cleaning",
      status: "pending",
      date: "2024-01-02",
      method: "Card"
    },
    {
      id: 4,
      patient: "David Kim",
      amount: "$320.00",
      service: "Crown Consultation",
      status: "completed",
      date: "2024-01-01",
      method: "Card"
    }
  ];

  const promotionalOffers = [
    {
      id: 1,
      title: "New Patient Special",
      discount: "50% off first cleaning",
      price: "$75",
      originalPrice: "$150",
      active: true
    },
    {
      id: 2,
      title: "Win-Back Offer",
      discount: "Free consultation + X-rays",
      price: "$0",
      originalPrice: "$120",
      active: true
    },
    {
      id: 3,
      title: "Emergency Same-Day",
      discount: "No additional fees",
      price: "$200",
      originalPrice: "$250",
      active: false
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-700';
      case 'pending': return 'bg-amber-100 text-amber-700';
      case 'failed': return 'bg-red-100 text-red-700';
      default: return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="space-y-6">
      {/* Payment Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="bg-green-100 p-2 rounded-lg">
                <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z"/>
                </svg>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">$12,450</div>
                <div className="text-sm text-gray-600">Today's Revenue</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="bg-blue-100 p-2 rounded-lg">
                <svg className="w-5 h-5 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                </svg>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">47</div>
                <div className="text-sm text-gray-600">Pre-payments</div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-6">
            <div className="flex items-center gap-3">
              <div className="bg-purple-100 p-2 rounded-lg">
                <svg className="w-5 h-5 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"/>
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-3-13a1 1 0 112 0v.092a4.535 4.535 0 013.5 1.674 1 1 0 01-1.732 1.002A2.535 2.535 0 008.5 6.5H8a1 1 0 100 2h1v2H8a1 1 0 100 2h1v2a1 1 0 102 0v-.092a4.535 4.535 0 013.5-1.674 1 1 0 01-1.732-1.002A2.535 2.535 0 0010.5 13.5H12a1 1 0 100-2h-1v-2h1a1 1 0 100-2h-1.5c-.175 0-.348.011-.5.034V5a1 1 0 01-2 0z" clipRule="evenodd"/>
                </svg>
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">$3,200</div>
                <div className="text-sm text-gray-600">Promo Revenue</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Payment Link Generator */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Payment Link</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Input placeholder="Patient name" />
            <Input placeholder="Service description" />
            <Input placeholder="Amount ($)" type="number" />
            <Button>Generate Link</Button>
          </div>
          {showPaymentLink && (
            <div className="mt-4 p-4 bg-blue-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-2">Payment link generated:</p>
              <div className="flex items-center gap-2">
                <Input 
                  value="https://payments.dentalai.pro/pay/abc123" 
                  readOnly 
                  className="bg-white"
                />
                <Button size="sm" variant="outline">Copy</Button>
                <Button size="sm" variant="outline">SMS</Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Promotional Offers */}
      <Card>
        <CardHeader>
          <CardTitle>Active Promotional Offers</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {promotionalOffers.map((offer) => (
              <div key={offer.id} className={`p-4 rounded-lg border ${
                offer.active ? 'border-green-200 bg-green-50' : 'border-gray-200 bg-gray-50'
              }`}>
                <div className="flex items-center justify-between mb-2">
                  <h4 className="font-semibold text-gray-900">{offer.title}</h4>
                  <Badge className={offer.active ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}>
                    {offer.active ? 'Active' : 'Inactive'}
                  </Badge>
                </div>
                <p className="text-sm text-gray-600 mb-3">{offer.discount}</p>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-lg font-bold text-green-600">{offer.price}</span>
                    <span className="text-sm text-gray-500 line-through ml-2">{offer.originalPrice}</span>
                  </div>
                  <Button size="sm" variant="outline">
                    {offer.active ? 'Pause' : 'Activate'}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Transactions */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Transactions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {recentTransactions.map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center gap-3">
                    <h4 className="font-semibold text-gray-900">{transaction.patient}</h4>
                    <Badge className={getStatusColor(transaction.status)}>
                      {transaction.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600">{transaction.service} • {transaction.date}</p>
                </div>
                <div className="text-right">
                  <div className="text-lg font-bold text-gray-900">{transaction.amount}</div>
                  <div className="text-sm text-gray-500">{transaction.method}</div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};
