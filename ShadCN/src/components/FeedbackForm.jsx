import { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export default function FeedbackForm() {
  const [data, setData] = useState({ name: "", email: "", feedback: "" })
  const [submitted, setSubmitted] = useState(null)

  function handleChange(e) {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  function submit(e) {
    e.preventDefault()
    setSubmitted(data)
    setData({ name: "", email: "", feedback: "" })
  }

  return (
    <Card className="p-4">
      <CardHeader>
        <CardTitle>Feedback Form</CardTitle>
      </CardHeader>

      <CardContent>
        <form onSubmit={submit} className="space-y-3">
          <Input name="name" placeholder="Name" value={data.name} onChange={handleChange} />
          <Input name="email" placeholder="Email" value={data.email} onChange={handleChange} />
          <Textarea name="feedback" placeholder="Feedback" value={data.feedback} onChange={handleChange} />

          <Button type="submit">Submit</Button>
        </form>

        {submitted && (
          <div className="mt-4 space-y-1 text-sm">
            <p><b>Name:</b> {submitted.name}</p>
            <p><b>Email:</b> {submitted.email}</p>
            <p><b>Feedback:</b> {submitted.feedback}</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
