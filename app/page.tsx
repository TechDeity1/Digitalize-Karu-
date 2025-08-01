"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  BookOpen,
  Users,
  Newspaper,
  Building,
  Menu,
  ArrowRight,
  CheckCircle,
  Globe,
  Shield,
  Zap,
  X,
  User,
  Settings,
  BookmarkIcon,
  LogOut,
  Bell,
} from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { useState } from "react"

export default function HomePage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  // Mock user state - in real app this would come from auth context/state management
  const [isLoggedIn, setIsLoggedIn] = useState(true) // Change to false to see logged out state
  const [user] = useState({
    name: "John Adamu",
    email: "john.adamu@email.com",
    role: "Student",
    avatar: "/placeholder-user.jpg",
    notifications: 3,
  })

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    closeMobileMenu()
    // In real app, handle logout logic here
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-blue-50">
      {/* Modern Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200/50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className=logo">
                  <span className="img ssrc=.app/public/DIGITALIZE NASARAWA LOGO.Png"></span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-blue-500 rounded-full animate-pulse"></div>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-700 to-blue-600 bg-clip-text text-transparent">
                
                </h1>
                <p className="text-sm text-gray-600 font-medium">Transforming Nasarawa One Byte at a Time</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <Link
                href="/"
                className="relative text-gray-700 hover:text-emerald-600 font-medium transition-all duration-300 group"
              >
                Home
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/about"
                className="relative text-gray-700 hover:text-emerald-600 font-medium transition-all duration-300 group"
              >
                About
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/student"
                className="relative text-gray-700 hover:text-emerald-600 font-medium transition-all duration-300 group"
              >
                Student Portal
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/agent"
                className="relative text-gray-700 hover:text-emerald-600 font-medium transition-all duration-300 group"
              >
                Agent Portal
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/stakeholders"
                className="relative text-gray-700 hover:text-emerald-600 font-medium transition-all duration-300 group"
              >
                Stakeholders
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                href="/news"
                className="relative text-gray-700 hover:text-emerald-600 font-medium transition-all duration-300 group"
              >
                News Portal
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </nav>

            {/* Desktop CTA Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              {isLoggedIn ? (
                <div className="flex items-center space-x-3">
                  <Button variant="ghost" size="icon" className="relative">
                    <Bell className="h-5 w-5 text-gray-600" />
                    {user.notifications > 0 && (
                      <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
                        <span className="text-xs text-white font-bold">{user.notifications}</span>
                      </div>
                    )}
                  </Button>
                  <Avatar className="w-8 h-8">
                    <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                    <AvatarFallback className="bg-emerald-600 text-white text-sm">
                      {user.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                </div>
              ) : (
                <>
                  <Button variant="ghost" className="text-gray-700 hover:text-emerald-600 hover:bg-emerald-50">
                    Sign In
                  </Button>
                  <Button className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white shadow-lg hover:shadow-xl transition-all duration-300">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </>
              )}
            </div>

            {/* Mobile Menu Button */}
            <Button variant="ghost" size="icon" className="lg:hidden relative z-50" onClick={toggleMobileMenu}>
              {isMobileMenuOpen ? <X className="h-6 w-6 text-gray-700" /> : <Menu className="h-6 w-6 text-gray-700" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation Overlay */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden" onClick={closeMobileMenu} />
        )}

        {/* Mobile Navigation Menu */}
        <div
          className={`
          fixed top-0 right-0 h-full w-80 bg-white shadow-2xl z-40 transform transition-transform duration-300 ease-in-out lg:hidden
          ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}
        `}
        >
          <div className="flex flex-col h-full">
            {/* Mobile Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-200">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">DN</span>
                </div>
                <div>
                  <h2 className="text-lg font-bold text-gray-900">DIGITALIZE NASARAWA</h2>
                  <p className="text-xs text-gray-600">Student E-Facility</p>
                </div>
              </div>
            </div>

            {/* User Profile Section (if logged in) */}
            {isLoggedIn && (
              <div className="p-6 bg-gradient-to-r from-emerald-50 to-blue-50 border-b border-gray-200">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <Avatar className="w-12 h-12 border-2 border-white shadow-md">
                      <AvatarImage src={user.avatar || "/placeholder.svg"} alt={user.name} />
                      <AvatarFallback className="bg-emerald-600 text-white">
                        {user.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{user.name}</h3>
                    <p className="text-sm text-gray-600">{user.email}</p>
                    <Badge variant="secondary" className="mt-1 text-xs bg-emerald-100 text-emerald-800">
                      {user.role}
                    </Badge>
                  </div>
                  {user.notifications > 0 && (
                    <div className="w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
                      <span className="text-xs text-white font-bold">{user.notifications}</span>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Mobile Navigation Links */}
            <nav className="flex-1 px-6 py-8 overflow-y-auto">
              <div className="space-y-6">
                <Link
                  href="/"
                  className="flex items-center space-x-4 text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-200 group"
                  onClick={closeMobileMenu}
                >
                  <div className="w-2 h-2 bg-emerald-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                  <span className="text-lg">Home</span>
                </Link>
                <Link
                  href="/about"
                  className="flex items-center space-x-4 text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-200 group"
                  onClick={closeMobileMenu}
                >
                  <div className="w-2 h-2 bg-emerald-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                  <span className="text-lg">About</span>
                </Link>
                <Link
                  href="/student"
                  className="flex items-center space-x-4 text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-200 group"
                  onClick={closeMobileMenu}
                >
                  <div className="w-2 h-2 bg-emerald-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                  <span className="text-lg">Student Portal</span>
                </Link>
                <Link
                  href="/agent"
                  className="flex items-center space-x-4 text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-200 group"
                  onClick={closeMobileMenu}
                >
                  <div className="w-2 h-2 bg-emerald-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                  <span className="text-lg">Agent Portal</span>
                </Link>
                <Link
                  href="/stakeholders"
                  className="flex items-center space-x-4 text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-200 group"
                  onClick={closeMobileMenu}
                >
                  <div className="w-2 h-2 bg-emerald-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                  <span className="text-lg">Stakeholders</span>
                </Link>
                <Link
                  href="/news"
                  className="flex items-center space-x-4 text-gray-700 hover:text-emerald-600 font-medium transition-colors duration-200 group"
                  onClick={closeMobileMenu}
                >
                  <div className="w-2 h-2 bg-emerald-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"></div>
                  <span className="text-lg">News Portal</span>
                </Link>
              </div>

              {/* User Account Options (if logged in) */}
              {isLoggedIn && (
                <>
                  <Separator className="my-6" />
                  <div className="space-y-4">
                    <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Account</h4>
                    <div className="space-y-3">
                      <Link
                        href="/dashboard"
                        className="flex items-center space-x-3 text-gray-700 hover:text-emerald-600 transition-colors duration-200 group"
                        onClick={closeMobileMenu}
                      >
                        <User className="w-5 h-5 text-gray-500 group-hover:text-emerald-600" />
                        <span>Dashboard</span>
                      </Link>
                      <Link
                        href="/profile"
                        className="flex items-center space-x-3 text-gray-700 hover:text-emerald-600 transition-colors duration-200 group"
                        onClick={closeMobileMenu}
                      >
                        <Settings className="w-5 h-5 text-gray-500 group-hover:text-emerald-600" />
                        <span>Profile Settings</span>
                      </Link>
                      <Link
                        href="/bookmarks"
                        className="flex items-center space-x-3 text-gray-700 hover:text-emerald-600 transition-colors duration-200 group"
                        onClick={closeMobileMenu}
                      >
                        <BookmarkIcon className="w-5 h-5 text-gray-500 group-hover:text-emerald-600" />
                        <span>Bookmarks</span>
                      </Link>
                      <Link
                        href="/notifications"
                        className="flex items-center justify-between text-gray-700 hover:text-emerald-600 transition-colors duration-200 group"
                        onClick={closeMobileMenu}
                      >
                        <div className="flex items-center space-x-3">
                          <Bell className="w-5 h-5 text-gray-500 group-hover:text-emerald-600" />
                          <span>Notifications</span>
                        </div>
                        {user.notifications > 0 && (
                          <Badge className="bg-red-500 text-white text-xs px-2 py-1">{user.notifications}</Badge>
                        )}
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="flex items-center space-x-3 text-red-600 hover:text-red-700 transition-colors duration-200 group w-full text-left"
                      >
                        <LogOut className="w-5 h-5" />
                        <span>Sign Out</span>
                      </button>
                    </div>
                  </div>
                </>
              )}

              {/* Mobile Divider */}
              {!isLoggedIn && <div className="my-8 border-t border-gray-200"></div>}

              {/* Mobile CTA Buttons (if not logged in) */}
              {!isLoggedIn && (
                <div className="space-y-4">
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-gray-700 hover:text-emerald-600 hover:bg-emerald-50 text-lg py-6"
                    onClick={closeMobileMenu}
                  >
                    Sign In
                  </Button>
                  <Button
                    className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white shadow-lg text-lg py-6"
                    onClick={closeMobileMenu}
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              )}
            </nav>

            {/* Mobile Footer */}
            <div className="p-6 border-t border-gray-200 bg-gray-50">
              <div className="text-center">
                <p className="text-sm text-gray-600 mb-2">Need help?</p>
                <Link
                  href="/contact"
                  className="text-emerald-600 hover:text-emerald-700 font-medium text-sm"
                  onClick={closeMobileMenu}
                >
                  Contact Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-24 px-4 overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/50 via-transparent to-blue-100/50"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-200/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl"></div>

        <div className="container mx-auto text-center relative z-10">
          <Badge variant="secondary" className="mb-6 px-4 py-2 bg-emerald-100 text-emerald-800 border-emerald-200">
            🚀 Now Live in Nasarawa State
          </Badge>

          <h2 className="text-5xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
            Transform Your
            <span className="block bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Digital Future
            </span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Join thousands of students and agents in Nasarawa State's premier digital education platform. Access
            world-class courses, track your progress, and build your career with certified training programs.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <Link href="/student">
                Start Learning Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-gray-300 hover:border-emerald-600 hover:bg-emerald-50 px-8 py-4 text-lg transition-all duration-300 bg-transparent"
            >
              <Link href="/agent">Become an Agent</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-emerald-600 mb-2">1000+</div>
              <div className="text-gray-600 font-medium">Active Students</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 mb-2">50+</div>
              <div className="text-gray-600 font-medium">Certified Agents</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">25+</div>
              <div className="text-gray-600 font-medium">Course Programs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-orange-600 mb-2">95%</div>
              <div className="text-gray-600 font-medium">Success Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-4 bg-white relative">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 px-4 py-2 bg-blue-100 text-blue-800 border-blue-200">
              Platform Features
            </Badge>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Everything You Need to
              <span className="block text-emerald-600">Succeed Digitally</span>
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our comprehensive platform provides all the tools and resources you need for digital transformation
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:scale-105 bg-gradient-to-br from-emerald-50 to-emerald-100/50">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">Student E-Facility</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 leading-relaxed">
                  Access comprehensive courses, track your learning progress, and manage your educational journey with
                  our advanced student portal.
                </CardDescription>
                <div className="mt-4 flex items-center justify-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-emerald-600" />
                  <span className="text-sm text-emerald-600 font-medium">24/7 Access</span>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:scale-105 bg-gradient-to-br from-blue-50 to-blue-100/50">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">Agent Network</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 leading-relaxed">
                  Connect with certified agents across Nasarawa State who provide local support and help students
                  register for programs.
                </CardDescription>
                <div className="mt-4 flex items-center justify-center space-x-2">
                  <Shield className="w-4 h-4 text-blue-600" />
                  <span className="text-sm text-blue-600 font-medium">Verified Agents</span>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:scale-105 bg-gradient-to-br from-purple-50 to-purple-100/50">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Newspaper className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">News & Updates</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 leading-relaxed">
                  Stay informed with the latest news, announcements, course updates, and important information from the
                  platform.
                </CardDescription>
                <div className="mt-4 flex items-center justify-center space-x-2">
                  <Zap className="w-4 h-4 text-purple-600" />
                  <span className="text-sm text-purple-600 font-medium">Real-time Updates</span>
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:scale-105 bg-gradient-to-br from-orange-50 to-orange-100/50">
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <Building className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900">Stakeholder Portal</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <CardDescription className="text-gray-600 leading-relaxed">
                  Dedicated portal for stakeholders to monitor progress, access analytics, and view important platform
                  metrics.
                </CardDescription>
                <div className="mt-4 flex items-center justify-center space-x-2">
                  <Globe className="w-4 h-4 text-orange-600" />
                  <span className="text-sm text-orange-600 font-medium">Global Access</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4 px-4 py-2 bg-emerald-100 text-emerald-800 border-emerald-200">
              Latest Updates
            </Badge>
            <h3 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Stay Updated with
              <span className="block text-emerald-600">Platform News</span>
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get the latest announcements, feature updates, and important information
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:scale-105 bg-white">
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  <Badge className="bg-emerald-100 text-emerald-800 hover:bg-emerald-100">Platform Launch</Badge>
                  <span className="text-sm text-gray-500">December 2024</span>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-emerald-600 transition-colors">
                  DIGITALIZE NASARAWA Goes Live
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Our comprehensive digital education platform officially launches with full student and agent portal
                  functionality, bringing world-class education to Nasarawa State.
                </p>
                <div className="flex items-center text-emerald-600 font-medium group-hover:text-emerald-700 transition-colors">
                  <span>Read more</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:scale-105 bg-white">
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Registration</Badge>
                  <span className="text-sm text-gray-500">December 2024</span>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  Agent Registration Now Open
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Qualified individuals and organizations across Nasarawa State can now apply to become certified agents
                  and help expand our educational reach.
                </p>
                <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
                  <span>Apply now</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>

            <Card className="group hover:shadow-2xl transition-all duration-300 border-0 shadow-lg hover:scale-105 bg-white">
              <CardHeader>
                <div className="flex items-center space-x-2 mb-2">
                  <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-100">Courses</Badge>
                  <span className="text-sm text-gray-500">January 2025</span>
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors">
                  New Course Programs Available
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Exciting new pre-launch courses are now available for enrollment. Secure your spot in our
                  comprehensive digital skills training programs.
                </p>
                <div className="flex items-center text-purple-600 font-medium group-hover:text-purple-700 transition-colors">
                  <span>Enroll today</span>
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 bg-gradient-to-r from-emerald-600 via-emerald-700 to-blue-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto text-center relative z-10">
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your
            <span className="block">Digital Journey?</span>
          </h3>
          <p className="text-xl text-emerald-100 mb-12 max-w-3xl mx-auto">
            Join thousands of students and agents who are already transforming their futures with DIGITALIZE NASARAWA
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-white text-emerald-700 hover:bg-gray-100 px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              <Link href="/student">
                Start Learning Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-2 border-white text-white hover:bg-white hover:text-emerald-700 px-8 py-4 text-lg transition-all duration-300 bg-transparent"
            >
              <Link href="/agent">Become an Agent</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Modern Footer */}
      <footer className="bg-gray-900 text-white py-16 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
        <div className="container mx-auto relative z-10">
          <div className="grid md:grid-cols-5 gap-8 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">DN</span>
                </div>
                <div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
                    DIGITALIZE NASARAWA
                  </span>
                  <p className="text-gray-400 text-sm">Student E-Facility Platform</p>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed mb-6 max-w-md">
                Empowering education through digital transformation in Nasarawa State. Join thousands of students and
                agents building their digital future.
              </p>
              <div className="flex space-x-4">
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">t</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-emerald-600 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">in</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold text-lg mb-6 text-white">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/about"
                    className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    About Platform
                  </Link>
                </li>
                <li>
                  <Link
                    href="/student"
                    className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Student Portal
                  </Link>
                </li>
                <li>
                  <Link
                    href="/agent"
                    className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Agent Portal
                  </Link>
                </li>
                <li>
                  <Link
                    href="/news"
                    className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    News & Updates
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="font-bold text-lg mb-6 text-white">Support</h4>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/help"
                    className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center group"
                  >
                    <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold text-lg mb-6 text-white">Contact Info</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-emerald-600 rounded-full flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white font-medium">Nasarawa State, Nigeria</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-emerald-600 rounded-full flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white font-medium">info@digitalizenasarawa.ng</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-5 h-5 bg-emerald-600 rounded-full flex items-center justify-center mt-0.5">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <p className="text-white font-medium">+234 XXX XXX XXXX</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">&copy; 2024 DIGITALIZE NASARAWA. All rights reserved.</p>
            <div className="flex items-center space-x-6 text-sm">
              <Link href="/terms" className="text-gray-400 hover:text-emerald-400 transition-colors">
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-gray-400 hover:text-emerald-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/cookies" className="text-gray-400 hover:text-emerald-400 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
