import { Star } from "lucide-react"
import * as Lucide from "lucide-react";


export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      {/* Navigation Bar */}
      <nav className="bg-transparent fixed w-full z-50">
        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
          <div className="bg-teal-200 border-2 border-dashed rounded-xl w-16 h-16"></div>
          <ul className="flex space-x-4">
            <li><a href="#about" className="hover:underline text-teal-800 transition-colors duration-300">About</a></li>
            <li><a href="#restaurants" className="hover:underline text-teal-800 transition-colors duration-300">Restaurants</a></li>
            <li><a href="#decision" className="hover:underline text-teal-800 transition-colors duration-300">Decision</a></li>
          </ul>
        </div>
      </nav>

      {/* Main Content Section */}
      <main className="flex-grow container mx-auto px-4 py-24 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 text-teal-800">CHOOSING A RESTAURANT MADE EASIER</h1>
        <div className="flex space-x-2 mb-8">
          <Star className="w-6 h-6 text-teal-500" />
          <Star className="w-6 h-6 text-teal-500" />
          <Star className="w-6 h-6 text-teal-500" />
        </div>
        <button className="px-8 py-4 bg-teal-500 text-white hover:bg-teal-600 transition-colors duration-300">
          Get Started
        </button>
      </main>

      {/* Footer */}
      <footer className="bg-teal-100">
        <div className="container mx-auto px-4 py-6 text-center">
          <p className="text-teal-800">&copy; 2025 Restaurant Chooser. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}