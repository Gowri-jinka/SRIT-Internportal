"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { BookOpen, Code, FileText, Users, Calculator, CheckCircle2, ArrowRight, Download } from "lucide-react"

export default function ResourcesPage() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Placement Resources</h2>
      </div>

      <Tabs defaultValue="all">
        <TabsList className="bg-srit-cream/30">
          <TabsTrigger value="all" className="data-[state=active]:bg-srit-orange data-[state=active]:text-white">
            All Resources
          </TabsTrigger>
          <TabsTrigger value="aptitude" className="data-[state=active]:bg-srit-orange data-[state=active]:text-white">
            Aptitude
          </TabsTrigger>
          <TabsTrigger value="coding" className="data-[state=active]:bg-srit-orange data-[state=active]:text-white">
            Coding & DSA
          </TabsTrigger>
          <TabsTrigger value="interview" className="data-[state=active]:bg-srit-orange data-[state=active]:text-white">
            Interview Prep
          </TabsTrigger>
          <TabsTrigger value="resume" className="data-[state=active]:bg-srit-orange data-[state=active]:text-white">
            Resume Building
          </TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            <Card className="border-srit-wheat srit-card-hover">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-srit-orange/10 p-2">
                    <Calculator className="h-4 w-4 text-srit-orange" />
                  </div>
                  <CardTitle>Aptitude & Reasoning</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Practice tests and materials to improve your quantitative, logical, and verbal reasoning skills.
                </p>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Quantitative Aptitude</span>
                      <span className="text-muted-foreground">12/20 completed</span>
                    </div>
                    <Progress value={60} className="h-2" indicatorClassName="bg-srit-orange" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Logical Reasoning</span>
                      <span className="text-muted-foreground">8/15 completed</span>
                    </div>
                    <Progress value={53} className="h-2" indicatorClassName="bg-srit-orange" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Verbal Ability</span>
                      <span className="text-muted-foreground">5/10 completed</span>
                    </div>
                    <Progress value={50} className="h-2" indicatorClassName="bg-srit-orange" />
                  </div>
                </div>
                <div className="mt-4">
                  <Link href="/dashboard/resources/aptitude">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-srit-orange text-srit-orange hover:bg-srit-orange/10"
                    >
                      Continue Learning
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="border-srit-wheat srit-card-hover">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-srit-orange/10 p-2">
                    <Code className="h-4 w-4 text-srit-orange" />
                  </div>
                  <CardTitle>Coding & DSA</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Resources for data structures, algorithms, and coding practice for technical interviews.
                </p>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Data Structures</span>
                      <span className="text-muted-foreground">15/25 completed</span>
                    </div>
                    <Progress value={60} className="h-2" indicatorClassName="bg-srit-orange" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Algorithms</span>
                      <span className="text-muted-foreground">10/20 completed</span>
                    </div>
                    <Progress value={50} className="h-2" indicatorClassName="bg-srit-orange" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Problem Solving</span>
                      <span className="text-muted-foreground">20/50 completed</span>
                    </div>
                    <Progress value={40} className="h-2" indicatorClassName="bg-srit-orange" />
                  </div>
                </div>
                <div className="mt-4">
                  <Link href="/dashboard/resources/coding">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-srit-orange text-srit-orange hover:bg-srit-orange/10"
                    >
                      Continue Learning
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="border-srit-wheat srit-card-hover">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-srit-orange/10 p-2">
                    <Users className="h-4 w-4 text-srit-orange" />
                  </div>
                  <CardTitle>Interview Preparation</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Tips and mock interviews for both HR and technical rounds to boost your confidence.
                </p>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>HR Interview Questions</span>
                      <span className="text-muted-foreground">8/15 completed</span>
                    </div>
                    <Progress value={53} className="h-2" indicatorClassName="bg-srit-orange" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Technical Interview</span>
                      <span className="text-muted-foreground">5/12 completed</span>
                    </div>
                    <Progress value={42} className="h-2" indicatorClassName="bg-srit-orange" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Mock Interviews</span>
                      <span className="text-muted-foreground">2/5 completed</span>
                    </div>
                    <Progress value={40} className="h-2" indicatorClassName="bg-srit-orange" />
                  </div>
                </div>
                <div className="mt-4">
                  <Link href="/dashboard/resources/interview">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-srit-orange text-srit-orange hover:bg-srit-orange/10"
                    >
                      Continue Learning
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="border-srit-wheat srit-card-hover">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-srit-orange/10 p-2">
                    <FileText className="h-4 w-4 text-srit-orange" />
                  </div>
                  <CardTitle>Resume Building</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Templates and guidelines to create an impressive resume that stands out to recruiters.
                </p>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Resume Templates</span>
                      <span className="text-muted-foreground">3/5 viewed</span>
                    </div>
                    <Progress value={60} className="h-2" indicatorClassName="bg-srit-orange" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Resume Guidelines</span>
                      <span className="text-muted-foreground">4/8 completed</span>
                    </div>
                    <Progress value={50} className="h-2" indicatorClassName="bg-srit-orange" />
                  </div>
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Resume Review</span>
                      <span className="text-muted-foreground">Not started</span>
                    </div>
                    <Progress value={0} className="h-2" indicatorClassName="bg-srit-orange" />
                  </div>
                </div>
                <div className="mt-4">
                  <Link href="/dashboard/resources/resume">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-srit-orange text-srit-orange hover:bg-srit-orange/10"
                    >
                      Continue Learning
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="border-srit-wheat srit-card-hover">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-srit-orange/10 p-2">
                    <BookOpen className="h-4 w-4 text-srit-orange" />
                  </div>
                  <CardTitle>Previous Year Papers</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Collection of previous year placement papers from various companies.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between rounded-md border border-srit-wheat p-2 hover:border-srit-orange transition-colors">
                    <span className="text-sm">TCS Placement Paper 2024</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-srit-orange hover:text-srit-orange/90 hover:bg-srit-orange/10"
                      onClick={() => window.open("/sample-paper.pdf", "_blank")}
                    >
                      <Download className="mr-1 h-3 w-3" />
                      Download
                    </Button>
                  </div>
                  <div className="flex items-center justify-between rounded-md border border-srit-wheat p-2 hover:border-srit-orange transition-colors">
                    <span className="text-sm">Infosys Placement Paper 2024</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-srit-orange hover:text-srit-orange/90 hover:bg-srit-orange/10"
                      onClick={() => window.open("/sample-paper.pdf", "_blank")}
                    >
                      <Download className="mr-1 h-3 w-3" />
                      Download
                    </Button>
                  </div>
                  <div className="flex items-center justify-between rounded-md border border-srit-wheat p-2 hover:border-srit-orange transition-colors">
                    <span className="text-sm">Wipro Placement Paper 2024</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-srit-orange hover:text-srit-orange/90 hover:bg-srit-orange/10"
                      onClick={() => window.open("/sample-paper.pdf", "_blank")}
                    >
                      <Download className="mr-1 h-3 w-3" />
                      Download
                    </Button>
                  </div>
                  <div className="flex items-center justify-between rounded-md border border-srit-wheat p-2 hover:border-srit-orange transition-colors">
                    <span className="text-sm">Cognizant Placement Paper 2024</span>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-srit-orange hover:text-srit-orange/90 hover:bg-srit-orange/10"
                      onClick={() => window.open("/sample-paper.pdf", "_blank")}
                    >
                      <Download className="mr-1 h-3 w-3" />
                      Download
                    </Button>
                  </div>
                </div>
                <div className="mt-4">
                  <Link href="/dashboard/resources/papers">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-srit-orange text-srit-orange hover:bg-srit-orange/10"
                    >
                      View All Papers
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            <Card className="border-srit-wheat srit-card-hover">
              <CardHeader className="pb-2">
                <div className="flex items-center gap-2">
                  <div className="rounded-full bg-srit-orange/10 p-2">
                    <CheckCircle2 className="h-4 w-4 text-srit-orange" />
                  </div>
                  <CardTitle>Mock Tests</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  Practice with full-length mock tests simulating actual placement exams.
                </p>
                <div className="space-y-2">
                  <div className="flex items-center justify-between rounded-md border border-srit-wheat p-2 hover:border-srit-orange transition-colors">
                    <div>
                      <span className="text-sm font-medium">Aptitude Mock Test 1</span>
                      <p className="text-xs text-muted-foreground">60 minutes • 50 questions</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-srit-orange hover:text-srit-orange/90 hover:bg-srit-orange/10"
                      onClick={() => (window.location.href = "/dashboard/resources/mock-tests/aptitude-1")}
                    >
                      Start
                    </Button>
                  </div>
                  <div className="flex items-center justify-between rounded-md border border-srit-wheat p-2 hover:border-srit-orange transition-colors">
                    <div>
                      <span className="text-sm font-medium">Technical Mock Test 1</span>
                      <p className="text-xs text-muted-foreground">90 minutes • 60 questions</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-srit-orange hover:text-srit-orange/90 hover:bg-srit-orange/10"
                      onClick={() => (window.location.href = "/dashboard/resources/mock-tests/technical-1")}
                    >
                      Start
                    </Button>
                  </div>
                  <div className="flex items-center justify-between rounded-md border border-srit-wheat p-2 hover:border-srit-orange transition-colors">
                    <div>
                      <span className="text-sm font-medium">Coding Assessment 1</span>
                      <p className="text-xs text-muted-foreground">120 minutes • 3 problems</p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-srit-orange hover:text-srit-orange/90 hover:bg-srit-orange/10"
                      onClick={() => (window.location.href = "/dashboard/resources/mock-tests/coding-1")}
                    >
                      Start
                    </Button>
                  </div>
                </div>
                <div className="mt-4">
                  <Link href="/dashboard/resources/mock-tests">
                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-srit-orange text-srit-orange hover:bg-srit-orange/10"
                    >
                      View All Tests
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="aptitude" className="space-y-4">
          <Card className="border-srit-wheat">
            <CardHeader>
              <CardTitle>Aptitude & Reasoning Resources</CardTitle>
              <CardDescription>
                Comprehensive materials to help you prepare for aptitude and reasoning sections of placement tests
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Quantitative Aptitude</h3>
                  <div className="grid gap-2 md:grid-cols-2">
                    <div className="rounded-md border border-srit-wheat p-3 hover:border-srit-orange transition-colors">
                      <h4 className="font-medium">Number Systems</h4>
                      <p className="text-sm text-muted-foreground">Learn about HCF, LCM, and number properties</p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-xs">20 lessons</span>
                        <Button
                          variant="link"
                          size="sm"
                          className="h-auto p-0 text-srit-orange hover:text-srit-orange/90"
                        >
                          Start <ArrowRight className="ml-1 h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                    <div className="rounded-md border border-srit-wheat p-3 hover:border-srit-orange transition-colors">
                      <h4 className="font-medium">Percentages</h4>
                      <p className="text-sm text-muted-foreground">Master percentage calculations and applications</p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-xs">15 lessons</span>
                        <Button
                          variant="link"
                          size="sm"
                          className="h-auto p-0 text-srit-orange hover:text-srit-orange/90"
                        >
                          Start <ArrowRight className="ml-1 h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                    <div className="rounded-md border border-srit-wheat p-3 hover:border-srit-orange transition-colors">
                      <h4 className="font-medium">Profit & Loss</h4>
                      <p className="text-sm text-muted-foreground">
                        Understand profit, loss, and discount calculations
                      </p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-xs">18 lessons</span>
                        <Button
                          variant="link"
                          size="sm"
                          className="h-auto p-0 text-srit-orange hover:text-srit-orange/90"
                        >
                          Start <ArrowRight className="ml-1 h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                    <div className="rounded-md border border-srit-wheat p-3 hover:border-srit-orange transition-colors">
                      <h4 className="font-medium">Time & Work</h4>
                      <p className="text-sm text-muted-foreground">
                        Solve problems related to time, work, and efficiency
                      </p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-xs">12 lessons</span>
                        <Button
                          variant="link"
                          size="sm"
                          className="h-auto p-0 text-srit-orange hover:text-srit-orange/90"
                        >
                          Start <ArrowRight className="ml-1 h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Logical Reasoning</h3>
                  <div className="grid gap-2 md:grid-cols-2">
                    <div className="rounded-md border border-srit-wheat p-3 hover:border-srit-orange transition-colors">
                      <h4 className="font-medium">Verbal Reasoning</h4>
                      <p className="text-sm text-muted-foreground">Practice syllogisms, statements, and arguments</p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-xs">15 lessons</span>
                        <Button
                          variant="link"
                          size="sm"
                          className="h-auto p-0 text-srit-orange hover:text-srit-orange/90"
                        >
                          Start <ArrowRight className="ml-1 h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                    <div className="rounded-md border border-srit-wheat p-3 hover:border-srit-orange transition-colors">
                      <h4 className="font-medium">Non-verbal Reasoning</h4>
                      <p className="text-sm text-muted-foreground">Learn pattern recognition and visual reasoning</p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-xs">10 lessons</span>
                        <Button
                          variant="link"
                          size="sm"
                          className="h-auto p-0 text-srit-orange hover:text-srit-orange/90"
                        >
                          Start <ArrowRight className="ml-1 h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                    <div className="rounded-md border border-srit-wheat p-3 hover:border-srit-orange transition-colors">
                      <h4 className="font-medium">Puzzles</h4>
                      <p className="text-sm text-muted-foreground">Solve logical puzzles and brain teasers</p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-xs">20 lessons</span>
                        <Button
                          variant="link"
                          size="sm"
                          className="h-auto p-0 text-srit-orange hover:text-srit-orange/90"
                        >
                          Start <ArrowRight className="ml-1 h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                    <div className="rounded-md border border-srit-wheat p-3 hover:border-srit-orange transition-colors">
                      <h4 className="font-medium">Data Interpretation</h4>
                      <p className="text-sm text-muted-foreground">Analyze charts, graphs, and tables</p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-xs">12 lessons</span>
                        <Button
                          variant="link"
                          size="sm"
                          className="h-auto p-0 text-srit-orange hover:text-srit-orange/90"
                        >
                          Start <ArrowRight className="ml-1 h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Practice Tests</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between rounded-md border border-srit-wheat p-3 hover:border-srit-orange transition-colors">
                      <div>
                        <h4 className="font-medium">Quantitative Aptitude Test 1</h4>
                        <p className="text-sm text-muted-foreground">30 minutes • 25 questions</p>
                      </div>
                      <Button
                        size="sm"
                        className="bg-srit-orange hover:bg-srit-orange/90 text-white"
                        onClick={() => (window.location.href = "/dashboard/resources/aptitude/test-1")}
                      >
                        Start Test
                      </Button>
                    </div>
                    <div className="flex items-center justify-between rounded-md border border-srit-wheat p-3 hover:border-srit-orange transition-colors">
                      <div>
                        <h4 className="font-medium">Logical Reasoning Test 1</h4>
                        <p className="text-sm text-muted-foreground">30 minutes • 20 questions</p>
                      </div>
                      <Button
                        size="sm"
                        className="bg-srit-orange hover:bg-srit-orange/90 text-white"
                        onClick={() => (window.location.href = "/dashboard/resources/aptitude/test-2")}
                      >
                        Start Test
                      </Button>
                    </div>
                    <div className="flex items-center justify-between rounded-md border border-srit-wheat p-3 hover:border-srit-orange transition-colors">
                      <div>
                        <h4 className="font-medium">Full Mock Test</h4>
                        <p className="text-sm text-muted-foreground">60 minutes • 50 questions</p>
                      </div>
                      <Button
                        size="sm"
                        className="bg-srit-orange hover:bg-srit-orange/90 text-white"
                        onClick={() => (window.location.href = "/dashboard/resources/aptitude/full-test")}
                      >
                        Start Test
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="coding" className="space-y-4">
          <Card className="border-srit-wheat">
            <CardHeader>
              <CardTitle>Coding & DSA Resources</CardTitle>
              <CardDescription>
                Comprehensive materials to help you prepare for technical coding interviews
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Data Structures</h3>
                  <div className="grid gap-2 md:grid-cols-2">
                    <div className="rounded-md border border-srit-wheat p-3 hover:border-srit-orange transition-colors">
                      <h4 className="font-medium">Arrays & Strings</h4>
                      <p className="text-sm text-muted-foreground">Learn array manipulation and string algorithms</p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-xs">15 lessons</span>
                        <Button
                          variant="link"
                          size="sm"
                          className="h-auto p-0 text-srit-orange hover:text-srit-orange/90"
                        >
                          Start <ArrowRight className="ml-1 h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                    <div className="rounded-md border border-srit-wheat p-3 hover:border-srit-orange transition-colors">
                      <h4 className="font-medium">Linked Lists</h4>
                      <p className="text-sm text-muted-foreground">Master singly and doubly linked list operations</p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-xs">12 lessons</span>
                        <Button
                          variant="link"
                          size="sm"
                          className="h-auto p-0 text-srit-orange hover:text-srit-orange/90"
                        >
                          Start <ArrowRight className="ml-1 h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                    <div className="rounded-md border border-srit-wheat p-3 hover:border-srit-orange transition-colors">
                      <h4 className="font-medium">Stacks & Queues</h4>
                      <p className="text-sm text-muted-foreground">Understand stack and queue implementations</p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-xs">10 lessons</span>
                        <Button
                          variant="link"
                          size="sm"
                          className="h-auto p-0 text-srit-orange hover:text-srit-orange/90"
                        >
                          Start <ArrowRight className="ml-1 h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                    <div className="rounded-md border border-srit-wheat p-3 hover:border-srit-orange transition-colors">
                      <h4 className="font-medium">Trees & Graphs</h4>
                      <p className="text-sm text-muted-foreground">Learn tree traversals and graph algorithms</p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-xs">18 lessons</span>
                        <Button
                          variant="link"
                          size="sm"
                          className="h-auto p-0 text-srit-orange hover:text-srit-orange/90"
                        >
                          Start <ArrowRight className="ml-1 h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Algorithms</h3>
                  <div className="grid gap-2 md:grid-cols-2">
                    <div className="rounded-md border border-srit-wheat p-3 hover:border-srit-orange transition-colors">
                      <h4 className="font-medium">Sorting & Searching</h4>
                      <p className="text-sm text-muted-foreground">Master various sorting and searching techniques</p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-xs">12 lessons</span>
                        <Button
                          variant="link"
                          size="sm"
                          className="h-auto p-0 text-srit-orange hover:text-srit-orange/90"
                        >
                          Start <ArrowRight className="ml-1 h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                    <div className="rounded-md border border-srit-wheat p-3 hover:border-srit-orange transition-colors">
                      <h4 className="font-medium">Dynamic Programming</h4>
                      <p className="text-sm text-muted-foreground">Learn optimization with dynamic programming</p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-xs">15 lessons</span>
                        <Button
                          variant="link"
                          size="sm"
                          className="h-auto p-0 text-srit-orange hover:text-srit-orange/90"
                        >
                          Start <ArrowRight className="ml-1 h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                    <div className="rounded-md border border-srit-wheat p-3 hover:border-srit-orange transition-colors">
                      <h4 className="font-medium">Greedy Algorithms</h4>
                      <p className="text-sm text-muted-foreground">Understand greedy approach to problem solving</p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-xs">8 lessons</span>
                        <Button
                          variant="link"
                          size="sm"
                          className="h-auto p-0 text-srit-orange hover:text-srit-orange/90"
                        >
                          Start <ArrowRight className="ml-1 h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                    <div className="rounded-md border border-srit-wheat p-3 hover:border-srit-orange transition-colors">
                      <h4 className="font-medium">Recursion & Backtracking</h4>
                      <p className="text-sm text-muted-foreground">Master recursive solutions and backtracking</p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-xs">10 lessons</span>
                        <Button
                          variant="link"
                          size="sm"
                          className="h-auto p-0 text-srit-orange hover:text-srit-orange/90"
                        >
                          Start <ArrowRight className="ml-1 h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Coding Practice</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between rounded-md border border-srit-wheat p-3 hover:border-srit-orange transition-colors">
                      <div>
                        <h4 className="font-medium">Easy Problems (50)</h4>
                        <p className="text-sm text-muted-foreground">Beginner-friendly coding problems</p>
                      </div>
                      <Button
                        size="sm"
                        className="bg-srit-orange hover:bg-srit-orange/90 text-white"
                        onClick={() => (window.location.href = "/dashboard/resources/coding/easy")}
                      >
                        Practice
                      </Button>
                    </div>
                    <div className="flex items-center justify-between rounded-md border border-srit-wheat p-3 hover:border-srit-orange transition-colors">
                      <div>
                        <h4 className="font-medium">Medium Problems (30)</h4>
                        <p className="text-sm text-muted-foreground">Intermediate level coding challenges</p>
                      </div>
                      <Button
                        size="sm"
                        className="bg-srit-orange hover:bg-srit-orange/90 text-white"
                        onClick={() => (window.location.href = "/dashboard/resources/coding/medium")}
                      >
                        Practice
                      </Button>
                    </div>
                    <div className="flex items-center justify-between rounded-md border border-srit-wheat p-3 hover:border-srit-orange transition-colors">
                      <div>
                        <h4 className="font-medium">Hard Problems (20)</h4>
                        <p className="text-sm text-muted-foreground">Advanced algorithmic problems</p>
                      </div>
                      <Button
                        size="sm"
                        className="bg-srit-orange hover:bg-srit-orange/90 text-white"
                        onClick={() => (window.location.href = "/dashboard/resources/coding/hard")}
                      >
                        Practice
                      </Button>
                    </div>
                    <div className="flex items-center justify-between rounded-md border border-srit-wheat p-3 hover:border-srit-orange transition-colors">
                      <div>
                        <h4 className="font-medium">Mock Coding Assessments</h4>
                        <p className="text-sm text-muted-foreground">Timed coding tests similar to real interviews</p>
                      </div>
                      <Button
                        size="sm"
                        className="bg-srit-orange hover:bg-srit-orange/90 text-white"
                        onClick={() => (window.location.href = "/dashboard/resources/coding/mock-test")}
                      >
                        Start Test
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="interview" className="space-y-4">
          <Card className="border-srit-wheat">
            <CardHeader>
              <CardTitle>Interview Preparation</CardTitle>
              <CardDescription>Resources to help you ace your HR and technical interviews</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">HR Interview Preparation</h3>
                  <div className="grid gap-2 md:grid-cols-2">
                    <div className="rounded-md border border-srit-wheat p-3 hover:border-srit-orange transition-colors">
                      <h4 className="font-medium">Common HR Questions</h4>
                      <p className="text-sm text-muted-foreground">Practice answers to frequently asked HR questions</p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-xs">50+ questions</span>
                        <Button
                          variant="link"
                          size="sm"
                          className="h-auto p-0 text-srit-orange hover:text-srit-orange/90"
                          onClick={() => (window.location.href = "/dashboard/resources/interview/hr-questions")}
                        >
                          View <ArrowRight className="ml-1 h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                    <div className="rounded-md border border-srit-wheat p-3 hover:border-srit-orange transition-colors">
                      <h4 className="font-medium">Self-Introduction</h4>
                      <p className="text-sm text-muted-foreground">Learn how to introduce yourself effectively</p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-xs">Video tutorial</span>
                        <Button
                          variant="link"
                          size="sm"
                          className="h-auto p-0 text-srit-orange hover:text-srit-orange/90"
                          onClick={() => (window.location.href = "/dashboard/resources/interview/self-intro")}
                        >
                          Watch <ArrowRight className="ml-1 h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                    <div className="rounded-md border border-srit-wheat p-3 hover:border-srit-orange transition-colors">
                      <h4 className="font-medium">Behavioral Questions</h4>
                      <p className="text-sm text-muted-foreground">Prepare for situation-based questions</p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-xs">30+ scenarios</span>
                        <Button
                          variant="link"
                          size="sm"
                          className="h-auto p-0 text-srit-orange hover:text-srit-orange/90"
                          onClick={() => (window.location.href = "/dashboard/resources/interview/behavioral")}
                        >
                          View <ArrowRight className="ml-1 h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                    <div className="rounded-md border border-srit-wheat p-3 hover:border-srit-orange transition-colors">
                      <h4 className="font-medium">Company Research</h4>
                      <p className="text-sm text-muted-foreground">How to research companies before interviews</p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-xs">Guide & templates</span>
                        <Button
                          variant="link"
                          size="sm"
                          className="h-auto p-0 text-srit-orange hover:text-srit-orange/90"
                          onClick={() => (window.location.href = "/dashboard/resources/interview/company-research")}
                        >
                          View <ArrowRight className="ml-1 h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Mock Interviews</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between rounded-md border border-srit-wheat p-3 hover:border-srit-orange transition-colors">
                      <div>
                        <h4 className="font-medium">HR Mock Interview</h4>
                        <p className="text-sm text-muted-foreground">30-minute simulated HR interview with feedback</p>
                      </div>
                      <Button
                        size="sm"
                        className="bg-srit-orange hover:bg-srit-orange/90 text-white"
                        onClick={() => (window.location.href = "/dashboard/resources/interview/schedule-hr")}
                      >
                        Schedule
                      </Button>
                    </div>
                    <div className="flex items-center justify-between rounded-md border border-srit-wheat p-3 hover:border-srit-orange transition-colors">
                      <div>
                        <h4 className="font-medium">Technical Mock Interview</h4>
                        <p className="text-sm text-muted-foreground">
                          45-minute technical interview with industry expert
                        </p>
                      </div>
                      <Button
                        size="sm"
                        className="bg-srit-orange hover:bg-srit-orange/90 text-white"
                        onClick={() => (window.location.href = "/dashboard/resources/interview/schedule-tech")}
                      >
                        Schedule
                      </Button>
                    </div>
                    <div className="flex items-center justify-between rounded-md border border-srit-wheat p-3 hover:border-srit-orange transition-colors">
                      <div>
                        <h4 className="font-medium">Group Discussion Practice</h4>
                        <p className="text-sm text-muted-foreground">Participate in a simulated group discussion</p>
                      </div>
                      <Button
                        size="sm"
                        className="bg-srit-orange hover:bg-srit-orange/90 text-white"
                        onClick={() => (window.location.href = "/dashboard/resources/interview/group-discussion")}
                      >
                        Join
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="resume" className="space-y-4">
          <Card className="border-srit-wheat">
            <CardHeader>
              <CardTitle>Resume Building Resources</CardTitle>
              <CardDescription>Create a professional resume that stands out to recruiters</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-medium mb-2">Resume Templates</h3>
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="rounded-md border border-srit-wheat p-3 text-center hover:border-srit-orange transition-colors">
                      <div className="aspect-[3/4] mb-2 bg-srit-orange/10 flex items-center justify-center">
                        <FileText className="h-8 w-8 text-srit-orange" />
                      </div>
                      <h4 className="font-medium">Professional Template</h4>
                      <p className="text-xs text-muted-foreground mb-2">Clean and minimal design</p>
                      <Button
                        size="sm"
                        className="w-full bg-srit-orange hover:bg-srit-orange/90 text-white"
                        onClick={() => (window.location.href = "/dashboard/resources/resume/template/professional")}
                      >
                        Use Template
                      </Button>
                    </div>
                    <div className="rounded-md border border-srit-wheat p-3 text-center hover:border-srit-orange transition-colors">
                      <div className="aspect-[3/4] mb-2 bg-srit-orange/10 flex items-center justify-center">
                        <FileText className="h-8 w-8 text-srit-orange" />
                      </div>
                      <h4 className="font-medium">Modern Template</h4>
                      <p className="text-xs text-muted-foreground mb-2">Contemporary layout with accent colors</p>
                      <Button
                        size="sm"
                        className="w-full bg-srit-orange hover:bg-srit-orange/90 text-white"
                        onClick={() => (window.location.href = "/dashboard/resources/resume/template/modern")}
                      >
                        Use Template
                      </Button>
                    </div>
                    <div className="rounded-md border border-srit-wheat p-3 text-center hover:border-srit-orange transition-colors">
                      <div className="aspect-[3/4] mb-2 bg-srit-orange/10 flex items-center justify-center">
                        <FileText className="h-8 w-8 text-srit-orange" />
                      </div>
                      <h4 className="font-medium">Technical Template</h4>
                      <p className="text-xs text-muted-foreground mb-2">Optimized for technical roles</p>
                      <Button
                        size="sm"
                        className="w-full bg-srit-orange hover:bg-srit-orange/90 text-white"
                        onClick={() => (window.location.href = "/dashboard/resources/resume/template/technical")}
                      >
                        Use Template
                      </Button>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Resume Review & Feedback</h3>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between rounded-md border border-srit-wheat p-3 hover:border-srit-orange transition-colors">
                      <div>
                        <h4 className="font-medium">AI Resume Analysis</h4>
                        <p className="text-sm text-muted-foreground">Get instant feedback on your resume</p>
                      </div>
                      <Button
                        size="sm"
                        className="bg-srit-orange hover:bg-srit-orange/90 text-white"
                        onClick={() => (window.location.href = "/dashboard/resources/resume/ai-analysis")}
                      >
                        Analyze
                      </Button>
                    </div>
                    <div className="flex items-center justify-between rounded-md border border-srit-wheat p-3 hover:border-srit-orange transition-colors">
                      <div>
                        <h4 className="font-medium">Peer Review</h4>
                        <p className="text-sm text-muted-foreground">Get feedback from other students</p>
                      </div>
                      <Button
                        size="sm"
                        className="bg-srit-orange hover:bg-srit-orange/90 text-white"
                        onClick={() => (window.location.href = "/dashboard/resources/resume/peer-review")}
                      >
                        Submit
                      </Button>
                    </div>
                    <div className="flex items-center justify-between rounded-md border border-srit-wheat p-3 hover:border-srit-orange transition-colors">
                      <div>
                        <h4 className="font-medium">Expert Review</h4>
                        <p className="text-sm text-muted-foreground">Professional feedback from career counselors</p>
                      </div>
                      <Button
                        size="sm"
                        className="bg-srit-orange hover:bg-srit-orange/90 text-white"
                        onClick={() => (window.location.href = "/dashboard/resources/resume/expert-review")}
                      >
                        Schedule
                      </Button>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">Branch-Specific Resume Tips</h3>
                  <div className="grid gap-2 md:grid-cols-2">
                    <div className="rounded-md border border-srit-wheat p-3 hover:border-srit-orange transition-colors">
                      <h4 className="font-medium">CSE/CSD Resume Guide</h4>
                      <p className="text-sm text-muted-foreground">Resume tips for Computer Science students</p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-xs">With sample resumes</span>
                        <Button
                          variant="link"
                          size="sm"
                          className="h-auto p-0 text-srit-orange hover:text-srit-orange/90"
                          onClick={() => (window.location.href = "/dashboard/resources/resume/guide/cse")}
                        >
                          View <ArrowRight className="ml-1 h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                    <div className="rounded-md border border-srit-wheat p-3 hover:border-srit-orange transition-colors">
                      <h4 className="font-medium">ECE/EEE Resume Guide</h4>
                      <p className="text-sm text-muted-foreground">Resume tips for Electronics/Electrical students</p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-xs">With sample resumes</span>
                        <Button
                          variant="link"
                          size="sm"
                          className="h-auto p-0 text-srit-orange hover:text-srit-orange/90"
                          onClick={() => (window.location.href = "/dashboard/resources/resume/guide/ece")}
                        >
                          View <ArrowRight className="ml-1 h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                    <div className="rounded-md border border-srit-wheat p-3 hover:border-srit-orange transition-colors">
                      <h4 className="font-medium">Civil Engineering Resume Guide</h4>
                      <p className="text-sm text-muted-foreground">Resume tips for Civil Engineering students</p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-xs">With sample resumes</span>
                        <Button
                          variant="link"
                          size="sm"
                          className="h-auto p-0 text-srit-orange hover:text-srit-orange/90"
                          onClick={() => (window.location.href = "/dashboard/resources/resume/guide/civil")}
                        >
                          View <ArrowRight className="ml-1 h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                    <div className="rounded-md border border-srit-wheat p-3 hover:border-srit-orange transition-colors">
                      <h4 className="font-medium">Mechanical Engineering Resume Guide</h4>
                      <p className="text-sm text-muted-foreground">Resume tips for Mechanical Engineering students</p>
                      <div className="flex justify-between items-center mt-2">
                        <span className="text-xs">With sample resumes</span>
                        <Button
                          variant="link"
                          size="sm"
                          className="h-auto p-0 text-srit-orange hover:text-srit-orange/90"
                          onClick={() => (window.location.href = "/dashboard/resources/resume/guide/mechanical")}
                        >
                          View <ArrowRight className="ml-1 h-3 w-3" />
                        </Button>
                      </div>
                    </div>
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

