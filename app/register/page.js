import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function Register() {
  return (
    <div className="bg-neutral-100 flex h-screen flex-col items-center justify-start p-8">
      <main className="w-full max-w-md space-y-8">
        <div className="">
          <h1 className="text-2xl font-bold tracking-tight">Create your <br /> PopX account</h1>
        </div>

        <form className="space-y-4" action="/account">
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="fullName" className="text-violet-700">Full Name<span className="text-red-500 -ml-2">*</span></Label>
                <Input type="text" id="fullName" name="fullName" placeholder="" className="text-sm" required aria-required="true" />
            </div>

            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="phone" className="text-violet-700">Phone Number<span className="text-red-500 -ml-2">*</span></Label>
                <Input type="tel" id="phone" name="phone" placeholder="" pattern="[0-9]{10}" className="text-sm" required aria-required="true" />
            </div>

            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="email" className="text-violet-700">Email Address<span className="text-red-500 -ml-2">*</span></Label>
                <Input type="email" id="email" name="email" placeholder="" className="text-sm" required aria-required="true" />
            </div>

            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="password" className="text-violet-700">Password<span className="text-red-500 -ml-2">*</span></Label>
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

            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="company" className="text-violet-700">Company Name</Label>
                <Input type="text" id="company" name="company" placeholder="" className="text-sm" />
            </div>

            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label className="text-violet-700">Are you an Agency?<span className="text-red-500">*</span></Label>
                <RadioGroup defaultValue="no" name="isAgency" className="flex pt-2" required>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="yes" id="agency-yes" />
                        <Label htmlFor="agency-yes">Yes</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                        <RadioGroupItem value="no" id="agency-no" />
                        <Label htmlFor="agency-no">No</Label>
                    </div>
                </RadioGroup>
            </div>

            <div className="pt-14">
                <Button type="submit" className="w-full bg-violet-700" size="lg">
                    Create Account
                </Button>
            </div>
        </form>
      </main>
    </div>
  );
}