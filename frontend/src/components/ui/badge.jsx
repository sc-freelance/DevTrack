import * as React from "react"
function Badge({ className, ...props }) {
  return (
    <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/10 px-2.5 py-0.5 text-xs font-semibold text-primary transition-colors" {...props} />
  )
}
export { Badge }