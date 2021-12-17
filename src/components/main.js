import React from "react";
import cul from "../assets/img/pegatina.png"
import sailor from "../assets/img/sailormoon.gif"
import '../App.css';
import cirera from "../assets/img/cirera.jpeg"
import back from "../assets/img/back.jpeg"
import {Row, Container} from "react-bootstrap";
import hello from '../assets/img/original.gif';

// import { Switch, Route } from "react-router";

export const Welcome =()=> {
    return (
        <div className="welcome">
            <img src={cul} alt="cul" className="cul"/>
            <div> 
                <div>
                    <p>Welcome to Culdecirera.</p>
                    <p>This website houses all of my creations, from digital work to physical crafts. Please reference the sitemap on the right to navigate my website!</p>
                    <p>Started 9 jan. 20, last updated 25 may 20</p>
                </div>
            </div>
            <img src={hello} alt="hello" className="hello"/>
        </div>


    )
}

export const Left = () => {
    return (
        <div className="leftcont">
            <img src={cirera} alt="cirera" className="cirera"/>
            <p>Please be my friend</p>
            <Row xs={2} >
                <li className="linksig"><a href="instagram" className="text--style">Instagram</a></li>
            </Row>
            <Row xs={2} >
                <li className="linkstw"><a href="twitter" className="text--style">Twitter</a></li>
            </Row>

            <p>9/15 SRR ticket</p>
            <p>initial: feb. 29 ; cinfes: apr. 30</p>
            <p>feel free to email me if you would like me to add your stamp as well!</p>

        </div>
    )
}

export const Rightbox = () => {
    return (
        <div className="righcont">
            <div>
                <img src={sailor} alt="sailor" className="sailor"/>
                <nav>
                    {/* <Switch>
                        <Route></Route>
                    </Switch> */}
                </nav>
            </div>
            <div>
                <p>updates: 2:23 - began revamp</p>
            </div>
            <Container className="navbar--links">
                    <Row xs={2} >
                        <li className="lazo"><a href="default" className="text--style">about</a></li>
                        <li className="cupcake"><a href="news" className="text--style">design</a></li>
                    </Row>
                    <Row xs={2}>
                        <li className="cake"><a href="contact" className="text--style">shop</a></li>
                        <li className="icecream"><a href="about" className="text--style">services</a></li>
                    </Row>
                </Container>

        </div>
    )
}

export const Background = () => {
    return(
    <img src={back} alt="back" className="back"/>
    )
}

export const Footer = () => {
    return (
    <p>
        <img src="IMG/tumblr_c1b10daf8e1c276e29b329698d59c13d_9350cac2_250.gif" alt="" width="86" height="27"></img>
        <img src="IMG/tumblr_e34f4f097ec9a58c69b94ea97c598d01_68ace434_250.gif" alt="" width="86" height="27"></img>
        <img src="IMG/tumblr_b22e2d67838f2f8b8eee7588f1dd0095_089d50d3_250.gif" alt="" width="79" height="28"></img>
        <img src="IMG/tumblr_2df0f115b54f008059eb1e7cca8d900c_4f910faa_250.gif" alt="" width="86" height="27"></img>
        <img src="IMG/tumblr_4d082a3d99a49bea0d528128f2643470_0d614b28_250.gif" alt="" width="86" height="27"></img>
        <img src="IMG/tumblr_7cbab485d0f3e4217c116afa16ebe46c_b4e3fc6b_250.jpg" alt="" width="83" height="26"></img>
        <img src="IMG/tumblr_bca18195e81b0fd1771f6cb65b2577eb_669f7204_250.gif" alt="" width="86" height="27"></img>
    </p>
    )
}

