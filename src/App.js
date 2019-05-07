import React, { Component } from 'react';
import './App.css';
import Utama from './components/utama';
import { Link } from 'react-router-dom';
import { 
  Layout,Header,Navigation,Content
} from 'react-mdl';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends Component{
  render () {
    return(
    <div className="demo-big-content">
      <Layout className="body">
        <Header className="header-color" title="Portfolio">
          <Navigation>
            <Link to="/beranda">About Me</Link> 
            <Link to="/tentangsaya">Working</Link> 
            <Link to="/karya">Project</Link> 
            <Link to="/kontak">Contact</Link> 
          </Navigation>
        </Header>
        <Content>
          <div className="page-content" />
          <Utama />
        </Content>
      </Layout>
      
    </div>
    );
  }
}

export default App;
