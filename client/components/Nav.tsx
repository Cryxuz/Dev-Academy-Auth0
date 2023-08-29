import { IfAuthenticated, IfNotAuthenticated } from './Authenticated.tsx'
import { NavGroup, NavButton } from './Styled.tsx'
import { useAuth0 } from '@auth0/auth0-react'

//

function Nav() {
  // TODO: call the useAuth0 hook and destructure user, logout, and loginWithRedirect
  const { user, logout, loginWithRedirect } = useAuth0()
  // TODO: replace placeholder user object with the one from auth0

  const handleSignOut = () => {
    logout()
  }

  const handleSignIn = () => {
    loginWithRedirect()
  }

  return (
    <>
      <NavGroup>
        <IfAuthenticated>
          <NavButton onClick={handleSignOut}>Sign out</NavButton>
          {user && <p>Signed in as: {user?.nickname}</p>}
          {/* Notice how user?.nickname has a question mark in front of it. This is called the optional chaining operator. 
            When we sign in, the user object may still be null while the user object is being fetched from Auth0. This optional chaining operator will 
            prevent the app from crashing if the user object is null (while the user is authenticated). */}
        </IfAuthenticated>
        <IfNotAuthenticated>
          <NavButton onClick={handleSignIn}>Sign in</NavButton>
        </IfNotAuthenticated>
      </NavGroup>
      <h1>Fruit FTW!</h1>
      {console.log(user?.nickname)}
      {console.log(user)}
    </>
  )
}

export default Nav
