import "./App.css";
import { Table } from "./components/Table";
import { Employee } from "./models/Employee";

function App() {
	const mockData: Employee[] = [
		{
			id: "1",
			firstname: "Artur",
			lastname: "Nowak",
			salary: 6000,
			status: "Na urlopie",
		},
		{
			id: "2",
			firstname: "Jan",
			lastname: "Kowalski",
			salary: 16000,
			status: "Na urlopie",
		},
		{
			id: "3",
			firstname: "Tomasz",
			lastname: "Jankowski",
			salary: 22000,
			status: "Na urlopie",
		},
	];

	return (
		<>
			<h1>Employees</h1>

			<Table data={mockData}></Table>
		</>
	);
}

export default App;
