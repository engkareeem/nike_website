import {footerLogo} from "../assets/images";
import {footerLinks, socialMedia} from "../constants";

const Footer = () => {
    return (
        <footer className="flex max-lg:flex-col max-lg:gap-14 justify-between max-container">
            <div>
                <img src={footerLogo} alt="Footer Logo"/>
                <p className="text-white max-w-sm mt-8">
                    Get shoes ready for the new term at your
                    nearest Nike store. Find Your perfect Size In
                    Store. Get Rewards
                </p>
                <div className="flex items-center gap-5 mt-8">
                    {socialMedia.map(social => (
                        <a key={social.alt} href="/" className="bg-white rounded-full px-2 py-2">
                            <img src={social.src} alt={social.alt}/>
                        </a>
                    ))}
                </div>
            </div>

                {footerLinks.map(link => (
                    <div className="flex flex-col gap-1">
                        <h3 className="text-xl text-white font-semibold font-palanquin mb-2">{link.title}</h3>
                        {link.links.map(l => (
                            <a href={l.link} className="font-montserrat text-sm text-gray-400 hover:text-gray-300">{l.name}</a>
                        ))}
                    </div>
                ))}

        </footer>
    );
};

export default Footer;