import React, {useState} from "react";
import sailor from "../assets/img/sailormoon.gif"
import '../App.css';
import cirera from "../assets/img/cirera.jpeg"
import {Row, Container} from "react-bootstrap";
import hello from '../assets/img/original.gif';


export const Header = () => {
    return (
        <div >
            <img  className="headercul" src="https://culdecirera.neocities.org/IMG/coollogo_com-29485570.png" alt="Cul de Cirera"></img>
        </div>
    )
}


export const Welcome =()=> {
    return (
        <div className="welcome">
            <img src="https://culdecirera.neocities.org/IMG/tumblr_b19e5376c818cf4897be52b620dc0f2a_a1f93828_400.gif" alt="culde" className="cirera"></img>
            <div> 
                <div>
                    <p>Welcome to my website!</p>
                    <p>I am dedicated to designing and making embroidered shirts for all types of public.</p>
                    <p>To be able to navigate you have the menu on the right, thank you for being here and that enjoy it!</p>
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
            <p>Please be my friend!</p>
            <Row xs={2} >
                <a href="https://www.instagram.com/culdecirera/" ><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a5/Instagram_icon.png/1024px-Instagram_icon.png" alt="ig" className="linksig"></img></a>
            </Row>
            <Row xs={2} >
                <a href="twitter" ><img  src="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-4.png" className="linkstw" alt="twitter"></img></a>
            </Row>
            <img className="cirera" src="https://culdecirera.neocities.org/IMG/tumblr_0ca13bdc1014a07c71c6529e7ce0b828_61bb2e2b_400.gif" alt="lolipop"></img>
            <p>If you want to be part of my website,</p>
            <p>feel free to email me:</p>
            <a href="culdecirera@gmail.com"><img src="https://i.pinimg.com/236x/de/36/2f/de362f99039a6a5170ce2f7ffa88fa29.jpg" alt="email" className="email"></img></a>

        </div>
    )
}

export const Rightbox = () => {

    const [link, setLink] = useState(false);

    return (
        <div>
            <div className="righcont">
                <div>
                    <img src={sailor} alt="sailor" className="sailor"/>
                </div>
                <div>
                    <img src="https://culdecirera.neocities.org/IMG/tumblr_6725d23abbed3726d5d57ebe2d8b6b9f_d8b3df0c_250.gif" alt="pinkribbon" className="cirera"></img>
                </div>

                    <Container className="navbar--links" id={link ? "hidden" : ""}>
                        <Row xs={2} >
                            <li className="lazo"><a href="default" className="text--style">about</a></li>
                            <li className="cupcake"><a href="news" className="text--style">design</a></li>
                        </Row>
                        <Row xs={2}>
                            <li className="cake"><a href="https://www.etsy.com/es/shop/Culdecirera?ref=profile_header" className="text--style">shop</a></li>
                            <li className="icecream"><a href="about" className="text--style">services</a></li>
                        </Row>
                    </Container>
                    <button  onClick={()=> setLink(!link)}><img className="click" src="https://img2.freepng.es/20180515/pkw/kisspng-windows-95-computer-icons-operating-systems-window-5afa97ed718b42.9889684815263723334651.jpg" alt="click"></img></button>

            </div>
        </div>
    )
}

export const Background = () => {
    return(
    <img src="https://64.media.tumblr.com/718580b05c4ab91be49cd184d8f87063/tumblr_ovhcrj8eYW1wttxpvo1_640.png" alt="back" className="back"/>
    )
}

export const Footer = () => {
    return (
    <p className="footercul">
        <img src="https://culdecirera.neocities.org/IMG/tumblr_c1b10daf8e1c276e29b329698d59c13d_9350cac2_250.gif" alt="" width="86" height="27"></img>
        <img src="https://culdecirera.neocities.org/IMG/tumblr_e34f4f097ec9a58c69b94ea97c598d01_68ace434_250.gif" alt="" width="86" height="27"></img>
        <img src="https://culdecirera.neocities.org/IMG/tumblr_b22e2d67838f2f8b8eee7588f1dd0095_089d50d3_250.gif" alt="" width="79" height="28"></img>
        <img src="https://culdecirera.neocities.org/IMG/tumblr_2df0f115b54f008059eb1e7cca8d900c_4f910faa_250.gif" alt="" width="86" height="27"></img>
        <img src="https://culdecirera.neocities.org/IMG/tumblr_4d082a3d99a49bea0d528128f2643470_0d614b28_250.gif" alt="" width="86" height="27"></img>
        <img src="https://culdecirera.neocities.org/IMG/tumblr_bca18195e81b0fd1771f6cb65b2577eb_669f7204_250.gif" alt="" width="83" height="26"></img>
        <img src="https://culdecirera.neocities.org/IMG/tumblr_7cbab485d0f3e4217c116afa16ebe46c_b4e3fc6b_250.jpg" alt="" width="86" height="27"></img>
    </p>
    )
}

