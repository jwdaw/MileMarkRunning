"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CalendarDays, Clock, Video } from "lucide-react"

const meetingTypes = [
  {
    id: "intro",
    title: "Intro Call",
    description: "Get to know each other and discuss your goals",
    icon: Video,
  },
  {
    id: "strategy",
    title: "Strategy Session",
    description: "Deep dive into your training plan and race strategy",
    icon: CalendarDays,
  },
  {
    id: "review",
    title: "Monthly Review",
    description: "Review progress and adjust your training plan",
    icon: Clock,
  },
]

export function ScheduleSection() {
  const [date, setDate] = useState<Date | undefined>(undefined)
  const [selectedType, setSelectedType] = useState<string>("")
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    time: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log({ date, selectedType, ...formData })
    alert("Meeting request submitted! We'll be in touch soon.")
  }

  return (
    <section id="schedule" className="py-24 sm:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Book a Session
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-4 mb-6 text-balance">
            Schedule a Meeting
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            Ready to take your running to the next level? Book a free intro call 
            or schedule a coaching session. Let&apos;s discuss your goals and create 
            a plan to achieve them.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Meeting type selection */}
          <div className="space-y-6">
            <h3 className="font-display text-xl font-semibold text-foreground">
              Select Meeting Type
            </h3>
            <div className="space-y-4">
              {meetingTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setSelectedType(type.id)}
                  className={`w-full flex items-start gap-4 p-4 rounded-xl border transition-all text-left ${
                    selectedType === type.id
                      ? "border-primary bg-primary/10"
                      : "border-border bg-secondary hover:border-primary/50"
                  }`}
                >
                  <div
                    className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${
                      selectedType === type.id ? "bg-primary" : "bg-background"
                    }`}
                  >
                    <type.icon
                      className={`w-6 h-6 ${
                        selectedType === type.id ? "text-primary-foreground" : "text-primary"
                      }`}
                    />
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-semibold text-foreground mb-1">{type.title}</h4>
                    <p className="text-sm text-muted-foreground">{type.description}</p>
                  </div>
                </button>
              ))}
            </div>

            {/* Calendar */}
            <div className="mt-8">
              <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                Select Date
              </h3>
              <Card className="bg-secondary border-border">
                <CardContent className="p-4">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md"
                    disabled={(date) => date < new Date() || date.getDay() === 0}
                  />
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Booking form */}
          <div>
            <Card className="bg-secondary border-border">
              <CardHeader>
                <CardTitle className="font-display text-xl">Your Details</CardTitle>
                <CardDescription>
                  Fill in your information to complete the booking
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                      className="bg-background"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                      className="bg-background"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="time">Preferred Time</Label>
                    <Select
                      value={formData.time}
                      onValueChange={(value) => setFormData({ ...formData, time: value })}
                    >
                      <SelectTrigger className="bg-background">
                        <SelectValue placeholder="Select a time" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="9:00">9:00 AM</SelectItem>
                        <SelectItem value="10:00">10:00 AM</SelectItem>
                        <SelectItem value="11:00">11:00 AM</SelectItem>
                        <SelectItem value="14:00">2:00 PM</SelectItem>
                        <SelectItem value="15:00">3:00 PM</SelectItem>
                        <SelectItem value="16:00">4:00 PM</SelectItem>
                        <SelectItem value="17:00">5:00 PM</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Tell us about your goals</Label>
                    <Textarea
                      id="message"
                      placeholder="I'm training for a marathon and looking to improve my time..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      rows={4}
                      className="bg-background resize-none"
                    />
                  </div>

                  <Button
                    type="submit"
                    className="w-full"
                    size="lg"
                    disabled={!selectedType || !date || !formData.name || !formData.email}
                  >
                    Book Meeting
                  </Button>

                  {date && selectedType && (
                    <p className="text-sm text-muted-foreground text-center">
                      You&apos;re booking a{" "}
                      <span className="text-foreground font-medium">
                        {meetingTypes.find((t) => t.id === selectedType)?.title}
                      </span>{" "}
                      on{" "}
                      <span className="text-foreground font-medium">
                        {date.toLocaleDateString("en-US", {
                          weekday: "long",
                          month: "long",
                          day: "numeric",
                        })}
                      </span>
                    </p>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
