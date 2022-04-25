import './topbar.scss'


export default function Topbar({ title, setTitle, titles }) {
    if (title < 2) {
        return (
            <div className='topbar'>
                <div className="wrapper">
                    <div className="left">
                        <a href="#home" className='logo' onClick={() => setTitle(title + 1)}>
                            {titles[title]}
                        </a>
                    </div>
                    <div className="right">
                        <a href="#about">About</a>
                        <a href="#works">Works</a>

                        <a href="#contact">Contact</a>

                    </div>

                </div>
            </div>

        )
    }
    else {
        return (
            <div className='topbar'>
                <div className="wrapper">
                    <div className="left">
                        <a href="#home" className='logo' onClick={() => setTitle(0)}>
                            {titles[title]}
                        </a>
                    </div>
                    <div className="right">
                        <a href="#about">About</a>
                        <a href="#works">Works</a>

                        <a href="#contact">Contact</a>

                    </div>

                </div>
            </div>

        )
    }
}
