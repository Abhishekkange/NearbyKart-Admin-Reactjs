
function Signup(){
    return <>
       <nav className="bg-gray-800 p-4 flex justify-between items-center">
      {/* Left side of the Navbar */}
      <div className="text-white font-popins text-xl">
        Create Digital Store
      </div>

      {/* Right side of the Navbar */}
      <div className="text-white">
        <a href="/login" className="hover:underline">
          Login
        </a>
      </div>
    </nav>
    </>
}

export default Signup;