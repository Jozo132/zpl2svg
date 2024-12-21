
// @ts-check
"use strict"


const zpl_test_sample = `^XA

^FX Demo VDA4902 Label Template

^FX A5 landscape border
^FO10,10^GB1200,792,3^FS

^FX VDA 4902 frame
^FX Horizontal Dividers
^FO10,110^GB1200,1,1^FS
^FO10,250^GB1200,1,1^FS
^FO600,180^GB610,1,1^FS
^FO10,400^GB1200,1,1^FS
^FO10,560^GB590,1,1^FS
^FO600,470^GB610,1,1^FS
^FO600,620^GB610,1,1^FS
^FO10,670^GB1200,1,1^FS

^FX Vertical Dividers
^FO600,10^GB1,240,1^FS
^FO800,180^GB1,70,1^FS
^FO1000,180^GB1,70,1^FS
^FO600,400^GB1,400,1^FS
^FO840,620^GB1,50,1^FS

^FX Set default font
^CF0,16

^FX Section 1: Receiver
^FO20,20^FD(1) Receiver^FS
^CF0,32
^FO20,45^FDXYZ Motors Inc.^FS
^FO20,80^FD1234 Industrial Drive, Detroit, 48201^FS

^FX Section 2: Dock-Gate
^CF0,16
^FO610,20^FD(2) Dock - Gate^FS
^CF0,38
^FO610,50^FDWH-SECTOR-B3^FS

^FX Section 3: Advice Note No
^CF0,16
^FO20,120^FD(3) Advice Note No (N)^FS
^CF0,40
^FO190,120^FD1122334455^FS
^FO30,160^BY2^B3N,N,80,N,N^FD1122334455^FS

^FX Section 4: Supplier Address
^CF0,16
^FO610,120^FD(4) Supplier Address^FS
^CF0,32
^FO610,150^FD5678 Supplier Lane, Cleveland, 44114^FS

^FX Section 5: Net weight
^CF0,16
^FO610,190^FD(5) Net weight^FS
^CF0,38
^FO610,210^FD24.8kg^FS

^FX Section 6: Gross weight
^CF0,16
^FO810,190^FD(6) Gross weight^FS
^CF0,38
^FO810,210^FD25.5kg^FS

^FX Section 7: No Boxes
^CF0,16
^FO1010,190^FD(7) No Boxes^FS
^CF0,38
^FO1010,210^FD 12^FS

^FX Section 8: Part No
^CF0,16
^FO20,260^FD(8) Part No (P)^FS
^CF0,48
^FO150,260^FD123456789012^FS
^FO30,300^BY2^B3N,N,90,N,N^FD123456789012^FS

^FX Section 9: Quantity
^CF0,16
^FO20,410^FD(9) Quantity (Q)^FS
^CF0,48
^FO140,410^FD 500^FS
^FO30,460^BY2^B3N,N,90,N,N^FD500^FS

^FX Section 10: Description
^CF0,16
^FO610,410^FD(10) Description^FS
^CF0,38
^FO610,430^FDBrake Pad Assembly^FS

^FX Section 11: Supplier Part No
^CF0,16
^FO610,480^FD(11) Supplier Part No (30S)^FS
^CF0,38
^FO610,500^FDCP-45678-BRK^FS
^FO620,540^BY2^B3N,N,70,N,N^FDCP-45678-BRK^FS

^FX Section 12: Supplier
^CF0,16
^FO20,570^FD(12) Supplier (V)^FS
^CF0,48
^FO150,570^FD987654321^FS
^FO30,610^BY2^B3N,N,50,N,N^FD987654321^FS

^FX Section 13: Date
^CF0,16
^FO610,630^FD(13) Date^FS
^CF0,28
^FO690,640^FD D 241215^FS

^FX Section 14: Eng. Change
^CF0,16
^FO850,630^FD(14) Eng. Change^FS
^CF0,28
^FO990,640^FD B33-827 A^FS

^FX Section 15: Serial No
^CF0,16
^FO20,680^FD(15) Serial No (S)^FS
^CF0,48
^FO160,680^FD 852934^FS
^FO30,720^BY2^B3N,N,70,N,N^FD852934^FS

^FX Section 16: Batch No
^CF0,16
^FO610,680^FD(16) Batch No (F)^FS
^CF0,32
^FO760,680^FDA12345B67890^FS
^FO620,710^BY2^B3N,N,80,N,N^FDA12345B67890^FS

^FX Section 17: Sender
^CF0,16
^FO20,810^FDABC Automotive Parts Co.^FS
^FO610,810^FDVDA4902 Label^FS

^FX Last Section: Timestamp
^CF0,16
^FO1050,810^FD2024-12-15 09:23:56^FS


^FX Draw custom graphic field
^FO850,250^GFA,4096,4096,32,,:::::::::::::hY03E,hY0FF8,hX01FFC,hX03FFE,hX07FFE,hX07IF,hX0JF,hX0JF8,::::L01FChO0JF8,L0IFEhN0JF8,K01JF8hM0JF8,K01JFCJ018R01CgM0JF8,K01KFJ07EJ03CL07FI01EgH0JF8,K01KFCI0FEJ07EL07F800FF803IFCU0JF8,K03KFEI0FFJ0FFL0FFC03FF80KFU0JF8,K07LF800FFI01FFL0FFC0IFC3KF8Q0F00JF,J01MFC01FFI01FFL07FE1IFC7KFCP03F80JF,J03MFE01FFI03FFL07FF7IFCLFC18N03F80JF,J07IF03FFE01FFI03FEL03LF9LFC7EI01FI07FC0JF,J0IFE00IF01FEI03FEL01LF1LFCFFI03F8007FC0IFE,I01IF8007FF83FEI07FCM0KFC3LF9FFI07F800FF80IFE,I03FFEI01FFC3FEI07FCM0JFE07FF801E1FFI07FC00FF80IFE,I07FF8J0FFC7FCI07FCM07IF80FFEJ03FFI07F800FF80IFE,I07FFK07FE7FCI07F8M07FFE01JF8007FFI07F800FF00IFC,I0FFEK03FE7FCI0FF8M0IFC03JFC007FFI07F800FF00IFC,001FFCK03FEFF8I0FF8L01IF003JFC00IFI0FF801FF00IFC,001FF8K01FEFF8I0FF8L03FFE007JFE01IFI0FF801FF00IFC,003FFL01FEFFC001FFM07FFC00KFE01IFI0FF801FF007FFC,003FEL01PFM07FF001KFC03IFI0FF801FF007FF8,007FEL01PFM0FFE003KFC07IFI0FF001FF007FF8,007FCL01PFL01FFC003FF7FF807IFI0FF001FF007FF8,007FCL01OFEL01FF8007FE3F800JF800FF001FF007FF,007F8L03OFEL03FFI0FFE0CI0KFC0FF001FF007FE,00FF8L03OFEL07FE001FFCJ01LF1MF007FC,00FF8L07OFCL07FE003FF8J03LF1MF003F8,00FF8L07OFCL0FFC003FFK03LF9MF003F8,00FFM07IFCI07FCK01FF8007FEK07LF9MF001F,00FFM0JF8I07F8K01FF800FFEK07LF9MFI04,00FFM0JF8I07F8K03FFI0FFCK0MF1MF,00FFL01JF8I07F8K03FEI0FF8J01LFE1MF,00FFL03JF8I0FF8K07FE001LF81IF7FC01MF,00FFL07JFJ0FF8K07FC001LF83FF87FC03FF001FF,00FF8K0KFJ0FF8K07FC001LFC7FE07FC03FEI0FF,00FF8J01FFEFFJ0FFL0FF8001LFC7FE07FC03FEI0FF003C,00FFEJ07FFDFFJ0FFL0FF8001LFCFFC07FC03FEI0FF00FF,007OF9FFJ0FFL0FF8001LF8FF803FC03FCI0FF01FF8,007OF1FFJ0FFL0FFJ0LF8FF803FE03FCI0FF03FFC,003NFE1FEJ0FFL07FJ07JFE0FF003FE03FCI0FF03FFE,001NFC1FEJ0FFL03EQ0FF001FE03FCI0FF07IF,001NF81FEJ0FFY07E001FC03FCI0FF07IF,I0MFE00FEJ0FEY038001FC03FCI0FF07IF8,I03LFC00FCJ07CgJ07803FCI0FF07IF8,J0LFI01K01gN03FCI07F07IF8,J03JFgY03FCI03E07IF8,hN01F8L03IF,hO0FM03FFE,hW01FFC,gQ0FgL07F8,gP01FF,gP03FFC,gH03FEK03IF,gG01IFK03IF8,gG07IFJ07BIFE,gG0JF8I0LF,g01JFC001LFC,g01JFE003FE3IFE,g01JFE003FE07IF8,g01JFE007FE01IFC,g01JFC007FC007IF,g01JFC007FC003IF8,gG0JF8007F8I0IFC,gG0JFI0FF8I07FFE,gG03FF8I0FF8I01IF8,gN0FF8J0IF8,gN0FF8J03FFC,gN0FFK01FFE,gN0FFL0FFE,gN0FFL07FF,gN0FFL01FF,gM01FFL01FF,gG01EJ01FFM0FF,gG07F8I01FFL01FF,gG0FFCI01FEL0IF,g01FFEI01FEJ0KF,g03IFI01FE007KFE,g07IF8003PFE,g07IF8003PFC,g07IFC003PF8,g0JFC003OFE,g0JFC003OF8,g0JFC001NFC,g0JFC001MF,g07IFCI0KF,g07IF8,g03IF,g01FFE,gG07F,,::::::::::::^FS

^XZ
`


