export default function Footer() {
  return (
    <footer className="w-full bg-gradient-to-br from-[#4B2E2B] to-[#1F1B18] text-white py-4 mt-1">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between">
        <p className="text-sm">&copy; {new Date().getFullYear()} CoffeeQuality + All rights reserved.</p>
        <div className="flex space-x-6 mt-3 sm:mt-0">
          <a href="/about" className="text-sm hover:text-yellow-300 transition">
            About
          </a>
          <a href="/predict" className="text-sm hover:text-yellow-300 transition">
            Predict
          </a>
          <a href="/contact" className="text-sm hover:text-yellow-300 transition">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}
