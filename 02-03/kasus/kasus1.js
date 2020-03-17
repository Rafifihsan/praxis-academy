
let aa = prompt("niali a");
let bb = prompt("nilai b");
let cc = prompt("nilai c");

let isActive1 = {
if(bb){
    bb.entries["isActive"]
    console.log(meetup.b["isActive"])

}
}

let isActive = Boolean(bb);
let meetup =[ a={name:'JS',isActive:true,members:49},
            b={name:'VF',isActive: false ,members:49},
           c= {aa, isActive, cc}


]

let d = prompt("masukan a");

const scheduleMeetup = (date, place) => {
    meetup.date = date;
    meetup.place = place; 
    meetup.nama = d; 
    if (meetup.members < 50)
      meetup.isActive = false;
  }

  let active = [];
  for (let i ; i<meetup.length;i++){
      let b = meetup[i];
      if(b.active == true){
          active.push(b);
      }
  }

  let activeM = [];
  activeM = (meetup.filter(b=>{
      return b.isActive;
  }))
  const publishMeetup = () => {
    if (meetup.isActive) {
      meetup.publish = true;
    }
  
}
console.log(activeM);
  scheduleMeetup('today','Bnagalore',d);
  publishMeetup();
  console.log(meetup);