const code_element = document.getElementById("code")
const output_element = document.getElementById("raw")
const render_element = document.getElementById("svg")
const button_svg = document.getElementById("svg-tab")
const button_raw = document.getElementById("raw-tab")
const div_svg = document.getElementById("svg-div")
const div_raw = document.getElementById("raw-div")
const span_conversion_time = document.getElementById("conversion_time")
const download_zpl = document.getElementById("download-zpl")
const download_svg = document.getElementById("download-svg")
const download_png = document.getElementById("download-png")
const zoom_value = document.getElementById('zoom_value')
const x_value = document.getElementById('x_value')
const y_value = document.getElementById('y_value')
const touch_value = document.getElementById('touch_value')
if (!touch_value) throw new Error("Missing touch_value element")
if (!code_element || !output_element || !render_element || !button_svg || !button_raw || !div_svg || !div_raw || !span_conversion_time || !download_zpl || !download_svg || !download_png || !zoom_value || !x_value || !y_value) {
    throw new Error("Missing element")
}

/** @type {{ svg_content: string, element: Element | null, viewBox: { x: number, y: number, width: number, height: number }, viewBoxBase?: { x: number, y: number, width: number, height: number }, scale: number, x_offset: number, y_offset: number }} */
const state = {
    svg_content: '',
    viewBox: { x: 0, y: 0, width: 1000, height: 1000 },
    element: null,
    scale: 1,
    x_offset: 0,
    y_offset: 0,
}

