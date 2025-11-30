import React from 'react'

// StudentList shows all students and action buttons
// Props:
// - students: array
// - onLoad: handler for Load Students
// - onAdd: handler to switch to Add form
// - onEdit: handler to switch to Edit form with student
// - onDelete: handler to delete student
// - onView: handler to view details

export default function StudentList({ students, onLoad, onAdd, onEdit, onDelete, onView }) {
  return (
    <div>
      <div className="header">
        <h2>Students</h2>
        <div className="controls">
          <button onClick={onLoad}>Load Students</button>
          <button className="ghost" onClick={onAdd}>Add Student</button>
        </div>
      </div>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Section</th>
            <th>Marks</th>
            <th>Grade</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {students && students.length > 0 ? (
            students.map(s => (
              <tr key={s.id}>
                <td>{s.id}</td>
                <td>{s.name}</td>
                <td>{s.section}</td>
                <td>{s.marks}</td>
                <td>{s.grade}</td>
                <td>
                  <button onClick={() => onView(s)}>View</button>
                  <button onClick={() => onEdit(s)}>Edit</button>
                  <button onClick={() => onDelete(s.id)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr><td colSpan="6" style={{color:'#666',padding:'12px',textAlign:'center'}}>No records — click "Load Students" to fetch</td></tr>
          )}
        </tbody>
      </table>
    </div>
  )
}
