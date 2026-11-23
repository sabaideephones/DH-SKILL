---
name: "dh-video"
description: "Làm video dọc 9:16 chuẩn DH (quảng cáo công trình hoặc video nội bộ/an toàn/đào tạo), giọng Việt hoặc Lào bằng AI Studio, phụ đề song ngữ Việt–Lào, logo và màu DH."
---

# Video chuẩn DH (bản dùng chung, cập nhật 23/11/2026)

Video mẫu:
- `DH_quangcao_Bravat_68s.mp4`: quảng cáo công trình, 15 cảnh.
- `DH_noibo_khong_dot_van_cong_nghiep.mp4`: video nội bộ an toàn, 11 câu, 69 giây.

## 0. Quy tắc bắt buộc
- Trả lời người dùng bằng **tiếng Việt**.
- **Đề xuất kế hoạch và kịch bản trước. Chỉ bắt tay làm khi người dùng nói "chốt".** Câu hỏi nào người dùng chưa trả lời thì tự đề xuất mặc định và ghi rõ trong bản đề xuất.
- Tự làm hết các bước qua Claude in Chrome (người dùng thường không ngồi máy tính). Nếu có nhiều Chrome đang kết nối thì hỏi người dùng chọn máy nào, không tự chọn.
- Không hỏi, không tự nhập mật khẩu hay API key. Nếu trang yêu cầu đăng nhập thì nhờ người dùng.
- Không đưa vào video điều chưa được xác nhận (hạng mục đã làm, số liệu, tên khách). Chưa chắc thì dùng câu chung và báo lại người dùng.
- Hỏi trước khi ghi tên công trình hoặc tên khách lên video.
- Video quảng cáo: **không ghi hotline** (chính sách TikTok); kết bằng lời mời nhắn tin, logo và tên công ty.
- Tên công ty dùng trên video: **D AND H CONSTRUCTION AND DECORATION CO., LTD**. Không dùng tên cũ.
- Thông tin pháp lý và số liệu: tra web trước, ghi mức độ chắc chắn (ví dụ "có thể bị phạt tới…"). Không khẳng định quá những gì nguồn nói.
- Phụ đề tiếng Lào do AI dịch: khi giao luôn nhắc người dùng nhờ người Lào đọc lại.

## 1. Đề xuất (chờ "chốt")
- Định dạng: dọc 1080x1920, 30 fps, dài 30–90 giây. Bản 60–90 giây truyền đạt rõ ý hơn.
- Mỗi câu thoại là một cảnh. Trình bày kịch bản theo cảnh, mỗi cảnh ghi câu thoại kèm phụ đề ngôn ngữ thứ hai.
- Câu hỏi cần hỏi: người xem là ai (nội bộ hay công khai), giọng nam hay nữ, giọng Bắc hay Nam, có dùng logo hoặc ảnh thật không, có cần phụ đề Lào không.

### Mặc định theo loại video
| | Quảng cáo công trình | Nội bộ / an toàn / đào tạo |
|---|---|---|
| Giọng | Nữ, dí dỏm (Tavi) | Nam, nghiêm túc, giọng Bắc (Daro) |
| Ngôn ngữ chính | Lào | Việt |
| Phụ đề | Lào trên, Việt dưới | Việt trên, Lào dưới |
| Nhạc | 112 bpm, vui | 90 bpm, trầm |
| Ảnh | Ảnh thật từ Drive | Đồ họa động, không ảnh người thật |

### Nhịp quảng cáo công trình (15 câu, khoảng 68 giây)
1. Nỗi đau hài: ảnh hiện trạng, khách đi vào rồi quay ra.
2. Chủ shop than thở.
3. Thợ hẹn "ມື້ອື່ນ" (lịch nhảy năm).
4. Logo D&H.
5. Đo đạc và thiết kế.
6. Khách ưng rồi mới làm (dấu "ພໍໃຈ ✓").
7. Thi công tua nhanh, có thanh tiến độ.
8. Cận cảnh chi tiết.
9. Bụi bay rồi chổi quét sạch.
10. Trước / sau.
11. Hoàn thành, hiện tên công trình.
12. Các góc đẹp (hiệu ứng chụp ảnh).
13. Khai trương (hoa giấy).
14. Dịch vụ trọn gói: ຮ້ານຄ້າ/ໂຊຣູມ/ຮ້ານກາເຟ/ເຮືອນ; ອອກແບບ→ຜະລິດ→ຕິດຕັ້ງ.
15. Kêu gọi nhắn tin: "ທັກຫາ D&H ເລີຍ!"

