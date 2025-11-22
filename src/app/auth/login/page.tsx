'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Alert, AlertDescription } from '@/components/ui/alert'
import { 
  Sparkles, 
  Eye,
  EyeOff,
  Mail,
  Lock,
  User,
  Shield,
  CheckCircle
} from 'lucide-react'

export default function LoginPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const message = searchParams.get('message')
  
  const [showPassword, setShowPassword] = useState(false)
  const [isKidLogin, setIsKidLogin] = useState(true)
  const [isLoading, setIsLoading] = useState(false)
  
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  })

  const [errors, setErrors] = useState<Record<string, string>>({})

  const validateForm = () => {
    const newErrors: Record<string, string> = {}
    
    if (!formData.username.trim()) {
      newErrors.username = isKidLogin ? 'Username is required' : 'Email is required'
    }
    
    if (!formData.password) {
      newErrors.password = 'Password is required'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return
    
    setIsLoading(true)
    
    try {
      // Here you would make an API call to authenticate
      console.log('Login attempt:', { ...formData, isKidLogin })
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Redirect to dashboard or profile
      router.push('/profile')
    } catch (error) {
      setErrors({ general: 'Invalid username or password. Please try again.' })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-pink-50 to-purple-50">
      {/* Header */}
      <div className="bg-white/80 backdrop-blur-sm border-b border-orange-100">
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
            <Link href="/auth/signup">
              <Button variant="outline" className="border-orange-200 text-orange-600 hover:bg-orange-50">
                Create New Account
              </Button>
            </Link>
          </div>
        </div>
      </div>

      <div className="max-w-md mx-auto px-4 py-8">
        {/* Success Message */}
        {message === 'signup-success' && (
          <Alert className="mb-6 border-green-200 bg-green-50">
            <CheckCircle className="w-4 h-4 text-green-600" />
            <AlertDescription className="text-green-800">
              Account created successfully! Please check your email for verification, then login here.
            </AlertDescription>
          </Alert>
        )}

        {/* Login Type Selector */}
        <div className="flex justify-center mb-6">
          <div className="bg-white rounded-lg p-1 shadow-sm border border-orange-100">
            <button
              onClick={() => setIsKidLogin(true)}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                isKidLogin
                  ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white'
                  : 'text-gray-600 hover:text-orange-600'
              }`}
            >
              Kid Login
            </button>
            <button
              onClick={() => setIsKidLogin(false)}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-all ${
                !isKidLogin
                  ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white'
                  : 'text-gray-600 hover:text-orange-600'
              }`}
            >
              Parent Login
            </button>
          </div>
        </div>

        {/* Login Form */}
        <Card className="border-orange-100">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent">
              Welcome Back!
            </CardTitle>
            <CardDescription>
              {isKidLogin 
                ? "Enter your username and password to continue your adventure"
                : "Parent login - manage your child's account and settings"
              }
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              {/* Username/Email */}
              <div className="space-y-2">
                <Label htmlFor="username" className="flex items-center">
                  {isKidLogin ? (
                    <User className="w-4 h-4 mr-2 text-orange-600" />
                  ) : (
                    <Mail className="w-4 h-4 mr-2 text-orange-600" />
                  )}
                  {isKidLogin ? 'Username' : 'Email Address'}
                </Label>
                <Input
                  id="username"
                  type={isKidLogin ? "text" : "email"}
                  placeholder={isKidLogin ? "CoolKid123" : "parent@example.com"}
                  value={formData.username}
                  onChange={(e) => setFormData({...formData, username: e.target.value})}
                  className="border-orange-200 focus:border-orange-400"
                />
                {errors.username && (
                  <p className="text-sm text-red-600">{errors.username}</p>
                )}
              </div>

              {/* Password */}
              <div className="space-y-2">
                <Label htmlFor="password" className="flex items-center">
                  <Lock className="w-4 h-4 mr-2 text-orange-600" />
                  Password
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
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

              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="rounded border-orange-200 text-orange-600 focus:ring-orange-500"
                  />
                  <span className="ml-2 text-sm text-gray-600">Remember me</span>
                </label>
                <Link href="/auth/forgot-password" className="text-sm text-orange-600 hover:text-orange-700">
                  Forgot password?
                </Link>
              </div>

              {/* Error Message */}
              {errors.general && (
                <Alert className="border-red-200 bg-red-50">
                  <AlertDescription className="text-red-800">
                    {errors.general}
                  </AlertDescription>
                </Alert>
              )}

              {/* Login Button */}
              <Button 
                type="submit"
                disabled={isLoading}
                className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600"
                size="lg"
              >
                {isLoading ? 'Logging in...' : 'Login to Your Account'}
              </Button>
            </form>

            {/* Safety Notice for Kids */}
            {isKidLogin && (
              <Alert className="mt-6 border-orange-200 bg-orange-50">
                <Shield className="w-4 h-4 text-orange-600" />
                <AlertDescription className="text-orange-800 text-sm">
                  <strong>Hey Kids!</strong> If you forgot your password, ask your parent to help you reset it.
                </AlertDescription>
              </Alert>
            )}

            {/* Parent Help Notice */}
            {!isKidLogin && (
              <Alert className="mt-6 border-blue-200 bg-blue-50">
                <Shield className="w-4 h-4 text-blue-600" />
                <AlertDescription className="text-blue-800 text-sm">
                  <strong>Parents:</strong> Use the email address you provided during signup to login.
                </AlertDescription>
              </Alert>
            )}
          </CardContent>
        </Card>

        {/* Signup Link */}
        <div className="text-center mt-6">
          <p className="text-gray-600">
            Don't have an account?{' '}
            <Link href="/auth/signup" className="text-orange-600 hover:text-orange-700 font-medium">
              Sign up here
            </Link>
          </p>
        </div>

        {/* Back to Home */}
        <div className="text-center mt-4">
          <Link href="/" className="text-sm text-gray-500 hover:text-orange-600">
            ← Back to Homepage
          </Link>
        </div>
      </div>
    </div>
  )
}