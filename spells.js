const magik = magikcraft.io;
function spells() {
  const spells = magik.album();
  spells.forEach(spell => magik.dixit(spell));
}
