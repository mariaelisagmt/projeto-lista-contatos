import { DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { FormEvent, useState } from "react"

export function AddContactModal() {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      setName("")
      setEmail("")
      setPhone("")
    }

    return (
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Add New Contact</DialogTitle>
            <DialogDescription>Enter the contact details you want to add.</DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="grid gap-4 py-4">
            <div className="grid items-center grid-cols-4 gap-4">
              <Label htmlFor="name" className="text-right">
                Name
              </Label>
              <Input id="name" value={name} onChange={(e) => setName(e.target.value)} className="col-span-3" />
            </div>
            <div className="grid items-center grid-cols-4 gap-4">
              <Label htmlFor="email" className="text-right">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="col-span-3"
              />
            </div>
            <div className="grid items-center grid-cols-4 gap-4">
              <Label htmlFor="phone" className="text-right">
                Phone
              </Label>
              <Input id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="col-span-3" />
            </div>
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

