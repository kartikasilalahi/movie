var letters = "abcdefghijklmnopqrstuvwxyz"
letters = letters.split('')
var words = ["kita", "atik", "tika", "aku", "kia", "makan", "kua"];
let output = []
var temporary_count = 0

for (var i = 0; i < words.length; i++) {
    for (var j = 0; j < words[i].split('').length; j++) {
        for (var k = 0; k < letters.length; k++) {
            if (letters[k] == words[i][j]) temporary_count = temporary_count + k
        }
    }
    output.push({ word: words[i], count: temporary_count })
    temporary_count = 0
}

var send_output = []
var test = true
for (var i = 0; i < output.length; i++) {
    if (i == 0) {
        send_output[0] = [{ word: output[i].word, count: output[i].count }]
    } else {
        for (var j = 0; j < send_output.length; j++) {
            if (output[i].count == send_output[j][0].count) {
                send_output[j].push(output[i])
                test = false
            }
        }
        if (test == true) send_output.push([output[i]])
    }
    test = true
}

var real_send_output = []

for (var i = 0; i < send_output.length; i++) {
    real_send_output[i] = []
    for (var j = 0; j < send_output[i].length; j++) {
        real_send_output[i].push(send_output[i][j].word)
    }
}

console.log(real_send_output)