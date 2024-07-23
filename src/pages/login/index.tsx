import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function Login() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-background">
      <div className="mx-4 w-full max-w-md space-y-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold tracking-tight">Bem-vindo!</h1>
          <p className="text-muted-foreground">Insira seu e-mail e senha para ver sua lista de contatos.</p>
        </div>
        <Card>
          <CardContent className="space-y-4 pt-2">
            <div className="space-y-2">
              <Label htmlFor="email">E-mail</Label>
              <Input id="email" type="email" placeholder="email@example.com" required />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Senha</Label>
              </div>
              <Input id="password" type="password" required />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full">
              Entrar
            </Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}