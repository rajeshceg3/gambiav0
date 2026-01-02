"use client"

import { useEffect, useState, useRef } from "react"
import { ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function BackToTop() {
  const [isVisible, setIsVisible] = useState(false)
  const sentinelRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Show button when sentinel is NOT intersecting (scrolled past)
        setIsVisible(!entry.isIntersecting)
      },
      {
        root: null,
        threshold: 0,
      }
    )

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <>
      {/* Sentinel element to track scroll position */}
      <div
        ref={sentinelRef}
        className="absolute top-0 left-0 w-full h-[300px] pointer-events-none opacity-0"
        aria-hidden="true"
      />
      <Button
        variant="secondary"
        size="icon"
        className={cn(
          "fixed bottom-8 right-8 z-50 rounded-full shadow-lg transition-all duration-300 hover:scale-110",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none invisible"
        )}
        onClick={scrollToTop}
        aria-label="Back to top"
      >
        <ArrowUp className="h-5 w-5" />
      </Button>
    </>
  )
}
