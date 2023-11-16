import DiscordWhiteIcon from "@/assets/DiscordWhiteIcon";
import NavigationLinks from "@/_components/NavigationLinks";

export default function Header() {
    return (
            <nav className="bg-[#404EED] ">
                <div className="max-w-[1200px] mx-auto flex flex-row justify-between items-center h-[72px] xl:px-0 px-7">
                    <DiscordWhiteIcon />

                    <div>
                      <NavigationLinks />
                    </div>

                    <div className="flex items-center">
                        <button
                            className="bg-white px-4 rounded-full py-2 text-[#2c2f33] text-sm font-medium transition-all duration-300 hidden md:block hover:shadow-lg">
                            Open Discord
                        </button>

                        <button
                            className="bg-white px-4 rounded-full py-2 text-[#2c2f33] text-sm font-medium transition-all duration-300 block md:hidden hover:shadow-lg">
                            Login
                        </button>
                    </div>
                </div>
            </nav>
    );
}