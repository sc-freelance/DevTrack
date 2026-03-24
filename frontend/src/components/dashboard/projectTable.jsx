import React from 'react';
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

const ProjectTable = ({ projects }) => {
  // 1. Handle the "Loading" or "Empty" state
  if (!projects || projects.length === 0) {
    return (
      <div className="p-12 text-center border border-dashed border-border rounded-xl bg-surface">
        <p className="text-zinc-500 font-medium">No projects found. Ready to start a new one?</p>
      </div>
    );
  }

  return (
    <div className="rounded-md border border-border bg-surface">
      <Table>
        <TableHeader className="bg-zinc-900/50">
          <TableRow>
            <TableHead className="w-[250px]">Project Name</TableHead>
            <TableHead>Description</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {projects.map((project) => (
            <TableRow key={project.id || project.title}>
              <TableCell className="font-semibold text-foreground">
                {project.title || project.name}
              </TableCell>
              <TableCell className="text-zinc-400 max-w-md truncate">
                {project.description || "No description provided."}
              </TableCell>
              <TableCell className="text-right">
                <Badge>Active</Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default ProjectTable;