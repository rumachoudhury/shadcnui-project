import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <div className="w-[300px] bg-gray-50 flex flex-col text-center p-4 rounded-lg shadow-md gap-4">
        <h1 className="font-bold text-2xl">Login</h1>
        <Input placeholder="Username" />
        <Input placeholder="Password" />
        <Button variant={"default"}>Submit</Button>
        <Button variant={"outline"}>Sign Up</Button>

        <div className="mt-2 flex justify-center">
          <Link href="/">
            <Button
              className="cursor-pointer bg-blue-500 text-white"
              variant="outline"
            >
              Back Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
