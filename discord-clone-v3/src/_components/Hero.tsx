import BackgroundImage from "@/assets/BackgroundImage";
import YellowHeadHero from "@/assets/YellowHeadHero";
import YellowHeadHero2 from "@/assets/YellowHeadHero2";
import DownloadButtonGroup from "@/_components/DownloadButtonGroup";

export default function Hero() {
    return (
        <section className="bg-[#404EED] w-full relative -mt-1 overflow-x-hidden">
            <div className="hidden md:block absolute bottom-0 top-auto scale-x-125 z-10 bg-cover bg-center bg-no-repeat">
                <BackgroundImage />
            </div>
            <div className="absolute z-20 block -left-[10%] md:hidden lg:block lg:-left-[16%] bottom-0" >
                <YellowHeadHero />
            </div>
           <div className="hidden md:block absolute z-20 -right-[15%] bottom-0">
               <YellowHeadHero2 />
           </div>
            <div className="max-w-[1200px] container mx-auto flex flex-col items-start lg:justify-center lg:items-center px-7 gap-5 pt-[50px] lg:pt-0 min-h-[640px] lg:min-h-[544px]">
                <h1 className="text-[24px] sm:text-[28px] md:text-[54px] text-left lg:text-center font-bold text-white z-20 md:w-[60%] w-full leading-[32px] sm:leading-normal lg:leading-normal">
                    IMAGINE A PLACE...
                </h1>
                <p className="text-sm lg:text-lg leading-[26px] lg:leading-[32px] w-[90%] md:w-[65%] text-left lg:text-center text-white font-normal z-20">
                    ...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.
                </p>
                <DownloadButtonGroup />
            </div>
        </section>
    );
}
