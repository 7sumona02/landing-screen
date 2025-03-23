import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Account() {
  // This would typically fetch user data from an API/backend
  const mockUser = {
    name: "John Doe",
    email: "john@example.com",
    avatarUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=John",
    description: "Passionate about building innovative solutions with React, Next.js, and Tailwind CSS. I explore the intersection of technology and communication, from crafting engaging web applications to understanding Markov Chains and Information Theory."
  };

  return (
    <div className="flex min-h-screen flex-col items-start justify-start bg-neutral-100">
      <main className="w-full max-w-md">
        <div className="bg-white p-4">
          <h1 className="text-lg font-medium tracking-tight">Account Settings</h1>
        </div>
        <div className="h-full border-b pb-4">
            <div className="p-8 flex items-start space-x-4">
                <Avatar className="size-12 bg-white">
                    <AvatarImage src={mockUser.avatarUrl} alt={""} />
                    <AvatarFallback>JD</AvatarFallback>
                </Avatar>                
                <div>
                    <h2 className="text-sm font-medium text-black">{mockUser.name}</h2>
                    <p className="text-xs text-muted-foreground">{mockUser.email}</p>
                </div>
            </div>
            <div className="px-8">
                <p className="text-xs">{mockUser.description}</p>
            </div>
        </div>
      </main>
    </div>
  );
}