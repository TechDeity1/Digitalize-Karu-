"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Eye, EyeOff, ArrowLeft } from "lucide-react"

export default function AgentPortal() {
  const [showPassword, setShowPassword] = useState(false)
  const [isLogin, setIsLogin] = useState(true)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">DN</span>
            </div>
            <div className="text-left">
              <h1 className="text-xl font-bold text-blue-800">DIGITALIZE NASARAWA</h1>
              <p className="text-sm text-gray-600">Agent Portal</p>
            </div>
          </div>
        </div>

        <Card className="shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">
              {isLogin ? "Login to your account" : "Create Agent Account"}
            </CardTitle>
            <CardDescription>
              {isLogin ? "Agent can login after registration" : "Intended Agent can create a free account"}
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {isLogin ? (
              // Login Form
              <>
                <div className="space-y-2">
                  <Label htmlFor="email">e-Mail Address</Label>
                  <Input id="email" type="email" placeholder="Enter your email address" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="password">Password</Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      required
                    />
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      className="absolute right-2 top-1/2 -translate-y-1/2 h-8 w-8"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                    </Button>
                  </div>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700">Login</Button>
                <div className="text-center space-y-2">
                  <Link href="/agent/forgot-password" className="text-sm text-blue-600 hover:underline">
                    Forgot your Password? Click here to reset it.
                  </Link>
                  <p className="text-sm text-gray-600">
                    Want to become an Agent?{" "}
                    <button onClick={() => setIsLogin(false)} className="text-blue-600 hover:underline font-medium">
                      Create an Account
                    </button>
                  </p>
                </div>
              </>
            ) : (
              // Registration Form
              <>
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                  <h4 className="font-semibold text-blue-800 mb-2">Important Notice!</h4>
                  <p className="text-sm text-blue-700">
                    You are advised to create an account with a valid email address because all vital information will
                    be sent to the email you supplied. Yahoo mails are not encouraged due to delay in delivery.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="reg-email">e-Mail Address</Label>
                    <Input id="reg-email" type="email" placeholder="Enter your email address" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-email">Confirm e-Mail Address</Label>
                    <Input id="confirm-email" type="email" placeholder="Confirm your email address" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="mobile">Mobile No.</Label>
                    <Input id="mobile" type="tel" placeholder="Enter your mobile number" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-mobile">Confirm Mobile No.</Label>
                    <Input id="confirm-mobile" type="tel" placeholder="Confirm your mobile number" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="security-question">Select Security Question</Label>
                    <select
                      id="security-question"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="">Please Select</option>
                      <option value="pet">What was the name of your first pet?</option>
                      <option value="school">What was the name of your first school?</option>
                      <option value="mother">What is your mother's maiden name?</option>
                      <option value="city">In what city were you born?</option>
                    </select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="security-answer">Secret Question Answer</Label>
                    <Input id="security-answer" type="text" placeholder="Enter your answer" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="confirm-answer">Confirm Secret Question Answer</Label>
                    <Input id="confirm-answer" type="text" placeholder="Confirm your answer" required />
                  </div>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700">Sign Up (e-Mail Verification)</Button>

                <div className="text-center">
                  <p className="text-sm text-gray-600">
                    Already have an account?{" "}
                    <button onClick={() => setIsLogin(true)} className="text-blue-600 hover:underline font-medium">
                      Login here
                    </button>
                  </p>
                </div>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
