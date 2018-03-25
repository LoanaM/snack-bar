var oggi=new Date()
var comple=new Date(2018,11,23)

//conteggia i sec dal 1/1/1970
function countgg(tempo) {
return(Math.floor(tempo.getTime()/(1000))) //(1000*60*60*24)=conta i gg
}

secmancanti = (countgg(comple) - countgg(oggi))

console.log(secmancanti)
