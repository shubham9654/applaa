'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
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

export default function GamesPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [sortBy, setSortBy] = useState('popular')

  // Game categories
  const categories = [
    { id: 'all', name: 'All Games', icon: Gamepad2, color: 'orange' },
    { id: 'adventure', name: 'Adventure', icon: Rocket, color: 'blue' },
    { id: 'action', name: 'Action', icon: Sword, color: 'red' },
    { id: 'puzzle', name: 'Puzzle', icon: Puzzle, color: 'purple' },
    { id: 'educational', name: 'Educational', icon: BookOpen, color: 'green' },
    { id: 'creative', name: 'Creative', icon: Palette, color: 'pink' },
    { id: 'sports', name: 'Sports', icon: Shield, color: 'yellow' }
  ]

  // Mock games data
  const games = [
    {
      id: 1,
      title: 'Space Adventure',
      description: 'Explore the galaxy and discover new planets in this exciting space adventure!',
      category: 'adventure',
      creator: 'CoolKid123',
      creatorAvatar: '🦄',
      plays: 15234,
      likes: 892,
      rating: 4.8,
      ageRating: '6+',
      difficulty: 'Easy',
      tags: ['Space', 'Exploration', 'Adventure'],
      thumbnail: '🚀',
      featured: true,
      newGame: false,
      lastUpdated: '2 days ago'
    },
    {
      id: 2,
      title: 'AI Robot Battle',
      description: 'Command your AI robot team in epic tactical battles!',
      category: 'action',
      creator: 'TechMaster',
      creatorAvatar: '🤖',
      plays: 12456,
      likes: 734,
      rating: 4.6,
      ageRating: '10+',
      difficulty: 'Medium',
      tags: ['Robots', 'Battle', 'Strategy'],
      thumbnail: '⚔️',
      featured: true,
      newGame: false,
      lastUpdated: '1 week ago'
    },
    {
      id: 3,
      title: 'Magic Puzzle Quest',
      description: 'Solve enchanted puzzles and collect magical gems!',
      category: 'puzzle',
      creator: 'PuzzleQueen',
      creatorAvatar: '👑',
      plays: 8934,
      likes: 567,
      rating: 4.9,
      ageRating: '8+',
      difficulty: 'Medium',
      tags: ['Puzzle', 'Magic', 'Fantasy'],
      thumbnail: '🧩',
      featured: false,
      newGame: true,
      lastUpdated: 'Just now'
    },
    {
      id: 4,
      title: 'Math Wizard Academy',
      description: 'Learn math while casting spells and defeating monsters!',
      category: 'educational',
      creator: 'EduGamer',
      creatorAvatar: '🎓',
      plays: 6789,
      likes: 445,
      rating: 4.7,
      ageRating: '6+',
      difficulty: 'Easy',
      tags: ['Math', 'Learning', 'Magic'],
      thumbnail: '🧙‍♂️',
      featured: false,
      newGame: false,
      lastUpdated: '3 days ago'
    },
    {
      id: 5,
      title: 'Art Studio Creator',
      description: 'Create amazing digital art and share with friends!',
      category: 'creative',
      creator: 'ArtistGurl',
      creatorAvatar: '🎨',
      plays: 5432,
      likes: 678,
      rating: 4.8,
      ageRating: 'All',
      difficulty: 'Easy',
      tags: ['Art', 'Creative', 'Drawing'],
      thumbnail: '🎨',
      featured: false,
      newGame: true,
      lastUpdated: '1 day ago'
    },
    {
      id: 6,
      title: 'Soccer Champions',
      description: 'Lead your team to victory in this exciting soccer game!',
      category: 'sports',
      creator: 'SportsFan',
      creatorAvatar: '⚽',
      plays: 9876,
      likes: 534,
      rating: 4.5,
      ageRating: '8+',
      difficulty: 'Medium',
      tags: ['Soccer', 'Sports', 'Team'],
      thumbnail: '⚽',
      featured: true,
      newGame: false,
      lastUpdated: '4 days ago'
    }
  ]

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
      const matchesSearch = game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           game.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           game.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      const matchesCategory = selectedCategory === 'all' || game.category === selectedCategory
      return matchesSearch && matchesCategory
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'popular':
          return b.plays - a.plays
        case 'rating':
          return b.rating - a.rating
        case 'newest':
          return b.id - a.id
        case 'likes':
          return b.likes - a.likes
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
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-orange-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-pink-500 rounded-lg flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                Applaa
              </span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link href="/academy">
                <Button variant="outline" className="border-orange-200 text-orange-600 hover:bg-orange-50">
                  AI Academy
                </Button>
              </Link>
              <Link href="/profile">
                <Button variant="outline" className="border-purple-200 text-purple-600 hover:bg-purple-50">
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
            <span className="bg-gradient-to-r from-orange-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
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
              <Card key={game.id} className="border-gradient-to-r from-orange-100 to-pink-100 hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-4xl">{game.thumbnail}</div>
                    <Badge className="bg-gradient-to-r from-orange-500 to-pink-500 text-white">
                      <Crown className="w-3 h-3 mr-1" />
                      Featured
                    </Badge>
                  </div>
                  
                  <h3 className="font-bold text-lg mb-2">{game.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{game.description}</p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-2">
                      <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-xs">
                        {game.creatorAvatar}
                      </div>
                      <span className="text-sm text-gray-600">{game.creator}</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 text-yellow-500 mr-1" />
                      <span className="text-sm font-medium">{game.rating}</span>
                    </div>
                  </div>

                  <div className="flex space-x-2">
                    <Button className="flex-1 bg-gradient-to-r from-orange-500 to-pink-500">
                      <Play className="w-4 h-4 mr-2" />
                      Play Now
                    </Button>
                    <Button variant="outline" size="sm">
                      <Heart className="w-4 h-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col lg:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search games..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 border-orange-200 focus:border-orange-400"
            />
          </div>
          
          <div className="flex gap-2 overflow-x-auto">
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <Button
                  key={category.id}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`whitespace-nowrap ${
                    selectedCategory === category.id
                      ? 'bg-gradient-to-r from-orange-500 to-pink-500'
                      : 'border-orange-200 text-orange-600 hover:bg-orange-50'
                  }`}
                >
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
                  <Card key={game.id} className={`border-${categoryColor}-100 hover:shadow-lg transition-all duration-300`}>
                    <CardHeader className="pb-3">
                      <div className="flex items-start justify-between">
                        <div className="text-3xl mb-2">{game.thumbnail}</div>
                        <div className="flex items-center space-x-2">
                          {game.newGame && (
                            <Badge className="bg-green-500 text-white">NEW</Badge>
                          )}
                          <Button variant="ghost" size="sm">
                            <Heart className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                      
                      <CardTitle className="text-lg">{game.title}</CardTitle>
                      <CardDescription className="text-sm">
                        {game.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-4">
                      {/* Game Meta */}
                      <div className="flex flex-wrap gap-2">
                        <Badge variant="outline" className={`border-${categoryColor}-200 text-${categoryColor}-600`}>
                          <CategoryIcon className="w-3 h-3 mr-1" />
                          {categories.find(cat => cat.id === game.category)?.name}
                        </Badge>
                        <Badge variant="outline" className="border-gray-200 text-gray-600">
                          {game.ageRating}
                        </Badge>
                        <Badge variant="outline" className="border-blue-200 text-blue-600">
                          {game.difficulty}
                        </Badge>
                      </div>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1">
                        {game.tags.map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>

                      {/* Creator Info */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2">
                          <div className="w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-xs">
                            {game.creatorAvatar}
                          </div>
                          <span className="text-sm text-gray-600">{game.creator}</span>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Users className="w-4 h-4 mr-1" />
                          Follow
                        </Button>
                      </div>

                      {/* Stats */}
                      <div className="grid grid-cols-3 gap-4 text-sm">
                        <div className="flex items-center">
                          <Play className="w-4 h-4 mr-1 text-gray-400" />
                          {game.plays.toLocaleString()}
                        </div>
                        <div className="flex items-center">
                          <Heart className="w-4 h-4 mr-1 text-red-400" />
                          {game.likes}
                        </div>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 mr-1 text-yellow-500" />
                          {game.rating}
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex space-x-2">
                        <Button className="flex-1 bg-gradient-to-r from-orange-500 to-pink-500">
                          <Play className="w-4 h-4 mr-2" />
                          Play
                        </Button>
                        <Button variant="outline" size="sm">
                          <MessageCircle className="w-4 h-4" />
                        </Button>
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
            <Card className="border-purple-100">
              <CardHeader>
                <CardTitle className="text-lg flex items-center">
                  <Trophy className="w-5 h-5 mr-2 text-purple-600" />
                  Top Creators
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {topCreators.map((creator) => (
                  <div key={creator.id} className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-lg">
                      {creator.avatar}
                    </div>
                    <div className="flex-1">
                      <p className="font-medium text-sm">{creator.username}</p>
                      <p className="text-xs text-gray-600">{creator.games} games • {creator.followers} followers</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Follow
                    </Button>
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
            <Card className="border-gradient-to-r from-pink-100 to-purple-100">
              <CardContent className="p-6 text-center">
                <div className="text-3xl mb-3">🎨</div>
                <h3 className="font-bold mb-2">Create Your Own Game!</h3>
                <p className="text-sm text-gray-600 mb-4">
                  Share your creativity with the Applaa community
                </p>
                <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-500">
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