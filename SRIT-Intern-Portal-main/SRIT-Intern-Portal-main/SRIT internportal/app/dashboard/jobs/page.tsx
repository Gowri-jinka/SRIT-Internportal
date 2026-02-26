"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Calendar, Briefcase, MapPin, Search } from "lucide-react"
import Link from "next/link"

// Mock data for jobs and internships
const jobsData = [
  {
    id: 1,
    title: "Software Developer Intern",
    company: "TechSolutions Inc.",
    location: "Remote",
    duration: "3 months",
    type: "Internship",
    branch: "CSE",
    description: "Looking for a passionate developer with knowledge of React and Node.js.",
    postedDate: "2 days ago",
    stipend: "₹15,000/month",
  },
  {
    id: 2,
    title: "UI/UX Design Intern",
    company: "DesignHub Studios",
    location: "Hybrid",
    duration: "6 months",
    type: "Internship",
    branch: "CSD",
    description: "Create user-centered designs and prototypes for web and mobile applications.",
    postedDate: "3 days ago",
    stipend: "₹12,000/month",
  },
  {
    id: 3,
    title: "Embedded Systems Intern",
    company: "InnoTech Solutions",
    location: "On-site",
    duration: "4 months",
    type: "Internship",
    branch: "ECE",
    description: "Work on IoT devices and embedded systems programming.",
    postedDate: "1 week ago",
    stipend: "₹10,000/month",
  },
  {
    id: 4,
    title: "Frontend Developer",
    company: "WebTech Solutions",
    location: "Remote",
    type: "Full-time",
    branch: "CSE",
    description: "Develop responsive web applications using modern JavaScript frameworks.",
    postedDate: "3 days ago",
    salary: "₹5-7 LPA",
  },
  {
    id: 5,
    title: "Electrical Engineer",
    company: "PowerGrid Systems",
    location: "On-site",
    type: "Full-time",
    branch: "EEE",
    description: "Design and implement electrical systems for industrial applications.",
    postedDate: "5 days ago",
    salary: "₹4-6 LPA",
  },
  {
    id: 6,
    title: "Civil Engineer",
    company: "BuildTech Constructions",
    location: "On-site",
    type: "Full-time",
    branch: "CIVIL",
    description: "Oversee construction projects and ensure compliance with safety standards.",
    postedDate: "1 week ago",
    salary: "₹4-5 LPA",
  },
]

