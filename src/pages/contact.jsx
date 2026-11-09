
import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [success, setSuccess] = useState(false)

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })

    setSuccess(false)
  }

  function handleSubmit(e) {
    e.preventDefault()

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      alert('Please fill all fields!')
      return
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailPattern.test(formData.email)) {
      alert('Please enter a valid email address!')
      return
    }

    setSuccess(true)

    setFormData({
      name: '',
      email: '',
      message: '',
    })
  }

  return (
    <div className="min-h-screen bg-slate-950 px-4 py-12 text-white">
      <div className="mx-auto max-w-xl rounded-2xl bg-slate-900 p-8 shadow-xl">

        <h1 className="mb-3 text-center text-3xl font-bold text-blue-400">
          Contact Us
        </h1>

        <p className="mb-8 text-center text-slate-300">
          Send us your message.
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">

          <div>
            <label className="mb-2 block">Your Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              className="w-full rounded-lg border border-slate-700 bg-slate-800 p-3 outline-none focus:border-blue-400"
            />
          </div>

          <div>
            <label className="mb-2 block">Your Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full rounded-lg border border-slate-700 bg-slate-800 p-3 outline-none focus:border-blue-400"
            />
          </div>

          <div>
            <label className="mb-2 block">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message"
              rows="4"
              className="w-full rounded-lg border border-slate-700 bg-slate-800 p-3 outline-none focus:border-blue-400"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 p-3 font-semibold hover:bg-blue-500"
          >
            Send Message
          </button>

        </form>

        {success && (
          <p className="mt-5 text-center text-green-400">
            Message submitted successfully!
          </p>
        )}

      </div>
    </div>
  )
}

export default Contact
