// Excercies 15
let guest_list : string [] = [`Kashif`, `Ahsan`, `Arsalan`, `Farhan`, `Kashan`, `Ayan`];
for(let i=0; i<guest_list.length; i++){
    console.log('Dear Brother ' + guest_list[i] + ',\nYour Coordilly Invited to join Birthday Party of my Son "Badar".\nThank you\n') 
}
let not_present : string = `Farhan`;
let new_guest : string = `Sufyan`;
guest_list[3] = new_guest;
for(let i=0; i<guest_list.length; i++){
    console.log('Dear Brother ' + guest_list[i] + ',\nYour Coordilly Invited to join Birthday Party of my Son "Badar".\nThank you\n') 
}
console.log(`Mr. ${not_present}  was not present at the party.`);
