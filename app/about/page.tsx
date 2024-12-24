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
          <div className="absolute top-4 right-4">
      
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            </div>
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
        <div className='container'>
          <div className='relative flex md:flex-wrap flex-nowrap border-2 border-s3 rounded-7xl md:overflow-hiddenmax-md:flex-col
          feature-after md:g7 '>
        <Card className="mb-12">
          <CardHeader>
            <CardTitle className="text-3xl">About Us</CardTitle>
            <CardDescription>Modernising business through futuristic software</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-lg mb-4">
              A softare development agency owned by Developers specialising in Web Development, Automation, Data Science, Mobile App Development, web3.0 Development
            </p>
            <p className="text-lg">
              At Floaty Code Pins, we are focused on helping you evolve your business, ideas and visions 
              to reach your targeted audience through the creation of engaging, compleling and high quality applications from scratch.
            </p>
          </CardContent>
        </Card>
        </div>
        </div>
        <section>
          <div className='container'>
            <div className='max-w-960 border-2 border-red-500 mt-6'>
              <h1>Meet Our Team</h1>
            <Tabs defaultValue="services" className="mb-12">
          <TabsList className='relative z-4 mx-auto flex w-[375px] rounded-3xl border-[3px]border-s4/25 bg-s1/50 p-2 backdrop-blur-[6px]
            max-w-md:w-[310px]'>
            <TabsTrigger value="services" className='tabs-head_btn z-2'>Our Services</TabsTrigger>
            <TabsTrigger value="team" className='tabs-head_btn'>Our Team</TabsTrigger>
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
            </div>
          </div>

        </section>

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
