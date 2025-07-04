import facebookLogo from "../../assets/svg/social-media/facebook.svg";
import instagramLogo from "../../assets/svg/social-media/instagram.svg";
import twitterLogo from "../../assets/svg/social-media/twitter.svg";
import youtubeLogo from "../../assets/svg/social-media/youtube.svg";

export const Socials = () => {
    return (
        <div className="flex gap-4">
            <img
                src={facebookLogo}
                alt="Facebook logo"
                className="w-8 h-8 transition-transform duration-200 hover:scale-110"
            />
            <img
                src={instagramLogo}
                alt="Instagram logo"
                className="w-8 h-8 transition-transform duration-200 hover:scale-110"
            />
            <img
                src={twitterLogo}
                alt="Twitter log"
                className="w-8 h-8 transition-transform duration-200 hover:scale-110"
            />
            <img
                src={youtubeLogo}
                alt="Youtube logo"
                className="w-8 h-8 transition-transform duration-200 hover:scale-110"
            />
        </div>
    );
};
