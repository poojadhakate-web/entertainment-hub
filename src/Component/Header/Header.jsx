import './Header.css'

const Header = () => {
  return (
    <>
        {/* <div className="header">
            <h1>Entertainment App</h1>
        </div> */}

        <span className="header" onClick={() => window.scroll(0,0)}>
        🎬 Entertainment App 🎥
        </span>
    </>
  )
}

export default Header;