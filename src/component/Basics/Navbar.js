import React from 'react'

const Navbar = ({filterItem, menuList}) => {
  return (
    <>
       <nav className='navbar'>
                <div className='btn-group'>
                {
                    menuList.map((obj)=>{
                        return(<>
                            <button className='btn-group__item' 
                            onClick={() => filterItem(obj)}>{obj}</button>
                        </>)
                        
                    })
                }
                    
                </div>

            </nav>
    </>
  )
}

export default Navbar
