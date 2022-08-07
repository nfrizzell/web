const b64encode = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
    'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
    'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
    'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f',
    'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',
    'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
    'w', 'x', 'y', 'z', '0', '1', '2', '3',
    '4', '5', '6', '7', '8', '9', '+', '/'
];

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

function hex_to_b64(hex)
{
    if (hex.length % 2 == 1) {
        return "Invalid input";
    }
    bytes = [];
    str = "";
    for (let i = 0; i < hex.length; i += 2) {
        let val = (xtoi(hex[i]) << 4) + xtoi(hex[i+1]);
        bytes.push(val);
	if (bytes.length == 3 || i == hex.length-2) {
	    let sum = 0;
            for (let j = 0; j < 3 && j < bytes.length; j++) {
                sum += (bytes[j] << (8 * (2 - j)));
	    }
	    for (let j = 0; j < 4; j++) {
	        const bitmask = 0xFC0000;
	        let b64val = (sum & bitmask) >> 18;
		str += b64encode[b64val];
                sum = sum << 6;
	    }
	    bytes = [];
	    val = 0;
	}
    }
    return str;
}

function button_click()
{
    const input = document.getElementById("input");
    const output = document.getElementById("output");
    output.value = hex_to_b64(input.value);
}
