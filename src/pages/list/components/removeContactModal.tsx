import { DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { FormEvent, useEffect } from "react"

interface RemoveContactProps {
  id: number  
}

export function RemoveContactModal({ id }: RemoveContactProps) {
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
    }

    return (
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Deletar contato</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="grid gap-4 py-4">
            
            <DialogFooter>
              <Button type="submit">Save</Button>
              <div>
                <Button variant="outline" type="button">
                  Cancel
                </Button>
              </div>
            </DialogFooter>
          </form>
          </DialogContent>
    )
}

