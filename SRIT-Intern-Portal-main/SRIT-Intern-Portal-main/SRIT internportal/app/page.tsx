import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-xl">
            <span className="text-srit-orange">SRIT</span> Intern Portal
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </Link>
            <Link href="#resources" className="text-muted-foreground hover:text-foreground transition-colors">
              Resources
            </Link>
            <Link href="#about" className="text-muted-foreground hover:text-foreground transition-colors">
              About
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="outline">Login</Button>
            </Link>
            <Link href="/register">
              <Button className="bg-srit-orange hover:bg-srit-orange/90 text-white">Register</Button>
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-srit-cream to-white">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 xl:grid-cols-2">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                    Your Gateway to <span className="text-srit-orange">Career Opportunities</span>
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    A dedicated platform for SRIT College students, providing easy access to internship and job
                    opportunities, as well as placement preparation resources.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Link href="/register">
                    <Button size="lg" className="gap-1.5 bg-srit-orange hover:bg-srit-orange/90 text-white">
                      Get Started
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  </Link>
                  <Link href="/login">
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-srit-orange text-srit-orange hover:bg-srit-orange/10"
                    >
                      Login
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img
                  src="/placeholder.svg?height=400&width=500"
                  alt="SRIT Intern Portal"
                  className="rounded-lg object-cover shadow-xl"
                  width={500}
                  height={400}
                />
              </div>
            </div>
          </div>
        </section>
        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-srit-cream/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Core Features</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Everything you need to accelerate your career journey
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm srit-card-hover bg-white">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-srit-orange/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-srit-orange"
                  >
                    <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Secure Authentication</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Login using your SRIT college email ID with secure authentication to restrict access to only verified
                  students.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm srit-card-hover bg-white">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-srit-orange/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-srit-orange"
                  >
                    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9" />
                    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Job & Internship Listings</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Real-time updates on available opportunities categorized by branch with powerful search and filter
                  options.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm srit-card-hover bg-white">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-srit-orange/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-srit-orange"
                  >
                    <path d="M12 20h9" />
                    <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Placement Preparation</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Comprehensive resources for aptitude, coding, interview preparation, and resume building.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm srit-card-hover bg-white">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-srit-orange/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-srit-orange"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Profile Management</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Create and update your profile, upload resumes, certifications, and portfolios.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm srit-card-hover bg-white">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-srit-orange/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-srit-orange"
                  >
                    <path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 2-2h3.8a2 2 0 0 0 1.4-.6L12 4.6a2 2 0 0 1 1.4-.6h3.8a2 2 0 0 1 2 2v2.4Z" />
                    <path d="M12 10v6" />
                    <path d="m15 13-3 3-3-3" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">AI Recommendations</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Personalized job suggestions and career guidance based on your profile and skills.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm srit-card-hover bg-white">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-srit-orange/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-srit-orange"
                  >
                    <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Application Tracker</h3>
                <p className="text-sm text-muted-foreground text-center">
                  Track applied jobs/internships and receive notifications for application status updates.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="resources" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Placement Resources</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Comprehensive preparation materials to help you succeed
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-2">
              <div className="flex flex-col space-y-2 rounded-lg border p-6 shadow-sm srit-card-hover bg-white">
                <h3 className="text-xl font-bold text-srit-orange">Aptitude & Reasoning</h3>
                <p className="text-muted-foreground">
                  Practice tests and materials to improve your quantitative, logical, and verbal reasoning skills.
                </p>
                <Link href="/login" className="text-srit-orange hover:underline mt-2 inline-flex items-center">
                  Access Resources
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              <div className="flex flex-col space-y-2 rounded-lg border p-6 shadow-sm srit-card-hover bg-white">
                <h3 className="text-xl font-bold text-srit-orange">Coding & DSA</h3>
                <p className="text-muted-foreground">
                  Resources for data structures, algorithms, and coding practice for technical interviews.
                </p>
                <Link href="/login" className="text-srit-orange hover:underline mt-2 inline-flex items-center">
                  Access Resources
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              <div className="flex flex-col space-y-2 rounded-lg border p-6 shadow-sm srit-card-hover bg-white">
                <h3 className="text-xl font-bold text-srit-orange">Interview Preparation</h3>
                <p className="text-muted-foreground">
                  Tips and mock interviews for both HR and technical rounds to boost your confidence.
                </p>
                <Link href="/login" className="text-srit-orange hover:underline mt-2 inline-flex items-center">
                  Access Resources
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
              <div className="flex flex-col space-y-2 rounded-lg border p-6 shadow-sm srit-card-hover bg-white">
                <h3 className="text-xl font-bold text-srit-orange">Resume Building</h3>
                <p className="text-muted-foreground">
                  Templates and guidelines to create an impressive resume that stands out to recruiters.
                </p>
                <Link href="/login" className="text-srit-orange hover:underline mt-2 inline-flex items-center">
                  Access Resources
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-srit-cream/30">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  About SRIT Intern Portal
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  A dedicated platform designed exclusively for SRIT College students
                </p>
              </div>
              <div className="mx-auto max-w-3xl text-center">
                <p className="mb-4">
                  The SRIT Intern Portal is an initiative to bridge the gap between students and industry opportunities.
                  Our platform provides branch-specific listings for:
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-6">
                  <div className="rounded-lg border p-3 bg-white hover:border-srit-orange transition-colors">CSE</div>
                  <div className="rounded-lg border p-3 bg-white hover:border-srit-orange transition-colors">CSD</div>
                  <div className="rounded-lg border p-3 bg-white hover:border-srit-orange transition-colors">ECE</div>
                  <div className="rounded-lg border p-3 bg-white hover:border-srit-orange transition-colors">EEE</div>
                  <div className="rounded-lg border p-3 bg-white hover:border-srit-orange transition-colors">Civil</div>
                  <div className="rounded-lg border p-3 bg-white hover:border-srit-orange transition-colors">
                    Mechanical
                  </div>
                </div>
                <p>
                  With exclusive college partnerships and AI-powered recommendations, we're committed to helping every
                  SRIT student find the perfect career opportunity.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="w-full border-t py-6 bg-white">
        <div className="container flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between">
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            © 2025 SRIT Intern Portal. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-muted-foreground hover:text-srit-orange">
              Terms
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-srit-orange">
              Privacy
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-srit-orange">
              Contact
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

