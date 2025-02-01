import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail, MessageSquare, AlertCircle, CheckCircle2 } from 'lucide-react';
import emailjs from '@emailjs/browser';
import content from '../content/portfolio.json';

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formState, setFormState] = useState({
    from_name: '',
    from_email: '',
    message: ''
  });
  const [status, setStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({
    type: null,
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: '' });

    try {
      const result = await emailjs.sendForm(
        'service_1gzobdz', // Replace with your EmailJS service ID
        'template_dli8jka', // Replace with your EmailJS template ID
        formRef.current!,
        'Lf-vhr43aOcdKMx15' // Replace with your EmailJS public key
      );

      if (result.text === 'OK') {
        setStatus({
          type: 'success',
          message: 'Thank you! Your message has been sent successfully.'
        });
        setFormState({ from_name: '', from_email: '', message: '' });
      }
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Sorry, something went wrong. Please try again later.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-white text-center mb-16">
            Get in Touch
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">Contact Info</h3>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-blue-400" />
                  <a href={`mailto:${content.personal.contact.email}`} className="text-gray-300 hover:text-blue-400">
                    {content.personal.contact.email}
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <Github className="w-6 h-6 text-blue-400" />
                  <a href={`https://${content.personal.contact.github}`} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400">
                    {content.personal.contact.github}
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <Linkedin className="w-6 h-6 text-blue-400" />
                  <a href={`https://${content.personal.contact.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-blue-400">
                    {content.personal.contact.linkedin}
                  </a>
                </div>
              </div>
            </div>

            <div>
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                {status.type && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-lg flex items-center space-x-2 ${
                      status.type === 'success' ? 'bg-green-900/50 text-green-200' : 'bg-red-900/50 text-red-200'
                    }`}
                  >
                    {status.type === 'success' ? (
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                    ) : (
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                    )}
                    <span>{status.message}</span>
                  </motion.div>
                )}

                <div>
                  <label htmlFor="from_name" className="block text-gray-300 mb-2">Name</label>
                  <input
                    type="text"
                    id="from_name"
                    name="from_name"
                    value={formState.from_name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-400"
                    aria-label="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="from_email" className="block text-gray-300 mb-2">Email</label>
                  <input
                    type="email"
                    id="from_email"
                    name="from_email"
                    value={formState.from_email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-400"
                    aria-label="Your email"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formState.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-400"
                    aria-label="Your message"
                  />
                </div>

                {/* Hidden fields for EmailJS template */}
                <input type="hidden" name="to_email" value={content.personal.contact.email} />

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-3 bg-blue-600 text-white rounded-lg font-semibold transition-colors flex items-center justify-center space-x-2 ${
                    isSubmitting ? 'opacity-75 cursor-not-allowed' : 'hover:bg-blue-700'
                  }`}
                >
                  <MessageSquare className="w-5 h-5" />
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;