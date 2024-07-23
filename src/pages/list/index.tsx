import { Button } from "@/components/ui/button"
import { Table, TableHeader, TableRow, TableHead, TableBody } from "@/components/ui/table"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"
import { useState } from "react"
import { AddContactModal } from './components/addContactModal'
import { ContactTableRow } from "./components/contactTableRow"
import { MagnifyingGlass, Plus } from "@phosphor-icons/react"

export function List() {
	const mock = [
			{
				id: 2,
				nome: "Mateus",
				telefone: 123,
				email: "exemplo@email.com"
			},
			{
				id: 3,
				nome: "Maria",
				telefone: 123,
				email: "exemplo@email.com"
			},
			{
				id: 4,
				nome: "Felipe",
				telefone: 123,
				email: "exemplo@email.com"
			},
			{
				id: 5,
				nome: "George",
				telefone: 123,
				email: "exemplo@email.com"
			}
	]

  const [isAddContactOpen, setIsAddContactOpen] = useState(false)

  return (
    <div className="flex flex-col gap-6 py-6 px-4 md:px-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Contact List</h1>
        <div className="flex items-center gap-2">
          <Button variant="outline" size="icon">
            <MagnifyingGlass className="h-4 w-4" />
            <span className="sr-only">Buscar</span>
          </Button>
          
          <Dialog open={isAddContactOpen} onOpenChange={setIsAddContactOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" size="icon">
                <Plus className="h-4 w-4" />
                <span className="sr-only">Adicionar contato</span>
              </Button>
            </DialogTrigger>

            <AddContactModal />            
          </Dialog>
        
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
                <ContactTableRow key={item.id} contact={item}/>
							)
						})
					}
        </TableBody>
      </Table>
    </div>
  )
}