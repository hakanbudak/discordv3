
const DownloadButtonGroup = () => {
    return (
        <div className="flex flex-col self-start lg:flex-row lg:self-center gap-8 z-20 mt-4">
            <button className="text-lg cursor-pointer text-black bg-white p-3 px-7 rounded-full transition duration-200 hover:text-[#404EED] hover:shadow-lg hidden lg:block">
                Download for Windows
            </button>
            <button className="text-lg bg-[#23272a] text-white p-3 px-7 rounded-full cursor-pointer transition duration-200 hover:bg-[#2e373f] hover:shadow-xl hidden lg:block">
                Open Discord in your browser
            </button>
            <button className="text-lg cursor-pointer text-black bg-white p-3 px-5 rounded-full transition duration-200 hover:text-[#404EED] hover:shadow-lg block lg:hidden">
                Download for Android or iOS
            </button>
        </div>
    );
};

export default DownloadButtonGroup;