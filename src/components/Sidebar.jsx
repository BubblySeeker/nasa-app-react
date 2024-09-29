export default function sidebar(props) {
    const {showModel, handleToggleModel, data} = props
    return(
        <div className="Sidebar">
            <div onClick={handleToggleModel} className="bgOverlay"> </div>
            <div className="sidebarContents"> 
            <h2>{data?.title}</h2> 
            <div className="descCon">
                <p className="desc"> {data?.date}</p>
                <p>{data?.explanation}</p>
            </div>
            <button onClick={handleToggleModel}><i className="fa-solid fa-arrow-right-long"></i></button>
            </div>
        </div>
        
    )
}