import React from "react";
import { Link } from "react-router-dom";
import {
  Users,
  Bell,
  Calendar,
  TrendingUp,
  PlusCircle,
} from "lucide-react";

import { Button } from "../../components/ui/Button";
import { Card, CardBody } from "../../components/ui/Card";
import { InvestorCard } from "../../components/investor/InvestorCard";
import { useAuth } from "../../context/AuthContext";
import { investors } from "../../data/users";

export const EntrepreneurDashboard: React.FC = () => {
  const { user } = useAuth();

  const recommendedInvestors = investors.slice(0, 3);

  if (!user) return null;

  return (
    <div className="space-y-6 animate-fade-in">

      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            Welcome, {user.name}
          </h1>

          <p className="text-gray-600">
            Here's what's happening with your startup today.
          </p>
        </div>

        <Link to="/investors">
          <Button leftIcon={<PlusCircle size={18} />}>
            Find Investors
          </Button>
        </Link>
      </div>

      {/* Summary Cards */}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">

        <Card className="bg-primary-50 border border-primary-100">
          <CardBody>
            <div className="flex items-center">
              <div className="p-3 bg-primary-100 rounded-full mr-4">
                <Bell size={20} className="text-primary-700" />
              </div>

              <div>
                <p className="text-sm font-medium text-primary-700">
                  Notifications
                </p>

                <h3 className="text-xl font-semibold text-primary-900">
                  5
                </h3>
              </div>
            </div>
          </CardBody>
        </Card>

        <Card className="bg-secondary-50 border border-secondary-100">
          <CardBody>
            <div className="flex items-center">
              <div className="p-3 bg-secondary-100 rounded-full mr-4">
                <Users size={20} className="text-secondary-700" />
              </div>

              <div>
                <p className="text-sm font-medium text-secondary-700">
                  Investors
                </p>

                <h3 className="text-xl font-semibold text-secondary-900">
                  {recommendedInvestors.length}
                </h3>
              </div>
            </div>
          </CardBody>
        </Card>

        <Card className="bg-accent-50 border border-accent-100">
          <CardBody>
            <div className="flex items-center">
              <div className="p-3 bg-accent-100 rounded-full mr-4">
                <Calendar size={20} className="text-accent-700" />
              </div>

              <div>
                <p className="text-sm font-medium text-accent-700">
                  Meetings
                </p>

                <h3 className="text-xl font-semibold text-accent-900">
                  2
                </h3>
              </div>
            </div>
          </CardBody>
        </Card>

        <Card className="bg-success-50 border border-success-100">
          <CardBody>
            <div className="flex items-center">
              <div className="p-3 bg-green-100 rounded-full mr-4">
                <TrendingUp size={20} className="text-success-700" />
              </div>

              <div>
                <p className="text-sm font-medium text-success-700">
                  Profile Views
                </p>

                <h3 className="text-xl font-semibold text-success-900">
                  24
                </h3>
              </div>
            </div>
          </CardBody>
        </Card>

      </div>

      {/* Recommended Investors */}

      <Card>

        <CardBody>

          <div className="flex justify-between items-center mb-6">

            <h2 className="text-xl font-semibold">
              Recommended Investors
            </h2>

            <Link
              to="/investors"
              className="text-primary-600 hover:underline"
            >
              View All
            </Link>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

            {recommendedInvestors.map((investor) => (
              <InvestorCard
                key={investor.id}
                investor={investor}
                showActions={false}
              />
            ))}

          </div>

        </CardBody>

      </Card>

    </div>
  );
};