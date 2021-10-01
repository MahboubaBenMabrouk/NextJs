import Link from 'next/link'


export default function Menu({ menu }) {
        console.log('menu',menu)
    return (
       <>
        <div className="main-menu d-none d-md-block">
        <nav>
        {menu?.length?
        <ul id="navigation">
             {menu.map((item) =>(
                     <li>
                               <Link key={item?.node.id} href={item?.node?.path}>
                                        <a
                                                className="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4"
                                                data-cy="nav-item"
                                        >
                                                {item?.node?.label}
                                        </a>
				</Link>

                              
                            </li>
              ) )}
           
        </ul>
:null}
        </nav>
        </div>

       
        </>
    )}