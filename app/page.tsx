"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import {
  Menu,
  X,
  BookOpen,
  Users,
  Award,
  TrendingUp,
  Calendar,
  ArrowRight,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  GraduationCap,
  UserCheck,
  BarChart3,
  Globe,
} from "lucide-react"

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="relative h-10 w-10 bg-white rounded-lg border border-gray-200 shadow-sm p-1">
              <Image
                src="/digitalize-nasarawa-logo.png"
                alt="DIGITALIZE NASARAWA"
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <h1 className="text-xl font-bold text-primary">DIGITALIZE NASARAWA</h1>
              <p className="text-xs text-muted-foreground">Digital Education Platform</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link href="#features" className="text-sm font-medium hover:text-primary transition-colors">
              Features
            </Link>
            <Link href="#about" className="text-sm font-medium hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#news" className="text-sm font-medium hover:text-primary transition-colors">
              News
            </Link>
            <Link href="#contact" className="text-sm font-medium hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          {/* Desktop Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/student">
              <Button variant="outline" size="sm">
                <GraduationCap className="mr-2 h-4 w-4" />
                Student Portal
              </Button>
            </Link>
            <Link href="/agent">
              <Button size="sm">
                <UserCheck className="mr-2 h-4 w-4" />
                Agent Portal
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t bg-background">
            <div className="container py-4 space-y-4">
              <Link
                href="#features"
                className="block text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </Link>
              <Link
                href="#about"
                className="block text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="#news"
                className="block text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                News
              </Link>
              <Link
                href="#contact"
                className="block text-sm font-medium hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-4 border-t space-y-2">
                <Link href="/student" className="block">
                  <Button variant="outline" size="sm" className="w-full justify-start bg-transparent">
                    <GraduationCap className="mr-2 h-4 w-4" />
                    Student Portal
                  </Button>
                </Link>
                <Link href="/agent" className="block">
                  <Button size="sm" className="w-full justify-start">
                    <UserCheck className="mr-2 h-4 w-4" />
                    Agent Portal
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto text-center">
          <div className="max-w-4xl mx-auto">
            <Badge variant="secondary" className="mb-4">
              🚀 Transforming Education in Nasarawa State
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Welcome to DIGITALIZE NASARAWA
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Empowering students and educational agents through innovative digital learning solutions. Join thousands
              of learners transforming their future with technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/student/register">
                <Button size="lg" className="text-lg px-8 py-6">
                  <GraduationCap className="mr-2 h-5 w-5" />
                  Start Learning Today
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/agent/register">
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
                  <UserCheck className="mr-2 h-5 w-5" />
                  Become an Agent
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose DIGITALIZE NASARAWA?</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover the features that make our platform the perfect choice for digital education
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Interactive Learning</CardTitle>
                <CardDescription>
                  Engage with dynamic content, quizzes, and multimedia resources designed for effective learning
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Community Support</CardTitle>
                <CardDescription>
                  Connect with fellow students and experienced agents in our supportive learning community
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Award className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Certified Programs</CardTitle>
                <CardDescription>
                  Earn recognized certificates and credentials that boost your career prospects
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Progress Tracking</CardTitle>
                <CardDescription>
                  Monitor your learning journey with detailed analytics and progress reports
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Globe className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Accessible Anywhere</CardTitle>
                <CardDescription>
                  Learn from anywhere with our mobile-friendly platform and offline capabilities
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <BarChart3 className="h-12 w-12 text-primary mb-4" />
                <CardTitle>Performance Analytics</CardTitle>
                <CardDescription>
                  Get insights into your learning patterns and optimize your study strategies
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold text-primary mb-2">10,000+</h3>
              <p className="text-muted-foreground">Active Students</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-primary mb-2">500+</h3>
              <p className="text-muted-foreground">Certified Agents</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-primary mb-2">100+</h3>
              <p className="text-muted-foreground">Courses Available</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-primary mb-2">95%</h3>
              <p className="text-muted-foreground">Success Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* News & Updates Section */}
      <section id="news" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Latest News & Updates</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Stay informed about the latest developments and opportunities
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2">
                  <Calendar className="mr-1 h-3 w-3" />
                  Dec 15, 2024
                </Badge>
                <CardTitle className="text-lg">New Digital Skills Program Launched</CardTitle>
                <CardDescription>
                  We're excited to announce our new comprehensive digital skills program designed for the modern
                  workforce.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" size="sm">
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2">
                  <Calendar className="mr-1 h-3 w-3" />
                  Dec 10, 2024
                </Badge>
                <CardTitle className="text-lg">Partnership with Local Universities</CardTitle>
                <CardDescription>
                  DIGITALIZE NASARAWA partners with leading universities to provide accredited online courses.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" size="sm">
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Badge variant="secondary" className="w-fit mb-2">
                  <Calendar className="mr-1 h-3 w-3" />
                  Dec 5, 2024
                </Badge>
                <CardTitle className="text-lg">Mobile App Now Available</CardTitle>
                <CardDescription>
                  Download our new mobile app for iOS and Android to learn on the go with offline capabilities.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button variant="ghost" size="sm">
                  Read More <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Future?</h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Join thousands of students and agents who are already benefiting from our digital education platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/student/register">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
                <GraduationCap className="mr-2 h-5 w-5" />
                Get Started as Student
              </Button>
            </Link>
            <Link href="/agent/register">
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 py-6 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary bg-transparent"
              >
                <UserCheck className="mr-2 h-5 w-5" />
                Become an Agent
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-2xl mx-auto text-center">
            <h3 className="text-2xl font-bold mb-4">Stay Updated</h3>
            <p className="text-muted-foreground mb-6">
              Subscribe to our newsletter for the latest updates, course announcements, and educational resources.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <Input type="email" placeholder="Enter your email address" className="flex-1" />
              <Button>
                <Mail className="mr-2 h-4 w-4" />
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-background border-t py-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Logo and Description */}
            <div className="md:col-span-2">
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="relative h-10 w-10 bg-white rounded-lg border border-gray-200 shadow-sm p-1">
                  <Image
                    src="/digitalize-nasarawa-logo.png"
                    alt="DIGITALIZE NASARAWA"
                    fill
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-primary">DIGITALIZE NASARAWA</h3>
                  <p className="text-sm text-muted-foreground">Digital Education Platform</p>
                </div>
              </Link>
              <p className="text-muted-foreground mb-4 max-w-md">
                Empowering education through digital transformation in Nasarawa State. Join us in building a brighter
                future through technology and learning.
              </p>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm">
                  <Facebook className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Twitter className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Instagram className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Linkedin className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <Link href="/student" className="hover:text-primary transition-colors">
                    Student Portal
                  </Link>
                </li>
                <li>
                  <Link href="/agent" className="hover:text-primary transition-colors">
                    Agent Portal
                  </Link>
                </li>
                <li>
                  <Link href="#features" className="hover:text-primary transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="hover:text-primary transition-colors">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#news" className="hover:text-primary transition-colors">
                    News
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="font-semibold mb-4">Contact Us</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center">
                  <Mail className="mr-2 h-4 w-4" />
                  info@digitalizenasarawa.ng
                </li>
                <li className="flex items-center">
                  <Phone className="mr-2 h-4 w-4" />
                  +234 (0) 803 123 4567
                </li>
                <li className="flex items-center">
                  <MapPin className="mr-2 h-4 w-4" />
                  Lafia, Nasarawa State, Nigeria
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2024 DIGITALIZE NASARAWA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
