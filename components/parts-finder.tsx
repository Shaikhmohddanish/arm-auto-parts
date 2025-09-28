"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { brandModels } from "@/lib/brand-models"
import { parts } from "@/lib/parts"

export function PartsFinder() {
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

  return (
    <section className="relative bg-dark text-white py-16">
      {/* Background overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url('/images/banner1.webp')`,
        }}
      />

      <div className="relative container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="bg-black/80 backdrop-blur-sm rounded-lg p-8 border border-gray-700">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">Find Your Right Part</h2>
              <p className="text-gray-300">Select your vehicle details to find the perfect auto part</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Vehicle Selection Row */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="year" className="text-white font-medium">
                    Select Year
                  </Label>
                  <Select value={selectedYear} onValueChange={setSelectedYear}>
                    <SelectTrigger className="bg-gray-800 border-gray-600 text-white">
                      <SelectValue placeholder="2020" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-600">
                      {years.map((year) => (
                        <SelectItem key={year} value={year.toString()} className="text-white hover:bg-gray-700">
                          {year}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="make" className="text-white font-medium">
                    Select Make
                  </Label>
                  <Select
                    value={selectedBrand}
                    onValueChange={(value) => {
                      setSelectedBrand(value)
                      setSelectedModel("") // Reset model when brand changes
                    }}
                  >
                    <SelectTrigger className="bg-gray-800 border-gray-600 text-white">
                      <SelectValue placeholder="Audi" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-600 max-h-60">
                      {Object.keys(brandModels).map((brand) => (
                        <SelectItem key={brand} value={brand} className="text-white hover:bg-gray-700">
                          {brand}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="model" className="text-white font-medium">
                    Select Model
                  </Label>
                  <Select value={selectedModel} onValueChange={setSelectedModel} disabled={!selectedBrand}>
                    <SelectTrigger className="bg-gray-800 border-gray-600 text-white">
                      <SelectValue placeholder="A5" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-600 max-h-60">
                      {availableModels.map((model) => (
                        <SelectItem key={model} value={model} className="text-white hover:bg-gray-700">
                          {model}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="part" className="text-white font-medium">
                    Select Part
                  </Label>
                  <Select value={selectedPart} onValueChange={setSelectedPart}>
                    <SelectTrigger className="bg-gray-800 border-gray-600 text-white">
                      <SelectValue placeholder="AC Assembly" />
                    </SelectTrigger>
                    <SelectContent className="bg-gray-800 border-gray-600 max-h-60">
                      {parts.map((part, index) => (
                        <SelectItem key={index} value={part} className="text-white hover:bg-gray-700">
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
                  <Label htmlFor="firstName" className="text-white font-medium">
                    First Name
                  </Label>
                  <Input
                    id="firstName"
                    type="text"
                    placeholder="First Name"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                    className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-white font-medium">
                    Last Name
                  </Label>
                  <Input
                    id="lastName"
                    type="text"
                    placeholder="Last Name"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                    className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-white font-medium">
                    Your Email
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-white font-medium">
                    Phone No
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="XXX-XXX-XXXX"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="bg-gray-800 border-gray-600 text-white placeholder:text-gray-400"
                  />
                </div>
              </div>

              {/* Terms and Submit */}
              <div className="space-y-4">
                <p className="text-sm text-gray-400 text-center">
                  By submitting this form, you agree to receive text messages at anytime
                </p>

                <Button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white py-4 text-lg font-semibold"
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
