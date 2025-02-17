"use client";

import { ShoppingCart, Heart, Search, Zap, ArrowRight, Star, TrendingUp, ShieldCheck, Menu, ChevronDown, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import Footer from "./components/Footer";

export default function Home() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <main className="min-h-screen">
      {/* Announcement Bar */}
      <div className="bg-blue-50 text-center py-2 text-xs sm:text-sm text-blue-800 animate-fade-in-down px-4">
        <span className="hidden sm:inline">⚡ Free shipping on orders over ₹2000 | </span>
        Get 15% off on your first purchase with code FIRST15
      </div>

      {/* Navigation */}
      <nav className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Mobile Menu Button */}
            <button 
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <Menu className="w-6 h-6 text-gray-600" />
            </button>

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 group">
              <Zap className="h-6 w-6 sm:h-8 sm:w-8 text-blue-600 group-hover:rotate-12 transition-transform duration-300" />
              <span className="text-xl sm:text-2xl font-bold text-gray-900">StridePro</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <div className="relative group">
                <button className="flex items-center gap-2 text-gray-700 hover:text-blue-600 font-medium py-2">
                  <Menu className="w-5 h-5" />
                  Categories
                  <ChevronDown className="w-4 h-4 group-hover:rotate-180 transition-transform duration-300" />
                </button>
                <div className="absolute top-full left-0 w-64 bg-white shadow-lg rounded-lg py-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  {mainCategories.map((category) => (
                    <a
                      key={category.name}
                      href="#"
                      className="flex items-center gap-3 px-4 py-2 hover:bg-blue-50 transition-colors"
                    >
                      {category.icon}
                      <div>
                        <div className="font-medium text-gray-900">{category.name}</div>
                        <div className="text-sm text-gray-500">{category.items} items</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
              <Link href="/" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Home</Link>
              <Link href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Men</Link>
              <Link href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Women</Link>
              <Link href="#" className="text-gray-700 hover:text-blue-600 font-medium transition-colors">Sale</Link>
            </div>

            {/* Right Section */}
            <div className="flex items-center space-x-4 sm:space-x-6">
              <div className="hidden sm:block relative group">
                <input
                  type="text"
                  placeholder="Search shoes..."
                  className="pl-10 pr-4 py-2 border border-gray-200 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-[160px] sm:w-[200px] group-hover:w-[300px] transition-all duration-300"
                />
                <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
              </div>
              <button className="sm:hidden p-2 hover:bg-gray-100 rounded-lg">
                <Search className="w-6 h-6 text-gray-600" />
              </button>
              <Heart className="w-6 h-6 text-gray-600 cursor-pointer hover:text-blue-600 transition-colors hover:scale-110 transform duration-300" />
              <Link href="/cart" className="relative">
                <ShoppingCart className="w-6 h-6 text-gray-600 cursor-pointer hover:text-blue-600 transition-colors hover:scale-110 transform duration-300" />
                <span className="absolute -top-2 -right-2 bg-blue-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center animate-bounce">3</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
            <div className="fixed inset-y-0 left-0 w-[80%] max-w-sm bg-white shadow-xl">
              <div className="p-4 border-b flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Zap className="h-6 w-6 text-blue-600" />
                  <span className="text-xl font-bold text-gray-900">StridePro</span>
                </div>
                <button 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-lg"
                >
                  <X className="w-6 h-6 text-gray-600" />
                </button>
              </div>
              <div className="py-4">
                <div className="px-4 py-2 text-sm font-medium text-gray-500">Categories</div>
                {mainCategories.map((category) => (
                  <a
                    key={category.name}
                    href="#"
                    className="flex items-center gap-3 px-4 py-3 hover:bg-gray-50"
                  >
                    {category.icon}
                    <div>
                      <div className="font-medium text-gray-900">{category.name}</div>
                      <div className="text-sm text-gray-500">{category.items} items</div>
                    </div>
                  </a>
                ))}
                <div className="border-t mt-4 pt-4">
                  <Link href="/" className="block px-4 py-3 text-gray-700 hover:bg-gray-50">Home</Link>
                  <Link href="#" className="block px-4 py-3 text-gray-700 hover:bg-gray-50">Men</Link>
                  <Link href="#" className="block px-4 py-3 text-gray-700 hover:bg-gray-50">Women</Link>
                  <Link href="#" className="block px-4 py-3 text-gray-700 hover:bg-gray-50">Sale</Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-blue-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div className="space-y-6 sm:space-y-8 animate-fade-in-left text-center lg:text-left">
              <div className="inline-flex items-center gap-2 bg-blue-100 px-4 py-2 rounded-full">
                <Star className="w-5 h-5 text-yellow-500 fill-yellow-500 animate-pulse" />
                <span className="text-blue-800 font-medium text-sm sm:text-base">Trusted by 100,000+ customers</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Step Into
                <span className="block text-blue-600 mt-2">Premium Comfort</span>
              </h1>
              <p className="text-gray-600 text-base sm:text-lg max-w-lg mx-auto lg:mx-0">
                Experience the perfect blend of style and comfort with our premium collection of shoes, 
                crafted for those who demand excellence in every step.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
                <button className="w-full sm:w-auto bg-blue-600 text-white px-8 py-4 rounded-full 
                  hover:bg-blue-700 transition duration-300 flex items-center justify-center gap-2 font-medium
                  hover:scale-105 transform">
                  Shop Now
                  <ArrowRight className="w-5 h-5" />
                </button>
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-white overflow-hidden hover:scale-110 transform transition duration-300">
                      <Image
                        src={`https://i.pravatar.cc/100?img=${i}`}
                        alt="Customer"
                        width={48}
                        height={48}
                      />
                    </div>
                  ))}
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 font-medium border-2 border-white">
                    +10k
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-8 border-t">
                {stats.map((stat) => (
                  <div key={stat.label} className="hover:transform hover:scale-105 transition duration-300">
                    <div className="text-2xl sm:text-3xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm sm:text-base text-gray-600 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative animate-fade-in-right mt-8 lg:mt-0">
              <div className="relative h-[300px] sm:h-[400px] lg:h-[600px] rounded-2xl overflow-hidden group">
                <Image
                  src="https://images.unsplash.com/photo-1542291026-7eec264c27ff"
                  alt="Premium Sneakers"
                  fill
                  className="object-cover group-hover:scale-105 transition duration-700"
                  priority
                />
              </div>
              <div className="hidden sm:block absolute -bottom-6 -left-6 bg-white p-4 sm:p-6 rounded-xl shadow-lg max-w-[280px] hover:transform hover:scale-105 transition duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <TrendingUp className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Premium Quality</h3>
                    <p className="text-sm text-gray-600 mt-1">Crafted with premium materials for ultimate comfort</p>
                  </div>
                </div>
              </div>
              <div className="hidden sm:block absolute -top-6 -right-6 bg-white p-4 sm:p-6 rounded-xl shadow-lg max-w-[280px] hover:transform hover:scale-105 transition duration-300">
                <div className="flex items-start gap-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <ShieldCheck className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">Satisfaction Guaranteed</h3>
                    <p className="text-sm text-gray-600 mt-1">30-day money-back guarantee</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Trusted Brands */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 sm:pb-20">
          <div className="text-center">
            <p className="text-gray-600 mb-6 sm:mb-8">Featured in</p>
            <div className="flex flex-wrap justify-center items-center gap-6 sm:gap-12 opacity-50">
              {brands.map((brand, index) => (
                <div key={index} className="text-lg sm:text-2xl font-bold text-gray-400 hover:opacity-100 transition-opacity duration-300">
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Featured Collection</h2>
            <p className="text-gray-600 mt-2">Discover our most popular styles</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {products.map((product) => (
              <div key={product.name} className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 group">
                <Link href={`/product/${product.id}`}>
                  <div className="relative">
                    <div className="relative h-48 sm:h-64">
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        className="object-cover group-hover:scale-110 transition duration-500"
                      />
                    </div>
                    <div className="absolute top-4 right-4 flex gap-2">
                      <button className="bg-white p-2 rounded-full shadow-md hover:scale-110 transition duration-300">
                        <Heart className="w-5 h-5 text-gray-600" />
                      </button>
                    </div>
                  </div>
                  <div className="p-4 sm:p-6">
                    <div className="flex items-center gap-2 mb-2">
                      <Image
                        src={product.company.logo}
                        alt={product.company.name}
                        width={24}
                        height={24}
                        className="rounded-full"
                      />
                      <span className="text-sm text-gray-600">{product.company.name}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{product.name}</h3>
                    <p className="text-gray-500 mb-4 text-sm sm:text-base">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xl sm:text-2xl font-bold text-blue-600">₹{product.price}</span>
                        {product.oldPrice && (
                          <span className="text-sm text-gray-400 line-through ml-2">₹{product.oldPrice}</span>
                        )}
                      </div>
                      <button className="bg-blue-600 text-white px-3 sm:px-4 py-2 rounded-full 
                        hover:bg-blue-700 transition duration-300 flex items-center gap-2 text-sm sm:text-base">
                        View Details
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-center mb-8 sm:mb-12 gap-4">
            <div className="text-center sm:text-left">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">Shop by Category</h2>
              <p className="text-gray-600 mt-2">Find your perfect pair</p>
            </div>
            <button className="text-blue-600 font-medium hover:text-blue-700 flex items-center gap-2 group">
              View All Categories
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {categories.map((category) => (
              <div key={category.name} className="group cursor-pointer">
                <div className="relative h-48 sm:h-64 rounded-xl overflow-hidden">
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover group-hover:scale-110 transition duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-lg sm:text-xl font-semibold text-white group-hover:translate-y-[-4px] transition-transform">
                      {category.name}
                    </h3>
                    <p className="text-white/80 text-sm mt-1">{category.items} items</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

const mainCategories = [
  {
    name: "Running Shoes",
    items: 45,
    icon: "🏃"
  },
  {
    name: "Sneakers",
    items: 38,
    icon: "👟"
  },
  {
    name: "Formal Shoes",
    items: 24,
    icon: "👞"
  },
  {
    name: "Sports Shoes",
    items: 32,
    icon: "⚽"
  },
  {
    name: "Casual Shoes",
    items: 28,
    icon: "🥾"
  },
  {
    name: "Limited Edition",
    items: 12,
    icon: "✨"
  }
];

const stats = [
  { value: "100k+", label: "Happy Customers" },
  { value: "50k+", label: "Shoes Sold" },
  { value: "99%", label: "Satisfaction Rate" }
];

const brands = ["NIKE", "ADIDAS", "PUMA", "NEW BALANCE"];

const categories = [
  {
    name: "Running Collection",
    items: 45,
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a"
  },
  {
    name: "Casual Sneakers",
    items: 38,
    image: "https://images.unsplash.com/photo-1549298916-b41d501d3772"
  },
  {
    name: "Sports Performance",
    items: 24,
    image: "https://images.unsplash.com/photo-1562183241-b937e95585b6"
  },
  {
    name: "Limited Edition",
    items: 12,
    image: "https://images.unsplash.com/photo-1512374382149-233c42b6a83b"
  }
];

const products = [
  {
    id: "1",
    name: "Ultra Boost Pro",
    description: "Premium performance running shoes with responsive cushioning",
    price: 12999,
    oldPrice: 14999,
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff",
    company: {
      name: "Adidas",
      logo: "https://i.pravatar.cc/150?img=1"
    }
  },
  {
    id: "2",
    name: "Air Max Comfort",
    description: "Iconic style meets all-day comfort in these classic sneakers",
    price: 9999,
    oldPrice: 11999,
    image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa",
    company: {
      name: "Nike",
      logo: "https://i.pravatar.cc/150?img=2"
    }
  },
  {
    id: "3",
    name: "RS-X Limited",
    description: "Bold design with premium materials and superior comfort",
    price: 8999,
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5",
    company: {
      name: "Puma",
      logo: "https://i.pravatar.cc/150?img=3"
    }
  }
];