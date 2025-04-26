import logo from "./logo.png"; // Since both files are in the same folder

const Logo = () => {
  return <img src={logo} alt="Logo" style={{ width: "150px", height: "auto" }} />;
};

export default Logo;