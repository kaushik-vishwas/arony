import logo from './assets/logo2.png'

export default function Preloader() {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-white">
      <img src={logo} alt="logo" className="w-45 h-24 animate-pulse" />
    </div>
  );
}
