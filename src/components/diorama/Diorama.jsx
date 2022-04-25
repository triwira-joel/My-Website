import './diorama.scss';
import { Close } from "@mui/icons-material";

export default function Diorama({ diorama, setDiorama }) {
    return (
        <div className={'diorama ' + (diorama && 'active')}>
            <div className="close" onClick={() => setDiorama(false) > diorama}>
                <Close />
            </div>
            <div className="wrapper">
                <div className='diorama-text'>
                    <h1>Diorama</h1>
                </div>
                <div className='diorama-content'>
                    <div className='diorama-content-image'>
                        <img src={require('../../assets/diorama/Home.png')} alt="diorama" width={"450px"} height={"auto"} />
                        <img src={require('../../assets/diorama/MyProfile.png')} alt="diorama" width={"450px"} height={"auto"} />
                        <img src={require('../../assets/diorama/OtherProfileFollower.png')} alt="diorama" width={"450px"} height={"auto"} />
                        <img src={require('../../assets/diorama/AddTrip.png')} alt="diorama" width={"450px"} height={"auto"} />
                        <img src={require('../../assets/diorama/AddEvent.png')} alt="diorama" width={"450px"} height={"auto"} />
                        <img src={require('../../assets/diorama/DetailTrip.png')} alt="diorama" width={"450px"} height={"auto"} />
                        <img src={require('../../assets/diorama/DetailEvent.png')} alt="diorama" width={"450px"} height={"auto"} />
                        <img src={require('../../assets/diorama/Following.png')} alt="diorama" width={"450px"} height={"auto"} />
                        <img src={require('../../assets/diorama/Followers.png')} alt="diorama" width={"450px"} height={"auto"} />
                    </div>
                    <div className='diorama-content-text'>
                        <p>
                            Diorama merupakan media sosial untuk pengguna untuk berbagi foto-foto terkait tempat-tempat wisata dan untuk melihat foto-foto orang lain.
                            Melalui software ini, pengguna akan dapat membagikan berbagai foto-foto tentang tempat wisata (events) yang dapat dikelompokkan dalam trips untuk ditunjukkan
                            pada timeline pengguna lainnya yang telah men-follow akun dari pengguna tersebut.
                            <br /><br />
                            Projek ini menggunakan flutter karena Diorama merupakan mobile application.
                            Untuk back-end, Diorama menggunakan PSQL dan docker sebagai container.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
