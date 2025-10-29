'use client'

import { useState } from 'react'
import { Utensils, Coffee, Pizza, Salad, Flame, ExternalLink, Leaf, ChevronRight } from 'lucide-react'

type MenuCategory = 'all' | 'breakfast' | 'pizza' | 'wings' | 'market' | 'vegetarian' | 'harvest'

interface MenuItem {
  id: string
  name: string
  category: MenuCategory[]
  description?: string
  options?: string[]
  sides?: string[]
  isVegetarian?: boolean
  isPopular?: boolean
}

const menuItems: MenuItem[] = [
  // Wing Bar
  {
    id: 'wings-buffalo',
    name: 'Buffalo Chicken Wings',
    category: ['wings', 'all'],
    description: 'Spicy buffalo sauce with tender chicken wings',
    isPopular: true,
  },
  {
    id: 'wings-boomboom',
    name: 'Boom Boom Chicken Wings',
    category: ['wings', 'all'],
    description: 'Sweet and spicy signature sauce',
  },
  {
    id: 'wings-bbq',
    name: 'BBQ Chicken Wings',
    category: ['wings', 'all'],
    description: 'Classic BBQ glazed wings',
  },
  {
    id: 'wings-boneless',
    name: 'Boneless Wings - Plain',
    category: ['wings', 'all'],
    description: 'Crispy boneless chicken, plain or with your favorite sauce',
  },
  {
    id: 'pretzel-stick',
    name: 'Soft Pretzel Stick',
    category: ['wings', 'all'],
    description: 'Warm, soft pretzel stick',
  },

  // Breakfast
  {
    id: 'breakfast-bacon',
    name: 'Bacon, Egg & Cheese on a Croissant',
    category: ['breakfast', 'all'],
    sides: ['Crunchy Tater Tots'],
    isPopular: true,
  },
  {
    id: 'breakfast-sausage',
    name: 'Sausage, Egg & Cheese on a Croissant',
    category: ['breakfast', 'all'],
    sides: ['Crunchy Tater Tots'],
  },
  {
    id: 'breakfast-egg',
    name: 'Egg and Cheese on a Croissant',
    category: ['breakfast', 'all'],
    sides: ['Crunchy Tater Tots'],
    isVegetarian: true,
  },
  {
    id: 'breakfast-pancakes',
    name: 'Confetti Pancakes',
    category: ['breakfast', 'all'],
    sides: ['Crunchy Tater Tots'],
    isVegetarian: true,
  },
  {
    id: 'breakfast-cereal',
    name: 'Assorted Cereal',
    category: ['breakfast', 'all'],
    isVegetarian: true,
  },
  {
    id: 'breakfast-bar',
    name: 'Assorted BeneFIT Bar',
    category: ['breakfast', 'all'],
  },
  {
    id: 'breakfast-bagel',
    name: 'Bagel with Cream Cheese',
    category: ['breakfast', 'all'],
    isVegetarian: true,
  },

  // Pizza Stone
  {
    id: 'pizza-papajohns',
    name: "Papa John's Pizza",
    category: ['pizza', 'all'],
    options: ['Plain', 'Pepperoni'],
    isPopular: true,
  },
  {
    id: 'pizza-calzone',
    name: 'Mini Mozzarella Cheese Calzones',
    category: ['pizza', 'all'],
    isVegetarian: true,
  },
  {
    id: 'pizza-crunchers',
    name: 'Freshly Baked Pizza Crunchers',
    category: ['pizza', 'all'],
  },

  // Harvest Market
  {
    id: 'salad-chicken-caesar',
    name: 'Chicken Caesar Salad',
    category: ['harvest', 'all'],
    description: 'Fresh romaine, grilled chicken, parmesan, Caesar dressing',
  },
  {
    id: 'salad-crispy-chicken',
    name: 'Crispy Chicken Salad',
    category: ['harvest', 'all'],
    description: 'Mixed greens with crispy chicken tenders',
  },

  // The Market
  {
    id: 'market-hamburger',
    name: 'Juicy Hamburger on a Bun',
    category: ['market', 'all'],
    isPopular: true,
  },
  {
    id: 'market-cheeseburger',
    name: 'Juicy Cheeseburger on a Bun',
    category: ['market', 'all'],
    isPopular: true,
  },
  {
    id: 'market-chicken-sandwich',
    name: 'Crispy Chicken Sandwich',
    category: ['market', 'all'],
  },
  {
    id: 'market-breadsticks',
    name: 'Twisted Cheesy Breadsticks with Marinara Sauce',
    category: ['market', 'all'],
    isVegetarian: true,
  },
  {
    id: 'market-pizza',
    name: 'Pepperoni Pizza',
    category: ['market', 'pizza', 'all'],
  },
  {
    id: 'market-mozzarella',
    name: 'Mozzarella Sticks',
    category: ['market', 'all'],
    isVegetarian: true,
  },
  {
    id: 'market-stromboli',
    name: 'Stromboli Variety',
    category: ['market', 'all'],
  },

  // Vegetarian Plate
  {
    id: 'veg-garden-salad',
    name: 'Freshly Prepared Garden Salad',
    category: ['vegetarian', 'all'],
    sides: ['Cheese Cubes'],
    isVegetarian: true,
  },
  {
    id: 'veg-nuggets',
    name: 'Vegetarian Nuggets',
    category: ['vegetarian', 'all'],
    isVegetarian: true,
  },
  {
    id: 'veg-grilled-cheese',
    name: 'Grilled Cheese Sandwich',
    category: ['vegetarian', 'all'],
    isVegetarian: true,
  },
  {
    id: 'veg-veggie-burger',
    name: 'Veggie Burger on a Bun',
    category: ['vegetarian', 'all'],
    isVegetarian: true,
  },
]

