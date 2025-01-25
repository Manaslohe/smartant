import { useForm } from 'react-hook-form'

const ContactForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm()

  const onSubmit = async (data) => {
    // Implement your form submission logic here
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div>
        <input
          {...register('name', { required: 'Name is required' })}
          className="w-full p-3 rounded border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          placeholder="Your Name"
        />
        {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
      </div>

      <div>
        <input
          {...register('email', { 
            required: 'Email is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Invalid email address'
            }
          })}
          className="w-full p-3 rounded border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          placeholder="Your Email"
        />
        {errors.email && <span className="text-red-500 text-sm">{errors.email.message}</span>}
      </div>

      <div>
        <textarea
          {...register('message', { required: 'Message is required' })}
          className="w-full p-3 rounded border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 h-32"
          placeholder="Your Message"
        ></textarea>
        {errors.message && <span className="text-red-500 text-sm">{errors.message.message}</span>}
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
      >
        Send Message
      </button>
    </form>
  )
}

export default ContactForm
