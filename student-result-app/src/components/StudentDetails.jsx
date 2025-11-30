import React from 'react'

// Simple read-only student details
export default function StudentDetails({ student, onBack }) {
  if (!student) return null

  return (
    <div>
      <div className="header">
        <h2>Student Details</h2>
        <div className="controls">
          <button onClick={onBack}>Back</button>
        </div>
      </div>

      <div className="card" style={{maxWidth:'520px'}}>
        <p><strong>ID:</strong> {student.id}</p>
        <p><strong>Name:</strong> {student.name}</p>
        <p><strong>Section:</strong> {student.section}</p>
        <p><strong>Marks:</strong> {student.marks}</p>
        <p><strong>Grade:</strong> {student.grade}</p>
      </div>
    </div>
  )
}
