function hex_xor(h1, h2)
{
    if (hex1.length != hex2.length || hex1.length % 2 != 0) {
        return "Invalid input";
    }
    h1bytes = [];
    h2bytes = [];
    str = "";
    for (let i = 0; i < hex1.length; i += 2) {
        h1bytes.push(xtoi(h1[i] << 4) + xtoi(h1[i+1]));
        h2bytes.push(xtoi(h2[i] << 4) + xtoi(h2[i+1]));
    }
    for (let i = 0; i < h1bytes.length; i++) {
        str += (h1bytes[i] ^ h2bytes[i]).toString(16);
    }
}

function button_click()
{
    const input = document.getElementById("input");
    const output = document.getElementById("output");
    output.value = hex_xor(input.value);
}
