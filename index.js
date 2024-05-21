let a = 0;
let b = 100;
// let r=a+(b-a)*Math.random();
let x = Math.random()
let r = a + (b - a) * x;
// console.log(x)
// console.log(r)
y = Math.ceil(r)
// console.log(y)
// z = parseInt(document.getElementById('num').value)
// console.log(z)
var k = document.getElementById('list');
var n = []
i = 0
j = 10
function clk() {
    z = parseInt(document.getElementById('num').value)
    // console.log(z)
    // console.log(y)
    if (z <= 100 && z >= 0) {
        i += 1
        if (j > 0) {
            j -= 1
            document.getElementById('limit').innerHTML = `<h3>Your attempt limits are: ${j}</h3>`
        }
        n.push(' '+z)
        if (n.length > 10) {
            alert(`You lose. Correct number is ${y}`)
            document.getElementById('play_again').innerHTML = '<p>You lose. Please reload this page to play again.</p>'
        }
        else {
            if (y > z) {
                document.getElementById('result').innerHTML = "<p>Enter greater value</p>";
                document.getElementById('result').style.backgroundColor = 'red';
                document.getElementById("num").value='';
            }
            else if (y < z) {
                document.getElementById('result').innerHTML = "<p>Enter smaller value</p>";
                document.getElementById('result').style.backgroundColor = 'red';
                document.getElementById("num").value='';
            }
            else if (y == z) {
                // document.getElementById('result').innerHTML = "<p>You guess the correct number</p>"
                document.getElementById('result').innerHTML = `<p>You guessed the correct number in ${i} attempts.</p>`
                document.getElementById('result').style.backgroundColor = 'rgb(0, 194, 0)'
                document.getElementById('play_again').innerHTML = '<p>You win. Please reload this page to play again.</p>'
                document.getElementById("btn").removeAttribute("onclick");
            }
            k.innerHTML = `Your guessed numbers are: ${n}`

        }
    }
    else {
        alert('Enter value between 0 and 100')
    }
}