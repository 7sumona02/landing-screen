import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Label } from "@/components/ui/label";

export default function Login() {
  return (
    <div className="bg-neutral-100 flex min-h-screen flex-col items-start justify-start p-8">
      <main className="w-full max-w-md space-y-8">
        <div className="">
          <h1 className="text-2xl font-bold tracking-tight">Signin to your <br /> PopX account</h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Sign in to your account
          </p>
        </div>

        <form className="space-y-4" action="/account">
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="email" className="text-violet-700">Email Address</Label>
                <Input type="email" id="email" name="email" placeholder="" className="text-sm" required aria-required="true" />
            </div>

            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="password" className="text-violet-700">Password</Label>
                <Input
                    type="password" 
                    id="password" 
                    name="password" 
                    placeholder="" 
                    className="text-sm"
                    minLength={8} 
                    required 
                    aria-required="true" 
                />
            </div>

          <Button type="submit" className="w-full bg-violet-700" size="lg">
            Sign In
          </Button>
        </form>
      </main>
    </div>
  );
}