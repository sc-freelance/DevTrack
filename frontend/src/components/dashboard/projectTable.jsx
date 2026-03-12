import { Table, TableBody, TableCell, TableHead, TableRow, TableHeader } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { useEffect } from 'react';

const ProjectTable = ({ projects }) => {
    {fetchData && ( // the && operator is used to conditionally render the useEffect hook only if the fetchData function is defined
        useEffect(() => { // useEffect is used to perform side effects in functional components, such as fetching data from an API
            fetchData(); // Call the fetchData function when the component mounts
        }, [fetchData])
    )}
    return (
        <Table>
            <TableHeader>
                <TableRow> // Add a header row for the table
                    <TableHead>Project Name</TableHead>
                    <TableHead>Tasks</TableHead>
                    <TableHead>Status</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {projects.map((projects) => ( // Iterate over the projects array and render a table row for each project
                    <TableRow key={projects.id}>
                        <TableCell className="font-medium">{projects.title}</TableCell>
                        <TableCell>{projects.task_count} Tasks </TableCell>
                        <TableCell>
                            <Badge variant={projects.status === "Completed" ? "success" : "secondary"}>
                                {projects.status}
                            </Badge>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default ProjectTable;