console.log('prompt connected');
// alert('ki khobor dosto');
const showAlert = () => {
    const num = Math.random() * 10;
    console.log(num);
    if (num < 5) {
        alert('Ki khobor Dosto');
    }
}

const askSomething = () => {
    const decision = confirm('Are you coming picnic ?');
    console.log(decision);
    if (decision === true) {
        alert('Dosto 500 Tk Bkash Kor');
    }
    else {
        console.log('DOM!!! Dur a Giye Mor');
    }
}

const getUserInfo = () => {
    const name = prompt('Tell Us Your Name.');
    console.log(name);
    if (!!name) {
        console.log('Welcome here', name);
    }
}