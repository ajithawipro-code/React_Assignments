import FeedbackForm from "./components/FeedbackForm"
import Slideshow from "./components/Slideshow"
import TodoApp from "./components/TodoApp"

export default function App() {
  return (
    <div className="p-6 space-y-8 max-w-3xl mx-auto">
      <FeedbackForm />
      <Slideshow />
      <TodoApp />
    </div>
  )
}
