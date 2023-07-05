
const missionsList  = document.querySelector(".missions-list");
const container = document.querySelector(".container")
const input = document.querySelector("input")
const missions = [ 
    {
        name: "Mission 1",
        code: "234353477176",
        url: "/mission1.html",
    },
    {
        name: "Mission 2",
        code: "MOUCHE",
        url: "/mission2.html",
    }, 
    {
        name: "Mission 3",
        code: "LESOLEIL",
        url: "/mission3.html",
    }, 

    {
        name: "Mission 4",
        code: "SOS",
        url: "/mission4.html",
    }, 
    {
        name: "Mission 5",
        code: "DESACTIVATION",
        url: "/mission5.html",
    }, 
    {
        name: "Mission 6",
        code: "NUCLEAIRE",
        url: "/mission6.html",
    }, 
    {
        name: "Mission 7",
        code: "MLXPHZ",
        url: "/mission7.html",
    }, 
    {
        name: "Mission 8",
        code: "AUTODESTRUCTION",
        url: "/mission8.html",
    }, 
]

function verifierMission() {
    let error = document.querySelector(".erreur")
    let reussite = document.querySelector(".reussite")
    let cheminPage = window.location.pathname;
    let reponse = document.querySelector(".reponse")
    reponse.innerHTML = ""

    num = cheminPage.slice(8, 9)
    let n = Number(num) - 1

      if (cheminPage === missions[n].url && input.value.toUpperCase() === missions[n].code) {
       console.log(missions[n].code);
       if (cheminPage !== missions[7].url) {
        reussite.play()
        input.value = ""
       }
       
       if (cheminPage === missions[7].url) {
        window.open("/congratulation.html")
        video.play()
        
       }
        return  reponse.innerHTML = "Le code entré est valide. Mission accomplie !";

        
      }  else {
        error.play()
        input.value = ""
        console.log(missions[n].url);
        console.log(missions[n].code);
        return reponse.innerHTML = "Erreur, le code entré n'est pas bon !"
      }
    }
    
