"use client"

import { useEffect } from "react"

export function SmoothScroll() {
  useEffect(() => {
    // Ensure we're in the browser environment
    if (typeof window === 'undefined' || typeof document === 'undefined') {
      return
    }

    // Handle smooth scrolling for anchor links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const anchor = target.closest("a")

      if (anchor && anchor.hash && anchor.hash.startsWith("#")) {
        e.preventDefault()

        const targetElement = document.querySelector(anchor.hash)
        if (targetElement) {
          window.scrollTo({
            top: targetElement.getBoundingClientRect().top + window.scrollY - 80, // Offset for header
            behavior: "smooth",
          })

          // Update URL without scrolling
          window.history.pushState(null, "", anchor.hash)
        }
      }
    }

    document.addEventListener("click", handleAnchorClick)

    return () => {
      document.removeEventListener("click", handleAnchorClick)
    }
  }, [])

  return null
}

