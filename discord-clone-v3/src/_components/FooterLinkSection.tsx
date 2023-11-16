const FooterLinkSection = () => (
    <div className="md:w-[75%] flex justify-around flex-wrap lg:flex-nowrap">
        <div className="w-[50%] xl:w-full">
            <h2 className="text-[#5865f2] text-[16px] py-[15px]">Product</h2>
            <ul className="text-white flex flex-col gap-[10px] leading-[24px]">
                <li className="hover:underline cursor-pointer">Download</li>
                <li className="hover:underline cursor-pointer">Nitro</li>
                <li className="hover:underline cursor-pointer">Status</li>
            </ul>
        </div>

        <div className="w-[50%] xl:w-full">
            <h2 className="text-[#5865f2] text-[16px] py-[15px]">Company</h2>
            <ul className="text-white flex flex-col gap-[10px] leading-[24px]">
                <li className="hover:underline cursor-pointer">About</li>
                <li className="hover:underline cursor-pointer">Jobs</li>
                <li className="hover:underline cursor-pointer">Branding</li>
                <li className="hover:underline cursor-pointer">Newsroom</li>
            </ul>
        </div>

        <div className="w-[50%] xl:w-full">
            <h2 className="text-[#5865f2] text-[16px] py-[15px]">Resources</h2>
            <ul className="text-white flex flex-col gap-[10px] leading-[24px]">
                <li className="hover:underline cursor-pointer">Colleges</li>
                <li className="hover:underline cursor-pointer">Support</li>
                <li className="hover:underline cursor-pointer">Safety</li>
                <li className="hover:underline cursor-pointer">Blog</li>
                <li className="hover:underline cursor-pointer">Feedback</li>
                <li className="hover:underline cursor-pointer">Developers</li>
                <li className="hover:underline cursor-pointer">StreamKit</li>
                <li className="hover:underline cursor-pointer">Creators</li>
            </ul>
        </div>

        <div className="w-[50%] xl:w-full">
            <h2 className="text-[#5865f2] text-[16px] py-[15px]">Policies</h2>
            <ul className="text-white flex flex-col gap-[10px] leading-[24px]">
                <li className="hover:underline cursor-pointer">Terms</li>
                <li className="hover:underline cursor-pointer">Privacy</li>
                <li className="hover:underline cursor-pointer">Cookie Settings</li>
                <li className="hover:underline cursor-pointer">Guidelines</li>
                <li className="hover:underline cursor-pointer">Acknowledgements</li>
                <li className="hover:underline cursor-pointer">Licenses</li>
                <li className="hover:underline cursor-pointer">Moderation</li>
            </ul>
        </div>
    </div>
);

export default FooterLinkSection;
