import {Hero} from "./Hero/index.jsx";
import {Client} from "./client/index.jsx";
import {Member} from "./Member/index.jsx";
import {Helping} from "./helping/index.jsx";
import {PixelGrid} from "../../component/pixelGrid/index.jsx";
import image from "../../assets/Frame 35.png"
import image1 from "../../assets/pana.png"
import {Tesla} from "./tesla/index.jsx";
import {Caring} from "./caring/index.jsx";

export const Home = ()=>{
    const message = "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\n" +
        "                   Sed sit amet justo ipsum. Sed accumsan quam vitae est varius fringilla.\n" +
        "                   Pellentesque placerat vestibulum lorem sed porta. Nullam mattis tristique\n" +
        "                   iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa\n" +
        "                   pulvinar, aliquam quam vitae, tempus sem. Donec elementum pulvinar odio.\n";

    const message1 = "The unseen of spending three years at Pixelgrade";

    const message2 = "How to design your site footer like we did";
    const message3 = `Donec a eros justo. Fusce egestas tristique ultrices. Nam
                            tempor, augue nec tincidunt molestie, massa nunc varius arcu,
                            at scelerisque elit erat a magna. Donec quis erat at libero
                            ultrices mollis. In hac habitasse platea dictumst. Vivamus
                            vehicula leo dui, at porta nisi facilisis finibus. In euismod
                            augue vitae nisi ultricies, non aliquet urna tincidunt. Integer
                            in nisi eget nulla commodo faucibus efficitur quis massa. Praesent
                            felis est, finibus et nisi ac, hendrerit venenatis libero. Donec
                            consectetur faucibus ipsum id gravida.`;
    return(
        <>
            <Hero/>
            <Client/>
            <Member/>
            <PixelGrid image={image} message={message} message1={message1}/>
            <Helping/>
            <PixelGrid image={image1} message={message3} message1={message2}/>
            <Tesla/>
            <Caring/>
        </>
    )
}