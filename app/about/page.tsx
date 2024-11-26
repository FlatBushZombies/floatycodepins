'use client'

import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { cn } from '@/lib/utils'

import { usePathname } from 'next/navigation'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

import { Menu } from 'lucide-react'
import Link from 'next/link'
import { navItems } from '@/constants'



export default function AboutUs() {

  const pathname = usePathname();
  
  return (
    <>
          <section className="w-full bg-primary min-h-[5px] justify-between py-5 px-3">
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
          <Button variant="ghost"><Link href="/portfolio">Portfolio</Link></Button>
          <Button variant="ghost"><Link href="/contact">Contact</Link></Button>
              </div>
            </SheetContent>
          </Sheet>
    </section>
    <section className='black_container'>
        <h1 className='heading'>About Us</h1>
    </section>
    <section>
    <div className="min-h-screen bg-background text-foreground">
      <header className="bg-primary text-primary-foreground py-6 sticky top-0 z-10">
      </header>

      <main className="container mx-auto px-4 py-12">
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-3xl">About Us</CardTitle>
            <CardDescription>Innovating through software and data</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-lg mb-4">
              Floaty Code Pins is at the forefront of technological innovation, specializing in cutting-edge software development and advanced data analytics. Our team of expert developers and data scientists is dedicated to delivering high-quality, tailored solutions that meet the unique needs of our clients.
            </p>
            <p className="text-lg">
              Our mission is to empower businesses with technology-driven insights and robust software solutions that drive growth, efficiency, and success in the digital age.
            </p>
          </CardContent>
        </Card>

        <Tabs defaultValue="services" className="mb-12">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="services">Our Services</TabsTrigger>
            <TabsTrigger value="team">Our Team</TabsTrigger>
          </TabsList>
          <TabsContent value="services">
            <Card>
              <CardHeader>
                <CardTitle>Services We Offer</CardTitle>
                <CardDescription>Tailored solutions for your business needs</CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="software-dev">
                    <AccordionTrigger>Software Development</AccordionTrigger>
                    <AccordionContent>
                      We create custom software solutions designed to streamline your business processes and enhance productivity. Our expertise spans web applications, mobile apps, and enterprise software.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="data-analytics">
                    <AccordionTrigger>Data Analytics</AccordionTrigger>
                    <AccordionContent>
                      Our advanced data analysis and visualization services help you make informed decisions and uncover valuable insights. We specialize in big data processing, machine learning, and predictive analytics.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="cloud-solutions">
                    <AccordionTrigger>Cloud Solutions</AccordionTrigger>
                    <AccordionContent>
                      We offer comprehensive cloud migration and management services, helping you leverage the power of cloud computing for scalability, flexibility, and cost-efficiency.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="team">
            <Card>
              <CardHeader>
                <CardTitle>Meet Our Senior Developers</CardTitle>
                <CardDescription>The minds behind our innovations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="text-center">
                    <Image
                      src="/team/jim-bradley.png"
                      alt="Jane Doe"
                      width={45}
                      height={45}
                      className="rounded-full mx-auto mb-4"
                    />
                    <h3 className="text-xl font-semibold">Lackson Maphosa</h3>
                    <p className="text-muted-foreground mb-2">Software Architect</p>
                    <p className="text-sm">Lackson has  experience in designing scalable software architectures and leading development teams.</p>
                  </div>
                  <div className="text-center">
                    <Image
                      src="/team/jim-bradley.png"
                      alt="John Smith"
                      width={45}
                      height={45}
                      className="rounded-full mx-auto mb-4"
                    />
                    <h3 className="text-xl font-semibold">Brian Makanjira</h3>
                    <p className="text-muted-foreground mb-2">Web Developer</p>
                    <p className="text-sm">Brian leads our web initiatives and drives innovation in AI-powered solutions.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>

        <Card>
          <CardHeader>
            <CardTitle>Ready to Innovate?</CardTitle>
            <CardDescription>Let's discuss how we can help your business grow</CardDescription>
          </CardHeader>
          <CardContent className="flex justify-center">
            <Button size="lg">Contact Us</Button>
          </CardContent>
        </Card>
      </main>
    </div>
    </section>
    </>
  )
}
