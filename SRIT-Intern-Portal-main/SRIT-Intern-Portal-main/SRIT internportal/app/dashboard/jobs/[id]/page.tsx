"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { useParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  ArrowLeft,
  Building,
  MapPin,
  Calendar,
  Briefcase,
  Clock,
  DollarSign,
  Share2,
  Bookmark,
  CheckCircle,
  AlertCircle,
} from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { toast } from "@/components/ui/use-toast"

// Mock job data
const jobsData = [
  {
    id: "1",
    title: "Software Developer Intern",
    company: "TechSolutions Inc.",
    location: "Remote",
    duration: "3 months",
    type: "Internship",
    branch: "CSE",
    description:
      "We are looking for a passionate Software Developer Intern to join our dynamic team. As an intern, you will work on real-world projects and gain hands-on experience with our tech stack.",
    responsibilities: [
      "Develop and maintain web applications using React and Node.js",
      "Collaborate with senior developers to design and implement new features",
      "Write clean, maintainable, and efficient code",
      "Participate in code reviews and contribute to team discussions",
      "Debug and fix issues in existing applications",
    ],
    requirements: [
      "Currently pursuing a degree in Computer Science or related field",
      "Knowledge of JavaScript, HTML, and CSS",
      "Familiarity with React or similar frontend frameworks",
      "Basic understanding of Node.js and Express",
      "Good problem-solving skills and attention to detail",
      "Ability to work in a team environment",
    ],
    postedDate: "2 days ago",
    stipend: "₹15,000/month",
    applicationDeadline: "April 30, 2025",
    aboutCompany:
      "TechSolutions Inc. is a leading software development company specializing in web and mobile applications. We work with clients across various industries to deliver innovative digital solutions.",
  },
  {
    id: "2",
    title: "UI/UX Design Intern",
    company: "DesignHub Studios",
    location: "Hybrid",
    duration: "6 months",
    type: "Internship",
    branch: "CSD",
    description:
      "DesignHub Studios is seeking a creative UI/UX Design Intern to join our design team. This internship offers an opportunity to work on real client projects and build a professional portfolio.",
    responsibilities: [
      "Create wireframes, prototypes, and user flows for web and mobile applications",
      "Conduct user research and usability testing",
      "Collaborate with developers to implement designs",
      "Create visual design elements such as icons, illustrations, and graphics",
      "Participate in design reviews and team brainstorming sessions",
    ],
    requirements: [
      "Currently pursuing a degree in Design, HCI, or related field",
      "Proficiency in design tools like Figma, Adobe XD, or Sketch",
      "Understanding of UI/UX principles and best practices",
      "Basic knowledge of HTML/CSS is a plus",
      "Strong visual design skills and attention to detail",
      "Ability to receive and implement feedback",
    ],
    postedDate: "3 days ago",
    stipend: "₹12,000/month",
    applicationDeadline: "May 15, 2025",
    aboutCompany:
      "DesignHub Studios is a creative design agency specializing in user experience and interface design. We help businesses create intuitive and engaging digital experiences for their customers.",
  },
  {
    id: "3",
    title: "Embedded Systems Intern",
    company: "InnoTech Solutions",
    location: "On-site",
    duration: "4 months",
    type: "Internship",
    branch: "ECE",
    description:
      "InnoTech Solutions is looking for an Embedded Systems Intern to join our hardware team. This internship provides hands-on experience with IoT devices and embedded systems programming.",
    responsibilities: [
      "Assist in the development of firmware for embedded systems",
      "Work with microcontrollers and various sensors",
      "Test and debug hardware and software components",
      "Document technical specifications and procedures",
      "Participate in product development meetings",
    ],
    requirements: [
      "Currently pursuing a degree in Electronics, Computer Engineering, or related field",
      "Knowledge of C/C++ programming",
      "Familiarity with microcontrollers (Arduino, Raspberry Pi, etc.)",
      "Basic understanding of electronic circuits",
      "Interest in IoT and embedded systems",
      "Ability to work in a team environment",
    ],
    postedDate: "1 week ago",
    stipend: "₹10,000/month",
    applicationDeadline: "April 20, 2025",
    aboutCompany:
      "InnoTech Solutions specializes in developing innovative IoT devices and embedded systems for various industries including healthcare, agriculture, and smart homes.",
  },
]

