function Asideparas(props){
    return(
        <div className="ml-5 mr-5 mt-5">
            <h2 className="text-white font-bold cursor-pointer hover:text-orange-400">{props.heading}</h2>
            <p className="text-gray-100 mt-2">{props.para}</p>
            <hr className="mt-8 mb-8"></hr>
        </div>
    )
}

export default Asideparas