export default function JobsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [branchFilter, setBranchFilter] = useState("all")
  const [typeFilter, setTypeFilter] = useState("all")
  const [locationFilter, setLocationFilter] = useState("all")

  // Filter jobs based on search term and filters
  const filteredJobs = jobsData.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.description.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesBranch = branchFilter === "all" || job.branch === branchFilter
    const matchesType = typeFilter === "all" || job.type === typeFilter
    const matchesLocation = locationFilter === "all" || job.location === locationFilter

    return matchesSearch && matchesBranch && matchesType && matchesLocation
  })

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Jobs & Internships</h2>
      </div>

      <div className="flex flex-col gap-4 md:flex-row">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search jobs, companies, or keywords..."
              className="pl-8 border-srit-wheat focus:border-srit-orange focus:ring-srit-orange"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          <Select value={branchFilter} onValueChange={setBranchFilter}>
            <SelectTrigger className="w-[130px] border-srit-wheat focus:border-srit-orange focus:ring-srit-orange">
              <SelectValue placeholder="Branch" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Branches</SelectItem>
              <SelectItem value="CSE">CSE</SelectItem>
              <SelectItem value="CSD">CSD</SelectItem>
              <SelectItem value="ECE">ECE</SelectItem>
              <SelectItem value="EEE">EEE</SelectItem>
              <SelectItem value="CIVIL">Civil</SelectItem>
              <SelectItem value="MECH">Mechanical</SelectItem>
            </SelectContent>
          </Select>

          <Select value={typeFilter} onValueChange={setTypeFilter}>
            <SelectTrigger className="w-[130px] border-srit-wheat focus:border-srit-orange focus:ring-srit-orange">
              <SelectValue placeholder="Job Type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Types</SelectItem>
              <SelectItem value="Internship">Internship</SelectItem>
              <SelectItem value="Full-time">Full-time</SelectItem>
              <SelectItem value="Part-time">Part-time</SelectItem>
            </SelectContent>
          </Select>

          <Select value={locationFilter} onValueChange={setLocationFilter}>
            <SelectTrigger className="w-[130px] border-srit-wheat focus:border-srit-orange focus:ring-srit-orange">
              <SelectValue placeholder="Location" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Locations</SelectItem>
              <SelectItem value="Remote">Remote</SelectItem>
              <SelectItem value="Hybrid">Hybrid</SelectItem>
              <SelectItem value="On-site">On-site</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Tabs defaultValue="all">
        <TabsList className="bg-srit-cream/30">
          <TabsTrigger value="all" className="data-[state=active]:bg-srit-orange data-[state=active]:text-white">
            All
          </TabsTrigger>
          <TabsTrigger
            value="internships"
            className="data-[state=active]:bg-srit-orange data-[state=active]:text-white"
          >
            Internships
          </TabsTrigger>
          <TabsTrigger value="jobs" className="data-[state=active]:bg-srit-orange data-[state=active]:text-white">
            Full-time Jobs
          </TabsTrigger>
          <TabsTrigger value="exclusive" className="data-[state=active]:bg-srit-orange data-[state=active]:text-white">
            SRIT Exclusive
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <Card key={job.id} className="srit-card-hover border-srit-wheat">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg font-bold">{job.title}</CardTitle>
                      <Badge className="bg-srit-orange text-white hover:bg-srit-orange/90">{job.branch}</Badge>
                    </div>
                    <CardDescription>{job.company}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-center text-sm">
                      <MapPin className="mr-2 h-4 w-4 text-srit-orange" />
                      <span>{job.location}</span>
                    </div>
                    {job.duration && (
                      <div className="flex items-center text-sm">
                        <Calendar className="mr-2 h-4 w-4 text-srit-orange" />
                        <span>{job.duration}</span>
                      </div>
                    )}
                    <div className="flex items-center text-sm">
                      <Briefcase className="mr-2 h-4 w-4 text-srit-orange" />
                      <span>{job.type}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">{job.description}</p>
                    <div className="flex justify-between items-center text-xs text-muted-foreground pt-2">
                      <span>Posted: {job.postedDate}</span>
                      <span>{job.stipend || job.salary}</span>
                    </div>
                    <div className="pt-2">
                      <Link href={`/dashboard/jobs/${job.id}`}>
                        <Button size="sm" className="w-full bg-srit-orange hover:bg-srit-orange/90 text-white">
                          View Details
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))
            ) : (
              <div className="col-span-full flex flex-col items-center justify-center py-12 text-center">
                <div className="rounded-full bg-srit-orange/10 p-3">
                  <Search className="h-6 w-6 text-srit-orange" />
                </div>
                <h3 className="mt-4 text-lg font-semibold">No results found</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  We couldn't find any jobs matching your search criteria. Try adjusting your filters.
                </p>
              </div>
            )}
          </div>
        </TabsContent>

        <TabsContent value="internships" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredJobs
              .filter((job) => job.type === "Internship")
              .map((job) => (
                <Card key={job.id} className="srit-card-hover border-srit-wheat">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg font-bold">{job.title}</CardTitle>
                      <Badge className="bg-srit-orange text-white hover:bg-srit-orange/90">{job.branch}</Badge>
                    </div>
                    <CardDescription>{job.company}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-center text-sm">
                      <MapPin className="mr-2 h-4 w-4 text-srit-orange" />
                      <span>{job.location}</span>
                    </div>
                    {job.duration && (
                      <div className="flex items-center text-sm">
                        <Calendar className="mr-2 h-4 w-4 text-srit-orange" />
                        <span>{job.duration}</span>
                      </div>
                    )}
                    <p className="text-sm text-muted-foreground mt-2">{job.description}</p>
                    <div className="flex justify-between items-center text-xs text-muted-foreground pt-2">
                      <span>Posted: {job.postedDate}</span>
                      <span>{job.stipend}</span>
                    </div>
                    <div className="pt-2">
                      <Link href={`/dashboard/jobs/${job.id}`}>
                        <Button size="sm" className="w-full bg-srit-orange hover:bg-srit-orange/90 text-white">
                          View Details
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="jobs" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {filteredJobs
              .filter((job) => job.type === "Full-time")
              .map((job) => (
                <Card key={job.id} className="srit-card-hover border-srit-wheat">
                  <CardHeader className="pb-2">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg font-bold">{job.title}</CardTitle>
                      <Badge className="bg-srit-orange text-white hover:bg-srit-orange/90">{job.branch}</Badge>
                    </div>
                    <CardDescription>{job.company}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <div className="flex items-center text-sm">
                      <MapPin className="mr-2 h-4 w-4 text-srit-orange" />
                      <span>{job.location}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">{job.description}</p>
                    <div className="flex justify-between items-center text-xs text-muted-foreground pt-2">
                      <span>Posted: {job.postedDate}</span>
                      <span>{job.salary}</span>
                    </div>
                    <div className="pt-2">
                      <Link href={`/dashboard/jobs/${job.id}`}>
                        <Button size="sm" className="w-full bg-srit-orange hover:bg-srit-orange/90 text-white">
                          View Details
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </TabsContent>

        <TabsContent value="exclusive" className="space-y-4">
          <Card className="border-srit-wheat">
            <CardHeader>
              <CardTitle>SRIT Exclusive Opportunities</CardTitle>
              <CardDescription>Special internship and job opportunities partnered with SRIT College</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="rounded-lg border p-4 hover:border-srit-orange transition-colors">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">Campus Recruitment Drive</h3>
                      <p className="text-sm text-muted-foreground">TCS, Infosys, Wipro</p>
                    </div>
                    <Badge className="bg-srit-orange text-white">Exclusive</Badge>
                  </div>
                  <p className="text-sm mt-2">
                    Annual campus recruitment drive for final year students across all branches. Multiple companies will
                    be visiting for placements.
                  </p>
                  <div className="flex justify-between items-center mt-4">
                    <div className="flex items-center text-sm">
                      <Calendar className="mr-2 h-4 w-4 text-srit-orange" />
                      <span>April 15, 2025</span>
                    </div>
                    <Button size="sm" className="bg-srit-orange hover:bg-srit-orange/90 text-white">
                      Register
                    </Button>
                  </div>
                </div>

                <div className="rounded-lg border p-4 hover:border-srit-orange transition-colors">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">Summer Internship Program</h3>
                      <p className="text-sm text-muted-foreground">SRIT Industry Partners</p>
                    </div>
                    <Badge className="bg-srit-orange text-white">Exclusive</Badge>
                  </div>
                  <p className="text-sm mt-2">
                    Special summer internship program for pre-final year students. Opportunities across various domains
                    with SRIT's industry partners.
                  </p>
                  <div className="flex justify-between items-center mt-4">
                    <div className="flex items-center text-sm">
                      <Calendar className="mr-2 h-4 w-4 text-srit-orange" />
                      <span>May 1, 2025</span>
                    </div>
                    <Button size="sm" className="bg-srit-orange hover:bg-srit-orange/90 text-white">
                      Apply
                    </Button>
                  </div>
                </div>

                <div className="rounded-lg border p-4 hover:border-srit-orange transition-colors">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold">Research Assistant Positions</h3>
                      <p className="text-sm text-muted-foreground">SRIT Research Labs</p>
                    </div>
                    <Badge className="bg-srit-orange text-white">Exclusive</Badge>
                  </div>
                  <p className="text-sm mt-2">
                    Research assistant positions available at SRIT Research Labs for students interested in pursuing
                    research in emerging technologies.
                  </p>
                  <div className="flex justify-between items-center mt-4">
                    <div className="flex items-center text-sm">
                      <Calendar className="mr-2 h-4 w-4 text-srit-orange" />
                      <span>Ongoing</span>
                    </div>
                    <Button size="sm" className="bg-srit-orange hover:bg-srit-orange/90 text-white">
                      Apply
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

