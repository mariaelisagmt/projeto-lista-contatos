import { Button } from "@/components/ui/button"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"

export function List() {

	const mock = [
			{
				id: 2,
				nome: "Mateus",
				telefone: "123",
				email: "exemplo@email.com"
			},
			{
				id: 3,
				nome: "Maria",
				telefone: "123",
				email: "exemplo@email.com"
			},
			{
				id: 4,
				nome: "Felipe",
				telefone: "123",
				email: "exemplo@email.com"
			},
			{
				id: 5,
				nome: "George",
				telefone: "123",
				email: "exemplo@email.com"
			}
	]

  return (
    <div className="flex flex-col gap-6 py-6 px-4 md:px-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Contact List</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon">
            <SearchIcon className="h-4 w-4" />
            <span className="sr-only">Buscar</span>
          </Button>
          <Button variant="outline" size="icon">
            <PlusIcon className="h-4 w-4" />
            <span className="sr-only">Adicionar contato</span>
          </Button>
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Nome</TableHead>
            <TableHead>E-mail</TableHead>
            <TableHead>Telefone</TableHead>
            <TableHead className="text-right">Ações</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>

					{
						mock.map(item => {
							return (
								<TableRow key={item.id}>
									<TableCell className="font-medium">{item.nome}</TableCell>
									<TableCell>{item.email}</TableCell>
									<TableCell>{item.telefone}</TableCell>
									<TableCell className="text-right">
										<Button variant="outline" size="icon">
											<TrashIcon className="h-4 w-4" />
											<span className="sr-only">Deletar</span>
										</Button>
									</TableCell>
								</TableRow>
							)
						})
					}
        </TableBody>
      </Table>
    </div>
  )
}

function PlusIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M5 12h14" />
      <path d="M12 5v14" />
    </svg>
  )
}


function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function TrashIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 6h18" />
      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6" />
      <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" />
    </svg>
  )
}