export default function LunchMenus() {
  const [selectedCategory, setSelectedCategory] = useState<MenuCategory>('all')
  const [searchTerm, setSearchTerm] = useState('')

  const categories = [
    { id: 'all', name: 'All Items', icon: Utensils, color: 'from-primary to-red-600' },
    { id: 'breakfast', name: 'Breakfast', icon: Coffee, color: 'from-yellow-500 to-orange-500' },
    { id: 'pizza', name: 'Pizza Stone', icon: Pizza, color: 'from-orange-500 to-red-500' },
    { id: 'wings', name: 'Wing Bar', icon: Flame, color: 'from-red-500 to-pink-500' },
    { id: 'market', name: 'The Market', icon: Utensils, color: 'from-blue-500 to-purple-500' },
    { id: 'harvest', name: 'Harvest Market', icon: Salad, color: 'from-green-500 to-emerald-500' },
    { id: 'vegetarian', name: 'Vegetarian', icon: Leaf, color: 'from-green-400 to-teal-500' },
  ]

  const filteredItems = menuItems.filter(item => {
    const matchesCategory = selectedCategory === 'all' || item.category.includes(selectedCategory)
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         item.description?.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-dark-900 to-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-primary to-red-600 mb-4 shadow-lg shadow-primary/50">
            <Utensils className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-3 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            BRHS Cafeteria
          </h1>
          <p className="text-xl text-gray-400 mb-6">
            Fresh, delicious meals daily
          </p>
          
          {/* Full Menu Link */}
          <a 
            href="https://brrsd.nutrislice.com/menu/brrsd-high" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-red-600 hover:from-red-600 hover:to-primary text-white font-semibold rounded-full transition-all duration-300 shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-105"
          >
            <span>View Full Menu</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <div className="relative max-w-2xl mx-auto">
            <input
              type="text"
              placeholder="Search menu items..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-6 py-4 bg-dark-800/50 backdrop-blur-sm border border-dark-700 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
            />
            <Utensils className="absolute right-6 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-500" />
          </div>
        </div>

        {/* Category Pills */}
        <div className="mb-12 overflow-x-auto pb-4">
          <div className="flex gap-3 min-w-max px-4 md:px-0 md:justify-center">
            {categories.map((category) => {
              const Icon = category.icon
              const isSelected = selectedCategory === category.id
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id as MenuCategory)}
                  className={`
                    relative flex items-center gap-2 px-6 py-3 rounded-full font-semibold transition-all duration-300
                    ${isSelected 
                      ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105` 
                      : 'bg-dark-800/50 text-gray-400 hover:text-white hover:bg-dark-700'
                    }
                  `}
                >
                  <Icon className="w-4 h-4" />
                  <span className="whitespace-nowrap">{category.name}</span>
                  {isSelected && (
                    <div className="absolute inset-0 rounded-full bg-white/20 animate-pulse"></div>
                  )}
                </button>
              )
            })}
          </div>
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-gradient-to-br from-dark-800/80 to-dark-900/80 backdrop-blur-sm rounded-2xl p-6 border border-dark-700 hover:border-primary/50 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/10"
            >
              {/* Popular Badge */}
              {item.isPopular && (
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse">
                  POPULAR
                </div>
              )}

              {/* Vegetarian Badge */}
              {item.isVegetarian && (
                <div className="absolute top-4 right-4">
                  <div className="bg-green-500/20 p-2 rounded-full">
                    <Leaf className="w-4 h-4 text-green-400" />
                  </div>
                </div>
              )}

              <div className="space-y-3">
                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors pr-8">
                  {item.name}
                </h3>
                
                {item.description && (
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.description}
                  </p>
                )}

                {item.options && (
                  <div className="flex flex-wrap gap-2">
                    {item.options.map((option, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-dark-700 text-gray-300 text-xs rounded-full border border-dark-600"
                      >
                        {option}
                      </span>
                    ))}
                  </div>
                )}

                {item.sides && item.sides.length > 0 && (
                  <div className="pt-3 border-t border-dark-700">
                    <p className="text-xs text-gray-500 mb-2">Served with:</p>
                    <div className="flex flex-wrap gap-2">
                      {item.sides.map((side, idx) => (
                        <span
                          key={idx}
                          className="flex items-center gap-1 text-xs text-primary"
                        >
                          <ChevronRight className="w-3 h-3" />
                          {side}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/5 group-hover:to-transparent transition-all duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <Utensils className="w-16 h-16 text-gray-600 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-gray-400 mb-2">No items found</h3>
            <p className="text-gray-500">Try adjusting your search or category filter</p>
          </div>
        )}

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-effect rounded-2xl p-6 border border-dark-700">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center mb-4">
              <span className="text-2xl">💵</span>
            </div>
            <h3 className="text-lg font-bold text-white mb-3">Meal Prices</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex justify-between">
                <span>Student Breakfast:</span>
                <span className="text-primary font-semibold">$1.50</span>
              </li>
              <li className="flex justify-between">
                <span>Student Lunch:</span>
                <span className="text-primary font-semibold">$3.00</span>
              </li>
              <li className="flex justify-between">
                <span>Reduced Price:</span>
                <span className="text-primary font-semibold">$0.40</span>
              </li>
              <li className="pt-2 border-t border-dark-700 text-green-400">
                Free Lunch Program Available
              </li>
            </ul>
          </div>

          <div className="glass-effect rounded-2xl p-6 border border-dark-700">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-4">
              <span className="text-2xl">🥗</span>
            </div>
            <h3 className="text-lg font-bold text-white mb-3">Dietary Info</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <Leaf className="w-4 h-4 text-green-400 flex-shrink-0 mt-0.5" />
                <span>Vegetarian options daily</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Allergen info available</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Nutritional facts posted</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
                <span>Halal/Kosher upon request</span>
              </li>
            </ul>
          </div>

          <div className="glass-effect rounded-2xl p-6 border border-dark-700">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center mb-4">
              <span className="text-2xl">⏰</span>
            </div>
            <h3 className="text-lg font-bold text-white mb-3">Lunch Periods</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="flex items-center justify-between p-2 bg-dark-800 rounded-lg">
                <span className="font-semibold text-primary">Period A</span>
                <span>11:00 - 11:30 AM</span>
              </li>
              <li className="flex items-center justify-between p-2 bg-dark-800 rounded-lg">
                <span className="font-semibold text-primary">Period B</span>
                <span>11:30 - 12:00 PM</span>
              </li>
              <li className="flex items-center justify-between p-2 bg-dark-800 rounded-lg">
                <span className="font-semibold text-primary">Period C</span>
                <span>12:00 - 12:30 PM</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
