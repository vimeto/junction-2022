import { useRouter } from "next/router";
import { signOut, useSession } from "next-auth/react"
import { NavLink } from "./ui/Navigation/NavLink";
import { NavBase } from "./ui/Navigation/NavBase";
import { Home, Calendar, User } from 'react-iconly';

const Navigation: React.FC = () => {
  const router = useRouter()
  const isActive: (pathname: string) => (boolean | null | undefined) = (pathname: string) => router.pathname === pathname;
  const { data: session, status } = useSession()

  if (!session?.user) {
    return <></>;
  }

  return(
    <NavBase>
      <NavLink href='/calendar' isActive={isActive('/calendar')}><Calendar/></NavLink>
      <NavLink href='/' isActive={isActive('/')}><Home/></NavLink>
      <NavLink href='/profile' isActive={isActive('/profile')}><User/></NavLink>
    </NavBase>
  )
}


export default Navigation