// Get mouse position
const mouse_pos = {
    x: 0,
    y: 0,
    width: 0,
    height: 0,
}


// Add pan functionality
let isDragging = false
let start = { x: 0, y: 0 }

const update_mouse_pos = (e) => {
    const { left, top, width, height } = render_element.getBoundingClientRect()
    // svg position - mouse position
    if (e) {
        mouse_pos.x = e.clientX - left
        mouse_pos.y = e.clientY - top
        mouse_pos.width = width
        mouse_pos.height = height
    }

    const x = map(mouse_pos.x, 0, mouse_pos.width, state.viewBox.x, state.viewBox.x + state.viewBox.width)
    const y = map(mouse_pos.y, 0, mouse_pos.height, state.viewBox.y, state.viewBox.y + state.viewBox.height)

    if (isDragging && e && e.clientX && e.clientY) {
        const dx = e.clientX - start.x
        const dy = e.clientY - start.y
        start = { x: e.clientX, y: e.clientY } // Update start position for next move
        state.viewBox.x -= dx / state.scale
        state.viewBox.y -= dy / state.scale
        update_zoom_pan()
    }

    x_value.innerHTML = x.toFixed(0)
    y_value.innerHTML = y.toFixed(0)
}

const touch_points = { valid: 0, x1: 0, y1: 0, x2: 0, y2: 0 }

render_element.addEventListener("mousemove", update_mouse_pos)
render_element.addEventListener("touchmove", (e) => {
    e.preventDefault()
    const touch = JSON.stringify([...e.touches].map(t => ({ x: t.clientX.toFixed(1), y: t.clientY.toFixed(1) })))
    // touch_value.innerHTML = touch
    if (e.touches.length == 1) {
        update_mouse_pos(e.touches[0])
        touch_points.valid = 0
    } else if (e.touches.length == 2) {
        isDragging = false
        touch_points.valid++
        if (touch_points.valid == 1) {
            touch_points.x1 = e.touches[0].clientX
            touch_points.y1 = e.touches[0].clientY
            touch_points.x2 = e.touches[1].clientX
            touch_points.y2 = e.touches[1].clientY
        } else {
            const { x1, y1, x2, y2 } = touch_points
            const dx1 = e.touches[0].clientX - x1
            const dy1 = e.touches[0].clientY - y1
            const dx2 = e.touches[1].clientX - x2
            const dy2 = e.touches[1].clientY - y2

            const delta = (Math.hypot(dx1, dy1) - Math.hypot(dx2, dy2)) * 0.01

            touch_value.innerHTML = `(${dx1.toFixed(1)}, ${dy1.toFixed(1)}) (${dx2.toFixed(1)}, ${dy2.toFixed(1)}) ${delta.toFixed(1)}`


            if (!delta || !Number.isFinite(delta) || delta < -100 || delta > 100) return // Limit zoom to 0.5




            zoom_into_point(-1, -1, delta)

            update_zoom_pan()
            zoom_value.innerHTML = state.scale.toFixed(1)
            update_mouse_pos()
        }
    } else {
        isDragging = false
        touch_points.valid = 0
    }
})

