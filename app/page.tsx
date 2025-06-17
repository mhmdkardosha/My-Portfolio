"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react"

import { Button } from "@/components/ui/button"
import { ProjectCard } from "@/components/project-card"
import { SkillBadge } from "@/components/skill-badge"
import { ContactForm } from "@/components/contact-form"
// Add this import at the top
import { SmoothScroll } from "@/components/smooth-scroll"

export default function Home() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleExternalLink = (url: string) => {
    if (mounted && typeof window !== 'undefined') {
      window.open(url, "_blank")
    }
  }
  const handleScrollToContact = () => {
    if (mounted && typeof document !== 'undefined') {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })
    }
  }

  const handleScrollToProjects = () => {
    if (mounted && typeof document !== 'undefined') {
      document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
    }
  }
  return (
    <div className="flex min-h-screen flex-col bg-[#f4f1ea]">
      {/* Add this component at the top of the JSX */}
      <SmoothScroll />

      {/* Rest of your existing code */}
      <header className="sticky top-0 z-50 w-full border-b bg-[#f8f5f0] backdrop-blur supports-[backdrop-filter]:bg-[#f8f5f0]/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-bold text-xl">
            Mohamed<span className="text-[#1a4b8c]"> Kardosha</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#about" className="text-gray-600 hover:text-[#1a4b8c] transition-colors">
              About
            </Link>
            <Link href="#skills" className="text-gray-600 hover:text-[#1a4b8c] transition-colors">
              Skills
            </Link>
            <Link href="#projects" className="text-gray-600 hover:text-[#1a4b8c] transition-colors">
              Projects
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-[#1a4b8c] transition-colors">
              Contact
            </Link>
          </nav>
          <div className="flex items-center gap-3">            <Button
            variant="ghost"
            size="icon"
            onClick={() => handleExternalLink("https://github.com/mhmdkardosha")}
            className="hover:text-[#1a4b8c]"
          >
            <Github className="h-5 w-5" />
            <span className="sr-only">GitHub</span>
          </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleExternalLink("https://www.linkedin.com/in/mohamed-kardosha-4b8552248/")}
              className="hover:text-[#1a4b8c]"
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Button>            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleExternalLink("https://www.kaggle.com/mhmdkardosha")}
              className="hover:text-[#1a4b8c] flex items-center justify-center"
            ><Image
                src="/icons/kaggle.svg"
                alt="Kaggle"
                width={24}
                height={24}
                className="h-10 w-10"
              />
              <span className="sr-only">Kaggle</span>
            </Button>            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={handleScrollToContact}
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Contact</span>
            </Button>
            <Button
              className="hidden md:flex bg-[#1a4b8c] hover:bg-[#0f3b7c] text-white"
              onClick={handleScrollToContact}
            >
              Contact Me
            </Button>
          </div>
        </div>
      </header>
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container py-24 md:py-32 space-y-8 bg-[#f8f5f0] rounded-xl shadow-sm">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1 space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-[#1a2a47]">
                Data Scientist & <span className="text-[#d4a84f]">ML Engineer</span>
              </h1>
              <p className="text-xl text-gray-600">
                Transforming complex data into actionable insights and building intelligent systems that solve
                real-world problems.
              </p>
              <div className="flex gap-4">                <Button
                size="lg"
                className="bg-[#1a4b8c] hover:bg-[#0f3b7c] text-white shadow-lg"
                onClick={handleScrollToProjects}
              >
                View Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#d4a84f] text-[#d4a84f] hover:bg-[#d4a84f]/10"
                  onClick={() => {
                    // Create a link to download the resume
                    const link = document.createElement("a")
                    link.href = "/Mohamed Kardosha resume.pdf" // Path to your resume file in the public folder
                    link.download = "Mohamed Kardosha resume.pdf"
                    document.body.appendChild(link)
                    link.click()
                    document.body.removeChild(link)
                  }}
                >
                  Download Resume
                </Button>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="relative w-72 h-72 rounded-full overflow-hidden border-4 border-[#d4a84f] shadow-xl">                <Image
                src="/images/profile.png"
                alt="Mohamed Kardosha - Data Scientist Portrait"
                className="object-cover"
                width={300}
                height={300}
              />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="bg-gradient-to-b from-[#ebe6db] to-[#f4f1ea] py-16">
          <div className="container space-y-6">
            <h2 className="text-3xl font-bold tracking-tight text-[#1a2a47]">About Me</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <p className="text-lg text-gray-700">
                  An undergraduate engineer named Mohamed Kardosha, specializing in
                  Communications and Electronics, is interested in problem-solving,
                  data science, and machine learning. Connections can be made through
                  LinkedIn messages or by emailing mohamedkardosha9@gmail.com.
                </p>
                <p className="text-lg text-gray-700">
                  With over two years of experience, Mohamed is a data scientist
                  specializing in machine learning, statistical analysis, and data
                  visualization. A background in computer science and statistics allows
                  problems to be approached from various perspectives.
                </p>
                <p className="text-lg text-gray-700">                  When I&apos;m not diving into datasets, you can find me learning new languages, mentoring
                  aspiring data scientists, or exploring the latest advancements in AI.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-[#1a2a47]">Experience</h3>
                <div className="space-y-4">
                  <div className="border-l-4 border-[#d4a84f] pl-4">
                    <h4 className="font-semibold">Head of Data Science Committee</h4>
                    <p className="text-gray-600">CAT Reloaded • Oct 2024 - Present</p>
                    <p className="text-gray-700">
                      Leading a team of data scientists to develop machine learning models and data-driven solutions.
                    </p>
                  </div>
                  <div className="border-l-4 border-[#d4a84f] pl-4">
                    <h4 className="font-semibold">Head of Data Science commmitte</h4>
                    <p className="text-gray-600">IEEE Mansoura Computer Society Chapter • Nov 2024 - Present</p>
                    <p className="text-gray-700">
                      Organizing workshops and events to promote data science and machine learning in the community.
                    </p>
                  </div>
                  <div className="border-l-4 border-[#d4a84f] pl-4">
                    <h4 className="font-semibold">Data Analyst</h4>
                    <p className="text-gray-600">CIS Team MU • Dec 2023 - Present</p>
                    <p className="text-gray-700">
                      Performed statistical analysis and created dashboards for business intelligence.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 container">
          <h2 className="text-3xl font-bold tracking-tight mb-8 text-[#1a2a47]">Skills & Technologies</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-[#1a2a47]">Programming</h3>
              <div className="flex flex-wrap gap-2">
                <SkillBadge name="Python" level={95} />
                <SkillBadge name="SQL" level={80} />
                <SkillBadge name="Java" level={60} />
                <SkillBadge name="C++" level={80} />
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-[#1a2a47]">Data Processing</h3>
              <div className="flex flex-wrap gap-2">
                <SkillBadge name="Pandas" level={95} />
                <SkillBadge name="NumPy" level={95} />
              </div>
            </div>
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-[#1a2a47]">Visualization</h3>
              <div className="flex flex-wrap gap-2">
                <SkillBadge name="Matplotlib" level={90} />
                <SkillBadge name="Seaborn" level={90} />
                <SkillBadge name="Tableau" level={75} />
                <SkillBadge name="Power BI" level={75} />
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 bg-gradient-to-b from-[#f4f1ea] to-[#ebe6db]">
          <div className="container space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-[#1a2a47]">Featured Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ProjectCard
                title="Social Dilemma"
                description="Helped in making the website, and made the AI chatbot."
                tags={["Python", "LangChain", "OOP", "HTML", "CSS"]}
                image="/images/social dilemma.png?height=100&width=100"
                githubUrl="https://github.com/mhmdkardosha/chatbot-project"
                demoUrl="https://mhmdkardosha.github.io/DSP-Project--Social-Dilemma-/"
              />
            </div>
            <div className="flex justify-center mt-8">
              <Button variant="outline"
                size="lg"
                className="border-[#d4a84f] text-[#d4a84f] hover:bg-[#d4a84f]/10"
                onClick={() => handleExternalLink("https://www.kaggle.com/mhmdkardosha/code")}
              >
                View All Projects
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 container bg-[#f8f5f0] rounded-xl shadow-sm my-8">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl font-bold tracking-tight text-center text-[#1a2a47]">Get In Touch</h2>
            <p className="text-center text-gray-600 text-lg">
              Interested in working together or have a question? Feel free to reach out!
            </p>
            <ContactForm />
          </div>
        </section>
      </main>
      <footer className="border-t py-6 md:py-8 bg-[#1a2a47] text-white">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
          <div className="text-sm text-gray-300">
            © {new Date().getFullYear()} Data Scientist Portfolio. All rights reserved.
          </div>
          <div className="flex gap-4">
            <Button
              variant="ghost" size="icon"
              className="text-white hover:text-[#d4a84f] hover:bg-transparent"
              onClick={() => handleExternalLink("https://github.com/mhmdkardosha")}
            >
              <Github className="h-5 w-5" />
              <span className="sr-only">GitHub</span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="text-white hover:text-[#d4a84f] hover:bg-transparent" onClick={() => handleExternalLink("https://www.linkedin.com/in/mohamed-kardosha-4b8552248/")}
            >
              <Linkedin className="h-5 w-5" />
              <span className="sr-only">LinkedIn</span>
            </Button>            <Button
              variant="ghost"
              size="icon"
              onClick={() => handleExternalLink("https://www.kaggle.com/mhmdkardosha")}
              className="text-white hover:text-[#d4a84f] hover:bg-transparent flex items-center justify-center"
            ><Image
                src="/icons/kaggle.svg"
                alt="Kaggle"
                width={24}
                height={24}
                className="h-10 w-10 invert brightness-0 filter"
              />
              <span className="sr-only">Kaggle</span>
            </Button>
            <Button
              variant="ghost" size="icon"
              className="text-white hover:text-[#d4a84f] hover:bg-transparent"
              onClick={() => handleExternalLink("mailto:mohamedkardosha9@gmail.com")}
            >
              <Mail className="h-5 w-5" />
              <span className="sr-only">Email</span>
            </Button>
          </div>
        </div>
      </footer>
    </div>
  )
}

