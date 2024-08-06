import Logo from "../assets/Logo";
import SidebarButton from "./SidebarButton";

const Sidebar = () => {
  return (
    <aside className="flex flex-col gap-3 h-screen w-[250px] text-pretty px-3 py-4 overflow-auto">
      <Logo className="w-4" />
      <h5>Fuel Design System</h5>
      <ul className="space-y-1 font-normal text-sm">
        <SidebarButton />
      </ul>
    </aside>
  );
};

export default Sidebar;
