'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Progress } from '@/components/ui/progress'
import { Input } from '@/components/ui/input'
import { 
  Sparkles, 
  Search,
  BookOpen,
  GraduationCap,
  Clock,
  Star,
  Users,
  Play,
  Lock,
  CheckCircle,
  Trophy,
  Target,
  Zap,
  Brain,
  Palette,
  Bot,
  Music,
  Globe,
  Code,
  Rocket,
  Filter
} from 'lucide-react'

export default function AcademyPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('all')

  // Course categories
  const categories = [
    { id: 'all', name: 'All Courses', icon: BookOpen, color: 'orange' },
    { id: 'ai-basics', name: 'AI Basics', icon: Brain, color: 'pink' },
    { id: 'game-dev', name: 'Game Development', icon: Code, color: 'purple' },
    { id: 'advanced-ai', name: 'Advanced AI', icon: Bot, color: 'blue' },
    { id: 'creative', name: 'Creative', icon: Palette, color: 'green' },
    { id: 'robotics', name: 'Robotics', icon: Zap, color: 'red' }
  ]

  // Mock courses data
  const courses = [
    {
      id: 1,
      title: 'Introduction to AI',
      description: 'Learn the basics of artificial intelligence and how machines think!',
      category: 'ai-basics',
      level: 'Beginner',
      duration: '2 hours',
      enrolled: 1234,
      rating: 4.8,
      lessons: 8,
      completedLessons: 3,
      thumbnail: '🤖',
      instructor: 'Dr. AI Expert',
      ageRange: '6-10',
      progress: 37,
      status: 'enrolled'
    },
    {
      id: 2,
      title: 'Create Your First Game',
      description: 'Build your own computer game using simple programming concepts!',
      category: 'game-dev',
      level: 'Beginner',
      duration: '3 hours',
      enrolled: 892,
      rating: 4.9,
      lessons: 12,
      completedLessons: 12,
      thumbnail: '🎮',
      instructor: 'GameMaster Pro',
      ageRange: '8-12',
      progress: 100,
      status: 'completed'
    },
    {
      id: 3,
      title: 'AI Art & Creativity',
      description: 'Use AI to create amazing art, music, and creative projects!',
      category: 'creative',
      level: 'Intermediate',
      duration: '4 hours',
      enrolled: 567,
      rating: 4.7,
      lessons: 10,
      completedLessons: 0,
      thumbnail: '🎨',
      instructor: 'Creative AI',
      ageRange: '10-14',
      progress: 0,
      status: 'available'
    },
    {
      id: 4,
      title: 'Machine Learning for Kids',
      description: 'Teach computers to learn from data and make smart decisions!',
      category: 'advanced-ai',
      level: 'Advanced',
      duration: '5 hours',
      enrolled: 234,
      rating: 4.6,
      lessons: 15,
      completedLessons: 0,
      thumbnail: '🧠',
      instructor: 'ML Teacher',
      ageRange: '12-18',
      progress: 0,
      status: 'locked'
    },
    {
      id: 5,
      title: 'Robot Programming',
      description: 'Learn to program robots and make them do amazing things!',
      category: 'robotics',
      level: 'Intermediate',
      duration: '6 hours',
      enrolled: 445,
      rating: 4.8,
      lessons: 14,
      completedLessons: 7,
      thumbnail: '🦾',
      instructor: 'Robot Expert',
      ageRange: '10-16',
      progress: 50,
      status: 'enrolled'
    },
    {
      id: 6,
      title: 'AI Music Composer',
      description: 'Create your own music using artificial intelligence!',
      category: 'creative',
      level: 'Intermediate',
      duration: '3 hours',
      enrolled: 678,
      rating: 4.9,
      lessons: 8,
      completedLessons: 0,
      thumbnail: '🎵',
      instructor: 'Music AI',
      ageRange: '8-14',
      progress: 0,
      status: 'available'
    }
  ]

  // Filter courses based on search and category
  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  // Get category icon
  const getCategoryIcon = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId)
    return category ? category.icon : BookOpen
  }

  // Get category color
  const getCategoryColor = (categoryId: string) => {
    const category = categories.find(cat => cat.id === categoryId)
    return category ? category.color : 'orange'
  }

  // Overall learning stats
  const learningStats = {
    totalCourses: courses.length,
    enrolledCourses: courses.filter(c => c.status === 'enrolled').length,
    completedCourses: courses.filter(c => c.status === 'completed').length,
    totalLessons: courses.reduce((sum, course) => sum + course.lessons, 0),
    completedLessons: courses.reduce((sum, course) => sum + course.completedLessons, 0),
    averageProgress: Math.round(courses.reduce((sum, course) => sum + course.progress, 0) / courses.length)
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
                applaa
              </span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link href="/games">
                <Button variant="outline" className="border-pink-200 text-pink-600 hover:bg-pink-50">
                  Game Hub
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
              AI Academy
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Learn artificial intelligence through fun, interactive courses designed for young minds like yours!
          </p>
        </div>

        {/* Learning Stats */}
        <Card className="mb-8 border-gradient-to-r from-orange-100 to-pink-100">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-6 flex items-center">
              <GraduationCap className="w-6 h-6 mr-2 text-orange-600" />
              Your Learning Journey
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="text-center p-4 bg-orange-50 rounded-lg">
                <div className="text-2xl font-bold text-orange-600">{learningStats.totalCourses}</div>
                <div className="text-sm text-gray-600">Total Courses</div>
              </div>
              <div className="text-center p-4 bg-pink-50 rounded-lg">
                <div className="text-2xl font-bold text-pink-600">{learningStats.enrolledCourses}</div>
                <div className="text-sm text-gray-600">Enrolled</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-lg">
                <div className="text-2xl font-bold text-purple-600">{learningStats.completedCourses}</div>
                <div className="text-sm text-gray-600">Completed</div>
              </div>
              <div className="text-center p-4 bg-blue-50 rounded-lg">
                <div className="text-2xl font-bold text-blue-600">{learningStats.completedLessons}</div>
                <div className="text-sm text-gray-600">Lessons Done</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-lg">
                <div className="text-2xl font-bold text-green-600">{learningStats.averageProgress}%</div>
                <div className="text-sm text-gray-600">Avg Progress</div>
              </div>
            </div>

            {/* Overall Progress */}
            <div className="mt-6">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Overall Learning Progress</span>
                <span>{learningStats.averageProgress}%</span>
              </div>
              <Progress value={learningStats.averageProgress} className="h-3 bg-orange-100" />
            </div>
          </CardContent>
        </Card>

        {/* Search and Filter */}
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search courses..."
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
        </div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course) => {
            const CategoryIcon = getCategoryIcon(course.category)
            const categoryColor = getCategoryColor(course.category)
            
            return (
              <Card key={course.id} className={`border-${categoryColor}-100 hover:shadow-lg transition-all duration-300`}>
                <CardHeader className="pb-3">
                  <div className="flex items-start justify-between">
                    <div className="text-3xl mb-2">{course.thumbnail}</div>
                    <div className="flex items-center space-x-2">
                      {course.status === 'completed' && (
                        <CheckCircle className="w-5 h-5 text-green-500" />
                      )}
                      {course.status === 'locked' && (
                        <Lock className="w-5 h-5 text-gray-400" />
                      )}
                    </div>
                  </div>
                  
                  <CardTitle className="text-lg">{course.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {course.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4">
                  {/* Course Meta */}
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="outline" className={`border-${categoryColor}-200 text-${categoryColor}-600`}>
                      <CategoryIcon className="w-3 h-3 mr-1" />
                      {categories.find(cat => cat.id === course.category)?.name}
                    </Badge>
                    <Badge variant="outline" className="border-gray-200 text-gray-600">
                      {course.level}
                    </Badge>
                    <Badge variant="outline" className="border-blue-200 text-blue-600">
                      Ages {course.ageRange}
                    </Badge>
                  </div>

                  {/* Course Stats */}
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-2 text-gray-400" />
                      {course.duration}
                    </div>
                    <div className="flex items-center">
                      <Users className="w-4 h-4 mr-2 text-gray-400" />
                      {course.enrolled} students
                    </div>
                    <div className="flex items-center">
                      <Star className="w-4 h-4 mr-2 text-yellow-500" />
                      {course.rating}
                    </div>
                    <div className="flex items-center">
                      <BookOpen className="w-4 h-4 mr-2 text-gray-400" />
                      {course.lessons} lessons
                    </div>
                  </div>

                  {/* Progress Bar (for enrolled courses) */}
                  {course.status === 'enrolled' && (
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span>{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-2 bg-orange-100" />
                      <p className="text-xs text-gray-600">
                        {course.completedLessons} of {course.lessons} lessons completed
                      </p>
                    </div>
                  )}

                  {/* Completed Badge */}
                  {course.status === 'completed' && (
                    <div className="flex items-center justify-center p-3 bg-green-50 rounded-lg">
                      <Trophy className="w-5 h-5 text-green-600 mr-2" />
                      <span className="text-green-800 font-medium">Course Completed!</span>
                    </div>
                  )}

                  {/* Action Buttons */}
                  <div className="flex space-x-2">
                    {course.status === 'available' && (
                      <Button className="flex-1 bg-gradient-to-r from-orange-500 to-pink-500">
                        <Play className="w-4 h-4 mr-2" />
                        Start Learning
                      </Button>
                    )}
                    
                    {course.status === 'enrolled' && (
                      <Button className="flex-1 bg-gradient-to-r from-orange-500 to-pink-500">
                        <Play className="w-4 h-4 mr-2" />
                        Continue Learning
                      </Button>
                    )}
                    
                    {course.status === 'completed' && (
                      <Button variant="outline" className="flex-1 border-green-200 text-green-600">
                        <Target className="w-4 h-4 mr-2" />
                        Review Certificate
                      </Button>
                    )}
                    
                    {course.status === 'locked' && (
                      <Button variant="outline" className="flex-1 border-gray-200 text-gray-400" disabled>
                        <Lock className="w-4 h-4 mr-2" />
                        Unlock at Level 10
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Empty State */}
        {filteredCourses.length === 0 && (
          <div className="text-center py-12">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-gray-800 mb-2">No courses found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}

        {/* Call to Action */}
        <Card className="mt-12 border-gradient-to-r from-purple-100 to-pink-100">
          <CardContent className="p-8 text-center">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your AI Adventure?</h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Join thousands of kids learning AI, creating games, and building the future together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-orange-500 to-pink-500">
                <Rocket className="w-5 h-5 mr-2" />
                Explore All Courses
              </Button>
              <Button size="lg" variant="outline" className="border-purple-200 text-purple-600">
                <Zap className="w-5 h-5 mr-2" />
                View Learning Path
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}