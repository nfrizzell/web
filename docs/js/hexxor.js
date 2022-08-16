function xtoi(c)
{
    let val = c.charCodeAt(0);
    if (val >= "0".charCodeAt(0) && val <= "9".charCodeAt(0)) {
        return val - "0".charCodeAt(0);
    } else if (val >= "a".charCodeAt(0) && val <= "f".charCodeAt(0)) {
        return (val - "a".charCodeAt(0)) + 10;
    } else if (val >= "A".charCodeAt(0) && val <= "F".charCodeAt(0)) {
        return (val - "A".charCodeAt(0)) + 10;
    }
    return 0;
}

function hex_xor(h1, h2)
{
    if (h1.length != h2.length || h1.length % 2 != 0) {
        return "Invalid input";
    }
    h1bytes = [];
    h2bytes = [];
    str = "";
    for (let i = 0; i < h1.length; i += 2) {
        h1bytes.push((xtoi(h1[i]) << 4) + xtoi(h1[i+1]));
        h2bytes.push((xtoi(h2[i]) << 4) + xtoi(h2[i+1]));
    }
    for (let i = 0; i < h1bytes.length; i++) {
        str += (h1bytes[i] ^ h2bytes[i]).toString(16);
    }
    return str
}

function button_click()
{
    const hex1 = document.getElementById("hex1");
    const hex2 = document.getElementById("hex2");
    const output = document.getElementById("output");
    output.value = hex_xor(hex1.value, hex2.value);
}
