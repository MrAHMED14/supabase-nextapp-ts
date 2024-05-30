"use client"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Link from "next/link"
import { signOut } from "@/lib/db/action"
import { useEffect, useState } from "react"

const AvatarMenu = ({ img, name }: { img: string; name: string }) => {
  const [nameFallBack, setNameFallBack] = useState<string>("")

  useEffect(() => {
    setNameFallBack(name.charAt(0).toUpperCase())
  }, [name])

  const signOutHandler = async () => {
    await signOut()
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className="cursor-pointer">
          <AvatarImage src={img} alt={name} />
          <AvatarFallback className="bg-blue-500 text-white dark:bg-white/20 font-bold">
            {nameFallBack}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>{name}</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <Link href={"/"}>
          <DropdownMenuItem className="flex sm:hidden cursor-pointer">
            Home
          </DropdownMenuItem>
        </Link>
        <Link href={"/notes"}>
          <DropdownMenuItem className="flex sm:hidden cursor-pointer">
            Notes
          </DropdownMenuItem>
        </Link>
        <Link href={"/contact"}>
          <DropdownMenuItem className="flex sm:hidden cursor-pointer">
            Contact
          </DropdownMenuItem>
        </Link>
        <DropdownMenuItem className="cursor-pointer" onClick={signOutHandler}>
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default AvatarMenu
