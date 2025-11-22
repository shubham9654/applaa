import { NextRequest, NextResponse } from 'next/server'
import { db } from '@/lib/db'

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url)
    const category = searchParams.get('category')
    const difficulty = searchParams.get('difficulty')
    const ageRating = searchParams.get('ageRating')
    const featured = searchParams.get('featured')
    const creator = searchParams.get('creator')
    const sortBy = searchParams.get('sortBy') || 'popular'
    const search = searchParams.get('search')

    // Build where clause
    const where: any = {
      isPublic: true
    }

    if (category && category !== 'all') {
      where.category = category.toUpperCase()
    }

    if (difficulty && difficulty !== 'all') {
      where.difficulty = difficulty.toUpperCase()
    }

    if (ageRating && ageRating !== 'all') {
      where.ageRating = ageRating
    }

    if (featured === 'true') {
      where.isFeatured = true
    }

    if (creator) {
      where.creator = {
        username: creator
      }
    }

    if (search) {
      where.OR = [
        { title: { contains: search } },
        { description: { contains: search } }
      ]
    }

    // Build order by clause
    let orderBy: any = { createdAt: 'desc' }
    switch (sortBy) {
      case 'popular':
        orderBy = { playsCount: 'desc' }
        break
      case 'rating':
        orderBy = { rating: 'desc' }
        break
      case 'newest':
        orderBy = { createdAt: 'desc' }
        break
      case 'likes':
        orderBy = { likesCount: 'desc' }
        break
    }

    // Get games with creator info
    const games = await db.game.findMany({
      where,
      include: {
        creator: {
          select: {
            id: true,
            username: true,
            avatar: true
          }
        }
      },
      orderBy
    })

    // Format response
    const formattedGames = games.map(game => ({
      id: game.id,
      title: game.title,
      description: game.description,
      category: game.category,
      tags: game.tags ? JSON.parse(game.tags) : [],
      thumbnail: game.thumbnail,
      creator: {
        id: game.creator.id,
        username: game.creator.username,
        avatar: game.creator.avatar
      },
      plays: game.playsCount,
      likes: game.likesCount,
      rating: game.rating,
      ageRating: game.ageRating,
      difficulty: game.difficulty,
      isFeatured: game.isFeatured,
      createdAt: game.createdAt,
      lastUpdated: game.updatedAt
    }))

    return NextResponse.json({
      games: formattedGames,
      total: formattedGames.length
    })

  } catch (error) {
    console.error('Get games error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const gameData = await request.json()

    // Validate required fields
    const requiredFields = ['title', 'description', 'category', 'creatorId']
    for (const field of requiredFields) {
      if (!gameData[field]) {
        return NextResponse.json(
          { error: `${field} is required` },
          { status: 400 }
        )
      }
    }

    // Create game
    const game = await db.game.create({
      data: {
        title: gameData.title,
        description: gameData.description,
        category: gameData.category.toUpperCase(),
        tags: gameData.tags ? JSON.stringify(gameData.tags) : null,
        thumbnail: gameData.thumbnail || '🎮',
        gameData: gameData.gameData,
        ageRating: gameData.ageRating || '6+',
        difficulty: gameData.difficulty ? gameData.difficulty.toUpperCase() : 'EASY',
        creatorId: gameData.creatorId,
        isPublic: gameData.isPublic !== false,
        isFeatured: false
      }
    })

    // Update creator's games count
    await db.user.update({
      where: { id: gameData.creatorId },
      data: {
        gamesCount: {
          increment: 1
        }
      }
    })

    // Log activity
    await db.activityLog.create({
      data: {
        userId: gameData.creatorId,
        type: 'GAME_CREATE',
        action: `Created game: ${gameData.title}`,
        data: JSON.stringify({ gameId: game.id })
      }
    })

    return NextResponse.json({
      message: 'Game created successfully',
      game
    })

  } catch (error) {
    console.error('Create game error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}