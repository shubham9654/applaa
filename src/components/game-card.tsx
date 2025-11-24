'use client'

import Link from 'next/link'
import { Card, CardContent } from '@/components/ui/card'
import { ArrowUpRight, Gamepad2 } from 'lucide-react'

type Game = {
  name: string
  emoji: string
  bgClass?: string
  tag?: string
  url: string
}

export default function GameCard({ game }: { game: Game }) {
  // Fallback gradient if none provided, tuned to match the cream theme
  const defaultBgClass = 'bg-gradient-to-br from-orange-100 to-amber-50';

  return (
    <Link 
      href={game.url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="block group h-full"
    >
      <div className="h-full relative transition-transform duration-500 hover:-translate-y-2">
        
        {/* BACKGROUND SHADOW ELEMENT 
           This creates a "stacked card" effect behind the main card.
           It appears on hover for a 3D pop.
        */}
        <div className="
          absolute inset-0 
          bg-stone-200 
          rounded-4xl 
          translate-y-2 translate-x-2 
          opacity-0 group-hover:opacity-100 
          transition-opacity duration-300 
          -z-10
        "></div>

        <Card 
          className="
            h-full
            border-none
            rounded-4xl 
            overflow-hidden
               === The Base Color ===
            bg-[#fff0dc] 
            
               === Text & Texture ===
            text-stone-800
            shadow-[0_8px_30px_rgb(0,0,0,0.04)] // Very soft, natural
            group-hover:shadow-none // Remove CSS to let the hard behind show through
            transition-all duration-300
          "
        >
          {/* Optional: Grain Texture Overlay for a 'Paper' feel */}
          <div className="absolute inset-0 opacity-40 pointer-events-none mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')] rounded-4xl"></div>

          {/* === Image / Emoji Container === */}
          <div className="p-3 pb-0 relative z-10">
            <div className={`
              ${game.bgClass ?? defaultBgClass} 
              aspect-16/11 // slightly wider ratio
              rounded-3xl 
              flex items-center justify-center 
              relative 
              overflow-hidden
              shadow-inner
            `}>
              
              {/* Background Pattern inside the image box */}
              <div className="absolute inset-0 opacity-30 bg-[radial-gradient(#44403c_1px,transparent_1px)] bg-size-[16px_16px]"></div>

              {/* The Emoji */}
              <div className="
                relative z-10 
                text-6xl md:text-7xl 
                transition-transform duration-500 cubic-bezier(0.34, 1.56, 0.64, 1)
                group-hover:scale-110 group-hover:rotate-6
                drop-shadow-md
              ">
                {game.emoji}
              </div>

              {/* Tag: Floating Pill */}
              {game.tag && (
                <div className="
                  absolute top-3 right-3 
                  bg-white/90 backdrop-blur-sm 
                  text-stone-800 font-bold text-[10px] uppercase tracking-widest
                  px-3 py-1.5 rounded-full
                  shadow-sm border border-stone-100
                ">
                  {game.tag}
                </div>
              )}
            </div>
          </div>

          {/* === Content Section === */}
          <CardContent className="p-6 relative z-10 flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="
                  font-black text-xl tracking-tight 
                  text-stone-700
                  group-hover:text-orange-600 transition-colors duration-300
                ">
                  {game.name}
                </h3>
                <p className="text-stone-500 text-sm font-medium mt-1 flex items-center gap-1">
                   <Gamepad2 size={14} className="opacity-50"/> 
                   Play Now
                </p>
              </div>

              {/* Action Button */}
              <div className="
                w-10 h-10 rounded-full 
                bg-white border-2 border-stone-100
                flex items-center justify-center
                text-stone-400
                transition-all duration-300
                group-hover:bg-stone-200 group-hover:border-stone-200 group-hover:text-[#fff0dc] group-hover:scale-110
              ">
                <ArrowUpRight size={18} strokeWidth={3} />
              </div>
            </div>
            
            {/* Decorative bottom bar */}
            <div className="absolute bottom-0 left-0 w-full h-1.5 bg-stone-200/5 group-hover:bg-orange-500 transition-colors duration-300"></div>
          </CardContent>
        </Card>
      </div>
    </Link>
  )
}