### Nhịp video nội bộ (8–12 câu, khoảng 60–75 giây)
1. Mở đầu: cảnh báo thẳng vào vấn đề, không màu mè quảng cáo. Thẻ "⚠ CẢNH BÁO AN TOÀN".
2. Nguyên nhân hoặc thành phần (thẻ chip).
3. Hậu quả (khói, chất độc, tai nạn…).
4. Vì sao giải pháp "nghe có vẻ được" thật ra không được (ví dụ "Không khói ≠ Không độc").
5. Ai bị ảnh hưởng: thợ, hàng xóm, nơi nhạy cảm gần xưởng.
6. Pháp luật: mức phạt dạng thẻ đếm số, có dấu "PHẠT".
7. Quy định của xưởng: đánh số 1, 2, 3…
8. Kết: "Xưởng sạch · Anh em khỏe · DH làm ăn lâu dài", logo và tên công ty.

## 2. Lấy ảnh công trình từ Google Drive (video có ảnh thật)
- Tìm thư mục bằng tool Google Drive: `search_files` với `title contains '...'`, rồi `parentId = '...'` để liệt kê. Thư mục con thường gồm: Hiện trạng, thi công, Hoàn thành.
- **Không** tải ảnh bằng `download_file_content` (base64 quá lớn).
- Mở tab `drive.google.com` trong Chrome, chạy JS: `fetch('https://drive.google.com/thumbnail?id=ID&sz=w1800',{credentials:'include'})`, vẽ lên canvas, nén `toDataURL('image/jpeg',0.8)`.
- Dựng bảng ảnh nhỏ (contact sheet) trong trang, chụp màn hình để chọn ảnh.
- Gom nhiều ảnh thành **một gói** khoảng 4–5 MB: `[{name:'pack0', b64: JSON.stringify([{name,b64},...])}]`, rồi chuyển về qua trang trung chuyển (mục 4).

## 3. Giọng đọc: Google AI Studio (giao diện tháng 11/2026)
- **Tiếng Lào: chỉ dùng AI Studio.** MiniMax đọc sai tiếng Lào.
- **Tiếng Việt:** ưu tiên AI Studio, rồi MiniMax, rồi ElevenLabs.

### Tạo giọng
1. Mở `aistudio.google.com/generate-speech` và bấm **Create new dialog**.
2. Bấm ô Speaker ở cột phải để mở Speaker settings. Lọc **Gender**: Masculine/Feminine. Chọn giọng: **Daro** (nam, chắc, trầm) hoặc **Tavi** (nữ). Đóng bảng.
3. Bấm **Style**, gõ mô tả bằng tiếng Anh vào ô "Describe the voice style", ví dụ: `Northern Vietnamese (Hanoi) accent, serious and clear safety briefing to factory workers, steady medium pace`. Nhấn Enter, rồi Escape.
4. Click vào ô chữ và `type` toàn bộ kịch bản, các câu cách nhau bằng ` ... `.
   - **Không gõ dấu `<`**: nó mở menu tag. `<long pause>` cũng bị bỏ qua.
   - Viết số và ký hiệu thành chữ để đọc đúng, ví dụ "PM hai chấm năm".

