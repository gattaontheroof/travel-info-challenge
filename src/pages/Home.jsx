import LocationSearch from "../components/Homepage/LocationSearch";

function Home() {

    return (
        <>
            <div className="App">
                    
                <div className="container" id="location-name-container">
                    <div className="background-image">
                        <div className="container" id="tell-me-about-box">
                
                            <div className="container" id="tell-me-about-text-box">
                                <h3 className="text-center">Tell me about</h3> 
                            </div>  

                            <LocationSearch />

                        </div>
                    </div>
                </div>
            
            </div>
        </>
    );
}

export default Home;