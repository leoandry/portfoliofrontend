import React, { Component } from 'react';
import { 
    CardText,CardMenu,Card,CardTitle,Grid,Cell,Footer,FooterSection,FooterLinkList 
} from 'react-mdl';
import './css/beranda.css';
import user from '../images/user.jpg';
import foto1 from '../images/1.png';
import foto2 from '../images/2.png';
import foto3 from '../images/3.png';
import foto4 from '../images/4.png';
import foto5 from '../images/5.png';
import foto6 from '../images/6.png';

class Beranda extends Component{
    constructor(props){
        super(props);
        this.state = {
            pribadi: [],
            pendidikan: [],
            sosialMedia: []    
        }
    }

    componentDidMount(){
        fetch('https://4pilarsinergi.co.id/api-portfolio/public/pribadi/')
        .then(response => response.json())
        .then((data)=>{
            this.setState({pribadi: data});
        })

        fetch('https://4pilarsinergi.co.id/api-portfolio/public/pendidikan/')
        .then(response => response.json())
        .then((data)=>{
            this.setState({pendidikan: data});
        })

        fetch('https://4pilarsinergi.co.id/api-portfolio/public/sosmed/')
        .then(response => response.json())
        .then((data)=>{
            this.setState({sosialMedia: data});
        })
    }

    render(){
        return(
            <div><br></br>
                <center>
                    <img src={user} alt="foto user" className="rounded-circle img-thumbnail" style={{margin: 'auto', marginBottom: '1%', width: '18%'}}/>
                    <CardTitle style={{color: '#000000',width: '48%', height: '35px', margin: 'auto', backgroundColor: '#9ACD32'}}>
                    <center>
                    Project Manager &nbsp;|&nbsp;
                    System Analyst &nbsp;|&nbsp;
                        Web Designer &nbsp;|&nbsp; 
                        Database Administrator &nbsp;|&nbsp; 
                        Web Developer
                    </center>
                    </CardTitle>
                </center>
                <br></br>
                <Card shadow={0} style={{width: '70%', margin: 'auto', backgroundColor: '#DCDCDC', 
                marginBottom: '2%'}}>
                <CardTitle style={{color: '#fff', height: '60px', backgroundColor: '#494949'}}>
                Personal</CardTitle>
                    <CardText>
                    {
                        this.state.pribadi.map((dinamis, key) =>
                        <div>
                            <strong><h4>Nama: {dinamis.namalengkap}</h4></strong>
                            <hr></hr>
                            <strong><td><li>Jenis Kelamin: {dinamis.jeniskelamin}</li></td></strong><br></br><br></br>
                            <strong><td><li>Agama: {dinamis.agama}</li></td></strong><br></br><br></br>
                            <strong><td><li>Status: {dinamis.status}</li></td></strong><br></br><br></br>
                            <strong><td><li>Alamat: {dinamis.alamat}</li></td></strong><br></br><br></br>
                            <strong><td><li>Tgl Lahir: {dinamis.tgllahir}</li></td></strong><br></br><br></br>
                            <strong><td><li>Nomor HP: {dinamis.hp}</li></td></strong>   
                        </div>
                        )
                    }
                    </CardText>
                    <CardMenu style={{color: '#fff'}}>
                    </CardMenu>
                </Card>
                <div style={{width: '70%', margin: 'auto'}}>
                <CardTitle style={{color: '#000000', height: '60px', backgroundColor: '#9ACD32'}}>
                Gallery from hobby</CardTitle>
                <center>
                    <Grid style={{width: '100%', margin: 'auto'}}>
                        <Cell col={4}><img src={foto1} alt="foto user" style={{margin: 'auto', width: '90%'}}/></Cell>
                        <Cell col={4}><img src={foto2} alt="foto user" style={{margin: 'auto', width: '90%'}}/></Cell>
                        <Cell col={4}><img src={foto3} alt="foto user" style={{margin: 'auto', width: '90%'}}/></Cell>
                        <Cell col={4}><img src={foto4} alt="foto user" style={{margin: 'auto', width: '90%'}}/></Cell>
                        <Cell col={4}><img src={foto5} alt="foto user" style={{margin: 'auto', width: '90%'}}/></Cell>
                        <Cell col={4}><img src={foto6} alt="foto user" style={{margin: 'auto', width: '90%'}}/></Cell>
                    </Grid>
                </center>
                </div>
                <div style={{width: '70%', margin: 'auto'}}>
                    <Grid className="demo-grid-3">
                        <Cell col={6} tablet={8}>
                        <CardTitle style={{color: '#fff', backgroundColor: '#494949'}}>Education</CardTitle>
                        {
                        this.state.pendidikan.map((dinamis, key) =>
                        <Card shadow={0} style={{width: '100%', backgroundColor: '#DCDCDC', 
                        marginBottom: '2%'}}>
                        <CardText>
                            <div>
                                <strong><h5>{dinamis.namasekolah}</h5></strong>
                                <hr></hr>
                                <strong><td><li>Tingkat : {dinamis.level}</li></td></strong><br></br><br></br>
                                <strong><td><li>Jurusan : {dinamis.jurusan}</li></td></strong><br></br><br></br>
                                <strong><td><li>Tahun Lulus : {dinamis.tahunlulus}</li></td></strong><br></br><br></br>
                                <strong><td><li>Kota : {dinamis.kota}</li></td></strong>
                                <hr></hr>
                            </div>
                        </CardText>
                        </Card>
                        )}
                        </Cell>
                        <Cell col={6} tablet={8}>
                        <CardTitle style={{color: '#fff', backgroundColor: '#494949'}}>Social Media</CardTitle>
                        {
                        this.state.sosialMedia.map((dinamis, key) =>
                        <Card shadow={0} style={{width: '100%', backgroundColor: '#DCDCDC', 
                        marginBottom: '2%'}}>
                        <CardText>
                            <div>
                                <strong><td><li>Email : {dinamis.email}</li></td></strong><br></br><br></br>
                                <strong><td><li>Linkedin : {dinamis.linkedin}</li></td></strong><br></br><br></br>
                                <strong><td><li>Facebook : {dinamis.facebook}</li></td></strong><br></br><br></br>
                                <strong><td><li>Instagram : {dinamis.instagram}</li></td></strong>
                                <hr></hr>
                            </div>
                        </CardText>
                        </Card>
                        )}
                        </Cell>
                    </Grid>
                </div>
                <Footer size="mini">
                    <FooterSection type="left" logo="&copy; Portfolio 2019">
                        <FooterLinkList>
                        </FooterLinkList>
                    </FooterSection>
                </Footer>
            </div>
        )
    }
}

export default Beranda;