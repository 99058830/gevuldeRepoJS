var btn = document.createElement('button');
btn.style.margin = '10px';
btn.innerHTML = 'Switch light on';
document.body.style.backgroundColor = 'black';
document.body.appendChild(btn);

// schijf hier tussen je code

btn.onclick = function() {
    if (btn.innerHTML == 'Switch light on') {
        document.body.style.backgroundColor = 'yellow';
        btn.innerHTML = 'Switch light off';
    } else if (btn.innerHTML == 'Switch light off') {
        document.body.style.backgroundColor = 'black';
        btn.innerHTML = 'Switch light on';
    }
};
// schijf hier tussen je code