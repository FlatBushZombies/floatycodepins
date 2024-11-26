'use client'

import { useState, useEffect, ReactNode } from 'react'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Github, ExternalLink, Menu, Code, CodepenIcon } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import Link from 'next/link'

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with real-time inventory management.",
    image: "https://www.flaticon.com/free-icon/project_4358529",
    tags: ["React", "Node.js", "MongoDB"],
    githubLink: "#",
    liveLink: "#"
  },
  {
    title: "Data Visualization Dashboard",
    description: "Interactive dashboard for visualizing complex datasets.",
    image: "https://www.flaticon.com/free-icon/project_4358529",
    tags: ["D3.js", "React", "Python"],
    githubLink: "#",
    liveLink: "#"
  },
  {
    title: "AI-powered Chatbot",
    description: "A chatbot using natural language processing for customer support.",
    image: "https://www.flaticon.com/free-icon/project_4358529",
    tags: ["Python", "TensorFlow", "Flask"],
    githubLink: "#",
    liveLink: "#"
  },
  {
    title: "Mobile Fitness App",
    description: "Cross-platform mobile app for tracking workouts and nutrition.",
    image: "https://www.flaticon.com/free-icon/project_4358529",
    tags: ["React Native", "Firebase", "Redux"],
    githubLink: "#",
    liveLink: "#"
  }
]

interface FloatyProps {
    children: ReactNode;
    delay?: number;
}

const FloatingCodePin = ({ children, delay = 0 }: FloatyProps) => {
  return (
    <div 
      className="absolute animate-float text-white"
      style={{
        animation: `float 3s ease-in-out infinite ${delay}s`,
      }}
    >
      <div className="flex items-center gap-2 bg-primary/10 backdrop-blur-sm rounded-full px-4 py-2">
        <Code className="w-4 h-4" />
        <span className="text-sm font-medium">{children}</span>
      </div>
    </div>
  )
}

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("all")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const filteredProjects = activeTab === "all" 
    ? projects 
    : projects.filter(project => project.tags.includes(activeTab))

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="bg-primary text-primary-foreground py-6 sticky top-0 z-10">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <div className="relative">
            <h1 className="heading"><a href="/">Portfolio </a></h1>
            {mounted && (
              <>
                <FloatingCodePin delay={0}>Code Pins</FloatingCodePin>
                <div className="absolute -top-4 -right-12 text-white">
                  <FloatingCodePin delay={1.5}>Tech</FloatingCodePin>
                </div>
                <div className="absolute top-8 -right-8 text-white">
                  <FloatingCodePin delay={0.8}>Innovation</FloatingCodePin>
                </div>
              </>
            )}
          </div>
          <nav className="hidden md:flex space-x-4">
          <Button variant="ghost"> <Link href="/">Home</Link></Button>
          <Button variant="ghost"><Link href="/about">About</Link></Button>
          <Button variant="ghost"><Link href="/contact">Contact</Link></Button>
          </nav>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>
                <Image
                  src="/logo-nobg.png"
                  alt='logo'
                  width={35}
                  height={35}
                  className='object-contain'/>
                  Floaty Code Pins &copy;
                </SheetTitle>
              </SheetHeader>
              <div className="grid gap-4 py-4">
              <Button variant="ghost"> <Link href="/">Home</Link></Button>
          <Button variant="ghost"><Link href="/about">About</Link></Button>
          <Button variant="ghost"><Link href="/contact">Contact</Link></Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <style jsx global>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>

      <main className="container mx-auto px-4 py-12">
        <section className="mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="text-3xl">Our  Portfolio</CardTitle>
              <CardDescription>Showcasing my journey in software development</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row items-center gap-6">
                <Image
                  src="/logo-nobg.png"
                  alt="Profile"
                  width={150}
                  height={150}
                  className="rounded-full"
                />
                <div>
                  <p className="text-lg mb-4">
                    We're passionate full-stack developer with expertise in building scalable web applications and data-driven solutions. With a background in computer science and years of industry experience, we bring creativity and technical prowess to every project.
                  </p>
                  <p className="text-lg">
                    Our portfolio showcases a range of projects that demonstrate our skills in front-end and back-end development, as well as my ability to work with cutting-edge technologies.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section>
          <h2 className="text-3xl font-bold mb-6">My Projects</h2>
          <Tabs defaultValue="all" className="mb-6">
            <TabsList>
              <TabsTrigger value="all" onClick={() => setActiveTab("all")}>All</TabsTrigger>
              <TabsTrigger value="React" onClick={() => setActiveTab("React")}>React</TabsTrigger>
              <TabsTrigger value="Python" onClick={() => setActiveTab("Python")}>Python</TabsTrigger>
              <TabsTrigger value="Node.js" onClick={() => setActiveTab("Node.js")}>Node.js</TabsTrigger>
            </TabsList>
          </Tabs>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <Card key={index} className="group hover:shadow-lg transition-shadow duration-200">
                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="relative h-48 mb-4 bg-primary/5 rounded-md flex items-center justify-center group-hover:bg-primary/10 transition-colors duration-200">
                    <CodepenIcon className="w-16 h-16 text-primary/40 group-hover:text-primary/60 transition-colors duration-200" />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary">{tag}</Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" size="sm">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}