'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { 
  Sparkles, 
  Settings, 
  Trophy, 
  Gamepad2, 
  Users, 
  Star,
  Heart,
  Zap,
  Shield,
  Clock,
  TrendingUp,
  Award,
  Target,
  Flame,
  Gem,
  Crown,
  MessageCircle,
  MoreVertical,
  Edit,
  LogOut,
  User
} from 'lucide-react'

export default function ProfilePage() {
  const [activeTab, setActiveTab] = useState('overview')

  // Mock user data
  const user = {
    username: 'CoolKid123',
    avatar: '🦄',
    age: 12,
    level: 15,
    xp: 2450,
    nextLevelXp: 3000,
    joinDate: 'March 2024',
    interests: ['AI & Robots', 'Gaming', 'Art & Design'],
    bio: 'Love creating games and learning about AI! Want to build the coolest robot ever!',
    status: 'online'
  }

  // Mock achievements
  const achievements = [
    { id: 1, name: 'AI Explorer', description: 'Complete your first AI course', icon: '🤖', earned: true, date: '2024-03-15' },
    { id: 2, name: 'Game Creator', description: 'Create and publish your first game', icon: '🎮', earned: true, date: '2024-03-20' },
    { id: 3, name: 'Social Butterfly', description: 'Make 10 friends', icon: '🦋', earned: true, date: '2024-03-25' },
    { id: 4, name: 'AI Master', description: 'Complete 5 AI courses', icon: '🧠', earned: false, progress: 3, total: 5 },
    { id: 5, name: 'Game Champion', description: 'Win 10 game challenges', icon: '🏆', earned: false, progress: 7, total: 10 },
    { id: 6, name: 'Creative Genius', description: 'Create 5 unique projects', icon: '🎨', earned: false, progress: 2, total: 5 }
  ]

  // Mock games
  const createdGames = [
    { id: 1, title: 'Space Adventure', category: 'Adventure', plays: 245, rating: 4.5, thumbnail: '🚀' },
    { id: 2, title: 'AI Robot Helper', category: 'Educational', plays: 189, rating: 4.8, thumbnail: '🤖' },
    { id: 3, title: 'Magic Puzzle', category: 'Puzzle', plays: 156, rating: 4.2, thumbnail: '🧩' }
  ]

  // Mock friends
  const friends = [
    { id: 1, username: 'TechKid456', avatar: '🚀', level: 18, status: 'online', lastSeen: 'Now' },
    { id: 2, username: 'ArtistGurl', avatar: '🎨', level: 12, status: 'online', lastSeen: 'Now' },
    { id: 3, username: 'GameMaster', avatar: '🎮', level: 22, status: 'offline', lastSeen: '2 hours ago' },
    { id: 4, username: 'ScienceWhiz', avatar: '🔬', level: 16, status: 'online', lastSeen: 'Now' },
    { id: 5, username: 'SportsFan', avatar: '⚽', level: 14, status: 'offline', lastSeen: '1 day ago' }
  ]

  // Mock recent activity
  const recentActivity = [
    { id: 1, type: 'achievement', title: 'Earned "Game Creator" badge', time: '2 hours ago', icon: '🏆' },
    { id: 2, type: 'game', title: 'Published "Space Adventure"', time: '1 day ago', icon: '🎮' },
    { id: 3, type: 'course', title: 'Completed "AI Basics" course', time: '2 days ago', icon: '📚' },
    { id: 4, type: 'friend', title: 'Became friends with TechKid456', time: '3 days ago', icon: '👥' }
  ]

  const xpProgress = (user.xp / user.nextLevelXp) * 100

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
                applaa
              </span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link href="/academy">
                <Button variant="outline" className="border-orange-200 text-orange-600 hover:bg-orange-50">
                  AI Academy
                </Button>
              </Link>
              <Link href="/games">
                <Button variant="outline" className="border-pink-200 text-pink-600 hover:bg-pink-50">
                  Game Hub
                </Button>
              </Link>
              <Button variant="outline" size="sm">
                <Settings className="w-4 h-4 mr-2" />
                Settings
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Profile Header */}
        <Card className="mb-8 border-orange-100">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
              {/* Avatar */}
              <div className="relative">
                <div className="w-24 h-24 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full flex items-center justify-center text-4xl shadow-lg">
                  {user.avatar}
                </div>
                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white"></div>
              </div>

              {/* User Info */}
              <div className="flex-1 text-center md:text-left">
                <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
                  <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
                    {user.username}
                  </h1>
                  <Badge className="mt-2 md:mt-0 bg-gradient-to-r from-orange-500 to-pink-500 text-white">
                    Level {user.level}
                  </Badge>
                </div>
                
                <p className="text-gray-600 mt-2">{user.bio}</p>
                
                <div className="flex flex-wrap gap-2 mt-3 justify-center md:justify-start">
                  {user.interests.map((interest) => (
                    <Badge key={interest} variant="outline" className="border-orange-200 text-orange-600">
                      {interest}
                    </Badge>
                  ))}
                </div>

                {/* XP Progress */}
                <div className="mt-4">
                  <div className="flex justify-between text-sm text-gray-600 mb-1">
                    <span>Level Progress</span>
                    <span>{user.xp} / {user.nextLevelXp} XP</span>
                  </div>
                  <Progress value={xpProgress} className="h-2 bg-orange-100" />
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-col space-y-2">
                <Button variant="outline" size="sm">
                  <Edit className="w-4 h-4 mr-2" />
                  Edit Profile
                </Button>
                <Button variant="outline" size="sm">
                  <LogOut className="w-4 h-4 mr-2" />
                  Logout
                </Button>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
              <div className="text-center p-3 bg-orange-50 rounded-lg">
                <div className="text-2xl font-bold text-orange-600">{user.level}</div>
                <div className="text-sm text-gray-600">Level</div>
              </div>
              <div className="text-center p-3 bg-pink-50 rounded-lg">
                <div className="text-2xl font-bold text-pink-600">{friends.length}</div>
                <div className="text-sm text-gray-600">Friends</div>
              </div>
              <div className="text-center p-3 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">{createdGames.length}</div>
                <div className="text-sm text-gray-600">Games</div>
              </div>
              <div className="text-center p-3 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">{achievements.filter(a => a.earned).length}</div>
                <div className="text-sm text-gray-600">Badges</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Tabs */}
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-4 bg-white border border-orange-100">
            <TabsTrigger value="overview" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">
              Overview
            </TabsTrigger>
            <TabsTrigger value="achievements" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">
              <Trophy className="w-4 h-4 mr-2" />
              Achievements
            </TabsTrigger>
            <TabsTrigger value="games" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">
              <Gamepad2 className="w-4 h-4 mr-2" />
              My Games
            </TabsTrigger>
            <TabsTrigger value="friends" className="data-[state=active]:bg-orange-500 data-[state=active]:text-white">
              <Users className="w-4 h-4 mr-2" />
              Friends
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Recent Activity */}
              <Card className="border-orange-100">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-orange-600" />
                    Recent Activity
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivity.map((activity) => (
                      <div key={activity.id} className="flex items-center space-x-3">
                        <div className="text-2xl">{activity.icon}</div>
                        <div className="flex-1">
                          <p className="text-sm font-medium">{activity.title}</p>
                          <p className="text-xs text-gray-500">{activity.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Quick Stats */}
              <Card className="border-pink-100">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="w-5 h-5 mr-2 text-pink-600" />
                    This Month
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">XP Earned</span>
                      <span className="font-bold text-pink-600">+450</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Games Played</span>
                      <span className="font-bold text-pink-600">23</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">Courses Completed</span>
                      <span className="font-bold text-pink-600">2</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">New Friends</span>
                      <span className="font-bold text-pink-600">5</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Featured Achievement */}
            <Card className="border-gradient-to-r from-orange-100 to-pink-100">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Crown className="w-5 h-5 mr-2 text-orange-600" />
                  Featured Achievement
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-4">
                  <div className="text-4xl">🏆</div>
                  <div className="flex-1">
                    <h3 className="font-bold text-lg">Game Creator</h3>
                    <p className="text-gray-600">Create and publish your first game</p>
                    <p className="text-sm text-orange-600 mt-1">Earned on March 20, 2024</p>
                  </div>
                  <Button variant="outline" size="sm">
                    View All
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Achievements Tab */}
          <TabsContent value="achievements" className="space-y-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {achievements.map((achievement) => (
                <Card key={achievement.id} className={`border-2 ${achievement.earned ? 'border-orange-200 bg-orange-50' : 'border-gray-200'}`}>
                  <CardContent className="p-6 text-center">
                    <div className={`text-4xl mb-3 ${achievement.earned ? '' : 'grayscale opacity-50'}`}>
                      {achievement.icon}
                    </div>
                    <h3 className="font-bold mb-2">{achievement.name}</h3>
                    <p className="text-sm text-gray-600 mb-3">{achievement.description}</p>
                    
                    {achievement.earned ? (
                      <Badge className="bg-orange-500 text-white">
                        <Award className="w-3 h-3 mr-1" />
                        Earned
                      </Badge>
                    ) : (
                      <div className="space-y-2">
                        <div className="flex justify-between text-xs text-gray-600">
                          <span>Progress</span>
                          <span>{achievement.progress ?? 0}/{achievement.total ?? 0}</span>
                        </div>
                        {
                          (() => {
                            const total = achievement.total ?? 0
                            const progress = achievement.progress ?? 0
                            const percent = total > 0 ? (progress / total) * 100 : 0
                            return <Progress value={percent} className="h-2" />
                          })()
                        }
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Games Tab */}
          <TabsContent value="games" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">My Created Games</h2>
              <Button className="bg-gradient-to-r from-orange-500 to-pink-500">
                <Gamepad2 className="w-4 h-4 mr-2" />
                Create New Game
              </Button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {createdGames.map((game) => (
                <Card key={game.id} className="border-pink-100 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-4 text-center">{game.thumbnail}</div>
                    <h3 className="font-bold text-lg mb-2">{game.title}</h3>
                    <Badge variant="outline" className="mb-3 border-pink-200 text-pink-600">
                      {game.category}
                    </Badge>
                    
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Plays</span>
                        <span className="font-medium">{game.plays}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Rating</span>
                        <div className="flex items-center">
                          <Star className="w-4 h-4 text-yellow-500 mr-1" />
                          <span className="font-medium">{game.rating}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex space-x-2 mt-4">
                      <Button size="sm" variant="outline" className="flex-1">
                        <Gamepad2 className="w-4 h-4 mr-1" />
                        Play
                      </Button>
                      <Button size="sm" variant="outline">
                        <Edit className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Friends Tab */}
          <TabsContent value="friends" className="space-y-6">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">My Friends ({friends.length})</h2>
              <Button variant="outline" className="border-purple-200 text-purple-600">
                <Users className="w-4 h-4 mr-2" />
                Find Friends
              </Button>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {friends.map((friend) => (
                <Card key={friend.id} className="border-purple-100">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="relative">
                        <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center text-xl">
                          {friend.avatar}
                        </div>
                        <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-white ${
                          friend.status === 'online' ? 'bg-green-500' : 'bg-gray-400'
                        }`}></div>
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold">{friend.username}</h3>
                        <p className="text-sm text-gray-600">Level {friend.level}</p>
                      </div>
                    </div>

                    <div className="text-xs text-gray-500 mb-4">
                      {friend.status === 'online' ? 'Online now' : `Last seen ${friend.lastSeen}`}
                    </div>

                    <div className="flex space-x-2">
                      <Button size="sm" variant="outline" className="flex-1">
                        <MessageCircle className="w-4 h-4 mr-1" />
                        Chat
                      </Button>
                      <Button size="sm" variant="outline">
                        <Gamepad2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}