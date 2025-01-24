"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
// import { Label } from "@/components/ui/label"
// import { Alert, AlertDescription } from "@/components/ui/alert"
// import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => { 
    e.preventDefault()
    setError("")

    if (!email || !password) {
      setError("Please fill in all fields")
      return
    }

    try {
      // Here you would typically make an API call to your authentication endpoint
      // For this example, we'll just simulate a successful login
      console.log("Logging in with:", email, password)

      // Simulate an API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // If login is successful, redirect to dashboard
      router.push("/dashboard")
    } catch (err) {
      setError("Invalid email or password")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <section className="w-full max-w-md bg-blue-200 p-8">
        <div className="space-y-1">
          <span className="text-3xl font-bold">Login / Register</span>
          <p>Enter your email and password to login to your account</p>
        </div>
        <div>
          <form onSubmit={handleSubmit} className="space-y-4 text-base">
          <div className="space-y-6 space-x-2">
              <label htmlFor="name">FirstName</label>
              <input
                id="name"
                type="name"
                placeholder="your name"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-6 space-x-2">
              <label htmlFor="name">Full Name</label>
              <input
                id="name"
                type="name"
                placeholder="your fullName"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-6 space-x-10">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                type="email"
                placeholder="m@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="space-y-3 space-x-3">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            {error && (
              <div>
                <span>{error}</span>
              </div>
            )}
            <button type="submit" className="w-full">
              Login
            </button>
          </form>
        </div>
        <footer>
          <p className="text-sm text-center w-full">
            Don't have an account?{" "}
            <Link href="/register" className="text-primary hover:underline">
              Register here
            </Link>
          </p>
        </footer>
      </section>
    </div>
  )
}

