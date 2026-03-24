import * as React from "react"
const Table = ({ className, ...props }) => (
  <div className="relative w-full overflow-auto">
    <table className="w-full caption-bottom text-sm" {...props} />
  </div>
)
const TableHeader = ({ ...props }) => <thead className="[&_tr]:border-b" {...props} />
const TableBody = ({ ...props }) => <tbody className="[&_tr:last-child]:border-0" {...props} />
const TableRow = ({ ...props }) => <tr className="border-b transition-colors hover:bg-zinc-800/50" {...props} />
const TableHead = ({ ...props }) => <th className="h-12 px-4 text-left align-middle font-medium text-zinc-400" {...props} />
const TableCell = ({ ...props }) => <td className="p-4 align-middle" {...props} />

export { Table, TableHeader, TableBody, TableHead, TableRow, TableCell }