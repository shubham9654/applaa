'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Image from 'next/image'
import { 
  Sparkles, 
  Search,
  Gamepad2,
  Star,
  Users,
  Play,
  Heart,
  Trophy,
  Filter,
  TrendingUp,
  Clock,
  Eye,
  MessageCircle,
  User,
  Zap,
  Rocket,
  Crown,
  Sword,
  Puzzle,
  BookOpen,
  Palette,
  Music,
  Shield
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

// Helper function to generate random number under 1000
const randomUnder1000 = () => Math.floor(Math.random() * 1000)

export default function GamesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('popular')

  // Game categories
  const categories = [
    { id: 'all', name: 'All Games', icon: Gamepad2, color: 'orange' },
    { id: 'puzzle', name: 'Puzzle & Logic', icon: Puzzle, color: 'blue', emoji: '🎯' },
    { id: 'arcade', name: 'Arcade & Classic', icon: Gamepad2, color: 'green', emoji: '🎮' },
    { id: 'speed', name: 'Speed & Action', icon: Zap, color: 'red', emoji: '⚡' },
    { id: 'learning', name: 'Learning & Academy', icon: BookOpen, color: 'purple', emoji: '📚' },
    { id: 'adventure', name: 'Adventure & Creative', icon: Rocket, color: 'indigo', emoji: '🌍' },
    { id: 'fun', name: 'Fun & Party', icon: Music, color: 'yellow', emoji: '🧩' },
  ]

  // Real games data organized by categories - using useState to generate random values on mount
  const [games] = useState(() => {
    const allGames = [
      // Featured Games
      { id: 1, title: 'Memory Match', category: 'puzzle', featured: true, views: randomUnder1000(), loves: randomUnder1000(), emoji: '🧩' },
      { id: 2, title: 'Words Finding', category: 'puzzle', featured: true, views: randomUnder1000(), loves: randomUnder1000(), emoji: '🔤' },
      { id: 3, title: 'Abstract Speedster', category: 'speed', featured: true, views: randomUnder1000(), loves: randomUnder1000(), emoji: '🏎️' },
      // Puzzle & Logic Games
      { id: 4, title: 'Crossword Puzzle Game', category: 'puzzle', featured: false, views: randomUnder1000(), loves: randomUnder1000(), emoji: '📰' },
      { id: 5, title: 'Spot The Difference', category: 'puzzle', featured: false, views: randomUnder1000(), loves: randomUnder1000(), emoji: '🔍' },
      { id: 6, title: 'Connect Four', category: 'puzzle', featured: false, views: randomUnder1000(), loves: randomUnder1000(), emoji: '🔴' },
      { id: 7, title: 'Dots And Boxes', category: 'puzzle', featured: false, views: randomUnder1000(), loves: randomUnder1000(), emoji: '⚫' },
      { id: 8, title: 'Escape the Maze', category: 'puzzle', featured: false, views: randomUnder1000(), loves: randomUnder1000(), emoji: '🏛️' },
      { id: 9, title: 'Maze of Terror', category: 'puzzle', featured: false, views: randomUnder1000(), loves: randomUnder1000(), emoji: '🔷' },
      { id: 10, title: 'Tap Zero', category: 'puzzle', featured: false, views: randomUnder1000(), loves: randomUnder1000(), emoji: '0' },
      { id: 11, title: 'Emoji Match', category: 'puzzle', featured: false, views: randomUnder1000(), loves: randomUnder1000(), emoji: '😊' },
      // Arcade & Classic Games
      { id: 12, title: 'Typing Invaders', category: 'arcade', featured: false, views: randomUnder1000(), loves: randomUnder1000(), emoji: '👾' },
      { id: 13, title: 'Ping Pong', category: 'arcade', featured: false, views: randomUnder1000(), loves: randomUnder1000(), emoji: '🏓' },
      { id: 14, title: 'Whack A Mole', category: 'arcade', featured: false, views: randomUnder1000(), loves: randomUnder1000(), emoji: '🕳️' },
      { id: 15, title: 'Snake', category: 'arcade', featured: false, views: randomUnder1000(), loves: randomUnder1000(), emoji: '🐍' },
      { id: 16, title: 'Bubble Pop', category: 'arcade', featured: false, views: randomUnder1000(), loves: randomUnder1000(), emoji: '🫧' },
      { id: 17, title: 'Arcane Breaker', category: 'arcade', featured: false, views: randomUnder1000(), loves: randomUnder1000(), emoji: '⚡' },
      { id: 18, title: 'Solitaire Collection', category: 'arcade', featured: false, views: randomUnder1000(), loves: randomUnder1000(), emoji: '🃏' },
      { id: 19, title: 'Mono-Fleet', category: 'arcade', featured: false, views: randomUnder1000(), loves: randomUnder1000(), emoji: '🔷' },
      // Speed & Action Games
      { id: 20, title: 'Infinite Runner', category: 'speed', featured: false, views: randomUnder1000(), loves: randomUnder1000(), emoji: '🏃' },
      { id: 21, title: 'Skateboard Extreme', category: 'speed', featured: false, views: randomUnder1000(), loves: randomUnder1000(), emoji: '🛹' },
      { id: 22, title: 'Cyber Runner', category: 'speed', featured: false, views: randomUnder1000(), loves: randomUnder1000(), emoji: '🤖' },
      { id: 23, title: 'Jumpy Dot', category: 'speed', featured: false, views: randomUnder1000(), loves: randomUnder1000(), emoji: '🔴' },
      { id: 24, title: 'Collect & Run Challenge', category: 'speed', featured: false, views: randomUnder1000(), loves: randomUnder1000(), emoji: '🏃' },
      { id: 25, title: 'Stick Sword Duel', category: 'speed', featured: false, views: randomUnder1000(), loves: randomUnder1000(), emoji: '⚔️' },
      // Learning & Academy
      { id: 26, title: 'Year 9 Maths Tracker', category: 'learning', featured: false, views: randomUnder1000(), loves: randomUnder1000(), emoji: '📚' },
      { id: 27, title: 'Countdown Quiz', category: 'learning', featured: false, views: randomUnder1000(), loves: randomUnder1000(), emoji: '5' },
      { id: 28, title: 'Element Family Builder', category: 'learning', featured: false, views: randomUnder1000(), loves: randomUnder1000(), emoji: '⚛️' },
      { id: 29, title: 'Your Todos List', category: 'learning', featured: false, views: randomUnder1000(), loves: randomUnder1000(), emoji: '📝' },
      { id: 30, title: 'Net Worth Calculator', category: 'learning', featured: false, views: randomUnder1000(), loves: randomUnder1000(), emoji: '💰' },
      // Adventure & Creative
      { id: 31, title: 'Adventure Map', category: 'adventure', featured: false, views: randomUnder1000(), loves: randomUnder1000(), emoji: '🗺️' },
      { id: 32, title: 'Moon Colony Tycoon', category: 'adventure', featured: false, views: randomUnder1000(), loves: randomUnder1000(), emoji: '🌙' },
      { id: 33, title: 'Desert Caravan Trader', category: 'adventure', featured: false, views: randomUnder1000(), loves: randomUnder1000(), emoji: '🐪' },
      // Fun & Party Games
      { id: 34, title: 'Rock Paper Scissor', category: 'fun', featured: false, views: randomUnder1000(), loves: randomUnder1000(), emoji: '✂️' },
      { id: 35, title: 'Tic-Tac-Toe', category: 'fun', featured: false, views: randomUnder1000(), loves: randomUnder1000(), emoji: '❌' },
      { id: 36, title: 'Truth or Dare Spinner', category: 'fun', featured: false, views: randomUnder1000(), loves: randomUnder1000(), emoji: '🎯' },
    ]
    return allGames
  })

  // Top creators
  const topCreators = [
    { id: 1, username: 'CoolKid123', avatar: '🦄', games: 12, followers: 234, totalPlays: 45678 },
    { id: 2, username: 'TechMaster', avatar: '🤖', games: 8, followers: 189, totalPlays: 34567 },
    { id: 3, username: 'PuzzleQueen', avatar: '👑', games: 15, followers: 156, totalPlays: 28934 },
    { id: 4, username: 'ArtistGurl', avatar: '🎨', games: 6, followers: 145, totalPlays: 19876 }
  ]

  // Filter and sort games
  const filteredGames = games
    .filter(game => {
      const matchesSearch = game.title.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesCategory = selectedCategory === 'all' || game.category === selectedCategory
      return matchesSearch && matchesCategory
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'popular':
          return b.views - a.views
        case 'newest':
          return b.id - a.id
        case 'likes':
          return b.loves - a.loves
        default:
          return 0
      }
    })

  // Get category icon
  const getCategoryIcon = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId)
    return category ? category.icon : Gamepad2
  }

  // Get category color
  const getCategoryColor = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId)
    return category ? category.color : 'orange'
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-orange-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/applaa.png" alt="Applaa Logo" width={32} height={32} />
              <span className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">
                Applaa
              </span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link href="/about" className="text-gray-600 hover:text-orange-600 transition-colors hidden md:block">
                About Us
              </Link>
              <Link href="/academy">
                <Button variant="outline" className="border-orange-200 text-orange-600 hover:bg-orange-50">
                  AI Academy
                </Button>
              </Link>
              <Link href="/profile">
                <Button variant="outline" className="border-orange-200 text-orange-600 hover:bg-orange-50">
                  My Profile
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">
              Game Hub
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Play amazing games created by kids like you! Adventure, puzzle, educational, and creative games await!
          </p>
        </div>

        {/* Featured Games */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center">
            <Crown className="w-6 h-6 mr-2 text-orange-600" />
            Featured Games
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {games.filter(game => game.featured).map((game) => (
              <Card key={game.id} className="border-orange-100 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{game.emoji}</div>
                    <Badge className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                      <Crown className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                  </div>
                  
                  <h3 className="font-bold text-lg mb-4">{game.title}</h3>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Eye className="w-4 h-4 mr-1" />
                        {game.views}
                      </div>
                      <div className="flex items-center">
                        <Heart className="w-4 h-4 mr-1 text-red-400" />
                        {game.loves}
                      </div>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Link href={getGameUrl(game.title)} target="_blank" rel="noopener noreferrer" className="flex-1">
                      <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600">
                        <Play className="w-4 h-4 mr-2" />
                        Play Now
                      </Button>
                    </Link>
                    <Link href="/auth/login">
                      <Button variant="outline" size="sm">
                        <Heart className="w-4 h-4" />
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          <div className="relative max-w-xs">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search games..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 border-orange-200 focus:border-orange-400 w-full"
            />
          </div>
          
          <div className="flex gap-2 overflow-x-auto flex-1">
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`whitespace-nowrap ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white'
                      : 'border-orange-200 text-orange-600 hover:bg-orange-50'
                  }`}
                >
                  {category.emoji && <span className="mr-2">{category.emoji}</span>}
                  <Icon className="w-4 h-4 mr-2" />
                  {category.name}
                </Button>
              )
            })}
          </div>

          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="px-4 py-2 border border-orange-200 rounded-lg focus:outline-none focus:border-orange-400 bg-white"
          >
            <option value="popular">Most Popular</option>
            <option value="rating">Highest Rated</option>
            <option value="newest">Newest Games</option>
            <option value="likes">Most Liked</option>
          </select>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-4 gap-8">
          {/* Games List */}
          <div className="lg:col-span-3">
            <div className="grid md:grid-cols-2 gap-6">
              {filteredGames.map((game) => {
                const CategoryIcon = getCategoryIcon(game.category)
                const categoryColor = getCategoryColor(game.category)
                
                return (
                  <Card key={game.id} className="border-orange-100 hover:shadow-lg transition-all duration-300">
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="text-3xl mb-2">{game.emoji}</div>
                        <div className="flex items-center space-x-2">
                          {game.featured && (
                            <Badge className="bg-orange-500 text-white">
                              <Crown className="w-3 h-3 mr-1" />
                              Featured
                            </Badge>
                          )}
                          <Link href="/auth/login">
                            <Button variant="ghost" size="sm">
                              <Heart className="w-4 h-4" />
                            </Button>
                          </Link>
                        </div>
                      </div>
                      
                      <CardTitle className="text-lg">{game.title}</CardTitle>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      {/* Game Meta */}
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className="border-orange-200 text-orange-600">
                          <CategoryIcon className="w-3 h-3 mr-1" />
                          {categories.find(cat => cat.id === game.category)?.name}
                        </Badge>
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-2 gap-4 text-sm">
                        <div className="flex items-center">
                          <Eye className="w-4 h-4 mr-1 text-gray-400" />
                          {game.views} views
                        </div>
                        <div className="flex items-center">
                          <Heart className="w-4 h-4 mr-1 text-red-400" />
                          {game.loves} loves
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex space-x-2">
                        <Link href={getGameUrl(game.title)} target="_blank" rel="noopener noreferrer" className="flex-1">
                          <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600">
                            <Play className="w-4 h-4 mr-2" />
                            Play
                          </Button>
                        </Link>
                        <Link href="/auth/login">
                          <Button variant="outline" size="sm">
                            <MessageCircle className="w-4 h-4" />
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            {/* Empty State */}
            {filteredGames.length === 0 && (
              <div className="text-center py-12">
                <div className="text-6xl mb-4">🎮</div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">No games found</h3>
                <p className="text-gray-600">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Top Creators */}
            <Card className="border-orange-100">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Trophy className="w-5 h-5 mr-2 text-orange-600" />
                  Top Creators
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {topCreators.map((creator) => (
                  <div key={creator.id} className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full flex items-center justify-center text-lg">
                      {creator.avatar}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm">{creator.username}</p>
                      <p className="text-xs text-gray-600">{creator.games} games • {creator.followers} followers</p>
                    </div>
                    <Link href="/auth/login">
                      <Button variant="outline" size="sm">
                        Follow
                      </Button>
                    </Link>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Safety Notice */}
            <Card className="border-orange-100">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3 mb-3">
                  <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center">
                    <Shield className="w-4 h-4 text-orange-600" />
                  </div>
                  <h3 className="font-bold text-orange-800">Safe Gaming</h3>
                </div>
                <p className="text-sm text-orange-700 mb-3">
                  All games are reviewed for safety and age-appropriateness. Report any concerns to our moderation team.
                </p>
                <Button variant="outline" size="sm" className="w-full border-orange-200 text-orange-600">
                  Learn About Safety
                </Button>
              </CardContent>
            </Card>

            {/* Create Game CTA */}
            <Card className="border-orange-100">
              <CardContent className="p-6 text-center">
                <div className="text-3xl mb-3">🎨</div>
                <h3 className="font-bold mb-2">Create Your Own Game!</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Share your creativity with the Applaa community
                </p>
                <Button className="w-full bg-gradient-to-r from-orange-500 to-orange-600">
                  <Gamepad2 className="w-4 h-4 mr-2" />
                  Start Creating
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}