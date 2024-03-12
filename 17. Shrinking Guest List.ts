// Excercies 17
let guest_list : string [] = [`Kashif`, `Ahsan`, `Arsalan`, `Farhan`, `Kashan`, `Ayan`];
let not_present : string = `Farhan`;
let new_guest : string = `Sufyan`;
guest_list[3] = new_guest;
guest_list.unshift(`Azan`, `Faizan`, `Mutahir`);
console.log('\nUnfortunately we can not arrange the space as per attendance, only Two Person Allow.');
while(guest_list.length>2){
    let remove_guest = guest_list.pop();
    console.log(`Sorry Brother : ${remove_guest} your not invited for the Birthday Party.\n`);
}
for(let i=0; i<guest_list.length; i++){
    console.log('Dear Brother, ' + guest_list[i] + ',\nYes Your Still Invited to join Birthday Party of my Son "Badar".\nThank you.\n') 
}
guest_list.splice(0,2)
console.log(guest_list)