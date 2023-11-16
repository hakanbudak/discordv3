import TechnicalSectionPinkHero from "@/assets/TechnicalSectionPinkHero";
import Star from "@/assets/StarIcon";

const TechnicalSection = () => {
    return (
        <section className="bg-[#f6f6f6] w-full">
            <div className="mx-auto flex flex-col max-w-[1200px] items-center container py-14 md:py-32 px-5">
                <h1 className="w-full font-bold text-[22px] md:text-[40px] leading-[29px] md:leading-[32px] text-left lg:text-center">
                    RELIABLE TECH FOR STAYING CLOSE
                </h1>
                <p className="w-full lg:w-[88%] text-[16px] md:text-[20px] leading-[26px] md:leading-[32.5px] mt-[24px] text-left lg:text-center">
                    Low-latency voice and video feels like you're in the same room. Wave hello over video, watch friends stream their games, or gather up and have a drawing session with screen share.
                </p>

                <div>
                  <TechnicalSectionPinkHero />
                </div>

                <div className="w-full relative flex flex-col items-center">
                    <Star/>
                    <h2 className="text-center pt-[30px] leading-[38px] text-[32px] font-semibold">
                        Ready to start your journey?
                    </h2>
                </div>

                <div className="flex flex-col">
                    <button className="bg-[#404EED] text-white px-[32px] py-[16px] rounded-full text-lg font-medium mt-8 hidden lg:block hover:shadow-lg transition duration-300">
                        <i className="fa-solid fa-download mr-4"></i>Download for Windows
                    </button>
                    <button className="bg-[#404EED] text-white px-[32px] py-[16px] rounded-full text-lg font-medium mt-8 block lg:hidden">
                        <i className="fa-solid fa-download mr-4"></i>Download for Android or iOS
                    </button>
                </div>
            </div>
        </section>
    );
};

export default TechnicalSection;