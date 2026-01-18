import { useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const testimonials = [
  {
    id: 1,
    content: "Adam's vision transformed our ideas into an architectural masterpiece. His attention to detail and commitment to sustainability exceeded all expectations. Our home is not just beautiful—it's a testament to thoughtful design.",
    author: 'Michael Chen',
    position: 'CEO, Chen Industries',
    project: 'The Aurora Residence',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&q=80',
    rating: 5,
  },
  {
    id: 2,
    content: "Working with Adam was an extraordinary experience. He understood our brand identity and created a headquarters that inspires our team daily. The building has become a landmark that defines our corporate vision.",
    author: 'Sarah Williams',
    position: 'Founder, TechVentures',
    project: 'Nexus Tower',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&q=80',
    rating: 5,
  },
  {
    id: 3,
    content: "The cultural center Adam designed for our city has become the heart of our community. His ability to blend traditional elements with contemporary design is unmatched. It's a space that brings people together.",
    author: 'Takeshi Yamamoto',
    position: 'Director, Tokyo Arts Foundation',
    project: 'Harmony Cultural Center',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&q=80',
    rating: 5,
  },
  {
    id: 4,
    content: "Adam created a desert retreat that defies expectations. The passive cooling systems and water conservation features work flawlessly while maintaining absolute luxury. A true feat of sustainable architecture.",
    author: 'Sheikh Al-Rashid',
    position: 'Royal Family of Dubai',
    project: 'Desert Oasis Villa',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&q=80',
    rating: 5,
  },
  {
    id: 5,
    content: "Our zero-carbon office has revolutionized how our employees work. Adam's innovative approach to sustainable design has not only reduced our environmental impact but increased productivity by 40%.",
    author: 'Emma Larsen',
    position: 'CEO, GreenTech Nordic',
    project: 'The Greenhouse',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&q=80',
    rating: 5,
  },
]

const Testimonials = () => {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, margin: '-100px' })
  const [swiper, setSwiper] = useState<any>(null)

  return (
    <section className="section-padding relative overflow-hidden bg-dark-800/30" ref={containerRef}>
      {/* Background Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-radial-gold opacity-20" />
      
      <div className="container-custom relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="text-gold-500 text-sm tracking-widest uppercase font-medium">
            Testimonials
          </span>
          <h2 className="heading-lg mt-4 mb-6">
            <span className="text-white">Client </span>
            <span className="text-gradient-gold">Stories</span>
          </h2>
          <p className="body-text">
            Hear from the visionaries who trusted us to bring their architectural 
            dreams to life.
          </p>
        </motion.div>

        {/* Testimonials Slider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <Swiper
            modules={[Autoplay, Pagination, Navigation]}
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-pagination-bullet !bg-gold-500/30 !opacity-100',
              bulletActiveClass: '!bg-gold-500',
            }}
            onSwiper={setSwiper}
            breakpoints={{
              768: {
                slidesPerView: 1.5,
              },
              1024: {
                slidesPerView: 2,
              },
            }}
            className="pb-16"
          >
            {testimonials.map((testimonial) => (
              <SwiperSlide key={testimonial.id}>
                <motion.div
                  whileHover={{ y: -5 }}
                  className="glass-card p-8 h-full relative overflow-hidden group"
                >
                  {/* Quote icon */}
                  <div className="absolute top-6 right-6">
                    <Quote className="w-12 h-12 text-gold-500/10 group-hover:text-gold-500/20 transition-colors" />
                  </div>

                  {/* Rating */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold-500 text-gold-500" />
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-gray-300 text-lg leading-relaxed mb-8 italic">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-gold-500/30">
                      <img
                        src={testimonial.image}
                        alt={testimonial.author}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="text-white font-medium">{testimonial.author}</p>
                      <p className="text-gold-500 text-sm">{testimonial.position}</p>
                    </div>
                  </div>

                  {/* Project tag */}
                  <div className="absolute bottom-6 right-6">
                    <span className="text-xs text-gold-500/60 px-3 py-1 rounded-full bg-gold-500/10">
                      {testimonial.project}
                    </span>
                  </div>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => swiper?.slidePrev()}
              className="w-12 h-12 rounded-full border border-gold-500/30 flex items-center justify-center text-gold-500 hover:bg-gold-500 hover:text-dark-900 transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => swiper?.slideNext()}
              className="w-12 h-12 rounded-full border border-gold-500/30 flex items-center justify-center text-gold-500 hover:bg-gold-500 hover:text-dark-900 transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials
