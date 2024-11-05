


function Navbar(){
    return (
        <div className="py-[4vh] px-[5.4vw] flex">
          <p className="text-[#F8F8F8]  w-full  leading-none text-sm ">
            <span className="secondary">devTinder </span>
            - for developer match
            <br />
            <span className="secondary">meet new people</span>
          </p>

          <ul className="flex gap-4 items-center">
            <li>
              <a className="text-white text-base" href="">
                Login
              </a>
            </li>
            <li className="flex-shrink-0">

              <a href=""><img className="w-8 h-8 object-cover rounded-full" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></a>

            </li>
            <li></li>
            <li></li>
          </ul>
        </div>
    )
}

export default Navbar;