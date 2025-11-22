import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'
import bcrypt from 'bcryptjs'

export async function POST(request: NextRequest) {
  try {
    const { kidData, parentData } = await request.json()

    // Validate input
    if (!kidData || !parentData) {
      return NextResponse.json(
        { error: 'Both kid and parent data are required' },
        { status: 400 }
      )
    }

    // Check if parent email already exists
    const existingParent = await db.user.findFirst({
      where: { email: parentData.email }
    })

    if (existingParent) {
      return NextResponse.json(
        { error: 'An account with this email already exists' },
        { status: 400 }
      )
    }

    // Check if kid username already exists
    const existingKid = await db.user.findFirst({
      where: { username: kidData.username }
    })

    if (existingKid) {
      return NextResponse.json(
        { error: 'This username is already taken' },
        { status: 400 }
      )
    }

    // Hash parent password
    const hashedPassword = await bcrypt.hash(parentData.password, 12)

    // Create parent account
    const parent = await db.user.create({
      data: {
        email: parentData.email,
        password: hashedPassword,
        firstName: parentData.firstName,
        lastName: parentData.lastName,
        userType: 'PARENT',
        isVerified: false, // Will be verified via email
        isActive: true
      }
    })

    // Create kid account linked to parent
    const kid = await db.user.create({
      data: {
        username: kidData.username,
        password: hashedPassword, // Kids use parent password initially
        firstName: kidData.username, // Use username as first name for now
        avatar: kidData.avatar,
        age: parseInt(kidData.age),
        userType: 'KID',
        parentId: parent.id,
        interests: JSON.stringify(kidData.interests),
        bio: `Love creating games and learning about AI!`,
        isActive: true,
        isVerified: true // Kids are auto-verified once parent is verified
      }
    })

    // TODO: Send verification email to parent
    // For now, we'll auto-verify for demo purposes
    await db.user.update({
      where: { id: parent.id },
      data: { isVerified: true }
    })

    // Create initial achievements for the kid
    const initialAchievements = [
      {
        title: 'Welcome to Applaa!',
        description: 'Joined the applaa community',
        icon: '🎉',
        category: 'SOCIAL',
        points: 10,
        type: 'FRIEND_ADD',
        userId: kid.id,
        completed: true,
        completedAt: new Date()
      }
    ]

    for (const achievement of initialAchievements) {
      await db.userAchievement.create({
        data: achievement
      })
    }

    // Log initial activity
    await db.activityLog.create({
      data: {
        userId: kid.id,
        type: 'LOGIN',
        action: 'Account created',
        data: JSON.stringify({ parentEmail: parentData.email })
      }
    })

    return NextResponse.json({
      message: 'Account created successfully',
      parent: {
        id: parent.id,
        email: parent.email,
        firstName: parent.firstName,
        userType: parent.userType
      },
      kid: {
        id: kid.id,
        username: kid.username,
        avatar: kid.avatar,
        age: kid.age,
        userType: kid.userType
      }
    })

  } catch (error) {
    console.error('Signup error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}