# 🎵 Newtro Album Library Manager

**Reviving Retro Audio Tech with Modern Web Technologies**

---

## 🚀 Quick Start

### Desktop App (Electron) - Recommended for End Users

**For End Users:**
1. Download the latest `.dmg` (macOS) or `.exe` (Windows) from [Releases](#)
2. Install and launch **Newtro Library**
3. Import your music library
4. Enjoy high-quality local music playback with USB DAC support!

**For Developers - Building the Desktop App:**
```bash
# First time setup
./scripts/setup.sh                  # macOS/Linux (or scripts/setup.bat on Windows)
./scripts/download-python.sh        # Download portable Python for bundling

# Development mode (with hot-reload)
npm run start:dev

# Development mode with Debug Tools
npm run start:dev:debug             # Shows 🔧 Debug tab for backend diagnostics

# Production build (self-contained .app)
npm run build:mac:bundle    # Creates distributable .app with bundled Python
```

**Debug Mode:**
The Debug tab provides comprehensive backend diagnostics and is **hidden by default** for security and cleaner UI. Enable it with:
```bash
npm run start:debug                 # Production mode with debug tab
npm run start:dev:debug             # Development mode with debug tab
DEBUG_MODE=true npm start           # Using environment variable
electron . --debug-mode             # Direct flag
```

**Debug Features:**
- ✅ Backend connection status & health checks
- 📂 All system paths (app, logs, backend)
- ⚡ Backend process info (PID, port, uptime)
- 🧪 Endpoint test results with response times
- 🔄 Restart backend button (Electron only)
- 📄 Load and view logs from multiple sessions
- 📥 Export complete diagnostic data to JSON

See **[Debug Mode Documentation](documents/DEBUG_MODE.md)** and **[Backend Debug Tool](documents/BACKEND_DEBUG_TOOL.md)** for complete details.

**Desktop app features:**
- 🎵 **Bundled Python** - no installation required for end users
- 📦 **Self-contained** - double-click to run from Finder
- 🔌 **USB DAC support** - high-quality audio output
- 📝 **Enhanced logging** - saved to `~/Library/Application Support/Newtro Library/logs/`

See **[Electron Build Workflow](#electron-build-workflow)** below for details.

---

## 🔧 Quick Command Reference

| Command | Description |
|---------|-------------|
| `npm run start:dev` | Development mode with hot-reload (no debug) |
| `npm run start:dev:debug` | Development mode **with Debug tab** |
| `npm run start:debug` | Production mode **with Debug tab** |
| `npm start` | Production mode (normal, no debug tab) |
| `npm run build:mac:bundle` | Build distributable macOS app |
| `electron . --debug-mode` | Launch with debug flag directly |
| `DEBUG_MODE=true npm start` | Enable debug via environment variable |

**Debug Mode:** The 🔧 Debug tab is hidden by default for security and cleaner UI. Enable it with the commands above to access:
- Backend connectivity diagnostics and endpoint testing
- Process monitoring with PID, port, and uptime
- Log viewer (last 100 lines from current + 3 recent sessions)
- Backend restart functionality (Electron only)
- Complete diagnostic data export to JSON

**Common Debug Scenarios:**

| Issue | Solution |
|-------|----------|
| Backend not connecting | Open Debug tab → Check status → Click "Restart Backend" |
| Slow performance | Check "Response Time" and "Endpoint Tests" for bottlenecks |
| Backend crashes | Click "Load Logs" to see error messages before crash |
| Need log files | Check "Paths" section → Copy log directory path |

See **[Backend Debug Tool](documents/BACKEND_DEBUG_TOOL.md)** for detailed debugging capabilities and troubleshooting guide.

---

## 🧭 Project Overview
This project bridges **retro Newtro hardware** with a **modern, metadata-rich platform**: playback control, TOC editing, album library, auto metadata enrichment, and auto-recognition on reinsertion.

Available as a **native desktop app built with Electron**.

Built with **Angular**, **FastAPI**, **SQLite**, and **netmd.js** (WebUSB) for hardware communication.

---

## 🎯 Vision
Give Newtro a second life as a **smart, network-aware media system**. Preserve the physical experience; unlock modern metadata, automation, and remote control.

Key value:
* Local-first, no cloud dependency
* Rich UTF-8 metadata + artwork
* Seamless disc ↔ library synchronization
* Remote & multi-device control via standard browsers

---

## 🧩 Core Features
| Feature | Summary |
|---------|---------|
| Playback Control | Play / pause / next / previous / stop, current track + status display |
| TOC Reading & Editing | Load disc table-of-contents, edit titles, push back to disc |
| Metadata Enrichment | Auto Match via MusicBrainz + manual search fallback |
| Library Management | Persist albums locally with artwork, revision-friendly edits |
| **Tag System** | **Genre/style tags from MusicBrainz, filterable library, clickable chips** |
| Auto Recognition | Reinsert known disc → auto-select + ready-to-play session |
| Safe Overwrite Logic | Track count mismatch handled gracefully (no data loss) |
| **UPnP Network Broadcasting** | **Push now playing metadata to WiFi network in real-time** |
| Electron Bundled Stack | Backend managed and auto-started by Electron |
| Ecosystem Integration | Optional Wiim Mini UI / UPnP presence |

---

## � Audio Format Support & Quality Display

### Supported Audio Formats
The application supports comprehensive audio format detection with automatic metadata extraction:

| Format | Extension | Type | Metadata Support | Cover Art |
|--------|-----------|------|------------------|-----------|
| **MP3** | `.mp3` | Lossy | ID3 tags (v1/v2) | ✅ APIC frames |
| **FLAC** | `.flac` | Lossless | Vorbis comments | ✅ Pictures metadata |
| **M4A/AAC** | `.m4a` | Lossy | MP4 tags | ✅ MP4 'covr' atom |
| **MP4** | `.mp4` | Lossy | MP4 tags | ✅ MP4 'covr' atom |
| **ALAC** | `.alac`, `.m4a` | Lossless | MP4 tags | ✅ MP4 'covr' atom |
| **WAV** | `.wav` | Lossless | Limited metadata | ⚠️ Limited support |
| **OGG Vorbis** | `.ogg` | Lossy | Vorbis comments | ✅ Vorbis comments |
| **WMA** | `.wma` | Lossy | Windows Media tags | ✅ Windows Media |
| **DSD** | `.dsf`, `.dff` | Lossless Hi-Res | ID3 tags (DSF), DSDIFF tags | ✅ Embedded cover art |

**DSD Playback:** DSD (Direct Stream Digital) files are converted to high-quality PCM (88.2 kHz, 24-bit) on the server using FFmpeg for browser playback. See [DSD Playback Support](documents/DSD_PLAYBACK_SUPPORT.md) for details.

### Audio Quality Metadata Display
The player automatically extracts and displays audio quality information for all supported formats:

**Displayed Metrics:**
- **Sample Rate** - 44.1 kHz, 48 kHz, 96 kHz, 192 kHz, etc.
- **Bit Depth** - 16-bit, 24-bit, 32-bit
- **Bitrate** - 128 kbps, 320 kbps, 1411 kbps (for lossy formats)
- **Output Bitrate** - Displayed when Clarity Audio enhancement is enabled

**Hi-Res Audio Detection:**
A track is automatically identified as **Hi-Res** if:
- Sample rate **> 48,000 Hz** (e.g., 96kHz, 192kHz), **OR**
- Bit depth **> 16 bits** (e.g., 24-bit, 32-bit)

When playing hi-res audio, a **🎵 Hi-Res** badge appears in the player.

**Quality Display Across All Players:**
Quality information is consistently displayed in all three player interfaces:
- **Album Library Player** (mini player bar) - Shows bitrate and enhancement status
- **Fullscreen Player** - Complete quality details with source → output flow
- **Mini Player** (floating window) - Compact quality indicator with output bitrate

When **Clarity Audio** enhancement is enabled, all players display the **output bitrate** (e.g., "2304 kbps @ 96kHz/24-bit") to indicate active processing.

**Common Quality Levels:**
- **CD Quality**: 44.1 kHz / 16-bit (1411 kbps uncompressed)
- **Hi-Res Standard**: 96 kHz / 24-bit (2× CD quality)
- **Hi-Res Premium**: 192 kHz / 24-bit (4× CD quality)
- **DSD64**: 2.8224 MHz / 1-bit (DSD format)
- **DSD128**: 5.6448 MHz / 1-bit (DSD format)

**Note**: DSD playback requires USB DAC support (see [USB DAC Guide](./documents/USB_DAC_GUIDE.md))

### Album Cover Art Sources
Cover art is automatically extracted with intelligent fallback:

**Priority 1 - Folder Images:**
Searches for common image filenames in the album folder (all case variations):
- `cover.jpg`, `cover.png`, `cover.gif`, etc.
- `folder.jpg`, `folder.png`, etc.
- `front.jpg`, `front.png`, etc.
- `album.jpg`, `albumart.jpg`, `albumartsmall.jpg`, etc.

**Priority 2 - Embedded Cover Art:**
If no folder image is found, extracts from audio file metadata:
- **MP3**: ID3 APIC frames
- **FLAC**: Pictures metadata block
- **M4A/MP4/ALAC**: MP4 'covr' atom

**Supported Image Formats**: `.jpg`, `.jpeg`, `.png`, `.gif`, `.bmp`, `.webp`

### Visual Source Type Indicators
Albums are color-coded by audio quality in the library:

| Source Type | Color | Description |
|-------------|-------|-------------|
| **MP3, AAC, MP4, OGG, WMA** | 🟡 Yellow | Lossy compression formats |
| **FLAC, WAV, ALAC** | 🔵 Blue | Lossless audio formats |
| **DSD** | 🟣 Indigo/Purple | DSD hi-res format |
| **MiniDisc, CD, Vinyl** | 🟣 Purple | Physical media sources |

---

## �🌐 Ecosystem & Concepts
### Docking Station Concept
Hardware dock (e.g., SBC + touchscreen) turns a standard Newtro deck into a **smart terminal**: USB tethering, visual status, remote control.

### Ecosystem Flow
Newtro → USB → This stack (read TOC, expose metadata, UPnP broadcast) → Wiim Mini UI and/or browser clients consume now-playing + control.

![Dock concept](/documents/images/md_dock.PNG)  
![Remote concept](/documents/images/md_remote.PNG)

---

## 🖱️ Using the UI (Tutorial)
### High-Level Flow
```
 Insert Disc / Connect Device
     │
     ▼
   Load Disc (TOC)
     │
     ├── Auto Match succeeds? ──► YES ──► Prefill metadata
     │                             │
     │                             ▼
     │                       Review / Edit
     │                             │
     └── NO ─► Manual Search ─► Pick Release ─► Apply Metadata
                    │
                    ▼
                Track Count Alignment
                    │
                    ▼
            Save to Disc / Save to Library
                    │
                    ▼
             Later Reinsert Disc (USB)
                    │
                    ▼
           Auto Album Selection & Ready to Play
```

### Quick Start
1. Load Disc → view TOC
2. (Optional) Auto Match → or Manual Search → apply metadata
3. Edit titles as needed
4. Save to Disc and/or Library
5. Reinsert later → auto-recognized if exact metadata match

### Loading a Disc into TOC Editor and perform an album search for metadata
![UI Album Search](/documents/images/ui_album_search.png)

### Album merge between disc TOC and fetched metadata
![UI Album Merge](/documents/images/ui_album_merge.png)

### Manual Metadata Editing
* Edit track titles, artists, and other metadata fields as needed.
* Save changes to the disc or library.

### Track Count Alignment
| Situation | Result |
|-----------|--------|
| Disc > CD metadata | Only first N tracks overwritten; extras untouched |
| Disc < CD metadata | Only existing disc tracks filled; rest ignored |

### Album Library View
* Browse saved albums with cover art thumbnails.

![UI Album Library](/documents/images/ui_album_library.png)

### Album Library View Details
* Click album → view detailed metadata, track list, total duration.

![UI Album Library Details](/documents/images/ui_album_info.png)

### Album Playback Control
* Select album → play, pause, next, previous controls.

![UI Playback Control](/documents/images/ui_player.png)

### Editing Existing Albums
Library → Hamburger menu → Edit → TOC editor opens with stored metadata.

### Manual Metadata Editing
* Edit track titles, artists, and other metadata fields as needed.
* Save changes to the disc or library.



### Troubleshooting (UI)
| Issue | Cause | Fix |
|-------|-------|-----|
| No Auto Match | Rare edition / timing drift | Use Manual Search |
| Partial overwrite | Disc longer | Manually fill remaining |
| No auto-select | Title mismatch | Normalize spacing/case |

---

## �️ Developer Setup
### Prerequisites
Git ≥2.30 · Node 20+ · Python 3.11 · Chrome/Edge · NetMD-capable device

### Clone
```bash
git clone https://github.com/chrishuangcf/newtro-library.git
cd newtro-library
```

### .env Example
```env
APP_HOST=0.0.0.0
APP_PORT=8000
SQLITE_PATH=./.data/newtro_library.db
MUSIC_STORAGE_DIR=~/Music/NewtroLibrary
MUSICBRAINZ_ENABLED=true
DISCOGS_ENABLED=false
CDDB_ENABLED=true
LOG_LEVEL=INFO
```

### Desktop Development Workflow

```bash
# Install dependencies
npm install

# Launch Electron with Angular dev server and auto-managed backend
npm run start:dev

# Optional: expose advanced diagnostics in the UI during dev
npm run start:dev:debug
```

- The Electron process boots the Python backend automatically and restarts it if it crashes.
- Debug tooling (logs, health checks, backend restart) is available when using the `:debug` variants.
- To run the packaged app locally without the dev server, use `npm start` or `npm run start:debug`.

**Building distributables**

```bash
# macOS bundle with bundled Python and FFmpeg
npm run build:mac:bundle

# Mac App Store build pipeline
npm run build:mas

# Windows and Linux targets
npm run build:win
npm run build:linux
```

### Backend Service (Standalone Debugging)

Running the backend outside of Electron is useful for API debugging or profiling. This reuses the same SQLite database used by the app.

```bash
python -m venv .venv
source .venv/bin/activate
pip install -r backend/requirements.txt

export SQLITE_PATH=./.data/newtro_library.db
export APP_PORT=8000
cd backend
uvicorn app.main:api --host 0.0.0.0 --port $APP_PORT --reload
```

Notes:
- Stop the Electron app before starting a standalone backend so ports are free.
- Logs stream to the terminal; the `/healthz` endpoint confirms readiness.
- Environment variables such as `MUSIC_STORAGE_DIR` let you redirect imported audio.

#### Managing the Local Backend Service

When running the backend standalone, use these commands to control the service:

**Kill the backend:**
```bash
pkill -f "uvicorn app.main:api"
```

**Start the backend (with logging):**
```bash
cd backend
export SQLITE_PATH=../.data/newtro_library.db
export APP_PORT=8000
nohup python3 -m uvicorn app.main:api --host 0.0.0.0 --port 8000 --reload > /tmp/newtro-backend.log 2>&1 &
```

**Check if backend is running:**
```bash
# Check process
ps aux | grep uvicorn | grep -v grep

# Test API endpoint
curl http://localhost:8000/healthz
```

**View backend logs:**
```bash
tail -f /tmp/newtro-backend.log
```

**Restart backend (kill and start):**
```bash
# Kill existing
pkill -f "uvicorn app.main:api"

# Wait a moment
sleep 2

# Start fresh
cd backend
export SQLITE_PATH=../.data/newtro_library.db
nohup python3 -m uvicorn app.main:api --host 0.0.0.0 --port 8000 --reload > /tmp/newtro-backend.log 2>&1 &

# Verify it started
sleep 3 && curl http://localhost:8000/healthz
```

**Start UPnP broadcasting (after backend starts):**
```bash
curl -X POST http://localhost:8000/api/upnp/start
```

### Frontend Dev
```bash
cd frontend
npm install
npm start   # ng serve on http://localhost:5173
```
Dev UI: http://localhost:5173 (configure API base URL accordingly when backend is not Electron-managed).

---

## 🗄️ Database & Schema
Auto-initialized on first run. Minimal schema includes discs, tracks, artwork, multilingual metadata, external IDs.

Example manual init:
```bash
mkdir -p .data
sqlite3 ./.data/newtro_library.db < backend/schema.sql
```

Seed snippet:
```sql
INSERT INTO discs (disc_uid, title) VALUES ('demo-uid-123', 'Demo Disc');
INSERT INTO tracks (disc_id, track_no, title, artist, duration_ms) VALUES (1,1,'Demo Track','Unknown Artist',214000);
```

### Database Cleanup

To delete the database and start fresh (e.g., after schema migrations or for testing):

```bash
# Delete development database
rm -f <development directory>/newtro-album-library/backend/newtro.db

# Delete bundled app database
rm -f ~/Library/Application\ Support/newtro-library-electron/newtro.db
```

**Note:** The database will be automatically recreated with the latest schema on the next app launch.

---

## 🔌 USB DAC & High-Resolution Audio

### Exclusive Mode (Native Audio) Playback

**Newtro Library** supports **bit-perfect, exclusive mode audio playback** for audiophile-grade USB DACs, bypassing browser audio limitations.

**Features:**
- ✅ **True bit-perfect playback** up to 384kHz/32-bit
- ✅ **Exclusive hardware access** via macOS Core Audio (`afplay`)
- ✅ **No browser resampling** - direct FFmpeg → DAC pipeline
- ✅ **Configurable sample rate and bit depth** per DAC capability
- ✅ **DSD support** - automatic conversion to high-quality PCM

**Quick Setup:**

1. **Enable Exclusive Mode:**
   ```bash
   # Launch app
   open "dist-electron/mac/Newtro Library.app"
   
   # In Settings tab:
   # 1. Select your USB DAC
   # 2. Choose Sample Rate (e.g., 192kHz)
   # 3. Choose Bit Depth (e.g., 24-bit)
   ```

2. **Set System Default Output:**
   - Open **System Settings** → **Sound** → **Output**
   - Select your USB DAC as default
   - Open **Audio MIDI Setup** and set format to match (e.g., 192kHz/24-bit)

3. **Verify Quality:**
   ```bash
   # Check current playback settings
   ./scripts/check-playback-quality.sh
   
   # Test audio quality configuration
   ./scripts/test-audio-quality.sh
   
   # Expected output:
   # 🎵 Output Quality: 192.0kHz / 24-bit PCM
   # ✅ Exclusive mode enabled
   ```

**⚠️ Important:**
- `afplay` respects the **system audio format** set in **Audio MIDI Setup**
- You must manually configure your DAC format to match your desired quality
- Without matching system format, audio will be resampled by macOS

**Documentation:**
- **[Exclusive Mode Guide](documents/EXCLUSIVE_MODE_GUIDE.md)** - Complete user guide
- **[USB DAC Audio Quality](documents/USB_DAC_AUDIO_QUALITY.md)** - Quality settings and features
- **[Native Audio Fix](documents/NATIVE_AUDIO_FIX.md)** - Technical implementation details

### USB / WebUSB Access

**For USB DAC Setup:** See **[USB DAC Guide](documents/USB_DAC_GUIDE.md)** for comprehensive testing and troubleshooting.

**Linux udev rules (for hardware access):**
```bash
# Create udev rules file
sudo nano /etc/udev/rules.d/51-netmd.rules

# Add this line (replace vendor ID as needed)
SUBSYSTEM=="usb", ATTR{idVendor}=="054c", MODE="0666"

# Reload rules
sudo udevadm control --reload-rules
sudo udevadm trigger
```

**Browser Requirements:**
- Use Chrome, Edge, or Electron desktop app
- Firefox and Safari don't support WebUSB

---

## ✨ Clarity Audio Enhancement

### Professional Audio Enhancement with Enhancement Levels & Sound Field Presets

**Clarity Audio** is an intelligent audio enhancement system that applies high-quality digital signal processing (DSP) filters to improve sound quality across all audio formats. It features user-adjustable enhancement levels and genre-specific sound field presets.

**Key Features:**
- ✅ **Intelligent Quality Processing** - Preserves hi-res (≥88.2kHz/24-bit) or upsamples to 96kHz/24-bit
- ✅ **6-Stage Professional Filter Chain** - High-pass, presence boost, air boost, compression, stereo widening, limiter
- ✅ **3 Enhancement Levels** - Subtle, Moderate (default), Aggressive
- ✅ **8 Sound Field Presets** - Jazz, Metal, Pop, Classical, Rock, Electronic, Bass Boost, Off
- ✅ **Universal Format Support** - Works with MP3, FLAC, M4A, AAC, WAV, OGG, DSD, and all supported formats
- ✅ **Real-Time Quality Display** - Output bitrate shown in all three players
- ✅ **Automatic Fallback** - Gracefully falls back to original quality if processing fails

**Enhancement Pipeline:**
```
Source Audio → Quality Analysis → Adaptive Processing → Enhancement Level Filters → Sound Field Preset → Enhanced Output
   (Any)      (FFprobe detect)   (Preserve or 96kHz)   (Clarity filters)      (Genre EQ)      (96kHz/24-bit)
```

### Enhancement Levels (Clarity Audio)

Three levels of audio clarity enhancement with different intensities:

#### Subtle (🎵)
**Light touch for natural sound**
- **Frequency Response**:
  - Presence boost: +1.5dB @ 3-5kHz
  - Air enhancement: +1dB @ 10-16kHz
- **Dynamics**: Gentle compression (ratio 2:1, threshold -20dB)
- **Stereo**: Standard width
- **CPU Impact**: ~5-10% increase
- **Use Case**: Preserving original character while adding subtle clarity, already good quality audio

#### Moderate (✨) - Default
**Balanced enhancement**
- **Frequency Response**:
  - Presence boost: +2.5dB @ 3-5kHz
  - Air enhancement: +2dB @ 10-16kHz
  - Bass tightness: +1dB @ 80-120Hz
- **Dynamics**: Moderate compression (ratio 3:1, threshold -18dB)
- **Stereo**: Slight widening (1.2x)
- **CPU Impact**: ~10-15% increase
- **Use Case**: Best all-around enhancement for most music

#### Aggressive (🔥)
**Maximum clarity and punch**
- **Frequency Response**:
  - Presence boost: +4dB @ 3-5kHz
  - Air enhancement: +3dB @ 10-16kHz
  - Bass punch: +2dB @ 80-120Hz
- **Dynamics**: Strong compression (ratio 4:1, threshold -16dB)
- **Stereo**: Wide stereo image (2.0x)
- **Limiter**: -1dB ceiling for maximum perceived loudness
- **CPU Impact**: ~15-25% increase
- **Use Case**: Maximum impact for electronic/dance music or critical listening

### Sound Field Presets

Genre-optimized EQ curves and processing that can be combined with Clarity Audio enhancement:

#### Jazz (🎷)
**Warm, smooth, natural**
- **EQ Curve**:
  - Sub-bass cut: -1dB @ 35Hz (clean low end)
  - Warm bass: +2dB @ 80Hz
  - Presence boost: +3dB @ 2kHz (instruments forward)
  - Air enhancement: +2dB @ 12kHz (cymbals sparkle)
- **Dynamics**: Smooth compression (ratio 2.5:1)
- **Stereo**: Natural width (1.1x)

#### Metal (🎸)
**Powerful, tight, aggressive**
- **EQ Curve**:
  - Tight bass: +3dB @ 60Hz (palm mutes punch)
  - Low-mid scoop: -2dB @ 250Hz (clarity)
  - Aggression: +5dB @ 4kHz (guitar attack)
  - Extreme air: +3dB @ 16kHz (cymbals cut)
- **Dynamics**: Heavy compression (ratio 4:1)
- **Stereo**: Wide image (1.5x)

#### Pop (🎤)
**Bright, balanced, radio-ready**
- **EQ Curve**:
  - Sub control: -1dB @ 40Hz
  - Bass foundation: +2dB @ 100Hz
  - Vocal presence: +3dB @ 3kHz (vocals clear)
  - Sparkle: +2dB @ 10kHz
- **Dynamics**: Modern compression (ratio 3.5:1)
- **Stereo**: Wide vocals (1.3x)
- **Limiter**: -0.5dB (radio loudness)

#### Classical (🎻)
**Natural, spacious, dynamic**
- **EQ Curve**:
  - Deep foundation: +1dB @ 50Hz (orchestral weight)
  - Warmth: +1.5dB @ 120Hz
  - String detail: +2dB @ 2.5kHz
  - Room air: +2.5dB @ 8kHz (hall ambience)
- **Dynamics**: Gentle compression (ratio 1.5:1, preserve dynamics)
- **Stereo**: Natural width (1.0x)

#### Rock (🎵)
**Punchy, energetic, powerful**
- **EQ Curve**:
  - Deep punch: +3dB @ 70Hz (kick drum)
  - Low-mid control: -1dB @ 300Hz
  - Guitar edge: +4dB @ 3.5kHz
  - Cymbals: +2.5dB @ 12kHz
- **Dynamics**: Strong compression (ratio 3.5:1)
- **Stereo**: Wide guitars (1.4x)

#### Electronic (🎹)
**Deep bass, wide stereo, modern**
- **EQ Curve**:
  - Sub-bass: +4dB @ 40Hz (808s)
  - Bass boost: +3dB @ 80Hz
  - Synth clarity: +3dB @ 4kHz
  - High sparkle: +3dB @ 14kHz
- **Dynamics**: Extreme compression (ratio 4:1)
- **Stereo**: Maximum width (1.8x)
- **Limiter**: -0.3dB (club loudness)

#### Bass Boost (🔊 "It's All About Bass")
**Maximum low-end impact**
- **EQ Curve**:
  - Deep sub-bass: +8dB @ 35Hz (feel the rumble)
  - Sub-bass: +6dB @ 60Hz
  - Bass: +4dB @ 120Hz
  - Low-mid compensation: -1dB @ 250Hz (prevent mud)
- **Dynamics**: Heavy compression (ratio 3.5:1, bass focus)
- **Stereo**: Moderate width (1.2x)
- **CPU Impact**: ~8-12% additional
- **Special**: Red gradient button with pulsing animation

#### Off (🔇)
**Flat, neutral response**
- **Processing**: None (pass-through)

### Audio Processing Pipeline

When both Clarity Audio and Sound Field are enabled:

```
Source Audio
    ↓
96kHz/24-bit Upsampling
    ↓
Clarity Enhancement Filters (based on level: Subtle/Moderate/Aggressive)
    ↓
Sound Field Preset Filters (if selected)
    ↓
Output (Web Audio API or USB DAC)
```

**Example: Moderate + Jazz**
```
highpass=f=20,
equalizer=f=3000:width_type=o:width=2:g=3,
equalizer=f=6000:width_type=o:width=1.5:g=2,
acompressor=threshold=-18dB:ratio=3:attack=5:release=50,
extrastereo=m=1.5,
alimiter=level_in=1:level_out=0.9:limit=0.95,
equalizer=f=80:width_type=o:width=1:g=2,
equalizer=f=250:width_type=o:width=2:g=1,
equalizer=f=2000:width_type=o:width=2:g=3,
equalizer=f=5000:width_type=o:width=1.5:g=2,
acompressor=threshold=-20dB:ratio=2.5:attack=10:release=100,
extrastereo=m=1.3
```

### Quick Setup

1. Open **Settings** tab
2. Navigate to **Audio Quality Enhancement Settings**
3. **Enable Clarity Audio** toggle
4. **Select Enhancement Level**: Subtle, Moderate (default), or Aggressive
5. **(Optional) Select Sound Field Preset**: Choose genre-specific EQ or Off
6. Start playing any audio file
7. Look for **output bitrate** display in any player (e.g., "2304 kbps @ 96kHz/24-bit")

### Output Display

When Clarity Audio is enabled, **all three players** display enhanced quality information:
- **Album Library Player** (mini player bar) - Shows enhanced bitrate indicator
- **Fullscreen Player** - Complete quality chain with source → output flow
- **Mini Player** (floating window) - Compact quality display with output bitrate

### Performance Impact

**Enhancement Levels:**
- Subtle: ~5-10% CPU increase
- Moderate: ~10-15% CPU increase
- Aggressive: ~15-25% CPU increase

**Sound Field Presets:**
- All presets: ~5-10% additional CPU
- Bass Boost: ~8-12% additional CPU

**Combined (Clarity + Sound Field):**
- Total overhead: 15-35% depending on settings
- Still real-time capable on modern systems

### Recommended Combinations

**For Audiophile Listening:**
- Clarity: Subtle
- Sound Field: Classical or Off
- USB DAC: Enabled

**For Workout Music:**
- Clarity: Aggressive
- Sound Field: Bass Boost
- Output: Bluetooth speakers

**For Background Music:**
- Clarity: Moderate
- Sound Field: Jazz or Pop
- Output: Default

**For Critical Listening:**
- Clarity: Off
- Sound Field: Off
- USB DAC: Enabled

**Why High-Resolution Processing?**
- **24-bit** provides 144dB dynamic range (vs. 96dB for 16-bit)
- **96kHz** allows more precise filter calculations
- Less aliasing and quantization errors
- Better preservation of audio details

### Database Migration

Run this migration to add enhancement level and sound field preset settings:

```bash
python backend/migrations/add_clarity_and_soundfield_settings.py
```

**Database Schema:**
- `clarity_enhancement_level`: 'subtle', 'moderate', or 'aggressive' (default: 'moderate')
- `sound_field_preset`: 'jazz', 'metal', 'pop', 'classical', 'rock', 'electronic', 'bass_boost', or 'off' (default: 'off')

### API Integration

**Updated Endpoint:**
```
GET /api/audio/clarity-stream?path=/music/song.flac&enhancement_level=aggressive&sound_field_preset=rock
```

**Query Parameters:**
- `path` (required) - File path
- `start_time` (optional, default: 0) - Seek position
- `enhancement_level` (optional, default: 'moderate') - 'subtle', 'moderate', or 'aggressive'
- `sound_field_preset` (optional, default: 'off') - 'jazz', 'metal', 'pop', 'classical', 'rock', 'electronic', 'bass_boost', or 'off'

**Documentation:**
- **[Clarity Audio Guide](documents/CLARITY_AUDIO.md)** - Complete technical guide and configuration

---

## 📦 Electron Build Workflow

### Overview

The Electron desktop app bundles a portable Python distribution, creating a self-contained application that works without any system dependencies.

### Initial Setup

**First time only:**
```bash
# 1. Install Node dependencies
npm install

# 2. Download portable Python + install backend dependencies
./scripts/download-python.sh

# This script:
# - Downloads Python 3.11.10 from python-build-standalone
# - Extracts to python-dist/python/
# - Installs all requirements.txt dependencies
# - Creates ~200MB Python environment
```

**Verify Python setup:**
```bash
# Check Python exists
ls python-dist/python/bin/python3

# Verify backend dependencies installed
python-dist/python/bin/python3 -m pip list
```

### Development Workflow

**Run in development mode (hot-reload):**
```bash
npm run start:dev
```

This starts:
- Electron app with DevTools
- Backend using system Python (faster restarts)
- Frontend from `frontend/dist`

**Features in dev mode:**
- Hot-reload for frontend changes
- Backend auto-restart on code changes
- Full DevTools access
- Console logging

### Production Build Workflow

**Build self-contained .app:**
```bash
# Full production build with bundled Python
npm run build:mac:bundle
```

**Build steps:**
1. Frontend build (`npm run build` in frontend/)
2. Electron packaging with electron-builder
3. Python bundled from `python-dist/python/`
4. Backend code copied to `Resources/backend/`
5. `.app` created in `dist-electron/mac/`

**Output:**
- **App:** `dist-electron/mac/Newtro Library.app`
- **DMG:** `dist-electron/Newtro Library-1.0.0.dmg` (for distribution)
- **Size:** ~250MB (includes Python + dependencies)

### Testing the Built App

**Verify bundled Python:**
```bash
# Check Python exists in built app
ls -la "dist-electron/mac/Newtro Library.app/Contents/Resources/python/bin/python3"

# Check backend code bundled
ls -la "dist-electron/mac/Newtro Library.app/Contents/Resources/backend/"
```

**Run the built app:**
```bash
# Option 1: From Finder
# Navigate to dist-electron/mac/ and double-click "Newtro Library.app"

# Option 2: From terminal
open "dist-electron/mac/Newtro Library.app"
```

**Check app logs:**
```bash
# View backend logs
tail -f ~/Library/Application\ Support/Newtro\ Library/logs/newtro-*.log

# Or open log directory
open ~/Library/Application\ Support/Newtro\ Library/logs/
```

### Bundled Python Architecture

**Why Bundle Python?**
- ✅ Works when launched from Finder (no PATH issues)
- ✅ No "Python not found" errors
- ✅ Self-contained distribution
- ✅ Same Python version for all users
- ✅ Professional, production-ready

**Python Detection Priority:**
1. **Bundled Python** (production): `<app>/Contents/Resources/python/bin/python3`
2. **System Python** (development): Searches common paths (Homebrew, pyenv, etc.)

**Build Configuration:**

Located in `package.json`:
```json
"build": {
  "extraResources": [
    { "from": "backend", "to": "backend" },
    { "from": "python-dist/python", "to": "python" }
  ]
}
```

### App Structure

```
Newtro Library.app/
├── Contents/
│   ├── MacOS/
│   │   └── Newtro Library          # Electron executable
│   ├── Resources/
│   │   ├── app.asar                # Frontend code (Angular)
│   │   ├── backend/                # Backend code (FastAPI)
│   │   │   ├── app/
│   │   │   │   ├── main.py
│   │   │   │   └── routers/
│   │   │   └── requirements.txt
│   │   └── python/                 # Bundled Python 3.11.10
│   │       ├── bin/
│   │       │   └── python3
│   │       └── lib/
│   │           └── python3.11/
│   │               └── site-packages/  # All pip dependencies
│   └── Info.plist
```

### Available Scripts

| Script | Description |
|--------|-------------|
| `npm run start:dev` | Development mode with hot-reload |
| `npm run download:python` | Download and setup bundled Python |
| `npm run build:mac:bundle` | Production build with bundled Python |
| `npm run build:mac` | Build without Python (testing only) |

### Troubleshooting

**Backend services not available in bundled app:**
```bash
# Enable Debug Mode to diagnose
npm run start:debug                 # Launch with debug tab
# or
./dist-electron/mac/Newtro\ Library.app/Contents/MacOS/Newtro\ Library --debug-mode

# In the app:
# 1. Click 🔧 Debug tab
# 2. Check "Backend Connection" status
# 3. View "Backend Process Information"
# 4. Click "Restart Backend" if needed
# 5. Click "Load Logs" to view errors
# 6. Export debug info for support

# See documents/BACKEND_DEBUG_TOOL.md for full guide
```

**"Python not found" in built app:**
```bash
# Re-run Python setup
./scripts/download-python.sh

# Verify Python exists before building
ls python-dist/python/bin/python3

# Rebuild
npm run build:mac:bundle
```

**Backend doesn't start when double-clicked:**
```bash
# Check logs for errors
tail -f ~/Library/Application\ Support/Newtro\ Library/logs/newtro-*.log

# Common issues:
# - Backend dependencies missing
# - Port 8000 already in use
# - Database permission issues
```

**Missing backend dependencies:**
```bash
# Reinstall dependencies in bundled Python
cd backend
../python-dist/python/bin/python3 -m pip install -r requirements.txt

# Rebuild app
cd ..
npm run build:mac:bundle
```

**Build fails:**
```bash
# Clean build artifacts
rm -rf dist-electron/
rm -rf frontend/dist/

# Rebuild frontend
cd frontend && npm run build && cd ..

# Rebuild Electron app
npm run build:mac:bundle
```

**App too large (>500MB):**
- Normal size is ~250MB with bundled Python
- Check for duplicate Python installations
- Ensure base images not bundled accidentally

### Distribution

**For Mac App Store:**
See [Mac App Store Guide](documents/MAC_APP_STORE.md)

**For direct distribution:**
```bash
# Share the DMG file
dist-electron/Newtro Library-1.0.0.dmg

# Or zip the .app
cd dist-electron/mac
zip -r "Newtro Library.zip" "Newtro Library.app"
```

**For developers receiving the built app:**

Since the app is not code-signed, macOS Gatekeeper will block it from opening. Here are two workarounds:

**Option 1: Right-Click Override (Quick & Easy)**
1. Right-click (or Control-click) on "Newtro Library.app"
2. Select "Open" from the context menu
3. Click "Open" in the security dialog

Alternatively, use Terminal:
```bash
# Remove quarantine attribute
xattr -cr "/path/to/Newtro Library.app"

# Then open normally
open "/path/to/Newtro Library.app"
```

**Option 2: System Settings Override**
1. Try to open the app normally (it will be blocked)
2. Go to System Settings → Privacy & Security
3. Scroll down to find "Newtro Library was blocked..."
4. Click "Open Anyway"
5. Confirm by clicking "Open" in the dialog

> **Note:** These methods are needed because the app is unsigned. For production distribution, you would need to sign the app with an Apple Developer certificate. For development sharing, these workarounds are sufficient.

---

## ▶️ First Run Checklist
1. Connect NetMD device
2. Start stack / dev servers
3. Load Disc → confirm TOC
4. Save to Library & Disc
5. Test Auto Match / Manual Search
6. Reinsert disc → auto-recognition
7. Confirm UPnP visibility (if enabled)

---

## 🧪 Troubleshooting
| Problem | Likely Cause | Remedy |
|---------|--------------|--------|
| Device not found | Missing udev / permissions | Add rule, reconnect, use Chrome |
| Cannot write TOC | Write-protect / unsupported deck | Disable protect / verify NetMD support |
| UPnP not visible | Network isolation | Same subnet, firewall allow |
| SQLite locked | Multiple processes | Avoid parallel writers |
| Backend not responding | Process crashed or stopped | Use `pkill -f "uvicorn app.main:api"` then restart (see Managing Backend section) |

### Quick Operations Reference

| Task | Command |
|------|---------|
| **Electron** | |
| Setup Python | `./scripts/download-python.sh` |
| Dev mode | `npm run start:dev` |
| Production build | `npm run build:mac:bundle` |
| View logs | `tail -f ~/Library/Application\ Support/Newtro\ Library/logs/newtro-*.log` |
| **Backend (Local)** | |
| Check status | `curl http://localhost:8000/healthz` |
| Restart | `pkill -f "uvicorn app.main:api" && cd backend && nohup python3 -m uvicorn app.main:api --host 0.0.0.0 --port 8000 --reload > /tmp/newtro-backend.log 2>&1 &` |
| View logs | `tail -f /tmp/newtro-backend.log` |
| **UPnP** | |
| Check status | `curl http://localhost:8000/api/upnp/status` |
| Start broadcasting | `curl -X POST http://localhost:8000/api/upnp/start` |
| Test discovery | `python backend/app/upnp_test.py --timeout 5` |
| **USB DAC / Audio Quality** | |
| Check playback quality | `./scripts/check-playback-quality.sh` |
| Test quality settings | `./scripts/test-audio-quality.sh` |
| Test FLAC streaming | `./scripts/test-flac-streaming.sh` |
| Test all formats | `./scripts/test-audio-streaming.sh` |
| Open Audio MIDI Setup | `open -a "Audio MIDI Setup"` |
| Check DAC system format | `system_profiler SPAudioDataType \| grep -A 20` |

**For detailed guides, see:**
- **[USB DAC Audio Quality](documents/USB_DAC_AUDIO_QUALITY.md)** - USB DAC testing and troubleshooting

### UPnP Discovery Test
A helper script validates that the Newtro UPnP presence is broadcast and discoverable.

Run after starting the backend and calling `POST /api/upnp/start` (or after any action that triggers announcements).

Local (host Python):
```bash
python backend/app/upnp_test.py --timeout 5
```
Show all raw SSDP responses:
```bash
python backend/app/upnp_test.py --timeout 5 --show-all
```

Expected output (simplified):
```
Discovered 1 candidate response(s). Showing first:
USN: uuid:....::urn:schemas-upnp-org:device:MediaRenderer:1
LOCATION: http://<ip>:8000/upnp/device.xml
Device description retrieved and looks valid (contains MediaRenderer).
UPnP discovery test PASSED
```
If it fails with `No Newtro Library UPnP device discovered`:
* Ensure the service was started: `curl -X POST http://localhost:8000/api/upnp/start`
* Confirm network: host and test are on same subnet, no VPN blocking multicast
* Retry with longer timeout: `--timeout 10`
* Run with `--show-all` to inspect other devices’ replies.

---

Users can seamlessly **switch between playback sources** — either the **Wiim Mini** (a streamer capable of playing from online services or local media) or the **Newtro player** — directly from the web interface.  

In this setup, the **album library acts as a remote controller**, enabling users to start, stop, or navigate Newtro playback through the UPnP protocol.  
It effectively transforms the traditional Newtro player into a **network-aware, remotely controllable device**, while maintaining a purely local architecture without any IoT dependencies.

---

## 🌍 Local Network Streaming & Control

The platform supports:

* **Local UPnP streaming data**, viewable across the user’s LAN.
* Remote control from any device running a modern web browser.
* No dependency on external IoT servers or cloud services.
* True **"wireless remote"** functionality within the local environment — extending what Newtro was originally capable of.

---

## 🔗 Ecosystem Integration

### Integration with [Wiim Mini UI](https://github.com/chrishuangcf/wiim-mini-ui)

* Unified **web-based control** for both Wiim Mini and Newtro systems.
* Synchronization of album art, metadata, and playback status between both.
* **Wiim Mini** can output digital audio via **SPDIF** to the Newtro recorder — enabling digital re-recording.
* One web app to manage both the playback ecosystem and metadata, bridging retro and modern audio technology.

#### Wiim Mini Web UI, the select player screen - you will see Newtro as an available player option.
![wiim mini web ui](https://github.com/chrishuangcf/wiim-mini-ui/blob/main/assets/select_player.jpg)

#### The overall ecosystem concept:
![Ecosystem concept](/documents/images/md_wiim.png)
---

## ⚙️ Technical Architecture

### **Frontend (Angular + TypeScript)**

* Communicates with Newtro via **netmd.js** using WebUSB.
* Provides a modern UI for playback control, TOC editing, and metadata management.
* Supports cover art uploads, drag-and-drop editing, and UTF-8 display.

### **Backend (Python Microservices)**

* Built with **Flask** or **FastAPI**.
* Handles:

  * Disc signature computation and recognition
  * Metadata CRUD operations
  * Integration with external metadata sources (CDDB, Discogs, MusicBrainz)
  * TOC read/write synchronization
* Exposes RESTful APIs for the frontend to interact with.

### **Database (SQLite3)**

* Lightweight local database for:

  * Newtro signatures
  * Track and album metadata
  * Cover art caching
  * Local metadata library management

### **Electron Desktop Stack**

* **Electron main process**: launches and monitors the Python backend as a child process
* **Angular renderer**: served locally via Vite in development, packaged as static assets in production
* **Bundled runtime**: ships with portable Python + FFmpeg, enabling fully offline playback and metadata processing
* Unified through electron-builder for cross-platform distribution

---

## 🧠 Technology Stack Summary

| Component            | Technology                                                     |
| -------------------- | -------------------------------------------------------------- |
| **Frontend**         | Angular (TypeScript), netmd.js, WebUSB                         |
| **Backend**          | Python (Flask / FastAPI), REST API                             |
| **Database**         | SQLite3                                                        |
| **Deployment**       | Electron Builder (macOS/Windows/Linux installers)              |
| **Metadata Sources** | CDDB, Discogs, MusicBrainz                                     |
| **Integration**      | Wiim Mini UI, UPnP                                             |
| **Hardware**         | Newtro Recorder/Player via USB, Raspberry Pi Docking Station |

---

## 🏷️ Tag System

The application features a comprehensive **tag system** for organizing albums by genre, style, and mood. Tags are automatically fetched from MusicBrainz or can be manually managed.

### Key Features
* **Automatic tag extraction** from MusicBrainz (genres, styles like "electropop", "pop-punk", "alternative rock")
* **Tag filtering** in Album Library via dropdown menu
* **Clickable tag chips** on album cards for quick filtering
* **Tag display** showing up to 3 tags per album with gradient styling
* **RESTful API** for tag management (add, remove, list popular tags)

### Usage
1. **Automatic tagging**: Search MusicBrainz for an album → tags are automatically imported
2. **View tags**: Album cards display tags as styled chips
3. **Filter by tag**: Use "Filter by Tag" dropdown or click any tag chip
4. **Manual management**: Use API endpoints to add/remove tags

### API Endpoints
```bash
GET    /api/tags                          # Get all tags
GET    /api/tags/album/{album_id}        # Get album tags
POST   /api/tags/album/{album_id}/tags   # Add tags to album
DELETE /api/tags/album/{album_id}/tag/{tag_id}  # Remove tag
GET    /api/tags/popular?limit=20        # Get popular tags
```

### Database Migration
```bash
python3 -m backend.migrations.add_tags_system
```

**See [documents/TAG_SYSTEM.md](documents/TAG_SYSTEM.md) for complete documentation.**

---

## 📚 Documentation

### Core Guides
- **[Electron Guide](documents/ELECTRON_GUIDE.md)** - Desktop build and distribution workflow
  - Development vs production launch modes
  - Packaging for macOS, Windows, and Mac App Store
  - Auto-updates, notarization, and signing notes
  - Debug tooling and backend orchestration details

- **[USB DAC Audio Quality](documents/USB_DAC_AUDIO_QUALITY.md)** - USB DAC testing and setup
  - Device detection and authorization
  - Testing procedures for all audio formats
  - Browser requirements and troubleshooting
  - Sample rate handling and performance tips

### Audio Quality & Exclusive Mode
- **[Exclusive Mode Guide](documents/EXCLUSIVE_MODE_GUIDE.md)** - Bit-perfect audio playback
  - What is exclusive mode and how it works
  - Setup and configuration steps
  - Verification and troubleshooting
  - Performance comparison vs Web Audio API
- **[USB DAC Audio Quality](documents/USB_DAC_AUDIO_QUALITY.md)** - Quality settings
  - Sample rate and bit depth configuration
  - FFmpeg transcoding pipeline
  - Database schema and backend integration
  - UI behavior and dynamic controls
- **[Native Audio Fix](documents/NATIVE_AUDIO_FIX.md)** - Technical implementation
  - Root cause analysis of quality issues
  - WebAudioService integration details
  - afplay implementation with temp files
  - Before/after comparison and debugging

### Additional Documentation
- **[Backend Debug Tool](documents/BACKEND_DEBUG_TOOL.md)** - Comprehensive debugging guide
  - Backend connectivity diagnostics
  - Process monitoring and logs
  - Endpoint testing
  - Troubleshooting backend issues
- **[Debug Mode](documents/DEBUG_MODE.md)** - Debug mode implementation details
  - How debug mode works
  - Enabling/disabling debug features
  - Security considerations
- **[Tag System](documents/TAG_SYSTEM.md)** - Genre and style tagging system
- **[Electron Guide](documents/ELECTRON_GUIDE.md)** - Desktop app architecture
- **[Mac App Store](documents/MAC_APP_STORE.md)** - Mac App Store submission
- **[Code Signing](documents/CODE_SIGNING.md)** - Code signing for macOS

### Implementation Docs
- **[USB_DAC_SETTINGS_IMPLEMENTATION.md](USB_DAC_SETTINGS_IMPLEMENTATION.md)** - USB DAC feature implementation details
- **[USB_DAC_IMPLEMENTATION.md](USB_DAC_IMPLEMENTATION.md)** - Technical architecture
- **[USB_DAC_QUICK_START.md](USB_DAC_QUICK_START.md)** - Quick integration guide

---

## 🚀 Future Enhancements
* UPnP richer media metadata push
* PWA / offline mode
* Export/import library bundle
* Tag cloud visualization
* Multi-tag filtering
* Smart tag suggestions based on album similarity