### Lấy file âm thanh
Thẻ `<audio>` giờ chỉ chứa file rỗng 0,04 giây vì âm thanh được phát qua Web Audio. Phải gài móc **trước khi bấm Run**:
```js
window.__pcm=[];const AC=window.AudioContext||window.webkitAudioContext;
const ocb=AC.prototype.createBuffer;AC.prototype.createBuffer=function(...a){const b=ocb.apply(this,a);window.__pcm.push(b);return b};'ok'
```
- Bấm **Run**. Chờ đến khi `window.__pcm.length` không tăng nữa (khoảng 30–40 giây cho 1 phút giọng). Tổng thời lượng = `sum(b.length)/24000`.
- Ghép thành WAV 16-bit mono 24 kHz ngay trong trang, rồi đóng gói và thêm nút copy:
```js
const bs=window.__pcm;const n=bs.reduce((s,b)=>s+b.length,0);const buf=new ArrayBuffer(44+n*2),dv=new DataView(buf);
const w=(o,s)=>{for(let i=0;i<s.length;i++)dv.setUint8(o+i,s.charCodeAt(i))};
w(0,'RIFF');dv.setUint32(4,36+n*2,true);w(8,'WAVEfmt ');dv.setUint32(16,16,true);dv.setUint16(20,1,true);dv.setUint16(22,1,true);dv.setUint32(24,24000,true);dv.setUint32(28,48000,true);dv.setUint16(32,2,true);dv.setUint16(34,16,true);w(36,'data');dv.setUint32(40,n*2,true);
let o=44;for(const b of bs){const d=b.getChannelData(0);for(let i=0;i<d.length;i++){dv.setInt16(o,Math.max(-1,Math.min(1,d[i]))*32767,true);o+=2}}
const u8=new Uint8Array(buf);let s='';for(let i=0;i<u8.length;i+=0x8000)s+=String.fromCharCode.apply(null,u8.subarray(i,i+0x8000));
window.__json=JSON.stringify([{name:'voice.wav',b64:btoa(s)}]);
const btn=document.createElement('button');btn.id='dhcopy';btn.textContent='COPY';btn.style.cssText='position:fixed;top:10px;left:40%;z-index:999999;padding:20px 40px;background:#d4ae6c;font-size:20px';
btn.onclick=()=>navigator.clipboard.writeText(window.__json).then(()=>btn.textContent='COPIED');document.body.appendChild(btn);window.__json.length
```
- Tìm nút bằng `find` ("COPY button") và bấm bằng `computer` với `ref`, để có thao tác của người dùng thật.

### Giọng dự phòng
- **MiniMax** (`replicate.com/minimax/speech-02-hd`):
  - Mở tab JSON, đặt input bằng `monaco.editor.getModels()[0].setValue(JSON)`.
  - Input gồm `voice_id` và `language_boost:'Vietnamese'`.
  - Lấy file mp3 từ `audio.src` bằng fetch trong trang.
- **ElevenLabs**: tạo giọng xong thì vào tab **History**, bấm vào mục vừa tạo, rồi lấy `audio.src`.

## 4. Trang trung chuyển (đưa dữ liệu từ Chrome về máy làm việc)
- Mỗi người dùng cần **một trang trung chuyển riêng do chính mình sở hữu**, vì `read_asset` chỉ đọc được artifact của người dùng.
- Nếu chưa có trang: dùng `list_artifacts` với query "DH Voice Relay" để tìm. Không có thì publish trang HTML ở cuối file này, tiêu đề **DH Voice Relay**.
- Cách dùng:
  1. Mở trang trung chuyển trong một tab mới, cuộn lên đầu trang, click vào ô textarea, nhấn `cmd+v`.
  2. Trang hiện dòng `tên ✓ id`.
  3. Đọc về bằng `read_asset(slug, id, max_bytes=4194304)`. File lớn sẽ báo lỗi "exceeds maximum allowed tokens" và lưu kết quả ra một file. Đây là bình thường.
  4. Giải mã bằng Python: `json.load` file đó, lấy `[1]['text']`, bỏ thẻ `untrusted-document-…` bằng regex. Dòng đầu là tên file, phần còn lại là base64. Với gói ảnh thì phần còn lại là JSON, `json.loads` rồi giải mã từng ảnh.
- **Logo DH: dùng file có sẵn trong skill**, không cần tải:
  - `assets/logo_house.png` (272x240, nền tối gần màu nền video DH): hình ngôi nhà DH đã cắt sẵn. Dùng cho góc trên trái (64 px) và màn kết (khoảng 400 px).
  - `assets/dh-icon-512.png`: icon gốc 512x512, có chữ "CÔNG TY" bên dưới.
  - Copy vào thư mục làm việc: `cp <thư mục skill>/assets/logo_house.png ./`.
  - Chỉ khi không tìm thấy file mới lấy từ `https://congty.dhlaos.com/icon-512.png`: mở bằng Chrome, chuyển về qua trang trung chuyển, rồi cắt bằng PIL `crop((120,85,392,325))`.
- Làm xong thì đóng hết các tab Chrome đã mở.

