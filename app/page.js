import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <div className="bg-neutral-100 flex min-h-screen flex-col justify-end p-8">
      <main className="flex flex-col items-start">
        <h1 className="text-2xl font-bold tracking-tighter pb-2">Welcome to PopX</h1>
        <p className="text-lg text-muted-foreground pb-4">
          Get started by creating an account or logging in
        </p>
        
        <div className="flex gap-2 flex-col sm:flex-row w-full max-w-sm">
          <Link href="/register" className="w-full">
            <Button className="w-full bg-violet-700" size="lg">
              Create Account
            </Button>
          </Link>
          <Link href="/login" className="w-full">
            <Button 
              className="w-full bg-violet-300" 
              variant="outline"
              size="lg"
            >
              Already Registered? Login
            </Button>
          </Link>
        </div>
      </main>
    </div>
  );
}
