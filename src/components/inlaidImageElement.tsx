import { PropsWithChildren } from "react";
import { ReactNode } from "react";

type InlaidImageProps = {
    imageRef: string;
    reverse: boolean;
} & { children?: ReactNode };

const InlaidImage: React.FC<InlaidImageProps> = ({imageRef, reverse, children}) => {
    return <>
        <div className={`relative min-h-[70vh] flex flex-col md:flex-row items-center justify-center p-4 w-full ${reverse ? 'md:flex-row-reverse': ''} overflow-x-hidden` }>
            
            <div className={`${reverse ? '-mr-[20%]': '-ml-[20%]'} md:top-[25%] h-[80%] md:h-[80%] md:w-[45%] aspect-[17/13]`}>
                <img src={imageRef} className={`w-full h-full ${reverse ? 'rounded-l-4xl': 'rounded-r-4xl'}`} />
            </div>
            <div className="w-[5%]">

            </div>
            <div className="text-center md:text-left y-10 md:px-15 pt-15 md:top-[50%] w-[100%] md:w-[50%]">
                {children}
            </div>
        </div>
    </>
}

export default InlaidImage