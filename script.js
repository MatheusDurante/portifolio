function calcYearsOld(birthData) {
    const today = new Date();
    const splitData = birthData.split('/');
    const birth = new Date(
      parseInt(splitData[2]),
      parseInt(splitData[1]) - 1,
      parseInt(splitData[0])
    );
    
    let yearsOld = today.getFullYear() - birth.getFullYear();
    const thisMonth = today.getMonth();
    const birthMonth = birth.getMonth();
    
    if (thisMonth < birthMonth || (thisMonth === birthMonth && today.getDate() < birth.getDate())) {
        yearsOld--;
    }
    return yearsOld;
}

const birthData = '17/01/2005';
const idade = calcYearsOld(birthData);
document.getElementById('idade').textContent = idade;