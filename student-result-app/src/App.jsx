import React, { useState } from 'react'
import StudentList from './components/StudentList'
import StudentForm from './components/StudentForm'
import StudentDetails from './components/StudentDetails'
import * as studentService from './services/studentService'

export default function App() {
  const [students, setStudents] = useState([])
  const [mode, setMode] = useState('list') // list | add | edit | view
  const [selected, setSelected] = useState(null)
  const [loading, setLoading] = useState(false)

  const loadStudents = async () => {
    try {
      setLoading(true)
      const data = await studentService.getStudents()
      setStudents(data)
    } catch (err) {
      alert('Failed to load students: ' + (err.message || err))
    } finally {
      setLoading(false)
    }
  }

  const handleAdd = () => {
    setSelected(null)
    setMode('add')
  }

  const handleEdit = (student) => {
    setSelected(student)
    setMode('edit')
  }

  const handleView = (student) => {
    setSelected(student)
    setMode('view')
  }

  const handleDelete = async (id) => {
    if (!confirm('Delete this student?')) return
    try {
      await studentService.deleteStudent(id)
      alert('Student deleted. Click "Load Students" to refresh the list.')
      // Do not auto-refresh; user will click Load Students as per requirements
    } catch (err) {
      alert('Delete failed: ' + (err.message || err))
    }
  }

  const handleSubmit = async (formData, isEdit) => {
    try {
      if (isEdit) {
        await studentService.updateStudent(formData.id, formData)
        alert('Student updated. Click "Load Students" to refresh the list.')
      } else {
        await studentService.addStudent(formData)
        alert('Student added. Click "Load Students" to refresh the list.')
      }
      setMode('list')
      setSelected(null)
    } catch (err) {
      alert('Save failed: ' + (err.message || err))
    }
  }

  const handleCancel = () => {
    setMode('list')
    setSelected(null)
  }

  return (
    <div className="app">
      <h1>Student Result App</h1>

      {mode === 'list' && (
        <div>
          <div style={{display:'flex',alignItems:'center',gap:'8px',marginBottom:'8px'}}>
            <button onClick={loadStudents} disabled={loading}>{loading ? 'Loading...' : 'Load Students'}</button>
            <button onClick={handleAdd} className="ghost">Add Student</button>
          </div>

          <StudentList
            students={students}
            onLoad={loadStudents}
            onAdd={handleAdd}
            onEdit={handleEdit}
            onDelete={handleDelete}
            onView={handleView}
          />
        </div>
      )}

      {mode === 'add' && (
        <StudentForm isEdit={false} onSubmit={handleSubmit} onCancel={handleCancel} />
      )}

      {mode === 'edit' && (
        <StudentForm isEdit={true} initialData={selected} onSubmit={handleSubmit} onCancel={handleCancel} />
      )}

      {mode === 'view' && selected && (
        <StudentDetails student={selected} onBack={() => setMode('list')} />
      )}

      <footer style={{marginTop:'24px',color:'#555'}}>
        <small>Note: All fetch calls are manual. Click "Load Students" after Add/Edit/Delete to refresh.</small>
      </footer>
    </div>
  )
}
