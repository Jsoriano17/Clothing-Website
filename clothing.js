//dom
var noEye1 = document.getElementById('noEye1');
var eye1 = document.getElementById('eye1');
var noEye2 = document.getElementById('noEye2');
var eye2 = document.getElementById('eye2');
var menBtn = document.getElementById("mbtn");
var womanBtn = document.getElementById("wbtn");
var manNoEye = document.getElementById('mE');
var womanNoEye = document.getElementById('wE');
var bothNoEye = document.getElementById('bnE');



//ad hover 
noEye1.addEventListener('mouseover', function() {
    noEye1.style.display = 'none';
    eye1.style.display = 'block';
    document.getElementById('clothing').classList.add('shake');
});

eye1.addEventListener('mouseout', function() {
    eye1.style.display = 'none';
    noEye1.style.display = 'block';
    document.getElementById('clothing').classList.remove('shake');
});

noEye2.addEventListener('mouseover', function() {
    noEye2.style.display = 'none';
    eye2.style.display = 'block';
    document.getElementById('access').classList.add('shake');
});

eye2.addEventListener('mouseout', function() {
    eye2.style.display = 'none';
    noEye2.style.display = 'block';
    document.getElementById('access').classList.remove('shake');
});

//web back hover
menBtn.addEventListener('mouseover', function() {
    bothNoEye.style.display = 'none';
    manNoEye.style.display = 'block';
});

menBtn.addEventListener('mouseout', function() {
    manNoEye.style.display = 'none';
    bothNoEye.style.display = 'block';
});

womanBtn.addEventListener('mouseover', function() {
    bothNoEye.style.display = 'none';
    womanNoEye.style.display = 'block';
});

womanBtn.addEventListener('mouseout', function() {
    womanNoEye.style.display = 'none';
    bothNoEye.style.display = 'block';
});

