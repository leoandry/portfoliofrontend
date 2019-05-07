import React, { Component } from 'react';
import { 
    CardText,Card,CardTitle,Footer,FooterSection,FooterLinkList 
} from 'react-mdl';

class Tentangsaya extends Component{
    constructor(){
        super();
        this.state = {
            pengalaman: []
        }
    }

    componentDidMount(){
        fetch('https://4pilarsinergi.co.id/api-portfolio/public/pengalaman/')
        .then(response => response.json())
        .then((data)=>{
            this.setState({pengalaman: data});
        })
    }

    render(){
        return(
            <div>
            <br></br>
            <CardTitle style={{color: '#000000', backgroundColor: '#9ACD32', width: '70%', margin: 'auto', marginBottom: '1%'}}>History of work</CardTitle>
            {
            this.state.pengalaman.map((dinamis, key) =>
            <Card shadow={0} style={{width: '70%', backgroundColor: '#DCDCDC', margin: 'auto', 
            marginBottom: '2%'}}>
            <CardText>
                <div>
                    <strong><h5>{dinamis.namaperusahaan}</h5></strong>
                    <hr></hr>
                    <strong><td><li>Jabatan : {dinamis.jabatan}</li></td></strong><br></br><br></br>
                    <strong><td><li>Lama Bekerja : {dinamis.lamabekerja}</li></td></strong><br></br><br></br>
                    <strong><td><li>Tahun Masuk : {dinamis.tahunmasuk}</li></td></strong><br></br><br></br>
                    <strong><td><li>Tahun Keluar : {dinamis.tahunkeluar}</li></td></strong><br></br><br></br>
                    <strong><td><li>Job desk : {dinamis.jobdesk}</li></td></strong>
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

export default Tentangsaya;