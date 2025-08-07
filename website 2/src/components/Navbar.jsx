import React from "react";

const Navbar = () => {
  // Smooth scroll helper
  const smoothScrollTo = (id, e) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 bg-white/75 backdrop-blur-md border-b border-gray-200 shadow-sm"
      style={{ width: "100vw" }}
    >
      <div className="max-w-9xl mx-auto px-10 py-5 flex items-center justify-between font-sans">
        <div className="text-3xl font-extrabold tracking-tight text-gray-900 select-none">
          ☕ CoffeeQuality+
        </div>

        <ul className="flex space-x-12 text-gray-700 font-medium text-lg">
          {["Home", "Analysis", "Predict", "Contact"].map((label) => {
            if (label === "Home") {
              return (
                <li key={label}>
                  <a
                    href="/home"
                    onClick={(e) => smoothScrollTo("home", e)}
                    className="relative inline-block px-1 pb-1 transition-colors duration-300 ease-in-out hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 group"
                  >
                    {label}
                    <span
                      className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 ease-in-out group-hover:w-full"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              );
            }

            if (label === "Analysis") {
              return (
                <li key={label}>
                  <a
                    href="/about"
                    onClick={(e) => smoothScrollTo("about-section", e)}
                    className="relative inline-block px-1 pb-1 transition-colors duration-300 ease-in-out hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 group"
                  >
                    {label}
                    <span
                      className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 ease-in-out group-hover:w-full"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              );
            }

            if (label === "Predict") {
              return (
                <li key={label}>
                  <a
                    href="/predict-form"
                    onClick={(e) => smoothScrollTo("predict-form", e)}
                    className="relative inline-block px-1 pb-1 transition-colors duration-300 ease-in-out hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 group"
                  >
                    {label}
                    <span
                      className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 ease-in-out group-hover:w-full"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              );
            }

            // Default case: Contact
            return (
              <li key={label}>
                <a
                  href={`/${label.toLowerCase()}`}
                  className="relative inline-block px-1 pb-1 transition-colors duration-300 ease-in-out hover:text-blue-600 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 group"
                >
                  {label}
                  <span
                    className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 ease-in-out group-hover:w-full"
                    aria-hidden="true"
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
