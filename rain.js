const canvas = document.getElementById('matrix');
const context = canvas.getContext('2d');

var parent = document.getElementById("matrix");
canvas.width = parent.offsetWidth;
canvas.height = parent.offsetHeight;

const alphaNum = "aąbcćdeęfghijklłmnńoópqrsśtuvwxyzżźAĄBCĆDEĘFGHIJKLŁMNŃOÓPQRSŚTUVWXYZŻŹ0123456789~`!@#€$%^&*()-_=+?{}[];:,<.>";
const fontSize = 30;
const columns = canvas.width/fontSize;

const rainDrops = [];

for(let x = 0; x < columns; x++ ) {
    rainDrops[x] = 1;
}

const draw = () => {
    context.fillStyle = 'rgba(0, 0, 0, 0.1)';
    context.fillRect(0, 0, canvas.width, canvas.height);

    context.fillStyle = '#0FA';
    context.font = fontSize + 'px monospace';

    for(let i = 0; i < rainDrops.length; i++)
    {
        const text = alphaNum.charAt(Math.floor(Math.random() * alphaNum.length));
        context.fillText(text, i * fontSize, rainDrops[i] * fontSize);

        if(rainDrops[i] * fontSize > canvas.height && Math.random() > 0.9){
            rainDrops[i] = 0;
        }
        rainDrops[i]++;
    }
};

setInterval(draw, 20);