import Link from 'next/link';
import '../../styles/Navbar.css';

export default function NavBar(){
  return(
    <>
    <ul className='navbar'>
      <li>
        <Link href='/' className='style-navbar'>Home
      </Link>
      </li>
      <li>
        <Link href="/posts" className='style-navbar'> Lista de Posts</Link>
        </li>
      <li>
        <Link href='https://jsonplaceholder.typicode.com/' target='_blank'  className='style-navbar'>API</Link>
      </li>
    </ul>
    </>
  )
}