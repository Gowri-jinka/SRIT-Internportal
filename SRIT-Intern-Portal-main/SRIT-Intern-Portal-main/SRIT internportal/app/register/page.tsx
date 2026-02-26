"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function RegisterPage() {
  const router = useRouter()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    branch: "",
  })
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({ ...prev, [id]: value }))
  }

  const handleBranchChange = (value: string) => {
    setFormData((prev) => ({ ...prev, branch: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    // Validate email is from SRIT college
    if (!formData.email.endsWith("@srit.ac.in")) {
      setError("Please use your SRIT college email (@srit.ac.in)")
      setIsLoading(false)
      return
    }

    // Validate password match
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match")
      setIsLoading(false)
      return
    }

    // Validate branch selection
    if (!formData.branch) {
      setError("Please select your branch")
      setIsLoading(false)
      return
    }

    // In a real app, this would call an API to register the user
    // For now, we'll simulate successful registration
    try {
      // In a real application, you would save this user to a database
      console.log("Registering user:", formData)

      // Mock successful registration
      setTimeout(() => {
        setIsLoading(false)
        router.push("/dashboard")
      }, 1500)
    } catch (err) {
      setIsLoading(false)
      setError("Registration failed. Please try again.")
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-srit-cream/30 px-4 py-8">
      <Card className="w-full max-w-md border-srit-wheat shadow-lg">
        <CardHeader className="space-y-1">
          <div className="flex justify-center mb-4">
            <div className="flex items-center gap-2 font-bold text-2xl">
              <span className="text-srit-orange">SRIT</span> Intern Portal
            </div>
          </div>
          <CardTitle className="text-2xl font-bold text-center">Create an account</CardTitle>
          <CardDescription className="text-center">
            Enter your details to register for the SRIT Intern Portal
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="firstName">First Name</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="border-srit-wheat focus:border-srit-orange focus:ring-srit-orange"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="lastName">Last Name</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="border-srit-wheat focus:border-srit-orange focus:ring-srit-orange"
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">College Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your.name@srit.ac.in"
                value={formData.email}
                onChange={handleChange}
                required
                className="border-srit-wheat focus:border-srit-orange focus:ring-srit-orange"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="branch">Branch</Label>
              <Select onValueChange={handleBranchChange}>
                <SelectTrigger className="border-srit-wheat focus:border-srit-orange focus:ring-srit-orange">
                  <SelectValue placeholder="Select your branch" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="CSE">Computer Science & Engineering (CSE)</SelectItem>
                  <SelectItem value="CSD">Computer Science & Design (CSD)</SelectItem>
                  <SelectItem value="ECE">Electronics & Communication Engineering (ECE)</SelectItem>
                  <SelectItem value="EEE">Electrical & Electronics Engineering (EEE)</SelectItem>
                  <SelectItem value="CIVIL">Civil Engineering</SelectItem>
                  <SelectItem value="MECH">Mechanical Engineering</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                required
                className="border-srit-wheat focus:border-srit-orange focus:ring-srit-orange"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                id="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                className="border-srit-wheat focus:border-srit-orange focus:ring-srit-orange"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-srit-orange hover:bg-srit-orange/90 text-white"
              disabled={isLoading}
            >
              {isLoading ? "Creating account..." : "Register"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="text-center text-sm">
            Already have an account?{" "}
            <Link href="/login" className="text-srit-orange hover:underline">
              Login
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

