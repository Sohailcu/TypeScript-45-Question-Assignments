// Excercies 16
let guest_list : string [] = [`Kashif`, `Ahsan`, `Arsalan`, `Farhan`, `Kashan`, `Ayan`];
let not_present : string = `Farhan`;
let new_guest : string = `Sufyan`;
guest_list[3] = new_guest;
for(let i=0; i<guest_list.length; i++){
    console.log('Dear Brother ' + guest_list[i] + ',\nYour Coordilly Invited to join Birthday Party of my Son "Badar".\nThank you\n') 
}
guest_list.unshift(`Azan`, `Faizan`, `Mutahir`);
for(let i=0; i<guest_list.length; i++){
    console.log('Dear Brother ' + guest_list[i] + ',\nYour Coordilly Invited to join Birthday Party of my Son "Badar".\nThank you\n') 
}