## 5. Tách câu và đặt nhịp giọng
1. Dò khoảng lặng: `ffmpeg -i voice_raw.wav -af silencedetect=noise=-35dB:d=0.2 -f null -`. Gộp các khoảng lặng cách nhau dưới 0,05 giây thành một.
2. Tách đúng N câu bằng quy hoạch động: chọn N−1 khoảng lặng gần vị trí dự kiến (tính theo **số âm tiết** tiếng Việt, tốc độ đều), ưu tiên khoảng lặng dài.
3. Kiểm tra: tốc độ hợp lý là **0,25–0,33 giây mỗi âm tiết**. Câu nào lệch nhiều thì xem lại từng khoảng lặng và suy luận lại ranh giới bằng tay. Câu có dấu chấm ở giữa thường có khoảng nghỉ dài bên trong.
4. Cắt từng câu (lùi 0,06 giây ở đầu, thêm 0,10 giây ở cuối, fade 10 ms) rồi ghép thành `voice_long.wav` với khoảng nghỉ tự đặt:
   - đầu video 0,9 giây; giữa các câu 0,75–0,8 giây;
   - 1,1 giây trước phần chuyển ý lớn (logo, pháp luật, quy định, kết);
   - cuối video 2,4 giây.
5. Ghi `timing.json` gồm `{timing:[[bắt đầu, kết thúc],…], total}`. Mỗi cảnh bắt đầu sớm hơn câu đọc 0,35 giây.
6. Máy làm việc không có ASR (chặn mạng tới HuggingFace). Khi giao, nhắc người dùng kiểm tra chỗ phụ đề có thể lệch.

## 6. Dựng cảnh: `scene.html` với hàm `render(t)`
- Thư mục làm việc: `/home/claude/dhvid-<tên>`.
- Cài: `npm i puppeteer-core @fontsource/noto-sans-lao @fontsource/be-vietnam-pro @fontsource/plus-jakarta-sans`. Nạp font bằng `<link>` tới các file css trong node_modules.
- Nên tách `scene_tpl.html` (có chỗ giữ `__S__`, `__T__`, `__TOTAL__`) và `gen.py` để chèn script.json và timing.json vào.
- **Không xâu chuỗi lệnh bằng `&&` sau một lệnh có thể lỗi vô hại** (ví dụ `cp` file vào chính nó).

### Chuẩn hình ảnh DH
- Nền radial `#2a241c` → `#141215` → `#0b0a0c`, có lưới vàng mờ 90 px chạy chậm. Có thể thêm lớp đỏ mờ (`rgba(229,83,75,.28)`) cho cảnh cảnh báo.
- Màu: vàng `#d4ae6c` và `#f0d49a`; giấy `#f6f4ef`; xanh `#3fbf7f`; đỏ `#e5534b`.
- Góc trên bên trái: logo ngôi nhà 64 px kèm nhãn ("DH · NỘI BỘ XƯỞNG" hoặc tên chiến dịch). Thanh tiến độ vàng cao 8 px ở mép trên.
- Thẻ tiêu đề cảnh dạng viên thuốc viền vàng, cách đỉnh 150 px, chữ 34 px đậm, giãn chữ 4 px. Cảnh cảnh báo dùng viền đỏ, cảnh quy định dùng viền xanh.
- Tiêu đề lớn: Be Vietnam Pro 900, cỡ 70–120 px.
- **Phụ đề hai dòng**, nền đen 60%, bo góc 22 px, cách đáy 140 px:
  - dòng chính 40 px chữ trắng, đậm 600;
  - dòng phụ 30–32 px màu `#f0d49a`;
  - tiếng Lào dùng Noto Sans Lao (font này không có chữ Latin nên khai báo dự phòng Be Vietnam Pro).
- Chuyển cảnh: crossfade 0,35 giây. Phần tử xuất hiện kiểu pop: mờ dần vào, trượt lên 40 px, ease back.
- Ảnh ngang 4:3 cho tràn màn hình (khung 2560x1920) và trượt ngang (Ken Burns). Ảnh dọc dùng khung 1080x1920.
- Emoji hiển thị được trong Chrome headless (Noto Color Emoji).

