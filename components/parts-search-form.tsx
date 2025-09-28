"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { brandModels } from "@/lib/brand-models"
import { parts } from "@/lib/parts"

interface PartsSearchFormProps {
  variant?: "dark" | "light"
  className?: string
  showLabels?: boolean
  title?: string
  subtitle?: string
}

export function PartsSearchForm({ 
  variant = "light", 
  className = "",
  showLabels = false,
  title = "Find Your Right Part",
  subtitle = "Select your vehicle details to find the perfect auto part"
}: PartsSearchFormProps) {
  const [selectedBrand, setSelectedBrand] = useState<string>("")
  const [selectedYear, setSelectedYear] = useState<string>("")
  const [selectedModel, setSelectedModel] = useState<string>("")
  const [selectedPart, setSelectedPart] = useState<string>("")
  const [firstName, setFirstName] = useState<string>("")
  const [lastName, setLastName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [phone, setPhone] = useState<string>("")

  const currentYear = new Date().getFullYear()
  const years = Array.from({ length: 30 }, (_, i) => currentYear - i)

  const availableModels = selectedBrand ? brandModels[selectedBrand as keyof typeof brandModels] || [] : []

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log({
      year: selectedYear,
      brand: selectedBrand,
      model: selectedModel,
      part: selectedPart,
      firstName,
      lastName,
      email,
      phone,
    })
  }

  const isDark = variant === "dark"
  
  const containerClasses = isDark 
    ? "bg-black/80 backdrop-blur-sm border border-gray-700 text-white" 
    : "bg-white border border-gray-200 text-gray-900"
    
  const selectClasses = isDark
    ? "bg-gray-800 border-gray-600 text-white"
    : "bg-white border-gray-300"
    
  const inputClasses = isDark
    ? "bg-gray-800 border-gray-600 text-white placeholder:text-gray-400"
    : "bg-white border-gray-300 placeholder:text-gray-500"
    
  const labelClasses = isDark ? "text-white" : "text-gray-900"
  const textClasses = isDark ? "text-gray-300" : "text-gray-600"
  const disclaimerClasses = isDark ? "text-gray-400" : "text-gray-500"

  return (
    <div className={`rounded-lg p-8 ${containerClasses} ${className}`}>
      <div className="text-center mb-8">
        <h2 className={`text-3xl font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>{title}</h2>
        <p className={textClasses}>{subtitle}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Vehicle Selection Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="space-y-2">
            {showLabels && (
              <Label htmlFor="year" className={`${labelClasses} font-medium`}>
                Select Year
              </Label>
            )}
            <Select value={selectedYear} onValueChange={setSelectedYear}>
              <SelectTrigger className={selectClasses}>
                <SelectValue placeholder="Select Year" />
              </SelectTrigger>
              <SelectContent className={isDark ? "bg-gray-800 border-gray-600" : "bg-white"}>
                {years.map((year) => (
                  <SelectItem 
                    key={year} 
                    value={year.toString()} 
                    className={isDark ? "text-white hover:bg-gray-700" : "text-gray-900 hover:bg-gray-50"}
                  >
                    {year}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            {showLabels && (
              <Label htmlFor="make" className={`${labelClasses} font-medium`}>
                Select Make
              </Label>
            )}
            <Select
              value={selectedBrand}
              onValueChange={(value) => {
                setSelectedBrand(value)
                setSelectedModel("") // Reset model when brand changes
              }}
            >
              <SelectTrigger className={selectClasses}>
                <SelectValue placeholder="Select Make" />
              </SelectTrigger>
              <SelectContent className={`${isDark ? "bg-gray-800 border-gray-600" : "bg-white"} max-h-60`}>
                {Object.keys(brandModels).map((brand) => (
                  <SelectItem 
                    key={brand} 
                    value={brand} 
                    className={isDark ? "text-white hover:bg-gray-700" : "text-gray-900 hover:bg-gray-50"}
                  >
                    {brand}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            {showLabels && (
              <Label htmlFor="model" className={`${labelClasses} font-medium`}>
                Select Model
              </Label>
            )}
            <Select value={selectedModel} onValueChange={setSelectedModel} disabled={!selectedBrand}>
              <SelectTrigger className={selectClasses}>
                <SelectValue placeholder="Select Model" />
              </SelectTrigger>
              <SelectContent className={`${isDark ? "bg-gray-800 border-gray-600" : "bg-white"} max-h-60`}>
                {availableModels.map((model) => (
                  <SelectItem 
                    key={model} 
                    value={model} 
                    className={isDark ? "text-white hover:bg-gray-700" : "text-gray-900 hover:bg-gray-50"}
                  >
                    {model}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            {showLabels && (
              <Label htmlFor="part" className={`${labelClasses} font-medium`}>
                Select Part
              </Label>
            )}
            <Select value={selectedPart} onValueChange={setSelectedPart}>
              <SelectTrigger className={selectClasses}>
                <SelectValue placeholder="Select Part" />
              </SelectTrigger>
              <SelectContent className={`${isDark ? "bg-gray-800 border-gray-600" : "bg-white"} max-h-60`}>
                {parts.map((part, index) => (
                  <SelectItem 
                    key={index} 
                    value={part} 
                    className={isDark ? "text-white hover:bg-gray-700" : "text-gray-900 hover:bg-gray-50"}
                  >
                    {part}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Contact Information Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="space-y-2">
            {showLabels && (
              <Label htmlFor="firstName" className={`${labelClasses} font-medium`}>
                First Name
              </Label>
            )}
            <Input
              id="firstName"
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className={inputClasses}
            />
          </div>

          <div className="space-y-2">
            {showLabels && (
              <Label htmlFor="lastName" className={`${labelClasses} font-medium`}>
                Last Name
              </Label>
            )}
            <Input
              id="lastName"
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className={inputClasses}
            />
          </div>

          <div className="space-y-2">
            {showLabels && (
              <Label htmlFor="email" className={`${labelClasses} font-medium`}>
                Your Email
              </Label>
            )}
            <Input
              id="email"
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={inputClasses}
            />
          </div>

          <div className="space-y-2">
            {showLabels && (
              <Label htmlFor="phone" className={`${labelClasses} font-medium`}>
                Phone No
              </Label>
            )}
            <Input
              id="phone"
              type="tel"
              placeholder="xxx-xxx-xxxx"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className={inputClasses}
            />
          </div>
        </div>

        {/* Terms and Submit */}
        <div className="space-y-4">
          <p className={`text-sm ${disclaimerClasses} text-center`}>
            By submitting this form, you agree to receive text messages at anytime
          </p>

          <Button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white py-4 text-lg font-semibold"
          >
            Get Free Quote
          </Button>
        </div>
      </form>
    </div>
  )
}