const map = (value, in_min, in_max, out_min, out_max) => (value - in_min) * (out_max - out_min) / ((in_max - in_min) || 1) + out_min

// x: 0 to 100 in percentage relative to the width of the element
// y: 0 to 100 in percentage relative to the height of the element
/** @type { (x: number, y: number, delta: number) => void } */
const zoom_into_point = (x, y, delta) => {

    const offset_limit = 1000000
    const max_scale = 20
    const min_scale = 0.05

    if (x == -1 && y == -1) {
        x = 50
        y = 50
    }

    // console.log("Zooming in", x, y, delta)
    const new_scale = state.scale + state.scale * delta * 0.1
    const scale = Math.max(min_scale, Math.min(max_scale, new_scale));
    state.scale = scale

    const max_width = (state?.viewBoxBase?.width || 0) * max_scale
    const max_height = (state?.viewBoxBase?.height || 0) * max_scale
    const min_width = (state?.viewBoxBase?.width || 0) * min_scale
    const min_height = (state?.viewBoxBase?.height || 0) * min_scale

    const actual = state.viewBox
    const original = state.viewBoxBase

    // New viewBox dimensions
    const newWidth = (original?.width || actual.width) / scale
    const newHeight = (original?.height || actual.height) / scale
    const diffWidth = newWidth - actual.width
    const diffHeight = newHeight - actual.height
    const new_left = actual.x - diffWidth * x / 100
    const new_top = actual.y - diffHeight * y / 100

    // Limit values
    state.viewBox = {
        x: Math.max(-offset_limit, Math.min(offset_limit, new_left)),
        y: Math.max(-offset_limit, Math.min(offset_limit, new_top)),
        width: Math.max(min_width, Math.min(max_width, newWidth)),
        height: Math.max(min_height, Math.min(max_height, newHeight))
    }

    // Round to 3 decimal places
    state.viewBox.x = +(state.viewBox.x || 0).toFixed(3)
    state.viewBox.y = +(state.viewBox.y || 0).toFixed(3)
    state.viewBox.width = +(state.viewBox.width || 0).toFixed(3)
    state.viewBox.height = +(state.viewBox.height || 0).toFixed(3)

    state.scale = (state.scale || 1)

    update_zoom_pan()
    zoom_value.innerHTML = state.scale.toFixed(1)
    update_mouse_pos()
}

// @ts-ignore
render_element.onmousewheel = function (e) {
    e.preventDefault();
    // Zoom in or out based on the cursor position on the current visible screen, limit zoom to 0.1 - 10
    const delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
    if (delta == 0) return;

    // Cursor position on the current visible screen scaled to viewBox dimensions
    const x = map(mouse_pos.x, 0, mouse_pos.width, 0, 100) // 0 to 100% relative to last viewBox dimensions
    const y = map(mouse_pos.y, 0, mouse_pos.height, 0, 100) // 0 to 100% relative to last viewBox dimensions

    zoom_into_point(x, y, delta)
}

render_element.addEventListener("mousedown", (e) => {
    // Only on middle mouse button or right mouse button
    if (e.button != 1 && e.button != 2) return
    e.preventDefault()
    isDragging = true
    start = { x: e.clientX, y: e.clientY }
})
// On touch devices
render_element.addEventListener("touchstart", (e) => {
    if (e.touches.length) {
        e.preventDefault()
        isDragging = true
        start = { x: e.touches[0].clientX, y: e.touches[0].clientY }
    }
})

render_element.addEventListener("mouseup", (e) => { if (isDragging) e.preventDefault(); isDragging = false })
render_element.addEventListener("mouseleave", (e) => { isDragging = false })
render_element.addEventListener("touchend", (e) => { if (isDragging) e.preventDefault(); isDragging = false })

/* disable right click */
render_element.addEventListener('contextmenu', e => e.preventDefault());

const update_zoom_pan = () => {
    const { x, y, width, height } = state.viewBox
    const viewBox = [x, y, width, height].map(v => v.toFixed(3)).join(" ")
    if (state.element) state.element.setAttribute("viewBox", viewBox)
}

