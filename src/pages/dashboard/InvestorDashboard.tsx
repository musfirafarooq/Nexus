import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Users,
  PieChart,
  Filter,
  Search,
  PlusCircle,
  Wallet,
} from "lucide-react";

import { Button } from "../../components/ui/Button";
import { Card, CardBody, CardHeader } from "../../components/ui/Card";
import { Input } from "../../components/ui/Input";
import { Badge } from "../../components/ui/Badge";
import { EntrepreneurCard } from "../../components/entrepreneur/EntrepreneurCard";
import { useAuth } from "../../context/AuthContext";
import { entrepreneurs } from "../../data/users";
import { getRequestsFromInvestor } from "../../data/collaborationRequests";

export const InvestorDashboard: React.FC = () => {
  const { user } = useAuth();

  const [searchQuery, setSearchQuery] = useState("");
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);

  if (!user) return null;

  const sentRequests = getRequestsFromInvestor(user.id);

  const industries = Array.from(
    new Set(entrepreneurs.map((e) => e.industry))
  );

  const filteredEntrepreneurs = entrepreneurs.filter((entrepreneur) => {
    const matchesSearch =
      searchQuery === "" ||
      entrepreneur.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      entrepreneur.startupName
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      entrepreneur.industry
        .toLowerCase()
        .includes(searchQuery.toLowerCase());

    const matchesIndustry =
      selectedIndustries.length === 0 ||
      selectedIndustries.includes(entrepreneur.industry);

    return matchesSearch && matchesIndustry;
  });

  const toggleIndustry = (industry: string) => {
    setSelectedIndustries((prev) =>
      prev.includes(industry)
        ? prev.filter((i) => i !== industry)
        : [...prev, industry]
    );
  };

  return (
    <div className="space-y-6 animate-fade-in">

      {/* Header */}

      <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-4">

        <div>

          <h1 className="text-3xl font-bold text-gray-900">
            Welcome, {user.name}
          </h1>

          <p className="text-gray-600 mt-1">
            Discover and fund promising startups.
          </p>

        </div>

        <Link to="/entrepreneurs">
          <Button leftIcon={<PlusCircle size={18} />}>
            Browse Startups
          </Button>
        </Link>

      </div>

      {/* Dashboard Cards */}

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">

        <Card className="bg-primary-50 border border-primary-100">
          <CardBody>

            <div className="flex items-center">

              <div className="p-3 bg-primary-100 rounded-full mr-4">
                <Users
                  size={22}
                  className="text-primary-700"
                />
              </div>

              <div>

                <p className="text-sm font-medium text-primary-700">
                  Startups
                </p>

                <h3 className="text-2xl font-bold text-primary-900">
                  {entrepreneurs.length}
                </h3>

              </div>

            </div>

          </CardBody>
        </Card>

        <Card className="bg-secondary-50 border border-secondary-100">
          <CardBody>

            <div className="flex items-center">

              <div className="p-3 bg-secondary-100 rounded-full mr-4">
                <PieChart
                  size={22}
                  className="text-secondary-700"
                />
              </div>

              <div>

                <p className="text-sm font-medium text-secondary-700">
                  Industries
                </p>

                <h3 className="text-2xl font-bold text-secondary-900">
                  {industries.length}
                </h3>

              </div>

            </div>

          </CardBody>
        </Card>

        <Card className="bg-accent-50 border border-accent-100">
          <CardBody>

            <div className="flex items-center">

              <div className="p-3 bg-accent-100 rounded-full mr-4">
                <Users
                  size={22}
                  className="text-accent-700"
                />
              </div>

              <div>

                <p className="text-sm font-medium text-accent-700">
                  Connections
                </p>

                <h3 className="text-2xl font-bold text-accent-900">
                  {sentRequests.filter(
                    (r) => r.status === "accepted"
                  ).length}
                </h3>

              </div>

            </div>

          </CardBody>
        </Card>

        <Card className="bg-green-50 border border-green-100">
          <CardBody>

            <div className="flex items-center">

              <div className="p-3 bg-green-100 rounded-full mr-4">
                <Wallet
                  size={22}
                  className="text-green-700"
                />
              </div>

              <div>

                <p className="text-sm font-medium text-green-700">
                  Wallet Balance
                </p>

                <h3 className="text-2xl font-bold text-green-900">
                  $120,000
                </h3>

              </div>

            </div>

          </CardBody>
        </Card>

      </div>

      {/* Search */}

      <Card>

        <CardBody>

          <Input
            placeholder="Search startups..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            fullWidth
            startAdornment={<Search size={18} />}
          />

        </CardBody>

      </Card>

      {/* Filters */}

      <div className="flex items-center gap-2 flex-wrap">

        <Filter size={18} />

        {industries.map((industry) => (
          <Badge
            key={industry}
            variant={
              selectedIndustries.includes(industry)
                ? "primary"
                : "gray"
            }
            className="cursor-pointer"
            onClick={() => toggleIndustry(industry)}
          >
            {industry}
          </Badge>
        ))}

      </div>
            {/* Featured Startups */}

      <Card>

        <CardHeader>

          <h2 className="text-xl font-semibold">
            Featured Startups
          </h2>

        </CardHeader>

        <CardBody>

          {filteredEntrepreneurs.length > 0 ? (

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">

              {filteredEntrepreneurs.map((entrepreneur) => (

                <EntrepreneurCard
                  key={entrepreneur.id}
                  entrepreneur={entrepreneur}
                />

              ))}

            </div>

          ) : (

            <div className="text-center py-12">

              <h3 className="text-lg font-semibold text-gray-700">
                No startups found
              </h3>

              <p className="text-gray-500 mt-2">
                Try changing your search or selected filters.
              </p>

              <Button
                className="mt-5"
                variant="outline"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedIndustries([]);
                }}
              >
                Clear Filters
              </Button>

            </div>

          )}

        </CardBody>

      </Card>

      {/* Quick Actions */}

      <Card>

        <CardHeader>

          <h2 className="text-xl font-semibold">
            Quick Actions
          </h2>

        </CardHeader>

        <CardBody>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

            <Link to="/payments">
              <Button fullWidth>
                Payments
              </Button>
            </Link>

            <Link to="/deals">
              <Button
                fullWidth
                variant="outline"
              >
                Deals
              </Button>
            </Link>

            <Link to="/documents">
              <Button
                fullWidth
                variant="outline"
              >
                Documents
              </Button>
            </Link>

            <Link to="/messages">
              <Button
                fullWidth
                variant="outline"
              >
                Messages
              </Button>
            </Link>

          </div>

        </CardBody>

      </Card>

    </div>
  );
};