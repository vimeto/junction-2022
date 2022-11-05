import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react"
import { NavLink } from "./ui/Navigation/NavLink";
import { NavBase } from "./ui/Navigation/NavBase";
import { Home, Calendar, User } from 'react-iconly';





const Header: React.FC = () => {
  const router = useRouter()
  const isActive: (pathname: string) => (boolean | null | undefined) = (pathname: string) => router.pathname === pathname;
  const { data: session, status } = useSession()

  if (!session) {
    return <></>;
  }

  return(
    <NavBase>
      <NavLink href='/' isActive={isActive('/')}><Home/></NavLink>
      <NavLink href='/' isActive={isActive('/navigation')}><Calendar/></NavLink>
      <NavLink href='/' isActive={isActive('/')}><User/></NavLink>
    </NavBase>
  )
}


export default Header