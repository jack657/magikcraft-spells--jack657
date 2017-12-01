const magik = magikcraft.io;
function cfire(times){
    times = times || 3;
    function fireball(){
        magik.infierno();
    }

     magik.doNTimes(fireball, times);
}