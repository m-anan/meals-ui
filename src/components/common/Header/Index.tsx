import { HTMLAttributes } from "react";
import Container from "../Container";
import { Cross } from "react-flaticons";

export interface HeaderProps extends HTMLAttributes<HTMLDivElement> { }
const Dote = ({ active = false }: { active?: boolean }) => {
  return <span className={`w-[10px] h-[10px] rounded-full border border-text-blue ${active ? 'bg-text-blue' : ''}`}></span>
}
const Header: React.FC<HeaderProps> = ({ ...props }) => {
  return (
    <Container className="bg-white py-3" {...props}>
      <div className="flex justify-between">
        <div className="font-bold flex gap-3 items-center"><span className="bg-[#f3f3f3] p-2 rounded-full"><Cross size={13} /></span> <span>Select your meal</span></div>
        <button className="border border-border-primary shadow w-44 py-3 rounded-full text-text-blue font-semibold text-sm"><span className="flex items-center justify-center gap-3">Step 1/3 <Dote active /> <Dote /> <Dote /></span> </button>
      </div>
    </Container>
  );
};
export default Header;
