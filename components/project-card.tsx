"use client"

import Image from "next/image"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  image: string
  githubUrl?: string
  demoUrl?: string
  detailsUrl?: string
}

export function ProjectCard({
  title,
  description,
  tags,
  image,
  githubUrl,
  demoUrl,
  detailsUrl = "#",
}: ProjectCardProps) {
  return (
    <Card className="overflow-hidden flex flex-col h-full transition-all hover:shadow-lg border-t-4 border-t-[#d4a84f] bg-[#f8f5f0]">
      <div className="aspect-video overflow-hidden">        <Image
        src={image || "/placeholder.svg"}
        alt={`${title} project thumbnail`}
        className="w-full h-full object-cover transition-transform hover:scale-105"
        width={400}
        height={200}
      />
      </div>
      <CardHeader>
        <h3 className="text-xl font-semibold text-[#1a2a47]">{title}</h3>
      </CardHeader>
      <CardContent className="flex-1">
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} className="bg-[#f0f2f5] text-[#1a4b8c] hover:bg-[#e4e8f0]">
              {tag}
            </Badge>
          ))}
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        {githubUrl && (
          <Button
            variant="outline"
            size="sm"
            className="border-[#1a4b8c]/50 hover:border-[#1a4b8c] text-[#1a4b8c]"
            onClick={() => window.open(githubUrl, "_blank")}
          >
            <Github className="mr-2 h-4 w-4" />
            Code
          </Button>
        )}
        {demoUrl && (
          <Button
            size="sm"
            className="bg-[#1a4b8c] hover:bg-[#0f3b7c] text-white"
            onClick={() => window.open(demoUrl, "_blank")}
          >
            <ExternalLink className="mr-2 h-4 w-4" />
            Live Demo
          </Button>
        )}
        {!githubUrl && !demoUrl && (
          <Button
            size="sm"
            className="bg-[#1a4b8c] hover:bg-[#0f3b7c] text-white"
            onClick={() => window.open(detailsUrl, "_blank")}
          >
            View Details
          </Button>
        )}
      </CardFooter>
    </Card>
  )
}

