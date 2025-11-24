'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { 
  Sparkles,
  Linkedin,
  Twitter,
  Mail
} from 'lucide-react'
import Image from 'next/image'

export default function AboutPage() {
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
              <Link href="/#games" className="text-gray-600 hover:text-orange-600 transition-colors">
                Games
              </Link>
              <Link href="/#features" className="text-gray-600 hover:text-orange-600 transition-colors">
                Features
              </Link>
              <Link href="/#safety" className="text-gray-600 hover:text-orange-600 transition-colors">
                Safety
              </Link>
              <Link href="/about" className="text-orange-500 font-medium">
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
      <section className="py-20 bg-gradient-to-r from-orange-200 to-orange-300 text-gray-800 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.3),transparent_50%)]"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
            Building the Future of Kids' Digital Creativity
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8">
            Applaa unites community, education, and creativity to accelerate learning through play. Our mission is to make AI and game development tools accessible for every young builder, creator, and learner.
          </p>
          <Link href="https://app.applaa.com/registration/">
            <Button size="lg" className="bg-orange-500 text-white hover:bg-orange-600 shadow-lg">
              Join the Applaa Community
            </Button>
          </Link>
        </div>
      </section>

      {/* Core Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Core Team
              </span>
            </h2>
          </div>

          {/* Young Innovators Section */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center mb-8 text-gray-700">
              Young Innovators
            </h3>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {/* Bhuvan Bachina */}
              <Card className="text-center border-orange-200 hover:border-orange-400 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-orange-50 to-white">
                <CardContent className="pt-6">
                  <div className="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden border-4 border-orange-300 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                    <Image 
                      src="/placeholder-avatar.svg" 
                      alt="Bhuvan Bachina" 
                      width={112} 
                      height={112}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = '<div class="w-full h-full flex items-center justify-center text-orange-500 text-2xl font-bold">BB</div>';
                        }
                      }}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Bhuvan Bachina</h3>
                  <p className="text-orange-500 font-semibold mb-3">Young Innovator</p>
                  <p className="text-sm text-gray-600">
                    Inspiring young minds to explore technology and creativity
                  </p>
                </CardContent>
              </Card>

              {/* Elohi Muppala */}
              <Card className="text-center border-orange-200 hover:border-orange-400 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-orange-50 to-white">
                <CardContent className="pt-6">
                  <div className="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden border-4 border-orange-300 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                    <Image 
                      src="/placeholder-avatar.svg" 
                      alt="Elohi Muppala" 
                      width={112} 
                      height={112}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = '<div class="w-full h-full flex items-center justify-center text-orange-500 text-2xl font-bold">EM</div>';
                        }
                      }}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Elohi Muppala</h3>
                  <p className="text-orange-500 font-semibold mb-3">Young Innovator</p>
                  <p className="text-sm text-gray-600">
                    Inspiring young minds to explore technology and creativity
                  </p>
                </CardContent>
              </Card>

              {/* Abhi Konduru */}
              <Card className="text-center border-orange-200 hover:border-orange-400 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-orange-50 to-white">
                <CardContent className="pt-6">
                  <div className="w-28 h-28 mx-auto mb-4 rounded-full overflow-hidden border-4 border-orange-300 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                    <Image 
                      src="/placeholder-avatar.svg" 
                      alt="Abhi Konduru" 
                      width={112} 
                      height={112}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          parent.innerHTML = '<div class="w-full h-full flex items-center justify-center text-orange-500 text-2xl font-bold">AK</div>';
                        }
                      }}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">Abhi Konduru</h3>
                  <p className="text-orange-500 font-semibold mb-3">Young Innovator</p>
                  <p className="text-sm text-gray-600">
                    Inspiring young minds to explore technology and creativity
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {/* Raj Muppala */}
            <Card className="text-center border-orange-100 hover:border-orange-300 hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-orange-200 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                  <Image 
                    src="/pics/raj.png" 
                    alt="Raj Muppala" 
                    width={96} 
                    height={96}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = '<div class="w-full h-full flex items-center justify-center text-orange-500 text-2xl font-bold">RM</div>';
                      }
                    }}
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Raj Muppala</h3>
                <p className="text-orange-500 font-semibold mb-2 text-sm">Co-Founder & CEO</p>
                <p className="text-xs text-gray-600">
                  3x founder and 20+ years in technology, AI and marketing. IBM, Deutsche Bank, Shell, Hitachi
                </p>
              </CardContent>
            </Card>

            {/* Rahul Bachina */}
            <Card className="text-center border-orange-100 hover:border-orange-300 hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-orange-200 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                  <Image 
                    src="/pics/rahul.jpeg" 
                    alt="Rahul Bachina" 
                    width={96} 
                    height={96}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = '<div class="w-full h-full flex items-center justify-center text-orange-500 text-2xl font-bold">RB</div>';
                      }
                    }}
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Rahul Bachina</h3>
                <p className="text-orange-500 font-semibold mb-2 text-sm">Co-Founder & CTO</p>
                <p className="text-xs text-gray-600">
                  2x founder and 22+ years in technology. Cap Gemini, Accenture, Microsoft, Bupa, Avanade
                </p>
              </CardContent>
            </Card>

            {/* Siva Boppana */}
            <Card className="text-center border-orange-100 hover:border-orange-300 hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-orange-200 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                  <Image 
                    src="/pics/siva.jpeg" 
                    alt="Siva Boppana" 
                    width={96} 
                    height={96}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = '<div class="w-full h-full flex items-center justify-center text-orange-500 text-2xl font-bold">SB</div>';
                      }
                    }}
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Siva Boppana</h3>
                <p className="text-orange-500 font-semibold mb-2 text-sm">Agentic AI Head</p>
                <p className="text-xs text-gray-600">
                  30+ years in technology
                </p>
              </CardContent>
            </Card>

            {/* Mithun Majumdar */}
            <Card className="text-center border-orange-100 hover:border-orange-300 hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-orange-200 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                  <Image 
                    src="/pics/mithun.jpeg" 
                    alt="Mithun Majumdar" 
                    width={96} 
                    height={96}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = '<div class="w-full h-full flex items-center justify-center text-orange-500 text-2xl font-bold">MM</div>';
                      }
                    }}
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Mithun Majumdar</h3>
                <p className="text-orange-500 font-semibold mb-2 text-sm">AI Senior Engineer</p>
                <p className="text-xs text-gray-600">
                  Contributing to Applaa's mission
                </p>
              </CardContent>
            </Card>

            {/* Mukesh Patidar */}
            <Card className="text-center border-orange-100 hover:border-orange-300 hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-orange-200 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                  <Image 
                    src="/placeholder-avatar.svg" 
                    alt="Mukesh Patidar" 
                    width={96} 
                    height={96}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = '<div class="w-full h-full flex items-center justify-center text-orange-500 text-2xl font-bold">MP</div>';
                      }
                    }}
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Mukesh Patidar</h3>
                <p className="text-orange-500 font-semibold mb-2 text-sm">Fullstack & UI lead</p>
                <p className="text-xs text-gray-600">
                  Contributing to Applaa's mission
                </p>
              </CardContent>
            </Card>

            {/* Ashish Maurya */}
            <Card className="text-center border-orange-100 hover:border-orange-300 hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-orange-200 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                  <Image 
                    src="/placeholder-avatar.svg" 
                    alt="Ashish Maurya" 
                    width={96} 
                    height={96}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = '<div class="w-full h-full flex items-center justify-center text-orange-500 text-2xl font-bold">AM</div>';
                      }
                    }}
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Ashish Maurya</h3>
                <p className="text-orange-500 font-semibold mb-2 text-sm">Front-end Engineer & UI</p>
                <p className="text-xs text-gray-600">
                  Contributing to Applaa's mission
                </p>
              </CardContent>
            </Card>

            {/* Shubham Sarkar */}
            <Card className="text-center border-orange-100 hover:border-orange-300 hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-orange-200 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                  <Image 
                    src="/placeholder-avatar.svg" 
                    alt="Shubham Sarkar" 
                    width={96} 
                    height={96}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = '<div class="w-full h-full flex items-center justify-center text-orange-500 text-2xl font-bold">SS</div>';
                      }
                    }}
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Shubham Sarkar</h3>
                <p className="text-orange-500 font-semibold mb-2 text-sm">Team Member</p>
                <p className="text-xs text-gray-600">
                  Contributing to Applaa's mission
                </p>
              </CardContent>
            </Card>

            {/* Vishnu Mondrety */}
            <Card className="text-center border-orange-100 hover:border-orange-300 hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-orange-200 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                  <Image 
                    src="/placeholder-avatar.svg" 
                    alt="Vishnu Mondrety" 
                    width={96} 
                    height={96}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = '<div class="w-full h-full flex items-center justify-center text-orange-500 text-2xl font-bold">VM</div>';
                      }
                    }}
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Vishnu Mondrety</h3>
                <p className="text-orange-500 font-semibold mb-2 text-sm">Game & AI Developer</p>
                <p className="text-xs text-gray-600">
                  Contributing to Applaa's mission
                </p>
              </CardContent>
            </Card>

            {/* Sanskriti Mishra */}
            <Card className="text-center border-orange-100 hover:border-orange-300 hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-orange-200 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                  <Image 
                    src="/placeholder-avatar.svg" 
                    alt="Sanskriti Mishra" 
                    width={96} 
                    height={96}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = '<div class="w-full h-full flex items-center justify-center text-orange-500 text-2xl font-bold">SM</div>';
                      }
                    }}
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Sanskriti Mishra</h3>
                <p className="text-orange-500 font-semibold mb-2 text-sm">Content & Social Media Marketing</p>
                <p className="text-xs text-gray-600">
                  Contributing to Applaa's mission
                </p>
              </CardContent>
            </Card>

            {/* Rakesh Konduru */}
            <Card className="text-center border-orange-100 hover:border-orange-300 hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-orange-200 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                  <Image 
                    src="/placeholder-avatar.svg" 
                    alt="Rakesh Konduru" 
                    width={96} 
                    height={96}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = '<div class="w-full h-full flex items-center justify-center text-orange-500 text-2xl font-bold">RK</div>';
                      }
                    }}
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Rakesh Konduru</h3>
                <p className="text-orange-500 font-semibold mb-2 text-sm">Marketing & Growth</p>
                <p className="text-xs text-gray-600">
                  Contributing to Applaa's mission
                </p>
              </CardContent>
            </Card>

            {/* Artur Myynkowiak */}
            <Card className="text-center border-orange-100 hover:border-orange-300 hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-orange-200 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                  <Image 
                    src="/placeholder-avatar.svg" 
                    alt="Artur Myynkowiak" 
                    width={96} 
                    height={96}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = '<div class="w-full h-full flex items-center justify-center text-orange-500 text-2xl font-bold">AM</div>';
                      }
                    }}
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Artur Myynkowiak</h3>
                <p className="text-orange-500 font-semibold mb-2 text-sm">Content Marketing Team</p>
                <p className="text-xs text-gray-600">
                  Contributing to Applaa's mission
                </p>
              </CardContent>
            </Card>

            {/* Leena Antre */}
            <Card className="text-center border-orange-100 hover:border-orange-300 hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-orange-200 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                  <Image 
                    src="/placeholder-avatar.svg" 
                    alt="Leena Antre" 
                    width={96} 
                    height={96}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = '<div class="w-full h-full flex items-center justify-center text-orange-500 text-2xl font-bold">LA</div>';
                      }
                    }}
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Leena Antre</h3>
                <p className="text-orange-500 font-semibold mb-2 text-sm">Content Marketing Team</p>
                <p className="text-xs text-gray-600">
                  Contributing to Applaa's mission
                </p>
              </CardContent>
            </Card>

            {/* Anil Chouhan */}
            <Card className="text-center border-orange-100 hover:border-orange-300 hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-orange-200 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                  <Image 
                    src="/placeholder-avatar.svg" 
                    alt="Anil Chouhan" 
                    width={96} 
                    height={96}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = '<div class="w-full h-full flex items-center justify-center text-orange-500 text-2xl font-bold">AC</div>';
                      }
                    }}
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Anil Chouhan</h3>
                <p className="text-orange-500 font-semibold mb-2 text-sm">Wordpress & UI Developer</p>
                <p className="text-xs text-gray-600">
                  Contributing to Applaa's mission
                </p>
              </CardContent>
            </Card>

            {/* Anushka Sharma */}
            <Card className="text-center border-orange-100 hover:border-orange-300 hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-orange-200 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                  <Image 
                    src="/placeholder-avatar.svg" 
                    alt="Anushka Sharma" 
                    width={96} 
                    height={96}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = '<div class="w-full h-full flex items-center justify-center text-orange-500 text-2xl font-bold">AS</div>';
                      }
                    }}
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Anushka Sharma</h3>
                <p className="text-orange-500 font-semibold mb-2 text-sm">Content Marketing Team</p>
                <p className="text-xs text-gray-600">
                  Contributing to Applaa's mission
                </p>
              </CardContent>
            </Card>

            {/* Sneha Goel */}
            <Card className="text-center border-orange-100 hover:border-orange-300 hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-orange-200 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                  <Image 
                    src="/placeholder-avatar.svg" 
                    alt="Sneha Goel" 
                    width={96} 
                    height={96}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = '<div class="w-full h-full flex items-center justify-center text-orange-500 text-2xl font-bold">SG</div>';
                      }
                    }}
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Sneha Goel</h3>
                <p className="text-orange-500 font-semibold mb-2 text-sm">Content Marketing Team</p>
                <p className="text-xs text-gray-600">
                  Contributing to Applaa's mission
                </p>
              </CardContent>
            </Card>

            {/* Ravi Kumar */}
            <Card className="text-center border-orange-100 hover:border-orange-300 hover:shadow-xl transition-all duration-300">
              <CardContent className="pt-6">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden border-4 border-orange-200 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                  <Image 
                    src="/placeholder-avatar.svg" 
                    alt="Ravi Kumar" 
                    width={96} 
                    height={96}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = '<div class="w-full h-full flex items-center justify-center text-orange-500 text-2xl font-bold">RK</div>';
                      }
                    }}
                  />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Ravi Kumar</h3>
                <p className="text-orange-500 font-semibold mb-2 text-sm">Marketing & Social Media</p>
                <p className="text-xs text-gray-600">
                  Contributing to Applaa's mission
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Advisors Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Advisors
              </span>
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Walter Aldana */}
            <Card className="text-center border-orange-100 hover:border-orange-300 hover:shadow-xl transition-all duration-300 bg-white">
              <CardContent className="pt-6">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-orange-200 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                  <Image 
                    src="/pics/walter.jpeg" 
                    alt="Walter Aldana" 
                    width={128} 
                    height={128}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = '<div class="w-full h-full flex items-center justify-center text-orange-500 text-3xl font-bold">WA</div>';
                      }
                    }}
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Walter Aldana</h3>
                <p className="text-orange-500 font-semibold mb-3">Principal Advisor - Growth & Investments</p>
                <p className="text-sm text-gray-600">
                  MIT Engg, Stanford MBA. Ex-VP of Partnerships, Groq. VP of Alliances at Snowflake, Dataiku, Goldman Sachs. 25+ years in BD, Sales, Partnerships. 10+ years in start-ups.
                </p>
              </CardContent>
            </Card>

            {/* Hendrik Klein */}
            <Card className="text-center border-orange-100 hover:border-orange-300 hover:shadow-xl transition-all duration-300 bg-white">
              <CardContent className="pt-6">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-orange-200 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                  <Image 
                    src="/pics/hendrik.jpeg" 
                    alt="Hendrik Klein" 
                    width={128} 
                    height={128}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = '<div class="w-full h-full flex items-center justify-center text-orange-500 text-3xl font-bold">HK</div>';
                      }
                    }}
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Hendrik Klein</h3>
                <p className="text-orange-500 font-semibold mb-3">Principal Advisor - Investments</p>
                <p className="text-sm text-gray-600">
                  3x founder. 20 years in Trading. Landesbank Baden, Da Vinci Capital Partners.
                </p>
              </CardContent>
            </Card>

            {/* Pradeep Joglekar */}
            <Card className="text-center border-orange-100 hover:border-orange-300 hover:shadow-xl transition-all duration-300 bg-white">
              <CardContent className="pt-6">
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-4 border-orange-200 bg-gradient-to-br from-orange-100 to-orange-200 flex items-center justify-center">
                  <Image 
                    src="/pics/pradeep.png" 
                    alt="Pradeep Joglekar" 
                    width={128} 
                    height={128}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.innerHTML = '<div class="w-full h-full flex items-center justify-center text-orange-500 text-3xl font-bold">PJ</div>';
                      }
                    }}
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">Pradeep Joglekar</h3>
                <p className="text-orange-500 font-semibold mb-3">Principal Advisor - Strategy</p>
                <p className="text-sm text-gray-600">
                  35+ years in leadership, Fintech. Citi, Hinduja Group, Hexaware, Cap Gemini
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-orange-100 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Image src="/applaa.png" alt="Applaa Logo" width={32} height={32} />
              <span className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-orange-700 bg-clip-text text-transparent">
                Applaa
              </span>
            </div>
            <p className="text-gray-600 mb-4">
              The ultimate kid-safe gaming hub: Use AI to build games, apps and express creativity in a safe space.
            </p>
            <p className="text-sm text-gray-500">
              © 2024 Applaa. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

