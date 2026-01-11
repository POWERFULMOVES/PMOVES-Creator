# PMOVES-Creator (ComfyUI) Hybrid Standalone Dockerfile
# Multi-stage build for efficient layering and smaller final image

ARG CUDA_VERSION=12.4.0
ARG CUDNN_VERSION=9
ARG BASE_IMAGE=nvidia/cuda:${CUDA_VERSION}-cudnn${CUDNN_VERSION}-runtime

FROM ${BASE_IMAGE} AS base

# Build stage with development tools
FROM base AS builder

# Prevent interactive prompts during package installation
ENV DEBIAN_FRONTEND=noninteractive \
    PYTHONUNBUFFERED=1 \
    PYTHONDONTWRITEBYTECODE=1 \
    PIP_DISABLE_PIP_VERSION_CHECK=1 \
    PIP_NO_CACHE_DIR=1 \
    PIP_DEFAULT_TIMEOUT=100

WORKDIR /build

# Install system dependencies
RUN apt-get update && apt-get install -y --no-install-recommends \
    # Python build essentials
    python3.10 \
    python3.10-venv \
    python3-pip \
    python3-dev \
    # Image/video processing
    ffmpeg \
    libsm6 \
    libxext6 \
    libxrender-dev \
    libgl1-mesa-glx \
    # Git for cloning custom nodes
    git \
    # Network utilities
    curl \
    wget \
    # Cleanup
    && rm -rf /var/lib/apt/lists/* \
    && apt-get clean

# Create virtual environment
RUN python3.10 -m venv /opt/venv
ENV PATH="/opt/venv/bin:$PATH"

# Upgrade pip and install wheel
RUN pip install --upgrade pip setuptools wheel

# Install PyTorch with CUDA support
ARG TORCH_VERSION=2.5.1
RUN pip install torch==${TORCH_VERSION} torchvision torchaudio --index-url https://download.pytorch.org/whl/cu124

# Install ComfyUI core dependencies
COPY requirements.txt /build/
RUN pip install -r requirements.txt || true  # Continue if some packages fail

# Final stage - minimal runtime image
FROM base AS runtime

ENV DEBIAN_FRONTEND=noninteractive \
    PYTHONUNBUFFERED=1 \
    PYTHONDONTWRITEBYTECODE=1 \
    COMFYUI_HOST=0.0.0.0 \
    COMFYUI_PORT=8188

WORKDIR /app

# Install runtime dependencies only
RUN apt-get update && apt-get install -y --no-install-recommendends \
    ffmpeg \
    libsm6 \
    libxext6 \
    libxrender-dev \
    libgl1-mesa-glx \
    curl \
    git \
    && rm -rf /var/lib/apt/lists/* \
    && apt-get clean

# Copy Python environment from builder
COPY --from=builder /opt/venv /opt/venv
ENV PATH="/opt/venv/bin:$PATH"

# Copy ComfyUI source
COPY . /app/

# Create directories for models and output
RUN mkdir -p /app/models /app/output /data/hf /data/cache

# Set up proper permissions for PMOVES branded deployment
RUN useradd -m -u 65532 -s /bin/bash pmoves || true && \
    chown -R pmoves:pmoves /app /data || true

# Set environment for cache persistence
ENV HF_HOME=/data/hf \
    HUGGINGFACE_HUB_CACHE=/data/hf \
    XDG_CACHE_HOME=/data/cache

# Expose ComfyUI port
EXPOSE 8188

# Health check
HEALTHCHECK --interval=30s --timeout=10s --retries=3 --start-period=60s \
    CMD curl -f http://localhost:8188/system_stats || exit 1

# Run as non-root user (optional - comment out if permission issues occur)
# USER pmoves

# Start ComfyUI
CMD ["python", "main.py", "--listen", "0.0.0.0", "--port", "8188"]
