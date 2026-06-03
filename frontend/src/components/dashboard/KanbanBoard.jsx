import React from 'react'
import DeleteProjectButton from '../deleteProjectButton'
import { Badge } from 'lucide-react'

const KanbanBoard = ({ project, tasks}) => {
    // Define the Agile stages
    const columns = ['To-do', 'In-Progress', 'Completed']

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {columns.map((columnName) => (
            <div key={columnName} className="flex flex-col bg-zinc-950/50 rounded-xl border border-zinc-800 p-4 min-h-[500px]">
              {/* Column Header */}
              <div className="flex justify-between items-center mb-4 pb-2 border-b border-zinc-800">
                <h3 className="font-semibold text-zinc-200">{columnName}</h3>
                <span className="text-xs bg-zinc-800 text-zinc-400 px-2 py-1 rounded-full">
                  {projects.filter(p => p.status === columnName || (columnName === 'In Progress' && p.status === 'Active')).length}
                </span>
              </div>

              {/* Column Cards */}
              <div className="flex flex-col space-y-3">
                {projects
                  // Sort projects into the correct column (fallback 'Active' to 'In Progress')
                  .filter(p => p.status === columnName || (columnName === 'In Progress' && p.status === 'Active'))
                  .map((project) => (
                    <div key={project.id} className="bg-zinc-900 border border-zinc-800 p-4 rounded-lg shadow-sm hover:border-zinc-700 transition-colors">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="text-sm font-bold text-white">{project.title}</h4>
                        <Badge variant="outline" className="text-xs text-zinc-400 border-zinc-700">
                          {project.status || "Active"}
                        </Badge>
                      </div>
                      <p className="text-xs text-zinc-400 mb-4 line-clamp-2">
                        {project.description}
                      </p>
                      <div className="flex justify-end">
                        <DeleteProjectButton projectId={project.id} onDelete={onDelete} />
                      </div>
                    </div>
                  ))}
              </div>
           </div>
          ))}
        </div>
    )
}

export default KanbanBoard;