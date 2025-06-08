import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4 transition-colors">
      <div className="max-w-md w-full text-center">
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-blue-600 dark:bg-blue-500 rounded-full flex items-center justify-center mr-2">
              <span className="text-white font-bold text-sm">S</span>
            </div>
            <div className="text-xl font-bold">
              <span className="text-blue-600 dark:text-blue-400">SUPREME</span>
              <span className="text-gray-600 dark:text-gray-300 ml-1 text-sm">GROUP</span>
            </div>
          </div>
        </div>

        {/* 404 Content */}
        <div className="space-y-6">
          <h1 className="text-8xl font-bold text-blue-600 dark:text-blue-400">404</h1>
          <p className="text-gray-600 dark:text-gray-300 text-lg">The page you have requested doesn't exist.</p>
          <Button asChild className="bg-cyan-400 hover:bg-cyan-500 dark:bg-cyan-500 dark:hover:bg-cyan-600 text-white">
            <Link href="/">Go to Homepage</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
