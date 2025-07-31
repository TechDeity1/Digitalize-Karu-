import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BookOpen, Users, Newspaper, Building } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-blue-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">DN</span>
              </div>
              <div>
                <h1 className="text-xl font-bold text-green-800">DIGITALIZE NASARAWA</h1>
                <p className="text-sm text-gray-600">Student E-Facility Platform</p>
              </div>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="text-gray-700 hover:text-green-600 font-medium">
                Home
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-green-600 font-medium">
                About
              </Link>
              <Link href="/student" className="text-gray-700 hover:text-green-600 font-medium">
                Student E-Facility
              </Link>
              <Link href="/agent" className="text-gray-700 hover:text-green-600 font-medium">
                Agent Portal
              </Link>
              <Link href="/stakeholders" className="text-gray-700 hover:text-green-600 font-medium">
                Stakeholders
              </Link>
              <Link href="/news" className="text-gray-700 hover:text-green-600 font-medium">
                News Portal
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to <span className="text-green-600">DIGITALIZE NASARAWA</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Empowering education through digital transformation. Access courses, track progress, and connect with
            certified agents in Nasarawa State.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-green-600 hover:bg-green-700">
              <Link href="/student">Student Portal</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/agent">Agent Portal</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Platform Features</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card className="text-center">
              <CardHeader>
                <BookOpen className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Student E-Facility</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Access courses, track progress, and manage your learning journey with our comprehensive student
                  portal.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Agent Network</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Connect with certified agents who can help register students and provide local support.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Newspaper className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <CardTitle>News & Updates</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Stay informed with the latest news, announcements, and updates from the platform.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Building className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <CardTitle>Stakeholder Portal</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Dedicated portal for stakeholders to monitor progress and access important information.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Latest News & Updates</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Platform Launch</CardTitle>
                <CardDescription>December 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  DIGITALIZE NASARAWA platform officially launches with comprehensive student and agent portals.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Agent Registration Open</CardTitle>
                <CardDescription>December 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Agent registration is now open for qualified individuals and organizations in Nasarawa State.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Course Enrollment</CardTitle>
                <CardDescription>January 2025</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Pre-launch courses are now available for enrollment. Register today to secure your spot.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">DN</span>
                </div>
                <span className="font-bold">DIGITALIZE NASARAWA</span>
              </div>
              <p className="text-gray-400">Empowering education through digital transformation in Nasarawa State.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/about" className="hover:text-white">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/student" className="hover:text-white">
                    Student Portal
                  </Link>
                </li>
                <li>
                  <Link href="/agent" className="hover:text-white">
                    Agent Portal
                  </Link>
                </li>
                <li>
                  <Link href="/news" className="hover:text-white">
                    News
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/help" className="hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="hover:text-white">
                    FAQ
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="text-gray-400 space-y-2">
                <p>Nasarawa State, Nigeria</p>
                <p>Email: info@digitalizenasarawa.ng</p>
                <p>Phone: +234 XXX XXX XXXX</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 DIGITALIZE NASARAWA. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