update_zoom_pan()

code_element.innerHTML = zpl_test_sample

let timeout = null
let refresh_count = 0
const update_svg = () => {
    refresh_count++
    clearTimeout(timeout)
    timeout = setTimeout(() => { // @ts-ignore
        const zpl = code_element.value
        const t = +new Date()
        const { width, height } = render_element.getBoundingClientRect()
        // @ts-ignore
        state.svg_content = zpl2svg(zpl, { width, height, custom_class: "custom-svg-window" })
        const render_time = +new Date() - t
        console.log("Render time:", render_time, "ms")
        span_conversion_time.innerHTML = render_time + " ms"
        output_element.innerHTML = state.svg_content
        render_element.innerHTML = state.svg_content
        download_zpl.classList.remove("hidden")
        download_svg.classList.remove("hidden")
        download_png.classList.remove("hidden")
        const exists = state.element
        state.element = document.querySelector(".custom-svg-window")
        if (!exists && state.element && !state.viewBoxBase) {
            const viewBox = state.element.getAttribute("viewBox") || "0 0 1000 1000"
            const [x, y, width, height] = viewBox.split(" ").map(parseFloat)
            state.viewBoxBase = { x, y, width, height }
            state.viewBox = { x, y, width, height }
        }
        update_zoom_pan()
    }, refresh_count == 1 ? 0 : 50)
}

setTimeout(update_svg, 50)


code_element.addEventListener("input", update_svg)

button_svg.addEventListener("click", (e) => {
    e?.preventDefault()
    div_svg.classList.remove("hidden")
    div_raw.classList.add("hidden")
    button_svg.classList.add("active")
    button_raw.classList.remove("active")
})

button_raw.addEventListener("click", (e) => {
    e?.preventDefault()
    div_svg.classList.add("hidden")
    div_raw.classList.remove("hidden")
    button_svg.classList.remove("active")
    button_raw.classList.add("active")
})

/** @type { (filename: string, content: string) => void } */
const download_file = (filename, content) => {
    const blob = new Blob([content], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = filename
    a.click()
    URL.revokeObjectURL(url)
}

let download_zpl_active = false
download_zpl.addEventListener("click", (e) => {
    if (download_zpl_active) return;
    download_zpl_active = true;
    setTimeout(() => download_zpl_active = false, 1000);
    e?.preventDefault() // @ts-ignore
    download_file("label.zpl", code_element.value)
})

let download_svg_active = false
download_svg.addEventListener("click", (e) => {
    if (download_svg_active) return;
    download_svg_active = true;
    setTimeout(() => download_svg_active = false, 1000);
    e?.preventDefault() // @ts-ignore
    download_file("label.svg", state.svg_content)
})


let export_png_active = false
function export_png(filename, svg) {
    if (export_png_active) return;
    export_png_active = true;
    setTimeout(() => export_png_active = false, 5000);
    // Create a Blob from the SVG string
    // Handle isTrusted error
    if (!svg) {
        export_png_active = false;
        console.error("No SVG content to export.");
        return;
    }
    // The svg can include embedded images, which can be loaded as data URLs and therefore can trigger a security warning.
    // To avoid this, we can use a Blob URL to load the SVG image into an Image object.
    const svgBlob = new Blob([svg], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(svgBlob);
    const temp_canvas = document.createElement('canvas');
    const img = new Image();
    img.onload = function () {
        // Ensure canvas matches the SVG dimensions
        temp_canvas.width = img.width;
        temp_canvas.height = img.height;

        // Draw the image onto the canvas
        const ctx = temp_canvas.getContext('2d');
        if (!ctx) {
            export_png_active = false;
            console.error("Failed to get 2D context for canvas.");
            URL.revokeObjectURL(url);
            return;
        }
        ctx.clearRect(0, 0, temp_canvas.width, temp_canvas.height);
        ctx.drawImage(img, 0, 0);

        // Convert canvas to PNG data URL
        const pngDataUrl = temp_canvas.toDataURL('image/png');

        // Properly trigger a file download
        const a = document.createElement('a');
        a.href = pngDataUrl;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);

        export_png_active = false;

        // Revoke the object URL
        URL.revokeObjectURL(url);
    };

    img.onerror = function (e) {
        export_png_active = false;
        console.error(`Failed to load SVG for conversion. Error: ${JSON.stringify(e)}`);
        URL.revokeObjectURL(url);
    };

    // Start loading the image
    img.src = url;
}

download_png.addEventListener("click", () => export_png("label.png", state.svg_content))