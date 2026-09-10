import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";

export default function Signup() {
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center p-4">
      <Card className="w-full max-w-md border-thin rounded-none shadow-none">
        <CardHeader className="text-center pb-8 pt-10">
          <CardTitle className="text-2xl uppercase tracking-widest font-sans font-bold">Request Access</CardTitle>
          <CardDescription className="font-mono mt-2">Apply for system credentials.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-2">
            <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Full Name</label>
            <input 
              type="text" 
              placeholder="Jane Doe" 
              className="w-full border border-thin border-border p-3 font-mono text-sm focus:outline-none focus:border-foreground bg-background"
            />
          </div>
          <div className="space-y-2">
            <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Organization</label>
            <input 
              type="text" 
              placeholder="Legal Metrology Dept." 
              className="w-full border border-thin border-border p-3 font-mono text-sm focus:outline-none focus:border-foreground bg-background"
            />
          </div>
          <div className="space-y-2">
            <label className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Email</label>
            <input 
              type="email" 
              placeholder="jane@organization.gov" 
              className="w-full border border-thin border-border p-3 font-mono text-sm focus:outline-none focus:border-foreground bg-background"
            />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4 pb-10">
          <Button className="w-full font-mono uppercase tracking-widest" size="lg">Submit Request</Button>
          <div className="text-center font-mono text-xs text-muted-foreground mt-4">
            Already verified? <Link href="/login" className="text-foreground underline underline-offset-4">Authenticate</Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