### Thành phần có sẵn
- **Quảng cáo:** thẻ ảnh polaroid; người que đi vào rồi quay ra; bong bóng chat; lịch nhảy năm; logo có tia sáng xoay; tia laser đo và mặt bằng vẽ dần; dấu ພໍໃຈ ✓; dải ảnh thi công kèm thanh % và "⏩ x16"; bụi bay rồi chổi quét; thanh trượt trước/sau; khung ngắm "● REC"; hoa giấy; thẻ dịch vụ; nút CTA nhấp nháy.
- **Nội bộ:**
  - biển cấm (ngọn lửa SVG, vạch gạch vẽ dần bằng stroke-dashoffset);
  - tấm ván MDF/MFC/Ván ép xếp hàng kèm thẻ chip thành phần;
  - khói vẽ bằng canvas bốc từ lò, thẻ chất độc nổi lên trong khói;
  - thẻ "Quảng cáo / thực tế" kèm hàng ✗;
  - người que đứng cạnh lò, khói bay vào mặt, vòng cảnh báo đỏ nhấp nháy;
  - vòng khói lan từ xưởng DH ra các chip 🏠 / 🏥;
  - thẻ mức phạt đếm số tăng dần kèm dấu "PHẠT" đóng xuống;
  - lịch 12 tháng tô đỏ các tháng cấm, chip 📞 rung;
  - hàng quy định có vòng số vàng;
  - màn kết có logo, tia sáng xoay và tên công ty.
- Kiểm tra trước khi render: chụp 10–12 khung bằng `render.js --frames t1,t2,… fr`, ghép thành ảnh tổng bằng PIL, xem lại. Cắt phóng to phần phụ đề Lào để kiểm tra dấu.

### render.js
```js
const puppeteer=require('puppeteer-core');const {spawn}=require('child_process');const path=require('path');
(async()=>{const browser=await puppeteer.launch({executablePath:'/usr/bin/google-chrome',args:['--no-sandbox','--allow-file-access-from-files','--disable-gpu']});
const page=await browser.newPage();await page.setViewport({width:1080,height:1920});
await page.goto('file://'+path.resolve('scene.html'),{waitUntil:'networkidle0'});await page.evaluate(()=>document.fonts.ready);
if(process.argv[2]==='--frames'){for(const t of process.argv[3].split(',').map(Number)){await page.evaluate(t=>render(t),t);await page.screenshot({path:`${process.argv[4]}_${t}.jpg`,type:'jpeg',quality:85})}await browser.close();return}
const a=+process.argv[2],b=+process.argv[3],out=process.argv[4],tmp=out.replace(/\.mp4$/,'.tmp.mp4');
const ff=spawn('ffmpeg',['-y','-v','error','-f','image2pipe','-framerate','30','-c:v','mjpeg','-i','-','-c:v','libx264','-preset','veryfast','-crf','19','-pix_fmt','yuv420p','-r','30',tmp],{stdio:['pipe','inherit','inherit']});
for(let i=0,n=Math.round((b-a)*30);i<n;i++){await page.evaluate(t=>render(t),a+i/30);const buf=await page.screenshot({type:'jpeg',quality:92});if(!ff.stdin.write(buf))await new Promise(r=>ff.stdin.once('drain',r))}
ff.stdin.end();await new Promise(r=>ff.on('close',c=>{if(c===0)require('fs').renameSync(tmp,out);r()}));await browser.close()})();
```
- Chia tổng thời lượng thành **8 đoạn render song song** (`node render.js a b partI.mp4 &` … `wait`).
- Ghép bằng `ffmpeg -f concat -i list.txt -c copy video.mp4`. 69 giây render mất khoảng 1–2 phút.

## 7. Nhạc nền tự soạn (numpy, 44,1 kHz stereo)
- **Quảng cáo:** 112 bpm, vòng Am–F–C–G.
  - Gồm pad, bass nảy, arp bắt đầu sau logo, kick/snare/hi-hat.
  - Hiệu ứng: riser và impact ở logo, whoosh khi chuyển cảnh, tích tắc ở cảnh lịch, "thịch" và chuông ở dấu ພໍໃຈ, màn trập, hoa giấy, lấp lánh ở cảnh trước/sau.
- **Nội bộ:** 90 bpm, vòng Dm–Bb–F–C.
  - Gồm pad 2 lớp lệch tông nhẹ, bass đập theo phách tắt dần, hi-hat nhẹ từ ô nhịp thứ 2.
  - Whoosh tiếng ồn lọc ở mỗi lần chuyển cảnh.
