"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  User,
  FileText,
  Award,
  Briefcase,
  Upload,
  Plus,
  Trash2,
  Edit,
  Save,
  CheckCircle,
  AlertCircle,
  Download,
  Eye,
} from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { toast } from "@/components/ui/use-toast"

export default function ProfilePage() {
  const [isEditing, setIsEditing] = useState(false)
  const [skills, setSkills] = useState(["JavaScript", "React", "Node.js", "HTML/CSS", "Python"])
  const [newSkill, setNewSkill] = useState("")
  const [resumeFile, setResumeFile] = useState<File | null>(null)
  const [isUploading, setIsUploading] = useState(false)
  const [profileProgress, setProfileProgress] = useState(85)
  const [notification, setNotification] = useState<{ type: "success" | "error"; message: string } | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  // Mock user data
  const [userData, setUserData] = useState({
    firstName: "Neha",
    lastName: "Anjum",
    email: "neha.anjum@srit.ac.in",
    phone: "+91 9876543210",
    branch: "CSE",
    year: "3",
    bio: "Computer Science student passionate about web development and AI. Looking for internship opportunities to apply my skills in a real-world setting.",
    linkedin: "",
    github: "https://github.com/neha-anjum",
    portfolio: "",
    twitter: "",
  })

  const addSkill = () => {
    if (newSkill && !skills.includes(newSkill)) {
      setSkills([...skills, newSkill])
      setNewSkill("")
      toast({
        title: "Skill added",
        description: `${newSkill} has been added to your skills.`,
      })
    }
  }

  const removeSkill = (skillToRemove: string) => {
    setSkills(skills.filter((skill) => skill !== skillToRemove))
    toast({
      title: "Skill removed",
      description: `${skillToRemove} has been removed from your skills.`,
    })
  }

  const handleSaveChanges = () => {
    setIsEditing(false)
    setNotification({
      type: "success",
      message: "Profile updated successfully!",
    })

    // Clear notification after 3 seconds
    setTimeout(() => {
      setNotification(null)
    }, 3000)

    toast({
      title: "Profile updated",
      description: "Your profile has been updated successfully.",
    })
  }

  const handleResumeUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const file = e.target.files[0]
      setResumeFile(file)
      setIsUploading(true)

      // Simulate resume parsing and profile update
      setTimeout(() => {
        setIsUploading(false)
        setProfileProgress(100)

        // Mock data extraction from resume
        const extractedData = {
          skills: [...skills, "TypeScript", "Redux", "MongoDB"],
          education: "Added B.Tech in Computer Science & Engineering",
          experience: "Added internship experience",
        }

        // Update skills with "extracted" skills
        setSkills([...new Set([...skills, "TypeScript", "Redux", "MongoDB"])])

        setNotification({
          type: "success",
          message: "Resume uploaded and profile updated automatically!",
        })

        // Clear notification after 3 seconds
        setTimeout(() => {
          setNotification(null)
        }, 3000)

        toast({
          title: "Resume uploaded",
          description: "Your resume has been uploaded and your profile has been updated automatically.",
        })
      }, 2000)
    }
  }

  const triggerResumeUpload = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click()
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setUserData((prev) => ({ ...prev, [id]: value }))
  }

  const handleSelectChange = (id: string, value: string) => {
    setUserData((prev) => ({ ...prev, [id]: value }))
  }

  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">My Profile</h2>
        <div className="flex items-center gap-2">
          <Button
            variant={isEditing ? "default" : "outline"}
            size="sm"
            onClick={isEditing ? handleSaveChanges : () => setIsEditing(true)}
            className={
              isEditing
                ? "bg-srit-orange hover:bg-srit-orange/90 text-white"
                : "border-srit-orange text-srit-orange hover:bg-srit-orange/10"
            }
          >
            {isEditing ? (
              <>
                <Save className="mr-2 h-4 w-4" />
                Save Changes
              </>
            ) : (
              <>
                <Edit className="mr-2 h-4 w-4" />
                Edit Profile
              </>
            )}
          </Button>
        </div>
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

      <div className="grid gap-4 md:grid-cols-7">
        <Card className="md:col-span-2 border-srit-wheat srit-card-hover">
          <CardHeader>
            <CardTitle>Profile Completion</CardTitle>
            <CardDescription>Complete your profile to increase visibility to recruiters</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-col items-center">
              <div className="relative mb-4">
                <div className="h-24 w-24 rounded-full bg-srit-orange/10 flex items-center justify-center">
                  <User className="h-12 w-12 text-srit-orange" />
                </div>
                {isEditing && (
                  <Button
                    size="icon"
                    variant="outline"
                    className="absolute bottom-0 right-0 h-8 w-8 rounded-full border-srit-orange text-srit-orange hover:bg-srit-orange/10"
                  >
                    <Upload className="h-4 w-4" />
                  </Button>
                )}
              </div>
              <h3 className="text-xl font-bold">
                {userData.firstName} {userData.lastName}
              </h3>
              <p className="text-sm text-muted-foreground">
                {userData.branch} • {userData.year}rd Year
              </p>
              <p className="text-sm text-muted-foreground">{userData.email}</p>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Profile Completion</span>
                <span>{profileProgress}%</span>
              </div>
              <Progress value={profileProgress} className="h-2" indicatorClassName="bg-srit-orange" />
              {profileProgress < 100 && (
                <p className="text-xs text-muted-foreground">Add your resume to complete your profile</p>
              )}
            </div>

            <div className="space-y-2">
              <h4 className="font-medium">Quick Links</h4>
              <div className="space-y-1">
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start hover:text-srit-orange hover:bg-srit-orange/10"
                  onClick={() => (window.location.href = "/dashboard/jobs")}
                >
                  <FileText className="mr-2 h-4 w-4" />
                  My Applications
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start hover:text-srit-orange hover:bg-srit-orange/10"
                  onClick={() => (window.location.href = "/dashboard/jobs")}
                >
                  <Briefcase className="mr-2 h-4 w-4" />
                  Saved Jobs
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="w-full justify-start hover:text-srit-orange hover:bg-srit-orange/10"
                  onClick={() => (window.location.href = "/dashboard/resources")}
                >
                  <Award className="mr-2 h-4 w-4" />
                  Achievements
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-4 md:col-span-5">
          <Tabs defaultValue="personal">
            <TabsList className="bg-srit-cream/30">
              <TabsTrigger
                value="personal"
                className="data-[state=active]:bg-srit-orange data-[state=active]:text-white"
              >
                Personal Info
              </TabsTrigger>
              <TabsTrigger
                value="education"
                className="data-[state=active]:bg-srit-orange data-[state=active]:text-white"
              >
                Education
              </TabsTrigger>
              <TabsTrigger value="skills" className="data-[state=active]:bg-srit-orange data-[state=active]:text-white">
                Skills & Projects
              </TabsTrigger>
              <TabsTrigger value="resume" className="data-[state=active]:bg-srit-orange data-[state=active]:text-white">
                Resume
              </TabsTrigger>
            </TabsList>

            <TabsContent value="personal" className="space-y-4">
              <Card className="border-srit-wheat">
                <CardHeader>
                  <CardTitle>Personal Information</CardTitle>
                  <CardDescription>Update your personal details</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input
                        id="firstName"
                        value={userData.firstName}
                        onChange={handleInputChange}
                        readOnly={!isEditing}
                        className="border-srit-wheat focus:border-srit-orange focus:ring-srit-orange"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input
                        id="lastName"
                        value={userData.lastName}
                        onChange={handleInputChange}
                        readOnly={!isEditing}
                        className="border-srit-wheat focus:border-srit-orange focus:ring-srit-orange"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" value={userData.email} readOnly className="border-srit-wheat bg-muted/20" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        value={userData.phone}
                        onChange={handleInputChange}
                        readOnly={!isEditing}
                        className="border-srit-wheat focus:border-srit-orange focus:ring-srit-orange"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="branch">Branch</Label>
                      <Select
                        disabled={!isEditing}
                        defaultValue={userData.branch}
                        onValueChange={(value) => handleSelectChange("branch", value)}
                      >
                        <SelectTrigger className="border-srit-wheat focus:border-srit-orange focus:ring-srit-orange">
                          <SelectValue placeholder="Select branch" />
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
                      <Label htmlFor="year">Year of Study</Label>
                      <Select
                        disabled={!isEditing}
                        defaultValue={userData.year}
                        onValueChange={(value) => handleSelectChange("year", value)}
                      >
                        <SelectTrigger className="border-srit-wheat focus:border-srit-orange focus:ring-srit-orange">
                          <SelectValue placeholder="Select year" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="1">1st Year</SelectItem>
                          <SelectItem value="2">2nd Year</SelectItem>
                          <SelectItem value="3">3rd Year</SelectItem>
                          <SelectItem value="4">4th Year</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2 sm:col-span-2">
                      <Label htmlFor="bio">Bio</Label>
                      <Textarea
                        id="bio"
                        placeholder="Tell us about yourself"
                        value={userData.bio}
                        onChange={handleInputChange}
                        readOnly={!isEditing}
                        className="min-h-[100px] border-srit-wheat focus:border-srit-orange focus:ring-srit-orange"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-srit-wheat">
                <CardHeader>
                  <CardTitle>Social Profiles</CardTitle>
                  <CardDescription>Connect your social and professional profiles</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="linkedin">LinkedIn</Label>
                      <Input
                        id="linkedin"
                        placeholder="https://linkedin.com/in/username"
                        value={userData.linkedin}
                        onChange={handleInputChange}
                        readOnly={!isEditing}
                        className="border-srit-wheat focus:border-srit-orange focus:ring-srit-orange"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="github">GitHub</Label>
                      <Input
                        id="github"
                        placeholder="https://github.com/username"
                        value={userData.github}
                        onChange={handleInputChange}
                        readOnly={!isEditing}
                        className="border-srit-wheat focus:border-srit-orange focus:ring-srit-orange"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="portfolio">Portfolio Website</Label>
                      <Input
                        id="portfolio"
                        placeholder="https://yourportfolio.com"
                        value={userData.portfolio}
                        onChange={handleInputChange}
                        readOnly={!isEditing}
                        className="border-srit-wheat focus:border-srit-orange focus:ring-srit-orange"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="twitter">Twitter</Label>
                      <Input
                        id="twitter"
                        placeholder="https://twitter.com/username"
                        value={userData.twitter}
                        onChange={handleInputChange}
                        readOnly={!isEditing}
                        className="border-srit-wheat focus:border-srit-orange focus:ring-srit-orange"
                      />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="education" className="space-y-4">
              <Card className="border-srit-wheat">
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Education</CardTitle>
                    <CardDescription>Your academic qualifications</CardDescription>
                  </div>
                  {isEditing && (
                    <Button
                      size="sm"
                      className="bg-srit-orange hover:bg-srit-orange/90 text-white"
                      onClick={() =>
                        toast({
                          title: "Add Education",
                          description: "This feature will allow you to add new education details.",
                        })
                      }
                    >
                      <Plus className="mr-2 h-4 w-4" />
                      Add Education
                    </Button>
                  )}
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded-lg border border-srit-wheat p-4 hover:border-srit-orange transition-colors">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-medium">B.Tech in Computer Science & Engineering</h3>
                        <p className="text-sm text-muted-foreground">SRIT College of Engineering</p>
                        <p className="text-sm text-muted-foreground">2022 - 2026</p>
                        <p className="text-sm mt-2">CGPA: 8.7/10</p>
                      </div>
                      {isEditing && (
                        <div className="flex gap-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-srit-orange hover:text-srit-orange/90 hover:bg-srit-orange/10"
                            onClick={() =>
                              toast({
                                title: "Edit Education",
                                description: "This feature will allow you to edit education details.",
                              })
                            }
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-red-500 hover:text-red-500/90 hover:bg-red-500/10"
                            onClick={() =>
                              toast({
                                title: "Remove Education",
                                description: "This feature will allow you to remove education details.",
                                variant: "destructive",
                              })
                            }
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="rounded-lg border border-srit-wheat p-4 hover:border-srit-orange transition-colors">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-medium">Higher Secondary Education (12th)</h3>
                        <p className="text-sm text-muted-foreground">Delhi Public School</p>
                        <p className="text-sm text-muted-foreground">2020 - 2022</p>
                        <p className="text-sm mt-2">Percentage: 92%</p>
                      </div>
                      {isEditing && (
                        <div className="flex gap-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-srit-orange hover:text-srit-orange/90 hover:bg-srit-orange/10"
                            onClick={() =>
                              toast({
                                title: "Edit Education",
                                description: "This feature will allow you to edit education details.",
                              })
                            }
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-red-500 hover:text-red-500/90 hover:bg-red-500/10"
                            onClick={() =>
                              toast({
                                title: "Remove Education",
                                description: "This feature will allow you to remove education details.",
                                variant: "destructive",
                              })
                            }
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="rounded-lg border border-srit-wheat p-4 hover:border-srit-orange transition-colors">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-medium">Secondary Education (10th)</h3>
                        <p className="text-sm text-muted-foreground">Delhi Public School</p>
                        <p className="text-sm text-muted-foreground">2020</p>
                        <p className="text-sm mt-2">Percentage: 95%</p>
                      </div>
                      {isEditing && (
                        <div className="flex gap-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-srit-orange hover:text-srit-orange/90 hover:bg-srit-orange/10"
                            onClick={() =>
                              toast({
                                title: "Edit Education",
                                description: "This feature will allow you to edit education details.",
                              })
                            }
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-red-500 hover:text-red-500/90 hover:bg-red-500/10"
                            onClick={() =>
                              toast({
                                title: "Remove Education",
                                description: "This feature will allow you to remove education details.",
                                variant: "destructive",
                              })
                            }
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-srit-wheat">
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Certifications</CardTitle>
                    <CardDescription>Professional certifications and courses</CardDescription>
                  </div>
                  {isEditing && (
                    <Button
                      size="sm"
                      className="bg-srit-orange hover:bg-srit-orange/90 text-white"
                      onClick={() =>
                        toast({
                          title: "Add Certification",
                          description: "This feature will allow you to add new certification details.",
                        })
                      }
                    >
                      <Plus className="mr-2 h-4 w-4" />
                      Add Certification
                    </Button>
                  )}
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded-lg border border-srit-wheat p-4 hover:border-srit-orange transition-colors">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-medium">Web Development Bootcamp</h3>
                        <p className="text-sm text-muted-foreground">Udemy</p>
                        <p className="text-sm text-muted-foreground">Issued: June 2023</p>
                      </div>
                      {isEditing && (
                        <div className="flex gap-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-srit-orange hover:text-srit-orange/90 hover:bg-srit-orange/10"
                            onClick={() =>
                              toast({
                                title: "Edit Certification",
                                description: "This feature will allow you to edit certification details.",
                              })
                            }
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-red-500 hover:text-red-500/90 hover:bg-red-500/10"
                            onClick={() =>
                              toast({
                                title: "Remove Certification",
                                description: "This feature will allow you to remove certification details.",
                                variant: "destructive",
                              })
                            }
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="rounded-lg border border-srit-wheat p-4 hover:border-srit-orange transition-colors">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-medium">Python for Data Science</h3>
                        <p className="text-sm text-muted-foreground">Coursera</p>
                        <p className="text-sm text-muted-foreground">Issued: January 2024</p>
                      </div>
                      {isEditing && (
                        <div className="flex gap-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-srit-orange hover:text-srit-orange/90 hover:bg-srit-orange/10"
                            onClick={() =>
                              toast({
                                title: "Edit Certification",
                                description: "This feature will allow you to edit certification details.",
                              })
                            }
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-red-500 hover:text-red-500/90 hover:bg-red-500/10"
                            onClick={() =>
                              toast({
                                title: "Remove Certification",
                                description: "This feature will allow you to remove certification details.",
                                variant: "destructive",
                              })
                            }
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="skills" className="space-y-4">
              <Card className="border-srit-wheat">
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Skills</CardTitle>
                    <CardDescription>Technical and soft skills</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {isEditing && (
                      <div className="flex gap-2">
                        <Input
                          placeholder="Add a skill"
                          value={newSkill}
                          onChange={(e) => setNewSkill(e.target.value)}
                          onKeyDown={(e) => e.key === "Enter" && addSkill()}
                          className="border-srit-wheat focus:border-srit-orange focus:ring-srit-orange"
                        />
                        <Button onClick={addSkill} className="bg-srit-orange hover:bg-srit-orange/90 text-white">
                          Add
                        </Button>
                      </div>
                    )}

                    <div className="flex flex-wrap gap-2">
                      {skills.map((skill, index) => (
                        <Badge
                          key={index}
                          className="flex items-center gap-1 px-3 py-1 bg-srit-orange/10 text-srit-orange hover:bg-srit-orange/20 border-srit-orange/20"
                        >
                          {skill}
                          {isEditing && (
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-4 w-4 ml-1 p-0 hover:bg-red-500/10 hover:text-red-500"
                              onClick={() => removeSkill(skill)}
                            >
                              <Trash2 className="h-3 w-3" />
                            </Button>
                          )}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-srit-wheat">
                <CardHeader className="flex flex-row items-center justify-between">
                  <div>
                    <CardTitle>Projects</CardTitle>
                    <CardDescription>Showcase your work and achievements</CardDescription>
                  </div>
                  {isEditing && (
                    <Button
                      size="sm"
                      className="bg-srit-orange hover:bg-srit-orange/90 text-white"
                      onClick={() =>
                        toast({
                          title: "Add Project",
                          description: "This feature will allow you to add a new project.",
                        })
                      }
                    >
                      <Plus className="mr-2 h-4 w-4" />
                      Add Project
                    </Button>
                  )}
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded-lg border border-srit-wheat p-4 hover:border-srit-orange transition-colors">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-medium">E-commerce Website</h3>
                        <p className="text-sm text-muted-foreground">
                          A full-stack e-commerce platform built with React, Node.js, and MongoDB
                        </p>
                        <div className="flex flex-wrap gap-1 mt-2">
                          <Badge variant="outline" className="border-srit-orange text-srit-orange">
                            React
                          </Badge>
                          <Badge variant="outline" className="border-srit-orange text-srit-orange">
                            Node.js
                          </Badge>
                          <Badge variant="outline" className="border-srit-orange text-srit-orange">
                            MongoDB
                          </Badge>
                          <Badge variant="outline" className="border-srit-orange text-srit-orange">
                            Express
                          </Badge>
                        </div>
                        <div className="mt-2">
                          <Button
                            variant="link"
                            size="sm"
                            className="h-auto p-0 text-srit-orange hover:text-srit-orange/90"
                            onClick={() => window.open("https://github.com/example/ecommerce", "_blank")}
                          >
                            GitHub Repository
                          </Button>
                        </div>
                      </div>
                      {isEditing && (
                        <div className="flex gap-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-srit-orange hover:text-srit-orange/90 hover:bg-srit-orange/10"
                            onClick={() =>
                              toast({
                                title: "Edit Project",
                                description: "This feature will allow you to edit project details.",
                              })
                            }
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-red-500 hover:text-red-500/90 hover:bg-red-500/10"
                            onClick={() =>
                              toast({
                                title: "Remove Project",
                                description: "This feature will allow you to remove project details.",
                                variant: "destructive",
                              })
                            }
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="rounded-lg border border-srit-wheat p-4 hover:border-srit-orange transition-colors">
                    <div className="flex justify-between">
                      <div>
                        <h3 className="font-medium">Weather App</h3>
                        <p className="text-sm text-muted-foreground">
                          A weather application that fetches real-time data from OpenWeatherMap API
                        </p>
                        <div className="flex flex-wrap gap-1 mt-2">
                          <Badge variant="outline" className="border-srit-orange text-srit-orange">
                            JavaScript
                          </Badge>
                          <Badge variant="outline" className="border-srit-orange text-srit-orange">
                            HTML/CSS
                          </Badge>
                          <Badge variant="outline" className="border-srit-orange text-srit-orange">
                            API Integration
                          </Badge>
                        </div>
                        <div className="mt-2">
                          <Button
                            variant="link"
                            size="sm"
                            className="h-auto p-0 text-srit-orange hover:text-srit-orange/90"
                            onClick={() => window.open("https://github.com/example/weather-app", "_blank")}
                          >
                            GitHub Repository
                          </Button>
                        </div>
                      </div>
                      {isEditing && (
                        <div className="flex gap-2">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-srit-orange hover:text-srit-orange/90 hover:bg-srit-orange/10"
                            onClick={() =>
                              toast({
                                title: "Edit Project",
                                description: "This feature will allow you to edit project details.",
                              })
                            }
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="text-red-500 hover:text-red-500/90 hover:bg-red-500/10"
                            onClick={() =>
                              toast({
                                title: "Remove Project",
                                description: "This feature will allow you to remove project details.",
                                variant: "destructive",
                              })
                            }
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="resume" className="space-y-4">
              <Card className="border-srit-wheat">
                <CardHeader>
                  <CardTitle>Resume</CardTitle>
                  <CardDescription>Upload and manage your resume</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex flex-col items-center justify-center rounded-lg border border-dashed border-srit-wheat p-8 hover:border-srit-orange transition-colors">
                    <div className="flex flex-col items-center justify-center space-y-2 text-center">
                      <div className="rounded-full bg-srit-orange/10 p-3">
                        <FileText className="h-6 w-6 text-srit-orange" />
                      </div>
                      <h3 className="font-medium">Upload your resume</h3>
                      <p className="text-sm text-muted-foreground">
                        Drag and drop your resume file here, or click to browse
                      </p>
                      <p className="text-xs text-muted-foreground">Supported formats: PDF, DOCX (Max size: 5MB)</p>
                      <input
                        type="file"
                        ref={fileInputRef}
                        className="hidden"
                        accept=".pdf,.docx,.doc"
                        onChange={handleResumeUpload}
                      />
                      <Button
                        size="sm"
                        className="mt-2 bg-srit-orange hover:bg-srit-orange/90 text-white"
                        onClick={triggerResumeUpload}
                        disabled={isUploading}
                      >
                        {isUploading ? (
                          <>Uploading...</>
                        ) : (
                          <>
                            <Upload className="mr-2 h-4 w-4" />
                            Upload Resume
                          </>
                        )}
                      </Button>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium mb-2">Resume History</h3>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between rounded-md border border-srit-wheat p-3 hover:border-srit-orange transition-colors">
                        <div className="flex items-center">
                          <FileText className="mr-2 h-4 w-4 text-srit-orange" />
                          <div>
                            <p className="text-sm font-medium">Resume_NehaAnjum_2024.pdf</p>
                            <p className="text-xs text-muted-foreground">Uploaded on March 15, 2024</p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-srit-orange text-srit-orange hover:bg-srit-orange/10"
                            onClick={() => window.open("/sample-resume.pdf", "_blank")}
                          >
                            <Eye className="mr-1 h-3 w-3" />
                            View
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-srit-orange text-srit-orange hover:bg-srit-orange/10"
                            onClick={() => {
                              toast({
                                title: "Resume Downloaded",
                                description: "Your resume has been downloaded successfully.",
                              })
                            }}
                          >
                            <Download className="mr-1 h-3 w-3" />
                            Download
                          </Button>
                          {isEditing && (
                            <Button
                              variant="ghost"
                              size="icon"
                              className="text-red-500 hover:text-red-500/90 hover:bg-red-500/10"
                              onClick={() =>
                                toast({
                                  title: "Remove Resume",
                                  description: "This feature will allow you to remove your resume.",
                                  variant: "destructive",
                                })
                              }
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                      </div>

                      <div className="flex items-center justify-between rounded-md border border-srit-wheat p-3 hover:border-srit-orange transition-colors">
                        <div className="flex items-center">
                          <FileText className="mr-2 h-4 w-4 text-srit-orange" />
                          <div>
                            <p className="text-sm font-medium">Resume_NehaAnjum_2023.pdf</p>
                            <p className="text-xs text-muted-foreground">Uploaded on November 10, 2023</p>
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-srit-orange text-srit-orange hover:bg-srit-orange/10"
                            onClick={() => window.open("/sample-resume-old.pdf", "_blank")}
                          >
                            <Eye className="mr-1 h-3 w-3" />
                            View
                          </Button>
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-srit-orange text-srit-orange hover:bg-srit-orange/10"
                            onClick={() => {
                              toast({
                                title: "Resume Downloaded",
                                description: "Your resume has been downloaded successfully.",
                              })
                            }}
                          >
                            <Download className="mr-1 h-3 w-3" />
                            Download
                          </Button>
                          {isEditing && (
                            <Button
                              variant="ghost"
                              size="icon"
                              className="text-red-500 hover:text-red-500/90 hover:bg-red-500/10"
                              onClick={() =>
                                toast({
                                  title: "Remove Resume",
                                  description: "This feature will allow you to remove your resume.",
                                  variant: "destructive",
                                })
                              }
                            >
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}

