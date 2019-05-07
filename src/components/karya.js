import React, { Component } from 'react';
import { 
    CardText,Card,CardTitle,Footer,FooterSection,FooterLinkList
} from 'react-mdl';

class Karya extends Component{
    constructor(){
        super();
        this.state = {
            karya: []
        }
    }

    componentDidMount(){
        fetch('https://4pilarsinergi.co.id/api-portfolio/public/karya/')
        .then(response => response.json())
        .then((data)=>{
            this.setState({karya: data});
        })
    }

    render(){
        return(
            <div>
            <br></br>
            <CardTitle style={{color: '#000000', backgroundColor: '#9ACD32', width: '70%', margin: 'auto', marginBottom: '1%'}}>My Achievement</CardTitle>
            {
            this.state.karya.map((dinamis, key) =>
            <Card shadow={0} style={{width: '70%', backgroundColor: '#DCDCDC', margin: 'auto', 
            marginBottom: '2%'}}>
            <CardText>
                <div>
                    <strong><h5>Nama Karya: {dinamis.namakarya}</h5></strong>
                    <strong><td><li>Pengguna: {dinamis.pengguna}</li></td></strong><br></br><br></br>
                    <strong><td><li>Tahun Pembuatan: {dinamis.tahunpembuatan}</li></td></strong><br></br><br></br>
                    <strong><td><li>Keterangan: {dinamis.keterangan}</li></td></strong>
                    <hr></hr>
                </div>
            </CardText>
            </Card>
            )}
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

export default Karya;