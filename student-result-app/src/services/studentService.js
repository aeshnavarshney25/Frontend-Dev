const API_BASE = 'http://localhost:3010'; // JSON Server runs on port 3010 for this app

export async function getStudents() {
  const res = await fetch(`${API_BASE}/students`);
  if (!res.ok) throw new Error('Failed to fetch students');
  return await res.json();
}

export async function getStudent(id) {
  const res = await fetch(`${API_BASE}/students/${id}`);
  if (!res.ok) throw new Error('Failed to fetch student');
  return await res.json();
}

export async function addStudent(student) {
  const res = await fetch(`${API_BASE}/students`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(student)
  });
  if (!res.ok) throw new Error('Failed to add student');
  return await res.json();
}

export async function updateStudent(id, student) {
  const res = await fetch(`${API_BASE}/students/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(student)
  });
  if (!res.ok) throw new Error('Failed to update student');
  return await res.json();
}

export async function deleteStudent(id) {
  const res = await fetch(`${API_BASE}/students/${id}`, { method: 'DELETE' });
  if (!res.ok) throw new Error('Failed to delete student');
  return true;
}
