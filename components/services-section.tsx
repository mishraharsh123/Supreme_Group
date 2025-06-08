import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function ServicesSection() {
  const services = [
    {
      icon: "/assets/automotive-update.svg",
      title: "Automotive Updates",
      description: "Latest technology updates and software solutions for modern vehicles.",
      features: ["Software Updates", "System Diagnostics", "Performance Optimization"],
    },
    {
      icon: "/assets/passenger.svg",
      title: "Passenger Solutions",
      description: "Comprehensive passenger vehicle parts and maintenance services.",
      features: ["Quality Parts", "Expert Installation", "24/7 Support"],
    },
    {
      icon: "/assets/commercial.svg",
      title: "Commercial Fleet",
      description: "Specialized solutions for commercial vehicles and fleet management.",
      features: ["Fleet Management", "Bulk Orders", "Custom Solutions"],
    },
  ]

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Our Services</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive automotive solutions tailored to meet your specific needs. From individual components to
            complete fleet management.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-lg dark:hover:shadow-gray-800/25 transition-all duration-300 border-0 shadow-sm dark:bg-gray-800 dark:shadow-gray-800/10"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-16 h-16 mx-auto mb-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-xl group-hover:bg-blue-100 dark:group-hover:bg-blue-900/30 transition-colors">
                  <img
                    src={service.icon || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full dark:invert"
                  />
                </div>
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white">{service.title}</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                      <div className="w-1.5 h-1.5 bg-blue-600 dark:bg-blue-400 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-blue-600 group-hover:text-white dark:border-gray-600 dark:text-gray-300 dark:hover:bg-blue-600 dark:hover:text-white transition-colors"
                >
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
