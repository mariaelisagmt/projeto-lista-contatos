import { DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { FormEvent} from "react"
import { removeContato } from "@/pages/api/removerContato";

interface RemoveContactProps {
  id: number;
  onSuccess: () => void; 
}

export function RemoveContactModal({ id, onSuccess }: RemoveContactProps) {
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await removeContato(id);
      onSuccess();
    } catch (error) {
      console.error('Erro ao remover contato:', error);
    }
  };

  return (
    <DialogContent className="sm:max-w-[425px]">
      <DialogHeader>
        <DialogTitle>Deletar contato</DialogTitle>
      </DialogHeader>
      <form onSubmit={handleSubmit} className="grid gap-4 py-4">
        <p>Você tem certeza que deseja deletar este contato?</p>
        <DialogFooter>
          <Button type="submit">Deletar</Button>
          <div>
            <Button variant="outline" type="button" onClick={() => onSuccess()}>
              Cancelar
            </Button>
          </div>
        </DialogFooter>
      </form>
    </DialogContent>
  );
}