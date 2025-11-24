'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import GameCard from '@/components/game-card'
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
  GraduationCap,
  Smartphone
} from 'lucide-react'

// Helper function to generate game URLs
const getGameUrl = (gameName: string): string => {
  const urlMap: Record<string, string> = {
    'Typing Invaders': 'typinginvaders',
    'Rock Paper Scissor': 'rockpaperscissor',
    'Ping Pong': 'pingpong',
    'Skateboard Extreme': 'skateboardextreme',
    'Memory Match': 'memorymatch',
    'Words Finding': 'words-finding',
    'Infinite Runner': 'infiniterunner',
    'Year 9 Maths Tracker': 'year9maths',
    'Solitaire Collection': 'solitairecollection',
    'Spot The Difference': 'spotthedifference',
    'Your Todos List': 'yourtodos',
    'Arcane Breaker': 'https://breakout-arkanoid.vercel.app/',
    'Crossword Puzzle Game': 'crosswordpuzzlegame',
    'Dots And Boxes': 'dotsandboxes',
    'Whack A Mole': 'whackamole',
    'Connect Four': 'connectfour',
    'Countdown Quiz': 'countdownquiz',
    'Adventure Map': 'adventure-map',
    'Emoji Match': 'emoji-match',
    'Escape the Maze': 'scape-the-maze',
    'Stick Sword Duel': 'sticksword-uel',
    'Element Family Builder': 'elementfamilybuilder',
    'Tap Zero': 'tapzero',
    'Bubble Pop': 'bubblepop',
    'Maze of Terror': 'mazeofterror',
    'Abstract Speedster': 'abstract_speedster',
    'Mono-Fleet': 'mono-fleet',
    'Snake': 'snake',
    'Collect & Run Challenge': 'collectrunchallenge',
    'Cyber Runner': 'cyber-runner',
    'Moon Colony Tycoon': 'moon-colony-tycoon',
    'Desert Caravan Trader': 'desert-caravan-trader',
    'Tic-Tac-Toe': 'tik-tok-toe',
    'Jumpy Dot': 'jumpy-dot',
    'Truth or Dare Spinner': 'truth-or-dare-spinner',
    'Net Worth Calculator': 'net-worth-calculator',
  }
  
  // Check if it's an external URL (starts with http)
  if (urlMap[gameName]?.startsWith('http')) {
    return urlMap[gameName]
  }
  
  const slug = urlMap[gameName] || gameName.toLowerCase().replace(/\s+/g, '').replace(/[^a-z0-9]/g, '')
  return `https://app.applaa.com/${slug}/`
}

export default function Home() {
  const recentGames = [
    { name: 'Typing Invaders', emoji: '👾', bgClass: 'bg-linear-to-br from-gray-900 to-gray-800', tag: 'COMPUTER', url: getGameUrl('Typing Invaders') },
    { name: 'Snake', emoji: '🐍', bgClass: 'bg-linear-to-br from-gray-900 via-black to-gray-900', url: getGameUrl('Snake') },
    { name: 'Abstract Speedster', emoji: '🏎️', bgClass: 'bg-linear-to-br from-gray-800 via-gray-900 to-black', tag: 'Use LEFT/RIGHT', url: getGameUrl('Abstract Speedster') },
    { name: 'Rock Paper Scissor', emoji: '✂️', bgClass: 'bg-linear-to-br from-blue-500 to-purple-600', url: getGameUrl('Rock Paper Scissor') },
    { name: 'Ping Pong', emoji: '🏓', bgClass: 'bg-black', url: getGameUrl('Ping Pong') },
    { name: 'Skateboard Extreme', emoji: '🛹', bgClass: 'bg-linear-to-br from-orange-400 to-yellow-500', url: getGameUrl('Skateboard Extreme') },
    { name: 'Memory Match', emoji: '🧩', bgClass: 'bg-linear-to-br from-indigo-500 to-purple-600', url: getGameUrl('Memory Match') },
    { name: 'Words Finding', emoji: '🔤', bgClass: 'bg-linear-to-br from-blue-400 to-indigo-600', url: getGameUrl('Words Finding') },
  ]

  return (
    <div className="min-h-screen bg-linear-to-br from-orange-50 to-orange-100">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-orange-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/applaa.png" alt="Applaa Logo" width={32} height={32} />
              <span className="text-3xl font-bold bg-linear-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">
                Applaa
              </span>
            </Link>
            <div className="hidden md:flex items-center space-x-6">
              <Link href="#games" className="text-gray-600 hover:text-orange-600 transition-colors">
                Games
              </Link>
              <Link href="#features" className="text-gray-600 hover:text-orange-600 transition-colors">
                Features
              </Link>
              <Link href="#safety" className="text-gray-600 hover:text-orange-600 transition-colors">
                Safety
              </Link>
              <Link href="/about" className="text-gray-600 hover:text-orange-600 transition-colors">
                About Us
              </Link>
              <Link href="https://app.applaa.com/registration/" className="text-gray-600 hover:text-orange-600 transition-colors">
                Sign Up
              </Link>
              <Link href="https://app.applaa.com/login/">
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
              <span className="bg-linear-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">
                Your Idea to a great game, app in minutes
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              The ultimate kid-safe gaming hub: Use AI to build games, apps and express creativity in a safe space.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="https://app.applaa.com/registration/">
                <Button size="lg" className="bg-linear-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-3 text-lg">
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
        <div className="absolute top-40 right-20 w-32 h-32 bg-orange-300 rounded-full opacity-20 animate-pulse delay-75"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-orange-200 rounded-full opacity-20 animate-pulse delay-150"></div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-linear-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">
                Amazing Features for Young Explorers
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover, learn, and create with our exciting suite of tools
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {/* Game Hub Card - First */}
            <Link href="#games">
              <Card className="group hover:shadow-xl transition-all duration-300 border-orange-100 hover:border-orange-300 cursor-pointer h-full flex flex-col">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-linear-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Gamepad2 className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800">Games Hub</CardTitle>
                  <CardDescription className="text-gray-600">
                    Play, create, and share amazing games with friends in our safe gaming community
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <ul className="space-y-3 text-sm text-gray-600 flex-1">
                    <li className="flex items-center">
                      <Trophy className="w-4 h-4 text-orange-500 mr-2 shrink-0" />
                      Play & Create Games
                    </li>
                    <li className="flex items-center">
                      <Trophy className="w-4 h-4 text-orange-500 mr-2 shrink-0" />
                      Build any Game fast from 1000's of Game templates
                    </li>
                    <li className="flex items-center">
                      <Trophy className="w-4 h-4 text-orange-500 mr-2 shrink-0" />
                      Game Development Tools
                    </li>
                    <li className="flex items-center">
                      <Trophy className="w-4 h-4 text-orange-500 mr-2 shrink-0" />
                      Leaderboards & Rankings
                    </li>
                  </ul>
                  <div className="mt-6">
                    <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200">
                      All Ages
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Apps (Mobile and Web) Card - Second */}
            <Link href="https://app.applaa.com/login/">
              <Card className="group hover:shadow-xl transition-all duration-300 border-orange-100 hover:border-orange-300 cursor-pointer h-full flex flex-col">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-linear-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Smartphone className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800">Apps (Mobile and Web)</CardTitle>
                  <CardDescription className="text-gray-600">
                    Build any App in minutes with our powerful Ai-powered app builder for web and Mobile.
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <ul className="space-y-3 text-sm text-gray-600 flex-1">
                    <li className="flex items-center">
                      <Zap className="w-4 h-4 text-orange-500 mr-2 shrink-0" />
                      Idea to app in minutes
                    </li>
                    <li className="flex items-center">
                      <Zap className="w-4 h-4 text-orange-500 mr-2 shrink-0" />
                      1000's of templates to build any app fast
                    </li>
                    <li className="flex items-center">
                      <Zap className="w-4 h-4 text-orange-500 mr-2 shrink-0" />
                      No coding needed - build and deploy any App, Website fast
                    </li>
                    <li className="flex items-center">
                      <Zap className="w-4 h-4 text-orange-500 mr-2 shrink-0" />
                      One-click iOS & Android builds
                    </li>
                  </ul>
                  <div className="mt-6">
                    <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200">
                      All Ages
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* AI Academy Card - Third */}
            <Link href="/academy">
              <Card className="group hover:shadow-xl transition-all duration-300 border-orange-100 hover:border-orange-300 cursor-pointer h-full flex flex-col">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-linear-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800">Applaa Academy</CardTitle>
                  <CardDescription className="text-gray-600">
                    Learn artificial intelligence through fun, interactive courses designed for young minds
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <ul className="space-y-3 text-sm text-gray-600 flex-1">
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
                      All Ages
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </Link>

            {/* Social Community Card - Fourth */}
            <Link href="https://app.applaa.com/login/">
              <Card className="group hover:shadow-xl transition-all duration-300 border-orange-100 hover:border-orange-300 cursor-pointer h-full flex flex-col">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-linear-to-r from-orange-500 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-800">Social Community</CardTitle>
                  <CardDescription className="text-gray-600">
                    Connect with friends, share creations, and build your digital community safely
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <ul className="space-y-3 text-sm text-gray-600 flex-1">
                    <li className="flex items-center">
                      <Heart className="w-4 h-4 text-orange-500 mr-2" />
                      Make New Friends
                    </li>
                    <li className="flex items-center">
                      <Heart className="w-4 h-4 text-orange-500 mr-2" />
                      Share Your Creations
                    </li>
                    <li className="flex items-center">
                      <Heart className="w-4 h-4 text-orange-500 mr-2" />
                      Join Clubs & Groups
                    </li>
                    <li className="flex items-center">
                      <Heart className="w-4 h-4 text-orange-500 mr-2" />
                      Safe Chat & Messaging
                    </li>
                  </ul>
                  <div className="mt-6">
                    <Badge className="bg-orange-100 text-orange-800 hover:bg-orange-200">
                      Age 8-18
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      {/* Safety Section */}
      <section id="safety" className="py-20 bg-linear-to-r from-orange-50 to-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-linear-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">
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
              <h3 className="font-bold text-gray-800 mb-2">Account Verification</h3>
              <p className="text-sm text-gray-600">
                All accounts require email verification for safety
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <BookOpen className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Age-Appropriate Content</h3>
              <p className="text-sm text-gray-600">
                All content is reviewed and filtered for age appropriateness
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Users className="w-8 h-8 text-orange-500" />
              </div>
              <h3 className="font-bold text-gray-800 mb-2">Moderated Community</h3>
              <p className="text-sm text-gray-600">
                24/7 moderation ensures a safe and positive environment
              </p>
            </div>
            
            
          </div>

        </div>
      </section>

      {/* Recent Games Section (data-driven) */}
      <section id="games" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-linear-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">
                Recent Apps built in less than 2 minutes by Users
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See what amazing games and apps our community has created!
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {recentGames.map((g) => (
              <GameCard key={g.name} game={g} />
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/games">
              <Button variant="outline" className="border-orange-200 text-orange-600 hover:bg-orange-50">
                View All Games
                <Gamepad2 className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-r from-orange-300 to-orange-400">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Start Your Adventure?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of kids who are already learning, creating, and making friends on Applaa!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://app.applaa.com/registration/">
              <Button size="lg" className="bg-white text-orange-600 hover:bg-gray-100 px-8 py-3 text-lg">
                <Sparkles className="w-5 h-5 mr-2" />
                Join Now - It's Free!
              </Button>
            </Link>
            <Link href="/academy">
              <Button size="lg" variant="outline" className="border-white bg-white/10 backdrop-blur-sm text-white px-8 py-3 text-lg hover:bg-white/20">
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
                <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                  {/* <Sparkles className="w-5 h-5 text-white" /> */}
                  <img src="/applaa.png" alt="Applaa Logo" width={32} height={32} />
                </div>
                <span className="text-2xl font-bold text-white">Applaa</span>
              </div>
              <p className="text-gray-400 text-sm">
                The safe, fun kid-safe gaming hub where kids learn AI and build amazing things together.
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