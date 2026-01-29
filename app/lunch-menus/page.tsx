'use client'

import React, { useState } from 'react'
import { Utensils, MapPin, Coffee, Pizza, Flame, Salad, Cookie, Droplet, ExternalLink, Info } from 'lucide-react'

type Location = 'large-cafe' | 'small-cafe' | '1000-building' | '900-building'

interface FoodItem {
  name: string
  category: string
  description?: string
  options?: string[]
}

interface LocationMenu {
  name: string
  icon: any
  color: string
  sections: {
    [key: string]: FoodItem[]
  }
  specialNote?: string
}

const locations: { [key in Location]: LocationMenu } = {
  'large-cafe': {
    name: 'Large Cafe',
    icon: Utensils,
    color: 'from-primary to-red-600',
    sections: {
      'Pizza Stone': [
        { name: "Papa John's Pizza", category: 'pizza', options: ['Plain', 'Pepperoni'] },
        { name: 'Mini Mozzarella Cheese Calzones', category: 'pizza' },
        { name: 'Freshly Baked Pizza Crunchers', category: 'pizza' },
      ],
      'Wing Bar': [
        { name: 'Buffalo Chicken Wings', category: 'wings', description: 'Spicy buffalo sauce' },
        { name: 'Boom Boom Chicken Wings', category: 'wings', description: 'Sweet and spicy signature sauce' },
        { name: 'BBQ Chicken Wings', category: 'wings', description: 'Classic BBQ glazed' },
        { name: 'Boneless Wings - Plain', category: 'wings' },
        { name: 'Soft Pretzel Stick', category: 'wings' },
      ],
      'The Market': [
        { name: 'Juicy Hamburger on a Bun', category: 'market' },
        { name: 'Juicy Cheeseburger on a Bun', category: 'market' },
        { name: 'Crispy Chicken Sandwich', category: 'market' },
        { name: 'Twisted Cheesy Breadsticks with Marinara Sauce', category: 'market' },
        { name: 'Pepperoni Pizza', category: 'market' },
        { name: 'Mozzarella Sticks', category: 'market' },
        { name: 'Stromboli Variety', category: 'market' },
      ],
      'Harvest Market': [
        { name: 'Chicken Caesar Salad', category: 'salad', description: 'Fresh romaine, grilled chicken, parmesan' },
        { name: 'Crispy Chicken Salad', category: 'salad', description: 'Mixed greens with crispy chicken tenders' },
      ],
      'Sides & Add-ons': [
        { name: 'French Fries', category: 'sides' },
        { name: 'Wing Dipping Sauces', category: 'sides', options: ['BBQ', 'Ranch', 'Blue Cheese', 'Boom Boom Sauce'] },
      ],
    },
  },
  'small-cafe': {
    name: 'Small Cafe',
    icon: Coffee,
    color: 'from-amber-500 to-orange-600',
    specialNote: 'Features a special menu item that changes daily!',
    sections: {
      'Pizza Stone (Limited)': [
        { name: "Papa John's Pizza", category: 'pizza', options: ['Pepperoni', 'Cheese'] },
      ],
      'The Market': [
        { name: 'Juicy Hamburger on a Bun', category: 'market' },
        { name: 'Juicy Cheeseburger on a Bun', category: 'market' },
        { name: 'Crispy Chicken Sandwich', category: 'market' },
        { name: 'Twisted Cheesy Breadsticks with Marinara Sauce', category: 'market' },
        { name: 'Pepperoni Pizza', category: 'market' },
        { name: 'Mozzarella Sticks', category: 'market' },
        { name: 'Stromboli Variety', category: 'market' },
      ],
      'Harvest Market': [
        { name: 'Chicken Caesar Salad', category: 'salad', description: 'Fresh romaine, grilled chicken, parmesan' },
        { name: 'Crispy Chicken Salad', category: 'salad', description: 'Mixed greens with crispy chicken tenders' },
      ],
      'Daily Special': [
        { name: '🌟 Ask About Today\'s Special!', category: 'special', description: 'Changes daily - check with cafeteria staff' },
      ],
    },
  },
  '1000-building': {
    name: '1000 Building',
    icon: MapPin,
    color: 'from-blue-500 to-purple-600',
    sections: {
      'Pizza Stone (Limited)': [
        { name: "Papa John's Pizza", category: 'pizza', options: ['Pepperoni', 'Cheese'] },
      ],
      'The Market': [
        { name: 'Juicy Hamburger on a Bun', category: 'market' },
        { name: 'Juicy Cheeseburger on a Bun', category: 'market' },
        { name: 'Crispy Chicken Sandwich', category: 'market' },
        { name: 'Twisted Cheesy Breadsticks with Marinara Sauce', category: 'market' },
        { name: 'Pepperoni Pizza', category: 'market' },
        { name: 'Mozzarella Sticks', category: 'market' },
        { name: 'Stromboli Variety', category: 'market' },
      ],
      'Harvest Market': [
        { name: 'Chicken Caesar Salad', category: 'salad', description: 'Fresh romaine, grilled chicken, parmesan' },
        { name: 'Crispy Chicken Salad', category: 'salad', description: 'Mixed greens with crispy chicken tenders' },
      ],
    },
  },
  '900-building': {
    name: '900 Building',
    icon: MapPin,
    color: 'from-green-500 to-emerald-600',
    sections: {
      'Pizza Stone (Limited)': [
        { name: "Papa John's Pizza", category: 'pizza', options: ['Pepperoni', 'Cheese'] },
      ],
      'The Market': [
        { name: 'Juicy Hamburger on a Bun', category: 'market' },
        { name: 'Juicy Cheeseburger on a Bun', category: 'market' },
        { name: 'Crispy Chicken Sandwich', category: 'market' },
        { name: 'Twisted Cheesy Breadsticks with Marinara Sauce', category: 'market' },
        { name: 'Pepperoni Pizza', category: 'market' },
        { name: 'Mozzarella Sticks', category: 'market' },
        { name: 'Stromboli Variety', category: 'market' },
      ],
      'Harvest Market': [
        { name: 'Chicken Caesar Salad', category: 'salad', description: 'Fresh romaine, grilled chicken, parmesan' },
        { name: 'Crispy Chicken Salad', category: 'salad', description: 'Mixed greens with crispy chicken tenders' },
      ],
    },
  },
}

