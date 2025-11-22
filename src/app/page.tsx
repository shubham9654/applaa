'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Sparkles, 
  Gamepad2, 
  Users, 
  Shield, 
  Star, 
  Trophy,
  Heart,
  Zap,
  Rocket,
  BookOpen,
  GraduationCap
} from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-orange-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                Applaa
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="#features" className="text-gray-600 hover:text-orange-600 transition-colors">
                Features
              </Link>
              <Link href="#safety" className="text-gray-600 hover:text-orange-600 transition-colors">
                Safety
              </Link>
              <Link href="/auth/signup" className="text-gray-600 hover:text-orange-600 transition-colors">
                Sign Up
              </Link>
              <Link href="/auth/login">
                <Button variant="outline" className="border-orange-200 text-orange-600 hover:bg-orange-50">
                  Login
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="inline-flex items-center space-x-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full mb-6">
              <Zap className="w-4 h-4" />
              <span className="text-sm font-medium">Safe • Fun • Educational</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="bg-linear-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
                Welcome to Applaa
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              The ultimate kid-safe social network: Learn AI, build games, and express creativity in a parent-approved space.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth/signup">
                <Button size="lg" className="bg-linear-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-8 py-3 text-lg">
                  <Rocket className="w-5 h-5 mr-2" />
                  Start Your Adventure
                </Button>
              </Link>
              <Link href="#features">
                <Button size="lg" variant="outline" className="border-2 border-orange-200 text-orange-600 hover:bg-orange-50 hover:text-black px-8 py-3 text-lg">
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-orange-200 rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute top-40 right-20 w-32 h-32 bg-pink-200 rounded-full opacity-20 animate-pulse delay-75"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-purple-200 rounded-full opacity-20 animate-pulse delay-150"></div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-linear-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                Amazing Features for Young Explorers
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover, learn, and create with our exciting suite of tools designed just for kids!
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* AI Academy Card */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-orange-100 hover:border-orange-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-linear-to-r from-orange-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-800">AI Academy</CardTitle>
                <CardDescription className="text-gray-600">
                  Learn artificial intelligence through fun, interactive courses designed for young minds
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-center">
                    <Star className="w-4 h-4 text-orange-500 mr-2" />
                    AI Basics & Machine Learning
                  </li>
                  <li className="flex items-center">
                    <Star className="w-4 h-4 text-orange-500 mr-2" />
                    Game Development & Coding
                  </li>
                  <li className="flex items-center">
                    <Star className="w-4 h-4 text-orange-500 mr-2" />
                    Creative AI Projects
                  </li>
                  <li className="flex items-center">
                    <Star className="w-4 h-4 text-orange-500 mr-2" />
                    Earn Certificates & Badges
                  </li>
                </ul>
                <div className="mt-6">
                  <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200">
                    Age 6-18
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Game Hub Card */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-pink-100 hover:border-pink-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-linear-to-r from-pink-500 to-purple-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Gamepad2 className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-800">Game Hub</CardTitle>
                <CardDescription className="text-gray-600">
                  Play, create, and share amazing games with friends in our safe gaming community
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-center">
                    <Trophy className="w-4 h-4 text-pink-500 mr-2" />
                    Play & Create Games
                  </li>
                  <li className="flex items-center">
                    <Trophy className="w-4 h-4 text-pink-500 mr-2" />
                    Challenge Friends
                  </li>
                  <li className="flex items-center">
                    <Trophy className="w-4 h-4 text-pink-500 mr-2" />
                    Game Development Tools
                  </li>
                  <li className="flex items-center">
                    <Trophy className="w-4 h-4 text-pink-500 mr-2" />
                    Leaderboards & Rankings
                  </li>
                </ul>
                <div className="mt-6">
                  <Badge className="bg-pink-100 text-pink-800 hover:bg-pink-200">
                    All Ages
                  </Badge>
                </div>
              </CardContent>
            </Card>

            {/* Social Network Card */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-purple-100 hover:border-purple-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-linear-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-800">Social Network</CardTitle>
                <CardDescription className="text-gray-600">
                  Connect with friends, share creations, and build your digital community safely
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-center">
                    <Heart className="w-4 h-4 text-purple-500 mr-2" />
                    Make New Friends
                  </li>
                  <li className="flex items-center">
                    <Heart className="w-4 h-4 text-purple-500 mr-2" />
                    Share Your Creations
                  </li>
                  <li className="flex items-center">
                    <Heart className="w-4 h-4 text-purple-500 mr-2" />
                    Join Clubs & Groups
                  </li>
                  <li className="flex items-center">
                    <Heart className="w-4 h-4 text-purple-500 mr-2" />
                    Safe Chat & Messaging
                  </li>
                </ul>
                <div className="mt-6">
                  <Badge className="bg-purple-100 text-purple-800 hover:bg-purple-200">
                    Age 8-18
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section id="safety" className="py-20 bg-linear-to-r from-orange-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-linear-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                Safety First, Always
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We're committed to creating the safest online environment for kids to learn and play
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:mx-20">
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Shield className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Parent Verification</h3>
              <p className="text-sm text-gray-600">
                All accounts require parent approval and email verification
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <BookOpen className="w-8 h-8 text-pink-500" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Age-Appropriate Content</h3>
              <p className="text-sm text-gray-600">
                All content is reviewed and filtered for age appropriateness
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Users className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Moderated Community</h3>
              <p className="text-sm text-gray-600">
                24/7 moderation ensures a safe and positive environment
              </p>
            </div>
            
            
          </div>

          <div className="mt-12 text-center">
            <Card className="max-w-2xl mx-auto border-orange-200 bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="flex items-center justify-center mb-4">
                  <Shield className="w-8 h-8 text-orange-500 mr-2" />
                  <h3 className="text-lg font-bold text-gray-800">Safety Commitment</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Applaa exceeds industry standards for online safety. We're COPPA-compliant, 
                  use advanced content filtering, and work with child safety experts to ensure 
                  your kids can explore, learn, and grow in a protected digital playground.
                </p>
                <div className="flex flex-wrap justify-center gap-2">
                  <Badge variant="outline" className="border-orange-200 text-orange-600">
                    COPPA Compliant
                  </Badge>
                  <Badge variant="outline" className="border-pink-200 text-pink-600">
                    GDPR Ready
                  </Badge>
                  <Badge variant="outline" className="border-purple-200 text-purple-600">
                    KidSAFE Certified
                  </Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-r from-orange-600 via-pink-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Adventure?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of kids who are already learning, creating, and making friends on Applaa!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/auth/signup">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 text-lg">
                <Sparkles className="w-5 h-5 mr-2" />
                Join Now - It's Free!
              </Button>
            </Link>
            <Link href="/academy">
              <Button size="lg" variant="outline" className="border-orange-600 bg-white px-8 py-3 text-lg hover:text-orange-600">
                Explore AI Academy
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div>
              <div className="flex justify-center items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-linear-to-r from-orange-500 to-pink-500 rounded-lg flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">Applaa</span>
              </div>
              <p className="text-gray-400 text-sm">
                The safe, fun social network where kids learn AI and build amazing things together.
              </p>
            </div>
            
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
            <p>&copy; 2025 Applaa. All rights reserved. Made with ❤️ for kids everywhere.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}