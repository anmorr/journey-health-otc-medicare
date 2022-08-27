import classes from './MainNavigation.module.css';
import Link from  'next/link'
import { useRouter } from 'next/router';
import Image from 'next/image'

const MainNavigation = () => {

  const router = useRouter()

  console.log(router.pathname)



  return (
    <header className={classes.header}>
      <Link href='/'>
        <div className={classes.logo}>
          <Image src="https://journey-health-images.s3.us-west-1.amazonaws.com/journey_health_image.webp" alt="me" width="150" height="50" />
        </div>
      </Link>
      <nav>
        <ul>
        {<li>
            <Link href="/">Home</Link>
          </li>}
          {<li>
            <Link href="/otc-tests">Get Started</Link>
          </li>}
        {/*
          {isLoggedIn && <li>
            <Link to="/">Home</Link>
          </li>}
          {isLoggedIn && <li>
            <Link to="/add">New</Link>
          </li>}
          {isLoggedIn && <li>
            <Link to="/leaderboard">Leaderboard</Link>
          </li>}
          
          {(isLoggedIn && currentUserObject) && (
            <li style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            
          }}>
              <Link to='/profile'>{
                <Avatar src={currentUserObject.avatarURL} alt={currentUserObject.name} />
              }</Link>
              {/* {
                <Avatar src={currentUserObject.avatarURL} alt={currentUserObject.name} />
              } */} 
              {/* <span style={{
                paddingLeft: '1em',
                color: '#1465C0',
              }}>{currentUserObject.id}</span>
          </li>
          )}
          
          {isLoggedIn && (
            <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
          )}*/}
          {/* {(!isLoggedIn) && (router.pathname !== '/authentication/AuthPage') &&(
          <li>
            <Link href='/authentication/AuthPage'>Login</Link>
          </li>
          )} */}
          {/* {isLoggedIn && (
            <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>
          )} */}
        </ul> 
      </nav>
    </header>
  );
};

export default MainNavigation;
