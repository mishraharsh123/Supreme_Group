import { Card, CardContent } from "@/components/ui/card"
import { CheckCircle, Award, Users, Zap } from "lucide-react"

export default function AboutSection() {
  const achievements = [
    {
      icon: <Award className="w-8 h-8 text-blue-600" />,
      title: "Industry Leader",
      description: "15+ years of excellence in automotive solutions",
    },
    {
      icon: <Users className="w-8 h-8 text-blue-600" />,
      title: "Expert Team",
      description: "200+ certified automotive professionals",
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-blue-600" />,
      title: "Quality Assured",
      description: "ISO certified manufacturing processes",
    },
    {
      icon: <Zap className="w-8 h-8 text-blue-600" />,
      title: "Innovation",
      description: "Cutting-edge technology and R&D",
    },
  ]

  const values = [
    "Quality Excellence",
    "Customer Satisfaction",
    "Innovation Leadership",
    "Sustainable Practices",
    "Global Reach",
    "Continuous Improvement",
  ]

  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">About Supreme Group</h2>
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                For over 15 years, Supreme Group has been at the forefront of automotive innovation, delivering premium
                quality parts and solutions to customers worldwide. Our commitment to excellence drives everything we
                do.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We combine traditional craftsmanship with cutting-edge technology to create products that exceed
                expectations. Our team of experts works tirelessly to ensure every component meets the highest standards
                of quality and performance.
              </p>
            </div>

            {/* Values */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">Our Values</h3>
              <div className="grid grid-cols-2 gap-3">
                {values.map((value, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <CheckCircle className="w-5 h-5 text-green-500 dark:text-green-400 flex-shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{value}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Achievements Grid */}
          <div className="grid grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <Card
                key={index}
                className="text-center p-6 border-0 shadow-sm dark:bg-gray-800 dark:shadow-gray-800/10 hover:shadow-md dark:hover:shadow-gray-800/25 transition-shadow"
              >
                <CardContent className="p-0 space-y-4">
                  <div className="flex justify-center">{achievement.icon}</div>
                  <div>
                    <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{achievement.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">{achievement.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 bg-white dark:bg-gray-800 rounded-2xl p-8 lg:p-12 shadow-sm dark:shadow-gray-800/10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">500+</div>
              <div className="text-gray-600 dark:text-gray-300">Products Available</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">50K+</div>
              <div className="text-gray-600 dark:text-gray-300">Happy Customers</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">25+</div>
              <div className="text-gray-600 dark:text-gray-300">Countries Served</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">99%</div>
              <div className="text-gray-600 dark:text-gray-300">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
