'use client'

import Link from 'next/link'
import Image from 'next/image'
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
  return `https://applaa.com/${slug}/`
}

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-sm border-b border-orange-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/applaa.png" alt="Applaa Logo" width={32} height={32} />
              <span className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">
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
              <span className="bg-linear-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">
                Your Idea to a great game, app in minutes
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              The ultimate kid-safe gaming hub: Use AI to build games, apps and express creativity in a safe space.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/auth/signup">
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
                      <Trophy className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0" />
                      Play & Create Games
                    </li>
                    <li className="flex items-center">
                      <Trophy className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0" />
                      Build any Game fast from 1000's of Game templates
                    </li>
                    <li className="flex items-center">
                      <Trophy className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0" />
                      Game Development Tools
                    </li>
                    <li className="flex items-center">
                      <Trophy className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0" />
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
            <Link href="/auth/login">
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
                      <Zap className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0" />
                      Idea to app in minutes
                    </li>
                    <li className="flex items-center">
                      <Zap className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0" />
                      1000's of templates to build any app fast
                    </li>
                    <li className="flex items-center">
                      <Zap className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0" />
                      No coding needed - build and deploy any App, Website fast
                    </li>
                    <li className="flex items-center">
                      <Zap className="w-4 h-4 text-orange-500 mr-2 flex-shrink-0" />
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
            <Link href="/auth/login">
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

      {/* Recent Games Section */}
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
            {/* Game Tile 1 - Typing Invaders */}
            <Link href={getGameUrl('Typing Invaders')} target="_blank" rel="noopener noreferrer">
              <Card className="group hover:shadow-2xl hover:scale-105 transition-all duration-300 border-orange-100 hover:border-orange-300 cursor-pointer overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]"></div>
                  <div className="relative z-10 text-3xl md:text-4xl transform group-hover:scale-110 transition-transform">👾</div>
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent"></div>
                  <div className="absolute top-2 left-2 text-white text-xs">COMPUTER</div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-sm md:text-base text-gray-800 group-hover:text-orange-600 transition-colors flex items-center">
                    <span className="text-orange-600 mr-1">→</span> Typing Invaders
                  </h3>
                </CardContent>
              </Card>
            </Link>

            {/* Game Tile 2 - Snake */}
            <Link href={getGameUrl('Snake')} target="_blank" rel="noopener noreferrer">
              <Card className="group hover:shadow-2xl hover:scale-105 transition-all duration-300 border-orange-100 hover:border-orange-300 cursor-pointer overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center relative overflow-hidden border-2 border-green-500">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,197,94,0.2),transparent_70%)]"></div>
                  <div className="relative z-10 text-3xl md:text-4xl transform group-hover:scale-110 transition-transform">🐍</div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <div className="w-4 h-4 bg-green-500 rounded-sm transform rotate-45"></div>
                    <div className="absolute top-4 left-0 w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="absolute top-8 left-0 w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="absolute top-12 left-0 w-3 h-3 bg-red-500 rounded-full"></div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-sm md:text-base text-gray-800 group-hover:text-orange-600 transition-colors flex items-center">
                    <span className="text-orange-600 mr-1">→</span> Snake
                  </h3>
                </CardContent>
              </Card>
            </Link>

            {/* Game Tile 3 - Abstract Speedster */}
            <Link href={getGameUrl('Abstract Speedster')} target="_blank" rel="noopener noreferrer">
              <Card className="group hover:shadow-2xl hover:scale-105 transition-all duration-300 border-orange-100 hover:border-orange-300 cursor-pointer overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-gray-800 via-gray-900 to-black flex items-center justify-center relative overflow-hidden border-2 border-blue-400">
                  <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_0%,rgba(255,255,255,0.1)_50%,transparent_100%)] bg-[length:100%_20px]"></div>
                  <div className="relative z-10 text-3xl md:text-4xl transform group-hover:scale-110 transition-transform">🏎️</div>
                  <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-purple-500 rounded shadow-lg"></div>
                  <div className="absolute bottom-12 left-1/4 w-6 h-6 bg-yellow-400 rounded"></div>
                  <div className="absolute bottom-12 right-1/4 w-6 h-6 bg-orange-500 rounded"></div>
                  <div className="absolute top-2 left-2 right-2 text-blue-300 text-xs">Use LEFT/RIGHT or A/D</div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-sm md:text-base text-gray-800 group-hover:text-orange-600 transition-colors flex items-center">
                    <span className="text-orange-600 mr-1">→</span> Abstract Speedster
                  </h3>
                </CardContent>
              </Card>
            </Link>

            {/* Game Tile 4 - Rock Paper Scissor */}
            <Link href={getGameUrl('Rock Paper Scissor')} target="_blank" rel="noopener noreferrer">
              <Card className="group hover:shadow-2xl hover:scale-105 transition-all duration-300 border-orange-100 hover:border-orange-300 cursor-pointer overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.2)_0%,transparent_50%,rgba(0,0,0,0.2)_100%)]"></div>
                  <div className="relative z-10 text-3xl md:text-4xl transform group-hover:scale-110 transition-transform">✂️</div>
                  <div className="absolute inset-0 border-2 border-white/30 rounded-lg m-2"></div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-sm md:text-base text-gray-800 group-hover:text-orange-600 transition-colors flex items-center">
                    <span className="text-orange-600 mr-1">→</span> Rock Paper Scissor
                  </h3>
                </CardContent>
              </Card>
            </Link>

            {/* Game Tile 3 - Ping Pong */}
            <Link href={getGameUrl('Ping Pong')} target="_blank" rel="noopener noreferrer">
              <Card className="group hover:shadow-2xl hover:scale-105 transition-all duration-300 border-orange-100 hover:border-orange-300 cursor-pointer overflow-hidden">
                <div className="aspect-square bg-black flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent_70%)]"></div>
                  <div className="relative z-10 text-3xl md:text-4xl transform group-hover:scale-110 transition-transform">🏓</div>
                  <div className="absolute top-2 left-1/4 w-1 h-16 bg-white"></div>
                  <div className="absolute top-2 right-1/4 w-1 h-16 bg-white"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-white rounded"></div>
                  <div className="absolute top-4 left-4 text-white text-xs">0</div>
                  <div className="absolute top-4 right-4 text-white text-xs">0</div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-sm md:text-base text-gray-800 group-hover:text-orange-600 transition-colors flex items-center">
                    <span className="text-orange-600 mr-1">→</span> Ping Pong
                  </h3>
                </CardContent>
              </Card>
            </Link>

            {/* Game Tile 4 - Skateboard Extreme */}
            <Link href={getGameUrl('Skateboard Extreme')} target="_blank" rel="noopener noreferrer">
              <Card className="group hover:shadow-2xl hover:scale-105 transition-all duration-300 border-orange-100 hover:border-orange-300 cursor-pointer overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-orange-400 to-yellow-500 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.3),transparent_60%)]"></div>
                  <div className="relative z-10 text-3xl md:text-4xl transform group-hover:scale-110 transition-transform">🛹</div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-sm md:text-base text-gray-800 group-hover:text-orange-600 transition-colors flex items-center">
                    <span className="text-orange-600 mr-1">→</span> Skateboard Extreme
                  </h3>
                </CardContent>
              </Card>
            </Link>

            {/* Game Tile 5 - Memory Match */}
            <Link href={getGameUrl('Memory Match')} target="_blank" rel="noopener noreferrer">
              <Card className="group hover:shadow-2xl hover:scale-105 transition-all duration-300 border-orange-100 hover:border-orange-300 cursor-pointer overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.4),transparent_50%)]"></div>
                  <div className="relative z-10 text-3xl md:text-4xl transform group-hover:scale-110 transition-transform">🧩</div>
                  <div className="absolute inset-0 grid grid-cols-4 gap-1 p-4 opacity-50">
                    {[...Array(16)].map((_, i) => <div key={i} className="bg-white/30 rounded backdrop-blur-sm"></div>)}
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-sm md:text-base text-gray-800 group-hover:text-orange-600 transition-colors flex items-center">
                    <span className="text-orange-600 mr-1">→</span> Memory Match
                  </h3>
                </CardContent>
              </Card>
            </Link>

            {/* Game Tile 6 - Words Finding */}
            <Link href={getGameUrl('Words Finding')} target="_blank" rel="noopener noreferrer">
              <Card className="group hover:shadow-2xl hover:scale-105 transition-all duration-300 border-orange-100 hover:border-orange-300 cursor-pointer overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2),transparent_70%)]"></div>
                  <div className="relative z-10 text-3xl md:text-4xl transform group-hover:scale-110 transition-transform">🔤</div>
                  <div className="absolute inset-0 grid grid-cols-6 gap-0.5 p-3 opacity-60">
                    {['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'].slice(0, 24).map((letter, i) => (
                      <div key={i} className="bg-white/40 rounded text-xs flex items-center justify-center backdrop-blur-sm font-bold">{letter}</div>
                    ))}
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-sm md:text-base text-gray-800 group-hover:text-orange-600 transition-colors flex items-center">
                    <span className="text-orange-600 mr-1">→</span> Words Finding
                  </h3>
                </CardContent>
              </Card>
            </Link>

            {/* Game Tile 7 - Infinite Runner */}
            <Link href={getGameUrl('Infinite Runner')} target="_blank" rel="noopener noreferrer">
              <Card className="group hover:shadow-2xl hover:scale-105 transition-all duration-300 border-orange-100 hover:border-orange-300 cursor-pointer overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-sky-400 to-blue-500 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-green-600 to-green-500"></div>
                  <div className="relative z-10 text-3xl md:text-4xl transform group-hover:scale-110 transition-transform">🏃</div>
                  <div className="absolute bottom-8 left-1/4 w-4 h-4 bg-green-600 rounded"></div>
                  <div className="absolute bottom-12 right-1/4 w-4 h-4 bg-yellow-400 rounded"></div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-sm md:text-base text-gray-800 group-hover:text-orange-600 transition-colors flex items-center">
                    <span className="text-orange-600 mr-1">→</span> Infinite Runner
                  </h3>
                </CardContent>
              </Card>
            </Link>

            {/* Game Tile 8 - Year 9 Maths Tracker */}
            <Link href={getGameUrl('Year 9 Maths Tracker')} target="_blank" rel="noopener noreferrer">
              <Card className="group hover:shadow-2xl hover:scale-105 transition-all duration-300 border-orange-100 hover:border-orange-300 cursor-pointer overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(180,83,9,0.1),transparent_70%)]"></div>
                  <div className="relative z-10 text-3xl md:text-4xl transform group-hover:scale-110 transition-transform">📚</div>
                  <div className="absolute top-4 left-4 right-4 text-amber-900 text-xs font-bold">CLASS 9 TUTORIAL</div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-sm md:text-base text-gray-800 group-hover:text-orange-600 transition-colors flex items-center">
                    <span className="text-orange-600 mr-1">→</span> Year 9 Maths Tracker
                  </h3>
                </CardContent>
              </Card>
            </Link>

            {/* Game Tile 9 - Solitaire Collection */}
            <Link href={getGameUrl('Solitaire Collection')} target="_blank" rel="noopener noreferrer">
              <Card className="group hover:shadow-2xl hover:scale-105 transition-all duration-300 border-orange-100 hover:border-orange-300 cursor-pointer overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-green-700 via-green-600 to-green-800 flex items-center justify-center relative overflow-hidden shadow-inner">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.3),transparent_50%)]"></div>
                  <div className="relative z-10 text-3xl md:text-4xl transform group-hover:scale-110 transition-transform">🃏</div>
                  <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-sm md:text-base text-gray-800 group-hover:text-orange-600 transition-colors flex items-center">
                    <span className="text-orange-600 mr-1">→</span> Solitaire Collection
                  </h3>
                </CardContent>
              </Card>
            </Link>

            {/* Game Tile 9 - Spot The Difference */}
            <Link href={getGameUrl('Spot The Difference')} target="_blank" rel="noopener noreferrer">
              <Card className="group hover:shadow-2xl hover:scale-105 transition-all duration-300 border-orange-100 hover:border-orange-300 cursor-pointer overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-cyan-500 via-blue-500 to-indigo-600 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.2)_0%,transparent_50%,rgba(0,0,0,0.2)_100%)]"></div>
                  <div className="relative z-10 text-3xl md:text-4xl transform group-hover:scale-110 transition-transform">🔍</div>
                  <div className="absolute inset-0 border-2 border-white/30 rounded-lg m-2"></div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-sm md:text-base text-gray-800 group-hover:text-orange-600 transition-colors flex items-center">
                    <span className="text-orange-600 mr-1">→</span> Spot The Difference
                  </h3>
                </CardContent>
              </Card>
            </Link>

            {/* Game Tile 10 - Your Todos List */}
            <Link href={getGameUrl('Your Todos List')} target="_blank" rel="noopener noreferrer">
              <Card className="group hover:shadow-2xl hover:scale-105 transition-all duration-300 border-orange-100 hover:border-orange-300 cursor-pointer overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-purple-400 via-pink-500 to-rose-500 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.3),transparent_70%)]"></div>
                  <div className="relative z-10 text-3xl md:text-4xl transform group-hover:scale-110 transition-transform">📝</div>
                  <div className="absolute top-2 left-2 right-2 h-8 bg-white/20 rounded backdrop-blur-sm"></div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-sm md:text-base text-gray-800 group-hover:text-orange-600 transition-colors flex items-center">
                    <span className="text-orange-600 mr-1">→</span> Your Todos List
                  </h3>
                </CardContent>
              </Card>
            </Link>

            {/* Game Tile 11 - Arcane Breaker */}
            <Link href={getGameUrl('Arcane Breaker')} target="_blank" rel="noopener noreferrer">
              <Card className="group hover:shadow-2xl hover:scale-105 transition-all duration-300 border-orange-100 hover:border-orange-300 cursor-pointer overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-slate-800 via-blue-900 to-indigo-950 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.3),transparent_70%)]"></div>
                  <div className="relative z-10 text-3xl md:text-4xl transform group-hover:scale-110 transition-transform">⚡</div>
                  <div className="absolute inset-0 border border-blue-400/30 rounded-lg m-3"></div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-bold text-sm md:text-base text-gray-800 group-hover:text-orange-600 transition-colors flex items-center">
                    <span className="text-orange-600 mr-1">→</span> Arcane Breaker
                  </h3>
                </CardContent>
              </Card>
            </Link>

            {/* Game Tile 12 - Crossword Puzzle Game */}
            <Link href={getGameUrl('Crossword Puzzle Game')} target="_blank" rel="noopener noreferrer">
              <Card className="group hover:shadow-2xl hover:scale-105 transition-all duration-300 border-orange-100 hover:border-orange-300 cursor-pointer overflow-hidden">
              <div className="aspect-square bg-gradient-to-br from-amber-100 via-yellow-100 to-orange-100 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(0,0,0,0.05)_49%,rgba(0,0,0,0.05)_51%,transparent_52%)] bg-[length:20px_20px]"></div>
                <div className="relative z-10 text-3xl md:text-4xl transform group-hover:scale-110 transition-transform">📰</div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-sm md:text-base text-gray-800 group-hover:text-orange-600 transition-colors flex items-center">
                  <span className="text-orange-600 mr-1">→</span> Crossword Puzzle Game
                </h3>
              </CardContent>
              </Card>
            </Link>

            {/* Game Tile 13 - Dots And Boxes */}
            <Link href={getGameUrl('Dots And Boxes')} target="_blank" rel="noopener noreferrer">
              <Card className="group hover:shadow-2xl hover:scale-105 transition-all duration-300 border-orange-100 hover:border-orange-300 cursor-pointer overflow-hidden">
              <div className="aspect-square bg-gradient-to-br from-teal-400 via-cyan-500 to-blue-500 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.4),transparent_50%)]"></div>
                <div className="relative z-10 text-3xl md:text-4xl transform group-hover:scale-110 transition-transform">⚫</div>
                <div className="absolute inset-0 grid grid-cols-4 gap-1 p-4 opacity-30">
                  {[...Array(16)].map((_, i) => <div key={i} className="bg-white rounded-full"></div>)}
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-sm md:text-base text-gray-800 group-hover:text-orange-600 transition-colors flex items-center">
                  <span className="text-orange-600 mr-1">→</span> Dots And Boxes
                </h3>
              </CardContent>
              </Card>
            </Link>

            {/* Game Tile 15 - Whack A Mole */}
            <Link href={getGameUrl('Whack A Mole')} target="_blank" rel="noopener noreferrer">
              <Card className="group hover:shadow-2xl hover:scale-105 transition-all duration-300 border-orange-100 hover:border-orange-300 cursor-pointer overflow-hidden">
              <div className="aspect-square bg-gradient-to-br from-amber-600 via-orange-600 to-red-600 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(139,69,19,0.4),transparent_70%)]"></div>
                <div className="relative z-10 text-3xl md:text-4xl transform group-hover:scale-110 transition-transform">🕳️</div>
                <div className="absolute inset-0 grid grid-cols-3 gap-2 p-4">
                  {[...Array(9)].map((_, i) => <div key={i} className="bg-amber-900/40 rounded-full border-2 border-amber-800/50"></div>)}
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-sm md:text-base text-gray-800 group-hover:text-orange-600 transition-colors flex items-center">
                  <span className="text-orange-600 mr-1">→</span> Whack A Mole
                </h3>
              </CardContent>
              </Card>
            </Link>

            {/* Game Tile 16 - Connect Four */}
            <Link href={getGameUrl('Connect Four')} target="_blank" rel="noopener noreferrer">
              <Card className="group hover:shadow-2xl hover:scale-105 transition-all duration-300 border-orange-100 hover:border-orange-300 cursor-pointer overflow-hidden">
              <div className="aspect-square bg-gradient-to-br from-blue-600 via-blue-500 to-cyan-500 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2),transparent_60%)]"></div>
                <div className="relative z-10 text-3xl md:text-4xl transform group-hover:scale-110 transition-transform">🔴</div>
                <div className="absolute inset-0 grid grid-cols-7 gap-1 p-3">
                  {[...Array(42)].map((_, i) => <div key={i} className={`rounded-full ${i % 3 === 0 ? 'bg-red-500' : i % 3 === 1 ? 'bg-yellow-400' : 'bg-transparent border border-white/20'}`}></div>)}
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-sm md:text-base text-gray-800 group-hover:text-orange-600 transition-colors flex items-center">
                  <span className="text-orange-600 mr-1">→</span> Connect Four
                </h3>
              </CardContent>
              </Card>
            </Link>

            {/* Game Tile 17 - Countdown Quiz */}
            <Link href={getGameUrl('Countdown Quiz')} target="_blank" rel="noopener noreferrer">
              <Card className="group hover:shadow-2xl hover:scale-105 transition-all duration-300 border-orange-100 hover:border-orange-300 cursor-pointer overflow-hidden">
              <div className="aspect-square bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.3),transparent_70%)]"></div>
                <div className="relative z-10 text-4xl md:text-5xl font-bold text-white transform group-hover:scale-110 transition-transform">5</div>
                <div className="absolute top-4 left-4 text-white/80 text-xs font-bold">COUNTDOWN</div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-sm md:text-base text-gray-800 group-hover:text-orange-600 transition-colors flex items-center">
                  <span className="text-orange-600 mr-1">→</span> Countdown Quiz
                </h3>
              </CardContent>
              </Card>
            </Link>

            {/* Game Tile 19 - Adventure Map */}
            <Link href={getGameUrl('Adventure Map')} target="_blank" rel="noopener noreferrer">
              <Card className="group hover:shadow-2xl hover:scale-105 transition-all duration-300 border-orange-100 hover:border-orange-300 cursor-pointer overflow-hidden">
              <div className="aspect-square bg-gradient-to-br from-green-500 via-emerald-600 to-teal-700 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgba(34,197,94,0.4),transparent_60%)]"></div>
                <div className="relative z-10 text-3xl md:text-4xl transform group-hover:scale-110 transition-transform">🗺️</div>
                <div className="absolute top-2 left-2 right-2 h-6 bg-green-800/50 rounded backdrop-blur-sm border border-green-700/50"></div>
                <div className="absolute bottom-4 left-4 right-4 h-12 bg-amber-100/80 rounded shadow-lg border border-amber-300"></div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-sm md:text-base text-gray-800 group-hover:text-orange-600 transition-colors flex items-center">
                  <span className="text-orange-600 mr-1">→</span> Adventure Map
                </h3>
              </CardContent>
              </Card>
            </Link>

            {/* Game Tile 20 - Emoji Match */}
            <Link href={getGameUrl('Emoji Match')} target="_blank" rel="noopener noreferrer">
              <Card className="group hover:shadow-2xl hover:scale-105 transition-all duration-300 border-orange-100 hover:border-orange-300 cursor-pointer overflow-hidden">
              <div className="aspect-square bg-gradient-to-br from-pink-300 via-rose-400 to-red-400 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.4),transparent_50%)]"></div>
                <div className="relative z-10 text-3xl md:text-4xl transform group-hover:scale-110 transition-transform">😊</div>
                <div className="absolute inset-0 grid grid-cols-5 gap-1 p-3">
                  {['😊', '❤️', '⭐', '👍', '😢', '🎉', '🔥', '💎', '🚀', '🎮', '🌈', '✨', '🎯', '💪', '🎨', '🌟', '🎪', '🎭', '🎬', '🎤', '🎧', '🎸', '🎹', '🎺', '🎻'].slice(0, 25).map((emoji, i) => (
                    <div key={i} className="bg-white/30 rounded backdrop-blur-sm flex items-center justify-center text-xs">{emoji}</div>
                  ))}
                </div>
                <div className="absolute top-2 left-2 bg-yellow-400 text-yellow-900 text-xs font-bold px-2 py-1 rounded shadow-lg">160</div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-sm md:text-base text-gray-800 group-hover:text-orange-600 transition-colors flex items-center">
                  <span className="text-orange-600 mr-1">→</span> Emoji Match
                </h3>
              </CardContent>
              </Card>
            </Link>

            {/* Game Tile 21 - Escape the Maze */}
            <Link href={getGameUrl('Escape the Maze')} target="_blank" rel="noopener noreferrer">
              <Card className="group hover:shadow-2xl hover:scale-105 transition-all duration-300 border-orange-100 hover:border-orange-300 cursor-pointer overflow-hidden">
              <div className="aspect-square bg-gradient-to-br from-gray-800 via-gray-900 to-black flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(100,100,100,0.3),transparent_70%)]"></div>
                <div className="relative z-10 text-3xl md:text-4xl transform group-hover:scale-110 transition-transform">🏛️</div>
                <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(255,255,255,0.1)_50%,transparent_100%)] bg-[length:40px_40px]"></div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-white rounded-full shadow-lg shadow-white/50"></div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-sm md:text-base text-gray-800 group-hover:text-orange-600 transition-colors flex items-center">
                  <span className="text-orange-600 mr-1">→</span> Escape the Maze
                </h3>
              </CardContent>
              </Card>
            </Link>

            {/* Game Tile 22 - Stick Sword Duel */}
            <Link href={getGameUrl('Stick Sword Duel')} target="_blank" rel="noopener noreferrer">
              <Card className="group hover:shadow-2xl hover:scale-105 transition-all duration-300 border-orange-100 hover:border-orange-300 cursor-pointer overflow-hidden">
              <div className="aspect-square bg-gradient-to-br from-sky-300 via-blue-400 to-cyan-500 flex items-center justify-center relative overflow-hidden">
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-green-500 to-green-400"></div>
                <div className="relative z-10 text-3xl md:text-4xl transform group-hover:scale-110 transition-transform">⚔️</div>
                <div className="absolute top-1/2 left-1/4 transform -translate-y-1/2 text-2xl">🤺</div>
                <div className="absolute top-1/2 right-1/4 transform -translate-y-1/2 text-2xl">🤺</div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-sm md:text-base text-gray-800 group-hover:text-orange-600 transition-colors flex items-center">
                  <span className="text-orange-600 mr-1">→</span> Stick Sword Duel
                </h3>
              </CardContent>
              </Card>
            </Link>

            {/* Game Tile 23 - Element Family Builder */}
            <Link href={getGameUrl('Element Family Builder')} target="_blank" rel="noopener noreferrer">
              <Card className="group hover:shadow-2xl hover:scale-105 transition-all duration-300 border-orange-100 hover:border-orange-300 cursor-pointer overflow-hidden">
              <div className="aspect-square bg-gradient-to-br from-violet-500 via-purple-600 to-indigo-700 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.2),transparent_70%)]"></div>
                <div className="relative z-10 text-3xl md:text-4xl transform group-hover:scale-110 transition-transform">⚛️</div>
                <div className="absolute inset-0 grid grid-cols-3 gap-2 p-4 opacity-40">
                  {['H', 'Li', 'Na', 'Be', 'Mg', 'Ca', 'B', 'Al', 'Ga'].map((el, i) => (
                    <div key={i} className="bg-white/20 rounded text-xs flex items-center justify-center backdrop-blur-sm">{el}</div>
                  ))}
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-sm md:text-base text-gray-800 group-hover:text-orange-600 transition-colors flex items-center">
                  <span className="text-orange-600 mr-1">→</span> Element Family Builder
                </h3>
              </CardContent>
              </Card>
            </Link>

            {/* Game Tile 24 - Tap Zero */}
            <Link href={getGameUrl('Tap Zero')} target="_blank" rel="noopener noreferrer">
              <Card className="group hover:shadow-2xl hover:scale-105 transition-all duration-300 border-orange-100 hover:border-orange-300 cursor-pointer overflow-hidden">
              <div className="aspect-square bg-gradient-to-br from-white via-blue-50 to-cyan-100 flex items-center justify-center relative overflow-hidden border-2 border-blue-200">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.1),transparent_70%)]"></div>
                <div className="relative z-10 text-5xl md:text-6xl font-bold text-blue-600 transform group-hover:scale-110 transition-transform">0</div>
                <div className="absolute top-4 left-4 text-blue-800 text-xs font-bold">Score: 0</div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-500 text-white px-4 py-2 rounded-lg text-xs font-bold shadow-lg">▷ Start Game</div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-sm md:text-base text-gray-800 group-hover:text-orange-600 transition-colors flex items-center">
                  <span className="text-orange-600 mr-1">→</span> Tap Zero
                </h3>
              </CardContent>
              </Card>
            </Link>

            {/* Game Tile 25 - Bubble Pop */}
            <Link href={getGameUrl('Bubble Pop')} target="_blank" rel="noopener noreferrer">
              <Card className="group hover:shadow-2xl hover:scale-105 transition-all duration-300 border-orange-100 hover:border-orange-300 cursor-pointer overflow-hidden">
              <div className="aspect-square bg-gradient-to-br from-white via-pink-50 to-purple-50 flex items-center justify-center relative overflow-hidden border-2 border-pink-200">
                <div className="absolute inset-0 grid grid-cols-6 gap-1 p-3">
                  {[
                    'bg-red-500', 'bg-green-500', 'bg-blue-500', 'bg-orange-500', 'bg-purple-500', 'bg-pink-500',
                    'bg-yellow-400', 'bg-cyan-500', 'bg-indigo-500', 'bg-rose-500', 'bg-amber-500', 'bg-emerald-500',
                    'bg-teal-500', 'bg-violet-500', 'bg-fuchsia-500', 'bg-lime-500', 'bg-sky-500', 'bg-blue-600',
                    'bg-purple-600', 'bg-pink-600', 'bg-red-600', 'bg-green-600', 'bg-blue-700', 'bg-orange-600',
                    'bg-purple-700', 'bg-pink-700', 'bg-yellow-500', 'bg-cyan-600', 'bg-indigo-600', 'bg-rose-600',
                    'bg-amber-600', 'bg-emerald-600', 'bg-teal-600', 'bg-violet-600', 'bg-fuchsia-600', 'bg-lime-600'
                  ].slice(0, 36).map((colorClass, i) => (
                    <div key={i} className={`${colorClass} rounded-full shadow-md`}></div>
                  ))}
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-sm md:text-base text-gray-800 group-hover:text-orange-600 transition-colors flex items-center">
                  <span className="text-orange-600 mr-1">→</span> Bubble Pop
                </h3>
              </CardContent>
              </Card>
            </Link>

            {/* Game Tile 26 - Maze of Terror */}
            <Link href={getGameUrl('Maze of Terror')} target="_blank" rel="noopener noreferrer">
              <Card className="group hover:shadow-2xl hover:scale-105 transition-all duration-300 border-orange-100 hover:border-orange-300 cursor-pointer overflow-hidden">
              <div className="aspect-square bg-gradient-to-br from-gray-900 via-blue-950 to-indigo-950 flex items-center justify-center relative overflow-hidden border-2 border-blue-400">
                <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_0%,rgba(59,130,246,0.2)_50%,transparent_100%)] bg-[length:20px_20px]"></div>
                <div className="relative z-10 text-3xl md:text-4xl transform group-hover:scale-110 transition-transform">🔷</div>
                <div className="absolute top-2 left-2 right-2 text-blue-300 text-xs font-bold">Use Arrow Keys or WASD</div>
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-3 h-3 bg-red-500 rounded shadow-lg shadow-red-500/50"></div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-sm md:text-base text-gray-800 group-hover:text-orange-600 transition-colors flex items-center">
                  <span className="text-orange-600 mr-1">→</span> Maze of Terror
                </h3>
              </CardContent>
              </Card>
            </Link>

            {/* Game Tile 27 - Mono-Fleet */}
            <Link href={getGameUrl('Mono-Fleet')} target="_blank" rel="noopener noreferrer">
              <Card className="group hover:shadow-2xl hover:scale-105 transition-all duration-300 border-orange-100 hover:border-orange-300 cursor-pointer overflow-hidden">
              <div className="aspect-square bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center relative overflow-hidden border-2 border-blue-400">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.2),transparent_70%)]"></div>
                <div className="relative z-10 text-3xl md:text-4xl transform group-hover:scale-110 transition-transform">🔷</div>
                <div className="absolute inset-0 grid grid-cols-4 gap-2 p-4">
                  {[...Array(16)].map((_, i) => (
                    <div key={i} className={`${i === 15 ? 'bg-blue-500' : 'bg-white'} rounded shadow-lg`}></div>
                  ))}
                </div>
                <div className="absolute bottom-2 left-2 text-white text-xs font-bold">SCORE: 0</div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-sm md:text-base text-gray-800 group-hover:text-orange-600 transition-colors flex items-center">
                  <span className="text-orange-600 mr-1">→</span> Mono-Fleet
                </h3>
              </CardContent>
              </Card>
            </Link>

            {/* Game Tile 28 - Collect & Run Challenge */}
            <Link href={getGameUrl('Collect & Run Challenge')} target="_blank" rel="noopener noreferrer">
              <Card className="group hover:shadow-2xl hover:scale-105 transition-all duration-300 border-orange-100 hover:border-orange-300 cursor-pointer overflow-hidden">
              <div className="aspect-square bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center relative overflow-hidden border-2 border-orange-500">
                <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-gray-700 to-gray-600"></div>
                <div className="relative z-10 text-3xl md:text-4xl transform group-hover:scale-110 transition-transform">🏃</div>
                <div className="absolute bottom-8 left-1/4 w-6 h-6 bg-blue-500 rounded shadow-lg"></div>
                <div className="absolute bottom-12 left-1/2 w-4 h-4 bg-yellow-400 rounded-full"></div>
                <div className="absolute bottom-12 right-1/4 w-4 h-4 bg-green-500 rounded-full"></div>
                <div className="absolute bottom-2 left-2 text-white text-xs font-bold">Score: 0</div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-sm md:text-base text-gray-800 group-hover:text-orange-600 transition-colors flex items-center">
                  <span className="text-orange-600 mr-1">→</span> Collect & Run Challenge
                </h3>
              </CardContent>
              </Card>
            </Link>

            {/* Game Tile 34 - Cyber Runner */}
            <Link href={getGameUrl('Cyber Runner')} target="_blank" rel="noopener noreferrer">
              <Card className="group hover:shadow-2xl hover:scale-105 transition-all duration-300 border-orange-100 hover:border-orange-300 cursor-pointer overflow-hidden">
              <div className="aspect-square bg-gradient-to-br from-gray-700 via-gray-800 to-gray-900 flex items-center justify-center relative overflow-hidden border-2 border-gray-400">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_48%,rgba(59,130,246,0.2)_49%,rgba(59,130,246,0.2)_51%,transparent_52%)] bg-[length:20px_20px]"></div>
                <div className="relative z-10 text-3xl md:text-4xl transform group-hover:scale-110 transition-transform">🤖</div>
                <div className="absolute bottom-8 left-1/4 w-6 h-6 bg-blue-500 rounded shadow-lg"></div>
                <div className="absolute bottom-12 left-1/2 w-4 h-4 bg-orange-500 rounded"></div>
                <div className="absolute bottom-12 right-1/4 w-4 h-4 bg-cyan-400 rounded"></div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-sm md:text-base text-gray-800 group-hover:text-orange-600 transition-colors flex items-center">
                  <span className="text-orange-600 mr-1">→</span> Cyber Runner
                </h3>
              </CardContent>
              </Card>
            </Link>

            {/* Game Tile 35 - Moon Colony Tycoon */}
            <Link href={getGameUrl('Moon Colony Tycoon')} target="_blank" rel="noopener noreferrer">
              <Card className="group hover:shadow-2xl hover:scale-105 transition-all duration-300 border-orange-100 hover:border-orange-300 cursor-pointer overflow-hidden">
              <div className="aspect-square bg-gradient-to-br from-gray-600 via-gray-700 to-gray-800 flex items-center justify-center relative overflow-hidden border-2 border-gray-400">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent_70%)]"></div>
                <div className="relative z-10 text-3xl md:text-4xl transform group-hover:scale-110 transition-transform">🌙</div>
                <div className="absolute inset-0 grid grid-cols-4 gap-2 p-4">
                  {[...Array(16)].map((_, i) => (
                    <div key={i} className={`${i % 4 === 0 ? 'w-8 h-8' : i % 4 === 1 ? 'w-6 h-6' : i % 4 === 2 ? 'w-10 h-10' : 'w-4 h-4'} bg-gray-800 rounded-full border border-gray-600`}></div>
                  ))}
                </div>
                <div className="absolute top-2 left-2 right-2 flex justify-between text-white text-xs">
                  <span>Money 500</span>
                  <span>Power 100</span>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-sm md:text-base text-gray-800 group-hover:text-orange-600 transition-colors flex items-center">
                  <span className="text-orange-600 mr-1">→</span> Moon Colony Tycoon
                </h3>
              </CardContent>
              </Card>
            </Link>

            {/* Game Tile 36 - Desert Caravan Trader */}
            <Link href={getGameUrl('Desert Caravan Trader')} target="_blank" rel="noopener noreferrer">
              <Card className="group hover:shadow-2xl hover:scale-105 transition-all duration-300 border-orange-100 hover:border-orange-300 cursor-pointer overflow-hidden">
              <div className="aspect-square bg-gradient-to-br from-amber-600 via-orange-600 to-amber-700 flex items-center justify-center relative overflow-hidden border-2 border-amber-500">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(245,158,11,0.3),transparent_60%)]"></div>
                <div className="relative z-10 text-3xl md:text-4xl transform group-hover:scale-110 transition-transform">🐪</div>
                <div className="absolute inset-0 grid grid-cols-4 gap-1 p-4">
                  {[...Array(16)].map((_, i) => (
                    <div key={i} className={`${i % 3 === 0 ? 'bg-yellow-400' : 'bg-transparent'} rounded-full border border-amber-600`}></div>
                  ))}
                </div>
                <div className="absolute top-2 left-2 right-2 text-amber-900 text-xs font-bold">Manage resources wisely...</div>
                <div className="absolute bottom-2 left-2 right-2 flex gap-1">
                  <div className="flex-1 bg-amber-200/50 text-amber-900 text-xs px-1 py-0.5 rounded text-center">North</div>
                  <div className="flex-1 bg-amber-200/50 text-amber-900 text-xs px-1 py-0.5 rounded text-center">South</div>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-sm md:text-base text-gray-800 group-hover:text-orange-600 transition-colors flex items-center">
                  <span className="text-orange-600 mr-1">→</span> Desert Caravan Trader
                </h3>
              </CardContent>
              </Card>
            </Link>

            {/* Game Tile 38 - Tic-Tac-Toe */}
            <Link href={getGameUrl('Tic-Tac-Toe')} target="_blank" rel="noopener noreferrer">
              <Card className="group hover:shadow-2xl hover:scale-105 transition-all duration-300 border-orange-100 hover:border-orange-300 cursor-pointer overflow-hidden">
              <div className="aspect-square bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent_70%)]"></div>
                <div className="relative z-10 grid grid-cols-3 gap-1 p-4">
                  {['X', 'O', 'X', 'O', 'X', 'O', 'X', '', 'O'].map((val, i) => (
                    <div key={i} className="w-8 h-8 bg-gray-600 rounded flex items-center justify-center text-white font-bold text-sm border border-gray-500">
                      {val}
                    </div>
                  ))}
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-sm md:text-base text-gray-800 group-hover:text-orange-600 transition-colors flex items-center">
                  <span className="text-orange-600 mr-1">→</span> Tic-Tac-Toe
                </h3>
              </CardContent>
              </Card>
            </Link>

            {/* Game Tile 39 - Jumpy Dot */}
            <Link href={getGameUrl('Jumpy Dot')} target="_blank" rel="noopener noreferrer">
              <Card className="group hover:shadow-2xl hover:scale-105 transition-all duration-300 border-orange-100 hover:border-orange-300 cursor-pointer overflow-hidden">
              <div className="aspect-square bg-gradient-to-br from-gray-900 via-black to-gray-900 flex items-center justify-center relative overflow-hidden">
                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-amber-600 to-amber-500"></div>
                <div className="relative z-10 text-3xl md:text-4xl transform group-hover:scale-110 transition-transform">🔴</div>
                <div className="absolute bottom-8 left-1/4 w-12 h-4 bg-amber-500 rounded"></div>
                <div className="absolute bottom-12 left-1/2 w-8 h-4 bg-amber-500 rounded"></div>
                <div className="absolute bottom-16 right-1/4 w-10 h-4 bg-amber-500 rounded"></div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-sm md:text-base text-gray-800 group-hover:text-orange-600 transition-colors flex items-center">
                  <span className="text-orange-600 mr-1">→</span> Jumpy Dot
                </h3>
              </CardContent>
              </Card>
            </Link>

            {/* Game Tile 40 - Truth or Dare Spinner */}
            <Link href={getGameUrl('Truth or Dare Spinner')} target="_blank" rel="noopener noreferrer">
              <Card className="group hover:shadow-2xl hover:scale-105 transition-all duration-300 border-orange-100 hover:border-orange-300 cursor-pointer overflow-hidden">
              <div className="aspect-square bg-gradient-to-br from-blue-300 via-cyan-400 to-teal-500 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.3),transparent_70%)]"></div>
                <div className="relative z-10 w-24 h-24 rounded-full border-8 border-white shadow-2xl">
                  <div className="absolute inset-0 bg-gradient-to-br from-red-500 to-blue-500 rounded-full"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-yellow-400 rounded-full opacity-50"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg"></div>
                </div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-red-500 text-white px-3 py-1 rounded-lg text-xs font-bold shadow-lg">Spin</div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-sm md:text-base text-gray-800 group-hover:text-orange-600 transition-colors flex items-center">
                  <span className="text-orange-600 mr-1">→</span> Truth or Dare Spinner
                </h3>
              </CardContent>
              </Card>
            </Link>

            {/* Game Tile 41 - Net Worth Calculator */}
            <Link href={getGameUrl('Net Worth Calculator')} target="_blank" rel="noopener noreferrer">
              <Card className="group hover:shadow-2xl hover:scale-105 transition-all duration-300 border-orange-100 hover:border-orange-300 cursor-pointer overflow-hidden">
              <div className="aspect-square bg-gradient-to-br from-white via-gray-50 to-gray-100 flex items-center justify-center relative overflow-hidden border-2 border-gray-200">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.05),transparent_70%)]"></div>
                <div className="relative z-10 w-full h-full p-4 flex flex-col">
                  <div className="text-xs font-bold text-gray-700 mb-2">Net Worth Calculator</div>
                  <div className="text-lg font-bold text-gray-900 mb-4">$0.00</div>
                  <div className="space-y-2 text-xs">
                    <div className="bg-gray-100 rounded p-2">
                      <div className="text-gray-600">Total Assets</div>
                      <div className="font-bold text-gray-900">$0.00</div>
                    </div>
                    <div className="bg-gray-100 rounded p-2">
                      <div className="text-gray-600">Total Liabilities</div>
                      <div className="font-bold text-gray-900">$0.00</div>
                    </div>
                  </div>
                  <div className="absolute bottom-2 left-2 right-2 h-8 bg-blue-500/20 rounded"></div>
                </div>
              </div>
              <CardContent className="p-4">
                <h3 className="font-bold text-sm md:text-base text-gray-800 group-hover:text-orange-600 transition-colors flex items-center">
                  <span className="text-orange-600 mr-1">→</span> Net Worth Calculator
                </h3>
              </CardContent>
            </Card>
            </Link>
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
            <Link href="/auth/signup">
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