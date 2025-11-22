import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const userId = searchParams.get('id')
    const username = searchParams.get('username')

    if (!userId && !username) {
      return NextResponse.json(
        { error: 'User ID or username is required' },
        { status: 400 }
      )
    }

    // Find user
    const user = await db.user.findFirst({
      where: {
        OR: [
          { id: userId || undefined },
          { username: username || undefined }
        ]
      },
      select: {
        id: true,
        username: true,
        firstName: true,
        lastName: true,
        avatar: true,
        age: true,
        userType: true,
        bio: true,
        interests: true,
        level: true,
        xp: true,
        friendsCount: true,
        gamesCount: true,
        createdAt: true,
        // Include relations
        createdGames: {
          select: {
            id: true,
            title: true,
            thumbnail: true,
            playsCount: true,
            likesCount: true,
            rating: true,
            createdAt: true
          },
          orderBy: { createdAt: 'desc' },
          take: 6
        },
        courseEnrollments: {
          include: {
            course: {
              select: {
                id: true,
                title: true,
                thumbnail: true,
                category: true
              }
            }
          },
          orderBy: { enrolledAt: 'desc' },
          take: 6
        },
        achievements: {
          include: {
            achievement: {
              select: {
                id: true,
                title: true,
                description: true,
                icon: true,
                category: true,
                points: true
              }
            }
          },
          where: { completed: true },
          orderBy: { completedAt: 'desc' },
          take: 10
        }
      }
    })

    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      )
    }

    // Parse interests from JSON
    const interests = user.interests ? JSON.parse(user.interests) : []

    // Get additional stats
    const totalAchievements = await db.userAchievement.count({
      where: { 
        userId: user.id,
        completed: true
      }
    })

    const completedCourses = await db.courseEnrollment.count({
      where: { 
        userId: user.id,
        completed: true
      }
    })

    // Format response
    const formattedUser = {
      ...user,
      interests,
      stats: {
        totalAchievements,
        completedCourses,
        totalGames: user.createdGames.length,
        totalEnrollments: user.courseEnrollments.length
      }
    }

    return NextResponse.json({
      user: formattedUser
    })

  } catch (error) {
    console.error('Get user error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { userId, updates } = await request.json()

    if (!userId) {
      return NextResponse.json(
        { error: 'User ID is required' },
        { status: 400 }
      )
    }

    // Validate updates
    const allowedUpdates = ['bio', 'avatar', 'interests']
    const invalidUpdates = Object.keys(updates).filter(key => !allowedUpdates.includes(key))
    
    if (invalidUpdates.length > 0) {
      return NextResponse.json(
        { error: `Invalid updates: ${invalidUpdates.join(', ')}` },
        { status: 400 }
      )
    }

    // Prepare update data
    const updateData: any = {}
    
    if (updates.bio !== undefined) {
      updateData.bio = updates.bio
    }
    
    if (updates.avatar !== undefined) {
      updateData.avatar = updates.avatar
    }
    
    if (updates.interests !== undefined) {
      updateData.interests = JSON.stringify(updates.interests)
    }

    // Update user
    const user = await db.user.update({
      where: { id: userId },
      data: updateData,
      select: {
        id: true,
        username: true,
        bio: true,
        avatar: true,
        interests: true
      }
    })

    // Parse interests for response
    if (user.interests) {
      (user as any).interests = JSON.parse(user.interests)
    }

    return NextResponse.json({
      message: 'Profile updated successfully',
      user
    })

  } catch (error) {
    console.error('Update user error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}