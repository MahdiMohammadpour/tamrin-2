const Acheivment = ({title,text,image}) => {
    return ( 
        <div className="flex justify-content-center">
            <div>
                <img src={image} className="w-[89px] min-w-[89px]"/>
            </div>
            <div className="mr-2">
                <h2 className="font-bold text-[16px]  text-gray-600">{title}</h2>
                <p className="w-60 mt-[2%] text-[14px] text-gray-500 ">{text}</p>
            </div>
        </div>
     );
}
 
export default Acheivment;