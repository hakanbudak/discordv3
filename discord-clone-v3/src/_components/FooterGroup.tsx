import DiscordWhiteIcon from "@/assets/DiscordWhiteIcon";
import { faFacebook, faInstagram, faTwitter, faYoutube } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FooterLinkSection from "@/_components/FooterLinkSection";

const FooterGroup = () => {
    return (
        <footer className="bg-[#23272a] w-full">
            <div className="mx-auto max-w-[1200px] container pt-24 pb-10 flex flex-col gap-10">
                <div className="flex flex-col gap-[80px] md:flex-row xl:gap-[100px] px-5">

                    <div className="w-full md:w-[40%] lg:w-[20%]">
                        <div className="flex flex-col gap-[24px] w-full">
                            <h1 className="text-[#5865f2] font-bold text-[32px] leading-[30.4px]">IMAGINE A<br />PLACE</h1>
                            <div className="flex flex-row gap-7 text-white text-[23px]">
                                <FontAwesomeIcon icon={faInstagram} />
                                <FontAwesomeIcon icon={faFacebook} />
                                <FontAwesomeIcon icon={faYoutube} />
                                <FontAwesomeIcon icon={faTwitter} />
                            </div>
                        </div>
                    </div>
                    <FooterLinkSection />
                </div>


                <div className="border border-[#5865f2] mx-5"></div>

                <div className="flex flex-row justify-between items-center pt-7 mx-5">
                    <DiscordWhiteIcon />
                    <button className="text-white text-[14px] font-medium bg-[#5865f2] px-[16px] py-[7px] rounded-full transition duration-200 hover:bg-[#949ceb]">
                        Sign Up
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default FooterGroup;