import ChannelSectionImage from "@/assets/ChannelSectionImage";

const ChannelsSection = () => {
    return (
        <section className="w-full">
            <div className="flex flex-col md:flex-row items-center gap-8 container max-w-[1200px] mx-auto py-24 px-0">
                <div className="w-full md:w-[50%]">
                    <ChannelSectionImage />
                </div>

                <div className="w-full md:w-[50%]">
                    <div className="w-[95%] xl:w-[65%] px-5 lg:px-0">
                        <h1 className="font-bold sm:text-[28px] text-[22px] md:text-[48px] mt-5 md:mt-0 leading-[24px] md:leading-[57.6px]">
                            From few to a fandom
                        </h1>
                        <p className="sm:text-[20px] text-[18px] font-normal mt-[24px] leading-8">
                            Get any community running with moderation tools and custom member access. Give members special powers, set up private channels, and more.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChannelsSection;