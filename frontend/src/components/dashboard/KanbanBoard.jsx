import React from 'react';
import DeleteProjectButton from '@/components/deleteProjectButton';
import { Badge } from "@/components/ui/badge";

const KanbanBoard = ({ projects = [], onDelete }) => {
  const columns = ['To Do', 'In Progress', 'Completed'];

  const matchStatus = (columnName, projectStatus) => {
    const currentStatus = projectStatus ? projectStatus : 'todo';
    const normalizedStatus = String(currentStatus).toLowerCase().replace(/[\s_]/g, '');

    if (columnName === 'To Do') return normalizedStatus === 'todo';
    if (columnName === 'In Progress') return normalizedStatus === 'inprogress' || normalizedStatus === 'active';
    if (columnName === 'Completed') return normalizedStatus === 'completed' || normalizedStatus === 'done';
    return false;
  };

  const getDisplayStatus = (status) => {
    const s = String(status || '').toLowerCase().replace(/[\s_]/g, '');
    if (s === 'todo') return 'To Do';
    if (s === 'inprogress' || s === 'active') return 'In Progress';
    if (s === 'completed' || s === 'done') return 'Completed';
    return 'To Do';
  };

  return (
    // 🖥️ Creates a 3-column desktop view layout with consistent gap spacing
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', width: '100%' }}>
      {columns.map((columnName) => {
        const filtered = projects.filter(p => matchStatus(columnName, p.status));
        
        return (
          <div 
            key={columnName} 
            style={{
              display: 'flex',
              flexDirection: 'column',
              backgroundColor: '#0b0f19',
              borderRadius: '0.75rem',
              border: '1px solid #1e293b',
              padding: '1.25rem',
              minHeight: '550px'
            }}
          >
            {/* 📋 Column Header */}
            <div style={{ display: 'flex', justifyContent: 'between', alignItems: 'center', marginBottom: '1.25rem', paddingBottom: '0.75rem', borderBottom: '1px solid #1e293b' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <h3 style={{ fontSize: '1.125rem', fontWeight: '600', color: '#f4f4f5' }}>{columnName}</h3>
                <span style={{ fontSize: '0.75rem', backgroundColor: '#1e293b', color: '#94a3b8', padding: '0.25rem 0.625rem', borderRadius: '9999px', fontWeight: '500' }}>
                  {filtered.length}
                </span>
              </div>
            </div>

            {/* 🗂️ Task Container Stack */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', flexGrow: 1 }}>
              {filtered.length === 0 ? (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexGrow: 1, border: '2px dashed #1e293b', borderRadius: '0.5rem', padding: '2rem', color: '#475569', fontSize: '0.875rem' }}>
                  No tasks items
                </div>
              ) : (
                filtered.map((project) => (
                  <div 
                    key={project.id} 
                    style={{
                      backgroundColor: '#111827',
                      border: '1px solid #1e293b',
                      padding: '1rem',
                      borderRadius: '0.5rem',
                      boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
                      transition: 'border-color 0.2s',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'space-between'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.borderColor = '#3b82f6'}
                    onMouseLeave={(e) => e.currentTarget.style.borderColor = '#1e293b'}
                  >
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <h4 style={{ fontSize: '0.95rem', fontWeight: '700', color: '#ffffff', wordBreak: 'break-word', margin: 0 }}>
                          {project.title}
                        </h4>
                      </div>
                      
                      <p style={{ fontSize: '0.825rem', color: '#94a3b8', marginBottom: '1rem', lineHeight: '1.4', minHeight: '2.5rem' }}>
                        {project.description || <span style={{ italic: true, color: '#334155' }}>No description provided.</span>}
                      </p>
                    </div>

                    {/* ⚙️ Actions Footer */}
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto', paddingTop: '0.5rem', borderTop: '1px solid #1e293b' }}>
                      <span style={{ fontSize: '0.75rem', backgroundColor: '#1e293b', color: '#cbd5e1', padding: '0.125rem 0.5rem', borderRadius: '0.25rem', border: '1px solid #334155' }}>
                        {getDisplayStatus(project.status)}
                      </span>
                      <DeleteProjectButton projectId={project.id} onDelete={onDelete} />
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default KanbanBoard;