- Fade vào 0,3 giây, fade ra 1,6 giây, chuẩn hoá đỉnh 0,85.

## 8. Trộn âm
```
ffmpeg -i video.mp4 -i music.wav -i voice_long.wav -filter_complex "[2:a]aresample=44100,pan=stereo|c0=c0|c1=c0,volume=1.6,apad[vo];[vo]asplit[vo1][vo2];[1:a]volume=0.35[mu];[mu][vo2]sidechaincompress=threshold=0.03:ratio=6:attack=20:release=350[duck];[duck][vo1]amix=inputs=2:normalize=0:duration=first,alimiter=limit=0.95[a]" -map 0:v -map "[a]" -c:v copy -c:a aac -b:a 192k -shortest out.mp4
```
- Nhạc dùng `volume=0.35` cho video nội bộ, `0.55` cho quảng cáo.
- Kiểm tra: `volumedetect` (mean khoảng −17 dB), tổng thời lượng, và một khung giữa video.

## 9. Giao hàng
- Đặt tên file kiểu `DH_<loại>_<chủ đề>.mp4`. Gửi bằng SendUserFile (`display: render`).
- Báo ngắn những điểm tự quyết thay người dùng: giọng nào, câu nào nói chung chung, chỗ phụ đề có thể lệch, phụ đề Lào cần người Lào đọc lại.
- Cần sửa thì chỉ render lại cảnh hoặc đoạn liên quan rồi ghép lại. Chỉ thay tiếng thì dùng `-c:v copy`.

## Phụ lục: HTML trang trung chuyển (publish nếu người dùng chưa có)
```html
<!doctype html><html><head><meta charset=utf8><title>DH Voice Relay</title>
<style>body{background:#f6f4ef;color:#1d1a16;font:16px/1.5 system-ui,sans-serif;padding:24px 16px;max-width:640px;margin:auto}h1{font-size:20px;color:#9c7637}li{margin:6px 0;word-break:break-all}</style></head><body>
<h1>DH · chuyển giọng đọc vào video</h1><p>Trang này nhận dữ liệu (giọng, ảnh, logo) và gửi về cho Claude.</p>
<textarea id="drop" placeholder="Dán dữ liệu vào đây" style="width:100%;height:160px;font:12px monospace;border-radius:10px;padding:10px"></textarea><ol id="log"></ol>
<script>
const log=m=>{const li=document.createElement('li');li.textContent=m;document.getElementById('log').appendChild(li)};
let P=null;const getAssets=()=>P||(P=(window.claude?.use?.("assets")||Promise.resolve(null)).catch(()=>null));
getAssets().then(a=>log(a?'Sẵn sàng nhận file.':'Không có quyền lưu file (assets).'));
document.getElementById('drop').addEventListener('paste',async e=>{e.preventDefault();const txt=e.clipboardData.getData('text');let items;try{items=JSON.parse(txt)}catch{log('Dữ liệu không hợp lệ ('+txt.length+' ký tự)');return}
const a=await getAssets();if(!a){log('✗ no assets');return}
for(const d of items){try{const r=await a.upload(new Blob([d.name+'\n'+d.b64],{type:'text/plain'}),{type:'text/plain'});log(d.name+' ✓ '+r.id)}catch(err){log(d.name+' ✗ '+(err.code||err.message||err))}}log('Xong.')});
</script></body></html>
```
Khi publish trang này, cần khai báo capability `assets` cho artifact (xem `describe_capabilities`).
## Thư mục `templates/` đi kèm skill
- `scene_tpl.html`: cảnh mẫu của video nội bộ "Không đốt ván công nghiệp" (11 cảnh, đủ các thành phần ở mục 6). Copy về rồi sửa theo kịch bản mới.
- `gen.py`: chèn `script.json` (danh sách `{vi, lo}`) và `timing.json` vào template để tạo `scene.html`.
- `render.js`: render khung kiểm tra hoặc từng đoạn mp4.
- `relay.html`: trang trung chuyển, publish nếu người dùng chưa có.

## Thư mục `assets/`
- `logo_house.png`, `dh-icon-512.png`: logo DH (xem mục 4).
