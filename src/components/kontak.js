import React, { Component } from 'react';
import axios from 'axios';
import { 
  Footer,FooterSection,FooterLinkList 
} from 'react-mdl';

class Kontak extends Component{
    constructor(props) {
        super(props);
        this.onChangenamakontak = this.onChangenamakontak.bind(this);
        this.onChangeemail = this.onChangeemail.bind(this);
        this.onChangenote = this.onChangenote.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
  
        this.state = {
            namakontak: '',
            email: '',
            note:'',
            kontak: []  
        }
    }
    datakontak() {
        fetch('https://4pilarsinergi.co.id/api-portfolio/public/kontak/')
        .then(response => response.json())
        .then((data)=>{
            this.setState({kontak: data});
        })
    }
    componentWillMount(){
        this.datakontak()
    }

    onChangenamakontak(e) {
        this.setState({
          namakontak: e.target.value
        });
      }
      onChangeemail(e) {
        this.setState({
          email: e.target.value
        })  
      }
      onChangenote(e) {
        this.setState({
          note: e.target.value
        })
      }
    
      onSubmit(e) {
        e.preventDefault();
        const obj = {
            namakontak: this.state.namakontak,
            email: this.state.email,
            note: this.state.note
        };
        axios.post('https://4pilarsinergi.co.id/api-portfolio/public/kontak/', obj)
        .then(res => {

            //alert(res.data.status);
            this.datakontak();
            
            console.log(res.data)
          }
        );
        
        this.setState({
          namakontak: '',
          email: '',
          note: ''
        })
        //window.location.reload()
      }

    render(){
        return(
            <div style={{ marginTop: 10 }}>
                <div className="col-md-6"><h4 style={{color: '#fff'}}>Add message</h4></div>
                <form onSubmit={this.onSubmit}>
                  <div className="col-md-6">
                      <label style={{color: '#fff'}}>Nama:  </label>
                      <input type="text" 
                        className="form-control"
                        placeholder="Your name" 
                        required
                        value={this.state.namakontak}
                        onChange={this.onChangenamakontak}
                        />
                  </div>
                  <div className="col-md-6">
                      <label style={{color: '#fff'}}>Email: </label>
                      <input type="text" 
                        className="form-control"
                        placeholder="Your email" 
                        value={this.state.email}
                        onChange={this.onChangeemail}
                        />
                  </div>
                  <div className="col-md-6">
                      <label style={{color: '#fff'}}>Note: </label>
                      <input type="text" 
                        className="form-control"
                        placeholder="Write something.." 
                        value={this.state.note}
                        onChange={this.onChangenote}
                        />
                  </div>
                  <br></br>
                  <div className="col-md-6">
                      <input type="submit" value="Submit" className="btn btn-success"/>
                  </div>
              </form>
              <br></br>
                <center>
                    <div className="col-md-8">
                        <table className="table table-bordered table-dark">
                            <tr>
                                <th className="text-center">Name</th>
                                <th className="text-center">Email</th>
                                <th className="text-center">Note</th>
                            </tr>
                            {
                                this.state.kontak.map((dinamis, key) =>
                                <tr>
                                    <td>{dinamis.namakontak}</td>
                                    <td>{dinamis.email}</td>
                                    <td>{dinamis.note}</td>
                                </tr>
                                )
                            }
                        </table>
                    </div>
                </center>
                <br></br><br></br>
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

export default Kontak;