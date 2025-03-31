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

  let card = `<div class="col-lg-4 col-md-6 col-sm-12 mb-3">
                <div class="card">
                   <div class="row">
                    <div class="col-4">
                        <img src="./${img}" alt="" class="img-fluid">
                    </div>
                    <div class="col-8 d-flex flex-column justify-content-around">
                        <h4>${name}</h4>
                        <p>${role}</p>
                        <a href="#" class="text-decoration-none">${email}</a>
                    </div>
                   </div> 
                </div>
            </div>`;

  return card;
  // document.getElementById('cardContainer').innerHTML += card;
  
}

const updContainer = (array) =>{
  for(let i=0; i<array.length; i++){
    let createdCard = createCard(array[i]);
    document.getElementById('cardContainer').innerHTML += createdCard;
  }
}

updContainer(teamMembers);


