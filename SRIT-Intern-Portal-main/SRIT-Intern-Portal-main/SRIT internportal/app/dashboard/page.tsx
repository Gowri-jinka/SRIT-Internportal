import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Briefcase, BookOpen, TrendingUp, Calendar, CheckCircle2, Clock, ArrowRight } from "lucide-react"

export default function DashboardPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
        <div className="flex items-center gap-2">
          <span className="text-sm text-muted-foreground">Welcome back, Neha</span>
        </div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="srit-card-hover border-srit-wheat">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Applications</CardTitle>
            <Briefcase className="h-4 w-4 text-srit-orange" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">+2 from last week</p>
          </CardContent>
        </Card>
        <Card className="srit-card-hover border-srit-wheat">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Interviews Scheduled</CardTitle>
            <Calendar className="h-4 w-4 text-srit-orange" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3</div>
            <p className="text-xs text-muted-foreground">Next: Tomorrow, 10:00 AM</p>
          </CardContent>
        </Card>
        <Card className="srit-card-hover border-srit-wheat">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Resources Accessed</CardTitle>
            <BookOpen className="h-4 w-4 text-srit-orange" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">28</div>
            <p className="text-xs text-muted-foreground">+8 from last week</p>
          </CardContent>
        </Card>
        <Card className="srit-card-hover border-srit-wheat">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Profile Completion</CardTitle>
            <TrendingUp className="h-4 w-4 text-srit-orange" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">85%</div>
            <p className="text-xs text-muted-foreground">Add resume to complete</p>
          </CardContent>
        </Card>
      </div>

      <Tabs defaultValue="recommended">
        <TabsList className="bg-srit-cream/30">
          <TabsTrigger
            value="recommended"
            className="data-[state=active]:bg-srit-orange data-[state=active]:text-white"
          >
            Recommended Jobs
          </TabsTrigger>
          <TabsTrigger
            value="applications"
            className="data-[state=active]:bg-srit-orange data-[state=active]:text-white"
          >
            My Applications
          </TabsTrigger>
        </TabsList>
        <TabsContent value="recommended" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="srit-card-hover border-srit-wheat">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg font-bold">Software Developer Intern</CardTitle>
                  <Badge className="bg-srit-orange text-white hover:bg-srit-orange/90">CSE</Badge>
                </div>
                <CardDescription>TechSolutions Inc.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center text-sm">
                  <Calendar className="mr-2 h-4 w-4 text-srit-orange" />
                  <span>3 months</span>
                </div>
                <div className="flex items-center text-sm">
                  <Briefcase className="mr-2 h-4 w-4 text-srit-orange" />
                  <span>Remote</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Looking for a passionate developer with knowledge of React and Node.js.
                </p>
                <div className="pt-2">
                  <Link href="/dashboard/jobs/1">
                    <Button size="sm" className="w-full bg-srit-orange hover:bg-srit-orange/90 text-white">
                      View Details
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="srit-card-hover border-srit-wheat">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg font-bold">UI/UX Design Intern</CardTitle>
                  <Badge className="bg-srit-orange text-white hover:bg-srit-orange/90">CSD</Badge>
                </div>
                <CardDescription>DesignHub Studios</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center text-sm">
                  <Calendar className="mr-2 h-4 w-4 text-srit-orange" />
                  <span>6 months</span>
                </div>
                <div className="flex items-center text-sm">
                  <Briefcase className="mr-2 h-4 w-4 text-srit-orange" />
                  <span>Hybrid</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Create user-centered designs and prototypes for web and mobile applications.
                </p>
                <div className="pt-2">
                  <Link href="/dashboard/jobs/2">
                    <Button size="sm" className="w-full bg-srit-orange hover:bg-srit-orange/90 text-white">
                      View Details
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="srit-card-hover border-srit-wheat">
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg font-bold">Embedded Systems Intern</CardTitle>
                  <Badge className="bg-srit-orange text-white hover:bg-srit-orange/90">ECE</Badge>
                </div>
                <CardDescription>InnoTech Solutions</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center text-sm">
                  <Calendar className="mr-2 h-4 w-4 text-srit-orange" />
                  <span>4 months</span>
                </div>
                <div className="flex items-center text-sm">
                  <Briefcase className="mr-2 h-4 w-4 text-srit-orange" />
                  <span>On-site</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  Work on IoT devices and embedded systems programming.
                </p>
                <div className="pt-2">
                  <Link href="/dashboard/jobs/3">
                    <Button size="sm" className="w-full bg-srit-orange hover:bg-srit-orange/90 text-white">
                      View Details
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex justify-end">
            <Link href="/dashboard/jobs">
              <Button
                variant="outline"
                size="sm"
                className="gap-1 border-srit-orange text-srit-orange hover:bg-srit-orange/10"
              >
                View All Jobs
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </TabsContent>

        <TabsContent value="applications" className="space-y-4">
          <Card className="border-srit-wheat">
            <CardHeader>
              <CardTitle>Recent Applications</CardTitle>
              <CardDescription>Track the status of your job applications</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <h3 className="font-medium">Frontend Developer</h3>
                    <p className="text-sm text-muted-foreground">WebTech Solutions</p>
                  </div>
                  <Badge className="bg-green-500 hover:bg-green-600">
                    <CheckCircle2 className="mr-1 h-3 w-3" />
                    Accepted
                  </Badge>
                </div>

                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <h3 className="font-medium">Data Science Intern</h3>
                    <p className="text-sm text-muted-foreground">Analytics Pro</p>
                  </div>
                  <Badge variant="outline" className="border-srit-orange text-srit-orange">
                    <Clock className="mr-1 h-3 w-3" />
                    In Review
                  </Badge>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Mobile App Developer</h3>
                    <p className="text-sm text-muted-foreground">AppWorks Inc.</p>
                  </div>
                  <Badge variant="outline" className="border-srit-orange text-srit-orange">
                    <Clock className="mr-1 h-3 w-3" />
                    In Review
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>

      <div className="grid gap-4 md:grid-cols-2">
        <Card className="border-srit-wheat srit-card-hover">
          <CardHeader>
            <CardTitle>Upcoming Events</CardTitle>
            <CardDescription>Placement drives and workshops</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="rounded-md bg-srit-orange/10 p-2">
                  <Calendar className="h-4 w-4 text-srit-orange" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-medium">Campus Placement Drive</h4>
                  <p className="text-sm text-muted-foreground">TCS, Infosys, Wipro</p>
                  <p className="text-xs">April 15, 2025 • 9:00 AM</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-md bg-srit-orange/10 p-2">
                  <Calendar className="h-4 w-4 text-srit-orange" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-medium">Resume Building Workshop</h4>
                  <p className="text-sm text-muted-foreground">Career Development Cell</p>
                  <p className="text-xs">April 10, 2025 • 2:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-md bg-srit-orange/10 p-2">
                  <Calendar className="h-4 w-4 text-srit-orange" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-medium">Mock Interview Session</h4>
                  <p className="text-sm text-muted-foreground">Industry Experts</p>
                  <p className="text-xs">April 12, 2025 • 10:00 AM</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-srit-wheat srit-card-hover">
          <CardHeader>
            <CardTitle>Recommended Resources</CardTitle>
            <CardDescription>Based on your profile and interests</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="rounded-md bg-srit-orange/10 p-2">
                  <BookOpen className="h-4 w-4 text-srit-orange" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-medium">Data Structures & Algorithms</h4>
                  <p className="text-sm text-muted-foreground">Comprehensive guide for technical interviews</p>
                  <Link href="/dashboard/resources/dsa">
                    <Button variant="link" className="h-auto p-0 text-xs text-srit-orange hover:text-srit-orange/90">
                      View Resource
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-md bg-srit-orange/10 p-2">
                  <BookOpen className="h-4 w-4 text-srit-orange" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-medium">Aptitude Test Preparation</h4>
                  <p className="text-sm text-muted-foreground">Practice questions and mock tests</p>
                  <Link href="/dashboard/resources/aptitude">
                    <Button variant="link" className="h-auto p-0 text-xs text-srit-orange hover:text-srit-orange/90">
                      View Resource
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="rounded-md bg-srit-orange/10 p-2">
                  <BookOpen className="h-4 w-4 text-srit-orange" />
                </div>
                <div className="space-y-1">
                  <h4 className="font-medium">Resume Building Guide</h4>
                  <p className="text-sm text-muted-foreground">Templates and tips for an effective resume</p>
                  <Link href="/dashboard/resources/resume">
                    <Button variant="link" className="h-auto p-0 text-xs text-srit-orange hover:text-srit-orange/90">
                      View Resource
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

