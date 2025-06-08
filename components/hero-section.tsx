import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"

export default function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-20 lg:py-32 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Premium
                <span className="text-blue-600 dark:text-blue-400 block">Automotive</span>
                Solutions
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed">
                Leading provider of high-quality automotive parts and services. We deliver excellence in every
                component, ensuring your vehicle performs at its best.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Explore Products
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" size="lg" className="group">
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Watch Demo
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200 dark:border-gray-700">
              <div>
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">500+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Products</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">50K+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Customers</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">15+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">Years</div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative bg-gradient-to-br from-blue-100 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8 lg:p-12">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-6">
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                    <img src="/assets/exterior.svg" alt="Exterior" className="w-12 h-12 mb-4 dark:invert" />
                    <h3 className="font-semibold text-gray-900 dark:text-white">Exterior Parts</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Premium quality exterior components</p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                    <img src="/assets/cabin.svg" alt="Cabin" className="w-12 h-12 mb-4 dark:invert" />
                    <h3 className="font-semibold text-gray-900 dark:text-white">Interior Solutions</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Comfort and luxury interiors</p>
                  </div>
                </div>
                <div className="space-y-6 mt-8">
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                    <img src="/assets/front.svg" alt="Front" className="w-12 h-12 mb-4 dark:invert" />
                    <h3 className="font-semibold text-gray-900 dark:text-white">Front Systems</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Advanced front-end solutions</p>
                  </div>
                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                    <img src="/assets/trunk.svg" alt="Trunk" className="w-12 h-12 mb-4 dark:invert" />
                    <h3 className="font-semibold text-gray-900 dark:text-white">Storage Solutions</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">Efficient storage systems</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-600 rounded-full opacity-10"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-blue-400 rounded-full opacity-20"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
