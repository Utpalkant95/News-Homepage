function Homecontent(props){
    return(
        <div className="container mt-14 flex flex-row">
            <div className="content_img">
                <img src={props.img} height="250px" width="80px" className={props?.className}></img>
            </div>
            <div className="content_data ml-5">
                <h4 className="text-2xl font-bold text-gray-300">{props.num}</h4>
                <h5 className="font-bold hover:text-red-500 cursor-pointer">{props.heading}</h5>
                <p className="text-gray-400">{props.para}</p>
            </div>
        </div>
    ); 
}

export default Homecontent