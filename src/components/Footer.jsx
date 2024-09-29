export default function footer(props) {
    const {showModel, handleToggleModel, data} = props
    return (
        <footer>
            <div className="bckGradient"></div>
            <div>
                <h1>APOD PROJECT</h1>
                <h2>{data?.title}</h2>

            </div>
            <button onClick={handleToggleModel}>

                <i className="fa-solid fa-circle-info"></i>
                </button>

        </footer>
    
)
}