function onSubmit(e) {
    e.preventDefault();

    const w = parseFloat(e.target[0].value);
    const h = parseFloat(e.target[1].value);

    if(isNaN(w) || isNaN(h) || w <= 0 || h <= 0){
        alert('적절한 값이 아닙니다.');
        return;
    }

    const bmi = w / (h*h);

    const res = document.getElementById("res");

    res.style.display='flex';

    document.getElementById('bmi').innerText = bmi.toFixed(2);
    document.getElementById('meter').value = bmi;

    let state = '정상';
    let common = true;
    if(bmi < 18.5){
        state = '저체중';
        common = false;
    }else if(bmi >= 25){
        state = '과체중';
        common = false;
    }

    const stateEl = document.getElementById('state');
    stateEl.innerText = state;
    stateEl.style.color = common ? "#29ff21" : "#ff3a3a";
}