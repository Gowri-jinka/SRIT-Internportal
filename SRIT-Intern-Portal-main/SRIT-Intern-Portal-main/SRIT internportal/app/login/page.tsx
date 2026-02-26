"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function LoginPage() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setIsLoading(true)

    // Validate email is from SRIT college
    if (!email.endsWith("@srit.ac.in")) {
      setError("Please use your SRIT college email (@srit.ac.in)")
      setIsLoading(false)
      return
    }

    // In a real application, this would check against a database
    // For now, we'll simulate a check for registered users
    const registeredUsers = [
      { email: "neha.anjum@srit.ac.in", password: "password123" },
      { email: "test.user@srit.ac.in", password: "testpassword" },
    ]

    const user = registeredUsers.find((user) => user.email === email)

    if (!user) {
      setError("User not registered. Please register first.")
      setIsLoading(false)
      return
    }

    if (user.password !== password) {
      setError("Invalid email or password")
      setIsLoading(false)
      return
    }

    // Successful login
    try {
      setTimeout(() => {
        setIsLoading(false)
        router.push("/dashboard")
      }, 1500)
    } catch (err) {
      setIsLoading(false)
      setError("Login failed. Please try again.")
    }
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-srit-cream/30 px-4">
      <Card className="w-full max-w-md border-srit-wheat shadow-lg">
        <CardHeader className="space-y-1">
          <div className="flex justify-center mb-4">
            <div className="flex items-center gap-2 font-bold text-2xl">
              <span className="text-srit-orange">SRIT</span> Intern Portal
            </div>
          </div>
          <CardTitle className="text-2xl font-bold text-center">Login to your account</CardTitle>
          <CardDescription className="text-center">
            Enter your SRIT college email and password to access the portal
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
            <div className="space-y-2">
              <Label htmlFor="email">College Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="your.name@srit.ac.in"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="border-srit-wheat focus:border-srit-orange focus:ring-srit-orange"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Password</Label>
                <Link href="/forgot-password" className="text-sm text-srit-orange hover:underline">
                  Forgot password?
                </Link>
              </div>
              <Input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="border-srit-wheat focus:border-srit-orange focus:ring-srit-orange"
              />
            </div>
            <Button
              type="submit"
              className="w-full bg-srit-orange hover:bg-srit-orange/90 text-white"
              disabled={isLoading}
            >
              {isLoading ? "Logging in..." : "Login"}
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/register" className="text-srit-orange hover:underline">
              Register
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}

