import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Component() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">Home</h1>
          <p className="text-xl text-muted-foreground max-w-[600px] mx-auto">
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 max-w-6xl mx-auto">
          <Card className="group relative overflow-hidden border-none">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-500/30 z-10" />
            <CardHeader className="relative z-20">
              <CardTitle className="text-2xl md:text-3xl">FCP</CardTitle>
            </CardHeader>
            <CardContent className="relative z-20 space-y-4">
              <div className="relative h-[300px] overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="iOS 18 developer preview showing new features and interfaces"
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-lg">
                
              </p>
            </CardContent>
            <CardFooter className="relative z-20">
              <Link href='/about'>
              <Button variant="secondary" className="group-hover:translate-x-1 transition-transform">
                About
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="group relative overflow-hidden border-none">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-purple-500/30 z-10" />
            <CardHeader className="relative z-20">
              <CardTitle className="text-2xl md:text-3xl">vision</CardTitle>
            </CardHeader>
            <CardContent className="relative z-20 space-y-4">
              <div className="relative h-[300px] overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="visionOS 2 spatial computing interface demonstration"
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-lg">
              </p>
            </CardContent>
            <CardFooter className="relative z-20">
              <Link href='/portfolio'>            <Button variant="secondary" className="group-hover:translate-x-1 transition-transform">
                Portfolio
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
              </Link>  
            </CardFooter>
          </Card>

          <Card className="group relative overflow-hidden border-none">
            <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-green-500/30 z-10" />
            <CardHeader className="relative z-20">
              <CardTitle className="text-2xl md:text-3xl">Company Policy</CardTitle>
            </CardHeader>
            <CardContent className="relative z-20 space-y-4">
              <div className="relative h-[300px] overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Development environment and tools interface"
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-lg">
              </p>
            </CardContent>
            <CardFooter className="relative z-20">
              <Link href='/contact'>
              <Button variant="secondary" className="group-hover:translate-x-1 transition-transform">
                Contact
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
              </Link>
            </CardFooter>
          </Card>

          <Card className="group relative overflow-hidden border-none">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-orange-500/30 z-10" />
            <CardHeader className="relative z-20">
              <CardTitle className="text-2xl md:text-3xl">Mission</CardTitle>
            </CardHeader>
            <CardContent className="relative z-20 space-y-4">
              <div className="relative h-[300px] overflow-hidden rounded-lg">
                <Image
                  src="/placeholder.svg?height=600&width=800"
                  alt="Documentation and API reference materials"
                  layout="fill"
                  objectFit="cover"
                  className="group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <p className="text-lg">
              </p>
            </CardContent>
            <CardFooter className="relative z-20">
              <Link href='/home'>
              <Button variant="secondary" className="group-hover:translate-x-1 transition-transform">
                Home
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
              </Link>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  )
}