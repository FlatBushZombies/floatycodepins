import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export default function Home() {
  return (
    <>
    <section className='black_container'>
          <h1 className='heading'>Elevating Your Software Experience</h1>
    </section>
    <section className="section_container">

      <div className="min-h-screen bg-background">
            <main className="container mx-auto px-4 py-12">
              <div className="text-center mb-16">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tighter mb-4">Floaty Code Pins</h1>
                <p className="text-xl text-muted-foreground max-w-[600px] mx-auto">
                  We design and build softwares for solo entreprenuers <br />
                  and large corporations
                </p>
              </div>
      
              <div className="grid gap-6 md:grid-cols-2 max-w-6xl mx-auto">
                <Link href='/about' className="cursor-pointer">
              <Card className="group relative overflow-hidden border-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-purple-500/30 z-10" />
                  <CardHeader className="relative z-20">
                    <CardTitle className="text-2xl md:text-3xl">About</CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-20 space-y-4">
                    <div className="relative h-[300px] overflow-hidden rounded-lg">
                      <Image
                        src="/icons/about.png"
                        alt="visionOS 2 spatial computing interface demonstration"
                        layout="fill"
                        objectFit="cover"
                        className="group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <p className="text-lg">
                      Build immersive spatial computing experiences with us.
                    </p>
                  </CardContent>
                  <CardFooter className="relative z-20">
                    <Button variant="secondary" className="group-hover:translate-x-1 transition-transform">
                      Learn more
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </CardFooter>
                </Card>
                </Link>
                <Link href='/portfolio' className="cursor-pointer">
                <Card className="group relative overflow-hidden border-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-green-500/30 z-10" />
                  <CardHeader className="relative z-20">
                    <CardTitle className="text-2xl md:text-3xl">Projects</CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-20 space-y-4">
                    <div className="relative h-[300px] overflow-hidden rounded-lg">
                      <Image
                        src="/icons/folder.png"
                        alt="portfolio"
                        layout="fill"
                        objectFit="cover"
                        className="group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <p className="text-lg">
                      Build amazing apps for your business
                    </p>
                  </CardContent>
                  <CardFooter className="relative z-20">
                    <Button variant="secondary" className="group-hover:translate-x-1 transition-transform">
                      View
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </CardFooter>
                </Card>
                </Link>
                <Link href='/home' className="cursor-pointer">
                <Card className="group relative overflow-hidden border-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-blue-500/30 z-10" />
                  <CardHeader className="relative z-20">
                    <CardTitle className="text-2xl md:text-3xl">Services</CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-20 space-y-4">
                    <div className="relative h-[300px] overflow-hidden rounded-lg">
                      <Image
                        src="/icons/home.png"
                        alt="home"
                        layout="fill"
                        objectFit="cover"
                        className="group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <p className="text-lg">
                      Create powerful experiences with new frameworks and enhanced capabilities
                    </p>
                  </CardContent>
                  <CardFooter className="relative z-20">
                    <Button variant="secondary" className="group-hover:translate-x-1 transition-transform">
                      Learn more
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </CardFooter>
                </Card>
                </Link>
                <Link href='/contact' className="cursor-pointer">
                <Card className="group relative overflow-hidden border-none">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-orange-500/30 z-10" />
                  <CardHeader className="relative z-20">
                    <CardTitle className="text-2xl md:text-3xl">Contact</CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-20 space-y-4">
                    <div className="relative h-[300px] overflow-hidden rounded-lg">
                      <Image
                        src="/icons/contact.png"
                        alt="Documentation and API reference materials"
                        layout="fill"
                        objectFit="cover"
                        className="group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <p className="text-lg">
                      Explore comprehensive guides, tutorials, and API references
                    </p>
                  </CardContent>
                  <CardFooter className="relative z-20">
                    <Button variant="secondary" className="group-hover:translate-x-1 transition-transform">
                      Browse docs
                      <ArrowRight className="h-4 w-4 ml-2" />
                    </Button>
                  </CardFooter>
                </Card>
                </Link>
              </div>
            </main>
          </div>
          <div className="text-center space-y-1">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="inline-block bg-gradient-to-r from-cyan-500 via-primary to-purple-500 bg-clip-text text-transparent">
                Scale  Faster with
              </span>
              <br />
              Next Generation Tech
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-gray-400">
              Build scalable applications with cutting-edge technology. Deploy faster, scale smarter, and innovate better.
            </p>
            <div className="flex justify-center gap-4">
            <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/10">
                Get Started
              </Button>
              <Button size="lg" variant="outline" className="border-primary/20 hover:bg-primary/10">
                View Portfolio
              </Button>
            </div>
          </div>

        {/* Gradient orbs */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute left-1/4 top-1/4 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/30 rounded-full blur-3xl" />
          <div className="absolute right-1/4 bottom-1/4 translate-x-1/2 translate-y-1/2 w-96 h-96 bg-cyan-500/30 rounded-full blur-3xl" />
        </div>

    </section>
  </>
  )
}