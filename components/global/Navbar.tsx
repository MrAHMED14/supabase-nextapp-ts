import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { MoveRight } from "lucide-react"
import AvatarMenu from "./AvatarMenu"
import { createClient } from "@/lib/db/supabase/server"

const Navbar = async () => {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  return (
    <nav className="w-full sticky top-0 z-50 backdrop-blur-sm">
      <MaxWidthWrapper>
        <div className="w-full flex items-center justify-between mx-auto my-2">
          {/* Left */}
          <div className="sm:w-full flex items-center">
            <Link className="text-base sm:text-xl font-black" href={"/"}>
              LOGO
            </Link>
          </div>

          {/* Center */}
          <div className="w-full hidden sm:flex items-center justify-center">
            <ul className="flex justify-center items-center space-x-5">
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/notes"}>Notes</Link>
              </li>
              <li>
                <Link href={"/contact"}>Contact</Link>
              </li>
            </ul>
          </div>

          {/* Right */}
          <div className="w-full flex items-center justify-end gap-x-2">
            {user ? (
              <>
                <AvatarMenu
                  img={user.user_metadata.avatar_url}
                  name={user.user_metadata.name}
                />
              </>
            ) : (
              <>
                <Link href="/login" className="text-sm sm:text-base">
                  Login
                </Link>
                <Link
                  href="/notes"
                  className="text-sm sm:text-base text-white bg-blue-500 hover:bg-blue-400 px-2 py-1 rounded flex items-center gap-2"
                >
                  Create Note <MoveRight strokeWidth={1} size={16} />
                </Link>
              </>
            )}
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}

export default Navbar