const allLocationsCookiesAndDrinks = {
  'Cookies': [
    { name: 'Red Velvet Cookie', category: 'dessert' },
    { name: 'Chocolate Chip Cookie', category: 'dessert' },
    { name: 'M&M Cookie', category: 'dessert' },
  ],
  'Ice Cream': [
    { name: 'Hershey\'s Ice Cream (Various Flavors)', category: 'dessert' },
  ],
  'Drinks': [
    { name: 'Snapple Lemon Tea', category: 'beverage' },
    { name: 'Snapple Fruit Punch', category: 'beverage' },
    { name: 'Snapple Orange Mango', category: 'beverage' },
    { name: 'Lemonade', category: 'beverage' },
    { name: 'Peach Tea', category: 'beverage' },
    { name: 'Lemon Tea', category: 'beverage' },
    { name: 'Sparkling Ice Blue Raspberry', category: 'beverage' },
    { name: 'Sparkling Ice Citrus', category: 'beverage' },
    { name: 'Sparkling Ice Cherry Vanilla', category: 'beverage' },
    { name: 'Water', category: 'beverage' },
  ],
}

export default function LunchMenus() {
  const [selectedLocation, setSelectedLocation] = useState<Location>('large-cafe')
  const currentLocation = locations[selectedLocation]

  return (
    <div className="min-h-screen bg-black py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center mb-4">
            <Utensils className="w-16 h-16 text-primary" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            BRHS Dining
          </h1>
          <p className="text-xl text-gray-400 mb-6">
            Fresh, delicious meals at multiple campus locations
          </p>
          
          {/* Full Menu Link */}
          <a 
            href="https://brrsd.nutrislice.com/menu/brrsd-high" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-red-600 hover:from-red-600 hover:to-primary text-white font-semibold rounded-lg transition-all shadow-lg shadow-primary/30 hover:shadow-primary/50"
          >
            <span>View Full Nutrislice Menu</span>
            <ExternalLink className="w-5 h-5" />
          </a>
        </div>

        {/* Location Selector */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Choose Your Location</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {(Object.keys(locations) as Location[]).map((locationKey) => {
              const location = locations[locationKey]
              const Icon = location.icon
              const isSelected = selectedLocation === locationKey
              return (
                <button
                  key={locationKey}
                  onClick={() => setSelectedLocation(locationKey)}
                  className={`relative p-6 rounded-xl transition-all transform hover:scale-105 ${
                    isSelected
                      ? `bg-gradient-to-br ${location.color} text-white shadow-lg`
                      : 'bg-dark-800 text-gray-300 hover:bg-dark-700'
                  }`}
                >
                  <Icon className={`w-8 h-8 mx-auto mb-3 ${isSelected ? 'text-white' : 'text-primary'}`} />
                  <h3 className="font-bold text-lg">{location.name}</h3>
                  {isSelected && location.specialNote && (
                    <p className="text-xs mt-2 opacity-90">✨ {location.specialNote}</p>
                  )}
                </button>
              )
            })}
          </div>
        </div>

        {/* Menu Sections */}
        <div className="mb-12">
          <div className="flex items-center justify-center mb-8">
            <div className={`inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r ${currentLocation.color} rounded-full shadow-lg`}>
              {React.createElement(currentLocation.icon, { className: 'w-6 h-6 text-white' })}
              <h2 className="text-2xl font-bold text-white">{currentLocation.name} Menu</h2>
            </div>
          </div>

          {currentLocation.specialNote && (
            <div className="mb-8 p-4 bg-amber-500/10 border border-amber-500/30 rounded-lg">
              <div className="flex items-center gap-2 text-amber-400">
                <Info className="w-5 h-5" />
                <p className="font-semibold">{currentLocation.specialNote}</p>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {Object.entries(currentLocation.sections).map(([sectionName, items]) => (
              <div key={sectionName} className="glass-effect rounded-lg p-6 border border-dark-700">
                <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                  {(sectionName === 'Pizza Stone' || sectionName === 'Pizza Stone (Limited)') && <Pizza className="w-5 h-5 text-primary" />}
                  {sectionName === 'Wing Bar' && <Flame className="w-5 h-5 text-primary" />}
                  {sectionName === 'The Market' && <Utensils className="w-5 h-5 text-primary" />}
                  {sectionName === 'Harvest Market' && <Salad className="w-5 h-5 text-primary" />}
                  {sectionName === 'Daily Special' && <span className="text-primary">✨</span>}
                  {sectionName}
                </h3>
                <div className="space-y-3">
                  {items.map((item, idx) => (
                    <div key={idx} className="bg-dark-800/50 rounded-lg p-4 hover:bg-dark-700/50 transition-all">
                      <h4 className="font-semibold text-white mb-1">{item.name}</h4>
                      {item.description && (
                        <p className="text-gray-400 text-sm mb-2">{item.description}</p>
                      )}
                      {item.options && (
                        <div className="flex flex-wrap gap-2">
                          {item.options.map((option, optIdx) => (
                            <span
                              key={optIdx}
                              className="px-2 py-1 bg-primary/20 text-primary text-xs rounded-full"
                            >
                              {option}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Available at All Locations */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Available at All Locations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Cookies */}
            <div className="glass-effect rounded-lg p-6 border border-dark-700">
              <div className="flex items-center gap-3 mb-4">
                <Cookie className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold text-white">Cookies</h3>
              </div>
              <div className="space-y-2">
                {allLocationsCookiesAndDrinks['Cookies'].map((item, idx) => (
                  <div key={idx} className="bg-dark-800/50 rounded-lg p-3">
                    <p className="text-gray-300">{item.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Ice Cream */}
            <div className="glass-effect rounded-lg p-6 border border-dark-700">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-3xl">🍦</span>
                <h3 className="text-xl font-bold text-white">Ice Cream</h3>
              </div>
              <div className="space-y-2">
                {allLocationsCookiesAndDrinks['Ice Cream'].map((item, idx) => (
                  <div key={idx} className="bg-dark-800/50 rounded-lg p-3">
                    <p className="text-gray-300">{item.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Drinks */}
            <div className="glass-effect rounded-lg p-6 border border-dark-700">
              <div className="flex items-center gap-3 mb-4">
                <Droplet className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-bold text-white">Beverages</h3>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {allLocationsCookiesAndDrinks['Drinks'].map((item, idx) => (
                  <div key={idx} className="bg-dark-800/50 rounded-lg p-2">
                    <p className="text-gray-300 text-sm">{item.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="glass-effect rounded-lg p-6 border border-dark-700">
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

          <div className="glass-effect rounded-lg p-6 border border-dark-700">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-4">
              <span className="text-2xl">🥗</span>
            </div>
            <h3 className="text-lg font-bold text-white mb-3">Dietary Info</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex items-start gap-2">
                <span className="text-primary">•</span>
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

          <div className="glass-effect rounded-lg p-6 border border-dark-700">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center mb-4">
              <span className="text-2xl">⏰</span>
            </div>
            <h3 className="text-lg font-bold text-white mb-3">Lunch Period</h3>
            <ul className="space-y-3 text-gray-300 text-sm">
              <li className="p-3 bg-dark-800 rounded-lg">
                <div className="flex items-center justify-between mb-2">
                  <span className="font-semibold text-primary">Normal Schedule</span>
                  <span className="font-bold text-white">10:18 - 11:07 AM</span>
                </div>
              </li>
              <li className="p-3 bg-dark-800 rounded-lg">
                <div className="flex items-center justify-between">
                  <span className="font-semibold text-orange-400">Delayed Opening</span>
                  <span className="font-bold text-white">11:21 AM - 12:04 PM</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
