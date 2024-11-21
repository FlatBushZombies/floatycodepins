'use client'
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Send } from "lucide-react";

const ContactForm = () => {

  const [errors, setErrors] = useState<Record<string, string>>({});
  return (
    <>
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
        <label htmlFor="name" className='contact-form_label'> Email </label>
        <Input
        type="email"
        id="email"
        name="email"
        className="contact-form_input"
        required
        placeholder="janedoe@email.com"
        />
        { errors.title && <p className="contact-form_error">{errors.title}</p>}
      </div>
      <div>
        <label htmlFor="name" className='contact-form_label'> Message </label>
        <Textarea
        id="message"
        name="message"
        className="contact-form_textarea"
        required
        placeholder="What do you have in mind?"
        />
        { errors.title && <p className="contact-form_error">{errors.title}</p>}
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