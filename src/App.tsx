import './App.css'
import { Table } from './components/Table'

export interface Employee {
  id: string;
  firstname: string;
  lastname: string;
  salary: number;
  status: string;
}

function App() {
  const mockData: Employee [] = [
  {
id: '1',
firstname: 'John',
lastname: 'Doe',
salary: 6000,
status: 'Na urlopie'
  },
  {
  id: '2',
  firstname: 'Jan',
  lastname: 'Kowalski',
  salary: 16000,
  status: 'Na urlopie'
  },
  {
  id: '3',
  firstname: 'Adam',
  lastname: 'Nowak',
  salary: 22000,
  status: 'Na urlopie'
  },
  ]

  return (
    <>
      <h1>Employees</h1>

      <Table data={mockData}></Table>
    </>
  )
}

export default App
