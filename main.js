/* displayUPI Logic */
function displayUPI() {
    document.getElementById("UPI").style.display = "block";
}

/* dismissUPI Logic */
function dismissUPI() {
    document.getElementById("UPI").style.display = "none";
}

/* displayUPIQR Logic */
function displayUPIQR() {
    const amountInput = document.getElementById("amountUPI");
    formatCurrency($(amountInput));
    const amountValue = amountInput.value.trim();
    const numericAmount = amountValue.replace(/[^\d.-]/g, '');

    if (numericAmount === "" || isNaN(parseFloat(numericAmount))) {
        alert("Please specify a valid amount.");
        return;
    }

    const upiUrls = [
        "upi://pay?pa=42452327724@SBIN0001072.ifsc.npci&am={}&pn=Mridun%20Gupta&cu=INR",
        "upi://pay?pa=mridungupta@sbi&am={}&pn=Mridun%20Gupta&cu=INR"
    ];
    const selectedUrl = upiUrls[Math.floor(Math.random() * upiUrls.length)];
    const upiUrlWithAmount = selectedUrl.replace("{}", numericAmount);

    document.querySelector("#UPIQR img").src = "https://qrcode.tec-it.com/API/QRCode?data=" + encodeURIComponent(upiUrlWithAmount);
    document.getElementById("UPIQR").style.display = "flex";
}

/* dismissUPIQR Logic */
function dismissUPIQR() {
    document.getElementById("UPIQR").style.display = "none";
}

/* displayPayPal Logic */
function displayPayPal() {
    document.getElementById("PayPal").style.display = "block";
}

/* dismissPayPal Logic */
function dismissPayPal() {
    document.getElementById("PayPal").style.display = "none";
}

/* displayPayPalQR Logic */
function displayPayPalQR() {
    document.getElementById("PayPalQR").style.display = "flex";
}

/* dismissPayPalQR Logic */
function dismissPayPalQR() {
    document.getElementById("PayPalQR").style.display = "none";
}

/* displayPayPalButton Logic */
function displayPayPalButton() {
    document.getElementById("PayPal").style.display = "none";
    document.getElementById("PayPalButton").style.display = "block";
}

/* dismissPayPalButton Logic */
function dismissPayPalButton() {
    document.getElementById("PayPalButton").style.display = "none";
}

/* displayGitHub Logic */
function displayGitHub() {
    document.getElementById("GitHub").style.display = "block";
}

/* dismissGitHub Logic */
function dismissGitHub() {
    document.getElementById("GitHub").style.display = "none";
}

/* input[data-type="currency"] Logic */
$(document).ready(function () {
    $("input[data-type='currency']").on({
        keyup: function () {
            formatCurrency($(this));
        },
        blur: function () {
            formatCurrency($(this), "blur");
        }
    });
});

/* formatNumber Logic */
function formatNumber(n) {
    return n.replace(/\D/g, "").replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

/* formatCurrency Logic */
function formatCurrency(input, blur) {
    var input_val = input.val();

    if (input_val === "") {
        return;
    }

    var original_len = input_val.length;

    var caret_pos = input.prop("selectionStart");

    if (input_val.indexOf(".") >= 0) {
        var decimal_pos = input_val.indexOf(".");

        var left_side = input_val.substring(0, decimal_pos);
        var right_side = input_val.substring(decimal_pos);

        left_side = formatNumber(left_side);

        right_side = right_side.replace(/\D/g, "");

        if (blur === "blur") {
            right_side += "00";
        }

        right_side = right_side.substring(0, 2);

        input_val = "₹ " + left_side + "." + right_side;
    } else {
        input_val = formatNumber(input_val);
        input_val = "₹ " + input_val;

        if (blur === "blur") {
            input_val += ".00";
        }
    }

    input.val(input_val);

    var updated_len = input_val.length;
    caret_pos = updated_len - original_len + caret_pos;

    input[0].setSelectionRange(caret_pos, caret_pos);
}