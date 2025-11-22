import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')
    const level = searchParams.get('level')
    const ageRange = searchParams.get('ageRange')
    const featured = searchParams.get('featured')

    // Build where clause
    const where: any = {
      isPublished: true
    }

    if (category && category !== 'all') {
      where.category = category.toUpperCase()
    }

    if (level && level !== 'all') {
      where.level = level.toUpperCase()
    }

    if (featured === 'true') {
      where.isFeatured = true
    }

    // Get courses with lessons count and enrollment stats
    const courses = await db.course.findMany({
      where,
      include: {
        lessons: {
          select: {
            id: true
          }
        },
        enrollments: {
          select: {
            id: true
          }
        }
      },
      orderBy: [
        { isFeatured: 'desc' },
        { createdAt: 'desc' }
      ]
    })

    // Format response
    const formattedCourses = courses.map(course => ({
      id: course.id,
      title: course.title,
      description: course.description,
      category: course.category,
      level: course.level,
      duration: course.duration,
      thumbnail: course.thumbnail,
      instructor: course.instructor,
      instructorAvatar: course.instructorAvatar,
      ageRange: course.ageRange,
      lessons: course.lessons.length,
      enrolled: course.enrollments.length,
      rating: course.averageRating,
      isFeatured: course.isFeatured,
      createdAt: course.createdAt
    }))

    return NextResponse.json({
      courses: formattedCourses,
      total: formattedCourses.length
    })

  } catch (error) {
    console.error('Get courses error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const courseData = await request.json()

    // Validate required fields
    const requiredFields = ['title', 'description', 'category', 'level', 'instructor']
    for (const field of requiredFields) {
      if (!courseData[field]) {
        return NextResponse.json(
          { error: `${field} is required` },
          { status: 400 }
        )
      }
    }

    // Create course
    const course = await db.course.create({
      data: {
        title: courseData.title,
        description: courseData.description,
        category: courseData.category.toUpperCase(),
        level: courseData.level.toUpperCase(),
        duration: courseData.duration || 60,
        thumbnail: courseData.thumbnail || '📚',
        instructor: courseData.instructor,
        instructorAvatar: courseData.instructorAvatar,
        ageRange: courseData.ageRange || '6-10',
        isPublished: courseData.isPublished || false,
        isFeatured: courseData.isFeatured || false
      }
    })

    return NextResponse.json({
      message: 'Course created successfully',
      course
    })

  } catch (error) {
    console.error('Create course error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}