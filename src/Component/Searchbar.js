
function Search(props){
    return(
        <>
        <div className="search-c">
            <div className="search-r">
                <div className="search">
                    <input type="search" placeholder="Search for Memes" onChange={(e) => props.search(e.target.value)} />
                    <button onClick={props.searData}>Search</button>
                </div>
            </div>
        </div>
        </>
    )
}
export default Search