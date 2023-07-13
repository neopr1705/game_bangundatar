//deklarasi comp
var computer=Math.random();
function compRNG(){
    if(computer < 0.34){
        computer= 'lingkaran';
    
    } else if(computer >0.34 && computer <0.67){
        computer = 'segi tiga';

    } else 
        computer = 'persegi';
}

//rule
function Rule(param){
    if(player==computer){
       return "Player : "+player+" v.s "+computer+"\n"+'Hasil Seri !';
    }else if(player == 'lingkaran'){
        if(computer =='segi tiga'){
            return "Player : "+player+" v.s "+computer+"\n"+'Selamat anda MENANG!';
        }else
            return "Player : "+player+" v.s "+computer+"\n"+'Mohon Maaf anda KALAH !';
    }else{
        if(computer =='persegi'){
            return "Player : "+player+" v.s "+computer+"\n"+'Selamat anda MENANG!';
        }else
            return "Player : "+player+" v.s "+computer+"\n"+'Mohon Maaf anda KALAH !';
    }

}

//output
var counter=3;
var opsi="ya";
while (opsi=="ya"){
    if(counter>3 || counter ==0){
        alert("ERROR! Nyawa anda habis!");
        opsi='-1';
    }else{
        var player=prompt('Pilih opsi: [Lingkaran,Segi Tiga, Persegi] \n \nRules! \nLingkaran     WIN v.s     Segi Tiga\nSegi Tiga      WIN v.s     Persegi\nPersegi         WIN v.s     Lingkaran');
        player=player.toLowerCase();
        compRNG();
        alert(Rule(player));
        counter--;
        opsi = prompt("Ingin Coba lagi? [ya , tidak] -"+counter+" Nyawa");
        opsi = opsi.toLowerCase();
        
    }
    
}

alert("Terima Kasih Telah Bermain bersama kami !");
