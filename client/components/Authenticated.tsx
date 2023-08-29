// TODO: import useAuth0 function
import { useAuth0 } from '@auth0/auth0-react'

//
interface Props {
  children: React.ReactNode
}

const useIsAuthenticated = () => {
  // TODO: call the useAuth0 hook, destructure and return isAuthenticated
  const { isAuthenticated } = useAuth0()
  return isAuthenticated
}

export function IfAuthenticated(props: Props) {
  const { children } = props
  return useIsAuthenticated() ? <>{children}</> : null
} //the children variable is linked to NavGroup in Nav.tsx, if it it true it will return the the children,

export function IfNotAuthenticated(props: Props) {
  const { children } = props
  return !useIsAuthenticated() ? <>{children}</> : null
}
