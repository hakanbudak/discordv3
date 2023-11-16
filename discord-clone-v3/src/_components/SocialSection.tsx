import SocialSectionImage from "@/assets/SocialSectionImage";

const SocialSection = () => {
    return (
        <section className="bg-[#f6f6f6] w-full">
            <div className="flex flex-col-reverse md:flex-row items-center gap-8 container max-w-[1200px] mx-auto py-24 px-0">
                <div className="w-full md:w-[50%]">
                    <div className="w-[95%] xl:w-[65%] px-5 lg:px-0">
                        <h1 className="font-bold sm:text-[28px] text-[22px] md:text-[48px] mt-5 md:mt-0 leading-[24px] md:leading-[57.6px]">
                            Where hanging out is easy
                        </h1>
                        <p className="sm:text-[20px] text-[18px] font-normal mt-[24px] leading-8">
                            Grab a seat in a voice channel when you're free. Friends in your server can see you're around and instantly pop in to talk without having to call.
                        </p>
                    </div>
                </div>

                <div className="w-full md:w-[50%]">
                    <SocialSectionImage />
                </div>
            </div>
        </section>
    );
};

export default SocialSection;