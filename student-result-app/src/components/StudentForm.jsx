import React, { useState } from 'react'

// StudentForm used for both Add and Edit
// Props:
// - initialData: object or null
// - onSubmit: function(formData, isEdit)
// - onCancel: function
// - isEdit: boolean

export default function StudentForm({ initialData = null, onSubmit, onCancel, isEdit = false }) {
  const [name, setName] = useState(initialData ? initialData.name : '')
  const [section, setSection] = useState(initialData ? initialData.section : '')
  const [marks, setMarks] = useState(initialData ? initialData.marks : '')
  const [grade, setGrade] = useState(initialData ? initialData.grade : '')

  const handleSubmit = e => {
    e.preventDefault()
    const payload = {
      name: name.trim(),
      section: section.trim(),
      marks: Number(marks) || 0,
      grade: grade.trim()
    }
    if (isEdit && initialData && initialData.id) payload.id = initialData.id
    onSubmit(payload, isEdit)
  }

  return (
    <div>
      <div className="header">
        <h2>{isEdit ? 'Edit Student' : 'Add Student'}</h2>
      </div>

      <form className="card" onSubmit={handleSubmit} style={{maxWidth: '520px'}}>
        <label>
          Name
          <input type="text" value={name} onChange={e => setName(e.target.value)} required />
        </label>

        <label>
          Section
          <input type="text" value={section} onChange={e => setSection(e.target.value)} />
        </label>

        <label>
          Marks
          <input type="number" value={marks} onChange={e => setMarks(e.target.value)} />
        </label>

        <label>
          Grade
          <input type="text" value={grade} onChange={e => setGrade(e.target.value)} />
        </label>

        <div style={{display:'flex',gap:'8px',marginTop:'8px'}}>
          <button type="submit">{isEdit ? 'Update' : 'Add'}</button>
          <button type="button" className="ghost" onClick={onCancel}>Cancel</button>
        </div>
      </form>
    </div>
  )
}
