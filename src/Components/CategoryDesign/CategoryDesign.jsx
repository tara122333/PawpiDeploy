import { Link } from "react-router-dom";

const CategoryDesign=(props)=>{
    return (
        <>
            {/*Large Screen*/}
            <Link to={`/${props.id}`} className="flex flex-col items-center mx-2 h-52 rounded-3xl w-full gap-2 cursor-pointer">
                <div className="h-52 w-44 flex items-center justify-around rounded-3xl " style={{backgroundColor:props.bcolor}} >
                    <div className="h-40 rounded-3xl w-44">
                        <div className="flex flex-row h-full w-full justify-center pl-4 scale-90 transition ease-in-out delay-75 duration-200 hover:scale-110">
                            <img classname="w-full h-full"  src={props.image} alt="Category Images" />
                        </div>
                    </div>
                </div>
                <div className="h-1/5 text-2xl flex items-center font-caveatB">
                    {props.name}
                </div>
            </Link>
            
            {/*Medium screen*/}
            <div className="hidden md:flex lg:hidden flex-col h-72 w-3/12 items-center justify-around my-4">
                <div className="h-full w-full flex flex-col bg-yellow-500 rounded-full">
                    <img className="w-full h-full" src={props.src} alt="CategoryImage"/>
                </div>
                <div className="text-2xl">
                    {props.name}
                </div>
            </div>
            {/*Small Screen*/}
            <div className="flex flex-col h-48 w-2/5 items-center justify-around md:hidden my-4 ">
                <div className="h-full w-full flex flex-col bg-yellow-500 rounded-full">
                    <img className="w-full h-full" src={props.src} alt="CategoryImage"/>
                </div>
                <div className="text-xl">
                    {props.name}
                </div>
            </div>
        </>
    );
};

export default CategoryDesign;