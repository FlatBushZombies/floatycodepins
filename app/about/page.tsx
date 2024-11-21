'use client'

import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"

export default function AboutUs() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="bg-primary text-primary-foreground py-6 sticky top-0 z-10">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold"> <a href="/">Floaty Code Pins</a></h1>
        </div>
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

      <footer className="bg-muted py-6 mt-12">
        <div className="container mx-auto px-4 text-center text-muted-foreground">
          <p>&copy; 2025 Floaty Code Pins. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
