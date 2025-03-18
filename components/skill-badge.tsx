import { Badge } from "@/components/ui/badge"

interface SkillBadgeProps {
  name: string
  level: number
}

export function SkillBadge({ name, level }: SkillBadgeProps) {
  // Determine color based on skill level
  const getBadgeClasses = (level: number) => {
    if (level >= 90) return "bg-[#1a4b8c] text-white hover:bg-[#0f3b7c]"
    if (level >= 80) return "bg-[#d4a84f] text-white hover:bg-[#c49840]"
    return "bg-[#f8f5f0] border-[#1a4b8c]/50 text-[#1a4b8c] hover:border-[#1a4b8c]"
  }

  return (
    <div className="group relative">
      <Badge className={getBadgeClasses(level)}>{name}</Badge>
      <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-[#f8f5f0] text-[#1a2a47] px-2 py-1 rounded text-xs opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-md">
        {level}%
      </div>
    </div>
  )
}

