import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function ProductsSection() {
  const products = [
    {
      icon: "/assets/exterior.svg",
      title: "Exterior Components",
      description: "High-quality exterior parts for enhanced vehicle aesthetics and protection.",
      category: "Exterior",
      price: "From $299",
      features: ["Weather Resistant", "Easy Installation", "2-Year Warranty"],
    },
    {
      icon: "/assets/cabin.svg",
      title: "Interior Systems",
      description: "Premium interior solutions for comfort and luxury driving experience.",
      category: "Interior",
      price: "From $199",
      features: ["Premium Materials", "Custom Fit", "Ergonomic Design"],
    },
    {
      icon: "/assets/front.svg",
      title: "Front-End Solutions",
      description: "Advanced front-end systems for optimal vehicle performance and safety.",
      category: "Performance",
      price: "From $499",
      features: ["High Performance", "Safety Certified", "Professional Grade"],
    },
    {
      icon: "/assets/trunk.svg",
      title: "Storage Systems",
      description: "Innovative storage solutions to maximize your vehicle's cargo capacity.",
      category: "Storage",
      price: "From $149",
      features: ["Space Efficient", "Durable Build", "Quick Access"],
    },
    {
      icon: "/assets/frame.svg",
      title: "Structural Components",
      description: "Robust structural parts ensuring vehicle integrity and longevity.",
      category: "Structure",
      price: "From $399",
      features: ["Heavy Duty", "Precision Fit", "Corrosion Resistant"],
    },
    {
      icon: "/assets/automotive-update.svg",
      title: "Tech Upgrades",
      description: "Latest automotive technology upgrades for modern vehicle systems.",
      category: "Technology",
      price: "From $599",
      features: ["Latest Tech", "Easy Integration", "Future Ready"],
    },
  ]

  return (
    <section id="products" className="py-20 bg-white dark:bg-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Products</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Discover our extensive range of premium automotive products designed to enhance your vehicle's performance,
            comfort, and style.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl dark:hover:shadow-gray-900/25 transition-all duration-300 border-0 shadow-sm dark:bg-gray-900 dark:shadow-gray-900/10 overflow-hidden"
            >
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-50 to-gray-50 dark:from-gray-800 dark:to-gray-700 p-8 text-center">
                  <img
                    src={product.icon || "/placeholder.svg"}
                    alt={product.title}
                    className="w-16 h-16 mx-auto mb-4 dark:invert"
                  />
                  <Badge variant="secondary" className="mb-2 dark:bg-gray-700 dark:text-gray-300">
                    {product.category}
                  </Badge>
                </div>
              </div>

              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {product.title}
                </CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">{product.description}</CardDescription>
              </CardHeader>

              <CardContent className="pt-0">
                <div className="space-y-4">
                  <ul className="space-y-2">
                    {product.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                        <div className="w-1.5 h-1.5 bg-green-500 dark:bg-green-400 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-gray-700">
                    <span className="text-lg font-bold text-blue-600 dark:text-blue-400">{product.price}</span>
                    <Button size="sm" className="bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700">
                      View Details
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white"
          >
            View All Products
          </Button>
        </div>
      </div>
    </section>
  )
}
