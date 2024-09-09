import { useState,useRef } from 'react' 
import { motion } from 'framer-motion'
import { styles } from '../styles'
import emailjs from '@emailjs/browser'
import {  SectionWrapper } from '../wrapper'
import { slideIn } from '../utils/motion'

const Contact = () => {
  const formRef = useRef()
  const [ form, setForm ] = useState({
    name:'',
    email:'',
    message:''
  })
  const [ sending, setSending ] = useState(false);

  const handleChange = (event) => {
    const { name,value } = event.target
    setForm({
      ...form,
      [name]:[value]
    })
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    setSending(true)
    emailjs.send('service_ceminou','template_2jxjt99',
      {
        from_name: form.name,
        to_name:'Davis',
        from_email: form.email,
        to_email:'itsdavismuchiri21@gmail.com',
        message: form.message
      },
      'Y9dN7yrH_0zuA47vC',)
      .then(() => {
        setSending(false)
        alert('Message sent successfully')
        setForm({
          name:'',
          email:'',
          message:''
        })
      },(error)=>{
        setSending(false)
        // console.log(error);
        alert('An error occurred, Please try again later')
      })
  } 

  return (
    <div
      className="xl:mt-12 xl:flex-row flex-col-reverse gap-10 overflow-hidden"
    >
      <motion.div
        variants={slideIn('right','tween',0.2,1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <h3 className={styles.sectionHeadText}>Contact</h3>
        <p className={styles.sectionSubText}>Get in touch</p>

        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="flex flex-col gap-8 mt-12"        
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Name</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder='Your Name'
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Email</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder='Your Email'
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Message</span>
            <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder='Your Message'
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold rounded-xl"
          >
            {sending ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact,"contact")