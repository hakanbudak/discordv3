import InviteSectionHero from "@/assets/InviteSectionHero";

const InviteSection = () => (
    <section className="bg-white w-full">
        <div className="flex flex-col md:flex-row items-center gap-8 container max-w-[1200px] mx-auto py-24 px-0">

            <div className="w-full md:w-[50%]">
                <InviteSectionHero />
            </div>

            <div className="w-full px-5 lg:px-0 md:w-[50%]">
                <div className="md:w-[95%] xl:w-[65%] mx-auto">
                    <h1 className="font-bold text-[22px] sm:text-[28px] md:text-[48px] mt-5 md:mt-0 leading-[24px] md:leading-[57.6px]">
                        Create an invite-only place where you belong
                    </h1>
                    <p className="sm:text-[20px] text-[18px] font-normal mt-[24px] leading-8">
                        Discord servers are organized into topic-based channels where you can collaborate, share, and just talk about your day without clogging up a group chat.
                    </p>
                </div>
            </div>
        </div>
    </section>
);

export default InviteSection;
