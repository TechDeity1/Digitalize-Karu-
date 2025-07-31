"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { User, UserPlus, DollarSign, MapPin, Settings, LogOut, ArrowLeft, Calendar, TrendingUp } from "lucide-react"

export default function AgentDashboard() {
  const [isVerified, setIsVerified] = useState(false)
  const [agentId, setAgentId] = useState("")

  // Mock agent data
  const agentData = {
    name: "Jane Smith",
    agentId: "AG2024001",
    ward: "Ward 3, Karu LGA",
    registeredStudents: 15,
    weeklyIncome: 45000,
    totalIncome: 180000,
  }

  const weeklyStats = [
    { week: "Week 1", students: 3, income: 30000 },
    { week: "Week 2", students: 5, income: 50000 },
    { week: "Week 3", students: 4, income: 40000 },
    { week: "Week 4", students: 3, income: 30000 },
  ]

  const recentRegistrations = [
    { name: "John Doe", course: "Digital Literacy", date: "2024-12-28", status: "completed" },
    { name: "Mary Johnson", course: "Computer Basics", date: "2024-12-27", status: "pending" },
    { name: "David Wilson", course: "Internet Skills", date: "2024-12-26", status: "completed" },
  ]

  if (!isVerified) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <Link href="/agent" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Login
            </Link>
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">DN</span>
              </div>
              <div className="text-left">
                <h1 className="text-xl font-bold text-blue-800">DIGITALIZE NASARAWA</h1>
                <p className="text-sm text-gray-600">Agent Verification</p>
              </div>
            </div>
          </div>

          <Card className="shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold">Are you an Agent?</CardTitle>
              <CardDescription>Enter your Agent ID to access your dashboard</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="agent-id">Insert Agent ID</Label>
                <Input
                  id="agent-id"
                  type="text"
                  placeholder="Enter your Agent ID"
                  value={agentId}
                  onChange={(e) => setAgentId(e.target.value)}
                  required
                />
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700" onClick={() => setIsVerified(true)}>
                Submit
              </Button>
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-2">Not yet an Agent?</p>
                <Button variant="outline" asChild>
                  <Link href="/agent/register">Apply</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">DN</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-blue-800">Agent Dashboard</h1>
                <p className="text-sm text-gray-600">Welcome back, {agentData.name}</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="icon">
                <Settings className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <LogOut className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Agent Info Card */}
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                    <User className="w-8 h-8 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">{agentData.name}</CardTitle>
                    <CardDescription>Agent ID: {agentData.agentId}</CardDescription>
                    <div className="flex items-center space-x-2 mt-2">
                      <MapPin className="w-4 h-4 text-gray-500" />
                      <span className="text-sm text-gray-600">{agentData.ward}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <UserPlus className="w-5 h-5" />
                  <span>Quick Actions</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <Button className="h-20 bg-green-600 hover:bg-green-700" asChild>
                    <Link href="/agent/register-student">
                      <div className="text-center">
                        <UserPlus className="w-6 h-6 mx-auto mb-2" />
                        <span>Register Student</span>
                      </div>
                    </Link>
                  </Button>
                  <Button variant="outline" className="h-20 bg-transparent" asChild>
                    <Link href="/agent/students">
                      <div className="text-center">
                        <User className="w-6 h-6 mx-auto mb-2" />
                        <span>View Students</span>
                      </div>
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Weekly Performance */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <TrendingUp className="w-5 h-5" />
                  <span>Weekly Performance</span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {weeklyStats.map((week, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center">
                          <Calendar className="w-4 h-4 text-blue-600" />
                        </div>
                        <div>
                          <p className="font-medium">{week.week}</p>
                          <p className="text-sm text-gray-600">{week.students} students registered</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant="secondary">₦{week.income.toLocaleString()}</Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Recent Registrations */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Student Registrations</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentRegistrations.map((student, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div>
                        <p className="font-medium">{student.name}</p>
                        <p className="text-sm text-gray-600">{student.course}</p>
                        <p className="text-xs text-gray-500">{student.date}</p>
                      </div>
                      <Badge variant={student.status === "completed" ? "default" : "secondary"}>{student.status}</Badge>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Income Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center space-x-2">
                  <DollarSign className="w-5 h-5" />
                  <span>Income Overview</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <p className="text-sm text-green-600">Expected Income This Week</p>
                  <p className="text-2xl font-bold text-green-800">₦{agentData.weeklyIncome.toLocaleString()}</p>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Students</span>
                  <span className="font-semibold">{agentData.registeredStudents}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Earnings</span>
                  <span className="font-semibold">₦{agentData.totalIncome.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">This Month</span>
                  <span className="font-semibold">₦{(agentData.weeklyIncome * 4).toLocaleString()}</span>
                </div>
              </CardContent>
            </Card>

            {/* Agent Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Agent Statistics</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Active Students</span>
                  <span className="font-semibold">{agentData.registeredStudents}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Completion Rate</span>
                  <span className="font-semibold">85%</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Agent Rating</span>
                  <span className="font-semibold">4.8/5</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Ward Coverage</span>
                  <span className="font-semibold">Ward 3</span>
                </div>
              </CardContent>
            </Card>

            {/* Notifications */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Notifications</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="font-medium text-blue-900">New Course Available</p>
                  <p className="text-sm text-blue-700">Advanced Digital Skills course now open</p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <p className="font-medium text-green-900">Payment Processed</p>
                  <p className="text-sm text-green-700">Weekly commission deposited</p>
                </div>
                <div className="p-3 bg-yellow-50 rounded-lg">
                  <p className="font-medium text-yellow-900">Training Session</p>
                  <p className="text-sm text-yellow-700">Agent training on Jan 15, 2025</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
