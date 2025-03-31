const teamMembers = [
  {
    name: "Marco Bianchi",
    role: "Designer",
    email: "marcobianchi@team.com",
    img: "img/male1.png"
  },
  {
    name: "Laura Rossi",
    role: "Front-end Developer",
    email: "laurarossi@team.com",
    img: "img/female1.png"
  },
  {
    name: "Giorgio Verdi",
    role: "Back-end Developer",
    email: "giorgioverdi@team.com",
    img: "img/male2.png"
  },
  {
    name: "Marta Ipsum",
    role: "SEO Specialist",
    email: "martarossi@team.com",
    img: "img/female2.png"
  },
  {
    name: "Roberto Lorem",
    role: "SEO Specialist",
    email: "robertolorem@team.com",
    img: "img/male3.png"
  },
  {
    name: "Daniela Amet",
    role: "Analyst",
    email: "danielaamet@team.com",
    img: "img/female3.png"
  }
];

const createCard = (member) =>{
  
  const {name, role, email, img} = member;

  let card = `<div class="col-4 mb-3">
                <div class="card">
                   <div class="row">
                    <div class="col-4">
                        <img src="./${img}" alt="" class="img-fluid">
                    </div>
                    <div class="col-8">
                        <h4>${name}</h4>
                        <p>${role}</p>
                        <a href="#" class="text-decoration-none">${email}</a>
                    </div>
                   </div> 
                </div>
            </div>`;

  document.getElementById('cardContainer').innerHTML += card;
  
}

for(let i=0; i<teamMembers.length; i++){
  console.log(teamMembers[i]);
  createCard(teamMembers[i]);
}