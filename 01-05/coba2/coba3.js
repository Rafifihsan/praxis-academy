function tableFor(event, journal) {
  var a = prompt("masukan angka");  
  let table = a;
    for (let i = 0; i < journal.length; i++) {
      let entry = journal[i], index = 0;
      if (entry.events.includes(event)) index += 1;
      if (entry.squirrel) index += 2;
      a[index] += 1;
    }
    return table;
  }
  
  console.log(tableFor("pizza",  24));