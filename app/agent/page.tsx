"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  ArrowLeft,
  Mail,
  Lock,
  Eye,
  EyeOff,
  User,
  Phone,
  MapPin,
  Building,
  Users,
  TrendingUp,
  DollarSign,
  CheckCircle,
  AlertCircle,
  Loader2,
  Shield,
} from "lucide-react"
import Image from "next/image"

export default function AgentPortal() {
  const [isLogin, setIsLogin] = useState(true)
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    fullName: "",
    phoneNumber: "",
    location: "",
    organization: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsLoading(false)
    // Handle form submission logic here
  }

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword)
  }

  const switchMode = () => {
    setIsLogin(!isLogin)
    setFormData({
      email: "",
      password: "",
      confirmPassword: "",
      fullName: "",
      phoneNumber: "",
      location: "",
      organization: "",
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-lg border-b border-gray-200/50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-md border border-gray-100 overflow-hidden">
                <Image
                  src="/digitalize-nasarawa-logo.png"
                  alt="DIGITALIZE NASARAWA Logo"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-blue-700 to-purple-600 bg-clip-text text-transparent">
                 
                </h1>
                <p className="text-xs text-gray-600">Agent Portal</p>
              </div>
            </div>

            {/* Back to Home */}
            <Button asChild variant="ghost" className="text-gray-600 hover:text-blue-600">
              <Link href="/" className="flex items-center space-x-2">
                <ArrowLeft className="w-4 h-4" />
                <span>Back to Home</span>
              </Link>
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Information */}
            <div className="space-y-8">
              <div>
                <Badge className="mb-4 bg-blue-100 text-blue-800 border-blue-200">Agent Network</Badge>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Become a
                  <span className="block bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    Certified Agent
                  </span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Join our network of certified agents and help students across Nasarawa State access quality digital
                  education while earning competitive commissions.
                </p>
              </div>

              {/* Features */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Users className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Student Management</h3>
                    <p className="text-sm text-gray-600">Manage and support your students</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <DollarSign className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Earn Commissions</h3>
                    <p className="text-sm text-gray-600">Competitive rates for each student</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Shield className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Certified Training</h3>
                    <p className="text-sm text-gray-600">Get certified as an official agent</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Performance Tracking</h3>
                    <p className="text-sm text-gray-600">Monitor your agent dashboard</p>
                  </div>
                </div>
              </div>

              {/* Registration Fee Notice */}
              <Alert className="border-amber-200 bg-amber-50">
                <AlertCircle className="h-4 w-4 text-amber-600" />
                <AlertDescription className="text-amber-800">
                  <strong>Registration Fee:</strong> A one-time fee of ₦5,000 is required for agent certification and
                  training materials. This investment covers your starter kit and official certification.
                </AlertDescription>
              </Alert>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600 mb-1">50+</div>
                  <div className="text-sm text-gray-600">Active Agents</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-600 mb-1">₦50K+</div>
                  <div className="text-sm text-gray-600">Avg. Monthly</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600 mb-1">98%</div>
                  <div className="text-sm text-gray-600">Satisfaction</div>
                </div>
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="lg:pl-8">
              <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    {isLogin ? "Agent Login" : "Become an Agent"}
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    {isLogin
                      ? "Access your agent dashboard and manage students"
                      : "Join our network of certified education agents"}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-6">
                  {/* Registration Fee Notice */}
                  {!isLogin && (
                    <Alert className="border-blue-200 bg-blue-50">
                      <AlertCircle className="h-4 w-4 text-blue-600" />
                      <AlertDescription className="text-blue-800">
                        <strong>Next Step:</strong> After registration, you'll receive payment instructions for the
                        ₦5,000 certification fee and access to your agent training materials.
                      </AlertDescription>
                    </Alert>
                  )}

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Registration Fields */}
                    {!isLogin && (
                      <>
                        <div className="space-y-2">
                          <Label htmlFor="fullName" className="text-sm font-medium text-gray-700">
                            Full Name
                          </Label>
                          <div className="relative">
                            <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                            <Input
                              id="fullName"
                              name="fullName"
                              type="text"
                              placeholder="Enter your full name"
                              value={formData.fullName}
                              onChange={handleInputChange}
                              className="pl-10 h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                              required
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="phoneNumber" className="text-sm font-medium text-gray-700">
                            Phone Number
                          </Label>
                          <div className="relative">
                            <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                            <Input
                              id="phoneNumber"
                              name="phoneNumber"
                              type="tel"
                              placeholder="Enter your phone number"
                              value={formData.phoneNumber}
                              onChange={handleInputChange}
                              className="pl-10 h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                              required
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="location" className="text-sm font-medium text-gray-700">
                            Location (LGA)
                          </Label>
                          <div className="relative">
                            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                            <Input
                              id="location"
                              name="location"
                              type="text"
                              placeholder="Enter your Local Government Area"
                              value={formData.location}
                              onChange={handleInputChange}
                              className="pl-10 h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                              required
                            />
                          </div>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="organization" className="text-sm font-medium text-gray-700">
                            Organization (Optional)
                          </Label>
                          <div className="relative">
                            <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                            <Input
                              id="organization"
                              name="organization"
                              type="text"
                              placeholder="Enter your organization name"
                              value={formData.organization}
                              onChange={handleInputChange}
                              className="pl-10 h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                            />
                          </div>
                        </div>
                      </>
                    )}

                    {/* Email Field */}
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                        Email Address
                      </Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Enter your email address"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="pl-10 h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                          required
                        />
                      </div>
                    </div>

                    {/* Password Field */}
                    <div className="space-y-2">
                      <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                        Password
                      </Label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                        <Input
                          id="password"
                          name="password"
                          type={showPassword ? "text" : "password"}
                          placeholder="Enter your password"
                          value={formData.password}
                          onChange={handleInputChange}
                          className="pl-10 pr-10 h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                          required
                        />
                        <button
                          type="button"
                          onClick={togglePasswordVisibility}
                          className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                        >
                          {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                        </button>
                      </div>
                    </div>

                    {/* Confirm Password Field (Registration only) */}
                    {!isLogin && (
                      <div className="space-y-2">
                        <Label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">
                          Confirm Password
                        </Label>
                        <div className="relative">
                          <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                          <Input
                            id="confirmPassword"
                            name="confirmPassword"
                            type="password"
                            placeholder="Confirm your password"
                            value={formData.confirmPassword}
                            onChange={handleInputChange}
                            className="pl-10 h-12 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                            required
                          />
                        </div>
                      </div>
                    )}

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="w-full h-12 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      {isLoading ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          {isLogin ? "Signing In..." : "Registering..."}
                        </>
                      ) : (
                        <>
                          {isLogin ? "Sign In" : "Register as Agent"}
                          <CheckCircle className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>

                  <Separator />

                  {/* Switch Mode */}
                  <div className="text-center">
                    <p className="text-sm text-gray-600">
                      {isLogin ? "New to our agent network?" : "Already registered as an agent?"}
                    </p>
                    <Button
                      variant="link"
                      onClick={switchMode}
                      className="text-blue-600 hover:text-blue-700 font-medium p-0 h-auto"
                    >
                      {isLogin ? "Apply to become an agent" : "Sign in here"}
                    </Button>
                  </div>

                  {/* Help Text */}
                  <div className="text-center pt-4 border-t border-gray-200">
                    <p className="text-xs text-gray-500 mb-2">Questions about becoming an agent?</p>
                    <Button asChild variant="link" className="text-xs text-blue-600 hover:text-blue-700 p-0 h-auto">
                      <Link href="/contact">Contact Our Team</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
