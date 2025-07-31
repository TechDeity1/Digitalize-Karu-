"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { User, BookOpen, Calendar, Award, Settings, LogOut, ArrowLeft, CheckCircle, Clock, Play } from "lucide-react"

export default function StudentDashboard() {
  const [isVerified, setIsVerified] = useState(false)
  const [studentId, setStudentId] = useState("")

  // Mock student data
  const studentData = {
    name: "John Doe",
    studentId: "DN2024001",
    course: "Digital Literacy Program",
    progress: 65,
    completedWeeks: 3,
    totalWeeks: 4,
  }

  const weeklyProgress = [
    { week: 1, title: "Introduction to Computers", status: "completed", score: 85 },
    { week: 2, title: "Internet Basics", status: "completed", score: 92 },
    { week: 3, title: "Digital Communication", status: "completed", score: 78 },
    { week: 4, title: "Digital Security", status: "in-progress", score: null },
  ]

  if (!isVerified) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <Link href="/student" className="inline-flex items-center text-green-600 hover:text-green-700 mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Login
            </Link>
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">DN</span>
              </div>
              <div className="text-left">
                <h1 className="text-xl font-bold text-green-800">DIGITALIZE NASARAWA</h1>
                <p className="text-sm text-gray-600">Student Verification</p>
              </div>
            </div>
          </div>

          <Card className="shadow-lg">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl font-bold">Are you a Student?</CardTitle>
              <CardDescription>Enter your Student ID to access your dashboard</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="student-id">Insert Student ID</Label>
                <Input
                  id="student-id"
                  type="text"
                  placeholder="Enter your Student ID"
                  value={studentId}
                  onChange={(e) => setStudentId(e.target.value)}
                  required
                />
              </div>
              <Button className="w-full bg-green-600 hover:bg-green-700" onClick={() => setIsVerified(true)}>
                Submit
              </Button>
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-2">Not yet a Student?</p>
                <Button variant="outline" asChild>
                  <Link href="/student/register">Apply</Link>
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
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">DN</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-green-800">Student Dashboard</h1>
                <p className="text-sm text-gray-600">Welcome back, {studentData.name}</p>
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
            {/* Student Info Card */}
            <Card>
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                    <User className="w-8 h-8 text-green-600" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl">{studentData.name}</CardTitle>
                    <CardDescription>Student ID: {studentData.studentId}</CardDescription>
                    <Badge variant="secondary" className="mt-2">
                      {studentData.course}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* Progress Report */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <BookOpen className="w-5 h-5" />
                  <span>Progress Report</span>
                </CardTitle>
                <CardDescription>Course: {studentData.course}</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-2">
                      <span>Overall Progress</span>
                      <span>{studentData.progress}%</span>
                    </div>
                    <Progress value={studentData.progress} className="h-2" />
                  </div>

                  <div className="grid gap-4">
                    {weeklyProgress.map((week) => (
                      <div key={week.week} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center">
                            {week.status === "completed" ? (
                              <CheckCircle className="w-4 h-4 text-green-600" />
                            ) : week.status === "in-progress" ? (
                              <Play className="w-4 h-4 text-blue-600" />
                            ) : (
                              <Clock className="w-4 h-4 text-gray-400" />
                            )}
                          </div>
                          <div>
                            <p className="font-medium">Week {week.week}</p>
                            <p className="text-sm text-gray-600">{week.title}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          {week.score && (
                            <Badge variant={week.score >= 80 ? "default" : "secondary"}>{week.score}%</Badge>
                          )}
                          {week.status === "in-progress" && <Badge variant="outline">In Progress</Badge>}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Quick Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Completed Weeks</span>
                  <span className="font-semibold">
                    {studentData.completedWeeks}/{studentData.totalWeeks}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Current Course</span>
                  <span className="font-semibold">Active</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Next Deadline</span>
                  <span className="font-semibold">Jan 15</span>
                </div>
              </CardContent>
            </Card>

            {/* Upcoming Activities */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center space-x-2">
                  <Calendar className="w-5 h-5" />
                  <span>Upcoming</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="p-3 bg-blue-50 rounded-lg">
                  <p className="font-medium text-blue-900">Week 4 Assignment</p>
                  <p className="text-sm text-blue-700">Due: January 15, 2025</p>
                </div>
                <div className="p-3 bg-green-50 rounded-lg">
                  <p className="font-medium text-green-900">Course Assessment</p>
                  <p className="text-sm text-green-700">January 20, 2025</p>
                </div>
              </CardContent>
            </Card>

            {/* Achievements */}
            <Card>
              <CardHeader>
                <CardTitle className="text-lg flex items-center space-x-2">
                  <Award className="w-5 h-5" />
                  <span>Achievements</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center">
                    <Award className="w-4 h-4 text-yellow-600" />
                  </div>
                  <div>
                    <p className="font-medium">First Week Complete</p>
                    <p className="text-sm text-gray-600">Completed Week 1</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Award className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-medium">High Scorer</p>
                    <p className="text-sm text-gray-600">90%+ in Week 2</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
