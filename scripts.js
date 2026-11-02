const dropdown=document.getElementById("dropdown-options");

function openDropdown(){
if (dropdown.classList.contains("open")){
dropdown.classList.remove("open");


}else{

dropdown.classList.add("open");

}

};

const body= document.querySelector("body");
const instruction= document.querySelector("#instruction");
const content=document.querySelector("#content-holder");
const title=document.querySelector("#title");
const slot1=document.querySelector("#slot-1");
const slot2=document.querySelector("#slot-2");
const slot3=document.querySelector("#slot-3");

function clear(){
body.classList.remove='';

body.classList='';
slot1.classList='content';

slot2.classList='content';
slot3.classList='content';

dropdown.classList.remove("open");

}

function option(){
    clear();
    instruction.style.display='none';
    content.style.display='block';

    body.classList.add("seventies");

    title.innerHTML="1970s";

    slot1.classList.add("seventies");
    slot1.innerHTML= "<h1>Fashion</h1> \n \
          <p> \n \
          <strong>Bohemian Chic:</strong> The 1970s saw a rise in bohemian-inspired fashion, characterised by flowing fabrics, floral prints, and earthy colors. This style was influenced by the counterculture movement and embraced a relaxed, free-spirited aesthetic. Fringed vests, peasant blouses, maxi dresses, and bell-bottom jeans were iconic elements of this trend. \n \
          </p> \n \
          <p> \n \
          <strong>Disco Glamour:</strong> The disco era of the 1970s brought about glamorous and flashy fashion. Metallic fabrics, sequins, and glitter were popular, reflecting the vibrant nightlife scene. Tight-fitting clothes such as wrap dresses, jumpsuits, and platform shoes became synonymous with disco fashion. Bold colors and exaggerated silhouettes were key features of this trend. \n \
          </p> \n \
          <p> \n \
          <strong>Sporty Casual:</strong> The 1970s also witnessed the emergence of sporty casual wear, influenced by the rising popularity of recreational activities like jogging and aerobics. This style featured comfortable yet stylish clothing such as tracksuits, hoodies, sneakers, and t-shirts with bold logos. The athleisure trend of mixing sportswear with everyday attire became increasingly popular during this decade. \n \
          </p>";


         slot2.classList.add ("seventies");
 slot2.innerHTML="<h1>Music</h1> \n \
          <p> \n \
            <strong>Disco Fever:</strong> The 1970s were defined by the disco music craze, characterised by pulsating rhythms, funky basslines, and catchy melodies. Disco songs often featured lush orchestrations, soulful vocals, and lyrics about love, dancing, and nightlife. The disco era saw the rise of iconic artists like Donna Summer, Bee Gees, and Gloria Gaynor, as well as legendary clubs like Studio 54, where disco culture thrived. \n \
          </p> \n \
          <p> \n \
            <strong>Rock 'n' Roll Evolution:</strong> Rock music underwent significant evolution in the 1970s, branching into various subgenres such as glam rock, progressive rock, and punk rock. Bands like Led Zeppelin, Pink Floyd, and The Rolling Stones pushed the boundaries of rock music with experimental sounds and complex compositions. The 1970s also saw the emergence of influential singer-songwriters like Bob Dylan and Joni Mitchell, who infused their music with introspective lyrics and folk influences. \n \
          </p> \n \
          <p> \n \
            <strong>Birth of Hip-Hop:</strong> The 1970s marked the birth of hip-hop music in the Bronx, New York City, as DJs and MCs began experimenting with turntables and rhymes at block parties and community events. Hip-hop's early pioneers, such as Grandmaster Flash, Afrika Bambaataa, and DJ Kool Herc, laid the groundwork for the genre's future success. Breakdancing, graffiti art, and MC battles were integral elements of hip-hop culture during this formative decade. \n \
          </p>";




slot3.classList.add("seventies ");
slot3.innerHTML= "<h1>Discoveries and Advancements</h1> \n \
          <p> \n \
            <strong>Personal Computing:</strong> The 1970s saw the birth of the personal computer revolution, with the development of groundbreaking technologies like the microprocessor and the floppy disk. Companies like Apple, Microsoft, and IBM introduced early PCs to the market, making computing accessible to individuals and businesses alike. Innovations such as the Altair 8800 and the Apple II paved the way for the digital age, laying the foundation for the modern computer industry. \n \
          </p> \n \
          <p> \n \
            <strong>Genetic Engineering:</strong> In the 1970s, scientists made significant strides in the field of genetic engineering, with the discovery of recombinant DNA technology. This breakthrough allowed researchers to manipulate and splice DNA molecules from different organisms, opening up new possibilities for biotechnology and genetic research. The creation of the first genetically modified organism (GMO) in 1973 marked a milestone in genetic engineering, sparking both excitement and ethical debates about the implications of manipulating the building blocks of life. \n \
          </p> \n \
          <p> \n \
            <strong>Space Exploration:</strong> The 1970s were a golden age of space exploration, with landmark achievements such as the Apollo moon landings and the launch of the Voyager probes. NASA's Apollo program successfully put twelve astronauts on the lunar surface between 1969 and 1972, fulfilling President Kennedy's goal of landing a man on the moon before the end of the decade. The Voyager spacecraft, launched in 1977, conducted pioneering studies of the outer planets and provided invaluable data about the solar system's far reaches. \n \
          </p>";
  localStorage.setItem("choice", "seventies");
}