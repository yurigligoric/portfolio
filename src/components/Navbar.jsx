import {Link} from 'react-router-dom'

export default function Navbar() {
    return  <nav className='bg-orange-400' >
                <div className='flex items-center justify-center'>
                    <Link className='font-bold flex text-3xl ml-2 px-4 py-2' to='/'>Ern Banawa</Link>
                </div>
                <div className='flex items-center justify-center'>
                    <ul className='flex items-center gap-4 px-4 py-2' >
                        <Link to='/'>Home</Link>
                        <li><Link to='/blog'>Blog</Link></li>
                        <li><Link to='/portfolio'>Portfolio</Link></li>
                        <li><Link to='/contact'>Contact</Link></li>
                    </ul>
                </div>    
            </nav>
}
