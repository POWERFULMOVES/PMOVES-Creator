# MiniMax H3 Ultra — ComfyUI lane

Blueprints (in `blueprints/`):

- `Video+Audio Generation (MiniMax H3 Ultra).json` — 96-node graph, FL2VA/REF2VA
  synchronized video+audio generation.
- `Video+Audio Generation (MiniMax H3 Ultra Turbo LoRA).json` — same graph with the
  4-step Turbo LoRA schedule.

## Required models

All hosted at `huggingface.co/Aitrepreneur/FLX` (see installers for exact URLs):

| Slot | File |
|---|---|
| text_encoders | `qwen3vl_32b_minimax_h3_int8_convrot.safetensors` |
| diffusion_models | `minimax_h3_fl2va_pruned_int8_convrot.safetensors` |
| diffusion_models | `minimax_h3_ref2va_pruned_int8_convrot.safetensors` |
| vae | `minimax_h3_video_vae_fp16.safetensors` + `minimax_h3_audio_vae_fp32.safetensors` |
| loras | `minimax_h3_turbo_4step_ckpt500_comfyui_pruned.safetensors` |

## Required custom nodes

- `ComfyUI-Spectrum-MiniMax-H3` (xmarre) — the H3 node pack
- `ComfyUI-KJNodes` — PMOVES fork: `POWERFULMOVES/Pmoves-ComfyUI-KJNodes`
- `ComfyUI-VideoHelperSuite`, `rgthree-comfy`, `ComfyUI-Manager`

## Installers (provenance: Aitrepreneur one-click V1, reviewed 2026-08-06)

- `MINIMAX_H3_ULTRA-COMFYUI-MANAGER_AUTO_INSTALL.bat` — full Windows-portable
  ComfyUI v0.30.0 + nodes + models from scratch
- `MINIMAX_H3_ULTRA-MODELS-NODES_INSTALL.bat` — nodes + models into an existing install
- `MINIMAX_H3_ULTRA-AUTO_INSTALL-RUNPOD.sh` — RunPod variant

These target a standalone portable install; inside PMOVES the same models/nodes land
via `docker-compose.pmoves.yml` volumes. The equivalent capability is also native in
Maestro ≥1.6.0 (H3 Omni) — this ComfyUI lane is the raw-graph control surface.
