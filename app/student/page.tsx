"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ArrowLeft, Mail, Lock, Eye, EyeOff, User, AlertCircle, CheckCircle } from "lucide-react"

export default function StudentPortal() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLogin, setIsLogin] = useState(true)
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    firstName: "",
    lastName: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-lg border-b border-gray-200/50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2 text-emerald-600 hover:text-emerald-700">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Home</span>
            </Link>
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">DN</span>
              </div>
              <div>
                <h1 className="text-xl font-bold bg-gradient-to-r from-emerald-700 to-blue-600 bg-clip-text text-transparent">
                  DIGITALIZE NASARAWA
                </h1>
                <p className="text-xs text-gray-600">Student E-Facility</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-md mx-auto">
          {/* Welcome Card */}
          <Card className="shadow-2xl border-0 bg-white/80 backdrop-blur-sm">
            <CardHeader className="text-center pb-6">
              <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <User className="w-8 h-8 text-white" />
              </div>
              <CardTitle className="text-2xl font-bold text-gray-900">
                {isLogin ? "Welcome Back!" : "Join Our Platform"}
              </CardTitle>
              <CardDescription className="text-gray-600">
                {isLogin
                  ? "Sign in to access your student dashboard and continue your learning journey"
                  : "Create your account to start your digital education journey"}
              </CardDescription>
            </CardHeader>

            <CardContent className="space-y-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                {!isLogin && (
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        name="firstName"
                        type="text"
                        placeholder="John"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        required
                        className="border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        name="lastName"
                        type="text"
                        placeholder="Doe"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        required
                        className="border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
                      />
                    </div>
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="pl-10 border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                    <Input
                      id="password"
                      name="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={handleInputChange}
                      required
                      className="pl-10 pr-10 border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                    >
                      {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                    </button>
                  </div>
                </div>

                {!isLogin && (
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword">Confirm Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                      <Input
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        placeholder="Confirm your password"
                        value={formData.confirmPassword}
                        onChange={handleInputChange}
                        required
                        className="pl-10 border-gray-300 focus:border-emerald-500 focus:ring-emerald-500"
                      />
                    </div>
                  </div>
                )}

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white py-3 text-lg font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  {isLogin ? "Sign In" : "Create Account"}
                </Button>
              </form>

              {isLogin && (
                <div className="text-center">
                  <Link href="/forgot-password" className="text-sm text-emerald-600 hover:text-emerald-700 font-medium">
                    Forgot your password? Click here to reset it.
                  </Link>
                </div>
              )}

              <div className="text-center">
                <p className="text-sm text-gray-600">
                  {isLogin ? "Don't have an account yet?" : "Already have an account?"}
                </p>
                <button
                  onClick={() => setIsLogin(!isLogin)}
                  className="text-emerald-600 hover:text-emerald-700 font-medium"
                >
                  {isLogin ? "Create an Account" : "Sign In"}
                </button>
              </div>

              {!isLogin && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <div className="flex items-start space-x-3">
                    <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-blue-900 mb-1">Important Notice!</h4>
                      <p className="text-sm text-blue-800">
                        You are advised to create an account with a valid email address because all vital information
                        will be sent to the email you supplied. Yahoo mails are not encouraged due to delay in delivery.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Features */}
          <div className="mt-8 grid grid-cols-1 gap-4">
            <div className="flex items-center space-x-3 text-sm text-gray-600">
              <CheckCircle className="w-5 h-5 text-emerald-600" />
              <span>Access to comprehensive course library</span>
            </div>
            <div className="flex items-center space-x-3 text-sm text-gray-600">
              <CheckCircle className="w-5 h-5 text-emerald-600" />
              <span>Track your learning progress</span>
            </div>
            <div className="flex items-center space-x-3 text-sm text-gray-600">
              <CheckCircle className="w-5 h-5 text-emerald-600" />
              <span>Earn verified digital certificates</span>
            </div>
            <div className="flex items-center space-x-3 text-sm text-gray-600">
              <CheckCircle className="w-5 h-5 text-emerald-600" />
              <span>24/7 platform access</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
