import './works.scss';

export default function Works({ diorama, setDiorama }) {
    return (
        <div className='works' id='works'>
            <div className="wrapper">
                <div className="github">
                    <div className="github-header-container">
                        <div className='github-image'>
                            <img src={require('../../assets/GitHub-Mark-64px.png')} alt="github" />
                        </div>
                        <div className='github-text'>
                            <img src={require('../../assets/GitHub_Logo.png')} alt="github" width={'150px'} height={"auto"} />
                        </div>
                    </div>
                    <div className='github-links'>
                        <a href="https://github.com/triwira-joel/simple-search-engine.git" target="_blank" rel="noopener noreferrer">Simple Search Engine</a>
                        <p>A simple search engine implementing cosine similarity, documents are arranged based on highest similarity. <br /></p>
                        <a href="https://github.com/triwira-joel/ExpertSystem.git" target="_blank" rel="noopener noreferrer">Expert System</a>
                        <p>An application to detect breast cancer based on questions, implementing Knowledge-Based System.<br /></p>
                    </div>
                </div>
                <div className='Other'>
                    <div className='other-header'>
                        <h3>Others</h3>
                    </div>
                    <div className='other-links'>
                        <a href='#diorama' onClick={() => setDiorama(true)}>Diorama</a>
                        <p>An online photo-sharing application and social network platform designed for travelling purposes.</p>
                    </div>

                </div>
            </div>
            <div className='more'>
                <p>And Joel will keep adding more works!</p>
            </div>
        </div>
    )
}
