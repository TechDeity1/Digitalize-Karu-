"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, CreditCard } from "lucide-react"

export default function AgentRegistration() {
  const [currentStep, setCurrentStep] = useState(1)

  const handleNext = () => {
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1)
    }
  }

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 p-4">
      <div className="container mx-auto max-w-2xl">
        {/* Header */}
        <div className="text-center mb-8">
          <Link href="/agent" className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Agent Portal
          </Link>
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">DN</span>
            </div>
            <div className="text-left">
              <h1 className="text-xl font-bold text-blue-800">DIGITALIZE NASARAWA</h1>
              <p className="text-sm text-gray-600">Agent Account Creation</p>
            </div>
          </div>
        </div>

        <Card className="shadow-lg">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold">{currentStep === 1 ? "Agent Registration" : "Payment"}</CardTitle>
            <CardDescription>
              {currentStep === 1
                ? "Fill in your details to become an agent"
                : "Complete your agent registration payment"}
            </CardDescription>
          </CardHeader>
          <CardContent>
            {currentStep === 1 ? (
              // Registration Form
              <div className="space-y-4">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                  <h4 className="font-semibold text-blue-800 mb-2">Important Information</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• If application is accepted, the Admin will generate Agent ID</li>
                    <li>• Agent registration fee is ₦5,000 only</li>
                    <li>• All agents must be residents of Nasarawa State</li>
                  </ul>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="Enter your first name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Enter your last name" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="middleName">Middle Name (if any)</Label>
                  <Input id="middleName" placeholder="Enter your middle name (optional)" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="address">House Address</Label>
                  <Textarea id="address" placeholder="Enter your full address" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="ward">Which Ward are you from in Karu?</Label>
                  <select
                    id="ward"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Please Select</option>
                    <option value="ward1">Ward 1</option>
                    <option value="ward2">Ward 2</option>
                    <option value="ward3">Ward 3</option>
                    <option value="ward4">Ward 4</option>
                    <option value="ward5">Ward 5</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="hasOffice">Do you own an office or Business Centre?</Label>
                  <select
                    id="hasOffice"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Please Select</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="officeAddress">Office Address</Label>
                  <Textarea id="officeAddress" placeholder="Enter your office address (if applicable)" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="hasExperience">Have you worked with an Organization?</Label>
                  <select
                    id="hasExperience"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Please Select</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="dob">Date of Birth</Label>
                  <Input id="dob" type="date" required />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="type">Individual/Organization</Label>
                  <select
                    id="type"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Please Select</option>
                    <option value="individual">Individual</option>
                    <option value="organization">Organization</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="resident">Resident in Nasarawa?</Label>
                  <select
                    id="resident"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  >
                    <option value="">Please Select</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700" onClick={handleNext}>
                  Continue to Payment
                </Button>
              </div>
            ) : (
              // Payment Form
              <div className="space-y-6">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">Agent Registration Summary</h4>
                  <div className="space-y-2 text-sm text-blue-700">
                    <div className="flex justify-between">
                      <span>Agent Registration Fee:</span>
                      <span className="font-semibold">₦5,000</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Processing Fee:</span>
                      <span className="font-semibold">₦200</span>
                    </div>
                    <hr className="border-blue-200" />
                    <div className="flex justify-between font-semibold">
                      <span>Total Amount:</span>
                      <span>₦5,200</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-semibold flex items-center space-x-2">
                    <CreditCard className="w-5 h-5" />
                    <span>Payment Information</span>
                  </h4>

                  <div className="space-y-2">
                    <Label htmlFor="cardNumber">Card Number</Label>
                    <Input id="cardNumber" placeholder="1234 5678 9012 3456" required />
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="expiry">Expiry Date</Label>
                      <Input id="expiry" placeholder="MM/YY" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="cvv">CVV</Label>
                      <Input id="cvv" placeholder="123" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="cardName">Cardholder Name</Label>
                    <Input id="cardName" placeholder="Enter name on card" required />
                  </div>
                </div>

                <div className="flex space-x-4">
                  <Button variant="outline" className="flex-1 bg-transparent" onClick={handleBack}>
                    Back
                  </Button>
                  <Button className="flex-1 bg-blue-600 hover:bg-blue-700">Complete Payment</Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
