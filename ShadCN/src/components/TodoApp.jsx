import { useState } from "react"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

export default function TodoApp() {
  const [text, setText] = useState("")
  const [todos, setTodos] = useState([])

  function addTodo() {
    if (!text.trim()) return
    setTodos([...todos, { task: text, done: false }])
    setText("")
  }

  function toggleTodo(index) {
    const updated = [...todos]
    updated[index].done = !updated[index].done
    setTodos(updated)
  }

  return (
    <Card className="p-4">
      <CardHeader>
        <CardTitle>Todo List</CardTitle>
      </CardHeader>

      <CardContent className="space-y-3">

        <div className="flex gap-2">
          <Input
            value={text}
            onChange={e => setText(e.target.value)}
            placeholder="Add todo"
          />
          <Button onClick={addTodo}>Add</Button>
        </div>

        <div className="space-y-2">
          {todos.map((todo, index) => (
            <div key={index} className="flex items-center gap-2">
              <Checkbox
                checked={todo.done}
                onCheckedChange={() => toggleTodo(index)}
              />
              <span className={todo.done ? "line-through text-gray-500" : ""}>
                {todo.task}
              </span>
            </div>
          ))}
        </div>

      </CardContent>
    </Card>
  )
}
