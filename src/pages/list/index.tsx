import { Button } from "@/components/ui/button"
import { Table, TableHeader, TableRow, TableHead, TableBody } from "@/components/ui/table"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"
import { useEffect, useState } from "react"
import { AddContactModal } from './components/addContactModal'
import { ContactTableRow } from "./components/contactTableRow"
import { MagnifyingGlass, Plus } from "@phosphor-icons/react"
import { getContato } from "../api/contato"

export function List() {
  const [contatos , setContatos] = useState([]);
  const [isAddContactOpen, setIsAddContactOpen] = useState(false)
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getContato();
        setContatos(data);
      } catch (error) {
        console.error('Erro ao carregar contatos', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) return <p>Loading...</p>;


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
						contatos.map(item => {
							return (
                <ContactTableRow key={item} contact={item}/>
							)
						})
					}
        </TableBody>
      </Table>
    </div>
  )
}