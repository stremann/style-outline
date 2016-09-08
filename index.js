export default function outline() {
    [].forEach.call(document.querySelectorAll('*'), el => {
        el.style.outline = `1px solid #${(~~(Math.random() * (1 << 24))).toString(16)}`;
    });
}
