'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Badge } from '@/components/ui/badge'
import { Alert, AlertDescription } from '@/components/ui/alert'
import Image from 'next/image'
import { 
  Shield, 
  Check,
  Eye,
  EyeOff,
  User,
  Mail,
  Lock,
  Calendar
} from 'lucide-react'

const avatarOptions = [
  { emoji: '🦄', name: 'Unicorn' },
  { emoji: '🚀', name: 'Rocket' },
  { emoji: '🐼', name: 'Panda' },
  { emoji: '🌟', name: 'Star' },
  { emoji: '🎨', name: 'Artist' },
  { emoji: '🎮', name: 'Gamer' },
  { emoji: '📚', name: 'Scholar' },
  { emoji: '⚡', name: 'Lightning' },
]

const interests = [
  'AI & Robots', 'Gaming', 'Art & Design', 'Music', 'Science', 'Sports',
  'Reading', 'Coding', 'Animals', 'Space', 'Dinosaurs', 'Magic'
]

export default function SignupPage() {
  const router = useRouter()
  const [showPassword, setShowPassword] = useState(false)
  const [selectedAvatar, setSelectedAvatar] = useState('')
  const [selectedInterests, setSelectedInterests] = useState<string[]>([])
  
  // User profile data
  const [userData, setUserData] = useState({
    username: '',
    age: '',
    avatar: '',
    interests: [] as string[],
    email: '',
    password: '',
    confirmPassword: ''
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    
    if (!userData.username.trim()) {
      newErrors.username = 'Username is required'
    } else if (userData.username.length < 3) {
      newErrors.username = 'Username must be at least 3 characters'
    }
    
    if (!userData.age) {
      newErrors.age = 'Age is required'
    } else if (parseInt(userData.age) < 6 || parseInt(userData.age) > 18) {
      newErrors.age = 'Age must be between 6 and 18'
    }
    
    if (!selectedAvatar) {
      newErrors.avatar = 'Please select an avatar'
    }
    
    if (selectedInterests.length === 0) {
      newErrors.interests = 'Please select at least one interest'
    }
    
    if (!userData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    
    if (!userData.password) {
      newErrors.password = 'Password is required'
    } else if (userData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters'
    }
    
    if (userData.password !== userData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSignup = async () => {
    if (validateForm()) {
      try {
        // Here you would make an API call to register the user
        console.log('Signup data:', { 
          username: userData.username,
          age: userData.age,
          avatar: selectedAvatar,
          interests: selectedInterests,
          email: userData.email,
          password: userData.password
        })
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        // Redirect to login or dashboard
        router.push('/auth/login?message=signup-success')
      } catch (error) {
        setErrors({ general: 'Signup failed. Please try again.' })
      }
    }
  }

  const toggleInterest = (interest: string) => {
    setSelectedInterests(prev => 
      prev.includes(interest) 
        ? prev.filter(i => i !== interest)
        : [...prev, interest]
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center space-x-2">
              <Image src="/applaa.png" alt="Applaa Logo" width={32} height={32} />
              <span className="text-xl font-bold bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">
                Applaa
              </span>
            </Link>
            <Link href="/auth/login">
              <Button variant="outline" className="border-orange-200 text-orange-600 hover:bg-orange-50">
                Already have an account? Login
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-8">
        {/* Safety Notice */}
        <Alert className="mb-6 border-orange-200 bg-orange-50">
          <Shield className="w-4 h-4 text-orange-600" />
          <AlertDescription className="text-orange-800">
            <strong>Safety First!</strong> Applaa is committed to creating a safe space for kids to learn and create.
          </AlertDescription>
        </Alert>

        {/* Signup Form */}
        <Card className="border-orange-100">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">
              Create Your Profile
            </CardTitle>
            <CardDescription>
              Tell us about yourself so we can personalize your experience!
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Username */}
            <div className="space-y-2">
              <Label htmlFor="username" className="flex items-center">
                <User className="w-4 h-4 mr-2 text-orange-600" />
                Choose Your Username
              </Label>
              <Input
                id="username"
                placeholder="CoolKid123"
                value={userData.username}
                onChange={(e) => setUserData({...userData, username: e.target.value})}
                className="border-orange-200 focus:border-orange-400"
              />
              {errors.username && (
                <p className="text-sm text-red-600">{errors.username}</p>
              )}
            </div>

            {/* Age */}
            <div className="space-y-2">
              <Label htmlFor="age" className="flex items-center">
                <Calendar className="w-4 h-4 mr-2 text-orange-600" />
                Your Age
              </Label>
              <Input
                id="age"
                type="number"
                placeholder="10"
                min="6"
                max="18"
                value={userData.age}
                onChange={(e) => setUserData({...userData, age: e.target.value})}
                className="border-orange-200 focus:border-orange-400"
              />
              {errors.age && (
                <p className="text-sm text-red-600">{errors.age}</p>
              )}
            </div>

            {/* Email */}
            <div className="space-y-2">
              <Label htmlFor="email" className="flex items-center">
                <Mail className="w-4 h-4 mr-2 text-orange-600" />
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={userData.email}
                onChange={(e) => setUserData({...userData, email: e.target.value})}
                className="border-orange-200 focus:border-orange-400"
              />
              {errors.email && (
                <p className="text-sm text-red-600">{errors.email}</p>
              )}
            </div>

            {/* Avatar Selection */}
            <div className="space-y-3">
              <Label className="text-base font-medium">Choose Your Avatar</Label>
              <div className="grid grid-cols-4 gap-3">
                {avatarOptions.map((avatar) => (
                  <button
                    key={avatar.name}
                    onClick={() => setSelectedAvatar(avatar.emoji)}
                    className={`p-4 rounded-lg border-2 transition-all hover:scale-105 ${
                      selectedAvatar === avatar.emoji
                        ? 'border-orange-400 bg-orange-50'
                        : 'border-gray-200 hover:border-orange-200'
                    }`}
                  >
                    <div className="text-3xl mb-1">{avatar.emoji}</div>
                    <div className="text-xs text-gray-600">{avatar.name}</div>
                  </button>
                ))}
              </div>
              {errors.avatar && (
                <p className="text-sm text-red-600">{errors.avatar}</p>
              )}
            </div>

            {/* Interests */}
            <div className="space-y-3">
              <Label className="text-base font-medium">Your Interests (Choose at least one)</Label>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest) => (
                  <Badge
                    key={interest}
                    variant={selectedInterests.includes(interest) ? "default" : "outline"}
                    className={`cursor-pointer transition-all ${
                      selectedInterests.includes(interest)
                        ? 'bg-orange-500 hover:bg-orange-600'
                        : 'border-orange-200 text-orange-600 hover:bg-orange-50'
                    }`}
                    onClick={() => toggleInterest(interest)}
                  >
                    {interest}
                  </Badge>
                ))}
              </div>
              {errors.interests && (
                <p className="text-sm text-red-600">{errors.interests}</p>
              )}
            </div>

            {/* Password */}
            <div className="space-y-2">
              <Label htmlFor="password" className="flex items-center">
                <Lock className="w-4 h-4 mr-2 text-orange-600" />
                Create Password
              </Label>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="Create a strong password"
                  value={userData.password}
                  onChange={(e) => setUserData({...userData, password: e.target.value})}
                  className="border-orange-200 focus:border-orange-400 pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
              {errors.password && (
                <p className="text-sm text-red-600">{errors.password}</p>
              )}
            </div>

            {/* Confirm Password */}
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="Re-enter your password"
                value={userData.confirmPassword}
                onChange={(e) => setUserData({...userData, confirmPassword: e.target.value})}
                className="border-orange-200 focus:border-orange-400"
              />
              {errors.confirmPassword && (
                <p className="text-sm text-red-600">{errors.confirmPassword}</p>
              )}
            </div>

            {/* Terms and Privacy */}
            <Alert className="border-blue-200 bg-blue-50">
              <Shield className="w-4 h-4 text-blue-600" />
              <AlertDescription className="text-blue-800 text-sm">
                By signing up, you agree to our Terms of Service and Privacy Policy. 
                We're COPPA-compliant and committed to protecting your privacy.
              </AlertDescription>
            </Alert>

            {/* Error Message */}
            {errors.general && (
              <Alert className="border-red-200 bg-red-50">
                <AlertDescription className="text-red-800">
                  {errors.general}
                </AlertDescription>
              </Alert>
            )}

            {/* Submit Button */}
            <Button 
              onClick={handleSignup}
              className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700"
              size="lg"
            >
              <Check className="w-4 h-4 mr-2" />
              Create Account
            </Button>
          </CardContent>
        </Card>

        {/* Login Link */}
        <div className="text-center mt-6">
          <p className="text-gray-600">
            Already have an account?{' '}
            <Link href="/auth/login" className="text-orange-600 hover:text-orange-700 font-medium">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}