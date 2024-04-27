import { FaFacebook, FaYoutube } from "react-icons/fa6";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
const Footer = () => {
    return (
        <div className="p-5 lg:p-10 bg-gradient-to-l from-cyan-700 to-cyan-500 mt-10">
            <footer className="footer p-10  text-white">
                <aside>
                    <img className="h-12" src="https://i.ibb.co/rk5WtGm/travel-3-removebg-preview.png" alt="" />
                    <h1 className="text-3xl">Travel Trails</h1>
                    <p className="mt-2 text-base">Discover new horizons with <br /> our global travel guide</p>
                </aside>
                <nav>

                    <a className="link link-hover">Home</a>
                    <a className="link link-hover">About Us</a>
                    <a className="link link-hover">Contacts</a>
                </nav>
                <nav>

                    <a className="link link-hover">Countries
                    </a>
                    <a className="link link-hover">All Tourist Spots
                    </a>
                    <a className="link link-hover">Lists</a>

                </nav>
                <nav>
                    <h6 className="footer-title">Follow Us</h6>
                    <div className="grid grid-flow-col gap-4">

                        <FaFacebook className="w-7 h-7"></FaFacebook>

                        <FaInstagram className="w-7 h-7"></FaInstagram>
                        <FaLinkedin className="w-7 h-7"></FaLinkedin>
                        <FaYoutube className="w-7 h-7"></FaYoutube>
                    </div>
                </nav>
            </footer>
            <footer className="footer px-10 py-4 border-t border-gray-300 text-white">

                <nav className="md:place-self-center md:justify-self-center">
                    <p>©2024 Travel Trails. All right reserved</p>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;