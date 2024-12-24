'use client'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Send, Menu} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"


const ContactForm = () => {

  const [errors, setErrors] = useState<Record<string, string>>({});
  return (
    <>
        <section className="w-full bg-primary min-h-[5px] justify-end py-5 px-3">
            <Sheet>
            <div className="absolute top-4 right-4">
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden ">
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
              <Button variant="ghost"><Link href="/">Home</Link></Button>
                <Button variant="ghost"> <Link href="/about">About</Link></Button>
                <Button variant="ghost"><Link href="/portfolio">Portfolio</Link></Button>
              </div>
            </SheetContent>
          </Sheet>
    </section>
    <section className="black_container !min-h-[130px]" >
      <h1 className="heading">Contact Us!</h1>
    </section>
    <section>
    <form action="" className='contact-form'>
      <div>
        <label htmlFor="name" className='contact-form_label'> Name </label>
        <Input
        id="name"
        name="name"
        className="contact-form_input"
        required
        placeholder="John Doe"
        />
        { errors.title && <p className="contact-form_error">{errors.title}</p>}
      </div>
      <div>
        <label htmlFor="email" className='contact-form_label'> Email </label>
        <Input
        type="email"
        id="email"
        name="email"
        className="contact-form_input"
        required
        placeholder="janedoe@email.com"
        />
        { errors.email && <p className="contact-form_error">{errors.email}</p>}
      </div>
      <div>
        <label htmlFor="message" className='contact-form_label'> Message </label>
        <Textarea
        id="message"
        name="message"
        className="contact-form_textarea"
        required
        placeholder="What do you have in mind?"
        />
        { errors.message && <p className="contact-form_error">{errors.message}</p>}
      </div>
      <Button type="submit" className="contact-form_btn text-white">
        Send
        <Send className="size-6 ml-2"/>
      </Button>
    </form>
    </section>
    </>
  )
}

export default ContactForm