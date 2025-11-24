'use client'

import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'

type Game = {
  name: string
  emoji: string
  bgClass?: string
  tag?: string
  url: string
}

export default function GameCard({ game }: { game: Game }) {
  return (
    <Link href={game.url} target="_blank" rel="noopener noreferrer">
      <Card className="group hover:shadow-2xl hover:scale-105 transition-all duration-300 border-orange-100 hover:border-orange-300 cursor-pointer overflow-hidden">
        <div className={`${game.bgClass ?? 'bg-gradient-to-br from-gray-900 to-gray-800'} aspect-square flex items-center justify-center relative overflow-hidden`}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_50%)]"></div>
          <div className="relative z-10 text-3xl md:text-4xl transform group-hover:scale-110 transition-transform">{game.emoji}</div>
          {game.tag && <div className="absolute top-2 left-2 text-white text-xs">{game.tag}</div>}
        </div>
        <CardContent className="p-4">
          <h3 className="font-bold text-sm md:text-base text-gray-800 group-hover:text-orange-600 transition-colors flex items-center">
            {game.name}
          </h3>
        </CardContent>
      </Card>
    </Link>
  )
}