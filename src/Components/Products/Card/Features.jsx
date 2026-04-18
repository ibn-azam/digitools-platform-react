import { Check } from "lucide-react";


const Features = ({feature}) => {
    
    return (
        <div className="my-2">
            <ol>
                <li className="flex items-center gap-1"><Check size={20} color="#30b868" ></Check><span className="text-[#627382] text-[16px]">{feature}</span></li>
            </ol>
        </div>
    );
};

export default Features;