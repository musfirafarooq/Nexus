import React from "react";
import { Link } from "react-router-dom";
import {
  Users,
  Bell,
  Calendar,
  TrendingUp,
  PlusCircle,
  Wallet,
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

      <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-4">

        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome, {user.name}
          </h1>

          <p className="text-gray-600 mt-1">
            Here's what's happening with your startup today.
          </p>
        </div>

        <Link to="/investors">
          <Button leftIcon={<PlusCircle size={18} />}>
            Find Investors
          </Button>
        </Link>

      </div>

      {/* Dashboard Cards */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-5">

        {/* Notifications */}

        <Card className="bg-primary-50 border border-primary-100">
          <CardBody>

            <div className="flex items-center">

              <div className="p-3 bg-primary-100 rounded-full mr-4">
                <Bell
                  size={22}
                  className="text-primary-700"
                />
              </div>

              <div>
                <p className="text-sm font-medium text-primary-700">
                  Notifications
                </p>

                <h3 className="text-2xl font-bold text-primary-900">
                  5
                </h3>
              </div>

            </div>

          </CardBody>
        </Card>

        {/* Investors */}

        <Card className="bg-secondary-50 border border-secondary-100">
          <CardBody>

            <div className="flex items-center">

              <div className="p-3 bg-secondary-100 rounded-full mr-4">
                <Users
                  size={22}
                  className="text-secondary-700"
                />
              </div>

              <div>

                <p className="text-sm font-medium text-secondary-700">
                  Investors
                </p>

                <h3 className="text-2xl font-bold text-secondary-900">
                  {recommendedInvestors.length}
                </h3>

              </div>

            </div>

          </CardBody>
        </Card>

        {/* Meetings */}

        <Card className="bg-accent-50 border border-accent-100">
          <CardBody>

            <div className="flex items-center">

              <div className="p-3 bg-accent-100 rounded-full mr-4">
                <Calendar
                  size={22}
                  className="text-accent-700"
                />
              </div>

              <div>

                <p className="text-sm font-medium text-accent-700">
                  Meetings
                </p>

                <h3 className="text-2xl font-bold text-accent-900">
                  2
                </h3>

              </div>

            </div>

          </CardBody>
        </Card>

        {/* Profile Views */}

        <Card className="bg-green-50 border border-green-100">
          <CardBody>

            <div className="flex items-center">

              <div className="p-3 bg-green-100 rounded-full mr-4">
                <TrendingUp
                  size={22}
                  className="text-green-700"
                />
              </div>

              <div>

                <p className="text-sm font-medium text-green-700">
                  Profile Views
                </p>

                <h3 className="text-2xl font-bold text-green-900">
                  24
                </h3>

              </div>

            </div>

          </CardBody>
        </Card>

        {/* Wallet Balance */}

        <Card className="bg-emerald-50 border border-emerald-100">
          <CardBody>

            <div className="flex items-center">

              <div className="p-3 bg-emerald-100 rounded-full mr-4">
                <Wallet
                  size={22}
                  className="text-emerald-700"
                />
              </div>

              <div>

                <p className="text-sm font-medium text-emerald-700">
                  Wallet Balance
                </p>

                <h3 className="text-2xl font-bold text-emerald-900">
                  $25,000
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

            <h2 className="text-xl font-semibold text-gray-900">
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

      {/* Quick Actions */}

      <Card>

        <CardBody>

          <h2 className="text-xl font-semibold mb-5">
            Quick Actions
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

            <Link to="/payments">
              <Button fullWidth>
                Payments
              </Button>
            </Link>

            <Link to="/documents">
              <Button fullWidth variant="outline">
                Documents
              </Button>
            </Link>

            <Link to="/meetings">
              <Button fullWidth variant="outline">
                Meetings
              </Button>
            </Link>

            <Link to="/messages">
              <Button fullWidth variant="outline">
                Messages
              </Button>
            </Link>

          </div>

        </CardBody>

      </Card>

    </div>
  );
};