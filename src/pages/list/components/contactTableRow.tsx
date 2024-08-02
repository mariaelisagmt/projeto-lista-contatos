import { TableRow, TableCell } from "@/components/ui/table"
import { Dialog, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { RemoveContactModal } from "./removeContactModal"
import { Trash } from "@phosphor-icons/react"

interface ContactTableRow {
  contact: {
    id: number,
    nome: string,
    telefone: number,
    email: string
  },
  onSuccessDelete: () => void; 
}

export function ContactTableRow({ contact, onSuccessDelete }: ContactTableRow) {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false)
  
  return (
    <TableRow>
      <TableCell className="font-medium">{contact.nome}</TableCell>
      <TableCell>{contact.email}</TableCell>
      <TableCell>{contact.telefone}</TableCell>
      <TableCell className="text-right">

        <Dialog open={isDeleteModalOpen} onOpenChange={setIsDeleteModalOpen}>
          <DialogTrigger asChild>
            <Button variant="outline" size="icon">
              <Trash className="h-4 w-4" />
              <span className="sr-only">Deletar</span>
            </Button>
          </DialogTrigger>

          <RemoveContactModal id={contact.id} onSuccess={onSuccessDelete}/>
        </Dialog>
        
      </TableCell>
    </TableRow>
  )
}