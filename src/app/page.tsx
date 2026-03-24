import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";

export default function Home(){
  return(
    <div className="flex flex-col justify-center items-center min-h-screen gap-4 bg-background">
      <h1 className="text-2xl font-semibold">Welcome to Echo</h1>
      <div className="flex items-center gap-4">
        <OrganizationSwitcher />
        <UserButton />
      </div>
    </div>
  )
}