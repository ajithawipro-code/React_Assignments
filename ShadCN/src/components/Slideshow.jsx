import { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"

const images = [
  "https://picsum.photos/400/200?1",
  "https://picsum.photos/400/200?2",
  "https://picsum.photos/400/200?3",
]

export default function Slideshow() {
  const [index, setIndex] = useState(0)

  function next() {
    setIndex((index + 1) % images.length)
  }

  function prev() {
    setIndex((index - 1 + images.length) % images.length)
  }

  return (
    <Card className="p-4">
      <CardHeader>
        <CardTitle>Image Slideshow</CardTitle>
      </CardHeader>

      <CardContent>
        <Tabs value={String(index)}>
          <TabsList className="mb-4">
            {images.map((_, i) => (
              <TabsTrigger key={i} value={String(i)}>
                Image {i + 1}
              </TabsTrigger>
            ))}
          </TabsList>

          {images.map((img, i) => (
            <TabsContent key={i} value={String(i)}>
              <img src={img} className="rounded" />
            </TabsContent>
          ))}
        </Tabs>

        <div className="flex gap-2 mt-4">
          <Button onClick={prev}>Previous</Button>
          <Button onClick={next}>Next</Button>
        </div>
      </CardContent>
    </Card>
  )
}