export default function JobDetailPage() {
  const params = useParams()
  const router = useRouter()
  const jobId = params.id as string

  // Find the job based on the ID from the URL
  const job = jobsData.find((job) => job.id === jobId)

  const [isApplying, setIsApplying] = useState(false)
  const [coverLetter, setCoverLetter] = useState("")
  const [resumeFile, setResumeFile] = useState<File | null>(null)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [notification, setNotification] = useState<{ type: "success" | "error"; message: string } | null>(null)
  const [isBookmarked, setIsBookmarked] = useState(false)

  // If job not found, show error
  if (!job) {
    return (
      <div className="flex-1 p-8 flex flex-col items-center justify-center">
        <h2 className="text-2xl font-bold mb-4">Job not found</h2>
        <p className="text-muted-foreground mb-6">The job you're looking for doesn't exist or has been removed.</p>
        <Button
          onClick={() => router.push("/dashboard/jobs")}
          className="bg-srit-orange hover:bg-srit-orange/90 text-white"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Jobs
        </Button>
      </div>
    )
  }

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Validate form
    if (!resumeFile) {
      setNotification({
        type: "error",
        message: "Please upload your resume",
      })
      setIsSubmitting(false)
      return
    }

    // In a real app, this would submit the application to an API
    setTimeout(() => {
      setIsSubmitting(false)
      setIsApplying(false)
      setCoverLetter("")
      setResumeFile(null)

      // Show success notification
      setNotification({
        type: "success",
        message: "Application submitted successfully!",
      })

      // Clear notification after 3 seconds
      setTimeout(() => {
        setNotification(null)
      }, 3000)

      toast({
        title: "Application Submitted",
        description:
          "Your application has been submitted successfully. You can track its status in the Applications tab.",
      })
    }, 1500)
  }

  const handleBookmark = () => {
    setIsBookmarked(!isBookmarked)

    toast({
      title: isBookmarked ? "Job Removed" : "Job Saved",
      description: isBookmarked
        ? "This job has been removed from your saved jobs."
        : "This job has been saved to your profile.",
    })
  }

  const handleShare = () => {
    // In a real app, this would copy the job URL to clipboard
    navigator.clipboard.writeText(window.location.href)

    toast({
      title: "Link Copied",
      description: "Job link has been copied to clipboard.",
    })
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center gap-2 mb-6">
        <Button
          variant="outline"
          size="sm"
          onClick={() => router.push("/dashboard/jobs")}
          className="border-srit-orange text-srit-orange hover:bg-srit-orange/10"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Jobs
        </Button>
      </div>

      {notification && (
        <Alert
          variant={notification.type === "success" ? "default" : "destructive"}
          className={notification.type === "success" ? "bg-green-50 border-green-200 text-green-800" : ""}
        >
          {notification.type === "success" ? <CheckCircle className="h-4 w-4" /> : <AlertCircle className="h-4 w-4" />}
          <AlertDescription>{notification.message}</AlertDescription>
        </Alert>
      )}

      <div className="grid gap-4 md:grid-cols-3">
        <div className="md:col-span-2 space-y-4">
          <Card className="border-srit-wheat">
            <CardHeader>
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                <div>
                  <CardTitle className="text-2xl">{job.title}</CardTitle>
                  <CardDescription className="flex items-center mt-1">
                    <Building className="mr-1 h-4 w-4" />
                    {job.company}
                  </CardDescription>
                </div>
                <Badge className="bg-srit-orange text-white hover:bg-srit-orange/90">{job.branch}</Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                <div className="flex flex-col">
                  <span className="text-sm text-muted-foreground flex items-center">
                    <MapPin className="mr-1 h-4 w-4 text-srit-orange" />
                    Location
                  </span>
                  <span className="font-medium">{job.location}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-muted-foreground flex items-center">
                    <Briefcase className="mr-1 h-4 w-4 text-srit-orange" />
                    Job Type
                  </span>
                  <span className="font-medium">{job.type}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-muted-foreground flex items-center">
                    <Calendar className="mr-1 h-4 w-4 text-srit-orange" />
                    Duration
                  </span>
                  <span className="font-medium">{job.duration}</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-sm text-muted-foreground flex items-center">
                    <DollarSign className="mr-1 h-4 w-4 text-srit-orange" />
                    Stipend
                  </span>
                  <span className="font-medium">{job.stipend}</span>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                <Button
                  size="lg"
                  className="flex-1 md:flex-none bg-srit-orange hover:bg-srit-orange/90 text-white"
                  onClick={() => setIsApplying(true)}
                >
                  Apply Now
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className={
                    isBookmarked
                      ? "bg-srit-orange/10 text-srit-orange border-srit-orange"
                      : "hover:bg-srit-orange/10 hover:text-srit-orange hover:border-srit-orange"
                  }
                  onClick={handleBookmark}
                >
                  <Bookmark className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="hover:bg-srit-orange/10 hover:text-srit-orange hover:border-srit-orange"
                  onClick={handleShare}
                >
                  <Share2 className="h-4 w-4" />
                </Button>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Job Description</h3>
                <p className="text-muted-foreground">{job.description}</p>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Responsibilities</h3>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                  {job.responsibilities.map((responsibility, index) => (
                    <li key={index}>{responsibility}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">Requirements</h3>
                <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
                  {job.requirements.map((requirement, index) => (
                    <li key={index}>{requirement}</li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between text-sm text-muted-foreground border-t pt-4">
                <div className="flex items-center">
                  <Clock className="mr-1 h-4 w-4 text-srit-orange" />
                  <span>Posted: {job.postedDate}</span>
                </div>
                <div>
                  <span>Application Deadline: {job.applicationDeadline}</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="space-y-4">
          <Card className="border-srit-wheat srit-card-hover">
            <CardHeader>
              <CardTitle>About {job.company}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{job.aboutCompany}</p>
              <Button
                variant="link"
                className="p-0 h-auto mt-2 text-srit-orange hover:text-srit-orange/90"
                onClick={() => window.open("https://example.com", "_blank")}
              >
                Visit Company Website
              </Button>
            </CardContent>
          </Card>

          <Card className="border-srit-wheat srit-card-hover">
            <CardHeader>
              <CardTitle>Similar Jobs</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {jobsData
                .filter((j) => j.id !== job.id && j.branch === job.branch)
                .slice(0, 2)
                .map((similarJob) => (
                  <div
                    key={similarJob.id}
                    className="border border-srit-wheat rounded-lg p-3 hover:border-srit-orange transition-colors"
                  >
                    <h3 className="font-medium">{similarJob.title}</h3>
                    <p className="text-sm text-muted-foreground">{similarJob.company}</p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                      <span className="flex items-center">
                        <MapPin className="mr-1 h-3 w-3 text-srit-orange" />
                        {similarJob.location}
                      </span>
                      <span className="flex items-center">
                        <Briefcase className="mr-1 h-3 w-3 text-srit-orange" />
                        {similarJob.type}
                      </span>
                    </div>
                    <div className="mt-2">
                      <Link href={`/dashboard/jobs/${similarJob.id}`}>
                        <Button
                          variant="outline"
                          size="sm"
                          className="w-full border-srit-orange text-srit-orange hover:bg-srit-orange/10"
                        >
                          View Job
                        </Button>
                      </Link>
                    </div>
                  </div>
                ))}
            </CardContent>
          </Card>
        </div>
      </div>

      {isApplying && (
        <Card className="border-srit-wheat">
          <CardHeader>
            <CardTitle>Apply for {job.title}</CardTitle>
            <CardDescription>Complete the application form below</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleApply} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="resume">Resume/CV</Label>
                <Input
                  id="resume"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={(e) => {
                    if (e.target.files && e.target.files.length > 0) {
                      setResumeFile(e.target.files[0])
                    }
                  }}
                  className="border-srit-wheat focus:border-srit-orange focus:ring-srit-orange"
                  required
                />
                <p className="text-xs text-muted-foreground">Upload your resume (PDF, DOC, or DOCX format)</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="coverLetter">Cover Letter</Label>
                <Textarea
                  id="coverLetter"
                  placeholder="Explain why you're interested in this position and why you would be a good fit"
                  value={coverLetter}
                  onChange={(e) => setCoverLetter(e.target.value)}
                  className="min-h-[150px] border-srit-wheat focus:border-srit-orange focus:ring-srit-orange"
                />
              </div>

              <div className="flex gap-2 justify-end">
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => setIsApplying(false)}
                  className="border-srit-orange text-srit-orange hover:bg-srit-orange/10"
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  className="bg-srit-orange hover:bg-srit-orange/90 text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Submit Application"}
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>
      )}
    </div>
  )
}

