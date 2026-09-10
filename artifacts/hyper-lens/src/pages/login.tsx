import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

export default function Login() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-4">
      <Card className="w-full max-w-md border-thin rounded-none shadow-none">
        <CardHeader className="text-center pb-8 pt-10">
          <div className="w-12 h-12 bg-foreground text-background mx-auto flex items-center justify-center font-bold tracking-tighter mb-6">
            HL
          </div>
          <CardTitle className="text-2xl uppercase tracking-widest font-sans font-bold">Access System</CardTitle>
          <CardDescription className="font-mono mt-2">Authorized personnel only.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Credentials</label>
            <input 
              type="text" 
              placeholder="operator@hyperlens.gov" 
              className="w-full border border-thin border-border p-3 font-mono text-sm focus:outline-none focus:border-foreground bg-background"
            />
          </div>
          <div className="space-y-2">
            <div className="flex justify-between">
              <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Passkey</label>
              <a href="#" className="font-mono text-xs uppercase tracking-widest text-muted-foreground hover:text-foreground">Reset</a>
            </div>
            <input 
              type="password" 
              placeholder="••••••••" 
              className="w-full border border-thin border-border p-3 font-mono text-sm focus:outline-none focus:border-foreground bg-background"
            />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4 pb-10">
          <Button className="w-full font-mono uppercase tracking-widest" size="lg">Authenticate</Button>
          <div className="text-center font-mono text-xs text-muted-foreground mt-4">
            No account? <Link href="/signup" className="text-foreground underline underline-offset-4">Request Access</Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
